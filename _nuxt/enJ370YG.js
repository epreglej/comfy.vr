import{R as H}from"./Cos6VTb9.js";function I(z,O){for(var k=0;k<O.length;k++){const M=O[k];if(typeof M!="string"&&!Array.isArray(M)){for(const c in M)if(c!=="default"&&!(c in z)){const l=Object.getOwnPropertyDescriptor(M,c);l&&Object.defineProperty(z,c,l.get?l:{enumerable:!0,get:()=>M[c]})}}}return Object.freeze(Object.defineProperty(z,Symbol.toStringTag,{value:"Module"}))}var D={exports:{}};(function(z){(function(O){z.exports?(O.default=O,z.exports=O):O(typeof Highcharts<"u"?Highcharts:void 0)})(function(O){var k=O?O._modules:{};function M(c,l,t,o){c.hasOwnProperty(l)||(c[l]=o.apply(null,t),typeof CustomEvent=="function"&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:l,module:c[l]}})))}M(k,"Series/Organization/OrganizationPoint.js",[k["Core/Series/SeriesRegistry.js"],k["Core/Utilities.js"]],function(c,l){let{sankey:{prototype:{pointClass:t}}}=c.seriesTypes,{defined:o,find:f,pick:i}=l;return class extends t{constructor(s,a,y){super(s,a,y),this.isNode||(this.dataLabelOnNull=!0,this.formatPrefix="link")}getSum(){return 1}setNodeColumn(){super.setNodeColumn();let s=this,a=s.getFromNode().fromNode;if(!o(s.options.column)&&s.linksTo.length!==0&&a&&a.options.layout==="hanging"){let y=-1,m;s.options.layout=i(s.options.layout,"hanging"),s.hangsFrom=a,f(a.linksFrom,(d,L)=>{let w=d.toNode===s;return w&&(y=L),w});for(let d=0;d<a.linksFrom.length;++d)(m=a.linksFrom[d]).toNode.id===s.id?d=a.linksFrom.length:y+=function L(w){let e=w.linksFrom.length;return w.linksFrom.forEach(h=>{h.id===h.toNode.linksTo[0].id?e+=L(h.toNode):e--}),e}(m.toNode);s.column=(s.column||0)+y}}}}),M(k,"Series/Organization/OrganizationSeriesDefaults.js",[],function(){return{borderColor:"#666666",borderRadius:3,link:{color:"#666666",lineWidth:1,radius:10,type:"default"},borderWidth:1,dataLabels:{nodeFormatter:function(){let c={width:"100%",height:"100%",display:"flex","flex-direction":"row","align-items":"center","justify-content":"center"},l={"max-height":"100%","border-radius":"50%"},t={width:"100%",padding:0,"text-align":"center","white-space":"normal"};function o(y){return Object.keys(y).reduce(function(m,d){return m+d+":"+y[d]+";"},'style="')+'"'}let{description:f,image:i,title:s}=this.point;i&&(l["max-width"]="30%",t.width="70%"),this.series.chart.renderer.forExport&&(c.display="block",t.position="absolute",t.left=i?"30%":0,t.top=0);let a="<div "+o(c)+">";return i&&(a+='<img src="'+i+'" '+o(l)+">"),a+="<div "+o(t)+">",this.point.name&&(a+="<h4 "+o({margin:0})+">"+this.point.name+"</h4>"),s&&(a+="<p "+o({margin:0})+">"+(s||"")+"</p>"),f&&(a+="<p "+o({opacity:.75,margin:"5px"})+">"+f+"</p>"),a+="</div></div>"},style:{fontWeight:"normal",fontSize:"0.9em"},useHTML:!0,linkTextPath:{attributes:{startOffset:"95%",textAnchor:"end"}}},hangingIndent:20,hangingIndentTranslation:"inherit",hangingSide:"left",minNodeLength:10,nodeWidth:50,tooltip:{nodeFormat:"{point.name}<br>{point.title}<br>{point.description}"}}}),M(k,"Series/PathUtilities.js",[],function(){function c(l,t){let o=[];for(let f=0;f<l.length;f++){let i=l[f][1],s=l[f][2];if(typeof i=="number"&&typeof s=="number")if(f===0)o.push(["M",i,s]);else if(f===l.length-1)o.push(["L",i,s]);else if(t){let a=l[f-1],y=l[f+1];if(a&&y){let m=a[1],d=a[2],L=y[1],w=y[2];if(typeof m=="number"&&typeof L=="number"&&typeof d=="number"&&typeof w=="number"&&m!==L&&d!==w){let e=m<L?1:-1,h=d<w?1:-1;o.push(["L",i-e*Math.min(Math.abs(i-m),t),s-h*Math.min(Math.abs(s-d),t)],["C",i,s,i,s,i+e*Math.min(Math.abs(i-L),t),s+h*Math.min(Math.abs(s-w),t)])}}}else o.push(["L",i,s])}return o}return{applyRadius:c,getLinkPath:{default:function(l){let{x1:t,y1:o,x2:f,y2:i,width:s=0,inverted:a=!1,radius:y,parentVisible:m}=l;return m?c([["M",t,o],["L",t+s*(a?-.5:.5),o],["L",t+s*(a?-.5:.5),i],["L",f,i]],y):[["M",t,o],["L",t,o],["C",t,o,t,i,t,i],["L",t,i],["C",t,o,t,i,t,i],["L",t,i]]},straight:function(l){let{x1:t,y1:o,x2:f,y2:i,width:s=0,inverted:a=!1,parentVisible:y}=l;return y?[["M",t,o],["L",t+s*(a?-1:1),i],["L",f,i]]:[["M",t,o],["L",t,i],["L",t,i]]},curved:function(l){let{x1:t,y1:o,x2:f,y2:i,offset:s=0,width:a=0,inverted:y=!1,parentVisible:m}=l;return m?[["M",t,o],["C",t+s,o,t-s+a*(y?-1:1),i,t+a*(y?-1:1),i],["L",f,i]]:[["M",t,o],["C",t,o,t,i,t,i],["L",f,i]]}}}}),M(k,"Series/Organization/OrganizationSeries.js",[k["Series/Organization/OrganizationPoint.js"],k["Series/Organization/OrganizationSeriesDefaults.js"],k["Core/Series/SeriesRegistry.js"],k["Series/PathUtilities.js"],k["Core/Utilities.js"]],function(c,l,t,o,f){let{sankey:i}=t.seriesTypes,{css:s,extend:a,isNumber:y,merge:m,pick:d}=f;class L extends i{alignDataLabel(e,h,u){let p=e.shapeArgs;if(u.useHTML&&p){let r=this.options.borderWidth+2*this.options.dataLabels.padding,g=p.width||0,n=p.height||0;this.chart.inverted&&(g=n,n=p.width||0),n-=r,g-=r;let v=h.text;v&&(s(v.element.parentNode,{width:g+"px",height:n+"px"}),s(v.element,{left:0,top:0,width:"100%",height:"100%",overflow:"hidden"})),h.getBBox=()=>({width:g,height:n,x:0,y:0}),h.width=g,h.height=n}super.alignDataLabel.apply(this,arguments)}createNode(e){let h=super.createNode.call(this,e);return h.getSum=()=>1,h}pointAttribs(e,h){let u=i.prototype.pointAttribs.call(this,e,h),p=e.isNode?e.level:e.fromNode.level,r=this.mapOptionsToLevel[p||0]||{},g=e.options,n=r.states&&r.states[h]||{},v=d(n.borderRadius,g.borderRadius,r.borderRadius,this.options.borderRadius),W=d(n.linkColor,g.linkColor,r.linkColor,this.options.linkColor,n.link&&n.link.color,g.link&&g.link.color,r.link&&r.link.color,this.options.link&&this.options.link.color),C=d(n.linkLineWidth,g.linkLineWidth,r.linkLineWidth,this.options.linkLineWidth,n.link&&n.link.lineWidth,g.link&&g.link.lineWidth,r.link&&r.link.lineWidth,this.options.link&&this.options.link.lineWidth),b=d(n.linkOpacity,g.linkOpacity,r.linkOpacity,this.options.linkOpacity,n.link&&n.link.linkOpacity,g.link&&g.link.linkOpacity,r.link&&r.link.linkOpacity,this.options.link&&this.options.link.linkOpacity);return e.isNode?y(v)&&(u.r=v):(u.stroke=W,u["stroke-width"]=C,u.opacity=b,delete u.fill),u}translateLink(e){let h=this.chart,u=this.options,p=e.fromNode,r=e.toNode,g=d(u.linkLineWidth,u.link.lineWidth),n=Math.round(g)%2/2,v=d(u.link.offset,.5),W=d(e.options.link&&e.options.link.type,u.link.type);if(p.shapeArgs&&r.shapeArgs){let C=u.hangingIndent,b=u.hangingSide==="right",T=r.options.offset,x=/%$/.test(T)&&parseInt(T,10),P=h.inverted,j=Math.floor((p.shapeArgs.x||0)+(p.shapeArgs.width||0))+n,S=Math.floor((p.shapeArgs.y||0)+(p.shapeArgs.height||0)/2)+n,A=Math.floor(r.shapeArgs.x||0)+n,N=Math.floor((r.shapeArgs.y||0)+(r.shapeArgs.height||0)/2)+n,F;if(P&&(j-=p.shapeArgs.width||0,A+=r.shapeArgs.width||0),F=this.colDistance?Math.floor(A+(P?1:-1)*(this.colDistance-this.nodeWidth)/2)+n:Math.floor((A+j)/2)+n,x&&(x>=50||x<=-50)&&(F=A=Math.floor(A+(P?-.5:.5)*(r.shapeArgs.width||0))+n,N=r.shapeArgs.y||0,x>0&&(N+=r.shapeArgs.height||0)),r.hangsFrom===p&&(h.inverted?(S=b?Math.floor((p.shapeArgs.y||0)+C/2)+n:Math.floor((p.shapeArgs.y||0)+(p.shapeArgs.height||0)-C/2)+n,N=b?(r.shapeArgs.y||0)+C/2:(r.shapeArgs.y||0)+(r.shapeArgs.height||0)):S=Math.floor((p.shapeArgs.y||0)+C/2)+n,F=A=Math.floor((r.shapeArgs.x||0)+(r.shapeArgs.width||0)/2)+n),e.plotX=F,e.plotY=(S+N)/2,e.shapeType="path",W==="straight")e.shapeArgs={d:[["M",j,S],["L",A,N]]};else if(W==="curved"){let R=Math.abs(A-j)*v*(P?-1:1);e.shapeArgs={d:[["M",j,S],["C",j+R,S,A-R,N,A,N]]}}else e.shapeArgs={d:o.applyRadius([["M",j,S],["L",F,S],["L",F,N],["L",A,N]],d(u.linkRadius,u.link.radius))};e.dlBox={x:(j+A)/2,y:(S+N)/2,height:g,width:0}}}translateNode(e,h){super.translateNode(e,h);let u=this.chart,p=this.options,r=Math.max(Math.round(e.getSum()*this.translationFactor),p.minLinkWidth||0),g=p.hangingSide==="right",n=p.hangingIndent||0,v=p.hangingIndentTranslation,W=p.minNodeLength||10,C=Math.round(this.nodeWidth),b=e.shapeArgs,T=u.inverted?-1:1,x=e.hangsFrom;if(x)if(v==="cumulative")for(b.height-=n,u.inverted&&!g&&(b.y-=T*n);x;)b.y+=(g?1:T)*n,x=x.hangsFrom;else if(v==="shrink")for(;x&&b.height>n+W;)b.height-=n,(!u.inverted||g)&&(b.y+=n),x=x.hangsFrom;else b.height-=n,(!u.inverted||g)&&(b.y+=n);e.nodeHeight=u.inverted?b.width:b.height,e.shapeArgs&&!e.hangsFrom&&(e.shapeArgs=m(e.shapeArgs,{x:(e.shapeArgs.x||0)+C/2-(e.shapeArgs.width||0)/2,y:(e.shapeArgs.y||0)+r/2-(e.shapeArgs.height||0)/2}))}drawDataLabels(){let e=this.options.dataLabels;if(e.linkTextPath&&e.linkTextPath.enabled)for(let h of this.points)h.options.dataLabels=m(h.options.dataLabels,{useHTML:!1});super.drawDataLabels()}}return L.defaultOptions=m(i.defaultOptions,l),a(L.prototype,{pointClass:c}),t.registerSeriesType("organization",L),L}),M(k,"masters/modules/organization.src.js",[k["Core/Globals.js"]],function(c){return c})})})(D);var E=D.exports;const _=H(E),B=I({__proto__:null,default:_},[E]);export{B as o};
