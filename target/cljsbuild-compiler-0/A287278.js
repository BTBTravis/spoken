goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14608__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14608 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14609__i = 0, G__14609__a = new Array(arguments.length -  0);
while (G__14609__i < G__14609__a.length) {G__14609__a[G__14609__i] = arguments[G__14609__i + 0]; ++G__14609__i;}
  args = new cljs.core.IndexedSeq(G__14609__a,0,null);
} 
return G__14608__delegate.call(this,args);};
G__14608.cljs$lang$maxFixedArity = 0;
G__14608.cljs$lang$applyTo = (function (arglist__14610){
var args = cljs.core.seq(arglist__14610);
return G__14608__delegate(args);
});
G__14608.cljs$core$IFn$_invoke$arity$variadic = G__14608__delegate;
return G__14608;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14611__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14611 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14612__i = 0, G__14612__a = new Array(arguments.length -  0);
while (G__14612__i < G__14612__a.length) {G__14612__a[G__14612__i] = arguments[G__14612__i + 0]; ++G__14612__i;}
  args = new cljs.core.IndexedSeq(G__14612__a,0,null);
} 
return G__14611__delegate.call(this,args);};
G__14611.cljs$lang$maxFixedArity = 0;
G__14611.cljs$lang$applyTo = (function (arglist__14613){
var args = cljs.core.seq(arglist__14613);
return G__14611__delegate(args);
});
G__14611.cljs$core$IFn$_invoke$arity$variadic = G__14611__delegate;
return G__14611;
})()
;

return null;
});
