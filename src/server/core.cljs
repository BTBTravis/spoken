(ns server.core
  (:require [cljs.nodejs :as nodejs]
            [cljs.pprint :as pretty]
            [nedb]
            [clojure.string :as str]
            [express]
            [body-parser]
            [cors]
            [promesa.core :as p]
            [socket.io :as s]
            ;[taoensso.timbre :as timbre :refer-macros [log spy]]
))
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

;io.on('connection', function(client) {
    ;console.log('Client connected...');

    ;client.on('join', function(data) {
        ;console.log(data);
    ;});
;(. app (use (. cors nil)))
(.use app (cors nil))
(. app (use (.json body-parser nil)))
;(def state (atom [{:text "get milk" :status 0}]))


(defn addUpdate [userstr start end] 
  (p/promise (fn [resolve reject]
    ;(cljs.pprint/pprint {:action "adding update" :userstr userstr :start start :end end})
    (.insert db (js-obj "userstr" userstr "start" start "end" end) (fn [err res] 
      (if (not err) (resolve {:err err :res res}) (reject err)) 
    ))
  ))
)

(defn getAllUpdates [] 
  (p/promise (fn [resolve reject]
    ;(cljs.pprint/pprint {:action "adding update" :userstr userstr :start start :end end})
    (.exec (.sort (.find db (js-obj)) (js-obj "start" 1)) (fn [err res] 
      (if (not err) (resolve {:err err :res res}) (reject err)) 
    ))
  ))
)
;defn getAllUpdates [cb] (
  ;(cljs.pprint/pprint {:action "getting all updates"})
  ;(.find db (js-obj) cb) 
;))

;(. app (get "/list" 
  ;(fn [req res] (.json res (clj->js @state)))
;))

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

(. app (post "/addupdate" 
  (fn [req res] 
    (-> 
      (addUpdate req.body.userstr req.body.start req.body.end)
      (p/then #(.json res (clj->js %)))
        ;io.emit('an event sent to all connected clients'); // main namespace
        ;(log req)
      ;(p/then #(let [data (clj->js %)]
        ;(do
          ;(.json res (clj->js data))
          ;(.emit io "update" data)
        ;)
      ;))
      (p/then #(println "addupdate finished" %))
      (p/catch #(println "Timeout" %))
    )
  )
))

(defn latestUpdate [] 
  (->  
    (p/promise (fn [resolve reject]
        (-> (.find db (js-obj))
          (.sort  (js-obj "start" -1))
          (.limit 1)
          (.exec (fn [err res] 
            (if (not err) (resolve res) (reject err)) 
          ))
        )
    ))
    (p/then #(first %))
    ;(p/then #(do (pretty/pprint %) (js->clj % :keywordize-keys true))); log and return
    (p/then #(js->clj % :keywordize-keys true)); just return
  )
)
;(-> (latestUpdate)
  ;;(p/then #(type %))
  ;(p/then #(:end %))
  ;;(p/then #(get % :end))
  ;(p/then #(pretty/pprint %))
;)
(defn currentWord []
  (-> (latestUpdate)
      (p/then #(:end %))
      (p/then (fn [index] (let [words (str/split faketxt #"\s")]
        (nth words index))))
      ;(p/then #(pretty/pprint %))
  )
)
;// Set an existing field's value
;db.update({ system: 'solar' }, { $set: { system: 'solar system' } }, { multi: true }, function (err, numReplaced) {
  ;// numReplaced = 3
  ;// Field 'system' on Mars, Earth, Jupiter now has value 'solar system'
;});
(. app (post "/addword" 
  (fn [req res] (let [bits (str/split req.body.str #"\s")
                      user req.body.user]
    (do
      (println (-> (currentWord) (p/then #(pretty/pprint {:cword %}))))
      (pretty/pprint (->> bits
          (map #(let [promises (p/all [(latestUpdate) (currentWord)])]
            (p/then promises  (fn [[cupdate cword]]
              (if (and (= cword %) (= user (:user cupdate))) (do
              ;(if true (do
                  (pretty/pprint {:cupdate cupdate :cword cword :word % :if (= cword %) :if2 (not= user (:user cupdate))} )
                  (->
                    (p/promise (fn [resolve reject]
                      (-> (.update db 
                            (js-obj "_id" (:_id cupdate))
                            (js-obj "$set" (js-obj "end" (+ (:end cupdate) 1)))
                            (js-obj "multi" true)
                            (fn [err res] 
                              (if (not err) (resolve res) (reject err)) 
                            ))
                      )
                    ))
                    (p/then (fn [x] (println "updated last db entry" x)))
                  )
                  (println "sent promise to update last entry") %
                ) (do (println "skipping updating last entry") %) )
            ))
          ))
          (map #(let [promises (p/all [(latestUpdate) (currentWord) %])]
            (p/then promises  (fn [[cupdate cword word]]
              (if (and (= cword word) (not= user (:user cupdate))) (do
              ;(if true (do
                  ;(pretty/pprint {:cupdate cupdate :cword cword :word %})
                  (pretty/pprint {:cupdate cupdate :cword cword :word % :wordp word :if (= cword %) :if2 (not= user (:user cupdate))} )
                  (->
                    (p/promise (fn [resolve reject]
                      (-> (.insert db 
                            (js-obj "user" user "start" (+ (:end cupdate) 1) "end" (+ (:end cupdate) 2)); TODO: add color
                            (fn [err res] 
                              (if (not err) (resolve res) (reject err)) 
                            ))
                      )
                    ))
                    (p/then (fn [x] (println "added new db entry" x)))
                  )
                  (println "sent promise to add new entry") %
                ) (do (println "skipping adding new entry") %) )
            ))
          ))
      ))
      (pretty/pprint {:bits bits :user user})
      (.json res (clj->js {:status 200}))
    )
  ))
))

             ;(#(p/all %))
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

(. app (get "/getallupdates" 
  (fn [req res] 
    (-> (getAllUpdates)
      (p/then #(.json res (clj->js %)))
      (p/then #(println "Task finished" %))
      (p/catch #(println "Timeout" %))
    )
  )
))

;(defn addUpdate [userstr start end cb] 
;(.stringify js/JSON (clj->js {:key "value"}))
(defn -main [& args]
  ;(def db (nedb. (js-obj "filename" "./todos" "autoload" true))) ;load db
  ;(.insert db (js-obj "txt" "go to british library" "status" 0) ) 
  ;(js/console.log "nedb =>" (pr-str db))
  ;(println  "fuck the world"))
  ;(println "Test2")
  ;(.listen app 3000)
  (.listen server 3000)
)   

(set! *main-cli-fn* -main)
