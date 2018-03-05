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
server.core.db = (new server.core.node$module$nedb((function (){var obj11050 = {"filename":"./dbs/updates","autoload":true};
return obj11050;
})()));
server.core.app = server.core.node$module$express.call(null);
server.core.http = cljs.nodejs.require.call(null,"http");
server.core.server = server.core.http.Server(server.core.app);
server.core.io = server.core.node$module$socket$io.call(null,server.core.server);
server.core.io.on("connection",(function (p1__11051_SHARP_){
return p1__11051_SHARP_.on("word",(function (worddata){
return (function (d){
var bits = clojure.string.split.call(null,new cljs.core.Keyword(null,"words","words",1924933001).cljs$core$IFn$_invoke$arity$1(d),/\s/);
var uname = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(d);
var c__10985__auto___11067 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10985__auto___11067,bits,uname){
return (function (){
var f__10986__auto__ = (function (){var switch__10964__auto__ = ((function (c__10985__auto___11067,bits,uname){
return (function (state_11060){
var state_val_11061 = (state_11060[(1)]);
if((state_val_11061 === (1))){
var inst_11052 = [new cljs.core.Keyword(null,"cword","cword",-1508063004)];
var inst_11053 = server.core.currentWord.call(null);
var state_11060__$1 = (function (){var statearr_11062 = state_11060;
(statearr_11062[(7)] = inst_11052);

return statearr_11062;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11060__$1,(2),inst_11053);
} else {
if((state_val_11061 === (2))){
var inst_11052 = (state_11060[(7)]);
var inst_11055 = (state_11060[(2)]);
var inst_11056 = [inst_11055];
var inst_11057 = cljs.core.PersistentHashMap.fromArrays(inst_11052,inst_11056);
var inst_11058 = cljs.pprint.pprint.call(null,inst_11057);
var state_11060__$1 = state_11060;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11060__$1,inst_11058);
} else {
return null;
}
}
});})(c__10985__auto___11067,bits,uname))
;
return ((function (switch__10964__auto__,c__10985__auto___11067,bits,uname){
return (function() {
var server$core$state_machine__10965__auto__ = null;
var server$core$state_machine__10965__auto____0 = (function (){
var statearr_11063 = [null,null,null,null,null,null,null,null];
(statearr_11063[(0)] = server$core$state_machine__10965__auto__);

(statearr_11063[(1)] = (1));

return statearr_11063;
});
var server$core$state_machine__10965__auto____1 = (function (state_11060){
while(true){
var ret_value__10966__auto__ = (function (){try{while(true){
var result__10967__auto__ = switch__10964__auto__.call(null,state_11060);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10967__auto__;
}
break;
}
}catch (e11064){if((e11064 instanceof Object)){
var ex__10968__auto__ = e11064;
var statearr_11065_11068 = state_11060;
(statearr_11065_11068[(5)] = ex__10968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11060);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11064;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11069 = state_11060;
state_11060 = G__11069;
continue;
} else {
return ret_value__10966__auto__;
}
break;
}
});
server$core$state_machine__10965__auto__ = function(state_11060){
switch(arguments.length){
case 0:
return server$core$state_machine__10965__auto____0.call(this);
case 1:
return server$core$state_machine__10965__auto____1.call(this,state_11060);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$0 = server$core$state_machine__10965__auto____0;
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$1 = server$core$state_machine__10965__auto____1;
return server$core$state_machine__10965__auto__;
})()
;})(switch__10964__auto__,c__10985__auto___11067,bits,uname))
})();
var state__10987__auto__ = (function (){var statearr_11066 = f__10986__auto__.call(null);
(statearr_11066[(6)] = c__10985__auto___11067);

return statearr_11066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10987__auto__);
});})(c__10985__auto___11067,bits,uname))
);


cljs.pprint.pprint.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bits","bits",-1206785969),bits,new cljs.core.Keyword(null,"user","user",1532431356),uname], null));

return cljs.core.doall.call(null,cljs.core.map.call(null,((function (bits,uname){
return (function (x){
return cljs.core.async.put_BANG_.call(null,server.core.addQue,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"word","word",-420123725),x,new cljs.core.Keyword(null,"user","user",1532431356),uname], null));
});})(bits,uname))
,bits));
}).call(null,(function (d){
return cljs.core.identity.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"words","words",1924933001),new cljs.core.Keyword(null,"transcript","transcript",-2018154566).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"alternatives","alternatives",1927759600).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"words","words",1924933001).cljs$core$IFn$_invoke$arity$1(d)))),new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(d)], null));
}).call(null,(function (d){
return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}).call(null,worddata)));
}));
}));
server.core.app.use(server.core.node$module$cors.call(null,null));
server.core.app.use(server.core.node$module$body_parser.json(null));
server.core.allUpdates = (function server$core$allUpdates(){
var c = cljs.core.async.chan.call(null);
server.core.db.find({}).sort((function (){var obj11073 = {"start":(-1)};
return obj11073;
})()).exec(((function (c){
return (function (err,res){
return cljs.core.async.put_BANG_.call(null,c,res);
});})(c))
);

return c;
});
server.core.latestUpdate = (function server$core$latestUpdate(){
var c = cljs.core.async.chan.call(null);
server.core.db.find({}).sort((function (){var obj11080 = {"start":(-1)};
return obj11080;
})()).limit((1)).exec(((function (c){
return (function (err,res){
return ((function (c){
return (function (p1__11076_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__11076_SHARP_);
});})(c))
.call(null,((function (c){
return (function (p1__11075_SHARP_){
return cljs.core.js__GT_clj.call(null,p1__11075_SHARP_,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});})(c))
.call(null,((function (c){
return (function (p1__11074_SHARP_){
return cljs.core.first.call(null,p1__11074_SHARP_);
});})(c))
.call(null,res)));
});})(c))
);

return c;
});
server.core.currentWord = (function server$core$currentWord(){
var c = cljs.core.async.chan.call(null);
var c__10985__auto___11100 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10985__auto___11100,c){
return (function (){
var f__10986__auto__ = (function (){var switch__10964__auto__ = ((function (c__10985__auto___11100,c){
return (function (state_11093){
var state_val_11094 = (state_11093[(1)]);
if((state_val_11094 === (1))){
var inst_11083 = (function (){return ((function (state_val_11094,c__10985__auto___11100,c){
return (function (p1__11082_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__11082_SHARP_);
});
;})(state_val_11094,c__10985__auto___11100,c))
})();
var inst_11084 = (function (){return ((function (inst_11083,state_val_11094,c__10985__auto___11100,c){
return (function (index){
var words = clojure.string.split.call(null,server.core.faketxt,/\s/);
return cljs.core.nth.call(null,words,index);
});
;})(inst_11083,state_val_11094,c__10985__auto___11100,c))
})();
var inst_11085 = (function (){return ((function (inst_11083,inst_11084,state_val_11094,c__10985__auto___11100,c){
return (function (p1__11081_SHARP_){
return new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(p1__11081_SHARP_);
});
;})(inst_11083,inst_11084,state_val_11094,c__10985__auto___11100,c))
})();
var inst_11086 = server.core.latestUpdate.call(null);
var state_11093__$1 = (function (){var statearr_11095 = state_11093;
(statearr_11095[(7)] = inst_11083);

(statearr_11095[(8)] = inst_11085);

(statearr_11095[(9)] = inst_11084);

return statearr_11095;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11093__$1,(2),inst_11086);
} else {
if((state_val_11094 === (2))){
var inst_11083 = (state_11093[(7)]);
var inst_11085 = (state_11093[(8)]);
var inst_11084 = (state_11093[(9)]);
var inst_11088 = (state_11093[(2)]);
var inst_11089 = inst_11085.call(null,inst_11088);
var inst_11090 = inst_11084.call(null,inst_11089);
var inst_11091 = inst_11083.call(null,inst_11090);
var state_11093__$1 = state_11093;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11093__$1,inst_11091);
} else {
return null;
}
}
});})(c__10985__auto___11100,c))
;
return ((function (switch__10964__auto__,c__10985__auto___11100,c){
return (function() {
var server$core$currentWord_$_state_machine__10965__auto__ = null;
var server$core$currentWord_$_state_machine__10965__auto____0 = (function (){
var statearr_11096 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11096[(0)] = server$core$currentWord_$_state_machine__10965__auto__);

(statearr_11096[(1)] = (1));

return statearr_11096;
});
var server$core$currentWord_$_state_machine__10965__auto____1 = (function (state_11093){
while(true){
var ret_value__10966__auto__ = (function (){try{while(true){
var result__10967__auto__ = switch__10964__auto__.call(null,state_11093);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10967__auto__;
}
break;
}
}catch (e11097){if((e11097 instanceof Object)){
var ex__10968__auto__ = e11097;
var statearr_11098_11101 = state_11093;
(statearr_11098_11101[(5)] = ex__10968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11093);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11097;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11102 = state_11093;
state_11093 = G__11102;
continue;
} else {
return ret_value__10966__auto__;
}
break;
}
});
server$core$currentWord_$_state_machine__10965__auto__ = function(state_11093){
switch(arguments.length){
case 0:
return server$core$currentWord_$_state_machine__10965__auto____0.call(this);
case 1:
return server$core$currentWord_$_state_machine__10965__auto____1.call(this,state_11093);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
server$core$currentWord_$_state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$0 = server$core$currentWord_$_state_machine__10965__auto____0;
server$core$currentWord_$_state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$1 = server$core$currentWord_$_state_machine__10965__auto____1;
return server$core$currentWord_$_state_machine__10965__auto__;
})()
;})(switch__10964__auto__,c__10985__auto___11100,c))
})();
var state__10987__auto__ = (function (){var statearr_11099 = f__10986__auto__.call(null);
(statearr_11099[(6)] = c__10985__auto___11100);

return statearr_11099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10987__auto__);
});})(c__10985__auto___11100,c))
);


return c;
});
var c__10985__auto___11114 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10985__auto___11114){
return (function (){
var f__10986__auto__ = (function (){var switch__10964__auto__ = ((function (c__10985__auto___11114){
return (function (state_11108){
var state_val_11109 = (state_11108[(1)]);
if((state_val_11109 === (1))){
var inst_11103 = server.core.currentWord.call(null);
var state_11108__$1 = state_11108;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11108__$1,(2),inst_11103);
} else {
if((state_val_11109 === (2))){
var inst_11105 = (state_11108[(2)]);
var inst_11106 = cljs.pprint.pprint.call(null,inst_11105);
var state_11108__$1 = state_11108;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11108__$1,inst_11106);
} else {
return null;
}
}
});})(c__10985__auto___11114))
;
return ((function (switch__10964__auto__,c__10985__auto___11114){
return (function() {
var server$core$state_machine__10965__auto__ = null;
var server$core$state_machine__10965__auto____0 = (function (){
var statearr_11110 = [null,null,null,null,null,null,null];
(statearr_11110[(0)] = server$core$state_machine__10965__auto__);

(statearr_11110[(1)] = (1));

return statearr_11110;
});
var server$core$state_machine__10965__auto____1 = (function (state_11108){
while(true){
var ret_value__10966__auto__ = (function (){try{while(true){
var result__10967__auto__ = switch__10964__auto__.call(null,state_11108);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10967__auto__;
}
break;
}
}catch (e11111){if((e11111 instanceof Object)){
var ex__10968__auto__ = e11111;
var statearr_11112_11115 = state_11108;
(statearr_11112_11115[(5)] = ex__10968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11108);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11111;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11116 = state_11108;
state_11108 = G__11116;
continue;
} else {
return ret_value__10966__auto__;
}
break;
}
});
server$core$state_machine__10965__auto__ = function(state_11108){
switch(arguments.length){
case 0:
return server$core$state_machine__10965__auto____0.call(this);
case 1:
return server$core$state_machine__10965__auto____1.call(this,state_11108);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$0 = server$core$state_machine__10965__auto____0;
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$1 = server$core$state_machine__10965__auto____1;
return server$core$state_machine__10965__auto__;
})()
;})(switch__10964__auto__,c__10985__auto___11114))
})();
var state__10987__auto__ = (function (){var statearr_11113 = f__10986__auto__.call(null);
(statearr_11113[(6)] = c__10985__auto___11114);

return statearr_11113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10987__auto__);
});})(c__10985__auto___11114))
);

