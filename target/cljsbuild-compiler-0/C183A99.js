goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11972__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11972 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11973__i = 0, G__11973__a = new Array(arguments.length -  0);
while (G__11973__i < G__11973__a.length) {G__11973__a[G__11973__i] = arguments[G__11973__i + 0]; ++G__11973__i;}
  args = new cljs.core.IndexedSeq(G__11973__a,0,null);
} 
return G__11972__delegate.call(this,args);};
G__11972.cljs$lang$maxFixedArity = 0;
G__11972.cljs$lang$applyTo = (function (arglist__11974){
var args = cljs.core.seq(arglist__11974);
return G__11972__delegate(args);
});
G__11972.cljs$core$IFn$_invoke$arity$variadic = G__11972__delegate;
return G__11972;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11975__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11975 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11976__i = 0, G__11976__a = new Array(arguments.length -  0);
while (G__11976__i < G__11976__a.length) {G__11976__a[G__11976__i] = arguments[G__11976__i + 0]; ++G__11976__i;}
  args = new cljs.core.IndexedSeq(G__11976__a,0,null);
} 
return G__11975__delegate.call(this,args);};
G__11975.cljs$lang$maxFixedArity = 0;
G__11975.cljs$lang$applyTo = (function (arglist__11977){
var args = cljs.core.seq(arglist__11977);
return G__11975__delegate(args);
});
G__11975.cljs$core$IFn$_invoke$arity$variadic = G__11975__delegate;
return G__11975;
})()
;

return null;
});
