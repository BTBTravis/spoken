goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__21420__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__21420 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21421__i = 0, G__21421__a = new Array(arguments.length -  0);
while (G__21421__i < G__21421__a.length) {G__21421__a[G__21421__i] = arguments[G__21421__i + 0]; ++G__21421__i;}
  args = new cljs.core.IndexedSeq(G__21421__a,0,null);
} 
return G__21420__delegate.call(this,args);};
G__21420.cljs$lang$maxFixedArity = 0;
G__21420.cljs$lang$applyTo = (function (arglist__21422){
var args = cljs.core.seq(arglist__21422);
return G__21420__delegate(args);
});
G__21420.cljs$core$IFn$_invoke$arity$variadic = G__21420__delegate;
return G__21420;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__21423__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__21423 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21424__i = 0, G__21424__a = new Array(arguments.length -  0);
while (G__21424__i < G__21424__a.length) {G__21424__a[G__21424__i] = arguments[G__21424__i + 0]; ++G__21424__i;}
  args = new cljs.core.IndexedSeq(G__21424__a,0,null);
} 
return G__21423__delegate.call(this,args);};
G__21423.cljs$lang$maxFixedArity = 0;
G__21423.cljs$lang$applyTo = (function (arglist__21425){
var args = cljs.core.seq(arglist__21425);
return G__21423__delegate(args);
});
G__21423.cljs$core$IFn$_invoke$arity$variadic = G__21423__delegate;
return G__21423;
})()
;

return null;
});
