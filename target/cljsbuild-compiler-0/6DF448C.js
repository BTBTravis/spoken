goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16283__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16283 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16284__i = 0, G__16284__a = new Array(arguments.length -  0);
while (G__16284__i < G__16284__a.length) {G__16284__a[G__16284__i] = arguments[G__16284__i + 0]; ++G__16284__i;}
  args = new cljs.core.IndexedSeq(G__16284__a,0,null);
} 
return G__16283__delegate.call(this,args);};
G__16283.cljs$lang$maxFixedArity = 0;
G__16283.cljs$lang$applyTo = (function (arglist__16285){
var args = cljs.core.seq(arglist__16285);
return G__16283__delegate(args);
});
G__16283.cljs$core$IFn$_invoke$arity$variadic = G__16283__delegate;
return G__16283;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16286__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16286 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16287__i = 0, G__16287__a = new Array(arguments.length -  0);
while (G__16287__i < G__16287__a.length) {G__16287__a[G__16287__i] = arguments[G__16287__i + 0]; ++G__16287__i;}
  args = new cljs.core.IndexedSeq(G__16287__a,0,null);
} 
return G__16286__delegate.call(this,args);};
G__16286.cljs$lang$maxFixedArity = 0;
G__16286.cljs$lang$applyTo = (function (arglist__16288){
var args = cljs.core.seq(arglist__16288);
return G__16286__delegate(args);
});
G__16286.cljs$core$IFn$_invoke$arity$variadic = G__16286__delegate;
return G__16286;
})()
;

return null;
});
