goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16441__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16441 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16442__i = 0, G__16442__a = new Array(arguments.length -  0);
while (G__16442__i < G__16442__a.length) {G__16442__a[G__16442__i] = arguments[G__16442__i + 0]; ++G__16442__i;}
  args = new cljs.core.IndexedSeq(G__16442__a,0,null);
} 
return G__16441__delegate.call(this,args);};
G__16441.cljs$lang$maxFixedArity = 0;
G__16441.cljs$lang$applyTo = (function (arglist__16443){
var args = cljs.core.seq(arglist__16443);
return G__16441__delegate(args);
});
G__16441.cljs$core$IFn$_invoke$arity$variadic = G__16441__delegate;
return G__16441;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16444__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16444 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16445__i = 0, G__16445__a = new Array(arguments.length -  0);
while (G__16445__i < G__16445__a.length) {G__16445__a[G__16445__i] = arguments[G__16445__i + 0]; ++G__16445__i;}
  args = new cljs.core.IndexedSeq(G__16445__a,0,null);
} 
return G__16444__delegate.call(this,args);};
G__16444.cljs$lang$maxFixedArity = 0;
G__16444.cljs$lang$applyTo = (function (arglist__16446){
var args = cljs.core.seq(arglist__16446);
return G__16444__delegate(args);
});
G__16444.cljs$core$IFn$_invoke$arity$variadic = G__16444__delegate;
return G__16444;
})()
;

return null;
});
