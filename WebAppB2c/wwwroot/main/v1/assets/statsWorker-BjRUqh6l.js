import{b as f,j as p,x as c}from"./utils-iKWelraE.js";import{f as v,d as z,p as T,C as I,k as y,$ as x,E as V,P as w,U as F}from"./utils-Duvz-2KB.js";import"./appSetting-DUM-gYes.js";import"./quantizationUtils-C_5luNnm.js";import"./heatmapUtils-BONFUB-t.js";import"./vec42-MRs2gDDM.js";import"./vec4f64-CCf6w8sj.js";import"./utils-Blm511q5.js";import"./ClassBreaksDefinition-CCqLBvd8.js";async function $(l){const{attribute:i,features:r}=l,{normalizationType:a,normalizationField:e,minValue:o,maxValue:t,fieldType:n}=i,s=await f({field:i.field,valueExpression:i.valueExpression,normalizationType:a,normalizationField:e,normalizationTotal:i.normalizationTotal,viewInfoParams:i.viewInfoParams,timeZone:i.timeZone,fieldInfos:i.fieldInfos},r),m=v({normalizationType:a,normalizationField:e,minValue:o,maxValue:t}),u={value:.5,fieldType:n},d=n==="esriFieldTypeString"?z({values:s,supportsNullCount:m,percentileParams:u}):T({values:s,minValue:o,maxValue:t,useSampleStdDev:!a,supportsNullCount:m,percentileParams:u});return I(d,n==="esriFieldTypeDate")}async function B(l){const{attribute:i,features:r}=l,a=await f({field:i.field,field2:i.field2,field3:i.field3,fieldDelimiter:i.fieldDelimiter,valueExpression:i.valueExpression,viewInfoParams:i.viewInfoParams,timeZone:i.timeZone,fieldInfos:i.fieldInfos},r,!1),e=y(a);return x(e,i.domains,i.returnAllCodedValues,i.fieldDelimiter)}async function g(l){const{attribute:i,features:r}=l,{field:a,normalizationType:e,normalizationField:o,normalizationTotal:t,classificationMethod:n}=i,s=await f({field:a,valueExpression:i.valueExpression,normalizationType:e,normalizationField:o,normalizationTotal:t,viewInfoParams:i.viewInfoParams,timeZone:i.timeZone,fieldInfos:i.fieldInfos},r),m=V(s,{field:a,normalizationType:e,normalizationField:o,normalizationTotal:t,classificationMethod:n,standardDeviationInterval:i.standardDeviationInterval,numClasses:i.numClasses,minValue:i.minValue,maxValue:i.maxValue});return w(m,n)}async function k(l){const{attribute:i,features:r}=l,{field:a,normalizationType:e,normalizationField:o,normalizationTotal:t,classificationMethod:n}=i,s=await f({field:a,valueExpression:i.valueExpression,normalizationType:e,normalizationField:o,normalizationTotal:t,viewInfoParams:i.viewInfoParams,timeZone:i.timeZone,fieldInfos:i.fieldInfos},r);return F(s,{field:a,normalizationType:e,normalizationField:o,normalizationTotal:t,classificationMethod:n,standardDeviationInterval:i.standardDeviationInterval,numBins:i.numBins,minValue:i.minValue,maxValue:i.maxValue})}async function N(l){const{attribute:i,features:r}=l,{field:a,radius:e,transform:o,spatialReference:t}=i,n=i.size??[0,0],s=p(r??[],o,t,n);return c(s,e??void 0,a,n[0],n[1])}export{g as classBreaks,N as heatmapStatistics,k as histogram,$ as summaryStatistics,B as uniqueValues};