import{a5 as H}from"./De0R8DIU.js";function M(u,p){for(var n=0;n<p.length;n++){const d=p[n];if(typeof d!="string"&&!Array.isArray(d)){for(const o in d)if(o!=="default"&&!(o in u)){const h=Object.getOwnPropertyDescriptor(d,o);h&&Object.defineProperty(u,o,h.get?h:{enumerable:!0,get:()=>d[o]})}}}return Object.freeze(Object.defineProperty(u,Symbol.toStringTag,{value:"Module"}))}var j={exports:{}};(function(u){(function(p){u.exports?(p.default=p,u.exports=p):p(typeof Highcharts<"u"?Highcharts:void 0)})(function(p){var n=p?p._modules:{};function d(o,h,x,m){o.hasOwnProperty(h)||(o[h]=m.apply(null,x),typeof CustomEvent=="function"&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:h,module:o[h]}})))}d(n,"Series/SeriesOnPointComposition.js",[n["Core/Globals.js"],n["Core/Series/Point.js"],n["Core/Series/Series.js"],n["Core/Series/SeriesRegistry.js"],n["Core/Renderer/SVG/SVGRenderer.js"],n["Core/Utilities.js"]],function(o,h,x,m,E,R){var b;let{composed:v}=o,{bubble:y}=m.seriesTypes,{addEvent:c,defined:l,find:G,isNumber:A,pushUnique:X}=R;return function(S){S.compose=function(f,t){if(X(v,"SeriesOnPoint")){let{chartGetZData:i,seriesAfterInit:e,seriesAfterRender:a,seriesGetCenter:s,seriesShowOrHide:r,seriesTranslate:g}=P.prototype;f.types.pie.prototype.onPointSupported=!0,c(f,"afterInit",e),c(f,"afterRender",a),c(f,"afterGetCenter",s),c(f,"hide",r),c(f,"show",r),c(f,"translate",g),c(t,"beforeRender",i),c(t,"beforeRedraw",i)}return f};class P{constructor(t){this.getRadii=y.prototype.getRadii,this.getRadius=y.prototype.getRadius,this.getPxExtremes=y.prototype.getPxExtremes,this.getZExtremes=y.prototype.getZExtremes,this.chart=t.chart,this.series=t,this.options=t.options.onPoint}drawConnector(){this.connector||(this.connector=this.series.chart.renderer.path().addClass("highcharts-connector-seriesonpoint").attr({zIndex:-1}).add(this.series.markerGroup));let t=this.getConnectorAttributes();t&&this.connector.animate(t)}getConnectorAttributes(){let t=this.series.chart,i=this.options;if(!i)return;let e=i.connectorOptions||{},a=i.position,s=t.get(i.id);if(!(s instanceof h)||!a||!l(s.plotX)||!l(s.plotY))return;let r=l(a.x)?a.x:s.plotX,g=l(a.y)?a.y:s.plotY,Y=r+(a.offsetX||0),z=g+(a.offsetY||0),O=e.width||1,D=e.stroke||this.series.color,k=e.dashstyle,C={d:E.prototype.crispLine([["M",r,g],["L",Y,z]],O,"ceil"),"stroke-width":O};return t.styledMode||(C.stroke=D,C.dashstyle=k),C}seriesAfterInit(){this.onPointSupported&&this.options.onPoint&&(this.bubblePadding=!0,this.useMapGeometry=!0,this.onPoint=new P(this))}seriesAfterRender(){delete this.chart.bubbleZExtremes,this.onPoint&&this.onPoint.drawConnector()}seriesGetCenter(t){let i=this.options.onPoint,e=t.positions;if(i){let s=this.chart.get(i.id);s instanceof h&&l(s.plotX)&&l(s.plotY)&&(e[0]=s.plotX,e[1]=s.plotY);let r=i.position;r&&(l(r.x)&&(e[0]=r.x),l(r.y)&&(e[1]=r.y),r.offsetX&&(e[0]+=r.offsetX),r.offsetY&&(e[1]+=r.offsetY))}let a=this.radii&&this.radii[this.index];A(a)&&(e[2]=2*a),t.positions=e}seriesShowOrHide(){let t=this.chart.series;this.points.forEach(i=>{let e=G(t,a=>{let s=((a.onPoint||{}).options||{}).id;return!!s&&s===i.id});e&&e.setVisible(!e.visible,!1)})}seriesTranslate(){this.onPoint&&(this.onPoint.getRadii(),this.radii=this.onPoint.radii)}chartGetZData(){let t=[];this.series.forEach(i=>{let e=i.options.onPoint;t.push(e&&e.z?e.z:null)}),this.series.forEach(i=>{i.onPoint&&(i.onPoint.zData=i.zData=t)})}}S.Additions=P}(b||(b={})),b}),d(n,"masters/modules/series-on-point.src.js",[n["Core/Globals.js"],n["Series/SeriesOnPointComposition.js"]],function(o,h){return h.compose(o.Series,o.Chart),o})})})(j);var w=j.exports;const Z=H(w),I=M({__proto__:null,default:Z},[w]);export{I as s};
