goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16913__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16913 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16914__i = 0, G__16914__a = new Array(arguments.length -  0);
while (G__16914__i < G__16914__a.length) {G__16914__a[G__16914__i] = arguments[G__16914__i + 0]; ++G__16914__i;}
  args = new cljs.core.IndexedSeq(G__16914__a,0,null);
} 
return G__16913__delegate.call(this,args);};
G__16913.cljs$lang$maxFixedArity = 0;
G__16913.cljs$lang$applyTo = (function (arglist__16915){
var args = cljs.core.seq(arglist__16915);
return G__16913__delegate(args);
});
G__16913.cljs$core$IFn$_invoke$arity$variadic = G__16913__delegate;
return G__16913;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16916__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16916 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16917__i = 0, G__16917__a = new Array(arguments.length -  0);
while (G__16917__i < G__16917__a.length) {G__16917__a[G__16917__i] = arguments[G__16917__i + 0]; ++G__16917__i;}
  args = new cljs.core.IndexedSeq(G__16917__a,0,null);
} 
return G__16916__delegate.call(this,args);};
G__16916.cljs$lang$maxFixedArity = 0;
G__16916.cljs$lang$applyTo = (function (arglist__16918){
var args = cljs.core.seq(arglist__16918);
return G__16916__delegate(args);
});
G__16916.cljs$core$IFn$_invoke$arity$variadic = G__16916__delegate;
return G__16916;
})()
;

return null;
});
