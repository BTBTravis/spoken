goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11593__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11593 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11594__i = 0, G__11594__a = new Array(arguments.length -  0);
while (G__11594__i < G__11594__a.length) {G__11594__a[G__11594__i] = arguments[G__11594__i + 0]; ++G__11594__i;}
  args = new cljs.core.IndexedSeq(G__11594__a,0,null);
} 
return G__11593__delegate.call(this,args);};
G__11593.cljs$lang$maxFixedArity = 0;
G__11593.cljs$lang$applyTo = (function (arglist__11595){
var args = cljs.core.seq(arglist__11595);
return G__11593__delegate(args);
});
G__11593.cljs$core$IFn$_invoke$arity$variadic = G__11593__delegate;
return G__11593;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11596__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11596 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11597__i = 0, G__11597__a = new Array(arguments.length -  0);
while (G__11597__i < G__11597__a.length) {G__11597__a[G__11597__i] = arguments[G__11597__i + 0]; ++G__11597__i;}
  args = new cljs.core.IndexedSeq(G__11597__a,0,null);
} 
return G__11596__delegate.call(this,args);};
G__11596.cljs$lang$maxFixedArity = 0;
G__11596.cljs$lang$applyTo = (function (arglist__11598){
var args = cljs.core.seq(arglist__11598);
return G__11596__delegate(args);
});
G__11596.cljs$core$IFn$_invoke$arity$variadic = G__11596__delegate;
return G__11596;
})()
;

return null;
});
