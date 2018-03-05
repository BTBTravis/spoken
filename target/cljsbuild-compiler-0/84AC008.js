goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13970__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13970 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13971__i = 0, G__13971__a = new Array(arguments.length -  0);
while (G__13971__i < G__13971__a.length) {G__13971__a[G__13971__i] = arguments[G__13971__i + 0]; ++G__13971__i;}
  args = new cljs.core.IndexedSeq(G__13971__a,0,null);
} 
return G__13970__delegate.call(this,args);};
G__13970.cljs$lang$maxFixedArity = 0;
G__13970.cljs$lang$applyTo = (function (arglist__13972){
var args = cljs.core.seq(arglist__13972);
return G__13970__delegate(args);
});
G__13970.cljs$core$IFn$_invoke$arity$variadic = G__13970__delegate;
return G__13970;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13973__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13973 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13974__i = 0, G__13974__a = new Array(arguments.length -  0);
while (G__13974__i < G__13974__a.length) {G__13974__a[G__13974__i] = arguments[G__13974__i + 0]; ++G__13974__i;}
  args = new cljs.core.IndexedSeq(G__13974__a,0,null);
} 
return G__13973__delegate.call(this,args);};
G__13973.cljs$lang$maxFixedArity = 0;
G__13973.cljs$lang$applyTo = (function (arglist__13975){
var args = cljs.core.seq(arglist__13975);
return G__13973__delegate(args);
});
G__13973.cljs$core$IFn$_invoke$arity$variadic = G__13973__delegate;
return G__13973;
})()
;

return null;
});
