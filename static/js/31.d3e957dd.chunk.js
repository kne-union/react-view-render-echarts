(this["webpackJsonpreact-view-render-example"]=this["webpackJsonpreact-view-render-example"]||[]).push([[31],{310:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var r=n(30),a=n(0),i=n.n(a),c=n(588),l=n(7),o=n.n(l),s=(n(3),n(87),n(36),n(88),n(16),n(89),n(86),n(60),n(90),["className","align","direction","size","wrap","split","children"]),p=Object(r.d)((function(e){var t=e.className,n=e.align,a=e.direction,l=e.size,p=e.wrap,u=e.split,d=e.children,m=Object(r.c)(e,s);return i.a.createElement("div",Object(r.e)({},m,{className:o()(t,"view-render-space")}),i.a.createElement(c.b,{align:n,direction:a,size:l,wrap:p,split:u},d))}))},425:function(e,t,n){"use strict";var r=n(6),a=n(0),i=n(125);t.a=function(){var e=a.useState(!1),t=Object(r.a)(e,2),n=t[0],c=t[1];return a.useEffect((function(){c(Object(i.b)())}),[]),n}},588:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(2),a=n(4),i=n(6),c=n(0),l=n(7),o=n.n(l),s=n(116),p=n(44);function u(e){var t=e.className,n=e.direction,i=e.index,l=e.marginDirection,o=e.children,s=e.split,p=e.wrap,u=c.useContext(f),d=u.horizontalSize,m=u.verticalSize,v=u.latestIndex,b={};return u.supportFlexGap||("vertical"===n?i<v&&(b={marginBottom:d/(s?2:1)}):b=Object(r.a)(Object(r.a)({},i<v&&Object(a.a)({},l,d/(s?2:1))),p&&{paddingBottom:m})),null===o||void 0===o?null:c.createElement(c.Fragment,null,c.createElement("div",{className:t,style:b},o),i<v&&s&&c.createElement("span",{className:"".concat(t,"-split"),style:b},s))}var d=n(425),m=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},f=c.createContext({latestIndex:0,horizontalSize:0,verticalSize:0,supportFlexGap:!1}),v={small:8,middle:16,large:24};t.b=function(e){var t,n=c.useContext(p.b),l=n.getPrefixCls,b=n.space,O=n.direction,g=e.size,j=void 0===g?(null===b||void 0===b?void 0:b.size)||"small":g,x=e.align,y=e.className,h=e.children,w=e.direction,z=void 0===w?"horizontal":w,E=e.prefixCls,N=e.split,S=e.style,C=e.wrap,G=void 0!==C&&C,P=m(e,["size","align","className","children","direction","prefixCls","split","style","wrap"]),k=Object(d.a)(),F=c.useMemo((function(){return(Array.isArray(j)?j:[j,j]).map((function(e){return function(e){return"string"===typeof e?v[e]:e||0}(e)}))}),[j]),I=Object(i.a)(F,2),B=I[0],A=I[1],D=Object(s.a)(h,{keepEmpty:!0}),J=void 0===x&&"horizontal"===z?"center":x,M=l("space",E),L=o()(M,"".concat(M,"-").concat(z),(t={},Object(a.a)(t,"".concat(M,"-rtl"),"rtl"===O),Object(a.a)(t,"".concat(M,"-align-").concat(J),J),t),y),R="".concat(M,"-item"),W="rtl"===O?"marginLeft":"marginRight",q=0,H=D.map((function(e,t){return null!==e&&void 0!==e&&(q=t),c.createElement(u,{className:R,key:"".concat(R,"-").concat(t),direction:z,index:t,marginDirection:W,split:N,wrap:G},e)})),K=c.useMemo((function(){return{horizontalSize:B,verticalSize:A,latestIndex:q,supportFlexGap:k}}),[B,A,q,k]);if(0===D.length)return null;var Q={};return G&&(Q.flexWrap="wrap",k||(Q.marginBottom=-A)),k&&(Q.columnGap=B,Q.rowGap=A),c.createElement("div",Object(r.a)({className:L,style:Object(r.a)(Object(r.a)({},Q),S)},P),c.createElement(f.Provider,{value:K},H))}}}]);
//# sourceMappingURL=31.d3e957dd.chunk.js.map