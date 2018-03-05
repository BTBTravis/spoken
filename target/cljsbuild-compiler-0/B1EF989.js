goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15212__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15212 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15213__i = 0, G__15213__a = new Array(arguments.length -  0);
while (G__15213__i < G__15213__a.length) {G__15213__a[G__15213__i] = arguments[G__15213__i + 0]; ++G__15213__i;}
  args = new cljs.core.IndexedSeq(G__15213__a,0,null);
} 
return G__15212__delegate.call(this,args);};
G__15212.cljs$lang$maxFixedArity = 0;
G__15212.cljs$lang$applyTo = (function (arglist__15214){
var args = cljs.core.seq(arglist__15214);
return G__15212__delegate(args);
});
G__15212.cljs$core$IFn$_invoke$arity$variadic = G__15212__delegate;
return G__15212;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15215__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15215 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15216__i = 0, G__15216__a = new Array(arguments.length -  0);
while (G__15216__i < G__15216__a.length) {G__15216__a[G__15216__i] = arguments[G__15216__i + 0]; ++G__15216__i;}
  args = new cljs.core.IndexedSeq(G__15216__a,0,null);
} 
return G__15215__delegate.call(this,args);};
G__15215.cljs$lang$maxFixedArity = 0;
G__15215.cljs$lang$applyTo = (function (arglist__15217){
var args = cljs.core.seq(arglist__15217);
return G__15215__delegate(args);
});
G__15215.cljs$core$IFn$_invoke$arity$variadic = G__15215__delegate;
return G__15215;
})()
;

return null;
});
