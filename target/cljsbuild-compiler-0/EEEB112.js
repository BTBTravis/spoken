goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13556__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13556 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13557__i = 0, G__13557__a = new Array(arguments.length -  0);
while (G__13557__i < G__13557__a.length) {G__13557__a[G__13557__i] = arguments[G__13557__i + 0]; ++G__13557__i;}
  args = new cljs.core.IndexedSeq(G__13557__a,0,null);
} 
return G__13556__delegate.call(this,args);};
G__13556.cljs$lang$maxFixedArity = 0;
G__13556.cljs$lang$applyTo = (function (arglist__13558){
var args = cljs.core.seq(arglist__13558);
return G__13556__delegate(args);
});
G__13556.cljs$core$IFn$_invoke$arity$variadic = G__13556__delegate;
return G__13556;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13559__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13559 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13560__i = 0, G__13560__a = new Array(arguments.length -  0);
while (G__13560__i < G__13560__a.length) {G__13560__a[G__13560__i] = arguments[G__13560__i + 0]; ++G__13560__i;}
  args = new cljs.core.IndexedSeq(G__13560__a,0,null);
} 
return G__13559__delegate.call(this,args);};
G__13559.cljs$lang$maxFixedArity = 0;
G__13559.cljs$lang$applyTo = (function (arglist__13561){
var args = cljs.core.seq(arglist__13561);
return G__13559__delegate(args);
});
G__13559.cljs$core$IFn$_invoke$arity$variadic = G__13559__delegate;
return G__13559;
})()
;

return null;
});
