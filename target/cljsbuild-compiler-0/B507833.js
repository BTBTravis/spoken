goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15497__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15497 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15498__i = 0, G__15498__a = new Array(arguments.length -  0);
while (G__15498__i < G__15498__a.length) {G__15498__a[G__15498__i] = arguments[G__15498__i + 0]; ++G__15498__i;}
  args = new cljs.core.IndexedSeq(G__15498__a,0,null);
} 
return G__15497__delegate.call(this,args);};
G__15497.cljs$lang$maxFixedArity = 0;
G__15497.cljs$lang$applyTo = (function (arglist__15499){
var args = cljs.core.seq(arglist__15499);
return G__15497__delegate(args);
});
G__15497.cljs$core$IFn$_invoke$arity$variadic = G__15497__delegate;
return G__15497;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15500__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15500 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15501__i = 0, G__15501__a = new Array(arguments.length -  0);
while (G__15501__i < G__15501__a.length) {G__15501__a[G__15501__i] = arguments[G__15501__i + 0]; ++G__15501__i;}
  args = new cljs.core.IndexedSeq(G__15501__a,0,null);
} 
return G__15500__delegate.call(this,args);};
G__15500.cljs$lang$maxFixedArity = 0;
G__15500.cljs$lang$applyTo = (function (arglist__15502){
var args = cljs.core.seq(arglist__15502);
return G__15500__delegate(args);
});
G__15500.cljs$core$IFn$_invoke$arity$variadic = G__15500__delegate;
return G__15500;
})()
;

return null;
});
