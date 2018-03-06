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
server.core.db = (new server.core.node$module$nedb((function (){var obj13735 = {"filename":"./dbs/updates","autoload":true};
return obj13735;
})()));
server.core.app = server.core.node$module$express.call(null);
server.core.http = cljs.nodejs.require.call(null,"http");
server.core.server = server.core.http.Server(server.core.app);
server.core.io = server.core.node$module$socket$io.call(null,server.core.server);
server.core.io.on("connection",(function (p1__13736_SHARP_){
return p1__13736_SHARP_.on("word",(function (worddata){
return (function (d){
var bits = clojure.string.split.call(null,new cljs.core.Keyword(null,"words","words",1924933001).cljs$core$IFn$_invoke$arity$1(d),/\s/);
var uname = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(d);
var c__10985__auto___13752 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10985__auto___13752,bits,uname){
return (function (){
var f__10986__auto__ = (function (){var switch__10964__auto__ = ((function (c__10985__auto___13752,bits,uname){
return (function (state_13745){
var state_val_13746 = (state_13745[(1)]);
if((state_val_13746 === (1))){
var inst_13737 = [new cljs.core.Keyword(null,"cword","cword",-1508063004)];
var inst_13738 = server.core.currentWord.call(null);
var state_13745__$1 = (function (){var statearr_13747 = state_13745;
(statearr_13747[(7)] = inst_13737);

return statearr_13747;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13745__$1,(2),inst_13738);
} else {
if((state_val_13746 === (2))){
var inst_13737 = (state_13745[(7)]);
var inst_13740 = (state_13745[(2)]);
var inst_13741 = [inst_13740];
var inst_13742 = cljs.core.PersistentHashMap.fromArrays(inst_13737,inst_13741);
var inst_13743 = cljs.pprint.pprint.call(null,inst_13742);
var state_13745__$1 = state_13745;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13745__$1,inst_13743);
} else {
return null;
}
}
});})(c__10985__auto___13752,bits,uname))
;
return ((function (switch__10964__auto__,c__10985__auto___13752,bits,uname){
return (function() {
var server$core$state_machine__10965__auto__ = null;
var server$core$state_machine__10965__auto____0 = (function (){
var statearr_13748 = [null,null,null,null,null,null,null,null];
(statearr_13748[(0)] = server$core$state_machine__10965__auto__);

(statearr_13748[(1)] = (1));

return statearr_13748;
});
var server$core$state_machine__10965__auto____1 = (function (state_13745){
while(true){
var ret_value__10966__auto__ = (function (){try{while(true){
var result__10967__auto__ = switch__10964__auto__.call(null,state_13745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10967__auto__;
}
break;
}
}catch (e13749){if((e13749 instanceof Object)){
var ex__10968__auto__ = e13749;
var statearr_13750_13753 = state_13745;
(statearr_13750_13753[(5)] = ex__10968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13749;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13754 = state_13745;
state_13745 = G__13754;
continue;
} else {
return ret_value__10966__auto__;
}
break;
}
});
server$core$state_machine__10965__auto__ = function(state_13745){
switch(arguments.length){
case 0:
return server$core$state_machine__10965__auto____0.call(this);
case 1:
return server$core$state_machine__10965__auto____1.call(this,state_13745);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$0 = server$core$state_machine__10965__auto____0;
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$1 = server$core$state_machine__10965__auto____1;
return server$core$state_machine__10965__auto__;
})()
;})(switch__10964__auto__,c__10985__auto___13752,bits,uname))
})();
var state__10987__auto__ = (function (){var statearr_13751 = f__10986__auto__.call(null);
(statearr_13751[(6)] = c__10985__auto___13752);

return statearr_13751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10987__auto__);
});})(c__10985__auto___13752,bits,uname))
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
server.core.db.find({}).sort((function (){var obj13758 = {"start":(-1)};
return obj13758;
})()).exec(((function (c){
return (function (err,res){
return cljs.core.async.put_BANG_.call(null,c,res);
});})(c))
);

return c;
});
server.core.latestUpdate = (function server$core$latestUpdate(){
var c = cljs.core.async.chan.call(null);
server.core.db.find({}).sort((function (){var obj13765 = {"start":(-1)};
return obj13765;
})()).limit((1)).exec(((function (c){
return (function (err,res){
if((cljs.core.count.call(null,res) > (0))){
return ((function (c){
return (function (p1__13761_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__13761_SHARP_);
});})(c))
.call(null,((function (c){
return (function (p1__13760_SHARP_){
return cljs.core.js__GT_clj.call(null,p1__13760_SHARP_,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});})(c))
.call(null,((function (c){
return (function (p1__13759_SHARP_){
return cljs.core.first.call(null,p1__13759_SHARP_);
});})(c))
.call(null,res)));
} else {
return ((function (c){
return (function (){
return cljs.core.async.put_BANG_.call(null,c,false);
});})(c))
.call(null);
}
});})(c))
);

return c;
});
server.core.currentWord = (function server$core$currentWord(){
var c = cljs.core.async.chan.call(null);
var c__10985__auto___13797 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10985__auto___13797,c){
return (function (){
var f__10986__auto__ = (function (){var switch__10964__auto__ = ((function (c__10985__auto___13797,c){
return (function (state_13790){
var state_val_13791 = (state_13790[(1)]);
if((state_val_13791 === (1))){
var inst_13772 = (function (){return ((function (state_val_13791,c__10985__auto___13797,c){
return (function (p1__13771_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__13771_SHARP_);
});
;})(state_val_13791,c__10985__auto___13797,c))
})();
var inst_13773 = (function (){return ((function (inst_13772,state_val_13791,c__10985__auto___13797,c){
return (function (p1__13770_SHARP_){
return clojure.string.lower_case.call(null,p1__13770_SHARP_);
});
;})(inst_13772,state_val_13791,c__10985__auto___13797,c))
})();
var inst_13774 = (function (){return ((function (inst_13772,inst_13773,state_val_13791,c__10985__auto___13797,c){
return (function (p1__13769_SHARP_){
return clojure.string.replace.call(null,p1__13769_SHARP_,/\.|,/,"");
});
;})(inst_13772,inst_13773,state_val_13791,c__10985__auto___13797,c))
})();
var inst_13775 = (function (){return ((function (inst_13772,inst_13773,inst_13774,state_val_13791,c__10985__auto___13797,c){
return (function (p1__13768_SHARP_){
return clojure.string.lower_case.call(null,p1__13768_SHARP_);
});
;})(inst_13772,inst_13773,inst_13774,state_val_13791,c__10985__auto___13797,c))
})();
var inst_13776 = (function (){return ((function (inst_13772,inst_13773,inst_13774,inst_13775,state_val_13791,c__10985__auto___13797,c){
return (function (index){
var words = clojure.string.split.call(null,server.core.faketxt,/\s/);
return cljs.core.nth.call(null,words,index);
});
;})(inst_13772,inst_13773,inst_13774,inst_13775,state_val_13791,c__10985__auto___13797,c))
})();
var inst_13777 = (function (){return ((function (inst_13772,inst_13773,inst_13774,inst_13775,inst_13776,state_val_13791,c__10985__auto___13797,c){
return (function (p1__13767_SHARP_){
return new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(p1__13767_SHARP_);
});
;})(inst_13772,inst_13773,inst_13774,inst_13775,inst_13776,state_val_13791,c__10985__auto___13797,c))
})();
var inst_13778 = (function (){return ((function (inst_13772,inst_13773,inst_13774,inst_13775,inst_13776,inst_13777,state_val_13791,c__10985__auto___13797,c){
return (function (p1__13766_SHARP_){
if(cljs.core.map_QMARK_.call(null,p1__13766_SHARP_)){
return p1__13766_SHARP_;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"end","end",-268185958),(0)], null);
}
});
;})(inst_13772,inst_13773,inst_13774,inst_13775,inst_13776,inst_13777,state_val_13791,c__10985__auto___13797,c))
})();
var inst_13779 = server.core.latestUpdate.call(null);
var state_13790__$1 = (function (){var statearr_13792 = state_13790;
(statearr_13792[(7)] = inst_13773);

(statearr_13792[(8)] = inst_13777);

(statearr_13792[(9)] = inst_13772);

(statearr_13792[(10)] = inst_13776);

(statearr_13792[(11)] = inst_13778);

(statearr_13792[(12)] = inst_13774);

(statearr_13792[(13)] = inst_13775);

return statearr_13792;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13790__$1,(2),inst_13779);
} else {
if((state_val_13791 === (2))){
var inst_13773 = (state_13790[(7)]);
var inst_13777 = (state_13790[(8)]);
var inst_13772 = (state_13790[(9)]);
var inst_13776 = (state_13790[(10)]);
var inst_13778 = (state_13790[(11)]);
var inst_13774 = (state_13790[(12)]);
var inst_13775 = (state_13790[(13)]);
var inst_13781 = (state_13790[(2)]);
var inst_13782 = inst_13778.call(null,inst_13781);
var inst_13783 = inst_13777.call(null,inst_13782);
var inst_13784 = inst_13776.call(null,inst_13783);
var inst_13785 = inst_13775.call(null,inst_13784);
var inst_13786 = inst_13774.call(null,inst_13785);
var inst_13787 = inst_13773.call(null,inst_13786);
var inst_13788 = inst_13772.call(null,inst_13787);
var state_13790__$1 = state_13790;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13790__$1,inst_13788);
} else {
return null;
}
}
});})(c__10985__auto___13797,c))
;
return ((function (switch__10964__auto__,c__10985__auto___13797,c){
return (function() {
var server$core$currentWord_$_state_machine__10965__auto__ = null;
var server$core$currentWord_$_state_machine__10965__auto____0 = (function (){
var statearr_13793 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13793[(0)] = server$core$currentWord_$_state_machine__10965__auto__);

(statearr_13793[(1)] = (1));

return statearr_13793;
});
var server$core$currentWord_$_state_machine__10965__auto____1 = (function (state_13790){
while(true){
var ret_value__10966__auto__ = (function (){try{while(true){
var result__10967__auto__ = switch__10964__auto__.call(null,state_13790);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10967__auto__;
}
break;
}
}catch (e13794){if((e13794 instanceof Object)){
var ex__10968__auto__ = e13794;
var statearr_13795_13798 = state_13790;
(statearr_13795_13798[(5)] = ex__10968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13790);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13794;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13799 = state_13790;
state_13790 = G__13799;
continue;
} else {
return ret_value__10966__auto__;
}
break;
}
});
server$core$currentWord_$_state_machine__10965__auto__ = function(state_13790){
switch(arguments.length){
case 0:
return server$core$currentWord_$_state_machine__10965__auto____0.call(this);
case 1:
return server$core$currentWord_$_state_machine__10965__auto____1.call(this,state_13790);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
server$core$currentWord_$_state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$0 = server$core$currentWord_$_state_machine__10965__auto____0;
server$core$currentWord_$_state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$1 = server$core$currentWord_$_state_machine__10965__auto____1;
return server$core$currentWord_$_state_machine__10965__auto__;
})()
;})(switch__10964__auto__,c__10985__auto___13797,c))
})();
var state__10987__auto__ = (function (){var statearr_13796 = f__10986__auto__.call(null);
(statearr_13796[(6)] = c__10985__auto___13797);

return statearr_13796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10987__auto__);
});})(c__10985__auto___13797,c))
);


return c;
});
var c__10985__auto___13811 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10985__auto___13811){
return (function (){
var f__10986__auto__ = (function (){var switch__10964__auto__ = ((function (c__10985__auto___13811){
return (function (state_13805){
var state_val_13806 = (state_13805[(1)]);
if((state_val_13806 === (1))){
var inst_13800 = server.core.currentWord.call(null);
var state_13805__$1 = state_13805;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13805__$1,(2),inst_13800);
} else {
if((state_val_13806 === (2))){
var inst_13802 = (state_13805[(2)]);
var inst_13803 = cljs.pprint.pprint.call(null,inst_13802);
var state_13805__$1 = state_13805;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13805__$1,inst_13803);
} else {
return null;
}
}
});})(c__10985__auto___13811))
;
return ((function (switch__10964__auto__,c__10985__auto___13811){
return (function() {
var server$core$state_machine__10965__auto__ = null;
var server$core$state_machine__10965__auto____0 = (function (){
var statearr_13807 = [null,null,null,null,null,null,null];
(statearr_13807[(0)] = server$core$state_machine__10965__auto__);

(statearr_13807[(1)] = (1));

return statearr_13807;
});
var server$core$state_machine__10965__auto____1 = (function (state_13805){
while(true){
var ret_value__10966__auto__ = (function (){try{while(true){
var result__10967__auto__ = switch__10964__auto__.call(null,state_13805);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10967__auto__;
}
break;
}
}catch (e13808){if((e13808 instanceof Object)){
var ex__10968__auto__ = e13808;
var statearr_13809_13812 = state_13805;
(statearr_13809_13812[(5)] = ex__10968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13805);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13808;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13813 = state_13805;
state_13805 = G__13813;
continue;
} else {
return ret_value__10966__auto__;
}
break;
}
});
server$core$state_machine__10965__auto__ = function(state_13805){
switch(arguments.length){
case 0:
return server$core$state_machine__10965__auto____0.call(this);
case 1:
return server$core$state_machine__10965__auto____1.call(this,state_13805);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$0 = server$core$state_machine__10965__auto____0;
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$1 = server$core$state_machine__10965__auto____1;
return server$core$state_machine__10965__auto__;
})()
;})(switch__10964__auto__,c__10985__auto___13811))
})();
var state__10987__auto__ = (function (){var statearr_13810 = f__10986__auto__.call(null);
(statearr_13810[(6)] = c__10985__auto___13811);

return statearr_13810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10987__auto__);
});})(c__10985__auto___13811))
);

server.core.addQue = cljs.core.async.chan.call(null);
var c__10985__auto___13933 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10985__auto___13933){
return (function (){
var f__10986__auto__ = (function (){var switch__10964__auto__ = ((function (c__10985__auto___13933){
return (function (state_13900){
var state_val_13901 = (state_13900[(1)]);
if((state_val_13901 === (7))){
var inst_13817 = (state_13900[(7)]);
var inst_13817__$1 = (state_13900[(2)]);
var inst_13824 = cljs.core.async.chan.call(null,(1));
var inst_13825 = (function (){var addMap = inst_13817__$1;
var c__10985__auto____$1 = inst_13824;
return ((function (addMap,c__10985__auto____$1,inst_13817,inst_13817__$1,inst_13824,state_val_13901,c__10985__auto___13933){
return (function (){
var f__10986__auto__ = (function (){var switch__10964__auto__ = ((function (addMap,c__10985__auto____$1,inst_13817,inst_13817__$1,inst_13824,state_val_13901,c__10985__auto___13933){
return (function (state_13822){
var state_val_13823 = (state_13822[(1)]);
if((state_val_13823 === (1))){
var inst_13818 = server.core.currentWord.call(null);
var state_13822__$1 = state_13822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13822__$1,(2),inst_13818);
} else {
if((state_val_13823 === (2))){
var inst_13820 = (state_13822[(2)]);
var state_13822__$1 = state_13822;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13822__$1,inst_13820);
} else {
return null;
}
}
});})(addMap,c__10985__auto____$1,inst_13817,inst_13817__$1,inst_13824,state_val_13901,c__10985__auto___13933))
;
return ((function (switch__10964__auto__,addMap,c__10985__auto____$1,inst_13817,inst_13817__$1,inst_13824,state_val_13901,c__10985__auto___13933){
return (function() {
var server$core$state_machine__10965__auto__ = null;
var server$core$state_machine__10965__auto____0 = (function (){
var statearr_13902 = [null,null,null,null,null,null,null];
(statearr_13902[(0)] = server$core$state_machine__10965__auto__);

(statearr_13902[(1)] = (1));

return statearr_13902;
});
var server$core$state_machine__10965__auto____1 = (function (state_13822){
while(true){
var ret_value__10966__auto__ = (function (){try{while(true){
var result__10967__auto__ = switch__10964__auto__.call(null,state_13822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10967__auto__;
}
break;
}
}catch (e13903){if((e13903 instanceof Object)){
var ex__10968__auto__ = e13903;
var statearr_13904_13934 = state_13822;
(statearr_13904_13934[(5)] = ex__10968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13903;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13935 = state_13822;
state_13822 = G__13935;
continue;
} else {
return ret_value__10966__auto__;
}
break;
}
});
server$core$state_machine__10965__auto__ = function(state_13822){
switch(arguments.length){
case 0:
return server$core$state_machine__10965__auto____0.call(this);
case 1:
return server$core$state_machine__10965__auto____1.call(this,state_13822);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$0 = server$core$state_machine__10965__auto____0;
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$1 = server$core$state_machine__10965__auto____1;
return server$core$state_machine__10965__auto__;
})()
;})(switch__10964__auto__,addMap,c__10985__auto____$1,inst_13817,inst_13817__$1,inst_13824,state_val_13901,c__10985__auto___13933))
})();
var state__10987__auto__ = (function (){var statearr_13905 = f__10986__auto__.call(null);
(statearr_13905[(6)] = c__10985__auto____$1);

return statearr_13905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10987__auto__);
});
;})(addMap,c__10985__auto____$1,inst_13817,inst_13817__$1,inst_13824,state_val_13901,c__10985__auto___13933))
})();
var inst_13826 = cljs.core.async.impl.dispatch.run.call(null,inst_13825);
var state_13900__$1 = (function (){var statearr_13906 = state_13900;
(statearr_13906[(7)] = inst_13817__$1);

(statearr_13906[(8)] = inst_13826);

return statearr_13906;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13900__$1,(8),inst_13824);
} else {
if((state_val_13901 === (1))){
var state_13900__$1 = state_13900;
var statearr_13907_13936 = state_13900__$1;
(statearr_13907_13936[(2)] = null);

(statearr_13907_13936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13901 === (4))){
var state_13900__$1 = state_13900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13900__$1,(7),server.core.addQue);
} else {
if((state_val_13901 === (15))){
var inst_13892 = (state_13900[(2)]);
var state_13900__$1 = (function (){var statearr_13908 = state_13900;
(statearr_13908[(9)] = inst_13892);

return statearr_13908;
})();
var statearr_13909_13937 = state_13900__$1;
(statearr_13909_13937[(2)] = null);

(statearr_13909_13937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13901 === (13))){
var inst_13817 = (state_13900[(7)]);
var inst_13828 = (state_13900[(10)]);
var inst_13839 = (state_13900[(11)]);
var inst_13882 = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(inst_13817);
var inst_13883 = new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(inst_13839);
var inst_13884 = (inst_13883 + (1));
var inst_13885 = new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(inst_13839);
var inst_13886 = (inst_13885 + (2));
var inst_13887 = {"user":inst_13882,"start":inst_13884,"end":inst_13886};
var inst_13888 = (function (){var addMap = inst_13817;
var cword = inst_13828;
var lupdate = inst_13839;
return ((function (addMap,cword,lupdate,inst_13817,inst_13828,inst_13839,inst_13882,inst_13883,inst_13884,inst_13885,inst_13886,inst_13887,state_val_13901,c__10985__auto___13933){
return (function (err,res){
return cljs.core.println.call(null,"Inserted Update");
});
;})(addMap,cword,lupdate,inst_13817,inst_13828,inst_13839,inst_13882,inst_13883,inst_13884,inst_13885,inst_13886,inst_13887,state_val_13901,c__10985__auto___13933))
})();
var inst_13889 = server.core.db.insert(inst_13887,inst_13888);
var state_13900__$1 = state_13900;
var statearr_13910_13938 = state_13900__$1;
(statearr_13910_13938[(2)] = inst_13889);

(statearr_13910_13938[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13901 === (6))){
var inst_13896 = (state_13900[(2)]);
var state_13900__$1 = state_13900;
var statearr_13911_13939 = state_13900__$1;
(statearr_13911_13939[(2)] = inst_13896);

(statearr_13911_13939[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13901 === (3))){
var inst_13898 = (state_13900[(2)]);
var state_13900__$1 = state_13900;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13900__$1,inst_13898);
} else {
if((state_val_13901 === (12))){
var inst_13817 = (state_13900[(7)]);
var inst_13828 = (state_13900[(10)]);
var inst_13839 = (state_13900[(11)]);
var inst_13872 = (state_13900[(2)]);
var inst_13873 = new cljs.core.Keyword(null,"word","word",-420123725).cljs$core$IFn$_invoke$arity$1(inst_13817);
var inst_13874 = cljs.core._EQ_.call(null,inst_13828,inst_13873);
var inst_13875 = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(inst_13817);
var inst_13876 = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(inst_13839);
var inst_13877 = cljs.core.not_EQ_.call(null,inst_13875,inst_13876);
var inst_13878 = (inst_13874) && (inst_13877);
var state_13900__$1 = (function (){var statearr_13912 = state_13900;
(statearr_13912[(12)] = inst_13872);

return statearr_13912;
})();
if(cljs.core.truth_(inst_13878)){
var statearr_13913_13940 = state_13900__$1;
(statearr_13913_13940[(1)] = (13));

} else {
var statearr_13914_13941 = state_13900__$1;
(statearr_13914_13941[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13901 === (2))){
var state_13900__$1 = state_13900;
var statearr_13915_13942 = state_13900__$1;
(statearr_13915_13942[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13901 === (11))){
var state_13900__$1 = state_13900;
var statearr_13917_13943 = state_13900__$1;
(statearr_13917_13943[(2)] = null);

(statearr_13917_13943[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13901 === (9))){
var inst_13817 = (state_13900[(7)]);
var inst_13828 = (state_13900[(10)]);
var inst_13839 = (state_13900[(11)]);
var inst_13839__$1 = (state_13900[(2)]);
var inst_13840 = [new cljs.core.Keyword(null,"word","word",-420123725),new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"cword","cword",-1508063004),new cljs.core.Keyword(null,"lupdate","lupdate",17002411)];
var inst_13841 = new cljs.core.Keyword(null,"word","word",-420123725).cljs$core$IFn$_invoke$arity$1(inst_13817);
var inst_13842 = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(inst_13817);
var inst_13843 = [inst_13841,inst_13842,inst_13828,inst_13839__$1];
var inst_13844 = cljs.core.PersistentHashMap.fromArrays(inst_13840,inst_13843);
var inst_13845 = cljs.pprint.pprint.call(null,inst_13844);
var inst_13846 = new cljs.core.Keyword(null,"word","word",-420123725).cljs$core$IFn$_invoke$arity$1(inst_13817);
var inst_13847 = cljs.core._EQ_.call(null,inst_13828,inst_13846);
var inst_13848 = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(inst_13817);
var inst_13849 = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(inst_13839__$1);
var inst_13850 = cljs.core._EQ_.call(null,inst_13848,inst_13849);
var inst_13851 = (inst_13847) && (inst_13850);
var state_13900__$1 = (function (){var statearr_13918 = state_13900;
(statearr_13918[(13)] = inst_13845);

(statearr_13918[(11)] = inst_13839__$1);

return statearr_13918;
})();
if(cljs.core.truth_(inst_13851)){
var statearr_13919_13944 = state_13900__$1;
(statearr_13919_13944[(1)] = (10));

} else {
var statearr_13920_13945 = state_13900__$1;
(statearr_13920_13945[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13901 === (5))){
var state_13900__$1 = state_13900;
var statearr_13921_13946 = state_13900__$1;
(statearr_13921_13946[(2)] = null);

(statearr_13921_13946[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13901 === (14))){
var state_13900__$1 = state_13900;
var statearr_13922_13947 = state_13900__$1;
(statearr_13922_13947[(2)] = null);

(statearr_13922_13947[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13901 === (10))){
var inst_13817 = (state_13900[(7)]);
var inst_13828 = (state_13900[(10)]);
var inst_13839 = (state_13900[(11)]);
var inst_13855 = new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(inst_13839);
var inst_13856 = {"_id":inst_13855};
var inst_13861 = new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(inst_13839);
var inst_13862 = (inst_13861 + (1));
var inst_13863 = {"end":inst_13862};
var inst_13864 = {"$set":inst_13863};
var inst_13867 = {"multi":true};
var inst_13868 = (function (){var addMap = inst_13817;
var cword = inst_13828;
var lupdate = inst_13839;
return ((function (addMap,cword,lupdate,inst_13817,inst_13828,inst_13839,inst_13855,inst_13856,inst_13861,inst_13862,inst_13863,inst_13864,inst_13867,state_val_13901,c__10985__auto___13933){
return (function (err,res){
return cljs.core.println.call(null,"Updated Last update");
});
;})(addMap,cword,lupdate,inst_13817,inst_13828,inst_13839,inst_13855,inst_13856,inst_13861,inst_13862,inst_13863,inst_13864,inst_13867,state_val_13901,c__10985__auto___13933))
})();
var inst_13869 = server.core.db.update(inst_13856,inst_13864,inst_13867,inst_13868);
var state_13900__$1 = state_13900;
var statearr_13923_13948 = state_13900__$1;
(statearr_13923_13948[(2)] = inst_13869);

(statearr_13923_13948[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13901 === (8))){
var inst_13817 = (state_13900[(7)]);
var inst_13828 = (state_13900[(10)]);
var inst_13828__$1 = (state_13900[(2)]);
var inst_13835 = cljs.core.async.chan.call(null,(1));
var inst_13836 = (function (){var addMap = inst_13817;
var cword = inst_13828__$1;
var c__10985__auto____$1 = inst_13835;
return ((function (addMap,cword,c__10985__auto____$1,inst_13817,inst_13828,inst_13828__$1,inst_13835,state_val_13901,c__10985__auto___13933){
return (function (){
var f__10986__auto__ = (function (){var switch__10964__auto__ = ((function (addMap,cword,c__10985__auto____$1,inst_13817,inst_13828,inst_13828__$1,inst_13835,state_val_13901,c__10985__auto___13933){
return (function (state_13833){
var state_val_13834 = (state_13833[(1)]);
if((state_val_13834 === (1))){
var inst_13829 = server.core.latestUpdate.call(null);
var state_13833__$1 = state_13833;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13833__$1,(2),inst_13829);
} else {
if((state_val_13834 === (2))){
var inst_13831 = (state_13833[(2)]);
var state_13833__$1 = state_13833;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13833__$1,inst_13831);
} else {
return null;
}
}
});})(addMap,cword,c__10985__auto____$1,inst_13817,inst_13828,inst_13828__$1,inst_13835,state_val_13901,c__10985__auto___13933))
;
return ((function (switch__10964__auto__,addMap,cword,c__10985__auto____$1,inst_13817,inst_13828,inst_13828__$1,inst_13835,state_val_13901,c__10985__auto___13933){
return (function() {
var server$core$state_machine__10965__auto__ = null;
var server$core$state_machine__10965__auto____0 = (function (){
var statearr_13924 = [null,null,null,null,null,null,null];
(statearr_13924[(0)] = server$core$state_machine__10965__auto__);

(statearr_13924[(1)] = (1));

return statearr_13924;
});
var server$core$state_machine__10965__auto____1 = (function (state_13833){
while(true){
var ret_value__10966__auto__ = (function (){try{while(true){
var result__10967__auto__ = switch__10964__auto__.call(null,state_13833);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10967__auto__;
}
break;
}
}catch (e13925){if((e13925 instanceof Object)){
var ex__10968__auto__ = e13925;
var statearr_13926_13949 = state_13833;
(statearr_13926_13949[(5)] = ex__10968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13833);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13925;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13950 = state_13833;
state_13833 = G__13950;
continue;
} else {
return ret_value__10966__auto__;
}
break;
}
});
server$core$state_machine__10965__auto__ = function(state_13833){
switch(arguments.length){
case 0:
return server$core$state_machine__10965__auto____0.call(this);
case 1:
return server$core$state_machine__10965__auto____1.call(this,state_13833);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$0 = server$core$state_machine__10965__auto____0;
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$1 = server$core$state_machine__10965__auto____1;
return server$core$state_machine__10965__auto__;
})()
;})(switch__10964__auto__,addMap,cword,c__10985__auto____$1,inst_13817,inst_13828,inst_13828__$1,inst_13835,state_val_13901,c__10985__auto___13933))
})();
var state__10987__auto__ = (function (){var statearr_13927 = f__10986__auto__.call(null);
(statearr_13927[(6)] = c__10985__auto____$1);

return statearr_13927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10987__auto__);
});
;})(addMap,cword,c__10985__auto____$1,inst_13817,inst_13828,inst_13828__$1,inst_13835,state_val_13901,c__10985__auto___13933))
})();
var inst_13837 = cljs.core.async.impl.dispatch.run.call(null,inst_13836);
var state_13900__$1 = (function (){var statearr_13928 = state_13900;
(statearr_13928[(14)] = inst_13837);

(statearr_13928[(10)] = inst_13828__$1);

return statearr_13928;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13900__$1,(9),inst_13835);
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
});})(c__10985__auto___13933))
;
return ((function (switch__10964__auto__,c__10985__auto___13933){
return (function() {
var server$core$state_machine__10965__auto__ = null;
var server$core$state_machine__10965__auto____0 = (function (){
var statearr_13929 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13929[(0)] = server$core$state_machine__10965__auto__);

(statearr_13929[(1)] = (1));

return statearr_13929;
});
var server$core$state_machine__10965__auto____1 = (function (state_13900){
while(true){
var ret_value__10966__auto__ = (function (){try{while(true){
var result__10967__auto__ = switch__10964__auto__.call(null,state_13900);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10967__auto__;
}
break;
}
}catch (e13930){if((e13930 instanceof Object)){
var ex__10968__auto__ = e13930;
var statearr_13931_13951 = state_13900;
(statearr_13931_13951[(5)] = ex__10968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13930;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13952 = state_13900;
state_13900 = G__13952;
continue;
} else {
return ret_value__10966__auto__;
}
break;
}
});
server$core$state_machine__10965__auto__ = function(state_13900){
switch(arguments.length){
case 0:
return server$core$state_machine__10965__auto____0.call(this);
case 1:
return server$core$state_machine__10965__auto____1.call(this,state_13900);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$0 = server$core$state_machine__10965__auto____0;
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$1 = server$core$state_machine__10965__auto____1;
return server$core$state_machine__10965__auto__;
})()
;})(switch__10964__auto__,c__10985__auto___13933))
})();
var state__10987__auto__ = (function (){var statearr_13932 = f__10986__auto__.call(null);
(statearr_13932[(6)] = c__10985__auto___13933);

return statearr_13932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10987__auto__);
});})(c__10985__auto___13933))
);

server.core.app.post("/addword",(function (req,res){
var bits = clojure.string.split.call(null,req.body.str,/\s/);
var user = req.body.user;
var c__10985__auto___13969 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10985__auto___13969,bits,user){
return (function (){
var f__10986__auto__ = (function (){var switch__10964__auto__ = ((function (c__10985__auto___13969,bits,user){
return (function (state_13962){
var state_val_13963 = (state_13962[(1)]);
if((state_val_13963 === (1))){
var inst_13954 = [new cljs.core.Keyword(null,"cword","cword",-1508063004)];
var inst_13955 = server.core.currentWord.call(null);
var state_13962__$1 = (function (){var statearr_13964 = state_13962;
(statearr_13964[(7)] = inst_13954);

return statearr_13964;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13962__$1,(2),inst_13955);
} else {
if((state_val_13963 === (2))){
var inst_13954 = (state_13962[(7)]);
var inst_13957 = (state_13962[(2)]);
var inst_13958 = [inst_13957];
var inst_13959 = cljs.core.PersistentHashMap.fromArrays(inst_13954,inst_13958);
var inst_13960 = cljs.pprint.pprint.call(null,inst_13959);
var state_13962__$1 = state_13962;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13962__$1,inst_13960);
} else {
return null;
}
}
});})(c__10985__auto___13969,bits,user))
;
return ((function (switch__10964__auto__,c__10985__auto___13969,bits,user){
return (function() {
var server$core$state_machine__10965__auto__ = null;
var server$core$state_machine__10965__auto____0 = (function (){
var statearr_13965 = [null,null,null,null,null,null,null,null];
(statearr_13965[(0)] = server$core$state_machine__10965__auto__);

(statearr_13965[(1)] = (1));

return statearr_13965;
});
var server$core$state_machine__10965__auto____1 = (function (state_13962){
while(true){
var ret_value__10966__auto__ = (function (){try{while(true){
var result__10967__auto__ = switch__10964__auto__.call(null,state_13962);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10967__auto__;
}
break;
}
}catch (e13966){if((e13966 instanceof Object)){
var ex__10968__auto__ = e13966;
var statearr_13967_13970 = state_13962;
(statearr_13967_13970[(5)] = ex__10968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13962);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13966;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13971 = state_13962;
state_13962 = G__13971;
continue;
} else {
return ret_value__10966__auto__;
}
break;
}
});
server$core$state_machine__10965__auto__ = function(state_13962){
switch(arguments.length){
case 0:
return server$core$state_machine__10965__auto____0.call(this);
case 1:
return server$core$state_machine__10965__auto____1.call(this,state_13962);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$0 = server$core$state_machine__10965__auto____0;
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$1 = server$core$state_machine__10965__auto____1;
return server$core$state_machine__10965__auto__;
})()
;})(switch__10964__auto__,c__10985__auto___13969,bits,user))
})();
var state__10987__auto__ = (function (){var statearr_13968 = f__10986__auto__.call(null);
(statearr_13968[(6)] = c__10985__auto___13969);

return statearr_13968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10987__auto__);
});})(c__10985__auto___13969,bits,user))
);


cljs.core.doall.call(null,cljs.core.map.call(null,((function (bits,user){
return (function (p1__13953_SHARP_){
return cljs.core.async.put_BANG_.call(null,server.core.addQue,p1__13953_SHARP_);
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
return (function (state_13978){
var state_val_13979 = (state_13978[(1)]);
if((state_val_13979 === (1))){
var inst_13972 = server.core.allUpdates.call(null);
var state_13978__$1 = state_13978;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13978__$1,(2),inst_13972);
} else {
if((state_val_13979 === (2))){
var inst_13974 = (state_13978[(2)]);
var inst_13975 = cljs.core.clj__GT_js.call(null,inst_13974);
var inst_13976 = res.json(inst_13975);
var state_13978__$1 = state_13978;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13978__$1,inst_13976);
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
var statearr_13980 = [null,null,null,null,null,null,null];
(statearr_13980[(0)] = server$core$state_machine__10965__auto__);

(statearr_13980[(1)] = (1));

return statearr_13980;
});
var server$core$state_machine__10965__auto____1 = (function (state_13978){
while(true){
var ret_value__10966__auto__ = (function (){try{while(true){
var result__10967__auto__ = switch__10964__auto__.call(null,state_13978);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10967__auto__;
}
break;
}
}catch (e13981){if((e13981 instanceof Object)){
var ex__10968__auto__ = e13981;
var statearr_13982_13984 = state_13978;
(statearr_13982_13984[(5)] = ex__10968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13981;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10966__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13985 = state_13978;
state_13978 = G__13985;
continue;
} else {
return ret_value__10966__auto__;
}
break;
}
});
server$core$state_machine__10965__auto__ = function(state_13978){
switch(arguments.length){
case 0:
return server$core$state_machine__10965__auto____0.call(this);
case 1:
return server$core$state_machine__10965__auto____1.call(this,state_13978);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$0 = server$core$state_machine__10965__auto____0;
server$core$state_machine__10965__auto__.cljs$core$IFn$_invoke$arity$1 = server$core$state_machine__10965__auto____1;
return server$core$state_machine__10965__auto__;
})()
;})(switch__10964__auto__,c__10985__auto__))
})();
var state__10987__auto__ = (function (){var statearr_13983 = f__10986__auto__.call(null);
(statearr_13983[(6)] = c__10985__auto__);

return statearr_13983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10987__auto__);
});})(c__10985__auto__))
);

return c__10985__auto__;
}));
server.core.sttAuthService = (new server.core.node$module$watson_developer_cloud.AuthorizationV1((function (){var obj13987 = {"username":"1b860fd3-bf11-4cc6-a962-5bac776d5744","password":"LZ2TNegMz6NX"};
return obj13987;
})()));
server.core.app.use("/api/speech-to-text/token",(function (req,res){
return server.core.sttAuthService.getToken((function (){var obj13989 = {"url":server.core.node$module$watson_developer_cloud.SpeechToTextV1.URL};
return obj13989;
})(),(function (err,token){
return res.send(token);
}));
}));
server.core._main = (function server$core$_main(var_args){
var args__9230__auto__ = [];
var len__9223__auto___13991 = arguments.length;
var i__9224__auto___13992 = (0);
while(true){
if((i__9224__auto___13992 < len__9223__auto___13991)){
args__9230__auto__.push((arguments[i__9224__auto___13992]));

var G__13993 = (i__9224__auto___13992 + (1));
i__9224__auto___13992 = G__13993;
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

server.core._main.cljs$lang$applyTo = (function (seq13990){
return server.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13990));
});

cljs.core._STAR_main_cli_fn_STAR_ = server.core._main;

//# sourceMappingURL=core.js.map
