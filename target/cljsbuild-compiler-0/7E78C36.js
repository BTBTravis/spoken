goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16616__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16616 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16617__i = 0, G__16617__a = new Array(arguments.length -  0);
while (G__16617__i < G__16617__a.length) {G__16617__a[G__16617__i] = arguments[G__16617__i + 0]; ++G__16617__i;}
  args = new cljs.core.IndexedSeq(G__16617__a,0,null);
} 
return G__16616__delegate.call(this,args);};
G__16616.cljs$lang$maxFixedArity = 0;
G__16616.cljs$lang$applyTo = (function (arglist__16618){
var args = cljs.core.seq(arglist__16618);
return G__16616__delegate(args);
});
G__16616.cljs$core$IFn$_invoke$arity$variadic = G__16616__delegate;
return G__16616;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16619__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16619 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16620__i = 0, G__16620__a = new Array(arguments.length -  0);
while (G__16620__i < G__16620__a.length) {G__16620__a[G__16620__i] = arguments[G__16620__i + 0]; ++G__16620__i;}
  args = new cljs.core.IndexedSeq(G__16620__a,0,null);
} 
return G__16619__delegate.call(this,args);};
G__16619.cljs$lang$maxFixedArity = 0;
G__16619.cljs$lang$applyTo = (function (arglist__16621){
var args = cljs.core.seq(arglist__16621);
return G__16619__delegate(args);
});
G__16619.cljs$core$IFn$_invoke$arity$variadic = G__16619__delegate;
return G__16619;
})()
;

return null;
});
