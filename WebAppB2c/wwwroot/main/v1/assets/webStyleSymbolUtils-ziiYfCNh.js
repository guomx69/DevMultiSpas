import{F as N,au as U,bY as b,cR as d,cS as D,cT as I,cU as h,cV as S}from"./appSetting-DUM-gYes.js";import{c as T,a as w}from"./devEnvironmentUtils-Blrp8lZ5.js";import{b as P}from"./jsonUtils-DYzUgqNb.js";import{c as v,b as j,p as F,w as A,d as E}from"./styleUtils-DzyC_Q0p.js";function q(t,e,l,a){const n=t.name;return n==null?Promise.reject(new N("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference")):t.styleName&&t.styleName==="Esri2DPointSymbolsStyle"?V(n,e,a):v(t,e,a).then(s=>Q(s,n,e,l,E,a))}function M(t,e){return e.items.find(l=>l.name===t)}function Q(t,e,l,a,n,s){var f,g;const o=(l==null?void 0:l.portal)!=null?l.portal:U.getDefault(),c={portal:o,url:b(t.baseUrl),origin:"portal-item"},m=M(e,t.data);if(!m){const y=`The symbol name '${e}' could not be found`;return Promise.reject(new N("symbolstyleutils:symbol-name-not-found",y,{symbolName:e}))}let i=d(n(m,a),c),u=((f=m.thumbnail)==null?void 0:f.href)??null;const p=(g=m.thumbnail)==null?void 0:g.imageData;T()&&(i=w(i)??"",u=w(u));const O={portal:o,url:b(D(i)),origin:"portal-item"};return j(i,s).then(y=>{const R=a==="cimRef"?F(y.data):y.data,r=P(R,O);if(r&&I(r)){if(u){const x=d(u,c);r.thumbnail=new h({url:x})}else p&&(r.thumbnail=new h({url:`data:image/png;base64,${p}`}));t.styleUrl?r.styleOrigin=new S({portal:l.portal,styleUrl:t.styleUrl,name:e}):t.styleName&&(r.styleOrigin=new S({portal:l.portal,styleName:t.styleName,name:e}))}return r})}function V(t,e,l){const a=A.replaceAll(/\{SymbolName\}/gi,t),n=e.portal!=null?e.portal:U.getDefault();return j(a,l).then(s=>{const o=F(s.data);return P(o,{portal:n,url:b(D(a)),origin:"portal-item"})})}export{Q as fetchSymbolFromStyle,M as getStyleItemFromStyle,q as resolveWebStyleSymbol};
