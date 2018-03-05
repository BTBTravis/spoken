goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12739__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12739 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12740__i = 0, G__12740__a = new Array(arguments.length -  0);
while (G__12740__i < G__12740__a.length) {G__12740__a[G__12740__i] = arguments[G__12740__i + 0]; ++G__12740__i;}
  args = new cljs.core.IndexedSeq(G__12740__a,0,null);
} 
return G__12739__delegate.call(this,args);};
G__12739.cljs$lang$maxFixedArity = 0;
G__12739.cljs$lang$applyTo = (function (arglist__12741){
var args = cljs.core.seq(arglist__12741);
return G__12739__delegate(args);
});
G__12739.cljs$core$IFn$_invoke$arity$variadic = G__12739__delegate;
return G__12739;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12742__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12742 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12743__i = 0, G__12743__a = new Array(arguments.length -  0);
while (G__12743__i < G__12743__a.length) {G__12743__a[G__12743__i] = arguments[G__12743__i + 0]; ++G__12743__i;}
  args = new cljs.core.IndexedSeq(G__12743__a,0,null);
} 
return G__12742__delegate.call(this,args);};
G__12742.cljs$lang$maxFixedArity = 0;
G__12742.cljs$lang$applyTo = (function (arglist__12744){
var args = cljs.core.seq(arglist__12744);
return G__12742__delegate(args);
});
G__12742.cljs$core$IFn$_invoke$arity$variadic = G__12742__delegate;
return G__12742;
})()
;

return null;
});
