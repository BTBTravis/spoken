goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11332__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11332 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11333__i = 0, G__11333__a = new Array(arguments.length -  0);
while (G__11333__i < G__11333__a.length) {G__11333__a[G__11333__i] = arguments[G__11333__i + 0]; ++G__11333__i;}
  args = new cljs.core.IndexedSeq(G__11333__a,0,null);
} 
return G__11332__delegate.call(this,args);};
G__11332.cljs$lang$maxFixedArity = 0;
G__11332.cljs$lang$applyTo = (function (arglist__11334){
var args = cljs.core.seq(arglist__11334);
return G__11332__delegate(args);
});
G__11332.cljs$core$IFn$_invoke$arity$variadic = G__11332__delegate;
return G__11332;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11335__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11335 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11336__i = 0, G__11336__a = new Array(arguments.length -  0);
while (G__11336__i < G__11336__a.length) {G__11336__a[G__11336__i] = arguments[G__11336__i + 0]; ++G__11336__i;}
  args = new cljs.core.IndexedSeq(G__11336__a,0,null);
} 
return G__11335__delegate.call(this,args);};
G__11335.cljs$lang$maxFixedArity = 0;
G__11335.cljs$lang$applyTo = (function (arglist__11337){
var args = cljs.core.seq(arglist__11337);
return G__11335__delegate(args);
});
G__11335.cljs$core$IFn$_invoke$arity$variadic = G__11335__delegate;
return G__11335;
})()
;

return null;
});
