import{z as o,F as f,U as m,b6 as b,cS as p,av as h,au as w,e7 as g}from"./appSetting-DUM-gYes.js";const $=()=>!!o("enable-feature:force-wosr"),U=()=>o.add("enable-feature:direct-3d-object-feature-layer-display",!0,!0,!0),j=()=>o.add("enable-feature:direct-3d-object-feature-layer-display",!1,!0,!0),N=()=>o.add("enable-i3s-patching",!0,!0,!0),S=()=>o.add("enable-i3s-patching",!1,!0,!0),k=()=>!!o("enable-feature:SceneLayer-editing"),R=(e="i3s-patching")=>{switch(S(),j(),o.add("enable-feature:SceneLayer-editing",!0,!0,!0),e){case"feature-layer-view":U();break;case"i3s-patching":N()}};R("i3s-patching");let i={};async function I(e,r){try{return{data:(await C(e,r)).data,baseUrl:p(e),styleUrl:e}}catch(t){return h(t),null}}function q(e,r,t){const n=r.portal!=null?r.portal:w.getDefault();let s;const a=`${n.url} - ${n.user&&n.user.username} - ${e}`;return i[a]||(i[a]=A(e,n,t).then(l=>(s=l,l.fetchData())).then(l=>({data:l,baseUrl:s.itemUrl??"",styleName:e}))),i[a]}function A(e,r,t){return r.load(t).then(()=>{const n=new g({disableExtraQuery:!0,query:`owner:${u} AND type:${y} AND typekeywords:"${e}"`});return r.queryItems(n,t)}).then(({results:n})=>{var l;let s=null;const a=e.toLowerCase();if(n&&Array.isArray(n)){for(const c of n)if(((l=c.typeKeywords)==null?void 0:l.some(d=>d.toLowerCase()===a))&&c.type===y&&c.owner===u){s=c;break}}if(!s)throw new f("symbolstyleutils:style-not-found",`The style '${e}' could not be found`,{styleName:e});return s.load(t)})}function v(e,r,t){return(e==null?void 0:e.styleUrl)!=null?I(e.styleUrl,t):(e==null?void 0:e.styleName)!=null?q(e.styleName,r,t):Promise.reject(new f("symbolstyleutils:style-url-and-name-missing","Either styleUrl or styleName is required to resolve a style"))}function x(e){return e===null||e.type==="CIMSymbolReference"?e:{type:"CIMSymbolReference",symbol:e}}function E(e,r,t=["gltf"]){if(r==="cimRef")return e.cimRef;if(e.formatInfos&&!$())for(const n of t){const s=e.formatInfos.find(a=>a.type===n);if(s)return s.href}return e.webRef}function C(e,r){const t={responseType:"json",query:{f:"json"},...r};return m(b(e),t)}const u="esri_en",y="Style",K="https://cdn.arcgis.com/sharing/rest/content/items/220936cc6ed342c9937abd8f180e7d1e/resources/styles/cim/{SymbolName}.json?f=json";export{C as b,v as c,E as d,k as n,x as p,K as w};
