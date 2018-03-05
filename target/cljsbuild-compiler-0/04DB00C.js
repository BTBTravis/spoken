goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14317__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14317 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14318__i = 0, G__14318__a = new Array(arguments.length -  0);
while (G__14318__i < G__14318__a.length) {G__14318__a[G__14318__i] = arguments[G__14318__i + 0]; ++G__14318__i;}
  args = new cljs.core.IndexedSeq(G__14318__a,0,null);
} 
return G__14317__delegate.call(this,args);};
G__14317.cljs$lang$maxFixedArity = 0;
G__14317.cljs$lang$applyTo = (function (arglist__14319){
var args = cljs.core.seq(arglist__14319);
return G__14317__delegate(args);
});
G__14317.cljs$core$IFn$_invoke$arity$variadic = G__14317__delegate;
return G__14317;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14320__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14320 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14321__i = 0, G__14321__a = new Array(arguments.length -  0);
while (G__14321__i < G__14321__a.length) {G__14321__a[G__14321__i] = arguments[G__14321__i + 0]; ++G__14321__i;}
  args = new cljs.core.IndexedSeq(G__14321__a,0,null);
} 
return G__14320__delegate.call(this,args);};
G__14320.cljs$lang$maxFixedArity = 0;
G__14320.cljs$lang$applyTo = (function (arglist__14322){
var args = cljs.core.seq(arglist__14322);
return G__14320__delegate(args);
});
G__14320.cljs$core$IFn$_invoke$arity$variadic = G__14320__delegate;
return G__14320;
})()
;

return null;
});
