(defproject todo "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure       "1.8.0"]
                 [org.clojure/clojurescript "1.9.946"]
                 [org.clojure/core.async "0.4.474"]
                 [funcool/promesa "1.9.0"]
                 [com.taoensso/timbre "4.10.0"]]
  :plugins [[lein-cljsbuild "1.1.7"]]
  :cljsbuild {
    :builds [{
        ; The path to the top-level ClojureScript source directory:
        :source-paths ["src/server"]
        ; The standard ClojureScript compiler options:
        ; (See the ClojureScript compiler documentation for details.)
        :compiler {
          :main "server.core"
          :output-to "./server.js"  ; default: target/cljsbuild-main.js
          :npm-deps {:nedb "1.8.0"
                     :express "4.16.2"
                     :body-parser "1.18.2"
                     :cors "2.8.4"
                     :watson-developer-cloud "3.0.6"
                     :socket.io "2.0.4"} 
          :install-deps true 
          :target :nodejs
          :optimizations :none}}]})
  ;:cljs-lambda {:compiler
                ;{:inputs  ["src"]
                 ;:options {:output-to     "target/todo/todo.js"
                           ;:output-dir    "target/todo"
                           ;:target        :nodejs
                           ;:language-in   :ecmascript5
                           ;:optimizations :none}}})
