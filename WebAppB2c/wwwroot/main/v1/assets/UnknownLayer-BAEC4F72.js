import{dJ as i,d as s,y as t,f as p,bR as y,F as l}from"./appSetting-DUM-gYes.js";import{m as u}from"./MultiOriginJSONSupport-0QdgqWEC.js";import{j as d}from"./PortalLayer-C4Qg5ac_.js";import"./portalItemUtils-BSh6E4Ii.js";let e=class extends d(u(y)){constructor(r){super(r),this.resourceInfo=null,this.type="unknown"}initialize(){this.addResolvingPromise(new Promise((r,o)=>{i(()=>{const n=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let a="Unknown layer type";n&&(a+=" "+n),o(new l("layer:unknown-layer-type",a,{layerType:n}))})}))}read(r,o){super.read({resourceInfo:r},o)}write(r,o){return null}};s([t({readOnly:!0})],e.prototype,"resourceInfo",void 0),s([t({type:["show","hide"]})],e.prototype,"listMode",void 0),s([t({json:{read:!1},readOnly:!0,value:"unknown"})],e.prototype,"type",void 0),e=s([p("esri.layers.UnknownLayer")],e);const h=e;export{h as default};