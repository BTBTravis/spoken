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
server.core.db = (new server.core.node$module$nedb((function (){var obj18345 = {"filename":"./dbs/updates","autoload":true};
return obj18345;
})()));
server.core.app = server.core.node$module$express.call(null);
server.core.http = cljs.nodejs.require.call(null,"http");
server.core.server = server.core.http.Server(server.core.app);
server.core.io = server.core.node$module$socket$io.call(null,server.core.server);
server.core.io.on("connection",(function (p1__18346_SHARP_){
return p1__18346_SHARP_.on("word",(function (worddata){
return (function (d){
var bits = clojure.string.split.call(null,d,/\s/);
var user = "travis";
var c__10985__auto___18362 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10985__auto___18362,bits,user){
return (function (){
var f__10986__auto__ = (function (){var switch__10964__auto__ = ((function (c__10985__auto___18362,bits,user){
return (function (state_18355){
var state_val_18356 = (state_18355[(1)]);
if((state_val_18356 === (1))){
var inst_18347 = [new cljs.core.Keyword(null,"cword","cword",-1508063004)];
var inst_18348 = server.core.currentWord.call(null);
var state_18355__$1 = (function (){var statearr_18357 = state_18355;
(statearr_18357[(7)] = inst_18347);

return statearr_18357;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18355__$1,(2),inst_18348);
} else {
if((state_val_18356 === (2))){
var inst_18347 = (state_18355[(7)]);
var inst_18350 = (state_18355[(2)]);
var inst_18351 = [inst_18350];
var inst_18352 = cljs.core.PersistentHashMap.fromArrays(inst_18347,inst_18351);
var inst_18353 = cljs.pprint.pprint.call(null,inst_18352);
var state_18355__$1 = state_18355;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18355__$1,inst_18353);
} else {
return null;
}
}
});})(c__10985__auto___18362,bits,user))
;
return ((function (switch__10964__auto__,c__10985__auto___18362,bits,user){
return (function() {
var server$core$state_machine__10965__auto__ = null;
var server$core$state_machine__10965__auto____0 = (function (){
var statearr_18358 = [null,null,null,null,null,null,null,null];
(statearr_18358[(0)] = server$core$state_machine__10965__auto__);

(statearr_18358[(1)] = (1));

return statearr_18358;
});
var server$core$state_machine__10965__auto____1 = (function (state_18355){
while(true){
var ret_value__10966__auto__ = (function (){try{while(true){
var result__10967__auto__ = switch__10964__auto__.call(null,state_18355);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10967__auto__;
}
break;
}
}catch (e18359){if((e18359 instanceof Object)){
var ex__10968__auto__ = e18359;
var statearr_18360_18363 = state_18355;
(statearr_18360_18363[(5)] = ex__10968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18355);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18359;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18364 = state_18355;
state_18355 = G__18364;
continue;
} else {
return ret_value__10966__auto__;
}
break;
}
});
server$core$state_machine__10965__auto__ = function(state_18355){
switch(arguments.length){
case 0:
return server$core$state_machine__10965__auto____0.call(this);
case 1:
return server$core$state_machine__10965__auto____1.call(this,state_18355);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$0 = server$core$state_machine__10965__auto____0;
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$1 = server$core$state_machine__10965__auto____1;
return server$core$state_machine__10965__auto__;
})()
;})(switch__10964__auto__,c__10985__auto___18362,bits,user))
})();
var state__10987__auto__ = (function (){var statearr_18361 = f__10986__auto__.call(null);
(statearr_18361[(6)] = c__10985__auto___18362);

return statearr_18361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10987__auto__);
});})(c__10985__auto___18362,bits,user))
);


cljs.pprint.pprint.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bits","bits",-1206785969),bits,new cljs.core.Keyword(null,"user","user",1532431356),user], null));

return cljs.core.doall.call(null,cljs.core.map.call(null,((function (bits,user){
return (function (x){
return cljs.core.async.put_BANG_.call(null,server.core.addQue,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"word","word",-420123725),x,new cljs.core.Keyword(null,"user","user",1532431356),user], null));
});})(bits,user))
,bits));
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
server.core.allUpdates = (function server$core$allUpdates(){
var c = cljs.core.async.chan.call(null);
server.core.db.find({}).sort((function (){var obj18368 = {"start":(-1)};
return obj18368;
})()).exec(((function (c){
return (function (err,res){
return cljs.core.async.put_BANG_.call(null,c,res);
});})(c))
);

return c;
});
server.core.latestUpdate = (function server$core$latestUpdate(){
var c = cljs.core.async.chan.call(null);
server.core.db.find({}).sort((function (){var obj18375 = {"start":(-1)};
return obj18375;
})()).limit((1)).exec(((function (c){
return (function (err,res){
return ((function (c){
return (function (p1__18371_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__18371_SHARP_);
});})(c))
.call(null,((function (c){
return (function (p1__18370_SHARP_){
return cljs.core.js__GT_clj.call(null,p1__18370_SHARP_,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});})(c))
.call(null,((function (c){
return (function (p1__18369_SHARP_){
return cljs.core.first.call(null,p1__18369_SHARP_);
});})(c))
.call(null,res)));
});})(c))
);

return c;
});
server.core.currentWord = (function server$core$currentWord(){
var c = cljs.core.async.chan.call(null);
var c__10985__auto___18395 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10985__auto___18395,c){
return (function (){
var f__10986__auto__ = (function (){var switch__10964__auto__ = ((function (c__10985__auto___18395,c){
return (function (state_18388){
var state_val_18389 = (state_18388[(1)]);
if((state_val_18389 === (1))){
var inst_18378 = (function (){return ((function (state_val_18389,c__10985__auto___18395,c){
return (function (p1__18377_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__18377_SHARP_);
});
;})(state_val_18389,c__10985__auto___18395,c))
})();
var inst_18379 = (function (){return ((function (inst_18378,state_val_18389,c__10985__auto___18395,c){
return (function (index){
var words = clojure.string.split.call(null,server.core.faketxt,/\s/);
return cljs.core.nth.call(null,words,index);
});
;})(inst_18378,state_val_18389,c__10985__auto___18395,c))
})();
var inst_18380 = (function (){return ((function (inst_18378,inst_18379,state_val_18389,c__10985__auto___18395,c){
return (function (p1__18376_SHARP_){
return new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(p1__18376_SHARP_);
});
;})(inst_18378,inst_18379,state_val_18389,c__10985__auto___18395,c))
})();
var inst_18381 = server.core.latestUpdate.call(null);
var state_18388__$1 = (function (){var statearr_18390 = state_18388;
(statearr_18390[(7)] = inst_18380);

(statearr_18390[(8)] = inst_18379);

(statearr_18390[(9)] = inst_18378);

return statearr_18390;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18388__$1,(2),inst_18381);
} else {
if((state_val_18389 === (2))){
var inst_18380 = (state_18388[(7)]);
var inst_18379 = (state_18388[(8)]);
var inst_18378 = (state_18388[(9)]);
var inst_18383 = (state_18388[(2)]);
var inst_18384 = inst_18380.call(null,inst_18383);
var inst_18385 = inst_18379.call(null,inst_18384);
var inst_18386 = inst_18378.call(null,inst_18385);
var state_18388__$1 = state_18388;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18388__$1,inst_18386);
} else {
return null;
}
}
});})(c__10985__auto___18395,c))
;
return ((function (switch__10964__auto__,c__10985__auto___18395,c){
return (function() {
var server$core$currentWord_$_state_machine__10965__auto__ = null;
var server$core$currentWord_$_state_machine__10965__auto____0 = (function (){
var statearr_18391 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18391[(0)] = server$core$currentWord_$_state_machine__10965__auto__);

(statearr_18391[(1)] = (1));

return statearr_18391;
});
var server$core$currentWord_$_state_machine__10965__auto____1 = (function (state_18388){
while(true){
var ret_value__10966__auto__ = (function (){try{while(true){
var result__10967__auto__ = switch__10964__auto__.call(null,state_18388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10967__auto__;
}
break;
}
}catch (e18392){if((e18392 instanceof Object)){
var ex__10968__auto__ = e18392;
var statearr_18393_18396 = state_18388;
(statearr_18393_18396[(5)] = ex__10968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18392;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18397 = state_18388;
state_18388 = G__18397;
continue;
} else {
return ret_value__10966__auto__;
}
break;
}
});
server$core$currentWord_$_state_machine__10965__auto__ = function(state_18388){
switch(arguments.length){
case 0:
return server$core$currentWord_$_state_machine__10965__auto____0.call(this);
case 1:
return server$core$currentWord_$_state_machine__10965__auto____1.call(this,state_18388);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
server$core$currentWord_$_state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$0 = server$core$currentWord_$_state_machine__10965__auto____0;
server$core$currentWord_$_state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$1 = server$core$currentWord_$_state_machine__10965__auto____1;
return server$core$currentWord_$_state_machine__10965__auto__;
})()
;})(switch__10964__auto__,c__10985__auto___18395,c))
})();
var state__10987__auto__ = (function (){var statearr_18394 = f__10986__auto__.call(null);
(statearr_18394[(6)] = c__10985__auto___18395);

return statearr_18394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10987__auto__);
});})(c__10985__auto___18395,c))
);


return c;
});
var c__10985__auto___18409 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10985__auto___18409){
return (function (){
var f__10986__auto__ = (function (){var switch__10964__auto__ = ((function (c__10985__auto___18409){
return (function (state_18403){
var state_val_18404 = (state_18403[(1)]);
if((state_val_18404 === (1))){
var inst_18398 = server.core.currentWord.call(null);
var state_18403__$1 = state_18403;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18403__$1,(2),inst_18398);
} else {
if((state_val_18404 === (2))){
var inst_18400 = (state_18403[(2)]);
var inst_18401 = cljs.pprint.pprint.call(null,inst_18400);
var state_18403__$1 = state_18403;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18403__$1,inst_18401);
} else {
return null;
}
}
});})(c__10985__auto___18409))
;
return ((function (switch__10964__auto__,c__10985__auto___18409){
return (function() {
var server$core$state_machine__10965__auto__ = null;
var server$core$state_machine__10965__auto____0 = (function (){
var statearr_18405 = [null,null,null,null,null,null,null];
(statearr_18405[(0)] = server$core$state_machine__10965__auto__);

(statearr_18405[(1)] = (1));

return statearr_18405;
});
var server$core$state_machine__10965__auto____1 = (function (state_18403){
while(true){
var ret_value__10966__auto__ = (function (){try{while(true){
var result__10967__auto__ = switch__10964__auto__.call(null,state_18403);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10967__auto__;
}
break;
}
}catch (e18406){if((e18406 instanceof Object)){
var ex__10968__auto__ = e18406;
var statearr_18407_18410 = state_18403;
(statearr_18407_18410[(5)] = ex__10968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18403);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18406;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18411 = state_18403;
state_18403 = G__18411;
continue;
} else {
return ret_value__10966__auto__;
}
break;
}
});
server$core$state_machine__10965__auto__ = function(state_18403){
switch(arguments.length){
case 0:
return server$core$state_machine__10965__auto____0.call(this);
case 1:
return server$core$state_machine__10965__auto____1.call(this,state_18403);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$0 = server$core$state_machine__10965__auto____0;
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$1 = server$core$state_machine__10965__auto____1;
return server$core$state_machine__10965__auto__;
})()
;})(switch__10964__auto__,c__10985__auto___18409))
})();
var state__10987__auto__ = (function (){var statearr_18408 = f__10986__auto__.call(null);
(statearr_18408[(6)] = c__10985__auto___18409);

return statearr_18408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10987__auto__);
});})(c__10985__auto___18409))
);

server.core.addQue = cljs.core.async.chan.call(null);
var c__10985__auto___18531 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10985__auto___18531){
return (function (){
var f__10986__auto__ = (function (){var switch__10964__auto__ = ((function (c__10985__auto___18531){
return (function (state_18498){
var state_val_18499 = (state_18498[(1)]);
if((state_val_18499 === (7))){
var inst_18415 = (state_18498[(7)]);
var inst_18415__$1 = (state_18498[(2)]);
var inst_18422 = cljs.core.async.chan.call(null,(1));
var inst_18423 = (function (){var addMap = inst_18415__$1;
var c__10985__auto____$1 = inst_18422;
return ((function (addMap,c__10985__auto____$1,inst_18415,inst_18415__$1,inst_18422,state_val_18499,c__10985__auto___18531){
return (function (){
var f__10986__auto__ = (function (){var switch__10964__auto__ = ((function (addMap,c__10985__auto____$1,inst_18415,inst_18415__$1,inst_18422,state_val_18499,c__10985__auto___18531){
return (function (state_18420){
var state_val_18421 = (state_18420[(1)]);
if((state_val_18421 === (1))){
var inst_18416 = server.core.currentWord.call(null);
var state_18420__$1 = state_18420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18420__$1,(2),inst_18416);
} else {
if((state_val_18421 === (2))){
var inst_18418 = (state_18420[(2)]);
var state_18420__$1 = state_18420;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18420__$1,inst_18418);
} else {
return null;
}
}
});})(addMap,c__10985__auto____$1,inst_18415,inst_18415__$1,inst_18422,state_val_18499,c__10985__auto___18531))
;
return ((function (switch__10964__auto__,addMap,c__10985__auto____$1,inst_18415,inst_18415__$1,inst_18422,state_val_18499,c__10985__auto___18531){
return (function() {
var server$core$state_machine__10965__auto__ = null;
var server$core$state_machine__10965__auto____0 = (function (){
var statearr_18500 = [null,null,null,null,null,null,null];
(statearr_18500[(0)] = server$core$state_machine__10965__auto__);

(statearr_18500[(1)] = (1));

return statearr_18500;
});
var server$core$state_machine__10965__auto____1 = (function (state_18420){
while(true){
var ret_value__10966__auto__ = (function (){try{while(true){
var result__10967__auto__ = switch__10964__auto__.call(null,state_18420);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10967__auto__;
}
break;
}
}catch (e18501){if((e18501 instanceof Object)){
var ex__10968__auto__ = e18501;
var statearr_18502_18532 = state_18420;
(statearr_18502_18532[(5)] = ex__10968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18501;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18533 = state_18420;
state_18420 = G__18533;
continue;
} else {
return ret_value__10966__auto__;
}
break;
}
});
server$core$state_machine__10965__auto__ = function(state_18420){
switch(arguments.length){
case 0:
return server$core$state_machine__10965__auto____0.call(this);
case 1:
return server$core$state_machine__10965__auto____1.call(this,state_18420);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$0 = server$core$state_machine__10965__auto____0;
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$1 = server$core$state_machine__10965__auto____1;
return server$core$state_machine__10965__auto__;
})()
;})(switch__10964__auto__,addMap,c__10985__auto____$1,inst_18415,inst_18415__$1,inst_18422,state_val_18499,c__10985__auto___18531))
})();
var state__10987__auto__ = (function (){var statearr_18503 = f__10986__auto__.call(null);
(statearr_18503[(6)] = c__10985__auto____$1);

return statearr_18503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10987__auto__);
});
;})(addMap,c__10985__auto____$1,inst_18415,inst_18415__$1,inst_18422,state_val_18499,c__10985__auto___18531))
})();
var inst_18424 = cljs.core.async.impl.dispatch.run.call(null,inst_18423);
var state_18498__$1 = (function (){var statearr_18504 = state_18498;
(statearr_18504[(8)] = inst_18424);

(statearr_18504[(7)] = inst_18415__$1);

return statearr_18504;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18498__$1,(8),inst_18422);
} else {
if((state_val_18499 === (1))){
var state_18498__$1 = state_18498;
var statearr_18505_18534 = state_18498__$1;
(statearr_18505_18534[(2)] = null);

(statearr_18505_18534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18499 === (4))){
var state_18498__$1 = state_18498;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18498__$1,(7),server.core.addQue);
} else {
if((state_val_18499 === (15))){
var inst_18490 = (state_18498[(2)]);
var state_18498__$1 = (function (){var statearr_18506 = state_18498;
(statearr_18506[(9)] = inst_18490);

return statearr_18506;
})();
var statearr_18507_18535 = state_18498__$1;
(statearr_18507_18535[(2)] = null);

(statearr_18507_18535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18499 === (13))){
var inst_18426 = (state_18498[(10)]);
var inst_18415 = (state_18498[(7)]);
var inst_18437 = (state_18498[(11)]);
var inst_18480 = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(inst_18415);
var inst_18481 = new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(inst_18437);
var inst_18482 = (inst_18481 + (1));
var inst_18483 = new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(inst_18437);
var inst_18484 = (inst_18483 + (2));
var inst_18485 = {"user":inst_18480,"start":inst_18482,"end":inst_18484};
var inst_18486 = (function (){var addMap = inst_18415;
var cword = inst_18426;
var lupdate = inst_18437;
return ((function (addMap,cword,lupdate,inst_18426,inst_18415,inst_18437,inst_18480,inst_18481,inst_18482,inst_18483,inst_18484,inst_18485,state_val_18499,c__10985__auto___18531){
return (function (err,res){
return cljs.core.println.call(null,"Inserted Update");
});
;})(addMap,cword,lupdate,inst_18426,inst_18415,inst_18437,inst_18480,inst_18481,inst_18482,inst_18483,inst_18484,inst_18485,state_val_18499,c__10985__auto___18531))
})();
var inst_18487 = server.core.db.insert(inst_18485,inst_18486);
var state_18498__$1 = state_18498;
var statearr_18508_18536 = state_18498__$1;
(statearr_18508_18536[(2)] = inst_18487);

(statearr_18508_18536[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18499 === (6))){
var inst_18494 = (state_18498[(2)]);
var state_18498__$1 = state_18498;
var statearr_18509_18537 = state_18498__$1;
(statearr_18509_18537[(2)] = inst_18494);

(statearr_18509_18537[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18499 === (3))){
var inst_18496 = (state_18498[(2)]);
var state_18498__$1 = state_18498;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18498__$1,inst_18496);
} else {
if((state_val_18499 === (12))){
var inst_18426 = (state_18498[(10)]);
var inst_18415 = (state_18498[(7)]);
var inst_18437 = (state_18498[(11)]);
var inst_18470 = (state_18498[(2)]);
var inst_18471 = new cljs.core.Keyword(null,"word","word",-420123725).cljs$core$IFn$_invoke$arity$1(inst_18415);
var inst_18472 = cljs.core._EQ_.call(null,inst_18426,inst_18471);
var inst_18473 = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(inst_18415);
var inst_18474 = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(inst_18437);
var inst_18475 = cljs.core.not_EQ_.call(null,inst_18473,inst_18474);
var inst_18476 = (inst_18472) && (inst_18475);
var state_18498__$1 = (function (){var statearr_18510 = state_18498;
(statearr_18510[(12)] = inst_18470);

return statearr_18510;
})();
if(cljs.core.truth_(inst_18476)){
var statearr_18511_18538 = state_18498__$1;
(statearr_18511_18538[(1)] = (13));

} else {
var statearr_18512_18539 = state_18498__$1;
(statearr_18512_18539[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18499 === (2))){
var state_18498__$1 = state_18498;
var statearr_18513_18540 = state_18498__$1;
(statearr_18513_18540[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18499 === (11))){
var state_18498__$1 = state_18498;
var statearr_18515_18541 = state_18498__$1;
(statearr_18515_18541[(2)] = null);

(statearr_18515_18541[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18499 === (9))){
var inst_18426 = (state_18498[(10)]);
var inst_18415 = (state_18498[(7)]);
var inst_18437 = (state_18498[(11)]);
var inst_18437__$1 = (state_18498[(2)]);
var inst_18438 = [new cljs.core.Keyword(null,"word","word",-420123725),new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"cword","cword",-1508063004),new cljs.core.Keyword(null,"lupdate","lupdate",17002411)];
var inst_18439 = new cljs.core.Keyword(null,"word","word",-420123725).cljs$core$IFn$_invoke$arity$1(inst_18415);
var inst_18440 = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(inst_18415);
var inst_18441 = [inst_18439,inst_18440,inst_18426,inst_18437__$1];
var inst_18442 = cljs.core.PersistentHashMap.fromArrays(inst_18438,inst_18441);
var inst_18443 = cljs.pprint.pprint.call(null,inst_18442);
var inst_18444 = new cljs.core.Keyword(null,"word","word",-420123725).cljs$core$IFn$_invoke$arity$1(inst_18415);
var inst_18445 = cljs.core._EQ_.call(null,inst_18426,inst_18444);
var inst_18446 = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(inst_18415);
var inst_18447 = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(inst_18437__$1);
var inst_18448 = cljs.core._EQ_.call(null,inst_18446,inst_18447);
var inst_18449 = (inst_18445) && (inst_18448);
var state_18498__$1 = (function (){var statearr_18516 = state_18498;
(statearr_18516[(13)] = inst_18443);

(statearr_18516[(11)] = inst_18437__$1);

return statearr_18516;
})();
if(cljs.core.truth_(inst_18449)){
var statearr_18517_18542 = state_18498__$1;
(statearr_18517_18542[(1)] = (10));

} else {
var statearr_18518_18543 = state_18498__$1;
(statearr_18518_18543[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18499 === (5))){
var state_18498__$1 = state_18498;
var statearr_18519_18544 = state_18498__$1;
(statearr_18519_18544[(2)] = null);

(statearr_18519_18544[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18499 === (14))){
var state_18498__$1 = state_18498;
var statearr_18520_18545 = state_18498__$1;
(statearr_18520_18545[(2)] = null);

(statearr_18520_18545[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18499 === (10))){
var inst_18426 = (state_18498[(10)]);
var inst_18415 = (state_18498[(7)]);
var inst_18437 = (state_18498[(11)]);
var inst_18453 = new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(inst_18437);
var inst_18454 = {"_id":inst_18453};
var inst_18459 = new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(inst_18437);
var inst_18460 = (inst_18459 + (1));
var inst_18461 = {"end":inst_18460};
var inst_18462 = {"$set":inst_18461};
var inst_18465 = {"multi":true};
var inst_18466 = (function (){var addMap = inst_18415;
var cword = inst_18426;
var lupdate = inst_18437;
return ((function (addMap,cword,lupdate,inst_18426,inst_18415,inst_18437,inst_18453,inst_18454,inst_18459,inst_18460,inst_18461,inst_18462,inst_18465,state_val_18499,c__10985__auto___18531){
return (function (err,res){
return cljs.core.println.call(null,"Updated Last update");
});
;})(addMap,cword,lupdate,inst_18426,inst_18415,inst_18437,inst_18453,inst_18454,inst_18459,inst_18460,inst_18461,inst_18462,inst_18465,state_val_18499,c__10985__auto___18531))
})();
var inst_18467 = server.core.db.update(inst_18454,inst_18462,inst_18465,inst_18466);
var state_18498__$1 = state_18498;
var statearr_18521_18546 = state_18498__$1;
(statearr_18521_18546[(2)] = inst_18467);

(statearr_18521_18546[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18499 === (8))){
var inst_18426 = (state_18498[(10)]);
var inst_18415 = (state_18498[(7)]);
var inst_18426__$1 = (state_18498[(2)]);
var inst_18433 = cljs.core.async.chan.call(null,(1));
var inst_18434 = (function (){var addMap = inst_18415;
var cword = inst_18426__$1;
var c__10985__auto____$1 = inst_18433;
return ((function (addMap,cword,c__10985__auto____$1,inst_18426,inst_18415,inst_18426__$1,inst_18433,state_val_18499,c__10985__auto___18531){
return (function (){
var f__10986__auto__ = (function (){var switch__10964__auto__ = ((function (addMap,cword,c__10985__auto____$1,inst_18426,inst_18415,inst_18426__$1,inst_18433,state_val_18499,c__10985__auto___18531){
return (function (state_18431){
var state_val_18432 = (state_18431[(1)]);
if((state_val_18432 === (1))){
var inst_18427 = server.core.latestUpdate.call(null);
var state_18431__$1 = state_18431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18431__$1,(2),inst_18427);
} else {
if((state_val_18432 === (2))){
var inst_18429 = (state_18431[(2)]);
var state_18431__$1 = state_18431;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18431__$1,inst_18429);
} else {
return null;
}
}
});})(addMap,cword,c__10985__auto____$1,inst_18426,inst_18415,inst_18426__$1,inst_18433,state_val_18499,c__10985__auto___18531))
;
return ((function (switch__10964__auto__,addMap,cword,c__10985__auto____$1,inst_18426,inst_18415,inst_18426__$1,inst_18433,state_val_18499,c__10985__auto___18531){
return (function() {
var server$core$state_machine__10965__auto__ = null;
var server$core$state_machine__10965__auto____0 = (function (){
var statearr_18522 = [null,null,null,null,null,null,null];
(statearr_18522[(0)] = server$core$state_machine__10965__auto__);

(statearr_18522[(1)] = (1));

return statearr_18522;
});
var server$core$state_machine__10965__auto____1 = (function (state_18431){
while(true){
var ret_value__10966__auto__ = (function (){try{while(true){
var result__10967__auto__ = switch__10964__auto__.call(null,state_18431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10967__auto__;
}
break;
}
}catch (e18523){if((e18523 instanceof Object)){
var ex__10968__auto__ = e18523;
var statearr_18524_18547 = state_18431;
(statearr_18524_18547[(5)] = ex__10968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18523;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18548 = state_18431;
state_18431 = G__18548;
continue;
} else {
return ret_value__10966__auto__;
}
break;
}
});
server$core$state_machine__10965__auto__ = function(state_18431){
switch(arguments.length){
case 0:
return server$core$state_machine__10965__auto____0.call(this);
case 1:
return server$core$state_machine__10965__auto____1.call(this,state_18431);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$0 = server$core$state_machine__10965__auto____0;
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$1 = server$core$state_machine__10965__auto____1;
return server$core$state_machine__10965__auto__;
})()
;})(switch__10964__auto__,addMap,cword,c__10985__auto____$1,inst_18426,inst_18415,inst_18426__$1,inst_18433,state_val_18499,c__10985__auto___18531))
})();
var state__10987__auto__ = (function (){var statearr_18525 = f__10986__auto__.call(null);
(statearr_18525[(6)] = c__10985__auto____$1);

return statearr_18525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10987__auto__);
});
;})(addMap,cword,c__10985__auto____$1,inst_18426,inst_18415,inst_18426__$1,inst_18433,state_val_18499,c__10985__auto___18531))
})();
var inst_18435 = cljs.core.async.impl.dispatch.run.call(null,inst_18434);
var state_18498__$1 = (function (){var statearr_18526 = state_18498;
(statearr_18526[(10)] = inst_18426__$1);

(statearr_18526[(14)] = inst_18435);

return statearr_18526;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18498__$1,(9),inst_18433);
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
});})(c__10985__auto___18531))
;
return ((function (switch__10964__auto__,c__10985__auto___18531){
return (function() {
var server$core$state_machine__10965__auto__ = null;
var server$core$state_machine__10965__auto____0 = (function (){
var statearr_18527 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18527[(0)] = server$core$state_machine__10965__auto__);

(statearr_18527[(1)] = (1));

return statearr_18527;
});
var server$core$state_machine__10965__auto____1 = (function (state_18498){
while(true){
var ret_value__10966__auto__ = (function (){try{while(true){
var result__10967__auto__ = switch__10964__auto__.call(null,state_18498);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10967__auto__;
}
break;
}
}catch (e18528){if((e18528 instanceof Object)){
var ex__10968__auto__ = e18528;
var statearr_18529_18549 = state_18498;
(statearr_18529_18549[(5)] = ex__10968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18528;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18550 = state_18498;
state_18498 = G__18550;
continue;
} else {
return ret_value__10966__auto__;
}
break;
}
});
server$core$state_machine__10965__auto__ = function(state_18498){
switch(arguments.length){
case 0:
return server$core$state_machine__10965__auto____0.call(this);
case 1:
return server$core$state_machine__10965__auto____1.call(this,state_18498);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$0 = server$core$state_machine__10965__auto____0;
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$1 = server$core$state_machine__10965__auto____1;
return server$core$state_machine__10965__auto__;
})()
;})(switch__10964__auto__,c__10985__auto___18531))
})();
var state__10987__auto__ = (function (){var statearr_18530 = f__10986__auto__.call(null);
(statearr_18530[(6)] = c__10985__auto___18531);

return statearr_18530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10987__auto__);
});})(c__10985__auto___18531))
);

server.core.app.post("/addword",(function (req,res){
var bits = clojure.string.split.call(null,req.body.str,/\s/);
var user = req.body.user;
var c__10985__auto___18567 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10985__auto___18567,bits,user){
return (function (){
var f__10986__auto__ = (function (){var switch__10964__auto__ = ((function (c__10985__auto___18567,bits,user){
return (function (state_18560){
var state_val_18561 = (state_18560[(1)]);
if((state_val_18561 === (1))){
var inst_18552 = [new cljs.core.Keyword(null,"cword","cword",-1508063004)];
var inst_18553 = server.core.currentWord.call(null);
var state_18560__$1 = (function (){var statearr_18562 = state_18560;
(statearr_18562[(7)] = inst_18552);

return statearr_18562;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18560__$1,(2),inst_18553);
} else {
if((state_val_18561 === (2))){
var inst_18552 = (state_18560[(7)]);
var inst_18555 = (state_18560[(2)]);
var inst_18556 = [inst_18555];
var inst_18557 = cljs.core.PersistentHashMap.fromArrays(inst_18552,inst_18556);
var inst_18558 = cljs.pprint.pprint.call(null,inst_18557);
var state_18560__$1 = state_18560;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18560__$1,inst_18558);
} else {
return null;
}
}
});})(c__10985__auto___18567,bits,user))
;
return ((function (switch__10964__auto__,c__10985__auto___18567,bits,user){
return (function() {
var server$core$state_machine__10965__auto__ = null;
var server$core$state_machine__10965__auto____0 = (function (){
var statearr_18563 = [null,null,null,null,null,null,null,null];
(statearr_18563[(0)] = server$core$state_machine__10965__auto__);

(statearr_18563[(1)] = (1));

return statearr_18563;
});
var server$core$state_machine__10965__auto____1 = (function (state_18560){
while(true){
var ret_value__10966__auto__ = (function (){try{while(true){
var result__10967__auto__ = switch__10964__auto__.call(null,state_18560);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10967__auto__;
}
break;
}
}catch (e18564){if((e18564 instanceof Object)){
var ex__10968__auto__ = e18564;
var statearr_18565_18568 = state_18560;
(statearr_18565_18568[(5)] = ex__10968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18560);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18564;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18569 = state_18560;
state_18560 = G__18569;
continue;
} else {
return ret_value__10966__auto__;
}
break;
}
});
server$core$state_machine__10965__auto__ = function(state_18560){
switch(arguments.length){
case 0:
return server$core$state_machine__10965__auto____0.call(this);
case 1:
return server$core$state_machine__10965__auto____1.call(this,state_18560);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$0 = server$core$state_machine__10965__auto____0;
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$1 = server$core$state_machine__10965__auto____1;
return server$core$state_machine__10965__auto__;
})()
;})(switch__10964__auto__,c__10985__auto___18567,bits,user))
})();
var state__10987__auto__ = (function (){var statearr_18566 = f__10986__auto__.call(null);
(statearr_18566[(6)] = c__10985__auto___18567);

return statearr_18566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10987__auto__);
});})(c__10985__auto___18567,bits,user))
);


cljs.core.doall.call(null,cljs.core.map.call(null,((function (bits,user){
return (function (p1__18551_SHARP_){
return cljs.core.async.put_BANG_.call(null,server.core.addQue,p1__18551_SHARP_);
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
return (function (state_18576){
var state_val_18577 = (state_18576[(1)]);
if((state_val_18577 === (1))){
var inst_18570 = server.core.allUpdates.call(null);
var state_18576__$1 = state_18576;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18576__$1,(2),inst_18570);
} else {
if((state_val_18577 === (2))){
var inst_18572 = (state_18576[(2)]);
var inst_18573 = cljs.core.clj__GT_js.call(null,inst_18572);
var inst_18574 = res.json(inst_18573);
var state_18576__$1 = state_18576;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18576__$1,inst_18574);
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
var statearr_18578 = [null,null,null,null,null,null,null];
(statearr_18578[(0)] = server$core$state_machine__10965__auto__);

(statearr_18578[(1)] = (1));

return statearr_18578;
});
var server$core$state_machine__10965__auto____1 = (function (state_18576){
while(true){
var ret_value__10966__auto__ = (function (){try{while(true){
var result__10967__auto__ = switch__10964__auto__.call(null,state_18576);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10967__auto__;
}
break;
}
}catch (e18579){if((e18579 instanceof Object)){
var ex__10968__auto__ = e18579;
var statearr_18580_18582 = state_18576;
(statearr_18580_18582[(5)] = ex__10968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18576);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18579;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18583 = state_18576;
state_18576 = G__18583;
continue;
} else {
return ret_value__10966__auto__;
}
break;
}
});
server$core$state_machine__10965__auto__ = function(state_18576){
switch(arguments.length){
case 0:
return server$core$state_machine__10965__auto____0.call(this);
case 1:
return server$core$state_machine__10965__auto____1.call(this,state_18576);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$0 = server$core$state_machine__10965__auto____0;
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$1 = server$core$state_machine__10965__auto____1;
return server$core$state_machine__10965__auto__;
})()
;})(switch__10964__auto__,c__10985__auto__))
})();
var state__10987__auto__ = (function (){var statearr_18581 = f__10986__auto__.call(null);
(statearr_18581[(6)] = c__10985__auto__);

return statearr_18581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10987__auto__);
});})(c__10985__auto__))
);

return c__10985__auto__;
}));
server.core.sttAuthService = (new server.core.node$module$watson_developer_cloud.AuthorizationV1((function (){var obj18585 = {"username":"1b860fd3-bf11-4cc6-a962-5bac776d5744","password":"LZ2TNegMz6NX"};
return obj18585;
})()));
server.core.app.use("/api/speech-to-text/token",(function (req,res){
return server.core.sttAuthService.getToken((function (){var obj18587 = {"url":server.core.node$module$watson_developer_cloud.SpeechToTextV1.URL};
return obj18587;
})(),(function (err,token){
return res.send(token);
}));
}));
server.core._main = (function server$core$_main(var_args){
var args__9230__auto__ = [];
var len__9223__auto___18589 = arguments.length;
var i__9224__auto___18590 = (0);
while(true){
if((i__9224__auto___18590 < len__9223__auto___18589)){
args__9230__auto__.push((arguments[i__9224__auto___18590]));

var G__18591 = (i__9224__auto___18590 + (1));
i__9224__auto___18590 = G__18591;
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

server.core._main.cljs$lang$applyTo = (function (seq18588){
return server.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18588));
});

cljs.core._STAR_main_cli_fn_STAR_ = server.core._main;

//# sourceMappingURL=core.js.map
