import{a5 as u}from"./De0R8DIU.js";function c(n,e){for(var t=0;t<e.length;t++){const r=e[t];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in n)){const a=Object.getOwnPropertyDescriptor(r,o);a&&Object.defineProperty(n,o,a.get?a:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var l={exports:{}};(function(n){(function(e){n.exports?(e.default=e,n.exports=e):e(typeof Highcharts<"u"?Highcharts:void 0)})(function(e){var t,r,o,a=e?e._modules:{};t="masters/modules/overlapping-datalabels.src.js",r=[a["Core/Globals.js"],a["Extensions/OverlappingDataLabels.js"]],o=function(s,i){return s.OverlappingDataLabels=s.OverlappingDataLabels||i,s.OverlappingDataLabels.compose(s.Chart),s},a.hasOwnProperty(t)||(a[t]=o.apply(null,r),typeof CustomEvent=="function"&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:t,module:a[t]}})))})})(l);var p=l.exports;const f=u(p),d=c({__proto__:null,default:f},[p]);export{d as o};
