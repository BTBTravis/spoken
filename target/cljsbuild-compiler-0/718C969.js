goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14398__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14398 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14399__i = 0, G__14399__a = new Array(arguments.length -  0);
while (G__14399__i < G__14399__a.length) {G__14399__a[G__14399__i] = arguments[G__14399__i + 0]; ++G__14399__i;}
  args = new cljs.core.IndexedSeq(G__14399__a,0,null);
} 
return G__14398__delegate.call(this,args);};
G__14398.cljs$lang$maxFixedArity = 0;
G__14398.cljs$lang$applyTo = (function (arglist__14400){
var args = cljs.core.seq(arglist__14400);
return G__14398__delegate(args);
});
G__14398.cljs$core$IFn$_invoke$arity$variadic = G__14398__delegate;
return G__14398;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14401__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14401 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14402__i = 0, G__14402__a = new Array(arguments.length -  0);
while (G__14402__i < G__14402__a.length) {G__14402__a[G__14402__i] = arguments[G__14402__i + 0]; ++G__14402__i;}
  args = new cljs.core.IndexedSeq(G__14402__a,0,null);
} 
return G__14401__delegate.call(this,args);};
G__14401.cljs$lang$maxFixedArity = 0;
G__14401.cljs$lang$applyTo = (function (arglist__14403){
var args = cljs.core.seq(arglist__14403);
return G__14401__delegate(args);
});
G__14401.cljs$core$IFn$_invoke$arity$variadic = G__14401__delegate;
return G__14401;
})()
;

return null;
});
