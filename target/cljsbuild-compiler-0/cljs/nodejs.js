// Compiled by ClojureScript 1.9.946 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14544__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14544 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14545__i = 0, G__14545__a = new Array(arguments.length -  0);
while (G__14545__i < G__14545__a.length) {G__14545__a[G__14545__i] = arguments[G__14545__i + 0]; ++G__14545__i;}
  args = new cljs.core.IndexedSeq(G__14545__a,0,null);
} 
return G__14544__delegate.call(this,args);};
G__14544.cljs$lang$maxFixedArity = 0;
G__14544.cljs$lang$applyTo = (function (arglist__14546){
var args = cljs.core.seq(arglist__14546);
return G__14544__delegate(args);
});
G__14544.cljs$core$IFn$_invoke$arity$variadic = G__14544__delegate;
return G__14544;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14547__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14547 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14548__i = 0, G__14548__a = new Array(arguments.length -  0);
while (G__14548__i < G__14548__a.length) {G__14548__a[G__14548__i] = arguments[G__14548__i + 0]; ++G__14548__i;}
  args = new cljs.core.IndexedSeq(G__14548__a,0,null);
} 
return G__14547__delegate.call(this,args);};
G__14547.cljs$lang$maxFixedArity = 0;
G__14547.cljs$lang$applyTo = (function (arglist__14549){
var args = cljs.core.seq(arglist__14549);
return G__14547__delegate(args);
});
G__14547.cljs$core$IFn$_invoke$arity$variadic = G__14547__delegate;
return G__14547;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map
