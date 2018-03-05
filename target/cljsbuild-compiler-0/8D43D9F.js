goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13609__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13609 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13610__i = 0, G__13610__a = new Array(arguments.length -  0);
while (G__13610__i < G__13610__a.length) {G__13610__a[G__13610__i] = arguments[G__13610__i + 0]; ++G__13610__i;}
  args = new cljs.core.IndexedSeq(G__13610__a,0,null);
} 
return G__13609__delegate.call(this,args);};
G__13609.cljs$lang$maxFixedArity = 0;
G__13609.cljs$lang$applyTo = (function (arglist__13611){
var args = cljs.core.seq(arglist__13611);
return G__13609__delegate(args);
});
G__13609.cljs$core$IFn$_invoke$arity$variadic = G__13609__delegate;
return G__13609;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13612__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13612 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13613__i = 0, G__13613__a = new Array(arguments.length -  0);
while (G__13613__i < G__13613__a.length) {G__13613__a[G__13613__i] = arguments[G__13613__i + 0]; ++G__13613__i;}
  args = new cljs.core.IndexedSeq(G__13613__a,0,null);
} 
return G__13612__delegate.call(this,args);};
G__13612.cljs$lang$maxFixedArity = 0;
G__13612.cljs$lang$applyTo = (function (arglist__13614){
var args = cljs.core.seq(arglist__13614);
return G__13612__delegate(args);
});
G__13612.cljs$core$IFn$_invoke$arity$variadic = G__13612__delegate;
return G__13612;
})()
;

return null;
});
