goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13682__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13682 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13683__i = 0, G__13683__a = new Array(arguments.length -  0);
while (G__13683__i < G__13683__a.length) {G__13683__a[G__13683__i] = arguments[G__13683__i + 0]; ++G__13683__i;}
  args = new cljs.core.IndexedSeq(G__13683__a,0,null);
} 
return G__13682__delegate.call(this,args);};
G__13682.cljs$lang$maxFixedArity = 0;
G__13682.cljs$lang$applyTo = (function (arglist__13684){
var args = cljs.core.seq(arglist__13684);
return G__13682__delegate(args);
});
G__13682.cljs$core$IFn$_invoke$arity$variadic = G__13682__delegate;
return G__13682;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13685__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13685 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13686__i = 0, G__13686__a = new Array(arguments.length -  0);
while (G__13686__i < G__13686__a.length) {G__13686__a[G__13686__i] = arguments[G__13686__i + 0]; ++G__13686__i;}
  args = new cljs.core.IndexedSeq(G__13686__a,0,null);
} 
return G__13685__delegate.call(this,args);};
G__13685.cljs$lang$maxFixedArity = 0;
G__13685.cljs$lang$applyTo = (function (arglist__13687){
var args = cljs.core.seq(arglist__13687);
return G__13685__delegate(args);
});
G__13685.cljs$core$IFn$_invoke$arity$variadic = G__13685__delegate;
return G__13685;
})()
;

return null;
});
