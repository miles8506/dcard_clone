(function(e){function t(t){for(var r,o,a=t[0],u=t[1],s=t[2],l=0,m=[];l<a.length;l++)o=a[l],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&m.push(c[o][0]),c[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(m.length)m.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==c[a]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},c={app:0},i=[];function a(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-7e5b7595":"b2456905","chunk-21b0682e":"b8f66837","chunk-a363071c":"a15b0533","chunk-ba177f30":"c4d410fb","chunk-3ae22487":"f0550e23","chunk-75435e95":"26740a59","chunk-7fb2b508":"624d25be"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-7e5b7595":1,"chunk-21b0682e":1,"chunk-a363071c":1,"chunk-ba177f30":1,"chunk-3ae22487":1,"chunk-75435e95":1,"chunk-7fb2b508":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-7e5b7595":"49d5be81","chunk-21b0682e":"6d2a74f5","chunk-a363071c":"fc5b8e14","chunk-ba177f30":"97a19054","chunk-3ae22487":"06bd3d16","chunk-75435e95":"c550b7fd","chunk-7fb2b508":"c8b154a5"}[e]+".css",c=u.p+r,i=document.getElementsByTagName("link"),a=0;a<i.length;a++){var s=i[a],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===c))return t()}var m=document.getElementsByTagName("style");for(a=0;a<m.length;a++){s=m[a],l=s.getAttribute("data-href");if(l===r||l===c)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||c,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],d.parentNode.removeChild(d),n(i)},d.href=c;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){o[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=a(e);var m=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;m.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",m.name="ChunkLoadError",m.type=r,m.request=o,n[1](m)}c[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/dcard_clone/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var m=0;m<s.length;m++)t(s[m]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0613":function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return f})),n.d(t,"a",(function(){return h}));var r=n("5502"),o=n("9ab4"),c=n("6022"),i={namespaced:!0,state:function(){return{asideItem:[],immediatelyItem:[]}},mutations:{setAsideItem:function(e,t){e.asideItem=t},setImmediatelyItem:function(e,t){e.immediatelyItem=t}},actions:{getAsideItem:function(e,t){var n=e.commit,r=t.colName,i=t.docName;return Object(o["a"])(this,void 0,void 0,(function(){var e;return Object(o["b"])(this,(function(t){switch(t.label){case 0:return[4,Object(c["b"])(r,i)];case 1:return e=t.sent(),n("setAsideItem",e.aside_item),[2]}}))}))},getImmediatelyItem:function(e,t){var n=e.commit,r=t.colName,i=t.docName;return Object(o["a"])(this,void 0,void 0,(function(){var e;return Object(o["b"])(this,(function(t){switch(t.label){case 0:return[4,Object(c["b"])(r,i)];case 1:return e=t.sent(),n("setImmediatelyItem",e.asideImmediately),[2]}}))}))}}},a={namespaced:!0,state:function(){return{isShowStatus:!1,isShowSelectWindow:!1,issueCurrentName:"最新發佈",itmerCurrentName:"不限時間",articalTimeStamp:0,elseUserComment:[],likeComment:{status:!1,timeStamp:0,compute:""}}},mutations:{setIsshowState:function(e,t){e.isShowStatus=void 0!==t?t:!e.isShowStatus},setTimeStamp:function(e,t){e.articalTimeStamp=t},setIsShowSelectWindow:function(e){e.isShowSelectWindow=!e.isShowSelectWindow},setCurrentName:function(e,t){var n=t.item,r=t.selectName;"newIssue"===r?e.issueCurrentName=n:e.itmerCurrentName=n},setOtherComment:function(e,t){e.elseUserComment=t},pushOtherComment:function(e,t){e.elseUserComment.push(t)},setLikeComment:function(e,t){var n=!e.likeComment.status;e.likeComment={status:n,timeStamp:t.timeStamp,compute:t.computeStatus}}},getters:{getIsShowStatus:function(e){return e.isShowStatus},getIssueCurrentName:function(e){return e.issueCurrentName},getTimerCurrentName:function(e){return e.itmerCurrentName},getLikeComment:function(e){return e.likeComment},getArticalTimeStamp:function(e){return e.articalTimeStamp}}},u=n("d257"),s={namespaced:!0,state:function(){return{searchSortArr:[],isShowSearchSort:!0,searchIconModel:"",searchIptModel:"",judgeListLen:!1,isShowSearchArea:!1,searchValue:""}},mutations:{resetSearchSort:function(e){e.searchSortArr=u["b"].getItem("synthesizeRecode")},setSearchSortArr:function(e,t){e.searchSortArr=t},setShowSerchSort:function(e,t){e.isShowSearchSort=t},setSearchIconModel:function(e,t){e.searchIconModel=t},setJudgeListLen:function(e,t){e.judgeListLen=t},setShowSearchArea:function(e){e.isShowSearchArea=!e.isShowSearchArea},setSearchValue:function(e,t){e.searchValue=t},setSearchIptModel:function(e,t){e.searchIptModel=t}}},l={namespaced:!0,state:function(){return{currentItem:""}},mutations:{setCurrentItem:function(e,t){e.currentItem=t}}},m={namespaced:!0,state:function(){return{likeArtical:[],likeComment:[]}},mutations:{setLikeArtical:function(e,t){e.likeArtical=t},addLikeArtical:function(e,t){e.likeArtical.push(t)},subLikeArtical:function(e,t){e.likeArtical.splice(t,1)},setLikeComment:function(e,t){e.likeComment=t},addLikeComment:function(e,t){e.likeComment.push(t)},subLikeComment:function(e,t){e.likeComment.splice(t,1)}}},d=Object(r["a"])({state:{isShowMask:!1,isShowLargeQrcode:!1,isShowScroll:!1,isShowMAside:!1,articalBasisStatus:!0,isShowUserMIcon:!0,articalType:"",scrollTop:0},mutations:{setShowMask:function(e,t){e.isShowMask=void 0!==t?t:!e.isShowMask},setShowLargeQrcode:function(e){e.isShowLargeQrcode=!e.isShowLargeQrcode},setShowScroll:function(e,t){e.isShowScroll=t},setShowMAside:function(e){e.isShowMAside=!e.isShowMAside},setArticalBasisStatus:function(e){e.articalBasisStatus=!e.articalBasisStatus},setArticalType:function(e,t){e.articalType=t},setScrollTop:function(e,t){e.scrollTop=t},setShowUserMIcon:function(e,t){e.isShowUserMIcon=t}},actions:{},getters:{getScrollTop:function(e){return e.scrollTop},getArticalBasisStatus:function(e){return e.articalBasisStatus},getArticalType:function(e){return e.articalType}},modules:{asideModule:i,commentArticalModule:a,mSearchWindowModule:s,publicArticalModule:l,userInfoModule:m}});function f(){return Object(r["b"])()}function h(){c["a"].auth().onAuthStateChanged((function(e){if(null===e||void 0===e?void 0:e.email){var t=u["b"].getItem("clone_dcard_user_info");Object(c["c"])("user").then((function(n){var r=n.some((function(t){return t.data().account===(null===e||void 0===e?void 0:e.email)}));r||Object(c["d"])("user",null===e||void 0===e?void 0:e.email,{account:null===e||void 0===e?void 0:e.email,artical:[],comment:[],likeArtical:[],likeComment:[]}),""===t||null===t?Object(c["c"])("user").then((function(t){var n=t.filter((function(t){return t.data().account===e.email}));u["b"].setItem("clone_dcard_user_info",n[0].data()),location.reload()})):Object(c["c"])("user").then((function(t){var n=t.filter((function(t){return t.data().account===e.email}));u["b"].setItem("clone_dcard_user_info",n[0].data()),d.commit("userInfoModule/setLikeArtical",n[0].data().likeArtical),d.commit("userInfoModule/setLikeComment",n[0].data().likeComment)}))}))}})),d.commit("mSearchWindowModule/resetSearchSort"),d.dispatch("asideModule/getImmediatelyItem",{colName:"asideImmediately",docName:"94h8mmiunVohLfnTEo8x"}),u["b"].setItem("artical_basis","熱門"),u["b"].setItem("artical_type","所有看板")}},6022:function(e,t,n){"use strict";n.d(t,"a",(function(){return r["a"]})),n.d(t,"b",(function(){return i["a"]})),n.d(t,"d",(function(){return i["d"]})),n.d(t,"c",(function(){return i["b"]}));var r=n("260b"),o=(n("e71f"),n("588e"),n("ea7b"),"");o="AIzaSyBwsT_H0l1i1wcP86sKXs16_3aFLjx9L-M";var c={apiKey:o,authDomain:"clonedcard-3a621.firebaseapp.com",projectId:"clonedcard-3a621",storageBucket:"clonedcard-3a621.appspot.com",messagingSenderId:"527773406039",appId:"1:527773406039:web:37fb1bf41da29cd52c2412"};r["a"].initializeApp(c);var i=n("6c80")},"6c80":function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i})),n.d(t,"d",(function(){return a})),n.d(t,"c",(function(){return u}));var r=n("260b"),o=(n("e71f"),n("588e"),n("ea7b"),r["a"].firestore());function c(e,t){var n=o.collection(e).doc(t);return new Promise((function(e,t){n.get().then((function(t){e(t.data())})).catch((function(e){t(e)}))}))}function i(e){return new Promise((function(t,n){var r=o.collection(e);r.get().then((function(e){t(e.docs)})).catch((function(e){n(e)}))}))}function a(e,t,n){return new Promise((function(r,c){var i=o.collection(e).doc(t+"");i.set(n).then((function(e){r(e)})).catch((function(e){c(e)}))}))}function u(e,t){return Promise.allSettled([i(e),i(t)])}},b14c:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);var r=n("7a23");function o(e,t){const n=Object(r["G"])("router-view");return Object(r["y"])(),Object(r["e"])(n)}n("fd3e");var c=n("d959"),i=n.n(c);const a={},u=i()(a,[["render",o]]);var s=u,l=n("6c02"),m=[{path:"/",redirect:"/main"},{path:"/main",name:"main",component:function(){return Promise.all([n.e("chunk-7e5b7595"),n.e("chunk-21b0682e"),n.e("chunk-ba177f30")]).then(n.bind(null,"85d4"))}},{path:"/login",name:"login",component:function(){return Promise.all([n.e("chunk-7e5b7595"),n.e("chunk-3ae22487")]).then(n.bind(null,"dc3f"))}},{path:"/search",name:"search",component:function(){return Promise.all([n.e("chunk-7e5b7595"),n.e("chunk-21b0682e"),n.e("chunk-a363071c")]).then(n.bind(null,"b7cd"))}},{path:"/publicArtical",name:"publicArtical",component:function(){return Promise.all([n.e("chunk-7e5b7595"),n.e("chunk-7fb2b508")]).then(n.bind(null,"cd06"))}},{path:"/my",name:"my",component:function(){return Promise.all([n.e("chunk-7e5b7595"),n.e("chunk-75435e95")]).then(n.bind(null,"518c"))}}],d=Object(l["a"])({history:Object(l["b"])(),routes:m});d.beforeEach((function(e){e.path}));var f=d,h=(n("e71f"),n("588e"),n("ea7b"),n("0613")),b=(n("f5df"),n("77ed"),n("d257"));function p(){var e=b["b"].getItem("synthesizeRecode");null===e&&b["b"].setItem("synthesizeRecode",[])}function S(){p(),Object(h["a"])()}var v=Object(r["d"])(s);v.use(h["b"]).use(S).use(f).mount("#app")},d257:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"e",(function(){return u})),n.d(t,"d",(function(){return l})),n.d(t,"a",(function(){return m}));var r=function(){function e(){this.setItem=function(e,t){window.localStorage.setItem(e,JSON.stringify(t))},this.getItem=function(e){var t=window.localStorage.getItem(e);return JSON.parse(t)},this.removeItem=function(e){window.localStorage.removeItem(e)},this.clearItem=function(){window.localStorage.clear()}}return e}(),o=new r,c=n("5a0c"),i=n.n(c);function a(e){return i()(e).format("YYYY/MM/DD hh:mm:ss")}function u(e){return i()(e).valueOf()}function s(e){var t=u(new Date);return t-e}function l(e){var t,n=s(e);return t=n<36e5?(n/1e3/60).toFixed(0)+" 分鐘前":n<864e5?(n/1e3/60/60).toFixed(0)+" 小時前":(n/1e3/60/60/24).toFixed(0)+" 天前",t}function m(e,t){var n=i()(new Date).valueOf(),r=n-t,o=e.filter((function(e){return e.timerStamp>=r}));return o}},fd3e:function(e,t,n){"use strict";n("b14c")}});
//# sourceMappingURL=app.9165e965.js.map