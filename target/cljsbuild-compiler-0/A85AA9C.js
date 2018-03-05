goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15733__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15733 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15734__i = 0, G__15734__a = new Array(arguments.length -  0);
while (G__15734__i < G__15734__a.length) {G__15734__a[G__15734__i] = arguments[G__15734__i + 0]; ++G__15734__i;}
  args = new cljs.core.IndexedSeq(G__15734__a,0,null);
} 
return G__15733__delegate.call(this,args);};
G__15733.cljs$lang$maxFixedArity = 0;
G__15733.cljs$lang$applyTo = (function (arglist__15735){
var args = cljs.core.seq(arglist__15735);
return G__15733__delegate(args);
});
G__15733.cljs$core$IFn$_invoke$arity$variadic = G__15733__delegate;
return G__15733;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15736__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15736 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15737__i = 0, G__15737__a = new Array(arguments.length -  0);
while (G__15737__i < G__15737__a.length) {G__15737__a[G__15737__i] = arguments[G__15737__i + 0]; ++G__15737__i;}
  args = new cljs.core.IndexedSeq(G__15737__a,0,null);
} 
return G__15736__delegate.call(this,args);};
G__15736.cljs$lang$maxFixedArity = 0;
G__15736.cljs$lang$applyTo = (function (arglist__15738){
var args = cljs.core.seq(arglist__15738);
return G__15736__delegate(args);
});
G__15736.cljs$core$IFn$_invoke$arity$variadic = G__15736__delegate;
return G__15736;
})()
;

return null;
});
