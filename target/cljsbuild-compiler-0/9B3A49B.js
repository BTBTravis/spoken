goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12028__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12028 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12029__i = 0, G__12029__a = new Array(arguments.length -  0);
while (G__12029__i < G__12029__a.length) {G__12029__a[G__12029__i] = arguments[G__12029__i + 0]; ++G__12029__i;}
  args = new cljs.core.IndexedSeq(G__12029__a,0,null);
} 
return G__12028__delegate.call(this,args);};
G__12028.cljs$lang$maxFixedArity = 0;
G__12028.cljs$lang$applyTo = (function (arglist__12030){
var args = cljs.core.seq(arglist__12030);
return G__12028__delegate(args);
});
G__12028.cljs$core$IFn$_invoke$arity$variadic = G__12028__delegate;
return G__12028;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12031__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12031 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12032__i = 0, G__12032__a = new Array(arguments.length -  0);
while (G__12032__i < G__12032__a.length) {G__12032__a[G__12032__i] = arguments[G__12032__i + 0]; ++G__12032__i;}
  args = new cljs.core.IndexedSeq(G__12032__a,0,null);
} 
return G__12031__delegate.call(this,args);};
G__12031.cljs$lang$maxFixedArity = 0;
G__12031.cljs$lang$applyTo = (function (arglist__12033){
var args = cljs.core.seq(arglist__12033);
return G__12031__delegate(args);
});
G__12031.cljs$core$IFn$_invoke$arity$variadic = G__12031__delegate;
return G__12031;
})()
;

return null;
});
