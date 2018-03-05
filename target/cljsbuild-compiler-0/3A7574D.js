goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16205__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16205 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16206__i = 0, G__16206__a = new Array(arguments.length -  0);
while (G__16206__i < G__16206__a.length) {G__16206__a[G__16206__i] = arguments[G__16206__i + 0]; ++G__16206__i;}
  args = new cljs.core.IndexedSeq(G__16206__a,0,null);
} 
return G__16205__delegate.call(this,args);};
G__16205.cljs$lang$maxFixedArity = 0;
G__16205.cljs$lang$applyTo = (function (arglist__16207){
var args = cljs.core.seq(arglist__16207);
return G__16205__delegate(args);
});
G__16205.cljs$core$IFn$_invoke$arity$variadic = G__16205__delegate;
return G__16205;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16208__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16208 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16209__i = 0, G__16209__a = new Array(arguments.length -  0);
while (G__16209__i < G__16209__a.length) {G__16209__a[G__16209__i] = arguments[G__16209__i + 0]; ++G__16209__i;}
  args = new cljs.core.IndexedSeq(G__16209__a,0,null);
} 
return G__16208__delegate.call(this,args);};
G__16208.cljs$lang$maxFixedArity = 0;
G__16208.cljs$lang$applyTo = (function (arglist__16210){
var args = cljs.core.seq(arglist__16210);
return G__16208__delegate(args);
});
G__16208.cljs$core$IFn$_invoke$arity$variadic = G__16208__delegate;
return G__16208;
})()
;

return null;
});
