(ns server.core
  (:require [cljs.nodejs :as nodejs]
            [nedb]
            [express]
            [body-parser]
            [promesa.core :as p]
            ))
(nodejs/enable-util-print!)
;, db = new Datastore({ filename: 'path/to/datafile', autoload: true });
;:w
;db.insert(doc, function (err, newDoc) {   // Callback is optional
  ;// newDoc is the newly inserted document, including its _id
  ;// newDoc has no key called notToBeSaved since its value was undefined
;})
;const express = require('express')

;const app = express()

;app.get('/', (req, res) => res.send('Hello World!'))

;app.listen(3000, () => console.log('Example app listening on port 3000!'))

(def db (nedb. (js-obj "filename" "./updates" "autoload" true))) ;load db

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
    (.find db (js-obj) (fn [err res] 
      (if (not err) (resolve {:err err :res res}) (reject err)) 
    ))
  ))
)
;defn getAllUpdates [cb] (
  ;(cljs.pprint/pprint {:action "getting all updates"})
  ;(.find db (js-obj) cb) 
;))

(def app (express))
(. app (use (.json body-parser nil)))
(def state (atom [{:text "get milk" :status 0}]))
(. app (get "/list" 
  (fn [req res] (.json res (clj->js @state)))
))

(. app (post "/add" 
  (fn [req res] 
    (.json res (clj->js @state))
    (swap! state #(conj % (js->clj req.body))) 
    (js/console.log "req =>" (pr-str req.body))
  )
))           ;(fn [req res] (. res (send "Hello world")))))

(. app (post "/addupdate" 
  (fn [req res] 
    (-> (addUpdate "travis 12/01/2009" 6 2)
      (p/then #(.json res (clj->js %)))
      (p/then #(println "Task finished" %))
      (p/catch #(println "Timeout" %))
    )
  )
))

(. app (post "/getallupdates" 
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
  (println "Test2")
  (.listen app 3000)
)   

(set! *main-cli-fn* -main)
