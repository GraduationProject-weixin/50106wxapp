(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shop-order-confirm/shop-order-confirm"],{"2e75":function(e,t,r){"use strict";(function(e){r("5f26"),r("921b");o(r("66fd"));var t=o(r("9596"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,r("543d")["createPage"])},"81d1":function(e,t,r){},9596:function(e,t,r){"use strict";r.r(t);var o=r("ccc0"),s=r("ec3b");for(var n in s)"default"!==n&&function(e){r.d(t,e,(function(){return s[e]}))}(n);r("f395");var a,i=r("f0c5"),d=Object(i["a"])(s["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);t["default"]=d.exports},bd72:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(r("a34a"));function s(e){return e&&e.__esModule?e:{default:e}}function n(e,t,r,o,s,n,a){try{var i=e[n](a),d=i.value}catch(u){return void r(u)}i.done?t(d):Promise.resolve(d).then(o,s)}function a(e){return function(){var t=this,r=arguments;return new Promise((function(o,s){var a=e.apply(t,r);function i(e){n(a,o,s,i,d,"next",e)}function d(e){n(a,o,s,i,d,"throw",e)}i(void 0)}))}}var i={data:function(){return{user:{},orderGoods:{},address:{},total:0,type:1,seat:0}},onLoad:function(){var t=a(o.default.mark((function t(r){var s;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.type=r.type,this.seat=r.seat,this.orderGoods=e.getStorageSync("orderGoods"),1!=this.seat)for(s=0;s<this.orderGoods.length;s++)0==this.total?this.total=parseFloat(this.orderGoods[s].price)*this.orderGoods[s].buynumber:this.total=parseFloat(this.total)+parseFloat(this.orderGoods[s].price)*this.orderGoods[s].buynumber;else this.total=parseFloat(this.orderGoods[0].total),this.address=this.orderGoods[0].address;this.total=this.total.toFixed(2);case 5:case"end":return t.stop()}}),t,this)})));function r(e){return t.apply(this,arguments)}return r}(),onShow:function(){var t=a(o.default.mark((function t(){var r,s,n;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.getStorageSync("nowTable"),t.next=3,this.$api.session(r);case 3:if(s=t.sent,this.user=s.data,1==this.seat){t.next=15;break}if(n=e.getStorageSync("address"),!n||this.user.id!=this.address.userid){t.next=11;break}this.address=e.getStorageSync("address"),t.next=15;break;case 11:return t.next=13,this.$api.defaultAddress(this.user.id);case 13:s=t.sent,this.address=s.data;case 15:case"end":return t.stop()}}),t,this)})));function r(){return t.apply(this,arguments)}return r}(),methods:{onSubmitTap:function(){var t=a(o.default.mark((function t(){var r,s;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r=this,s=e.getStorageSync("nowTable"),e.showModal({title:"提示",content:"是否确认支付",success:function(){var t=a(o.default.mark((function t(n){var a,i,d,u,c;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n.confirm){t.next=42;break}if(a=r.type,i=!0,1!=a){t.next=10;break}if(!(r.user.money-r.total<0)){t.next=8;break}return r.$utils.msg("余额不足，请先充值"),i=!1,t.abrupt("return");case 8:t.next=15;break;case 10:if(2!=a){t.next=15;break}if(!(r.user.jifen-r.total<0)){t.next=15;break}return r.$utils.msg("积分不足，兑换商品失败"),i=!1,t.abrupt("return");case 15:d=0;case 16:if(!(d<r.orderGoods.length)){t.next=28;break}return u={orderid:r.$utils.genTradeNo(),tablename:r.orderGoods[d].tablename,userid:r.user.id,goodid:r.orderGoods[d].goodid,goodname:r.orderGoods[d].goodname,picture:r.orderGoods[d].picture,buynumber:r.orderGoods[d].buynumber,discountprice:r.orderGoods[d].price,price:r.orderGoods[d].price,total:r.orderGoods[d].price*r.orderGoods[d].buynumber,discounttotal:r.orderGoods[d].price*r.orderGoods[d].buynumber,type:a,address:r.address.address,status:"已支付"},1==r.seat&&(u["address"]=r.address,c=r.address.split(",").length,u["buynumber"]=c,u["total"]=r.orderGoods[d].price*c,u["discounttotal"]=r.orderGoods[d].price*c),t.next=21,r.$api.add("orders",u);case 21:if(!r.orderGoods[d].id){t.next=25;break}return t.next=24,r.$api.del("cart",JSON.stringify([r.orderGoods[d].id]));case 24:e.removeStorageSync("cart".concat(r.orderGoods[d].goodid).concat(r.user.id));case 25:d++,t.next=16;break;case 28:if(!i){t.next=42;break}if(1!=a){t.next=37;break}return r.$utils.msgBack("支付成功"),r.user.money=r.user.money-r.total,(r.user.jifen||0==r.user.jifen)&&(r.user.jifen=parseFloat(r.user.jifen)+parseFloat(r.total)),t.next=35,r.$api.update(s,r.user);case 35:t.next=42;break;case 37:if(2!=a){t.next=42;break}return r.$utils.msgBack("兑换成功"),r.user.jifen=r.user.jifen-r.total,t.next=42,r.$api.update(s,r.user);case 42:case"end":return t.stop()}}),t)})));function n(e){return t.apply(this,arguments)}return n}()});case 3:case"end":return t.stop()}}),t,this)})));function r(){return t.apply(this,arguments)}return r}(),onAddressTap:function(){this.$utils.jump("../shop-address/shop-address")}}};t.default=i}).call(this,r("543d")["default"])},ccc0:function(e,t,r){"use strict";var o,s=function(){var e=this,t=e.$createElement;e._self._c},n=[];r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return n})),r.d(t,"a",(function(){return o}))},ec3b:function(e,t,r){"use strict";r.r(t);var o=r("bd72"),s=r.n(o);for(var n in o)"default"!==n&&function(e){r.d(t,e,(function(){return o[e]}))}(n);t["default"]=s.a},f395:function(e,t,r){"use strict";var o=r("81d1"),s=r.n(o);s.a}},[["2e75","common/runtime","common/vendor"]]]);