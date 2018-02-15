(require 'cljs.build.api)

(cljs.build.api/build "src/add"
  {:main 'add.core
   :output-to "add.js"
   ;:npm-deps {:nedb "1.8.0"}
   :npm-deps {:left-pad "1.1.3"} ;; NEW
   :install-deps true
   :optimizations :none
   :target :nodejs})
