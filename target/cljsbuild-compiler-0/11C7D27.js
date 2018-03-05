goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__17149__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__17149 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17150__i = 0, G__17150__a = new Array(arguments.length -  0);
while (G__17150__i < G__17150__a.length) {G__17150__a[G__17150__i] = arguments[G__17150__i + 0]; ++G__17150__i;}
  args = new cljs.core.IndexedSeq(G__17150__a,0,null);
} 
return G__17149__delegate.call(this,args);};
G__17149.cljs$lang$maxFixedArity = 0;
G__17149.cljs$lang$applyTo = (function (arglist__17151){
var args = cljs.core.seq(arglist__17151);
return G__17149__delegate(args);
});
G__17149.cljs$core$IFn$_invoke$arity$variadic = G__17149__delegate;
return G__17149;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__17152__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__17152 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17153__i = 0, G__17153__a = new Array(arguments.length -  0);
while (G__17153__i < G__17153__a.length) {G__17153__a[G__17153__i] = arguments[G__17153__i + 0]; ++G__17153__i;}
  args = new cljs.core.IndexedSeq(G__17153__a,0,null);
} 
return G__17152__delegate.call(this,args);};
G__17152.cljs$lang$maxFixedArity = 0;
G__17152.cljs$lang$applyTo = (function (arglist__17154){
var args = cljs.core.seq(arglist__17154);
return G__17152__delegate(args);
});
G__17152.cljs$core$IFn$_invoke$arity$variadic = G__17152__delegate;
return G__17152;
})()
;

return null;
});
