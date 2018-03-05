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
server.core.db = (new server.core.node$module$nedb((function (){var obj11779 = {"filename":"./dbs/updates","autoload":true};
return obj11779;
})()));
server.core.app = server.core.node$module$express.call(null);
server.core.http = cljs.nodejs.require.call(null,"http");
server.core.server = server.core.http.Server(server.core.app);
server.core.io = server.core.node$module$socket$io.call(null,server.core.server);
server.core.io.on("connection",(function (p1__11780_SHARP_){
return p1__11780_SHARP_.on("word",(function (worddata){
return (function (d){
var bits = clojure.string.split.call(null,new cljs.core.Keyword(null,"words","words",1924933001).cljs$core$IFn$_invoke$arity$1(d),/\s/);
var user = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(d);
var c__10985__auto___11796 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10985__auto___11796,bits,user){
return (function (){
var f__10986__auto__ = (function (){var switch__10964__auto__ = ((function (c__10985__auto___11796,bits,user){
return (function (state_11789){
var state_val_11790 = (state_11789[(1)]);
if((state_val_11790 === (1))){
var inst_11781 = [new cljs.core.Keyword(null,"cword","cword",-1508063004)];
var inst_11782 = server.core.currentWord.call(null);
var state_11789__$1 = (function (){var statearr_11791 = state_11789;
(statearr_11791[(7)] = inst_11781);

return statearr_11791;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11789__$1,(2),inst_11782);
} else {
if((state_val_11790 === (2))){
var inst_11781 = (state_11789[(7)]);
var inst_11784 = (state_11789[(2)]);
var inst_11785 = [inst_11784];
var inst_11786 = cljs.core.PersistentHashMap.fromArrays(inst_11781,inst_11785);
var inst_11787 = cljs.pprint.pprint.call(null,inst_11786);
var state_11789__$1 = state_11789;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11789__$1,inst_11787);
} else {
return null;
}
}
});})(c__10985__auto___11796,bits,user))
;
return ((function (switch__10964__auto__,c__10985__auto___11796,bits,user){
return (function() {
var server$core$state_machine__10965__auto__ = null;
var server$core$state_machine__10965__auto____0 = (function (){
var statearr_11792 = [null,null,null,null,null,null,null,null];
(statearr_11792[(0)] = server$core$state_machine__10965__auto__);

(statearr_11792[(1)] = (1));

return statearr_11792;
});
var server$core$state_machine__10965__auto____1 = (function (state_11789){
while(true){
var ret_value__10966__auto__ = (function (){try{while(true){
var result__10967__auto__ = switch__10964__auto__.call(null,state_11789);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10967__auto__;
}
break;
}
}catch (e11793){if((e11793 instanceof Object)){
var ex__10968__auto__ = e11793;
var statearr_11794_11797 = state_11789;
(statearr_11794_11797[(5)] = ex__10968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11789);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11793;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11798 = state_11789;
state_11789 = G__11798;
continue;
} else {
return ret_value__10966__auto__;
}
break;
}
});
server$core$state_machine__10965__auto__ = function(state_11789){
switch(arguments.length){
case 0:
return server$core$state_machine__10965__auto____0.call(this);
case 1:
return server$core$state_machine__10965__auto____1.call(this,state_11789);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$0 = server$core$state_machine__10965__auto____0;
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$1 = server$core$state_machine__10965__auto____1;
return server$core$state_machine__10965__auto__;
})()
;})(switch__10964__auto__,c__10985__auto___11796,bits,user))
})();
var state__10987__auto__ = (function (){var statearr_11795 = f__10986__auto__.call(null);
(statearr_11795[(6)] = c__10985__auto___11796);

return statearr_11795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10987__auto__);
});})(c__10985__auto___11796,bits,user))
);


cljs.pprint.pprint.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bits","bits",-1206785969),bits,new cljs.core.Keyword(null,"user","user",1532431356),user], null));

return cljs.core.doall.call(null,cljs.core.map.call(null,((function (bits,user){
return (function (x){
return cljs.core.async.put_BANG_.call(null,server.core.addQue,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"word","word",-420123725),x,new cljs.core.Keyword(null,"user","user",1532431356),user], null));
});})(bits,user))
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
server.core.db.find({}).sort((function (){var obj11802 = {"start":(-1)};
return obj11802;
})()).exec(((function (c){
return (function (err,res){
return cljs.core.async.put_BANG_.call(null,c,res);
});})(c))
);

return c;
});
server.core.latestUpdate = (function server$core$latestUpdate(){
var c = cljs.core.async.chan.call(null);
server.core.db.find({}).sort((function (){var obj11809 = {"start":(-1)};
return obj11809;
})()).limit((1)).exec(((function (c){
return (function (err,res){
return ((function (c){
return (function (p1__11805_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__11805_SHARP_);
});})(c))
.call(null,((function (c){
return (function (p1__11804_SHARP_){
return cljs.core.js__GT_clj.call(null,p1__11804_SHARP_,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});})(c))
.call(null,((function (c){
return (function (p1__11803_SHARP_){
return cljs.core.first.call(null,p1__11803_SHARP_);
});})(c))
.call(null,res)));
});})(c))
);

return c;
});
server.core.currentWord = (function server$core$currentWord(){
var c = cljs.core.async.chan.call(null);
var c__10985__auto___11829 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10985__auto___11829,c){
return (function (){
var f__10986__auto__ = (function (){var switch__10964__auto__ = ((function (c__10985__auto___11829,c){
return (function (state_11822){
var state_val_11823 = (state_11822[(1)]);
if((state_val_11823 === (1))){
var inst_11812 = (function (){return ((function (state_val_11823,c__10985__auto___11829,c){
return (function (p1__11811_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__11811_SHARP_);
});
;})(state_val_11823,c__10985__auto___11829,c))
})();
var inst_11813 = (function (){return ((function (inst_11812,state_val_11823,c__10985__auto___11829,c){
return (function (index){
var words = clojure.string.split.call(null,server.core.faketxt,/\s/);
return cljs.core.nth.call(null,words,index);
});
;})(inst_11812,state_val_11823,c__10985__auto___11829,c))
})();
var inst_11814 = (function (){return ((function (inst_11812,inst_11813,state_val_11823,c__10985__auto___11829,c){
return (function (p1__11810_SHARP_){
return new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(p1__11810_SHARP_);
});
;})(inst_11812,inst_11813,state_val_11823,c__10985__auto___11829,c))
})();
var inst_11815 = server.core.latestUpdate.call(null);
var state_11822__$1 = (function (){var statearr_11824 = state_11822;
(statearr_11824[(7)] = inst_11812);

(statearr_11824[(8)] = inst_11814);

(statearr_11824[(9)] = inst_11813);

return statearr_11824;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11822__$1,(2),inst_11815);
} else {
if((state_val_11823 === (2))){
var inst_11812 = (state_11822[(7)]);
var inst_11814 = (state_11822[(8)]);
var inst_11813 = (state_11822[(9)]);
var inst_11817 = (state_11822[(2)]);
var inst_11818 = inst_11814.call(null,inst_11817);
var inst_11819 = inst_11813.call(null,inst_11818);
var inst_11820 = inst_11812.call(null,inst_11819);
var state_11822__$1 = state_11822;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11822__$1,inst_11820);
} else {
return null;
}
}
});})(c__10985__auto___11829,c))
;
return ((function (switch__10964__auto__,c__10985__auto___11829,c){
return (function() {
var server$core$currentWord_$_state_machine__10965__auto__ = null;
var server$core$currentWord_$_state_machine__10965__auto____0 = (function (){
var statearr_11825 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11825[(0)] = server$core$currentWord_$_state_machine__10965__auto__);

(statearr_11825[(1)] = (1));

return statearr_11825;
});
var server$core$currentWord_$_state_machine__10965__auto____1 = (function (state_11822){
while(true){
var ret_value__10966__auto__ = (function (){try{while(true){
var result__10967__auto__ = switch__10964__auto__.call(null,state_11822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10967__auto__;
}
break;
}
}catch (e11826){if((e11826 instanceof Object)){
var ex__10968__auto__ = e11826;
var statearr_11827_11830 = state_11822;
(statearr_11827_11830[(5)] = ex__10968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11826;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11831 = state_11822;
state_11822 = G__11831;
continue;
} else {
return ret_value__10966__auto__;
}
break;
}
});
server$core$currentWord_$_state_machine__10965__auto__ = function(state_11822){
switch(arguments.length){
case 0:
return server$core$currentWord_$_state_machine__10965__auto____0.call(this);
case 1:
return server$core$currentWord_$_state_machine__10965__auto____1.call(this,state_11822);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
server$core$currentWord_$_state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$0 = server$core$currentWord_$_state_machine__10965__auto____0;
server$core$currentWord_$_state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$1 = server$core$currentWord_$_state_machine__10965__auto____1;
return server$core$currentWord_$_state_machine__10965__auto__;
})()
;})(switch__10964__auto__,c__10985__auto___11829,c))
})();
var state__10987__auto__ = (function (){var statearr_11828 = f__10986__auto__.call(null);
(statearr_11828[(6)] = c__10985__auto___11829);

return statearr_11828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10987__auto__);
});})(c__10985__auto___11829,c))
);


return c;
});
var c__10985__auto___11843 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10985__auto___11843){
return (function (){
var f__10986__auto__ = (function (){var switch__10964__auto__ = ((function (c__10985__auto___11843){
return (function (state_11837){
var state_val_11838 = (state_11837[(1)]);
if((state_val_11838 === (1))){
var inst_11832 = server.core.currentWord.call(null);
var state_11837__$1 = state_11837;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11837__$1,(2),inst_11832);
} else {
if((state_val_11838 === (2))){
var inst_11834 = (state_11837[(2)]);
var inst_11835 = cljs.pprint.pprint.call(null,inst_11834);
var state_11837__$1 = state_11837;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11837__$1,inst_11835);
} else {
return null;
}
}
});})(c__10985__auto___11843))
;
return ((function (switch__10964__auto__,c__10985__auto___11843){
return (function() {
var server$core$state_machine__10965__auto__ = null;
var server$core$state_machine__10965__auto____0 = (function (){
var statearr_11839 = [null,null,null,null,null,null,null];
(statearr_11839[(0)] = server$core$state_machine__10965__auto__);

(statearr_11839[(1)] = (1));

return statearr_11839;
});
var server$core$state_machine__10965__auto____1 = (function (state_11837){
while(true){
var ret_value__10966__auto__ = (function (){try{while(true){
var result__10967__auto__ = switch__10964__auto__.call(null,state_11837);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10967__auto__;
}
break;
}
}catch (e11840){if((e11840 instanceof Object)){
var ex__10968__auto__ = e11840;
var statearr_11841_11844 = state_11837;
(statearr_11841_11844[(5)] = ex__10968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11837);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11840;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11845 = state_11837;
state_11837 = G__11845;
continue;
} else {
return ret_value__10966__auto__;
}
break;
}
});
server$core$state_machine__10965__auto__ = function(state_11837){
switch(arguments.length){
case 0:
return server$core$state_machine__10965__auto____0.call(this);
case 1:
return server$core$state_machine__10965__auto____1.call(this,state_11837);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$0 = server$core$state_machine__10965__auto____0;
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$1 = server$core$state_machine__10965__auto____1;
return server$core$state_machine__10965__auto__;
})()
;})(switch__10964__auto__,c__10985__auto___11843))
})();
var state__10987__auto__ = (function (){var statearr_11842 = f__10986__auto__.call(null);
(statearr_11842[(6)] = c__10985__auto___11843);

return statearr_11842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10987__auto__);
});})(c__10985__auto___11843))
);

server.core.addQue = cljs.core.async.chan.call(null);
var c__10985__auto___11965 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10985__auto___11965){
return (function (){
var f__10986__auto__ = (function (){var switch__10964__auto__ = ((function (c__10985__auto___11965){
return (function (state_11932){
var state_val_11933 = (state_11932[(1)]);
if((state_val_11933 === (7))){
var inst_11849 = (state_11932[(7)]);
var inst_11849__$1 = (state_11932[(2)]);
var inst_11856 = cljs.core.async.chan.call(null,(1));
var inst_11857 = (function (){var addMap = inst_11849__$1;
var c__10985__auto____$1 = inst_11856;
return ((function (addMap,c__10985__auto____$1,inst_11849,inst_11849__$1,inst_11856,state_val_11933,c__10985__auto___11965){
return (function (){
var f__10986__auto__ = (function (){var switch__10964__auto__ = ((function (addMap,c__10985__auto____$1,inst_11849,inst_11849__$1,inst_11856,state_val_11933,c__10985__auto___11965){
return (function (state_11854){
var state_val_11855 = (state_11854[(1)]);
if((state_val_11855 === (1))){
var inst_11850 = server.core.currentWord.call(null);
var state_11854__$1 = state_11854;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11854__$1,(2),inst_11850);
} else {
if((state_val_11855 === (2))){
var inst_11852 = (state_11854[(2)]);
var state_11854__$1 = state_11854;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11854__$1,inst_11852);
} else {
return null;
}
}
});})(addMap,c__10985__auto____$1,inst_11849,inst_11849__$1,inst_11856,state_val_11933,c__10985__auto___11965))
;
return ((function (switch__10964__auto__,addMap,c__10985__auto____$1,inst_11849,inst_11849__$1,inst_11856,state_val_11933,c__10985__auto___11965){
return (function() {
var server$core$state_machine__10965__auto__ = null;
var server$core$state_machine__10965__auto____0 = (function (){
var statearr_11934 = [null,null,null,null,null,null,null];
(statearr_11934[(0)] = server$core$state_machine__10965__auto__);

(statearr_11934[(1)] = (1));

return statearr_11934;
});
var server$core$state_machine__10965__auto____1 = (function (state_11854){
while(true){
var ret_value__10966__auto__ = (function (){try{while(true){
var result__10967__auto__ = switch__10964__auto__.call(null,state_11854);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10967__auto__;
}
break;
}
}catch (e11935){if((e11935 instanceof Object)){
var ex__10968__auto__ = e11935;
var statearr_11936_11966 = state_11854;
(statearr_11936_11966[(5)] = ex__10968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11854);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11935;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11967 = state_11854;
state_11854 = G__11967;
continue;
} else {
return ret_value__10966__auto__;
}
break;
}
});
server$core$state_machine__10965__auto__ = function(state_11854){
switch(arguments.length){
case 0:
return server$core$state_machine__10965__auto____0.call(this);
case 1:
return server$core$state_machine__10965__auto____1.call(this,state_11854);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$0 = server$core$state_machine__10965__auto____0;
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$1 = server$core$state_machine__10965__auto____1;
return server$core$state_machine__10965__auto__;
})()
;})(switch__10964__auto__,addMap,c__10985__auto____$1,inst_11849,inst_11849__$1,inst_11856,state_val_11933,c__10985__auto___11965))
})();
var state__10987__auto__ = (function (){var statearr_11937 = f__10986__auto__.call(null);
(statearr_11937[(6)] = c__10985__auto____$1);

return statearr_11937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10987__auto__);
});
;})(addMap,c__10985__auto____$1,inst_11849,inst_11849__$1,inst_11856,state_val_11933,c__10985__auto___11965))
})();
var inst_11858 = cljs.core.async.impl.dispatch.run.call(null,inst_11857);
var state_11932__$1 = (function (){var statearr_11938 = state_11932;
(statearr_11938[(8)] = inst_11858);

(statearr_11938[(7)] = inst_11849__$1);

return statearr_11938;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11932__$1,(8),inst_11856);
} else {
if((state_val_11933 === (1))){
var state_11932__$1 = state_11932;
var statearr_11939_11968 = state_11932__$1;
(statearr_11939_11968[(2)] = null);

(statearr_11939_11968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11933 === (4))){
var state_11932__$1 = state_11932;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11932__$1,(7),server.core.addQue);
} else {
if((state_val_11933 === (15))){
var inst_11924 = (state_11932[(2)]);
var state_11932__$1 = (function (){var statearr_11940 = state_11932;
(statearr_11940[(9)] = inst_11924);

return statearr_11940;
})();
var statearr_11941_11969 = state_11932__$1;
(statearr_11941_11969[(2)] = null);

(statearr_11941_11969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11933 === (13))){
var inst_11860 = (state_11932[(10)]);
var inst_11849 = (state_11932[(7)]);
var inst_11871 = (state_11932[(11)]);
var inst_11914 = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(inst_11849);
var inst_11915 = new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(inst_11871);
var inst_11916 = (inst_11915 + (1));
var inst_11917 = new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(inst_11871);
var inst_11918 = (inst_11917 + (2));
var inst_11919 = {"user":inst_11914,"start":inst_11916,"end":inst_11918};
var inst_11920 = (function (){var addMap = inst_11849;
var cword = inst_11860;
var lupdate = inst_11871;
return ((function (addMap,cword,lupdate,inst_11860,inst_11849,inst_11871,inst_11914,inst_11915,inst_11916,inst_11917,inst_11918,inst_11919,state_val_11933,c__10985__auto___11965){
return (function (err,res){
return cljs.core.println.call(null,"Inserted Update");
});
;})(addMap,cword,lupdate,inst_11860,inst_11849,inst_11871,inst_11914,inst_11915,inst_11916,inst_11917,inst_11918,inst_11919,state_val_11933,c__10985__auto___11965))
})();
var inst_11921 = server.core.db.insert(inst_11919,inst_11920);
var state_11932__$1 = state_11932;
var statearr_11942_11970 = state_11932__$1;
(statearr_11942_11970[(2)] = inst_11921);

(statearr_11942_11970[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11933 === (6))){
var inst_11928 = (state_11932[(2)]);
var state_11932__$1 = state_11932;
var statearr_11943_11971 = state_11932__$1;
(statearr_11943_11971[(2)] = inst_11928);

(statearr_11943_11971[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11933 === (3))){
var inst_11930 = (state_11932[(2)]);
var state_11932__$1 = state_11932;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11932__$1,inst_11930);
} else {
if((state_val_11933 === (12))){
var inst_11860 = (state_11932[(10)]);
var inst_11849 = (state_11932[(7)]);
var inst_11871 = (state_11932[(11)]);
var inst_11904 = (state_11932[(2)]);
var inst_11905 = new cljs.core.Keyword(null,"word","word",-420123725).cljs$core$IFn$_invoke$arity$1(inst_11849);
var inst_11906 = cljs.core._EQ_.call(null,inst_11860,inst_11905);
var inst_11907 = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(inst_11849);
var inst_11908 = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(inst_11871);
var inst_11909 = cljs.core.not_EQ_.call(null,inst_11907,inst_11908);
var inst_11910 = (inst_11906) && (inst_11909);
var state_11932__$1 = (function (){var statearr_11944 = state_11932;
(statearr_11944[(12)] = inst_11904);

return statearr_11944;
})();
if(cljs.core.truth_(inst_11910)){
var statearr_11945_11972 = state_11932__$1;
(statearr_11945_11972[(1)] = (13));

} else {
var statearr_11946_11973 = state_11932__$1;
(statearr_11946_11973[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11933 === (2))){
var state_11932__$1 = state_11932;
var statearr_11947_11974 = state_11932__$1;
(statearr_11947_11974[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11933 === (11))){
var state_11932__$1 = state_11932;
var statearr_11949_11975 = state_11932__$1;
(statearr_11949_11975[(2)] = null);

(statearr_11949_11975[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11933 === (9))){
var inst_11860 = (state_11932[(10)]);
var inst_11849 = (state_11932[(7)]);
var inst_11871 = (state_11932[(11)]);
var inst_11871__$1 = (state_11932[(2)]);
var inst_11872 = [new cljs.core.Keyword(null,"word","word",-420123725),new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"cword","cword",-1508063004),new cljs.core.Keyword(null,"lupdate","lupdate",17002411)];
var inst_11873 = new cljs.core.Keyword(null,"word","word",-420123725).cljs$core$IFn$_invoke$arity$1(inst_11849);
var inst_11874 = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(inst_11849);
var inst_11875 = [inst_11873,inst_11874,inst_11860,inst_11871__$1];
var inst_11876 = cljs.core.PersistentHashMap.fromArrays(inst_11872,inst_11875);
var inst_11877 = cljs.pprint.pprint.call(null,inst_11876);
var inst_11878 = new cljs.core.Keyword(null,"word","word",-420123725).cljs$core$IFn$_invoke$arity$1(inst_11849);
var inst_11879 = cljs.core._EQ_.call(null,inst_11860,inst_11878);
var inst_11880 = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(inst_11849);
var inst_11881 = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(inst_11871__$1);
var inst_11882 = cljs.core._EQ_.call(null,inst_11880,inst_11881);
var inst_11883 = (inst_11879) && (inst_11882);
var state_11932__$1 = (function (){var statearr_11950 = state_11932;
(statearr_11950[(13)] = inst_11877);

(statearr_11950[(11)] = inst_11871__$1);

return statearr_11950;
})();
if(cljs.core.truth_(inst_11883)){
var statearr_11951_11976 = state_11932__$1;
(statearr_11951_11976[(1)] = (10));

} else {
var statearr_11952_11977 = state_11932__$1;
(statearr_11952_11977[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11933 === (5))){
var state_11932__$1 = state_11932;
var statearr_11953_11978 = state_11932__$1;
(statearr_11953_11978[(2)] = null);

(statearr_11953_11978[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11933 === (14))){
var state_11932__$1 = state_11932;
var statearr_11954_11979 = state_11932__$1;
(statearr_11954_11979[(2)] = null);

(statearr_11954_11979[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11933 === (10))){
var inst_11860 = (state_11932[(10)]);
var inst_11849 = (state_11932[(7)]);
var inst_11871 = (state_11932[(11)]);
var inst_11887 = new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(inst_11871);
var inst_11888 = {"_id":inst_11887};
var inst_11893 = new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(inst_11871);
var inst_11894 = (inst_11893 + (1));
var inst_11895 = {"end":inst_11894};
var inst_11896 = {"$set":inst_11895};
var inst_11899 = {"multi":true};
var inst_11900 = (function (){var addMap = inst_11849;
var cword = inst_11860;
var lupdate = inst_11871;
return ((function (addMap,cword,lupdate,inst_11860,inst_11849,inst_11871,inst_11887,inst_11888,inst_11893,inst_11894,inst_11895,inst_11896,inst_11899,state_val_11933,c__10985__auto___11965){
return (function (err,res){
return cljs.core.println.call(null,"Updated Last update");
});
;})(addMap,cword,lupdate,inst_11860,inst_11849,inst_11871,inst_11887,inst_11888,inst_11893,inst_11894,inst_11895,inst_11896,inst_11899,state_val_11933,c__10985__auto___11965))
})();
var inst_11901 = server.core.db.update(inst_11888,inst_11896,inst_11899,inst_11900);
var state_11932__$1 = state_11932;
var statearr_11955_11980 = state_11932__$1;
(statearr_11955_11980[(2)] = inst_11901);

(statearr_11955_11980[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11933 === (8))){
var inst_11860 = (state_11932[(10)]);
var inst_11849 = (state_11932[(7)]);
var inst_11860__$1 = (state_11932[(2)]);
var inst_11867 = cljs.core.async.chan.call(null,(1));
var inst_11868 = (function (){var addMap = inst_11849;
var cword = inst_11860__$1;
var c__10985__auto____$1 = inst_11867;
return ((function (addMap,cword,c__10985__auto____$1,inst_11860,inst_11849,inst_11860__$1,inst_11867,state_val_11933,c__10985__auto___11965){
return (function (){
var f__10986__auto__ = (function (){var switch__10964__auto__ = ((function (addMap,cword,c__10985__auto____$1,inst_11860,inst_11849,inst_11860__$1,inst_11867,state_val_11933,c__10985__auto___11965){
return (function (state_11865){
var state_val_11866 = (state_11865[(1)]);
if((state_val_11866 === (1))){
var inst_11861 = server.core.latestUpdate.call(null);
var state_11865__$1 = state_11865;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11865__$1,(2),inst_11861);
} else {
if((state_val_11866 === (2))){
var inst_11863 = (state_11865[(2)]);
var state_11865__$1 = state_11865;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11865__$1,inst_11863);
} else {
return null;
}
}
});})(addMap,cword,c__10985__auto____$1,inst_11860,inst_11849,inst_11860__$1,inst_11867,state_val_11933,c__10985__auto___11965))
;
return ((function (switch__10964__auto__,addMap,cword,c__10985__auto____$1,inst_11860,inst_11849,inst_11860__$1,inst_11867,state_val_11933,c__10985__auto___11965){
return (function() {
var server$core$state_machine__10965__auto__ = null;
var server$core$state_machine__10965__auto____0 = (function (){
var statearr_11956 = [null,null,null,null,null,null,null];
(statearr_11956[(0)] = server$core$state_machine__10965__auto__);

(statearr_11956[(1)] = (1));

return statearr_11956;
});
var server$core$state_machine__10965__auto____1 = (function (state_11865){
while(true){
var ret_value__10966__auto__ = (function (){try{while(true){
var result__10967__auto__ = switch__10964__auto__.call(null,state_11865);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10967__auto__;
}
break;
}
}catch (e11957){if((e11957 instanceof Object)){
var ex__10968__auto__ = e11957;
var statearr_11958_11981 = state_11865;
(statearr_11958_11981[(5)] = ex__10968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11865);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11957;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11982 = state_11865;
state_11865 = G__11982;
continue;
} else {
return ret_value__10966__auto__;
}
break;
}
});
server$core$state_machine__10965__auto__ = function(state_11865){
switch(arguments.length){
case 0:
return server$core$state_machine__10965__auto____0.call(this);
case 1:
return server$core$state_machine__10965__auto____1.call(this,state_11865);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$0 = server$core$state_machine__10965__auto____0;
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$1 = server$core$state_machine__10965__auto____1;
return server$core$state_machine__10965__auto__;
})()
;})(switch__10964__auto__,addMap,cword,c__10985__auto____$1,inst_11860,inst_11849,inst_11860__$1,inst_11867,state_val_11933,c__10985__auto___11965))
})();
var state__10987__auto__ = (function (){var statearr_11959 = f__10986__auto__.call(null);
(statearr_11959[(6)] = c__10985__auto____$1);

return statearr_11959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10987__auto__);
});
;})(addMap,cword,c__10985__auto____$1,inst_11860,inst_11849,inst_11860__$1,inst_11867,state_val_11933,c__10985__auto___11965))
})();
var inst_11869 = cljs.core.async.impl.dispatch.run.call(null,inst_11868);
var state_11932__$1 = (function (){var statearr_11960 = state_11932;
(statearr_11960[(10)] = inst_11860__$1);

(statearr_11960[(14)] = inst_11869);

return statearr_11960;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11932__$1,(9),inst_11867);
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
});})(c__10985__auto___11965))
;
return ((function (switch__10964__auto__,c__10985__auto___11965){
return (function() {
var server$core$state_machine__10965__auto__ = null;
var server$core$state_machine__10965__auto____0 = (function (){
var statearr_11961 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11961[(0)] = server$core$state_machine__10965__auto__);

(statearr_11961[(1)] = (1));

return statearr_11961;
});
var server$core$state_machine__10965__auto____1 = (function (state_11932){
while(true){
var ret_value__10966__auto__ = (function (){try{while(true){
var result__10967__auto__ = switch__10964__auto__.call(null,state_11932);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10967__auto__;
}
break;
}
}catch (e11962){if((e11962 instanceof Object)){
var ex__10968__auto__ = e11962;
var statearr_11963_11983 = state_11932;
(statearr_11963_11983[(5)] = ex__10968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11932);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11962;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11984 = state_11932;
state_11932 = G__11984;
continue;
} else {
return ret_value__10966__auto__;
}
break;
}
});
server$core$state_machine__10965__auto__ = function(state_11932){
switch(arguments.length){
case 0:
return server$core$state_machine__10965__auto____0.call(this);
case 1:
return server$core$state_machine__10965__auto____1.call(this,state_11932);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$0 = server$core$state_machine__10965__auto____0;
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$1 = server$core$state_machine__10965__auto____1;
return server$core$state_machine__10965__auto__;
})()
;})(switch__10964__auto__,c__10985__auto___11965))
})();
var state__10987__auto__ = (function (){var statearr_11964 = f__10986__auto__.call(null);
(statearr_11964[(6)] = c__10985__auto___11965);

return statearr_11964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10987__auto__);
});})(c__10985__auto___11965))
);

server.core.app.post("/addword",(function (req,res){
var bits = clojure.string.split.call(null,req.body.str,/\s/);
var user = req.body.user;
var c__10985__auto___12001 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10985__auto___12001,bits,user){
return (function (){
var f__10986__auto__ = (function (){var switch__10964__auto__ = ((function (c__10985__auto___12001,bits,user){
return (function (state_11994){
var state_val_11995 = (state_11994[(1)]);
if((state_val_11995 === (1))){
var inst_11986 = [new cljs.core.Keyword(null,"cword","cword",-1508063004)];
var inst_11987 = server.core.currentWord.call(null);
var state_11994__$1 = (function (){var statearr_11996 = state_11994;
(statearr_11996[(7)] = inst_11986);

return statearr_11996;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11994__$1,(2),inst_11987);
} else {
if((state_val_11995 === (2))){
var inst_11986 = (state_11994[(7)]);
var inst_11989 = (state_11994[(2)]);
var inst_11990 = [inst_11989];
var inst_11991 = cljs.core.PersistentHashMap.fromArrays(inst_11986,inst_11990);
var inst_11992 = cljs.pprint.pprint.call(null,inst_11991);
var state_11994__$1 = state_11994;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11994__$1,inst_11992);
} else {
return null;
}
}
});})(c__10985__auto___12001,bits,user))
;
return ((function (switch__10964__auto__,c__10985__auto___12001,bits,user){
return (function() {
var server$core$state_machine__10965__auto__ = null;
var server$core$state_machine__10965__auto____0 = (function (){
var statearr_11997 = [null,null,null,null,null,null,null,null];
(statearr_11997[(0)] = server$core$state_machine__10965__auto__);

(statearr_11997[(1)] = (1));

return statearr_11997;
});
var server$core$state_machine__10965__auto____1 = (function (state_11994){
while(true){
var ret_value__10966__auto__ = (function (){try{while(true){
var result__10967__auto__ = switch__10964__auto__.call(null,state_11994);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10967__auto__;
}
break;
}
}catch (e11998){if((e11998 instanceof Object)){
var ex__10968__auto__ = e11998;
var statearr_11999_12002 = state_11994;
(statearr_11999_12002[(5)] = ex__10968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11994);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11998;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12003 = state_11994;
state_11994 = G__12003;
continue;
} else {
return ret_value__10966__auto__;
}
break;
}
});
server$core$state_machine__10965__auto__ = function(state_11994){
switch(arguments.length){
case 0:
return server$core$state_machine__10965__auto____0.call(this);
case 1:
return server$core$state_machine__10965__auto____1.call(this,state_11994);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$0 = server$core$state_machine__10965__auto____0;
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$1 = server$core$state_machine__10965__auto____1;
return server$core$state_machine__10965__auto__;
})()
;})(switch__10964__auto__,c__10985__auto___12001,bits,user))
})();
var state__10987__auto__ = (function (){var statearr_12000 = f__10986__auto__.call(null);
(statearr_12000[(6)] = c__10985__auto___12001);

return statearr_12000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10987__auto__);
});})(c__10985__auto___12001,bits,user))
);


cljs.core.doall.call(null,cljs.core.map.call(null,((function (bits,user){
return (function (p1__11985_SHARP_){
return cljs.core.async.put_BANG_.call(null,server.core.addQue,p1__11985_SHARP_);
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
return (function (state_12010){
var state_val_12011 = (state_12010[(1)]);
if((state_val_12011 === (1))){
var inst_12004 = server.core.allUpdates.call(null);
var state_12010__$1 = state_12010;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12010__$1,(2),inst_12004);
} else {
if((state_val_12011 === (2))){
var inst_12006 = (state_12010[(2)]);
var inst_12007 = cljs.core.clj__GT_js.call(null,inst_12006);
var inst_12008 = res.json(inst_12007);
var state_12010__$1 = state_12010;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12010__$1,inst_12008);
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
var statearr_12012 = [null,null,null,null,null,null,null];
(statearr_12012[(0)] = server$core$state_machine__10965__auto__);

(statearr_12012[(1)] = (1));

return statearr_12012;
});
var server$core$state_machine__10965__auto____1 = (function (state_12010){
while(true){
var ret_value__10966__auto__ = (function (){try{while(true){
var result__10967__auto__ = switch__10964__auto__.call(null,state_12010);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10967__auto__;
}
break;
}
}catch (e12013){if((e12013 instanceof Object)){
var ex__10968__auto__ = e12013;
var statearr_12014_12016 = state_12010;
(statearr_12014_12016[(5)] = ex__10968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12010);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12013;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12017 = state_12010;
state_12010 = G__12017;
continue;
} else {
return ret_value__10966__auto__;
}
break;
}
});
server$core$state_machine__10965__auto__ = function(state_12010){
switch(arguments.length){
case 0:
return server$core$state_machine__10965__auto____0.call(this);
case 1:
return server$core$state_machine__10965__auto____1.call(this,state_12010);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$0 = server$core$state_machine__10965__auto____0;
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$1 = server$core$state_machine__10965__auto____1;
return server$core$state_machine__10965__auto__;
})()
;})(switch__10964__auto__,c__10985__auto__))
})();
var state__10987__auto__ = (function (){var statearr_12015 = f__10986__auto__.call(null);
(statearr_12015[(6)] = c__10985__auto__);

return statearr_12015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10987__auto__);
});})(c__10985__auto__))
);

return c__10985__auto__;
}));
server.core.sttAuthService = (new server.core.node$module$watson_developer_cloud.AuthorizationV1((function (){var obj12019 = {"username":"1b860fd3-bf11-4cc6-a962-5bac776d5744","password":"LZ2TNegMz6NX"};
return obj12019;
})()));
server.core.app.use("/api/speech-to-text/token",(function (req,res){
return server.core.sttAuthService.getToken((function (){var obj12021 = {"url":server.core.node$module$watson_developer_cloud.SpeechToTextV1.URL};
return obj12021;
})(),(function (err,token){
return res.send(token);
}));
}));
server.core._main = (function server$core$_main(var_args){
var args__9230__auto__ = [];
var len__9223__auto___12023 = arguments.length;
var i__9224__auto___12024 = (0);
while(true){
if((i__9224__auto___12024 < len__9223__auto___12023)){
args__9230__auto__.push((arguments[i__9224__auto___12024]));

var G__12025 = (i__9224__auto___12024 + (1));
i__9224__auto___12024 = G__12025;
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

server.core._main.cljs$lang$applyTo = (function (seq12022){
return server.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12022));
});

cljs.core._STAR_main_cli_fn_STAR_ = server.core._main;

//# sourceMappingURL=core.js.map
