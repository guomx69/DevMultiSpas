import{b3 as s,F as l,au as c}from"./appSetting-DUM-gYes.js";import{p as u,n as g}from"./project-EOlFZCHf.js";async function m(e=null,o){var a,r;if(s.geometryServiceUrl)return s.geometryServiceUrl;if(!e)throw new l("internal:geometry-service-url-not-configured");let t;t="portal"in e?e.portal||c.getDefault():e,await t.load({signal:o});const n=(r=(a=t.helperServices)==null?void 0:a.geometry)==null?void 0:r.url;if(!n)throw new l("internal:geometry-service-url-not-configured");return n}async function p(e,o,t=null,n){const a=await m(t,n),r=new u;r.geometries=[e],r.outSpatialReference=o;const i=await g(a,r,{signal:n});if(i&&Array.isArray(i)&&i.length===1)return i[0];throw new l("internal:geometry-service-projection-failed")}export{m as getGeometryServiceURL,p as projectGeometry};
