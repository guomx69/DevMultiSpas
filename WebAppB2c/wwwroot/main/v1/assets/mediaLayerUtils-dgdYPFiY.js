import{$ as l,j as c}from"./utils-Blr7DV1R.js";import{o as f}from"./jsonContext-ChBNvnmr.js";import{l as y,a as d,f as v}from"./portalItemUtils-BSh6E4Ii.js";import{p as o}from"./resourceUtils-BpWMahXS.js";import"./appSetting-DUM-gYes.js";import"./originUtils-D69mHv66.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./saveAPIKeyUtils-D6BVWf3G.js";import"./saveUtils-BkA0uD93.js";import"./resourceUtils-CRJLFSMg.js";const s="Media Layer",x="media-layer-save",N="media-layer-save-as",i=["media-layer:unsupported-source"];function n(e){return{isValid:e.type==="media",errorMessage:"Layer.type should be 'media'"}}function m(e){return f(e,"portal-item",!0)}function p(e){return e.layerJSON}async function A(e,r){const{title:a,fullExtent:t}=e;r.title||(r.title=a),r.extent=t?await y(t):null,d(r,v.METADATA)}async function P(e,r){return l({layer:e,itemType:s,validateLayer:n,createJSONContext:a=>m(a),createItemData:p,errorNamePrefix:x,supplementalUnsupportedErrors:i,saveResources:(a,t)=>o(e.resourceReferences,t)},r)}async function S(e,r,a){return c({layer:e,itemType:s,validateLayer:n,createJSONContext:t=>m(t),createItemData:p,errorNamePrefix:N,supplementalUnsupportedErrors:i,newItem:r,setItemProperties:A,saveResources:(t,u)=>o(e.resourceReferences,u)},a)}export{P as save,S as saveAs};