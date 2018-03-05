goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__25013__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__25013 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25014__i = 0, G__25014__a = new Array(arguments.length -  0);
while (G__25014__i < G__25014__a.length) {G__25014__a[G__25014__i] = arguments[G__25014__i + 0]; ++G__25014__i;}
  args = new cljs.core.IndexedSeq(G__25014__a,0,null);
} 
return G__25013__delegate.call(this,args);};
G__25013.cljs$lang$maxFixedArity = 0;
G__25013.cljs$lang$applyTo = (function (arglist__25015){
var args = cljs.core.seq(arglist__25015);
return G__25013__delegate(args);
});
G__25013.cljs$core$IFn$_invoke$arity$variadic = G__25013__delegate;
return G__25013;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__25016__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__25016 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25017__i = 0, G__25017__a = new Array(arguments.length -  0);
while (G__25017__i < G__25017__a.length) {G__25017__a[G__25017__i] = arguments[G__25017__i + 0]; ++G__25017__i;}
  args = new cljs.core.IndexedSeq(G__25017__a,0,null);
} 
return G__25016__delegate.call(this,args);};
G__25016.cljs$lang$maxFixedArity = 0;
G__25016.cljs$lang$applyTo = (function (arglist__25018){
var args = cljs.core.seq(arglist__25018);
return G__25016__delegate(args);
});
G__25016.cljs$core$IFn$_invoke$arity$variadic = G__25016__delegate;
return G__25016;
})()
;

return null;
});
