goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12377__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12377 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12378__i = 0, G__12378__a = new Array(arguments.length -  0);
while (G__12378__i < G__12378__a.length) {G__12378__a[G__12378__i] = arguments[G__12378__i + 0]; ++G__12378__i;}
  args = new cljs.core.IndexedSeq(G__12378__a,0,null);
} 
return G__12377__delegate.call(this,args);};
G__12377.cljs$lang$maxFixedArity = 0;
G__12377.cljs$lang$applyTo = (function (arglist__12379){
var args = cljs.core.seq(arglist__12379);
return G__12377__delegate(args);
});
G__12377.cljs$core$IFn$_invoke$arity$variadic = G__12377__delegate;
return G__12377;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12380__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12380 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12381__i = 0, G__12381__a = new Array(arguments.length -  0);
while (G__12381__i < G__12381__a.length) {G__12381__a[G__12381__i] = arguments[G__12381__i + 0]; ++G__12381__i;}
  args = new cljs.core.IndexedSeq(G__12381__a,0,null);
} 
return G__12380__delegate.call(this,args);};
G__12380.cljs$lang$maxFixedArity = 0;
G__12380.cljs$lang$applyTo = (function (arglist__12382){
var args = cljs.core.seq(arglist__12382);
return G__12380__delegate(args);
});
G__12380.cljs$core$IFn$_invoke$arity$variadic = G__12380__delegate;
return G__12380;
})()
;

return null;
});
