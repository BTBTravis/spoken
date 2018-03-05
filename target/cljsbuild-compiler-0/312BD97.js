goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14553__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14553 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14554__i = 0, G__14554__a = new Array(arguments.length -  0);
while (G__14554__i < G__14554__a.length) {G__14554__a[G__14554__i] = arguments[G__14554__i + 0]; ++G__14554__i;}
  args = new cljs.core.IndexedSeq(G__14554__a,0,null);
} 
return G__14553__delegate.call(this,args);};
G__14553.cljs$lang$maxFixedArity = 0;
G__14553.cljs$lang$applyTo = (function (arglist__14555){
var args = cljs.core.seq(arglist__14555);
return G__14553__delegate(args);
});
G__14553.cljs$core$IFn$_invoke$arity$variadic = G__14553__delegate;
return G__14553;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14556__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14556 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14557__i = 0, G__14557__a = new Array(arguments.length -  0);
while (G__14557__i < G__14557__a.length) {G__14557__a[G__14557__i] = arguments[G__14557__i + 0]; ++G__14557__i;}
  args = new cljs.core.IndexedSeq(G__14557__a,0,null);
} 
return G__14556__delegate.call(this,args);};
G__14556.cljs$lang$maxFixedArity = 0;
G__14556.cljs$lang$applyTo = (function (arglist__14558){
var args = cljs.core.seq(arglist__14558);
return G__14556__delegate(args);
});
G__14556.cljs$core$IFn$_invoke$arity$variadic = G__14556__delegate;
return G__14556;
})()
;

return null;
});
