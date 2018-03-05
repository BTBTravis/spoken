goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11759__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11759 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11760__i = 0, G__11760__a = new Array(arguments.length -  0);
while (G__11760__i < G__11760__a.length) {G__11760__a[G__11760__i] = arguments[G__11760__i + 0]; ++G__11760__i;}
  args = new cljs.core.IndexedSeq(G__11760__a,0,null);
} 
return G__11759__delegate.call(this,args);};
G__11759.cljs$lang$maxFixedArity = 0;
G__11759.cljs$lang$applyTo = (function (arglist__11761){
var args = cljs.core.seq(arglist__11761);
return G__11759__delegate(args);
});
G__11759.cljs$core$IFn$_invoke$arity$variadic = G__11759__delegate;
return G__11759;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11762__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11762 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11763__i = 0, G__11763__a = new Array(arguments.length -  0);
while (G__11763__i < G__11763__a.length) {G__11763__a[G__11763__i] = arguments[G__11763__i + 0]; ++G__11763__i;}
  args = new cljs.core.IndexedSeq(G__11763__a,0,null);
} 
return G__11762__delegate.call(this,args);};
G__11762.cljs$lang$maxFixedArity = 0;
G__11762.cljs$lang$applyTo = (function (arglist__11764){
var args = cljs.core.seq(arglist__11764);
return G__11762__delegate(args);
});
G__11762.cljs$core$IFn$_invoke$arity$variadic = G__11762__delegate;
return G__11762;
})()
;

return null;
});
