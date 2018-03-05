goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18594__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18594 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18595__i = 0, G__18595__a = new Array(arguments.length -  0);
while (G__18595__i < G__18595__a.length) {G__18595__a[G__18595__i] = arguments[G__18595__i + 0]; ++G__18595__i;}
  args = new cljs.core.IndexedSeq(G__18595__a,0,null);
} 
return G__18594__delegate.call(this,args);};
G__18594.cljs$lang$maxFixedArity = 0;
G__18594.cljs$lang$applyTo = (function (arglist__18596){
var args = cljs.core.seq(arglist__18596);
return G__18594__delegate(args);
});
G__18594.cljs$core$IFn$_invoke$arity$variadic = G__18594__delegate;
return G__18594;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18597__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18597 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18598__i = 0, G__18598__a = new Array(arguments.length -  0);
while (G__18598__i < G__18598__a.length) {G__18598__a[G__18598__i] = arguments[G__18598__i + 0]; ++G__18598__i;}
  args = new cljs.core.IndexedSeq(G__18598__a,0,null);
} 
return G__18597__delegate.call(this,args);};
G__18597.cljs$lang$maxFixedArity = 0;
G__18597.cljs$lang$applyTo = (function (arglist__18599){
var args = cljs.core.seq(arglist__18599);
return G__18597__delegate(args);
});
G__18597.cljs$core$IFn$_invoke$arity$variadic = G__18597__delegate;
return G__18597;
})()
;

return null;
});
