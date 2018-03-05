goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15636__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15636 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15637__i = 0, G__15637__a = new Array(arguments.length -  0);
while (G__15637__i < G__15637__a.length) {G__15637__a[G__15637__i] = arguments[G__15637__i + 0]; ++G__15637__i;}
  args = new cljs.core.IndexedSeq(G__15637__a,0,null);
} 
return G__15636__delegate.call(this,args);};
G__15636.cljs$lang$maxFixedArity = 0;
G__15636.cljs$lang$applyTo = (function (arglist__15638){
var args = cljs.core.seq(arglist__15638);
return G__15636__delegate(args);
});
G__15636.cljs$core$IFn$_invoke$arity$variadic = G__15636__delegate;
return G__15636;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15639__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15639 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15640__i = 0, G__15640__a = new Array(arguments.length -  0);
while (G__15640__i < G__15640__a.length) {G__15640__a[G__15640__i] = arguments[G__15640__i + 0]; ++G__15640__i;}
  args = new cljs.core.IndexedSeq(G__15640__a,0,null);
} 
return G__15639__delegate.call(this,args);};
G__15639.cljs$lang$maxFixedArity = 0;
G__15639.cljs$lang$applyTo = (function (arglist__15641){
var args = cljs.core.seq(arglist__15641);
return G__15639__delegate(args);
});
G__15639.cljs$core$IFn$_invoke$arity$variadic = G__15639__delegate;
return G__15639;
})()
;

return null;
});
