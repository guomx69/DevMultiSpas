import{at as h,au as x,F as m}from"./appSetting-DUM-gYes.js";import{i as u}from"./originUtils-D69mHv66.js";import{o as N}from"./jsonContext-ChBNvnmr.js";import{i as P,f as S}from"./portalItemUtils-BSh6E4Ii.js";import{i as b}from"./saveAPIKeyUtils-D6BVWf3G.js";import{t as g}from"./saveUtils-BkA0uD93.js";function O(t,a,r){const e=r(t);if(!e.isValid)throw new m(`${a}:invalid-parameters`,e.errorMessage,{layer:t})}async function d(t){const{layer:a,errorNamePrefix:r,validateLayer:e}=t;await a.load(),O(a,r,e)}function f(t,a){return`Layer (title: ${t.title}, id: ${t.id}) of type '${t.declaredClass}' ${a}`}function y(t){const{item:a,errorNamePrefix:r,layer:e,validateItem:o}=t;if(b(a),J(t),o){const s=o(a);if(!s.isValid)throw new m(`${r}:invalid-parameters`,s.errorMessage,{layer:e})}}function J(t){const{item:a,itemType:r,additionalItemType:e,errorNamePrefix:o,layer:s}=t,l=[r];if(e&&l.push(e),!l.includes(a.type)){const n=l.map(i=>`'${i}'`).join(", ");throw new m(`${o}:portal-item-wrong-type`,`Portal item type should be one of: "${n}"`,{item:a,layer:s})}}function E(t){const{layer:a,errorNamePrefix:r}=t,{portalItem:e}=a;if(!e)throw new m(`${r}:portal-item-not-set`,f(a,"requires the portalItem property to be set"));if(!e.loaded)throw new m(`${r}:portal-item-not-loaded`,f(a,"cannot be saved to a portal item that does not exist or is inaccessible"));y({...t,item:e})}function U(t){const{newItem:a,itemType:r}=t;let e=h.from(a);return e.id&&(e=e.clone(),e.id=null),e.type??(e.type=r),e.portal??(e.portal=x.getDefault()),y({...t,item:e}),e}function w(t){return N(t,"portal-item")}async function I(t,a,r){var o;"beforeSave"in t&&typeof t.beforeSave=="function"&&await t.beforeSave();const e=t.write({},a);return await Promise.all(((o=a.resources)==null?void 0:o.pendingOperations)??[]),g(a,{errorName:"layer-write:unsupported"},r),e}function $(t){P(t,S.JSAPI),t.typeKeywords&&(t.typeKeywords=t.typeKeywords.filter((a,r,e)=>e.indexOf(a)===r))}async function C(t,a,r){var o;const e=t.portal;await e.signIn(),await((o=e.user)==null?void 0:o.addItem({item:t,data:a,folder:r==null?void 0:r.folder}))}async function R(t,a){const{layer:r,createItemData:e,createJSONContext:o,saveResources:s,supplementalUnsupportedErrors:l}=t;await d(t),E(t);const n=r.portalItem,i=o?o(n):w(n),p=await I(r,i,{...a,supplementalUnsupportedErrors:l}),c=await e({layer:r,layerJSON:p},n);return $(n),await n.update({data:c}),u(i),await(s==null?void 0:s(n,i)),n}async function V(t,a){const{layer:r,createItemData:e,createJSONContext:o,setItemProperties:s,saveResources:l,supplementalUnsupportedErrors:n}=t;await d(t);const i=U(t),p=o?o(i):w(i),c=await I(r,p,{...a,supplementalUnsupportedErrors:n}),v=await e({layer:r,layerJSON:c},i);return await s(r,i),$(i),await C(i,v,a),r.portalItem=i,u(p),await(l==null?void 0:l(i,p)),i}export{R as $,I,C as P,f as c,E as d,V as j,O as l,$ as v,w,U as y};