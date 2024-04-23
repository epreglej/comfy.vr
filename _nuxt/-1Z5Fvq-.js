import{a5 as dt}from"./De0R8DIU.js";function ct(M,P){for(var k=0;k<P.length;k++){const L=P[k];if(typeof L!="string"&&!Array.isArray(L)){for(const u in L)if(u!=="default"&&!(u in M)){const x=Object.getOwnPropertyDescriptor(L,u);x&&Object.defineProperty(M,u,x.get?x:{enumerable:!0,get:()=>L[u]})}}}return Object.freeze(Object.defineProperty(M,Symbol.toStringTag,{value:"Module"}))}var F={exports:{}};(function(M){(function(P){M.exports?(P.default=P,M.exports=P):P(typeof Highcharts<"u"?Highcharts:void 0)})(function(P){var k=P?P._modules:{};function L(u,x,W,O){u.hasOwnProperty(x)||(u[x]=O.apply(null,W),typeof CustomEvent=="function"&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:x,module:u[x]}})))}L(k,"Core/Axis/GridAxis.js",[k["Core/Axis/Axis.js"],k["Core/Globals.js"],k["Core/Utilities.js"]],function(u,x,W){var O,A;let{dateFormats:D}=x,{addEvent:p,defined:y,erase:j,find:R,isArray:_,isNumber:w,merge:C,pick:z,timeUnits:$,wrap:G}=W;function I(e){return W.isObject(e,!0)}function U(e,i){let t={width:0,height:0};if(i.forEach(function(s){let r=e[s],h=0,o=0,n;I(r)&&(h=(n=I(r.label)?r.label:{}).getBBox?n.getBBox().height:0,n.textStr&&!w(n.textPxLength)&&(n.textPxLength=n.getBBox().width),o=w(n.textPxLength)?Math.round(n.textPxLength):0,n.textStr&&(o=Math.round(n.getBBox().width)),t.height=Math.max(h,t.height),t.width=Math.max(o,t.width))}),this.options.type==="treegrid"&&this.treeGrid&&this.treeGrid.mapOfPosToGridNode){let s=this.treeGrid.mapOfPosToGridNode[-1].height||0;t.width+=this.options.labels.indentation*(s-1)}return t}function X(e){let{grid:i}=this,t=this.side===3;if(t||e.apply(this),!(i!=null&&i.isColumn)){let s=(i==null?void 0:i.columns)||[];t&&(s=s.slice().reverse()),s.forEach(r=>{r.getOffset()})}t&&e.apply(this)}function q(e){if((this.options.grid||{}).enabled===!0){let{axisTitle:i,height:t,horiz:s,left:r,offset:h,opposite:o,options:n,top:l,width:a}=this,d=this.tickSize(),c=i&&i.getBBox().width,f=n.title.x,m=n.title.y,g=z(n.title.margin,s?5:10),b=i?this.chart.renderer.fontMetrics(i).f:0,v=(s?l+t:r)+(s?1:-1)*(o?-1:1)*(d?d[0]/2:0)+(this.side===O.bottom?b:0);e.titlePosition.x=s?r-(c||0)/2-g+f:v+(o?a:0)+h+f,e.titlePosition.y=s?v-(o?t:0)+(o?b:-b)/2+h+m:l-g+m}}function Y(){let{chart:e,options:{grid:i={}},userOptions:t}=this;if(i.enabled&&function(s){let r=s.options;r.labels.align=z(r.labels.align,"center"),s.categories||(r.showLastLabel=!1),s.labelRotation=0,r.labels.rotation=0,r.minTickInterval=1}(this),i.columns){let s=this.grid.columns=[],r=this.grid.columnIndex=0;for(;++r<i.columns.length;){let h=C(t,i.columns[r],{isInternal:!0,linkedTo:0,scrollbar:{enabled:!1}},{grid:{columns:void 0}}),o=new u(this.chart,h,"yAxis");o.grid.isColumn=!0,o.grid.columnIndex=r,j(e.axes,o),j(e[this.coll]||[],o),s.push(o)}}}function J(){let{axisTitle:e,grid:i,options:t}=this;if((t.grid||{}).enabled===!0){let s=this.min||0,r=this.max||0,h=this.ticks[this.tickPositions[0]];if(e&&!this.chart.styledMode&&(h!=null&&h.slotWidth)&&!this.options.title.style.width&&e.css({width:`${h.slotWidth}px`}),this.maxLabelDimensions=this.getMaxLabelDimensions(this.ticks,this.tickPositions),this.rightWall&&this.rightWall.destroy(),this.grid&&this.grid.isOuterAxis()&&this.axisLine){let o=t.lineWidth;if(o){let n=this.getLinePath(o),l=n[0],a=n[1],d=((this.tickSize("tick")||[1])[0]-1)*(this.side===O.top||this.side===O.left?-1:1);if(l[0]==="M"&&a[0]==="L"&&(this.horiz?(l[2]+=d,a[2]+=d):(l[1]+=d,a[1]+=d)),!this.horiz&&this.chart.marginRight){let c=["L",this.left,l[2]||0],f=[l,c],m=["L",this.chart.chartWidth-this.chart.marginRight,this.toPixels(r+this.tickmarkOffset)],g=[["M",a[1]||0,this.toPixels(r+this.tickmarkOffset)],m];this.grid.upperBorder||s%1==0||(this.grid.upperBorder=this.grid.renderBorder(f)),this.grid.upperBorder&&(this.grid.upperBorder.attr({stroke:t.lineColor,"stroke-width":t.lineWidth}),this.grid.upperBorder.animate({d:f})),this.grid.lowerBorder||r%1==0||(this.grid.lowerBorder=this.grid.renderBorder(g)),this.grid.lowerBorder&&(this.grid.lowerBorder.attr({stroke:t.lineColor,"stroke-width":t.lineWidth}),this.grid.lowerBorder.animate({d:g}))}this.grid.axisLineExtra?(this.grid.axisLineExtra.attr({stroke:t.lineColor,"stroke-width":t.lineWidth}),this.grid.axisLineExtra.animate({d:n})):this.grid.axisLineExtra=this.grid.renderBorder(n),this.axisLine[this.showAxis?"show":"hide"]()}}if((i&&i.columns||[]).forEach(o=>o.render()),!this.horiz&&this.chart.hasRendered&&(this.scrollbar||this.linkedParent&&this.linkedParent.scrollbar)&&this.tickPositions.length){let o,n,l=this.tickmarkOffset,a=this.tickPositions[this.tickPositions.length-1],d=this.tickPositions[0];for(;(o=this.hiddenLabels.pop())&&o.element;)o.show();for(;(n=this.hiddenMarks.pop())&&n.element;)n.show();(o=this.ticks[d].label)&&(s-d>l?this.hiddenLabels.push(o.hide()):o.show()),(o=this.ticks[a].label)&&(a-r>l?this.hiddenLabels.push(o.hide()):o.show());let c=this.ticks[a].mark;c&&a-r<l&&a-r>0&&this.ticks[a].isLast&&this.hiddenMarks.push(c.hide())}}}function K(){let e=this.tickPositions&&this.tickPositions.info,i=this.options,t=i.grid||{},s=this.userOptions.labels||{};t.enabled&&(this.horiz?(this.series.forEach(r=>{r.options.pointRange=0}),e&&i.dateTimeLabelFormats&&i.labels&&!y(s.align)&&(i.dateTimeLabelFormats[e.unitName].range===!1||e.count>1)&&(i.labels.align="left",y(s.x)||(i.labels.x=3))):this.options.type!=="treegrid"&&this.grid&&this.grid.columns&&(this.minPointOffset=this.tickInterval))}function Q(e){let i,t=this.options,s=e.userOptions,r=t&&I(t.grid)?t.grid:{};r.enabled===!0&&(i=C(!0,{className:"highcharts-grid-axis "+(s.className||""),dateTimeLabelFormats:{hour:{list:["%H:%M","%H"]},day:{list:["%A, %e. %B","%a, %e. %b","%E"]},week:{list:["Week %W","W%W"]},month:{list:["%B","%b","%o"]}},grid:{borderWidth:1},labels:{padding:2,style:{fontSize:"0.9em"}},margin:0,title:{text:null,reserveSpace:!1,rotation:0,style:{textOverflow:"ellipsis"}},units:[["millisecond",[1,10,100]],["second",[1,10]],["minute",[1,5,15]],["hour",[1,6]],["day",[1]],["week",[1]],["month",[1]],["year",null]]},s),this.coll!=="xAxis"||(y(s.linkedTo)&&!y(s.tickPixelInterval)&&(i.tickPixelInterval=350),!(!y(s.tickPixelInterval)&&y(s.linkedTo))||y(s.tickPositioner)||y(s.tickInterval)||y(s.units)||(i.tickPositioner=function(h,o){let n=this.linkedParent&&this.linkedParent.tickPositions&&this.linkedParent.tickPositions.info;if(n){let l=i.units||[],a,d=1,c="year";for(let g=0;g<l.length;g++){let b=l[g];if(b&&b[0]===n.unitName){a=g;break}}let f=w(a)&&l[a+1];if(f){c=f[0]||"year";let g=f[1];d=g&&g[0]||1}else n.unitName==="year"&&(d=10*n.count);let m=$[c];return this.tickInterval=m*d,this.chart.time.getTimeTicks({unitRange:m,count:d,unitName:c},h,o,this.options.startOfWeek)}})),C(!0,this.options,i),this.horiz&&(t.minPadding=z(s.minPadding,0),t.maxPadding=z(s.maxPadding,0)),w(t.grid.borderWidth)&&(t.tickWidth=t.lineWidth=r.borderWidth))}function V(e){let i=e.userOptions,t=i&&i.grid||{},s=t.columns;t.enabled&&s&&C(!0,this.options,s[0])}function Z(){(this.grid.columns||[]).forEach(e=>e.setScale())}function tt(e){let{horiz:i,maxLabelDimensions:t,options:{grid:s={}}}=this;if(s.enabled&&t){let r=2*this.options.labels.distance,h=i?s.cellHeight||r+t.height:r+t.width;_(e.tickSize)?e.tickSize[0]=h:e.tickSize=[h,0]}}function it(){this.axes.forEach(e=>{(e.grid&&e.grid.columns||[]).forEach(i=>{i.setAxisSize(),i.setAxisTranslation()})})}function et(e){let{grid:i}=this;(i.columns||[]).forEach(t=>t.destroy(e.keepEvents)),i.columns=void 0}function st(e){let i=e.userOptions||{},t=i.grid||{};t.enabled&&y(t.borderColor)&&(i.tickColor=i.lineColor=t.borderColor),this.grid||(this.grid=new lt(this)),this.hiddenLabels=[],this.hiddenMarks=[]}function rt(e){let i=this.label,t=this.axis,s=t.reversed,r=t.chart,h=t.options.grid||{},o=t.options.labels,n=o.align,l=O[t.side],a=e.tickmarkOffset,d=t.tickPositions,c=this.pos-a,f=w(d[e.index+1])?d[e.index+1]-a:(t.max||0)+a,m=t.tickSize("tick"),g=m?m[0]:0,b=m?m[1]/2:0;if(h.enabled===!0){let v,E,B,S;if(l==="top"?E=(v=t.top+t.offset)-g:l==="bottom"?v=(E=r.chartHeight-t.bottom+t.offset)+g:(v=t.top+t.len-(t.translate(s?f:c)||0),E=t.top+t.len-(t.translate(s?c:f)||0)),l==="right"?S=(B=r.chartWidth-t.right+t.offset)+g:l==="left"?B=(S=t.left+t.offset)-g:(B=Math.round(t.left+(t.translate(s?f:c)||0))-b,S=Math.min(Math.round(t.left+(t.translate(s?c:f)||0))-b,t.left+t.len)),this.slotWidth=S-B,e.pos.x=n==="left"?B:n==="right"?S:B+(S-B)/2,e.pos.y=E+(v-E)/2,i){let T=r.renderer.fontMetrics(i),N=i.getBBox().height;if(o.useHTML)e.pos.y+=T.b+-(N/2);else{let at=Math.round(N/T.h);e.pos.y+=(T.b-(T.h-T.f))/2+-((at-1)*T.h/2)}}e.pos.x+=t.horiz&&o.x||0}}function ot(e){let{axis:i,value:t}=e;if(i.options.grid&&i.options.grid.enabled){let s,r=i.tickPositions,h=(i.linkedParent||i).series[0],o=t===r[0],n=t===r[r.length-1],l=h&&R(h.options.data,function(a){return a[i.isXAxis?"x":"y"]===t});l&&h.is("gantt")&&(s=C(l),x.seriesTypes.gantt.prototype.pointClass.setGanttPointAliases(s)),e.isFirst=o,e.isLast=n,e.point=s}}function nt(){let e=this.options,i=e.grid||{},t=this.categories,s=this.tickPositions,r=s[0],h=s[1],o=s[s.length-1],n=s[s.length-2],l=this.linkedParent&&this.linkedParent.min,a=this.linkedParent&&this.linkedParent.max,d=l||this.min,c=a||this.max,f=this.tickInterval,m=w(d)&&d>=r+f&&d<h,g=w(d)&&r<d&&r+f>d,b=w(c)&&o>c&&o-f<c,v=w(c)&&c<=o-f&&c>n;i.enabled===!0&&!t&&(this.isXAxis||this.isLinked)&&((g||m)&&!e.startOnTick&&(s[0]=d),(b||v)&&!e.endOnTick&&(s[s.length-1]=c))}function ht(e){var i;let{options:{grid:t={}}}=this;return t.enabled===!0&&this.categories?this.tickInterval:e.apply(this,(i=arguments,Array.prototype.slice.call(i,1)))}(A=O||(O={}))[A.top=0]="top",A[A.right=1]="right",A[A.bottom=2]="bottom",A[A.left=3]="left";class lt{constructor(i){this.axis=i}isOuterAxis(){var l;let i=this.axis,t=i.chart,s=i.grid.columnIndex,r=((l=i.linkedParent)==null?void 0:l.grid.columns)||i.grid.columns||[],h=s?i.linkedParent:i,o=-1,n=0;return i.side===3&&!t.inverted&&r.length?!i.linkedParent:((t[i.coll]||[]).forEach((a,d)=>{a.side!==i.side||a.options.isInternal||(n=d,a!==h||(o=d))}),n===o&&(!w(s)||r.length===s))}renderBorder(i){let t=this.axis,s=t.chart.renderer,r=t.options,h=s.path(i).addClass("highcharts-axis-line").add(t.axisGroup);return s.styledMode||h.attr({stroke:r.lineColor,"stroke-width":r.lineWidth,zIndex:7}),h}}return D.E=function(e){return this.dateFormat("%a",e,!0).charAt(0)},D.W=function(e){let i=this,t=new this.Date(e);["Hours","Milliseconds","Minutes","Seconds"].forEach(function(o){i.set(o,t,0)});let s=(this.get("Day",t)+6)%7,r=new this.Date(t.valueOf());this.set("Date",r,this.get("Date",t)-s+3);let h=new this.Date(this.get("FullYear",r),0,1);return this.get("Day",h)!==4&&(this.set("Month",t,0),this.set("Date",t,1+(11-this.get("Day",h))%7)),(1+Math.floor((r.valueOf()-h.valueOf())/6048e5)).toString()},{compose:function(e,i,t){return e.keepProps.includes("grid")||(e.keepProps.push("grid"),e.prototype.getMaxLabelDimensions=U,G(e.prototype,"unsquish",ht),G(e.prototype,"getOffset",X),p(e,"init",st),p(e,"afterGetTitlePosition",q),p(e,"afterInit",Y),p(e,"afterRender",J),p(e,"afterSetAxisTranslation",K),p(e,"afterSetOptions",Q),p(e,"afterSetOptions",V),p(e,"afterSetScale",Z),p(e,"afterTickSize",tt),p(e,"trimTicks",nt),p(e,"destroy",et),p(i,"afterSetChartSize",it),p(t,"afterGetLabelPosition",rt),p(t,"labelFormat",ot)),e}}}),L(k,"masters/modules/grid-axis.src.js",[k["Core/Globals.js"],k["Core/Axis/GridAxis.js"]],function(u,x){return x.compose(u.Axis,u.Chart,u.Tick),u})})})(F);var H=F.exports;const gt=dt(H),ut=ct({__proto__:null,default:gt},[H]);export{ut as g};
