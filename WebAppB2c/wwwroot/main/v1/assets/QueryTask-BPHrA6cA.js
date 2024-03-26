function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/meshFeatureSet-CLPDWr8N.js","assets/appSetting-DUM-gYes.js","assets/Mesh-B_pX-1Hy.js","assets/georeference-GCz6ZctA.js","assets/mat3f64-q3fE-ZOt.js","assets/mat4f64-CSKppSlJ.js","assets/computeTranslationToOriginAndRotation-DIMjG_ft.js","assets/DoubleArray-B4NeD_EH.js","assets/quat-CHim6v4S.js","assets/quatf64-Bdb9ZJJK.js","assets/vec42-MRs2gDDM.js","assets/vec4f64-CCf6w8sj.js","assets/meshVertexSpaceUtils-CNG6-jGq.js","assets/MeshLocalVertexSpace-P4Ih3CG-.js","assets/vec3-CQ13Bj65.js","assets/BufferView-Bp1TFGBr.js","assets/imageUtils-Dwv3A6qe.js","assets/earcut-CdtGKAi5.js","assets/Indices-C05FYy0S.js","assets/deduplicate-sGoHjUzd.js","assets/plane-BEr5zgLP.js","assets/triangle-CHnm_pxW.js","assets/Util-DtwMY4br.js","assets/ObjectStack-8pNkEyGE.js","assets/lineSegment-CTnjlI5F.js","assets/basicInterfaces-GbxEOYtk.js","assets/VertexAttribute-BlT9lbVY.js","assets/External-DJr0uALX.js","assets/infoFor3D-DsOdlPuA.js","assets/FeatureSet-gDsSYk4j.js","assets/RelationshipQuery-dUhp3mRX.js","assets/executeRelationshipQuery-Y86XIAcD.js","assets/query-CLle7ZL8.js","assets/pbfQueryUtils-B8YK4jkO.js","assets/pbf-BEVpmmYT.js","assets/OptimizedGeometry-CQuTPb9g.js","assets/OptimizedFeatureSet-Blu9Ckm7.js","assets/queryZScale-BfQ_uJRr.js","assets/queryAttachments-CrTqWyXw.js","assets/AttachmentInfo-BHZ5rIpV.js","assets/executeTopFeaturesQuery-k4DEXC0h.js","assets/queryTopFeatures-C8Osv_iv.js","assets/TopFeaturesQuery-D_JsRAZ9.js","assets/executeForTopIds-icbYpDpe.js","assets/executeForTopExtents-gdqEJ4a2.js","assets/executeForTopCount-_UNQjq8e.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{aW as h,aX as _,aF as T,d as a,y as l,aR as S,f as A,$ as w,bY as N,z as Q,eV as d,_ as n,F as P}from"./appSetting-DUM-gYes.js";import{u as f,i as y}from"./infoFor3D-DsOdlPuA.js";import{n as j,s as q}from"./executeForIds-i4iSLOMN.js";import{x as L}from"./query-CLle7ZL8.js";import{a as z}from"./executeQueryJSON-CxJZrfmJ.js";import{n as J}from"./executeQueryPBF-Bhn1-48u.js";import{d as $}from"./FeatureSet-gDsSYk4j.js";async function C(e,t,r){const o=h(e),u=await L(o,_.from(t),{...r}),i=u.data.extent;return!i||isNaN(i.xmin)||isNaN(i.ymin)||isNaN(i.xmax)||isNaN(i.ymax)?{count:u.data.count,extent:null}:{count:u.data.count,extent:T.fromJSON(i)}}let s=class extends w{constructor(e){super(e),this.dynamicDataSource=null,this.fieldsIndex=null,this.gdbVersion=null,this.infoFor3D=null,this.pbfSupported=!1,this.queryAttachmentsSupported=!1,this.sourceSpatialReference=null,this.url=null}get parsedUrl(){return N(this.url)}async execute(e,t){const r=await this.executeJSON(e,t);return this.featureSetFromJSON(e,r,t)}async executeJSON(e,t){var c;const r=this._normalizeQuery(e),o=((c=e.outStatistics)==null?void 0:c[0])!=null,u=Q("featurelayer-pbf-statistics"),i=!o||u;let p;if(this.pbfSupported&&i)try{p=await J(this.url,r,t)}catch(m){if(m.name!=="query:parsing-pbf")throw m;this.pbfSupported=!1}return this.pbfSupported&&i||(p=await z(this.url,r,t)),this._normalizeFields(p.fields),p}async featureSetFromJSON(e,t,r){if(!this._queryIs3DObjectFormat(e)||this.infoFor3D==null||!t.features)return $.fromJSON(t);const{meshFeatureSetFromJSON:o}=await d(n(()=>import("./meshFeatureSet-CLPDWr8N.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29])),r);return o(e,this.infoFor3D,t)}executeForCount(e,t){return j(this.url,this._normalizeQuery(e),t)}executeForExtent(e,t){return C(this.url,this._normalizeQuery(e),t)}executeForIds(e,t){return q(this.url,this._normalizeQuery(e),t)}async executeRelationshipQuery(e,t){const[{default:r},{executeRelationshipQuery:o}]=await d(Promise.all([n(()=>import("./RelationshipQuery-dUhp3mRX.js"),__vite__mapDeps([30,1])),n(()=>import("./executeRelationshipQuery-Y86XIAcD.js"),__vite__mapDeps([31,1,32,33,34,35,36,37,29,30]))]),t);return e=r.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),o(this.url,e,t)}async executeRelationshipQueryForCount(e,t){const[{default:r},{executeRelationshipQueryForCount:o}]=await d(Promise.all([n(()=>import("./RelationshipQuery-dUhp3mRX.js"),__vite__mapDeps([30,1])),n(()=>import("./executeRelationshipQuery-Y86XIAcD.js"),__vite__mapDeps([31,1,32,33,34,35,36,37,29,30]))]),t);return e=r.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),o(this.url,e,t)}async executeAttachmentQuery(e,t){const{executeAttachmentQuery:r,fetchAttachments:o,processAttachmentQueryResult:u}=await d(n(()=>import("./queryAttachments-CrTqWyXw.js"),__vite__mapDeps([38,1,32,33,34,35,36,37,39])),t),i=h(this.url);return u(i,await(this.queryAttachmentsSupported?r(i,e,t):o(i,e,t)))}async executeTopFeaturesQuery(e,t){const{executeTopFeaturesQuery:r}=await d(n(()=>import("./executeTopFeaturesQuery-k4DEXC0h.js"),__vite__mapDeps([40,1,41,32,33,34,35,36,37,29,42])),t);return r(this.parsedUrl,e,this.sourceSpatialReference,t)}async executeForTopIds(e,t){const{executeForTopIds:r}=await d(n(()=>import("./executeForTopIds-icbYpDpe.js"),__vite__mapDeps([43,1,41,32,33,34,35,36,37,42])),t);return r(this.parsedUrl,e,t)}async executeForTopExtents(e,t){const{executeForTopExtents:r}=await d(n(()=>import("./executeForTopExtents-gdqEJ4a2.js"),__vite__mapDeps([44,1,41,32,33,34,35,36,37,42])),t);return r(this.parsedUrl,e,t)}async executeForTopCount(e,t){const{executeForTopCount:r}=await d(n(()=>import("./executeForTopCount-_UNQjq8e.js"),__vite__mapDeps([45,1,41,32,33,34,35,36,37,42])),t);return r(this.parsedUrl,e,t)}_normalizeQuery(e){let t=_.from(e);t.sourceSpatialReference=t.sourceSpatialReference||this.sourceSpatialReference,(this.gdbVersion||this.dynamicDataSource)&&(t=t===e?t.clone():t,t.gdbVersion=e.gdbVersion||this.gdbVersion,t.dynamicDataSource=e.dynamicDataSource?S.from(e.dynamicDataSource):this.dynamicDataSource);const{infoFor3D:r}=this;if(r!=null&&this._queryIs3DObjectFormat(e)){t=t===e?t.clone():t,t.formatOf3DObjects=null;const{supportedFormats:o,queryFormats:u}=r,i=f("model/gltf-binary",o)??y("glb",o),p=f("model/gltf+json",o)??y("gltf",o);for(const c of u){if(c===i){t.formatOf3DObjects=c;break}c!==p||t.formatOf3DObjects||(t.formatOf3DObjects=c)}if(!t.formatOf3DObjects)throw new P("query:unsupported-3d-query-formats","Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");if(t.outFields==null||!t.outFields.includes("*")){t=t===e?t.clone():t,t.outFields==null&&(t.outFields=[]);const{originX:c,originY:m,originZ:D,translationX:x,translationY:F,translationZ:b,scaleX:O,scaleY:g,scaleZ:V,rotationX:E,rotationY:R,rotationZ:I,rotationDeg:v}=r.transformFieldRoles;t.outFields.push(c,m,D,x,F,b,O,g,V,E,R,I,v)}}return t}_normalizeFields(e){if(this.fieldsIndex!=null&&e!=null)for(const t of e){const r=this.fieldsIndex.get(t.name);r&&Object.assign(t,r.toJSON())}}_queryIs3DObjectFormat(e){return this.infoFor3D!=null&&e.returnGeometry===!0&&e.multipatchOption!=="xyFootprint"&&!e.outStatistics}};a([l({type:S})],s.prototype,"dynamicDataSource",void 0),a([l()],s.prototype,"fieldsIndex",void 0),a([l()],s.prototype,"gdbVersion",void 0),a([l()],s.prototype,"infoFor3D",void 0),a([l({readOnly:!0})],s.prototype,"parsedUrl",null),a([l()],s.prototype,"pbfSupported",void 0),a([l()],s.prototype,"queryAttachmentsSupported",void 0),a([l()],s.prototype,"sourceSpatialReference",void 0),a([l({type:String})],s.prototype,"url",void 0),s=a([A("esri.tasks.QueryTask")],s);const M=s;export{M as x};
