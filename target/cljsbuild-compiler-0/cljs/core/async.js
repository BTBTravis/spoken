// Compiled by ClojureScript 1.9.946 {:target :nodejs}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__11097 = arguments.length;
switch (G__11097) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async11098 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11098 = (function (f,blockable,meta11099){
this.f = f;
this.blockable = blockable;
this.meta11099 = meta11099;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async11098.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11100,meta11099__$1){
var self__ = this;
var _11100__$1 = this;
return (new cljs.core.async.t_cljs$core$async11098(self__.f,self__.blockable,meta11099__$1));
});

cljs.core.async.t_cljs$core$async11098.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11100){
var self__ = this;
var _11100__$1 = this;
return self__.meta11099;
});

cljs.core.async.t_cljs$core$async11098.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11098.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async11098.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async11098.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async11098.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta11099","meta11099",-784557090,null)], null);
});

cljs.core.async.t_cljs$core$async11098.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11098.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11098";

cljs.core.async.t_cljs$core$async11098.cljs$lang$ctorPrWriter = (function (this__8677__auto__,writer__8678__auto__,opt__8679__auto__){
return cljs.core._write.call(null,writer__8678__auto__,"cljs.core.async/t_cljs$core$async11098");
});

cljs.core.async.__GT_t_cljs$core$async11098 = (function cljs$core$async$__GT_t_cljs$core$async11098(f__$1,blockable__$1,meta11099){
return (new cljs.core.async.t_cljs$core$async11098(f__$1,blockable__$1,meta11099));
});

}

return (new cljs.core.async.t_cljs$core$async11098(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__11104 = arguments.length;
switch (G__11104) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__11107 = arguments.length;
switch (G__11107) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__11110 = arguments.length;
switch (G__11110) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_11112 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_11112);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_11112,ret){
return (function (){
return fn1.call(null,val_11112);
});})(val_11112,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__11114 = arguments.length;
switch (G__11114) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__8999__auto___11116 = n;
var x_11117 = (0);
while(true){
if((x_11117 < n__8999__auto___11116)){
(a[x_11117] = (0));

var G__11118 = (x_11117 + (1));
x_11117 = G__11118;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__11119 = (i + (1));
i = G__11119;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async11120 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11120 = (function (flag,meta11121){
this.flag = flag;
this.meta11121 = meta11121;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async11120.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_11122,meta11121__$1){
var self__ = this;
var _11122__$1 = this;
return (new cljs.core.async.t_cljs$core$async11120(self__.flag,meta11121__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async11120.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_11122){
var self__ = this;
var _11122__$1 = this;
return self__.meta11121;
});})(flag))
;

cljs.core.async.t_cljs$core$async11120.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11120.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async11120.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async11120.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async11120.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta11121","meta11121",-1304286547,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async11120.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11120.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11120";

cljs.core.async.t_cljs$core$async11120.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__8677__auto__,writer__8678__auto__,opt__8679__auto__){
return cljs.core._write.call(null,writer__8678__auto__,"cljs.core.async/t_cljs$core$async11120");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async11120 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async11120(flag__$1,meta11121){
return (new cljs.core.async.t_cljs$core$async11120(flag__$1,meta11121));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async11120(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async11123 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11123 = (function (flag,cb,meta11124){
this.flag = flag;
this.cb = cb;
this.meta11124 = meta11124;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async11123.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11125,meta11124__$1){
var self__ = this;
var _11125__$1 = this;
return (new cljs.core.async.t_cljs$core$async11123(self__.flag,self__.cb,meta11124__$1));
});

cljs.core.async.t_cljs$core$async11123.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11125){
var self__ = this;
var _11125__$1 = this;
return self__.meta11124;
});

cljs.core.async.t_cljs$core$async11123.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11123.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async11123.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async11123.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async11123.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta11124","meta11124",-1803416534,null)], null);
});

cljs.core.async.t_cljs$core$async11123.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11123.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11123";

cljs.core.async.t_cljs$core$async11123.cljs$lang$ctorPrWriter = (function (this__8677__auto__,writer__8678__auto__,opt__8679__auto__){
return cljs.core._write.call(null,writer__8678__auto__,"cljs.core.async/t_cljs$core$async11123");
});

cljs.core.async.__GT_t_cljs$core$async11123 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async11123(flag__$1,cb__$1,meta11124){
return (new cljs.core.async.t_cljs$core$async11123(flag__$1,cb__$1,meta11124));
});

}

