import{d as a,y as h,f as M,u as S,F as f,aq as $,b as C,s as E,g as q,aF as R}from"./appSetting-DUM-gYes.js";import{a as F}from"./BitmapContainer-CuWV8Q03.js";import{m as U,u as V}from"./LayerView-tWafQmVa.js";import{v as L}from"./ExportStrategy-B5WEL2nb.js";import{i as W}from"./RefreshableLayerView-B3nPF9vR.js";import{j as A}from"./commonProperties--lHJDI2t.js";import{a as H}from"./ExportWMSImageParameters-CIYqnv5i.js";import"./WGLContainer-Dku5uj5c.js";import"./definitions-C14Q9bsB.js";import"./LabelMetric-CN4PBax4.js";import"./enums-CYMvjYBC.js";import"./enums-BRqP_wXA.js";import"./Texture-CvxlpfIz.js";import"./Program-4ShQ3Lil.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./ProgramTemplate-DjthLnYW.js";import"./Container-BtCntV2A.js";import"./parser-BPoYkW_l.js";import"./highlightReasons-dQlR3qpb.js";import"./StyleDefinition-pu9RBNlY.js";import"./config-MDUrh2eL.js";import"./earcut-CdtGKAi5.js";import"./featureConversionUtils-0eWMaUya.js";import"./OptimizedGeometry-CQuTPb9g.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./scaleUtils-B607GZsV.js";import"./Bitmap-DafcwHxk.js";import"./ElevationInfo-DeafsV1n.js";import"./lengthUtils-BLMmU1rC.js";const z=e=>{let t=class extends e{initialize(){this.exportImageParameters=new H({layer:this.layer})}destroy(){this.exportImageParameters=S(this.exportImageParameters)}get exportImageVersion(){var r;return(r=this.exportImageParameters)==null||r.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}async fetchPopupFeaturesAtLocation(r,o){const{layer:s}=this;if(!r)throw new f("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:s});const{popupEnabled:d}=s;if(!d)throw new f("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:d});const i=this.createFetchPopupFeaturesQuery(r);if(!i)return[];const{extent:p,width:n,height:m,x:c,y}=i;if(!(p&&n&&m))throw new f("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:p,width:n,height:m});const g=await s.fetchFeatureInfo(p,n,m,c,y);return $(o),g}};return a([h()],t.prototype,"exportImageParameters",void 0),a([h({readOnly:!0})],t.prototype,"exportImageVersion",null),a([h()],t.prototype,"layer",void 0),a([h(A)],t.prototype,"timeExtent",void 0),t=a([M("esri.layers.mixins.WMSLayerView")],t),t};let u=class extends z(W(U(V))){constructor(){super(...arguments),this.bitmapContainer=new F}supportsSpatialReference(e){return this.layer.serviceSupportsSpatialReference(e)}update(e){this.strategy.update(e).catch(t=>{C(t)||E.getLogger(this).error(t)})}attach(){const{layer:e}=this,{imageMaxHeight:t,imageMaxWidth:r}=e;this.bitmapContainer=new F,this.container.addChild(this.bitmapContainer),this.strategy=new L({container:this.bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:t,imageMaxWidth:r,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.addAttachHandles(q(()=>this.exportImageVersion,()=>this.requestUpdate()))}detach(){this.strategy=S(this.strategy),this.container.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(e){const{view:t,bitmapContainer:r}=this,{x:o,y:s}=e,{spatialReference:d}=t;let i,p=0,n=0;if(r.children.some(g=>{const{width:w,height:v,resolution:b,x:l,y:x}=g,I=l+b*w,P=x-b*v;return o>=l&&o<=I&&s<=x&&s>=P&&(i=new R({xmin:l,ymin:P,xmax:I,ymax:x,spatialReference:d}),p=w,n=v,!0)}),!i)return null;const m=i.width/p,c=Math.round((o-i.xmin)/m),y=Math.round((i.ymax-s)/m);return{extent:i,width:p,height:n,x:c,y}}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,r,o){return this.layer.fetchImageBitmap(e,t,r,{timeExtent:this.timeExtent,...o})}};a([h()],u.prototype,"strategy",void 0),a([h()],u.prototype,"updating",void 0),u=a([M("esri.views.2d.layers.WMSLayerView2D")],u);const yt=u;export{yt as default};