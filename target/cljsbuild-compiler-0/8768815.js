goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13151__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13151 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13152__i = 0, G__13152__a = new Array(arguments.length -  0);
while (G__13152__i < G__13152__a.length) {G__13152__a[G__13152__i] = arguments[G__13152__i + 0]; ++G__13152__i;}
  args = new cljs.core.IndexedSeq(G__13152__a,0,null);
} 
return G__13151__delegate.call(this,args);};
G__13151.cljs$lang$maxFixedArity = 0;
G__13151.cljs$lang$applyTo = (function (arglist__13153){
var args = cljs.core.seq(arglist__13153);
return G__13151__delegate(args);
});
G__13151.cljs$core$IFn$_invoke$arity$variadic = G__13151__delegate;
return G__13151;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13154__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13154 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13155__i = 0, G__13155__a = new Array(arguments.length -  0);
while (G__13155__i < G__13155__a.length) {G__13155__a[G__13155__i] = arguments[G__13155__i + 0]; ++G__13155__i;}
  args = new cljs.core.IndexedSeq(G__13155__a,0,null);
} 
return G__13154__delegate.call(this,args);};
G__13154.cljs$lang$maxFixedArity = 0;
G__13154.cljs$lang$applyTo = (function (arglist__13156){
var args = cljs.core.seq(arglist__13156);
return G__13154__delegate(args);
});
G__13154.cljs$core$IFn$_invoke$arity$variadic = G__13154__delegate;
return G__13154;
})()
;

return null;
});
