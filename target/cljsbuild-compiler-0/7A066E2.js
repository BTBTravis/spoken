goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18329__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18329 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18330__i = 0, G__18330__a = new Array(arguments.length -  0);
while (G__18330__i < G__18330__a.length) {G__18330__a[G__18330__i] = arguments[G__18330__i + 0]; ++G__18330__i;}
  args = new cljs.core.IndexedSeq(G__18330__a,0,null);
} 
return G__18329__delegate.call(this,args);};
G__18329.cljs$lang$maxFixedArity = 0;
G__18329.cljs$lang$applyTo = (function (arglist__18331){
var args = cljs.core.seq(arglist__18331);
return G__18329__delegate(args);
});
G__18329.cljs$core$IFn$_invoke$arity$variadic = G__18329__delegate;
return G__18329;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18332__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18332 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18333__i = 0, G__18333__a = new Array(arguments.length -  0);
while (G__18333__i < G__18333__a.length) {G__18333__a[G__18333__i] = arguments[G__18333__i + 0]; ++G__18333__i;}
  args = new cljs.core.IndexedSeq(G__18333__a,0,null);
} 
return G__18332__delegate.call(this,args);};
G__18332.cljs$lang$maxFixedArity = 0;
G__18332.cljs$lang$applyTo = (function (arglist__18334){
var args = cljs.core.seq(arglist__18334);
return G__18332__delegate(args);
});
G__18332.cljs$core$IFn$_invoke$arity$variadic = G__18332__delegate;
return G__18332;
})()
;

return null;
});
