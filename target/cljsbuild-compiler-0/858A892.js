goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11247__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11247 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11248__i = 0, G__11248__a = new Array(arguments.length -  0);
while (G__11248__i < G__11248__a.length) {G__11248__a[G__11248__i] = arguments[G__11248__i + 0]; ++G__11248__i;}
  args = new cljs.core.IndexedSeq(G__11248__a,0,null);
} 
return G__11247__delegate.call(this,args);};
G__11247.cljs$lang$maxFixedArity = 0;
G__11247.cljs$lang$applyTo = (function (arglist__11249){
var args = cljs.core.seq(arglist__11249);
return G__11247__delegate(args);
});
G__11247.cljs$core$IFn$_invoke$arity$variadic = G__11247__delegate;
return G__11247;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11250__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11250 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11251__i = 0, G__11251__a = new Array(arguments.length -  0);
while (G__11251__i < G__11251__a.length) {G__11251__a[G__11251__i] = arguments[G__11251__i + 0]; ++G__11251__i;}
  args = new cljs.core.IndexedSeq(G__11251__a,0,null);
} 
return G__11250__delegate.call(this,args);};
G__11250.cljs$lang$maxFixedArity = 0;
G__11250.cljs$lang$applyTo = (function (arglist__11252){
var args = cljs.core.seq(arglist__11252);
return G__11250__delegate(args);
});
G__11250.cljs$core$IFn$_invoke$arity$variadic = G__11250__delegate;
return G__11250;
})()
;

return null;
});
