goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12114__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12114 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12115__i = 0, G__12115__a = new Array(arguments.length -  0);
while (G__12115__i < G__12115__a.length) {G__12115__a[G__12115__i] = arguments[G__12115__i + 0]; ++G__12115__i;}
  args = new cljs.core.IndexedSeq(G__12115__a,0,null);
} 
return G__12114__delegate.call(this,args);};
G__12114.cljs$lang$maxFixedArity = 0;
G__12114.cljs$lang$applyTo = (function (arglist__12116){
var args = cljs.core.seq(arglist__12116);
return G__12114__delegate(args);
});
G__12114.cljs$core$IFn$_invoke$arity$variadic = G__12114__delegate;
return G__12114;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12117__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12117 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12118__i = 0, G__12118__a = new Array(arguments.length -  0);
while (G__12118__i < G__12118__a.length) {G__12118__a[G__12118__i] = arguments[G__12118__i + 0]; ++G__12118__i;}
  args = new cljs.core.IndexedSeq(G__12118__a,0,null);
} 
return G__12117__delegate.call(this,args);};
G__12117.cljs$lang$maxFixedArity = 0;
G__12117.cljs$lang$applyTo = (function (arglist__12119){
var args = cljs.core.seq(arglist__12119);
return G__12117__delegate(args);
});
G__12117.cljs$core$IFn$_invoke$arity$variadic = G__12117__delegate;
return G__12117;
})()
;

return null;
});
