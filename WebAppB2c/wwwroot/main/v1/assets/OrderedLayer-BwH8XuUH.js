import{d as s,y as c,f as a,b2 as f}from"./appSetting-DUM-gYes.js";import{c as d}from"./OrderByInfo-D-FWEhA2.js";function l(e,r,n){if(!e)return null;const i=e.find(o=>!!o.field);if(!i)return null;const t=new d;return t.read(i,n),[t]}function u(e,r,n,i){const t=e.find(o=>!!o.field);t&&f(n,[t.toJSON()],r)}const m=e=>{let r=class extends e{constructor(){super(...arguments),this.orderBy=null}};return s([c({type:[d],json:{origins:{"web-scene":{write:!1,read:!1}},read:{source:"layerDefinition.orderBy",reader:l},write:{target:"layerDefinition.orderBy",writer:u}}})],r.prototype,"orderBy",void 0),r=s([a("esri.layers.mixins.OrderedLayer")],r),r};export{m as c};
