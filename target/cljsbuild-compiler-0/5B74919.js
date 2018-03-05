goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__17857__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__17857 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17858__i = 0, G__17858__a = new Array(arguments.length -  0);
while (G__17858__i < G__17858__a.length) {G__17858__a[G__17858__i] = arguments[G__17858__i + 0]; ++G__17858__i;}
  args = new cljs.core.IndexedSeq(G__17858__a,0,null);
} 
return G__17857__delegate.call(this,args);};
G__17857.cljs$lang$maxFixedArity = 0;
G__17857.cljs$lang$applyTo = (function (arglist__17859){
var args = cljs.core.seq(arglist__17859);
return G__17857__delegate(args);
});
G__17857.cljs$core$IFn$_invoke$arity$variadic = G__17857__delegate;
return G__17857;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__17860__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__17860 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17861__i = 0, G__17861__a = new Array(arguments.length -  0);
while (G__17861__i < G__17861__a.length) {G__17861__a[G__17861__i] = arguments[G__17861__i + 0]; ++G__17861__i;}
  args = new cljs.core.IndexedSeq(G__17861__a,0,null);
} 
return G__17860__delegate.call(this,args);};
G__17860.cljs$lang$maxFixedArity = 0;
G__17860.cljs$lang$applyTo = (function (arglist__17862){
var args = cljs.core.seq(arglist__17862);
return G__17860__delegate(args);
});
G__17860.cljs$core$IFn$_invoke$arity$variadic = G__17860__delegate;
return G__17860;
})()
;

return null;
});
