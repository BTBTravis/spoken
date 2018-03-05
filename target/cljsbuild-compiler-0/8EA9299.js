goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12221__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12221 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12222__i = 0, G__12222__a = new Array(arguments.length -  0);
while (G__12222__i < G__12222__a.length) {G__12222__a[G__12222__i] = arguments[G__12222__i + 0]; ++G__12222__i;}
  args = new cljs.core.IndexedSeq(G__12222__a,0,null);
} 
return G__12221__delegate.call(this,args);};
G__12221.cljs$lang$maxFixedArity = 0;
G__12221.cljs$lang$applyTo = (function (arglist__12223){
var args = cljs.core.seq(arglist__12223);
return G__12221__delegate(args);
});
G__12221.cljs$core$IFn$_invoke$arity$variadic = G__12221__delegate;
return G__12221;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12224__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12224 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12225__i = 0, G__12225__a = new Array(arguments.length -  0);
while (G__12225__i < G__12225__a.length) {G__12225__a[G__12225__i] = arguments[G__12225__i + 0]; ++G__12225__i;}
  args = new cljs.core.IndexedSeq(G__12225__a,0,null);
} 
return G__12224__delegate.call(this,args);};
G__12224.cljs$lang$maxFixedArity = 0;
G__12224.cljs$lang$applyTo = (function (arglist__12226){
var args = cljs.core.seq(arglist__12226);
return G__12224__delegate(args);
});
G__12224.cljs$core$IFn$_invoke$arity$variadic = G__12224__delegate;
return G__12224;
})()
;

return null;
});
