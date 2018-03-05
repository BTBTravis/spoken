goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11299__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11299 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11300__i = 0, G__11300__a = new Array(arguments.length -  0);
while (G__11300__i < G__11300__a.length) {G__11300__a[G__11300__i] = arguments[G__11300__i + 0]; ++G__11300__i;}
  args = new cljs.core.IndexedSeq(G__11300__a,0,null);
} 
return G__11299__delegate.call(this,args);};
G__11299.cljs$lang$maxFixedArity = 0;
G__11299.cljs$lang$applyTo = (function (arglist__11301){
var args = cljs.core.seq(arglist__11301);
return G__11299__delegate(args);
});
G__11299.cljs$core$IFn$_invoke$arity$variadic = G__11299__delegate;
return G__11299;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11302__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11302 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11303__i = 0, G__11303__a = new Array(arguments.length -  0);
while (G__11303__i < G__11303__a.length) {G__11303__a[G__11303__i] = arguments[G__11303__i + 0]; ++G__11303__i;}
  args = new cljs.core.IndexedSeq(G__11303__a,0,null);
} 
return G__11302__delegate.call(this,args);};
G__11302.cljs$lang$maxFixedArity = 0;
G__11302.cljs$lang$applyTo = (function (arglist__11304){
var args = cljs.core.seq(arglist__11304);
return G__11302__delegate(args);
});
G__11302.cljs$core$IFn$_invoke$arity$variadic = G__11302__delegate;
return G__11302;
})()
;

return null;
});
