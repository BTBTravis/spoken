goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14081__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14081 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14082__i = 0, G__14082__a = new Array(arguments.length -  0);
while (G__14082__i < G__14082__a.length) {G__14082__a[G__14082__i] = arguments[G__14082__i + 0]; ++G__14082__i;}
  args = new cljs.core.IndexedSeq(G__14082__a,0,null);
} 
return G__14081__delegate.call(this,args);};
G__14081.cljs$lang$maxFixedArity = 0;
G__14081.cljs$lang$applyTo = (function (arglist__14083){
var args = cljs.core.seq(arglist__14083);
return G__14081__delegate(args);
});
G__14081.cljs$core$IFn$_invoke$arity$variadic = G__14081__delegate;
return G__14081;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14084__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14084 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14085__i = 0, G__14085__a = new Array(arguments.length -  0);
while (G__14085__i < G__14085__a.length) {G__14085__a[G__14085__i] = arguments[G__14085__i + 0]; ++G__14085__i;}
  args = new cljs.core.IndexedSeq(G__14085__a,0,null);
} 
return G__14084__delegate.call(this,args);};
G__14084.cljs$lang$maxFixedArity = 0;
G__14084.cljs$lang$applyTo = (function (arglist__14086){
var args = cljs.core.seq(arglist__14086);
return G__14084__delegate(args);
});
G__14084.cljs$core$IFn$_invoke$arity$variadic = G__14084__delegate;
return G__14084;
})()
;

return null;
});
