import{S as h}from"./CnF9CK4p.js";function S(o,r){for(var t=0;t<r.length;t++){const a=r[t];if(typeof a!="string"&&!Array.isArray(a)){for(const e in a)if(e!=="default"&&!(e in o)){const s=Object.getOwnPropertyDescriptor(a,e);s&&Object.defineProperty(o,e,s.get?s:{enumerable:!0,get:()=>a[e]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}var c={exports:{}};(function(o){(function(r){o.exports?(r.default=r,o.exports=r):r(typeof Highcharts<"u"?Highcharts:void 0)})(function(r){var t=r?r._modules:{};function a(e,s,p,n){e.hasOwnProperty(s)||(e[s]=n.apply(null,p),typeof CustomEvent=="function"&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:s,module:e[s]}})))}a(t,"Series/Streamgraph/StreamgraphSeriesDefaults.js",[],function(){return{fillOpacity:1,lineWidth:0,marker:{enabled:!1},stacking:"stream"}}),a(t,"Series/Streamgraph/StreamgraphSeries.js",[t["Core/Series/SeriesRegistry.js"],t["Series/Streamgraph/StreamgraphSeriesDefaults.js"],t["Core/Utilities.js"]],function(e,s,p){let{areaspline:n}=e.seriesTypes,{merge:g,extend:m}=p;class i extends n{streamStacker(l,u,d){l[0]-=u.total/2,l[1]-=u.total/2,this.stackedYData[d]=l}}return i.defaultOptions=g(n.defaultOptions,s),m(i.prototype,{negStacks:!1}),e.registerSeriesType("streamgraph",i),i}),a(t,"masters/modules/streamgraph.src.js",[t["Core/Globals.js"]],function(e){return e})})})(c);var f=c.exports;const y=h(f),x=S({__proto__:null,default:y},[f]);export{x as s};