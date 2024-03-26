import{bX as p,av as y,U as u,cs as d,b3 as m,d as o,y as i,aZ as c,aF as h,f,d8 as n,d9 as S,da as v,db as g,dc as b,bR as C}from"./appSetting-DUM-gYes.js";import{m as G}from"./MultiOriginJSONSupport-0QdgqWEC.js";import{n as P}from"./BlendLayer-B0Xa9sg2.js";import{u as R}from"./OperationalLayer-CLgIr9Pu.js";import{j as _}from"./PortalLayer-C4Qg5ac_.js";import{f as w}from"./RefreshableLayer-k_sfnV6L.js";import{t as x}from"./ScaleRangeLayer-BPI7rkYw.js";import{I as k,c as F,d as $}from"./commonProperties--lHJDI2t.js";import"./jsonUtils-ZV493j5L.js";import"./parser-BPoYkW_l.js";import"./portalItemUtils-BSh6E4Ii.js";import"./ElevationInfo-DeafsV1n.js";import"./lengthUtils-BLMmU1rC.js";const j=["atom","xml"],E={base:n,key:"type",typeMap:{"simple-line":S},errorContext:"symbol"},M={base:n,key:"type",typeMap:{"picture-marker":v,"simple-marker":g},errorContext:"symbol"},L={base:n,key:"type",typeMap:{"simple-fill":b},errorContext:"symbol"};let t=class extends P(w(R(_(x(G(C)))))){constructor(...e){super(...e),this.description=null,this.fullExtent=null,this.legendEnabled=!0,this.lineSymbol=null,this.pointSymbol=null,this.polygonSymbol=null,this.operationalLayerType="GeoRSS",this.url=null,this.type="geo-rss"}normalizeCtorArgs(e,r){return typeof e=="string"?{url:e,...r}:e}readFeatureCollections(e,r){return r.featureCollection.layers.forEach(s=>{var a;const l=s.layerDefinition.drawingInfo.renderer.symbol;l&&l.type==="esriSFS"&&((a=l.outline)!=null&&a.style.includes("esriSFS"))&&(l.outline.style="esriSLSSolid")}),r.featureCollection.layers}get hasPoints(){return this._hasGeometry("esriGeometryPoint")}get hasPolylines(){return this._hasGeometry("esriGeometryPolyline")}get hasPolygons(){return this._hasGeometry("esriGeometryPolygon")}get title(){const e=this._get("title");return e&&this.originOf("title")!=="defaults"?e:this.url?p(this.url,j)||"GeoRSS":e||""}set title(e){this._set("title",e)}load(e){const r=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},e).catch(y).then(()=>this._fetchService(r)).then(s=>{this.read(s,{origin:"service"})})),Promise.resolve(this)}async hasDataChanged(){const e=await this._fetchService();return this.read(e,{origin:"service",ignoreDefaults:!0}),!0}async _fetchService(e){const r=this.spatialReference,{data:s}=await u(m.geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:d(r)?void 0:r.wkid??JSON.stringify(r)},signal:e});return s}_hasGeometry(e){var r;return((r=this.featureCollections)==null?void 0:r.some(s=>{var l,a;return((l=s.featureSet)==null?void 0:l.geometryType)===e&&((a=s.featureSet.features)==null?void 0:a.length)>0}))??!1}};o([i()],t.prototype,"description",void 0),o([i()],t.prototype,"featureCollections",void 0),o([c("service","featureCollections",["featureCollection.layers"])],t.prototype,"readFeatureCollections",null),o([i({type:h,json:{name:"lookAtExtent"}})],t.prototype,"fullExtent",void 0),o([i(k)],t.prototype,"id",void 0),o([i(F)],t.prototype,"legendEnabled",void 0),o([i({types:E,json:{write:!0}})],t.prototype,"lineSymbol",void 0),o([i({type:["show","hide"]})],t.prototype,"listMode",void 0),o([i({types:M,json:{write:!0}})],t.prototype,"pointSymbol",void 0),o([i({types:L,json:{write:!0}})],t.prototype,"polygonSymbol",void 0),o([i({type:["GeoRSS"]})],t.prototype,"operationalLayerType",void 0),o([i($)],t.prototype,"url",void 0),o([i({json:{origins:{service:{read:{source:"name",reader:e=>e||void 0}}}}})],t.prototype,"title",null),o([i({readOnly:!0,json:{read:!1},value:"geo-rss"})],t.prototype,"type",void 0),t=o([f("esri.layers.GeoRSSLayer")],t);const H=t;export{H as default};