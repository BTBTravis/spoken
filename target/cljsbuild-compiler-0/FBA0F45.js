goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14789__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14789 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14790__i = 0, G__14790__a = new Array(arguments.length -  0);
while (G__14790__i < G__14790__a.length) {G__14790__a[G__14790__i] = arguments[G__14790__i + 0]; ++G__14790__i;}
  args = new cljs.core.IndexedSeq(G__14790__a,0,null);
} 
return G__14789__delegate.call(this,args);};
G__14789.cljs$lang$maxFixedArity = 0;
G__14789.cljs$lang$applyTo = (function (arglist__14791){
var args = cljs.core.seq(arglist__14791);
return G__14789__delegate(args);
});
G__14789.cljs$core$IFn$_invoke$arity$variadic = G__14789__delegate;
return G__14789;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14792__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14792 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14793__i = 0, G__14793__a = new Array(arguments.length -  0);
while (G__14793__i < G__14793__a.length) {G__14793__a[G__14793__i] = arguments[G__14793__i + 0]; ++G__14793__i;}
  args = new cljs.core.IndexedSeq(G__14793__a,0,null);
} 
return G__14792__delegate.call(this,args);};
G__14792.cljs$lang$maxFixedArity = 0;
G__14792.cljs$lang$applyTo = (function (arglist__14794){
var args = cljs.core.seq(arglist__14794);
return G__14792__delegate(args);
});
G__14792.cljs$core$IFn$_invoke$arity$variadic = G__14792__delegate;
return G__14792;
})()
;

return null;
});
