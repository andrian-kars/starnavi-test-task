(this["webpackJsonpstarnavi-test-task"]=this["webpackJsonpstarnavi-test-task"]||[]).push([[0],{32:function(e,t,n){},51:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),i=n(23),r=n.n(i),a=(n(32),n(7)),o=n(24),d=n.n(o),u=(n(51),n(27)),l=n(11),j=n(1),b=Object(c.memo)((function(e){var t=e.modes,n=e.setSize,c=e.setHovered;return Object(j.jsx)("div",{className:"form",children:Object(j.jsx)(l.c,{enableReinitialize:!0,initialValues:{modes:t[0].mode},onSubmit:function(e,t){var s=t.setSubmitting;n(0),c([]),n(+e.modes),s(!1)},children:function(e){var n=e.isSubmitting;return Object(j.jsxs)(l.b,{children:[Object(j.jsx)(l.a,{as:"select",name:"modes",children:t.map((function(e){return Object(j.jsx)("option",{value:e.mode,children:e.key},e.key)}))}),Object(j.jsx)("button",{className:"button",type:"submit",disabled:n,children:"Start"})]})}})})})),m=Object(c.memo)((function(e){for(var t=e.modes,n=Object.keys(t).map((function(e){return{mode:t[e].field,key:e}})),s=Object(c.useState)([]),i=Object(a.a)(s,2),r=i[0],o=i[1],d=Object(c.useState)(n[0].mode),l=Object(a.a)(d,2),m=l[0],f=l[1],O=function(e){var t="".concat(e.currentTarget.parentElement.id,",").concat(e.currentTarget.id);r.includes(t)?(o(r.filter((function(e){return e!==t}))),e.currentTarget.style.backgroundColor="#fff"):(o([].concat(Object(u.a)(r),[t])),e.currentTarget.style.backgroundColor="#00a9ef")},h=[],v=[],p=1;p<=m;p++)h.push(Object(j.jsx)("div",{onMouseEnter:function(e){return O(e)},id:p,className:"item",children:p},p));for(var x=1;x<=m;x++)v.push(Object(j.jsx)("div",{id:x,className:"row",children:h},x));return Object(j.jsxs)("div",{className:"field",children:[Object(j.jsxs)("div",{className:"grid",children:[Object(j.jsx)(b,{modes:n,setSize:f,setHovered:o}),Object(j.jsx)("div",{className:"gridWhrapper",children:v})]}),Object(j.jsxs)("div",{className:"infos",children:[Object(j.jsx)("h3",{children:"Hover squares"}),r.map((function(e){return Object(j.jsxs)("p",{className:"info",children:["row ",e.split(",")[0]," col ",e.split(",")[1]]},e)}))]})]})})),f=Object(c.memo)((function(){var e=Object(c.useState)(null),t=Object(a.a)(e,2),n=t[0],s=t[1];return Object(c.useEffect)((function(){d.a.get("http://demo1030918.mockable.io/").then((function(e){return e.data})).then((function(e){s(e)}))}),[]),null===n?Object(j.jsx)("p",{children:"Loading..."}):Object(j.jsx)("div",{className:"app",children:Object(j.jsx)(m,{modes:n})})})),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,57)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),i(e),r(e)}))};r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root")),O()}},[[56,1,2]]]);
//# sourceMappingURL=main.89a3f515.chunk.js.map