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
var G__12681 = arguments.length;
switch (G__12681) {
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
if(typeof cljs.core.async.t_cljs$core$async12682 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12682 = (function (f,blockable,meta12683){
this.f = f;
this.blockable = blockable;
this.meta12683 = meta12683;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async12682.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12684,meta12683__$1){
var self__ = this;
var _12684__$1 = this;
return (new cljs.core.async.t_cljs$core$async12682(self__.f,self__.blockable,meta12683__$1));
});

cljs.core.async.t_cljs$core$async12682.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12684){
var self__ = this;
var _12684__$1 = this;
return self__.meta12683;
});

cljs.core.async.t_cljs$core$async12682.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12682.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async12682.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async12682.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async12682.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta12683","meta12683",797368031,null)], null);
});

cljs.core.async.t_cljs$core$async12682.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12682.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12682";

cljs.core.async.t_cljs$core$async12682.cljs$lang$ctorPrWriter = (function (this__8677__auto__,writer__8678__auto__,opt__8679__auto__){
return cljs.core._write.call(null,writer__8678__auto__,"cljs.core.async/t_cljs$core$async12682");
});

cljs.core.async.__GT_t_cljs$core$async12682 = (function cljs$core$async$__GT_t_cljs$core$async12682(f__$1,blockable__$1,meta12683){
return (new cljs.core.async.t_cljs$core$async12682(f__$1,blockable__$1,meta12683));
});

}

return (new cljs.core.async.t_cljs$core$async12682(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__12688 = arguments.length;
switch (G__12688) {
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
var G__12691 = arguments.length;
switch (G__12691) {
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
var G__12694 = arguments.length;
switch (G__12694) {
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
var val_12696 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_12696);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_12696,ret){
return (function (){
return fn1.call(null,val_12696);
});})(val_12696,ret))
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
var G__12698 = arguments.length;
switch (G__12698) {
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
var n__8999__auto___12700 = n;
var x_12701 = (0);
while(true){
if((x_12701 < n__8999__auto___12700)){
(a[x_12701] = (0));

var G__12702 = (x_12701 + (1));
x_12701 = G__12702;
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

var G__12703 = (i + (1));
i = G__12703;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async12704 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12704 = (function (flag,meta12705){
this.flag = flag;
this.meta12705 = meta12705;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async12704.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_12706,meta12705__$1){
var self__ = this;
var _12706__$1 = this;
return (new cljs.core.async.t_cljs$core$async12704(self__.flag,meta12705__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async12704.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_12706){
var self__ = this;
var _12706__$1 = this;
return self__.meta12705;
});})(flag))
;

cljs.core.async.t_cljs$core$async12704.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12704.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async12704.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async12704.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async12704.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta12705","meta12705",-200384920,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async12704.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12704.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12704";

cljs.core.async.t_cljs$core$async12704.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__8677__auto__,writer__8678__auto__,opt__8679__auto__){
return cljs.core._write.call(null,writer__8678__auto__,"cljs.core.async/t_cljs$core$async12704");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async12704 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async12704(flag__$1,meta12705){
return (new cljs.core.async.t_cljs$core$async12704(flag__$1,meta12705));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async12704(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async12707 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12707 = (function (flag,cb,meta12708){
this.flag = flag;
this.cb = cb;
this.meta12708 = meta12708;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async12707.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12709,meta12708__$1){
var self__ = this;
var _12709__$1 = this;
return (new cljs.core.async.t_cljs$core$async12707(self__.flag,self__.cb,meta12708__$1));
});

cljs.core.async.t_cljs$core$async12707.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12709){
var self__ = this;
var _12709__$1 = this;
return self__.meta12708;
});

cljs.core.async.t_cljs$core$async12707.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12707.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async12707.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async12707.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async12707.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta12708","meta12708",1301037844,null)], null);
});

cljs.core.async.t_cljs$core$async12707.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12707.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12707";

cljs.core.async.t_cljs$core$async12707.cljs$lang$ctorPrWriter = (function (this__8677__auto__,writer__8678__auto__,opt__8679__auto__){
return cljs.core._write.call(null,writer__8678__auto__,"cljs.core.async/t_cljs$core$async12707");
});

cljs.core.async.__GT_t_cljs$core$async12707 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async12707(flag__$1,cb__$1,meta12708){
return (new cljs.core.async.t_cljs$core$async12707(flag__$1,cb__$1,meta12708));
});

}

return (new cljs.core.async.t_cljs$core$async12707(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__12710_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12710_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12711_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12711_SHARP_,port], null));
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
var G__12712 = (i + (1));
i = G__12712;
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
var len__9223__auto___12718 = arguments.length;
var i__9224__auto___12719 = (0);
while(true){
if((i__9224__auto___12719 < len__9223__auto___12718)){
args__9230__auto__.push((arguments[i__9224__auto___12719]));

var G__12720 = (i__9224__auto___12719 + (1));
i__9224__auto___12719 = G__12720;
continue;
} else {
}
break;
}

