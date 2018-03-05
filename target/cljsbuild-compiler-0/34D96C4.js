goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14177__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14177 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14178__i = 0, G__14178__a = new Array(arguments.length -  0);
while (G__14178__i < G__14178__a.length) {G__14178__a[G__14178__i] = arguments[G__14178__i + 0]; ++G__14178__i;}
  args = new cljs.core.IndexedSeq(G__14178__a,0,null);
} 
return G__14177__delegate.call(this,args);};
G__14177.cljs$lang$maxFixedArity = 0;
G__14177.cljs$lang$applyTo = (function (arglist__14179){
var args = cljs.core.seq(arglist__14179);
return G__14177__delegate(args);
});
G__14177.cljs$core$IFn$_invoke$arity$variadic = G__14177__delegate;
return G__14177;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14180__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14180 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14181__i = 0, G__14181__a = new Array(arguments.length -  0);
while (G__14181__i < G__14181__a.length) {G__14181__a[G__14181__i] = arguments[G__14181__i + 0]; ++G__14181__i;}
  args = new cljs.core.IndexedSeq(G__14181__a,0,null);
} 
return G__14180__delegate.call(this,args);};
G__14180.cljs$lang$maxFixedArity = 0;
G__14180.cljs$lang$applyTo = (function (arglist__14182){
var args = cljs.core.seq(arglist__14182);
return G__14180__delegate(args);
});
G__14180.cljs$core$IFn$_invoke$arity$variadic = G__14180__delegate;
return G__14180;
})()
;

return null;
});
