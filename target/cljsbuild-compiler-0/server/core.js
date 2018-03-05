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
return server.core.db.insert((function (){var obj11053 = {"userstr":userstr,"start":start,"end":end};
return obj11053;
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
server.core.db.find({}).sort((function (){var obj11057 = {"start":(-1)};
return obj11057;
})()).exec(((function (c){
return (function (err,res){
return cljs.core.async.put_BANG_.call(null,c,res);
});})(c))
);

return c;
});
server.core.latestUpdate = (function server$core$latestUpdate(){
var c = cljs.core.async.chan.call(null);
server.core.db.find({}).sort((function (){var obj11064 = {"start":(-1)};
return obj11064;
})()).limit((1)).exec(((function (c){
return (function (err,res){
return ((function (c){
return (function (p1__11060_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__11060_SHARP_);
});})(c))
.call(null,((function (c){
return (function (p1__11059_SHARP_){
return cljs.core.js__GT_clj.call(null,p1__11059_SHARP_,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});})(c))
.call(null,((function (c){
return (function (p1__11058_SHARP_){
return cljs.core.first.call(null,p1__11058_SHARP_);
});})(c))
.call(null,res)));
});})(c))
);

return c;
});
server.core.currentWord = (function server$core$currentWord(){
var c = cljs.core.async.chan.call(null);
var c__10985__auto___11084 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10985__auto___11084,c){
return (function (){
var f__10986__auto__ = (function (){var switch__10964__auto__ = ((function (c__10985__auto___11084,c){
return (function (state_11077){
var state_val_11078 = (state_11077[(1)]);
if((state_val_11078 === (1))){
var inst_11067 = (function (){return ((function (state_val_11078,c__10985__auto___11084,c){
return (function (p1__11066_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__11066_SHARP_);
});
;})(state_val_11078,c__10985__auto___11084,c))
})();
var inst_11068 = (function (){return ((function (inst_11067,state_val_11078,c__10985__auto___11084,c){
return (function (index){
var words = clojure.string.split.call(null,server.core.faketxt,/\s/);
return cljs.core.nth.call(null,words,index);
});
;})(inst_11067,state_val_11078,c__10985__auto___11084,c))
})();
var inst_11069 = (function (){return ((function (inst_11067,inst_11068,state_val_11078,c__10985__auto___11084,c){
return (function (p1__11065_SHARP_){
return new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(p1__11065_SHARP_);
});
;})(inst_11067,inst_11068,state_val_11078,c__10985__auto___11084,c))
})();
var inst_11070 = server.core.latestUpdate.call(null);
var state_11077__$1 = (function (){var statearr_11079 = state_11077;
(statearr_11079[(7)] = inst_11067);

(statearr_11079[(8)] = inst_11069);

(statearr_11079[(9)] = inst_11068);

return statearr_11079;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11077__$1,(2),inst_11070);
} else {
if((state_val_11078 === (2))){
var inst_11067 = (state_11077[(7)]);
var inst_11069 = (state_11077[(8)]);
var inst_11068 = (state_11077[(9)]);
var inst_11072 = (state_11077[(2)]);
var inst_11073 = inst_11069.call(null,inst_11072);
var inst_11074 = inst_11068.call(null,inst_11073);
var inst_11075 = inst_11067.call(null,inst_11074);
var state_11077__$1 = state_11077;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11077__$1,inst_11075);
} else {
return null;
}
}
});})(c__10985__auto___11084,c))
;
return ((function (switch__10964__auto__,c__10985__auto___11084,c){
return (function() {
var server$core$currentWord_$_state_machine__10965__auto__ = null;
var server$core$currentWord_$_state_machine__10965__auto____0 = (function (){
var statearr_11080 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11080[(0)] = server$core$currentWord_$_state_machine__10965__auto__);

(statearr_11080[(1)] = (1));

return statearr_11080;
});
var server$core$currentWord_$_state_machine__10965__auto____1 = (function (state_11077){
while(true){
var ret_value__10966__auto__ = (function (){try{while(true){
var result__10967__auto__ = switch__10964__auto__.call(null,state_11077);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10967__auto__;
}
break;
}
}catch (e11081){if((e11081 instanceof Object)){
var ex__10968__auto__ = e11081;
var statearr_11082_11085 = state_11077;
(statearr_11082_11085[(5)] = ex__10968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11077);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11081;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11086 = state_11077;
state_11077 = G__11086;
continue;
} else {
return ret_value__10966__auto__;
}
break;
}
});
server$core$currentWord_$_state_machine__10965__auto__ = function(state_11077){
switch(arguments.length){
case 0:
return server$core$currentWord_$_state_machine__10965__auto____0.call(this);
case 1:
return server$core$currentWord_$_state_machine__10965__auto____1.call(this,state_11077);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
server$core$currentWord_$_state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$0 = server$core$currentWord_$_state_machine__10965__auto____0;
server$core$currentWord_$_state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$1 = server$core$currentWord_$_state_machine__10965__auto____1;
return server$core$currentWord_$_state_machine__10965__auto__;
})()
;})(switch__10964__auto__,c__10985__auto___11084,c))
})();
var state__10987__auto__ = (function (){var statearr_11083 = f__10986__auto__.call(null);
(statearr_11083[(6)] = c__10985__auto___11084);

return statearr_11083;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10987__auto__);
});})(c__10985__auto___11084,c))
);


return c;
});
server.core.addQue = cljs.core.async.chan.call(null);
var c__10985__auto___11206 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10985__auto___11206){
return (function (){
var f__10986__auto__ = (function (){var switch__10964__auto__ = ((function (c__10985__auto___11206){
return (function (state_11173){
var state_val_11174 = (state_11173[(1)]);
if((state_val_11174 === (7))){
var inst_11090 = (state_11173[(7)]);
var inst_11090__$1 = (state_11173[(2)]);
var inst_11097 = cljs.core.async.chan.call(null,(1));
var inst_11098 = (function (){var addMap = inst_11090__$1;
var c__10985__auto____$1 = inst_11097;
return ((function (addMap,c__10985__auto____$1,inst_11090,inst_11090__$1,inst_11097,state_val_11174,c__10985__auto___11206){
return (function (){
var f__10986__auto__ = (function (){var switch__10964__auto__ = ((function (addMap,c__10985__auto____$1,inst_11090,inst_11090__$1,inst_11097,state_val_11174,c__10985__auto___11206){
return (function (state_11095){
var state_val_11096 = (state_11095[(1)]);
if((state_val_11096 === (1))){
var inst_11091 = server.core.currentWord.call(null);
var state_11095__$1 = state_11095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11095__$1,(2),inst_11091);
} else {
if((state_val_11096 === (2))){
var inst_11093 = (state_11095[(2)]);
var state_11095__$1 = state_11095;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11095__$1,inst_11093);
} else {
return null;
}
}
});})(addMap,c__10985__auto____$1,inst_11090,inst_11090__$1,inst_11097,state_val_11174,c__10985__auto___11206))
;
return ((function (switch__10964__auto__,addMap,c__10985__auto____$1,inst_11090,inst_11090__$1,inst_11097,state_val_11174,c__10985__auto___11206){
return (function() {
var server$core$state_machine__10965__auto__ = null;
var server$core$state_machine__10965__auto____0 = (function (){
var statearr_11175 = [null,null,null,null,null,null,null];
(statearr_11175[(0)] = server$core$state_machine__10965__auto__);

(statearr_11175[(1)] = (1));

return statearr_11175;
});
var server$core$state_machine__10965__auto____1 = (function (state_11095){
while(true){
var ret_value__10966__auto__ = (function (){try{while(true){
var result__10967__auto__ = switch__10964__auto__.call(null,state_11095);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10967__auto__;
}
break;
}
}catch (e11176){if((e11176 instanceof Object)){
var ex__10968__auto__ = e11176;
var statearr_11177_11207 = state_11095;
(statearr_11177_11207[(5)] = ex__10968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11095);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11176;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11208 = state_11095;
state_11095 = G__11208;
continue;
} else {
return ret_value__10966__auto__;
}
break;
}
});
server$core$state_machine__10965__auto__ = function(state_11095){
switch(arguments.length){
case 0:
return server$core$state_machine__10965__auto____0.call(this);
case 1:
return server$core$state_machine__10965__auto____1.call(this,state_11095);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$0 = server$core$state_machine__10965__auto____0;
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$1 = server$core$state_machine__10965__auto____1;
return server$core$state_machine__10965__auto__;
})()
;})(switch__10964__auto__,addMap,c__10985__auto____$1,inst_11090,inst_11090__$1,inst_11097,state_val_11174,c__10985__auto___11206))
})();
var state__10987__auto__ = (function (){var statearr_11178 = f__10986__auto__.call(null);
(statearr_11178[(6)] = c__10985__auto____$1);

return statearr_11178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10987__auto__);
});
;})(addMap,c__10985__auto____$1,inst_11090,inst_11090__$1,inst_11097,state_val_11174,c__10985__auto___11206))
})();
var inst_11099 = cljs.core.async.impl.dispatch.run.call(null,inst_11098);
var state_11173__$1 = (function (){var statearr_11179 = state_11173;
(statearr_11179[(8)] = inst_11099);

(statearr_11179[(7)] = inst_11090__$1);

return statearr_11179;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11173__$1,(8),inst_11097);
} else {
if((state_val_11174 === (1))){
var state_11173__$1 = state_11173;
var statearr_11180_11209 = state_11173__$1;
(statearr_11180_11209[(2)] = null);

(statearr_11180_11209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11174 === (4))){
var state_11173__$1 = state_11173;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11173__$1,(7),server.core.addQue);
} else {
if((state_val_11174 === (15))){
var inst_11165 = (state_11173[(2)]);
var state_11173__$1 = (function (){var statearr_11181 = state_11173;
(statearr_11181[(9)] = inst_11165);

return statearr_11181;
})();
var statearr_11182_11210 = state_11173__$1;
(statearr_11182_11210[(2)] = null);

(statearr_11182_11210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11174 === (13))){
var inst_11101 = (state_11173[(10)]);
var inst_11090 = (state_11173[(7)]);
var inst_11112 = (state_11173[(11)]);
var inst_11155 = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(inst_11090);
var inst_11156 = new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(inst_11112);
var inst_11157 = (inst_11156 + (1));
var inst_11158 = new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(inst_11112);
var inst_11159 = (inst_11158 + (2));
var inst_11160 = {"user":inst_11155,"start":inst_11157,"end":inst_11159};
var inst_11161 = (function (){var addMap = inst_11090;
var cword = inst_11101;
var lupdate = inst_11112;
return ((function (addMap,cword,lupdate,inst_11101,inst_11090,inst_11112,inst_11155,inst_11156,inst_11157,inst_11158,inst_11159,inst_11160,state_val_11174,c__10985__auto___11206){
return (function (err,res){
return cljs.core.println.call(null,"Inserted Update");
});
;})(addMap,cword,lupdate,inst_11101,inst_11090,inst_11112,inst_11155,inst_11156,inst_11157,inst_11158,inst_11159,inst_11160,state_val_11174,c__10985__auto___11206))
})();
var inst_11162 = server.core.db.insert(inst_11160,inst_11161);
var state_11173__$1 = state_11173;
var statearr_11183_11211 = state_11173__$1;
(statearr_11183_11211[(2)] = inst_11162);

(statearr_11183_11211[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11174 === (6))){
var inst_11169 = (state_11173[(2)]);
var state_11173__$1 = state_11173;
var statearr_11184_11212 = state_11173__$1;
(statearr_11184_11212[(2)] = inst_11169);

(statearr_11184_11212[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11174 === (3))){
var inst_11171 = (state_11173[(2)]);
var state_11173__$1 = state_11173;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11173__$1,inst_11171);
} else {
if((state_val_11174 === (12))){
var inst_11101 = (state_11173[(10)]);
var inst_11090 = (state_11173[(7)]);
var inst_11112 = (state_11173[(11)]);
var inst_11145 = (state_11173[(2)]);
var inst_11146 = new cljs.core.Keyword(null,"word","word",-420123725).cljs$core$IFn$_invoke$arity$1(inst_11090);
var inst_11147 = cljs.core._EQ_.call(null,inst_11101,inst_11146);
var inst_11148 = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(inst_11090);
var inst_11149 = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(inst_11112);
var inst_11150 = cljs.core.not_EQ_.call(null,inst_11148,inst_11149);
var inst_11151 = (inst_11147) && (inst_11150);
var state_11173__$1 = (function (){var statearr_11185 = state_11173;
(statearr_11185[(12)] = inst_11145);

return statearr_11185;
})();
if(cljs.core.truth_(inst_11151)){
var statearr_11186_11213 = state_11173__$1;
(statearr_11186_11213[(1)] = (13));

} else {
var statearr_11187_11214 = state_11173__$1;
(statearr_11187_11214[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11174 === (2))){
var state_11173__$1 = state_11173;
var statearr_11188_11215 = state_11173__$1;
(statearr_11188_11215[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11174 === (11))){
var state_11173__$1 = state_11173;
var statearr_11190_11216 = state_11173__$1;
(statearr_11190_11216[(2)] = null);

(statearr_11190_11216[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11174 === (9))){
var inst_11101 = (state_11173[(10)]);
var inst_11090 = (state_11173[(7)]);
var inst_11112 = (state_11173[(11)]);
var inst_11112__$1 = (state_11173[(2)]);
var inst_11113 = [new cljs.core.Keyword(null,"word","word",-420123725),new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"cword","cword",-1508063004),new cljs.core.Keyword(null,"lupdate","lupdate",17002411)];
var inst_11114 = new cljs.core.Keyword(null,"word","word",-420123725).cljs$core$IFn$_invoke$arity$1(inst_11090);
var inst_11115 = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(inst_11090);
var inst_11116 = [inst_11114,inst_11115,inst_11101,inst_11112__$1];
var inst_11117 = cljs.core.PersistentHashMap.fromArrays(inst_11113,inst_11116);
var inst_11118 = cljs.pprint.pprint.call(null,inst_11117);
var inst_11119 = new cljs.core.Keyword(null,"word","word",-420123725).cljs$core$IFn$_invoke$arity$1(inst_11090);
var inst_11120 = cljs.core._EQ_.call(null,inst_11101,inst_11119);
var inst_11121 = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(inst_11090);
var inst_11122 = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(inst_11112__$1);
var inst_11123 = cljs.core._EQ_.call(null,inst_11121,inst_11122);
var inst_11124 = (inst_11120) && (inst_11123);
var state_11173__$1 = (function (){var statearr_11191 = state_11173;
(statearr_11191[(13)] = inst_11118);

(statearr_11191[(11)] = inst_11112__$1);

return statearr_11191;
})();
if(cljs.core.truth_(inst_11124)){
var statearr_11192_11217 = state_11173__$1;
(statearr_11192_11217[(1)] = (10));

} else {
var statearr_11193_11218 = state_11173__$1;
(statearr_11193_11218[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11174 === (5))){
var state_11173__$1 = state_11173;
var statearr_11194_11219 = state_11173__$1;
(statearr_11194_11219[(2)] = null);

(statearr_11194_11219[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11174 === (14))){
var state_11173__$1 = state_11173;
var statearr_11195_11220 = state_11173__$1;
(statearr_11195_11220[(2)] = null);

(statearr_11195_11220[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11174 === (10))){
var inst_11101 = (state_11173[(10)]);
var inst_11090 = (state_11173[(7)]);
var inst_11112 = (state_11173[(11)]);
var inst_11128 = new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(inst_11112);
var inst_11129 = {"_id":inst_11128};
var inst_11134 = new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(inst_11112);
var inst_11135 = (inst_11134 + (1));
var inst_11136 = {"end":inst_11135};
var inst_11137 = {"$set":inst_11136};
var inst_11140 = {"multi":true};
var inst_11141 = (function (){var addMap = inst_11090;
var cword = inst_11101;
var lupdate = inst_11112;
return ((function (addMap,cword,lupdate,inst_11101,inst_11090,inst_11112,inst_11128,inst_11129,inst_11134,inst_11135,inst_11136,inst_11137,inst_11140,state_val_11174,c__10985__auto___11206){
return (function (err,res){
return cljs.core.println.call(null,"Updated Last update");
});
;})(addMap,cword,lupdate,inst_11101,inst_11090,inst_11112,inst_11128,inst_11129,inst_11134,inst_11135,inst_11136,inst_11137,inst_11140,state_val_11174,c__10985__auto___11206))
})();
var inst_11142 = server.core.db.update(inst_11129,inst_11137,inst_11140,inst_11141);
var state_11173__$1 = state_11173;
var statearr_11196_11221 = state_11173__$1;
(statearr_11196_11221[(2)] = inst_11142);

(statearr_11196_11221[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11174 === (8))){
var inst_11101 = (state_11173[(10)]);
var inst_11090 = (state_11173[(7)]);
var inst_11101__$1 = (state_11173[(2)]);
var inst_11108 = cljs.core.async.chan.call(null,(1));
var inst_11109 = (function (){var addMap = inst_11090;
var cword = inst_11101__$1;
var c__10985__auto____$1 = inst_11108;
return ((function (addMap,cword,c__10985__auto____$1,inst_11101,inst_11090,inst_11101__$1,inst_11108,state_val_11174,c__10985__auto___11206){
return (function (){
var f__10986__auto__ = (function (){var switch__10964__auto__ = ((function (addMap,cword,c__10985__auto____$1,inst_11101,inst_11090,inst_11101__$1,inst_11108,state_val_11174,c__10985__auto___11206){
return (function (state_11106){
var state_val_11107 = (state_11106[(1)]);
if((state_val_11107 === (1))){
var inst_11102 = server.core.latestUpdate.call(null);
var state_11106__$1 = state_11106;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11106__$1,(2),inst_11102);
} else {
if((state_val_11107 === (2))){
var inst_11104 = (state_11106[(2)]);
var state_11106__$1 = state_11106;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11106__$1,inst_11104);
} else {
return null;
}
}
});})(addMap,cword,c__10985__auto____$1,inst_11101,inst_11090,inst_11101__$1,inst_11108,state_val_11174,c__10985__auto___11206))
;
return ((function (switch__10964__auto__,addMap,cword,c__10985__auto____$1,inst_11101,inst_11090,inst_11101__$1,inst_11108,state_val_11174,c__10985__auto___11206){
return (function() {
var server$core$state_machine__10965__auto__ = null;
var server$core$state_machine__10965__auto____0 = (function (){
var statearr_11197 = [null,null,null,null,null,null,null];
(statearr_11197[(0)] = server$core$state_machine__10965__auto__);

(statearr_11197[(1)] = (1));

return statearr_11197;
});
var server$core$state_machine__10965__auto____1 = (function (state_11106){
while(true){
var ret_value__10966__auto__ = (function (){try{while(true){
var result__10967__auto__ = switch__10964__auto__.call(null,state_11106);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10967__auto__;
}
break;
}
}catch (e11198){if((e11198 instanceof Object)){
var ex__10968__auto__ = e11198;
var statearr_11199_11222 = state_11106;
(statearr_11199_11222[(5)] = ex__10968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11106);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11198;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11223 = state_11106;
state_11106 = G__11223;
continue;
} else {
return ret_value__10966__auto__;
}
break;
}
});
server$core$state_machine__10965__auto__ = function(state_11106){
switch(arguments.length){
case 0:
return server$core$state_machine__10965__auto____0.call(this);
case 1:
return server$core$state_machine__10965__auto____1.call(this,state_11106);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$0 = server$core$state_machine__10965__auto____0;
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$1 = server$core$state_machine__10965__auto____1;
return server$core$state_machine__10965__auto__;
})()
;})(switch__10964__auto__,addMap,cword,c__10985__auto____$1,inst_11101,inst_11090,inst_11101__$1,inst_11108,state_val_11174,c__10985__auto___11206))
})();
var state__10987__auto__ = (function (){var statearr_11200 = f__10986__auto__.call(null);
(statearr_11200[(6)] = c__10985__auto____$1);

return statearr_11200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10987__auto__);
});
;})(addMap,cword,c__10985__auto____$1,inst_11101,inst_11090,inst_11101__$1,inst_11108,state_val_11174,c__10985__auto___11206))
})();
var inst_11110 = cljs.core.async.impl.dispatch.run.call(null,inst_11109);
var state_11173__$1 = (function (){var statearr_11201 = state_11173;
(statearr_11201[(14)] = inst_11110);

(statearr_11201[(10)] = inst_11101__$1);

return statearr_11201;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11173__$1,(9),inst_11108);
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
});})(c__10985__auto___11206))
;
return ((function (switch__10964__auto__,c__10985__auto___11206){
return (function() {
var server$core$state_machine__10965__auto__ = null;
var server$core$state_machine__10965__auto____0 = (function (){
var statearr_11202 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11202[(0)] = server$core$state_machine__10965__auto__);

(statearr_11202[(1)] = (1));

return statearr_11202;
});
var server$core$state_machine__10965__auto____1 = (function (state_11173){
while(true){
var ret_value__10966__auto__ = (function (){try{while(true){
var result__10967__auto__ = switch__10964__auto__.call(null,state_11173);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10967__auto__;
}
break;
}
}catch (e11203){if((e11203 instanceof Object)){
var ex__10968__auto__ = e11203;
var statearr_11204_11224 = state_11173;
(statearr_11204_11224[(5)] = ex__10968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11173);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11203;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11225 = state_11173;
state_11173 = G__11225;
continue;
} else {
return ret_value__10966__auto__;
}
break;
}
});
server$core$state_machine__10965__auto__ = function(state_11173){
switch(arguments.length){
case 0:
return server$core$state_machine__10965__auto____0.call(this);
case 1:
return server$core$state_machine__10965__auto____1.call(this,state_11173);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$0 = server$core$state_machine__10965__auto____0;
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$1 = server$core$state_machine__10965__auto____1;
return server$core$state_machine__10965__auto__;
})()
;})(switch__10964__auto__,c__10985__auto___11206))
})();
var state__10987__auto__ = (function (){var statearr_11205 = f__10986__auto__.call(null);
(statearr_11205[(6)] = c__10985__auto___11206);

return statearr_11205;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10987__auto__);
});})(c__10985__auto___11206))
);

server.core.app.post("/addword",(function (req,res){
var bits = clojure.string.split.call(null,req.body.str,/\s/);
var user = req.body.user;
var c__10985__auto___11242 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10985__auto___11242,bits,user){
return (function (){
var f__10986__auto__ = (function (){var switch__10964__auto__ = ((function (c__10985__auto___11242,bits,user){
return (function (state_11235){
var state_val_11236 = (state_11235[(1)]);
if((state_val_11236 === (1))){
var inst_11227 = [new cljs.core.Keyword(null,"cword","cword",-1508063004)];
var inst_11228 = server.core.currentWord.call(null);
var state_11235__$1 = (function (){var statearr_11237 = state_11235;
(statearr_11237[(7)] = inst_11227);

return statearr_11237;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11235__$1,(2),inst_11228);
} else {
if((state_val_11236 === (2))){
var inst_11227 = (state_11235[(7)]);
var inst_11230 = (state_11235[(2)]);
var inst_11231 = [inst_11230];
var inst_11232 = cljs.core.PersistentHashMap.fromArrays(inst_11227,inst_11231);
var inst_11233 = cljs.pprint.pprint.call(null,inst_11232);
var state_11235__$1 = state_11235;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11235__$1,inst_11233);
} else {
return null;
}
}
});})(c__10985__auto___11242,bits,user))
;
return ((function (switch__10964__auto__,c__10985__auto___11242,bits,user){
return (function() {
var server$core$state_machine__10965__auto__ = null;
var server$core$state_machine__10965__auto____0 = (function (){
var statearr_11238 = [null,null,null,null,null,null,null,null];
(statearr_11238[(0)] = server$core$state_machine__10965__auto__);

(statearr_11238[(1)] = (1));

return statearr_11238;
});
var server$core$state_machine__10965__auto____1 = (function (state_11235){
while(true){
var ret_value__10966__auto__ = (function (){try{while(true){
var result__10967__auto__ = switch__10964__auto__.call(null,state_11235);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10967__auto__;
}
break;
}
}catch (e11239){if((e11239 instanceof Object)){
var ex__10968__auto__ = e11239;
var statearr_11240_11243 = state_11235;
(statearr_11240_11243[(5)] = ex__10968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11235);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11239;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11244 = state_11235;
state_11235 = G__11244;
continue;
} else {
return ret_value__10966__auto__;
}
break;
}
});
server$core$state_machine__10965__auto__ = function(state_11235){
switch(arguments.length){
case 0:
return server$core$state_machine__10965__auto____0.call(this);
case 1:
return server$core$state_machine__10965__auto____1.call(this,state_11235);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$0 = server$core$state_machine__10965__auto____0;
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$1 = server$core$state_machine__10965__auto____1;
return server$core$state_machine__10965__auto__;
})()
;})(switch__10964__auto__,c__10985__auto___11242,bits,user))
})();
var state__10987__auto__ = (function (){var statearr_11241 = f__10986__auto__.call(null);
(statearr_11241[(6)] = c__10985__auto___11242);

return statearr_11241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10987__auto__);
});})(c__10985__auto___11242,bits,user))
);


cljs.core.doall.call(null,cljs.core.map.call(null,((function (bits,user){
return (function (p1__11226_SHARP_){
return cljs.core.async.put_BANG_.call(null,server.core.addQue,p1__11226_SHARP_);
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
return (function (state_11251){
var state_val_11252 = (state_11251[(1)]);
if((state_val_11252 === (1))){
var inst_11245 = server.core.allUpdates.call(null);
var state_11251__$1 = state_11251;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11251__$1,(2),inst_11245);
} else {
if((state_val_11252 === (2))){
var inst_11247 = (state_11251[(2)]);
var inst_11248 = cljs.core.clj__GT_js.call(null,inst_11247);
var inst_11249 = res.json(inst_11248);
var state_11251__$1 = state_11251;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11251__$1,inst_11249);
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
var statearr_11253 = [null,null,null,null,null,null,null];
(statearr_11253[(0)] = server$core$state_machine__10965__auto__);

(statearr_11253[(1)] = (1));

return statearr_11253;
});
var server$core$state_machine__10965__auto____1 = (function (state_11251){
while(true){
var ret_value__10966__auto__ = (function (){try{while(true){
var result__10967__auto__ = switch__10964__auto__.call(null,state_11251);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10967__auto__;
}
break;
}
}catch (e11254){if((e11254 instanceof Object)){
var ex__10968__auto__ = e11254;
var statearr_11255_11257 = state_11251;
(statearr_11255_11257[(5)] = ex__10968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11251);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11254;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11258 = state_11251;
state_11251 = G__11258;
continue;
} else {
return ret_value__10966__auto__;
}
break;
}
});
server$core$state_machine__10965__auto__ = function(state_11251){
switch(arguments.length){
case 0:
return server$core$state_machine__10965__auto____0.call(this);
case 1:
return server$core$state_machine__10965__auto____1.call(this,state_11251);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$0 = server$core$state_machine__10965__auto____0;
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$1 = server$core$state_machine__10965__auto____1;
return server$core$state_machine__10965__auto__;
})()
;})(switch__10964__auto__,c__10985__auto__))
})();
var state__10987__auto__ = (function (){var statearr_11256 = f__10986__auto__.call(null);
(statearr_11256[(6)] = c__10985__auto__);

return statearr_11256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10987__auto__);
});})(c__10985__auto__))
);

return c__10985__auto__;
}));
server.core.sttAuthService = (new server.core.node$module$watson_developer_cloud.AuthorizationV1((function (){var obj11260 = {"username":"1b860fd3-bf11-4cc6-a962-5bac776d5744","password":"LZ2TNegMz6NX"};
return obj11260;
})()));
server.core.app.use("/api/speech-to-text/token",(function (req,res){
return server.core.sttAuthService.getToken((function (){var obj11262 = {"url":server.core.node$module$watson_developer_cloud.SpeechToTextV1.URL};
return obj11262;
})(),(function (err,token){
return res.send(token);
}));
}));
server.core._main = (function server$core$_main(var_args){
var args__9230__auto__ = [];
var len__9223__auto___11264 = arguments.length;
var i__9224__auto___11265 = (0);
while(true){
if((i__9224__auto___11265 < len__9223__auto___11264)){
args__9230__auto__.push((arguments[i__9224__auto___11265]));

var G__11266 = (i__9224__auto___11265 + (1));
i__9224__auto___11265 = G__11266;
continue;
} else {
}
break;
}

var argseq__9231__auto__ = ((((0) < args__9230__auto__.length))?(new cljs.core.IndexedSeq(args__9230__auto__.slice((0)),(0),null)):null);
return server.core._main.cljs$core$IFn$_invoke$arity$variadic(argseq__9231__auto__);
});

server.core._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return server.core.server.listen((3000));
});

server.core._main.cljs$lang$maxFixedArity = (0);

server.core._main.cljs$lang$applyTo = (function (seq11263){
return server.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11263));
});

cljs.core._STAR_main_cli_fn_STAR_ = server.core._main;

//# sourceMappingURL=core.js.map
