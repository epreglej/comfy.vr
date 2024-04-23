import{a5 as it}from"./De0R8DIU.js";function st(Y,B){for(var u=0;u<B.length;u++){const T=B[u];if(typeof T!="string"&&!Array.isArray(T)){for(const y in T)if(y!=="default"&&!(y in Y)){const c=Object.getOwnPropertyDescriptor(T,y);c&&Object.defineProperty(Y,y,c.get?c:{enumerable:!0,get:()=>T[y]})}}}return Object.freeze(Object.defineProperty(Y,Symbol.toStringTag,{value:"Module"}))}var tt={exports:{}};(function(Y){(function(B){Y.exports?(B.default=B,Y.exports=B):B(typeof Highcharts<"u"?Highcharts:void 0)})(function(B){var u=B?B._modules:{};function T(y,c,l,t){y.hasOwnProperty(c)||(y[c]=t.apply(null,l),typeof CustomEvent=="function"&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:c,module:y[c]}})))}T(u,"Series/PathUtilities.js",[],function(){function y(c,l){let t=[];for(let e=0;e<c.length;e++){let o=c[e][1],r=c[e][2];if(typeof o=="number"&&typeof r=="number")if(e===0)t.push(["M",o,r]);else if(e===c.length-1)t.push(["L",o,r]);else if(l){let h=c[e-1],p=c[e+1];if(h&&p){let n=h[1],m=h[2],b=p[1],f=p[2];if(typeof n=="number"&&typeof b=="number"&&typeof m=="number"&&typeof f=="number"&&n!==b&&m!==f){let L=n<b?1:-1,x=m<f?1:-1;t.push(["L",o-L*Math.min(Math.abs(o-n),l),r-x*Math.min(Math.abs(r-m),l)],["C",o,r,o,r,o+L*Math.min(Math.abs(o-b),l),r+x*Math.min(Math.abs(r-f),l)])}}}else t.push(["L",o,r])}return t}return{applyRadius:y,getLinkPath:{default:function(c){let{x1:l,y1:t,x2:e,y2:o,width:r=0,inverted:h=!1,radius:p,parentVisible:n}=c;return n?y([["M",l,t],["L",l+r*(h?-.5:.5),t],["L",l+r*(h?-.5:.5),o],["L",e,o]],p):[["M",l,t],["L",l,t],["C",l,t,l,o,l,o],["L",l,o],["C",l,t,l,o,l,o],["L",l,o]]},straight:function(c){let{x1:l,y1:t,x2:e,y2:o,width:r=0,inverted:h=!1,parentVisible:p}=c;return p?[["M",l,t],["L",l+r*(h?-1:1),o],["L",e,o]]:[["M",l,t],["L",l,o],["L",l,o]]},curved:function(c){let{x1:l,y1:t,x2:e,y2:o,offset:r=0,width:h=0,inverted:p=!1,parentVisible:n}=c;return n?[["M",l,t],["C",l+r,t,l-r+h*(p?-1:1),o,l+h*(p?-1:1),o],["L",e,o]]:[["M",l,t],["C",l,t,l,o,l,o],["L",e,o]]}}}}),T(u,"Series/Treegraph/TreegraphNode.js",[u["Core/Series/SeriesRegistry.js"]],function(y){let{seriesTypes:{treemap:{prototype:{NodeClass:c}}}}=y;return class extends c{constructor(){super(...arguments),this.mod=0,this.shift=0,this.change=0,this.children=[],this.preX=0,this.hidden=!1,this.wasVisited=!1,this.collapsed=!1}nextLeft(){return this.getLeftMostChild()||this.thread}nextRight(){return this.getRightMostChild()||this.thread}getAncestor(l,t){return l.ancestor.children[0]===this.children[0]?l.ancestor:t}getLeftMostSibling(){let l=this.getParent();if(l){for(let t of l.children)if(t&&t.point.visible)return t}}hasChildren(){let l=this.children;for(let t=0;t<l.length;t++)if(l[t].point.visible)return!0;return!1}getLeftSibling(){let l=this.getParent();if(l){let t=l.children;for(let e=this.relativeXPosition-1;e>=0;e--)if(t[e]&&t[e].point.visible)return t[e]}}getLeftMostChild(){let l=this.children;for(let t=0;t<l.length;t++)if(l[t].point.visible)return l[t]}getRightMostChild(){let l=this.children;for(let t=l.length-1;t>=0;t--)if(l[t].point.visible)return l[t]}getParent(){return this.parentNode}getFirstChild(){let l=this.children;for(let t=0;t<l.length;t++)if(l[t].point.visible)return l[t]}}}),T(u,"Series/Treegraph/TreegraphPoint.js",[u["Core/Series/Point.js"],u["Core/Series/SeriesRegistry.js"],u["Core/Utilities.js"]],function(y,c,l){let{seriesTypes:{treemap:{prototype:{pointClass:t}}}}=c,{addEvent:e,fireEvent:o,merge:r}=l;class h extends t{constructor(){super(...arguments),this.dataLabelOnHidden=!0,this.isLink=!1,this.setState=y.prototype.setState}draw(){super.draw.apply(this,arguments);let n=this.graphic;n&&n.animate({visibility:this.visible?"inherit":"hidden"}),this.renderCollapseButton()}renderCollapseButton(){let n=this.series,m=this.graphic&&this.graphic.parentGroup,b=n.mapOptionsToLevel[this.node.level||0]||{},f=r(n.options.collapseButton,b.collapseButton,this.options.collapseButton),{width:L,height:x,shape:U,style:F}=f,V=this.series.chart,H=this.visible&&(this.collapsed||!f.onlyOnHover||this.state==="hover")?1:0;if(this.shapeArgs)if(this.collapseButtonOptions=f,this.collapseButton)if(this.node.children.length&&f.enabled){let{x:N,y:O}=this.getCollapseBtnPosition(f);this.collapseButton.attr({text:this.collapsed?"+":"-",rotation:V.inverted?90:0,rotationOriginX:L/2,rotationOriginY:x/2,visibility:this.visible?"inherit":"hidden"}).animate({x:N,y:O,opacity:H})}else this.collapseButton.destroy(),delete this.collapseButton;else{if(!this.node.children.length||!f.enabled)return;let{x:N,y:O}=this.getCollapseBtnPosition(f),D=f.fillColor||this.color||"#cccccc";this.collapseButton=V.renderer.label(this.collapsed?"+":"-",N,O,U).attr({height:x-4,width:L-4,padding:2,fill:D,rotation:V.inverted?90:0,rotationOriginX:L/2,rotationOriginY:x/2,stroke:f.lineColor||"#ffffff","stroke-width":f.lineWidth,"text-align":"center",align:"center",zIndex:1,opacity:H,visibility:this.visible?"inherit":"hidden"}).addClass("highcharts-tracker").addClass("highcharts-collapse-button").removeClass("highcharts-no-tooltip").css(r({color:typeof D=="string"?V.renderer.getContrast(D):"#333333"},F)).add(m),this.collapseButton.element.point=this}}toggleCollapse(n){let m=this.series;this.update({collapsed:n??!this.collapsed},!1,void 0,!1),o(m,"toggleCollapse"),m.redraw()}destroy(){this.collapseButton&&(this.collapseButton.destroy(),delete this.collapseButton,this.collapseButton=void 0),this.linkToParent&&(this.linkToParent.destroy(),delete this.linkToParent),super.destroy.apply(this,arguments)}getCollapseBtnPosition(n){let m=this.series.chart.inverted,b=n.width,f=n.height,{x:L=0,y:x=0,width:U=0,height:F=0}=this.shapeArgs||{};return{x:L+n.x+(m?-(.3*f):U+-.3*b),y:x+F/2-f/2+n.y}}}return e(h,"mouseOut",function(){let p=this.collapseButton,n=this.collapseButtonOptions;p&&(n!=null&&n.onlyOnHover)&&!this.collapsed&&p.animate({opacity:0})}),e(h,"mouseOver",function(){var p,n;this.collapseButton&&this.visible&&this.collapseButton.animate({opacity:1},(n=(p=this.series.options.states)==null?void 0:p.hover)==null?void 0:n.animation)}),e(h,"click",function(){this.toggleCollapse()}),h}),T(u,"Series/Treegraph/TreegraphLink.js",[u["Core/Series/Point.js"],u["Core/Utilities.js"],u["Core/Series/SeriesRegistry.js"]],function(y,c,l){let{pick:t,extend:e}=c,{seriesTypes:{column:{prototype:{pointClass:o}}}}=l;return class extends o{constructor(r,h,p,n){super(r,h,p),this.isLink=!0,this.node={},this.formatPrefix="link",this.dataLabelOnNull=!0,this.formatPrefix="link",this.dataLabelOnNull=!0,n&&(this.fromNode=n.node.parentNode.point,this.visible=n.visible,this.toNode=n,this.id=this.toNode.id+"-"+this.fromNode.id)}update(r,h,p,n){let m={id:this.id,formatPrefix:this.formatPrefix};y.prototype.update.call(this,r,!this.isLink&&h,p,n),this.visible=this.toNode.visible,e(this,m),t(h,!0)&&this.series.chart.redraw(p)}}}),T(u,"Series/Treegraph/TreegraphLayout.js",[u["Series/Treegraph/TreegraphNode.js"]],function(y){class c{static createDummyNode(t,e,o){let r=new y;return r.id=t.id+"-"+o,r.ancestor=t,r.children.push(e),r.parent=t.id,r.parentNode=t,r.point=e.point,r.level=e.level-o,r.relativeXPosition=e.relativeXPosition,r.visible=e.visible,t.children[e.relativeXPosition]=r,e.oldParentNode=t,e.relativeXPosition=0,e.parentNode=r,e.parent=r.id,r}calculatePositions(t){let e=t.nodeList;this.resetValues(e);let o=t.tree;o&&(this.calculateRelativeX(o,0),this.beforeLayout(e),this.firstWalk(o),this.secondWalk(o,-o.preX),this.afterLayout(e))}beforeLayout(t){for(let e of t)for(let o of e.children)if(o&&o.level-e.level>1){let r=o.level-e.level-1;for(;r>0;)o=c.createDummyNode(e,o,r),r--}}resetValues(t){for(let e of t)e.mod=0,e.ancestor=e,e.shift=0,e.thread=void 0,e.change=0,e.preX=0}calculateRelativeX(t,e){let o=t.children;for(let r=0,h=o.length;r<h;++r)this.calculateRelativeX(o[r],r);t.relativeXPosition=e}firstWalk(t){let e;if(t.hasChildren()){let o=t.getLeftMostChild();for(let n of t.children)this.firstWalk(n),o=this.apportion(n,o);this.executeShifts(t);let r=t.getLeftMostChild(),h=t.getRightMostChild(),p=(r.preX+h.preX)/2;(e=t.getLeftSibling())?(t.preX=e.preX+1,t.mod=t.preX-p):t.preX=p}else(e=t.getLeftSibling())?(t.preX=e.preX+1,t.mod=t.preX):t.preX=0}secondWalk(t,e){for(let o of(t.yPosition=t.preX+e,t.xPosition=t.level,t.children))this.secondWalk(o,e+t.mod)}executeShifts(t){let e=0,o=0;for(let r=t.children.length-1;r>=0;r--){let h=t.children[r];h.preX+=e,h.mod+=e,o+=h.change,e+=h.shift+o}}apportion(t,e){let o=t.getLeftSibling();if(o){let r=t,h=t,p=o,n=r.getLeftMostSibling(),m=r.mod,b=h.mod,f=p.mod,L=n.mod;for(;p&&p.nextRight()&&r&&r.nextLeft();){p=p.nextRight(),n=n.nextLeft(),r=r.nextLeft(),(h=h.nextRight()).ancestor=t;let x=p.preX+f-(r.preX+m)+1;x>0&&(this.moveSubtree(t.getAncestor(p,e),t,x),m+=x,b+=x),f+=p.mod,m+=r.mod,L+=n.mod,b+=h.mod}p&&p.nextRight()&&!h.nextRight()&&(h.thread=p.nextRight(),h.mod+=f-b),r&&r.nextLeft()&&!n.nextLeft()&&(n.thread=r.nextLeft(),n.mod+=m-L),e=t}return e}moveSubtree(t,e,o){let r=e.relativeXPosition-t.relativeXPosition;e.change-=o/r,e.shift+=o,e.preX+=o,e.mod+=o,t.change+=o/r}afterLayout(t){for(let e of t)e.oldParentNode&&(e.relativeXPosition=e.parentNode.relativeXPosition,e.parent=e.oldParentNode.parent,e.parentNode=e.oldParentNode,delete e.oldParentNode.children[e.relativeXPosition],e.oldParentNode.children[e.relativeXPosition]=e,e.oldParentNode=void 0)}}return c}),T(u,"Series/Treegraph/TreegraphSeriesDefaults.js",[],function(){return{reversed:!1,marker:{radius:10,lineWidth:0,symbol:"circle",fillOpacity:1,states:{}},link:{color:"#666666",lineWidth:1,radius:10,cursor:"default",type:"curved"},collapseButton:{onlyOnHover:!0,enabled:!0,lineWidth:1,x:0,y:0,height:18,width:18,shape:"circle",style:{cursor:"pointer",fontWeight:"bold",fontSize:"1em"}},fillSpace:!1,tooltip:{linkFormat:"{point.fromNode.id} → {point.toNode.id}",pointFormat:"{point.id}"},dataLabels:{defer:!0,linkTextPath:{attributes:{startOffset:"50%"}},enabled:!0,linkFormatter:()=>"",style:{textOverflow:"none"}},nodeDistance:30,nodeWidth:void 0}}),T(u,"Series/Treegraph/TreegraphSeries.js",[u["Series/PathUtilities.js"],u["Core/Series/SeriesRegistry.js"],u["Core/Renderer/SVG/SVGRenderer.js"],u["Series/Treegraph/TreegraphNode.js"],u["Series/Treegraph/TreegraphPoint.js"],u["Series/TreeUtilities.js"],u["Core/Utilities.js"],u["Series/Treegraph/TreegraphLink.js"],u["Series/Treegraph/TreegraphLayout.js"],u["Series/Treegraph/TreegraphSeriesDefaults.js"]],function(y,c,l,t,e,o,r,h,p,n){let{getLinkPath:m}=y,{series:{prototype:b},seriesTypes:{treemap:f,column:L}}=c,{prototype:{symbols:x}}=l,{getLevelOptions:U,getNodeWidth:F}=o,{arrayMax:V,extend:H,merge:N,pick:O,relativeLength:D,splat:Z}=r;class J extends f{constructor(){super(...arguments),this.nodeList=[],this.links=[]}init(){super.init.apply(this,arguments),this.layoutAlgorythm=new p}getLayoutModifiers(){let i=this.chart,a=this,s=i.plotSizeX,g=i.plotSizeY,d=V(this.points.map(X=>X.node.xPosition)),k=1/0,j=-1/0,v=1/0,w=-1/0,R=0,W=0,M=0,C=0;this.points.forEach(X=>{if(this.options.fillSpace&&!X.visible)return;let P=X.node,_=a.mapOptionsToLevel[X.node.level]||{},S=N(this.options.marker,_.marker,X.options.marker),G=S.width??F(this,d),$=D(S.radius||0,Math.min(s,g)),K=S.symbol,q=K!=="circle"&&S.height?D(S.height,g):2*$,Q=K!=="circle"&&G?D(G,s):2*$;P.nodeSizeX=Q,P.nodeSizeY=q,P.xPosition<=k&&(k=P.xPosition,W=Math.max(Q+(S.lineWidth||0),W)),P.xPosition>=j&&(j=P.xPosition,R=Math.max(Q+(S.lineWidth||0),R)),P.yPosition<=v&&(v=P.yPosition,C=Math.max(q+(S.lineWidth||0),C)),P.yPosition>=w&&(w=P.yPosition,M=Math.max(q+(S.lineWidth||0),M))});let z=w===v?1:(g-(C+M)/2)/(w-v),A=w===v?g/2:-z*v+C/2,I=j===k?1:(s-(R+R)/2)/(j-k),E=j===k?s/2:-I*k+W/2;return{ax:I,bx:E,ay:z,by:A}}getLinks(){let i=this,a=[];return this.data.forEach(s=>{let g=i.mapOptionsToLevel[s.node.level||0]||{};if(s.node.parent){let d=N(g,s.options);if(!s.linkToParent||s.linkToParent.destroyed){let k=new i.LinkClass(i,d,void 0,s);s.linkToParent=k}else s.collapsed=O(s.collapsed,(this.mapOptionsToLevel[s.node.level]||{}).collapsed),s.linkToParent.visible=s.linkToParent.toNode.visible;s.linkToParent.index=a.push(s.linkToParent)-1}else s.linkToParent&&(i.links.splice(s.linkToParent.index),s.linkToParent.destroy(),delete s.linkToParent)}),a}buildTree(i,a,s,g,d){let k=this.points[a];return s=k&&k.level||s,super.buildTree.call(this,i,a,s,g,d)}markerAttribs(){return{}}setCollapsedStatus(i,a){let s=i.point;s&&(s.collapsed=O(s.collapsed,(this.mapOptionsToLevel[i.level]||{}).collapsed),s.visible=a,a=a!==!1&&!s.collapsed),i.children.forEach(g=>{this.setCollapsedStatus(g,a)})}drawTracker(){L.prototype.drawTracker.apply(this,arguments),L.prototype.drawTracker.call(this,this.links)}translate(){let i=this.options,a=o.updateRootId(this),s;b.translate.call(this);let g=this.tree=this.getTree();s=this.nodeMap[a],a===""||s&&s.children.length||(this.setRootNode("",!1),a=this.rootNode,s=this.nodeMap[a]),this.mapOptionsToLevel=U({from:s.level+1,levels:i.levels,to:g.height,defaults:{levelIsConstant:this.options.levelIsConstant,colorByPoint:i.colorByPoint}}),this.setCollapsedStatus(g,!0),this.links=this.getLinks(),this.setTreeValues(g),this.layoutAlgorythm.calculatePositions(this),this.layoutModifier=this.getLayoutModifiers(),this.points.forEach(d=>{this.translateNode(d)}),this.points.forEach(d=>{d.linkToParent&&this.translateLink(d.linkToParent)}),i.colorByPoint||this.setColorRecursive(this.tree)}translateLink(i){let a=i.fromNode,s=i.toNode,g=this.options.link.lineWidth,d=Math.round(g)%2/2,k=O(this.options.link.curveFactor,.5),j=O(i.options.link&&i.options.link.type,this.options.link.type);if(a.shapeArgs&&s.shapeArgs){let v=a.shapeArgs.width||0,w=this.chart.inverted,R=Math.floor((a.shapeArgs.y||0)+(a.shapeArgs.height||0)/2)+d,W=Math.floor((s.shapeArgs.y||0)+(s.shapeArgs.height||0)/2)+d,M=Math.floor((a.shapeArgs.x||0)+v)+d,C=Math.floor(s.shapeArgs.x||0)+d;w&&(M-=v,C+=s.shapeArgs.width||0);let z=s.node.xPosition-a.node.xPosition;i.shapeType="path";let A=(Math.abs(C-M)+v)/z-v,I=Math.floor((C+M)/2)+d;i.plotX=I,i.plotY=W,i.shapeArgs={d:m[j]({x1:M,y1:R,x2:C,y2:W,width:A,offset:A*k*(w?-1:1),inverted:w,parentVisible:s.visible,radius:this.options.link.radius})},i.dlBox={x:(M+C)/2,y:(R+W)/2,height:g,width:0},i.tooltipPos=w?[(this.chart.plotSizeY||0)-i.dlBox.y,(this.chart.plotSizeX||0)-i.dlBox.x]:[i.dlBox.x,i.dlBox.y]}}drawNodeLabels(i){let a,s,g=this.mapOptionsToLevel;for(let d of i)s=g[d.node.level],a={style:{}},s&&s.dataLabels&&(a=N(a,s.dataLabels),this.hasDataLabels=()=>!0),d.shapeArgs&&!Z(this.options.dataLabels)[0].style.width&&(a.style.width=d.shapeArgs.width,d.dataLabel&&d.dataLabel.css({width:d.shapeArgs.width+"px"})),d.dlOptions=N(a,d.options.dataLabels);b.drawDataLabels.call(this,i)}alignDataLabel(i,a){let s=i.visible;i.visible=!0,super.alignDataLabel.apply(this,arguments),a.animate({opacity:s===!1?0:1},void 0,function(){s||a.hide()}),i.visible=s}drawDataLabels(){this.options.dataLabels&&(this.options.dataLabels=Z(this.options.dataLabels),this.drawNodeLabels(this.points),b.drawDataLabels.call(this,this.links))}destroy(){if(this.links){for(let i of this.links)i.destroy();this.links.length=0}return b.destroy.apply(this,arguments)}pointAttribs(i,a){let s=i&&this.mapOptionsToLevel[i.node.level||0]||{},g=i&&i.options,d=s.states&&s.states[a]||{};i&&(i.options.marker=N(this.options.marker,s.marker,i.options.marker));let k=O(d&&d.link&&d.link.color,g&&g.link&&g.link.color,s&&s.link&&s.link.color,this.options.link&&this.options.link.color),j=O(d&&d.link&&d.link.lineWidth,g&&g.link&&g.link.lineWidth,s&&s.link&&s.link.lineWidth,this.options.link&&this.options.link.lineWidth),v=b.pointAttribs.call(this,i,a);return i&&(i.isLink&&(v.stroke=k,v["stroke-width"]=j,delete v.fill),i.visible||(v.opacity=0)),v}drawPoints(){f.prototype.drawPoints.apply(this,arguments),L.prototype.drawPoints.call(this,this.links)}translateNode(i){let a=this.chart,s=i.node,g=a.plotSizeY,d=a.plotSizeX,{ax:k,bx:j,ay:v,by:w}=this.layoutModifier,R=k*s.xPosition+j,W=v*s.yPosition+w,M=this.mapOptionsToLevel[s.level]||{},C=N(this.options.marker,M.marker,i.options.marker).symbol,z=s.nodeSizeY,A=s.nodeSizeX,I=this.options.reversed,E=s.x=a.inverted?d-A/2-R:R-A/2,X=s.y=I?W-z/2:g-W-z/2,P=O(i.options.borderRadius,M.borderRadius,this.options.borderRadius),_=x[C||"circle"];if(_===void 0?(i.hasImage=!0,i.shapeType="image",i.imageUrl=C.match(/^url\((.*?)\)$/)[1]):i.shapeType="path",!i.visible&&i.linkToParent){let S=i.linkToParent.fromNode;if(S){let{x:G=0,y:$=0,width:K=0,height:q=0}=S.shapeArgs||{};i.shapeArgs||(i.shapeArgs={}),i.hasImage||H(i.shapeArgs,{d:_(G,$,K,q,P?{r:P}:void 0)}),H(i.shapeArgs,{x:G,y:$}),i.plotX=S.plotX,i.plotY=S.plotY}}else i.plotX=E,i.plotY=X,i.shapeArgs={x:E,y:X,width:A,height:z,cursor:i.node.isLeaf?"default":"pointer"},i.hasImage||(i.shapeArgs.d=_(E,X,A,z,P?{r:P}:void 0));i.tooltipPos=a.inverted?[g-X-z/2,d-E-A/2]:[E+A/2,X]}}return J.defaultOptions=N(f.defaultOptions,n),H(J.prototype,{pointClass:e,NodeClass:t,LinkClass:h}),c.registerSeriesType("treegraph",J),J}),T(u,"masters/modules/treegraph.src.js",[u["Core/Globals.js"]],function(y){return y})})})(tt);var et=tt.exports;const ot=it(et),nt=st({__proto__:null,default:ot},[et]);export{nt as t};
