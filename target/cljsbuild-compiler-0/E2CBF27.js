goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11283__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11283 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11284__i = 0, G__11284__a = new Array(arguments.length -  0);
while (G__11284__i < G__11284__a.length) {G__11284__a[G__11284__i] = arguments[G__11284__i + 0]; ++G__11284__i;}
  args = new cljs.core.IndexedSeq(G__11284__a,0,null);
} 
return G__11283__delegate.call(this,args);};
G__11283.cljs$lang$maxFixedArity = 0;
G__11283.cljs$lang$applyTo = (function (arglist__11285){
var args = cljs.core.seq(arglist__11285);
return G__11283__delegate(args);
});
G__11283.cljs$core$IFn$_invoke$arity$variadic = G__11283__delegate;
return G__11283;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11286__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11286 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11287__i = 0, G__11287__a = new Array(arguments.length -  0);
while (G__11287__i < G__11287__a.length) {G__11287__a[G__11287__i] = arguments[G__11287__i + 0]; ++G__11287__i;}
  args = new cljs.core.IndexedSeq(G__11287__a,0,null);
} 
return G__11286__delegate.call(this,args);};
G__11286.cljs$lang$maxFixedArity = 0;
G__11286.cljs$lang$applyTo = (function (arglist__11288){
var args = cljs.core.seq(arglist__11288);
return G__11286__delegate(args);
});
G__11286.cljs$core$IFn$_invoke$arity$variadic = G__11286__delegate;
return G__11286;
})()
;

return null;
});
