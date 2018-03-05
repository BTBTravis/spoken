goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18105__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18105 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18106__i = 0, G__18106__a = new Array(arguments.length -  0);
while (G__18106__i < G__18106__a.length) {G__18106__a[G__18106__i] = arguments[G__18106__i + 0]; ++G__18106__i;}
  args = new cljs.core.IndexedSeq(G__18106__a,0,null);
} 
return G__18105__delegate.call(this,args);};
G__18105.cljs$lang$maxFixedArity = 0;
G__18105.cljs$lang$applyTo = (function (arglist__18107){
var args = cljs.core.seq(arglist__18107);
return G__18105__delegate(args);
});
G__18105.cljs$core$IFn$_invoke$arity$variadic = G__18105__delegate;
return G__18105;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18108__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18108 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18109__i = 0, G__18109__a = new Array(arguments.length -  0);
while (G__18109__i < G__18109__a.length) {G__18109__a[G__18109__i] = arguments[G__18109__i + 0]; ++G__18109__i;}
  args = new cljs.core.IndexedSeq(G__18109__a,0,null);
} 
return G__18108__delegate.call(this,args);};
G__18108.cljs$lang$maxFixedArity = 0;
G__18108.cljs$lang$applyTo = (function (arglist__18110){
var args = cljs.core.seq(arglist__18110);
return G__18108__delegate(args);
});
G__18108.cljs$core$IFn$_invoke$arity$variadic = G__18108__delegate;
return G__18108;
})()
;

return null;
});
