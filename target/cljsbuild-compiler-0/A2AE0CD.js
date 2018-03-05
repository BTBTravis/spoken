goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12948__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12948 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12949__i = 0, G__12949__a = new Array(arguments.length -  0);
while (G__12949__i < G__12949__a.length) {G__12949__a[G__12949__i] = arguments[G__12949__i + 0]; ++G__12949__i;}
  args = new cljs.core.IndexedSeq(G__12949__a,0,null);
} 
return G__12948__delegate.call(this,args);};
G__12948.cljs$lang$maxFixedArity = 0;
G__12948.cljs$lang$applyTo = (function (arglist__12950){
var args = cljs.core.seq(arglist__12950);
return G__12948__delegate(args);
});
G__12948.cljs$core$IFn$_invoke$arity$variadic = G__12948__delegate;
return G__12948;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12951__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12951 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12952__i = 0, G__12952__a = new Array(arguments.length -  0);
while (G__12952__i < G__12952__a.length) {G__12952__a[G__12952__i] = arguments[G__12952__i + 0]; ++G__12952__i;}
  args = new cljs.core.IndexedSeq(G__12952__a,0,null);
} 
return G__12951__delegate.call(this,args);};
G__12951.cljs$lang$maxFixedArity = 0;
G__12951.cljs$lang$applyTo = (function (arglist__12953){
var args = cljs.core.seq(arglist__12953);
return G__12951__delegate(args);
});
G__12951.cljs$core$IFn$_invoke$arity$variadic = G__12951__delegate;
return G__12951;
})()
;

return null;
});
