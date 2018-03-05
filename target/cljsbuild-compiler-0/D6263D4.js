goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18072__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18072 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18073__i = 0, G__18073__a = new Array(arguments.length -  0);
while (G__18073__i < G__18073__a.length) {G__18073__a[G__18073__i] = arguments[G__18073__i + 0]; ++G__18073__i;}
  args = new cljs.core.IndexedSeq(G__18073__a,0,null);
} 
return G__18072__delegate.call(this,args);};
G__18072.cljs$lang$maxFixedArity = 0;
G__18072.cljs$lang$applyTo = (function (arglist__18074){
var args = cljs.core.seq(arglist__18074);
return G__18072__delegate(args);
});
G__18072.cljs$core$IFn$_invoke$arity$variadic = G__18072__delegate;
return G__18072;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18075__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18075 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18076__i = 0, G__18076__a = new Array(arguments.length -  0);
while (G__18076__i < G__18076__a.length) {G__18076__a[G__18076__i] = arguments[G__18076__i + 0]; ++G__18076__i;}
  args = new cljs.core.IndexedSeq(G__18076__a,0,null);
} 
return G__18075__delegate.call(this,args);};
G__18075.cljs$lang$maxFixedArity = 0;
G__18075.cljs$lang$applyTo = (function (arglist__18077){
var args = cljs.core.seq(arglist__18077);
return G__18075__delegate(args);
});
G__18075.cljs$core$IFn$_invoke$arity$variadic = G__18075__delegate;
return G__18075;
})()
;

return null;
});
