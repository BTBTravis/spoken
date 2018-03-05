goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11478__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11478 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11479__i = 0, G__11479__a = new Array(arguments.length -  0);
while (G__11479__i < G__11479__a.length) {G__11479__a[G__11479__i] = arguments[G__11479__i + 0]; ++G__11479__i;}
  args = new cljs.core.IndexedSeq(G__11479__a,0,null);
} 
return G__11478__delegate.call(this,args);};
G__11478.cljs$lang$maxFixedArity = 0;
G__11478.cljs$lang$applyTo = (function (arglist__11480){
var args = cljs.core.seq(arglist__11480);
return G__11478__delegate(args);
});
G__11478.cljs$core$IFn$_invoke$arity$variadic = G__11478__delegate;
return G__11478;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11481__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11481 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11482__i = 0, G__11482__a = new Array(arguments.length -  0);
while (G__11482__i < G__11482__a.length) {G__11482__a[G__11482__i] = arguments[G__11482__i + 0]; ++G__11482__i;}
  args = new cljs.core.IndexedSeq(G__11482__a,0,null);
} 
return G__11481__delegate.call(this,args);};
G__11481.cljs$lang$maxFixedArity = 0;
G__11481.cljs$lang$applyTo = (function (arglist__11483){
var args = cljs.core.seq(arglist__11483);
return G__11481__delegate(args);
});
G__11481.cljs$core$IFn$_invoke$arity$variadic = G__11481__delegate;
return G__11481;
})()
;

return null;
});
