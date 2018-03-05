goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__17550__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__17550 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17551__i = 0, G__17551__a = new Array(arguments.length -  0);
while (G__17551__i < G__17551__a.length) {G__17551__a[G__17551__i] = arguments[G__17551__i + 0]; ++G__17551__i;}
  args = new cljs.core.IndexedSeq(G__17551__a,0,null);
} 
return G__17550__delegate.call(this,args);};
G__17550.cljs$lang$maxFixedArity = 0;
G__17550.cljs$lang$applyTo = (function (arglist__17552){
var args = cljs.core.seq(arglist__17552);
return G__17550__delegate(args);
});
G__17550.cljs$core$IFn$_invoke$arity$variadic = G__17550__delegate;
return G__17550;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__17553__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__17553 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17554__i = 0, G__17554__a = new Array(arguments.length -  0);
while (G__17554__i < G__17554__a.length) {G__17554__a[G__17554__i] = arguments[G__17554__i + 0]; ++G__17554__i;}
  args = new cljs.core.IndexedSeq(G__17554__a,0,null);
} 
return G__17553__delegate.call(this,args);};
G__17553.cljs$lang$maxFixedArity = 0;
G__17553.cljs$lang$applyTo = (function (arglist__17555){
var args = cljs.core.seq(arglist__17555);
return G__17553__delegate(args);
});
G__17553.cljs$core$IFn$_invoke$arity$variadic = G__17553__delegate;
return G__17553;
})()
;

return null;
});
