goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12323__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12323 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12324__i = 0, G__12324__a = new Array(arguments.length -  0);
while (G__12324__i < G__12324__a.length) {G__12324__a[G__12324__i] = arguments[G__12324__i + 0]; ++G__12324__i;}
  args = new cljs.core.IndexedSeq(G__12324__a,0,null);
} 
return G__12323__delegate.call(this,args);};
G__12323.cljs$lang$maxFixedArity = 0;
G__12323.cljs$lang$applyTo = (function (arglist__12325){
var args = cljs.core.seq(arglist__12325);
return G__12323__delegate(args);
});
G__12323.cljs$core$IFn$_invoke$arity$variadic = G__12323__delegate;
return G__12323;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12326__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12326 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12327__i = 0, G__12327__a = new Array(arguments.length -  0);
while (G__12327__i < G__12327__a.length) {G__12327__a[G__12327__i] = arguments[G__12327__i + 0]; ++G__12327__i;}
  args = new cljs.core.IndexedSeq(G__12327__a,0,null);
} 
return G__12326__delegate.call(this,args);};
G__12326.cljs$lang$maxFixedArity = 0;
G__12326.cljs$lang$applyTo = (function (arglist__12328){
var args = cljs.core.seq(arglist__12328);
return G__12326__delegate(args);
});
G__12326.cljs$core$IFn$_invoke$arity$variadic = G__12326__delegate;
return G__12326;
})()
;

return null;
});
