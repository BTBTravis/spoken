// Compiled by ClojureScript 1.9.946 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9700__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9700 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9701__i = 0, G__9701__a = new Array(arguments.length -  0);
while (G__9701__i < G__9701__a.length) {G__9701__a[G__9701__i] = arguments[G__9701__i + 0]; ++G__9701__i;}
  args = new cljs.core.IndexedSeq(G__9701__a,0,null);
} 
return G__9700__delegate.call(this,args);};
G__9700.cljs$lang$maxFixedArity = 0;
G__9700.cljs$lang$applyTo = (function (arglist__9702){
var args = cljs.core.seq(arglist__9702);
return G__9700__delegate(args);
});
G__9700.cljs$core$IFn$_invoke$arity$variadic = G__9700__delegate;
return G__9700;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9703__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9703 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9704__i = 0, G__9704__a = new Array(arguments.length -  0);
while (G__9704__i < G__9704__a.length) {G__9704__a[G__9704__i] = arguments[G__9704__i + 0]; ++G__9704__i;}
  args = new cljs.core.IndexedSeq(G__9704__a,0,null);
} 
return G__9703__delegate.call(this,args);};
G__9703.cljs$lang$maxFixedArity = 0;
G__9703.cljs$lang$applyTo = (function (arglist__9705){
var args = cljs.core.seq(arglist__9705);
return G__9703__delegate(args);
});
G__9703.cljs$core$IFn$_invoke$arity$variadic = G__9703__delegate;
return G__9703;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map
