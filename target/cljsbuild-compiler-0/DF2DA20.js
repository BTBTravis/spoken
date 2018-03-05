goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15261__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15261 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15262__i = 0, G__15262__a = new Array(arguments.length -  0);
while (G__15262__i < G__15262__a.length) {G__15262__a[G__15262__i] = arguments[G__15262__i + 0]; ++G__15262__i;}
  args = new cljs.core.IndexedSeq(G__15262__a,0,null);
} 
return G__15261__delegate.call(this,args);};
G__15261.cljs$lang$maxFixedArity = 0;
G__15261.cljs$lang$applyTo = (function (arglist__15263){
var args = cljs.core.seq(arglist__15263);
return G__15261__delegate(args);
});
G__15261.cljs$core$IFn$_invoke$arity$variadic = G__15261__delegate;
return G__15261;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15264__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15264 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15265__i = 0, G__15265__a = new Array(arguments.length -  0);
while (G__15265__i < G__15265__a.length) {G__15265__a[G__15265__i] = arguments[G__15265__i + 0]; ++G__15265__i;}
  args = new cljs.core.IndexedSeq(G__15265__a,0,null);
} 
return G__15264__delegate.call(this,args);};
G__15264.cljs$lang$maxFixedArity = 0;
G__15264.cljs$lang$applyTo = (function (arglist__15266){
var args = cljs.core.seq(arglist__15266);
return G__15264__delegate(args);
});
G__15264.cljs$core$IFn$_invoke$arity$variadic = G__15264__delegate;
return G__15264;
})()
;

return null;
});
