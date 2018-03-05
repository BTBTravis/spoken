goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__17041__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__17041 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17042__i = 0, G__17042__a = new Array(arguments.length -  0);
while (G__17042__i < G__17042__a.length) {G__17042__a[G__17042__i] = arguments[G__17042__i + 0]; ++G__17042__i;}
  args = new cljs.core.IndexedSeq(G__17042__a,0,null);
} 
return G__17041__delegate.call(this,args);};
G__17041.cljs$lang$maxFixedArity = 0;
G__17041.cljs$lang$applyTo = (function (arglist__17043){
var args = cljs.core.seq(arglist__17043);
return G__17041__delegate(args);
});
G__17041.cljs$core$IFn$_invoke$arity$variadic = G__17041__delegate;
return G__17041;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__17044__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__17044 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17045__i = 0, G__17045__a = new Array(arguments.length -  0);
while (G__17045__i < G__17045__a.length) {G__17045__a[G__17045__i] = arguments[G__17045__i + 0]; ++G__17045__i;}
  args = new cljs.core.IndexedSeq(G__17045__a,0,null);
} 
return G__17044__delegate.call(this,args);};
G__17044.cljs$lang$maxFixedArity = 0;
G__17044.cljs$lang$applyTo = (function (arglist__17046){
var args = cljs.core.seq(arglist__17046);
return G__17044__delegate(args);
});
G__17044.cljs$core$IFn$_invoke$arity$variadic = G__17044__delegate;
return G__17044;
})()
;

return null;
});