var argseq__9231__auto__ = ((((1) < args__9230__auto__.length))?(new cljs.core.IndexedSeq(args__9230__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9231__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__12715){
var map__12716 = p__12715;
var map__12716__$1 = ((((!((map__12716 == null)))?((((map__12716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12716.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12716):map__12716);
var opts = map__12716__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq12713){
var G__12714 = cljs.core.first.call(null,seq12713);
var seq12713__$1 = cljs.core.next.call(null,seq12713);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12714,seq12713__$1);
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
var G__12722 = arguments.length;
switch (G__12722) {
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
var c__10985__auto___12768 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10985__auto___12768){
return (function (){
var f__10986__auto__ = (function (){var switch__10964__auto__ = ((function (c__10985__auto___12768){
return (function (state_12746){
var state_val_12747 = (state_12746[(1)]);
if((state_val_12747 === (7))){
var inst_12742 = (state_12746[(2)]);
var state_12746__$1 = state_12746;
var statearr_12748_12769 = state_12746__$1;
(statearr_12748_12769[(2)] = inst_12742);

(statearr_12748_12769[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12747 === (1))){
var state_12746__$1 = state_12746;
var statearr_12749_12770 = state_12746__$1;
(statearr_12749_12770[(2)] = null);

(statearr_12749_12770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12747 === (4))){
var inst_12725 = (state_12746[(7)]);
var inst_12725__$1 = (state_12746[(2)]);
var inst_12726 = (inst_12725__$1 == null);
var state_12746__$1 = (function (){var statearr_12750 = state_12746;
(statearr_12750[(7)] = inst_12725__$1);

return statearr_12750;
})();
if(cljs.core.truth_(inst_12726)){
var statearr_12751_12771 = state_12746__$1;
(statearr_12751_12771[(1)] = (5));

} else {
var statearr_12752_12772 = state_12746__$1;
(statearr_12752_12772[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12747 === (13))){
var state_12746__$1 = state_12746;
var statearr_12753_12773 = state_12746__$1;
(statearr_12753_12773[(2)] = null);

(statearr_12753_12773[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12747 === (6))){
var inst_12725 = (state_12746[(7)]);
var state_12746__$1 = state_12746;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12746__$1,(11),to,inst_12725);
} else {
if((state_val_12747 === (3))){
var inst_12744 = (state_12746[(2)]);
var state_12746__$1 = state_12746;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12746__$1,inst_12744);
} else {
if((state_val_12747 === (12))){
var state_12746__$1 = state_12746;
var statearr_12754_12774 = state_12746__$1;
(statearr_12754_12774[(2)] = null);

(statearr_12754_12774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12747 === (2))){
var state_12746__$1 = state_12746;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12746__$1,(4),from);
} else {
if((state_val_12747 === (11))){
var inst_12735 = (state_12746[(2)]);
var state_12746__$1 = state_12746;
if(cljs.core.truth_(inst_12735)){
var statearr_12755_12775 = state_12746__$1;
(statearr_12755_12775[(1)] = (12));

} else {
var statearr_12756_12776 = state_12746__$1;
(statearr_12756_12776[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12747 === (9))){
var state_12746__$1 = state_12746;
var statearr_12757_12777 = state_12746__$1;
(statearr_12757_12777[(2)] = null);

(statearr_12757_12777[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12747 === (5))){
var state_12746__$1 = state_12746;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12758_12778 = state_12746__$1;
(statearr_12758_12778[(1)] = (8));

} else {
var statearr_12759_12779 = state_12746__$1;
(statearr_12759_12779[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12747 === (14))){
var inst_12740 = (state_12746[(2)]);
var state_12746__$1 = state_12746;
var statearr_12760_12780 = state_12746__$1;
(statearr_12760_12780[(2)] = inst_12740);

(statearr_12760_12780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12747 === (10))){
var inst_12732 = (state_12746[(2)]);
var state_12746__$1 = state_12746;
var statearr_12761_12781 = state_12746__$1;
(statearr_12761_12781[(2)] = inst_12732);

(statearr_12761_12781[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12747 === (8))){
var inst_12729 = cljs.core.async.close_BANG_.call(null,to);
var state_12746__$1 = state_12746;
var statearr_12762_12782 = state_12746__$1;
(statearr_12762_12782[(2)] = inst_12729);

(statearr_12762_12782[(1)] = (10));


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
});})(c__10985__auto___12768))
;
return ((function (switch__10964__auto__,c__10985__auto___12768){
return (function() {
var cljs$core$async$state_machine__10965__auto__ = null;
var cljs$core$async$state_machine__10965__auto____0 = (function (){
var statearr_12763 = [null,null,null,null,null,null,null,null];
(statearr_12763[(0)] = cljs$core$async$state_machine__10965__auto__);

(statearr_12763[(1)] = (1));

return statearr_12763;
});
var cljs$core$async$state_machine__10965__auto____1 = (function (state_12746){
while(true){
var ret_value__10966__auto__ = (function (){try{while(true){
var result__10967__auto__ = switch__10964__auto__.call(null,state_12746);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10967__auto__;
}
break;
}
}catch (e12764){if((e12764 instanceof Object)){
var ex__10968__auto__ = e12764;
var statearr_12765_12783 = state_12746;
(statearr_12765_12783[(5)] = ex__10968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12746);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12764;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12784 = state_12746;
state_12746 = G__12784;
continue;
} else {
return ret_value__10966__auto__;
}
break;
}
});
cljs$core$async$state_machine__10965__auto__ = function(state_12746){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10965__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10965__auto____1.call(this,state_12746);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10965__auto____0;
cljs$core$async$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10965__auto____1;
return cljs$core$async$state_machine__10965__auto__;
})()
;})(switch__10964__auto__,c__10985__auto___12768))
})();
var state__10987__auto__ = (function (){var statearr_12766 = f__10986__auto__.call(null);
(statearr_12766[(6)] = c__10985__auto___12768);

return statearr_12766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10987__auto__);
});})(c__10985__auto___12768))
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
return (function (p__12785){
var vec__12786 = p__12785;
var v = cljs.core.nth.call(null,vec__12786,(0),null);
var p = cljs.core.nth.call(null,vec__12786,(1),null);
var job = vec__12786;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__10985__auto___12957 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10985__auto___12957,res,vec__12786,v,p,job,jobs,results){
return (function (){
var f__10986__auto__ = (function (){var switch__10964__auto__ = ((function (c__10985__auto___12957,res,vec__12786,v,p,job,jobs,results){
return (function (state_12793){
var state_val_12794 = (state_12793[(1)]);
if((state_val_12794 === (1))){
var state_12793__$1 = state_12793;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12793__$1,(2),res,v);
} else {
if((state_val_12794 === (2))){
var inst_12790 = (state_12793[(2)]);
var inst_12791 = cljs.core.async.close_BANG_.call(null,res);
var state_12793__$1 = (function (){var statearr_12795 = state_12793;
(statearr_12795[(7)] = inst_12790);

return statearr_12795;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12793__$1,inst_12791);
} else {
return null;
}
}
});})(c__10985__auto___12957,res,vec__12786,v,p,job,jobs,results))
;
return ((function (switch__10964__auto__,c__10985__auto___12957,res,vec__12786,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10965__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10965__auto____0 = (function (){
var statearr_12796 = [null,null,null,null,null,null,null,null];
(statearr_12796[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10965__auto__);

(statearr_12796[(1)] = (1));

return statearr_12796;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10965__auto____1 = (function (state_12793){
while(true){
var ret_value__10966__auto__ = (function (){try{while(true){
var result__10967__auto__ = switch__10964__auto__.call(null,state_12793);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10967__auto__;
}
break;
}
}catch (e12797){if((e12797 instanceof Object)){
var ex__10968__auto__ = e12797;
var statearr_12798_12958 = state_12793;
(statearr_12798_12958[(5)] = ex__10968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12793);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12797;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12959 = state_12793;
state_12793 = G__12959;
continue;
} else {
return ret_value__10966__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10965__auto__ = function(state_12793){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10965__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10965__auto____1.call(this,state_12793);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10965__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10965__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10965__auto__;
})()
;})(switch__10964__auto__,c__10985__auto___12957,res,vec__12786,v,p,job,jobs,results))
})();
var state__10987__auto__ = (function (){var statearr_12799 = f__10986__auto__.call(null);
(statearr_12799[(6)] = c__10985__auto___12957);

return statearr_12799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10987__auto__);
});})(c__10985__auto___12957,res,vec__12786,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__12800){
var vec__12801 = p__12800;
var v = cljs.core.nth.call(null,vec__12801,(0),null);
var p = cljs.core.nth.call(null,vec__12801,(1),null);
var job = vec__12801;
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
var n__8999__auto___12960 = n;
var __12961 = (0);
while(true){
if((__12961 < n__8999__auto___12960)){
var G__12804_12962 = type;
var G__12804_12963__$1 = (((G__12804_12962 instanceof cljs.core.Keyword))?G__12804_12962.fqn:null);
switch (G__12804_12963__$1) {
case "compute":
var c__10985__auto___12965 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__12961,c__10985__auto___12965,G__12804_12962,G__12804_12963__$1,n__8999__auto___12960,jobs,results,process,async){
return (function (){
var f__10986__auto__ = (function (){var switch__10964__auto__ = ((function (__12961,c__10985__auto___12965,G__12804_12962,G__12804_12963__$1,n__8999__auto___12960,jobs,results,process,async){
return (function (state_12817){
var state_val_12818 = (state_12817[(1)]);
if((state_val_12818 === (1))){
var state_12817__$1 = state_12817;
var statearr_12819_12966 = state_12817__$1;
(statearr_12819_12966[(2)] = null);

(statearr_12819_12966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12818 === (2))){
var state_12817__$1 = state_12817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12817__$1,(4),jobs);
} else {
if((state_val_12818 === (3))){
var inst_12815 = (state_12817[(2)]);
var state_12817__$1 = state_12817;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12817__$1,inst_12815);
} else {
if((state_val_12818 === (4))){
var inst_12807 = (state_12817[(2)]);
var inst_12808 = process.call(null,inst_12807);
var state_12817__$1 = state_12817;
if(cljs.core.truth_(inst_12808)){
var statearr_12820_12967 = state_12817__$1;
(statearr_12820_12967[(1)] = (5));

} else {
var statearr_12821_12968 = state_12817__$1;
(statearr_12821_12968[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12818 === (5))){
var state_12817__$1 = state_12817;
var statearr_12822_12969 = state_12817__$1;
(statearr_12822_12969[(2)] = null);

(statearr_12822_12969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12818 === (6))){
var state_12817__$1 = state_12817;
var statearr_12823_12970 = state_12817__$1;
(statearr_12823_12970[(2)] = null);

(statearr_12823_12970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12818 === (7))){
var inst_12813 = (state_12817[(2)]);
var state_12817__$1 = state_12817;
var statearr_12824_12971 = state_12817__$1;
(statearr_12824_12971[(2)] = inst_12813);

(statearr_12824_12971[(1)] = (3));


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
});})(__12961,c__10985__auto___12965,G__12804_12962,G__12804_12963__$1,n__8999__auto___12960,jobs,results,process,async))
;
return ((function (__12961,switch__10964__auto__,c__10985__auto___12965,G__12804_12962,G__12804_12963__$1,n__8999__auto___12960,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10965__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10965__auto____0 = (function (){
var statearr_12825 = [null,null,null,null,null,null,null];
(statearr_12825[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10965__auto__);

(statearr_12825[(1)] = (1));

return statearr_12825;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10965__auto____1 = (function (state_12817){
while(true){
var ret_value__10966__auto__ = (function (){try{while(true){
var result__10967__auto__ = switch__10964__auto__.call(null,state_12817);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10967__auto__;
}
break;
}
}catch (e12826){if((e12826 instanceof Object)){
var ex__10968__auto__ = e12826;
var statearr_12827_12972 = state_12817;
(statearr_12827_12972[(5)] = ex__10968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12817);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12826;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12973 = state_12817;
state_12817 = G__12973;
continue;
} else {
return ret_value__10966__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10965__auto__ = function(state_12817){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10965__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10965__auto____1.call(this,state_12817);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10965__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10965__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10965__auto__;
})()
;})(__12961,switch__10964__auto__,c__10985__auto___12965,G__12804_12962,G__12804_12963__$1,n__8999__auto___12960,jobs,results,process,async))
})();
var state__10987__auto__ = (function (){var statearr_12828 = f__10986__auto__.call(null);
(statearr_12828[(6)] = c__10985__auto___12965);

return statearr_12828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10987__auto__);
});})(__12961,c__10985__auto___12965,G__12804_12962,G__12804_12963__$1,n__8999__auto___12960,jobs,results,process,async))
);


break;
case "async":
var c__10985__auto___12974 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__12961,c__10985__auto___12974,G__12804_12962,G__12804_12963__$1,n__8999__auto___12960,jobs,results,process,async){
return (function (){
var f__10986__auto__ = (function (){var switch__10964__auto__ = ((function (__12961,c__10985__auto___12974,G__12804_12962,G__12804_12963__$1,n__8999__auto___12960,jobs,results,process,async){
return (function (state_12841){
var state_val_12842 = (state_12841[(1)]);
if((state_val_12842 === (1))){
var state_12841__$1 = state_12841;
var statearr_12843_12975 = state_12841__$1;
(statearr_12843_12975[(2)] = null);

(statearr_12843_12975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12842 === (2))){
var state_12841__$1 = state_12841;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12841__$1,(4),jobs);
} else {
if((state_val_12842 === (3))){
var inst_12839 = (state_12841[(2)]);
var state_12841__$1 = state_12841;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12841__$1,inst_12839);
} else {
if((state_val_12842 === (4))){
var inst_12831 = (state_12841[(2)]);
var inst_12832 = async.call(null,inst_12831);
var state_12841__$1 = state_12841;
if(cljs.core.truth_(inst_12832)){
var statearr_12844_12976 = state_12841__$1;
(statearr_12844_12976[(1)] = (5));

} else {
var statearr_12845_12977 = state_12841__$1;
(statearr_12845_12977[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12842 === (5))){
var state_12841__$1 = state_12841;
var statearr_12846_12978 = state_12841__$1;
(statearr_12846_12978[(2)] = null);

(statearr_12846_12978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12842 === (6))){
var state_12841__$1 = state_12841;
var statearr_12847_12979 = state_12841__$1;
(statearr_12847_12979[(2)] = null);

(statearr_12847_12979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12842 === (7))){
var inst_12837 = (state_12841[(2)]);
var state_12841__$1 = state_12841;
var statearr_12848_12980 = state_12841__$1;
(statearr_12848_12980[(2)] = inst_12837);

(statearr_12848_12980[(1)] = (3));


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
});})(__12961,c__10985__auto___12974,G__12804_12962,G__12804_12963__$1,n__8999__auto___12960,jobs,results,process,async))
;
return ((function (__12961,switch__10964__auto__,c__10985__auto___12974,G__12804_12962,G__12804_12963__$1,n__8999__auto___12960,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10965__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10965__auto____0 = (function (){
var statearr_12849 = [null,null,null,null,null,null,null];
(statearr_12849[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10965__auto__);

(statearr_12849[(1)] = (1));

return statearr_12849;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10965__auto____1 = (function (state_12841){
while(true){
var ret_value__10966__auto__ = (function (){try{while(true){
var result__10967__auto__ = switch__10964__auto__.call(null,state_12841);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10967__auto__;
}
break;
}
}catch (e12850){if((e12850 instanceof Object)){
var ex__10968__auto__ = e12850;
var statearr_12851_12981 = state_12841;
(statearr_12851_12981[(5)] = ex__10968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12841);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12850;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12982 = state_12841;
state_12841 = G__12982;
continue;
} else {
return ret_value__10966__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10965__auto__ = function(state_12841){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10965__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10965__auto____1.call(this,state_12841);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10965__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10965__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10965__auto__;
})()
;})(__12961,switch__10964__auto__,c__10985__auto___12974,G__12804_12962,G__12804_12963__$1,n__8999__auto___12960,jobs,results,process,async))
})();
var state__10987__auto__ = (function (){var statearr_12852 = f__10986__auto__.call(null);
(statearr_12852[(6)] = c__10985__auto___12974);

return statearr_12852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10987__auto__);
});})(__12961,c__10985__auto___12974,G__12804_12962,G__12804_12963__$1,n__8999__auto___12960,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12804_12963__$1)].join('')));

}

var G__12983 = (__12961 + (1));
__12961 = G__12983;
continue;
} else {
}
break;
}

var c__10985__auto___12984 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10985__auto___12984,jobs,results,process,async){
return (function (){
var f__10986__auto__ = (function (){var switch__10964__auto__ = ((function (c__10985__auto___12984,jobs,results,process,async){
return (function (state_12874){
var state_val_12875 = (state_12874[(1)]);
if((state_val_12875 === (1))){
var state_12874__$1 = state_12874;
var statearr_12876_12985 = state_12874__$1;
(statearr_12876_12985[(2)] = null);

(statearr_12876_12985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12875 === (2))){
var state_12874__$1 = state_12874;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12874__$1,(4),from);
} else {
if((state_val_12875 === (3))){
var inst_12872 = (state_12874[(2)]);
var state_12874__$1 = state_12874;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12874__$1,inst_12872);
} else {
if((state_val_12875 === (4))){
var inst_12855 = (state_12874[(7)]);
var inst_12855__$1 = (state_12874[(2)]);
var inst_12856 = (inst_12855__$1 == null);
var state_12874__$1 = (function (){var statearr_12877 = state_12874;
(statearr_12877[(7)] = inst_12855__$1);

return statearr_12877;
})();
if(cljs.core.truth_(inst_12856)){
var statearr_12878_12986 = state_12874__$1;
(statearr_12878_12986[(1)] = (5));

} else {
var statearr_12879_12987 = state_12874__$1;
(statearr_12879_12987[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12875 === (5))){
var inst_12858 = cljs.core.async.close_BANG_.call(null,jobs);
var state_12874__$1 = state_12874;
var statearr_12880_12988 = state_12874__$1;
(statearr_12880_12988[(2)] = inst_12858);

(statearr_12880_12988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12875 === (6))){
var inst_12855 = (state_12874[(7)]);
var inst_12860 = (state_12874[(8)]);
var inst_12860__$1 = cljs.core.async.chan.call(null,(1));
var inst_12861 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12862 = [inst_12855,inst_12860__$1];
var inst_12863 = (new cljs.core.PersistentVector(null,2,(5),inst_12861,inst_12862,null));
var state_12874__$1 = (function (){var statearr_12881 = state_12874;
(statearr_12881[(8)] = inst_12860__$1);

return statearr_12881;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12874__$1,(8),jobs,inst_12863);
} else {
if((state_val_12875 === (7))){
var inst_12870 = (state_12874[(2)]);
var state_12874__$1 = state_12874;
var statearr_12882_12989 = state_12874__$1;
(statearr_12882_12989[(2)] = inst_12870);

(statearr_12882_12989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12875 === (8))){
var inst_12860 = (state_12874[(8)]);
var inst_12865 = (state_12874[(2)]);
var state_12874__$1 = (function (){var statearr_12883 = state_12874;
(statearr_12883[(9)] = inst_12865);

return statearr_12883;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12874__$1,(9),results,inst_12860);
} else {
if((state_val_12875 === (9))){
var inst_12867 = (state_12874[(2)]);
var state_12874__$1 = (function (){var statearr_12884 = state_12874;
(statearr_12884[(10)] = inst_12867);

return statearr_12884;
})();
var statearr_12885_12990 = state_12874__$1;
(statearr_12885_12990[(2)] = null);

(statearr_12885_12990[(1)] = (2));


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
});})(c__10985__auto___12984,jobs,results,process,async))
;
return ((function (switch__10964__auto__,c__10985__auto___12984,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10965__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10965__auto____0 = (function (){
var statearr_12886 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12886[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10965__auto__);

(statearr_12886[(1)] = (1));

return statearr_12886;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10965__auto____1 = (function (state_12874){
while(true){
var ret_value__10966__auto__ = (function (){try{while(true){
var result__10967__auto__ = switch__10964__auto__.call(null,state_12874);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10967__auto__;
}
break;
}
}catch (e12887){if((e12887 instanceof Object)){
var ex__10968__auto__ = e12887;
var statearr_12888_12991 = state_12874;
(statearr_12888_12991[(5)] = ex__10968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12874);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12887;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12992 = state_12874;
state_12874 = G__12992;
continue;
} else {
return ret_value__10966__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10965__auto__ = function(state_12874){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10965__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10965__auto____1.call(this,state_12874);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10965__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10965__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10965__auto__;
})()
;})(switch__10964__auto__,c__10985__auto___12984,jobs,results,process,async))
})();
var state__10987__auto__ = (function (){var statearr_12889 = f__10986__auto__.call(null);
(statearr_12889[(6)] = c__10985__auto___12984);

return statearr_12889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10987__auto__);
});})(c__10985__auto___12984,jobs,results,process,async))
);


var c__10985__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10985__auto__,jobs,results,process,async){
return (function (){
var f__10986__auto__ = (function (){var switch__10964__auto__ = ((function (c__10985__auto__,jobs,results,process,async){
return (function (state_12927){
var state_val_12928 = (state_12927[(1)]);
if((state_val_12928 === (7))){
var inst_12923 = (state_12927[(2)]);
var state_12927__$1 = state_12927;
var statearr_12929_12993 = state_12927__$1;
(statearr_12929_12993[(2)] = inst_12923);

(statearr_12929_12993[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12928 === (20))){
var state_12927__$1 = state_12927;
var statearr_12930_12994 = state_12927__$1;
(statearr_12930_12994[(2)] = null);

(statearr_12930_12994[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12928 === (1))){
var state_12927__$1 = state_12927;
var statearr_12931_12995 = state_12927__$1;
(statearr_12931_12995[(2)] = null);

(statearr_12931_12995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12928 === (4))){
var inst_12892 = (state_12927[(7)]);
var inst_12892__$1 = (state_12927[(2)]);
var inst_12893 = (inst_12892__$1 == null);
var state_12927__$1 = (function (){var statearr_12932 = state_12927;
(statearr_12932[(7)] = inst_12892__$1);

return statearr_12932;
})();
if(cljs.core.truth_(inst_12893)){
var statearr_12933_12996 = state_12927__$1;
(statearr_12933_12996[(1)] = (5));

} else {
var statearr_12934_12997 = state_12927__$1;
(statearr_12934_12997[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12928 === (15))){
var inst_12905 = (state_12927[(8)]);
var state_12927__$1 = state_12927;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12927__$1,(18),to,inst_12905);
} else {
if((state_val_12928 === (21))){
var inst_12918 = (state_12927[(2)]);
var state_12927__$1 = state_12927;
var statearr_12935_12998 = state_12927__$1;
(statearr_12935_12998[(2)] = inst_12918);

(statearr_12935_12998[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12928 === (13))){
var inst_12920 = (state_12927[(2)]);
var state_12927__$1 = (function (){var statearr_12936 = state_12927;
(statearr_12936[(9)] = inst_12920);

return statearr_12936;
})();
var statearr_12937_12999 = state_12927__$1;
(statearr_12937_12999[(2)] = null);

(statearr_12937_12999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12928 === (6))){
var inst_12892 = (state_12927[(7)]);
var state_12927__$1 = state_12927;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12927__$1,(11),inst_12892);
} else {
if((state_val_12928 === (17))){
var inst_12913 = (state_12927[(2)]);
var state_12927__$1 = state_12927;
if(cljs.core.truth_(inst_12913)){
var statearr_12938_13000 = state_12927__$1;
(statearr_12938_13000[(1)] = (19));

} else {
var statearr_12939_13001 = state_12927__$1;
(statearr_12939_13001[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12928 === (3))){
var inst_12925 = (state_12927[(2)]);
var state_12927__$1 = state_12927;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12927__$1,inst_12925);
} else {
if((state_val_12928 === (12))){
var inst_12902 = (state_12927[(10)]);
var state_12927__$1 = state_12927;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12927__$1,(14),inst_12902);
} else {
if((state_val_12928 === (2))){
var state_12927__$1 = state_12927;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12927__$1,(4),results);
} else {
if((state_val_12928 === (19))){
var state_12927__$1 = state_12927;
var statearr_12940_13002 = state_12927__$1;
(statearr_12940_13002[(2)] = null);

(statearr_12940_13002[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12928 === (11))){
var inst_12902 = (state_12927[(2)]);
var state_12927__$1 = (function (){var statearr_12941 = state_12927;
(statearr_12941[(10)] = inst_12902);

return statearr_12941;
})();
var statearr_12942_13003 = state_12927__$1;
(statearr_12942_13003[(2)] = null);

(statearr_12942_13003[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12928 === (9))){
var state_12927__$1 = state_12927;
var statearr_12943_13004 = state_12927__$1;
(statearr_12943_13004[(2)] = null);

(statearr_12943_13004[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12928 === (5))){
var state_12927__$1 = state_12927;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12944_13005 = state_12927__$1;
(statearr_12944_13005[(1)] = (8));

} else {
var statearr_12945_13006 = state_12927__$1;
(statearr_12945_13006[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12928 === (14))){
var inst_12907 = (state_12927[(11)]);
var inst_12905 = (state_12927[(8)]);
var inst_12905__$1 = (state_12927[(2)]);
var inst_12906 = (inst_12905__$1 == null);
var inst_12907__$1 = cljs.core.not.call(null,inst_12906);
var state_12927__$1 = (function (){var statearr_12946 = state_12927;
(statearr_12946[(11)] = inst_12907__$1);

(statearr_12946[(8)] = inst_12905__$1);

return statearr_12946;
})();
if(inst_12907__$1){
var statearr_12947_13007 = state_12927__$1;
(statearr_12947_13007[(1)] = (15));

} else {
var statearr_12948_13008 = state_12927__$1;
(statearr_12948_13008[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12928 === (16))){
var inst_12907 = (state_12927[(11)]);
var state_12927__$1 = state_12927;
var statearr_12949_13009 = state_12927__$1;
(statearr_12949_13009[(2)] = inst_12907);

(statearr_12949_13009[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12928 === (10))){
var inst_12899 = (state_12927[(2)]);
var state_12927__$1 = state_12927;
var statearr_12950_13010 = state_12927__$1;
(statearr_12950_13010[(2)] = inst_12899);

(statearr_12950_13010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12928 === (18))){
var inst_12910 = (state_12927[(2)]);
var state_12927__$1 = state_12927;
var statearr_12951_13011 = state_12927__$1;
(statearr_12951_13011[(2)] = inst_12910);

(statearr_12951_13011[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12928 === (8))){
var inst_12896 = cljs.core.async.close_BANG_.call(null,to);
var state_12927__$1 = state_12927;
var statearr_12952_13012 = state_12927__$1;
(statearr_12952_13012[(2)] = inst_12896);

(statearr_12952_13012[(1)] = (10));


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
});})(c__10985__auto__,jobs,results,process,async))
;
return ((function (switch__10964__auto__,c__10985__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10965__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10965__auto____0 = (function (){
var statearr_12953 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12953[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10965__auto__);

(statearr_12953[(1)] = (1));

return statearr_12953;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10965__auto____1 = (function (state_12927){
while(true){
var ret_value__10966__auto__ = (function (){try{while(true){
var result__10967__auto__ = switch__10964__auto__.call(null,state_12927);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10967__auto__;
}
break;
}
}catch (e12954){if((e12954 instanceof Object)){
var ex__10968__auto__ = e12954;
var statearr_12955_13013 = state_12927;
(statearr_12955_13013[(5)] = ex__10968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12927);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12954;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13014 = state_12927;
state_12927 = G__13014;
continue;
} else {
return ret_value__10966__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10965__auto__ = function(state_12927){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10965__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10965__auto____1.call(this,state_12927);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10965__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10965__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10965__auto__;
})()
;})(switch__10964__auto__,c__10985__auto__,jobs,results,process,async))
})();
var state__10987__auto__ = (function (){var statearr_12956 = f__10986__auto__.call(null);
(statearr_12956[(6)] = c__10985__auto__);

return statearr_12956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10987__auto__);
});})(c__10985__auto__,jobs,results,process,async))
);

return c__10985__auto__;
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
var G__13016 = arguments.length;
switch (G__13016) {
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
var G__13019 = arguments.length;
switch (G__13019) {
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
var G__13022 = arguments.length;
switch (G__13022) {
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
var c__10985__auto___13071 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10985__auto___13071,tc,fc){
return (function (){
var f__10986__auto__ = (function (){var switch__10964__auto__ = ((function (c__10985__auto___13071,tc,fc){
return (function (state_13048){
var state_val_13049 = (state_13048[(1)]);
if((state_val_13049 === (7))){
var inst_13044 = (state_13048[(2)]);
var state_13048__$1 = state_13048;
var statearr_13050_13072 = state_13048__$1;
(statearr_13050_13072[(2)] = inst_13044);

(statearr_13050_13072[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13049 === (1))){
var state_13048__$1 = state_13048;
var statearr_13051_13073 = state_13048__$1;
(statearr_13051_13073[(2)] = null);

(statearr_13051_13073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13049 === (4))){
var inst_13025 = (state_13048[(7)]);
var inst_13025__$1 = (state_13048[(2)]);
var inst_13026 = (inst_13025__$1 == null);
var state_13048__$1 = (function (){var statearr_13052 = state_13048;
(statearr_13052[(7)] = inst_13025__$1);

return statearr_13052;
})();
if(cljs.core.truth_(inst_13026)){
var statearr_13053_13074 = state_13048__$1;
(statearr_13053_13074[(1)] = (5));

} else {
var statearr_13054_13075 = state_13048__$1;
(statearr_13054_13075[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13049 === (13))){
var state_13048__$1 = state_13048;
var statearr_13055_13076 = state_13048__$1;
(statearr_13055_13076[(2)] = null);

(statearr_13055_13076[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13049 === (6))){
var inst_13025 = (state_13048[(7)]);
var inst_13031 = p.call(null,inst_13025);
var state_13048__$1 = state_13048;
if(cljs.core.truth_(inst_13031)){
var statearr_13056_13077 = state_13048__$1;
(statearr_13056_13077[(1)] = (9));

} else {
var statearr_13057_13078 = state_13048__$1;
(statearr_13057_13078[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13049 === (3))){
var inst_13046 = (state_13048[(2)]);
var state_13048__$1 = state_13048;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13048__$1,inst_13046);
} else {
if((state_val_13049 === (12))){
var state_13048__$1 = state_13048;
var statearr_13058_13079 = state_13048__$1;
(statearr_13058_13079[(2)] = null);

(statearr_13058_13079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13049 === (2))){
var state_13048__$1 = state_13048;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13048__$1,(4),ch);
} else {
if((state_val_13049 === (11))){
var inst_13025 = (state_13048[(7)]);
var inst_13035 = (state_13048[(2)]);
var state_13048__$1 = state_13048;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13048__$1,(8),inst_13035,inst_13025);
} else {
if((state_val_13049 === (9))){
var state_13048__$1 = state_13048;
var statearr_13059_13080 = state_13048__$1;
(statearr_13059_13080[(2)] = tc);

(statearr_13059_13080[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13049 === (5))){
var inst_13028 = cljs.core.async.close_BANG_.call(null,tc);
var inst_13029 = cljs.core.async.close_BANG_.call(null,fc);
var state_13048__$1 = (function (){var statearr_13060 = state_13048;
(statearr_13060[(8)] = inst_13028);

return statearr_13060;
})();
var statearr_13061_13081 = state_13048__$1;
(statearr_13061_13081[(2)] = inst_13029);

(statearr_13061_13081[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13049 === (14))){
var inst_13042 = (state_13048[(2)]);
var state_13048__$1 = state_13048;
var statearr_13062_13082 = state_13048__$1;
(statearr_13062_13082[(2)] = inst_13042);

(statearr_13062_13082[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13049 === (10))){
var state_13048__$1 = state_13048;
var statearr_13063_13083 = state_13048__$1;
(statearr_13063_13083[(2)] = fc);

(statearr_13063_13083[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13049 === (8))){
var inst_13037 = (state_13048[(2)]);
var state_13048__$1 = state_13048;
if(cljs.core.truth_(inst_13037)){
var statearr_13064_13084 = state_13048__$1;
(statearr_13064_13084[(1)] = (12));

} else {
var statearr_13065_13085 = state_13048__$1;
(statearr_13065_13085[(1)] = (13));

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
});})(c__10985__auto___13071,tc,fc))
;
return ((function (switch__10964__auto__,c__10985__auto___13071,tc,fc){
return (function() {
var cljs$core$async$state_machine__10965__auto__ = null;
var cljs$core$async$state_machine__10965__auto____0 = (function (){
var statearr_13066 = [null,null,null,null,null,null,null,null,null];
(statearr_13066[(0)] = cljs$core$async$state_machine__10965__auto__);

(statearr_13066[(1)] = (1));

return statearr_13066;
});
var cljs$core$async$state_machine__10965__auto____1 = (function (state_13048){
while(true){
var ret_value__10966__auto__ = (function (){try{while(true){
var result__10967__auto__ = switch__10964__auto__.call(null,state_13048);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10967__auto__;
}
break;
}
}catch (e13067){if((e13067 instanceof Object)){
var ex__10968__auto__ = e13067;
var statearr_13068_13086 = state_13048;
(statearr_13068_13086[(5)] = ex__10968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13048);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13067;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13087 = state_13048;
state_13048 = G__13087;
continue;
} else {
return ret_value__10966__auto__;
}
break;
}
});
cljs$core$async$state_machine__10965__auto__ = function(state_13048){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10965__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10965__auto____1.call(this,state_13048);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10965__auto____0;
cljs$core$async$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10965__auto____1;
return cljs$core$async$state_machine__10965__auto__;
})()
;})(switch__10964__auto__,c__10985__auto___13071,tc,fc))
})();
var state__10987__auto__ = (function (){var statearr_13069 = f__10986__auto__.call(null);
(statearr_13069[(6)] = c__10985__auto___13071);

return statearr_13069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10987__auto__);
});})(c__10985__auto___13071,tc,fc))
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
var c__10985__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10985__auto__){
return (function (){
var f__10986__auto__ = (function (){var switch__10964__auto__ = ((function (c__10985__auto__){
return (function (state_13108){
var state_val_13109 = (state_13108[(1)]);
if((state_val_13109 === (7))){
var inst_13104 = (state_13108[(2)]);
var state_13108__$1 = state_13108;
var statearr_13110_13128 = state_13108__$1;
(statearr_13110_13128[(2)] = inst_13104);

(statearr_13110_13128[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13109 === (1))){
var inst_13088 = init;
var state_13108__$1 = (function (){var statearr_13111 = state_13108;
(statearr_13111[(7)] = inst_13088);

return statearr_13111;
})();
var statearr_13112_13129 = state_13108__$1;
(statearr_13112_13129[(2)] = null);

(statearr_13112_13129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13109 === (4))){
var inst_13091 = (state_13108[(8)]);
var inst_13091__$1 = (state_13108[(2)]);
var inst_13092 = (inst_13091__$1 == null);
var state_13108__$1 = (function (){var statearr_13113 = state_13108;
(statearr_13113[(8)] = inst_13091__$1);

return statearr_13113;
})();
if(cljs.core.truth_(inst_13092)){
var statearr_13114_13130 = state_13108__$1;
(statearr_13114_13130[(1)] = (5));

} else {
var statearr_13115_13131 = state_13108__$1;
(statearr_13115_13131[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13109 === (6))){
var inst_13095 = (state_13108[(9)]);
var inst_13091 = (state_13108[(8)]);
var inst_13088 = (state_13108[(7)]);
var inst_13095__$1 = f.call(null,inst_13088,inst_13091);
var inst_13096 = cljs.core.reduced_QMARK_.call(null,inst_13095__$1);
var state_13108__$1 = (function (){var statearr_13116 = state_13108;
(statearr_13116[(9)] = inst_13095__$1);

return statearr_13116;
})();
if(inst_13096){
var statearr_13117_13132 = state_13108__$1;
(statearr_13117_13132[(1)] = (8));

} else {
var statearr_13118_13133 = state_13108__$1;
(statearr_13118_13133[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13109 === (3))){
var inst_13106 = (state_13108[(2)]);
var state_13108__$1 = state_13108;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13108__$1,inst_13106);
} else {
if((state_val_13109 === (2))){
var state_13108__$1 = state_13108;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13108__$1,(4),ch);
} else {
if((state_val_13109 === (9))){
var inst_13095 = (state_13108[(9)]);
var inst_13088 = inst_13095;
var state_13108__$1 = (function (){var statearr_13119 = state_13108;
(statearr_13119[(7)] = inst_13088);

return statearr_13119;
})();
var statearr_13120_13134 = state_13108__$1;
(statearr_13120_13134[(2)] = null);

(statearr_13120_13134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13109 === (5))){
var inst_13088 = (state_13108[(7)]);
var state_13108__$1 = state_13108;
var statearr_13121_13135 = state_13108__$1;
(statearr_13121_13135[(2)] = inst_13088);

(statearr_13121_13135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13109 === (10))){
var inst_13102 = (state_13108[(2)]);
var state_13108__$1 = state_13108;
var statearr_13122_13136 = state_13108__$1;
(statearr_13122_13136[(2)] = inst_13102);

(statearr_13122_13136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13109 === (8))){
var inst_13095 = (state_13108[(9)]);
var inst_13098 = cljs.core.deref.call(null,inst_13095);
var state_13108__$1 = state_13108;
var statearr_13123_13137 = state_13108__$1;
(statearr_13123_13137[(2)] = inst_13098);

(statearr_13123_13137[(1)] = (10));


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
});})(c__10985__auto__))
;
return ((function (switch__10964__auto__,c__10985__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__10965__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10965__auto____0 = (function (){
var statearr_13124 = [null,null,null,null,null,null,null,null,null,null];
(statearr_13124[(0)] = cljs$core$async$reduce_$_state_machine__10965__auto__);

(statearr_13124[(1)] = (1));

return statearr_13124;
});
var cljs$core$async$reduce_$_state_machine__10965__auto____1 = (function (state_13108){
while(true){
var ret_value__10966__auto__ = (function (){try{while(true){
var result__10967__auto__ = switch__10964__auto__.call(null,state_13108);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10967__auto__;
}
break;
}
}catch (e13125){if((e13125 instanceof Object)){
var ex__10968__auto__ = e13125;
var statearr_13126_13138 = state_13108;
(statearr_13126_13138[(5)] = ex__10968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13108);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13125;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13139 = state_13108;
state_13108 = G__13139;
continue;
} else {
return ret_value__10966__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10965__auto__ = function(state_13108){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10965__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10965__auto____1.call(this,state_13108);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10965__auto____0;
cljs$core$async$reduce_$_state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10965__auto____1;
return cljs$core$async$reduce_$_state_machine__10965__auto__;
})()
;})(switch__10964__auto__,c__10985__auto__))
})();
var state__10987__auto__ = (function (){var statearr_13127 = f__10986__auto__.call(null);
(statearr_13127[(6)] = c__10985__auto__);

return statearr_13127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10987__auto__);
});})(c__10985__auto__))
);

return c__10985__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__10985__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10985__auto__,f__$1){
return (function (){
var f__10986__auto__ = (function (){var switch__10964__auto__ = ((function (c__10985__auto__,f__$1){
return (function (state_13145){
var state_val_13146 = (state_13145[(1)]);
if((state_val_13146 === (1))){
var inst_13140 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_13145__$1 = state_13145;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13145__$1,(2),inst_13140);
} else {
if((state_val_13146 === (2))){
var inst_13142 = (state_13145[(2)]);
var inst_13143 = f__$1.call(null,inst_13142);
var state_13145__$1 = state_13145;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13145__$1,inst_13143);
} else {
return null;
}
}
});})(c__10985__auto__,f__$1))
;
return ((function (switch__10964__auto__,c__10985__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__10965__auto__ = null;
var cljs$core$async$transduce_$_state_machine__10965__auto____0 = (function (){
var statearr_13147 = [null,null,null,null,null,null,null];
(statearr_13147[(0)] = cljs$core$async$transduce_$_state_machine__10965__auto__);

(statearr_13147[(1)] = (1));

return statearr_13147;
});
var cljs$core$async$transduce_$_state_machine__10965__auto____1 = (function (state_13145){
while(true){
var ret_value__10966__auto__ = (function (){try{while(true){
var result__10967__auto__ = switch__10964__auto__.call(null,state_13145);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10967__auto__;
}
break;
}
}catch (e13148){if((e13148 instanceof Object)){
var ex__10968__auto__ = e13148;
var statearr_13149_13151 = state_13145;
(statearr_13149_13151[(5)] = ex__10968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13145);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13148;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13152 = state_13145;
state_13145 = G__13152;
continue;
} else {
return ret_value__10966__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__10965__auto__ = function(state_13145){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__10965__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__10965__auto____1.call(this,state_13145);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__10965__auto____0;
cljs$core$async$transduce_$_state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__10965__auto____1;
return cljs$core$async$transduce_$_state_machine__10965__auto__;
})()
;})(switch__10964__auto__,c__10985__auto__,f__$1))
})();
var state__10987__auto__ = (function (){var statearr_13150 = f__10986__auto__.call(null);
(statearr_13150[(6)] = c__10985__auto__);

return statearr_13150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10987__auto__);
});})(c__10985__auto__,f__$1))
);

return c__10985__auto__;
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
var G__13154 = arguments.length;
switch (G__13154) {
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
var c__10985__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10985__auto__){
return (function (){
var f__10986__auto__ = (function (){var switch__10964__auto__ = ((function (c__10985__auto__){
return (function (state_13179){
var state_val_13180 = (state_13179[(1)]);
if((state_val_13180 === (7))){
var inst_13161 = (state_13179[(2)]);
var state_13179__$1 = state_13179;
var statearr_13181_13202 = state_13179__$1;
(statearr_13181_13202[(2)] = inst_13161);

(statearr_13181_13202[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13180 === (1))){
var inst_13155 = cljs.core.seq.call(null,coll);
var inst_13156 = inst_13155;
var state_13179__$1 = (function (){var statearr_13182 = state_13179;
(statearr_13182[(7)] = inst_13156);

return statearr_13182;
})();
var statearr_13183_13203 = state_13179__$1;
(statearr_13183_13203[(2)] = null);

(statearr_13183_13203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13180 === (4))){
var inst_13156 = (state_13179[(7)]);
var inst_13159 = cljs.core.first.call(null,inst_13156);
var state_13179__$1 = state_13179;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13179__$1,(7),ch,inst_13159);
} else {
if((state_val_13180 === (13))){
var inst_13173 = (state_13179[(2)]);
var state_13179__$1 = state_13179;
var statearr_13184_13204 = state_13179__$1;
(statearr_13184_13204[(2)] = inst_13173);

(statearr_13184_13204[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13180 === (6))){
var inst_13164 = (state_13179[(2)]);
var state_13179__$1 = state_13179;
if(cljs.core.truth_(inst_13164)){
var statearr_13185_13205 = state_13179__$1;
(statearr_13185_13205[(1)] = (8));

} else {
var statearr_13186_13206 = state_13179__$1;
(statearr_13186_13206[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13180 === (3))){
var inst_13177 = (state_13179[(2)]);
var state_13179__$1 = state_13179;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13179__$1,inst_13177);
} else {
if((state_val_13180 === (12))){
var state_13179__$1 = state_13179;
var statearr_13187_13207 = state_13179__$1;
(statearr_13187_13207[(2)] = null);

(statearr_13187_13207[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13180 === (2))){
var inst_13156 = (state_13179[(7)]);
var state_13179__$1 = state_13179;
if(cljs.core.truth_(inst_13156)){
var statearr_13188_13208 = state_13179__$1;
(statearr_13188_13208[(1)] = (4));

} else {
var statearr_13189_13209 = state_13179__$1;
(statearr_13189_13209[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13180 === (11))){
var inst_13170 = cljs.core.async.close_BANG_.call(null,ch);
var state_13179__$1 = state_13179;
var statearr_13190_13210 = state_13179__$1;
(statearr_13190_13210[(2)] = inst_13170);

(statearr_13190_13210[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13180 === (9))){
var state_13179__$1 = state_13179;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13191_13211 = state_13179__$1;
(statearr_13191_13211[(1)] = (11));

} else {
var statearr_13192_13212 = state_13179__$1;
(statearr_13192_13212[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13180 === (5))){
var inst_13156 = (state_13179[(7)]);
var state_13179__$1 = state_13179;
var statearr_13193_13213 = state_13179__$1;
(statearr_13193_13213[(2)] = inst_13156);

(statearr_13193_13213[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13180 === (10))){
var inst_13175 = (state_13179[(2)]);
var state_13179__$1 = state_13179;
var statearr_13194_13214 = state_13179__$1;
(statearr_13194_13214[(2)] = inst_13175);

(statearr_13194_13214[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13180 === (8))){
var inst_13156 = (state_13179[(7)]);
var inst_13166 = cljs.core.next.call(null,inst_13156);
var inst_13156__$1 = inst_13166;
var state_13179__$1 = (function (){var statearr_13195 = state_13179;
(statearr_13195[(7)] = inst_13156__$1);

return statearr_13195;
})();
var statearr_13196_13215 = state_13179__$1;
(statearr_13196_13215[(2)] = null);

(statearr_13196_13215[(1)] = (2));


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
});})(c__10985__auto__))
;
return ((function (switch__10964__auto__,c__10985__auto__){
return (function() {
var cljs$core$async$state_machine__10965__auto__ = null;
var cljs$core$async$state_machine__10965__auto____0 = (function (){
var statearr_13197 = [null,null,null,null,null,null,null,null];
(statearr_13197[(0)] = cljs$core$async$state_machine__10965__auto__);

(statearr_13197[(1)] = (1));

return statearr_13197;
});
var cljs$core$async$state_machine__10965__auto____1 = (function (state_13179){
while(true){
var ret_value__10966__auto__ = (function (){try{while(true){
var result__10967__auto__ = switch__10964__auto__.call(null,state_13179);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10967__auto__;
}
break;
}
}catch (e13198){if((e13198 instanceof Object)){
var ex__10968__auto__ = e13198;
var statearr_13199_13216 = state_13179;
(statearr_13199_13216[(5)] = ex__10968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13179);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13198;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13217 = state_13179;
state_13179 = G__13217;
continue;
} else {
return ret_value__10966__auto__;
}
break;
}
});
cljs$core$async$state_machine__10965__auto__ = function(state_13179){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10965__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10965__auto____1.call(this,state_13179);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10965__auto____0;
cljs$core$async$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10965__auto____1;
return cljs$core$async$state_machine__10965__auto__;
})()
;})(switch__10964__auto__,c__10985__auto__))
})();
var state__10987__auto__ = (function (){var statearr_13200 = f__10986__auto__.call(null);
(statearr_13200[(6)] = c__10985__auto__);

return statearr_13200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10987__auto__);
});})(c__10985__auto__))
);

return c__10985__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async13218 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13218 = (function (ch,cs,meta13219){
this.ch = ch;
this.cs = cs;
this.meta13219 = meta13219;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13218.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13220,meta13219__$1){
var self__ = this;
var _13220__$1 = this;
return (new cljs.core.async.t_cljs$core$async13218(self__.ch,self__.cs,meta13219__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async13218.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13220){
var self__ = this;
var _13220__$1 = this;
return self__.meta13219;
});})(cs))
;

cljs.core.async.t_cljs$core$async13218.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13218.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async13218.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13218.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13218.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13218.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13218.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta13219","meta13219",-2067219844,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async13218.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13218.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13218";

cljs.core.async.t_cljs$core$async13218.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8677__auto__,writer__8678__auto__,opt__8679__auto__){
return cljs.core._write.call(null,writer__8678__auto__,"cljs.core.async/t_cljs$core$async13218");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async13218 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async13218(ch__$1,cs__$1,meta13219){
return (new cljs.core.async.t_cljs$core$async13218(ch__$1,cs__$1,meta13219));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async13218(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__10985__auto___13440 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10985__auto___13440,cs,m,dchan,dctr,done){
return (function (){
var f__10986__auto__ = (function (){var switch__10964__auto__ = ((function (c__10985__auto___13440,cs,m,dchan,dctr,done){
return (function (state_13355){
var state_val_13356 = (state_13355[(1)]);
if((state_val_13356 === (7))){
var inst_13351 = (state_13355[(2)]);
var state_13355__$1 = state_13355;
var statearr_13357_13441 = state_13355__$1;
(statearr_13357_13441[(2)] = inst_13351);

(statearr_13357_13441[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13356 === (20))){
var inst_13254 = (state_13355[(7)]);
var inst_13266 = cljs.core.first.call(null,inst_13254);
var inst_13267 = cljs.core.nth.call(null,inst_13266,(0),null);
var inst_13268 = cljs.core.nth.call(null,inst_13266,(1),null);
var state_13355__$1 = (function (){var statearr_13358 = state_13355;
(statearr_13358[(8)] = inst_13267);

return statearr_13358;
})();
if(cljs.core.truth_(inst_13268)){
var statearr_13359_13442 = state_13355__$1;
(statearr_13359_13442[(1)] = (22));

} else {
var statearr_13360_13443 = state_13355__$1;
(statearr_13360_13443[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13356 === (27))){
var inst_13223 = (state_13355[(9)]);
var inst_13296 = (state_13355[(10)]);
var inst_13298 = (state_13355[(11)]);
var inst_13303 = (state_13355[(12)]);
var inst_13303__$1 = cljs.core._nth.call(null,inst_13296,inst_13298);
var inst_13304 = cljs.core.async.put_BANG_.call(null,inst_13303__$1,inst_13223,done);
var state_13355__$1 = (function (){var statearr_13361 = state_13355;
(statearr_13361[(12)] = inst_13303__$1);

return statearr_13361;
})();
if(cljs.core.truth_(inst_13304)){
var statearr_13362_13444 = state_13355__$1;
(statearr_13362_13444[(1)] = (30));

} else {
var statearr_13363_13445 = state_13355__$1;
(statearr_13363_13445[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13356 === (1))){
var state_13355__$1 = state_13355;
var statearr_13364_13446 = state_13355__$1;
(statearr_13364_13446[(2)] = null);

(statearr_13364_13446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13356 === (24))){
var inst_13254 = (state_13355[(7)]);
var inst_13273 = (state_13355[(2)]);
var inst_13274 = cljs.core.next.call(null,inst_13254);
var inst_13232 = inst_13274;
var inst_13233 = null;
var inst_13234 = (0);
var inst_13235 = (0);
var state_13355__$1 = (function (){var statearr_13365 = state_13355;
(statearr_13365[(13)] = inst_13233);

(statearr_13365[(14)] = inst_13234);

(statearr_13365[(15)] = inst_13232);

(statearr_13365[(16)] = inst_13273);

(statearr_13365[(17)] = inst_13235);

return statearr_13365;
})();
var statearr_13366_13447 = state_13355__$1;
(statearr_13366_13447[(2)] = null);

(statearr_13366_13447[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13356 === (39))){
var state_13355__$1 = state_13355;
var statearr_13370_13448 = state_13355__$1;
(statearr_13370_13448[(2)] = null);

(statearr_13370_13448[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13356 === (4))){
var inst_13223 = (state_13355[(9)]);
var inst_13223__$1 = (state_13355[(2)]);
var inst_13224 = (inst_13223__$1 == null);
var state_13355__$1 = (function (){var statearr_13371 = state_13355;
(statearr_13371[(9)] = inst_13223__$1);

return statearr_13371;
})();
if(cljs.core.truth_(inst_13224)){
var statearr_13372_13449 = state_13355__$1;
(statearr_13372_13449[(1)] = (5));

} else {
var statearr_13373_13450 = state_13355__$1;
(statearr_13373_13450[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13356 === (15))){
var inst_13233 = (state_13355[(13)]);
var inst_13234 = (state_13355[(14)]);
var inst_13232 = (state_13355[(15)]);
var inst_13235 = (state_13355[(17)]);
var inst_13250 = (state_13355[(2)]);
var inst_13251 = (inst_13235 + (1));
var tmp13367 = inst_13233;
var tmp13368 = inst_13234;
var tmp13369 = inst_13232;
var inst_13232__$1 = tmp13369;
var inst_13233__$1 = tmp13367;
var inst_13234__$1 = tmp13368;
var inst_13235__$1 = inst_13251;
var state_13355__$1 = (function (){var statearr_13374 = state_13355;
(statearr_13374[(13)] = inst_13233__$1);

(statearr_13374[(14)] = inst_13234__$1);

(statearr_13374[(15)] = inst_13232__$1);

(statearr_13374[(18)] = inst_13250);

(statearr_13374[(17)] = inst_13235__$1);

return statearr_13374;
})();
var statearr_13375_13451 = state_13355__$1;
(statearr_13375_13451[(2)] = null);

(statearr_13375_13451[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13356 === (21))){
var inst_13277 = (state_13355[(2)]);
var state_13355__$1 = state_13355;
var statearr_13379_13452 = state_13355__$1;
(statearr_13379_13452[(2)] = inst_13277);

(statearr_13379_13452[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13356 === (31))){
var inst_13303 = (state_13355[(12)]);
var inst_13307 = done.call(null,null);
var inst_13308 = cljs.core.async.untap_STAR_.call(null,m,inst_13303);
var state_13355__$1 = (function (){var statearr_13380 = state_13355;
(statearr_13380[(19)] = inst_13307);

return statearr_13380;
})();
var statearr_13381_13453 = state_13355__$1;
(statearr_13381_13453[(2)] = inst_13308);

(statearr_13381_13453[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13356 === (32))){
var inst_13296 = (state_13355[(10)]);
var inst_13297 = (state_13355[(20)]);
var inst_13298 = (state_13355[(11)]);
var inst_13295 = (state_13355[(21)]);
var inst_13310 = (state_13355[(2)]);
var inst_13311 = (inst_13298 + (1));
var tmp13376 = inst_13296;
var tmp13377 = inst_13297;
var tmp13378 = inst_13295;
var inst_13295__$1 = tmp13378;
var inst_13296__$1 = tmp13376;
var inst_13297__$1 = tmp13377;
var inst_13298__$1 = inst_13311;
var state_13355__$1 = (function (){var statearr_13382 = state_13355;
(statearr_13382[(10)] = inst_13296__$1);

(statearr_13382[(22)] = inst_13310);

(statearr_13382[(20)] = inst_13297__$1);

(statearr_13382[(11)] = inst_13298__$1);

(statearr_13382[(21)] = inst_13295__$1);

return statearr_13382;
})();
var statearr_13383_13454 = state_13355__$1;
(statearr_13383_13454[(2)] = null);

(statearr_13383_13454[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13356 === (40))){
var inst_13323 = (state_13355[(23)]);
var inst_13327 = done.call(null,null);
var inst_13328 = cljs.core.async.untap_STAR_.call(null,m,inst_13323);
var state_13355__$1 = (function (){var statearr_13384 = state_13355;
(statearr_13384[(24)] = inst_13327);

return statearr_13384;
})();
var statearr_13385_13455 = state_13355__$1;
(statearr_13385_13455[(2)] = inst_13328);

(statearr_13385_13455[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13356 === (33))){
var inst_13314 = (state_13355[(25)]);
var inst_13316 = cljs.core.chunked_seq_QMARK_.call(null,inst_13314);
var state_13355__$1 = state_13355;
if(inst_13316){
var statearr_13386_13456 = state_13355__$1;
(statearr_13386_13456[(1)] = (36));

} else {
var statearr_13387_13457 = state_13355__$1;
(statearr_13387_13457[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13356 === (13))){
var inst_13244 = (state_13355[(26)]);
var inst_13247 = cljs.core.async.close_BANG_.call(null,inst_13244);
var state_13355__$1 = state_13355;
var statearr_13388_13458 = state_13355__$1;
(statearr_13388_13458[(2)] = inst_13247);

(statearr_13388_13458[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13356 === (22))){
var inst_13267 = (state_13355[(8)]);
var inst_13270 = cljs.core.async.close_BANG_.call(null,inst_13267);
var state_13355__$1 = state_13355;
var statearr_13389_13459 = state_13355__$1;
(statearr_13389_13459[(2)] = inst_13270);

(statearr_13389_13459[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13356 === (36))){
var inst_13314 = (state_13355[(25)]);
var inst_13318 = cljs.core.chunk_first.call(null,inst_13314);
var inst_13319 = cljs.core.chunk_rest.call(null,inst_13314);
var inst_13320 = cljs.core.count.call(null,inst_13318);
var inst_13295 = inst_13319;
var inst_13296 = inst_13318;
var inst_13297 = inst_13320;
var inst_13298 = (0);
var state_13355__$1 = (function (){var statearr_13390 = state_13355;
(statearr_13390[(10)] = inst_13296);

(statearr_13390[(20)] = inst_13297);

(statearr_13390[(11)] = inst_13298);

(statearr_13390[(21)] = inst_13295);

return statearr_13390;
})();
var statearr_13391_13460 = state_13355__$1;
(statearr_13391_13460[(2)] = null);

(statearr_13391_13460[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13356 === (41))){
var inst_13314 = (state_13355[(25)]);
var inst_13330 = (state_13355[(2)]);
var inst_13331 = cljs.core.next.call(null,inst_13314);
var inst_13295 = inst_13331;
var inst_13296 = null;
var inst_13297 = (0);
var inst_13298 = (0);
var state_13355__$1 = (function (){var statearr_13392 = state_13355;
(statearr_13392[(10)] = inst_13296);

(statearr_13392[(20)] = inst_13297);

(statearr_13392[(11)] = inst_13298);

(statearr_13392[(21)] = inst_13295);

(statearr_13392[(27)] = inst_13330);

return statearr_13392;
})();
var statearr_13393_13461 = state_13355__$1;
(statearr_13393_13461[(2)] = null);

(statearr_13393_13461[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13356 === (43))){
var state_13355__$1 = state_13355;
var statearr_13394_13462 = state_13355__$1;
(statearr_13394_13462[(2)] = null);

(statearr_13394_13462[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13356 === (29))){
var inst_13339 = (state_13355[(2)]);
var state_13355__$1 = state_13355;
var statearr_13395_13463 = state_13355__$1;
(statearr_13395_13463[(2)] = inst_13339);

(statearr_13395_13463[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13356 === (44))){
var inst_13348 = (state_13355[(2)]);
var state_13355__$1 = (function (){var statearr_13396 = state_13355;
(statearr_13396[(28)] = inst_13348);

return statearr_13396;
})();
var statearr_13397_13464 = state_13355__$1;
(statearr_13397_13464[(2)] = null);

(statearr_13397_13464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13356 === (6))){
var inst_13287 = (state_13355[(29)]);
var inst_13286 = cljs.core.deref.call(null,cs);
var inst_13287__$1 = cljs.core.keys.call(null,inst_13286);
var inst_13288 = cljs.core.count.call(null,inst_13287__$1);
var inst_13289 = cljs.core.reset_BANG_.call(null,dctr,inst_13288);
var inst_13294 = cljs.core.seq.call(null,inst_13287__$1);
var inst_13295 = inst_13294;
var inst_13296 = null;
var inst_13297 = (0);
var inst_13298 = (0);
var state_13355__$1 = (function (){var statearr_13398 = state_13355;
(statearr_13398[(30)] = inst_13289);

(statearr_13398[(10)] = inst_13296);

(statearr_13398[(29)] = inst_13287__$1);

(statearr_13398[(20)] = inst_13297);

(statearr_13398[(11)] = inst_13298);

(statearr_13398[(21)] = inst_13295);

return statearr_13398;
})();
var statearr_13399_13465 = state_13355__$1;
(statearr_13399_13465[(2)] = null);

(statearr_13399_13465[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13356 === (28))){
var inst_13314 = (state_13355[(25)]);
var inst_13295 = (state_13355[(21)]);
var inst_13314__$1 = cljs.core.seq.call(null,inst_13295);
var state_13355__$1 = (function (){var statearr_13400 = state_13355;
(statearr_13400[(25)] = inst_13314__$1);

return statearr_13400;
})();
if(inst_13314__$1){
var statearr_13401_13466 = state_13355__$1;
(statearr_13401_13466[(1)] = (33));

} else {
var statearr_13402_13467 = state_13355__$1;
(statearr_13402_13467[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13356 === (25))){
var inst_13297 = (state_13355[(20)]);
var inst_13298 = (state_13355[(11)]);
var inst_13300 = (inst_13298 < inst_13297);
var inst_13301 = inst_13300;
var state_13355__$1 = state_13355;
if(cljs.core.truth_(inst_13301)){
var statearr_13403_13468 = state_13355__$1;
(statearr_13403_13468[(1)] = (27));

} else {
var statearr_13404_13469 = state_13355__$1;
(statearr_13404_13469[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13356 === (34))){
var state_13355__$1 = state_13355;
var statearr_13405_13470 = state_13355__$1;
(statearr_13405_13470[(2)] = null);

(statearr_13405_13470[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13356 === (17))){
var state_13355__$1 = state_13355;
var statearr_13406_13471 = state_13355__$1;
(statearr_13406_13471[(2)] = null);

(statearr_13406_13471[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13356 === (3))){
var inst_13353 = (state_13355[(2)]);
var state_13355__$1 = state_13355;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13355__$1,inst_13353);
} else {
if((state_val_13356 === (12))){
var inst_13282 = (state_13355[(2)]);
var state_13355__$1 = state_13355;
var statearr_13407_13472 = state_13355__$1;
(statearr_13407_13472[(2)] = inst_13282);

(statearr_13407_13472[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13356 === (2))){
var state_13355__$1 = state_13355;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13355__$1,(4),ch);
} else {
if((state_val_13356 === (23))){
var state_13355__$1 = state_13355;
var statearr_13408_13473 = state_13355__$1;
(statearr_13408_13473[(2)] = null);

(statearr_13408_13473[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13356 === (35))){
var inst_13337 = (state_13355[(2)]);
var state_13355__$1 = state_13355;
var statearr_13409_13474 = state_13355__$1;
(statearr_13409_13474[(2)] = inst_13337);

(statearr_13409_13474[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13356 === (19))){
var inst_13254 = (state_13355[(7)]);
var inst_13258 = cljs.core.chunk_first.call(null,inst_13254);
var inst_13259 = cljs.core.chunk_rest.call(null,inst_13254);
var inst_13260 = cljs.core.count.call(null,inst_13258);
var inst_13232 = inst_13259;
var inst_13233 = inst_13258;
var inst_13234 = inst_13260;
var inst_13235 = (0);
var state_13355__$1 = (function (){var statearr_13410 = state_13355;
(statearr_13410[(13)] = inst_13233);

(statearr_13410[(14)] = inst_13234);

(statearr_13410[(15)] = inst_13232);

(statearr_13410[(17)] = inst_13235);

return statearr_13410;
})();
var statearr_13411_13475 = state_13355__$1;
(statearr_13411_13475[(2)] = null);

(statearr_13411_13475[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13356 === (11))){
var inst_13232 = (state_13355[(15)]);
var inst_13254 = (state_13355[(7)]);
var inst_13254__$1 = cljs.core.seq.call(null,inst_13232);
var state_13355__$1 = (function (){var statearr_13412 = state_13355;
(statearr_13412[(7)] = inst_13254__$1);

return statearr_13412;
})();
if(inst_13254__$1){
var statearr_13413_13476 = state_13355__$1;
(statearr_13413_13476[(1)] = (16));

} else {
var statearr_13414_13477 = state_13355__$1;
(statearr_13414_13477[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13356 === (9))){
var inst_13284 = (state_13355[(2)]);
var state_13355__$1 = state_13355;
var statearr_13415_13478 = state_13355__$1;
(statearr_13415_13478[(2)] = inst_13284);

(statearr_13415_13478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13356 === (5))){
var inst_13230 = cljs.core.deref.call(null,cs);
var inst_13231 = cljs.core.seq.call(null,inst_13230);
var inst_13232 = inst_13231;
var inst_13233 = null;
var inst_13234 = (0);
var inst_13235 = (0);
var state_13355__$1 = (function (){var statearr_13416 = state_13355;
(statearr_13416[(13)] = inst_13233);

(statearr_13416[(14)] = inst_13234);

(statearr_13416[(15)] = inst_13232);

(statearr_13416[(17)] = inst_13235);

return statearr_13416;
})();
var statearr_13417_13479 = state_13355__$1;
(statearr_13417_13479[(2)] = null);

(statearr_13417_13479[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13356 === (14))){
var state_13355__$1 = state_13355;
var statearr_13418_13480 = state_13355__$1;
(statearr_13418_13480[(2)] = null);

(statearr_13418_13480[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13356 === (45))){
var inst_13345 = (state_13355[(2)]);
var state_13355__$1 = state_13355;
var statearr_13419_13481 = state_13355__$1;
(statearr_13419_13481[(2)] = inst_13345);

(statearr_13419_13481[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13356 === (26))){
var inst_13287 = (state_13355[(29)]);
var inst_13341 = (state_13355[(2)]);
var inst_13342 = cljs.core.seq.call(null,inst_13287);
var state_13355__$1 = (function (){var statearr_13420 = state_13355;
(statearr_13420[(31)] = inst_13341);

return statearr_13420;
})();
if(inst_13342){
var statearr_13421_13482 = state_13355__$1;
(statearr_13421_13482[(1)] = (42));

} else {
var statearr_13422_13483 = state_13355__$1;
(statearr_13422_13483[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13356 === (16))){
var inst_13254 = (state_13355[(7)]);
var inst_13256 = cljs.core.chunked_seq_QMARK_.call(null,inst_13254);
var state_13355__$1 = state_13355;
if(inst_13256){
var statearr_13423_13484 = state_13355__$1;
(statearr_13423_13484[(1)] = (19));

} else {
var statearr_13424_13485 = state_13355__$1;
(statearr_13424_13485[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13356 === (38))){
var inst_13334 = (state_13355[(2)]);
var state_13355__$1 = state_13355;
var statearr_13425_13486 = state_13355__$1;
(statearr_13425_13486[(2)] = inst_13334);

(statearr_13425_13486[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13356 === (30))){
var state_13355__$1 = state_13355;
var statearr_13426_13487 = state_13355__$1;
(statearr_13426_13487[(2)] = null);

(statearr_13426_13487[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13356 === (10))){
var inst_13233 = (state_13355[(13)]);
var inst_13235 = (state_13355[(17)]);
var inst_13243 = cljs.core._nth.call(null,inst_13233,inst_13235);
var inst_13244 = cljs.core.nth.call(null,inst_13243,(0),null);
var inst_13245 = cljs.core.nth.call(null,inst_13243,(1),null);
var state_13355__$1 = (function (){var statearr_13427 = state_13355;
(statearr_13427[(26)] = inst_13244);

return statearr_13427;
})();
if(cljs.core.truth_(inst_13245)){
var statearr_13428_13488 = state_13355__$1;
(statearr_13428_13488[(1)] = (13));

} else {
var statearr_13429_13489 = state_13355__$1;
(statearr_13429_13489[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13356 === (18))){
var inst_13280 = (state_13355[(2)]);
var state_13355__$1 = state_13355;
var statearr_13430_13490 = state_13355__$1;
(statearr_13430_13490[(2)] = inst_13280);

(statearr_13430_13490[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13356 === (42))){
var state_13355__$1 = state_13355;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13355__$1,(45),dchan);
} else {
if((state_val_13356 === (37))){
var inst_13223 = (state_13355[(9)]);
var inst_13314 = (state_13355[(25)]);
var inst_13323 = (state_13355[(23)]);
var inst_13323__$1 = cljs.core.first.call(null,inst_13314);
var inst_13324 = cljs.core.async.put_BANG_.call(null,inst_13323__$1,inst_13223,done);
var state_13355__$1 = (function (){var statearr_13431 = state_13355;
(statearr_13431[(23)] = inst_13323__$1);

return statearr_13431;
})();
if(cljs.core.truth_(inst_13324)){
var statearr_13432_13491 = state_13355__$1;
(statearr_13432_13491[(1)] = (39));

} else {
var statearr_13433_13492 = state_13355__$1;
(statearr_13433_13492[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13356 === (8))){
var inst_13234 = (state_13355[(14)]);
var inst_13235 = (state_13355[(17)]);
var inst_13237 = (inst_13235 < inst_13234);
var inst_13238 = inst_13237;
var state_13355__$1 = state_13355;
if(cljs.core.truth_(inst_13238)){
var statearr_13434_13493 = state_13355__$1;
(statearr_13434_13493[(1)] = (10));

} else {
var statearr_13435_13494 = state_13355__$1;
(statearr_13435_13494[(1)] = (11));

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
});})(c__10985__auto___13440,cs,m,dchan,dctr,done))
;
return ((function (switch__10964__auto__,c__10985__auto___13440,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__10965__auto__ = null;
var cljs$core$async$mult_$_state_machine__10965__auto____0 = (function (){
var statearr_13436 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13436[(0)] = cljs$core$async$mult_$_state_machine__10965__auto__);

(statearr_13436[(1)] = (1));

return statearr_13436;
});
var cljs$core$async$mult_$_state_machine__10965__auto____1 = (function (state_13355){
while(true){
var ret_value__10966__auto__ = (function (){try{while(true){
var result__10967__auto__ = switch__10964__auto__.call(null,state_13355);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10967__auto__;
}
break;
}
}catch (e13437){if((e13437 instanceof Object)){
var ex__10968__auto__ = e13437;
var statearr_13438_13495 = state_13355;
(statearr_13438_13495[(5)] = ex__10968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13355);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13437;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13496 = state_13355;
state_13355 = G__13496;
continue;
} else {
return ret_value__10966__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10965__auto__ = function(state_13355){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10965__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10965__auto____1.call(this,state_13355);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10965__auto____0;
cljs$core$async$mult_$_state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10965__auto____1;
return cljs$core$async$mult_$_state_machine__10965__auto__;
})()
;})(switch__10964__auto__,c__10985__auto___13440,cs,m,dchan,dctr,done))
})();
var state__10987__auto__ = (function (){var statearr_13439 = f__10986__auto__.call(null);
(statearr_13439[(6)] = c__10985__auto___13440);

return statearr_13439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10987__auto__);
});})(c__10985__auto___13440,cs,m,dchan,dctr,done))
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
var G__13498 = arguments.length;
switch (G__13498) {
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
var len__9223__auto___13510 = arguments.length;
var i__9224__auto___13511 = (0);
while(true){
if((i__9224__auto___13511 < len__9223__auto___13510)){
args__9230__auto__.push((arguments[i__9224__auto___13511]));

var G__13512 = (i__9224__auto___13511 + (1));
i__9224__auto___13511 = G__13512;
continue;
} else {
}
break;
}

var argseq__9231__auto__ = ((((3) < args__9230__auto__.length))?(new cljs.core.IndexedSeq(args__9230__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9231__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__13504){
var map__13505 = p__13504;
var map__13505__$1 = ((((!((map__13505 == null)))?((((map__13505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13505.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13505):map__13505);
var opts = map__13505__$1;
var statearr_13507_13513 = state;
(statearr_13507_13513[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__13505,map__13505__$1,opts){
return (function (val){
var statearr_13508_13514 = state;
(statearr_13508_13514[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__13505,map__13505__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_13509_13515 = state;
(statearr_13509_13515[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq13500){
var G__13501 = cljs.core.first.call(null,seq13500);
var seq13500__$1 = cljs.core.next.call(null,seq13500);
var G__13502 = cljs.core.first.call(null,seq13500__$1);
var seq13500__$2 = cljs.core.next.call(null,seq13500__$1);
var G__13503 = cljs.core.first.call(null,seq13500__$2);
var seq13500__$3 = cljs.core.next.call(null,seq13500__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13501,G__13502,G__13503,seq13500__$3);
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
if(typeof cljs.core.async.t_cljs$core$async13516 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13516 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta13517){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta13517 = meta13517;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13516.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13518,meta13517__$1){
var self__ = this;
var _13518__$1 = this;
return (new cljs.core.async.t_cljs$core$async13516(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta13517__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13516.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13518){
var self__ = this;
var _13518__$1 = this;
return self__.meta13517;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13516.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13516.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13516.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13516.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13516.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13516.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13516.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13516.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async13516.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta13517","meta13517",-1703549703,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13516.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13516.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13516";

cljs.core.async.t_cljs$core$async13516.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8677__auto__,writer__8678__auto__,opt__8679__auto__){
return cljs.core._write.call(null,writer__8678__auto__,"cljs.core.async/t_cljs$core$async13516");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async13516 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async13516(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta13517){
return (new cljs.core.async.t_cljs$core$async13516(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta13517));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async13516(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10985__auto___13680 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10985__auto___13680,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__10986__auto__ = (function (){var switch__10964__auto__ = ((function (c__10985__auto___13680,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_13620){
var state_val_13621 = (state_13620[(1)]);
if((state_val_13621 === (7))){
var inst_13535 = (state_13620[(2)]);
var state_13620__$1 = state_13620;
var statearr_13622_13681 = state_13620__$1;
(statearr_13622_13681[(2)] = inst_13535);

(statearr_13622_13681[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13621 === (20))){
var inst_13547 = (state_13620[(7)]);
var state_13620__$1 = state_13620;
var statearr_13623_13682 = state_13620__$1;
(statearr_13623_13682[(2)] = inst_13547);

(statearr_13623_13682[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13621 === (27))){
var state_13620__$1 = state_13620;
var statearr_13624_13683 = state_13620__$1;
(statearr_13624_13683[(2)] = null);

(statearr_13624_13683[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13621 === (1))){
var inst_13522 = (state_13620[(8)]);
var inst_13522__$1 = calc_state.call(null);
var inst_13524 = (inst_13522__$1 == null);
var inst_13525 = cljs.core.not.call(null,inst_13524);
var state_13620__$1 = (function (){var statearr_13625 = state_13620;
(statearr_13625[(8)] = inst_13522__$1);

return statearr_13625;
})();
if(inst_13525){
var statearr_13626_13684 = state_13620__$1;
(statearr_13626_13684[(1)] = (2));

} else {
var statearr_13627_13685 = state_13620__$1;
(statearr_13627_13685[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13621 === (24))){
var inst_13571 = (state_13620[(9)]);
var inst_13580 = (state_13620[(10)]);
var inst_13594 = (state_13620[(11)]);
var inst_13594__$1 = inst_13571.call(null,inst_13580);
var state_13620__$1 = (function (){var statearr_13628 = state_13620;
(statearr_13628[(11)] = inst_13594__$1);

return statearr_13628;
})();
if(cljs.core.truth_(inst_13594__$1)){
var statearr_13629_13686 = state_13620__$1;
(statearr_13629_13686[(1)] = (29));

} else {
var statearr_13630_13687 = state_13620__$1;
(statearr_13630_13687[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13621 === (4))){
var inst_13538 = (state_13620[(2)]);
var state_13620__$1 = state_13620;
if(cljs.core.truth_(inst_13538)){
var statearr_13631_13688 = state_13620__$1;
(statearr_13631_13688[(1)] = (8));

} else {
var statearr_13632_13689 = state_13620__$1;
(statearr_13632_13689[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13621 === (15))){
var inst_13565 = (state_13620[(2)]);
var state_13620__$1 = state_13620;
if(cljs.core.truth_(inst_13565)){
var statearr_13633_13690 = state_13620__$1;
(statearr_13633_13690[(1)] = (19));

} else {
var statearr_13634_13691 = state_13620__$1;
(statearr_13634_13691[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13621 === (21))){
var inst_13570 = (state_13620[(12)]);
var inst_13570__$1 = (state_13620[(2)]);
var inst_13571 = cljs.core.get.call(null,inst_13570__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_13572 = cljs.core.get.call(null,inst_13570__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13573 = cljs.core.get.call(null,inst_13570__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_13620__$1 = (function (){var statearr_13635 = state_13620;
(statearr_13635[(9)] = inst_13571);

(statearr_13635[(13)] = inst_13572);

(statearr_13635[(12)] = inst_13570__$1);

return statearr_13635;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_13620__$1,(22),inst_13573);
} else {
if((state_val_13621 === (31))){
var inst_13602 = (state_13620[(2)]);
var state_13620__$1 = state_13620;
if(cljs.core.truth_(inst_13602)){
var statearr_13636_13692 = state_13620__$1;
(statearr_13636_13692[(1)] = (32));

} else {
var statearr_13637_13693 = state_13620__$1;
(statearr_13637_13693[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13621 === (32))){
var inst_13579 = (state_13620[(14)]);
var state_13620__$1 = state_13620;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13620__$1,(35),out,inst_13579);
} else {
if((state_val_13621 === (33))){
var inst_13570 = (state_13620[(12)]);
var inst_13547 = inst_13570;
var state_13620__$1 = (function (){var statearr_13638 = state_13620;
(statearr_13638[(7)] = inst_13547);

return statearr_13638;
})();
var statearr_13639_13694 = state_13620__$1;
(statearr_13639_13694[(2)] = null);

(statearr_13639_13694[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13621 === (13))){
var inst_13547 = (state_13620[(7)]);
var inst_13554 = inst_13547.cljs$lang$protocol_mask$partition0$;
var inst_13555 = (inst_13554 & (64));
var inst_13556 = inst_13547.cljs$core$ISeq$;
var inst_13557 = (cljs.core.PROTOCOL_SENTINEL === inst_13556);
var inst_13558 = (inst_13555) || (inst_13557);
var state_13620__$1 = state_13620;
if(cljs.core.truth_(inst_13558)){
var statearr_13640_13695 = state_13620__$1;
(statearr_13640_13695[(1)] = (16));

} else {
var statearr_13641_13696 = state_13620__$1;
(statearr_13641_13696[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13621 === (22))){
var inst_13579 = (state_13620[(14)]);
var inst_13580 = (state_13620[(10)]);
var inst_13578 = (state_13620[(2)]);
var inst_13579__$1 = cljs.core.nth.call(null,inst_13578,(0),null);
var inst_13580__$1 = cljs.core.nth.call(null,inst_13578,(1),null);
var inst_13581 = (inst_13579__$1 == null);
var inst_13582 = cljs.core._EQ_.call(null,inst_13580__$1,change);
var inst_13583 = (inst_13581) || (inst_13582);
var state_13620__$1 = (function (){var statearr_13642 = state_13620;
(statearr_13642[(14)] = inst_13579__$1);

(statearr_13642[(10)] = inst_13580__$1);

return statearr_13642;
})();
if(cljs.core.truth_(inst_13583)){
var statearr_13643_13697 = state_13620__$1;
(statearr_13643_13697[(1)] = (23));

} else {
var statearr_13644_13698 = state_13620__$1;
(statearr_13644_13698[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13621 === (36))){
var inst_13570 = (state_13620[(12)]);
var inst_13547 = inst_13570;
var state_13620__$1 = (function (){var statearr_13645 = state_13620;
(statearr_13645[(7)] = inst_13547);

return statearr_13645;
})();
var statearr_13646_13699 = state_13620__$1;
(statearr_13646_13699[(2)] = null);

(statearr_13646_13699[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13621 === (29))){
var inst_13594 = (state_13620[(11)]);
var state_13620__$1 = state_13620;
var statearr_13647_13700 = state_13620__$1;
(statearr_13647_13700[(2)] = inst_13594);

(statearr_13647_13700[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13621 === (6))){
var state_13620__$1 = state_13620;
var statearr_13648_13701 = state_13620__$1;
(statearr_13648_13701[(2)] = false);

(statearr_13648_13701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13621 === (28))){
var inst_13590 = (state_13620[(2)]);
var inst_13591 = calc_state.call(null);
var inst_13547 = inst_13591;
var state_13620__$1 = (function (){var statearr_13649 = state_13620;
(statearr_13649[(7)] = inst_13547);

(statearr_13649[(15)] = inst_13590);

return statearr_13649;
})();
var statearr_13650_13702 = state_13620__$1;
(statearr_13650_13702[(2)] = null);

(statearr_13650_13702[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13621 === (25))){
var inst_13616 = (state_13620[(2)]);
var state_13620__$1 = state_13620;
var statearr_13651_13703 = state_13620__$1;
(statearr_13651_13703[(2)] = inst_13616);

(statearr_13651_13703[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13621 === (34))){
var inst_13614 = (state_13620[(2)]);
var state_13620__$1 = state_13620;
var statearr_13652_13704 = state_13620__$1;
(statearr_13652_13704[(2)] = inst_13614);

(statearr_13652_13704[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13621 === (17))){
var state_13620__$1 = state_13620;
var statearr_13653_13705 = state_13620__$1;
(statearr_13653_13705[(2)] = false);

(statearr_13653_13705[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13621 === (3))){
var state_13620__$1 = state_13620;
var statearr_13654_13706 = state_13620__$1;
(statearr_13654_13706[(2)] = false);

(statearr_13654_13706[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13621 === (12))){
var inst_13618 = (state_13620[(2)]);
var state_13620__$1 = state_13620;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13620__$1,inst_13618);
} else {
if((state_val_13621 === (2))){
var inst_13522 = (state_13620[(8)]);
var inst_13527 = inst_13522.cljs$lang$protocol_mask$partition0$;
var inst_13528 = (inst_13527 & (64));
var inst_13529 = inst_13522.cljs$core$ISeq$;
var inst_13530 = (cljs.core.PROTOCOL_SENTINEL === inst_13529);
var inst_13531 = (inst_13528) || (inst_13530);
var state_13620__$1 = state_13620;
if(cljs.core.truth_(inst_13531)){
var statearr_13655_13707 = state_13620__$1;
(statearr_13655_13707[(1)] = (5));

} else {
var statearr_13656_13708 = state_13620__$1;
(statearr_13656_13708[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13621 === (23))){
var inst_13579 = (state_13620[(14)]);
var inst_13585 = (inst_13579 == null);
var state_13620__$1 = state_13620;
if(cljs.core.truth_(inst_13585)){
var statearr_13657_13709 = state_13620__$1;
(statearr_13657_13709[(1)] = (26));

} else {
var statearr_13658_13710 = state_13620__$1;
(statearr_13658_13710[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13621 === (35))){
var inst_13605 = (state_13620[(2)]);
var state_13620__$1 = state_13620;
if(cljs.core.truth_(inst_13605)){
var statearr_13659_13711 = state_13620__$1;
(statearr_13659_13711[(1)] = (36));

} else {
var statearr_13660_13712 = state_13620__$1;
(statearr_13660_13712[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13621 === (19))){
var inst_13547 = (state_13620[(7)]);
var inst_13567 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13547);
var state_13620__$1 = state_13620;
var statearr_13661_13713 = state_13620__$1;
(statearr_13661_13713[(2)] = inst_13567);

(statearr_13661_13713[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13621 === (11))){
var inst_13547 = (state_13620[(7)]);
var inst_13551 = (inst_13547 == null);
var inst_13552 = cljs.core.not.call(null,inst_13551);
var state_13620__$1 = state_13620;
if(inst_13552){
var statearr_13662_13714 = state_13620__$1;
(statearr_13662_13714[(1)] = (13));

} else {
var statearr_13663_13715 = state_13620__$1;
(statearr_13663_13715[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13621 === (9))){
var inst_13522 = (state_13620[(8)]);
var state_13620__$1 = state_13620;
var statearr_13664_13716 = state_13620__$1;
(statearr_13664_13716[(2)] = inst_13522);

(statearr_13664_13716[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13621 === (5))){
var state_13620__$1 = state_13620;
var statearr_13665_13717 = state_13620__$1;
(statearr_13665_13717[(2)] = true);

(statearr_13665_13717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13621 === (14))){
var state_13620__$1 = state_13620;
var statearr_13666_13718 = state_13620__$1;
(statearr_13666_13718[(2)] = false);

(statearr_13666_13718[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13621 === (26))){
var inst_13580 = (state_13620[(10)]);
var inst_13587 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13580);
var state_13620__$1 = state_13620;
var statearr_13667_13719 = state_13620__$1;
(statearr_13667_13719[(2)] = inst_13587);

(statearr_13667_13719[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13621 === (16))){
var state_13620__$1 = state_13620;
var statearr_13668_13720 = state_13620__$1;
(statearr_13668_13720[(2)] = true);

(statearr_13668_13720[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13621 === (38))){
var inst_13610 = (state_13620[(2)]);
var state_13620__$1 = state_13620;
var statearr_13669_13721 = state_13620__$1;
(statearr_13669_13721[(2)] = inst_13610);

(statearr_13669_13721[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13621 === (30))){
var inst_13571 = (state_13620[(9)]);
var inst_13572 = (state_13620[(13)]);
var inst_13580 = (state_13620[(10)]);
var inst_13597 = cljs.core.empty_QMARK_.call(null,inst_13571);
var inst_13598 = inst_13572.call(null,inst_13580);
var inst_13599 = cljs.core.not.call(null,inst_13598);
var inst_13600 = (inst_13597) && (inst_13599);
var state_13620__$1 = state_13620;
var statearr_13670_13722 = state_13620__$1;
(statearr_13670_13722[(2)] = inst_13600);

(statearr_13670_13722[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13621 === (10))){
var inst_13522 = (state_13620[(8)]);
var inst_13543 = (state_13620[(2)]);
var inst_13544 = cljs.core.get.call(null,inst_13543,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_13545 = cljs.core.get.call(null,inst_13543,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13546 = cljs.core.get.call(null,inst_13543,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_13547 = inst_13522;
var state_13620__$1 = (function (){var statearr_13671 = state_13620;
(statearr_13671[(16)] = inst_13546);

(statearr_13671[(17)] = inst_13544);

(statearr_13671[(18)] = inst_13545);

(statearr_13671[(7)] = inst_13547);

return statearr_13671;
})();
var statearr_13672_13723 = state_13620__$1;
(statearr_13672_13723[(2)] = null);

(statearr_13672_13723[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13621 === (18))){
var inst_13562 = (state_13620[(2)]);
var state_13620__$1 = state_13620;
var statearr_13673_13724 = state_13620__$1;
(statearr_13673_13724[(2)] = inst_13562);

(statearr_13673_13724[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13621 === (37))){
var state_13620__$1 = state_13620;
var statearr_13674_13725 = state_13620__$1;
(statearr_13674_13725[(2)] = null);

(statearr_13674_13725[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13621 === (8))){
var inst_13522 = (state_13620[(8)]);
var inst_13540 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13522);
var state_13620__$1 = state_13620;
var statearr_13675_13726 = state_13620__$1;
(statearr_13675_13726[(2)] = inst_13540);

(statearr_13675_13726[(1)] = (10));


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
});})(c__10985__auto___13680,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__10964__auto__,c__10985__auto___13680,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__10965__auto__ = null;
var cljs$core$async$mix_$_state_machine__10965__auto____0 = (function (){
var statearr_13676 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13676[(0)] = cljs$core$async$mix_$_state_machine__10965__auto__);

(statearr_13676[(1)] = (1));

return statearr_13676;
});
var cljs$core$async$mix_$_state_machine__10965__auto____1 = (function (state_13620){
while(true){
var ret_value__10966__auto__ = (function (){try{while(true){
var result__10967__auto__ = switch__10964__auto__.call(null,state_13620);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10967__auto__;
}
break;
}
}catch (e13677){if((e13677 instanceof Object)){
var ex__10968__auto__ = e13677;
var statearr_13678_13727 = state_13620;
(statearr_13678_13727[(5)] = ex__10968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13620);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13677;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13728 = state_13620;
state_13620 = G__13728;
continue;
} else {
return ret_value__10966__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10965__auto__ = function(state_13620){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10965__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10965__auto____1.call(this,state_13620);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10965__auto____0;
cljs$core$async$mix_$_state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10965__auto____1;
return cljs$core$async$mix_$_state_machine__10965__auto__;
})()
;})(switch__10964__auto__,c__10985__auto___13680,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__10987__auto__ = (function (){var statearr_13679 = f__10986__auto__.call(null);
(statearr_13679[(6)] = c__10985__auto___13680);

return statearr_13679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10987__auto__);
});})(c__10985__auto___13680,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__13730 = arguments.length;
switch (G__13730) {
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
var G__13734 = arguments.length;
switch (G__13734) {
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
return (function (p1__13732_SHARP_){
if(cljs.core.truth_(p1__13732_SHARP_.call(null,topic))){
return p1__13732_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__13732_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__8052__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async13735 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13735 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta13736){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta13736 = meta13736;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13735.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13737,meta13736__$1){
var self__ = this;
var _13737__$1 = this;
return (new cljs.core.async.t_cljs$core$async13735(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta13736__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13735.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13737){
var self__ = this;
var _13737__$1 = this;
return self__.meta13736;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13735.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13735.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13735.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13735.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13735.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async13735.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13735.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13735.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta13736","meta13736",1710898726,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13735.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13735.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13735";

cljs.core.async.t_cljs$core$async13735.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8677__auto__,writer__8678__auto__,opt__8679__auto__){
return cljs.core._write.call(null,writer__8678__auto__,"cljs.core.async/t_cljs$core$async13735");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async13735 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async13735(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta13736){
return (new cljs.core.async.t_cljs$core$async13735(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta13736));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async13735(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10985__auto___13855 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10985__auto___13855,mults,ensure_mult,p){
return (function (){
var f__10986__auto__ = (function (){var switch__10964__auto__ = ((function (c__10985__auto___13855,mults,ensure_mult,p){
return (function (state_13809){
var state_val_13810 = (state_13809[(1)]);
if((state_val_13810 === (7))){
var inst_13805 = (state_13809[(2)]);
var state_13809__$1 = state_13809;
var statearr_13811_13856 = state_13809__$1;
(statearr_13811_13856[(2)] = inst_13805);

(statearr_13811_13856[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13810 === (20))){
var state_13809__$1 = state_13809;
var statearr_13812_13857 = state_13809__$1;
(statearr_13812_13857[(2)] = null);

(statearr_13812_13857[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13810 === (1))){
var state_13809__$1 = state_13809;
var statearr_13813_13858 = state_13809__$1;
(statearr_13813_13858[(2)] = null);

(statearr_13813_13858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13810 === (24))){
var inst_13788 = (state_13809[(7)]);
var inst_13797 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13788);
var state_13809__$1 = state_13809;
var statearr_13814_13859 = state_13809__$1;
(statearr_13814_13859[(2)] = inst_13797);

(statearr_13814_13859[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13810 === (4))){
var inst_13740 = (state_13809[(8)]);
var inst_13740__$1 = (state_13809[(2)]);
var inst_13741 = (inst_13740__$1 == null);
var state_13809__$1 = (function (){var statearr_13815 = state_13809;
(statearr_13815[(8)] = inst_13740__$1);

return statearr_13815;
})();
if(cljs.core.truth_(inst_13741)){
var statearr_13816_13860 = state_13809__$1;
(statearr_13816_13860[(1)] = (5));

} else {
var statearr_13817_13861 = state_13809__$1;
(statearr_13817_13861[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13810 === (15))){
var inst_13782 = (state_13809[(2)]);
var state_13809__$1 = state_13809;
var statearr_13818_13862 = state_13809__$1;
(statearr_13818_13862[(2)] = inst_13782);

(statearr_13818_13862[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13810 === (21))){
var inst_13802 = (state_13809[(2)]);
var state_13809__$1 = (function (){var statearr_13819 = state_13809;
(statearr_13819[(9)] = inst_13802);

return statearr_13819;
})();
var statearr_13820_13863 = state_13809__$1;
(statearr_13820_13863[(2)] = null);

(statearr_13820_13863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13810 === (13))){
var inst_13764 = (state_13809[(10)]);
var inst_13766 = cljs.core.chunked_seq_QMARK_.call(null,inst_13764);
var state_13809__$1 = state_13809;
if(inst_13766){
var statearr_13821_13864 = state_13809__$1;
(statearr_13821_13864[(1)] = (16));

} else {
var statearr_13822_13865 = state_13809__$1;
(statearr_13822_13865[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13810 === (22))){
var inst_13794 = (state_13809[(2)]);
var state_13809__$1 = state_13809;
if(cljs.core.truth_(inst_13794)){
var statearr_13823_13866 = state_13809__$1;
(statearr_13823_13866[(1)] = (23));

} else {
var statearr_13824_13867 = state_13809__$1;
(statearr_13824_13867[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13810 === (6))){
var inst_13740 = (state_13809[(8)]);
var inst_13790 = (state_13809[(11)]);
var inst_13788 = (state_13809[(7)]);
var inst_13788__$1 = topic_fn.call(null,inst_13740);
var inst_13789 = cljs.core.deref.call(null,mults);
var inst_13790__$1 = cljs.core.get.call(null,inst_13789,inst_13788__$1);
var state_13809__$1 = (function (){var statearr_13825 = state_13809;
(statearr_13825[(11)] = inst_13790__$1);

(statearr_13825[(7)] = inst_13788__$1);

return statearr_13825;
})();
if(cljs.core.truth_(inst_13790__$1)){
var statearr_13826_13868 = state_13809__$1;
(statearr_13826_13868[(1)] = (19));

} else {
var statearr_13827_13869 = state_13809__$1;
(statearr_13827_13869[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13810 === (25))){
var inst_13799 = (state_13809[(2)]);
var state_13809__$1 = state_13809;
var statearr_13828_13870 = state_13809__$1;
(statearr_13828_13870[(2)] = inst_13799);

(statearr_13828_13870[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13810 === (17))){
var inst_13764 = (state_13809[(10)]);
var inst_13773 = cljs.core.first.call(null,inst_13764);
var inst_13774 = cljs.core.async.muxch_STAR_.call(null,inst_13773);
var inst_13775 = cljs.core.async.close_BANG_.call(null,inst_13774);
var inst_13776 = cljs.core.next.call(null,inst_13764);
var inst_13750 = inst_13776;
var inst_13751 = null;
var inst_13752 = (0);
var inst_13753 = (0);
var state_13809__$1 = (function (){var statearr_13829 = state_13809;
(statearr_13829[(12)] = inst_13753);

(statearr_13829[(13)] = inst_13751);

(statearr_13829[(14)] = inst_13750);

(statearr_13829[(15)] = inst_13775);

(statearr_13829[(16)] = inst_13752);

return statearr_13829;
})();
var statearr_13830_13871 = state_13809__$1;
(statearr_13830_13871[(2)] = null);

(statearr_13830_13871[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13810 === (3))){
var inst_13807 = (state_13809[(2)]);
var state_13809__$1 = state_13809;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13809__$1,inst_13807);
} else {
if((state_val_13810 === (12))){
var inst_13784 = (state_13809[(2)]);
var state_13809__$1 = state_13809;
var statearr_13831_13872 = state_13809__$1;
(statearr_13831_13872[(2)] = inst_13784);

(statearr_13831_13872[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13810 === (2))){
var state_13809__$1 = state_13809;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13809__$1,(4),ch);
} else {
if((state_val_13810 === (23))){
var state_13809__$1 = state_13809;
var statearr_13832_13873 = state_13809__$1;
(statearr_13832_13873[(2)] = null);

(statearr_13832_13873[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13810 === (19))){
var inst_13740 = (state_13809[(8)]);
var inst_13790 = (state_13809[(11)]);
var inst_13792 = cljs.core.async.muxch_STAR_.call(null,inst_13790);
var state_13809__$1 = state_13809;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13809__$1,(22),inst_13792,inst_13740);
} else {
if((state_val_13810 === (11))){
var inst_13764 = (state_13809[(10)]);
var inst_13750 = (state_13809[(14)]);
var inst_13764__$1 = cljs.core.seq.call(null,inst_13750);
var state_13809__$1 = (function (){var statearr_13833 = state_13809;
(statearr_13833[(10)] = inst_13764__$1);

return statearr_13833;
})();
if(inst_13764__$1){
var statearr_13834_13874 = state_13809__$1;
(statearr_13834_13874[(1)] = (13));

} else {
var statearr_13835_13875 = state_13809__$1;
(statearr_13835_13875[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13810 === (9))){
var inst_13786 = (state_13809[(2)]);
var state_13809__$1 = state_13809;
var statearr_13836_13876 = state_13809__$1;
(statearr_13836_13876[(2)] = inst_13786);

(statearr_13836_13876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13810 === (5))){
var inst_13747 = cljs.core.deref.call(null,mults);
var inst_13748 = cljs.core.vals.call(null,inst_13747);
var inst_13749 = cljs.core.seq.call(null,inst_13748);
var inst_13750 = inst_13749;
var inst_13751 = null;
var inst_13752 = (0);
var inst_13753 = (0);
var state_13809__$1 = (function (){var statearr_13837 = state_13809;
(statearr_13837[(12)] = inst_13753);

(statearr_13837[(13)] = inst_13751);

(statearr_13837[(14)] = inst_13750);

(statearr_13837[(16)] = inst_13752);

return statearr_13837;
})();
var statearr_13838_13877 = state_13809__$1;
(statearr_13838_13877[(2)] = null);

(statearr_13838_13877[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13810 === (14))){
var state_13809__$1 = state_13809;
var statearr_13842_13878 = state_13809__$1;
(statearr_13842_13878[(2)] = null);

(statearr_13842_13878[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13810 === (16))){
var inst_13764 = (state_13809[(10)]);
var inst_13768 = cljs.core.chunk_first.call(null,inst_13764);
var inst_13769 = cljs.core.chunk_rest.call(null,inst_13764);
var inst_13770 = cljs.core.count.call(null,inst_13768);
var inst_13750 = inst_13769;
var inst_13751 = inst_13768;
var inst_13752 = inst_13770;
var inst_13753 = (0);
var state_13809__$1 = (function (){var statearr_13843 = state_13809;
(statearr_13843[(12)] = inst_13753);

(statearr_13843[(13)] = inst_13751);

(statearr_13843[(14)] = inst_13750);

(statearr_13843[(16)] = inst_13752);

return statearr_13843;
})();
var statearr_13844_13879 = state_13809__$1;
(statearr_13844_13879[(2)] = null);

(statearr_13844_13879[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13810 === (10))){
var inst_13753 = (state_13809[(12)]);
var inst_13751 = (state_13809[(13)]);
var inst_13750 = (state_13809[(14)]);
var inst_13752 = (state_13809[(16)]);
var inst_13758 = cljs.core._nth.call(null,inst_13751,inst_13753);
var inst_13759 = cljs.core.async.muxch_STAR_.call(null,inst_13758);
var inst_13760 = cljs.core.async.close_BANG_.call(null,inst_13759);
var inst_13761 = (inst_13753 + (1));
var tmp13839 = inst_13751;
var tmp13840 = inst_13750;
var tmp13841 = inst_13752;
var inst_13750__$1 = tmp13840;
var inst_13751__$1 = tmp13839;
var inst_13752__$1 = tmp13841;
var inst_13753__$1 = inst_13761;
var state_13809__$1 = (function (){var statearr_13845 = state_13809;
(statearr_13845[(17)] = inst_13760);

(statearr_13845[(12)] = inst_13753__$1);

(statearr_13845[(13)] = inst_13751__$1);

(statearr_13845[(14)] = inst_13750__$1);

(statearr_13845[(16)] = inst_13752__$1);

return statearr_13845;
})();
var statearr_13846_13880 = state_13809__$1;
(statearr_13846_13880[(2)] = null);

(statearr_13846_13880[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13810 === (18))){
var inst_13779 = (state_13809[(2)]);
var state_13809__$1 = state_13809;
var statearr_13847_13881 = state_13809__$1;
(statearr_13847_13881[(2)] = inst_13779);

(statearr_13847_13881[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13810 === (8))){
var inst_13753 = (state_13809[(12)]);
var inst_13752 = (state_13809[(16)]);
var inst_13755 = (inst_13753 < inst_13752);
var inst_13756 = inst_13755;
var state_13809__$1 = state_13809;
if(cljs.core.truth_(inst_13756)){
var statearr_13848_13882 = state_13809__$1;
(statearr_13848_13882[(1)] = (10));

} else {
var statearr_13849_13883 = state_13809__$1;
(statearr_13849_13883[(1)] = (11));

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
});})(c__10985__auto___13855,mults,ensure_mult,p))
;
return ((function (switch__10964__auto__,c__10985__auto___13855,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__10965__auto__ = null;
var cljs$core$async$state_machine__10965__auto____0 = (function (){
var statearr_13850 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13850[(0)] = cljs$core$async$state_machine__10965__auto__);

(statearr_13850[(1)] = (1));

return statearr_13850;
});
var cljs$core$async$state_machine__10965__auto____1 = (function (state_13809){
while(true){
var ret_value__10966__auto__ = (function (){try{while(true){
var result__10967__auto__ = switch__10964__auto__.call(null,state_13809);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10967__auto__;
}
break;
}
}catch (e13851){if((e13851 instanceof Object)){
var ex__10968__auto__ = e13851;
var statearr_13852_13884 = state_13809;
(statearr_13852_13884[(5)] = ex__10968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13809);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13851;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13885 = state_13809;
state_13809 = G__13885;
continue;
} else {
return ret_value__10966__auto__;
}
break;
}
});
cljs$core$async$state_machine__10965__auto__ = function(state_13809){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10965__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10965__auto____1.call(this,state_13809);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10965__auto____0;
cljs$core$async$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10965__auto____1;
return cljs$core$async$state_machine__10965__auto__;
})()
;})(switch__10964__auto__,c__10985__auto___13855,mults,ensure_mult,p))
})();
var state__10987__auto__ = (function (){var statearr_13853 = f__10986__auto__.call(null);
(statearr_13853[(6)] = c__10985__auto___13855);

return statearr_13853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10987__auto__);
});})(c__10985__auto___13855,mults,ensure_mult,p))
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
var G__13887 = arguments.length;
switch (G__13887) {
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
var G__13890 = arguments.length;
switch (G__13890) {
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
var G__13893 = arguments.length;
switch (G__13893) {
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
var c__10985__auto___13960 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10985__auto___13960,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__10986__auto__ = (function (){var switch__10964__auto__ = ((function (c__10985__auto___13960,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_13932){
var state_val_13933 = (state_13932[(1)]);
if((state_val_13933 === (7))){
var state_13932__$1 = state_13932;
var statearr_13934_13961 = state_13932__$1;
(statearr_13934_13961[(2)] = null);

(statearr_13934_13961[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13933 === (1))){
var state_13932__$1 = state_13932;
var statearr_13935_13962 = state_13932__$1;
(statearr_13935_13962[(2)] = null);

(statearr_13935_13962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13933 === (4))){
var inst_13896 = (state_13932[(7)]);
var inst_13898 = (inst_13896 < cnt);
var state_13932__$1 = state_13932;
if(cljs.core.truth_(inst_13898)){
var statearr_13936_13963 = state_13932__$1;
(statearr_13936_13963[(1)] = (6));

} else {
var statearr_13937_13964 = state_13932__$1;
(statearr_13937_13964[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13933 === (15))){
var inst_13928 = (state_13932[(2)]);
var state_13932__$1 = state_13932;
var statearr_13938_13965 = state_13932__$1;
(statearr_13938_13965[(2)] = inst_13928);

(statearr_13938_13965[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13933 === (13))){
var inst_13921 = cljs.core.async.close_BANG_.call(null,out);
var state_13932__$1 = state_13932;
var statearr_13939_13966 = state_13932__$1;
(statearr_13939_13966[(2)] = inst_13921);

(statearr_13939_13966[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13933 === (6))){
var state_13932__$1 = state_13932;
var statearr_13940_13967 = state_13932__$1;
(statearr_13940_13967[(2)] = null);

(statearr_13940_13967[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13933 === (3))){
var inst_13930 = (state_13932[(2)]);
var state_13932__$1 = state_13932;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13932__$1,inst_13930);
} else {
if((state_val_13933 === (12))){
var inst_13918 = (state_13932[(8)]);
var inst_13918__$1 = (state_13932[(2)]);
var inst_13919 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13918__$1);
var state_13932__$1 = (function (){var statearr_13941 = state_13932;
(statearr_13941[(8)] = inst_13918__$1);

return statearr_13941;
})();
if(cljs.core.truth_(inst_13919)){
var statearr_13942_13968 = state_13932__$1;
(statearr_13942_13968[(1)] = (13));

} else {
var statearr_13943_13969 = state_13932__$1;
(statearr_13943_13969[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13933 === (2))){
var inst_13895 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_13896 = (0);
var state_13932__$1 = (function (){var statearr_13944 = state_13932;
(statearr_13944[(7)] = inst_13896);

(statearr_13944[(9)] = inst_13895);

return statearr_13944;
})();
var statearr_13945_13970 = state_13932__$1;
(statearr_13945_13970[(2)] = null);

(statearr_13945_13970[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13933 === (11))){
var inst_13896 = (state_13932[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13932,(10),Object,null,(9));
var inst_13905 = chs__$1.call(null,inst_13896);
var inst_13906 = done.call(null,inst_13896);
var inst_13907 = cljs.core.async.take_BANG_.call(null,inst_13905,inst_13906);
var state_13932__$1 = state_13932;
var statearr_13946_13971 = state_13932__$1;
(statearr_13946_13971[(2)] = inst_13907);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13932__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13933 === (9))){
var inst_13896 = (state_13932[(7)]);
var inst_13909 = (state_13932[(2)]);
var inst_13910 = (inst_13896 + (1));
var inst_13896__$1 = inst_13910;
var state_13932__$1 = (function (){var statearr_13947 = state_13932;
(statearr_13947[(7)] = inst_13896__$1);

(statearr_13947[(10)] = inst_13909);

return statearr_13947;
})();
var statearr_13948_13972 = state_13932__$1;
(statearr_13948_13972[(2)] = null);

(statearr_13948_13972[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13933 === (5))){
var inst_13916 = (state_13932[(2)]);
var state_13932__$1 = (function (){var statearr_13949 = state_13932;
(statearr_13949[(11)] = inst_13916);

return statearr_13949;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13932__$1,(12),dchan);
} else {
if((state_val_13933 === (14))){
var inst_13918 = (state_13932[(8)]);
var inst_13923 = cljs.core.apply.call(null,f,inst_13918);
var state_13932__$1 = state_13932;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13932__$1,(16),out,inst_13923);
} else {
if((state_val_13933 === (16))){
var inst_13925 = (state_13932[(2)]);
var state_13932__$1 = (function (){var statearr_13950 = state_13932;
(statearr_13950[(12)] = inst_13925);

return statearr_13950;
})();
var statearr_13951_13973 = state_13932__$1;
(statearr_13951_13973[(2)] = null);

(statearr_13951_13973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13933 === (10))){
var inst_13900 = (state_13932[(2)]);
var inst_13901 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_13932__$1 = (function (){var statearr_13952 = state_13932;
(statearr_13952[(13)] = inst_13900);

return statearr_13952;
})();
var statearr_13953_13974 = state_13932__$1;
(statearr_13953_13974[(2)] = inst_13901);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13932__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13933 === (8))){
var inst_13914 = (state_13932[(2)]);
var state_13932__$1 = state_13932;
var statearr_13954_13975 = state_13932__$1;
(statearr_13954_13975[(2)] = inst_13914);

(statearr_13954_13975[(1)] = (5));


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
});})(c__10985__auto___13960,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__10964__auto__,c__10985__auto___13960,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__10965__auto__ = null;
var cljs$core$async$state_machine__10965__auto____0 = (function (){
var statearr_13955 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13955[(0)] = cljs$core$async$state_machine__10965__auto__);

(statearr_13955[(1)] = (1));

return statearr_13955;
});
var cljs$core$async$state_machine__10965__auto____1 = (function (state_13932){
while(true){
var ret_value__10966__auto__ = (function (){try{while(true){
var result__10967__auto__ = switch__10964__auto__.call(null,state_13932);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10967__auto__;
}
break;
}
}catch (e13956){if((e13956 instanceof Object)){
var ex__10968__auto__ = e13956;
var statearr_13957_13976 = state_13932;
(statearr_13957_13976[(5)] = ex__10968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13932);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13956;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13977 = state_13932;
state_13932 = G__13977;
continue;
} else {
return ret_value__10966__auto__;
}
break;
}
});
cljs$core$async$state_machine__10965__auto__ = function(state_13932){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10965__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10965__auto____1.call(this,state_13932);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10965__auto____0;
cljs$core$async$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10965__auto____1;
return cljs$core$async$state_machine__10965__auto__;
})()
;})(switch__10964__auto__,c__10985__auto___13960,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__10987__auto__ = (function (){var statearr_13958 = f__10986__auto__.call(null);
(statearr_13958[(6)] = c__10985__auto___13960);

return statearr_13958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10987__auto__);
});})(c__10985__auto___13960,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__13980 = arguments.length;
switch (G__13980) {
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
var c__10985__auto___14034 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10985__auto___14034,out){
return (function (){
var f__10986__auto__ = (function (){var switch__10964__auto__ = ((function (c__10985__auto___14034,out){
return (function (state_14012){
var state_val_14013 = (state_14012[(1)]);
if((state_val_14013 === (7))){
var inst_13992 = (state_14012[(7)]);
var inst_13991 = (state_14012[(8)]);
var inst_13991__$1 = (state_14012[(2)]);
var inst_13992__$1 = cljs.core.nth.call(null,inst_13991__$1,(0),null);
var inst_13993 = cljs.core.nth.call(null,inst_13991__$1,(1),null);
var inst_13994 = (inst_13992__$1 == null);
var state_14012__$1 = (function (){var statearr_14014 = state_14012;
(statearr_14014[(7)] = inst_13992__$1);

(statearr_14014[(9)] = inst_13993);

(statearr_14014[(8)] = inst_13991__$1);

return statearr_14014;
})();
if(cljs.core.truth_(inst_13994)){
var statearr_14015_14035 = state_14012__$1;
(statearr_14015_14035[(1)] = (8));

} else {
var statearr_14016_14036 = state_14012__$1;
(statearr_14016_14036[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14013 === (1))){
var inst_13981 = cljs.core.vec.call(null,chs);
var inst_13982 = inst_13981;
var state_14012__$1 = (function (){var statearr_14017 = state_14012;
(statearr_14017[(10)] = inst_13982);

return statearr_14017;
})();
var statearr_14018_14037 = state_14012__$1;
(statearr_14018_14037[(2)] = null);

(statearr_14018_14037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14013 === (4))){
var inst_13982 = (state_14012[(10)]);
var state_14012__$1 = state_14012;
return cljs.core.async.ioc_alts_BANG_.call(null,state_14012__$1,(7),inst_13982);
} else {
if((state_val_14013 === (6))){
var inst_14008 = (state_14012[(2)]);
var state_14012__$1 = state_14012;
var statearr_14019_14038 = state_14012__$1;
(statearr_14019_14038[(2)] = inst_14008);

(statearr_14019_14038[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14013 === (3))){
var inst_14010 = (state_14012[(2)]);
var state_14012__$1 = state_14012;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14012__$1,inst_14010);
} else {
if((state_val_14013 === (2))){
var inst_13982 = (state_14012[(10)]);
var inst_13984 = cljs.core.count.call(null,inst_13982);
var inst_13985 = (inst_13984 > (0));
var state_14012__$1 = state_14012;
if(cljs.core.truth_(inst_13985)){
var statearr_14021_14039 = state_14012__$1;
(statearr_14021_14039[(1)] = (4));

} else {
var statearr_14022_14040 = state_14012__$1;
(statearr_14022_14040[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14013 === (11))){
var inst_13982 = (state_14012[(10)]);
var inst_14001 = (state_14012[(2)]);
var tmp14020 = inst_13982;
var inst_13982__$1 = tmp14020;
var state_14012__$1 = (function (){var statearr_14023 = state_14012;
(statearr_14023[(10)] = inst_13982__$1);

(statearr_14023[(11)] = inst_14001);

return statearr_14023;
})();
var statearr_14024_14041 = state_14012__$1;
(statearr_14024_14041[(2)] = null);

(statearr_14024_14041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14013 === (9))){
var inst_13992 = (state_14012[(7)]);
var state_14012__$1 = state_14012;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14012__$1,(11),out,inst_13992);
} else {
if((state_val_14013 === (5))){
var inst_14006 = cljs.core.async.close_BANG_.call(null,out);
var state_14012__$1 = state_14012;
var statearr_14025_14042 = state_14012__$1;
(statearr_14025_14042[(2)] = inst_14006);

(statearr_14025_14042[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14013 === (10))){
var inst_14004 = (state_14012[(2)]);
var state_14012__$1 = state_14012;
var statearr_14026_14043 = state_14012__$1;
(statearr_14026_14043[(2)] = inst_14004);

(statearr_14026_14043[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14013 === (8))){
var inst_13982 = (state_14012[(10)]);
var inst_13992 = (state_14012[(7)]);
var inst_13993 = (state_14012[(9)]);
var inst_13991 = (state_14012[(8)]);
var inst_13996 = (function (){var cs = inst_13982;
var vec__13987 = inst_13991;
var v = inst_13992;
var c = inst_13993;
return ((function (cs,vec__13987,v,c,inst_13982,inst_13992,inst_13993,inst_13991,state_val_14013,c__10985__auto___14034,out){
return (function (p1__13978_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__13978_SHARP_);
});
;})(cs,vec__13987,v,c,inst_13982,inst_13992,inst_13993,inst_13991,state_val_14013,c__10985__auto___14034,out))
})();
var inst_13997 = cljs.core.filterv.call(null,inst_13996,inst_13982);
var inst_13982__$1 = inst_13997;
var state_14012__$1 = (function (){var statearr_14027 = state_14012;
(statearr_14027[(10)] = inst_13982__$1);

return statearr_14027;
})();
var statearr_14028_14044 = state_14012__$1;
(statearr_14028_14044[(2)] = null);

(statearr_14028_14044[(1)] = (2));


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
});})(c__10985__auto___14034,out))
;
return ((function (switch__10964__auto__,c__10985__auto___14034,out){
return (function() {
var cljs$core$async$state_machine__10965__auto__ = null;
var cljs$core$async$state_machine__10965__auto____0 = (function (){
var statearr_14029 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14029[(0)] = cljs$core$async$state_machine__10965__auto__);

(statearr_14029[(1)] = (1));

return statearr_14029;
});
var cljs$core$async$state_machine__10965__auto____1 = (function (state_14012){
while(true){
var ret_value__10966__auto__ = (function (){try{while(true){
var result__10967__auto__ = switch__10964__auto__.call(null,state_14012);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10967__auto__;
}
break;
}
}catch (e14030){if((e14030 instanceof Object)){
var ex__10968__auto__ = e14030;
var statearr_14031_14045 = state_14012;
(statearr_14031_14045[(5)] = ex__10968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14012);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14030;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14046 = state_14012;
state_14012 = G__14046;
continue;
} else {
return ret_value__10966__auto__;
}
break;
}
});
cljs$core$async$state_machine__10965__auto__ = function(state_14012){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10965__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10965__auto____1.call(this,state_14012);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10965__auto____0;
cljs$core$async$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10965__auto____1;
return cljs$core$async$state_machine__10965__auto__;
})()
;})(switch__10964__auto__,c__10985__auto___14034,out))
})();
var state__10987__auto__ = (function (){var statearr_14032 = f__10986__auto__.call(null);
(statearr_14032[(6)] = c__10985__auto___14034);

return statearr_14032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10987__auto__);
});})(c__10985__auto___14034,out))
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
var G__14048 = arguments.length;
switch (G__14048) {
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
var c__10985__auto___14093 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10985__auto___14093,out){
return (function (){
var f__10986__auto__ = (function (){var switch__10964__auto__ = ((function (c__10985__auto___14093,out){
return (function (state_14072){
var state_val_14073 = (state_14072[(1)]);
if((state_val_14073 === (7))){
var inst_14054 = (state_14072[(7)]);
var inst_14054__$1 = (state_14072[(2)]);
var inst_14055 = (inst_14054__$1 == null);
var inst_14056 = cljs.core.not.call(null,inst_14055);
var state_14072__$1 = (function (){var statearr_14074 = state_14072;
(statearr_14074[(7)] = inst_14054__$1);

return statearr_14074;
})();
if(inst_14056){
var statearr_14075_14094 = state_14072__$1;
(statearr_14075_14094[(1)] = (8));

} else {
var statearr_14076_14095 = state_14072__$1;
(statearr_14076_14095[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14073 === (1))){
var inst_14049 = (0);
var state_14072__$1 = (function (){var statearr_14077 = state_14072;
(statearr_14077[(8)] = inst_14049);

return statearr_14077;
})();
var statearr_14078_14096 = state_14072__$1;
(statearr_14078_14096[(2)] = null);

(statearr_14078_14096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14073 === (4))){
var state_14072__$1 = state_14072;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14072__$1,(7),ch);
} else {
if((state_val_14073 === (6))){
var inst_14067 = (state_14072[(2)]);
var state_14072__$1 = state_14072;
var statearr_14079_14097 = state_14072__$1;
(statearr_14079_14097[(2)] = inst_14067);

(statearr_14079_14097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14073 === (3))){
var inst_14069 = (state_14072[(2)]);
var inst_14070 = cljs.core.async.close_BANG_.call(null,out);
var state_14072__$1 = (function (){var statearr_14080 = state_14072;
(statearr_14080[(9)] = inst_14069);

return statearr_14080;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14072__$1,inst_14070);
} else {
if((state_val_14073 === (2))){
var inst_14049 = (state_14072[(8)]);
var inst_14051 = (inst_14049 < n);
var state_14072__$1 = state_14072;
if(cljs.core.truth_(inst_14051)){
var statearr_14081_14098 = state_14072__$1;
(statearr_14081_14098[(1)] = (4));

} else {
var statearr_14082_14099 = state_14072__$1;
(statearr_14082_14099[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14073 === (11))){
var inst_14049 = (state_14072[(8)]);
var inst_14059 = (state_14072[(2)]);
var inst_14060 = (inst_14049 + (1));
var inst_14049__$1 = inst_14060;
var state_14072__$1 = (function (){var statearr_14083 = state_14072;
(statearr_14083[(8)] = inst_14049__$1);

(statearr_14083[(10)] = inst_14059);

return statearr_14083;
})();
var statearr_14084_14100 = state_14072__$1;
(statearr_14084_14100[(2)] = null);

(statearr_14084_14100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14073 === (9))){
var state_14072__$1 = state_14072;
var statearr_14085_14101 = state_14072__$1;
(statearr_14085_14101[(2)] = null);

(statearr_14085_14101[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14073 === (5))){
var state_14072__$1 = state_14072;
var statearr_14086_14102 = state_14072__$1;
(statearr_14086_14102[(2)] = null);

(statearr_14086_14102[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14073 === (10))){
var inst_14064 = (state_14072[(2)]);
var state_14072__$1 = state_14072;
var statearr_14087_14103 = state_14072__$1;
(statearr_14087_14103[(2)] = inst_14064);

(statearr_14087_14103[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14073 === (8))){
var inst_14054 = (state_14072[(7)]);
var state_14072__$1 = state_14072;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14072__$1,(11),out,inst_14054);
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
});})(c__10985__auto___14093,out))
;
return ((function (switch__10964__auto__,c__10985__auto___14093,out){
return (function() {
var cljs$core$async$state_machine__10965__auto__ = null;
var cljs$core$async$state_machine__10965__auto____0 = (function (){
var statearr_14088 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14088[(0)] = cljs$core$async$state_machine__10965__auto__);

(statearr_14088[(1)] = (1));

return statearr_14088;
});
var cljs$core$async$state_machine__10965__auto____1 = (function (state_14072){
while(true){
var ret_value__10966__auto__ = (function (){try{while(true){
var result__10967__auto__ = switch__10964__auto__.call(null,state_14072);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10967__auto__;
}
break;
}
}catch (e14089){if((e14089 instanceof Object)){
var ex__10968__auto__ = e14089;
var statearr_14090_14104 = state_14072;
(statearr_14090_14104[(5)] = ex__10968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14072);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14089;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14105 = state_14072;
state_14072 = G__14105;
continue;
} else {
return ret_value__10966__auto__;
}
break;
}
});
cljs$core$async$state_machine__10965__auto__ = function(state_14072){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10965__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10965__auto____1.call(this,state_14072);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10965__auto____0;
cljs$core$async$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10965__auto____1;
return cljs$core$async$state_machine__10965__auto__;
})()
;})(switch__10964__auto__,c__10985__auto___14093,out))
})();
var state__10987__auto__ = (function (){var statearr_14091 = f__10986__auto__.call(null);
(statearr_14091[(6)] = c__10985__auto___14093);

return statearr_14091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10987__auto__);
});})(c__10985__auto___14093,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async14107 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14107 = (function (f,ch,meta14108){
this.f = f;
this.ch = ch;
this.meta14108 = meta14108;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14107.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14109,meta14108__$1){
var self__ = this;
var _14109__$1 = this;
return (new cljs.core.async.t_cljs$core$async14107(self__.f,self__.ch,meta14108__$1));
});

cljs.core.async.t_cljs$core$async14107.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14109){
var self__ = this;
var _14109__$1 = this;
return self__.meta14108;
});

cljs.core.async.t_cljs$core$async14107.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14107.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14107.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14107.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14107.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async14110 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14110 = (function (f,ch,meta14108,_,fn1,meta14111){
this.f = f;
this.ch = ch;
this.meta14108 = meta14108;
this._ = _;
this.fn1 = fn1;
this.meta14111 = meta14111;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14110.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14112,meta14111__$1){
var self__ = this;
var _14112__$1 = this;
return (new cljs.core.async.t_cljs$core$async14110(self__.f,self__.ch,self__.meta14108,self__._,self__.fn1,meta14111__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async14110.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14112){
var self__ = this;
var _14112__$1 = this;
return self__.meta14111;
});})(___$1))
;

cljs.core.async.t_cljs$core$async14110.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14110.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async14110.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async14110.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__14106_SHARP_){
return f1.call(null,(((p1__14106_SHARP_ == null))?null:self__.f.call(null,p1__14106_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async14110.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14108","meta14108",370705733,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async14107","cljs.core.async/t_cljs$core$async14107",-1393556983,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta14111","meta14111",-1748614200,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async14110.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14110.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14110";

cljs.core.async.t_cljs$core$async14110.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__8677__auto__,writer__8678__auto__,opt__8679__auto__){
return cljs.core._write.call(null,writer__8678__auto__,"cljs.core.async/t_cljs$core$async14110");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async14110 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14110(f__$1,ch__$1,meta14108__$1,___$2,fn1__$1,meta14111){
return (new cljs.core.async.t_cljs$core$async14110(f__$1,ch__$1,meta14108__$1,___$2,fn1__$1,meta14111));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async14110(self__.f,self__.ch,self__.meta14108,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async14107.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14107.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async14107.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14108","meta14108",370705733,null)], null);
});

cljs.core.async.t_cljs$core$async14107.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14107.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14107";

cljs.core.async.t_cljs$core$async14107.cljs$lang$ctorPrWriter = (function (this__8677__auto__,writer__8678__auto__,opt__8679__auto__){
return cljs.core._write.call(null,writer__8678__auto__,"cljs.core.async/t_cljs$core$async14107");
});

cljs.core.async.__GT_t_cljs$core$async14107 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14107(f__$1,ch__$1,meta14108){
return (new cljs.core.async.t_cljs$core$async14107(f__$1,ch__$1,meta14108));
});

}

return (new cljs.core.async.t_cljs$core$async14107(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async14113 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14113 = (function (f,ch,meta14114){
this.f = f;
this.ch = ch;
this.meta14114 = meta14114;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14113.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14115,meta14114__$1){
var self__ = this;
var _14115__$1 = this;
return (new cljs.core.async.t_cljs$core$async14113(self__.f,self__.ch,meta14114__$1));
});

cljs.core.async.t_cljs$core$async14113.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14115){
var self__ = this;
var _14115__$1 = this;
return self__.meta14114;
});

cljs.core.async.t_cljs$core$async14113.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14113.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14113.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14113.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async14113.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14113.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async14113.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14114","meta14114",-149569127,null)], null);
});

cljs.core.async.t_cljs$core$async14113.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14113.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14113";

cljs.core.async.t_cljs$core$async14113.cljs$lang$ctorPrWriter = (function (this__8677__auto__,writer__8678__auto__,opt__8679__auto__){
return cljs.core._write.call(null,writer__8678__auto__,"cljs.core.async/t_cljs$core$async14113");
});

cljs.core.async.__GT_t_cljs$core$async14113 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async14113(f__$1,ch__$1,meta14114){
return (new cljs.core.async.t_cljs$core$async14113(f__$1,ch__$1,meta14114));
});

}

return (new cljs.core.async.t_cljs$core$async14113(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async14116 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14116 = (function (p,ch,meta14117){
this.p = p;
this.ch = ch;
this.meta14117 = meta14117;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14116.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14118,meta14117__$1){
var self__ = this;
var _14118__$1 = this;
return (new cljs.core.async.t_cljs$core$async14116(self__.p,self__.ch,meta14117__$1));
});

cljs.core.async.t_cljs$core$async14116.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14118){
var self__ = this;
var _14118__$1 = this;
return self__.meta14117;
});

cljs.core.async.t_cljs$core$async14116.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14116.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14116.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14116.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14116.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async14116.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14116.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async14116.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14117","meta14117",-1198811946,null)], null);
});

cljs.core.async.t_cljs$core$async14116.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14116.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14116";

cljs.core.async.t_cljs$core$async14116.cljs$lang$ctorPrWriter = (function (this__8677__auto__,writer__8678__auto__,opt__8679__auto__){
return cljs.core._write.call(null,writer__8678__auto__,"cljs.core.async/t_cljs$core$async14116");
});

cljs.core.async.__GT_t_cljs$core$async14116 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async14116(p__$1,ch__$1,meta14117){
return (new cljs.core.async.t_cljs$core$async14116(p__$1,ch__$1,meta14117));
});

}

return (new cljs.core.async.t_cljs$core$async14116(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__14120 = arguments.length;
switch (G__14120) {
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
var c__10985__auto___14160 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10985__auto___14160,out){
return (function (){
var f__10986__auto__ = (function (){var switch__10964__auto__ = ((function (c__10985__auto___14160,out){
return (function (state_14141){
var state_val_14142 = (state_14141[(1)]);
if((state_val_14142 === (7))){
var inst_14137 = (state_14141[(2)]);
var state_14141__$1 = state_14141;
var statearr_14143_14161 = state_14141__$1;
(statearr_14143_14161[(2)] = inst_14137);

(statearr_14143_14161[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14142 === (1))){
var state_14141__$1 = state_14141;
var statearr_14144_14162 = state_14141__$1;
(statearr_14144_14162[(2)] = null);

(statearr_14144_14162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14142 === (4))){
var inst_14123 = (state_14141[(7)]);
var inst_14123__$1 = (state_14141[(2)]);
var inst_14124 = (inst_14123__$1 == null);
var state_14141__$1 = (function (){var statearr_14145 = state_14141;
(statearr_14145[(7)] = inst_14123__$1);

return statearr_14145;
})();
if(cljs.core.truth_(inst_14124)){
var statearr_14146_14163 = state_14141__$1;
(statearr_14146_14163[(1)] = (5));

} else {
var statearr_14147_14164 = state_14141__$1;
(statearr_14147_14164[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14142 === (6))){
var inst_14123 = (state_14141[(7)]);
var inst_14128 = p.call(null,inst_14123);
var state_14141__$1 = state_14141;
if(cljs.core.truth_(inst_14128)){
var statearr_14148_14165 = state_14141__$1;
(statearr_14148_14165[(1)] = (8));

} else {
var statearr_14149_14166 = state_14141__$1;
(statearr_14149_14166[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14142 === (3))){
var inst_14139 = (state_14141[(2)]);
var state_14141__$1 = state_14141;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14141__$1,inst_14139);
} else {
if((state_val_14142 === (2))){
var state_14141__$1 = state_14141;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14141__$1,(4),ch);
} else {
if((state_val_14142 === (11))){
var inst_14131 = (state_14141[(2)]);
var state_14141__$1 = state_14141;
var statearr_14150_14167 = state_14141__$1;
(statearr_14150_14167[(2)] = inst_14131);

(statearr_14150_14167[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14142 === (9))){
var state_14141__$1 = state_14141;
var statearr_14151_14168 = state_14141__$1;
(statearr_14151_14168[(2)] = null);

(statearr_14151_14168[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14142 === (5))){
var inst_14126 = cljs.core.async.close_BANG_.call(null,out);
var state_14141__$1 = state_14141;
var statearr_14152_14169 = state_14141__$1;
(statearr_14152_14169[(2)] = inst_14126);

(statearr_14152_14169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14142 === (10))){
var inst_14134 = (state_14141[(2)]);
var state_14141__$1 = (function (){var statearr_14153 = state_14141;
(statearr_14153[(8)] = inst_14134);

return statearr_14153;
})();
var statearr_14154_14170 = state_14141__$1;
(statearr_14154_14170[(2)] = null);

(statearr_14154_14170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14142 === (8))){
var inst_14123 = (state_14141[(7)]);
var state_14141__$1 = state_14141;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14141__$1,(11),out,inst_14123);
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
});})(c__10985__auto___14160,out))
;
return ((function (switch__10964__auto__,c__10985__auto___14160,out){
return (function() {
var cljs$core$async$state_machine__10965__auto__ = null;
var cljs$core$async$state_machine__10965__auto____0 = (function (){
var statearr_14155 = [null,null,null,null,null,null,null,null,null];
(statearr_14155[(0)] = cljs$core$async$state_machine__10965__auto__);

(statearr_14155[(1)] = (1));

return statearr_14155;
});
var cljs$core$async$state_machine__10965__auto____1 = (function (state_14141){
while(true){
var ret_value__10966__auto__ = (function (){try{while(true){
var result__10967__auto__ = switch__10964__auto__.call(null,state_14141);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10967__auto__;
}
break;
}
}catch (e14156){if((e14156 instanceof Object)){
var ex__10968__auto__ = e14156;
var statearr_14157_14171 = state_14141;
(statearr_14157_14171[(5)] = ex__10968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14141);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14156;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14172 = state_14141;
state_14141 = G__14172;
continue;
} else {
return ret_value__10966__auto__;
}
break;
}
});
cljs$core$async$state_machine__10965__auto__ = function(state_14141){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10965__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10965__auto____1.call(this,state_14141);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10965__auto____0;
cljs$core$async$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10965__auto____1;
return cljs$core$async$state_machine__10965__auto__;
})()
;})(switch__10964__auto__,c__10985__auto___14160,out))
})();
var state__10987__auto__ = (function (){var statearr_14158 = f__10986__auto__.call(null);
(statearr_14158[(6)] = c__10985__auto___14160);

return statearr_14158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10987__auto__);
});})(c__10985__auto___14160,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__14174 = arguments.length;
switch (G__14174) {
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
var c__10985__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10985__auto__){
return (function (){
var f__10986__auto__ = (function (){var switch__10964__auto__ = ((function (c__10985__auto__){
return (function (state_14237){
var state_val_14238 = (state_14237[(1)]);
if((state_val_14238 === (7))){
var inst_14233 = (state_14237[(2)]);
var state_14237__$1 = state_14237;
var statearr_14239_14277 = state_14237__$1;
(statearr_14239_14277[(2)] = inst_14233);

(statearr_14239_14277[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14238 === (20))){
var inst_14203 = (state_14237[(7)]);
var inst_14214 = (state_14237[(2)]);
var inst_14215 = cljs.core.next.call(null,inst_14203);
var inst_14189 = inst_14215;
var inst_14190 = null;
var inst_14191 = (0);
var inst_14192 = (0);
var state_14237__$1 = (function (){var statearr_14240 = state_14237;
(statearr_14240[(8)] = inst_14190);

(statearr_14240[(9)] = inst_14191);

(statearr_14240[(10)] = inst_14189);

(statearr_14240[(11)] = inst_14214);

(statearr_14240[(12)] = inst_14192);

return statearr_14240;
})();
var statearr_14241_14278 = state_14237__$1;
(statearr_14241_14278[(2)] = null);

(statearr_14241_14278[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14238 === (1))){
var state_14237__$1 = state_14237;
var statearr_14242_14279 = state_14237__$1;
(statearr_14242_14279[(2)] = null);

(statearr_14242_14279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14238 === (4))){
var inst_14178 = (state_14237[(13)]);
var inst_14178__$1 = (state_14237[(2)]);
var inst_14179 = (inst_14178__$1 == null);
var state_14237__$1 = (function (){var statearr_14243 = state_14237;
(statearr_14243[(13)] = inst_14178__$1);

return statearr_14243;
})();
if(cljs.core.truth_(inst_14179)){
var statearr_14244_14280 = state_14237__$1;
(statearr_14244_14280[(1)] = (5));

} else {
var statearr_14245_14281 = state_14237__$1;
(statearr_14245_14281[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14238 === (15))){
var state_14237__$1 = state_14237;
var statearr_14249_14282 = state_14237__$1;
(statearr_14249_14282[(2)] = null);

(statearr_14249_14282[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14238 === (21))){
var state_14237__$1 = state_14237;
var statearr_14250_14283 = state_14237__$1;
(statearr_14250_14283[(2)] = null);

(statearr_14250_14283[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14238 === (13))){
var inst_14190 = (state_14237[(8)]);
var inst_14191 = (state_14237[(9)]);
var inst_14189 = (state_14237[(10)]);
var inst_14192 = (state_14237[(12)]);
var inst_14199 = (state_14237[(2)]);
var inst_14200 = (inst_14192 + (1));
var tmp14246 = inst_14190;
var tmp14247 = inst_14191;
var tmp14248 = inst_14189;
var inst_14189__$1 = tmp14248;
var inst_14190__$1 = tmp14246;
var inst_14191__$1 = tmp14247;
var inst_14192__$1 = inst_14200;
var state_14237__$1 = (function (){var statearr_14251 = state_14237;
(statearr_14251[(8)] = inst_14190__$1);

(statearr_14251[(14)] = inst_14199);

(statearr_14251[(9)] = inst_14191__$1);

(statearr_14251[(10)] = inst_14189__$1);

(statearr_14251[(12)] = inst_14192__$1);

return statearr_14251;
})();
var statearr_14252_14284 = state_14237__$1;
(statearr_14252_14284[(2)] = null);

(statearr_14252_14284[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14238 === (22))){
var state_14237__$1 = state_14237;
var statearr_14253_14285 = state_14237__$1;
(statearr_14253_14285[(2)] = null);

(statearr_14253_14285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14238 === (6))){
var inst_14178 = (state_14237[(13)]);
var inst_14187 = f.call(null,inst_14178);
var inst_14188 = cljs.core.seq.call(null,inst_14187);
var inst_14189 = inst_14188;
var inst_14190 = null;
var inst_14191 = (0);
var inst_14192 = (0);
var state_14237__$1 = (function (){var statearr_14254 = state_14237;
(statearr_14254[(8)] = inst_14190);

(statearr_14254[(9)] = inst_14191);

(statearr_14254[(10)] = inst_14189);

(statearr_14254[(12)] = inst_14192);

return statearr_14254;
})();
var statearr_14255_14286 = state_14237__$1;
(statearr_14255_14286[(2)] = null);

(statearr_14255_14286[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14238 === (17))){
var inst_14203 = (state_14237[(7)]);
var inst_14207 = cljs.core.chunk_first.call(null,inst_14203);
var inst_14208 = cljs.core.chunk_rest.call(null,inst_14203);
var inst_14209 = cljs.core.count.call(null,inst_14207);
var inst_14189 = inst_14208;
var inst_14190 = inst_14207;
var inst_14191 = inst_14209;
var inst_14192 = (0);
var state_14237__$1 = (function (){var statearr_14256 = state_14237;
(statearr_14256[(8)] = inst_14190);

(statearr_14256[(9)] = inst_14191);

(statearr_14256[(10)] = inst_14189);

(statearr_14256[(12)] = inst_14192);

return statearr_14256;
})();
var statearr_14257_14287 = state_14237__$1;
(statearr_14257_14287[(2)] = null);

(statearr_14257_14287[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14238 === (3))){
var inst_14235 = (state_14237[(2)]);
var state_14237__$1 = state_14237;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14237__$1,inst_14235);
} else {
if((state_val_14238 === (12))){
var inst_14223 = (state_14237[(2)]);
var state_14237__$1 = state_14237;
var statearr_14258_14288 = state_14237__$1;
(statearr_14258_14288[(2)] = inst_14223);

(statearr_14258_14288[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14238 === (2))){
var state_14237__$1 = state_14237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14237__$1,(4),in$);
} else {
if((state_val_14238 === (23))){
var inst_14231 = (state_14237[(2)]);
var state_14237__$1 = state_14237;
var statearr_14259_14289 = state_14237__$1;
(statearr_14259_14289[(2)] = inst_14231);

(statearr_14259_14289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14238 === (19))){
var inst_14218 = (state_14237[(2)]);
var state_14237__$1 = state_14237;
var statearr_14260_14290 = state_14237__$1;
(statearr_14260_14290[(2)] = inst_14218);

(statearr_14260_14290[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14238 === (11))){
var inst_14189 = (state_14237[(10)]);
var inst_14203 = (state_14237[(7)]);
var inst_14203__$1 = cljs.core.seq.call(null,inst_14189);
var state_14237__$1 = (function (){var statearr_14261 = state_14237;
(statearr_14261[(7)] = inst_14203__$1);

return statearr_14261;
})();
if(inst_14203__$1){
var statearr_14262_14291 = state_14237__$1;
(statearr_14262_14291[(1)] = (14));

} else {
var statearr_14263_14292 = state_14237__$1;
(statearr_14263_14292[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14238 === (9))){
var inst_14225 = (state_14237[(2)]);
var inst_14226 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_14237__$1 = (function (){var statearr_14264 = state_14237;
(statearr_14264[(15)] = inst_14225);

return statearr_14264;
})();
if(cljs.core.truth_(inst_14226)){
var statearr_14265_14293 = state_14237__$1;
(statearr_14265_14293[(1)] = (21));

} else {
var statearr_14266_14294 = state_14237__$1;
(statearr_14266_14294[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14238 === (5))){
var inst_14181 = cljs.core.async.close_BANG_.call(null,out);
var state_14237__$1 = state_14237;
var statearr_14267_14295 = state_14237__$1;
(statearr_14267_14295[(2)] = inst_14181);

(statearr_14267_14295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14238 === (14))){
var inst_14203 = (state_14237[(7)]);
var inst_14205 = cljs.core.chunked_seq_QMARK_.call(null,inst_14203);
var state_14237__$1 = state_14237;
if(inst_14205){
var statearr_14268_14296 = state_14237__$1;
(statearr_14268_14296[(1)] = (17));

} else {
var statearr_14269_14297 = state_14237__$1;
(statearr_14269_14297[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14238 === (16))){
var inst_14221 = (state_14237[(2)]);
var state_14237__$1 = state_14237;
var statearr_14270_14298 = state_14237__$1;
(statearr_14270_14298[(2)] = inst_14221);

(statearr_14270_14298[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14238 === (10))){
var inst_14190 = (state_14237[(8)]);
var inst_14192 = (state_14237[(12)]);
var inst_14197 = cljs.core._nth.call(null,inst_14190,inst_14192);
var state_14237__$1 = state_14237;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14237__$1,(13),out,inst_14197);
} else {
if((state_val_14238 === (18))){
var inst_14203 = (state_14237[(7)]);
var inst_14212 = cljs.core.first.call(null,inst_14203);
var state_14237__$1 = state_14237;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14237__$1,(20),out,inst_14212);
} else {
if((state_val_14238 === (8))){
var inst_14191 = (state_14237[(9)]);
var inst_14192 = (state_14237[(12)]);
var inst_14194 = (inst_14192 < inst_14191);
var inst_14195 = inst_14194;
var state_14237__$1 = state_14237;
if(cljs.core.truth_(inst_14195)){
var statearr_14271_14299 = state_14237__$1;
(statearr_14271_14299[(1)] = (10));

} else {
var statearr_14272_14300 = state_14237__$1;
(statearr_14272_14300[(1)] = (11));

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
});})(c__10985__auto__))
;
return ((function (switch__10964__auto__,c__10985__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__10965__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10965__auto____0 = (function (){
var statearr_14273 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14273[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10965__auto__);

(statearr_14273[(1)] = (1));

return statearr_14273;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10965__auto____1 = (function (state_14237){
while(true){
var ret_value__10966__auto__ = (function (){try{while(true){
var result__10967__auto__ = switch__10964__auto__.call(null,state_14237);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10967__auto__;
}
break;
}
}catch (e14274){if((e14274 instanceof Object)){
var ex__10968__auto__ = e14274;
var statearr_14275_14301 = state_14237;
(statearr_14275_14301[(5)] = ex__10968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14237);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14274;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14302 = state_14237;
state_14237 = G__14302;
continue;
} else {
return ret_value__10966__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10965__auto__ = function(state_14237){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10965__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10965__auto____1.call(this,state_14237);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10965__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10965__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10965__auto__;
})()
;})(switch__10964__auto__,c__10985__auto__))
})();
var state__10987__auto__ = (function (){var statearr_14276 = f__10986__auto__.call(null);
(statearr_14276[(6)] = c__10985__auto__);

return statearr_14276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10987__auto__);
});})(c__10985__auto__))
);

return c__10985__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__14304 = arguments.length;
switch (G__14304) {
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
var G__14307 = arguments.length;
switch (G__14307) {
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
var G__14310 = arguments.length;
switch (G__14310) {
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
var c__10985__auto___14357 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10985__auto___14357,out){
return (function (){
var f__10986__auto__ = (function (){var switch__10964__auto__ = ((function (c__10985__auto___14357,out){
return (function (state_14334){
var state_val_14335 = (state_14334[(1)]);
if((state_val_14335 === (7))){
var inst_14329 = (state_14334[(2)]);
var state_14334__$1 = state_14334;
var statearr_14336_14358 = state_14334__$1;
(statearr_14336_14358[(2)] = inst_14329);

(statearr_14336_14358[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14335 === (1))){
var inst_14311 = null;
var state_14334__$1 = (function (){var statearr_14337 = state_14334;
(statearr_14337[(7)] = inst_14311);

return statearr_14337;
})();
var statearr_14338_14359 = state_14334__$1;
(statearr_14338_14359[(2)] = null);

(statearr_14338_14359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14335 === (4))){
var inst_14314 = (state_14334[(8)]);
var inst_14314__$1 = (state_14334[(2)]);
var inst_14315 = (inst_14314__$1 == null);
var inst_14316 = cljs.core.not.call(null,inst_14315);
var state_14334__$1 = (function (){var statearr_14339 = state_14334;
(statearr_14339[(8)] = inst_14314__$1);

return statearr_14339;
})();
if(inst_14316){
var statearr_14340_14360 = state_14334__$1;
(statearr_14340_14360[(1)] = (5));

} else {
var statearr_14341_14361 = state_14334__$1;
(statearr_14341_14361[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14335 === (6))){
var state_14334__$1 = state_14334;
var statearr_14342_14362 = state_14334__$1;
(statearr_14342_14362[(2)] = null);

(statearr_14342_14362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14335 === (3))){
var inst_14331 = (state_14334[(2)]);
var inst_14332 = cljs.core.async.close_BANG_.call(null,out);
var state_14334__$1 = (function (){var statearr_14343 = state_14334;
(statearr_14343[(9)] = inst_14331);

return statearr_14343;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14334__$1,inst_14332);
} else {
if((state_val_14335 === (2))){
var state_14334__$1 = state_14334;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14334__$1,(4),ch);
} else {
if((state_val_14335 === (11))){
var inst_14314 = (state_14334[(8)]);
var inst_14323 = (state_14334[(2)]);
var inst_14311 = inst_14314;
var state_14334__$1 = (function (){var statearr_14344 = state_14334;
(statearr_14344[(7)] = inst_14311);

(statearr_14344[(10)] = inst_14323);

return statearr_14344;
})();
var statearr_14345_14363 = state_14334__$1;
(statearr_14345_14363[(2)] = null);

(statearr_14345_14363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14335 === (9))){
var inst_14314 = (state_14334[(8)]);
var state_14334__$1 = state_14334;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14334__$1,(11),out,inst_14314);
} else {
if((state_val_14335 === (5))){
var inst_14311 = (state_14334[(7)]);
var inst_14314 = (state_14334[(8)]);
var inst_14318 = cljs.core._EQ_.call(null,inst_14314,inst_14311);
var state_14334__$1 = state_14334;
if(inst_14318){
var statearr_14347_14364 = state_14334__$1;
(statearr_14347_14364[(1)] = (8));

} else {
var statearr_14348_14365 = state_14334__$1;
(statearr_14348_14365[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14335 === (10))){
var inst_14326 = (state_14334[(2)]);
var state_14334__$1 = state_14334;
var statearr_14349_14366 = state_14334__$1;
(statearr_14349_14366[(2)] = inst_14326);

(statearr_14349_14366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14335 === (8))){
var inst_14311 = (state_14334[(7)]);
var tmp14346 = inst_14311;
var inst_14311__$1 = tmp14346;
var state_14334__$1 = (function (){var statearr_14350 = state_14334;
(statearr_14350[(7)] = inst_14311__$1);

return statearr_14350;
})();
var statearr_14351_14367 = state_14334__$1;
(statearr_14351_14367[(2)] = null);

(statearr_14351_14367[(1)] = (2));


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
});})(c__10985__auto___14357,out))
;
return ((function (switch__10964__auto__,c__10985__auto___14357,out){
return (function() {
var cljs$core$async$state_machine__10965__auto__ = null;
var cljs$core$async$state_machine__10965__auto____0 = (function (){
var statearr_14352 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14352[(0)] = cljs$core$async$state_machine__10965__auto__);

(statearr_14352[(1)] = (1));

return statearr_14352;
});
var cljs$core$async$state_machine__10965__auto____1 = (function (state_14334){
while(true){
var ret_value__10966__auto__ = (function (){try{while(true){
var result__10967__auto__ = switch__10964__auto__.call(null,state_14334);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10967__auto__;
}
break;
}
}catch (e14353){if((e14353 instanceof Object)){
var ex__10968__auto__ = e14353;
var statearr_14354_14368 = state_14334;
(statearr_14354_14368[(5)] = ex__10968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14334);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14353;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14369 = state_14334;
state_14334 = G__14369;
continue;
} else {
return ret_value__10966__auto__;
}
break;
}
});
cljs$core$async$state_machine__10965__auto__ = function(state_14334){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10965__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10965__auto____1.call(this,state_14334);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10965__auto____0;
cljs$core$async$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10965__auto____1;
return cljs$core$async$state_machine__10965__auto__;
})()
;})(switch__10964__auto__,c__10985__auto___14357,out))
})();
var state__10987__auto__ = (function (){var statearr_14355 = f__10986__auto__.call(null);
(statearr_14355[(6)] = c__10985__auto___14357);

return statearr_14355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10987__auto__);
});})(c__10985__auto___14357,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__14371 = arguments.length;
switch (G__14371) {
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
var c__10985__auto___14437 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10985__auto___14437,out){
return (function (){
var f__10986__auto__ = (function (){var switch__10964__auto__ = ((function (c__10985__auto___14437,out){
return (function (state_14409){
var state_val_14410 = (state_14409[(1)]);
if((state_val_14410 === (7))){
var inst_14405 = (state_14409[(2)]);
var state_14409__$1 = state_14409;
var statearr_14411_14438 = state_14409__$1;
(statearr_14411_14438[(2)] = inst_14405);

(statearr_14411_14438[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14410 === (1))){
var inst_14372 = (new Array(n));
var inst_14373 = inst_14372;
var inst_14374 = (0);
var state_14409__$1 = (function (){var statearr_14412 = state_14409;
(statearr_14412[(7)] = inst_14374);

(statearr_14412[(8)] = inst_14373);

return statearr_14412;
})();
var statearr_14413_14439 = state_14409__$1;
(statearr_14413_14439[(2)] = null);

(statearr_14413_14439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14410 === (4))){
var inst_14377 = (state_14409[(9)]);
var inst_14377__$1 = (state_14409[(2)]);
var inst_14378 = (inst_14377__$1 == null);
var inst_14379 = cljs.core.not.call(null,inst_14378);
var state_14409__$1 = (function (){var statearr_14414 = state_14409;
(statearr_14414[(9)] = inst_14377__$1);

return statearr_14414;
})();
if(inst_14379){
var statearr_14415_14440 = state_14409__$1;
(statearr_14415_14440[(1)] = (5));

} else {
var statearr_14416_14441 = state_14409__$1;
(statearr_14416_14441[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14410 === (15))){
var inst_14399 = (state_14409[(2)]);
var state_14409__$1 = state_14409;
var statearr_14417_14442 = state_14409__$1;
(statearr_14417_14442[(2)] = inst_14399);

(statearr_14417_14442[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14410 === (13))){
var state_14409__$1 = state_14409;
var statearr_14418_14443 = state_14409__$1;
(statearr_14418_14443[(2)] = null);

(statearr_14418_14443[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14410 === (6))){
var inst_14374 = (state_14409[(7)]);
var inst_14395 = (inst_14374 > (0));
var state_14409__$1 = state_14409;
if(cljs.core.truth_(inst_14395)){
var statearr_14419_14444 = state_14409__$1;
(statearr_14419_14444[(1)] = (12));

} else {
var statearr_14420_14445 = state_14409__$1;
(statearr_14420_14445[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14410 === (3))){
var inst_14407 = (state_14409[(2)]);
var state_14409__$1 = state_14409;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14409__$1,inst_14407);
} else {
if((state_val_14410 === (12))){
var inst_14373 = (state_14409[(8)]);
var inst_14397 = cljs.core.vec.call(null,inst_14373);
var state_14409__$1 = state_14409;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14409__$1,(15),out,inst_14397);
} else {
if((state_val_14410 === (2))){
var state_14409__$1 = state_14409;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14409__$1,(4),ch);
} else {
if((state_val_14410 === (11))){
var inst_14389 = (state_14409[(2)]);
var inst_14390 = (new Array(n));
var inst_14373 = inst_14390;
var inst_14374 = (0);
var state_14409__$1 = (function (){var statearr_14421 = state_14409;
(statearr_14421[(7)] = inst_14374);

(statearr_14421[(8)] = inst_14373);

(statearr_14421[(10)] = inst_14389);

return statearr_14421;
})();
var statearr_14422_14446 = state_14409__$1;
(statearr_14422_14446[(2)] = null);

(statearr_14422_14446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14410 === (9))){
var inst_14373 = (state_14409[(8)]);
var inst_14387 = cljs.core.vec.call(null,inst_14373);
var state_14409__$1 = state_14409;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14409__$1,(11),out,inst_14387);
} else {
if((state_val_14410 === (5))){
var inst_14377 = (state_14409[(9)]);
var inst_14382 = (state_14409[(11)]);
var inst_14374 = (state_14409[(7)]);
var inst_14373 = (state_14409[(8)]);
var inst_14381 = (inst_14373[inst_14374] = inst_14377);
var inst_14382__$1 = (inst_14374 + (1));
var inst_14383 = (inst_14382__$1 < n);
var state_14409__$1 = (function (){var statearr_14423 = state_14409;
(statearr_14423[(11)] = inst_14382__$1);

(statearr_14423[(12)] = inst_14381);

return statearr_14423;
})();
if(cljs.core.truth_(inst_14383)){
var statearr_14424_14447 = state_14409__$1;
(statearr_14424_14447[(1)] = (8));

} else {
var statearr_14425_14448 = state_14409__$1;
(statearr_14425_14448[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14410 === (14))){
var inst_14402 = (state_14409[(2)]);
var inst_14403 = cljs.core.async.close_BANG_.call(null,out);
var state_14409__$1 = (function (){var statearr_14427 = state_14409;
(statearr_14427[(13)] = inst_14402);

return statearr_14427;
})();
var statearr_14428_14449 = state_14409__$1;
(statearr_14428_14449[(2)] = inst_14403);

(statearr_14428_14449[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14410 === (10))){
var inst_14393 = (state_14409[(2)]);
var state_14409__$1 = state_14409;
var statearr_14429_14450 = state_14409__$1;
(statearr_14429_14450[(2)] = inst_14393);

(statearr_14429_14450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14410 === (8))){
var inst_14382 = (state_14409[(11)]);
var inst_14373 = (state_14409[(8)]);
var tmp14426 = inst_14373;
var inst_14373__$1 = tmp14426;
var inst_14374 = inst_14382;
var state_14409__$1 = (function (){var statearr_14430 = state_14409;
(statearr_14430[(7)] = inst_14374);

(statearr_14430[(8)] = inst_14373__$1);

return statearr_14430;
})();
var statearr_14431_14451 = state_14409__$1;
(statearr_14431_14451[(2)] = null);

(statearr_14431_14451[(1)] = (2));


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
});})(c__10985__auto___14437,out))
;
return ((function (switch__10964__auto__,c__10985__auto___14437,out){
return (function() {
var cljs$core$async$state_machine__10965__auto__ = null;
var cljs$core$async$state_machine__10965__auto____0 = (function (){
var statearr_14432 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14432[(0)] = cljs$core$async$state_machine__10965__auto__);

(statearr_14432[(1)] = (1));

return statearr_14432;
});
var cljs$core$async$state_machine__10965__auto____1 = (function (state_14409){
while(true){
var ret_value__10966__auto__ = (function (){try{while(true){
var result__10967__auto__ = switch__10964__auto__.call(null,state_14409);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10967__auto__;
}
break;
}
}catch (e14433){if((e14433 instanceof Object)){
var ex__10968__auto__ = e14433;
var statearr_14434_14452 = state_14409;
(statearr_14434_14452[(5)] = ex__10968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14409);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14433;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14453 = state_14409;
state_14409 = G__14453;
continue;
} else {
return ret_value__10966__auto__;
}
break;
}
});
cljs$core$async$state_machine__10965__auto__ = function(state_14409){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10965__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10965__auto____1.call(this,state_14409);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10965__auto____0;
cljs$core$async$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10965__auto____1;
return cljs$core$async$state_machine__10965__auto__;
})()
;})(switch__10964__auto__,c__10985__auto___14437,out))
})();
var state__10987__auto__ = (function (){var statearr_14435 = f__10986__auto__.call(null);
(statearr_14435[(6)] = c__10985__auto___14437);

return statearr_14435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10987__auto__);
});})(c__10985__auto___14437,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__14455 = arguments.length;
switch (G__14455) {
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
var c__10985__auto___14525 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10985__auto___14525,out){
return (function (){
var f__10986__auto__ = (function (){var switch__10964__auto__ = ((function (c__10985__auto___14525,out){
return (function (state_14497){
var state_val_14498 = (state_14497[(1)]);
if((state_val_14498 === (7))){
var inst_14493 = (state_14497[(2)]);
var state_14497__$1 = state_14497;
var statearr_14499_14526 = state_14497__$1;
(statearr_14499_14526[(2)] = inst_14493);

(statearr_14499_14526[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14498 === (1))){
var inst_14456 = [];
var inst_14457 = inst_14456;
var inst_14458 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_14497__$1 = (function (){var statearr_14500 = state_14497;
(statearr_14500[(7)] = inst_14457);

(statearr_14500[(8)] = inst_14458);

return statearr_14500;
})();
var statearr_14501_14527 = state_14497__$1;
(statearr_14501_14527[(2)] = null);

(statearr_14501_14527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14498 === (4))){
var inst_14461 = (state_14497[(9)]);
var inst_14461__$1 = (state_14497[(2)]);
var inst_14462 = (inst_14461__$1 == null);
var inst_14463 = cljs.core.not.call(null,inst_14462);
var state_14497__$1 = (function (){var statearr_14502 = state_14497;
(statearr_14502[(9)] = inst_14461__$1);

return statearr_14502;
})();
if(inst_14463){
var statearr_14503_14528 = state_14497__$1;
(statearr_14503_14528[(1)] = (5));

} else {
var statearr_14504_14529 = state_14497__$1;
(statearr_14504_14529[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14498 === (15))){
var inst_14487 = (state_14497[(2)]);
var state_14497__$1 = state_14497;
var statearr_14505_14530 = state_14497__$1;
(statearr_14505_14530[(2)] = inst_14487);

(statearr_14505_14530[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14498 === (13))){
var state_14497__$1 = state_14497;
var statearr_14506_14531 = state_14497__$1;
(statearr_14506_14531[(2)] = null);

(statearr_14506_14531[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14498 === (6))){
var inst_14457 = (state_14497[(7)]);
var inst_14482 = inst_14457.length;
var inst_14483 = (inst_14482 > (0));
var state_14497__$1 = state_14497;
if(cljs.core.truth_(inst_14483)){
var statearr_14507_14532 = state_14497__$1;
(statearr_14507_14532[(1)] = (12));

} else {
var statearr_14508_14533 = state_14497__$1;
(statearr_14508_14533[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14498 === (3))){
var inst_14495 = (state_14497[(2)]);
var state_14497__$1 = state_14497;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14497__$1,inst_14495);
} else {
if((state_val_14498 === (12))){
var inst_14457 = (state_14497[(7)]);
var inst_14485 = cljs.core.vec.call(null,inst_14457);
var state_14497__$1 = state_14497;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14497__$1,(15),out,inst_14485);
} else {
if((state_val_14498 === (2))){
var state_14497__$1 = state_14497;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14497__$1,(4),ch);
} else {
if((state_val_14498 === (11))){
var inst_14461 = (state_14497[(9)]);
var inst_14465 = (state_14497[(10)]);
var inst_14475 = (state_14497[(2)]);
var inst_14476 = [];
var inst_14477 = inst_14476.push(inst_14461);
var inst_14457 = inst_14476;
var inst_14458 = inst_14465;
var state_14497__$1 = (function (){var statearr_14509 = state_14497;
(statearr_14509[(11)] = inst_14475);

(statearr_14509[(7)] = inst_14457);

(statearr_14509[(8)] = inst_14458);

(statearr_14509[(12)] = inst_14477);

return statearr_14509;
})();
var statearr_14510_14534 = state_14497__$1;
(statearr_14510_14534[(2)] = null);

(statearr_14510_14534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14498 === (9))){
var inst_14457 = (state_14497[(7)]);
var inst_14473 = cljs.core.vec.call(null,inst_14457);
var state_14497__$1 = state_14497;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14497__$1,(11),out,inst_14473);
} else {
if((state_val_14498 === (5))){
var inst_14461 = (state_14497[(9)]);
var inst_14458 = (state_14497[(8)]);
var inst_14465 = (state_14497[(10)]);
var inst_14465__$1 = f.call(null,inst_14461);
var inst_14466 = cljs.core._EQ_.call(null,inst_14465__$1,inst_14458);
var inst_14467 = cljs.core.keyword_identical_QMARK_.call(null,inst_14458,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_14468 = (inst_14466) || (inst_14467);
var state_14497__$1 = (function (){var statearr_14511 = state_14497;
(statearr_14511[(10)] = inst_14465__$1);

return statearr_14511;
})();
if(cljs.core.truth_(inst_14468)){
var statearr_14512_14535 = state_14497__$1;
(statearr_14512_14535[(1)] = (8));

} else {
var statearr_14513_14536 = state_14497__$1;
(statearr_14513_14536[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14498 === (14))){
var inst_14490 = (state_14497[(2)]);
var inst_14491 = cljs.core.async.close_BANG_.call(null,out);
var state_14497__$1 = (function (){var statearr_14515 = state_14497;
(statearr_14515[(13)] = inst_14490);

return statearr_14515;
})();
var statearr_14516_14537 = state_14497__$1;
(statearr_14516_14537[(2)] = inst_14491);

(statearr_14516_14537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14498 === (10))){
var inst_14480 = (state_14497[(2)]);
var state_14497__$1 = state_14497;
var statearr_14517_14538 = state_14497__$1;
(statearr_14517_14538[(2)] = inst_14480);

(statearr_14517_14538[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14498 === (8))){
var inst_14461 = (state_14497[(9)]);
var inst_14457 = (state_14497[(7)]);
var inst_14465 = (state_14497[(10)]);
var inst_14470 = inst_14457.push(inst_14461);
var tmp14514 = inst_14457;
var inst_14457__$1 = tmp14514;
var inst_14458 = inst_14465;
var state_14497__$1 = (function (){var statearr_14518 = state_14497;
(statearr_14518[(14)] = inst_14470);

(statearr_14518[(7)] = inst_14457__$1);

(statearr_14518[(8)] = inst_14458);

return statearr_14518;
})();
var statearr_14519_14539 = state_14497__$1;
(statearr_14519_14539[(2)] = null);

(statearr_14519_14539[(1)] = (2));


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
});})(c__10985__auto___14525,out))
;
return ((function (switch__10964__auto__,c__10985__auto___14525,out){
return (function() {
var cljs$core$async$state_machine__10965__auto__ = null;
var cljs$core$async$state_machine__10965__auto____0 = (function (){
var statearr_14520 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14520[(0)] = cljs$core$async$state_machine__10965__auto__);

(statearr_14520[(1)] = (1));

return statearr_14520;
});
var cljs$core$async$state_machine__10965__auto____1 = (function (state_14497){
while(true){
var ret_value__10966__auto__ = (function (){try{while(true){
var result__10967__auto__ = switch__10964__auto__.call(null,state_14497);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10967__auto__;
}
break;
}
}catch (e14521){if((e14521 instanceof Object)){
var ex__10968__auto__ = e14521;
var statearr_14522_14540 = state_14497;
(statearr_14522_14540[(5)] = ex__10968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14497);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14521;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14541 = state_14497;
state_14497 = G__14541;
continue;
} else {
return ret_value__10966__auto__;
}
break;
}
});
cljs$core$async$state_machine__10965__auto__ = function(state_14497){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10965__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10965__auto____1.call(this,state_14497);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10965__auto____0;
cljs$core$async$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10965__auto____1;
return cljs$core$async$state_machine__10965__auto__;
})()
;})(switch__10964__auto__,c__10985__auto___14525,out))
})();
var state__10987__auto__ = (function (){var statearr_14523 = f__10986__auto__.call(null);
(statearr_14523[(6)] = c__10985__auto___14525);

return statearr_14523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10987__auto__);
});})(c__10985__auto___14525,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
