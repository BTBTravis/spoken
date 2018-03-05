goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12466__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12466 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12467__i = 0, G__12467__a = new Array(arguments.length -  0);
while (G__12467__i < G__12467__a.length) {G__12467__a[G__12467__i] = arguments[G__12467__i + 0]; ++G__12467__i;}
  args = new cljs.core.IndexedSeq(G__12467__a,0,null);
} 
return G__12466__delegate.call(this,args);};
G__12466.cljs$lang$maxFixedArity = 0;
G__12466.cljs$lang$applyTo = (function (arglist__12468){
var args = cljs.core.seq(arglist__12468);
return G__12466__delegate(args);
});
G__12466.cljs$core$IFn$_invoke$arity$variadic = G__12466__delegate;
return G__12466;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12469__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12469 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12470__i = 0, G__12470__a = new Array(arguments.length -  0);
while (G__12470__i < G__12470__a.length) {G__12470__a[G__12470__i] = arguments[G__12470__i + 0]; ++G__12470__i;}
  args = new cljs.core.IndexedSeq(G__12470__a,0,null);
} 
return G__12469__delegate.call(this,args);};
G__12469.cljs$lang$maxFixedArity = 0;
G__12469.cljs$lang$applyTo = (function (arglist__12471){
var args = cljs.core.seq(arglist__12471);
return G__12469__delegate(args);
});
G__12469.cljs$core$IFn$_invoke$arity$variadic = G__12469__delegate;
return G__12469;
})()
;

return null;
});
