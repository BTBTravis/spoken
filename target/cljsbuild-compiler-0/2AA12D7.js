goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12530__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12530 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12531__i = 0, G__12531__a = new Array(arguments.length -  0);
while (G__12531__i < G__12531__a.length) {G__12531__a[G__12531__i] = arguments[G__12531__i + 0]; ++G__12531__i;}
  args = new cljs.core.IndexedSeq(G__12531__a,0,null);
} 
return G__12530__delegate.call(this,args);};
G__12530.cljs$lang$maxFixedArity = 0;
G__12530.cljs$lang$applyTo = (function (arglist__12532){
var args = cljs.core.seq(arglist__12532);
return G__12530__delegate(args);
});
G__12530.cljs$core$IFn$_invoke$arity$variadic = G__12530__delegate;
return G__12530;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12533__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12533 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12534__i = 0, G__12534__a = new Array(arguments.length -  0);
while (G__12534__i < G__12534__a.length) {G__12534__a[G__12534__i] = arguments[G__12534__i + 0]; ++G__12534__i;}
  args = new cljs.core.IndexedSeq(G__12534__a,0,null);
} 
return G__12533__delegate.call(this,args);};
G__12533.cljs$lang$maxFixedArity = 0;
G__12533.cljs$lang$applyTo = (function (arglist__12535){
var args = cljs.core.seq(arglist__12535);
return G__12533__delegate(args);
});
G__12533.cljs$core$IFn$_invoke$arity$variadic = G__12533__delegate;
return G__12533;
})()
;

return null;
});
