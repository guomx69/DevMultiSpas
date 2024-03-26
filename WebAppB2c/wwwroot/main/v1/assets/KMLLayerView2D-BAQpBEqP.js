import{e0 as G,aA as k,aB as T,U as z,c as D,V as F,g as O,e1 as N,u as S,aF as U,by as W,ay as $,e2 as H,e3 as A,aW as K,dB as J,d as v,y as C,f as Y}from"./appSetting-DUM-gYes.js";import{b as P,g as Q,d as X}from"./kmlUtils-BLW9p83V.js";import{g as Z,f as tt,b as et}from"./Bitmap-DafcwHxk.js";import{a as it}from"./BitmapContainer-CuWV8Q03.js";import{m as at,u as st}from"./LayerView-tWafQmVa.js";import{t as M}from"./GraphicContainer-DpvHKb5W.js";import{$ as R}from"./GraphicsView2D-D5O1oqL0.js";import{C as rt,e as ot}from"./rasterProjectionHelper-BewaQw3A.js";import{a as nt}from"./WGLContainer-Dku5uj5c.js";import{w as lt,o as pt}from"./RenderingContext-KO_NlaOB.js";import{D as E,G as ht,U as mt,X as L}from"./enums-CYMvjYBC.js";import{x as ct}from"./Program-4ShQ3Lil.js";import{c as dt}from"./rasterUtils-Cj-acrAE.js";import{e as q,m as ut}from"./Texture-CvxlpfIz.js";import"./jsonUtils-8UYkkjpY.js";import"./UniqueValueRenderer-DYNfFcJp.js";import"./ColorStop-CXcZflTc.js";import"./diffUtils-BpCpUKfm.js";import"./colorRamps-DGLQfJq7.js";import"./sizeVariableUtils-Cmcuvw-4.js";import"./visualVariableUtils-DyLkiISh.js";import"./lengthUtils-BLMmU1rC.js";import"./jsonUtils-DYzUgqNb.js";import"./styleUtils-DzyC_Q0p.js";import"./LRUCache-dNFQ3tHS.js";import"./Version-bFyzeYy3.js";import"./FieldsIndex-D-DOX7-n.js";import"./UnknownTimeZone-rOmUr5lk.js";import"./OverrideHelper-DITaCURj.js";import"./colorUtils-DMqZP-dB.js";import"./vec42-MRs2gDDM.js";import"./vec4f64-CCf6w8sj.js";import"./utils-DOMViYRb.js";import"./quantizationUtils-C_5luNnm.js";import"./heatmapUtils-BONFUB-t.js";import"./FeatureSet-gDsSYk4j.js";import"./Container-BtCntV2A.js";import"./parser-BPoYkW_l.js";import"./highlightReasons-dQlR3qpb.js";import"./definitions-C14Q9bsB.js";import"./scaleUtils-B607GZsV.js";import"./AGraphicContainer-BW-yr7gP.js";import"./TechniqueInstance-Draq7a5p.js";import"./UpdateTracking2D-DOYTRP5W.js";import"./TurboLine-D4d17SRS.js";import"./enums-BRqP_wXA.js";import"./earcut-CdtGKAi5.js";import"./GeometryUtils-Cha9F0G8.js";import"./OptimizedGeometry-CQuTPb9g.js";import"./Rect-CUzevAry.js";import"./LabelMetric-CN4PBax4.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./labelUtils-DgsTKSM5.js";import"./defaultsJSON-CHAaurhX.js";import"./BindType-BmZEZMMh.js";import"./Util-DtwMY4br.js";import"./constants-D5zmR9t2.js";import"./TileContainer-DQvaOrab.js";import"./FeatureCommandQueue-J0RrQ8lO.js";import"./ProgramTemplate-DjthLnYW.js";import"./vec3f32-nZdmKIgz.js";import"./AttributeStore-lSfRzlhD.js";import"./TimeOnly-BeHjGi75.js";import"./timeSupport-CHHYTJ7O.js";import"./featureConversionUtils-0eWMaUya.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./json-Wa8cmqdu.js";import"./normalizeUtilsSync-Bl4Qo5LP.js";import"./StyleDefinition-pu9RBNlY.js";import"./config-MDUrh2eL.js";import"./webglDeps-DBCDxvlA.js";import"./NestedMap-DgiGbX8E.js";import"./OrderIndependentTransparency-D0wfjx-a.js";import"./basicInterfaces-GbxEOYtk.js";import"./testSVGPremultipliedAlpha-U2PGgHqQ.js";import"./floatRGBA-CPKuBEWb.js";import"./doublePrecisionUtils-B0owpBza.js";class h{constructor(t){if(this._ownsRctx=!1,t)this._ownsRctx=!1,this._rctx=t;else{if(h._instance)return h._instanceRefCount++,h._instance;h._instanceRefCount=1,h._instance=this,this._ownsRctx=!0;const i=document.createElement("canvas"),a=G(i);a.getExtension("OES_texture_float"),this._rctx=new lt(a,{})}const s={applyProjection:!0,bilinear:!1,bicubic:!1},r=pt("raster/reproject","raster/reproject",new Map([["a_position",0]]),s);this._program=this._rctx.programCache.acquire(r.shaders.vertexShader,r.shaders.fragmentShader,r.attributes),this._rctx.useProgram(this._program),this._program.setUniform1f("u_opacity",1),this._program.setUniform1i("u_image",0),this._program.setUniform1i("u_flipY",0),this._program.setUniform1i("u_transformGrid",1),this._quad=new nt(this._rctx,[0,0,1,0,0,1,1,1])}reprojectTexture(t,s,r=!1){const i=k(t.extent,s),a=new T({x:(t.extent.xmax-t.extent.xmin)/t.texture.descriptor.width,y:(t.extent.ymax-t.extent.ymin)/t.texture.descriptor.height,spatialReference:t.extent.spatialReference}),{x:o,y:p}=rt(a,s,t.extent);let n=(o+p)/2;const l=Math.round((i.xmax-i.xmin)/n),u=Math.round((i.ymax-i.ymin)/n);n=(i.width/l+i.height/u)/2;const I=new T({x:n,y:n,spatialReference:i.spatialReference}),_=ot({projectedExtent:i,srcBufferExtent:t.extent,pixelSize:I,hasWrapAround:!0,spacing:[16,16]}),w=dt(this._rctx,_),y=new q(l,u);y.wrapMode=E.CLAMP_TO_EDGE;const m=new ct(this._rctx,y);this._rctx.bindFramebuffer(m),this._rctx.setViewport(0,0,l,u),this._rctx.useProgram(this._program),this._rctx.bindTexture(t.texture,0),this._rctx.bindTexture(w,1),this._quad.bind();const{width:x=0,height:f=0}=t.texture.descriptor;if(this._program.setUniform2f("u_srcImageSize",x,f),this._program.setUniform2fv("u_transformSpacing",_.spacing),this._program.setUniform2fv("u_transformGridSize",_.size),this._program.setUniform2f("u_targetImageSize",l,u),this._quad.draw(),this._quad.unbind(),this._rctx.useProgram(null),this._rctx.bindFramebuffer(null),w.dispose(),r){const{width:c,height:V}=m,g=new ImageData(c??0,V??0);m.readPixels(0,0,c??0,V??0,ht.RGBA,mt.UNSIGNED_BYTE,g.data);const B=m.detachColorTexture(L.COLOR_ATTACHMENT0);return m.dispose(),{texture:B,extent:i,imageData:g}}const b=m.detachColorTexture(L.COLOR_ATTACHMENT0);return m.dispose(),{texture:b,extent:i}}reprojectBitmapData(t,s){const r=Z(t.bitmapData)?tt(t.bitmapData):t.bitmapData,i=new q;i.wrapMode=E.CLAMP_TO_EDGE,i.width=t.bitmapData.width,i.height=t.bitmapData.height;const a=new ut(this._rctx,i,r),o=this.reprojectTexture({texture:a,extent:t.extent},s,!0);o.texture.dispose();const p=document.createElement("canvas"),n=o.imageData;return p.width=n.width,p.height=n.height,p.getContext("2d").putImageData(n,0,0),{bitmapData:p,extent:o.extent}}async loadAndReprojectBitmapData(t,s,r){const i=(await z(t,{responseType:"image"})).data,a=document.createElement("canvas");a.width=i.width,a.height=i.height;const o=a.getContext("2d");o.drawImage(i,0,0);const p=o.getImageData(0,0,a.width,a.height);if(s.spatialReference.equals(r))return{bitmapData:p,extent:s};const n=this.reprojectBitmapData({bitmapData:p,extent:s},r);return{bitmapData:n.bitmapData,extent:n.extent}}destroy(){this._ownsRctx?(h._instanceRefCount--,h._instanceRefCount===0&&(this._quad.dispose(),this._program.dispose(),this._rctx.dispose(),h._instance=null)):(this._quad.dispose(),this._program.dispose())}}h._instanceRefCount=0;class j{constructor(){this.allSublayers=new Map,this.allPoints=[],this.allPolylines=[],this.allPolygons=[],this.allMapImages=[]}}let d=class extends at(st){constructor(){super(...arguments),this._bitmapIndex=new Map,this._mapImageContainer=new it,this._kmlVisualData=new j,this._fetchController=null,this.allVisiblePoints=new D,this.allVisiblePolylines=new D,this.allVisiblePolygons=new D,this.allVisibleMapImages=new F}async hitTest(e,t){var r,i,a;const s=this.layer;return[(r=this._pointsView)==null?void 0:r.hitTest(e),(i=this._polylinesView)==null?void 0:i.hitTest(e),(a=this._polygonsView)==null?void 0:a.hitTest(e)].flat().filter(Boolean).map(o=>(o.layer=s,o.sourceLayer=s,{type:"graphic",graphic:o,layer:s,mapPoint:e}))}update(e){this._polygonsView&&this._polygonsView.processUpdate(e),this._polylinesView&&this._polylinesView.processUpdate(e),this._pointsView&&this._pointsView.processUpdate(e)}attach(){this._fetchController=new AbortController,this.container.addChild(this._mapImageContainer),this._polygonsView=new R({view:this.view,graphics:this.allVisiblePolygons,requestUpdateCallback:()=>this.requestUpdate(),container:new M(this.view.featuresTilingScheme)}),this.container.addChild(this._polygonsView.container),this._polylinesView=new R({view:this.view,graphics:this.allVisiblePolylines,requestUpdateCallback:()=>this.requestUpdate(),container:new M(this.view.featuresTilingScheme)}),this.container.addChild(this._polylinesView.container),this._pointsView=new R({view:this.view,graphics:this.allVisiblePoints,requestUpdateCallback:()=>this.requestUpdate(),container:new M(this.view.featuresTilingScheme)}),this.container.addChild(this._pointsView.container),this.addAttachHandles([this.allVisibleMapImages.on("change",e=>{e.added.forEach(t=>this._addMapImage(t)),e.removed.forEach(t=>this._removeMapImage(t))}),O(()=>this.layer.visibleSublayers,e=>{for(const[t,s]of this._kmlVisualData.allSublayers)s.visibility=0;for(const t of e){const s=this._kmlVisualData.allSublayers.get(t.id);s&&(s.visibility=1)}this._refreshCollections()})]),this._updatingHandles.addPromise(this._fetchService(this._fetchController.signal)),this._imageReprojector=new h}detach(){this._fetchController=N(this._fetchController),this._mapImageContainer.removeAllChildren(),this.container.removeAllChildren(),this._bitmapIndex.clear(),this._polygonsView=S(this._polygonsView),this._polylinesView=S(this._polylinesView),this._pointsView=S(this._pointsView),this._imageReprojector=S(this._imageReprojector)}moveStart(){}viewChange(){this._polygonsView.viewChange(),this._polylinesView.viewChange(),this._pointsView.viewChange()}moveEnd(){}isUpdating(){return this._pointsView.updating||this._polygonsView.updating||this._polylinesView.updating}_addMapImage(e){var t,s;((t=this.view.spatialReference)!=null&&t.isWGS84||(s=this.view.spatialReference)!=null&&s.isWebMercator)&&this._imageReprojector.loadAndReprojectBitmapData(e.href,U.fromJSON(e.extent),this.view.spatialReference).then(r=>{const i=new et(r.bitmapData);i.x=r.extent.xmin,i.y=r.extent.ymax,i.resolution=r.extent.width/r.bitmapData.width,i.rotation=e.rotation,this._mapImageContainer.addChild(i),this._bitmapIndex.set(e,i)})}async _getViewDependentUrl(e,t){const{viewFormat:s,viewBoundScale:r,httpQuery:i}=e;if(s!=null){if(t==null)throw new Error("Loading this network link requires a view state.");let a;if(await W(),r!=null&&r!==1){const c=new U(t.extent);c.expand(r),a=c}else a=t.extent;a=k(a,$.WGS84);const o=k(a,$.WebMercator),p=a.xmin,n=a.xmax,l=a.ymin,u=a.ymax,I=t.size[0]*t.pixelRatio,_=t.size[1]*t.pixelRatio,w=Math.max(o.width,o.height),y={"[bboxWest]":p.toString(),"[bboxEast]":n.toString(),"[bboxSouth]":l.toString(),"[bboxNorth]":u.toString(),"[lookatLon]":a.center.x.toString(),"[lookatLat]":a.center.y.toString(),"[lookatRange]":w.toString(),"[lookatTilt]":"0","[lookatHeading]":t.rotation.toString(),"[lookatTerrainLon]":a.center.x.toString(),"[lookatTerrainLat]":a.center.y.toString(),"[lookatTerrainAlt]":"0","[cameraLon]":a.center.x.toString(),"[cameraLat]":a.center.y.toString(),"[cameraAlt]":w.toString(),"[horizFov]":"60","[vertFov]":"60","[horizPixels]":I.toString(),"[vertPixels]":_.toString(),"[terrainEnabled]":"0","[clientVersion]":H,"[kmlVersion]":"2.2","[clientName]":"ArcGIS API for JavaScript","[language]":"en-US"},m=c=>{for(const V in c){let g;for(g in y)c[V]=c[V].replace(g,y[g])}},x=A(s);m(x);let f={};i!=null&&(f=A(i),m(f));const b=K(e.href);return b.query={...b.query,...x,...f},`${b.path}?${J(x)}`}return e.href}async _fetchService(e){const t=new j;await this._loadVisualData(this.layer.url,t,e),this._kmlVisualData=t,this._refreshCollections()}_refreshCollections(){this.allVisiblePoints.removeAll(),this.allVisiblePolylines.removeAll(),this.allVisiblePolygons.removeAll(),this.allVisibleMapImages.removeAll(),this.allVisiblePoints.addMany(this._kmlVisualData.allPoints.filter(e=>this._isSublayerVisible(e.sublayerId)).map(({item:e})=>e)),this.allVisiblePolylines.addMany(this._kmlVisualData.allPolylines.filter(e=>this._isSublayerVisible(e.sublayerId)).map(({item:e})=>e)),this.allVisiblePolygons.addMany(this._kmlVisualData.allPolygons.filter(e=>this._isSublayerVisible(e.sublayerId)).map(({item:e})=>e)),this.allVisibleMapImages.addMany(this._kmlVisualData.allMapImages.filter(e=>this._isSublayerVisible(e.sublayerId)).map(({item:e})=>e))}_isSublayerVisible(e){const t=this._kmlVisualData.allSublayers.get(e);return!!(t!=null&&t.visibility)&&(t.parentFolderId===-1||this._isSublayerVisible(t.parentFolderId))}_loadVisualData(e,t,s){return this._fetchParsedKML(e,s).then(async r=>{for(const i of r.sublayers){t.allSublayers.set(i.id,i);const a=i.points?await P(i.points):[],o=i.polylines?await P(i.polylines):[],p=i.polygons?await P(i.polygons):[],n=i.mapImages||[];if(t.allPoints.push(...a.map(l=>({item:l,sublayerId:i.id}))),t.allPolylines.push(...o.map(l=>({item:l,sublayerId:i.id}))),t.allPolygons.push(...p.map(l=>({item:l,sublayerId:i.id}))),t.allMapImages.push(...n.map(l=>({item:l,sublayerId:i.id}))),i.networkLink){const l=await this._getViewDependentUrl(i.networkLink,this.view.state);await this._loadVisualData(l,t,s)}}})}_fetchParsedKML(e,t){return Q(e,this.layer.spatialReference,this.layer.refreshInterval,t).then(s=>X(s.data))}_removeMapImage(e){const t=this._bitmapIndex.get(e);t&&(this._mapImageContainer.removeChild(t),this._bitmapIndex.delete(e))}};v([C()],d.prototype,"_pointsView",void 0),v([C()],d.prototype,"_polylinesView",void 0),v([C()],d.prototype,"_polygonsView",void 0),v([C()],d.prototype,"updating",void 0),d=v([Y("esri.views.2d.layers.KMLLayerView2D")],d);const qe=d;export{qe as default};