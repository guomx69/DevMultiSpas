import{b as s,s as p,d as r,y as a,f as m}from"./appSetting-DUM-gYes.js";import{a as h}from"./BitmapContainer-CuWV8Q03.js";import{m as n,u as d}from"./LayerView-tWafQmVa.js";import{v as c}from"./ExportStrategy-B5WEL2nb.js";import{i as u}from"./RefreshableLayerView-B3nPF9vR.js";import"./WGLContainer-Dku5uj5c.js";import"./definitions-C14Q9bsB.js";import"./LabelMetric-CN4PBax4.js";import"./enums-CYMvjYBC.js";import"./enums-BRqP_wXA.js";import"./Texture-CvxlpfIz.js";import"./Program-4ShQ3Lil.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./ProgramTemplate-DjthLnYW.js";import"./Container-BtCntV2A.js";import"./parser-BPoYkW_l.js";import"./highlightReasons-dQlR3qpb.js";import"./StyleDefinition-pu9RBNlY.js";import"./config-MDUrh2eL.js";import"./earcut-CdtGKAi5.js";import"./featureConversionUtils-0eWMaUya.js";import"./OptimizedGeometry-CQuTPb9g.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./scaleUtils-B607GZsV.js";import"./Bitmap-DafcwHxk.js";let t=class extends u(n(d)){update(e){this._strategy.update(e).catch(i=>{s(i)||p.getLogger(this).error(i)}),this.notifyChange("updating")}attach(){this._bitmapContainer=new h,this.container.addChild(this._bitmapContainer),this._strategy=new c({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(e,i,o){return this.layer.fetchImageBitmap(e,i,o)}async doRefresh(){this.requestUpdate()}isUpdating(){return this._strategy.updating||this.updateRequested}};r([a()],t.prototype,"_strategy",void 0),r([a()],t.prototype,"updating",void 0),t=r([m("esri.views.2d.layers.BaseDynamicLayerView2D")],t);const F=t;export{F as default};
