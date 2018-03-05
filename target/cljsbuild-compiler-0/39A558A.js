goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16420__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16420 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16421__i = 0, G__16421__a = new Array(arguments.length -  0);
while (G__16421__i < G__16421__a.length) {G__16421__a[G__16421__i] = arguments[G__16421__i + 0]; ++G__16421__i;}
  args = new cljs.core.IndexedSeq(G__16421__a,0,null);
} 
return G__16420__delegate.call(this,args);};
G__16420.cljs$lang$maxFixedArity = 0;
G__16420.cljs$lang$applyTo = (function (arglist__16422){
var args = cljs.core.seq(arglist__16422);
return G__16420__delegate(args);
});
G__16420.cljs$core$IFn$_invoke$arity$variadic = G__16420__delegate;
return G__16420;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16423__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16423 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16424__i = 0, G__16424__a = new Array(arguments.length -  0);
while (G__16424__i < G__16424__a.length) {G__16424__a[G__16424__i] = arguments[G__16424__i + 0]; ++G__16424__i;}
  args = new cljs.core.IndexedSeq(G__16424__a,0,null);
} 
return G__16423__delegate.call(this,args);};
G__16423.cljs$lang$maxFixedArity = 0;
G__16423.cljs$lang$applyTo = (function (arglist__16425){
var args = cljs.core.seq(arglist__16425);
return G__16423__delegate(args);
});
G__16423.cljs$core$IFn$_invoke$arity$variadic = G__16423__delegate;
return G__16423;
})()
;

return null;
});
