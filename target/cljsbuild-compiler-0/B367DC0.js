goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__17811__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__17811 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17812__i = 0, G__17812__a = new Array(arguments.length -  0);
while (G__17812__i < G__17812__a.length) {G__17812__a[G__17812__i] = arguments[G__17812__i + 0]; ++G__17812__i;}
  args = new cljs.core.IndexedSeq(G__17812__a,0,null);
} 
return G__17811__delegate.call(this,args);};
G__17811.cljs$lang$maxFixedArity = 0;
G__17811.cljs$lang$applyTo = (function (arglist__17813){
var args = cljs.core.seq(arglist__17813);
return G__17811__delegate(args);
});
G__17811.cljs$core$IFn$_invoke$arity$variadic = G__17811__delegate;
return G__17811;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__17814__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__17814 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17815__i = 0, G__17815__a = new Array(arguments.length -  0);
while (G__17815__i < G__17815__a.length) {G__17815__a[G__17815__i] = arguments[G__17815__i + 0]; ++G__17815__i;}
  args = new cljs.core.IndexedSeq(G__17815__a,0,null);
} 
return G__17814__delegate.call(this,args);};
G__17814.cljs$lang$maxFixedArity = 0;
G__17814.cljs$lang$applyTo = (function (arglist__17816){
var args = cljs.core.seq(arglist__17816);
return G__17814__delegate(args);
});
G__17814.cljs$core$IFn$_invoke$arity$variadic = G__17814__delegate;
return G__17814;
})()
;

return null;
});
