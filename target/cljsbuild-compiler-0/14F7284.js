goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13349__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13349 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13350__i = 0, G__13350__a = new Array(arguments.length -  0);
while (G__13350__i < G__13350__a.length) {G__13350__a[G__13350__i] = arguments[G__13350__i + 0]; ++G__13350__i;}
  args = new cljs.core.IndexedSeq(G__13350__a,0,null);
} 
return G__13349__delegate.call(this,args);};
G__13349.cljs$lang$maxFixedArity = 0;
G__13349.cljs$lang$applyTo = (function (arglist__13351){
var args = cljs.core.seq(arglist__13351);
return G__13349__delegate(args);
});
G__13349.cljs$core$IFn$_invoke$arity$variadic = G__13349__delegate;
return G__13349;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13352__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13352 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13353__i = 0, G__13353__a = new Array(arguments.length -  0);
while (G__13353__i < G__13353__a.length) {G__13353__a[G__13353__i] = arguments[G__13353__i + 0]; ++G__13353__i;}
  args = new cljs.core.IndexedSeq(G__13353__a,0,null);
} 
return G__13352__delegate.call(this,args);};
G__13352.cljs$lang$maxFixedArity = 0;
G__13352.cljs$lang$applyTo = (function (arglist__13354){
var args = cljs.core.seq(arglist__13354);
return G__13352__delegate(args);
});
G__13352.cljs$core$IFn$_invoke$arity$variadic = G__13352__delegate;
return G__13352;
})()
;

return null;
});
