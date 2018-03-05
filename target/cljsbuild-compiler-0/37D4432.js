goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18560__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18560 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18561__i = 0, G__18561__a = new Array(arguments.length -  0);
while (G__18561__i < G__18561__a.length) {G__18561__a[G__18561__i] = arguments[G__18561__i + 0]; ++G__18561__i;}
  args = new cljs.core.IndexedSeq(G__18561__a,0,null);
} 
return G__18560__delegate.call(this,args);};
G__18560.cljs$lang$maxFixedArity = 0;
G__18560.cljs$lang$applyTo = (function (arglist__18562){
var args = cljs.core.seq(arglist__18562);
return G__18560__delegate(args);
});
G__18560.cljs$core$IFn$_invoke$arity$variadic = G__18560__delegate;
return G__18560;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18563__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18563 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18564__i = 0, G__18564__a = new Array(arguments.length -  0);
while (G__18564__i < G__18564__a.length) {G__18564__a[G__18564__i] = arguments[G__18564__i + 0]; ++G__18564__i;}
  args = new cljs.core.IndexedSeq(G__18564__a,0,null);
} 
return G__18563__delegate.call(this,args);};
G__18563.cljs$lang$maxFixedArity = 0;
G__18563.cljs$lang$applyTo = (function (arglist__18565){
var args = cljs.core.seq(arglist__18565);
return G__18563__delegate(args);
});
G__18563.cljs$core$IFn$_invoke$arity$variadic = G__18563__delegate;
return G__18563;
})()
;

return null;
});
