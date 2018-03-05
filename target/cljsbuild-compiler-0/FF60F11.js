goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16919__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16919 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16920__i = 0, G__16920__a = new Array(arguments.length -  0);
while (G__16920__i < G__16920__a.length) {G__16920__a[G__16920__i] = arguments[G__16920__i + 0]; ++G__16920__i;}
  args = new cljs.core.IndexedSeq(G__16920__a,0,null);
} 
return G__16919__delegate.call(this,args);};
G__16919.cljs$lang$maxFixedArity = 0;
G__16919.cljs$lang$applyTo = (function (arglist__16921){
var args = cljs.core.seq(arglist__16921);
return G__16919__delegate(args);
});
G__16919.cljs$core$IFn$_invoke$arity$variadic = G__16919__delegate;
return G__16919;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16922__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16922 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16923__i = 0, G__16923__a = new Array(arguments.length -  0);
while (G__16923__i < G__16923__a.length) {G__16923__a[G__16923__i] = arguments[G__16923__i + 0]; ++G__16923__i;}
  args = new cljs.core.IndexedSeq(G__16923__a,0,null);
} 
return G__16922__delegate.call(this,args);};
G__16922.cljs$lang$maxFixedArity = 0;
G__16922.cljs$lang$applyTo = (function (arglist__16924){
var args = cljs.core.seq(arglist__16924);
return G__16922__delegate(args);
});
G__16922.cljs$core$IFn$_invoke$arity$variadic = G__16922__delegate;
return G__16922;
})()
;

return null;
});
