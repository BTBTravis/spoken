// Compiled by ClojureScript 1.9.946 {:target :nodejs}
goog.provide('promesa.impl.scheduler');
goog.require('cljs.core');
goog.require('promesa.protocols');
promesa.impl.scheduler.scheduled_task = (function promesa$impl$scheduler$scheduled_task(cur,done_QMARK_){
var cancelled = cljs.core.volatile_BANG_.call(null,false);
if(typeof promesa.impl.scheduler.t_promesa$impl$scheduler9662 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IMeta}
 * @implements {promesa.protocols.ICancellable}
 * @implements {cljs.core.IWithMeta}
*/
promesa.impl.scheduler.t_promesa$impl$scheduler9662 = (function (cur,done_QMARK_,cancelled,meta9663){
this.cur = cur;
this.done_QMARK_ = done_QMARK_;
this.cancelled = cancelled;
this.meta9663 = meta9663;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 1;
});
promesa.impl.scheduler.t_promesa$impl$scheduler9662.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cancelled){
return (function (_9664,meta9663__$1){
var self__ = this;
var _9664__$1 = this;
return (new promesa.impl.scheduler.t_promesa$impl$scheduler9662(self__.cur,self__.done_QMARK_,self__.cancelled,meta9663__$1));
});})(cancelled))
;

promesa.impl.scheduler.t_promesa$impl$scheduler9662.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cancelled){
return (function (_9664){
var self__ = this;
var _9664__$1 = this;
return self__.meta9663;
});})(cancelled))
;

promesa.impl.scheduler.t_promesa$impl$scheduler9662.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (cancelled){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.done_QMARK_);
});})(cancelled))
;

promesa.impl.scheduler.t_promesa$impl$scheduler9662.prototype.promesa$protocols$ICancellable$ = cljs.core.PROTOCOL_SENTINEL;

promesa.impl.scheduler.t_promesa$impl$scheduler9662.prototype.promesa$protocols$ICancellable$_cancelled_QMARK_$arity$1 = ((function (cancelled){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.cancelled);
});})(cancelled))
;

promesa.impl.scheduler.t_promesa$impl$scheduler9662.prototype.promesa$protocols$ICancellable$_cancel$arity$1 = ((function (cancelled){
return (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,self__.cancelled))){
return null;
} else {
cljs.core.vreset_BANG_.call(null,self__.cancelled,true);

return clearTimeout(self__.cur);
}
});})(cancelled))
;

promesa.impl.scheduler.t_promesa$impl$scheduler9662.getBasis = ((function (cancelled){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cur","cur",-1501245170,null),new cljs.core.Symbol(null,"done?","done?",-206470191,null),new cljs.core.Symbol(null,"cancelled","cancelled",2129257751,null),new cljs.core.Symbol(null,"meta9663","meta9663",-785925324,null)], null);
});})(cancelled))
;

promesa.impl.scheduler.t_promesa$impl$scheduler9662.cljs$lang$type = true;

promesa.impl.scheduler.t_promesa$impl$scheduler9662.cljs$lang$ctorStr = "promesa.impl.scheduler/t_promesa$impl$scheduler9662";

promesa.impl.scheduler.t_promesa$impl$scheduler9662.cljs$lang$ctorPrWriter = ((function (cancelled){
return (function (this__8677__auto__,writer__8678__auto__,opt__8679__auto__){
return cljs.core._write.call(null,writer__8678__auto__,"promesa.impl.scheduler/t_promesa$impl$scheduler9662");
});})(cancelled))
;

promesa.impl.scheduler.__GT_t_promesa$impl$scheduler9662 = ((function (cancelled){
return (function promesa$impl$scheduler$scheduled_task_$___GT_t_promesa$impl$scheduler9662(cur__$1,done_QMARK___$1,cancelled__$1,meta9663){
return (new promesa.impl.scheduler.t_promesa$impl$scheduler9662(cur__$1,done_QMARK___$1,cancelled__$1,meta9663));
});})(cancelled))
;

}

return (new promesa.impl.scheduler.t_promesa$impl$scheduler9662(cur,done_QMARK_,cancelled,cljs.core.PersistentArrayMap.EMPTY));
});
promesa.impl.scheduler.scheduler = (function promesa$impl$scheduler$scheduler(){
if(typeof promesa.impl.scheduler.t_promesa$impl$scheduler9665 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {promesa.protocols.IScheduler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
promesa.impl.scheduler.t_promesa$impl$scheduler9665 = (function (meta9666){
this.meta9666 = meta9666;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
promesa.impl.scheduler.t_promesa$impl$scheduler9665.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9667,meta9666__$1){
var self__ = this;
var _9667__$1 = this;
return (new promesa.impl.scheduler.t_promesa$impl$scheduler9665(meta9666__$1));
});

promesa.impl.scheduler.t_promesa$impl$scheduler9665.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9667){
var self__ = this;
var _9667__$1 = this;
return self__.meta9666;
});

promesa.impl.scheduler.t_promesa$impl$scheduler9665.prototype.promesa$protocols$IScheduler$ = cljs.core.PROTOCOL_SENTINEL;

promesa.impl.scheduler.t_promesa$impl$scheduler9665.prototype.promesa$protocols$IScheduler$_schedule$arity$3 = (function (_,ms,func){
var self__ = this;
var ___$1 = this;
var done_QMARK_ = cljs.core.volatile_BANG_.call(null,false);
var task = ((function (done_QMARK_,___$1){
return (function (){
try{return func.call(null);
}finally {cljs.core.vreset_BANG_.call(null,done_QMARK_,true);
}});})(done_QMARK_,___$1))
;
var cur = setTimeout(task,ms);
return promesa.impl.scheduler.scheduled_task.call(null,cur,done_QMARK_);
});

promesa.impl.scheduler.t_promesa$impl$scheduler9665.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta9666","meta9666",-718869807,null)], null);
});

promesa.impl.scheduler.t_promesa$impl$scheduler9665.cljs$lang$type = true;

promesa.impl.scheduler.t_promesa$impl$scheduler9665.cljs$lang$ctorStr = "promesa.impl.scheduler/t_promesa$impl$scheduler9665";

promesa.impl.scheduler.t_promesa$impl$scheduler9665.cljs$lang$ctorPrWriter = (function (this__8677__auto__,writer__8678__auto__,opt__8679__auto__){
return cljs.core._write.call(null,writer__8678__auto__,"promesa.impl.scheduler/t_promesa$impl$scheduler9665");
});

promesa.impl.scheduler.__GT_t_promesa$impl$scheduler9665 = (function promesa$impl$scheduler$scheduler_$___GT_t_promesa$impl$scheduler9665(meta9666){
return (new promesa.impl.scheduler.t_promesa$impl$scheduler9665(meta9666));
});

}

return (new promesa.impl.scheduler.t_promesa$impl$scheduler9665(cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * A default lazy scheduler instance.
 */
promesa.impl.scheduler._PLUS_scheduler_PLUS_ = (new cljs.core.Delay((function (){
return promesa.impl.scheduler.scheduler.call(null);
}),null));
promesa.impl.scheduler.schedule = (function promesa$impl$scheduler$schedule(ms,func){
return promesa.protocols._schedule.call(null,cljs.core.deref.call(null,promesa.impl.scheduler._PLUS_scheduler_PLUS_),ms,func);
});

//# sourceMappingURL=scheduler.js.map
