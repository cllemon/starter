(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{38:function(a,t,o){"use strict";o.d(t,"a",(function(){return e})),o.d(t,"b",(function(){return n}));var e=[{label:"Github",path:"/dashboard/github",icon:"icon-github"},{label:"Setting",path:"/dashboard/setting",icon:"icon-setting"}],n=[{value:"stargazersCount",icon:"icon-star"},{value:"forksCount",icon:"icon-code-fork"},{value:"language",icon:"icon-code"}]},51:function(a,t,o){a.exports={root:"BottomTabNavigator__root-1CmSS",bottom:"BottomTabNavigator__bottom-3QsIf",active:"BottomTabNavigator__active-1oXsM","TouchRipple-keyframes-enter":"BottomTabNavigator__TouchRipple-keyframes-enter-FBWg5",nav:"BottomTabNavigator__nav-3bPWE",navIcon:"BottomTabNavigator__navIcon-3t9av",navTitle:"BottomTabNavigator__navTitle-bubbY"}},81:function(a,t,o){"use strict";o.r(t);var e=o(0),n=o.n(e),r=o(14),i=o(7),c=o.n(i),s=o(51),l=o.n(s),u=o(38);function BottomTabNavigator(a){var t=a.list,o=a.render;return n.a.createElement("section",{className:l.a.root},o(),n.a.createElement("section",{className:l.a.bottom},t.length&&t.map((function(a){return n.a.createElement(r.b,{key:a.path,to:a.path,className:l.a.nav,activeClassName:l.a.active},n.a.createElement("i",{className:"iconfont ".concat(a.icon," ").concat(l.a.navIcon)}),n.a.createElement("div",{className:l.a.navTitle},a.label))}))))}BottomTabNavigator.propTypes={render:c.a.func,list:c.a.arrayOf(c.a.shape({label:c.a.string,path:c.a.string,icon:c.a.string}))},BottomTabNavigator.defaultProps={render:function render(){return null},list:u.a},t.default=BottomTabNavigator}}]);