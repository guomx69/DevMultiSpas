import{db as l,d9 as i,dc as c,du as f,aG as x}from"./appSetting-DUM-gYes.js";import{l as $,o as m,S as g,t as w,r as E,s as b,y as S}from"./defaultsJSON-CHAaurhX.js";const k=l.fromJSON($),q=i.fromJSON(m),z=c.fromJSON(g),B=f.fromJSON(w),C=l.fromJSON(E),F=i.fromJSON(b),H=c.fromJSON(S),r="__begin__",o="__end__",y=new RegExp(r,"ig"),N=new RegExp(o,"ig"),t=new RegExp("^"+r,"i"),a=new RegExp(o+"$","i"),s='"',d=s+" + ",R=" + "+s;function _(n){return n.replaceAll(new RegExp("\\[","g"),"{").replaceAll(new RegExp("\\]","g"),"}")}function K(n){return n.replaceAll(new RegExp("\\{","g"),"[").replaceAll(new RegExp("\\}","g"),"]")}function u(n){const e={expression:"",type:"none"};return n.labelExpressionInfo?n.labelExpressionInfo.value?(e.expression=n.labelExpressionInfo.value,e.type="conventional"):n.labelExpressionInfo.expression&&(e.expression=n.labelExpressionInfo.expression,e.type="arcade"):n.labelExpression!=null&&(e.expression=_(n.labelExpression),e.type="conventional"),e}function L(n){const e=u(n);if(!e)return null;switch(e.type){case"conventional":return O(e.expression);case"arcade":return e.expression}return null}function M(n){const e=u(n);if(!e)return null;switch(e.type){case"conventional":return v(e.expression);case"arcade":return D(e.expression)}return null}function O(n){let e;return n?(e=x(n,p=>r+'$feature["'+p+'"]'+o),e=t.test(e)?e.replace(t,""):s+e,e=a.test(e)?e.replace(a,""):e+s,e=e.replaceAll(y,d).replaceAll(N,R)):e='""',e}const J=/^\s*\{([^}]+)\}\s*$/i;function v(n){const e=n==null?void 0:n.match(J);return(e==null?void 0:e[1].trim())||null}const A=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*$/i,I=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])(\1|\3)(\5)\s*\));?\s*$/i,h=/^\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])([\w\s]+)(\1)\s*\));?\s*$/i;function D(n){if(!n)return null;let e=A.exec(n)||I.exec(n);return e?e[1]||e[3]:(e=h.exec(n),e?e[2]:null)}export{C as N,F as O,k as S,D as _,B as a,q as b,z as c,L as f,M as g,_ as p,K as u,O as w,u as x,H as y};
