"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[859],{9055:function(n,e,t){t.d(e,{x:function(){return i}});var r=t(6444),a=t(407),i=(0,r.ZP)("section")(a.$_,a.Dh,a.bK,a.GQ,a.eC,a.Oq,a.Cg,a.FK,a.AF,a.cp)},3524:function(n,e,t){t.d(e,{Q_:function(){return r},YS:function(){return i},Zm:function(){return a}});var r={idle:"IDLE",pending:"PENDING",resolved:"RESOLVED",rejected:"REJECTED"},a="https://image.tmdb.org/t/p/w500/",i="https://yt3.ggpht.com/AAKF_677TIvjFz_9xFF0R6PgiVd0kRpEtY6APSxSDRP65nXg8hkn9NFsz2bRd9_Z37DJ9D_b=s900-c-k-c0x00ffffff-no-rj"},1077:function(n,e,t){t.d(e,{Dx:function(){return h},Ei:function(){return l},HC:function(){return m},W2:function(){return f},aV:function(){return d},gY:function(){return x}});var r,a,i,c,u,o,s=t(168),p=t(6444),f=p.ZP.div(r||(r=(0,s.Z)(["\n  max-width: 100%;\n  padding: 0 ","px;\n  margin: 0 auto;\n  @media screen and (min-width: 320px) {\n    width: 320px;\n  }\n  @media screen and (min-width: 768px) {\n    padding: 0 ","px;\n    width: 768px;\n  }\n  @media screen and (min-width: 1280px) {\n    width: 1280px;\n  }\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[5]})),d=p.ZP.ul(a||(a=(0,s.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0 auto;\n  row-gap: ","px;\n  @media screen and (min-width: 320px) {\n    width: 100%;\n  }\n  @media screen and (min-width: 768px) {\n    gap: ","px;\n  }\n  @media screen and (min-width: 1280px) {\n    column-gap: ","px;\n  }\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.space[4]})),h=p.ZP.h2(i||(i=(0,s.Z)(["\n  font-weight: ",";\n  font-size: ",";\n  color: ",";\n  padding: ","px 0;\n  text-align: center;\n"])),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.space[5]})),m=p.ZP.li(c||(c=(0,s.Z)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  border-radius: ",";\n  transition: ",",\n    ",";\n  &:hover,\n  &:focus {\n    transform: scale(1.03);\n    box-shadow: ",";\n  }\n  @media screen and (min-width: 768px) {\n    flex-basis: calc((100% - ","px) / 2);\n  }\n  @media screen and (min-width: 1280px) {\n    flex-basis: calc((100% - ","px * 2) / 3);\n  }\n"])),(function(n){return n.theme.radii.md}),(function(n){return n.theme.transition.transform}),(function(n){return n.theme.transition.boxShadow}),(function(n){return n.theme.shadows.cardHover}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.space[4]})),l=p.ZP.img(u||(u=(0,s.Z)(["\n  margin-bottom: ","px;\n  @media screen and (min-width: 320px) {\n    height: 398px;\n  }\n  @media screen and (min-width: 768px) {\n    height: 455px;\n  }\n  @media screen and (min-width: 1280px) {\n    height: 574px;\n  }\n"])),(function(n){return n.theme.space[3]})),x=p.ZP.p(o||(o=(0,s.Z)(["\n  font-weight: ",";\n  font-size: ",";\n  line-height: 1.33;\n  color: ",";\n  padding-left: ","px;\n  padding-right: ","px;\n  padding-bottom: ","px;\n  @include mq(desktop) {\n    font-size: ",";\n  }\n"])),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.colors.orangered}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.fontSizes.m}))},4859:function(n,e,t){t.r(e),t.d(e,{default:function(){return l}});var r=t(5861),a=t(885),i=t(7757),c=t.n(i),u=t(2791),o=t(6731),s=t(470),p=t(6874),f=t(9055),d=t(1077),h=t(3524),m=t(184),l=function(){var n=(0,u.useState)([]),e=(0,a.Z)(n,2),t=e[0],i=e[1],l=(0,s.TH)();return(0,u.useEffect)((function(){!function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,p.$L)();case 2:e=n.sent,i(e);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()()}),[]),(0,m.jsx)(f.x,{children:(0,m.jsxs)(d.W2,{children:[(0,m.jsx)(d.Dx,{children:"Trending today"}),(0,m.jsx)(d.aV,{children:t.map((function(n){var e=n.id,t=n.title,r=n.poster_path;return(0,m.jsx)(d.HC,{children:(0,m.jsxs)(o.rU,{to:"movies/".concat(e),state:{from:l},children:[(0,m.jsx)(d.Ei,{src:r?h.Zm+r:h.YS,alt:t,loading:"lazy"}),(0,m.jsx)(d.gY,{children:t.toUpperCase()})]})},e)}))})]})})}},6874:function(n,e,t){t.d(e,{$L:function(){return o},IQ:function(){return p},Jh:function(){return f},Pg:function(){return s},UN:function(){return d}});var r=t(5861),a=t(7757),i=t.n(a),c=t(1044),u="6d25a4756e0ff1ccca3eba13a74efa5c";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o=function(){var n=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("trending/".concat("movie","/").concat("day"),{params:{api_key:u}});case 3:return e=n.sent,n.abrupt("return",e.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t=Number(e),n.next=4,c.Z.get("movie/".concat(t),{params:{api_key:u}});case 4:return r=n.sent,n.abrupt("return",r.data);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("movie/".concat(e,"/credits"),{params:{api_key:u}});case 3:return t=n.sent,n.abrupt("return",t.data.cast);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("movie/".concat(e,"/reviews"),{params:{api_key:u}});case 3:return t=n.sent,n.abrupt("return",t.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("search/movie",{params:{api_key:u,query:e}});case 3:return t=n.sent,n.abrupt("return",t.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=859.55c64775.chunk.js.map