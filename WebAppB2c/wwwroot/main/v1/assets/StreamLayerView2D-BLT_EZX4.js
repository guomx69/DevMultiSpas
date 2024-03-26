import{d as s,y as o,f as h,g as m,F as l,e4 as _,e as y}from"./appSetting-DUM-gYes.js";import{d as c}from"./FeatureSet-gDsSYk4j.js";import{n as f,X as g}from"./FeatureLayerView2D-De319KJu.js";import{d as v}from"./FeatureEffect-DGuN4xUx.js";import"./diffUtils-BpCpUKfm.js";import"./Container-BtCntV2A.js";import"./parser-BPoYkW_l.js";import"./highlightReasons-dQlR3qpb.js";import"./definitions-C14Q9bsB.js";import"./enums-CYMvjYBC.js";import"./Texture-CvxlpfIz.js";import"./LayerView-tWafQmVa.js";import"./scaleUtils-B607GZsV.js";import"./TechniqueInstance-Draq7a5p.js";import"./UpdateTracking2D-DOYTRP5W.js";import"./TurboLine-D4d17SRS.js";import"./enums-BRqP_wXA.js";import"./earcut-CdtGKAi5.js";import"./GeometryUtils-Cha9F0G8.js";import"./OptimizedGeometry-CQuTPb9g.js";import"./utils-DOMViYRb.js";import"./Rect-CUzevAry.js";import"./LabelMetric-CN4PBax4.js";import"./Program-4ShQ3Lil.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./labelUtils-DgsTKSM5.js";import"./defaultsJSON-CHAaurhX.js";import"./BindType-BmZEZMMh.js";import"./Util-DtwMY4br.js";import"./vec42-MRs2gDDM.js";import"./vec4f64-CCf6w8sj.js";import"./constants-D5zmR9t2.js";import"./TileContainer-DQvaOrab.js";import"./WGLContainer-Dku5uj5c.js";import"./ProgramTemplate-DjthLnYW.js";import"./StyleDefinition-pu9RBNlY.js";import"./config-MDUrh2eL.js";import"./featureConversionUtils-0eWMaUya.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./tileUtils-B7X19rIS.js";import"./lengthUtils-BLMmU1rC.js";import"./sizeVariableUtils-Cmcuvw-4.js";import"./OrderByInfo-D-FWEhA2.js";import"./labelingInfo-BZG9iPQE.js";import"./LabelClass-59hSlBuy.js";import"./jsonUtils-DYzUgqNb.js";import"./heatmapUtils-BONFUB-t.js";import"./SDFHelper-DArwMzFU.js";import"./floatRGBA-CPKuBEWb.js";import"./FeatureCommandQueue-J0RrQ8lO.js";import"./HighlightCounter-BFQTygvC.js";import"./commonProperties--lHJDI2t.js";import"./ElevationInfo-DeafsV1n.js";import"./floorFilterUtils-DZ5C6FQv.js";import"./popupUtils-CY210HJM.js";import"./RefreshableLayerView-B3nPF9vR.js";import"./jsonUtils-ZV493j5L.js";const S=e=>{let t=class extends e{resume(){this._isUserPaused=!1,this.suspended||this._doResume()}pause(){this._isUserPaused=!0,this.suspended||this._doPause()}disconnect(){this._doDisconnect()}connect(){this._doConnect()}clear(){this._doClear()}constructor(...r){super(...r),this._isUserPaused=!1,this.filter=null}get connectionStatus(){return(this._isUserPaused||this.suspended)&&this._streamConnectionStatus==="connected"?"paused":this._streamConnectionStatus}_onSuspendedChange(r){r?this._doPause():this._isUserPaused||this._doResume()}};return s([o()],t.prototype,"_isUserPaused",void 0),s([o({readOnly:!0})],t.prototype,"connectionStatus",null),s([o({type:v})],t.prototype,"filter",void 0),t=s([h("esri.layers.mixins.StreamLayerView")],t),t};let i=class extends S(g){constructor(){super(...arguments),this.pipelineConnectionStatus="disconnected",this.pipelineErrorString=null}initialize(){this.addHandles([m(()=>this.layer.customParameters,e=>this._worker.streamMessenger.updateCustomParameters(e)),this.layer.on("send-message-to-socket",e=>this._worker.streamMessenger.sendMessageToSocket(e)),this.layer.on("send-message-to-client",e=>{this._worker.streamMessenger.sendMessageToClient(e),this._isUserPaused&&"type"in e&&e.type==="clear"&&this.incrementSourceRefreshVersion()}),m(()=>this.layer.purgeOptions,()=>this._update()),m(()=>this.suspended,this._onSuspendedChange.bind(this))],"constructor"),this._doResume()}destroy(){this._doPause()}get connectionError(){return this.pipelineErrorString?new l("stream-controller",this.pipelineErrorString):null}on(e,t){if(Array.isArray(e))return _(e.map(p=>this.on(p,t)));const r=["data-received","message-received"].includes(e);r&&this._worker.streamMessenger.enableEvent(e,!0);const a=super.on(e,t),n=this;return y(()=>{a.remove(),r&&(n._worker.closed||n.hasEventListener(e)||n._worker.streamMessenger.enableEvent(e,!1))})}queryLatestObservations(e,t){var r,a,n;if(!((r=this.layer.timeInfo)!=null&&r.endField||(a=this.layer.timeInfo)!=null&&a.startField||(n=this.layer.timeInfo)!=null&&n.trackIdField))throw new l("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");return f(this._worker.features.executeQueryForLatestObservations(this._cleanUpQuery(e),t).then(p=>{const u=c.fromJSON(p);return u.features.forEach(d=>{d.layer=this.layer,d.sourceLayer=this.layer}),u}),new c({features:[]}))}detach(){super.detach(),this.pipelineConnectionStatus="disconnected"}get _streamConnectionStatus(){return this.pipelineConnectionStatus}_doPause(){this._refreshInterval!=null&&(clearInterval(this._refreshInterval),this._refreshInterval=null)}_doResume(){this._refreshInterval=setInterval(()=>this.incrementSourceRefreshVersion(),this.layer.updateInterval)}_doDisconnect(){this._worker.streamMessenger.disconnect(),this._doPause()}_doConnect(){this._worker.streamMessenger.connect(),this.resume()}_doClear(){this._worker.streamMessenger.clear(),this._refreshInterval==null&&this.incrementSourceRefreshVersion()}_createClientOptions(){const e=super._createClientOptions(),t=this;return{...e,get container(){return t.featureContainer},setProperty:r=>{this.set(r.propertyName,r.value)}}}};s([o()],i.prototype,"pipelineConnectionStatus",void 0),s([o()],i.prototype,"pipelineErrorString",void 0),s([o({readOnly:!0})],i.prototype,"connectionError",null),s([o({readOnly:!0})],i.prototype,"_streamConnectionStatus",null),i=s([h("esri.views.2d.layers.StreamLayerView2D")],i);const ke=i;export{ke as default};