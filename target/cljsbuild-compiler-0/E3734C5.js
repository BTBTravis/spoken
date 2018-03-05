goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15969__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15969 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15970__i = 0, G__15970__a = new Array(arguments.length -  0);
while (G__15970__i < G__15970__a.length) {G__15970__a[G__15970__i] = arguments[G__15970__i + 0]; ++G__15970__i;}
  args = new cljs.core.IndexedSeq(G__15970__a,0,null);
} 
return G__15969__delegate.call(this,args);};
G__15969.cljs$lang$maxFixedArity = 0;
G__15969.cljs$lang$applyTo = (function (arglist__15971){
var args = cljs.core.seq(arglist__15971);
return G__15969__delegate(args);
});
G__15969.cljs$core$IFn$_invoke$arity$variadic = G__15969__delegate;
return G__15969;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15972__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15972 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15973__i = 0, G__15973__a = new Array(arguments.length -  0);
while (G__15973__i < G__15973__a.length) {G__15973__a[G__15973__i] = arguments[G__15973__i + 0]; ++G__15973__i;}
  args = new cljs.core.IndexedSeq(G__15973__a,0,null);
} 
return G__15972__delegate.call(this,args);};
G__15972.cljs$lang$maxFixedArity = 0;
G__15972.cljs$lang$applyTo = (function (arglist__15974){
var args = cljs.core.seq(arglist__15974);
return G__15972__delegate(args);
});
G__15972.cljs$core$IFn$_invoke$arity$variadic = G__15972__delegate;
return G__15972;
})()
;

return null;
});
