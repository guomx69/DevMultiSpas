import{ax as l,ay as f,az as E,aA as d}from"./appSetting-DUM-gYes.js";async function p(t){const n=t.spatialReference;if(n.isWGS84)return t.clone();if(n.isWebMercator)return l(t);const e=f.WGS84;return await E(n,e),d(t,e)}function A(t,n){if(!u(t,n)){const e=t.typeKeywords;e?e.push(n):t.typeKeywords=[n]}}function u(t,n){var e;return!!((e=t.typeKeywords)!=null&&e.includes(n))}function L(t){return u(t,S.HOSTED_SERVICE)}function y(t,n){const e=t.typeKeywords;if(e){const r=e.indexOf(n);r>-1&&e.splice(r,1)}}function M(t,n,e){e?A(t,n):y(t,n)}async function R(t){const n=t.clone().normalize();let e;if(n.length>1)for(const r of n)e?r.width>e.width&&(e=r):e=r;else e=n[0];return p(e)}const S={DEVELOPER_BASEMAP:"DeveloperBasemap",JSAPI:"ArcGIS API for JavaScript",METADATA:"Metadata",MULTI_LAYER:"Multilayer",SINGLE_LAYER:"Singlelayer",TABLE:"Table",HOSTED_SERVICE:"Hosted Service",LOCAL_SCENE:"ViewingMode-Local",TILED_IMAGERY:"Tiled Imagery",GROUP_LAYER_MAP:"Map"};function m(t){var c;const{portal:n,isOrgItem:e,itemControl:r}=t,i=(c=n.user)==null?void 0:c.privileges;let s=!i||i.includes("features:user:edit"),a=!!e&&!!(i!=null&&i.includes("features:user:fullEdit"));const o=r==="update"||r==="admin";return o?a=s=!0:a&&(s=!0),{features:{edit:s,fullEdit:a},content:{updateItem:o}}}export{y as a,L as c,S as f,A as i,R as l,m as p,u as s,M as u};
