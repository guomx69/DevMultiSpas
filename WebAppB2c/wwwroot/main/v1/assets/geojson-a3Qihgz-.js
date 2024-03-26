import{t as N}from"./date-M6n_RqpC.js";import{F as P,cs as C,W as G,I as E}from"./appSetting-DUM-gYes.js";import{t as x,e as D}from"./OptimizedGeometry-CQuTPb9g.js";const J={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function b(t){return J[t]}function*M(t){switch(t.type){case"Feature":yield t;break;case"FeatureCollection":for(const n of t.features)n&&(yield n)}}function*R(t){if(t)switch(t.type){case"Point":yield t.coordinates;break;case"LineString":case"MultiPoint":yield*t.coordinates;break;case"MultiLineString":case"Polygon":for(const n of t.coordinates)yield*n;break;case"MultiPolygon":for(const n of t.coordinates)for(const o of n)yield*o}}function*v(t,n={}){const{geometryType:o,objectIdField:e}=n;for(const r of t){const{geometry:s,properties:y,id:i}=r;if(s&&b(s.type)!==o)continue;const l=y||{};let c;e&&(c=l[e],i==null||c||(l[e]=c=i)),yield new x(s?W(new D,s,n):null,l,null,c??void 0)}}function A(t){for(const n of t)if(n.length>2)return!0;return!1}function Z(t){return!T(t)}function H(t){return T(t)}function T(t){let n=0;for(let o=0;o<t.length;o++){const e=t[o],r=t[(o+1)%t.length];n+=e[0]*r[1]-r[0]*e[1]}return n<=0}function L(t){const n=t[0],o=t[t.length-1];return n[0]===o[0]&&n[1]===o[1]&&n[2]===o[2]||t.push(n),t}function W(t,n,o){switch(n.type){case"LineString":return q(t,n,o);case"MultiLineString":return z(t,n,o);case"MultiPoint":return B(t,n,o);case"MultiPolygon":return K(t,n,o);case"Point":return Q(t,n,o);case"Polygon":return U(t,n,o)}}function q(t,n,o){return g(t,n.coordinates,o),t}function z(t,n,o){for(const e of n.coordinates)g(t,e,o);return t}function B(t,n,o){return g(t,n.coordinates,o),t}function K(t,n,o){for(const e of n.coordinates){I(t,e[0],o);for(let r=1;r<e.length;r++)O(t,e[r],o)}return t}function Q(t,n,o){return S(t,n.coordinates,o),t}function U(t,n,o){const e=n.coordinates;I(t,e[0],o);for(let r=1;r<e.length;r++)O(t,e[r],o);return t}function I(t,n,o){const e=L(n);Z(e)?$(t,e,o):g(t,e,o)}function O(t,n,o){const e=L(n);H(e)?$(t,e,o):g(t,e,o)}function g(t,n,o){for(const e of n)S(t,e,o);t.lengths.push(n.length)}function $(t,n,o){for(let e=n.length-1;e>=0;e--)S(t,n[e],o);t.lengths.push(n.length)}function S(t,n,o){const[e,r,s]=n;t.coords.push(e,r),o.hasZ&&t.coords.push(s||0)}function V(t){switch(typeof t){case"string":return N(t)?"esriFieldTypeDate":"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function tt(t,n=4326){if(!t)throw new P("geojson-layer:empty","GeoJSON data is empty");if(t.type!=="Feature"&&t.type!=="FeatureCollection")throw new P("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:t});const{crs:o}=t;if(!o)return;const e=typeof o=="string"?o:o.type==="name"?o.properties.name:o.type==="EPSG"?o.properties.code:null,r=C({wkid:n})?new RegExp(".*(CRS84H?|4326)$","i"):new RegExp(`.*(${n})$`,"i");if(!e||!r.test(e))throw new P("geojson:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:o})}function nt(t,n={}){const o=[],e=new Set,r=new Set;let s,y=!1,i=null,l=!1,{geometryType:c=null}=n,m=!1;for(const d of M(t)){const{geometry:h,properties:u,id:a}=d;if((!h||(c||(c=b(h.type)),b(h.type)===c))&&(y||(y=A(R(h))),l||(l=a!=null,l&&(s=typeof a,u&&(i=Object.keys(u).filter(p=>u[p]===a)))),u&&i&&l&&a!=null&&(i.length>1?i=i.filter(p=>u[p]===a):i.length===1&&(i=u[i[0]]===a?i:[])),!m&&u)){let p=!0;for(const f in u){if(e.has(f))continue;const F=u[f];if(F==null){p=!1,r.add(f);continue}const j=V(F);if(j==="unknown"){r.add(f);continue}r.delete(f),e.add(f);const k=G(f);k&&o.push({name:k,alias:f,type:j})}m=p}}const w=G((i==null?void 0:i.length)===1&&i[0]||null)??void 0;if(w){for(const d of o)if(d.name===w&&E(d)){d.type="esriFieldTypeOID";break}}return{fields:o,geometryType:c,hasZ:y,objectIdFieldName:w,objectIdFieldType:s,unknownFields:Array.from(r)}}function ot(t,n){return Array.from(v(M(t),n))}export{tt as E,nt as I,ot as N,b as u};
