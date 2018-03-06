goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13996__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13996 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13997__i = 0, G__13997__a = new Array(arguments.length -  0);
while (G__13997__i < G__13997__a.length) {G__13997__a[G__13997__i] = arguments[G__13997__i + 0]; ++G__13997__i;}
  args = new cljs.core.IndexedSeq(G__13997__a,0,null);
} 
return G__13996__delegate.call(this,args);};
G__13996.cljs$lang$maxFixedArity = 0;
G__13996.cljs$lang$applyTo = (function (arglist__13998){
var args = cljs.core.seq(arglist__13998);
return G__13996__delegate(args);
});
G__13996.cljs$core$IFn$_invoke$arity$variadic = G__13996__delegate;
return G__13996;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13999__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13999 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14000__i = 0, G__14000__a = new Array(arguments.length -  0);
while (G__14000__i < G__14000__a.length) {G__14000__a[G__14000__i] = arguments[G__14000__i + 0]; ++G__14000__i;}
  args = new cljs.core.IndexedSeq(G__14000__a,0,null);
} 
return G__13999__delegate.call(this,args);};
G__13999.cljs$lang$maxFixedArity = 0;
G__13999.cljs$lang$applyTo = (function (arglist__14001){
var args = cljs.core.seq(arglist__14001);
return G__13999__delegate(args);
});
G__13999.cljs$core$IFn$_invoke$arity$variadic = G__13999__delegate;
return G__13999;
})()
;

return null;
});
