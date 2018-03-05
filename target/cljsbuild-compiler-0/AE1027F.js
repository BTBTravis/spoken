goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12916__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12916 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12917__i = 0, G__12917__a = new Array(arguments.length -  0);
while (G__12917__i < G__12917__a.length) {G__12917__a[G__12917__i] = arguments[G__12917__i + 0]; ++G__12917__i;}
  args = new cljs.core.IndexedSeq(G__12917__a,0,null);
} 
return G__12916__delegate.call(this,args);};
G__12916.cljs$lang$maxFixedArity = 0;
G__12916.cljs$lang$applyTo = (function (arglist__12918){
var args = cljs.core.seq(arglist__12918);
return G__12916__delegate(args);
});
G__12916.cljs$core$IFn$_invoke$arity$variadic = G__12916__delegate;
return G__12916;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12919__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12919 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12920__i = 0, G__12920__a = new Array(arguments.length -  0);
while (G__12920__i < G__12920__a.length) {G__12920__a[G__12920__i] = arguments[G__12920__i + 0]; ++G__12920__i;}
  args = new cljs.core.IndexedSeq(G__12920__a,0,null);
} 
return G__12919__delegate.call(this,args);};
G__12919.cljs$lang$maxFixedArity = 0;
G__12919.cljs$lang$applyTo = (function (arglist__12921){
var args = cljs.core.seq(arglist__12921);
return G__12919__delegate(args);
});
G__12919.cljs$core$IFn$_invoke$arity$variadic = G__12919__delegate;
return G__12919;
})()
;

return null;
});
