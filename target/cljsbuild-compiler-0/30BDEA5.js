goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16210__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16210 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16211__i = 0, G__16211__a = new Array(arguments.length -  0);
while (G__16211__i < G__16211__a.length) {G__16211__a[G__16211__i] = arguments[G__16211__i + 0]; ++G__16211__i;}
  args = new cljs.core.IndexedSeq(G__16211__a,0,null);
} 
return G__16210__delegate.call(this,args);};
G__16210.cljs$lang$maxFixedArity = 0;
G__16210.cljs$lang$applyTo = (function (arglist__16212){
var args = cljs.core.seq(arglist__16212);
return G__16210__delegate(args);
});
G__16210.cljs$core$IFn$_invoke$arity$variadic = G__16210__delegate;
return G__16210;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16213__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16213 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16214__i = 0, G__16214__a = new Array(arguments.length -  0);
while (G__16214__i < G__16214__a.length) {G__16214__a[G__16214__i] = arguments[G__16214__i + 0]; ++G__16214__i;}
  args = new cljs.core.IndexedSeq(G__16214__a,0,null);
} 
return G__16213__delegate.call(this,args);};
G__16213.cljs$lang$maxFixedArity = 0;
G__16213.cljs$lang$applyTo = (function (arglist__16215){
var args = cljs.core.seq(arglist__16215);
return G__16213__delegate(args);
});
G__16213.cljs$core$IFn$_invoke$arity$variadic = G__16213__delegate;
return G__16213;
})()
;

return null;
});
