goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11698__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11698 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11699__i = 0, G__11699__a = new Array(arguments.length -  0);
while (G__11699__i < G__11699__a.length) {G__11699__a[G__11699__i] = arguments[G__11699__i + 0]; ++G__11699__i;}
  args = new cljs.core.IndexedSeq(G__11699__a,0,null);
} 
return G__11698__delegate.call(this,args);};
G__11698.cljs$lang$maxFixedArity = 0;
G__11698.cljs$lang$applyTo = (function (arglist__11700){
var args = cljs.core.seq(arglist__11700);
return G__11698__delegate(args);
});
G__11698.cljs$core$IFn$_invoke$arity$variadic = G__11698__delegate;
return G__11698;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11701__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11701 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11702__i = 0, G__11702__a = new Array(arguments.length -  0);
while (G__11702__i < G__11702__a.length) {G__11702__a[G__11702__i] = arguments[G__11702__i + 0]; ++G__11702__i;}
  args = new cljs.core.IndexedSeq(G__11702__a,0,null);
} 
return G__11701__delegate.call(this,args);};
G__11701.cljs$lang$maxFixedArity = 0;
G__11701.cljs$lang$applyTo = (function (arglist__11703){
var args = cljs.core.seq(arglist__11703);
return G__11701__delegate(args);
});
G__11701.cljs$core$IFn$_invoke$arity$variadic = G__11701__delegate;
return G__11701;
})()
;

return null;
});
