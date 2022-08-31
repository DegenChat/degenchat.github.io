"use strict";(self.webpackChunkdegenchat=self.webpackChunkdegenchat||[]).push([[570],{64189:function(K,z,a){a.r(z),a.d(z,{default:function(){return Te}});var n=a(625),T=a(97183),d=a(67294),e=a(85893),Z=T.Z.Content,P=function(i){var s=i.children;return(0,e.jsx)(T.Z,{children:(0,e.jsx)(Z,{children:s})})},O=P,_=a(58202),W=a(1413),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M288 421a48 48 0 1096 0 48 48 0 10-96 0zm352 0a48 48 0 1096 0 48 48 0 10-96 0zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm263 711c-34.2 34.2-74 61-118.3 79.8C611 874.2 562.3 884 512 884c-50.3 0-99-9.8-144.8-29.2A370.4 370.4 0 01248.9 775c-34.2-34.2-61-74-79.8-118.3C149.8 611 140 562.3 140 512s9.8-99 29.2-144.8A370.4 370.4 0 01249 248.9c34.2-34.2 74-61 118.3-79.8C413 149.8 461.7 140 512 140c50.3 0 99 9.8 144.8 29.2A370.4 370.4 0 01775.1 249c34.2 34.2 61 74 79.8 118.3C874.2 413 884 461.7 884 512s-9.8 99-29.2 144.8A368.89 368.89 0 01775 775zM664 533h-48.1c-4.2 0-7.8 3.2-8.1 7.4C604 589.9 562.5 629 512 629s-92.1-39.1-95.8-88.6c-.3-4.2-3.9-7.4-8.1-7.4H360a8 8 0 00-8 8.4c4.4 84.3 74.5 151.6 160 151.6s155.6-67.3 160-151.6a8 8 0 00-8-8.4z"}}]},name:"smile",theme:"outlined"},r=c,t=a(27029),ee=function(i,s){return d.createElement(t.Z,(0,W.Z)((0,W.Z)({},i),{},{ref:s,icon:r}))};ee.displayName="SmileOutlined";var ce=d.forwardRef(ee),ae=a(99683),U=a(71577),H=a(59841),le=a(17061),M=a.n(le),oe=a(17156),Y=a.n(oe),de=a(27424),J=a.n(de),ue=a(45792),N={erc20WidgetContainer:"erc20WidgetContainer___FAT6V",coinContainer:"coinContainer___dj8kr",coinList:"coinList___WJcJ2",coinItem:"coinItem___Z9wKM",coinIcon:"coinIcon___c6FLi",coinCount:"coinCount___uV18O",avatarContainer:"avatarContainer___AELfk",avatar:"avatar___nw52e"},te=a(48086),me=a(18477),ve=a(82030),_e=a(77616),ge=function(i){var s,u=i.account,l=(0,H.useModel)("Contracts"),v=l.USDTContract,C=(0,d.useState)(null),L=J()(C,2),I=L[0],S=L[1],x=(0,d.useState)(),D=J()(x,2),o=D[0],h=D[1];if(!u)return null;var G=function(){var V=Y()(M()().mark(function m(w){var j,F,g,y,E,re,se,ie;return M()().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,(0,ue.Z)(w);case 2:return E=k.sent,re=E?.data.ETH.balance,se=E?.data.ETH.price.rate,ie=(E==null||(j=E.data)===null||j===void 0||(F=j.tokens)===null||F===void 0||(g=F.filter(function(R){return R.tokenInfo.price!=!1}))===null||g===void 0||(y=g.map(function(R){if(typeof R.tokenInfo.price=="boolean")throw Error("token price is boolean type");var q=R.tokenInfo.price.rate;return R.balance/Math.pow(10,R.tokenInfo.decimals)*q}))===null||y===void 0?void 0:y.reduce(function(R,q){return R+q},0))||0,k.abrupt("return",{ethBalance:re,ethValueInUSD:se,erc20ValueInUSD:ie});case 7:case"end":return k.stop()}},m)}));return function(w){return V.apply(this,arguments)}}(),b=function(){var V=Y()(M()().mark(function m(w){var j;return M()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,v?.balanceOf(w);case 2:return j=g.sent,g.abrupt("return",j);case 4:case"end":return g.stop()}},m)}));return function(w){return V.apply(this,arguments)}}();return(0,d.useEffect)(function(){if(!!u&&!!v){var V=function(){var w=Y()(M()().mark(function j(){return M()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:G(u).then(function(y){return S(y)}).catch(function(y){te.ZP.error(y.message),setTimeout(V,5e3)});case 1:case"end":return g.stop()}},j)}));return function(){return w.apply(this,arguments)}}(),m=function(){var w=Y()(M()().mark(function j(){return M()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:b(u).then(function(y){y?h(y):setTimeout(m,5e3)}).catch(function(y){te.ZP.error(y.message),setTimeout(m,5e3)});case 1:case"end":return g.stop()}},j)}));return function(){return w.apply(this,arguments)}}();V(),m()}},[u,v]),(0,e.jsx)("div",{className:N.erc20WidgetContainer,children:(0,e.jsxs)("div",{className:N.coinContainer,children:[(0,e.jsxs)("div",{className:N.coinList,children:[(0,e.jsxs)("div",{className:N.coinItem,children:[(0,e.jsx)(me.r,{className:N.coinIcon}),(0,e.jsx)("div",{className:N.coinCount,children:I!=null&&I.ethBalance?I==null||(s=I.ethBalance)===null||s===void 0?void 0:s.toFixed(2):0})]}),(0,e.jsxs)("div",{className:N.coinItem,children:[(0,e.jsx)(ve.r,{className:N.coinIcon}),(0,e.jsx)("div",{className:N.coinCount,children:o?_e.dF(o).match(/^\d+(?:\.\d{0,2})?/):0})]})]}),(0,e.jsx)("div",{className:N.avatarContainer,children:(0,e.jsx)("img",{className:N.avatar,src:"https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png",alt:u})})]})})},he=ge,A={erc721WidgetContainer:"erc721WidgetContainer___GmeY2",assetContainer:"assetContainer___XKiux",assetList:"assetList___fJM6k",assetItem:"assetItem___vSYcL",assetImage:"assetImage___Ao14e",assetValue:"assetValue___JG4pH",assetTotal:"assetTotal____hXZN"},fe=a(4817);function Ie(p,i){return $.apply(this,arguments)}function $(){return $=Y()(M()().mark(function p(i,s){return M()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,fe.W)(n.cB.endpoint+"/api/v1/assets",{method:"GET",params:{owner:i,limit:s,order_direction:"asc",order_by:"sale_date"},getResponse:!0}));case 1:case"end":return l.stop()}},p)})),$.apply(this,arguments)}var pe=function(i){var s,u,l,v=i.account,C=(0,d.useState)({assets:[]}),L=J()(C,2),I=L[0],S=L[1];if(!v)return null;var x=I?I==null||(s=I.assets)===null||s===void 0||(u=s.flatMap(function(o,h){return o.token_metadata?[o]:[]}))===null||u===void 0?void 0:u.sort(function(o,h){return(o.last_sale||0)-(h.last_sale||0)}):[],D=x==null||(l=x.map(function(o){return o.last_sale||0}))===null||l===void 0?void 0:l.reduce(function(o,h){return o+h},0);return(0,d.useEffect)(function(){if(v){var o=function(){var h=Y()(M()().mark(function G(){var b;return M()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.prev=0,m.next=3,Ie(v,4);case 3:b=m.sent,b.response.status===200?S(b?.data):setTimeout(o,5e3),m.next=11;break;case 7:m.prev=7,m.t0=m.catch(0),console.log(m.t0),setTimeout(o,5e3);case 11:case"end":return m.stop()}},G,null,[[0,7]])}));return function(){return h.apply(this,arguments)}}();o()}},[v]),I?(0,e.jsx)("div",{className:A.erc721WidgetContainer,children:(0,e.jsxs)("div",{className:A.assetContainer,children:[(0,e.jsx)("div",{className:A.assetList,children:x?.map(function(o){var h;return(0,e.jsxs)("div",{className:A.assetItem,children:[(0,e.jsx)("img",{className:A.assetImage,src:o.image_thumbnail_url,alt:o.name}),(0,e.jsxs)("div",{className:A.assetValue,children:["$",(h=o.last_sale||0)===null||h===void 0?void 0:h.toFixed(2)]})]},o.token_id)})}),(0,e.jsxs)("div",{className:A.assetTotal,children:["$",D?.toFixed(2)]})]})}):null},Ce=pe,Me={localVideoCard:"localVideoCard___Y7Mrt"},je=function(i){var s=i.videoStream,u=i.className;if(!s)return null;var l=(0,d.useRef)(null);return(0,d.useEffect)(function(){l.current&&(l.current.srcObject=s)},[s]),(0,e.jsx)("div",{className:u||Me.localVideoCard,children:(0,e.jsx)("video",{style:{height:"100%"},ref:l,autoPlay:!0,playsInline:!0,muted:!0})})},ne=je,B={rateContainer:"rateContainer___BbIE0",rateButton:"rateButton___ntIh9",rateResult:"rateResult___Tw1Hi",good:"good___t6Dfo",bad:"bad___KHnEy"},X=a(89583),Q;(function(p){p.GOOD="Good",p.BAD="Bad"})(Q||(Q={}));var ye=function(i){var s=i.showRate,u=i.rate,l=i.onRated;return s?u?(0,e.jsx)("div",{className:B.rateContainer,children:(0,e.jsx)("div",{className:B.rateResult,children:u===Q.GOOD?(0,e.jsx)(X.gqR,{className:B.good}):(0,e.jsx)(X.NV4,{className:B.bad})})}):(0,e.jsxs)("div",{className:B.rateContainer,children:[(0,e.jsx)(U.Z,{type:"primary",size:"large",shape:"circle",icon:(0,e.jsx)(X.gqR,{}),className:B.rateButton,onClick:function(){return l(Q.GOOD)}}),(0,e.jsx)(U.Z,{danger:!0,type:"primary",size:"large",shape:"circle",icon:(0,e.jsx)(X.NV4,{}),className:B.rateButton,onClick:function(){return l(Q.BAD)}})]}):null},Ne=ye,xe={remoteVideoCard:"remoteVideoCard___N9WZu"},Le=function(i){var s=i.videoStream,u=i.className;if(!s)return null;var l=(0,d.useRef)(null);return(0,d.useEffect)(function(){l.current&&(l.current.srcObject=s)},[s]),(0,e.jsx)("div",{className:u||xe.remoteVideoCard,children:(0,e.jsx)("video",{style:{height:"100%"},ref:l,autoPlay:!0,playsInline:!0})})},Se=Le,f={idleContainer:"idleContainer___Ya4Ag",cameraContainer:"cameraContainer___FBjC4",waveContainer:"waveContainer___TCkn1",waveBackground:"waveBackground___kNpgd",opacityScale:"opacityScale___W7112",waveText:"waveText___ktAD2",opacity:"opacity___qc4v2",failedContainer:"failedContainer___TtK6L",button:"button___z0vF8",chattingContainer:"chattingContainer___wWs_8",widgetContainer:"widgetContainer___HwDpo",localVideoCardChatting:"localVideoCardChatting___u7KeP",endedContainer:"endedContainer___R19hc"},Ee=function(){var i=(0,H.useModel)("web3"),s=i.account,u=i.chainId,l=i.connect,v=(0,H.useModel)("ZegoExpress"),C=v.chatState,L=v.streamState,I=v.failedReason,S=v.chatSession,x=v.rateInfo,D=v.onRate,o=v.setChatState,h=(0,H.useIntl)();return(0,d.useEffect)(function(){l()},[]),(0,d.useEffect)(function(){(!s||!n.vc.network.id.includes(u))&&H.history.push({pathname:"/"})},[s,u]),(0,e.jsxs)(O,{children:[(C===_.g.preparing||C===_.g.matching||C===_.g.connecting)&&(0,e.jsx)("div",{className:f.idleContainer,children:(0,e.jsxs)("div",{className:f.cameraContainer,children:[(0,e.jsxs)("div",{className:f.waveContainer,children:[(0,e.jsx)("div",{className:f.waveBackground}),(0,e.jsxs)("span",{className:f.waveText,children:[C===_.g.preparing||C===_.g.matching&&h.formatMessage({id:"chat.matching",defaultMessage:"Matching..."}),C===_.g.connecting&&h.formatMessage({id:"chat.connecting",defaultMessage:"Connecting..."})]})]}),(0,e.jsx)(ne,{videoStream:L.current.localStream})]})}),C===_.g.chatting&&(0,e.jsxs)("div",{className:f.chattingContainer,children:[(0,e.jsxs)("div",{className:f.widgetContainer,children:[(0,e.jsx)(he,{account:S?.peerAccount}),(0,e.jsx)(Ce,{account:S?.peerAccount}),(0,e.jsx)(Ne,{showRate:x.showRate,rate:x.rate,onRated:D})]}),(0,e.jsxs)("div",{className:f.cameraContainer,children:[(0,e.jsx)(ne,{videoStream:L.current.localStream,className:f.localVideoCardChatting}),(0,e.jsx)(Se,{videoStream:L.current.remoteStream})]})]}),C===_.g.failed&&(0,e.jsx)("div",{className:f.failedContainer,children:(0,e.jsx)(ae.ZP,{status:"error",title:I,extra:[(0,e.jsx)(U.Z,{type:"primary",shape:"round",size:"large",className:f.button,onClick:function(){o(_.g.preparing)},children:"Try Again"},"try")]})}),C===_.g.done&&(0,e.jsx)("div",{className:f.endedContainer,children:(0,e.jsx)(ae.ZP,{icon:(0,e.jsx)(ce,{}),title:h.formatMessage({id:"chat.ended",defaultMessage:"Chat ended"}),extra:[(0,e.jsx)(U.Z,{type:"primary",shape:"round",size:"large",className:f.button,onClick:function(){o(_.g.preparing)},children:"Start Again"}),(0,e.jsx)(U.Z,{shape:"round",size:"large",className:f.button,onClick:function(){window.location.replace("/home"),L.current={}},children:"Back To Home"})]})})]})},Te=Ee},45792:function(K,z,a){a.d(z,{Z:function(){return O}});var n=a(17061),T=a.n(n),d=a(17156),e=a.n(d),Z=a(625),P=a(4817);function O(W){return _.apply(this,arguments)}function _(){return _=e()(T()().mark(function W(c){return T()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,P.W)("".concat(Z.tx.endpoint,"/getAddressInfo/").concat(c),{method:"GET",params:{showETHTotals:!0},getResponse:!0}));case 1:case"end":return t.stop()}},W)})),_.apply(this,arguments)}},18477:function(K,z,a){a.d(z,{r:function(){return _}});var n=a(67294),T=Object.defineProperty,d=Object.getOwnPropertySymbols,e=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable,P=(c,r,t)=>r in c?T(c,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):c[r]=t,O=(c,r)=>{for(var t in r||(r={}))e.call(r,t)&&P(c,t,r[t]);if(d)for(var t of d(r))Z.call(r,t)&&P(c,t,r[t]);return c};const _=c=>n.createElement("svg",O({id:"eth-circle_svg__katman_1",xmlns:"http://www.w3.org/2000/svg",x:0,y:0,viewBox:"0 0 731.6 731.6",style:{enableBackground:"new 0 0 731.6 731.6"},xmlSpace:"preserve"},c),n.createElement("style",null,".eth-circle_svg__st1{fill-opacity:.602}.eth-circle_svg__st1,.eth-circle_svg__st2{fill:#fff}"),n.createElement("g",{id:"eth-circle_svg__All"},n.createElement("g",{id:"eth-circle_svg__Developer-Center",transform:"translate(-1008 -2285)"},n.createElement("g",{id:"eth-circle_svg__Group-28",transform:"translate(382 2270.8)"},n.createElement("g",{id:"eth-circle_svg__Group-29",transform:"translate(0 .2)"},n.createElement("g",{id:"eth-circle_svg__Group-10",transform:"translate(0 14)"},n.createElement("g",{id:"eth-circle_svg__Group-13"},n.createElement("g",{id:"eth-circle_svg__Group-46",transform:"translate(626.4)"},n.createElement("g",{id:"eth-circle_svg__Group-45"},n.createElement("circle",{id:"eth-circle_svg__Oval",cx:365.4,cy:365.8,r:365.8,style:{fill:"#627eea"}}),n.createElement("path",{id:"eth-circle_svg__Path",className:"eth-circle_svg__st1",d:"M376.8 91.4v202.8l171.4 76.6z"}),n.createElement("path",{id:"eth-circle_svg__Path_1_",className:"eth-circle_svg__st2",d:"M376.8 91.4 205.4 370.8l171.4-76.6z"}),n.createElement("path",{id:"eth-circle_svg__Path_2_",className:"eth-circle_svg__st1",d:"M376.8 502.2V640l171.5-237.3z"}),n.createElement("path",{id:"eth-circle_svg__Path_3_",className:"eth-circle_svg__st2",d:"M376.8 640V502.2l-171.4-99.5z"}),n.createElement("path",{id:"eth-circle_svg__Path_4_",style:{fill:"#fff",fillOpacity:.2},d:"m376.8 470.3 171.4-99.5-171.4-76.6z"})),n.createElement("path",{id:"eth-circle_svg__Path_5_",className:"eth-circle_svg__st1",d:"m205.4 370.8 171.4 99.5V294.2z"})))))))));var W="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJrYXRtYW5fMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgNzMxLjYgNzMxLjYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDczMS42IDczMS42IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGU+LnN0MXtmaWxsLW9wYWNpdHk6LjYwMn0uc3QxLC5zdDJ7ZmlsbDojZmZmfTwvc3R5bGU+PGcgaWQ9IkFsbCI+PGcgaWQ9IkRldmVsb3Blci1DZW50ZXIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMDA4IC0yMjg1KSI+PGcgaWQ9Ikdyb3VwLTI4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzODIgMjI3MC44KSI+PGcgaWQ9Ikdyb3VwLTI5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC4yKSI+PGcgaWQ9Ikdyb3VwLTEwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDE0KSI+PGcgaWQ9Ikdyb3VwLTEzIj48ZyBpZD0iR3JvdXAtNDYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYyNi40KSI+PGcgaWQ9Ikdyb3VwLTQ1Ij48Y2lyY2xlIGlkPSJPdmFsIiBjeD0iMzY1LjQiIGN5PSIzNjUuOCIgcj0iMzY1LjgiIHN0eWxlPSJmaWxsOiM2MjdlZWEiLz48cGF0aCBpZD0iUGF0aCIgY2xhc3M9InN0MSIgZD0iTTM3Ni44IDkxLjR2MjAyLjhsMTcxLjQgNzYuNnoiLz48cGF0aCBpZD0iUGF0aF8xXyIgY2xhc3M9InN0MiIgZD0iTTM3Ni44IDkxLjQgMjA1LjQgMzcwLjhsMTcxLjQtNzYuNnoiLz48cGF0aCBpZD0iUGF0aF8yXyIgY2xhc3M9InN0MSIgZD0iTTM3Ni44IDUwMi4yVjY0MGwxNzEuNS0yMzcuM3oiLz48cGF0aCBpZD0iUGF0aF8zXyIgY2xhc3M9InN0MiIgZD0iTTM3Ni44IDY0MFY1MDIuMmwtMTcxLjQtOTkuNXoiLz48cGF0aCBpZD0iUGF0aF80XyIgc3R5bGU9ImZpbGw6I2ZmZjtmaWxsLW9wYWNpdHk6LjIiIGQ9Im0zNzYuOCA0NzAuMyAxNzEuNC05OS41LTE3MS40LTc2LjZ6Ii8+PC9nPjxwYXRoIGlkPSJQYXRoXzVfIiBjbGFzcz0ic3QxIiBkPSJtMjA1LjQgMzcwLjggMTcxLjQgOTkuNVYyOTQuMnoiLz48L2c+PC9nPjwvZz48L2c+PC9nPjwvZz48L2c+PC9zdmc+"},82030:function(K,z,a){a.d(z,{r:function(){return _}});var n=a(67294),T=Object.defineProperty,d=Object.getOwnPropertySymbols,e=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable,P=(c,r,t)=>r in c?T(c,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):c[r]=t,O=(c,r)=>{for(var t in r||(r={}))e.call(r,t)&&P(c,t,r[t]);if(d)for(var t of d(r))Z.call(r,t)&&P(c,t,r[t]);return c};const _=c=>n.createElement("svg",O({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 122.4 122.4",style:{enableBackground:"new 0 0 122.4 122.4"},xmlSpace:"preserve"},c),n.createElement("g",{transform:"matrix(.7879 0 0 .7879 96.482 140.204)"},n.createElement("circle",{cx:-44.8,cy:-100.2,r:77.7,style:{fillRule:"evenodd",clipRule:"evenodd",fill:"#26a17b"}}),n.createElement("path",{d:"M-36.5-93c-.5 0-3.3.2-9.5.2-4.9 0-8.4-.1-9.6-.2-19-.8-33.1-4.1-33.1-8.1s14.2-7.3 33.1-8.1v12.9c1.2.1 4.8.3 9.7.3 5.9 0 8.8-.2 9.4-.3v-12.9c18.9.8 33.1 4.1 33.1 8.1 0 3.9-14.2 7.2-33.1 8.1m0-17.6v-11.5h26.4v-17.6h-72v17.6h26.4v11.5c-21.5 1-37.6 5.2-37.6 10.3S-77.1-91-55.7-90v37h19.1v-37c21.6-.9 37.7-5.1 37.7-10.2s-16.1-9.4-37.6-10.4",style:{fill:"#fff"}})));var W="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjIuNCAxMjIuNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTIyLjQgMTIyLjQiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnIHRyYW5zZm9ybT0ibWF0cml4KC43ODc5IDAgMCAuNzg3OSA5Ni40ODIgMTQwLjIwNCkiPjxjaXJjbGUgY3g9Ii00NC44IiBjeT0iLTEwMC4yIiByPSI3Ny43IiBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojMjZhMTdiIi8+PHBhdGggZD0iTS0zNi41LTkzYy0uNSAwLTMuMy4yLTkuNS4yLTQuOSAwLTguNC0uMS05LjYtLjItMTktLjgtMzMuMS00LjEtMzMuMS04LjFzMTQuMi03LjMgMzMuMS04LjF2MTIuOWMxLjIuMSA0LjguMyA5LjcuMyA1LjkgMCA4LjgtLjIgOS40LS4zdi0xMi45YzE4LjkuOCAzMy4xIDQuMSAzMy4xIDguMSAwIDMuOS0xNC4yIDcuMi0zMy4xIDguMW0wLTE3LjZ2LTExLjVoMjYuNHYtMTcuNmgtNzJ2MTcuNmgyNi40djExLjVjLTIxLjUgMS0zNy42IDUuMi0zNy42IDEwLjNTLTc3LjEtOTEtNTUuNy05MHYzN2gxOS4xdi0zN2MyMS42LS45IDM3LjctNS4xIDM3LjctMTAuMnMtMTYuMS05LjQtMzcuNi0xMC40IiBzdHlsZT0iZmlsbDojZmZmIi8+PC9nPjwvc3ZnPg=="}}]);
