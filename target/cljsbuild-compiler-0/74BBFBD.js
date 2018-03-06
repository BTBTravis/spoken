goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13415__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13415 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13416__i = 0, G__13416__a = new Array(arguments.length -  0);
while (G__13416__i < G__13416__a.length) {G__13416__a[G__13416__i] = arguments[G__13416__i + 0]; ++G__13416__i;}
  args = new cljs.core.IndexedSeq(G__13416__a,0,null);
} 
return G__13415__delegate.call(this,args);};
G__13415.cljs$lang$maxFixedArity = 0;
G__13415.cljs$lang$applyTo = (function (arglist__13417){
var args = cljs.core.seq(arglist__13417);
return G__13415__delegate(args);
});
G__13415.cljs$core$IFn$_invoke$arity$variadic = G__13415__delegate;
return G__13415;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13418__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13418 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13419__i = 0, G__13419__a = new Array(arguments.length -  0);
while (G__13419__i < G__13419__a.length) {G__13419__a[G__13419__i] = arguments[G__13419__i + 0]; ++G__13419__i;}
  args = new cljs.core.IndexedSeq(G__13419__a,0,null);
} 
return G__13418__delegate.call(this,args);};
G__13418.cljs$lang$maxFixedArity = 0;
G__13418.cljs$lang$applyTo = (function (arglist__13420){
var args = cljs.core.seq(arglist__13420);
return G__13418__delegate(args);
});
G__13418.cljs$core$IFn$_invoke$arity$variadic = G__13418__delegate;
return G__13418;
})()
;

return null;
});
