(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{1631:function(n,t,e){"use strict";e.r(t);var i=e("ca4b"),a=e.n(i);for(var o in i)"default"!==o&&function(n){e.d(t,n,(function(){return i[n]}))}(o);t["default"]=a.a},2759:function(n,t,e){"use strict";var i,a=function(){var n=this,t=n.$createElement,e=(n._self._c,n.__map(n.xiaoshuoxinxilist,(function(t,e){var i=t.tupian.split(",");return{$orig:n.__get_orig(t),g0:i}}))),i=n.__map(n.xiaoshuoxinxilist,(function(t,e){var i=t.tupian.split(",");return{$orig:n.__get_orig(t),g1:i}}));n.$mp.data=Object.assign({},{$root:{l0:e,l1:i}})},o=[];e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return i}))},"7a0a":function(n,t,e){"use strict";var i=e("9f88"),a=e.n(i);a.a},"7be3":function(n,t,e){"use strict";(function(n){e("5f26"),e("921b");i(e("66fd"));var t=i(e("f0ca"));function i(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},"9f88":function(n,t,e){},ca4b:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(e("a34a"));function a(n){return n&&n.__esModule?n:{default:n}}function o(n,t,e,i,a,o,r){try{var u=n[o](r),c=u.value}catch(s){return void e(s)}u.done?t(c):Promise.resolve(c).then(i,a)}function r(n){return function(){var t=this,e=arguments;return new Promise((function(i,a){var r=n.apply(t,e);function u(n){o(r,i,a,u,c,"next",n)}function c(n){o(r,i,a,u,c,"throw",n)}u(void 0)}))}}e("3b30");var u=function(){Promise.all([e.e("common/vendor"),e.e("components/uni-ui/lib/uni-icons/uni-icons")]).then(function(){return resolve(e("c6ed"))}.bind(null,e)).catch(e.oe)},c={components:{uniIcons:u},data:function(){return{btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],queryList:[{queryName:"小说名称"}],queryIndex:0,searchForm:{xiaoshuoxinxixiaoshuomingcheng:""},CustomBar:"0",autoplaySwiper:!0,intervalSwiper:3e3,swiperList:[],xiaoshuoxinxilist:[],news:[]}},onShow:function(){var n=r(i.default.mark((function n(){var t,e,a,o,r,u,c,s;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return this.btnColor=this.btnColor.sort((function(){return.5-Math.random()})),t=[],n.next=4,this.$api.page("config",{page:1,limit:5});case 4:for(e=n.sent,a=!0,o=!1,r=void 0,n.prev=8,u=e.data.list[Symbol.iterator]();!(a=(c=u.next()).done);a=!0)s=c.value,s.name.indexOf("picture")>=0&&s.value&&""!=s.value&&null!=s.value&&t.push({img:s.value});n.next=16;break;case 12:n.prev=12,n.t0=n["catch"](8),o=!0,r=n.t0;case 16:n.prev=16,n.prev=17,a||null==u.return||u.return();case 19:if(n.prev=19,!o){n.next=22;break}throw r;case 22:return n.finish(19);case 23:return n.finish(16);case 24:return t&&(this.swiperList=t),n.next=27,this.$api.list("news",{page:1,limit:3});case 27:return e=n.sent,this.news=e.data.list,n.next=31,this.$api.recommend("xiaoshuoxinxi",1,4);case 31:e=n.sent,this.xiaoshuoxinxilist=e.data.list;case 33:case"end":return n.stop()}}),n,this,[[8,12,16,24],[17,,19,23]])})));function t(){return n.apply(this,arguments)}return t}(),methods:{queryChange:function(n){this.queryIndex=n.detail.value,this.searchForm.xiaoshuoxinxixiaoshuomingcheng=""},onSwiperTap:function(n){},onNewsDetailTap:function(n){this.$utils.jump("../news-detail/news-detail?id=".concat(n))},onDetailTap:function(n,t){this.$utils.jump("../".concat(n,"/detail?id=").concat(t))},onPageTap:function(t){0==this.queryIndex&&(n.setStorageSync("indexQueryCondition",this.searchForm.xiaoshuoxinxixiaoshuomingcheng),this.searchForm.xiaoshuoxinxixiaoshuomingcheng=""),n.navigateTo({url:"../".concat(t,"/list"),fail:function(){n.switchTab({url:"../".concat(t,"/list")})}})}}};t.default=c}).call(this,e("543d")["default"])},f0ca:function(n,t,e){"use strict";e.r(t);var i=e("2759"),a=e("1631");for(var o in a)"default"!==o&&function(n){e.d(t,n,(function(){return a[n]}))}(o);e("7a0a");var r,u=e("f0c5"),c=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);t["default"]=c.exports}},[["7be3","common/runtime","common/vendor"]]]);