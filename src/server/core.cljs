(ns server.core
  (:require [cljs.nodejs :as nodejs]
            [cljs.pprint :as pretty]
            [nedb]
            [cljs.core.async :as async :refer [put! chan <! >! close!]]
            [clojure.string :as str]
            [express]
            [body-parser]
            [cors]
            [watson-developer-cloud]
            [promesa.core :as p]
            [socket.io :as s]
  )
  (:require-macros [cljs.core.async.macros :refer [go]])
)
; TODO: use cords var cors = require('cors')
(nodejs/enable-util-print!)
(def log (.-log js/console))
; Load global resoruces
(def faketxt "Design Patterns Elements of Reusable Object Oriented Software is a software engineering book describing software design patterns. The book is divided into two parts, with the first two chapters exploring the capabilities and pitfalls of object oriented programming and the remaining chapters describing twenty three classic software design patterns")
(def db (nedb. (js-obj "filename" "./dbs/updates" "autoload" true))) ;load db

; Set up express server with socket.io
(def app (express))
(def http (nodejs/require "http")) 
(def server (.Server http app)) 
(def io (s server))

(.on io "connection" 
  #(do (.on % "word" (fn [worddata] 
                        (-> worddata
                          ((fn [d] (js->clj d :keywordize-keys true)))
                          ((fn [d] (identity 
                            { :words (-> d
                                         (:words)
                                         (:alternatives)
                                         (first)
                                         (:transcript)) 
                               :user (:user d)})))
                           ;((fn [d] (pretty/pprint d)))
                           ((fn [d] (let [bits (str/split (:words d) #"\s") uname (:user d)]
                             (do
                               (go (pretty/pprint {:cword (<! (currentWord))})) 
                               (pretty/pprint {:bits bits :user uname})
                               (doall (->> bits
                                           (map (fn [x] (put! addQue {:word x :user uname})))
                                           ))
                               )
                             )))
                           ))
            )))

(.use app (cors nil))
(. app (use (.json body-parser nil)))

(defn allUpdates [] 
  (let [c (chan)]
    ;(.readFile (nodejs/require "fs") "path/to/file" "utf8" (fn [err, res] (go (>! c res))) (<! c)))
    (-> (.find db (js-obj))
        (.sort  (js-obj "order" -1))
        (.exec (fn [err res] 
          (do 
            ;(pretty/pprint res)
            (put! c res)
          )
        ))
    )
    c
  )
)
;(go (pretty/pprint (<! (allUpdates)))) 
(defn latestUpdate [] 
  (let [c (chan)]  
    (-> (.find db (js-obj))
        (.sort  (js-obj "order" -1))
        (.limit 1)
        (.exec (fn [err res]
          (if (>  (count res) 0) 
            (-> res
               (#(first %))
               (#(js->clj % :keywordize-keys true))
               ;(#(js->clj (:wordIds %)))
               (#(put! c %))
            )
            ;(#(put! c {:user "none" :wordIds [-1]}))
            (#(put! c false))
          )
        ))
    )
    c
  )
)
(go (pretty/pprint (<! (latestUpdate)))) 
;(go (pretty/pprint (type (:wordIds (<! (latestUpdate)))) ))

(defn currentIndex []
  (let [c (chan)]
    (go (-> 
        (<! (latestUpdate))
        (#(if (map? %)  (+ (last (:wordIds %)) 1) 0))
        (#(put! c %))
    ))
  c
  )
)
;(go (pretty/pprint (<! (currentIndex))))

(defn currentWord []
  (let [c (chan)]
    (go (-> 
        (<! (currentIndex))
        ((fn [index] (let [words (str/split faketxt #"\s")]
          (nth words index))))
        (#(str/lower-case %)) 
        (#(str/replace % #"\.|,|-" "")); remove . and ,
        (#(put! c %))
    ))
  c
  )
)
(go (pretty/pprint (<! (currentWord)))) 

(defn sendUpdate []
  (go (.emit io "update" (.stringify js/JSON (clj->js (<! (allUpdates)))))))
;(sendUpdate)
;(.insert db 
         ;(js-obj "user" user "start" (+ (:end cupdate) 1) "end" (+ (:end cupdate) 2)); TODO: add color
         ;(fn [err res] 
         ;(if (not err) (resolve res) (reject err)) 

(def addQue (chan))
(go (while true
  (let [addMap (<! addQue) cword (<! (go (<!(currentWord)))) cindex (<! (go (<!(currentIndex)))) lupdate (<! (go (<!(latestUpdate))))]
   (pretty/pprint {:word (:word addMap) :user (:user addMap) :cword cword :lupdate lupdate})
   (if (and (= cword (:word addMap)) (= (:user addMap) (:user lupdate))) 
       (-> (.update db 
             (js-obj "_id" (:_id lupdate))
             (js-obj "$set" (js-obj 
               "wordIds" (clj->js (conj (:wordIds lupdate) cindex))
             ))
             (js-obj "multi" true)
             (fn [err res] 
               ;(if (not err) (resolve res) (reject err)) 
               ;(do (println "Updated Last update"))
               (println "Updated Last update")
               (sendUpdate)
             )
           )
        )
   )

   (if (and (= cword (:word addMap)) (not= (:user addMap) (:user lupdate))) 
       (-> (.insert db 
             (js-obj 
               "user" (:user addMap) 
               "wordIds" (clj->js [cindex])
               "order" cindex
             )
             (fn [err res] 
               ;(if (not err) (resolve res) (reject err)) 
               (println "Inserted Update")
               (sendUpdate)
             )
           )
        )
   )
  )
))

(. app (post "/addword" 
  (fn [req res] (let [bits (str/split req.body.str #"\s")
                      user req.body.user]
    (do
      (go (pretty/pprint {:cword (<! (currentWord))})) 
      ;(map #(put! addQue %) bits)
      (doall (->> bits
        (map #(put! addQue %))
      ))
      (pretty/pprint {:bits bits :user user})
      (.json res (clj->js {:status 200}))
    )
  ))
))


(. app (get "/getallupdates" 
  (fn [req res] 
    (do
      (println "GET: /getallupdates")
      (go (.json res (clj->js (<! (allUpdates))))) 
    )
  )
))

;;WATSON AUTH STUFF
;var sttAuthService = new watson.AuthorizationV1(
  ;Object.assign(
    ;{
      ;username: process.env.SPEECH_TO_TEXT_USERNAME, // or hard-code credentials here
      ;password: process.env.SPEECH_TO_TEXT_PASSWORD
    ;},
    ;vcapServices.getCredentials('speech_to_text') // pulls credentials from environment in bluemix, otherwise returns {}
  ;)
;);
(def sttAuthService (new watson-developer-cloud/AuthorizationV1 (js-obj "username" (aget js/process.env "IBMUSER") "password" (aget js/process.env "IBMPW"))))
;app.use('/api/speech-to-text/token', function(req, res) {
  ;sttAuthService.getToken(
    ;{
      ;url: watson.SpeechToTextV1.URL
    ;},
    ;function(err, token) {
      ;if (err) {
        ;console.log('Error retrieving token: ', err);
        ;res.status(500).send('Error retrieving token');
        ;return;
      ;}
      ;res.send(token);
    ;}
  ;);
;});

(.use app "/api/speech-to-text/token" (fn [req res]
  (.getToken sttAuthService 
    (js-obj "url" watson-developer-cloud/SpeechToTextV1.URL) 
    (fn [err, token] (.send res token))
  )
))

(defn -main [& args]
  (.listen server (js/parseInt (aget js/process.env "PORT")))
)   

(set! *main-cli-fn* -main)
