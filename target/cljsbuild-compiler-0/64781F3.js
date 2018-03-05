goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16000__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16000 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16001__i = 0, G__16001__a = new Array(arguments.length -  0);
while (G__16001__i < G__16001__a.length) {G__16001__a[G__16001__i] = arguments[G__16001__i + 0]; ++G__16001__i;}
  args = new cljs.core.IndexedSeq(G__16001__a,0,null);
} 
return G__16000__delegate.call(this,args);};
G__16000.cljs$lang$maxFixedArity = 0;
G__16000.cljs$lang$applyTo = (function (arglist__16002){
var args = cljs.core.seq(arglist__16002);
return G__16000__delegate(args);
});
G__16000.cljs$core$IFn$_invoke$arity$variadic = G__16000__delegate;
return G__16000;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16003__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16003 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16004__i = 0, G__16004__a = new Array(arguments.length -  0);
while (G__16004__i < G__16004__a.length) {G__16004__a[G__16004__i] = arguments[G__16004__i + 0]; ++G__16004__i;}
  args = new cljs.core.IndexedSeq(G__16004__a,0,null);
} 
return G__16003__delegate.call(this,args);};
G__16003.cljs$lang$maxFixedArity = 0;
G__16003.cljs$lang$applyTo = (function (arglist__16005){
var args = cljs.core.seq(arglist__16005);
return G__16003__delegate(args);
});
G__16003.cljs$core$IFn$_invoke$arity$variadic = G__16003__delegate;
return G__16003;
})()
;

return null;
});
