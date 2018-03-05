goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11767__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11767 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11768__i = 0, G__11768__a = new Array(arguments.length -  0);
while (G__11768__i < G__11768__a.length) {G__11768__a[G__11768__i] = arguments[G__11768__i + 0]; ++G__11768__i;}
  args = new cljs.core.IndexedSeq(G__11768__a,0,null);
} 
return G__11767__delegate.call(this,args);};
G__11767.cljs$lang$maxFixedArity = 0;
G__11767.cljs$lang$applyTo = (function (arglist__11769){
var args = cljs.core.seq(arglist__11769);
return G__11767__delegate(args);
});
G__11767.cljs$core$IFn$_invoke$arity$variadic = G__11767__delegate;
return G__11767;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11770__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11770 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11771__i = 0, G__11771__a = new Array(arguments.length -  0);
while (G__11771__i < G__11771__a.length) {G__11771__a[G__11771__i] = arguments[G__11771__i + 0]; ++G__11771__i;}
  args = new cljs.core.IndexedSeq(G__11771__a,0,null);
} 
return G__11770__delegate.call(this,args);};
G__11770.cljs$lang$maxFixedArity = 0;
G__11770.cljs$lang$applyTo = (function (arglist__11772){
var args = cljs.core.seq(arglist__11772);
return G__11770__delegate(args);
});
G__11770.cljs$core$IFn$_invoke$arity$variadic = G__11770__delegate;
return G__11770;
})()
;

return null;
});
