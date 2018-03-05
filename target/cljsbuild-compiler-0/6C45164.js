goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13845__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13845 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13846__i = 0, G__13846__a = new Array(arguments.length -  0);
while (G__13846__i < G__13846__a.length) {G__13846__a[G__13846__i] = arguments[G__13846__i + 0]; ++G__13846__i;}
  args = new cljs.core.IndexedSeq(G__13846__a,0,null);
} 
return G__13845__delegate.call(this,args);};
G__13845.cljs$lang$maxFixedArity = 0;
G__13845.cljs$lang$applyTo = (function (arglist__13847){
var args = cljs.core.seq(arglist__13847);
return G__13845__delegate(args);
});
G__13845.cljs$core$IFn$_invoke$arity$variadic = G__13845__delegate;
return G__13845;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13848__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13848 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13849__i = 0, G__13849__a = new Array(arguments.length -  0);
while (G__13849__i < G__13849__a.length) {G__13849__a[G__13849__i] = arguments[G__13849__i + 0]; ++G__13849__i;}
  args = new cljs.core.IndexedSeq(G__13849__a,0,null);
} 
return G__13848__delegate.call(this,args);};
G__13848.cljs$lang$maxFixedArity = 0;
G__13848.cljs$lang$applyTo = (function (arglist__13850){
var args = cljs.core.seq(arglist__13850);
return G__13848__delegate(args);
});
G__13848.cljs$core$IFn$_invoke$arity$variadic = G__13848__delegate;
return G__13848;
})()
;

return null;
});
