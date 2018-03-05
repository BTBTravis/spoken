goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16812__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16812 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16813__i = 0, G__16813__a = new Array(arguments.length -  0);
while (G__16813__i < G__16813__a.length) {G__16813__a[G__16813__i] = arguments[G__16813__i + 0]; ++G__16813__i;}
  args = new cljs.core.IndexedSeq(G__16813__a,0,null);
} 
return G__16812__delegate.call(this,args);};
G__16812.cljs$lang$maxFixedArity = 0;
G__16812.cljs$lang$applyTo = (function (arglist__16814){
var args = cljs.core.seq(arglist__16814);
return G__16812__delegate(args);
});
G__16812.cljs$core$IFn$_invoke$arity$variadic = G__16812__delegate;
return G__16812;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16815__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16815 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16816__i = 0, G__16816__a = new Array(arguments.length -  0);
while (G__16816__i < G__16816__a.length) {G__16816__a[G__16816__i] = arguments[G__16816__i + 0]; ++G__16816__i;}
  args = new cljs.core.IndexedSeq(G__16816__a,0,null);
} 
return G__16815__delegate.call(this,args);};
G__16815.cljs$lang$maxFixedArity = 0;
G__16815.cljs$lang$applyTo = (function (arglist__16817){
var args = cljs.core.seq(arglist__16817);
return G__16815__delegate(args);
});
G__16815.cljs$core$IFn$_invoke$arity$variadic = G__16815__delegate;
return G__16815;
})()
;

return null;
});
