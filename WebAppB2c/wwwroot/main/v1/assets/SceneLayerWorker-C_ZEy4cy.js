function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/i3s-CuXtAx_p.js","assets/appSetting-DUM-gYes.js","assets/georeference-GCz6ZctA.js","assets/mat3f64-q3fE-ZOt.js","assets/mat4f64-CSKppSlJ.js","assets/computeTranslationToOriginAndRotation-DIMjG_ft.js","assets/DoubleArray-B4NeD_EH.js","assets/quat-CHim6v4S.js","assets/quatf64-Bdb9ZJJK.js","assets/vec42-MRs2gDDM.js","assets/vec4f64-CCf6w8sj.js","assets/meshVertexSpaceUtils-CNG6-jGq.js","assets/MeshLocalVertexSpace-P4Ih3CG-.js","assets/vec3-CQ13Bj65.js","assets/BufferView-Bp1TFGBr.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as L,gd as Q,ay as $}from"./appSetting-DUM-gYes.js";import{y as W}from"./DoubleArray-B4NeD_EH.js";import{i as X,a as Z}from"./MeshLocalVertexSpace-P4Ih3CG-.js";import{n as ee,s as te}from"./vec3-CQ13Bj65.js";import"./vec4f64-CCf6w8sj.js";import"./sphere-XXCGYRlx.js";import"./I3SUtil-DwRYkub7.js";import"./vec42-MRs2gDDM.js";import"./ObjectStack-8pNkEyGE.js";import"./plane-BEr5zgLP.js";import"./mat3f64-q3fE-ZOt.js";import"./mat4f64-CSKppSlJ.js";import"./quatf64-Bdb9ZJJK.js";import"./computeTranslationToOriginAndRotation-DIMjG_ft.js";import"./I3SBinaryReader-Ciw5fnB3.js";import"./VertexAttribute-BlT9lbVY.js";import"./symbolColorUtils-Bl2jDAFS.js";import"./orientedBoundingBox-Bts4gmGA.js";import"./quat-CHim6v4S.js";var R,B;(function(e){e[e.None=0]="None",e[e.Int16=1]="Int16",e[e.Int32=2]="Int32"})(R||(R={})),function(e){e[e.Replace=0]="Replace",e[e.Outside=1]="Outside",e[e.Inside=2]="Inside",e[e.Finished=3]="Finished"}(B||(B={}));function ne(){return M||(M=new Promise(e=>L(()=>import("./i3s-CuXtAx_p.js"),__vite__mapDeps([0,1])).then(t=>t.i).then(({default:t})=>{const n=t({locateFile:oe,onRuntimeInitialized:()=>e(n)});delete n.then})).catch(e=>{throw e})),M}function oe(e){return Q(`esri/libs/i3s/${e}`)}let M;var k,g,j,H,V;(function(e){e[e.Unmodified=0]="Unmodified",e[e.Culled=1]="Culled",e[e.NotChecked=2]="NotChecked"})(k||(k={})),function(e){e[e.Unmodified=0]="Unmodified",e[e.PotentiallyModified=1]="PotentiallyModified",e[e.Culled=2]="Culled",e[e.Unknown=3]="Unknown",e[e.NotChecked=4]="NotChecked"}(g||(g={}));(function(e){e[e.Unknown=0]="Unknown",e[e.Uncached=1]="Uncached",e[e.Cached=2]="Cached"})(j||(j={})),function(e){e[e.None=0]="None",e[e.MaxScreenThreshold=1]="MaxScreenThreshold",e[e.ScreenSpaceRelative=2]="ScreenSpaceRelative",e[e.RemovedFeatureDiameter=3]="RemovedFeatureDiameter",e[e.DistanceRangeFromDefaultCamera=4]="DistanceRangeFromDefaultCamera"}(H||(H={})),function(e){e[e.Hole=0]="Hole",e[e.Leaf=1]="Leaf"}(V||(V={}));async function Re(e){r=await _();const t=[e.geometryBuffer];return{result:Y(r,e,t),transferList:t}}async function Pe(e){var m;r=await _();const t=[e.geometryBuffer],{geometryBuffer:n}=e,a=n.byteLength,i=r._malloc(a),u=new Uint8Array(r.HEAPU8.buffer,i,a);u.set(new Uint8Array(n));const f=r.dracoDecompressPointCloudData(i,u.byteLength);if(r._free(i),f.error.length>0)throw new Error(`i3s.wasm: ${f.error}`);const l=((m=f.featureIds)==null?void 0:m.length)>0?f.featureIds.slice():null,s=f.positions.slice();return l&&t.push(l.buffer),t.push(s.buffer),{result:{positions:s,featureIds:l},transferList:t}}async function Se(e){await _(),ie(e);const t={buffer:e.buffer};return{result:t,transferList:[t.buffer]}}async function Ue(e){await _(),re(e)}async function Oe(e){r=await _(),r.setLegacySchema(e.context,e.jsonSchema)}async function ve(e){const{localMatrix:t,origin:n,positions:a,vertexSpace:i,localMode:u}=e,f=$.fromJSON(e.inSpatialReference),l=$.fromJSON(e.outSpatialReference);let s;if(i.type==="georeferenced"&&i.origin==null){const[{projectBuffer:c},{initializeProjection:b}]=await Promise.all([L(()=>import("./appSetting-DUM-gYes.js").then(d=>d.kv),__vite__mapDeps([])),L(()=>import("./appSetting-DUM-gYes.js").then(d=>d.kw),__vite__mapDeps([]))]);await b(f,l),s=new Float64Array(a.length),c(a,f,0,s,l,0,s.length/3)}else{const c=i.type==="georeferenced"?X.fromJSON(i):Z.fromJSON(i),{project:b}=await L(()=>import("./georeference-GCz6ZctA.js").then(d=>d.g),__vite__mapDeps([2,1,3,4,5,6,7,8,9,10,11,12,13,14]));s=W(b({positions:a,transform:t?{localMatrix:t}:void 0,vertexSpace:c,inSpatialReference:f,outSpatialReference:l,localMode:u}))}const m=s.length,[P,S,U]=n;for(let c=0;c<m;c+=3)s[c]-=P,s[c+1]-=S,s[c+2]-=U;return{result:{projected:s,original:a},transferList:[s.buffer,a.buffer]}}async function Me({normalMatrix:e,normals:t}){const n=new Float32Array(t.length);return ee(n,t,e),te(n,n),{result:{transformed:n,original:t},transferList:[n.buffer,t.buffer]}}function Te(e){J(e)}let I,r;function re(e){if(!r)return;const t=e.modifications,n=r._malloc(8*t.length),a=new Float64Array(r.HEAPU8.buffer,n,t.length);for(let i=0;i<t.length;++i)a[i]=t[i];r.setModifications(e.context,n,t.length,e.isGeodetic),r._free(n)}function Y(e,t,n){const{context:a,localOrigin:i,globalTrafo:u,mbs:f,obbData:l,elevationOffset:s,geometryBuffer:m,geometryDescriptor:P,indexToVertexProjector:S,vertexToRenderProjector:U}=t,c=e._malloc(m.byteLength),b=33,d=e._malloc(b*Float64Array.BYTES_PER_ELEMENT),T=new Uint8Array(e.HEAPU8.buffer,c,m.byteLength);T.set(new Uint8Array(m));const y=new Float64Array(e.HEAPU8.buffer,d,b);A(y,i);let w=y.byteOffset+3*y.BYTES_PER_ELEMENT,E=new Float64Array(y.buffer,w);A(E,u),w+=16*y.BYTES_PER_ELEMENT,E=new Float64Array(y.buffer,w),A(E,f),w+=4*y.BYTES_PER_ELEMENT,l&&(E=new Float64Array(y.buffer,w),A(E,l));const x=P,z={isDraco:!1,isLegacy:!1,color:t.layouts.some(p=>p.some(h=>h.name==="color")),normal:t.needNormals&&t.layouts.some(p=>p.some(h=>h.name==="normalCompressed")),uv0:t.layouts.some(p=>p.some(h=>h.name==="uv0")),uvRegion:t.layouts.some(p=>p.some(h=>h.name==="uvRegion")),featureIndex:x.featureIndex},o=e.process(a,!!t.obbData,c,T.byteLength,x,z,d,s,S,U,t.normalReferenceFrame);if(e._free(d),e._free(c),o.error.length>0)throw new Error(`i3s.wasm: ${o.error}`);if(o.discarded)return null;const O=o.componentOffsets.length>0?o.componentOffsets.slice():null,v=o.featureIds.length>0?o.featureIds.slice():null,G=o.anchorIds.length>0?Array.from(o.anchorIds):null,q=o.anchors.length>0?Array.from(o.anchors):null,D=o.interleavedVertedData.slice().buffer,F=o.indicesType===R.Int16?new Uint16Array(o.indices.buffer,o.indices.byteOffset,o.indices.byteLength/2).slice():new Uint32Array(o.indices.buffer,o.indices.byteOffset,o.indices.byteLength/4).slice(),C=o.positions.slice(),N=o.positionIndicesType===R.Int16?new Uint16Array(o.positionIndices.buffer,o.positionIndices.byteOffset,o.positionIndices.byteLength/2).slice():new Uint32Array(o.positionIndices.buffer,o.positionIndices.byteOffset,o.positionIndices.byteLength/4).slice(),K={layout:t.layouts[0],interleavedVertexData:D,indices:F,hasColors:o.hasColors,hasModifications:o.hasModifications,positionData:{data:C,indices:N}};return v&&n.push(v.buffer),O&&n.push(O.buffer),n.push(D),n.push(F.buffer),n.push(C.buffer),n.push(N.buffer),{componentOffsets:O,featureIds:v,anchorIds:G,anchors:q,transformedGeometry:K,obb:o.obb}}function xe(e){return e===0?g.Unmodified:e===1?g.PotentiallyModified:e===2?g.Culled:g.Unknown}function ie(e){if(!r)return;const{context:t,buffer:n}=e,a=r._malloc(n.byteLength),i=n.byteLength/Float64Array.BYTES_PER_ELEMENT,u=new Float64Array(r.HEAPU8.buffer,a,i),f=new Float64Array(n);u.set(f),r.filterOBBs(t,a,i),f.set(u),r._free(a)}function J(e){r&&r.destroy(e)===0&&(r=null)}function A(e,t){for(let n=0;n<t.length;++n)e[n]=t[n]}async function De(){r||await _()}function _(){return r?Promise.resolve(r):(I||(I=ne().then(e=>(r=e,I=null,r))),I)}const Fe={transform:(e,t)=>r&&Y(r,e,t),destroy:J};export{Te as destroyContext,Pe as dracoDecompressPointCloudData,Se as filterObbsForModifications,ie as filterObbsForModificationsSync,De as initialize,xe as interpretObbModificationResults,Re as process,ve as project,Oe as setLegacySchema,Ue as setModifications,re as setModificationsSync,Fe as test,Me as transformNormals};
