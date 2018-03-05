goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11258__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11258 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11259__i = 0, G__11259__a = new Array(arguments.length -  0);
while (G__11259__i < G__11259__a.length) {G__11259__a[G__11259__i] = arguments[G__11259__i + 0]; ++G__11259__i;}
  args = new cljs.core.IndexedSeq(G__11259__a,0,null);
} 
return G__11258__delegate.call(this,args);};
G__11258.cljs$lang$maxFixedArity = 0;
G__11258.cljs$lang$applyTo = (function (arglist__11260){
var args = cljs.core.seq(arglist__11260);
return G__11258__delegate(args);
});
G__11258.cljs$core$IFn$_invoke$arity$variadic = G__11258__delegate;
return G__11258;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11261__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11261 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11262__i = 0, G__11262__a = new Array(arguments.length -  0);
while (G__11262__i < G__11262__a.length) {G__11262__a[G__11262__i] = arguments[G__11262__i + 0]; ++G__11262__i;}
  args = new cljs.core.IndexedSeq(G__11262__a,0,null);
} 
return G__11261__delegate.call(this,args);};
G__11261.cljs$lang$maxFixedArity = 0;
G__11261.cljs$lang$applyTo = (function (arglist__11263){
var args = cljs.core.seq(arglist__11263);
return G__11261__delegate(args);
});
G__11261.cljs$core$IFn$_invoke$arity$variadic = G__11261__delegate;
return G__11261;
})()
;

return null;
});
