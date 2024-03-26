import{d as l,y as i,f as T,aU as P,aV as v,aF as j,ay as y,bS as S,aB as x,dA as o,f4 as f,F as U,f5 as I,f6 as M,b6 as W,U as w,aG as L,aZ as g,aS as $,bR as D}from"./appSetting-DUM-gYes.js";import{m as E}from"./MultiOriginJSONSupport-0QdgqWEC.js";import{n as O}from"./BlendLayer-B0Xa9sg2.js";import{u as A}from"./OperationalLayer-CLgIr9Pu.js";import{j as z}from"./PortalLayer-C4Qg5ac_.js";import{f as V}from"./RefreshableLayer-k_sfnV6L.js";import{t as q}from"./ScaleRangeLayer-BPI7rkYw.js";import{o as b}from"./imageBitmapUtils-ajLpUtfK.js";var h;let c=h=class extends P{constructor(e){super(e)}clone(){return new h({customLayerParameters:v(this.customLayerParameters),customParameters:v(this.customParameters),layerIdentifier:this.layerIdentifier,tileMatrixSet:this.tileMatrixSet,url:this.url})}};l([i({json:{type:Object,write:!0}})],c.prototype,"customLayerParameters",void 0),l([i({json:{type:Object,write:!0}})],c.prototype,"customParameters",void 0),l([i({type:String,json:{write:!0}})],c.prototype,"layerIdentifier",void 0),l([i({type:String,json:{write:!0}})],c.prototype,"tileMatrixSet",void 0),l([i({type:String,json:{write:!0}})],c.prototype,"url",void 0),c=h=l([T("esri.layer.support.WMTSLayerInfo")],c);var d;let s=d=class extends O(V(q(A(z(E(D)))))){constructor(...e){super(...e),this.copyright="",this.fullExtent=new j(-20037508342787e-6,-2003750834278e-5,2003750834278e-5,20037508342787e-6,y.WebMercator),this.legendEnabled=!1,this.isReference=null,this.popupEnabled=!1,this.spatialReference=y.WebMercator,this.subDomains=null,this.tileInfo=new S({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new x({x:-20037508342787e-6,y:20037508342787e-6,spatialReference:y.WebMercator}),spatialReference:y.WebMercator,lods:[new o({level:0,scale:591657527591555e-6,resolution:156543.033928}),new o({level:1,scale:295828763795777e-6,resolution:78271.5169639999}),new o({level:2,scale:147914381897889e-6,resolution:39135.7584820001}),new o({level:3,scale:73957190948944e-6,resolution:19567.8792409999}),new o({level:4,scale:36978595474472e-6,resolution:9783.93962049996}),new o({level:5,scale:18489297737236e-6,resolution:4891.96981024998}),new o({level:6,scale:9244648868618e-6,resolution:2445.98490512499}),new o({level:7,scale:4622324434309e-6,resolution:1222.99245256249}),new o({level:8,scale:2311162217155e-6,resolution:611.49622628138}),new o({level:9,scale:1155581108577e-6,resolution:305.748113140558}),new o({level:10,scale:577790.554289,resolution:152.874056570411}),new o({level:11,scale:288895.277144,resolution:76.4370282850732}),new o({level:12,scale:144447.638572,resolution:38.2185141425366}),new o({level:13,scale:72223.819286,resolution:19.1092570712683}),new o({level:14,scale:36111.909643,resolution:9.55462853563415}),new o({level:15,scale:18055.954822,resolution:4.77731426794937}),new o({level:16,scale:9027.977411,resolution:2.38865713397468}),new o({level:17,scale:4513.988705,resolution:1.19432856685505}),new o({level:18,scale:2256.994353,resolution:.597164283559817}),new o({level:19,scale:1128.497176,resolution:.298582141647617}),new o({level:20,scale:564.248588,resolution:.14929107082380833}),new o({level:21,scale:282.124294,resolution:.07464553541190416}),new o({level:22,scale:141.062147,resolution:.03732276770595208}),new o({level:23,scale:70.5310735,resolution:.01866138385297604})]}),this.type="web-tile",this.urlTemplate=null,this.wmtsInfo=null}normalizeCtorArgs(e,t){return typeof e=="string"?{urlTemplate:e,...t}:e}load(e){const t=this.loadFromPortal({supportedTypes:["WMTS"]},e).then(()=>{var a;let r="";if(this.urlTemplate)if(this.spatialReference.equals(this.tileInfo.spatialReference)){const n=new f(this.urlTemplate);!(this.subDomains&&this.subDomains.length>0)&&((a=n.authority)!=null&&a.includes("{subDomain}"))&&(r="is missing 'subDomains' property")}else r="spatialReference must match tileInfo.spatialReference";else r="is missing the required 'urlTemplate' property value";if(r)throw new U("web-tile-layer:load",`WebTileLayer (title: '${this.title}', id: '${this.id}') ${r}`)});return this.addResolvingPromise(t),Promise.resolve(this)}get levelValues(){const e=[];if(!this.tileInfo)return null;for(const t of this.tileInfo.lods)e[t.level]=t.levelValue||t.level;return e}readSpatialReference(e,t){var r;return e||y.fromJSON((r=t.fullExtent)==null?void 0:r.spatialReference)}get tileServers(){if(!this.urlTemplate)return null;const e=[],{urlTemplate:t,subDomains:r}=this,a=new f(t),n=a.scheme?a.scheme+"://":"//",u=n+a.authority+"/",p=a.authority;if(p!=null&&p.includes("{subDomain}")){if(r&&r.length>0&&p.split(".").length>1)for(const m of r)e.push(n+p.replaceAll(/\{subDomain\}/gi,m)+"/")}else e.push(u);return e.map(I)}get urlPath(){if(!this.urlTemplate)return null;const e=this.urlTemplate,t=new f(e),r=(t.scheme?t.scheme+"://":"//")+t.authority+"/";return e.substring(r.length)}readUrlTemplate(e,t){return e||t.templateUrl}writeUrlTemplate(e,t){M(e)&&(e="https:"+e),e&&(e=e.replaceAll(/\{z\}/gi,"{level}").replaceAll(/\{x\}/gi,"{col}").replaceAll(/\{y\}/gi,"{row}"),e=W(e)),t.templateUrl=e}fetchTile(e,t,r,a={}){const{signal:n}=a,u=this.getTileUrl(e,t,r),p={responseType:"image",signal:n,query:{...this.refreshParameters}};return w(u,p).then(m=>m.data)}async fetchImageBitmapTile(e,t,r,a={}){const{signal:n}=a;if(this.fetchTile!==d.prototype.fetchTile){const R=await this.fetchTile(e,t,r,a);return b(R,e,t,r,n)}const u=this.getTileUrl(e,t,r),p={responseType:"blob",signal:n,query:{...this.refreshParameters}},{data:m}=await w(u,p);return b(m,e,t,r,n)}getTileUrl(e,t,r){const{levelValues:a,tileServers:n,urlPath:u}=this;if(!a||!n||!u)return"";const p=a[e];return n[t%n.length]+L(u,{level:p,z:p,col:r,x:r,row:t,y:t})}};l([i({type:String,value:"",json:{write:!0}})],s.prototype,"copyright",void 0),l([i({type:j,json:{write:!0},nonNullable:!0})],s.prototype,"fullExtent",void 0),l([i({readOnly:!0,json:{read:!1,write:!1}})],s.prototype,"legendEnabled",void 0),l([i({type:["show","hide"]})],s.prototype,"listMode",void 0),l([i({json:{read:!0,write:!0}})],s.prototype,"blendMode",void 0),l([i()],s.prototype,"levelValues",null),l([i({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],s.prototype,"isReference",void 0),l([i({type:["WebTiledLayer"],value:"WebTiledLayer"})],s.prototype,"operationalLayerType",void 0),l([i({readOnly:!0,json:{read:!1,write:!1}})],s.prototype,"popupEnabled",void 0),l([i({type:y})],s.prototype,"spatialReference",void 0),l([g("spatialReference",["spatialReference","fullExtent.spatialReference"])],s.prototype,"readSpatialReference",null),l([i({type:[String],json:{write:!0}})],s.prototype,"subDomains",void 0),l([i({type:S,json:{write:!0}})],s.prototype,"tileInfo",void 0),l([i({readOnly:!0})],s.prototype,"tileServers",null),l([i({json:{read:!1}})],s.prototype,"type",void 0),l([i()],s.prototype,"urlPath",null),l([i({type:String,json:{origins:{"portal-item":{read:{source:"url"}}}}})],s.prototype,"urlTemplate",void 0),l([g("urlTemplate",["urlTemplate","templateUrl"])],s.prototype,"readUrlTemplate",null),l([$("urlTemplate",{templateUrl:{type:String}})],s.prototype,"writeUrlTemplate",null),l([i({type:c,json:{write:!0}})],s.prototype,"wmtsInfo",void 0),s=d=l([T("esri.layers.WebTileLayer")],s);const _=s,Z=Object.freeze(Object.defineProperty({__proto__:null,default:_},Symbol.toStringTag,{value:"Module"}));export{_ as I,Z as W,c as p};
