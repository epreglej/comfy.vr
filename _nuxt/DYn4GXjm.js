import{R as U}from"./Cos6VTb9.js";function G(m,h){for(var n=0;n<h.length;n++){const u=h[n];if(typeof u!="string"&&!Array.isArray(u)){for(const s in u)if(s!=="default"&&!(s in m)){const i=Object.getOwnPropertyDescriptor(u,s);i&&Object.defineProperty(m,s,i.get?i:{enumerable:!0,get:()=>u[s]})}}}return Object.freeze(Object.defineProperty(m,Symbol.toStringTag,{value:"Module"}))}var X={exports:{}};(function(m){(function(h){m.exports?(h.default=h,m.exports=h):h(typeof Highcharts<"u"?Highcharts:void 0)})(function(h){var n=h?h._modules:{};function u(s,i,P,j){s.hasOwnProperty(i)||(s[i]=j.apply(null,P),typeof CustomEvent=="function"&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:i,module:s[i]}})))}u(n,"Series/DependencyWheel/DependencyWheelPoint.js",[n["Core/Series/SeriesRegistry.js"],n["Core/Utilities.js"]],function(s,i){let{sankey:{prototype:{pointClass:P}}}=s.seriesTypes,{pInt:j,wrap:I}=i;return class extends P{getDataLabelPath(C){var L;let o=this,A=o.series.chart.renderer,g=o.shapeArgs,S=o.angle<0||o.angle>Math.PI,b=g.start||0,M=g.end||0;return o.dataLabelPath?(o.dataLabelPath=o.dataLabelPath.destroy(),delete o.dataLabelPath):I(C,"destroy",function(F){return o.dataLabelPath&&(o.dataLabelPath=o.dataLabelPath.destroy()),F.call(this)}),o.dataLabelPath=A.arc({open:!0,longArc:Math.abs(Math.abs(b)-Math.abs(M))<Math.PI?0:1}).attr({x:g.x,y:g.y,r:(g.r||0)+j(((L=C.options)==null?void 0:L.distance)||0),start:S?b:M,end:S?M:b,clockwise:+S}).add(A.defs),o.dataLabelPath}isValid(){return!0}}}),u(n,"Series/DependencyWheel/DependencyWheelSeriesDefaults.js",[],function(){return{center:[null,null],curveFactor:.6,startAngle:0,dataLabels:{textPath:{enabled:!1,attributes:{dy:5}}}}}),u(n,"Series/DependencyWheel/DependencyWheelSeries.js",[n["Core/Animation/AnimationUtilities.js"],n["Series/DependencyWheel/DependencyWheelPoint.js"],n["Series/DependencyWheel/DependencyWheelSeriesDefaults.js"],n["Core/Globals.js"],n["Series/Sankey/SankeyColumnComposition.js"],n["Core/Series/SeriesRegistry.js"],n["Core/Utilities.js"]],function(s,i,P,j,I,C,o){let{animObject:A}=s,{deg2rad:g}=j,{pie:S,sankey:b}=C.seriesTypes,{extend:M,merge:L,relativeLength:F}=o;class W extends b{animate(l){if(!l){let e=A(this.options.animation).duration/2/this.nodes.length,f=0;for(let a of this.nodes){let d=a.graphic;d&&(d.attr({opacity:0}),setTimeout(()=>{a.graphic&&a.graphic.animate({opacity:1},{duration:e})},e*f++))}for(let a of this.points){let d=a.graphic;!a.isNode&&d&&d.attr({opacity:0}).animate({opacity:1},this.options.animation)}}}createNode(l){let e=super.createNode(l);return e.getSum=()=>e.linksFrom.concat(e.linksTo).reduce((f,a)=>f+a.weight,0),e.offset=f=>{let a=t=>t.fromNode===e?t.toNode:t.fromNode,d=0,c=e.linksFrom.concat(e.linksTo),y;c.sort((t,x)=>a(t).index-a(x).index);for(let t=0;t<c.length;t++)if(a(c[t]).index>e.index){c=c.slice(0,t).reverse().concat(c.slice(t).reverse()),y=!0;break}y||c.reverse();for(let t=0;t<c.length;t++){if(c[t]===f)return d;d+=c[t].weight}},e}createNodeColumns(){let l=[I.compose([],this)];for(let e of this.nodes)e.column=0,l[0].push(e);return l}getNodePadding(){return this.options.nodePadding/Math.PI}translate(){let l=this.options,e=2*Math.PI/(this.chart.plotHeight+this.getNodePadding()),f=this.getCenter(),a=(l.startAngle-90)*g,d=l.borderRadius,c=typeof d=="object"?d.radius:d;for(let y of(super.translate(),this.nodeColumns[0]))if(y.sum){let t=y.shapeArgs,x=f[0],w=f[1],k=f[2]/2,p=k-F((l.nodeWidth==="auto"?20:l.nodeWidth)||0,k),v=a+e*(t.y||0),N=a+e*((t.y||0)+(t.height||0));for(let O of(y.angle=v+(N-v)/2,y.shapeType="arc",y.shapeArgs={x,y:w,r:k,innerR:p,start:v,end:N,borderRadius:c},y.dlBox={x:x+Math.cos((v+N)/2)*(k+p)/2,y:w+Math.sin((v+N)/2)*(k+p)/2,width:1,height:1},y.linksFrom))if(O.linkBase){let T,D,r=O.linkBase.map((B,H)=>{let R=e*B,_=Math.cos(a+R)*(p+1),E=Math.sin(a+R)*(p+1);return T=l.curveFactor||0,(D=Math.abs(O.linkBase[3-H]*e-R))>Math.PI&&(D=2*Math.PI-D),(D*=p)<p&&(T*=D/p),{x:x+_,y:w+E,cpX:x+(1-T)*_,cpY:w+(1-T)*E}});O.shapeArgs={d:[["M",r[0].x,r[0].y],["A",p,p,0,0,1,r[1].x,r[1].y],["C",r[1].cpX,r[1].cpY,r[2].cpX,r[2].cpY,r[2].x,r[2].y],["A",p,p,0,0,1,r[3].x,r[3].y],["C",r[3].cpX,r[3].cpY,r[0].cpX,r[0].cpY,r[0].x,r[0].y]]}}}}}return W.defaultOptions=L(b.defaultOptions,P),M(W.prototype,{orderNodes:!1,getCenter:S.prototype.getCenter}),W.prototype.pointClass=i,C.registerSeriesType("dependencywheel",W),W}),u(n,"masters/modules/dependency-wheel.src.js",[n["Core/Globals.js"]],function(s){return s})})})(X);var Y=X.exports;const $=U(Y),q=G({__proto__:null,default:$},[Y]);export{q as d};
