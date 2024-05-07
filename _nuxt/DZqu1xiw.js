import{a8 as X}from"./veMPqQEa.js";function _(C,S){for(var l=0;l<S.length;l++){const f=S[l];if(typeof f!="string"&&!Array.isArray(f)){for(const u in f)if(u!=="default"&&!(u in C)){const c=Object.getOwnPropertyDescriptor(f,u);c&&Object.defineProperty(C,u,c.get?c:{enumerable:!0,get:()=>f[u]})}}}return Object.freeze(Object.defineProperty(C,Symbol.toStringTag,{value:"Module"}))}var O={exports:{}};(function(C){(function(S){C.exports?(S.default=S,C.exports=S):S(typeof Highcharts<"u"?Highcharts:void 0)})(function(S){var l=S?S._modules:{};function f(u,c,b,L){u.hasOwnProperty(c)||(u[c]=L.apply(null,b),typeof CustomEvent=="function"&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:c,module:u[c]}})))}f(l,"Series/Tilemap/TilemapPoint.js",[l["Core/Axis/Color/ColorAxisComposition.js"],l["Core/Series/SeriesRegistry.js"],l["Core/Utilities.js"]],function(u,c,b){let{series:{prototype:{pointClass:L}},seriesTypes:{heatmap:{prototype:{pointClass:T}}}}=c,{extend:M}=b;class h extends T{haloPath(){return this.series.tileShape.haloPath.apply(this,arguments)}}return M(h.prototype,{setState:L.prototype.setState,setVisible:u.pointSetVisible}),h}),f(l,"Series/Tilemap/TilemapSeriesDefaults.js",[],function(){return{marker:null,states:{hover:{halo:{enabled:!0,size:2,opacity:.5,attributes:{zIndex:3}}}},pointPadding:2,tileShape:"hexagon"}}),f(l,"Series/Tilemap/TilemapShapes.js",[l["Core/Globals.js"],l["Core/Series/SeriesRegistry.js"],l["Core/Utilities.js"]],function(u,c,b){let{noop:L}=u,{heatmap:T,scatter:M}=c.seriesTypes,{clamp:h,pick:w}=b;function A(t,a,e){let r=t.options;return{xPad:-((r.colsize||1)/a),yPad:-((r.rowsize||1)/e)}}return{hexagon:{alignDataLabel:M.prototype.alignDataLabel,getSeriesPadding:function(t){return A(t,3,2)},haloPath:function(t){if(!t)return[];let a=this.tileEdges;return[["M",a.x2-t,a.y1+t],["L",a.x3+t,a.y1+t],["L",a.x4+1.5*t,a.y2],["L",a.x3+t,a.y3-t],["L",a.x2-t,a.y3-t],["L",a.x1-1.5*t,a.y2],["Z"]]},translate:function(){let t,a=this.options,e=this.xAxis,r=this.yAxis,j=a.pointPadding||0,m=(a.colsize||1)/3,P=(a.rowsize||1)/2;for(let i of(this.generatePoints(),this.points)){let d=h(Math.floor(e.len-e.translate(i.x-2*m,0,1,0,1)),-e.len,2*e.len),n=h(Math.floor(e.len-e.translate(i.x-m,0,1,0,1)),-e.len,2*e.len),p=h(Math.floor(e.len-e.translate(i.x+m,0,1,0,1)),-e.len,2*e.len),s=h(Math.floor(e.len-e.translate(i.x+2*m,0,1,0,1)),-e.len,2*e.len),o=h(Math.floor(r.translate(i.y-P,0,1,0,1)),-r.len,2*r.len),g=h(Math.floor(r.translate(i.y,0,1,0,1)),-r.len,2*r.len),y=h(Math.floor(r.translate(i.y+P,0,1,0,1)),-r.len,2*r.len),x=i.pointPadding??j,v=x*Math.abs(n-d)/Math.abs(y-g),D=e.reversed?-v:v,z=e.reversed?-x:x,E=r.reversed?-x:x;i.x%2&&(t=t||Math.round(Math.abs(y-o)/2)*(r.reversed?-1:1),o+=t,g+=t,y+=t),i.plotX=i.clientX=(n+p)/2,i.plotY=g,d+=D+z,n+=z,p-=z,s-=D+z,o-=E,y+=E,i.tileEdges={x1:d,x2:n,x3:p,x4:s,y1:o,y2:g,y3:y},i.shapeType="path",i.shapeArgs={d:[["M",n,o],["L",p,o],["L",s,g],["L",p,y],["L",n,y],["L",d,g],["Z"]]}}this.translateColors()}},diamond:{alignDataLabel:M.prototype.alignDataLabel,getSeriesPadding:function(t){return A(t,2,2)},haloPath:function(t){if(!t)return[];let a=this.tileEdges;return[["M",a.x2,a.y1+t],["L",a.x3+t,a.y2],["L",a.x2,a.y3-t],["L",a.x1-t,a.y2],["Z"]]},translate:function(){let t,a=this.options,e=this.xAxis,r=this.yAxis,j=a.pointPadding||0,m=a.colsize||1,P=(a.rowsize||1)/2;for(let i of(this.generatePoints(),this.points)){let d=h(Math.round(e.len-e.translate(i.x-m,0,1,0,0)),-e.len,2*e.len),n=h(Math.round(e.len-e.translate(i.x+m,0,1,0,0)),-e.len,2*e.len),p=h(Math.round(r.translate(i.y-P,0,1,0,0)),-r.len,2*r.len),s=h(Math.round(r.translate(i.y,0,1,0,0)),-r.len,2*r.len),o=h(Math.round(r.translate(i.y+P,0,1,0,0)),-r.len,2*r.len),g=h(Math.round(e.len-e.translate(i.x,0,1,0,0)),-e.len,2*e.len),y=w(i.pointPadding,j),x=y*Math.abs(g-d)/Math.abs(o-s),v=e.reversed?-x:x,D=r.reversed?-y:y;i.x%2&&(t=Math.abs(o-p)/2*(r.reversed?-1:1),p+=t,s+=t,o+=t),i.plotX=i.clientX=g,i.plotY=s,d+=v,n-=v,p-=D,o+=D,i.tileEdges={x1:d,x2:g,x3:n,y1:p,y2:s,y3:o},i.shapeType="path",i.shapeArgs={d:[["M",g,p],["L",n,s],["L",g,o],["L",d,s],["Z"]]}}this.translateColors()}},circle:{alignDataLabel:M.prototype.alignDataLabel,getSeriesPadding:function(t){return A(t,2,2)},haloPath:function(t){return M.prototype.pointClass.prototype.haloPath.call(this,t+(t&&this.radius))},translate:function(){let t=this.options,a=this.xAxis,e=this.yAxis,r=t.pointPadding||0,j=(t.rowsize||1)/2,m=t.colsize||1,P,i,d,n,p=!1;for(let s of(this.generatePoints(),this.points)){let o=h(Math.round(a.len-a.translate(s.x,0,1,0,0)),-a.len,2*a.len),g=r,y=!1,x=h(Math.round(e.translate(s.y,0,1,0,0)),-e.len,2*e.len);s.pointPadding!==void 0&&(g=s.pointPadding,y=!0,p=!0),(!n||p)&&(d=Math.floor(Math.sqrt((P=Math.abs(h(Math.floor(a.len-a.translate(s.x+m,0,1,0,0)),-a.len,2*a.len)-o))*P+(i=Math.abs(h(Math.floor(e.translate(s.y+j,0,1,0,0)),-e.len,2*e.len)-x))*i)/2),n=Math.min(P,d,i)-g,p&&!y&&(p=!1)),s.x%2&&(x+=i*(e.reversed?-1:1)),s.plotX=s.clientX=o,s.plotY=x,s.radius=n,s.shapeType="circle",s.shapeArgs={x:o,y:x,r:n}}this.translateColors()}},square:{alignDataLabel:T.prototype.alignDataLabel,translate:T.prototype.translate,getSeriesPadding:L,haloPath:T.prototype.pointClass.prototype.haloPath}}}),f(l,"Series/Tilemap/TilemapSeries.js",[l["Core/Globals.js"],l["Core/Series/SeriesRegistry.js"],l["Series/Tilemap/TilemapPoint.js"],l["Series/Tilemap/TilemapSeriesDefaults.js"],l["Series/Tilemap/TilemapShapes.js"],l["Core/Utilities.js"]],function(u,c,b,L,T,M){let{composed:h,noop:w}=u,{column:A,heatmap:t,scatter:a}=c.seriesTypes,{addEvent:e,extend:r,merge:j,pushUnique:m}=M;function P(){if(this.recomputingForTilemap||this.coll==="colorAxis")return;let d=this,n=d.series.map(function(s){return s.getSeriesPixelPadding&&s.getSeriesPixelPadding(d)}).reduce(function(s,o){return(s&&s.padding)>(o&&o.padding)?s:o},void 0)||{padding:0,axisLengthFactor:1},p=Math.round(n.padding*n.axisLengthFactor);n.padding&&(d.len-=p,d.recomputingForTilemap=!0,d.setAxisTranslation(),delete d.recomputingForTilemap,d.minPixelPadding+=n.padding,d.len+=p)}class i extends t{static compose(n){m(h,"TilemapSeries")&&e(n,"afterSetAxisTranslation",P)}alignDataLabel(){return this.tileShape.alignDataLabel.apply(this,arguments)}drawPoints(){for(let n of(A.prototype.drawPoints.call(this),this.points))n.graphic&&n.graphic[this.chart.styledMode?"css":"animate"](this.colorAttribs(n))}getSeriesPixelPadding(n){let p=n.isXAxis,s=this.tileShape.getSeriesPadding(this);if(!s)return{padding:0,axisLengthFactor:1};let o=Math.round(n.translate(p?2*s.xPad:s.yPad,0,1,0,1)),g=Math.round(n.translate(p?s.xPad:0,0,1,0,1));return{padding:(n.single?Math.abs(o-g)/2:Math.abs(o-g))||0,axisLengthFactor:p?2:1.1}}setOptions(){let n=super.setOptions.apply(this,arguments);return this.tileShape=T[n.tileShape],n}translate(){return this.tileShape.translate.apply(this,arguments)}}return i.defaultOptions=j(t.defaultOptions,L),r(i.prototype,{getSymbol:w,markerAttribs:a.prototype.markerAttribs,pointAttribs:A.prototype.pointAttribs,pointClass:b}),c.registerSeriesType("tilemap",i),i}),f(l,"masters/modules/tilemap.src.js",[l["Core/Globals.js"],l["Series/Tilemap/TilemapSeries.js"]],function(u,c){return c.compose(u.Axis),u})})})(O);var F=O.exports;const k=X(F),Z=_({__proto__:null,default:k},[F]);export{Z as t};