"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[678,875],{79:function(e,t,n){var i=n(294);t.Z=function(e){var t=e.style,n=(0,i.useState)(""),l=n[0],o=n[1];function c(e){void 0===e&&(e=2e3),o("fadeIn"),setTimeout((function(){o("bounceOutUp")}),e)}return(0,i.useImperativeHandle)(e.onRef,(function(){return{show:c}})),i.createElement("div",null,i.createElement("div",{style:t,className:l},e.data.msg))}},558:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});var i=n(294),l=n(583);function o(){return i.createElement("div",null,i.createElement(l.default,null))}},583:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var i=n(294),l=n(597),o=n(79);function c(){var e=(0,i.useState)("Welcome"),t=e[0],n=e[1],c=(0,i.useState)(""),r=c[0],a=c[1],s=(0,i.useState)("hidden"),u=s[0],d=s[1],f=(0,i.useState)(""),m=f[0],v=f[1],p=(0,i.useState)("hidden"),g=p[0],h=p[1],E=(0,i.useRef)(),S=(0,i.useRef)();function b(){if(!r)return e=1500,h("visible"),void setTimeout((function(){h("hidden")}),e);var e;simpleSdk.login(r)}return(0,i.useEffect)((function(){simpleSdk.openWebSocketConnection("ws://127.0.0.1:9000/ws")}),[]),simpleSdk.on("connection-server-success",(function(){n("连接服务器成功,输入用户名开始聊天!")})),simpleSdk.on("connection-server-fail",(function(){n("连接服务器失败!")})),simpleSdk.on("login-success",(function(e){E.current&&E.current.click()})),simpleSdk.on("login-fail",(function(e){var t;S.current&&(t=e.data.msg,v(t),d("visible"),S.current.show(1e3),setTimeout((function(){d("hidden")}),2e3))})),i.createElement("div",{className:"login-module--out--bZSqG"},i.createElement(o.Z,{onRef:S,data:{msg:m},style:{width:"300px",height:"40px",backgroundColor:"#fff2f0",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"3px",visibility:u,marginBottom:"50%",border:"1px solid #ffffff",fontSize:"14px",lineHeight:"1.571",color:"#f56c6c"}}),i.createElement(l.rU,{to:"/chat",state:{username:{username:r}}},i.createElement("div",{ref:E,style:{display:"none"}}," ignore")),i.createElement("div",{className:"login-module--login--fR6qE"},i.createElement("div",{className:"login-module--server--cWk5c"},t),i.createElement("div",{className:"login-module--inputAndStar--o10eS"},i.createElement("svg",{t:"1643784048204",className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1568",width:"6px",height:"6px"},i.createElement("path",{d:"M927 679.5L635.7 511.7 927 343.9c29.1-14.6 43.7-58.3 22.1-87.4-14.6-29.1-58.3-43.7-87.4-22.1L570.5 402.2V67.8c7-36.7-22.1-65.8-58.3-65.8-36.1 0-65.8 29.1-65.8 65.8v335L155.1 235c-22.1-21.6-65.8-7-80.4 22.1-14.6 29.1-7.6 72.8 22.1 87.4l291.3 167.8L96.9 680.1c-29.1 14.6-43.7 58.3-21.6 87.4 14.6 22.1 36.7 29.1 58.3 29.1 7 0 21.6 0 29.1-7.6L454 621.2v335c-7.6 36.7 22.1 65.8 58.3 65.8 36.1 0 65.2-29.1 65.2-65.8v-335L868.7 789c7.6 7.6 22.1 7.6 29.1 7.6 22.1 0 43.7-14.6 58.3-29.1 7-29.8 0-73.5-29.1-88z",fill:"#E52323","p-id":"1569"})),i.createElement("input",{className:"login-module--input--ACtII",placeholder:"输入用户名",onChange:function(e){return t=(t=e.target.value).replace(/\s+/g,""),void a(t);var t},value:r}),i.createElement("span",{style:{paddingLeft:"7px",fontSize:"13px",color:"#de0c0c",visibility:g}},"用户名不能为空!")),i.createElement("button",{className:"login-module--loginButton--TR0+H",onClick:function(){return b()}},"登录")))}}}]);
//# sourceMappingURL=component---src-pages-index-js-f4454963966df9950738.js.map