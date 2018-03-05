goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__17621__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__17621 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17622__i = 0, G__17622__a = new Array(arguments.length -  0);
while (G__17622__i < G__17622__a.length) {G__17622__a[G__17622__i] = arguments[G__17622__i + 0]; ++G__17622__i;}
  args = new cljs.core.IndexedSeq(G__17622__a,0,null);
} 
return G__17621__delegate.call(this,args);};
G__17621.cljs$lang$maxFixedArity = 0;
G__17621.cljs$lang$applyTo = (function (arglist__17623){
var args = cljs.core.seq(arglist__17623);
return G__17621__delegate(args);
});
G__17621.cljs$core$IFn$_invoke$arity$variadic = G__17621__delegate;
return G__17621;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__17624__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__17624 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17625__i = 0, G__17625__a = new Array(arguments.length -  0);
while (G__17625__i < G__17625__a.length) {G__17625__a[G__17625__i] = arguments[G__17625__i + 0]; ++G__17625__i;}
  args = new cljs.core.IndexedSeq(G__17625__a,0,null);
} 
return G__17624__delegate.call(this,args);};
G__17624.cljs$lang$maxFixedArity = 0;
G__17624.cljs$lang$applyTo = (function (arglist__17626){
var args = cljs.core.seq(arglist__17626);
return G__17624__delegate(args);
});
G__17624.cljs$core$IFn$_invoke$arity$variadic = G__17624__delegate;
return G__17624;
})()
;

return null;
});
