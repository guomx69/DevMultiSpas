import{V as a,o as n,d as i,y as s,t as o,f as l}from"./appSetting-DUM-gYes.js";import{m as h,u as d}from"./LayerView-tWafQmVa.js";import"./scaleUtils-B607GZsV.js";import"./Container-BtCntV2A.js";import"./parser-BPoYkW_l.js";import"./highlightReasons-dQlR3qpb.js";import"./definitions-C14Q9bsB.js";import"./enums-CYMvjYBC.js";import"./Texture-CvxlpfIz.js";let t=class extends h(d){constructor(e){super(e),this.layerViews=new a}set layerViews(e){this._set("layerViews",n(e,this._get("layerViews")))}get updatingProgress(){return this.layerViews.length===0?1:this.layerViews.reduce((e,r)=>e+r.updatingProgress,0)/this.layerViews.length}attach(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",()=>this._updateStageChildren()))}detach(){this.container.removeAllChildren()}update(e){}moveStart(){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((e,r)=>this.container.addChildAt(e.container,r))}};i([s({cast:o})],t.prototype,"layerViews",null),i([s({readOnly:!0})],t.prototype,"updatingProgress",null),t=i([l("esri.views.2d.layers.KnowledgeGraphLayerView2D")],t);const f=t;export{f as default};
