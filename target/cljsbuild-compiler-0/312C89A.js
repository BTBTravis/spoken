goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18333__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18333 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18334__i = 0, G__18334__a = new Array(arguments.length -  0);
while (G__18334__i < G__18334__a.length) {G__18334__a[G__18334__i] = arguments[G__18334__i + 0]; ++G__18334__i;}
  args = new cljs.core.IndexedSeq(G__18334__a,0,null);
} 
return G__18333__delegate.call(this,args);};
G__18333.cljs$lang$maxFixedArity = 0;
G__18333.cljs$lang$applyTo = (function (arglist__18335){
var args = cljs.core.seq(arglist__18335);
return G__18333__delegate(args);
});
G__18333.cljs$core$IFn$_invoke$arity$variadic = G__18333__delegate;
return G__18333;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18336__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18336 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18337__i = 0, G__18337__a = new Array(arguments.length -  0);
while (G__18337__i < G__18337__a.length) {G__18337__a[G__18337__i] = arguments[G__18337__i + 0]; ++G__18337__i;}
  args = new cljs.core.IndexedSeq(G__18337__a,0,null);
} 
return G__18336__delegate.call(this,args);};
G__18336.cljs$lang$maxFixedArity = 0;
G__18336.cljs$lang$applyTo = (function (arglist__18338){
var args = cljs.core.seq(arglist__18338);
return G__18336__delegate(args);
});
G__18336.cljs$core$IFn$_invoke$arity$variadic = G__18336__delegate;
return G__18336;
})()
;

return null;
});
