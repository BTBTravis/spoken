goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11467__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11467 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11468__i = 0, G__11468__a = new Array(arguments.length -  0);
while (G__11468__i < G__11468__a.length) {G__11468__a[G__11468__i] = arguments[G__11468__i + 0]; ++G__11468__i;}
  args = new cljs.core.IndexedSeq(G__11468__a,0,null);
} 
return G__11467__delegate.call(this,args);};
G__11467.cljs$lang$maxFixedArity = 0;
G__11467.cljs$lang$applyTo = (function (arglist__11469){
var args = cljs.core.seq(arglist__11469);
return G__11467__delegate(args);
});
G__11467.cljs$core$IFn$_invoke$arity$variadic = G__11467__delegate;
return G__11467;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11470__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11470 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11471__i = 0, G__11471__a = new Array(arguments.length -  0);
while (G__11471__i < G__11471__a.length) {G__11471__a[G__11471__i] = arguments[G__11471__i + 0]; ++G__11471__i;}
  args = new cljs.core.IndexedSeq(G__11471__a,0,null);
} 
return G__11470__delegate.call(this,args);};
G__11470.cljs$lang$maxFixedArity = 0;
G__11470.cljs$lang$applyTo = (function (arglist__11472){
var args = cljs.core.seq(arglist__11472);
return G__11470__delegate(args);
});
G__11470.cljs$core$IFn$_invoke$arity$variadic = G__11470__delegate;
return G__11470;
})()
;

return null;
});
