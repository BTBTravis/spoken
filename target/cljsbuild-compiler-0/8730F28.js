goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12636__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12636 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12637__i = 0, G__12637__a = new Array(arguments.length -  0);
while (G__12637__i < G__12637__a.length) {G__12637__a[G__12637__i] = arguments[G__12637__i + 0]; ++G__12637__i;}
  args = new cljs.core.IndexedSeq(G__12637__a,0,null);
} 
return G__12636__delegate.call(this,args);};
G__12636.cljs$lang$maxFixedArity = 0;
G__12636.cljs$lang$applyTo = (function (arglist__12638){
var args = cljs.core.seq(arglist__12638);
return G__12636__delegate(args);
});
G__12636.cljs$core$IFn$_invoke$arity$variadic = G__12636__delegate;
return G__12636;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12639__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12639 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12640__i = 0, G__12640__a = new Array(arguments.length -  0);
while (G__12640__i < G__12640__a.length) {G__12640__a[G__12640__i] = arguments[G__12640__i + 0]; ++G__12640__i;}
  args = new cljs.core.IndexedSeq(G__12640__a,0,null);
} 
return G__12639__delegate.call(this,args);};
G__12639.cljs$lang$maxFixedArity = 0;
G__12639.cljs$lang$applyTo = (function (arglist__12641){
var args = cljs.core.seq(arglist__12641);
return G__12639__delegate(args);
});
G__12639.cljs$core$IFn$_invoke$arity$variadic = G__12639__delegate;
return G__12639;
})()
;

return null;
});
