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
            ;[taoensso.timbre :as timbre :refer-macros [log spy]]
  )
  (:require-macros [cljs.core.async.macros :refer [go]])
)
; TODO: use cords var cors = require('cors')
(nodejs/enable-util-print!)
(def log (.-log js/console))
; Load global resoruces
(def faketxt "The quick brown fox jumped over the lazy dog. Little did the fox know the dog was laying a trap for him. As soon as the foxed landed a snap of jaws and this rear leg was mangled")
(def db (nedb. (js-obj "filename" "./dbs/updates" "autoload" true))) ;load db

; Set up express server with socket.io
(def app (express))
(def http (nodejs/require "http")) 
(def server (.Server http app)) 
(def io (s server))
; TODO: send user inital set up updates

;(.on io "connection" #(log {:socket (.-client %)}))
  ;socket.on('chat message', function(msg){
    ;console.log('message: ' + msg);
  ;});
(.on io "connection" #(.on % "word" (fn [worddata] 
  (-> worddata
      ((fn [d] (js->clj d :keywordize-keys true)))
      ;((fn [d] (:alternatives (first (:transcript d)))))
      ((fn [d] (:alternatives d)))
      ((fn [d] (first d)))
      ;((fn [d] (pretty/pprint d)))
      ((fn [d] (:transcript d)))
      ;((fn [d] (println d)))
      ((fn [d] (let [bits (str/split d #"\s") user "travis"]
        (do
          (go (pretty/pprint {:cword (<! (currentWord))})) 
          (pretty/pprint {:bits bits :user user})
          (doall (->> bits
            (map (fn [x] (put! addQue {:word x :user user})))
          ))
        )
      )))
    )
)))

;io.on('connection', function(client) {
    ;console.log('Client connected...');
    ;client.on('join', function(data) {
        ;console.log(data);
    ;});
;(. app (use (. cors nil)))
(.use app (cors nil))
(. app (use (.json body-parser nil)))
;(def state (atom [{:text "get milk" :status 0}]))


;(defn addUpdate [userstr start end] 
  ;(p/promise (fn [resolve reject]
    ;;(cljs.pprint/pprint {:action "adding update" :userstr userstr :start start :end end})
    ;(.insert db (js-obj "userstr" userstr "start" start "end" end) (fn [err res] 
      ;(if (not err) (resolve {:err err :res res}) (reject err)) 
    ;))
  ;))
;)

;alert((date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear());
;new SimpleDateFormat("MM/dd/yyyy").format(new Date(timeStampMillisInLong));
;(defn curDate []
  ;(.format (new js/SimpleDateFormat "MM/dd/yyyy") (js/Date. js/timeStampMillisInLong))
;)
;(println (curDate))
;; CORE ASYNC EXAMPLE
;(defn jsonp [uri]
  ;(let [out (chan)
        ;req (Jsonp. (Uri. uri))]
    ;(.send req nil (fn [res] (put! out res)))
    ;out))
;(go (.log js/console (<! (jsonp (query-url "cats")))))

(defn allUpdates [] 
  (let [c (chan)]
    ;(.readFile (nodejs/require "fs") "path/to/file" "utf8" (fn [err, res] (go (>! c res))) (<! c)))
    (-> (.find db (js-obj))
        (.sort  (js-obj "start" -1))
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
        (.sort  (js-obj "start" -1))
        (.limit 1)
        (.exec (fn [err res]
          (-> res
             (#(first %))
             (#(js->clj % :keywordize-keys true))
             (#(put! c %))
          )
        ))
    )
    c
  )
)
;(go (pretty/pprint (<! (latestUpdate)))) 

(defn currentWord []
  (let [c (chan)]
    (go (-> 
        (<! (latestUpdate))
        (#(:end %))
        ((fn [index] (let [words (str/split faketxt #"\s")]
          (nth words index))))
        ;TODO: remove punctation and case
        (#(put! c %))
    ))
  c
  )
)
(go (pretty/pprint (<! (currentWord)))) 
;(.insert db 
         ;(js-obj "user" user "start" (+ (:end cupdate) 1) "end" (+ (:end cupdate) 2)); TODO: add color
         ;(fn [err res] 
         ;(if (not err) (resolve res) (reject err)) 

(def addQue (chan))
(go (while true
  (let [addMap (<! addQue) cword (<! (go (<!(currentWord)))) lupdate (<! (go (<!(latestUpdate))))]
   (pretty/pprint {:word (:word addMap) :user (:user addMap) :cword cword :lupdate lupdate})
   (if (and (= cword (:word addMap)) (= (:user addMap) (:user lupdate))) 
       (-> (.update db 
             (js-obj "_id" (:_id lupdate))
             (js-obj "$set" (js-obj "end" (+ (:end lupdate) 1)))
             (js-obj "multi" true)
             (fn [err res] 
               ;(if (not err) (resolve res) (reject err)) 
               (do (println "Updated Last update"))
             )
           )
        )
   )

   (if (and (= cword (:word addMap)) (not= (:user addMap) (:user lupdate))) 
       (-> (.insert db 
             (js-obj "user" (:user addMap)"start" (+ (:end lupdate) 1) "end" (+ (:end lupdate) 2))
             (fn [err res] 
               ;(if (not err) (resolve res) (reject err)) 
               (do (println "Inserted Update"))
             )
           )
        )
   )
  )
))
;(pretty/pprint (go (<!(latestUpdate))))
;(put! addQue {:word "a" :user "travis"})
;(put! addQue {:word "him." :user "kelsey"})
;(put! addQue {:word "As" :user "jaci"})
;(put! addQue {:word "soon" :user "jaci"})
;(put! addQue {:word "as" :user "travis"})
;(. app (post "/add" 
  ;(fn [req res] 
    ;(.json res (clj->js @state))
    ;(swap! state #(conj % (js->clj req.body))) 
    ;(js/console.log "req =>" (pr-str req.body))
  ;)
;))           ;(fn [req res] (. res (send "Hello world")))))

;(. app (post "/check" 
  ;(fn [req res] 
    ;(cljs.pprint/pprint req)
    ;;(-> (addUpdate "travis 12/01/2009" 6 2)
      ;;(p/then #(.json res (clj->js %)))
      ;;(p/then #(println "Task finished" %))
      ;;(p/catch #(println "Timeout" %))
    ;;)
  ;)
;))

;(. app (post "/addupdate" 
  ;(fn [req res] 
    ;(-> 
      ;(addUpdate req.body.userstr req.body.start req.body.end)
      ;(p/then #(.json res (clj->js %)))
        ;;io.emit('an event sent to all connected clients'); // main namespace
        ;;(log req)
      ;;(p/then #(let [data (clj->js %)]
        ;;(do
          ;;(.json res (clj->js data))
          ;;(.emit io "update" data)
        ;;)
      ;;))
      ;(p/then #(println "addupdate finished" %))
      ;(p/catch #(println "Timeout" %))
    ;)
  ;)
;))


;(-> (latestUpdate)
  ;;(p/then #(type %))
  ;(p/then #(:end %))
  ;;(p/then #(get % :end))
  ;(p/then #(pretty/pprint %))
;)
;// Set an existing field's value
;db.update({ system: 'solar' }, { $set: { system: 'solar system' } }, { multi: true }, function (err, numReplaced) {
  ;// numReplaced = 3
  ;// Field 'system' on Mars, Earth, Jupiter now has value 'solar system'
;});
     ; test if word is the next word needed
    ;; if it is the next word needed add create an update
    ;; while creating an update check if the last update was make by the same user as the last update
    ;; if the same user string update that update entry incrimenting the end property
    ;; if not create a new user string and check that against a database of colors 
    ;; add the newly created userstr, color, start and end to the updates table
    ;; if needed add the user string to the color table
    ;(-> 

      
    ;)
  ;)
;)

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
(def sttAuthService (new watson-developer-cloud/AuthorizationV1 (js-obj "username" "1b860fd3-bf11-4cc6-a962-5bac776d5744" "password" "LZ2TNegMz6NX")))
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
