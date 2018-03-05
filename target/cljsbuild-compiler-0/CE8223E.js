goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13763__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13763 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13764__i = 0, G__13764__a = new Array(arguments.length -  0);
while (G__13764__i < G__13764__a.length) {G__13764__a[G__13764__i] = arguments[G__13764__i + 0]; ++G__13764__i;}
  args = new cljs.core.IndexedSeq(G__13764__a,0,null);
} 
return G__13763__delegate.call(this,args);};
G__13763.cljs$lang$maxFixedArity = 0;
G__13763.cljs$lang$applyTo = (function (arglist__13765){
var args = cljs.core.seq(arglist__13765);
return G__13763__delegate(args);
});
G__13763.cljs$core$IFn$_invoke$arity$variadic = G__13763__delegate;
return G__13763;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13766__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13766 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13767__i = 0, G__13767__a = new Array(arguments.length -  0);
while (G__13767__i < G__13767__a.length) {G__13767__a[G__13767__i] = arguments[G__13767__i + 0]; ++G__13767__i;}
  args = new cljs.core.IndexedSeq(G__13767__a,0,null);
} 
return G__13766__delegate.call(this,args);};
G__13766.cljs$lang$maxFixedArity = 0;
G__13766.cljs$lang$applyTo = (function (arglist__13768){
var args = cljs.core.seq(arglist__13768);
return G__13766__delegate(args);
});
G__13766.cljs$core$IFn$_invoke$arity$variadic = G__13766__delegate;
return G__13766;
})()
;

return null;
});
