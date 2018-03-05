goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16707__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16707 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16708__i = 0, G__16708__a = new Array(arguments.length -  0);
while (G__16708__i < G__16708__a.length) {G__16708__a[G__16708__i] = arguments[G__16708__i + 0]; ++G__16708__i;}
  args = new cljs.core.IndexedSeq(G__16708__a,0,null);
} 
return G__16707__delegate.call(this,args);};
G__16707.cljs$lang$maxFixedArity = 0;
G__16707.cljs$lang$applyTo = (function (arglist__16709){
var args = cljs.core.seq(arglist__16709);
return G__16707__delegate(args);
});
G__16707.cljs$core$IFn$_invoke$arity$variadic = G__16707__delegate;
return G__16707;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16710__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16710 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16711__i = 0, G__16711__a = new Array(arguments.length -  0);
while (G__16711__i < G__16711__a.length) {G__16711__a[G__16711__i] = arguments[G__16711__i + 0]; ++G__16711__i;}
  args = new cljs.core.IndexedSeq(G__16711__a,0,null);
} 
return G__16710__delegate.call(this,args);};
G__16710.cljs$lang$maxFixedArity = 0;
G__16710.cljs$lang$applyTo = (function (arglist__16712){
var args = cljs.core.seq(arglist__16712);
return G__16710__delegate(args);
});
G__16710.cljs$core$IFn$_invoke$arity$variadic = G__16710__delegate;
return G__16710;
})()
;

return null;
});
