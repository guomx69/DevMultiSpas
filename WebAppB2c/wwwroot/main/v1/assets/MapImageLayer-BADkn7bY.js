import{av as I,di as v,bw as g,dq as $,U as b,aF as T,b9 as O,dr as E,F as x,b as M,d as o,y as p,ds as S,aZ as F,aS as R,f as L,dt as P,bR as U}from"./appSetting-DUM-gYes.js";import{m as j}from"./MultiOriginJSONSupport-0QdgqWEC.js";import{i as q}from"./scaleUtils-B607GZsV.js";import{i as J}from"./APIKeyMixin-B6HVRfUv.js";import{m as N,f as A,Y as _}from"./SublayersOwner-P30WGAdC.js";import{l as k}from"./ArcGISService-DkQiq8EN.js";import{n as V}from"./BlendLayer-B0Xa9sg2.js";import{e as Z}from"./CustomParametersMixin-fiXyGX3e.js";import{u as z}from"./OperationalLayer-CLgIr9Pu.js";import{j as B}from"./PortalLayer-C4Qg5ac_.js";import{f as C}from"./RefreshableLayer-k_sfnV6L.js";import{t as D}from"./ScaleRangeLayer-BPI7rkYw.js";import{f as G}from"./TemporalLayer-DDng_hn0.js";import{d as H}from"./commonProperties--lHJDI2t.js";import{m as K}from"./ExportImageParameters-D6hNqUnR.js";import{t as W}from"./imageBitmapUtils-ajLpUtfK.js";import{e as w}from"./sublayerUtils-C5DbLC-k.js";import{e as Y}from"./versionUtils-BdOa7Dbi.js";import"./Version-bFyzeYy3.js";import"./portalItemUtils-BSh6E4Ii.js";import"./UniqueValueRenderer-DYNfFcJp.js";import"./ColorStop-CXcZflTc.js";import"./diffUtils-BpCpUKfm.js";import"./colorRamps-DGLQfJq7.js";import"./sizeVariableUtils-Cmcuvw-4.js";import"./visualVariableUtils-DyLkiISh.js";import"./lengthUtils-BLMmU1rC.js";import"./jsonUtils-DYzUgqNb.js";import"./styleUtils-DzyC_Q0p.js";import"./jsonUtils-8UYkkjpY.js";import"./LRUCache-dNFQ3tHS.js";import"./FieldsIndex-D-DOX7-n.js";import"./UnknownTimeZone-rOmUr5lk.js";import"./OverrideHelper-DITaCURj.js";import"./colorUtils-DMqZP-dB.js";import"./vec42-MRs2gDDM.js";import"./vec4f64-CCf6w8sj.js";import"./utils-DOMViYRb.js";import"./quantizationUtils-C_5luNnm.js";import"./heatmapUtils-BONFUB-t.js";import"./QueryTask-BPHrA6cA.js";import"./infoFor3D-DsOdlPuA.js";import"./executeForIds-i4iSLOMN.js";import"./query-CLle7ZL8.js";import"./pbfQueryUtils-B8YK4jkO.js";import"./pbf-BEVpmmYT.js";import"./OptimizedGeometry-CQuTPb9g.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./queryZScale-BfQ_uJRr.js";import"./executeQueryJSON-CxJZrfmJ.js";import"./FeatureSet-gDsSYk4j.js";import"./executeQueryPBF-Bhn1-48u.js";import"./featureConversionUtils-0eWMaUya.js";import"./FeatureType-CPUwAj5_.js";import"./FeatureTemplate-DCEBOqbI.js";import"./LabelClass-59hSlBuy.js";import"./labelUtils-DgsTKSM5.js";import"./defaultsJSON-CHAaurhX.js";import"./labelingInfo-BZG9iPQE.js";import"./LayerFloorInfo-CsjFJuEL.js";import"./serviceCapabilitiesUtils-9UGI2Uxy.js";import"./AttachmentQuery-DoTP2_Vv.js";import"./popupUtils-CE_ad9-l.js";import"./jsonUtils-ZV493j5L.js";import"./parser-BPoYkW_l.js";import"./TimeInfo-xBYJynnj.js";import"./ElevationInfo-DeafsV1n.js";import"./floorFilterUtils-DZ5C6FQv.js";let r=class extends V(G(D(N(A(k(z(B(j(C(J(Z(U)))))))))))){constructor(...e){super(...e),this.dateFieldsTimeZone=null,this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.preferredTimeZone=null,this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,i){return typeof e=="string"?{url:e,...i}:e}load(e){const i=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(I).then(()=>this._fetchService(i))),Promise.resolve(this)}readImageFormat(e,i){const n=i.supportedImageFormatTypes;return n&&n.includes("PNG32")?"png32":"png24"}writeSublayers(e,i,n,t){var h,d,y;if(!this.loaded||!e)return;const s=e.slice().reverse().flatten(({sublayers:a})=>a&&a.toArray().reverse()).toArray();let m=!1;if((h=this.capabilities)!=null&&h.operations.supportsExportMap&&((y=(d=this.capabilities)==null?void 0:d.exportMap)!=null&&y.supportsDynamicLayers)){const a=v(t.origin);if(a===g.PORTAL_ITEM){const f=this.createSublayersForOrigin("service").sublayers;m=w(s,f,g.SERVICE)}else if(a>g.PORTAL_ITEM){const f=this.createSublayersForOrigin("portal-item");m=w(s,f.sublayers,v(f.origin))}}const l=[],u={writeSublayerStructure:m,...t};let c=m;s.forEach(a=>{const f=a.write({},u);l.push(f),c=c||a.originOf("visible")==="user"}),l.some(a=>Object.keys(a).length>1)&&(i.layers=l),c&&(i.visibleLayers=s.filter(a=>a.visible).map(a=>a.id))}createExportImageParameters(e,i,n,t){const s=(t==null?void 0:t.pixelRatio)||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());const m=new K({layer:this,floors:t==null?void 0:t.floors,scale:q({extent:e,width:i})*s}),l=m.toJSON();m.destroy();const u=!(t!=null&&t.rotation)||this.version<10.3?{}:{rotation:-t.rotation},c=e==null?void 0:e.spatialReference,h=$(c);l.dpi*=s;const d={};if(t!=null&&t.timeExtent){const{start:y,end:a}=t.timeExtent.toJSON();d.time=y&&a&&y===a?""+y:`${y??"null"},${a??"null"}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(d.time="null,null");return{bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:h,imageSR:h,size:i+","+n,...l,...u,...d}}async fetchImage(e,i,n,t){const{data:s}=await this._fetchImage("image",e,i,n,t);return s}async fetchImageBitmap(e,i,n,t){const{data:s,url:m}=await this._fetchImage("blob",e,i,n,t);return W(s,m,t==null?void 0:t.signal)}async fetchRecomputedExtents(e={}){const i={...e,query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:n}=await b(this.url,i),{extent:t,fullExtent:s,timeExtent:m}=n,l=t||s;return{fullExtent:l&&T.fromJSON(l),timeExtent:m&&O.fromJSON({start:m[0],end:m[1]})}}loadAll(){return E(this,e=>{e(this.allSublayers)})}serviceSupportsSpatialReference(e){return Y(this,e)}async _fetchImage(e,i,n,t,s){var u,c,h;const m={responseType:e,signal:(s==null?void 0:s.signal)??null,query:{...this.parsedUrl.query,...this.createExportImageParameters(i,n,t,s),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},l=this.parsedUrl.path+"/export";if(((u=m.query)==null?void 0:u.dynamicLayers)!=null&&!((h=(c=this.capabilities)==null?void 0:c.exportMap)!=null&&h.supportsDynamicLayers))throw new x("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:m.query});try{const{data:d}=await b(l,m);return{data:d,url:l}}catch(d){throw M(d)?d:new x("mapimagelayer:image-fetch-error",`Unable to load image: ${l}`,{error:d})}}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:i,ssl:n}=await b(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});n&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=i,this.read(i,{origin:"service",url:this.parsedUrl})}};o([p(S("dateFieldsTimeReference"))],r.prototype,"dateFieldsTimeZone",void 0),o([p({type:Boolean})],r.prototype,"datesInUnknownTimezone",void 0),o([p()],r.prototype,"dpi",void 0),o([p()],r.prototype,"gdbVersion",void 0),o([p()],r.prototype,"imageFormat",void 0),o([F("imageFormat",["supportedImageFormatTypes"])],r.prototype,"readImageFormat",null),o([p({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],r.prototype,"imageMaxHeight",void 0),o([p({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],r.prototype,"imageMaxWidth",void 0),o([p()],r.prototype,"imageTransparency",void 0),o([p({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],r.prototype,"isReference",void 0),o([p({json:{read:!1,write:!1}})],r.prototype,"labelsVisible",void 0),o([p({type:["ArcGISMapServiceLayer"]})],r.prototype,"operationalLayerType",void 0),o([p({json:{read:!1,write:!1}})],r.prototype,"popupEnabled",void 0),o([p(S("preferredTimeReference"))],r.prototype,"preferredTimeZone",void 0),o([p()],r.prototype,"sourceJSON",void 0),o([p({json:{write:{ignoreOrigin:!0}}})],r.prototype,"sublayers",void 0),o([R("sublayers",{layers:{type:[_]},visibleLayers:{type:[P]}})],r.prototype,"writeSublayers",null),o([p({type:["show","hide","hide-children"]})],r.prototype,"listMode",void 0),o([p({json:{read:!1},readOnly:!0,value:"map-image"})],r.prototype,"type",void 0),o([p(H)],r.prototype,"url",void 0),r=o([L("esri.layers.MapImageLayer")],r);const ct=r;export{ct as default};