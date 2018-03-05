goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15779__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15779 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15780__i = 0, G__15780__a = new Array(arguments.length -  0);
while (G__15780__i < G__15780__a.length) {G__15780__a[G__15780__i] = arguments[G__15780__i + 0]; ++G__15780__i;}
  args = new cljs.core.IndexedSeq(G__15780__a,0,null);
} 
return G__15779__delegate.call(this,args);};
G__15779.cljs$lang$maxFixedArity = 0;
G__15779.cljs$lang$applyTo = (function (arglist__15781){
var args = cljs.core.seq(arglist__15781);
return G__15779__delegate(args);
});
G__15779.cljs$core$IFn$_invoke$arity$variadic = G__15779__delegate;
return G__15779;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15782__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15782 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15783__i = 0, G__15783__a = new Array(arguments.length -  0);
while (G__15783__i < G__15783__a.length) {G__15783__a[G__15783__i] = arguments[G__15783__i + 0]; ++G__15783__i;}
  args = new cljs.core.IndexedSeq(G__15783__a,0,null);
} 
return G__15782__delegate.call(this,args);};
G__15782.cljs$lang$maxFixedArity = 0;
G__15782.cljs$lang$applyTo = (function (arglist__15784){
var args = cljs.core.seq(arglist__15784);
return G__15782__delegate(args);
});
G__15782.cljs$core$IFn$_invoke$arity$variadic = G__15782__delegate;
return G__15782;
})()
;

return null;
});
