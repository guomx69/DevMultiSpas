function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/objectResourceUtils-BorLCc5k.js","assets/devEnvironmentUtils-Blrp8lZ5.js","assets/appSetting-DUM-gYes.js","assets/mat3f64-q3fE-ZOt.js","assets/mat4f64-CSKppSlJ.js","assets/BufferView-Bp1TFGBr.js","assets/vec42-MRs2gDDM.js","assets/vec3-CQ13Bj65.js","assets/DefaultMaterial_COLOR_GAMMA-DHlAdnqE.js","assets/enums-CYMvjYBC.js","assets/Version-bFyzeYy3.js","assets/quat-CHim6v4S.js","assets/quatf64-Bdb9ZJJK.js","assets/resourceUtils-_xcYd3oH.js","assets/basicInterfaces-GbxEOYtk.js","assets/Indices-C05FYy0S.js","assets/NestedMap-DgiGbX8E.js","assets/requestImageUtils-6e6WuVeu.js","assets/orientedBoundingBox-Bts4gmGA.js","assets/vec4f64-CCf6w8sj.js","assets/computeTranslationToOriginAndRotation-DIMjG_ft.js","assets/plane-BEr5zgLP.js","assets/triangle-CHnm_pxW.js","assets/Util-DtwMY4br.js","assets/ObjectStack-8pNkEyGE.js","assets/lineSegment-CTnjlI5F.js","assets/VertexAttribute-BlT9lbVY.js","assets/Texture-CvxlpfIz.js","assets/InterleavedLayout-CNnGxTIW.js","assets/types-D0PSWh4d.js","assets/OrderIndependentTransparency-D0wfjx-a.js","assets/sphere-XXCGYRlx.js","assets/BindType-BmZEZMMh.js","assets/symbolColorUtils-Bl2jDAFS.js","assets/doublePrecisionUtils-B0owpBza.js","assets/lengthUtils-BLMmU1rC.js","assets/RenderState-DaVlEYWY.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{F as n,U as d,_ as v,dO as c,bH as y,dP as p,cl as l}from"./appSetting-DUM-gYes.js";import{e as b}from"./LRUCache-dNFQ3tHS.js";let s=f();function f(){return new b(50)}function T(){s=f()}async function $(r,o){var i,t;if((i=r.resource)!=null&&i.href)return w(r.resource.href).then(e=>[e.width,e.height]);if((t=r.resource)!=null&&t.primitive)return o!=null?[o,o]:[256,256];throw new n("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function w(r){return d(r,{responseType:"image"}).then(o=>o.data)}async function x(r,o=null){var t;if(!r.isPrimitive){const e=r.resource.href;if(!e)throw new n("symbol:invalid-resource","The symbol does not have a valid resource");const a=s.get(e);if(a!==void 0)return a;const{fetch:m}=await v(()=>import("./objectResourceUtils-BorLCc5k.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36])),h=await m(e,{disableTextures:!0}),u=c(h.referenceBoundingBox,l());return s.put(e,u),u}if(!((t=r.resource)!=null&&t.primitive))throw new n("symbol:invalid-resource","The symbol does not have a valid resource");const i=y(p(r.resource.primitive));if(o!=null)for(let e=0;e<i.length;e++)i[e]*=o;return c(i,l())}export{T as clearBoundingBoxCache,$ as computeIconLayerResourceSize,x as computeObjectLayerResourceSize};
