(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{1934:function(e,n,t){"use strict";var r;t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return u})),t.d(n,"a",(function(){return r}));var a=function(){var e=this,n=e.$createElement;e._self._c},u=[]},2671:function(e,n,t){"use strict";t.r(n);var r=t("af18"),a=t.n(r);for(var u in r)"default"!==u&&function(e){t.d(n,e,(function(){return r[e]}))}(u);n["default"]=a.a},"3ae4":function(e,n,t){"use strict";t.r(n);var r=t("1934"),a=t("2671");for(var u in a)"default"!==u&&function(e){t.d(n,e,(function(){return a[e]}))}(u);t("840c");var i,o=t("f0c5"),c=Object(o["a"])(a["default"],r["b"],r["c"],!1,null,"cfdeab5a",null,!1,r["a"],i);n["default"]=c.exports},"83a4":function(e,n,t){"use strict";(function(e){t("fbee");r(t("66fd"));var n=r(t("3ae4"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},"840c":function(e,n,t){"use strict";var r=t("fc36"),a=t.n(r);a.a},af18:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function u(e,n,t,r,a,u,i){try{var o=e[u](i),c=o.value}catch(s){return void t(s)}o.done?n(c):Promise.resolve(c).then(r,a)}function i(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var i=e.apply(n,t);function o(e){u(i,r,a,o,c,"next",e)}function c(e){u(i,r,a,o,c,"throw",e)}o(void 0)}))}}var o={data:function(){return{yonghuxingbieOptions:[],yonghuxingbieIndex:0,ruleForm:{},tableName:""}},onLoad:function(){var n=this;return i(r.default.mark((function t(){var a;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:[],a=e.getStorageSync("loginTable"),n.tableName=a,"yonghu"==n.tableName&&(n.yonghuxingbieOptions="男,女".split(","),n.ruleForm.xingbie=n.yonghuxingbieOptions[0]),n.styleChange();case 5:case"end":return t.stop()}}),t)})))()},methods:{yonghuxingbieChange:function(e){this.yonghuxingbieIndex=e.target.value,this.ruleForm.xingbie=this.yonghuxingbieOptions[this.yonghuxingbieIndex]},styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},register:function(){var e=this;return i(r.default.mark((function n(){return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.ruleForm.zhanghao||"yonghu"!=e.tableName){n.next=3;break}return e.$utils.msg("账号不能为空"),n.abrupt("return");case 3:if(e.ruleForm.mima||"yonghu"!=e.tableName){n.next=6;break}return e.$utils.msg("密码不能为空"),n.abrupt("return");case 6:if(e.ruleForm.xingming||"yonghu"!=e.tableName){n.next=9;break}return e.$utils.msg("姓名不能为空"),n.abrupt("return");case 9:if("yonghu"!=e.tableName||!e.ruleForm.shenfenzhenghaoma||e.$validate.checkIdCard(e.ruleForm.shenfenzhenghaoma)){n.next=12;break}return e.$utils.msg("身份证号码应输入身份证格式"),n.abrupt("return");case 12:if("yonghu"!=e.tableName||!e.ruleForm.shoujihaoma||e.$validate.isMobile(e.ruleForm.shoujihaoma)){n.next=15;break}return e.$utils.msg("手机号码应输入手机格式"),n.abrupt("return");case 15:if("yonghu"!=e.tableName||!e.ruleForm.money||e.$validate.isNumber(e.ruleForm.money)){n.next=18;break}return e.$utils.msg("余额应输入数字"),n.abrupt("return");case 18:return n.next=20,e.$api.register("".concat(e.tableName),e.ruleForm);case 20:e.$utils.msgBack("注册成功");case 22:case"end":return n.stop()}}),n)})))()}}};n.default=o}).call(this,t("543d")["default"])},fc36:function(e,n,t){}},[["83a4","common/runtime","common/vendor"]]]);