goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12208__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12208 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12209__i = 0, G__12209__a = new Array(arguments.length -  0);
while (G__12209__i < G__12209__a.length) {G__12209__a[G__12209__i] = arguments[G__12209__i + 0]; ++G__12209__i;}
  args = new cljs.core.IndexedSeq(G__12209__a,0,null);
} 
return G__12208__delegate.call(this,args);};
G__12208.cljs$lang$maxFixedArity = 0;
G__12208.cljs$lang$applyTo = (function (arglist__12210){
var args = cljs.core.seq(arglist__12210);
return G__12208__delegate(args);
});
G__12208.cljs$core$IFn$_invoke$arity$variadic = G__12208__delegate;
return G__12208;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12211__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12211 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12212__i = 0, G__12212__a = new Array(arguments.length -  0);
while (G__12212__i < G__12212__a.length) {G__12212__a[G__12212__i] = arguments[G__12212__i + 0]; ++G__12212__i;}
  args = new cljs.core.IndexedSeq(G__12212__a,0,null);
} 
return G__12211__delegate.call(this,args);};
G__12211.cljs$lang$maxFixedArity = 0;
G__12211.cljs$lang$applyTo = (function (arglist__12213){
var args = cljs.core.seq(arglist__12213);
return G__12211__delegate(args);
});
G__12211.cljs$core$IFn$_invoke$arity$variadic = G__12211__delegate;
return G__12211;
})()
;

return null;
});
