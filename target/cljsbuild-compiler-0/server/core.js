// Compiled by ClojureScript 1.9.946 {:target :nodejs}
goog.provide('server.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('cljs.pprint');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('promesa.core');
server.core.node$module$nedb = require('nedb');
server.core.node$module$express = require('express');
server.core.node$module$body_parser = require('body-parser');
server.core.node$module$cors = require('cors');
server.core.node$module$watson_developer_cloud = require('watson-developer-cloud');
server.core.node$module$socket$io = require('socket.io');
cljs.nodejs.enable_util_print_BANG_.call(null);
server.core.log = console.log;
server.core.faketxt = "The quick brown fox jumped over the lazy dog. Little did the fox know the dog was laying a trap for him. As soon as the foxed landed a snap of jaws and this rear leg was mangled";
server.core.db = (new server.core.node$module$nedb((function (){var obj18341 = {"filename":"./dbs/updates","autoload":true};
return obj18341;
})()));
server.core.app = server.core.node$module$express.call(null);
server.core.http = cljs.nodejs.require.call(null,"http");
server.core.server = server.core.http.Server(server.core.app);
server.core.io = server.core.node$module$socket$io.call(null,server.core.server);
server.core.io.on("connection",(function (p1__18342_SHARP_){
return p1__18342_SHARP_.on("word",(function (worddata){
return (function (d){
return cljs.core.println.call(null,d);
}).call(null,(function (d){
return new cljs.core.Keyword(null,"transcript","transcript",-2018154566).cljs$core$IFn$_invoke$arity$1(d);
}).call(null,(function (d){
return cljs.core.first.call(null,d);
}).call(null,(function (d){
return new cljs.core.Keyword(null,"alternatives","alternatives",1927759600).cljs$core$IFn$_invoke$arity$1(d);
}).call(null,(function (d){
return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}).call(null,worddata)))));
}));
}));
server.core.app.use(server.core.node$module$cors.call(null,null));
server.core.app.use(server.core.node$module$body_parser.json(null));
server.core.addUpdate = (function server$core$addUpdate(userstr,start,end){
return promesa.core.promise.call(null,(function (resolve,reject){
return server.core.db.insert((function (){var obj18344 = {"userstr":userstr,"start":start,"end":end};
return obj18344;
})(),(function (err,res){
if(cljs.core.not.call(null,err)){
return resolve.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"err","err",-2089457205),err,new cljs.core.Keyword(null,"res","res",-1395007879),res], null));
} else {
return reject.call(null,err);
}
}));
}));
});
server.core.allUpdates = (function server$core$allUpdates(){
var c = cljs.core.async.chan.call(null);
server.core.db.find({}).sort((function (){var obj18348 = {"start":(-1)};
return obj18348;
})()).exec(((function (c){
return (function (err,res){
return cljs.core.async.put_BANG_.call(null,c,res);
});})(c))
);

return c;
});
server.core.latestUpdate = (function server$core$latestUpdate(){
var c = cljs.core.async.chan.call(null);
server.core.db.find({}).sort((function (){var obj18355 = {"start":(-1)};
return obj18355;
})()).limit((1)).exec(((function (c){
return (function (err,res){
return ((function (c){
return (function (p1__18351_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__18351_SHARP_);
});})(c))
.call(null,((function (c){
return (function (p1__18350_SHARP_){
return cljs.core.js__GT_clj.call(null,p1__18350_SHARP_,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});})(c))
.call(null,((function (c){
return (function (p1__18349_SHARP_){
return cljs.core.first.call(null,p1__18349_SHARP_);
});})(c))
.call(null,res)));
});})(c))
);

return c;
});
server.core.currentWord = (function server$core$currentWord(){
var c = cljs.core.async.chan.call(null);
var c__10985__auto___18375 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10985__auto___18375,c){
return (function (){
var f__10986__auto__ = (function (){var switch__10964__auto__ = ((function (c__10985__auto___18375,c){
return (function (state_18368){
var state_val_18369 = (state_18368[(1)]);
if((state_val_18369 === (1))){
var inst_18358 = (function (){return ((function (state_val_18369,c__10985__auto___18375,c){
return (function (p1__18357_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__18357_SHARP_);
});
;})(state_val_18369,c__10985__auto___18375,c))
})();
var inst_18359 = (function (){return ((function (inst_18358,state_val_18369,c__10985__auto___18375,c){
return (function (index){
var words = clojure.string.split.call(null,server.core.faketxt,/\s/);
return cljs.core.nth.call(null,words,index);
});
;})(inst_18358,state_val_18369,c__10985__auto___18375,c))
})();
var inst_18360 = (function (){return ((function (inst_18358,inst_18359,state_val_18369,c__10985__auto___18375,c){
return (function (p1__18356_SHARP_){
return new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(p1__18356_SHARP_);
});
;})(inst_18358,inst_18359,state_val_18369,c__10985__auto___18375,c))
})();
var inst_18361 = server.core.latestUpdate.call(null);
var state_18368__$1 = (function (){var statearr_18370 = state_18368;
(statearr_18370[(7)] = inst_18358);

(statearr_18370[(8)] = inst_18359);

(statearr_18370[(9)] = inst_18360);

return statearr_18370;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18368__$1,(2),inst_18361);
} else {
if((state_val_18369 === (2))){
var inst_18358 = (state_18368[(7)]);
var inst_18359 = (state_18368[(8)]);
var inst_18360 = (state_18368[(9)]);
var inst_18363 = (state_18368[(2)]);
var inst_18364 = inst_18360.call(null,inst_18363);
var inst_18365 = inst_18359.call(null,inst_18364);
var inst_18366 = inst_18358.call(null,inst_18365);
var state_18368__$1 = state_18368;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18368__$1,inst_18366);
} else {
return null;
}
}
});})(c__10985__auto___18375,c))
;
return ((function (switch__10964__auto__,c__10985__auto___18375,c){
return (function() {
var server$core$currentWord_$_state_machine__10965__auto__ = null;
var server$core$currentWord_$_state_machine__10965__auto____0 = (function (){
var statearr_18371 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18371[(0)] = server$core$currentWord_$_state_machine__10965__auto__);

(statearr_18371[(1)] = (1));

return statearr_18371;
});
var server$core$currentWord_$_state_machine__10965__auto____1 = (function (state_18368){
while(true){
var ret_value__10966__auto__ = (function (){try{while(true){
var result__10967__auto__ = switch__10964__auto__.call(null,state_18368);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10967__auto__;
}
break;
}
}catch (e18372){if((e18372 instanceof Object)){
var ex__10968__auto__ = e18372;
var statearr_18373_18376 = state_18368;
(statearr_18373_18376[(5)] = ex__10968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18368);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18372;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18377 = state_18368;
state_18368 = G__18377;
continue;
} else {
return ret_value__10966__auto__;
}
break;
}
});
server$core$currentWord_$_state_machine__10965__auto__ = function(state_18368){
switch(arguments.length){
case 0:
return server$core$currentWord_$_state_machine__10965__auto____0.call(this);
case 1:
return server$core$currentWord_$_state_machine__10965__auto____1.call(this,state_18368);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
server$core$currentWord_$_state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$0 = server$core$currentWord_$_state_machine__10965__auto____0;
server$core$currentWord_$_state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$1 = server$core$currentWord_$_state_machine__10965__auto____1;
return server$core$currentWord_$_state_machine__10965__auto__;
})()
;})(switch__10964__auto__,c__10985__auto___18375,c))
})();
var state__10987__auto__ = (function (){var statearr_18374 = f__10986__auto__.call(null);
(statearr_18374[(6)] = c__10985__auto___18375);

return statearr_18374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10987__auto__);
});})(c__10985__auto___18375,c))
);


return c;
});
server.core.addQue = cljs.core.async.chan.call(null);
var c__10985__auto___18497 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10985__auto___18497){
return (function (){
var f__10986__auto__ = (function (){var switch__10964__auto__ = ((function (c__10985__auto___18497){
return (function (state_18464){
var state_val_18465 = (state_18464[(1)]);
if((state_val_18465 === (7))){
var inst_18381 = (state_18464[(7)]);
var inst_18381__$1 = (state_18464[(2)]);
var inst_18388 = cljs.core.async.chan.call(null,(1));
var inst_18389 = (function (){var addMap = inst_18381__$1;
var c__10985__auto____$1 = inst_18388;
return ((function (addMap,c__10985__auto____$1,inst_18381,inst_18381__$1,inst_18388,state_val_18465,c__10985__auto___18497){
return (function (){
var f__10986__auto__ = (function (){var switch__10964__auto__ = ((function (addMap,c__10985__auto____$1,inst_18381,inst_18381__$1,inst_18388,state_val_18465,c__10985__auto___18497){
return (function (state_18386){
var state_val_18387 = (state_18386[(1)]);
if((state_val_18387 === (1))){
var inst_18382 = server.core.currentWord.call(null);
var state_18386__$1 = state_18386;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18386__$1,(2),inst_18382);
} else {
if((state_val_18387 === (2))){
var inst_18384 = (state_18386[(2)]);
var state_18386__$1 = state_18386;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18386__$1,inst_18384);
} else {
return null;
}
}
});})(addMap,c__10985__auto____$1,inst_18381,inst_18381__$1,inst_18388,state_val_18465,c__10985__auto___18497))
;
return ((function (switch__10964__auto__,addMap,c__10985__auto____$1,inst_18381,inst_18381__$1,inst_18388,state_val_18465,c__10985__auto___18497){
return (function() {
var server$core$state_machine__10965__auto__ = null;
var server$core$state_machine__10965__auto____0 = (function (){
var statearr_18466 = [null,null,null,null,null,null,null];
(statearr_18466[(0)] = server$core$state_machine__10965__auto__);

(statearr_18466[(1)] = (1));

return statearr_18466;
});
var server$core$state_machine__10965__auto____1 = (function (state_18386){
while(true){
var ret_value__10966__auto__ = (function (){try{while(true){
var result__10967__auto__ = switch__10964__auto__.call(null,state_18386);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10967__auto__;
}
break;
}
}catch (e18467){if((e18467 instanceof Object)){
var ex__10968__auto__ = e18467;
var statearr_18468_18498 = state_18386;
(statearr_18468_18498[(5)] = ex__10968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18386);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18467;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18499 = state_18386;
state_18386 = G__18499;
continue;
} else {
return ret_value__10966__auto__;
}
break;
}
});
server$core$state_machine__10965__auto__ = function(state_18386){
switch(arguments.length){
case 0:
return server$core$state_machine__10965__auto____0.call(this);
case 1:
return server$core$state_machine__10965__auto____1.call(this,state_18386);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$0 = server$core$state_machine__10965__auto____0;
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$1 = server$core$state_machine__10965__auto____1;
return server$core$state_machine__10965__auto__;
})()
;})(switch__10964__auto__,addMap,c__10985__auto____$1,inst_18381,inst_18381__$1,inst_18388,state_val_18465,c__10985__auto___18497))
})();
var state__10987__auto__ = (function (){var statearr_18469 = f__10986__auto__.call(null);
(statearr_18469[(6)] = c__10985__auto____$1);

return statearr_18469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10987__auto__);
});
;})(addMap,c__10985__auto____$1,inst_18381,inst_18381__$1,inst_18388,state_val_18465,c__10985__auto___18497))
})();
var inst_18390 = cljs.core.async.impl.dispatch.run.call(null,inst_18389);
var state_18464__$1 = (function (){var statearr_18470 = state_18464;
(statearr_18470[(7)] = inst_18381__$1);

(statearr_18470[(8)] = inst_18390);

return statearr_18470;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18464__$1,(8),inst_18388);
} else {
if((state_val_18465 === (1))){
var state_18464__$1 = state_18464;
var statearr_18471_18500 = state_18464__$1;
(statearr_18471_18500[(2)] = null);

(statearr_18471_18500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18465 === (4))){
var state_18464__$1 = state_18464;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18464__$1,(7),server.core.addQue);
} else {
if((state_val_18465 === (15))){
var inst_18456 = (state_18464[(2)]);
var state_18464__$1 = (function (){var statearr_18472 = state_18464;
(statearr_18472[(9)] = inst_18456);

return statearr_18472;
})();
var statearr_18473_18501 = state_18464__$1;
(statearr_18473_18501[(2)] = null);

(statearr_18473_18501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18465 === (13))){
var inst_18403 = (state_18464[(10)]);
var inst_18392 = (state_18464[(11)]);
var inst_18381 = (state_18464[(7)]);
var inst_18446 = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(inst_18381);
var inst_18447 = new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(inst_18403);
var inst_18448 = (inst_18447 + (1));
var inst_18449 = new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(inst_18403);
var inst_18450 = (inst_18449 + (2));
var inst_18451 = {"user":inst_18446,"start":inst_18448,"end":inst_18450};
var inst_18452 = (function (){var addMap = inst_18381;
var cword = inst_18392;
var lupdate = inst_18403;
return ((function (addMap,cword,lupdate,inst_18403,inst_18392,inst_18381,inst_18446,inst_18447,inst_18448,inst_18449,inst_18450,inst_18451,state_val_18465,c__10985__auto___18497){
return (function (err,res){
return cljs.core.println.call(null,"Inserted Update");
});
;})(addMap,cword,lupdate,inst_18403,inst_18392,inst_18381,inst_18446,inst_18447,inst_18448,inst_18449,inst_18450,inst_18451,state_val_18465,c__10985__auto___18497))
})();
var inst_18453 = server.core.db.insert(inst_18451,inst_18452);
var state_18464__$1 = state_18464;
var statearr_18474_18502 = state_18464__$1;
(statearr_18474_18502[(2)] = inst_18453);

(statearr_18474_18502[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18465 === (6))){
var inst_18460 = (state_18464[(2)]);
var state_18464__$1 = state_18464;
var statearr_18475_18503 = state_18464__$1;
(statearr_18475_18503[(2)] = inst_18460);

(statearr_18475_18503[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18465 === (3))){
var inst_18462 = (state_18464[(2)]);
var state_18464__$1 = state_18464;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18464__$1,inst_18462);
} else {
if((state_val_18465 === (12))){
var inst_18403 = (state_18464[(10)]);
var inst_18392 = (state_18464[(11)]);
var inst_18381 = (state_18464[(7)]);
var inst_18436 = (state_18464[(2)]);
var inst_18437 = new cljs.core.Keyword(null,"word","word",-420123725).cljs$core$IFn$_invoke$arity$1(inst_18381);
var inst_18438 = cljs.core._EQ_.call(null,inst_18392,inst_18437);
var inst_18439 = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(inst_18381);
var inst_18440 = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(inst_18403);
var inst_18441 = cljs.core.not_EQ_.call(null,inst_18439,inst_18440);
var inst_18442 = (inst_18438) && (inst_18441);
var state_18464__$1 = (function (){var statearr_18476 = state_18464;
(statearr_18476[(12)] = inst_18436);

return statearr_18476;
})();
if(cljs.core.truth_(inst_18442)){
var statearr_18477_18504 = state_18464__$1;
(statearr_18477_18504[(1)] = (13));

} else {
var statearr_18478_18505 = state_18464__$1;
(statearr_18478_18505[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18465 === (2))){
var state_18464__$1 = state_18464;
var statearr_18479_18506 = state_18464__$1;
(statearr_18479_18506[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18465 === (11))){
var state_18464__$1 = state_18464;
var statearr_18481_18507 = state_18464__$1;
(statearr_18481_18507[(2)] = null);

(statearr_18481_18507[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18465 === (9))){
var inst_18403 = (state_18464[(10)]);
var inst_18392 = (state_18464[(11)]);
var inst_18381 = (state_18464[(7)]);
var inst_18403__$1 = (state_18464[(2)]);
var inst_18404 = [new cljs.core.Keyword(null,"word","word",-420123725),new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"cword","cword",-1508063004),new cljs.core.Keyword(null,"lupdate","lupdate",17002411)];
var inst_18405 = new cljs.core.Keyword(null,"word","word",-420123725).cljs$core$IFn$_invoke$arity$1(inst_18381);
var inst_18406 = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(inst_18381);
var inst_18407 = [inst_18405,inst_18406,inst_18392,inst_18403__$1];
var inst_18408 = cljs.core.PersistentHashMap.fromArrays(inst_18404,inst_18407);
var inst_18409 = cljs.pprint.pprint.call(null,inst_18408);
var inst_18410 = new cljs.core.Keyword(null,"word","word",-420123725).cljs$core$IFn$_invoke$arity$1(inst_18381);
var inst_18411 = cljs.core._EQ_.call(null,inst_18392,inst_18410);
var inst_18412 = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(inst_18381);
var inst_18413 = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(inst_18403__$1);
var inst_18414 = cljs.core._EQ_.call(null,inst_18412,inst_18413);
var inst_18415 = (inst_18411) && (inst_18414);
var state_18464__$1 = (function (){var statearr_18482 = state_18464;
(statearr_18482[(10)] = inst_18403__$1);

(statearr_18482[(13)] = inst_18409);

return statearr_18482;
})();
if(cljs.core.truth_(inst_18415)){
var statearr_18483_18508 = state_18464__$1;
(statearr_18483_18508[(1)] = (10));

} else {
var statearr_18484_18509 = state_18464__$1;
(statearr_18484_18509[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18465 === (5))){
var state_18464__$1 = state_18464;
var statearr_18485_18510 = state_18464__$1;
(statearr_18485_18510[(2)] = null);

(statearr_18485_18510[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18465 === (14))){
var state_18464__$1 = state_18464;
var statearr_18486_18511 = state_18464__$1;
(statearr_18486_18511[(2)] = null);

(statearr_18486_18511[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18465 === (10))){
var inst_18403 = (state_18464[(10)]);
var inst_18392 = (state_18464[(11)]);
var inst_18381 = (state_18464[(7)]);
var inst_18419 = new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(inst_18403);
var inst_18420 = {"_id":inst_18419};
var inst_18425 = new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(inst_18403);
var inst_18426 = (inst_18425 + (1));
var inst_18427 = {"end":inst_18426};
var inst_18428 = {"$set":inst_18427};
var inst_18431 = {"multi":true};
var inst_18432 = (function (){var addMap = inst_18381;
var cword = inst_18392;
var lupdate = inst_18403;
return ((function (addMap,cword,lupdate,inst_18403,inst_18392,inst_18381,inst_18419,inst_18420,inst_18425,inst_18426,inst_18427,inst_18428,inst_18431,state_val_18465,c__10985__auto___18497){
return (function (err,res){
return cljs.core.println.call(null,"Updated Last update");
});
;})(addMap,cword,lupdate,inst_18403,inst_18392,inst_18381,inst_18419,inst_18420,inst_18425,inst_18426,inst_18427,inst_18428,inst_18431,state_val_18465,c__10985__auto___18497))
})();
var inst_18433 = server.core.db.update(inst_18420,inst_18428,inst_18431,inst_18432);
var state_18464__$1 = state_18464;
var statearr_18487_18512 = state_18464__$1;
(statearr_18487_18512[(2)] = inst_18433);

(statearr_18487_18512[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18465 === (8))){
var inst_18392 = (state_18464[(11)]);
var inst_18381 = (state_18464[(7)]);
var inst_18392__$1 = (state_18464[(2)]);
var inst_18399 = cljs.core.async.chan.call(null,(1));
var inst_18400 = (function (){var addMap = inst_18381;
var cword = inst_18392__$1;
var c__10985__auto____$1 = inst_18399;
return ((function (addMap,cword,c__10985__auto____$1,inst_18392,inst_18381,inst_18392__$1,inst_18399,state_val_18465,c__10985__auto___18497){
return (function (){
var f__10986__auto__ = (function (){var switch__10964__auto__ = ((function (addMap,cword,c__10985__auto____$1,inst_18392,inst_18381,inst_18392__$1,inst_18399,state_val_18465,c__10985__auto___18497){
return (function (state_18397){
var state_val_18398 = (state_18397[(1)]);
if((state_val_18398 === (1))){
var inst_18393 = server.core.latestUpdate.call(null);
var state_18397__$1 = state_18397;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18397__$1,(2),inst_18393);
} else {
if((state_val_18398 === (2))){
var inst_18395 = (state_18397[(2)]);
var state_18397__$1 = state_18397;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18397__$1,inst_18395);
} else {
return null;
}
}
});})(addMap,cword,c__10985__auto____$1,inst_18392,inst_18381,inst_18392__$1,inst_18399,state_val_18465,c__10985__auto___18497))
;
return ((function (switch__10964__auto__,addMap,cword,c__10985__auto____$1,inst_18392,inst_18381,inst_18392__$1,inst_18399,state_val_18465,c__10985__auto___18497){
return (function() {
var server$core$state_machine__10965__auto__ = null;
var server$core$state_machine__10965__auto____0 = (function (){
var statearr_18488 = [null,null,null,null,null,null,null];
(statearr_18488[(0)] = server$core$state_machine__10965__auto__);

(statearr_18488[(1)] = (1));

return statearr_18488;
});
var server$core$state_machine__10965__auto____1 = (function (state_18397){
while(true){
var ret_value__10966__auto__ = (function (){try{while(true){
var result__10967__auto__ = switch__10964__auto__.call(null,state_18397);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10967__auto__;
}
break;
}
}catch (e18489){if((e18489 instanceof Object)){
var ex__10968__auto__ = e18489;
var statearr_18490_18513 = state_18397;
(statearr_18490_18513[(5)] = ex__10968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18397);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18489;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18514 = state_18397;
state_18397 = G__18514;
continue;
} else {
return ret_value__10966__auto__;
}
break;
}
});
server$core$state_machine__10965__auto__ = function(state_18397){
switch(arguments.length){
case 0:
return server$core$state_machine__10965__auto____0.call(this);
case 1:
return server$core$state_machine__10965__auto____1.call(this,state_18397);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$0 = server$core$state_machine__10965__auto____0;
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$1 = server$core$state_machine__10965__auto____1;
return server$core$state_machine__10965__auto__;
})()
;})(switch__10964__auto__,addMap,cword,c__10985__auto____$1,inst_18392,inst_18381,inst_18392__$1,inst_18399,state_val_18465,c__10985__auto___18497))
})();
var state__10987__auto__ = (function (){var statearr_18491 = f__10986__auto__.call(null);
(statearr_18491[(6)] = c__10985__auto____$1);

return statearr_18491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10987__auto__);
});
;})(addMap,cword,c__10985__auto____$1,inst_18392,inst_18381,inst_18392__$1,inst_18399,state_val_18465,c__10985__auto___18497))
})();
var inst_18401 = cljs.core.async.impl.dispatch.run.call(null,inst_18400);
var state_18464__$1 = (function (){var statearr_18492 = state_18464;
(statearr_18492[(14)] = inst_18401);

(statearr_18492[(11)] = inst_18392__$1);

return statearr_18492;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18464__$1,(9),inst_18399);
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
});})(c__10985__auto___18497))
;
return ((function (switch__10964__auto__,c__10985__auto___18497){
return (function() {
var server$core$state_machine__10965__auto__ = null;
var server$core$state_machine__10965__auto____0 = (function (){
var statearr_18493 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18493[(0)] = server$core$state_machine__10965__auto__);

(statearr_18493[(1)] = (1));

return statearr_18493;
});
var server$core$state_machine__10965__auto____1 = (function (state_18464){
while(true){
var ret_value__10966__auto__ = (function (){try{while(true){
var result__10967__auto__ = switch__10964__auto__.call(null,state_18464);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10967__auto__;
}
break;
}
}catch (e18494){if((e18494 instanceof Object)){
var ex__10968__auto__ = e18494;
var statearr_18495_18515 = state_18464;
(statearr_18495_18515[(5)] = ex__10968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18464);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18494;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18516 = state_18464;
state_18464 = G__18516;
continue;
} else {
return ret_value__10966__auto__;
}
break;
}
});
server$core$state_machine__10965__auto__ = function(state_18464){
switch(arguments.length){
case 0:
return server$core$state_machine__10965__auto____0.call(this);
case 1:
return server$core$state_machine__10965__auto____1.call(this,state_18464);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$0 = server$core$state_machine__10965__auto____0;
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$1 = server$core$state_machine__10965__auto____1;
return server$core$state_machine__10965__auto__;
})()
;})(switch__10964__auto__,c__10985__auto___18497))
})();
var state__10987__auto__ = (function (){var statearr_18496 = f__10986__auto__.call(null);
(statearr_18496[(6)] = c__10985__auto___18497);

return statearr_18496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10987__auto__);
});})(c__10985__auto___18497))
);

server.core.app.post("/addword",(function (req,res){
var bits = clojure.string.split.call(null,req.body.str,/\s/);
var user = req.body.user;
var c__10985__auto___18533 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10985__auto___18533,bits,user){
return (function (){
var f__10986__auto__ = (function (){var switch__10964__auto__ = ((function (c__10985__auto___18533,bits,user){
return (function (state_18526){
var state_val_18527 = (state_18526[(1)]);
if((state_val_18527 === (1))){
var inst_18518 = [new cljs.core.Keyword(null,"cword","cword",-1508063004)];
var inst_18519 = server.core.currentWord.call(null);
var state_18526__$1 = (function (){var statearr_18528 = state_18526;
(statearr_18528[(7)] = inst_18518);

return statearr_18528;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18526__$1,(2),inst_18519);
} else {
if((state_val_18527 === (2))){
var inst_18518 = (state_18526[(7)]);
var inst_18521 = (state_18526[(2)]);
var inst_18522 = [inst_18521];
var inst_18523 = cljs.core.PersistentHashMap.fromArrays(inst_18518,inst_18522);
var inst_18524 = cljs.pprint.pprint.call(null,inst_18523);
var state_18526__$1 = state_18526;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18526__$1,inst_18524);
} else {
return null;
}
}
});})(c__10985__auto___18533,bits,user))
;
return ((function (switch__10964__auto__,c__10985__auto___18533,bits,user){
return (function() {
var server$core$state_machine__10965__auto__ = null;
var server$core$state_machine__10965__auto____0 = (function (){
var statearr_18529 = [null,null,null,null,null,null,null,null];
(statearr_18529[(0)] = server$core$state_machine__10965__auto__);

(statearr_18529[(1)] = (1));

return statearr_18529;
});
var server$core$state_machine__10965__auto____1 = (function (state_18526){
while(true){
var ret_value__10966__auto__ = (function (){try{while(true){
var result__10967__auto__ = switch__10964__auto__.call(null,state_18526);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10967__auto__;
}
break;
}
}catch (e18530){if((e18530 instanceof Object)){
var ex__10968__auto__ = e18530;
var statearr_18531_18534 = state_18526;
(statearr_18531_18534[(5)] = ex__10968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18526);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18530;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18535 = state_18526;
state_18526 = G__18535;
continue;
} else {
return ret_value__10966__auto__;
}
break;
}
});
server$core$state_machine__10965__auto__ = function(state_18526){
switch(arguments.length){
case 0:
return server$core$state_machine__10965__auto____0.call(this);
case 1:
return server$core$state_machine__10965__auto____1.call(this,state_18526);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$0 = server$core$state_machine__10965__auto____0;
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$1 = server$core$state_machine__10965__auto____1;
return server$core$state_machine__10965__auto__;
})()
;})(switch__10964__auto__,c__10985__auto___18533,bits,user))
})();
var state__10987__auto__ = (function (){var statearr_18532 = f__10986__auto__.call(null);
(statearr_18532[(6)] = c__10985__auto___18533);

return statearr_18532;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10987__auto__);
});})(c__10985__auto___18533,bits,user))
);


cljs.core.doall.call(null,cljs.core.map.call(null,((function (bits,user){
return (function (p1__18517_SHARP_){
return cljs.core.async.put_BANG_.call(null,server.core.addQue,p1__18517_SHARP_);
});})(bits,user))
,bits));

cljs.pprint.pprint.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bits","bits",-1206785969),bits,new cljs.core.Keyword(null,"user","user",1532431356),user], null));

return res.json(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),(200)], null)));
}));
server.core.app.get("/getallupdates",(function (req,res){
cljs.core.println.call(null,"GET: /getallupdates");

var c__10985__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10985__auto__){
return (function (){
var f__10986__auto__ = (function (){var switch__10964__auto__ = ((function (c__10985__auto__){
return (function (state_18542){
var state_val_18543 = (state_18542[(1)]);
if((state_val_18543 === (1))){
var inst_18536 = server.core.allUpdates.call(null);
var state_18542__$1 = state_18542;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18542__$1,(2),inst_18536);
} else {
if((state_val_18543 === (2))){
var inst_18538 = (state_18542[(2)]);
var inst_18539 = cljs.core.clj__GT_js.call(null,inst_18538);
var inst_18540 = res.json(inst_18539);
var state_18542__$1 = state_18542;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18542__$1,inst_18540);
} else {
return null;
}
}
});})(c__10985__auto__))
;
return ((function (switch__10964__auto__,c__10985__auto__){
return (function() {
var server$core$state_machine__10965__auto__ = null;
var server$core$state_machine__10965__auto____0 = (function (){
var statearr_18544 = [null,null,null,null,null,null,null];
(statearr_18544[(0)] = server$core$state_machine__10965__auto__);

(statearr_18544[(1)] = (1));

return statearr_18544;
});
var server$core$state_machine__10965__auto____1 = (function (state_18542){
while(true){
var ret_value__10966__auto__ = (function (){try{while(true){
var result__10967__auto__ = switch__10964__auto__.call(null,state_18542);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10967__auto__;
}
break;
}
}catch (e18545){if((e18545 instanceof Object)){
var ex__10968__auto__ = e18545;
var statearr_18546_18548 = state_18542;
(statearr_18546_18548[(5)] = ex__10968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18542);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18545;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18549 = state_18542;
state_18542 = G__18549;
continue;
} else {
return ret_value__10966__auto__;
}
break;
}
});
server$core$state_machine__10965__auto__ = function(state_18542){
switch(arguments.length){
case 0:
return server$core$state_machine__10965__auto____0.call(this);
case 1:
return server$core$state_machine__10965__auto____1.call(this,state_18542);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$0 = server$core$state_machine__10965__auto____0;
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$1 = server$core$state_machine__10965__auto____1;
return server$core$state_machine__10965__auto__;
})()
;})(switch__10964__auto__,c__10985__auto__))
})();
var state__10987__auto__ = (function (){var statearr_18547 = f__10986__auto__.call(null);
(statearr_18547[(6)] = c__10985__auto__);

return statearr_18547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10987__auto__);
});})(c__10985__auto__))
);

return c__10985__auto__;
}));
server.core.sttAuthService = (new server.core.node$module$watson_developer_cloud.AuthorizationV1((function (){var obj18551 = {"username":"1b860fd3-bf11-4cc6-a962-5bac776d5744","password":"LZ2TNegMz6NX"};
return obj18551;
})()));
server.core.app.use("/api/speech-to-text/token",(function (req,res){
return server.core.sttAuthService.getToken((function (){var obj18553 = {"url":server.core.node$module$watson_developer_cloud.SpeechToTextV1.URL};
return obj18553;
})(),(function (err,token){
return res.send(token);
}));
}));
server.core._main = (function server$core$_main(var_args){
var args__9230__auto__ = [];
var len__9223__auto___18555 = arguments.length;
var i__9224__auto___18556 = (0);
while(true){
if((i__9224__auto___18556 < len__9223__auto___18555)){
args__9230__auto__.push((arguments[i__9224__auto___18556]));

var G__18557 = (i__9224__auto___18556 + (1));
i__9224__auto___18556 = G__18557;
continue;
} else {
}
break;
}

var argseq__9231__auto__ = ((((0) < args__9230__auto__.length))?(new cljs.core.IndexedSeq(args__9230__auto__.slice((0)),(0),null)):null);
return server.core._main.cljs$core$IFn$_invoke$arity$variadic(argseq__9231__auto__);
});

server.core._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return server.core.server.listen(parseInt((process.env["PORT"])));
});

server.core._main.cljs$lang$maxFixedArity = (0);

server.core._main.cljs$lang$applyTo = (function (seq18554){
return server.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18554));
});

cljs.core._STAR_main_cli_fn_STAR_ = server.core._main;

//# sourceMappingURL=core.js.map
