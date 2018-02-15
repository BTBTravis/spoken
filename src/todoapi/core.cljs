(ns todoapi.core
  (:require [cljs.nodejs :as nodejs]
            [nedb]))
(nodejs/enable-util-print!)
(def db (nedb. (js-obj "filename" "./todos" "autoload" true))) ;load db

(defn add [text] (.insert db (js-obj "txt" text "status" 0) )) 

