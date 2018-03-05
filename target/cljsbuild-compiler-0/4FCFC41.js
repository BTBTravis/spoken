goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15424__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15424 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15425__i = 0, G__15425__a = new Array(arguments.length -  0);
while (G__15425__i < G__15425__a.length) {G__15425__a[G__15425__i] = arguments[G__15425__i + 0]; ++G__15425__i;}
  args = new cljs.core.IndexedSeq(G__15425__a,0,null);
} 
return G__15424__delegate.call(this,args);};
G__15424.cljs$lang$maxFixedArity = 0;
G__15424.cljs$lang$applyTo = (function (arglist__15426){
var args = cljs.core.seq(arglist__15426);
return G__15424__delegate(args);
});
G__15424.cljs$core$IFn$_invoke$arity$variadic = G__15424__delegate;
return G__15424;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15427__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15427 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15428__i = 0, G__15428__a = new Array(arguments.length -  0);
while (G__15428__i < G__15428__a.length) {G__15428__a[G__15428__i] = arguments[G__15428__i + 0]; ++G__15428__i;}
  args = new cljs.core.IndexedSeq(G__15428__a,0,null);
} 
return G__15427__delegate.call(this,args);};
G__15427.cljs$lang$maxFixedArity = 0;
G__15427.cljs$lang$applyTo = (function (arglist__15429){
var args = cljs.core.seq(arglist__15429);
return G__15427__delegate(args);
});
G__15427.cljs$core$IFn$_invoke$arity$variadic = G__15427__delegate;
return G__15427;
})()
;

return null;
});
