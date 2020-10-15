(function(t){function e(e){for(var a,i,s=e[0],c=e[1],u=e[2],f=0,p=[];f<s.length;f++)i=s[f],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},o=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0530":function(t,e,n){},2395:function(t,e,n){},"26a9":function(t,e,n){},"2f5b":function(t,e,n){"use strict";var a=n("0530"),r=n.n(a);r.a},"39d8":function(t,e,n){"use strict";var a=n("b30d"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header",{on:{"toggle-sidebar":t.listenToggleSidebar}}),n("SidebarMenu",{class:{active:t.isSidebarActive}}),n("router-view")],1)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("div",{staticClass:"menu"},[n("button",{attrs:{id:"menuButton"},on:{click:function(e){return t.$emit("toggle-sidebar")}}}),n("span",[t._v("Menu")])])])},s=[],c={name:"Header",methods:{}},u=c,l=(n("39d8"),n("2877")),f=Object(l["a"])(u,i,s,!1,null,"4a7c5512",null),p=f.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sideBarMenu"},[n("router-link",{attrs:{to:"/"}},[t._v("Main")]),n("router-link",{attrs:{to:"/Configuration"}},[t._v("Configuration")])],1)},v=[],b={name:"SidebarMenu"},h=b,m=(n("6896"),Object(l["a"])(h,d,v,!1,null,"5426a60a",null)),y=m.exports,g={name:"App",components:{SidebarMenu:y,Header:p},created:function(){var t=this;this.$binance.connect("ethbtc"),this.$store.dispatch("changeSymbolAction","ETHBTC"),this.$binance.synchronize("ethbtc"),this.$events.on("load",(function(e){t.$store.dispatch("loadSynchronizedAction",e)}))},mounted:function(){},data:function(){return{isSidebarActive:!1}},methods:{listenToggleSidebar:function(){this.isSidebarActive=!this.isSidebarActive}}},_=g,S=(n("7c55"),Object(l["a"])(_,r,o,!1,null,null,null)),w=S.exports,k=n("8c4f"),O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container"},[n("Table",{attrs:{"is-it-bids":!0}}),n("Table",{attrs:{"is-it-asks":!0}})],1)])},$=[],j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.isItAsks?n("table",{staticClass:"table",class:{bids:t.isItBids,asks:t.isItAsks}},[t._m(0),n("tbody",t._l(this.$store.state.asks,(function(e,a){return n("tr",{key:a},[n("td",[t._v(t._s(e.price))]),n("td",[t._v(t._s(e.amount))]),n("td",[t._v(t._s(e.total))])])})),0)]):t._e(),t.isItBids?n("table",{staticClass:"table",class:{bids:t.isItBids,asks:t.isItAsks}},[t._m(1),n("tbody",t._l(this.$store.state.bids,(function(e,a){return n("tr",{key:a},[n("td",[t._v(t._s(e.price))]),n("td",[t._v(t._s(e.amount))]),n("td",[t._v(t._s(e.total))])])})),0)]):t._e()])},x=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("Price")]),n("th",[t._v("Amount")]),n("th",[t._v("Total")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("Price")]),n("th",[t._v("Amount")]),n("th",[t._v("Total")])])])}],T={name:"Table",data:function(){return{}},mounted:function(){var t=this;this.$events.on("update",(function(e){t.$store.dispatch("updateStoreAction",e)}))},props:{isItBids:{type:Boolean},isItAsks:{type:Boolean}}},A=T,C=(n("dc59"),Object(l["a"])(A,j,x,!1,null,"8d880700",null)),B=C.exports,M={name:"Main",data:function(){return{}},components:{Table:B}},E=M,I=(n("71aa"),Object(l["a"])(E,O,$,!1,null,"c6b8fa0c",null)),P=I.exports,z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("select",{directives:[{name:"model",rawName:"v-model",value:t.symbol,expression:"symbol"}],staticClass:"selectConfiguration",on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.symbol=e.target.multiple?n:n[0]},t.changeSymbol]}},[n("option",[t._v("BTCUSDT")]),n("option",[t._v("BNBBTC")]),n("option",{attrs:{selected:""}},[t._v("ETHBTC")])])])},F=[],R={data:function(){return{symbol:null}},mounted:function(){this.symbol=this.$store.getters.getTheSymbol},created:function(){this.symbol=this.$store.getters.getTheSymbol},methods:{changeSymbol:function(){var t=this;this.$events.on("disconnect",(function(){t.$store.dispatch("resetStateAction")})),this.$binance.disconnect(),this.$store.dispatch("changeSymbolAction",this.symbol),this.$binance.connect(this.symbol),this.$binance.synchronize(this.symbol)}},name:"Configuration",components:{}},H=R,U=(n("2f5b"),Object(l["a"])(H,z,F,!1,null,"6dd0be70",null)),D=U.exports;a["a"].use(k["a"]);var J,N=new k["a"]({mode:"history",routes:[{path:"/",component:P,name:"Main"},{path:"/configuration",component:D,name:"Configuration"}]}),L=(n("c975"),n("a434"),n("d3b7"),n("2909")),W=n("b85c"),q=(n("96cf"),n("1da1")),G=function(t){var e=JSON.parse(t);return{bids:e.b,asks:e.a}},K=n("bc3a"),Q=function(){var t=Object(q["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){setTimeout((function(){t()}),e)})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();function V(t,e){var n,a=Object(W["a"])(e);try{for(a.s();!(n=a.n()).done;){var r,o=n.value,i=o[0],s=o[1],c=Object(W["a"])(t);try{for(c.s();!(r=c.n()).done;){var u=r.value;if(0===parseFloat(s)&&i===u[0]){var l=t.indexOf(u);t.splice(l,1)}parseFloat(i)===parseFloat(u[0])&&(u[1]=s)}}catch(f){c.e(f)}finally{c.f()}}}catch(f){a.e(f)}finally{a.f()}}var X={install:function(t){var e=null,n=[];t.prototype.$binance={connect:function(){var a=Object(q["a"])(regeneratorRuntime.mark((function a(r){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:n=[],e=new WebSocket("wss://stream.binance.com:9443/ws/".concat(r.toLowerCase(),"@depth")),e.onmessage=function(e){var a=G(e.data);n.push(JSON.parse(e.data)),t.prototype.$events.emit("update",a)};case 3:case"end":return a.stop()}}),a)})));function r(t){return a.apply(this,arguments)}return r}(),synchronize:function(){var e=Object(q["a"])(regeneratorRuntime.mark((function e(a){var r,o,i,s,c,u,l,f,p,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,K.get("https://www.binance.com/api/v1/depth?symbol=".concat(a.toUpperCase(),"&limit=100"));case 2:return J=e.sent,e.next=5,Q(3e3);case 5:r=J.data,o=Object(L["a"])(n),i=!1,s=Object(W["a"])(o);try{for(s.s();!(c=s.n()).done;)u=c.value,u.U<=r.lastUpdateId+1&&u.u>=r.lastUpdateId+1&&(i=!0,l=u.a,f=u.b,p=r.asks,d=r.bids,V(p,l),V(d,f))}catch(v){s.e(v)}finally{s.f()}if(!1!==i){e.next=13;break}return e.next=13,this.synchronize("".concat(a));case 13:t.prototype.$events.emit("load",r);case 14:case"end":return e.stop()}}),e,this)})));function a(t){return e.apply(this,arguments)}return a}(),disconnect:function(){var n=Object(q["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.close(),t.prototype.$events.emit("disconnect");case 2:case"end":return n.stop()}}),n)})));function a(){return n.apply(this,arguments)}return a}()}}},Y=n("faa1"),Z={install:function(t){t.prototype.$events=new Y}},tt=(n("fb6a"),n("2f62")),et=n("2ef0"),nt=n.n(et);a["a"].use(tt["a"]);var at=!1,rt=function(){return{asks:[],bids:[],symbol:""}};function ot(t,e,n,a){var r,o=nt.a.cloneDeep(t),i=Object(W["a"])(e[a]);try{for(i.s();!(r=i.n()).done;){var s=r.value,c=s[0],u=s[1],l=c*u;if(0===o[a].length&&parseFloat(u)>0)o[a].push({price:c,amount:u,total:l});else for(var f=0;f<o[a].length;f++){var p=o[a][f];if(parseFloat(c)===parseFloat(p.price)){o[a].splice(f,1),parseFloat(u)>0&&o[a].push({price:c,amount:u,total:l});break}var d=o[a].length-1===f;d&&parseFloat(u)>0&&o[a].push({price:c,amount:u,total:l})}}}catch(h){i.e(h)}finally{i.f()}if("bids"===a){var v=o[a].sort((function(t,e){return e.price-t.price}));t[a]=v.slice(0,49)}if("asks"===a){var b=o[a].sort((function(t,e){return t.price-e.price}));t[a]=b.slice(0,49)}}var it=new tt["a"].Store({actions:{changeSymbolAction:function(t,e){var n=t.commit;n("changeSymbol",e)},resetStateAction:function(t){var e=t.commit;e("resetState"),at=!1},loadSynchronizedAction:function(t,e){var n=t.commit;n("loadSynchronizedData",e)},updateStoreAction:function(t,e){var n=t.commit;at&&n("updateStore",e)}},mutations:{changeSymbol:function(t,e){t.symbol=e},loadSynchronizedData:function(t,e){t.asks=[],t.bids=[];var n,a=e.bids.slice(0,49),r=e.asks.slice(0,49),o=Object(W["a"])(r);try{for(o.s();!(n=o.n()).done;){var i=n.value,s=i[0],c=i[1],u=s*c;t.asks.push({price:s,amount:c,total:u})}}catch(h){o.e(h)}finally{o.f()}var l,f=Object(W["a"])(a);try{for(f.s();!(l=f.n()).done;){var p=l.value,d=p[0],v=p[1],b=d*v;t.bids.push({price:d,amount:v,total:b})}}catch(h){f.e(h)}finally{f.f()}at=!0},updateStore:function(t,e){var n=e.bids,a=e.asks;ot(t,e,n,"bids"),ot(t,e,a,"asks")},resetState:function(t){Object.assign(t,rt())}},getters:{getTheSymbol:function(t){return t.symbol}},state:rt()});a["a"].use(Z),a["a"].use(X),a["a"].config.productionTip=!1,new a["a"]({store:it,router:N,render:function(t){return t(w)}}).$mount("#app")},6896:function(t,e,n){"use strict";var a=n("26a9"),r=n.n(a);r.a},"71aa":function(t,e,n){"use strict";var a=n("f6a1"),r=n.n(a);r.a},7394:function(t,e,n){},"7c55":function(t,e,n){"use strict";var a=n("2395"),r=n.n(a);r.a},b30d:function(t,e,n){},dc59:function(t,e,n){"use strict";var a=n("7394"),r=n.n(a);r.a},f6a1:function(t,e,n){}});
//# sourceMappingURL=app.86fc26d7.js.map