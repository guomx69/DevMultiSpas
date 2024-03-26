import{hK as _,ew as N,hL as b,F as g,s as U}from"./appSetting-DUM-gYes.js";import{C as h,U as u}from"./enums-CYMvjYBC.js";import"./enums-BRqP_wXA.js";import{s as A,e as Y,m as B}from"./Texture-CvxlpfIz.js";import"./Program-4ShQ3Lil.js";import{t as L}from"./VertexElementDescriptor-BOD-G50G.js";let m=class E{constructor(t,r,e,i,n,a,o){this.instanceId=t,this.textureKey=r,this.indexStart=e,this.indexCount=i,this.vertexStart=n,this.vertexCount=a,this.overlaps=o}updateBaseOffsets(t){this.vertexStart+=t.vertexFrom,this.indexStart+=t.indexFrom}clone(){return new E(this.instanceId,this.textureKey,this.indexStart,this.indexCount,this.vertexStart,this.vertexCount,this.overlaps)}static write(t,r,e,i,n,a,o,c){t.push(r),t.push(e),t.push(i),t.push(n),t.push(a),t.push(o),t.push(c)}serialize(t){return t.push(this.instanceId),t.push(this.textureKey),t.push(this.indexStart),t.push(this.indexCount),t.push(this.vertexStart),t.push(this.vertexCount),t.push(this.overlaps),t}static deserialize(t){const r=t.readInt32(),e=t.readInt32(),i=t.readInt32(),n=t.readInt32(),a=t.readInt32(),o=t.readInt32(),c=t.readInt32();return new E(r,e,i,n,a,o,c)}};m.byteSizeHint=7*Uint32Array.BYTES_PER_ELEMENT;function T(s,t){if(t!==null){s.push(t.length);for(const r of t)r.serialize(s);return s}s.push(0)}function I(s,t,r){const e=s.readInt32(),i=new Array(e);for(let n=0;n<i.length;n++)i[n]=t.deserialize(s,r);return i}class y{constructor(t,r){this.id=t,this.sortKey=r,this.records=[]}serialize(t){return t.push(this.id),t.writeF32(this.sortKey),T(t,this.records),t}static deserialize(t){const r=t.readInt32(),e=t.readF32(),i=new y(r,e);return i.records=I(t,m)??[],i}}y.byteSizeHint=2*Uint32Array.BYTES_PER_ELEMENT+m.byteSizeHint;function $(s){const t=s.map(({name:r,count:e,type:i})=>`${r}.${e}.${i}`).join(",");return _(t)}function f(s,t,r,e,i,n,a){if(s.primitiveName===t){for(const o in s)if(o===r){let c=e==null?void 0:e.readWithDefault(i,n,s[o]&&a);return s.type==="text"&&(c=c.toString()),void(s[o]=c)}}if("type"in s&&s.type!=null)switch(s.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(s.symbolLayers)for(const o of s.symbolLayers)f(o,t,r,e,i,n,a);break;case"CIMHatchFill":s.lineSymbol&&f(s.lineSymbol,t,r,e,i,n,a);break;case"CIMSolidStroke":case"CIMSolidFill":case"CIMVectorMarker":if(s.type==="CIMVectorMarker"&&s.markerGraphics)for(const o of s.markerGraphics)f(o,t,r,e,i,n,a),f(o.symbol,t,r,e,i,n,a)}}function W(s){const t=s.width;return s.effects!=null?256:Math.max(1.25*t,8)}class l{constructor(t,r,e,i){this.computedX=0,this.computedY=0,this.center=N(t,r),this.centerT=b(),this.halfWidth=e/2,this.halfHeight=i/2,this.width=e,this.height=i}get x(){return this.center[0]}get y(){return this.center[1]}get blX(){return this.center[0]+this.halfWidth}get blY(){return this.center[1]+this.halfHeight}get trX(){return this.center[0]-this.halfWidth}get trY(){return this.center[1]-this.halfHeight}get xmin(){return this.x-this.halfWidth}get xmax(){return this.x+this.halfWidth}get ymin(){return this.y-this.halfHeight}get ymax(){return this.y+this.halfHeight}set x(t){this.center[0]=t}set y(t){this.center[1]=t}clone(){return new l(this.x,this.y,this.width,this.height)}serialize(t){return t.writeF32(this.center[0]),t.writeF32(this.center[1]),t.push(this.width),t.push(this.height),t}findCollisionDelta(t,r=4){const e=Math.abs(t.centerT[0]-this.centerT[0]),i=Math.abs(t.centerT[1]-this.centerT[1]),n=(t.halfWidth+this.halfWidth+r)/e,a=(t.halfHeight+this.halfHeight+r)/i,o=Math.min(n,a);return Math.log2(o)}extend(t){const r=Math.min(this.xmin,t.xmin),e=Math.min(this.ymin,t.ymin),i=Math.max(this.xmax,t.xmax)-r,n=Math.max(this.ymax,t.ymax)-e,a=r+i/2,o=e+n/2;this.width=i,this.height=n,this.halfWidth=i/2,this.halfHeight=n/2,this.x=a,this.y=o}static deserialize(t){const r=t.readF32(),e=t.readF32(),i=t.readInt32(),n=t.readInt32();return new l(r,e,i,n)}}const R=new Float32Array(1);new Uint32Array(R.buffer);function X(s,t){return 65535&s|t<<16}function K(s,t,r,e){const i=r.packPrecisionFactor??1;switch(r.type){case h.BYTE:if(r.count===1)s.setInt8(e+r.offset,t*i);else for(let n=0;n<r.count;n++){const a=n*Int8Array.BYTES_PER_ELEMENT;s.setInt8(e+r.offset+a,t[n]*i)}break;case h.UNSIGNED_BYTE:if(r.count===1)s.setUint8(e+r.offset,t*i);else for(let n=0;n<r.count;n++){const a=n*Uint8Array.BYTES_PER_ELEMENT;s.setUint8(e+r.offset+a,t[n]*i)}break;case h.SHORT:if(r.count===1)s.setInt16(e+r.offset,t*i,!0);else for(let n=0;n<r.count;n++){const a=n*Int16Array.BYTES_PER_ELEMENT;s.setInt16(e+r.offset+a,t[n]*i,!0)}break;case h.UNSIGNED_SHORT:if(r.count===1)s.setUint16(e+r.offset,t*i,!0);else for(let n=0;n<r.count;n++){const a=n*Uint16Array.BYTES_PER_ELEMENT;s.setUint16(e+r.offset+a,t[n]*i,!0)}break;case h.INT:if(r.count===1)s.setInt32(e+r.offset,t*i,!0);else for(let n=0;n<r.count;n++){const a=n*Int32Array.BYTES_PER_ELEMENT;s.setInt32(e+r.offset+a,t[n]*i,!0)}break;case h.UNSIGNED_INT:if(r.count===1)s.setUint32(e+r.offset,t*i,!0);else for(let n=0;n<r.count;n++){const a=n*Uint32Array.BYTES_PER_ELEMENT;s.setUint32(e+r.offset+a,t[n]*i,!0)}break;case h.FLOAT:if(r.count===1)s.setFloat32(e+r.offset,t*i,!0);else for(let n=0;n<r.count;n++){const a=n*Float32Array.BYTES_PER_ELEMENT;s.setFloat32(e+r.offset+a,t[n]*i,!0)}}}function q(s,t,r){switch(t.type){case h.BYTE:{if(t.count===1)return s.getInt8(r+t.offset);const e=[];for(let i=0;i<t.count;i++){const n=i*Int8Array.BYTES_PER_ELEMENT;e.push(s.getInt8(r+t.offset+n))}return e}case h.UNSIGNED_BYTE:{if(t.count===1)return s.getUint8(r+t.offset);const e=[];for(let i=0;i<t.count;i++){const n=i*Uint8Array.BYTES_PER_ELEMENT;e.push(s.getUint8(r+t.offset+n))}return e}case h.SHORT:{if(t.count===1)return s.getInt16(r+t.offset,!0);const e=[];for(let i=0;i<t.count;i++){const n=i*Int16Array.BYTES_PER_ELEMENT;e.push(s.getInt16(r+t.offset+n,!0))}return e}case h.UNSIGNED_SHORT:{if(t.count===1)return s.getUint16(r+t.offset,!0);const e=[];for(let i=0;i<t.count;i++){const n=i*Uint16Array.BYTES_PER_ELEMENT;e.push(s.getUint16(r+t.offset+n,!0))}return e}case h.INT:{if(t.count===1)return s.getInt32(r+t.offset,!0);const e=[];for(let i=0;i<t.count;i++){const n=i*Int32Array.BYTES_PER_ELEMENT;e.push(s.getInt32(r+t.offset+n,!0))}return e}case h.UNSIGNED_INT:{if(t.count===1)return s.getUint32(r+t.offset,!0);const e=[];for(let i=0;i<t.count;i++){const n=i*Uint32Array.BYTES_PER_ELEMENT;e.push(s.getUint32(r+t.offset+n,!0))}return e}case h.FLOAT:{if(t.count===1)return s.getFloat32(r+t.offset,!0);const e=[];for(let i=0;i<t.count;i++){const n=i*Float32Array.BYTES_PER_ELEMENT;e.push(s.getFloat32(r+t.offset+n,!0))}return e}}}const S=()=>U.getLogger("esri.views.2d.engine.webgl.Utils");function j(s){switch(s){case u.UNSIGNED_BYTE:return 1;case u.UNSIGNED_SHORT_4_4_4_4:return 2;case u.FLOAT:return 4;default:return void S().error(new g("webgl-utils",`Unable to handle type ${s}`))}}function V(s){switch(s){case u.UNSIGNED_BYTE:return Uint8Array;case u.UNSIGNED_SHORT_4_4_4_4:return Uint16Array;case u.FLOAT:return Float32Array;default:return void S().error(new g("webgl-utils",`Unable to handle type ${s}`))}}function H(s){var r;const t={};for(const e in s){const i=s[e];let n=0;t[e]=i.map(a=>{const o=new L(a.name,a.count,a.type,n,0,a.normalized||!1);return n+=a.count*A(a.type),o}),(r=t[e])==null||r.forEach(a=>a.stride=n)}return t}const P=s=>{const t=new Map;for(const r in s)for(const e of s[r])t.set(e.name,e.location);return t},k=s=>{const t={};for(const r in s){const e=s[r];t[r]=e!=null&&e.length?e[0].stride:0}return t},p=new Map,J=(s,t)=>{if(!p.has(s)){const r=H(t),e={strides:k(r),bufferLayouts:r,attributes:P(t)};p.set(s,e)}return p.get(s)},Q=s=>s.includes("data:image/svg+xml");function Z(s){const t=[];for(let r=0;r<s.length;r++)t.push(s.charCodeAt(r));return t}function tt(s,t,r){const e=new Y(t.width,t.height);return e.dataType=t.dataType,t.depth&&(e.depth=t.depth),t.flipped&&(e.flipped=t.flipped),t.hasMipmap&&(e.hasMipmap=t.hasMipmap),e.internalFormat=t.internalFormat,t.isImmutable&&(e.isImmutable=t.isImmutable),t.isOpaque&&(e.isOpaque=t.isOpaque),t.maxAnisotropy&&(e.maxAnisotropy=t.maxAnisotropy),e.pixelFormat=t.pixelFormat,t.preMultiplyAlpha&&(e.preMultiplyAlpha=t.preMultiplyAlpha),t.samplingMode&&(e.samplingMode=t.samplingMode),t.target&&(e.target=t.target),e.uniform=t.uniform,t.unpackAlignment&&(e.unpackAlignment=t.unpackAlignment),t.wrapMode&&(e.wrapMode=t.wrapMode),new B(s,e,r)}function et(s){return"url"in s&&"urlHash"in s?{...s,url:""}:s}class w{constructor(t,r,e,i,n,a,o,c,d=[]){this.entityTexel=t,this.anchorX=r,this.anchorY=e,this.directionX=i,this.directionY=n,this.maxScale=a,this.minScale=o,this.referenceBounds=c,this.bounds=d}serialize(t){t.push(this.entityTexel),t.writeF32(this.anchorX),t.writeF32(this.anchorY),t.writeF32(this.directionX),t.writeF32(this.directionY),t.writeF32(this.maxScale),t.writeF32(this.minScale),this.referenceBounds===null?(t.writeF32(0),t.writeF32(0),t.writeF32(0)):(t.writeF32(this.referenceBounds.size),t.writeF32(this.referenceBounds.offsetX),t.writeF32(this.referenceBounds.offsetY)),T(t,this.bounds)}static deserialize(t){const r=t.readInt32(),e=t.readF32(),i=t.readF32(),n=t.readF32(),a=t.readF32(),o=t.readF32(),c=t.readF32(),d=t.readF32(),x=t.readF32(),F=t.readF32(),M=I(t,l)??[];return new w(r,e,i,n,a,o,c,{size:d,offsetX:x,offsetY:F},M)}}export{et as M,tt as T,$ as a,J as b,j as c,V as d,I as e,K as f,W as g,l as i,Z as j,q as n,f as o,w as r,y as s,m as t,X as w,Q as y};
