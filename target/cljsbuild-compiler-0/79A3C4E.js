goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11524__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11524 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11525__i = 0, G__11525__a = new Array(arguments.length -  0);
while (G__11525__i < G__11525__a.length) {G__11525__a[G__11525__i] = arguments[G__11525__i + 0]; ++G__11525__i;}
  args = new cljs.core.IndexedSeq(G__11525__a,0,null);
} 
return G__11524__delegate.call(this,args);};
G__11524.cljs$lang$maxFixedArity = 0;
G__11524.cljs$lang$applyTo = (function (arglist__11526){
var args = cljs.core.seq(arglist__11526);
return G__11524__delegate(args);
});
G__11524.cljs$core$IFn$_invoke$arity$variadic = G__11524__delegate;
return G__11524;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11527__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11527 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11528__i = 0, G__11528__a = new Array(arguments.length -  0);
while (G__11528__i < G__11528__a.length) {G__11528__a[G__11528__i] = arguments[G__11528__i + 0]; ++G__11528__i;}
  args = new cljs.core.IndexedSeq(G__11528__a,0,null);
} 
return G__11527__delegate.call(this,args);};
G__11527.cljs$lang$maxFixedArity = 0;
G__11527.cljs$lang$applyTo = (function (arglist__11529){
var args = cljs.core.seq(arglist__11529);
return G__11527__delegate(args);
});
G__11527.cljs$core$IFn$_invoke$arity$variadic = G__11527__delegate;
return G__11527;
})()
;

return null;
});
