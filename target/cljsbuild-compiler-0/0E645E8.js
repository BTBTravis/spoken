goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11500__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11500 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11501__i = 0, G__11501__a = new Array(arguments.length -  0);
while (G__11501__i < G__11501__a.length) {G__11501__a[G__11501__i] = arguments[G__11501__i + 0]; ++G__11501__i;}
  args = new cljs.core.IndexedSeq(G__11501__a,0,null);
} 
return G__11500__delegate.call(this,args);};
G__11500.cljs$lang$maxFixedArity = 0;
G__11500.cljs$lang$applyTo = (function (arglist__11502){
var args = cljs.core.seq(arglist__11502);
return G__11500__delegate(args);
});
G__11500.cljs$core$IFn$_invoke$arity$variadic = G__11500__delegate;
return G__11500;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11503__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11503 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11504__i = 0, G__11504__a = new Array(arguments.length -  0);
while (G__11504__i < G__11504__a.length) {G__11504__a[G__11504__i] = arguments[G__11504__i + 0]; ++G__11504__i;}
  args = new cljs.core.IndexedSeq(G__11504__a,0,null);
} 
return G__11503__delegate.call(this,args);};
G__11503.cljs$lang$maxFixedArity = 0;
G__11503.cljs$lang$applyTo = (function (arglist__11505){
var args = cljs.core.seq(arglist__11505);
return G__11503__delegate(args);
});
G__11503.cljs$core$IFn$_invoke$arity$variadic = G__11503__delegate;
return G__11503;
})()
;

return null;
});