return (new cljs.core.async.t_cljs$core$async11123(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11126_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11126_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11127_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11127_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__8052__auto__ = wport;
if(cljs.core.truth_(or__8052__auto__)){
return or__8052__auto__;
} else {
return port;
}
})()], null));
} else {
var G__11128 = (i + (1));
i = G__11128;
continue;
}
} else {
return null;
}
break;
}
})();
var or__8052__auto__ = ret;
if(cljs.core.truth_(or__8052__auto__)){
return or__8052__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__8040__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__8040__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__8040__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__9230__auto__ = [];
var len__9223__auto___11134 = arguments.length;
var i__9224__auto___11135 = (0);
while(true){
if((i__9224__auto___11135 < len__9223__auto___11134)){
args__9230__auto__.push((arguments[i__9224__auto___11135]));

var G__11136 = (i__9224__auto___11135 + (1));
i__9224__auto___11135 = G__11136;
continue;
} else {
}
break;
}

var argseq__9231__auto__ = ((((1) < args__9230__auto__.length))?(new cljs.core.IndexedSeq(args__9230__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9231__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__11131){
var map__11132 = p__11131;
var map__11132__$1 = ((((!((map__11132 == null)))?((((map__11132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11132.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11132):map__11132);
var opts = map__11132__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq11129){
var G__11130 = cljs.core.first.call(null,seq11129);
var seq11129__$1 = cljs.core.next.call(null,seq11129);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11130,seq11129__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__11138 = arguments.length;
switch (G__11138) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__11051__auto___11184 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11051__auto___11184){
return (function (){
var f__11052__auto__ = (function (){var switch__10963__auto__ = ((function (c__11051__auto___11184){
return (function (state_11162){
var state_val_11163 = (state_11162[(1)]);
if((state_val_11163 === (7))){
var inst_11158 = (state_11162[(2)]);
var state_11162__$1 = state_11162;
var statearr_11164_11185 = state_11162__$1;
(statearr_11164_11185[(2)] = inst_11158);

(statearr_11164_11185[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11163 === (1))){
var state_11162__$1 = state_11162;
var statearr_11165_11186 = state_11162__$1;
(statearr_11165_11186[(2)] = null);

(statearr_11165_11186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11163 === (4))){
var inst_11141 = (state_11162[(7)]);
var inst_11141__$1 = (state_11162[(2)]);
var inst_11142 = (inst_11141__$1 == null);
var state_11162__$1 = (function (){var statearr_11166 = state_11162;
(statearr_11166[(7)] = inst_11141__$1);

return statearr_11166;
})();
if(cljs.core.truth_(inst_11142)){
var statearr_11167_11187 = state_11162__$1;
(statearr_11167_11187[(1)] = (5));

} else {
var statearr_11168_11188 = state_11162__$1;
(statearr_11168_11188[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11163 === (13))){
var state_11162__$1 = state_11162;
var statearr_11169_11189 = state_11162__$1;
(statearr_11169_11189[(2)] = null);

(statearr_11169_11189[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11163 === (6))){
var inst_11141 = (state_11162[(7)]);
var state_11162__$1 = state_11162;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11162__$1,(11),to,inst_11141);
} else {
if((state_val_11163 === (3))){
var inst_11160 = (state_11162[(2)]);
var state_11162__$1 = state_11162;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11162__$1,inst_11160);
} else {
if((state_val_11163 === (12))){
var state_11162__$1 = state_11162;
var statearr_11170_11190 = state_11162__$1;
(statearr_11170_11190[(2)] = null);

(statearr_11170_11190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11163 === (2))){
var state_11162__$1 = state_11162;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11162__$1,(4),from);
} else {
if((state_val_11163 === (11))){
var inst_11151 = (state_11162[(2)]);
var state_11162__$1 = state_11162;
if(cljs.core.truth_(inst_11151)){
var statearr_11171_11191 = state_11162__$1;
(statearr_11171_11191[(1)] = (12));

} else {
var statearr_11172_11192 = state_11162__$1;
(statearr_11172_11192[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11163 === (9))){
var state_11162__$1 = state_11162;
var statearr_11173_11193 = state_11162__$1;
(statearr_11173_11193[(2)] = null);

(statearr_11173_11193[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11163 === (5))){
var state_11162__$1 = state_11162;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11174_11194 = state_11162__$1;
(statearr_11174_11194[(1)] = (8));

} else {
var statearr_11175_11195 = state_11162__$1;
(statearr_11175_11195[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11163 === (14))){
var inst_11156 = (state_11162[(2)]);
var state_11162__$1 = state_11162;
var statearr_11176_11196 = state_11162__$1;
(statearr_11176_11196[(2)] = inst_11156);

(statearr_11176_11196[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11163 === (10))){
var inst_11148 = (state_11162[(2)]);
var state_11162__$1 = state_11162;
var statearr_11177_11197 = state_11162__$1;
(statearr_11177_11197[(2)] = inst_11148);

(statearr_11177_11197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11163 === (8))){
var inst_11145 = cljs.core.async.close_BANG_.call(null,to);
var state_11162__$1 = state_11162;
var statearr_11178_11198 = state_11162__$1;
(statearr_11178_11198[(2)] = inst_11145);

(statearr_11178_11198[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11051__auto___11184))
;
return ((function (switch__10963__auto__,c__11051__auto___11184){
return (function() {
var cljs$core$async$state_machine__10964__auto__ = null;
var cljs$core$async$state_machine__10964__auto____0 = (function (){
var statearr_11179 = [null,null,null,null,null,null,null,null];
(statearr_11179[(0)] = cljs$core$async$state_machine__10964__auto__);

(statearr_11179[(1)] = (1));

return statearr_11179;
});
var cljs$core$async$state_machine__10964__auto____1 = (function (state_11162){
while(true){
var ret_value__10965__auto__ = (function (){try{while(true){
var result__10966__auto__ = switch__10963__auto__.call(null,state_11162);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10966__auto__;
}
break;
}
}catch (e11180){if((e11180 instanceof Object)){
var ex__10967__auto__ = e11180;
var statearr_11181_11199 = state_11162;
(statearr_11181_11199[(5)] = ex__10967__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11180;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11200 = state_11162;
state_11162 = G__11200;
continue;
} else {
return ret_value__10965__auto__;
}
break;
}
});
cljs$core$async$state_machine__10964__auto__ = function(state_11162){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10964__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10964__auto____1.call(this,state_11162);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__10964__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10964__auto____0;
cljs$core$async$state_machine__10964__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10964__auto____1;
return cljs$core$async$state_machine__10964__auto__;
})()
;})(switch__10963__auto__,c__11051__auto___11184))
})();
var state__11053__auto__ = (function (){var statearr_11182 = f__11052__auto__.call(null);
(statearr_11182[(6)] = c__11051__auto___11184);

return statearr_11182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11053__auto__);
});})(c__11051__auto___11184))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__11201){
var vec__11202 = p__11201;
var v = cljs.core.nth.call(null,vec__11202,(0),null);
var p = cljs.core.nth.call(null,vec__11202,(1),null);
var job = vec__11202;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__11051__auto___11373 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11051__auto___11373,res,vec__11202,v,p,job,jobs,results){
return (function (){
var f__11052__auto__ = (function (){var switch__10963__auto__ = ((function (c__11051__auto___11373,res,vec__11202,v,p,job,jobs,results){
return (function (state_11209){
var state_val_11210 = (state_11209[(1)]);
if((state_val_11210 === (1))){
var state_11209__$1 = state_11209;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11209__$1,(2),res,v);
} else {
if((state_val_11210 === (2))){
var inst_11206 = (state_11209[(2)]);
var inst_11207 = cljs.core.async.close_BANG_.call(null,res);
var state_11209__$1 = (function (){var statearr_11211 = state_11209;
(statearr_11211[(7)] = inst_11206);

return statearr_11211;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11209__$1,inst_11207);
} else {
return null;
}
}
});})(c__11051__auto___11373,res,vec__11202,v,p,job,jobs,results))
;
return ((function (switch__10963__auto__,c__11051__auto___11373,res,vec__11202,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10964__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10964__auto____0 = (function (){
var statearr_11212 = [null,null,null,null,null,null,null,null];
(statearr_11212[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10964__auto__);

(statearr_11212[(1)] = (1));

return statearr_11212;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10964__auto____1 = (function (state_11209){
while(true){
var ret_value__10965__auto__ = (function (){try{while(true){
var result__10966__auto__ = switch__10963__auto__.call(null,state_11209);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10966__auto__;
}
break;
}
}catch (e11213){if((e11213 instanceof Object)){
var ex__10967__auto__ = e11213;
var statearr_11214_11374 = state_11209;
(statearr_11214_11374[(5)] = ex__10967__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11209);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11213;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11375 = state_11209;
state_11209 = G__11375;
continue;
} else {
return ret_value__10965__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10964__auto__ = function(state_11209){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10964__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10964__auto____1.call(this,state_11209);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__10964__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10964__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10964__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10964__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10964__auto__;
})()
;})(switch__10963__auto__,c__11051__auto___11373,res,vec__11202,v,p,job,jobs,results))
})();
var state__11053__auto__ = (function (){var statearr_11215 = f__11052__auto__.call(null);
(statearr_11215[(6)] = c__11051__auto___11373);

return statearr_11215;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11053__auto__);
});})(c__11051__auto___11373,res,vec__11202,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__11216){
var vec__11217 = p__11216;
var v = cljs.core.nth.call(null,vec__11217,(0),null);
var p = cljs.core.nth.call(null,vec__11217,(1),null);
var job = vec__11217;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__8999__auto___11376 = n;
var __11377 = (0);
while(true){
if((__11377 < n__8999__auto___11376)){
var G__11220_11378 = type;
var G__11220_11379__$1 = (((G__11220_11378 instanceof cljs.core.Keyword))?G__11220_11378.fqn:null);
switch (G__11220_11379__$1) {
case "compute":
var c__11051__auto___11381 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11377,c__11051__auto___11381,G__11220_11378,G__11220_11379__$1,n__8999__auto___11376,jobs,results,process,async){
return (function (){
var f__11052__auto__ = (function (){var switch__10963__auto__ = ((function (__11377,c__11051__auto___11381,G__11220_11378,G__11220_11379__$1,n__8999__auto___11376,jobs,results,process,async){
return (function (state_11233){
var state_val_11234 = (state_11233[(1)]);
if((state_val_11234 === (1))){
var state_11233__$1 = state_11233;
var statearr_11235_11382 = state_11233__$1;
(statearr_11235_11382[(2)] = null);

(statearr_11235_11382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11234 === (2))){
var state_11233__$1 = state_11233;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11233__$1,(4),jobs);
} else {
if((state_val_11234 === (3))){
var inst_11231 = (state_11233[(2)]);
var state_11233__$1 = state_11233;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11233__$1,inst_11231);
} else {
if((state_val_11234 === (4))){
var inst_11223 = (state_11233[(2)]);
var inst_11224 = process.call(null,inst_11223);
var state_11233__$1 = state_11233;
if(cljs.core.truth_(inst_11224)){
var statearr_11236_11383 = state_11233__$1;
(statearr_11236_11383[(1)] = (5));

} else {
var statearr_11237_11384 = state_11233__$1;
(statearr_11237_11384[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11234 === (5))){
var state_11233__$1 = state_11233;
var statearr_11238_11385 = state_11233__$1;
(statearr_11238_11385[(2)] = null);

(statearr_11238_11385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11234 === (6))){
var state_11233__$1 = state_11233;
var statearr_11239_11386 = state_11233__$1;
(statearr_11239_11386[(2)] = null);

(statearr_11239_11386[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11234 === (7))){
var inst_11229 = (state_11233[(2)]);
var state_11233__$1 = state_11233;
var statearr_11240_11387 = state_11233__$1;
(statearr_11240_11387[(2)] = inst_11229);

(statearr_11240_11387[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__11377,c__11051__auto___11381,G__11220_11378,G__11220_11379__$1,n__8999__auto___11376,jobs,results,process,async))
;
return ((function (__11377,switch__10963__auto__,c__11051__auto___11381,G__11220_11378,G__11220_11379__$1,n__8999__auto___11376,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10964__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10964__auto____0 = (function (){
var statearr_11241 = [null,null,null,null,null,null,null];
(statearr_11241[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10964__auto__);

(statearr_11241[(1)] = (1));

return statearr_11241;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10964__auto____1 = (function (state_11233){
while(true){
var ret_value__10965__auto__ = (function (){try{while(true){
var result__10966__auto__ = switch__10963__auto__.call(null,state_11233);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10966__auto__;
}
break;
}
}catch (e11242){if((e11242 instanceof Object)){
var ex__10967__auto__ = e11242;
var statearr_11243_11388 = state_11233;
(statearr_11243_11388[(5)] = ex__10967__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11233);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11242;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11389 = state_11233;
state_11233 = G__11389;
continue;
} else {
return ret_value__10965__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10964__auto__ = function(state_11233){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10964__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10964__auto____1.call(this,state_11233);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__10964__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10964__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10964__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10964__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10964__auto__;
})()
;})(__11377,switch__10963__auto__,c__11051__auto___11381,G__11220_11378,G__11220_11379__$1,n__8999__auto___11376,jobs,results,process,async))
})();
var state__11053__auto__ = (function (){var statearr_11244 = f__11052__auto__.call(null);
(statearr_11244[(6)] = c__11051__auto___11381);

return statearr_11244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11053__auto__);
});})(__11377,c__11051__auto___11381,G__11220_11378,G__11220_11379__$1,n__8999__auto___11376,jobs,results,process,async))
);


break;
case "async":
var c__11051__auto___11390 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11377,c__11051__auto___11390,G__11220_11378,G__11220_11379__$1,n__8999__auto___11376,jobs,results,process,async){
return (function (){
var f__11052__auto__ = (function (){var switch__10963__auto__ = ((function (__11377,c__11051__auto___11390,G__11220_11378,G__11220_11379__$1,n__8999__auto___11376,jobs,results,process,async){
return (function (state_11257){
var state_val_11258 = (state_11257[(1)]);
if((state_val_11258 === (1))){
var state_11257__$1 = state_11257;
var statearr_11259_11391 = state_11257__$1;
(statearr_11259_11391[(2)] = null);

(statearr_11259_11391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11258 === (2))){
var state_11257__$1 = state_11257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11257__$1,(4),jobs);
} else {
if((state_val_11258 === (3))){
var inst_11255 = (state_11257[(2)]);
var state_11257__$1 = state_11257;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11257__$1,inst_11255);
} else {
if((state_val_11258 === (4))){
var inst_11247 = (state_11257[(2)]);
var inst_11248 = async.call(null,inst_11247);
var state_11257__$1 = state_11257;
if(cljs.core.truth_(inst_11248)){
var statearr_11260_11392 = state_11257__$1;
(statearr_11260_11392[(1)] = (5));

} else {
var statearr_11261_11393 = state_11257__$1;
(statearr_11261_11393[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11258 === (5))){
var state_11257__$1 = state_11257;
var statearr_11262_11394 = state_11257__$1;
(statearr_11262_11394[(2)] = null);

(statearr_11262_11394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11258 === (6))){
var state_11257__$1 = state_11257;
var statearr_11263_11395 = state_11257__$1;
(statearr_11263_11395[(2)] = null);

(statearr_11263_11395[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11258 === (7))){
var inst_11253 = (state_11257[(2)]);
var state_11257__$1 = state_11257;
var statearr_11264_11396 = state_11257__$1;
(statearr_11264_11396[(2)] = inst_11253);

(statearr_11264_11396[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__11377,c__11051__auto___11390,G__11220_11378,G__11220_11379__$1,n__8999__auto___11376,jobs,results,process,async))
;
return ((function (__11377,switch__10963__auto__,c__11051__auto___11390,G__11220_11378,G__11220_11379__$1,n__8999__auto___11376,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10964__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10964__auto____0 = (function (){
var statearr_11265 = [null,null,null,null,null,null,null];
(statearr_11265[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10964__auto__);

(statearr_11265[(1)] = (1));

return statearr_11265;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10964__auto____1 = (function (state_11257){
while(true){
var ret_value__10965__auto__ = (function (){try{while(true){
var result__10966__auto__ = switch__10963__auto__.call(null,state_11257);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10966__auto__;
}
break;
}
}catch (e11266){if((e11266 instanceof Object)){
var ex__10967__auto__ = e11266;
var statearr_11267_11397 = state_11257;
(statearr_11267_11397[(5)] = ex__10967__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11266;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11398 = state_11257;
state_11257 = G__11398;
continue;
} else {
return ret_value__10965__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10964__auto__ = function(state_11257){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10964__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10964__auto____1.call(this,state_11257);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__10964__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10964__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10964__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10964__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10964__auto__;
})()
;})(__11377,switch__10963__auto__,c__11051__auto___11390,G__11220_11378,G__11220_11379__$1,n__8999__auto___11376,jobs,results,process,async))
})();
var state__11053__auto__ = (function (){var statearr_11268 = f__11052__auto__.call(null);
(statearr_11268[(6)] = c__11051__auto___11390);

return statearr_11268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11053__auto__);
});})(__11377,c__11051__auto___11390,G__11220_11378,G__11220_11379__$1,n__8999__auto___11376,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11220_11379__$1)].join('')));

}

var G__11399 = (__11377 + (1));
__11377 = G__11399;
continue;
} else {
}
break;
}

var c__11051__auto___11400 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11051__auto___11400,jobs,results,process,async){
return (function (){
var f__11052__auto__ = (function (){var switch__10963__auto__ = ((function (c__11051__auto___11400,jobs,results,process,async){
return (function (state_11290){
var state_val_11291 = (state_11290[(1)]);
if((state_val_11291 === (1))){
var state_11290__$1 = state_11290;
var statearr_11292_11401 = state_11290__$1;
(statearr_11292_11401[(2)] = null);

(statearr_11292_11401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11291 === (2))){
var state_11290__$1 = state_11290;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11290__$1,(4),from);
} else {
if((state_val_11291 === (3))){
var inst_11288 = (state_11290[(2)]);
var state_11290__$1 = state_11290;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11290__$1,inst_11288);
} else {
if((state_val_11291 === (4))){
var inst_11271 = (state_11290[(7)]);
var inst_11271__$1 = (state_11290[(2)]);
var inst_11272 = (inst_11271__$1 == null);
var state_11290__$1 = (function (){var statearr_11293 = state_11290;
(statearr_11293[(7)] = inst_11271__$1);

return statearr_11293;
})();
if(cljs.core.truth_(inst_11272)){
var statearr_11294_11402 = state_11290__$1;
(statearr_11294_11402[(1)] = (5));

} else {
var statearr_11295_11403 = state_11290__$1;
(statearr_11295_11403[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11291 === (5))){
var inst_11274 = cljs.core.async.close_BANG_.call(null,jobs);
var state_11290__$1 = state_11290;
var statearr_11296_11404 = state_11290__$1;
(statearr_11296_11404[(2)] = inst_11274);

(statearr_11296_11404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11291 === (6))){
var inst_11276 = (state_11290[(8)]);
var inst_11271 = (state_11290[(7)]);
var inst_11276__$1 = cljs.core.async.chan.call(null,(1));
var inst_11277 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11278 = [inst_11271,inst_11276__$1];
var inst_11279 = (new cljs.core.PersistentVector(null,2,(5),inst_11277,inst_11278,null));
var state_11290__$1 = (function (){var statearr_11297 = state_11290;
(statearr_11297[(8)] = inst_11276__$1);

return statearr_11297;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11290__$1,(8),jobs,inst_11279);
} else {
if((state_val_11291 === (7))){
var inst_11286 = (state_11290[(2)]);
var state_11290__$1 = state_11290;
var statearr_11298_11405 = state_11290__$1;
(statearr_11298_11405[(2)] = inst_11286);

(statearr_11298_11405[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11291 === (8))){
var inst_11276 = (state_11290[(8)]);
var inst_11281 = (state_11290[(2)]);
var state_11290__$1 = (function (){var statearr_11299 = state_11290;
(statearr_11299[(9)] = inst_11281);

return statearr_11299;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11290__$1,(9),results,inst_11276);
} else {
if((state_val_11291 === (9))){
var inst_11283 = (state_11290[(2)]);
var state_11290__$1 = (function (){var statearr_11300 = state_11290;
(statearr_11300[(10)] = inst_11283);

return statearr_11300;
})();
var statearr_11301_11406 = state_11290__$1;
(statearr_11301_11406[(2)] = null);

(statearr_11301_11406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__11051__auto___11400,jobs,results,process,async))
;
return ((function (switch__10963__auto__,c__11051__auto___11400,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10964__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10964__auto____0 = (function (){
var statearr_11302 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11302[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10964__auto__);

(statearr_11302[(1)] = (1));

return statearr_11302;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10964__auto____1 = (function (state_11290){
while(true){
var ret_value__10965__auto__ = (function (){try{while(true){
var result__10966__auto__ = switch__10963__auto__.call(null,state_11290);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10966__auto__;
}
break;
}
}catch (e11303){if((e11303 instanceof Object)){
var ex__10967__auto__ = e11303;
var statearr_11304_11407 = state_11290;
(statearr_11304_11407[(5)] = ex__10967__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11290);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11303;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11408 = state_11290;
state_11290 = G__11408;
continue;
} else {
return ret_value__10965__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10964__auto__ = function(state_11290){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10964__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10964__auto____1.call(this,state_11290);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__10964__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10964__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10964__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10964__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10964__auto__;
})()
;})(switch__10963__auto__,c__11051__auto___11400,jobs,results,process,async))
})();
var state__11053__auto__ = (function (){var statearr_11305 = f__11052__auto__.call(null);
(statearr_11305[(6)] = c__11051__auto___11400);

return statearr_11305;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11053__auto__);
});})(c__11051__auto___11400,jobs,results,process,async))
);


var c__11051__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11051__auto__,jobs,results,process,async){
return (function (){
var f__11052__auto__ = (function (){var switch__10963__auto__ = ((function (c__11051__auto__,jobs,results,process,async){
return (function (state_11343){
var state_val_11344 = (state_11343[(1)]);
if((state_val_11344 === (7))){
var inst_11339 = (state_11343[(2)]);
var state_11343__$1 = state_11343;
var statearr_11345_11409 = state_11343__$1;
(statearr_11345_11409[(2)] = inst_11339);

(statearr_11345_11409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11344 === (20))){
var state_11343__$1 = state_11343;
var statearr_11346_11410 = state_11343__$1;
(statearr_11346_11410[(2)] = null);

(statearr_11346_11410[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11344 === (1))){
var state_11343__$1 = state_11343;
var statearr_11347_11411 = state_11343__$1;
(statearr_11347_11411[(2)] = null);

(statearr_11347_11411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11344 === (4))){
var inst_11308 = (state_11343[(7)]);
var inst_11308__$1 = (state_11343[(2)]);
var inst_11309 = (inst_11308__$1 == null);
var state_11343__$1 = (function (){var statearr_11348 = state_11343;
(statearr_11348[(7)] = inst_11308__$1);

return statearr_11348;
})();
if(cljs.core.truth_(inst_11309)){
var statearr_11349_11412 = state_11343__$1;
(statearr_11349_11412[(1)] = (5));

} else {
var statearr_11350_11413 = state_11343__$1;
(statearr_11350_11413[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11344 === (15))){
var inst_11321 = (state_11343[(8)]);
var state_11343__$1 = state_11343;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11343__$1,(18),to,inst_11321);
} else {
if((state_val_11344 === (21))){
var inst_11334 = (state_11343[(2)]);
var state_11343__$1 = state_11343;
var statearr_11351_11414 = state_11343__$1;
(statearr_11351_11414[(2)] = inst_11334);

(statearr_11351_11414[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11344 === (13))){
var inst_11336 = (state_11343[(2)]);
var state_11343__$1 = (function (){var statearr_11352 = state_11343;
(statearr_11352[(9)] = inst_11336);

return statearr_11352;
})();
var statearr_11353_11415 = state_11343__$1;
(statearr_11353_11415[(2)] = null);

(statearr_11353_11415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11344 === (6))){
var inst_11308 = (state_11343[(7)]);
var state_11343__$1 = state_11343;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11343__$1,(11),inst_11308);
} else {
if((state_val_11344 === (17))){
var inst_11329 = (state_11343[(2)]);
var state_11343__$1 = state_11343;
if(cljs.core.truth_(inst_11329)){
var statearr_11354_11416 = state_11343__$1;
(statearr_11354_11416[(1)] = (19));

} else {
var statearr_11355_11417 = state_11343__$1;
(statearr_11355_11417[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11344 === (3))){
var inst_11341 = (state_11343[(2)]);
var state_11343__$1 = state_11343;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11343__$1,inst_11341);
} else {
if((state_val_11344 === (12))){
var inst_11318 = (state_11343[(10)]);
var state_11343__$1 = state_11343;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11343__$1,(14),inst_11318);
} else {
if((state_val_11344 === (2))){
var state_11343__$1 = state_11343;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11343__$1,(4),results);
} else {
if((state_val_11344 === (19))){
var state_11343__$1 = state_11343;
var statearr_11356_11418 = state_11343__$1;
(statearr_11356_11418[(2)] = null);

(statearr_11356_11418[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11344 === (11))){
var inst_11318 = (state_11343[(2)]);
var state_11343__$1 = (function (){var statearr_11357 = state_11343;
(statearr_11357[(10)] = inst_11318);

return statearr_11357;
})();
var statearr_11358_11419 = state_11343__$1;
(statearr_11358_11419[(2)] = null);

(statearr_11358_11419[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11344 === (9))){
var state_11343__$1 = state_11343;
var statearr_11359_11420 = state_11343__$1;
(statearr_11359_11420[(2)] = null);

(statearr_11359_11420[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11344 === (5))){
var state_11343__$1 = state_11343;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11360_11421 = state_11343__$1;
(statearr_11360_11421[(1)] = (8));

} else {
var statearr_11361_11422 = state_11343__$1;
(statearr_11361_11422[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11344 === (14))){
var inst_11323 = (state_11343[(11)]);
var inst_11321 = (state_11343[(8)]);
var inst_11321__$1 = (state_11343[(2)]);
var inst_11322 = (inst_11321__$1 == null);
var inst_11323__$1 = cljs.core.not.call(null,inst_11322);
var state_11343__$1 = (function (){var statearr_11362 = state_11343;
(statearr_11362[(11)] = inst_11323__$1);

(statearr_11362[(8)] = inst_11321__$1);

return statearr_11362;
})();
if(inst_11323__$1){
var statearr_11363_11423 = state_11343__$1;
(statearr_11363_11423[(1)] = (15));

} else {
var statearr_11364_11424 = state_11343__$1;
(statearr_11364_11424[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11344 === (16))){
var inst_11323 = (state_11343[(11)]);
var state_11343__$1 = state_11343;
var statearr_11365_11425 = state_11343__$1;
(statearr_11365_11425[(2)] = inst_11323);

(statearr_11365_11425[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11344 === (10))){
var inst_11315 = (state_11343[(2)]);
var state_11343__$1 = state_11343;
var statearr_11366_11426 = state_11343__$1;
(statearr_11366_11426[(2)] = inst_11315);

(statearr_11366_11426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11344 === (18))){
var inst_11326 = (state_11343[(2)]);
var state_11343__$1 = state_11343;
var statearr_11367_11427 = state_11343__$1;
(statearr_11367_11427[(2)] = inst_11326);

(statearr_11367_11427[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11344 === (8))){
var inst_11312 = cljs.core.async.close_BANG_.call(null,to);
var state_11343__$1 = state_11343;
var statearr_11368_11428 = state_11343__$1;
(statearr_11368_11428[(2)] = inst_11312);

(statearr_11368_11428[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11051__auto__,jobs,results,process,async))
;
return ((function (switch__10963__auto__,c__11051__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10964__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10964__auto____0 = (function (){
var statearr_11369 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11369[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10964__auto__);

(statearr_11369[(1)] = (1));

return statearr_11369;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10964__auto____1 = (function (state_11343){
while(true){
var ret_value__10965__auto__ = (function (){try{while(true){
var result__10966__auto__ = switch__10963__auto__.call(null,state_11343);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10966__auto__;
}
break;
}
}catch (e11370){if((e11370 instanceof Object)){
var ex__10967__auto__ = e11370;
var statearr_11371_11429 = state_11343;
(statearr_11371_11429[(5)] = ex__10967__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11343);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11370;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11430 = state_11343;
state_11343 = G__11430;
continue;
} else {
return ret_value__10965__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10964__auto__ = function(state_11343){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10964__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10964__auto____1.call(this,state_11343);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__10964__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10964__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10964__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10964__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10964__auto__;
})()
;})(switch__10963__auto__,c__11051__auto__,jobs,results,process,async))
})();
var state__11053__auto__ = (function (){var statearr_11372 = f__11052__auto__.call(null);
(statearr_11372[(6)] = c__11051__auto__);

return statearr_11372;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11053__auto__);
});})(c__11051__auto__,jobs,results,process,async))
);

return c__11051__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__11432 = arguments.length;
switch (G__11432) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__11435 = arguments.length;
switch (G__11435) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__11438 = arguments.length;
switch (G__11438) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__11051__auto___11487 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11051__auto___11487,tc,fc){
return (function (){
var f__11052__auto__ = (function (){var switch__10963__auto__ = ((function (c__11051__auto___11487,tc,fc){
return (function (state_11464){
var state_val_11465 = (state_11464[(1)]);
if((state_val_11465 === (7))){
var inst_11460 = (state_11464[(2)]);
var state_11464__$1 = state_11464;
var statearr_11466_11488 = state_11464__$1;
(statearr_11466_11488[(2)] = inst_11460);

(statearr_11466_11488[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11465 === (1))){
var state_11464__$1 = state_11464;
var statearr_11467_11489 = state_11464__$1;
(statearr_11467_11489[(2)] = null);

(statearr_11467_11489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11465 === (4))){
var inst_11441 = (state_11464[(7)]);
var inst_11441__$1 = (state_11464[(2)]);
var inst_11442 = (inst_11441__$1 == null);
var state_11464__$1 = (function (){var statearr_11468 = state_11464;
(statearr_11468[(7)] = inst_11441__$1);

return statearr_11468;
})();
if(cljs.core.truth_(inst_11442)){
var statearr_11469_11490 = state_11464__$1;
(statearr_11469_11490[(1)] = (5));

} else {
var statearr_11470_11491 = state_11464__$1;
(statearr_11470_11491[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11465 === (13))){
var state_11464__$1 = state_11464;
var statearr_11471_11492 = state_11464__$1;
(statearr_11471_11492[(2)] = null);

(statearr_11471_11492[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11465 === (6))){
var inst_11441 = (state_11464[(7)]);
var inst_11447 = p.call(null,inst_11441);
var state_11464__$1 = state_11464;
if(cljs.core.truth_(inst_11447)){
var statearr_11472_11493 = state_11464__$1;
(statearr_11472_11493[(1)] = (9));

} else {
var statearr_11473_11494 = state_11464__$1;
(statearr_11473_11494[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11465 === (3))){
var inst_11462 = (state_11464[(2)]);
var state_11464__$1 = state_11464;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11464__$1,inst_11462);
} else {
if((state_val_11465 === (12))){
var state_11464__$1 = state_11464;
var statearr_11474_11495 = state_11464__$1;
(statearr_11474_11495[(2)] = null);

(statearr_11474_11495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11465 === (2))){
var state_11464__$1 = state_11464;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11464__$1,(4),ch);
} else {
if((state_val_11465 === (11))){
var inst_11441 = (state_11464[(7)]);
var inst_11451 = (state_11464[(2)]);
var state_11464__$1 = state_11464;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11464__$1,(8),inst_11451,inst_11441);
} else {
if((state_val_11465 === (9))){
var state_11464__$1 = state_11464;
var statearr_11475_11496 = state_11464__$1;
(statearr_11475_11496[(2)] = tc);

(statearr_11475_11496[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11465 === (5))){
var inst_11444 = cljs.core.async.close_BANG_.call(null,tc);
var inst_11445 = cljs.core.async.close_BANG_.call(null,fc);
var state_11464__$1 = (function (){var statearr_11476 = state_11464;
(statearr_11476[(8)] = inst_11444);

return statearr_11476;
})();
var statearr_11477_11497 = state_11464__$1;
(statearr_11477_11497[(2)] = inst_11445);

(statearr_11477_11497[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11465 === (14))){
var inst_11458 = (state_11464[(2)]);
var state_11464__$1 = state_11464;
var statearr_11478_11498 = state_11464__$1;
(statearr_11478_11498[(2)] = inst_11458);

(statearr_11478_11498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11465 === (10))){
var state_11464__$1 = state_11464;
var statearr_11479_11499 = state_11464__$1;
(statearr_11479_11499[(2)] = fc);

(statearr_11479_11499[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11465 === (8))){
var inst_11453 = (state_11464[(2)]);
var state_11464__$1 = state_11464;
if(cljs.core.truth_(inst_11453)){
var statearr_11480_11500 = state_11464__$1;
(statearr_11480_11500[(1)] = (12));

} else {
var statearr_11481_11501 = state_11464__$1;
(statearr_11481_11501[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11051__auto___11487,tc,fc))
;
return ((function (switch__10963__auto__,c__11051__auto___11487,tc,fc){
return (function() {
var cljs$core$async$state_machine__10964__auto__ = null;
var cljs$core$async$state_machine__10964__auto____0 = (function (){
var statearr_11482 = [null,null,null,null,null,null,null,null,null];
(statearr_11482[(0)] = cljs$core$async$state_machine__10964__auto__);

(statearr_11482[(1)] = (1));

return statearr_11482;
});
var cljs$core$async$state_machine__10964__auto____1 = (function (state_11464){
while(true){
var ret_value__10965__auto__ = (function (){try{while(true){
var result__10966__auto__ = switch__10963__auto__.call(null,state_11464);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10966__auto__;
}
break;
}
}catch (e11483){if((e11483 instanceof Object)){
var ex__10967__auto__ = e11483;
var statearr_11484_11502 = state_11464;
(statearr_11484_11502[(5)] = ex__10967__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11464);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11483;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11503 = state_11464;
state_11464 = G__11503;
continue;
} else {
return ret_value__10965__auto__;
}
break;
}
});
cljs$core$async$state_machine__10964__auto__ = function(state_11464){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10964__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10964__auto____1.call(this,state_11464);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__10964__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10964__auto____0;
cljs$core$async$state_machine__10964__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10964__auto____1;
return cljs$core$async$state_machine__10964__auto__;
})()
;})(switch__10963__auto__,c__11051__auto___11487,tc,fc))
})();
var state__11053__auto__ = (function (){var statearr_11485 = f__11052__auto__.call(null);
(statearr_11485[(6)] = c__11051__auto___11487);

return statearr_11485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11053__auto__);
});})(c__11051__auto___11487,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__11051__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11051__auto__){
return (function (){
var f__11052__auto__ = (function (){var switch__10963__auto__ = ((function (c__11051__auto__){
return (function (state_11524){
var state_val_11525 = (state_11524[(1)]);
if((state_val_11525 === (7))){
var inst_11520 = (state_11524[(2)]);
var state_11524__$1 = state_11524;
var statearr_11526_11544 = state_11524__$1;
(statearr_11526_11544[(2)] = inst_11520);

(statearr_11526_11544[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11525 === (1))){
var inst_11504 = init;
var state_11524__$1 = (function (){var statearr_11527 = state_11524;
(statearr_11527[(7)] = inst_11504);

return statearr_11527;
})();
var statearr_11528_11545 = state_11524__$1;
(statearr_11528_11545[(2)] = null);

(statearr_11528_11545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11525 === (4))){
var inst_11507 = (state_11524[(8)]);
var inst_11507__$1 = (state_11524[(2)]);
var inst_11508 = (inst_11507__$1 == null);
var state_11524__$1 = (function (){var statearr_11529 = state_11524;
(statearr_11529[(8)] = inst_11507__$1);

return statearr_11529;
})();
if(cljs.core.truth_(inst_11508)){
var statearr_11530_11546 = state_11524__$1;
(statearr_11530_11546[(1)] = (5));

} else {
var statearr_11531_11547 = state_11524__$1;
(statearr_11531_11547[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11525 === (6))){
var inst_11511 = (state_11524[(9)]);
var inst_11507 = (state_11524[(8)]);
var inst_11504 = (state_11524[(7)]);
var inst_11511__$1 = f.call(null,inst_11504,inst_11507);
var inst_11512 = cljs.core.reduced_QMARK_.call(null,inst_11511__$1);
var state_11524__$1 = (function (){var statearr_11532 = state_11524;
(statearr_11532[(9)] = inst_11511__$1);

return statearr_11532;
})();
if(inst_11512){
var statearr_11533_11548 = state_11524__$1;
(statearr_11533_11548[(1)] = (8));

} else {
var statearr_11534_11549 = state_11524__$1;
(statearr_11534_11549[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11525 === (3))){
var inst_11522 = (state_11524[(2)]);
var state_11524__$1 = state_11524;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11524__$1,inst_11522);
} else {
if((state_val_11525 === (2))){
var state_11524__$1 = state_11524;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11524__$1,(4),ch);
} else {
if((state_val_11525 === (9))){
var inst_11511 = (state_11524[(9)]);
var inst_11504 = inst_11511;
var state_11524__$1 = (function (){var statearr_11535 = state_11524;
(statearr_11535[(7)] = inst_11504);

return statearr_11535;
})();
var statearr_11536_11550 = state_11524__$1;
(statearr_11536_11550[(2)] = null);

(statearr_11536_11550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11525 === (5))){
var inst_11504 = (state_11524[(7)]);
var state_11524__$1 = state_11524;
var statearr_11537_11551 = state_11524__$1;
(statearr_11537_11551[(2)] = inst_11504);

(statearr_11537_11551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11525 === (10))){
var inst_11518 = (state_11524[(2)]);
var state_11524__$1 = state_11524;
var statearr_11538_11552 = state_11524__$1;
(statearr_11538_11552[(2)] = inst_11518);

(statearr_11538_11552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11525 === (8))){
var inst_11511 = (state_11524[(9)]);
var inst_11514 = cljs.core.deref.call(null,inst_11511);
var state_11524__$1 = state_11524;
var statearr_11539_11553 = state_11524__$1;
(statearr_11539_11553[(2)] = inst_11514);

(statearr_11539_11553[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__11051__auto__))
;
return ((function (switch__10963__auto__,c__11051__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__10964__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10964__auto____0 = (function (){
var statearr_11540 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11540[(0)] = cljs$core$async$reduce_$_state_machine__10964__auto__);

(statearr_11540[(1)] = (1));

return statearr_11540;
});
var cljs$core$async$reduce_$_state_machine__10964__auto____1 = (function (state_11524){
while(true){
var ret_value__10965__auto__ = (function (){try{while(true){
var result__10966__auto__ = switch__10963__auto__.call(null,state_11524);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10966__auto__;
}
break;
}
}catch (e11541){if((e11541 instanceof Object)){
var ex__10967__auto__ = e11541;
var statearr_11542_11554 = state_11524;
(statearr_11542_11554[(5)] = ex__10967__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11524);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11541;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11555 = state_11524;
state_11524 = G__11555;
continue;
} else {
return ret_value__10965__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10964__auto__ = function(state_11524){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10964__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10964__auto____1.call(this,state_11524);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__10964__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10964__auto____0;
cljs$core$async$reduce_$_state_machine__10964__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10964__auto____1;
return cljs$core$async$reduce_$_state_machine__10964__auto__;
})()
;})(switch__10963__auto__,c__11051__auto__))
})();
var state__11053__auto__ = (function (){var statearr_11543 = f__11052__auto__.call(null);
(statearr_11543[(6)] = c__11051__auto__);

return statearr_11543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11053__auto__);
});})(c__11051__auto__))
);

return c__11051__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__11051__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11051__auto__,f__$1){
return (function (){
var f__11052__auto__ = (function (){var switch__10963__auto__ = ((function (c__11051__auto__,f__$1){
return (function (state_11561){
var state_val_11562 = (state_11561[(1)]);
if((state_val_11562 === (1))){
var inst_11556 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_11561__$1 = state_11561;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11561__$1,(2),inst_11556);
} else {
if((state_val_11562 === (2))){
var inst_11558 = (state_11561[(2)]);
var inst_11559 = f__$1.call(null,inst_11558);
var state_11561__$1 = state_11561;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11561__$1,inst_11559);
} else {
return null;
}
}
});})(c__11051__auto__,f__$1))
;
return ((function (switch__10963__auto__,c__11051__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__10964__auto__ = null;
var cljs$core$async$transduce_$_state_machine__10964__auto____0 = (function (){
var statearr_11563 = [null,null,null,null,null,null,null];
(statearr_11563[(0)] = cljs$core$async$transduce_$_state_machine__10964__auto__);

(statearr_11563[(1)] = (1));

return statearr_11563;
});
var cljs$core$async$transduce_$_state_machine__10964__auto____1 = (function (state_11561){
while(true){
var ret_value__10965__auto__ = (function (){try{while(true){
var result__10966__auto__ = switch__10963__auto__.call(null,state_11561);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10966__auto__;
}
break;
}
}catch (e11564){if((e11564 instanceof Object)){
var ex__10967__auto__ = e11564;
var statearr_11565_11567 = state_11561;
(statearr_11565_11567[(5)] = ex__10967__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11561);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11564;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11568 = state_11561;
state_11561 = G__11568;
continue;
} else {
return ret_value__10965__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__10964__auto__ = function(state_11561){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__10964__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__10964__auto____1.call(this,state_11561);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__10964__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__10964__auto____0;
cljs$core$async$transduce_$_state_machine__10964__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__10964__auto____1;
return cljs$core$async$transduce_$_state_machine__10964__auto__;
})()
;})(switch__10963__auto__,c__11051__auto__,f__$1))
})();
var state__11053__auto__ = (function (){var statearr_11566 = f__11052__auto__.call(null);
(statearr_11566[(6)] = c__11051__auto__);

return statearr_11566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11053__auto__);
});})(c__11051__auto__,f__$1))
);

return c__11051__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__11570 = arguments.length;
switch (G__11570) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__11051__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11051__auto__){
return (function (){
var f__11052__auto__ = (function (){var switch__10963__auto__ = ((function (c__11051__auto__){
return (function (state_11595){
var state_val_11596 = (state_11595[(1)]);
if((state_val_11596 === (7))){
var inst_11577 = (state_11595[(2)]);
var state_11595__$1 = state_11595;
var statearr_11597_11618 = state_11595__$1;
(statearr_11597_11618[(2)] = inst_11577);

(statearr_11597_11618[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11596 === (1))){
var inst_11571 = cljs.core.seq.call(null,coll);
var inst_11572 = inst_11571;
var state_11595__$1 = (function (){var statearr_11598 = state_11595;
(statearr_11598[(7)] = inst_11572);

return statearr_11598;
})();
var statearr_11599_11619 = state_11595__$1;
(statearr_11599_11619[(2)] = null);

(statearr_11599_11619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11596 === (4))){
var inst_11572 = (state_11595[(7)]);
var inst_11575 = cljs.core.first.call(null,inst_11572);
var state_11595__$1 = state_11595;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11595__$1,(7),ch,inst_11575);
} else {
if((state_val_11596 === (13))){
var inst_11589 = (state_11595[(2)]);
var state_11595__$1 = state_11595;
var statearr_11600_11620 = state_11595__$1;
(statearr_11600_11620[(2)] = inst_11589);

(statearr_11600_11620[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11596 === (6))){
var inst_11580 = (state_11595[(2)]);
var state_11595__$1 = state_11595;
if(cljs.core.truth_(inst_11580)){
var statearr_11601_11621 = state_11595__$1;
(statearr_11601_11621[(1)] = (8));

} else {
var statearr_11602_11622 = state_11595__$1;
(statearr_11602_11622[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11596 === (3))){
var inst_11593 = (state_11595[(2)]);
var state_11595__$1 = state_11595;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11595__$1,inst_11593);
} else {
if((state_val_11596 === (12))){
var state_11595__$1 = state_11595;
var statearr_11603_11623 = state_11595__$1;
(statearr_11603_11623[(2)] = null);

(statearr_11603_11623[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11596 === (2))){
var inst_11572 = (state_11595[(7)]);
var state_11595__$1 = state_11595;
if(cljs.core.truth_(inst_11572)){
var statearr_11604_11624 = state_11595__$1;
(statearr_11604_11624[(1)] = (4));

} else {
var statearr_11605_11625 = state_11595__$1;
(statearr_11605_11625[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11596 === (11))){
var inst_11586 = cljs.core.async.close_BANG_.call(null,ch);
var state_11595__$1 = state_11595;
var statearr_11606_11626 = state_11595__$1;
(statearr_11606_11626[(2)] = inst_11586);

(statearr_11606_11626[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11596 === (9))){
var state_11595__$1 = state_11595;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11607_11627 = state_11595__$1;
(statearr_11607_11627[(1)] = (11));

} else {
var statearr_11608_11628 = state_11595__$1;
(statearr_11608_11628[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11596 === (5))){
var inst_11572 = (state_11595[(7)]);
var state_11595__$1 = state_11595;
var statearr_11609_11629 = state_11595__$1;
(statearr_11609_11629[(2)] = inst_11572);

(statearr_11609_11629[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11596 === (10))){
var inst_11591 = (state_11595[(2)]);
var state_11595__$1 = state_11595;
var statearr_11610_11630 = state_11595__$1;
(statearr_11610_11630[(2)] = inst_11591);

(statearr_11610_11630[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11596 === (8))){
var inst_11572 = (state_11595[(7)]);
var inst_11582 = cljs.core.next.call(null,inst_11572);
var inst_11572__$1 = inst_11582;
var state_11595__$1 = (function (){var statearr_11611 = state_11595;
(statearr_11611[(7)] = inst_11572__$1);

return statearr_11611;
})();
var statearr_11612_11631 = state_11595__$1;
(statearr_11612_11631[(2)] = null);

(statearr_11612_11631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11051__auto__))
;
return ((function (switch__10963__auto__,c__11051__auto__){
return (function() {
var cljs$core$async$state_machine__10964__auto__ = null;
var cljs$core$async$state_machine__10964__auto____0 = (function (){
var statearr_11613 = [null,null,null,null,null,null,null,null];
(statearr_11613[(0)] = cljs$core$async$state_machine__10964__auto__);

(statearr_11613[(1)] = (1));

return statearr_11613;
});
var cljs$core$async$state_machine__10964__auto____1 = (function (state_11595){
while(true){
var ret_value__10965__auto__ = (function (){try{while(true){
var result__10966__auto__ = switch__10963__auto__.call(null,state_11595);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10966__auto__;
}
break;
}
}catch (e11614){if((e11614 instanceof Object)){
var ex__10967__auto__ = e11614;
var statearr_11615_11632 = state_11595;
(statearr_11615_11632[(5)] = ex__10967__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11595);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11614;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11633 = state_11595;
state_11595 = G__11633;
continue;
} else {
return ret_value__10965__auto__;
}
break;
}
});
cljs$core$async$state_machine__10964__auto__ = function(state_11595){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10964__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10964__auto____1.call(this,state_11595);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__10964__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10964__auto____0;
cljs$core$async$state_machine__10964__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10964__auto____1;
return cljs$core$async$state_machine__10964__auto__;
})()
;})(switch__10963__auto__,c__11051__auto__))
})();
var state__11053__auto__ = (function (){var statearr_11616 = f__11052__auto__.call(null);
(statearr_11616[(6)] = c__11051__auto__);

return statearr_11616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11053__auto__);
});})(c__11051__auto__))
);

return c__11051__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__8735__auto__ = (((_ == null))?null:_);
var m__8736__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8735__auto__)]);
if(!((m__8736__auto__ == null))){
return m__8736__auto__.call(null,_);
} else {
var m__8736__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__8736__auto____$1 == null))){
return m__8736__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__8735__auto__ = (((m == null))?null:m);
var m__8736__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8735__auto__)]);
if(!((m__8736__auto__ == null))){
return m__8736__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__8736__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__8736__auto____$1 == null))){
return m__8736__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__8735__auto__ = (((m == null))?null:m);
var m__8736__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8735__auto__)]);
if(!((m__8736__auto__ == null))){
return m__8736__auto__.call(null,m,ch);
} else {
var m__8736__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__8736__auto____$1 == null))){
return m__8736__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__8735__auto__ = (((m == null))?null:m);
var m__8736__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8735__auto__)]);
if(!((m__8736__auto__ == null))){
return m__8736__auto__.call(null,m);
} else {
var m__8736__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__8736__auto____$1 == null))){
return m__8736__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async11634 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11634 = (function (ch,cs,meta11635){
this.ch = ch;
this.cs = cs;
this.meta11635 = meta11635;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async11634.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11636,meta11635__$1){
var self__ = this;
var _11636__$1 = this;
return (new cljs.core.async.t_cljs$core$async11634(self__.ch,self__.cs,meta11635__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async11634.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11636){
var self__ = this;
var _11636__$1 = this;
return self__.meta11635;
});})(cs))
;

cljs.core.async.t_cljs$core$async11634.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11634.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async11634.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11634.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async11634.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async11634.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async11634.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta11635","meta11635",336261612,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async11634.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11634.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11634";

cljs.core.async.t_cljs$core$async11634.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8677__auto__,writer__8678__auto__,opt__8679__auto__){
return cljs.core._write.call(null,writer__8678__auto__,"cljs.core.async/t_cljs$core$async11634");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async11634 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async11634(ch__$1,cs__$1,meta11635){
return (new cljs.core.async.t_cljs$core$async11634(ch__$1,cs__$1,meta11635));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async11634(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__11051__auto___11856 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11051__auto___11856,cs,m,dchan,dctr,done){
return (function (){
var f__11052__auto__ = (function (){var switch__10963__auto__ = ((function (c__11051__auto___11856,cs,m,dchan,dctr,done){
return (function (state_11771){
var state_val_11772 = (state_11771[(1)]);
if((state_val_11772 === (7))){
var inst_11767 = (state_11771[(2)]);
var state_11771__$1 = state_11771;
var statearr_11773_11857 = state_11771__$1;
(statearr_11773_11857[(2)] = inst_11767);

(statearr_11773_11857[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11772 === (20))){
var inst_11670 = (state_11771[(7)]);
var inst_11682 = cljs.core.first.call(null,inst_11670);
var inst_11683 = cljs.core.nth.call(null,inst_11682,(0),null);
var inst_11684 = cljs.core.nth.call(null,inst_11682,(1),null);
var state_11771__$1 = (function (){var statearr_11774 = state_11771;
(statearr_11774[(8)] = inst_11683);

return statearr_11774;
})();
if(cljs.core.truth_(inst_11684)){
var statearr_11775_11858 = state_11771__$1;
(statearr_11775_11858[(1)] = (22));

} else {
var statearr_11776_11859 = state_11771__$1;
(statearr_11776_11859[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11772 === (27))){
var inst_11714 = (state_11771[(9)]);
var inst_11719 = (state_11771[(10)]);
var inst_11712 = (state_11771[(11)]);
var inst_11639 = (state_11771[(12)]);
var inst_11719__$1 = cljs.core._nth.call(null,inst_11712,inst_11714);
var inst_11720 = cljs.core.async.put_BANG_.call(null,inst_11719__$1,inst_11639,done);
var state_11771__$1 = (function (){var statearr_11777 = state_11771;
(statearr_11777[(10)] = inst_11719__$1);

return statearr_11777;
})();
if(cljs.core.truth_(inst_11720)){
var statearr_11778_11860 = state_11771__$1;
(statearr_11778_11860[(1)] = (30));

} else {
var statearr_11779_11861 = state_11771__$1;
(statearr_11779_11861[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11772 === (1))){
var state_11771__$1 = state_11771;
var statearr_11780_11862 = state_11771__$1;
(statearr_11780_11862[(2)] = null);

(statearr_11780_11862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11772 === (24))){
var inst_11670 = (state_11771[(7)]);
var inst_11689 = (state_11771[(2)]);
var inst_11690 = cljs.core.next.call(null,inst_11670);
var inst_11648 = inst_11690;
var inst_11649 = null;
var inst_11650 = (0);
var inst_11651 = (0);
var state_11771__$1 = (function (){var statearr_11781 = state_11771;
(statearr_11781[(13)] = inst_11689);

(statearr_11781[(14)] = inst_11648);

(statearr_11781[(15)] = inst_11649);

(statearr_11781[(16)] = inst_11651);

(statearr_11781[(17)] = inst_11650);

return statearr_11781;
})();
var statearr_11782_11863 = state_11771__$1;
(statearr_11782_11863[(2)] = null);

(statearr_11782_11863[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11772 === (39))){
var state_11771__$1 = state_11771;
var statearr_11786_11864 = state_11771__$1;
(statearr_11786_11864[(2)] = null);

(statearr_11786_11864[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11772 === (4))){
var inst_11639 = (state_11771[(12)]);
var inst_11639__$1 = (state_11771[(2)]);
var inst_11640 = (inst_11639__$1 == null);
var state_11771__$1 = (function (){var statearr_11787 = state_11771;
(statearr_11787[(12)] = inst_11639__$1);

return statearr_11787;
})();
if(cljs.core.truth_(inst_11640)){
var statearr_11788_11865 = state_11771__$1;
(statearr_11788_11865[(1)] = (5));

} else {
var statearr_11789_11866 = state_11771__$1;
(statearr_11789_11866[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11772 === (15))){
var inst_11648 = (state_11771[(14)]);
var inst_11649 = (state_11771[(15)]);
var inst_11651 = (state_11771[(16)]);
var inst_11650 = (state_11771[(17)]);
var inst_11666 = (state_11771[(2)]);
var inst_11667 = (inst_11651 + (1));
var tmp11783 = inst_11648;
var tmp11784 = inst_11649;
var tmp11785 = inst_11650;
var inst_11648__$1 = tmp11783;
var inst_11649__$1 = tmp11784;
var inst_11650__$1 = tmp11785;
var inst_11651__$1 = inst_11667;
var state_11771__$1 = (function (){var statearr_11790 = state_11771;
(statearr_11790[(14)] = inst_11648__$1);

(statearr_11790[(15)] = inst_11649__$1);

(statearr_11790[(16)] = inst_11651__$1);

(statearr_11790[(18)] = inst_11666);

(statearr_11790[(17)] = inst_11650__$1);

return statearr_11790;
})();
var statearr_11791_11867 = state_11771__$1;
(statearr_11791_11867[(2)] = null);

(statearr_11791_11867[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11772 === (21))){
var inst_11693 = (state_11771[(2)]);
var state_11771__$1 = state_11771;
var statearr_11795_11868 = state_11771__$1;
(statearr_11795_11868[(2)] = inst_11693);

(statearr_11795_11868[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11772 === (31))){
var inst_11719 = (state_11771[(10)]);
var inst_11723 = done.call(null,null);
var inst_11724 = cljs.core.async.untap_STAR_.call(null,m,inst_11719);
var state_11771__$1 = (function (){var statearr_11796 = state_11771;
(statearr_11796[(19)] = inst_11723);

return statearr_11796;
})();
var statearr_11797_11869 = state_11771__$1;
(statearr_11797_11869[(2)] = inst_11724);

(statearr_11797_11869[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11772 === (32))){
var inst_11713 = (state_11771[(20)]);
var inst_11714 = (state_11771[(9)]);
var inst_11711 = (state_11771[(21)]);
var inst_11712 = (state_11771[(11)]);
var inst_11726 = (state_11771[(2)]);
var inst_11727 = (inst_11714 + (1));
var tmp11792 = inst_11713;
var tmp11793 = inst_11711;
var tmp11794 = inst_11712;
var inst_11711__$1 = tmp11793;
var inst_11712__$1 = tmp11794;
var inst_11713__$1 = tmp11792;
var inst_11714__$1 = inst_11727;
var state_11771__$1 = (function (){var statearr_11798 = state_11771;
(statearr_11798[(20)] = inst_11713__$1);

(statearr_11798[(9)] = inst_11714__$1);

(statearr_11798[(21)] = inst_11711__$1);

(statearr_11798[(22)] = inst_11726);

(statearr_11798[(11)] = inst_11712__$1);

return statearr_11798;
})();
var statearr_11799_11870 = state_11771__$1;
(statearr_11799_11870[(2)] = null);

(statearr_11799_11870[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11772 === (40))){
var inst_11739 = (state_11771[(23)]);
var inst_11743 = done.call(null,null);
var inst_11744 = cljs.core.async.untap_STAR_.call(null,m,inst_11739);
var state_11771__$1 = (function (){var statearr_11800 = state_11771;
(statearr_11800[(24)] = inst_11743);

return statearr_11800;
})();
var statearr_11801_11871 = state_11771__$1;
(statearr_11801_11871[(2)] = inst_11744);

(statearr_11801_11871[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11772 === (33))){
var inst_11730 = (state_11771[(25)]);
var inst_11732 = cljs.core.chunked_seq_QMARK_.call(null,inst_11730);
var state_11771__$1 = state_11771;
if(inst_11732){
var statearr_11802_11872 = state_11771__$1;
(statearr_11802_11872[(1)] = (36));

} else {
var statearr_11803_11873 = state_11771__$1;
(statearr_11803_11873[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11772 === (13))){
var inst_11660 = (state_11771[(26)]);
var inst_11663 = cljs.core.async.close_BANG_.call(null,inst_11660);
var state_11771__$1 = state_11771;
var statearr_11804_11874 = state_11771__$1;
(statearr_11804_11874[(2)] = inst_11663);

(statearr_11804_11874[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11772 === (22))){
var inst_11683 = (state_11771[(8)]);
var inst_11686 = cljs.core.async.close_BANG_.call(null,inst_11683);
var state_11771__$1 = state_11771;
var statearr_11805_11875 = state_11771__$1;
(statearr_11805_11875[(2)] = inst_11686);

(statearr_11805_11875[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11772 === (36))){
var inst_11730 = (state_11771[(25)]);
var inst_11734 = cljs.core.chunk_first.call(null,inst_11730);
var inst_11735 = cljs.core.chunk_rest.call(null,inst_11730);
var inst_11736 = cljs.core.count.call(null,inst_11734);
var inst_11711 = inst_11735;
var inst_11712 = inst_11734;
var inst_11713 = inst_11736;
var inst_11714 = (0);
var state_11771__$1 = (function (){var statearr_11806 = state_11771;
(statearr_11806[(20)] = inst_11713);

(statearr_11806[(9)] = inst_11714);

(statearr_11806[(21)] = inst_11711);

(statearr_11806[(11)] = inst_11712);

return statearr_11806;
})();
var statearr_11807_11876 = state_11771__$1;
(statearr_11807_11876[(2)] = null);

(statearr_11807_11876[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11772 === (41))){
var inst_11730 = (state_11771[(25)]);
var inst_11746 = (state_11771[(2)]);
var inst_11747 = cljs.core.next.call(null,inst_11730);
var inst_11711 = inst_11747;
var inst_11712 = null;
var inst_11713 = (0);
var inst_11714 = (0);
var state_11771__$1 = (function (){var statearr_11808 = state_11771;
(statearr_11808[(20)] = inst_11713);

(statearr_11808[(9)] = inst_11714);

(statearr_11808[(21)] = inst_11711);

(statearr_11808[(27)] = inst_11746);

(statearr_11808[(11)] = inst_11712);

return statearr_11808;
})();
var statearr_11809_11877 = state_11771__$1;
(statearr_11809_11877[(2)] = null);

(statearr_11809_11877[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11772 === (43))){
var state_11771__$1 = state_11771;
var statearr_11810_11878 = state_11771__$1;
(statearr_11810_11878[(2)] = null);

(statearr_11810_11878[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11772 === (29))){
var inst_11755 = (state_11771[(2)]);
var state_11771__$1 = state_11771;
var statearr_11811_11879 = state_11771__$1;
(statearr_11811_11879[(2)] = inst_11755);

(statearr_11811_11879[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11772 === (44))){
var inst_11764 = (state_11771[(2)]);
var state_11771__$1 = (function (){var statearr_11812 = state_11771;
(statearr_11812[(28)] = inst_11764);

return statearr_11812;
})();
var statearr_11813_11880 = state_11771__$1;
(statearr_11813_11880[(2)] = null);

(statearr_11813_11880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11772 === (6))){
var inst_11703 = (state_11771[(29)]);
var inst_11702 = cljs.core.deref.call(null,cs);
var inst_11703__$1 = cljs.core.keys.call(null,inst_11702);
var inst_11704 = cljs.core.count.call(null,inst_11703__$1);
var inst_11705 = cljs.core.reset_BANG_.call(null,dctr,inst_11704);
var inst_11710 = cljs.core.seq.call(null,inst_11703__$1);
var inst_11711 = inst_11710;
var inst_11712 = null;
var inst_11713 = (0);
var inst_11714 = (0);
var state_11771__$1 = (function (){var statearr_11814 = state_11771;
(statearr_11814[(20)] = inst_11713);

(statearr_11814[(9)] = inst_11714);

(statearr_11814[(21)] = inst_11711);

(statearr_11814[(30)] = inst_11705);

(statearr_11814[(29)] = inst_11703__$1);

(statearr_11814[(11)] = inst_11712);

return statearr_11814;
})();
var statearr_11815_11881 = state_11771__$1;
(statearr_11815_11881[(2)] = null);

(statearr_11815_11881[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11772 === (28))){
var inst_11711 = (state_11771[(21)]);
var inst_11730 = (state_11771[(25)]);
var inst_11730__$1 = cljs.core.seq.call(null,inst_11711);
var state_11771__$1 = (function (){var statearr_11816 = state_11771;
(statearr_11816[(25)] = inst_11730__$1);

return statearr_11816;
})();
if(inst_11730__$1){
var statearr_11817_11882 = state_11771__$1;
(statearr_11817_11882[(1)] = (33));

} else {
var statearr_11818_11883 = state_11771__$1;
(statearr_11818_11883[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11772 === (25))){
var inst_11713 = (state_11771[(20)]);
var inst_11714 = (state_11771[(9)]);
var inst_11716 = (inst_11714 < inst_11713);
var inst_11717 = inst_11716;
var state_11771__$1 = state_11771;
if(cljs.core.truth_(inst_11717)){
var statearr_11819_11884 = state_11771__$1;
(statearr_11819_11884[(1)] = (27));

} else {
var statearr_11820_11885 = state_11771__$1;
(statearr_11820_11885[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11772 === (34))){
var state_11771__$1 = state_11771;
var statearr_11821_11886 = state_11771__$1;
(statearr_11821_11886[(2)] = null);

(statearr_11821_11886[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11772 === (17))){
var state_11771__$1 = state_11771;
var statearr_11822_11887 = state_11771__$1;
(statearr_11822_11887[(2)] = null);

(statearr_11822_11887[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11772 === (3))){
var inst_11769 = (state_11771[(2)]);
var state_11771__$1 = state_11771;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11771__$1,inst_11769);
} else {
if((state_val_11772 === (12))){
var inst_11698 = (state_11771[(2)]);
var state_11771__$1 = state_11771;
var statearr_11823_11888 = state_11771__$1;
(statearr_11823_11888[(2)] = inst_11698);

(statearr_11823_11888[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11772 === (2))){
var state_11771__$1 = state_11771;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11771__$1,(4),ch);
} else {
if((state_val_11772 === (23))){
var state_11771__$1 = state_11771;
var statearr_11824_11889 = state_11771__$1;
(statearr_11824_11889[(2)] = null);

(statearr_11824_11889[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11772 === (35))){
var inst_11753 = (state_11771[(2)]);
var state_11771__$1 = state_11771;
var statearr_11825_11890 = state_11771__$1;
(statearr_11825_11890[(2)] = inst_11753);

(statearr_11825_11890[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11772 === (19))){
var inst_11670 = (state_11771[(7)]);
var inst_11674 = cljs.core.chunk_first.call(null,inst_11670);
var inst_11675 = cljs.core.chunk_rest.call(null,inst_11670);
var inst_11676 = cljs.core.count.call(null,inst_11674);
var inst_11648 = inst_11675;
var inst_11649 = inst_11674;
var inst_11650 = inst_11676;
var inst_11651 = (0);
var state_11771__$1 = (function (){var statearr_11826 = state_11771;
(statearr_11826[(14)] = inst_11648);

(statearr_11826[(15)] = inst_11649);

(statearr_11826[(16)] = inst_11651);

(statearr_11826[(17)] = inst_11650);

return statearr_11826;
})();
var statearr_11827_11891 = state_11771__$1;
(statearr_11827_11891[(2)] = null);

(statearr_11827_11891[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11772 === (11))){
var inst_11648 = (state_11771[(14)]);
var inst_11670 = (state_11771[(7)]);
var inst_11670__$1 = cljs.core.seq.call(null,inst_11648);
var state_11771__$1 = (function (){var statearr_11828 = state_11771;
(statearr_11828[(7)] = inst_11670__$1);

return statearr_11828;
})();
if(inst_11670__$1){
var statearr_11829_11892 = state_11771__$1;
(statearr_11829_11892[(1)] = (16));

} else {
var statearr_11830_11893 = state_11771__$1;
(statearr_11830_11893[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11772 === (9))){
var inst_11700 = (state_11771[(2)]);
var state_11771__$1 = state_11771;
var statearr_11831_11894 = state_11771__$1;
(statearr_11831_11894[(2)] = inst_11700);

(statearr_11831_11894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11772 === (5))){
var inst_11646 = cljs.core.deref.call(null,cs);
var inst_11647 = cljs.core.seq.call(null,inst_11646);
var inst_11648 = inst_11647;
var inst_11649 = null;
var inst_11650 = (0);
var inst_11651 = (0);
var state_11771__$1 = (function (){var statearr_11832 = state_11771;
(statearr_11832[(14)] = inst_11648);

(statearr_11832[(15)] = inst_11649);

(statearr_11832[(16)] = inst_11651);

(statearr_11832[(17)] = inst_11650);

return statearr_11832;
})();
var statearr_11833_11895 = state_11771__$1;
(statearr_11833_11895[(2)] = null);

(statearr_11833_11895[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11772 === (14))){
var state_11771__$1 = state_11771;
var statearr_11834_11896 = state_11771__$1;
(statearr_11834_11896[(2)] = null);

(statearr_11834_11896[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11772 === (45))){
var inst_11761 = (state_11771[(2)]);
var state_11771__$1 = state_11771;
var statearr_11835_11897 = state_11771__$1;
(statearr_11835_11897[(2)] = inst_11761);

(statearr_11835_11897[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11772 === (26))){
var inst_11703 = (state_11771[(29)]);
var inst_11757 = (state_11771[(2)]);
var inst_11758 = cljs.core.seq.call(null,inst_11703);
var state_11771__$1 = (function (){var statearr_11836 = state_11771;
(statearr_11836[(31)] = inst_11757);

return statearr_11836;
})();
if(inst_11758){
var statearr_11837_11898 = state_11771__$1;
(statearr_11837_11898[(1)] = (42));

} else {
var statearr_11838_11899 = state_11771__$1;
(statearr_11838_11899[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11772 === (16))){
var inst_11670 = (state_11771[(7)]);
var inst_11672 = cljs.core.chunked_seq_QMARK_.call(null,inst_11670);
var state_11771__$1 = state_11771;
if(inst_11672){
var statearr_11839_11900 = state_11771__$1;
(statearr_11839_11900[(1)] = (19));

} else {
var statearr_11840_11901 = state_11771__$1;
(statearr_11840_11901[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11772 === (38))){
var inst_11750 = (state_11771[(2)]);
var state_11771__$1 = state_11771;
var statearr_11841_11902 = state_11771__$1;
(statearr_11841_11902[(2)] = inst_11750);

(statearr_11841_11902[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11772 === (30))){
var state_11771__$1 = state_11771;
var statearr_11842_11903 = state_11771__$1;
(statearr_11842_11903[(2)] = null);

(statearr_11842_11903[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11772 === (10))){
var inst_11649 = (state_11771[(15)]);
var inst_11651 = (state_11771[(16)]);
var inst_11659 = cljs.core._nth.call(null,inst_11649,inst_11651);
var inst_11660 = cljs.core.nth.call(null,inst_11659,(0),null);
var inst_11661 = cljs.core.nth.call(null,inst_11659,(1),null);
var state_11771__$1 = (function (){var statearr_11843 = state_11771;
(statearr_11843[(26)] = inst_11660);

return statearr_11843;
})();
if(cljs.core.truth_(inst_11661)){
var statearr_11844_11904 = state_11771__$1;
(statearr_11844_11904[(1)] = (13));

} else {
var statearr_11845_11905 = state_11771__$1;
(statearr_11845_11905[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11772 === (18))){
var inst_11696 = (state_11771[(2)]);
var state_11771__$1 = state_11771;
var statearr_11846_11906 = state_11771__$1;
(statearr_11846_11906[(2)] = inst_11696);

(statearr_11846_11906[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11772 === (42))){
var state_11771__$1 = state_11771;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11771__$1,(45),dchan);
} else {
if((state_val_11772 === (37))){
var inst_11730 = (state_11771[(25)]);
var inst_11739 = (state_11771[(23)]);
var inst_11639 = (state_11771[(12)]);
var inst_11739__$1 = cljs.core.first.call(null,inst_11730);
var inst_11740 = cljs.core.async.put_BANG_.call(null,inst_11739__$1,inst_11639,done);
var state_11771__$1 = (function (){var statearr_11847 = state_11771;
(statearr_11847[(23)] = inst_11739__$1);

return statearr_11847;
})();
if(cljs.core.truth_(inst_11740)){
var statearr_11848_11907 = state_11771__$1;
(statearr_11848_11907[(1)] = (39));

} else {
var statearr_11849_11908 = state_11771__$1;
(statearr_11849_11908[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11772 === (8))){
var inst_11651 = (state_11771[(16)]);
var inst_11650 = (state_11771[(17)]);
var inst_11653 = (inst_11651 < inst_11650);
var inst_11654 = inst_11653;
var state_11771__$1 = state_11771;
if(cljs.core.truth_(inst_11654)){
var statearr_11850_11909 = state_11771__$1;
(statearr_11850_11909[(1)] = (10));

} else {
var statearr_11851_11910 = state_11771__$1;
(statearr_11851_11910[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11051__auto___11856,cs,m,dchan,dctr,done))
;
return ((function (switch__10963__auto__,c__11051__auto___11856,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__10964__auto__ = null;
var cljs$core$async$mult_$_state_machine__10964__auto____0 = (function (){
var statearr_11852 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11852[(0)] = cljs$core$async$mult_$_state_machine__10964__auto__);

(statearr_11852[(1)] = (1));

return statearr_11852;
});
var cljs$core$async$mult_$_state_machine__10964__auto____1 = (function (state_11771){
while(true){
var ret_value__10965__auto__ = (function (){try{while(true){
var result__10966__auto__ = switch__10963__auto__.call(null,state_11771);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10966__auto__;
}
break;
}
}catch (e11853){if((e11853 instanceof Object)){
var ex__10967__auto__ = e11853;
var statearr_11854_11911 = state_11771;
(statearr_11854_11911[(5)] = ex__10967__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11771);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11853;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11912 = state_11771;
state_11771 = G__11912;
continue;
} else {
return ret_value__10965__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10964__auto__ = function(state_11771){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10964__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10964__auto____1.call(this,state_11771);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__10964__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10964__auto____0;
cljs$core$async$mult_$_state_machine__10964__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10964__auto____1;
return cljs$core$async$mult_$_state_machine__10964__auto__;
})()
;})(switch__10963__auto__,c__11051__auto___11856,cs,m,dchan,dctr,done))
})();
var state__11053__auto__ = (function (){var statearr_11855 = f__11052__auto__.call(null);
(statearr_11855[(6)] = c__11051__auto___11856);

return statearr_11855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11053__auto__);
});})(c__11051__auto___11856,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__11914 = arguments.length;
switch (G__11914) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__8735__auto__ = (((m == null))?null:m);
var m__8736__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8735__auto__)]);
if(!((m__8736__auto__ == null))){
return m__8736__auto__.call(null,m,ch);
} else {
var m__8736__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__8736__auto____$1 == null))){
return m__8736__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__8735__auto__ = (((m == null))?null:m);
var m__8736__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8735__auto__)]);
if(!((m__8736__auto__ == null))){
return m__8736__auto__.call(null,m,ch);
} else {
var m__8736__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__8736__auto____$1 == null))){
return m__8736__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__8735__auto__ = (((m == null))?null:m);
var m__8736__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8735__auto__)]);
if(!((m__8736__auto__ == null))){
return m__8736__auto__.call(null,m);
} else {
var m__8736__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__8736__auto____$1 == null))){
return m__8736__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__8735__auto__ = (((m == null))?null:m);
var m__8736__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8735__auto__)]);
if(!((m__8736__auto__ == null))){
return m__8736__auto__.call(null,m,state_map);
} else {
var m__8736__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__8736__auto____$1 == null))){
return m__8736__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__8735__auto__ = (((m == null))?null:m);
var m__8736__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8735__auto__)]);
if(!((m__8736__auto__ == null))){
return m__8736__auto__.call(null,m,mode);
} else {
var m__8736__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__8736__auto____$1 == null))){
return m__8736__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__9230__auto__ = [];
var len__9223__auto___11926 = arguments.length;
var i__9224__auto___11927 = (0);
while(true){
if((i__9224__auto___11927 < len__9223__auto___11926)){
args__9230__auto__.push((arguments[i__9224__auto___11927]));

var G__11928 = (i__9224__auto___11927 + (1));
i__9224__auto___11927 = G__11928;
continue;
} else {
}
break;
}

var argseq__9231__auto__ = ((((3) < args__9230__auto__.length))?(new cljs.core.IndexedSeq(args__9230__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9231__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__11920){
var map__11921 = p__11920;
var map__11921__$1 = ((((!((map__11921 == null)))?((((map__11921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11921.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11921):map__11921);
var opts = map__11921__$1;
var statearr_11923_11929 = state;
(statearr_11923_11929[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__11921,map__11921__$1,opts){
return (function (val){
var statearr_11924_11930 = state;
(statearr_11924_11930[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__11921,map__11921__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_11925_11931 = state;
(statearr_11925_11931[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq11916){
var G__11917 = cljs.core.first.call(null,seq11916);
var seq11916__$1 = cljs.core.next.call(null,seq11916);
var G__11918 = cljs.core.first.call(null,seq11916__$1);
var seq11916__$2 = cljs.core.next.call(null,seq11916__$1);
var G__11919 = cljs.core.first.call(null,seq11916__$2);
var seq11916__$3 = cljs.core.next.call(null,seq11916__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11917,G__11918,G__11919,seq11916__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async11932 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11932 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta11933){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta11933 = meta11933;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async11932.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11934,meta11933__$1){
var self__ = this;
var _11934__$1 = this;
return (new cljs.core.async.t_cljs$core$async11932(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta11933__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11932.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11934){
var self__ = this;
var _11934__$1 = this;
return self__.meta11933;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11932.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11932.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11932.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11932.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11932.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11932.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11932.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11932.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11932.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta11933","meta11933",2086151790,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11932.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11932.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11932";

cljs.core.async.t_cljs$core$async11932.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8677__auto__,writer__8678__auto__,opt__8679__auto__){
return cljs.core._write.call(null,writer__8678__auto__,"cljs.core.async/t_cljs$core$async11932");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async11932 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async11932(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta11933){
return (new cljs.core.async.t_cljs$core$async11932(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta11933));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async11932(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11051__auto___12096 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11051__auto___12096,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__11052__auto__ = (function (){var switch__10963__auto__ = ((function (c__11051__auto___12096,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12036){
var state_val_12037 = (state_12036[(1)]);
if((state_val_12037 === (7))){
var inst_11951 = (state_12036[(2)]);
var state_12036__$1 = state_12036;
var statearr_12038_12097 = state_12036__$1;
(statearr_12038_12097[(2)] = inst_11951);

(statearr_12038_12097[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (20))){
var inst_11963 = (state_12036[(7)]);
var state_12036__$1 = state_12036;
var statearr_12039_12098 = state_12036__$1;
(statearr_12039_12098[(2)] = inst_11963);

(statearr_12039_12098[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (27))){
var state_12036__$1 = state_12036;
var statearr_12040_12099 = state_12036__$1;
(statearr_12040_12099[(2)] = null);

(statearr_12040_12099[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (1))){
var inst_11938 = (state_12036[(8)]);
var inst_11938__$1 = calc_state.call(null);
var inst_11940 = (inst_11938__$1 == null);
var inst_11941 = cljs.core.not.call(null,inst_11940);
var state_12036__$1 = (function (){var statearr_12041 = state_12036;
(statearr_12041[(8)] = inst_11938__$1);

return statearr_12041;
})();
if(inst_11941){
var statearr_12042_12100 = state_12036__$1;
(statearr_12042_12100[(1)] = (2));

} else {
var statearr_12043_12101 = state_12036__$1;
(statearr_12043_12101[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (24))){
var inst_11987 = (state_12036[(9)]);
var inst_12010 = (state_12036[(10)]);
var inst_11996 = (state_12036[(11)]);
var inst_12010__$1 = inst_11987.call(null,inst_11996);
var state_12036__$1 = (function (){var statearr_12044 = state_12036;
(statearr_12044[(10)] = inst_12010__$1);

return statearr_12044;
})();
if(cljs.core.truth_(inst_12010__$1)){
var statearr_12045_12102 = state_12036__$1;
(statearr_12045_12102[(1)] = (29));

} else {
var statearr_12046_12103 = state_12036__$1;
(statearr_12046_12103[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (4))){
var inst_11954 = (state_12036[(2)]);
var state_12036__$1 = state_12036;
if(cljs.core.truth_(inst_11954)){
var statearr_12047_12104 = state_12036__$1;
(statearr_12047_12104[(1)] = (8));

} else {
var statearr_12048_12105 = state_12036__$1;
(statearr_12048_12105[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (15))){
var inst_11981 = (state_12036[(2)]);
var state_12036__$1 = state_12036;
if(cljs.core.truth_(inst_11981)){
var statearr_12049_12106 = state_12036__$1;
(statearr_12049_12106[(1)] = (19));

} else {
var statearr_12050_12107 = state_12036__$1;
(statearr_12050_12107[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (21))){
var inst_11986 = (state_12036[(12)]);
var inst_11986__$1 = (state_12036[(2)]);
var inst_11987 = cljs.core.get.call(null,inst_11986__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11988 = cljs.core.get.call(null,inst_11986__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11989 = cljs.core.get.call(null,inst_11986__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_12036__$1 = (function (){var statearr_12051 = state_12036;
(statearr_12051[(12)] = inst_11986__$1);

(statearr_12051[(9)] = inst_11987);

(statearr_12051[(13)] = inst_11988);

return statearr_12051;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_12036__$1,(22),inst_11989);
} else {
if((state_val_12037 === (31))){
var inst_12018 = (state_12036[(2)]);
var state_12036__$1 = state_12036;
if(cljs.core.truth_(inst_12018)){
var statearr_12052_12108 = state_12036__$1;
(statearr_12052_12108[(1)] = (32));

} else {
var statearr_12053_12109 = state_12036__$1;
(statearr_12053_12109[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (32))){
var inst_11995 = (state_12036[(14)]);
var state_12036__$1 = state_12036;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12036__$1,(35),out,inst_11995);
} else {
if((state_val_12037 === (33))){
var inst_11986 = (state_12036[(12)]);
var inst_11963 = inst_11986;
var state_12036__$1 = (function (){var statearr_12054 = state_12036;
(statearr_12054[(7)] = inst_11963);

return statearr_12054;
})();
var statearr_12055_12110 = state_12036__$1;
(statearr_12055_12110[(2)] = null);

(statearr_12055_12110[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (13))){
var inst_11963 = (state_12036[(7)]);
var inst_11970 = inst_11963.cljs$lang$protocol_mask$partition0$;
var inst_11971 = (inst_11970 & (64));
var inst_11972 = inst_11963.cljs$core$ISeq$;
var inst_11973 = (cljs.core.PROTOCOL_SENTINEL === inst_11972);
var inst_11974 = (inst_11971) || (inst_11973);
var state_12036__$1 = state_12036;
if(cljs.core.truth_(inst_11974)){
var statearr_12056_12111 = state_12036__$1;
(statearr_12056_12111[(1)] = (16));

} else {
var statearr_12057_12112 = state_12036__$1;
(statearr_12057_12112[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (22))){
var inst_11996 = (state_12036[(11)]);
var inst_11995 = (state_12036[(14)]);
var inst_11994 = (state_12036[(2)]);
var inst_11995__$1 = cljs.core.nth.call(null,inst_11994,(0),null);
var inst_11996__$1 = cljs.core.nth.call(null,inst_11994,(1),null);
var inst_11997 = (inst_11995__$1 == null);
var inst_11998 = cljs.core._EQ_.call(null,inst_11996__$1,change);
var inst_11999 = (inst_11997) || (inst_11998);
var state_12036__$1 = (function (){var statearr_12058 = state_12036;
(statearr_12058[(11)] = inst_11996__$1);

(statearr_12058[(14)] = inst_11995__$1);

return statearr_12058;
})();
if(cljs.core.truth_(inst_11999)){
var statearr_12059_12113 = state_12036__$1;
(statearr_12059_12113[(1)] = (23));

} else {
var statearr_12060_12114 = state_12036__$1;
(statearr_12060_12114[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (36))){
var inst_11986 = (state_12036[(12)]);
var inst_11963 = inst_11986;
var state_12036__$1 = (function (){var statearr_12061 = state_12036;
(statearr_12061[(7)] = inst_11963);

return statearr_12061;
})();
var statearr_12062_12115 = state_12036__$1;
(statearr_12062_12115[(2)] = null);

(statearr_12062_12115[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (29))){
var inst_12010 = (state_12036[(10)]);
var state_12036__$1 = state_12036;
var statearr_12063_12116 = state_12036__$1;
(statearr_12063_12116[(2)] = inst_12010);

(statearr_12063_12116[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (6))){
var state_12036__$1 = state_12036;
var statearr_12064_12117 = state_12036__$1;
(statearr_12064_12117[(2)] = false);

(statearr_12064_12117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (28))){
var inst_12006 = (state_12036[(2)]);
var inst_12007 = calc_state.call(null);
var inst_11963 = inst_12007;
var state_12036__$1 = (function (){var statearr_12065 = state_12036;
(statearr_12065[(7)] = inst_11963);

(statearr_12065[(15)] = inst_12006);

return statearr_12065;
})();
var statearr_12066_12118 = state_12036__$1;
(statearr_12066_12118[(2)] = null);

(statearr_12066_12118[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (25))){
var inst_12032 = (state_12036[(2)]);
var state_12036__$1 = state_12036;
var statearr_12067_12119 = state_12036__$1;
(statearr_12067_12119[(2)] = inst_12032);

(statearr_12067_12119[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (34))){
var inst_12030 = (state_12036[(2)]);
var state_12036__$1 = state_12036;
var statearr_12068_12120 = state_12036__$1;
(statearr_12068_12120[(2)] = inst_12030);

(statearr_12068_12120[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (17))){
var state_12036__$1 = state_12036;
var statearr_12069_12121 = state_12036__$1;
(statearr_12069_12121[(2)] = false);

(statearr_12069_12121[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (3))){
var state_12036__$1 = state_12036;
var statearr_12070_12122 = state_12036__$1;
(statearr_12070_12122[(2)] = false);

(statearr_12070_12122[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (12))){
var inst_12034 = (state_12036[(2)]);
var state_12036__$1 = state_12036;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12036__$1,inst_12034);
} else {
if((state_val_12037 === (2))){
var inst_11938 = (state_12036[(8)]);
var inst_11943 = inst_11938.cljs$lang$protocol_mask$partition0$;
var inst_11944 = (inst_11943 & (64));
var inst_11945 = inst_11938.cljs$core$ISeq$;
var inst_11946 = (cljs.core.PROTOCOL_SENTINEL === inst_11945);
var inst_11947 = (inst_11944) || (inst_11946);
var state_12036__$1 = state_12036;
if(cljs.core.truth_(inst_11947)){
var statearr_12071_12123 = state_12036__$1;
(statearr_12071_12123[(1)] = (5));

} else {
var statearr_12072_12124 = state_12036__$1;
(statearr_12072_12124[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (23))){
var inst_11995 = (state_12036[(14)]);
var inst_12001 = (inst_11995 == null);
var state_12036__$1 = state_12036;
if(cljs.core.truth_(inst_12001)){
var statearr_12073_12125 = state_12036__$1;
(statearr_12073_12125[(1)] = (26));

} else {
var statearr_12074_12126 = state_12036__$1;
(statearr_12074_12126[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (35))){
var inst_12021 = (state_12036[(2)]);
var state_12036__$1 = state_12036;
if(cljs.core.truth_(inst_12021)){
var statearr_12075_12127 = state_12036__$1;
(statearr_12075_12127[(1)] = (36));

} else {
var statearr_12076_12128 = state_12036__$1;
(statearr_12076_12128[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (19))){
var inst_11963 = (state_12036[(7)]);
var inst_11983 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11963);
var state_12036__$1 = state_12036;
var statearr_12077_12129 = state_12036__$1;
(statearr_12077_12129[(2)] = inst_11983);

(statearr_12077_12129[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (11))){
var inst_11963 = (state_12036[(7)]);
var inst_11967 = (inst_11963 == null);
var inst_11968 = cljs.core.not.call(null,inst_11967);
var state_12036__$1 = state_12036;
if(inst_11968){
var statearr_12078_12130 = state_12036__$1;
(statearr_12078_12130[(1)] = (13));

} else {
var statearr_12079_12131 = state_12036__$1;
(statearr_12079_12131[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (9))){
var inst_11938 = (state_12036[(8)]);
var state_12036__$1 = state_12036;
var statearr_12080_12132 = state_12036__$1;
(statearr_12080_12132[(2)] = inst_11938);

(statearr_12080_12132[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (5))){
var state_12036__$1 = state_12036;
var statearr_12081_12133 = state_12036__$1;
(statearr_12081_12133[(2)] = true);

(statearr_12081_12133[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (14))){
var state_12036__$1 = state_12036;
var statearr_12082_12134 = state_12036__$1;
(statearr_12082_12134[(2)] = false);

(statearr_12082_12134[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (26))){
var inst_11996 = (state_12036[(11)]);
var inst_12003 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_11996);
var state_12036__$1 = state_12036;
var statearr_12083_12135 = state_12036__$1;
(statearr_12083_12135[(2)] = inst_12003);

(statearr_12083_12135[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (16))){
var state_12036__$1 = state_12036;
var statearr_12084_12136 = state_12036__$1;
(statearr_12084_12136[(2)] = true);

(statearr_12084_12136[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (38))){
var inst_12026 = (state_12036[(2)]);
var state_12036__$1 = state_12036;
var statearr_12085_12137 = state_12036__$1;
(statearr_12085_12137[(2)] = inst_12026);

(statearr_12085_12137[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (30))){
var inst_11987 = (state_12036[(9)]);
var inst_11988 = (state_12036[(13)]);
var inst_11996 = (state_12036[(11)]);
var inst_12013 = cljs.core.empty_QMARK_.call(null,inst_11987);
var inst_12014 = inst_11988.call(null,inst_11996);
var inst_12015 = cljs.core.not.call(null,inst_12014);
var inst_12016 = (inst_12013) && (inst_12015);
var state_12036__$1 = state_12036;
var statearr_12086_12138 = state_12036__$1;
(statearr_12086_12138[(2)] = inst_12016);

(statearr_12086_12138[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (10))){
var inst_11938 = (state_12036[(8)]);
var inst_11959 = (state_12036[(2)]);
var inst_11960 = cljs.core.get.call(null,inst_11959,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11961 = cljs.core.get.call(null,inst_11959,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11962 = cljs.core.get.call(null,inst_11959,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_11963 = inst_11938;
var state_12036__$1 = (function (){var statearr_12087 = state_12036;
(statearr_12087[(16)] = inst_11961);

(statearr_12087[(7)] = inst_11963);

(statearr_12087[(17)] = inst_11960);

(statearr_12087[(18)] = inst_11962);

return statearr_12087;
})();
var statearr_12088_12139 = state_12036__$1;
(statearr_12088_12139[(2)] = null);

(statearr_12088_12139[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (18))){
var inst_11978 = (state_12036[(2)]);
var state_12036__$1 = state_12036;
var statearr_12089_12140 = state_12036__$1;
(statearr_12089_12140[(2)] = inst_11978);

(statearr_12089_12140[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (37))){
var state_12036__$1 = state_12036;
var statearr_12090_12141 = state_12036__$1;
(statearr_12090_12141[(2)] = null);

(statearr_12090_12141[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (8))){
var inst_11938 = (state_12036[(8)]);
var inst_11956 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11938);
var state_12036__$1 = state_12036;
var statearr_12091_12142 = state_12036__$1;
(statearr_12091_12142[(2)] = inst_11956);

(statearr_12091_12142[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11051__auto___12096,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__10963__auto__,c__11051__auto___12096,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__10964__auto__ = null;
var cljs$core$async$mix_$_state_machine__10964__auto____0 = (function (){
var statearr_12092 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12092[(0)] = cljs$core$async$mix_$_state_machine__10964__auto__);

(statearr_12092[(1)] = (1));

return statearr_12092;
});
var cljs$core$async$mix_$_state_machine__10964__auto____1 = (function (state_12036){
while(true){
var ret_value__10965__auto__ = (function (){try{while(true){
var result__10966__auto__ = switch__10963__auto__.call(null,state_12036);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10966__auto__;
}
break;
}
}catch (e12093){if((e12093 instanceof Object)){
var ex__10967__auto__ = e12093;
var statearr_12094_12143 = state_12036;
(statearr_12094_12143[(5)] = ex__10967__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12036);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12093;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12144 = state_12036;
state_12036 = G__12144;
continue;
} else {
return ret_value__10965__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10964__auto__ = function(state_12036){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10964__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10964__auto____1.call(this,state_12036);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__10964__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10964__auto____0;
cljs$core$async$mix_$_state_machine__10964__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10964__auto____1;
return cljs$core$async$mix_$_state_machine__10964__auto__;
})()
;})(switch__10963__auto__,c__11051__auto___12096,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__11053__auto__ = (function (){var statearr_12095 = f__11052__auto__.call(null);
(statearr_12095[(6)] = c__11051__auto___12096);

return statearr_12095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11053__auto__);
});})(c__11051__auto___12096,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__8735__auto__ = (((p == null))?null:p);
var m__8736__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8735__auto__)]);
if(!((m__8736__auto__ == null))){
return m__8736__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__8736__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__8736__auto____$1 == null))){
return m__8736__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__8735__auto__ = (((p == null))?null:p);
var m__8736__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8735__auto__)]);
if(!((m__8736__auto__ == null))){
return m__8736__auto__.call(null,p,v,ch);
} else {
var m__8736__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__8736__auto____$1 == null))){
return m__8736__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__12146 = arguments.length;
switch (G__12146) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__8735__auto__ = (((p == null))?null:p);
var m__8736__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8735__auto__)]);
if(!((m__8736__auto__ == null))){
return m__8736__auto__.call(null,p);
} else {
var m__8736__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__8736__auto____$1 == null))){
return m__8736__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__8735__auto__ = (((p == null))?null:p);
var m__8736__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8735__auto__)]);
if(!((m__8736__auto__ == null))){
return m__8736__auto__.call(null,p,v);
} else {
var m__8736__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__8736__auto____$1 == null))){
return m__8736__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__12150 = arguments.length;
switch (G__12150) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__8052__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__8052__auto__)){
return or__8052__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__8052__auto__,mults){
return (function (p1__12148_SHARP_){
if(cljs.core.truth_(p1__12148_SHARP_.call(null,topic))){
return p1__12148_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__12148_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__8052__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async12151 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12151 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta12152){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta12152 = meta12152;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async12151.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12153,meta12152__$1){
var self__ = this;
var _12153__$1 = this;
return (new cljs.core.async.t_cljs$core$async12151(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta12152__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12151.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12153){
var self__ = this;
var _12153__$1 = this;
return self__.meta12152;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12151.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12151.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12151.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12151.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12151.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12151.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12151.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12151.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta12152","meta12152",-1699229207,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12151.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12151.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12151";

cljs.core.async.t_cljs$core$async12151.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8677__auto__,writer__8678__auto__,opt__8679__auto__){
return cljs.core._write.call(null,writer__8678__auto__,"cljs.core.async/t_cljs$core$async12151");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async12151 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async12151(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12152){
return (new cljs.core.async.t_cljs$core$async12151(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12152));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async12151(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11051__auto___12271 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11051__auto___12271,mults,ensure_mult,p){
return (function (){
var f__11052__auto__ = (function (){var switch__10963__auto__ = ((function (c__11051__auto___12271,mults,ensure_mult,p){
return (function (state_12225){
var state_val_12226 = (state_12225[(1)]);
if((state_val_12226 === (7))){
var inst_12221 = (state_12225[(2)]);
var state_12225__$1 = state_12225;
var statearr_12227_12272 = state_12225__$1;
(statearr_12227_12272[(2)] = inst_12221);

(statearr_12227_12272[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12226 === (20))){
var state_12225__$1 = state_12225;
var statearr_12228_12273 = state_12225__$1;
(statearr_12228_12273[(2)] = null);

(statearr_12228_12273[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12226 === (1))){
var state_12225__$1 = state_12225;
var statearr_12229_12274 = state_12225__$1;
(statearr_12229_12274[(2)] = null);

(statearr_12229_12274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12226 === (24))){
var inst_12204 = (state_12225[(7)]);
var inst_12213 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12204);
var state_12225__$1 = state_12225;
var statearr_12230_12275 = state_12225__$1;
(statearr_12230_12275[(2)] = inst_12213);

(statearr_12230_12275[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12226 === (4))){
var inst_12156 = (state_12225[(8)]);
var inst_12156__$1 = (state_12225[(2)]);
var inst_12157 = (inst_12156__$1 == null);
var state_12225__$1 = (function (){var statearr_12231 = state_12225;
(statearr_12231[(8)] = inst_12156__$1);

return statearr_12231;
})();
if(cljs.core.truth_(inst_12157)){
var statearr_12232_12276 = state_12225__$1;
(statearr_12232_12276[(1)] = (5));

} else {
var statearr_12233_12277 = state_12225__$1;
(statearr_12233_12277[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12226 === (15))){
var inst_12198 = (state_12225[(2)]);
var state_12225__$1 = state_12225;
var statearr_12234_12278 = state_12225__$1;
(statearr_12234_12278[(2)] = inst_12198);

(statearr_12234_12278[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12226 === (21))){
var inst_12218 = (state_12225[(2)]);
var state_12225__$1 = (function (){var statearr_12235 = state_12225;
(statearr_12235[(9)] = inst_12218);

return statearr_12235;
})();
var statearr_12236_12279 = state_12225__$1;
(statearr_12236_12279[(2)] = null);

(statearr_12236_12279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12226 === (13))){
var inst_12180 = (state_12225[(10)]);
var inst_12182 = cljs.core.chunked_seq_QMARK_.call(null,inst_12180);
var state_12225__$1 = state_12225;
if(inst_12182){
var statearr_12237_12280 = state_12225__$1;
(statearr_12237_12280[(1)] = (16));

} else {
var statearr_12238_12281 = state_12225__$1;
(statearr_12238_12281[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12226 === (22))){
var inst_12210 = (state_12225[(2)]);
var state_12225__$1 = state_12225;
if(cljs.core.truth_(inst_12210)){
var statearr_12239_12282 = state_12225__$1;
(statearr_12239_12282[(1)] = (23));

} else {
var statearr_12240_12283 = state_12225__$1;
(statearr_12240_12283[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12226 === (6))){
var inst_12204 = (state_12225[(7)]);
var inst_12206 = (state_12225[(11)]);
var inst_12156 = (state_12225[(8)]);
var inst_12204__$1 = topic_fn.call(null,inst_12156);
var inst_12205 = cljs.core.deref.call(null,mults);
var inst_12206__$1 = cljs.core.get.call(null,inst_12205,inst_12204__$1);
var state_12225__$1 = (function (){var statearr_12241 = state_12225;
(statearr_12241[(7)] = inst_12204__$1);

(statearr_12241[(11)] = inst_12206__$1);

return statearr_12241;
})();
if(cljs.core.truth_(inst_12206__$1)){
var statearr_12242_12284 = state_12225__$1;
(statearr_12242_12284[(1)] = (19));

} else {
var statearr_12243_12285 = state_12225__$1;
(statearr_12243_12285[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12226 === (25))){
var inst_12215 = (state_12225[(2)]);
var state_12225__$1 = state_12225;
var statearr_12244_12286 = state_12225__$1;
(statearr_12244_12286[(2)] = inst_12215);

(statearr_12244_12286[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12226 === (17))){
var inst_12180 = (state_12225[(10)]);
var inst_12189 = cljs.core.first.call(null,inst_12180);
var inst_12190 = cljs.core.async.muxch_STAR_.call(null,inst_12189);
var inst_12191 = cljs.core.async.close_BANG_.call(null,inst_12190);
var inst_12192 = cljs.core.next.call(null,inst_12180);
var inst_12166 = inst_12192;
var inst_12167 = null;
var inst_12168 = (0);
var inst_12169 = (0);
var state_12225__$1 = (function (){var statearr_12245 = state_12225;
(statearr_12245[(12)] = inst_12168);

(statearr_12245[(13)] = inst_12191);

(statearr_12245[(14)] = inst_12167);

(statearr_12245[(15)] = inst_12166);

(statearr_12245[(16)] = inst_12169);

return statearr_12245;
})();
var statearr_12246_12287 = state_12225__$1;
(statearr_12246_12287[(2)] = null);

(statearr_12246_12287[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12226 === (3))){
var inst_12223 = (state_12225[(2)]);
var state_12225__$1 = state_12225;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12225__$1,inst_12223);
} else {
if((state_val_12226 === (12))){
var inst_12200 = (state_12225[(2)]);
var state_12225__$1 = state_12225;
var statearr_12247_12288 = state_12225__$1;
(statearr_12247_12288[(2)] = inst_12200);

(statearr_12247_12288[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12226 === (2))){
var state_12225__$1 = state_12225;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12225__$1,(4),ch);
} else {
if((state_val_12226 === (23))){
var state_12225__$1 = state_12225;
var statearr_12248_12289 = state_12225__$1;
(statearr_12248_12289[(2)] = null);

(statearr_12248_12289[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12226 === (19))){
var inst_12206 = (state_12225[(11)]);
var inst_12156 = (state_12225[(8)]);
var inst_12208 = cljs.core.async.muxch_STAR_.call(null,inst_12206);
var state_12225__$1 = state_12225;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12225__$1,(22),inst_12208,inst_12156);
} else {
if((state_val_12226 === (11))){
var inst_12166 = (state_12225[(15)]);
var inst_12180 = (state_12225[(10)]);
var inst_12180__$1 = cljs.core.seq.call(null,inst_12166);
var state_12225__$1 = (function (){var statearr_12249 = state_12225;
(statearr_12249[(10)] = inst_12180__$1);

return statearr_12249;
})();
if(inst_12180__$1){
var statearr_12250_12290 = state_12225__$1;
(statearr_12250_12290[(1)] = (13));

} else {
var statearr_12251_12291 = state_12225__$1;
(statearr_12251_12291[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12226 === (9))){
var inst_12202 = (state_12225[(2)]);
var state_12225__$1 = state_12225;
var statearr_12252_12292 = state_12225__$1;
(statearr_12252_12292[(2)] = inst_12202);

(statearr_12252_12292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12226 === (5))){
var inst_12163 = cljs.core.deref.call(null,mults);
var inst_12164 = cljs.core.vals.call(null,inst_12163);
var inst_12165 = cljs.core.seq.call(null,inst_12164);
var inst_12166 = inst_12165;
var inst_12167 = null;
var inst_12168 = (0);
var inst_12169 = (0);
var state_12225__$1 = (function (){var statearr_12253 = state_12225;
(statearr_12253[(12)] = inst_12168);

(statearr_12253[(14)] = inst_12167);

(statearr_12253[(15)] = inst_12166);

(statearr_12253[(16)] = inst_12169);

return statearr_12253;
})();
var statearr_12254_12293 = state_12225__$1;
(statearr_12254_12293[(2)] = null);

(statearr_12254_12293[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12226 === (14))){
var state_12225__$1 = state_12225;
var statearr_12258_12294 = state_12225__$1;
(statearr_12258_12294[(2)] = null);

(statearr_12258_12294[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12226 === (16))){
var inst_12180 = (state_12225[(10)]);
var inst_12184 = cljs.core.chunk_first.call(null,inst_12180);
var inst_12185 = cljs.core.chunk_rest.call(null,inst_12180);
var inst_12186 = cljs.core.count.call(null,inst_12184);
var inst_12166 = inst_12185;
var inst_12167 = inst_12184;
var inst_12168 = inst_12186;
var inst_12169 = (0);
var state_12225__$1 = (function (){var statearr_12259 = state_12225;
(statearr_12259[(12)] = inst_12168);

(statearr_12259[(14)] = inst_12167);

(statearr_12259[(15)] = inst_12166);

(statearr_12259[(16)] = inst_12169);

return statearr_12259;
})();
var statearr_12260_12295 = state_12225__$1;
(statearr_12260_12295[(2)] = null);

(statearr_12260_12295[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12226 === (10))){
var inst_12168 = (state_12225[(12)]);
var inst_12167 = (state_12225[(14)]);
var inst_12166 = (state_12225[(15)]);
var inst_12169 = (state_12225[(16)]);
var inst_12174 = cljs.core._nth.call(null,inst_12167,inst_12169);
var inst_12175 = cljs.core.async.muxch_STAR_.call(null,inst_12174);
var inst_12176 = cljs.core.async.close_BANG_.call(null,inst_12175);
var inst_12177 = (inst_12169 + (1));
var tmp12255 = inst_12168;
var tmp12256 = inst_12167;
var tmp12257 = inst_12166;
var inst_12166__$1 = tmp12257;
var inst_12167__$1 = tmp12256;
var inst_12168__$1 = tmp12255;
var inst_12169__$1 = inst_12177;
var state_12225__$1 = (function (){var statearr_12261 = state_12225;
(statearr_12261[(12)] = inst_12168__$1);

(statearr_12261[(14)] = inst_12167__$1);

(statearr_12261[(15)] = inst_12166__$1);

(statearr_12261[(16)] = inst_12169__$1);

(statearr_12261[(17)] = inst_12176);

return statearr_12261;
})();
var statearr_12262_12296 = state_12225__$1;
(statearr_12262_12296[(2)] = null);

(statearr_12262_12296[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12226 === (18))){
var inst_12195 = (state_12225[(2)]);
var state_12225__$1 = state_12225;
var statearr_12263_12297 = state_12225__$1;
(statearr_12263_12297[(2)] = inst_12195);

(statearr_12263_12297[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12226 === (8))){
var inst_12168 = (state_12225[(12)]);
var inst_12169 = (state_12225[(16)]);
var inst_12171 = (inst_12169 < inst_12168);
var inst_12172 = inst_12171;
var state_12225__$1 = state_12225;
if(cljs.core.truth_(inst_12172)){
var statearr_12264_12298 = state_12225__$1;
(statearr_12264_12298[(1)] = (10));

} else {
var statearr_12265_12299 = state_12225__$1;
(statearr_12265_12299[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11051__auto___12271,mults,ensure_mult,p))
;
return ((function (switch__10963__auto__,c__11051__auto___12271,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__10964__auto__ = null;
var cljs$core$async$state_machine__10964__auto____0 = (function (){
var statearr_12266 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12266[(0)] = cljs$core$async$state_machine__10964__auto__);

(statearr_12266[(1)] = (1));

return statearr_12266;
});
var cljs$core$async$state_machine__10964__auto____1 = (function (state_12225){
while(true){
var ret_value__10965__auto__ = (function (){try{while(true){
var result__10966__auto__ = switch__10963__auto__.call(null,state_12225);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10966__auto__;
}
break;
}
}catch (e12267){if((e12267 instanceof Object)){
var ex__10967__auto__ = e12267;
var statearr_12268_12300 = state_12225;
(statearr_12268_12300[(5)] = ex__10967__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12225);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12267;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12301 = state_12225;
state_12225 = G__12301;
continue;
} else {
return ret_value__10965__auto__;
}
break;
}
});
cljs$core$async$state_machine__10964__auto__ = function(state_12225){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10964__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10964__auto____1.call(this,state_12225);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__10964__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10964__auto____0;
cljs$core$async$state_machine__10964__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10964__auto____1;
return cljs$core$async$state_machine__10964__auto__;
})()
;})(switch__10963__auto__,c__11051__auto___12271,mults,ensure_mult,p))
})();
var state__11053__auto__ = (function (){var statearr_12269 = f__11052__auto__.call(null);
(statearr_12269[(6)] = c__11051__auto___12271);

return statearr_12269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11053__auto__);
});})(c__11051__auto___12271,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__12303 = arguments.length;
switch (G__12303) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__12306 = arguments.length;
switch (G__12306) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__12309 = arguments.length;
switch (G__12309) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__11051__auto___12376 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11051__auto___12376,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__11052__auto__ = (function (){var switch__10963__auto__ = ((function (c__11051__auto___12376,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_12348){
var state_val_12349 = (state_12348[(1)]);
if((state_val_12349 === (7))){
var state_12348__$1 = state_12348;
var statearr_12350_12377 = state_12348__$1;
(statearr_12350_12377[(2)] = null);

(statearr_12350_12377[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12349 === (1))){
var state_12348__$1 = state_12348;
var statearr_12351_12378 = state_12348__$1;
(statearr_12351_12378[(2)] = null);

(statearr_12351_12378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12349 === (4))){
var inst_12312 = (state_12348[(7)]);
var inst_12314 = (inst_12312 < cnt);
var state_12348__$1 = state_12348;
if(cljs.core.truth_(inst_12314)){
var statearr_12352_12379 = state_12348__$1;
(statearr_12352_12379[(1)] = (6));

} else {
var statearr_12353_12380 = state_12348__$1;
(statearr_12353_12380[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12349 === (15))){
var inst_12344 = (state_12348[(2)]);
var state_12348__$1 = state_12348;
var statearr_12354_12381 = state_12348__$1;
(statearr_12354_12381[(2)] = inst_12344);

(statearr_12354_12381[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12349 === (13))){
var inst_12337 = cljs.core.async.close_BANG_.call(null,out);
var state_12348__$1 = state_12348;
var statearr_12355_12382 = state_12348__$1;
(statearr_12355_12382[(2)] = inst_12337);

(statearr_12355_12382[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12349 === (6))){
var state_12348__$1 = state_12348;
var statearr_12356_12383 = state_12348__$1;
(statearr_12356_12383[(2)] = null);

(statearr_12356_12383[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12349 === (3))){
var inst_12346 = (state_12348[(2)]);
var state_12348__$1 = state_12348;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12348__$1,inst_12346);
} else {
if((state_val_12349 === (12))){
var inst_12334 = (state_12348[(8)]);
var inst_12334__$1 = (state_12348[(2)]);
var inst_12335 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12334__$1);
var state_12348__$1 = (function (){var statearr_12357 = state_12348;
(statearr_12357[(8)] = inst_12334__$1);

return statearr_12357;
})();
if(cljs.core.truth_(inst_12335)){
var statearr_12358_12384 = state_12348__$1;
(statearr_12358_12384[(1)] = (13));

} else {
var statearr_12359_12385 = state_12348__$1;
(statearr_12359_12385[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12349 === (2))){
var inst_12311 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_12312 = (0);
var state_12348__$1 = (function (){var statearr_12360 = state_12348;
(statearr_12360[(7)] = inst_12312);

(statearr_12360[(9)] = inst_12311);

return statearr_12360;
})();
var statearr_12361_12386 = state_12348__$1;
(statearr_12361_12386[(2)] = null);

(statearr_12361_12386[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12349 === (11))){
var inst_12312 = (state_12348[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12348,(10),Object,null,(9));
var inst_12321 = chs__$1.call(null,inst_12312);
var inst_12322 = done.call(null,inst_12312);
var inst_12323 = cljs.core.async.take_BANG_.call(null,inst_12321,inst_12322);
var state_12348__$1 = state_12348;
var statearr_12362_12387 = state_12348__$1;
(statearr_12362_12387[(2)] = inst_12323);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12348__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12349 === (9))){
var inst_12312 = (state_12348[(7)]);
var inst_12325 = (state_12348[(2)]);
var inst_12326 = (inst_12312 + (1));
var inst_12312__$1 = inst_12326;
var state_12348__$1 = (function (){var statearr_12363 = state_12348;
(statearr_12363[(7)] = inst_12312__$1);

(statearr_12363[(10)] = inst_12325);

return statearr_12363;
})();
var statearr_12364_12388 = state_12348__$1;
(statearr_12364_12388[(2)] = null);

(statearr_12364_12388[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12349 === (5))){
var inst_12332 = (state_12348[(2)]);
var state_12348__$1 = (function (){var statearr_12365 = state_12348;
(statearr_12365[(11)] = inst_12332);

return statearr_12365;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12348__$1,(12),dchan);
} else {
if((state_val_12349 === (14))){
var inst_12334 = (state_12348[(8)]);
var inst_12339 = cljs.core.apply.call(null,f,inst_12334);
var state_12348__$1 = state_12348;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12348__$1,(16),out,inst_12339);
} else {
if((state_val_12349 === (16))){
var inst_12341 = (state_12348[(2)]);
var state_12348__$1 = (function (){var statearr_12366 = state_12348;
(statearr_12366[(12)] = inst_12341);

return statearr_12366;
})();
var statearr_12367_12389 = state_12348__$1;
(statearr_12367_12389[(2)] = null);

(statearr_12367_12389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12349 === (10))){
var inst_12316 = (state_12348[(2)]);
var inst_12317 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_12348__$1 = (function (){var statearr_12368 = state_12348;
(statearr_12368[(13)] = inst_12316);

return statearr_12368;
})();
var statearr_12369_12390 = state_12348__$1;
(statearr_12369_12390[(2)] = inst_12317);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12348__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12349 === (8))){
var inst_12330 = (state_12348[(2)]);
var state_12348__$1 = state_12348;
var statearr_12370_12391 = state_12348__$1;
(statearr_12370_12391[(2)] = inst_12330);

(statearr_12370_12391[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11051__auto___12376,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__10963__auto__,c__11051__auto___12376,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__10964__auto__ = null;
var cljs$core$async$state_machine__10964__auto____0 = (function (){
var statearr_12371 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12371[(0)] = cljs$core$async$state_machine__10964__auto__);

(statearr_12371[(1)] = (1));

return statearr_12371;
});
var cljs$core$async$state_machine__10964__auto____1 = (function (state_12348){
while(true){
var ret_value__10965__auto__ = (function (){try{while(true){
var result__10966__auto__ = switch__10963__auto__.call(null,state_12348);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10966__auto__;
}
break;
}
}catch (e12372){if((e12372 instanceof Object)){
var ex__10967__auto__ = e12372;
var statearr_12373_12392 = state_12348;
(statearr_12373_12392[(5)] = ex__10967__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12348);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12372;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12393 = state_12348;
state_12348 = G__12393;
continue;
} else {
return ret_value__10965__auto__;
}
break;
}
});
cljs$core$async$state_machine__10964__auto__ = function(state_12348){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10964__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10964__auto____1.call(this,state_12348);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__10964__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10964__auto____0;
cljs$core$async$state_machine__10964__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10964__auto____1;
return cljs$core$async$state_machine__10964__auto__;
})()
;})(switch__10963__auto__,c__11051__auto___12376,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__11053__auto__ = (function (){var statearr_12374 = f__11052__auto__.call(null);
(statearr_12374[(6)] = c__11051__auto___12376);

return statearr_12374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11053__auto__);
});})(c__11051__auto___12376,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__12396 = arguments.length;
switch (G__12396) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11051__auto___12450 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11051__auto___12450,out){
return (function (){
var f__11052__auto__ = (function (){var switch__10963__auto__ = ((function (c__11051__auto___12450,out){
return (function (state_12428){
var state_val_12429 = (state_12428[(1)]);
if((state_val_12429 === (7))){
var inst_12407 = (state_12428[(7)]);
var inst_12408 = (state_12428[(8)]);
var inst_12407__$1 = (state_12428[(2)]);
var inst_12408__$1 = cljs.core.nth.call(null,inst_12407__$1,(0),null);
var inst_12409 = cljs.core.nth.call(null,inst_12407__$1,(1),null);
var inst_12410 = (inst_12408__$1 == null);
var state_12428__$1 = (function (){var statearr_12430 = state_12428;
(statearr_12430[(7)] = inst_12407__$1);

(statearr_12430[(8)] = inst_12408__$1);

(statearr_12430[(9)] = inst_12409);

return statearr_12430;
})();
if(cljs.core.truth_(inst_12410)){
var statearr_12431_12451 = state_12428__$1;
(statearr_12431_12451[(1)] = (8));

} else {
var statearr_12432_12452 = state_12428__$1;
(statearr_12432_12452[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12429 === (1))){
var inst_12397 = cljs.core.vec.call(null,chs);
var inst_12398 = inst_12397;
var state_12428__$1 = (function (){var statearr_12433 = state_12428;
(statearr_12433[(10)] = inst_12398);

return statearr_12433;
})();
var statearr_12434_12453 = state_12428__$1;
(statearr_12434_12453[(2)] = null);

(statearr_12434_12453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12429 === (4))){
var inst_12398 = (state_12428[(10)]);
var state_12428__$1 = state_12428;
return cljs.core.async.ioc_alts_BANG_.call(null,state_12428__$1,(7),inst_12398);
} else {
if((state_val_12429 === (6))){
var inst_12424 = (state_12428[(2)]);
var state_12428__$1 = state_12428;
var statearr_12435_12454 = state_12428__$1;
(statearr_12435_12454[(2)] = inst_12424);

(statearr_12435_12454[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12429 === (3))){
var inst_12426 = (state_12428[(2)]);
var state_12428__$1 = state_12428;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12428__$1,inst_12426);
} else {
if((state_val_12429 === (2))){
var inst_12398 = (state_12428[(10)]);
var inst_12400 = cljs.core.count.call(null,inst_12398);
var inst_12401 = (inst_12400 > (0));
var state_12428__$1 = state_12428;
if(cljs.core.truth_(inst_12401)){
var statearr_12437_12455 = state_12428__$1;
(statearr_12437_12455[(1)] = (4));

} else {
var statearr_12438_12456 = state_12428__$1;
(statearr_12438_12456[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12429 === (11))){
var inst_12398 = (state_12428[(10)]);
var inst_12417 = (state_12428[(2)]);
var tmp12436 = inst_12398;
var inst_12398__$1 = tmp12436;
var state_12428__$1 = (function (){var statearr_12439 = state_12428;
(statearr_12439[(11)] = inst_12417);

(statearr_12439[(10)] = inst_12398__$1);

return statearr_12439;
})();
var statearr_12440_12457 = state_12428__$1;
(statearr_12440_12457[(2)] = null);

(statearr_12440_12457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12429 === (9))){
var inst_12408 = (state_12428[(8)]);
var state_12428__$1 = state_12428;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12428__$1,(11),out,inst_12408);
} else {
if((state_val_12429 === (5))){
var inst_12422 = cljs.core.async.close_BANG_.call(null,out);
var state_12428__$1 = state_12428;
var statearr_12441_12458 = state_12428__$1;
(statearr_12441_12458[(2)] = inst_12422);

(statearr_12441_12458[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12429 === (10))){
var inst_12420 = (state_12428[(2)]);
var state_12428__$1 = state_12428;
var statearr_12442_12459 = state_12428__$1;
(statearr_12442_12459[(2)] = inst_12420);

(statearr_12442_12459[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12429 === (8))){
var inst_12398 = (state_12428[(10)]);
var inst_12407 = (state_12428[(7)]);
var inst_12408 = (state_12428[(8)]);
var inst_12409 = (state_12428[(9)]);
var inst_12412 = (function (){var cs = inst_12398;
var vec__12403 = inst_12407;
var v = inst_12408;
var c = inst_12409;
return ((function (cs,vec__12403,v,c,inst_12398,inst_12407,inst_12408,inst_12409,state_val_12429,c__11051__auto___12450,out){
return (function (p1__12394_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__12394_SHARP_);
});
;})(cs,vec__12403,v,c,inst_12398,inst_12407,inst_12408,inst_12409,state_val_12429,c__11051__auto___12450,out))
})();
var inst_12413 = cljs.core.filterv.call(null,inst_12412,inst_12398);
var inst_12398__$1 = inst_12413;
var state_12428__$1 = (function (){var statearr_12443 = state_12428;
(statearr_12443[(10)] = inst_12398__$1);

return statearr_12443;
})();
var statearr_12444_12460 = state_12428__$1;
(statearr_12444_12460[(2)] = null);

(statearr_12444_12460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11051__auto___12450,out))
;
return ((function (switch__10963__auto__,c__11051__auto___12450,out){
return (function() {
var cljs$core$async$state_machine__10964__auto__ = null;
var cljs$core$async$state_machine__10964__auto____0 = (function (){
var statearr_12445 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12445[(0)] = cljs$core$async$state_machine__10964__auto__);

(statearr_12445[(1)] = (1));

return statearr_12445;
});
var cljs$core$async$state_machine__10964__auto____1 = (function (state_12428){
while(true){
var ret_value__10965__auto__ = (function (){try{while(true){
var result__10966__auto__ = switch__10963__auto__.call(null,state_12428);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10966__auto__;
}
break;
}
}catch (e12446){if((e12446 instanceof Object)){
var ex__10967__auto__ = e12446;
var statearr_12447_12461 = state_12428;
(statearr_12447_12461[(5)] = ex__10967__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12428);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12446;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12462 = state_12428;
state_12428 = G__12462;
continue;
} else {
return ret_value__10965__auto__;
}
break;
}
});
cljs$core$async$state_machine__10964__auto__ = function(state_12428){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10964__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10964__auto____1.call(this,state_12428);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__10964__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10964__auto____0;
cljs$core$async$state_machine__10964__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10964__auto____1;
return cljs$core$async$state_machine__10964__auto__;
})()
;})(switch__10963__auto__,c__11051__auto___12450,out))
})();
var state__11053__auto__ = (function (){var statearr_12448 = f__11052__auto__.call(null);
(statearr_12448[(6)] = c__11051__auto___12450);

return statearr_12448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11053__auto__);
});})(c__11051__auto___12450,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__12464 = arguments.length;
switch (G__12464) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11051__auto___12509 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11051__auto___12509,out){
return (function (){
var f__11052__auto__ = (function (){var switch__10963__auto__ = ((function (c__11051__auto___12509,out){
return (function (state_12488){
var state_val_12489 = (state_12488[(1)]);
if((state_val_12489 === (7))){
var inst_12470 = (state_12488[(7)]);
var inst_12470__$1 = (state_12488[(2)]);
var inst_12471 = (inst_12470__$1 == null);
var inst_12472 = cljs.core.not.call(null,inst_12471);
var state_12488__$1 = (function (){var statearr_12490 = state_12488;
(statearr_12490[(7)] = inst_12470__$1);

return statearr_12490;
})();
if(inst_12472){
var statearr_12491_12510 = state_12488__$1;
(statearr_12491_12510[(1)] = (8));

} else {
var statearr_12492_12511 = state_12488__$1;
(statearr_12492_12511[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12489 === (1))){
var inst_12465 = (0);
var state_12488__$1 = (function (){var statearr_12493 = state_12488;
(statearr_12493[(8)] = inst_12465);

return statearr_12493;
})();
var statearr_12494_12512 = state_12488__$1;
(statearr_12494_12512[(2)] = null);

(statearr_12494_12512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12489 === (4))){
var state_12488__$1 = state_12488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12488__$1,(7),ch);
} else {
if((state_val_12489 === (6))){
var inst_12483 = (state_12488[(2)]);
var state_12488__$1 = state_12488;
var statearr_12495_12513 = state_12488__$1;
(statearr_12495_12513[(2)] = inst_12483);

(statearr_12495_12513[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12489 === (3))){
var inst_12485 = (state_12488[(2)]);
var inst_12486 = cljs.core.async.close_BANG_.call(null,out);
var state_12488__$1 = (function (){var statearr_12496 = state_12488;
(statearr_12496[(9)] = inst_12485);

return statearr_12496;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12488__$1,inst_12486);
} else {
if((state_val_12489 === (2))){
var inst_12465 = (state_12488[(8)]);
var inst_12467 = (inst_12465 < n);
var state_12488__$1 = state_12488;
if(cljs.core.truth_(inst_12467)){
var statearr_12497_12514 = state_12488__$1;
(statearr_12497_12514[(1)] = (4));

} else {
var statearr_12498_12515 = state_12488__$1;
(statearr_12498_12515[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12489 === (11))){
var inst_12465 = (state_12488[(8)]);
var inst_12475 = (state_12488[(2)]);
var inst_12476 = (inst_12465 + (1));
var inst_12465__$1 = inst_12476;
var state_12488__$1 = (function (){var statearr_12499 = state_12488;
(statearr_12499[(10)] = inst_12475);

(statearr_12499[(8)] = inst_12465__$1);

return statearr_12499;
})();
var statearr_12500_12516 = state_12488__$1;
(statearr_12500_12516[(2)] = null);

(statearr_12500_12516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12489 === (9))){
var state_12488__$1 = state_12488;
var statearr_12501_12517 = state_12488__$1;
(statearr_12501_12517[(2)] = null);

(statearr_12501_12517[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12489 === (5))){
var state_12488__$1 = state_12488;
var statearr_12502_12518 = state_12488__$1;
(statearr_12502_12518[(2)] = null);

(statearr_12502_12518[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12489 === (10))){
var inst_12480 = (state_12488[(2)]);
var state_12488__$1 = state_12488;
var statearr_12503_12519 = state_12488__$1;
(statearr_12503_12519[(2)] = inst_12480);

(statearr_12503_12519[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12489 === (8))){
var inst_12470 = (state_12488[(7)]);
var state_12488__$1 = state_12488;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12488__$1,(11),out,inst_12470);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11051__auto___12509,out))
;
return ((function (switch__10963__auto__,c__11051__auto___12509,out){
return (function() {
var cljs$core$async$state_machine__10964__auto__ = null;
var cljs$core$async$state_machine__10964__auto____0 = (function (){
var statearr_12504 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12504[(0)] = cljs$core$async$state_machine__10964__auto__);

(statearr_12504[(1)] = (1));

return statearr_12504;
});
var cljs$core$async$state_machine__10964__auto____1 = (function (state_12488){
while(true){
var ret_value__10965__auto__ = (function (){try{while(true){
var result__10966__auto__ = switch__10963__auto__.call(null,state_12488);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10966__auto__;
}
break;
}
}catch (e12505){if((e12505 instanceof Object)){
var ex__10967__auto__ = e12505;
var statearr_12506_12520 = state_12488;
(statearr_12506_12520[(5)] = ex__10967__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12488);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12505;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12521 = state_12488;
state_12488 = G__12521;
continue;
} else {
return ret_value__10965__auto__;
}
break;
}
});
cljs$core$async$state_machine__10964__auto__ = function(state_12488){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10964__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10964__auto____1.call(this,state_12488);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__10964__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10964__auto____0;
cljs$core$async$state_machine__10964__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10964__auto____1;
return cljs$core$async$state_machine__10964__auto__;
})()
;})(switch__10963__auto__,c__11051__auto___12509,out))
})();
var state__11053__auto__ = (function (){var statearr_12507 = f__11052__auto__.call(null);
(statearr_12507[(6)] = c__11051__auto___12509);

return statearr_12507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11053__auto__);
});})(c__11051__auto___12509,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async12523 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12523 = (function (f,ch,meta12524){
this.f = f;
this.ch = ch;
this.meta12524 = meta12524;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async12523.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12525,meta12524__$1){
var self__ = this;
var _12525__$1 = this;
return (new cljs.core.async.t_cljs$core$async12523(self__.f,self__.ch,meta12524__$1));
});

cljs.core.async.t_cljs$core$async12523.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12525){
var self__ = this;
var _12525__$1 = this;
return self__.meta12524;
});

cljs.core.async.t_cljs$core$async12523.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12523.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async12523.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async12523.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12523.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async12526 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12526 = (function (f,ch,meta12524,_,fn1,meta12527){
this.f = f;
this.ch = ch;
this.meta12524 = meta12524;
this._ = _;
this.fn1 = fn1;
this.meta12527 = meta12527;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async12526.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_12528,meta12527__$1){
var self__ = this;
var _12528__$1 = this;
return (new cljs.core.async.t_cljs$core$async12526(self__.f,self__.ch,self__.meta12524,self__._,self__.fn1,meta12527__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async12526.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_12528){
var self__ = this;
var _12528__$1 = this;
return self__.meta12527;
});})(___$1))
;

cljs.core.async.t_cljs$core$async12526.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12526.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async12526.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async12526.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__12522_SHARP_){
return f1.call(null,(((p1__12522_SHARP_ == null))?null:self__.f.call(null,p1__12522_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async12526.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12524","meta12524",1073941734,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async12523","cljs.core.async/t_cljs$core$async12523",32043294,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta12527","meta12527",-1047081815,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async12526.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12526.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12526";

cljs.core.async.t_cljs$core$async12526.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__8677__auto__,writer__8678__auto__,opt__8679__auto__){
return cljs.core._write.call(null,writer__8678__auto__,"cljs.core.async/t_cljs$core$async12526");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async12526 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12526(f__$1,ch__$1,meta12524__$1,___$2,fn1__$1,meta12527){
return (new cljs.core.async.t_cljs$core$async12526(f__$1,ch__$1,meta12524__$1,___$2,fn1__$1,meta12527));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async12526(self__.f,self__.ch,self__.meta12524,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__8040__auto__ = ret;
if(cljs.core.truth_(and__8040__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__8040__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async12523.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12523.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async12523.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12524","meta12524",1073941734,null)], null);
});

cljs.core.async.t_cljs$core$async12523.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12523.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12523";

cljs.core.async.t_cljs$core$async12523.cljs$lang$ctorPrWriter = (function (this__8677__auto__,writer__8678__auto__,opt__8679__auto__){
return cljs.core._write.call(null,writer__8678__auto__,"cljs.core.async/t_cljs$core$async12523");
});

cljs.core.async.__GT_t_cljs$core$async12523 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12523(f__$1,ch__$1,meta12524){
return (new cljs.core.async.t_cljs$core$async12523(f__$1,ch__$1,meta12524));
});

}

return (new cljs.core.async.t_cljs$core$async12523(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async12529 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12529 = (function (f,ch,meta12530){
this.f = f;
this.ch = ch;
this.meta12530 = meta12530;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async12529.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12531,meta12530__$1){
var self__ = this;
var _12531__$1 = this;
return (new cljs.core.async.t_cljs$core$async12529(self__.f,self__.ch,meta12530__$1));
});

cljs.core.async.t_cljs$core$async12529.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12531){
var self__ = this;
var _12531__$1 = this;
return self__.meta12530;
});

cljs.core.async.t_cljs$core$async12529.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12529.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async12529.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12529.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async12529.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12529.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async12529.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12530","meta12530",2055088648,null)], null);
});

cljs.core.async.t_cljs$core$async12529.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12529.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12529";

cljs.core.async.t_cljs$core$async12529.cljs$lang$ctorPrWriter = (function (this__8677__auto__,writer__8678__auto__,opt__8679__auto__){
return cljs.core._write.call(null,writer__8678__auto__,"cljs.core.async/t_cljs$core$async12529");
});

cljs.core.async.__GT_t_cljs$core$async12529 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async12529(f__$1,ch__$1,meta12530){
return (new cljs.core.async.t_cljs$core$async12529(f__$1,ch__$1,meta12530));
});

}

return (new cljs.core.async.t_cljs$core$async12529(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async12532 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12532 = (function (p,ch,meta12533){
this.p = p;
this.ch = ch;
this.meta12533 = meta12533;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async12532.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12534,meta12533__$1){
var self__ = this;
var _12534__$1 = this;
return (new cljs.core.async.t_cljs$core$async12532(self__.p,self__.ch,meta12533__$1));
});

cljs.core.async.t_cljs$core$async12532.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12534){
var self__ = this;
var _12534__$1 = this;
return self__.meta12533;
});

cljs.core.async.t_cljs$core$async12532.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12532.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async12532.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async12532.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12532.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async12532.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12532.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async12532.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12533","meta12533",1954633130,null)], null);
});

cljs.core.async.t_cljs$core$async12532.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12532.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12532";

cljs.core.async.t_cljs$core$async12532.cljs$lang$ctorPrWriter = (function (this__8677__auto__,writer__8678__auto__,opt__8679__auto__){
return cljs.core._write.call(null,writer__8678__auto__,"cljs.core.async/t_cljs$core$async12532");
});

cljs.core.async.__GT_t_cljs$core$async12532 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async12532(p__$1,ch__$1,meta12533){
return (new cljs.core.async.t_cljs$core$async12532(p__$1,ch__$1,meta12533));
});

}

return (new cljs.core.async.t_cljs$core$async12532(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__12536 = arguments.length;
switch (G__12536) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11051__auto___12576 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11051__auto___12576,out){
return (function (){
var f__11052__auto__ = (function (){var switch__10963__auto__ = ((function (c__11051__auto___12576,out){
return (function (state_12557){
var state_val_12558 = (state_12557[(1)]);
if((state_val_12558 === (7))){
var inst_12553 = (state_12557[(2)]);
var state_12557__$1 = state_12557;
var statearr_12559_12577 = state_12557__$1;
(statearr_12559_12577[(2)] = inst_12553);

(statearr_12559_12577[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12558 === (1))){
var state_12557__$1 = state_12557;
var statearr_12560_12578 = state_12557__$1;
(statearr_12560_12578[(2)] = null);

(statearr_12560_12578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12558 === (4))){
var inst_12539 = (state_12557[(7)]);
var inst_12539__$1 = (state_12557[(2)]);
var inst_12540 = (inst_12539__$1 == null);
var state_12557__$1 = (function (){var statearr_12561 = state_12557;
(statearr_12561[(7)] = inst_12539__$1);

return statearr_12561;
})();
if(cljs.core.truth_(inst_12540)){
var statearr_12562_12579 = state_12557__$1;
(statearr_12562_12579[(1)] = (5));

} else {
var statearr_12563_12580 = state_12557__$1;
(statearr_12563_12580[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12558 === (6))){
var inst_12539 = (state_12557[(7)]);
var inst_12544 = p.call(null,inst_12539);
var state_12557__$1 = state_12557;
if(cljs.core.truth_(inst_12544)){
var statearr_12564_12581 = state_12557__$1;
(statearr_12564_12581[(1)] = (8));

} else {
var statearr_12565_12582 = state_12557__$1;
(statearr_12565_12582[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12558 === (3))){
var inst_12555 = (state_12557[(2)]);
var state_12557__$1 = state_12557;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12557__$1,inst_12555);
} else {
if((state_val_12558 === (2))){
var state_12557__$1 = state_12557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12557__$1,(4),ch);
} else {
if((state_val_12558 === (11))){
var inst_12547 = (state_12557[(2)]);
var state_12557__$1 = state_12557;
var statearr_12566_12583 = state_12557__$1;
(statearr_12566_12583[(2)] = inst_12547);

(statearr_12566_12583[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12558 === (9))){
var state_12557__$1 = state_12557;
var statearr_12567_12584 = state_12557__$1;
(statearr_12567_12584[(2)] = null);

(statearr_12567_12584[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12558 === (5))){
var inst_12542 = cljs.core.async.close_BANG_.call(null,out);
var state_12557__$1 = state_12557;
var statearr_12568_12585 = state_12557__$1;
(statearr_12568_12585[(2)] = inst_12542);

(statearr_12568_12585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12558 === (10))){
var inst_12550 = (state_12557[(2)]);
var state_12557__$1 = (function (){var statearr_12569 = state_12557;
(statearr_12569[(8)] = inst_12550);

return statearr_12569;
})();
var statearr_12570_12586 = state_12557__$1;
(statearr_12570_12586[(2)] = null);

(statearr_12570_12586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12558 === (8))){
var inst_12539 = (state_12557[(7)]);
var state_12557__$1 = state_12557;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12557__$1,(11),out,inst_12539);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11051__auto___12576,out))
;
return ((function (switch__10963__auto__,c__11051__auto___12576,out){
return (function() {
var cljs$core$async$state_machine__10964__auto__ = null;
var cljs$core$async$state_machine__10964__auto____0 = (function (){
var statearr_12571 = [null,null,null,null,null,null,null,null,null];
(statearr_12571[(0)] = cljs$core$async$state_machine__10964__auto__);

(statearr_12571[(1)] = (1));

return statearr_12571;
});
var cljs$core$async$state_machine__10964__auto____1 = (function (state_12557){
while(true){
var ret_value__10965__auto__ = (function (){try{while(true){
var result__10966__auto__ = switch__10963__auto__.call(null,state_12557);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10966__auto__;
}
break;
}
}catch (e12572){if((e12572 instanceof Object)){
var ex__10967__auto__ = e12572;
var statearr_12573_12587 = state_12557;
(statearr_12573_12587[(5)] = ex__10967__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12557);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12572;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12588 = state_12557;
state_12557 = G__12588;
continue;
} else {
return ret_value__10965__auto__;
}
break;
}
});
cljs$core$async$state_machine__10964__auto__ = function(state_12557){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10964__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10964__auto____1.call(this,state_12557);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__10964__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10964__auto____0;
cljs$core$async$state_machine__10964__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10964__auto____1;
return cljs$core$async$state_machine__10964__auto__;
})()
;})(switch__10963__auto__,c__11051__auto___12576,out))
})();
var state__11053__auto__ = (function (){var statearr_12574 = f__11052__auto__.call(null);
(statearr_12574[(6)] = c__11051__auto___12576);

return statearr_12574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11053__auto__);
});})(c__11051__auto___12576,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__12590 = arguments.length;
switch (G__12590) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__11051__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11051__auto__){
return (function (){
var f__11052__auto__ = (function (){var switch__10963__auto__ = ((function (c__11051__auto__){
return (function (state_12653){
var state_val_12654 = (state_12653[(1)]);
if((state_val_12654 === (7))){
var inst_12649 = (state_12653[(2)]);
var state_12653__$1 = state_12653;
var statearr_12655_12693 = state_12653__$1;
(statearr_12655_12693[(2)] = inst_12649);

(statearr_12655_12693[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12654 === (20))){
var inst_12619 = (state_12653[(7)]);
var inst_12630 = (state_12653[(2)]);
var inst_12631 = cljs.core.next.call(null,inst_12619);
var inst_12605 = inst_12631;
var inst_12606 = null;
var inst_12607 = (0);
var inst_12608 = (0);
var state_12653__$1 = (function (){var statearr_12656 = state_12653;
(statearr_12656[(8)] = inst_12608);

(statearr_12656[(9)] = inst_12607);

(statearr_12656[(10)] = inst_12630);

(statearr_12656[(11)] = inst_12605);

(statearr_12656[(12)] = inst_12606);

return statearr_12656;
})();
var statearr_12657_12694 = state_12653__$1;
(statearr_12657_12694[(2)] = null);

(statearr_12657_12694[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12654 === (1))){
var state_12653__$1 = state_12653;
var statearr_12658_12695 = state_12653__$1;
(statearr_12658_12695[(2)] = null);

(statearr_12658_12695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12654 === (4))){
var inst_12594 = (state_12653[(13)]);
var inst_12594__$1 = (state_12653[(2)]);
var inst_12595 = (inst_12594__$1 == null);
var state_12653__$1 = (function (){var statearr_12659 = state_12653;
(statearr_12659[(13)] = inst_12594__$1);

return statearr_12659;
})();
if(cljs.core.truth_(inst_12595)){
var statearr_12660_12696 = state_12653__$1;
(statearr_12660_12696[(1)] = (5));

} else {
var statearr_12661_12697 = state_12653__$1;
(statearr_12661_12697[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12654 === (15))){
var state_12653__$1 = state_12653;
var statearr_12665_12698 = state_12653__$1;
(statearr_12665_12698[(2)] = null);

(statearr_12665_12698[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12654 === (21))){
var state_12653__$1 = state_12653;
var statearr_12666_12699 = state_12653__$1;
(statearr_12666_12699[(2)] = null);

(statearr_12666_12699[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12654 === (13))){
var inst_12608 = (state_12653[(8)]);
var inst_12607 = (state_12653[(9)]);
var inst_12605 = (state_12653[(11)]);
var inst_12606 = (state_12653[(12)]);
var inst_12615 = (state_12653[(2)]);
var inst_12616 = (inst_12608 + (1));
var tmp12662 = inst_12607;
var tmp12663 = inst_12605;
var tmp12664 = inst_12606;
var inst_12605__$1 = tmp12663;
var inst_12606__$1 = tmp12664;
var inst_12607__$1 = tmp12662;
var inst_12608__$1 = inst_12616;
var state_12653__$1 = (function (){var statearr_12667 = state_12653;
(statearr_12667[(14)] = inst_12615);

(statearr_12667[(8)] = inst_12608__$1);

(statearr_12667[(9)] = inst_12607__$1);

(statearr_12667[(11)] = inst_12605__$1);

(statearr_12667[(12)] = inst_12606__$1);

return statearr_12667;
})();
var statearr_12668_12700 = state_12653__$1;
(statearr_12668_12700[(2)] = null);

(statearr_12668_12700[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12654 === (22))){
var state_12653__$1 = state_12653;
var statearr_12669_12701 = state_12653__$1;
(statearr_12669_12701[(2)] = null);

(statearr_12669_12701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12654 === (6))){
var inst_12594 = (state_12653[(13)]);
var inst_12603 = f.call(null,inst_12594);
var inst_12604 = cljs.core.seq.call(null,inst_12603);
var inst_12605 = inst_12604;
var inst_12606 = null;
var inst_12607 = (0);
var inst_12608 = (0);
var state_12653__$1 = (function (){var statearr_12670 = state_12653;
(statearr_12670[(8)] = inst_12608);

(statearr_12670[(9)] = inst_12607);

(statearr_12670[(11)] = inst_12605);

(statearr_12670[(12)] = inst_12606);

return statearr_12670;
})();
var statearr_12671_12702 = state_12653__$1;
(statearr_12671_12702[(2)] = null);

(statearr_12671_12702[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12654 === (17))){
var inst_12619 = (state_12653[(7)]);
var inst_12623 = cljs.core.chunk_first.call(null,inst_12619);
var inst_12624 = cljs.core.chunk_rest.call(null,inst_12619);
var inst_12625 = cljs.core.count.call(null,inst_12623);
var inst_12605 = inst_12624;
var inst_12606 = inst_12623;
var inst_12607 = inst_12625;
var inst_12608 = (0);
var state_12653__$1 = (function (){var statearr_12672 = state_12653;
(statearr_12672[(8)] = inst_12608);

(statearr_12672[(9)] = inst_12607);

(statearr_12672[(11)] = inst_12605);

(statearr_12672[(12)] = inst_12606);

return statearr_12672;
})();
var statearr_12673_12703 = state_12653__$1;
(statearr_12673_12703[(2)] = null);

(statearr_12673_12703[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12654 === (3))){
var inst_12651 = (state_12653[(2)]);
var state_12653__$1 = state_12653;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12653__$1,inst_12651);
} else {
if((state_val_12654 === (12))){
var inst_12639 = (state_12653[(2)]);
var state_12653__$1 = state_12653;
var statearr_12674_12704 = state_12653__$1;
(statearr_12674_12704[(2)] = inst_12639);

(statearr_12674_12704[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12654 === (2))){
var state_12653__$1 = state_12653;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12653__$1,(4),in$);
} else {
if((state_val_12654 === (23))){
var inst_12647 = (state_12653[(2)]);
var state_12653__$1 = state_12653;
var statearr_12675_12705 = state_12653__$1;
(statearr_12675_12705[(2)] = inst_12647);

(statearr_12675_12705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12654 === (19))){
var inst_12634 = (state_12653[(2)]);
var state_12653__$1 = state_12653;
var statearr_12676_12706 = state_12653__$1;
(statearr_12676_12706[(2)] = inst_12634);

(statearr_12676_12706[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12654 === (11))){
var inst_12619 = (state_12653[(7)]);
var inst_12605 = (state_12653[(11)]);
var inst_12619__$1 = cljs.core.seq.call(null,inst_12605);
var state_12653__$1 = (function (){var statearr_12677 = state_12653;
(statearr_12677[(7)] = inst_12619__$1);

return statearr_12677;
})();
if(inst_12619__$1){
var statearr_12678_12707 = state_12653__$1;
(statearr_12678_12707[(1)] = (14));

} else {
var statearr_12679_12708 = state_12653__$1;
(statearr_12679_12708[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12654 === (9))){
var inst_12641 = (state_12653[(2)]);
var inst_12642 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_12653__$1 = (function (){var statearr_12680 = state_12653;
(statearr_12680[(15)] = inst_12641);

return statearr_12680;
})();
if(cljs.core.truth_(inst_12642)){
var statearr_12681_12709 = state_12653__$1;
(statearr_12681_12709[(1)] = (21));

} else {
var statearr_12682_12710 = state_12653__$1;
(statearr_12682_12710[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12654 === (5))){
var inst_12597 = cljs.core.async.close_BANG_.call(null,out);
var state_12653__$1 = state_12653;
var statearr_12683_12711 = state_12653__$1;
(statearr_12683_12711[(2)] = inst_12597);

(statearr_12683_12711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12654 === (14))){
var inst_12619 = (state_12653[(7)]);
var inst_12621 = cljs.core.chunked_seq_QMARK_.call(null,inst_12619);
var state_12653__$1 = state_12653;
if(inst_12621){
var statearr_12684_12712 = state_12653__$1;
(statearr_12684_12712[(1)] = (17));

} else {
var statearr_12685_12713 = state_12653__$1;
(statearr_12685_12713[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12654 === (16))){
var inst_12637 = (state_12653[(2)]);
var state_12653__$1 = state_12653;
var statearr_12686_12714 = state_12653__$1;
(statearr_12686_12714[(2)] = inst_12637);

(statearr_12686_12714[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12654 === (10))){
var inst_12608 = (state_12653[(8)]);
var inst_12606 = (state_12653[(12)]);
var inst_12613 = cljs.core._nth.call(null,inst_12606,inst_12608);
var state_12653__$1 = state_12653;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12653__$1,(13),out,inst_12613);
} else {
if((state_val_12654 === (18))){
var inst_12619 = (state_12653[(7)]);
var inst_12628 = cljs.core.first.call(null,inst_12619);
var state_12653__$1 = state_12653;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12653__$1,(20),out,inst_12628);
} else {
if((state_val_12654 === (8))){
var inst_12608 = (state_12653[(8)]);
var inst_12607 = (state_12653[(9)]);
var inst_12610 = (inst_12608 < inst_12607);
var inst_12611 = inst_12610;
var state_12653__$1 = state_12653;
if(cljs.core.truth_(inst_12611)){
var statearr_12687_12715 = state_12653__$1;
(statearr_12687_12715[(1)] = (10));

} else {
var statearr_12688_12716 = state_12653__$1;
(statearr_12688_12716[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11051__auto__))
;
return ((function (switch__10963__auto__,c__11051__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__10964__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10964__auto____0 = (function (){
var statearr_12689 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12689[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10964__auto__);

(statearr_12689[(1)] = (1));

return statearr_12689;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10964__auto____1 = (function (state_12653){
while(true){
var ret_value__10965__auto__ = (function (){try{while(true){
var result__10966__auto__ = switch__10963__auto__.call(null,state_12653);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10966__auto__;
}
break;
}
}catch (e12690){if((e12690 instanceof Object)){
var ex__10967__auto__ = e12690;
var statearr_12691_12717 = state_12653;
(statearr_12691_12717[(5)] = ex__10967__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12653);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12690;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12718 = state_12653;
state_12653 = G__12718;
continue;
} else {
return ret_value__10965__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10964__auto__ = function(state_12653){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10964__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10964__auto____1.call(this,state_12653);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__10964__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10964__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10964__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10964__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10964__auto__;
})()
;})(switch__10963__auto__,c__11051__auto__))
})();
var state__11053__auto__ = (function (){var statearr_12692 = f__11052__auto__.call(null);
(statearr_12692[(6)] = c__11051__auto__);

return statearr_12692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11053__auto__);
});})(c__11051__auto__))
);

return c__11051__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__12720 = arguments.length;
switch (G__12720) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__12723 = arguments.length;
switch (G__12723) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__12726 = arguments.length;
switch (G__12726) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11051__auto___12773 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11051__auto___12773,out){
return (function (){
var f__11052__auto__ = (function (){var switch__10963__auto__ = ((function (c__11051__auto___12773,out){
return (function (state_12750){
var state_val_12751 = (state_12750[(1)]);
if((state_val_12751 === (7))){
var inst_12745 = (state_12750[(2)]);
var state_12750__$1 = state_12750;
var statearr_12752_12774 = state_12750__$1;
(statearr_12752_12774[(2)] = inst_12745);

(statearr_12752_12774[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12751 === (1))){
var inst_12727 = null;
var state_12750__$1 = (function (){var statearr_12753 = state_12750;
(statearr_12753[(7)] = inst_12727);

return statearr_12753;
})();
var statearr_12754_12775 = state_12750__$1;
(statearr_12754_12775[(2)] = null);

(statearr_12754_12775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12751 === (4))){
var inst_12730 = (state_12750[(8)]);
var inst_12730__$1 = (state_12750[(2)]);
var inst_12731 = (inst_12730__$1 == null);
var inst_12732 = cljs.core.not.call(null,inst_12731);
var state_12750__$1 = (function (){var statearr_12755 = state_12750;
(statearr_12755[(8)] = inst_12730__$1);

return statearr_12755;
})();
if(inst_12732){
var statearr_12756_12776 = state_12750__$1;
(statearr_12756_12776[(1)] = (5));

} else {
var statearr_12757_12777 = state_12750__$1;
(statearr_12757_12777[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12751 === (6))){
var state_12750__$1 = state_12750;
var statearr_12758_12778 = state_12750__$1;
(statearr_12758_12778[(2)] = null);

(statearr_12758_12778[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12751 === (3))){
var inst_12747 = (state_12750[(2)]);
var inst_12748 = cljs.core.async.close_BANG_.call(null,out);
var state_12750__$1 = (function (){var statearr_12759 = state_12750;
(statearr_12759[(9)] = inst_12747);

return statearr_12759;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12750__$1,inst_12748);
} else {
if((state_val_12751 === (2))){
var state_12750__$1 = state_12750;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12750__$1,(4),ch);
} else {
if((state_val_12751 === (11))){
var inst_12730 = (state_12750[(8)]);
var inst_12739 = (state_12750[(2)]);
var inst_12727 = inst_12730;
var state_12750__$1 = (function (){var statearr_12760 = state_12750;
(statearr_12760[(10)] = inst_12739);

(statearr_12760[(7)] = inst_12727);

return statearr_12760;
})();
var statearr_12761_12779 = state_12750__$1;
(statearr_12761_12779[(2)] = null);

(statearr_12761_12779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12751 === (9))){
var inst_12730 = (state_12750[(8)]);
var state_12750__$1 = state_12750;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12750__$1,(11),out,inst_12730);
} else {
if((state_val_12751 === (5))){
var inst_12730 = (state_12750[(8)]);
var inst_12727 = (state_12750[(7)]);
var inst_12734 = cljs.core._EQ_.call(null,inst_12730,inst_12727);
var state_12750__$1 = state_12750;
if(inst_12734){
var statearr_12763_12780 = state_12750__$1;
(statearr_12763_12780[(1)] = (8));

} else {
var statearr_12764_12781 = state_12750__$1;
(statearr_12764_12781[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12751 === (10))){
var inst_12742 = (state_12750[(2)]);
var state_12750__$1 = state_12750;
var statearr_12765_12782 = state_12750__$1;
(statearr_12765_12782[(2)] = inst_12742);

(statearr_12765_12782[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12751 === (8))){
var inst_12727 = (state_12750[(7)]);
var tmp12762 = inst_12727;
var inst_12727__$1 = tmp12762;
var state_12750__$1 = (function (){var statearr_12766 = state_12750;
(statearr_12766[(7)] = inst_12727__$1);

return statearr_12766;
})();
var statearr_12767_12783 = state_12750__$1;
(statearr_12767_12783[(2)] = null);

(statearr_12767_12783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11051__auto___12773,out))
;
return ((function (switch__10963__auto__,c__11051__auto___12773,out){
return (function() {
var cljs$core$async$state_machine__10964__auto__ = null;
var cljs$core$async$state_machine__10964__auto____0 = (function (){
var statearr_12768 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12768[(0)] = cljs$core$async$state_machine__10964__auto__);

(statearr_12768[(1)] = (1));

return statearr_12768;
});
var cljs$core$async$state_machine__10964__auto____1 = (function (state_12750){
while(true){
var ret_value__10965__auto__ = (function (){try{while(true){
var result__10966__auto__ = switch__10963__auto__.call(null,state_12750);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10966__auto__;
}
break;
}
}catch (e12769){if((e12769 instanceof Object)){
var ex__10967__auto__ = e12769;
var statearr_12770_12784 = state_12750;
(statearr_12770_12784[(5)] = ex__10967__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12750);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12769;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12785 = state_12750;
state_12750 = G__12785;
continue;
} else {
return ret_value__10965__auto__;
}
break;
}
});
cljs$core$async$state_machine__10964__auto__ = function(state_12750){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10964__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10964__auto____1.call(this,state_12750);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__10964__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10964__auto____0;
cljs$core$async$state_machine__10964__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10964__auto____1;
return cljs$core$async$state_machine__10964__auto__;
})()
;})(switch__10963__auto__,c__11051__auto___12773,out))
})();
var state__11053__auto__ = (function (){var statearr_12771 = f__11052__auto__.call(null);
(statearr_12771[(6)] = c__11051__auto___12773);

return statearr_12771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11053__auto__);
});})(c__11051__auto___12773,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__12787 = arguments.length;
switch (G__12787) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11051__auto___12853 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11051__auto___12853,out){
return (function (){
var f__11052__auto__ = (function (){var switch__10963__auto__ = ((function (c__11051__auto___12853,out){
return (function (state_12825){
var state_val_12826 = (state_12825[(1)]);
if((state_val_12826 === (7))){
var inst_12821 = (state_12825[(2)]);
var state_12825__$1 = state_12825;
var statearr_12827_12854 = state_12825__$1;
(statearr_12827_12854[(2)] = inst_12821);

(statearr_12827_12854[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12826 === (1))){
var inst_12788 = (new Array(n));
var inst_12789 = inst_12788;
var inst_12790 = (0);
var state_12825__$1 = (function (){var statearr_12828 = state_12825;
(statearr_12828[(7)] = inst_12789);

(statearr_12828[(8)] = inst_12790);

return statearr_12828;
})();
var statearr_12829_12855 = state_12825__$1;
(statearr_12829_12855[(2)] = null);

(statearr_12829_12855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12826 === (4))){
var inst_12793 = (state_12825[(9)]);
var inst_12793__$1 = (state_12825[(2)]);
var inst_12794 = (inst_12793__$1 == null);
var inst_12795 = cljs.core.not.call(null,inst_12794);
var state_12825__$1 = (function (){var statearr_12830 = state_12825;
(statearr_12830[(9)] = inst_12793__$1);

return statearr_12830;
})();
if(inst_12795){
var statearr_12831_12856 = state_12825__$1;
(statearr_12831_12856[(1)] = (5));

} else {
var statearr_12832_12857 = state_12825__$1;
(statearr_12832_12857[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12826 === (15))){
var inst_12815 = (state_12825[(2)]);
var state_12825__$1 = state_12825;
var statearr_12833_12858 = state_12825__$1;
(statearr_12833_12858[(2)] = inst_12815);

(statearr_12833_12858[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12826 === (13))){
var state_12825__$1 = state_12825;
var statearr_12834_12859 = state_12825__$1;
(statearr_12834_12859[(2)] = null);

(statearr_12834_12859[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12826 === (6))){
var inst_12790 = (state_12825[(8)]);
var inst_12811 = (inst_12790 > (0));
var state_12825__$1 = state_12825;
if(cljs.core.truth_(inst_12811)){
var statearr_12835_12860 = state_12825__$1;
(statearr_12835_12860[(1)] = (12));

} else {
var statearr_12836_12861 = state_12825__$1;
(statearr_12836_12861[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12826 === (3))){
var inst_12823 = (state_12825[(2)]);
var state_12825__$1 = state_12825;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12825__$1,inst_12823);
} else {
if((state_val_12826 === (12))){
var inst_12789 = (state_12825[(7)]);
var inst_12813 = cljs.core.vec.call(null,inst_12789);
var state_12825__$1 = state_12825;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12825__$1,(15),out,inst_12813);
} else {
if((state_val_12826 === (2))){
var state_12825__$1 = state_12825;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12825__$1,(4),ch);
} else {
if((state_val_12826 === (11))){
var inst_12805 = (state_12825[(2)]);
var inst_12806 = (new Array(n));
var inst_12789 = inst_12806;
var inst_12790 = (0);
var state_12825__$1 = (function (){var statearr_12837 = state_12825;
(statearr_12837[(10)] = inst_12805);

(statearr_12837[(7)] = inst_12789);

(statearr_12837[(8)] = inst_12790);

return statearr_12837;
})();
var statearr_12838_12862 = state_12825__$1;
(statearr_12838_12862[(2)] = null);

(statearr_12838_12862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12826 === (9))){
var inst_12789 = (state_12825[(7)]);
var inst_12803 = cljs.core.vec.call(null,inst_12789);
var state_12825__$1 = state_12825;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12825__$1,(11),out,inst_12803);
} else {
if((state_val_12826 === (5))){
var inst_12793 = (state_12825[(9)]);
var inst_12789 = (state_12825[(7)]);
var inst_12790 = (state_12825[(8)]);
var inst_12798 = (state_12825[(11)]);
var inst_12797 = (inst_12789[inst_12790] = inst_12793);
var inst_12798__$1 = (inst_12790 + (1));
var inst_12799 = (inst_12798__$1 < n);
var state_12825__$1 = (function (){var statearr_12839 = state_12825;
(statearr_12839[(12)] = inst_12797);

(statearr_12839[(11)] = inst_12798__$1);

return statearr_12839;
})();
if(cljs.core.truth_(inst_12799)){
var statearr_12840_12863 = state_12825__$1;
(statearr_12840_12863[(1)] = (8));

} else {
var statearr_12841_12864 = state_12825__$1;
(statearr_12841_12864[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12826 === (14))){
var inst_12818 = (state_12825[(2)]);
var inst_12819 = cljs.core.async.close_BANG_.call(null,out);
var state_12825__$1 = (function (){var statearr_12843 = state_12825;
(statearr_12843[(13)] = inst_12818);

return statearr_12843;
})();
var statearr_12844_12865 = state_12825__$1;
(statearr_12844_12865[(2)] = inst_12819);

(statearr_12844_12865[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12826 === (10))){
var inst_12809 = (state_12825[(2)]);
var state_12825__$1 = state_12825;
var statearr_12845_12866 = state_12825__$1;
(statearr_12845_12866[(2)] = inst_12809);

(statearr_12845_12866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12826 === (8))){
var inst_12789 = (state_12825[(7)]);
var inst_12798 = (state_12825[(11)]);
var tmp12842 = inst_12789;
var inst_12789__$1 = tmp12842;
var inst_12790 = inst_12798;
var state_12825__$1 = (function (){var statearr_12846 = state_12825;
(statearr_12846[(7)] = inst_12789__$1);

(statearr_12846[(8)] = inst_12790);

return statearr_12846;
})();
var statearr_12847_12867 = state_12825__$1;
(statearr_12847_12867[(2)] = null);

(statearr_12847_12867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11051__auto___12853,out))
;
return ((function (switch__10963__auto__,c__11051__auto___12853,out){
return (function() {
var cljs$core$async$state_machine__10964__auto__ = null;
var cljs$core$async$state_machine__10964__auto____0 = (function (){
var statearr_12848 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12848[(0)] = cljs$core$async$state_machine__10964__auto__);

(statearr_12848[(1)] = (1));

return statearr_12848;
});
var cljs$core$async$state_machine__10964__auto____1 = (function (state_12825){
while(true){
var ret_value__10965__auto__ = (function (){try{while(true){
var result__10966__auto__ = switch__10963__auto__.call(null,state_12825);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10966__auto__;
}
break;
}
}catch (e12849){if((e12849 instanceof Object)){
var ex__10967__auto__ = e12849;
var statearr_12850_12868 = state_12825;
(statearr_12850_12868[(5)] = ex__10967__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12825);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12849;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12869 = state_12825;
state_12825 = G__12869;
continue;
} else {
return ret_value__10965__auto__;
}
break;
}
});
cljs$core$async$state_machine__10964__auto__ = function(state_12825){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10964__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10964__auto____1.call(this,state_12825);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__10964__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10964__auto____0;
cljs$core$async$state_machine__10964__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10964__auto____1;
return cljs$core$async$state_machine__10964__auto__;
})()
;})(switch__10963__auto__,c__11051__auto___12853,out))
})();
var state__11053__auto__ = (function (){var statearr_12851 = f__11052__auto__.call(null);
(statearr_12851[(6)] = c__11051__auto___12853);

return statearr_12851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11053__auto__);
});})(c__11051__auto___12853,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__12871 = arguments.length;
switch (G__12871) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11051__auto___12941 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11051__auto___12941,out){
return (function (){
var f__11052__auto__ = (function (){var switch__10963__auto__ = ((function (c__11051__auto___12941,out){
return (function (state_12913){
var state_val_12914 = (state_12913[(1)]);
if((state_val_12914 === (7))){
var inst_12909 = (state_12913[(2)]);
var state_12913__$1 = state_12913;
var statearr_12915_12942 = state_12913__$1;
(statearr_12915_12942[(2)] = inst_12909);

(statearr_12915_12942[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12914 === (1))){
var inst_12872 = [];
var inst_12873 = inst_12872;
var inst_12874 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_12913__$1 = (function (){var statearr_12916 = state_12913;
(statearr_12916[(7)] = inst_12874);

(statearr_12916[(8)] = inst_12873);

return statearr_12916;
})();
var statearr_12917_12943 = state_12913__$1;
(statearr_12917_12943[(2)] = null);

(statearr_12917_12943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12914 === (4))){
var inst_12877 = (state_12913[(9)]);
var inst_12877__$1 = (state_12913[(2)]);
var inst_12878 = (inst_12877__$1 == null);
var inst_12879 = cljs.core.not.call(null,inst_12878);
var state_12913__$1 = (function (){var statearr_12918 = state_12913;
(statearr_12918[(9)] = inst_12877__$1);

return statearr_12918;
})();
if(inst_12879){
var statearr_12919_12944 = state_12913__$1;
(statearr_12919_12944[(1)] = (5));

} else {
var statearr_12920_12945 = state_12913__$1;
(statearr_12920_12945[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12914 === (15))){
var inst_12903 = (state_12913[(2)]);
var state_12913__$1 = state_12913;
var statearr_12921_12946 = state_12913__$1;
(statearr_12921_12946[(2)] = inst_12903);

(statearr_12921_12946[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12914 === (13))){
var state_12913__$1 = state_12913;
var statearr_12922_12947 = state_12913__$1;
(statearr_12922_12947[(2)] = null);

(statearr_12922_12947[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12914 === (6))){
var inst_12873 = (state_12913[(8)]);
var inst_12898 = inst_12873.length;
var inst_12899 = (inst_12898 > (0));
var state_12913__$1 = state_12913;
if(cljs.core.truth_(inst_12899)){
var statearr_12923_12948 = state_12913__$1;
(statearr_12923_12948[(1)] = (12));

} else {
var statearr_12924_12949 = state_12913__$1;
(statearr_12924_12949[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12914 === (3))){
var inst_12911 = (state_12913[(2)]);
var state_12913__$1 = state_12913;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12913__$1,inst_12911);
} else {
if((state_val_12914 === (12))){
var inst_12873 = (state_12913[(8)]);
var inst_12901 = cljs.core.vec.call(null,inst_12873);
var state_12913__$1 = state_12913;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12913__$1,(15),out,inst_12901);
} else {
if((state_val_12914 === (2))){
var state_12913__$1 = state_12913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12913__$1,(4),ch);
} else {
if((state_val_12914 === (11))){
var inst_12877 = (state_12913[(9)]);
var inst_12881 = (state_12913[(10)]);
var inst_12891 = (state_12913[(2)]);
var inst_12892 = [];
var inst_12893 = inst_12892.push(inst_12877);
var inst_12873 = inst_12892;
var inst_12874 = inst_12881;
var state_12913__$1 = (function (){var statearr_12925 = state_12913;
(statearr_12925[(11)] = inst_12891);

(statearr_12925[(12)] = inst_12893);

(statearr_12925[(7)] = inst_12874);

(statearr_12925[(8)] = inst_12873);

return statearr_12925;
})();
var statearr_12926_12950 = state_12913__$1;
(statearr_12926_12950[(2)] = null);

(statearr_12926_12950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12914 === (9))){
var inst_12873 = (state_12913[(8)]);
var inst_12889 = cljs.core.vec.call(null,inst_12873);
var state_12913__$1 = state_12913;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12913__$1,(11),out,inst_12889);
} else {
if((state_val_12914 === (5))){
var inst_12877 = (state_12913[(9)]);
var inst_12874 = (state_12913[(7)]);
var inst_12881 = (state_12913[(10)]);
var inst_12881__$1 = f.call(null,inst_12877);
var inst_12882 = cljs.core._EQ_.call(null,inst_12881__$1,inst_12874);
var inst_12883 = cljs.core.keyword_identical_QMARK_.call(null,inst_12874,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_12884 = (inst_12882) || (inst_12883);
var state_12913__$1 = (function (){var statearr_12927 = state_12913;
(statearr_12927[(10)] = inst_12881__$1);

return statearr_12927;
})();
if(cljs.core.truth_(inst_12884)){
var statearr_12928_12951 = state_12913__$1;
(statearr_12928_12951[(1)] = (8));

} else {
var statearr_12929_12952 = state_12913__$1;
(statearr_12929_12952[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12914 === (14))){
var inst_12906 = (state_12913[(2)]);
var inst_12907 = cljs.core.async.close_BANG_.call(null,out);
var state_12913__$1 = (function (){var statearr_12931 = state_12913;
(statearr_12931[(13)] = inst_12906);

return statearr_12931;
})();
var statearr_12932_12953 = state_12913__$1;
(statearr_12932_12953[(2)] = inst_12907);

(statearr_12932_12953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12914 === (10))){
var inst_12896 = (state_12913[(2)]);
var state_12913__$1 = state_12913;
var statearr_12933_12954 = state_12913__$1;
(statearr_12933_12954[(2)] = inst_12896);

(statearr_12933_12954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12914 === (8))){
var inst_12877 = (state_12913[(9)]);
var inst_12873 = (state_12913[(8)]);
var inst_12881 = (state_12913[(10)]);
var inst_12886 = inst_12873.push(inst_12877);
var tmp12930 = inst_12873;
var inst_12873__$1 = tmp12930;
var inst_12874 = inst_12881;
var state_12913__$1 = (function (){var statearr_12934 = state_12913;
(statearr_12934[(7)] = inst_12874);

(statearr_12934[(8)] = inst_12873__$1);

(statearr_12934[(14)] = inst_12886);

return statearr_12934;
})();
var statearr_12935_12955 = state_12913__$1;
(statearr_12935_12955[(2)] = null);

(statearr_12935_12955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11051__auto___12941,out))
;
return ((function (switch__10963__auto__,c__11051__auto___12941,out){
return (function() {
var cljs$core$async$state_machine__10964__auto__ = null;
var cljs$core$async$state_machine__10964__auto____0 = (function (){
var statearr_12936 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12936[(0)] = cljs$core$async$state_machine__10964__auto__);

(statearr_12936[(1)] = (1));

return statearr_12936;
});
var cljs$core$async$state_machine__10964__auto____1 = (function (state_12913){
while(true){
var ret_value__10965__auto__ = (function (){try{while(true){
var result__10966__auto__ = switch__10963__auto__.call(null,state_12913);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10966__auto__;
}
break;
}
}catch (e12937){if((e12937 instanceof Object)){
var ex__10967__auto__ = e12937;
var statearr_12938_12956 = state_12913;
(statearr_12938_12956[(5)] = ex__10967__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12913);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12937;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12957 = state_12913;
state_12913 = G__12957;
continue;
} else {
return ret_value__10965__auto__;
}
break;
}
});
cljs$core$async$state_machine__10964__auto__ = function(state_12913){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10964__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10964__auto____1.call(this,state_12913);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__10964__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10964__auto____0;
cljs$core$async$state_machine__10964__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10964__auto____1;
return cljs$core$async$state_machine__10964__auto__;
})()
;})(switch__10963__auto__,c__11051__auto___12941,out))
})();
var state__11053__auto__ = (function (){var statearr_12939 = f__11052__auto__.call(null);
(statearr_12939[(6)] = c__11051__auto___12941);

return statearr_12939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11053__auto__);
});})(c__11051__auto___12941,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
