"use strict";(self.webpackChunkdegenchat=self.webpackChunkdegenchat||[]).push([[371],{53157:function(se,x,i){i.r(x),i.d(x,{default:function(){return _}});var Z=i(17061),f=i.n(Z),V=i(17156),C=i.n(V),$=i(27424),L=i.n($),I=i(67294),O=i(75265),o={homeContainer:"homeContainer___Jm4bA",topContainer:"topContainer___ueARX",currentSecretary:"currentSecretary___ubME2",currentSecretaryIcon:"currentSecretaryIcon___oMh2w",currentSecretaryText:"currentSecretaryText___a9T05",secretaryList:"secretaryList___fkVYj",secretaryListItem:"secretaryListItem___Kgcim",noNftContainer:"noNftContainer___Kp_F5",button:"button___vgCRQ",selectChannelContainer:"selectChannelContainer___ZB7St",selectChannel:"selectChannel___RP0cQ",howToPlay:"howToPlay___hyHl8"},T=i(59841),F=i(2214),H=i(89583),b=i(25184),W=i(1474),P=i(71577),D=i(74704),Y=i.n(D),z=function(){var d=C()(f()().mark(function u(e,r){return f()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e?.balanceOf(r);case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},u)}));return function(e,r){return d.apply(this,arguments)}}(),G=function(){var d=C()(f()().mark(function u(e,r,c){return f()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e?.tokenOfOwnerByIndex(r,c);case 3:return n.abrupt("return",n.sent);case 6:throw n.prev=6,n.t0=n.catch(0),console.log("[DEV]",n.t0),n.t0;case 10:case"end":return n.stop()}},u,null,[[0,6]])}));return function(e,r,c){return d.apply(this,arguments)}}(),R=function(){var d=C()(f()().mark(function u(e,r){var c,a,n;return f()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return c=[],t.next=3,z(e,r);case 3:a=t.sent,n=0;case 5:if(!a.gt(n)){t.next=14;break}return t.t0=c,t.next=9,G(e,r,n);case 9:t.t1=t.sent,t.t0.push.call(t.t0,t.t1);case 11:n++,t.next=5;break;case 14:return t.abrupt("return",c);case 15:case"end":return t.stop()}},u)}));return function(e,r){return d.apply(this,arguments)}}(),K=function(){var d=C()(f()().mark(function u(e,r){return f()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e?.nftInfoOf(r);case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},u)}));return function(e,r){return d.apply(this,arguments)}}(),Q=function(){var d=C()(f()().mark(function u(e,r,c){var a,n,y,t,N;return f()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,R(e,r);case 2:a=l.sent,n=Y()(a),l.prev=4,n.s();case 6:if((y=n.n()).done){l.next=16;break}return t=y.value,l.next=10,K(e,t);case 10:if(N=l.sent,console.log("[DEV]","nftInfo",N),!c(N)){l.next=14;break}return l.abrupt("return",t);case 14:l.next=6;break;case 16:l.next=21;break;case 18:l.prev=18,l.t0=l.catch(4),n.e(l.t0);case 21:return l.prev=21,n.f(),l.finish(21);case 24:return l.abrupt("return",null);case 25:case"end":return l.stop()}},u,null,[[4,18,21,24]])}));return function(e,r,c){return d.apply(this,arguments)}}(),le=null,J=i(625),X=i(58202),s=i(85893),B=b.Z.Option,q=function(){var u,e=(0,T.useModel)("web3"),r=e.account,c=e.chainId,a=e.connect,n=(0,T.useModel)("V2EContract"),y=n.V2EContract,t=(0,T.useModel)("ZegoExpress"),N=t.channel,j=t.setChannel,l=t.setChatState,ee=(0,I.useState)(0),U=L()(ee,2),S=U[0],re=U[1],ne=(0,I.useState)(null),A=L()(ne,2),w=A[0],ae=A[1],p=(0,T.useIntl)(),v=(0,I.useRef)(),te=function(){var m=C()(f()().mark(function k(){var M;return f()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:if(r){h.next=2;break}throw new Error("Account is not initialized");case 2:if(y){h.next=4;break}throw new Error("Contract is not initialized");case 4:if(N){h.next=6;break}return h.abrupt("return");case 6:return h.next=8,Q(y,r,function(g){return g[0].gt(0)&&g[1]==parseInt(N)});case 8:if(M=h.sent,console.log("[DEV]","Selected token id: ".concat(M)),M){h.next=12;break}throw new Error("No NFT found");case 12:console.log("[DEV]","Enter channel",N),l(X.g.preparing),T.history.push({pathname:"/chat"});case 15:case"end":return h.stop()}},k)}));return function(){return m.apply(this,arguments)}}();return(0,I.useEffect)(function(){a(),j("1")},[]),(0,I.useEffect)(function(){(!r||!J.vc.network.id.includes(c))&&T.history.push({pathname:"/"})},[r,c]),(0,I.useEffect)(function(){var m=function(){var k=C()(f()().mark(function M(){var E;return f()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,R(y,r);case 2:E=g.sent,ae(E);case 4:case"end":return g.stop()}},M)}));return function(){return k.apply(this,arguments)}}();!!y&&!!r&&m()},[y,r]),(0,I.useEffect)(function(){var m;re(v==null||(m=v.current)===null||m===void 0?void 0:m.offsetWidth)},[v==null||(u=v.current)===null||u===void 0?void 0:u.offsetWidth]),(0,s.jsx)(F.Z,{children:(0,s.jsx)("div",{className:O.Z.mainContainer,children:(0,s.jsxs)("div",{className:o.homeContainer,children:[(0,s.jsx)("div",{className:o.topContainer,children:(0,s.jsxs)("div",{className:O.Z.contentContainer,children:[(0,s.jsxs)("div",{className:o.currentSecretary,children:[(0,s.jsx)(H.iNY,{className:o.currentSecretaryIcon}),(0,s.jsx)("span",{className:o.currentSecretaryText,children:p.formatMessage({id:"home.noSecretary",defaultMessage:"You have no secretary"})})]}),(0,s.jsxs)("div",{className:o.secretaryList,children:[(0,s.jsx)("div",{className:o.secretaryListItem,ref:v,style:{height:S},children:p.formatMessage({id:"home.balcony",defaultMessage:"Balcony"})}),(0,s.jsx)("div",{className:o.secretaryListItem,ref:v,style:{height:S},children:p.formatMessage({id:"home.balcony",defaultMessage:"Balcony"})}),(0,s.jsx)("div",{className:o.secretaryListItem,ref:v,style:{height:S},children:p.formatMessage({id:"home.balcony",defaultMessage:"Balcony"})}),(0,s.jsx)("div",{className:o.secretaryListItem,ref:v,style:{height:S},children:p.formatMessage({id:"home.balcony",defaultMessage:"Balcony"})})]})]})}),(0,s.jsxs)("div",{className:O.Z.contentContainer,children:[(0,s.jsx)("div",{className:o.selectChannelContainer,children:(0,s.jsxs)(b.Z,{defaultValue:"1",className:o.selectChannel,children:[(0,s.jsx)(B,{value:"1",onChange:function(){j("1")},children:"Channel 1"}),(0,s.jsx)(B,{value:"2",onChange:function(){j("2")},children:"Channel 2"})]})}),!w||w.length==0?(0,s.jsx)("div",{className:o.noNftContainer,children:(0,s.jsx)(W.Z,{message:p.formatMessage({id:"home.noNft",defaultMessage:"You have no NFT"}),type:"error",showIcon:!0})}):(0,s.jsx)(P.Z,{type:"primary",size:"large",shape:"round",className:o.button,disabled:!w||w.length==0,onClick:function(){te()},children:p.formatMessage({id:"home.start",defaultMessage:"START"})}),(0,s.jsx)("a",{className:o.howToPlay,children:p.formatMessage({id:"home.howToPlay",defaultMessage:"How to play?"})})]})]})})})},_=q}}]);
