!function(e){function webpackJsonpCallback(r){for(var t,a,i=r[0],o=r[1],l=r[2],_=0,p=[];_<i.length;_++)a=i[_],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&p.push(n[a][0]),n[a]=0;for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t]);for(u&&u(r);p.length;)p.shift()();return c.push.apply(c,l||[]),checkDeferredModules()}function checkDeferredModules(){for(var e,r=0;r<c.length;r++){for(var t=c[r],a=!0,i=1;i<t.length;i++){var o=t[i];0!==n[o]&&(a=!1)}a&&(c.splice(r--,1),e=__webpack_require__(__webpack_require__.s=t[0]))}return e}var r={},t={2:0},n={2:0},c=[];function __webpack_require__(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,__webpack_require__),n.l=!0,n.exports}__webpack_require__.e=function requireEnsure(e){var r=[];t[e]?r.push(t[e]):0!==t[e]&&{0:1,1:1,3:1,4:1}[e]&&r.push(t[e]=new Promise((function(r,n){for(var c="css/"+({0:"bottom-tab-navigator",1:"github",3:"not-found",4:"setting",5:"vendors~github"}[e]||e)+"."+{0:"25c0dead",1:"866c72ba",3:"d566b1be",4:"2b60ef7c",5:"31d6cfe0"}[e]+".css",a=__webpack_require__.p+c,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var u=(_=i[o]).getAttribute("data-href")||_.getAttribute("href");if("stylesheet"===_.rel&&(u===c||u===a))return r()}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){var _;if((u=(_=l[o]).getAttribute("data-href"))===c||u===a)return r()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=r,p.onerror=function(r){var c=r&&r.target&&r.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=c,delete t[e],p.parentNode.removeChild(p),n(i)},p.href=a,document.getElementsByTagName("head")[0].appendChild(p)})).then((function(){t[e]=0})));var c=n[e];if(0!==c)if(c)r.push(c[2]);else{var a=new Promise((function(r,t){c=n[e]=[r,t]}));r.push(c[2]=a);var i,o=document.createElement("script");o.charset="utf-8",o.timeout=120,__webpack_require__.nc&&o.setAttribute("nonce",__webpack_require__.nc),o.src=function jsonpScriptSrc(e){return __webpack_require__.p+"chunks/"+({0:"bottom-tab-navigator",1:"github",3:"not-found",4:"setting",5:"vendors~github"}[e]||e)+"."+{0:"77d17027",1:"4e7f6c35",3:"638dbdfc",4:"bc3fbe14",5:"7acdaa67"}[e]+".js"}(e);var u=new Error;i=function(r){o.onerror=o.onload=null,clearTimeout(l);var t=n[e];if(0!==t){if(t){var c=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+e+" failed.\n("+c+": "+a+")",u.name="ChunkLoadError",u.type=c,u.request=a,t[1](u)}n[e]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:o})}),12e4);o.onerror=o.onload=i,document.head.appendChild(o)}return Promise.all(r)},__webpack_require__.m=e,__webpack_require__.c=r,__webpack_require__.d=function(e,r,t){__webpack_require__.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},__webpack_require__.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.t=function(e,r){if(1&r&&(e=__webpack_require__(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(__webpack_require__.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)__webpack_require__.d(t,n,function(r){return e[r]}.bind(null,n));return t},__webpack_require__.n=function(e){var r=e&&e.__esModule?function getDefault(){return e.default}:function getModuleExports(){return e};return __webpack_require__.d(r,"a",r),r},__webpack_require__.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},__webpack_require__.p="/starter/",__webpack_require__.oe=function(e){throw console.error(e),e};var a=window.webpackJsonp=window.webpackJsonp||[],i=a.push.bind(a);a.push=webpackJsonpCallback,a=a.slice();for(var o=0;o<a.length;o++)webpackJsonpCallback(a[o]);var u=i;c.push([24,6]),checkDeferredModules()}({10:function(e,r,t){e.exports={circle:"Circle__circle-2SdFe",child:"Circle__child-Y-Se9",circleBounceDelay:"Circle__circleBounceDelay-Z6LlW",circle2:"Circle__circle2-2y1eO",circle3:"Circle__circle3-1Pkpt",circle4:"Circle__circle4-givWe",circle5:"Circle__circle5-1nlDY",circle6:"Circle__circle6-15duF",circle7:"Circle__circle7-25YJ3",circle8:"Circle__circle8-3w1dX",circle9:"Circle__circle9-1NrEM",circle10:"Circle__circle10-1NwGz",circle11:"Circle__circle11-ZJxoa",circle12:"Circle__circle12-3iGKX"}},17:function(e,r,t){"use strict";var n=t(0),c=t.n(n),a=t(19),i=t.n(a),o=t(10),u=t.n(o);var l=function Circle_Circle(){var e=Array(12).fill("");return c.a.createElement("div",{className:u.a.circle},e.map((function(e,r){return c.a.createElement("div",{className:"".concat(u.a["circle".concat(r+1)]," ").concat(u.a.child),key:r},e)})))};r.a=function Loading_Loading(){return c.a.createElement("section",{className:"".concat(i.a.root," position-center")},c.a.createElement(l,null))}},19:function(e,r,t){e.exports={root:"Loading__root-dliI1",title:"Loading__title-279DN"}},22:function(e,r,t){"use strict";var n=t(9),c=t.n(n),a=t(0),i=t.n(a),o=t(6),u=t(14),l=t(23),_=t(17),p=t.e(0).then(t.bind(null,81)),d=Promise.all([t.e(5),t.e(1)]).then(t.bind(null,83)),s=t.e(4).then(t.bind(null,82)),f=t.e(3).then(t.bind(null,42)),b=function AsyncComponent(e){return Object(l.a)(e,{fallback:i.a.createElement(_.a,null)})},h=[{path:"/",exact:!0,redirect:"/dashboard/github"},{path:"/dashboard",component:b((function(){return p})),routes:[{path:"/dashboard/github",component:b((function(){return d}))},{path:"/dashboard/setting",component:b((function(){return s}))}]},{path:"*",component:b((function(){return f}))}];function RouterView(e){return i.a.createElement(o.b,{path:e.path,render:function render(r){return e.redirect?i.a.createElement(o.a,{to:e.redirect}):i.a.createElement(e.component,c()({},r,{render:function render(){return i.a.createElement(o.d,null,e.routes.map((function(e){return i.a.createElement(RouterView,c()({key:e.path},e))})))}}))}})}function Router(){return i.a.createElement(u.a,null,i.a.createElement(o.d,null,h.map((function(e){return i.a.createElement(RouterView,c()({key:e.path},e))}))))}t.d(r,"a",(function(){return Router}))},24:function(e,r,t){"use strict";t.r(r),function(e){var r=t(21),n=t(0),c=t.n(n),a=t(18),i=t.n(a),o=t(22),u=(t(35),Object(r.hot)(e)((function(){return c.a.createElement("div",{className:"app"},c.a.createElement(o.a,null))})));i.a.render(c.a.createElement(u,null),document.getElementById("root"))}.call(this,t(25)(e))},35:function(e,r,t){}});