server.core.addQue = cljs.core.async.chan.call(null);
var c__10985__auto___11236 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10985__auto___11236){
return (function (){
var f__10986__auto__ = (function (){var switch__10964__auto__ = ((function (c__10985__auto___11236){
return (function (state_11203){
var state_val_11204 = (state_11203[(1)]);
if((state_val_11204 === (7))){
var inst_11120 = (state_11203[(7)]);
var inst_11120__$1 = (state_11203[(2)]);
var inst_11127 = cljs.core.async.chan.call(null,(1));
var inst_11128 = (function (){var addMap = inst_11120__$1;
var c__10985__auto____$1 = inst_11127;
return ((function (addMap,c__10985__auto____$1,inst_11120,inst_11120__$1,inst_11127,state_val_11204,c__10985__auto___11236){
return (function (){
var f__10986__auto__ = (function (){var switch__10964__auto__ = ((function (addMap,c__10985__auto____$1,inst_11120,inst_11120__$1,inst_11127,state_val_11204,c__10985__auto___11236){
return (function (state_11125){
var state_val_11126 = (state_11125[(1)]);
if((state_val_11126 === (1))){
var inst_11121 = server.core.currentWord.call(null);
var state_11125__$1 = state_11125;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11125__$1,(2),inst_11121);
} else {
if((state_val_11126 === (2))){
var inst_11123 = (state_11125[(2)]);
var state_11125__$1 = state_11125;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11125__$1,inst_11123);
} else {
return null;
}
}
});})(addMap,c__10985__auto____$1,inst_11120,inst_11120__$1,inst_11127,state_val_11204,c__10985__auto___11236))
;
return ((function (switch__10964__auto__,addMap,c__10985__auto____$1,inst_11120,inst_11120__$1,inst_11127,state_val_11204,c__10985__auto___11236){
return (function() {
var server$core$state_machine__10965__auto__ = null;
var server$core$state_machine__10965__auto____0 = (function (){
var statearr_11205 = [null,null,null,null,null,null,null];
(statearr_11205[(0)] = server$core$state_machine__10965__auto__);

(statearr_11205[(1)] = (1));

return statearr_11205;
});
var server$core$state_machine__10965__auto____1 = (function (state_11125){
while(true){
var ret_value__10966__auto__ = (function (){try{while(true){
var result__10967__auto__ = switch__10964__auto__.call(null,state_11125);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10967__auto__;
}
break;
}
}catch (e11206){if((e11206 instanceof Object)){
var ex__10968__auto__ = e11206;
var statearr_11207_11237 = state_11125;
(statearr_11207_11237[(5)] = ex__10968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11125);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11206;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11238 = state_11125;
state_11125 = G__11238;
continue;
} else {
return ret_value__10966__auto__;
}
break;
}
});
server$core$state_machine__10965__auto__ = function(state_11125){
switch(arguments.length){
case 0:
return server$core$state_machine__10965__auto____0.call(this);
case 1:
return server$core$state_machine__10965__auto____1.call(this,state_11125);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$0 = server$core$state_machine__10965__auto____0;
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$1 = server$core$state_machine__10965__auto____1;
return server$core$state_machine__10965__auto__;
})()
;})(switch__10964__auto__,addMap,c__10985__auto____$1,inst_11120,inst_11120__$1,inst_11127,state_val_11204,c__10985__auto___11236))
})();
var state__10987__auto__ = (function (){var statearr_11208 = f__10986__auto__.call(null);
(statearr_11208[(6)] = c__10985__auto____$1);

return statearr_11208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10987__auto__);
});
;})(addMap,c__10985__auto____$1,inst_11120,inst_11120__$1,inst_11127,state_val_11204,c__10985__auto___11236))
})();
var inst_11129 = cljs.core.async.impl.dispatch.run.call(null,inst_11128);
var state_11203__$1 = (function (){var statearr_11209 = state_11203;
(statearr_11209[(8)] = inst_11129);

(statearr_11209[(7)] = inst_11120__$1);

return statearr_11209;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11203__$1,(8),inst_11127);
} else {
if((state_val_11204 === (1))){
var state_11203__$1 = state_11203;
var statearr_11210_11239 = state_11203__$1;
(statearr_11210_11239[(2)] = null);

(statearr_11210_11239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11204 === (4))){
var state_11203__$1 = state_11203;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11203__$1,(7),server.core.addQue);
} else {
if((state_val_11204 === (15))){
var inst_11195 = (state_11203[(2)]);
var state_11203__$1 = (function (){var statearr_11211 = state_11203;
(statearr_11211[(9)] = inst_11195);

return statearr_11211;
})();
var statearr_11212_11240 = state_11203__$1;
(statearr_11212_11240[(2)] = null);

(statearr_11212_11240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11204 === (13))){
var inst_11142 = (state_11203[(10)]);
var inst_11131 = (state_11203[(11)]);
var inst_11120 = (state_11203[(7)]);
var inst_11185 = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(inst_11120);
var inst_11186 = new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(inst_11142);
var inst_11187 = (inst_11186 + (1));
var inst_11188 = new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(inst_11142);
var inst_11189 = (inst_11188 + (2));
var inst_11190 = {"user":inst_11185,"start":inst_11187,"end":inst_11189};
var inst_11191 = (function (){var addMap = inst_11120;
var cword = inst_11131;
var lupdate = inst_11142;
return ((function (addMap,cword,lupdate,inst_11142,inst_11131,inst_11120,inst_11185,inst_11186,inst_11187,inst_11188,inst_11189,inst_11190,state_val_11204,c__10985__auto___11236){
return (function (err,res){
return cljs.core.println.call(null,"Inserted Update");
});
;})(addMap,cword,lupdate,inst_11142,inst_11131,inst_11120,inst_11185,inst_11186,inst_11187,inst_11188,inst_11189,inst_11190,state_val_11204,c__10985__auto___11236))
})();
var inst_11192 = server.core.db.insert(inst_11190,inst_11191);
var state_11203__$1 = state_11203;
var statearr_11213_11241 = state_11203__$1;
(statearr_11213_11241[(2)] = inst_11192);

(statearr_11213_11241[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11204 === (6))){
var inst_11199 = (state_11203[(2)]);
var state_11203__$1 = state_11203;
var statearr_11214_11242 = state_11203__$1;
(statearr_11214_11242[(2)] = inst_11199);

(statearr_11214_11242[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11204 === (3))){
var inst_11201 = (state_11203[(2)]);
var state_11203__$1 = state_11203;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11203__$1,inst_11201);
} else {
if((state_val_11204 === (12))){
var inst_11142 = (state_11203[(10)]);
var inst_11131 = (state_11203[(11)]);
var inst_11120 = (state_11203[(7)]);
var inst_11175 = (state_11203[(2)]);
var inst_11176 = new cljs.core.Keyword(null,"word","word",-420123725).cljs$core$IFn$_invoke$arity$1(inst_11120);
var inst_11177 = cljs.core._EQ_.call(null,inst_11131,inst_11176);
var inst_11178 = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(inst_11120);
var inst_11179 = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(inst_11142);
var inst_11180 = cljs.core.not_EQ_.call(null,inst_11178,inst_11179);
var inst_11181 = (inst_11177) && (inst_11180);
var state_11203__$1 = (function (){var statearr_11215 = state_11203;
(statearr_11215[(12)] = inst_11175);

return statearr_11215;
})();
if(cljs.core.truth_(inst_11181)){
var statearr_11216_11243 = state_11203__$1;
(statearr_11216_11243[(1)] = (13));

} else {
var statearr_11217_11244 = state_11203__$1;
(statearr_11217_11244[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11204 === (2))){
var state_11203__$1 = state_11203;
var statearr_11218_11245 = state_11203__$1;
(statearr_11218_11245[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11204 === (11))){
var state_11203__$1 = state_11203;
var statearr_11220_11246 = state_11203__$1;
(statearr_11220_11246[(2)] = null);

(statearr_11220_11246[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11204 === (9))){
var inst_11142 = (state_11203[(10)]);
var inst_11131 = (state_11203[(11)]);
var inst_11120 = (state_11203[(7)]);
var inst_11142__$1 = (state_11203[(2)]);
var inst_11143 = [new cljs.core.Keyword(null,"word","word",-420123725),new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"cword","cword",-1508063004),new cljs.core.Keyword(null,"lupdate","lupdate",17002411)];
var inst_11144 = new cljs.core.Keyword(null,"word","word",-420123725).cljs$core$IFn$_invoke$arity$1(inst_11120);
var inst_11145 = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(inst_11120);
var inst_11146 = [inst_11144,inst_11145,inst_11131,inst_11142__$1];
var inst_11147 = cljs.core.PersistentHashMap.fromArrays(inst_11143,inst_11146);
var inst_11148 = cljs.pprint.pprint.call(null,inst_11147);
var inst_11149 = new cljs.core.Keyword(null,"word","word",-420123725).cljs$core$IFn$_invoke$arity$1(inst_11120);
var inst_11150 = cljs.core._EQ_.call(null,inst_11131,inst_11149);
var inst_11151 = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(inst_11120);
var inst_11152 = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(inst_11142__$1);
var inst_11153 = cljs.core._EQ_.call(null,inst_11151,inst_11152);
var inst_11154 = (inst_11150) && (inst_11153);
var state_11203__$1 = (function (){var statearr_11221 = state_11203;
(statearr_11221[(10)] = inst_11142__$1);

(statearr_11221[(13)] = inst_11148);

return statearr_11221;
})();
if(cljs.core.truth_(inst_11154)){
var statearr_11222_11247 = state_11203__$1;
(statearr_11222_11247[(1)] = (10));

} else {
var statearr_11223_11248 = state_11203__$1;
(statearr_11223_11248[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11204 === (5))){
var state_11203__$1 = state_11203;
var statearr_11224_11249 = state_11203__$1;
(statearr_11224_11249[(2)] = null);

(statearr_11224_11249[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11204 === (14))){
var state_11203__$1 = state_11203;
var statearr_11225_11250 = state_11203__$1;
(statearr_11225_11250[(2)] = null);

(statearr_11225_11250[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11204 === (10))){
var inst_11142 = (state_11203[(10)]);
var inst_11131 = (state_11203[(11)]);
var inst_11120 = (state_11203[(7)]);
var inst_11158 = new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(inst_11142);
var inst_11159 = {"_id":inst_11158};
var inst_11164 = new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(inst_11142);
var inst_11165 = (inst_11164 + (1));
var inst_11166 = {"end":inst_11165};
var inst_11167 = {"$set":inst_11166};
var inst_11170 = {"multi":true};
var inst_11171 = (function (){var addMap = inst_11120;
var cword = inst_11131;
var lupdate = inst_11142;
return ((function (addMap,cword,lupdate,inst_11142,inst_11131,inst_11120,inst_11158,inst_11159,inst_11164,inst_11165,inst_11166,inst_11167,inst_11170,state_val_11204,c__10985__auto___11236){
return (function (err,res){
return cljs.core.println.call(null,"Updated Last update");
});
;})(addMap,cword,lupdate,inst_11142,inst_11131,inst_11120,inst_11158,inst_11159,inst_11164,inst_11165,inst_11166,inst_11167,inst_11170,state_val_11204,c__10985__auto___11236))
})();
var inst_11172 = server.core.db.update(inst_11159,inst_11167,inst_11170,inst_11171);
var state_11203__$1 = state_11203;
var statearr_11226_11251 = state_11203__$1;
(statearr_11226_11251[(2)] = inst_11172);

(statearr_11226_11251[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11204 === (8))){
var inst_11131 = (state_11203[(11)]);
var inst_11120 = (state_11203[(7)]);
var inst_11131__$1 = (state_11203[(2)]);
var inst_11138 = cljs.core.async.chan.call(null,(1));
var inst_11139 = (function (){var addMap = inst_11120;
var cword = inst_11131__$1;
var c__10985__auto____$1 = inst_11138;
return ((function (addMap,cword,c__10985__auto____$1,inst_11131,inst_11120,inst_11131__$1,inst_11138,state_val_11204,c__10985__auto___11236){
return (function (){
var f__10986__auto__ = (function (){var switch__10964__auto__ = ((function (addMap,cword,c__10985__auto____$1,inst_11131,inst_11120,inst_11131__$1,inst_11138,state_val_11204,c__10985__auto___11236){
return (function (state_11136){
var state_val_11137 = (state_11136[(1)]);
if((state_val_11137 === (1))){
var inst_11132 = server.core.latestUpdate.call(null);
var state_11136__$1 = state_11136;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11136__$1,(2),inst_11132);
} else {
if((state_val_11137 === (2))){
var inst_11134 = (state_11136[(2)]);
var state_11136__$1 = state_11136;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11136__$1,inst_11134);
} else {
return null;
}
}
});})(addMap,cword,c__10985__auto____$1,inst_11131,inst_11120,inst_11131__$1,inst_11138,state_val_11204,c__10985__auto___11236))
;
return ((function (switch__10964__auto__,addMap,cword,c__10985__auto____$1,inst_11131,inst_11120,inst_11131__$1,inst_11138,state_val_11204,c__10985__auto___11236){
return (function() {
var server$core$state_machine__10965__auto__ = null;
var server$core$state_machine__10965__auto____0 = (function (){
var statearr_11227 = [null,null,null,null,null,null,null];
(statearr_11227[(0)] = server$core$state_machine__10965__auto__);

(statearr_11227[(1)] = (1));

return statearr_11227;
});
var server$core$state_machine__10965__auto____1 = (function (state_11136){
while(true){
var ret_value__10966__auto__ = (function (){try{while(true){
var result__10967__auto__ = switch__10964__auto__.call(null,state_11136);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10967__auto__;
}
break;
}
}catch (e11228){if((e11228 instanceof Object)){
var ex__10968__auto__ = e11228;
var statearr_11229_11252 = state_11136;
(statearr_11229_11252[(5)] = ex__10968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11136);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11228;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11253 = state_11136;
state_11136 = G__11253;
continue;
} else {
return ret_value__10966__auto__;
}
break;
}
});
server$core$state_machine__10965__auto__ = function(state_11136){
switch(arguments.length){
case 0:
return server$core$state_machine__10965__auto____0.call(this);
case 1:
return server$core$state_machine__10965__auto____1.call(this,state_11136);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$0 = server$core$state_machine__10965__auto____0;
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$1 = server$core$state_machine__10965__auto____1;
return server$core$state_machine__10965__auto__;
})()
;})(switch__10964__auto__,addMap,cword,c__10985__auto____$1,inst_11131,inst_11120,inst_11131__$1,inst_11138,state_val_11204,c__10985__auto___11236))
})();
var state__10987__auto__ = (function (){var statearr_11230 = f__10986__auto__.call(null);
(statearr_11230[(6)] = c__10985__auto____$1);

return statearr_11230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10987__auto__);
});
;})(addMap,cword,c__10985__auto____$1,inst_11131,inst_11120,inst_11131__$1,inst_11138,state_val_11204,c__10985__auto___11236))
})();
var inst_11140 = cljs.core.async.impl.dispatch.run.call(null,inst_11139);
var state_11203__$1 = (function (){var statearr_11231 = state_11203;
(statearr_11231[(11)] = inst_11131__$1);

(statearr_11231[(14)] = inst_11140);

return statearr_11231;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11203__$1,(9),inst_11138);
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
});})(c__10985__auto___11236))
;
return ((function (switch__10964__auto__,c__10985__auto___11236){
return (function() {
var server$core$state_machine__10965__auto__ = null;
var server$core$state_machine__10965__auto____0 = (function (){
var statearr_11232 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11232[(0)] = server$core$state_machine__10965__auto__);

(statearr_11232[(1)] = (1));

return statearr_11232;
});
var server$core$state_machine__10965__auto____1 = (function (state_11203){
while(true){
var ret_value__10966__auto__ = (function (){try{while(true){
var result__10967__auto__ = switch__10964__auto__.call(null,state_11203);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10967__auto__;
}
break;
}
}catch (e11233){if((e11233 instanceof Object)){
var ex__10968__auto__ = e11233;
var statearr_11234_11254 = state_11203;
(statearr_11234_11254[(5)] = ex__10968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11203);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11233;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11255 = state_11203;
state_11203 = G__11255;
continue;
} else {
return ret_value__10966__auto__;
}
break;
}
});
server$core$state_machine__10965__auto__ = function(state_11203){
switch(arguments.length){
case 0:
return server$core$state_machine__10965__auto____0.call(this);
case 1:
return server$core$state_machine__10965__auto____1.call(this,state_11203);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$0 = server$core$state_machine__10965__auto____0;
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$1 = server$core$state_machine__10965__auto____1;
return server$core$state_machine__10965__auto__;
})()
;})(switch__10964__auto__,c__10985__auto___11236))
})();
var state__10987__auto__ = (function (){var statearr_11235 = f__10986__auto__.call(null);
(statearr_11235[(6)] = c__10985__auto___11236);

return statearr_11235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10987__auto__);
});})(c__10985__auto___11236))
);

server.core.app.post("/addword",(function (req,res){
var bits = clojure.string.split.call(null,req.body.str,/\s/);
var user = req.body.user;
var c__10985__auto___11272 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10985__auto___11272,bits,user){
return (function (){
var f__10986__auto__ = (function (){var switch__10964__auto__ = ((function (c__10985__auto___11272,bits,user){
return (function (state_11265){
var state_val_11266 = (state_11265[(1)]);
if((state_val_11266 === (1))){
var inst_11257 = [new cljs.core.Keyword(null,"cword","cword",-1508063004)];
var inst_11258 = server.core.currentWord.call(null);
var state_11265__$1 = (function (){var statearr_11267 = state_11265;
(statearr_11267[(7)] = inst_11257);

return statearr_11267;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11265__$1,(2),inst_11258);
} else {
if((state_val_11266 === (2))){
var inst_11257 = (state_11265[(7)]);
var inst_11260 = (state_11265[(2)]);
var inst_11261 = [inst_11260];
var inst_11262 = cljs.core.PersistentHashMap.fromArrays(inst_11257,inst_11261);
var inst_11263 = cljs.pprint.pprint.call(null,inst_11262);
var state_11265__$1 = state_11265;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11265__$1,inst_11263);
} else {
return null;
}
}
});})(c__10985__auto___11272,bits,user))
;
return ((function (switch__10964__auto__,c__10985__auto___11272,bits,user){
return (function() {
var server$core$state_machine__10965__auto__ = null;
var server$core$state_machine__10965__auto____0 = (function (){
var statearr_11268 = [null,null,null,null,null,null,null,null];
(statearr_11268[(0)] = server$core$state_machine__10965__auto__);

(statearr_11268[(1)] = (1));

return statearr_11268;
});
var server$core$state_machine__10965__auto____1 = (function (state_11265){
while(true){
var ret_value__10966__auto__ = (function (){try{while(true){
var result__10967__auto__ = switch__10964__auto__.call(null,state_11265);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10967__auto__;
}
break;
}
}catch (e11269){if((e11269 instanceof Object)){
var ex__10968__auto__ = e11269;
var statearr_11270_11273 = state_11265;
(statearr_11270_11273[(5)] = ex__10968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11269;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11274 = state_11265;
state_11265 = G__11274;
continue;
} else {
return ret_value__10966__auto__;
}
break;
}
});
server$core$state_machine__10965__auto__ = function(state_11265){
switch(arguments.length){
case 0:
return server$core$state_machine__10965__auto____0.call(this);
case 1:
return server$core$state_machine__10965__auto____1.call(this,state_11265);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$0 = server$core$state_machine__10965__auto____0;
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$1 = server$core$state_machine__10965__auto____1;
return server$core$state_machine__10965__auto__;
})()
;})(switch__10964__auto__,c__10985__auto___11272,bits,user))
})();
var state__10987__auto__ = (function (){var statearr_11271 = f__10986__auto__.call(null);
(statearr_11271[(6)] = c__10985__auto___11272);

return statearr_11271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10987__auto__);
});})(c__10985__auto___11272,bits,user))
);


cljs.core.doall.call(null,cljs.core.map.call(null,((function (bits,user){
return (function (p1__11256_SHARP_){
return cljs.core.async.put_BANG_.call(null,server.core.addQue,p1__11256_SHARP_);
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
return (function (state_11281){
var state_val_11282 = (state_11281[(1)]);
if((state_val_11282 === (1))){
var inst_11275 = server.core.allUpdates.call(null);
var state_11281__$1 = state_11281;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11281__$1,(2),inst_11275);
} else {
if((state_val_11282 === (2))){
var inst_11277 = (state_11281[(2)]);
var inst_11278 = cljs.core.clj__GT_js.call(null,inst_11277);
var inst_11279 = res.json(inst_11278);
var state_11281__$1 = state_11281;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11281__$1,inst_11279);
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
var statearr_11283 = [null,null,null,null,null,null,null];
(statearr_11283[(0)] = server$core$state_machine__10965__auto__);

(statearr_11283[(1)] = (1));

return statearr_11283;
});
var server$core$state_machine__10965__auto____1 = (function (state_11281){
while(true){
var ret_value__10966__auto__ = (function (){try{while(true){
var result__10967__auto__ = switch__10964__auto__.call(null,state_11281);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10967__auto__;
}
break;
}
}catch (e11284){if((e11284 instanceof Object)){
var ex__10968__auto__ = e11284;
var statearr_11285_11287 = state_11281;
(statearr_11285_11287[(5)] = ex__10968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11281);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11284;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11288 = state_11281;
state_11281 = G__11288;
continue;
} else {
return ret_value__10966__auto__;
}
break;
}
});
server$core$state_machine__10965__auto__ = function(state_11281){
switch(arguments.length){
case 0:
return server$core$state_machine__10965__auto____0.call(this);
case 1:
return server$core$state_machine__10965__auto____1.call(this,state_11281);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$0 = server$core$state_machine__10965__auto____0;
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$1 = server$core$state_machine__10965__auto____1;
return server$core$state_machine__10965__auto__;
})()
;})(switch__10964__auto__,c__10985__auto__))
})();
var state__10987__auto__ = (function (){var statearr_11286 = f__10986__auto__.call(null);
(statearr_11286[(6)] = c__10985__auto__);

return statearr_11286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10987__auto__);
});})(c__10985__auto__))
);

return c__10985__auto__;
}));
server.core.sttAuthService = (new server.core.node$module$watson_developer_cloud.AuthorizationV1((function (){var obj11290 = {"username":"1b860fd3-bf11-4cc6-a962-5bac776d5744","password":"LZ2TNegMz6NX"};
return obj11290;
})()));
server.core.app.use("/api/speech-to-text/token",(function (req,res){
return server.core.sttAuthService.getToken((function (){var obj11292 = {"url":server.core.node$module$watson_developer_cloud.SpeechToTextV1.URL};
return obj11292;
})(),(function (err,token){
return res.send(token);
}));
}));
server.core._main = (function server$core$_main(var_args){
var args__9230__auto__ = [];
var len__9223__auto___11294 = arguments.length;
var i__9224__auto___11295 = (0);
while(true){
if((i__9224__auto___11295 < len__9223__auto___11294)){
args__9230__auto__.push((arguments[i__9224__auto___11295]));

var G__11296 = (i__9224__auto___11295 + (1));
i__9224__auto___11295 = G__11296;
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

server.core._main.cljs$lang$applyTo = (function (seq11293){
return server.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11293));
});

cljs.core._STAR_main_cli_fn_STAR_ = server.core._main;

//# sourceMappingURL=core.js.map
