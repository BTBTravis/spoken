goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__17385__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__17385 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17386__i = 0, G__17386__a = new Array(arguments.length -  0);
while (G__17386__i < G__17386__a.length) {G__17386__a[G__17386__i] = arguments[G__17386__i + 0]; ++G__17386__i;}
  args = new cljs.core.IndexedSeq(G__17386__a,0,null);
} 
return G__17385__delegate.call(this,args);};
G__17385.cljs$lang$maxFixedArity = 0;
G__17385.cljs$lang$applyTo = (function (arglist__17387){
var args = cljs.core.seq(arglist__17387);
return G__17385__delegate(args);
});
G__17385.cljs$core$IFn$_invoke$arity$variadic = G__17385__delegate;
return G__17385;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__17388__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__17388 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17389__i = 0, G__17389__a = new Array(arguments.length -  0);
while (G__17389__i < G__17389__a.length) {G__17389__a[G__17389__i] = arguments[G__17389__i + 0]; ++G__17389__i;}
  args = new cljs.core.IndexedSeq(G__17389__a,0,null);
} 
return G__17388__delegate.call(this,args);};
G__17388.cljs$lang$maxFixedArity = 0;
G__17388.cljs$lang$applyTo = (function (arglist__17390){
var args = cljs.core.seq(arglist__17390);
return G__17388__delegate(args);
});
G__17388.cljs$core$IFn$_invoke$arity$variadic = G__17388__delegate;
return G__17388;
})()
;

return null;
});
