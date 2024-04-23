import{a5 as Re}from"./De0R8DIU.js";function Be(ce,ae){for(var u=0;u<ae.length;u++){const K=ae[u];if(typeof K!="string"&&!Array.isArray(K)){for(const b in K)if(b!=="default"&&!(b in ce)){const f=Object.getOwnPropertyDescriptor(K,b);f&&Object.defineProperty(ce,b,f.get?f:{enumerable:!0,get:()=>K[b]})}}}return Object.freeze(Object.defineProperty(ce,Symbol.toStringTag,{value:"Module"}))}var Le={exports:{}};(function(ce){(function(ae){ce.exports?(ae.default=ae,ce.exports=ae):ae(typeof Highcharts<"u"?Highcharts:void 0)})(function(ae){var u=ae?ae._modules:{};function K(b,f,w,C){b.hasOwnProperty(f)||(b[f]=C.apply(null,w),typeof CustomEvent=="function"&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:f,module:b[f]}})))}K(u,"Extensions/Breadcrumbs/BreadcrumbsDefaults.js",[],function(){return{lang:{mainBreadcrumb:"Main"},options:{buttonTheme:{fill:"none",height:18,padding:2,"stroke-width":0,zIndex:7,states:{select:{fill:"none"}},style:{color:"#334eff"}},buttonSpacing:5,floating:!1,format:void 0,relativeTo:"plotBox",rtl:!1,position:{align:"left",verticalAlign:"top",x:0,y:void 0},separator:{text:"/",style:{color:"#666666",fontSize:"0.8em"}},showFullPath:!0,style:{},useHTML:!1,zIndex:7}}}),K(u,"Extensions/Breadcrumbs/Breadcrumbs.js",[u["Extensions/Breadcrumbs/BreadcrumbsDefaults.js"],u["Core/Templating.js"],u["Core/Globals.js"],u["Core/Utilities.js"]],function(b,f,w,C){let{format:j}=f,{composed:B}=w,{addEvent:k,defined:T,extend:O,fireEvent:v,isString:h,merge:m,objectEach:P,pick:A,pushUnique:E}=C;function G(){if(this.breadcrumbs){let N=this.resetZoomButton&&this.resetZoomButton.getBBox(),a=this.breadcrumbs.options;N&&a.position.align==="right"&&a.relativeTo==="plotBox"&&this.breadcrumbs.alignBreadcrumbsGroup(-N.width-a.buttonSpacing)}}function M(){this.breadcrumbs&&(this.breadcrumbs.destroy(),this.breadcrumbs=void 0)}function z(){let N=this.breadcrumbs;if(N&&!N.options.floating&&N.level){let a=N.options,c=a.buttonTheme,x=(c.height||0)+2*(c.padding||0)+a.buttonSpacing,L=a.position.verticalAlign;L==="bottom"?(this.marginBottom=(this.marginBottom||0)+x,N.yOffset=x):L!=="middle"?(this.plotTop+=x,N.yOffset=-x):N.yOffset=void 0}}function X(){this.breadcrumbs&&this.breadcrumbs.redraw()}function Z(N){N.resetSelection===!0&&this.breadcrumbs&&this.breadcrumbs.alignBreadcrumbsGroup()}class Y{static compose(a,c){E(B,"Breadcrumbs")&&(k(a,"destroy",M),k(a,"afterShowResetZoom",G),k(a,"getMargins",z),k(a,"redraw",X),k(a,"selection",Z),O(c.lang,b.lang))}constructor(a,c){this.elementList={},this.isDirty=!0,this.level=0,this.list=[];let x=m(a.options.drilldown&&a.options.drilldown.drillUpButton,Y.defaultOptions,a.options.navigation&&a.options.navigation.breadcrumbs,c);this.chart=a,this.options=x||{}}updateProperties(a){this.setList(a),this.setLevel(),this.isDirty=!0}setList(a){this.list=a}setLevel(){this.level=this.list.length&&this.list.length-1}getLevel(){return this.level}getButtonText(a){let c=this.chart,x=this.options,L=c.options.lang,q=A(x.format,x.showFullPath?"{level.name}":"← {level.name}"),F=L&&A(L.drillUpText,L.mainBreadcrumb),$=x.formatter&&x.formatter(a)||j(q,{level:a.levelOptions},c)||"";return(h($)&&!$.length||$==="← ")&&T(F)&&($=x.showFullPath?F:"← "+F),$}redraw(){this.isDirty&&this.render(),this.group&&this.group.align(),this.isDirty=!1}render(){let a=this.chart,c=this.options;!this.group&&c&&(this.group=a.renderer.g("breadcrumbs-group").addClass("highcharts-no-tooltip highcharts-breadcrumbs").attr({zIndex:c.zIndex}).add()),c.showFullPath?this.renderFullPathButtons():this.renderSingleButton(),this.alignBreadcrumbsGroup()}renderFullPathButtons(){this.destroySingleButton(),this.resetElementListState(),this.updateListElements(),this.destroyListElements()}renderSingleButton(){let a=this.chart,c=this.list,x=this.options.buttonSpacing;this.destroyListElements();let L=this.group?this.group.getBBox().width:x,q=c[c.length-2];!a.drillUpButton&&this.level>0?a.drillUpButton=this.renderButton(q,L,x):a.drillUpButton&&(this.level>0?this.updateSingleButton():this.destroySingleButton())}alignBreadcrumbsGroup(a){if(this.group){let c=this.options,x=c.buttonTheme,L=c.position,q=c.relativeTo==="chart"||c.relativeTo==="spacingBox"?void 0:"plotBox",F=this.group.getBBox(),$=2*(x.padding||0)+c.buttonSpacing;L.width=F.width+$,L.height=F.height+$;let W=m(L);a&&(W.x+=a),this.options.rtl&&(W.x+=L.width),W.y=A(W.y,this.yOffset,0),this.group.align(W,!0,q)}}renderButton(a,c,x){let L=this,q=this.chart,F=L.options,$=m(F.buttonTheme),W=q.renderer.button(L.getButtonText(a),c,x,function(H){let _,o=F.events&&F.events.click;o&&(_=o.call(L,H,a)),_!==!1&&(F.showFullPath?H.newLevel=a.level:H.newLevel=L.level-1,v(L,"up",H))},$).addClass("highcharts-breadcrumbs-button").add(L.group);return q.styledMode||W.attr(F.style),W}renderSeparator(a,c){let x=this.chart,L=this.options.separator,q=x.renderer.label(L.text,a,c,void 0,void 0,void 0,!1).addClass("highcharts-breadcrumbs-separator").add(this.group);return x.styledMode||q.css(L.style),q}update(a){m(!0,this.options,a),this.destroy(),this.isDirty=!0}updateSingleButton(){let a=this.chart,c=this.list[this.level-1];a.drillUpButton&&a.drillUpButton.attr({text:this.getButtonText(c)})}destroy(){this.destroySingleButton(),this.destroyListElements(!0),this.group&&this.group.destroy(),this.group=void 0}destroyListElements(a){let c=this.elementList;P(c,(x,L)=>{(a||!c[L].updated)&&((x=c[L]).button&&x.button.destroy(),x.separator&&x.separator.destroy(),delete x.button,delete x.separator,delete c[L])}),a&&(this.elementList={})}destroySingleButton(){this.chart.drillUpButton&&(this.chart.drillUpButton.destroy(),this.chart.drillUpButton=void 0)}resetElementListState(){P(this.elementList,a=>{a.updated=!1})}updateListElements(){let a=this.elementList,c=this.options.buttonSpacing,x=this.list,L=this.options.rtl,q=L?-1:1,F=function(o,I){return q*o.getBBox().width+q*I},$=function(o,I,S){o.translate(I-o.getBBox().width,S)},W=this.group?F(this.group,c):c,H,_;for(let o=0,I=x.length;o<I;++o){let S,D,V=o===I-1;a[(_=x[o]).level]?(S=(H=a[_.level]).button,H.separator||V?H.separator&&V&&(H.separator.destroy(),delete H.separator):(W+=q*c,H.separator=this.renderSeparator(W,c),L&&$(H.separator,W,c),W+=F(H.separator,c)),a[_.level].updated=!0):(S=this.renderButton(_,W,c),L&&$(S,W,c),W+=F(S,c),V||(D=this.renderSeparator(W,c),L&&$(D,W,c),W+=F(D,c)),a[_.level]={button:S,separator:D,updated:!0}),S&&S.setState(V?2:0)}}}return Y.defaultOptions=b.options,Y}),K(u,"Series/ColorMapComposition.js",[u["Core/Series/SeriesRegistry.js"],u["Core/Utilities.js"]],function(b,f){var w;let{column:{prototype:C}}=b.seriesTypes,{addEvent:j,defined:B}=f;return function(k){function T(O){this.moveToTopOnHover&&this.graphic&&this.graphic.attr({zIndex:O&&O.state==="hover"?1:0})}k.pointMembers={dataLabelOnNull:!0,moveToTopOnHover:!0,isValid:function(){return this.value!==null&&this.value!==1/0&&this.value!==-1/0&&(this.value===void 0||!isNaN(this.value))}},k.seriesMembers={colorKey:"value",axisTypes:["xAxis","yAxis","colorAxis"],parallelArrays:["x","y","value"],pointArrayMap:["value"],trackerGroups:["group","markerGroup","dataLabelsGroup"],colorAttribs:function(O){let v={};return B(O.color)&&(!O.state||O.state==="normal")&&(v[this.colorProp||"fill"]=O.color),v},pointAttribs:C.pointAttribs},k.compose=function(O){return j(O.prototype.pointClass,"afterSetState",T),O}}(w||(w={})),w}),K(u,"Series/Treemap/TreemapAlgorithmGroup.js",[],function(){return class{constructor(b,f,w,C){this.height=b,this.width=f,this.plot=C,this.direction=w,this.startDirection=w,this.total=0,this.nW=0,this.lW=0,this.nH=0,this.lH=0,this.elArr=[],this.lP={total:0,lH:0,nH:0,lW:0,nW:0,nR:0,lR:0,aspectRatio:function(j,B){return Math.max(j/B,B/j)}}}addElement(b){this.lP.total=this.elArr[this.elArr.length-1],this.total=this.total+b,this.direction===0?(this.lW=this.nW,this.lP.lH=this.lP.total/this.lW,this.lP.lR=this.lP.aspectRatio(this.lW,this.lP.lH),this.nW=this.total/this.height,this.lP.nH=this.lP.total/this.nW,this.lP.nR=this.lP.aspectRatio(this.nW,this.lP.nH)):(this.lH=this.nH,this.lP.lW=this.lP.total/this.lH,this.lP.lR=this.lP.aspectRatio(this.lP.lW,this.lH),this.nH=this.total/this.width,this.lP.nW=this.lP.total/this.nH,this.lP.nR=this.lP.aspectRatio(this.lP.nW,this.nH)),this.elArr.push(b)}reset(){this.nW=0,this.lW=0,this.elArr=[],this.total=0}}}),K(u,"Series/Treemap/TreemapNode.js",[],function(){return class{constructor(){this.childrenTotal=0,this.visible=!1}init(b,f,w,C,j,B,k){return this.id=b,this.i=f,this.children=w,this.height=C,this.level=j,this.series=B,this.parent=k,this}}}),K(u,"Series/DrawPointUtilities.js",[],function(){return{draw:function(b,f){let{animatableAttribs:w,onComplete:C,css:j,renderer:B}=f,k=b.series&&b.series.chart.hasRendered?void 0:b.series&&b.series.options.animation,T=b.graphic;if(f.attribs={...f.attribs,class:b.getClassName()},b.shouldDraw())T||(T=f.shapeType==="text"?B.text():f.shapeType==="image"?B.image(f.imageUrl||"").attr(f.shapeArgs||{}):B[f.shapeType](f.shapeArgs||{}),b.graphic=T,T.add(f.group)),j&&T.css(j),T.attr(f.attribs).animate(w,!f.isNew&&k,C);else if(T){let O=()=>{b.graphic=T=T&&T.destroy(),typeof C=="function"&&C()};Object.keys(w).length?T.animate(w,void 0,()=>O()):O()}}}}),K(u,"Series/Treemap/TreemapPoint.js",[u["Series/DrawPointUtilities.js"],u["Core/Series/SeriesRegistry.js"],u["Core/Utilities.js"]],function(b,f,w){let{pie:{prototype:{pointClass:C}},scatter:{prototype:{pointClass:j}}}=f.seriesTypes,{extend:B,isNumber:k,pick:T}=w;class O extends j{constructor(){super(...arguments),this.shapeType="rect"}draw(h){b.draw(this,h)}getClassName(){let h=this.series,m=h.options,P=super.getClassName();return this.node.level<=h.nodeMap[h.rootNode].level?P+=" highcharts-above-level":this.node.isLeaf||T(m.interactByLeaf,!m.allowTraversingTree)?this.node.isLeaf||(P+=" highcharts-internal-node"):P+=" highcharts-internal-node-interactive",P}isValid(){return!!(this.id||k(this.value))}setState(h){super.setState.apply(this,arguments),this.graphic&&this.graphic.attr({zIndex:h==="hover"?1:0})}shouldDraw(){return k(this.plotY)&&this.y!==null}}return B(O.prototype,{setVisible:C.prototype.setVisible}),O}),K(u,"Series/Treemap/TreemapSeriesDefaults.js",[u["Core/Series/SeriesRegistry.js"],u["Core/Utilities.js"]],function(b,f){let{isString:w}=f;return{allowTraversingTree:!1,animationLimit:250,borderRadius:0,showInLegend:!1,marker:void 0,colorByPoint:!1,dataLabels:{defer:!1,enabled:!0,formatter:function(){let C=this&&this.point?this.point:{};return w(C.name)?C.name:""},inside:!0,verticalAlign:"middle"},tooltip:{headerFormat:"",pointFormat:"<b>{point.name}</b>: {point.value}<br/>"},ignoreHiddenPoint:!0,layoutAlgorithm:"sliceAndDice",layoutStartingDirection:"vertical",alternateStartingDirection:!1,levelIsConstant:!0,traverseUpButton:{position:{align:"right",x:-10,y:10}},borderColor:"#e6e6e6",borderWidth:1,colorKey:"colorValue",opacity:.15,states:{hover:{borderColor:"#999999",brightness:b.seriesTypes.heatmap?0:.1,halo:!1,opacity:.75,shadow:!1}},legendSymbol:"rectangle"}}),K(u,"Series/Treemap/TreemapUtilities.js",[],function(){var b;return(b||(b={})).recursive=function f(w,C,j){let B=C.call(j||this,w);B!==!1&&f(B,C,j)},b}),K(u,"Series/TreeUtilities.js",[u["Core/Color/Color.js"],u["Core/Utilities.js"]],function(b,f){let{extend:w,isArray:C,isNumber:j,isObject:B,merge:k,pick:T,relativeLength:O}=f;return{getColor:function(v,h){let m,P,A,E,G,M,z=h.index,X=h.mapOptionsToLevel,Z=h.parentColor,Y=h.parentColorIndex,N=h.series,a=h.colors,c=h.siblings,x=N.points,L=N.chart.options.chart;return v&&(m=x[v.i],P=X[v.level]||{},m&&P.colorByPoint&&(E=m.index%(a?a.length:L.colorCount),A=a&&a[E]),N.chart.styledMode||(G=T(m&&m.options.color,P&&P.color,A,Z&&(q=>{let F=P&&P.colorVariation;return F&&F.key==="brightness"&&z&&c?b.parse(q).brighten(F.to*(z/c)).get():q})(Z),N.color)),M=T(m&&m.options.colorIndex,P&&P.colorIndex,E,Y,h.colorIndex)),{color:G,colorIndex:M}},getLevelOptions:function(v){let h,m,P,A,E,G,M={};if(B(v))for(A=j(v.from)?v.from:1,G=v.levels,m={},h=B(v.defaults)?v.defaults:{},C(G)&&(m=G.reduce((z,X)=>{let Z,Y,N;return B(X)&&j(X.level)&&(Y=T((N=k({},X)).levelIsConstant,h.levelIsConstant),delete N.levelIsConstant,delete N.level,B(z[Z=X.level+(Y?0:A-1)])?k(!0,z[Z],N):z[Z]=N),z},{})),E=j(v.to)?v.to:1,P=0;P<=E;P++)M[P]=k({},h,B(m[P])?m[P]:{});return M},getNodeWidth:function(v,h){let{chart:m,options:P}=v,{nodeDistance:A=0,nodeWidth:E=0}=P,{plotSizeX:G=1}=m;if(E==="auto"){if(typeof A=="string"&&/%$/.test(A))return G/(h+parseFloat(A)/100*(h-1));let M=Number(A);return(G+M)/(h||1)-M}return O(E,G)},setTreeValues:function v(h,m){let P=m.before,A=m.idRoot,E=m.mapIdToNode[A],G=m.levelIsConstant!==!1,M=m.points[h.i],z=M&&M.options||{},X=[],Z=0;h.levelDynamic=h.level-(G?0:E.level),h.name=T(M&&M.name,""),h.visible=A===h.id||m.visible===!0,typeof P=="function"&&(h=P(h,m)),h.children.forEach((N,a)=>{let c=w({},m);w(c,{index:a,siblings:h.children.length,visible:h.visible}),N=v(N,c),X.push(N),N.visible&&(Z+=N.val)});let Y=T(z.value,Z);return h.visible=Y>=0&&(Z>0||h.visible),h.children=X,h.childrenTotal=Z,h.isLeaf=h.visible&&!Z,h.val=Y,h},updateRootId:function(v){let h,m;return B(v)&&(m=B(v.options)?v.options:{},h=T(v.rootNode,m.rootId,""),B(v.userOptions)&&(v.userOptions.rootId=h),v.rootNode=h),h}}}),K(u,"Series/Treemap/TreemapSeries.js",[u["Extensions/Breadcrumbs/Breadcrumbs.js"],u["Core/Color/Color.js"],u["Series/ColorMapComposition.js"],u["Core/Globals.js"],u["Core/Series/SeriesRegistry.js"],u["Series/Treemap/TreemapAlgorithmGroup.js"],u["Series/Treemap/TreemapNode.js"],u["Series/Treemap/TreemapPoint.js"],u["Series/Treemap/TreemapSeriesDefaults.js"],u["Series/Treemap/TreemapUtilities.js"],u["Series/TreeUtilities.js"],u["Core/Utilities.js"]],function(b,f,w,C,j,B,k,T,O,v,h,m){let{parse:P}=f,{composed:A,noop:E}=C,{column:G,scatter:M}=j.seriesTypes,{getColor:z,getLevelOptions:X,updateRootId:Z}=h,{addEvent:Y,correctFloat:N,defined:a,error:c,extend:x,fireEvent:L,isArray:q,isObject:F,isString:$,merge:W,pick:H,pushUnique:_,stableSort:o}=m,I=!1;function S(){let V,e=this.xAxis,t=this.yAxis;e&&t&&(this.is("treemap")?(V={endOnTick:!1,gridLineWidth:0,lineWidth:0,min:0,minPadding:0,max:100,maxPadding:0,startOnTick:!1,title:void 0,tickPositions:[]},x(t.options,V),x(e.options,V),I=!0):I&&(t.setOptions(t.userOptions),e.setOptions(e.userOptions),I=!1))}class D extends M{static compose(e){_(A,"TreemapSeries")&&Y(e,"afterBindAxes",S)}algorithmCalcPoints(e,t,i,s){let l=i.plot,d=i.elArr.length-1,r,p,g,n,y=i.lW,J=i.lH,se,te=0;for(let re of(t?(y=i.nW,J=i.nH):se=i.elArr[d],i.elArr))(t||te<d)&&(i.direction===0?(r=l.x,p=l.y,n=re/(g=y)):(r=l.x,p=l.y,g=re/(n=J)),s.push({x:r,y:p,width:g,height:N(n)}),i.direction===0?l.y=l.y+n:l.x=l.x+g),te+=1;i.reset(),i.direction===0?i.width=i.width-y:i.height=i.height-J,l.y=l.parent.y+(l.parent.height-i.height),l.x=l.parent.x+(l.parent.width-i.width),e&&(i.direction=1-i.direction),t||i.addElement(se)}algorithmFill(e,t,i){let s=[],l,d=t.direction,r=t.x,p=t.y,g=t.width,n=t.height,y,J,se,te;for(let re of i)l=t.width*t.height*(re.val/t.val),y=r,J=p,d===0?(g-=se=l/(te=n),r+=se):(n-=te=l/(se=g),p+=te),s.push({x:y,y:J,width:se,height:te}),e&&(d=1-d);return s}algorithmLowAspectRatio(e,t,i){let s=[],l={x:t.x,y:t.y,parent:t},d=t.direction,r=i.length-1,p=new B(t.height,t.width,d,l),g,n=0;for(let y of i)g=t.width*t.height*(y.val/t.val),p.addElement(g),p.lP.nR>p.lP.lR&&this.algorithmCalcPoints(e,!1,p,s,l),n===r&&this.algorithmCalcPoints(e,!0,p,s,l),++n;return s}alignDataLabel(e,t,i){let s=i.style;s&&!a(s.textOverflow)&&t.text&&t.getBBox().width>(t.text.textWidth||0)&&t.css({textOverflow:"ellipsis",width:s.width+="px"}),G.prototype.alignDataLabel.apply(this,arguments),e.dataLabel&&e.dataLabel.attr({zIndex:(e.node.zIndex||0)+1})}calculateChildrenAreas(e,t){let i=this.options,s=this.mapOptionsToLevel[e.level+1],l=H(this[s&&s.layoutAlgorithm]&&s.layoutAlgorithm,i.layoutAlgorithm),d=i.alternateStartingDirection,r=e.children.filter(n=>!n.ignore),p=[];s&&s.layoutStartingDirection&&(t.direction=s.layoutStartingDirection==="vertical"?0:1),p=this[l](t,r);let g=-1;for(let n of r){let y=p[++g];n.values=W(y,{val:n.childrenTotal,direction:d?1-t.direction:t.direction}),n.pointValues=W(y,{x:y.x/this.axisRatio,y:100-y.y-y.height,width:y.width/this.axisRatio}),n.children.length&&this.calculateChildrenAreas(n,n.values)}}createList(e){let t=this.chart,i=t.breadcrumbs,s=[];if(i){let l=0;s.push({level:l,levelOptions:t.series[0]});let d=e.target.nodeMap[e.newRootId],r=[];for(;d.parent||d.parent==="";)r.push(d),d=e.target.nodeMap[d.parent];for(let p of r.reverse())s.push({level:++l,levelOptions:p});s.length<=1&&(s.length=0)}return s}drawDataLabels(){let e,t,i=this.mapOptionsToLevel;for(let s of this.points.filter(function(l){return l.node.visible}))t=i[s.node.level],e={style:{}},s.node.isLeaf||(e.enabled=!1),t&&t.dataLabels&&(e=W(e,t.dataLabels),this.hasDataLabels=()=>!0),s.shapeArgs&&(e.style.width=s.shapeArgs.width,s.dataLabel&&s.dataLabel.css({width:s.shapeArgs.width+"px"})),s.dlOptions=W(e,s.options.dataLabels);super.drawDataLabels()}drawPoints(e=this.points){let t=this.chart,i=t.renderer,s=t.styledMode,l=this.options,d=s?{}:l.shadow,r=l.borderRadius,p=t.pointCount<l.animationLimit,g=l.allowTraversingTree;for(let n of e){let y=n.node.levelDynamic,J={},se={},te={},re="level-group-"+n.node.level,de=!!n.graphic,ue=p&&de,he=n.shapeArgs;n.shouldDraw()&&(n.isInside=!0,r&&(se.r=r),W(!0,ue?J:se,de?he:{},s?{}:this.pointAttribs(n,n.selected?"select":void 0)),this.colorAttribs&&s&&x(te,this.colorAttribs(n)),this[re]||(this[re]=i.g(re).attr({zIndex:1e3-(y||0)}).add(this.group),this[re].survive=!0)),n.draw({animatableAttribs:J,attribs:se,css:te,group:this[re],imageUrl:n.imageUrl,renderer:i,shadow:d,shapeArgs:he,shapeType:n.shapeType}),g&&n.graphic&&(n.drillId=l.interactByLeaf?this.drillToByLeaf(n):this.drillToByGroup(n))}}drillToByGroup(e){let t=!1;return e.node.isLeaf||e.node.level-this.nodeMap[this.rootNode].level!=1||(t=e.id),t}drillToByLeaf(e){let t=!1,i;if(e.node.parent!==this.rootNode&&e.node.isLeaf)for(i=e.node;!t;)(i=this.nodeMap[i.parent]).parent===this.rootNode&&(t=i.id);return t}drillToNode(e,t){c(32,!1,void 0,{"treemap.drillToNode":"use treemap.setRootNode"}),this.setRootNode(e,t)}drillUp(){let e=this.nodeMap[this.rootNode];e&&$(e.parent)&&this.setRootNode(e.parent,!0,{trigger:"traverseUpButton"})}getExtremes(){let{dataMin:e,dataMax:t}=super.getExtremes(this.colorValueData);return this.valueMin=e,this.valueMax=t,super.getExtremes()}getListOfParents(e,t){let i=q(e)?e:[],s=q(t)?t:[],l=i.reduce(function(d,r,p){let g=H(r.parent,"");return d[g]===void 0&&(d[g]=[]),d[g].push(p),d},{"":[]});for(let d of Object.keys(l)){let r=l[d];if(d!==""&&s.indexOf(d)===-1){for(let p of r)l[""].push(p);delete l[d]}}return l}getTree(){let e=this.data.map(function(i){return i.id}),t=this.getListOfParents(this.data,e);return this.nodeMap={},this.nodeList=[],this.buildTree("",-1,0,t)}buildTree(e,t,i,s,l){let d=[],r=this.points[t],p=0,g;for(let y of s[e]||[])p=Math.max((g=this.buildTree(this.points[y].id,y,i+1,s,e)).height+1,p),d.push(g);let n=new this.NodeClass().init(e,t,d,p,i,this,l);for(let y of d)y.parentNode=n;return this.nodeMap[n.id]=n,this.nodeList.push(n),r&&(r.node=n,n.point=r),n}hasData(){return!!this.processedXData.length}init(e,t){let i=this,s=W(t.drillUpButton,t.breadcrumbs),l=Y(i,"setOptions",d=>{let r=d.userOptions;a(r.allowDrillToNode)&&!a(r.allowTraversingTree)&&(r.allowTraversingTree=r.allowDrillToNode,delete r.allowDrillToNode),a(r.drillUpButton)&&!a(r.traverseUpButton)&&(r.traverseUpButton=r.drillUpButton,delete r.drillUpButton)});super.init(e,t),delete i.opacity,i.eventsToUnbind.push(l),i.options.allowTraversingTree&&(i.eventsToUnbind.push(Y(i,"click",i.onClickDrillToNode)),i.eventsToUnbind.push(Y(i,"setRootNode",function(d){let r=i.chart;r.breadcrumbs&&r.breadcrumbs.updateProperties(i.createList(d))})),i.eventsToUnbind.push(Y(i,"update",function(d,r){let p=this.chart.breadcrumbs;p&&d.options.breadcrumbs&&p.update(d.options.breadcrumbs)})),i.eventsToUnbind.push(Y(i,"destroy",function(d){let r=this.chart;r.breadcrumbs&&!d.keepEventsForUpdate&&(r.breadcrumbs.destroy(),r.breadcrumbs=void 0)}))),e.breadcrumbs||(e.breadcrumbs=new b(e,s)),i.eventsToUnbind.push(Y(e.breadcrumbs,"up",function(d){let r=this.level-d.newLevel;for(let p=0;p<r;p++)i.drillUp()}))}onClickDrillToNode(e){let t=e.point,i=t&&t.drillId;$(i)&&(t.setState(""),this.setRootNode(i,!0,{trigger:"click"}))}pointAttribs(e,t){let i,s=F(this.mapOptionsToLevel)?this.mapOptionsToLevel:{},l=e&&s[e.node.level]||{},d=this.options,r=t&&d.states&&d.states[t]||{},p=e&&e.getClassName()||"",g={stroke:e&&e.borderColor||l.borderColor||r.borderColor||d.borderColor,"stroke-width":H(e&&e.borderWidth,l.borderWidth,r.borderWidth,d.borderWidth),dashstyle:e&&e.borderDashStyle||l.borderDashStyle||r.borderDashStyle||d.borderDashStyle,fill:e&&e.color||this.color};return p.indexOf("highcharts-above-level")!==-1?(g.fill="none",g["stroke-width"]=0):p.indexOf("highcharts-internal-node-interactive")!==-1?(i=H(r.opacity,d.opacity),g.fill=P(g.fill).setOpacity(i).get(),g.cursor="pointer"):p.indexOf("highcharts-internal-node")!==-1?g.fill="none":t&&(g.fill=P(g.fill).brighten(r.brightness).get()),g}setColorRecursive(e,t,i,s,l){let d=this&&this.chart,r=d&&d.options&&d.options.colors;if(e){let p=z(e,{colors:r,index:s,mapOptionsToLevel:this.mapOptionsToLevel,parentColor:t,parentColorIndex:i,series:this,siblings:l}),g=this.points[e.i];g&&(g.color=p.color,g.colorIndex=p.colorIndex);let n=-1;for(let y of e.children||[])this.setColorRecursive(y,p.color,p.colorIndex,++n,e.children.length)}}setPointValues(){let e=this,{points:t,xAxis:i,yAxis:s}=e,l=e.chart.styledMode,d=r=>l?0:(e.pointAttribs(r)["stroke-width"]||0)%2/2;for(let r of t){let{pointValues:p,visible:g}=r.node;if(p&&g){let{height:n,width:y,x:J,y:se}=p,te=d(r),re=Math.round(i.toPixels(J,!0))-te,de=Math.round(i.toPixels(J+y,!0))-te,ue=Math.round(s.toPixels(se,!0))-te,he=Math.round(s.toPixels(se+n,!0))-te,Q={x:Math.min(re,de),y:Math.min(ue,he),width:Math.abs(de-re),height:Math.abs(he-ue)};r.plotX=Q.x+Q.width/2,r.plotY=Q.y+Q.height/2,r.shapeArgs=Q}else delete r.plotX,delete r.plotY}}setRootNode(e,t,i){L(this,"setRootNode",x({newRootId:e,previousRootId:this.rootNode,redraw:H(t,!0),series:this},i),function(s){let l=s.series;l.idPreviousRoot=s.previousRootId,l.rootNode=s.newRootId,l.isDirty=!0,s.redraw&&l.chart.redraw()})}setState(e){this.options.inactiveOtherPoints=!0,super.setState(e,!1),this.options.inactiveOtherPoints=!1}setTreeValues(e){let t=this.options,i=this.rootNode,s=this.nodeMap[i],l=typeof t.levelIsConstant!="boolean"||t.levelIsConstant,d=[],r=this.points[e.i],p=0;for(let n of e.children)n=this.setTreeValues(n),d.push(n),n.ignore||(p+=n.val);o(d,(n,y)=>(n.sortIndex||0)-(y.sortIndex||0));let g=H(r&&r.options.value,p);return r&&(r.value=g),x(e,{children:d,childrenTotal:p,ignore:!(H(r&&r.visible,!0)&&g>0),isLeaf:e.visible&&!p,levelDynamic:e.level-(l?0:s.level),name:H(r&&r.name,""),sortIndex:H(r&&r.sortIndex,-g),val:g}),e}sliceAndDice(e,t){return this.algorithmFill(!0,e,t)}squarified(e,t){return this.algorithmLowAspectRatio(!0,e,t)}strip(e,t){return this.algorithmLowAspectRatio(!1,e,t)}stripes(e,t){return this.algorithmFill(!1,e,t)}translate(){let e=this,t=e.options,i=Z(e),s,l,d,r;super.translate();let p=e.tree=e.getTree();s=e.nodeMap[i],i===""||s&&s.children.length||(e.setRootNode("",!1),i=e.rootNode,s=e.nodeMap[i]),e.mapOptionsToLevel=X({from:s.level+1,levels:t.levels,to:p.height,defaults:{levelIsConstant:e.options.levelIsConstant,colorByPoint:t.colorByPoint}}),v.recursive(e.nodeMap[e.rootNode],g=>{let n=g.parent,y=!1;return g.visible=!0,(n||n==="")&&(y=e.nodeMap[n]),y}),v.recursive(e.nodeMap[e.rootNode].children,g=>{let n=!1;for(let y of g)y.visible=!0,y.children.length&&(n=(n||[]).concat(y.children));return n}),e.setTreeValues(p),e.axisRatio=e.xAxis.len/e.yAxis.len,e.nodeMap[""].pointValues=l={x:0,y:0,width:100,height:100},e.nodeMap[""].values=d=W(l,{width:l.width*e.axisRatio,direction:t.layoutStartingDirection==="vertical"?0:1,val:p.val}),e.calculateChildrenAreas(p,d),e.colorAxis||t.colorByPoint||e.setColorRecursive(e.tree),t.allowTraversingTree&&(r=s.pointValues,e.xAxis.setExtremes(r.x,r.x+r.width,!1),e.yAxis.setExtremes(r.y,r.y+r.height,!1),e.xAxis.setScale(),e.yAxis.setScale()),e.setPointValues()}}return D.defaultOptions=W(M.defaultOptions,O),x(D.prototype,{buildKDTree:E,colorAttribs:w.seriesMembers.colorAttribs,colorKey:"colorValue",directTouch:!0,getExtremesFromAll:!0,getSymbol:E,optionalAxis:"colorAxis",parallelArrays:["x","y","value","colorValue"],pointArrayMap:["value"],pointClass:T,NodeClass:k,trackerGroups:["group","dataLabelsGroup"],utils:v}),w.compose(D),j.registerSeriesType("treemap",D),D}),K(u,"Series/Sunburst/SunburstPoint.js",[u["Core/Series/SeriesRegistry.js"],u["Core/Utilities.js"]],function(b,f){let{series:{prototype:{pointClass:w}},seriesTypes:{treemap:{prototype:{pointClass:C}}}}=b,{correctFloat:j,extend:B,pInt:k}=f;class T extends C{getDataLabelPath(v){var X;let h=this.series.chart.renderer,m=this.shapeExisting,P=m.r+k(((X=v.options)==null?void 0:X.distance)||0),A=m.start,E=m.end,G=A+(E-A)/2,M=G<0&&G>-Math.PI||G>Math.PI,z;return A===-Math.PI/2&&j(E)===j(1.5*Math.PI)&&(A=-Math.PI+Math.PI/360,E=-Math.PI/360,M=!0),E-A>Math.PI&&(M=!1,z=!0,E-A>2*Math.PI-.01&&(A+=.01,E-=.01)),this.dataLabelPath&&(this.dataLabelPath=this.dataLabelPath.destroy()),this.dataLabelPath=h.arc({open:!0,longArc:z?1:0}).attr({start:M?A:E,end:M?E:A,clockwise:+M,x:m.x,y:m.y,r:(P+m.innerR)/2}).add(h.defs),this.dataLabelPath}isValid(){return!0}}return B(T.prototype,{getClassName:w.prototype.getClassName,haloPath:w.prototype.haloPath,setState:w.prototype.setState}),T}),K(u,"Series/Sunburst/SunburstUtilities.js",[u["Core/Series/SeriesRegistry.js"],u["Core/Utilities.js"]],function(b,f){let{seriesTypes:{treemap:w}}=b,{isNumber:C,isObject:j,merge:B}=f;function k(T,O){let v=[];if(C(T)&&C(O)&&T<=O)for(let h=T;h<=O;h++)v.push(h);return v}return{calculateLevelSizes:function(T,O){let v=j(O)?O:{},h,m=0,P,A,E,G;if(j(T)){for(let M of(h=B({},T),A=k(C(v.from)?v.from:0,C(v.to)?v.to:0),E=Object.keys(h).filter(z=>A.indexOf(+z)===-1),P=G=C(v.diffRadius)?v.diffRadius:0,A)){let z=h[M],X=z.levelSize.unit,Z=z.levelSize.value;X==="weight"?m+=Z:X==="percentage"?(z.levelSize={unit:"pixels",value:Z/100*P},G-=z.levelSize.value):X==="pixels"&&(G-=Z)}for(let M of A){let z=h[M];if(z.levelSize.unit==="weight"){let X=z.levelSize.value;h[M].levelSize={unit:"pixels",value:X/m*G}}}for(let M of E)h[M].levelSize={value:0,unit:"pixels"}}return h},getLevelFromAndTo:function({level:T,height:O}){return{from:T>0?T:1,to:T+O}},range:k,recursive:w.prototype.utils.recursive}}),K(u,"Series/Sunburst/SunburstNode.js",[u["Series/Treemap/TreemapNode.js"]],function(b){return class extends b{}}),K(u,"Series/Sunburst/SunburstSeriesDefaults.js",[],function(){return{center:["50%","50%"],clip:!1,colorByPoint:!1,opacity:1,dataLabels:{allowOverlap:!0,defer:!0,rotationMode:"circular",style:{textOverflow:"ellipsis"}},rootId:void 0,levelIsConstant:!0,levelSize:{value:1,unit:"weight"},slicedOffset:10}}),K(u,"Series/Sunburst/SunburstSeries.js",[u["Series/CenteredUtilities.js"],u["Core/Globals.js"],u["Core/Series/SeriesRegistry.js"],u["Series/Sunburst/SunburstPoint.js"],u["Series/Sunburst/SunburstUtilities.js"],u["Series/TreeUtilities.js"],u["Core/Utilities.js"],u["Series/Sunburst/SunburstNode.js"],u["Series/Sunburst/SunburstSeriesDefaults.js"]],function(b,f,w,C,j,B,k,T,O){let{getCenter:v,getStartAndEndRadians:h}=b,{noop:m}=f,{column:P,treemap:A}=w.seriesTypes,{getColor:E,getLevelOptions:G,setTreeValues:M,updateRootId:z}=B,{defined:X,error:Z,extend:Y,fireEvent:N,isNumber:a,isObject:c,isString:x,merge:L,splat:q}=k,F=180/Math.PI,$=function(_,o,I,S){return{x:_+Math.cos(I)*S,y:o+Math.sin(I)*S}};function W(_,o){let I=o.mapIdToNode,S=_.parent,D=S?I[S]:void 0,V=o.series,e=V.chart,t=V.points[_.i],i=E(_,{colors:V.options.colors||e&&e.options.colors,colorIndex:V.colorIndex,index:o.index,mapOptionsToLevel:o.mapOptionsToLevel,parentColor:D&&D.color,parentColorIndex:D&&D.colorIndex,series:o.series,siblings:o.siblings});return _.color=i.color,_.colorIndex=i.colorIndex,t&&(t.color=_.color,t.colorIndex=_.colorIndex,_.sliced=_.id!==o.idRoot&&t.sliced),_}class H extends A{alignDataLabel(o,I,S){if(!S.textPath||!S.textPath.enabled)return super.alignDataLabel.apply(this,arguments)}animate(o){let I,S=this.chart,D=[S.plotWidth/2,S.plotHeight/2],V=S.plotLeft,e=S.plotTop,t=this.group;o?(I={translateX:D[0]+V,translateY:D[1]+e,scaleX:.001,scaleY:.001,rotation:10,opacity:.01},t.attr(I)):(I={translateX:V,translateY:e,scaleX:1,scaleY:1,rotation:0,opacity:1},t.animate(I,this.options.animation))}drawPoints(){let o=this,I=o.mapOptionsToLevel,S=o.shapeRoot,D=o.group,V=o.hasRendered,e=o.rootNode,t=o.idPreviousRoot,i=o.nodeMap,s=i[t],l=s&&s.shapeArgs,d=o.points,r=o.startAndEndRadians,p=o.chart,g=p&&p.options&&p.options.chart||{},n=typeof g.animation!="boolean"||g.animation,y=o.center,J={x:y[0],y:y[1]},se=y[3]/2,te=o.chart.renderer,re=!!(n&&V&&e!==t&&o.dataLabelsGroup),de,ue=!1,he=!1;for(let Q of(re&&(o.dataLabelsGroup.attr({opacity:0}),de=function(){ue=!0,o.dataLabelsGroup&&o.dataLabelsGroup.animate({opacity:1,visibility:"inherit"})}),d)){let me,xe,ge=Q.node,we=I[ge.level],Ae=Q.shapeExisting||{},ne=ge.shapeArgs||{},ve=!!(ge.visible&&ge.shapeArgs);ne.borderRadius=o.options.borderRadius,me=V&&n?function(ee,U){let oe=U.point,le=U.radians,R=U.innerR,be=U.idRoot,pe=U.idPreviousRoot,ie=U.shapeExisting,Se=U.shapeRoot,Te=U.shapePreviousRoot,Ce=U.visible,fe={},ye={end:ee.end,start:ee.start,innerR:ee.innerR,r:ee.r,x:ee.x,y:ee.y};return Ce?!oe.graphic&&Te&&((fe=be===oe.id?{start:le.start,end:le.end}:Te.end<=ee.start?{start:le.end,end:le.end}:{start:le.start,end:le.start}).innerR=fe.r=R):oe.graphic&&(pe===oe.id?ye={innerR:R,r:R}:Se&&(ye=Se.end<=ie.start?{innerR:R,r:R,start:le.end,end:le.end}:{innerR:R,r:R,start:le.start,end:le.start})),{from:fe,to:ye}}(ne,{center:J,point:Q,radians:r,innerR:se,idRoot:e,idPreviousRoot:t,shapeExisting:Ae,shapeRoot:S,shapePreviousRoot:l,visible:ve}):{to:ne,from:{}},Y(Q,{shapeExisting:ne,tooltipPos:[ne.plotX,ne.plotY],drillId:function(ee,U,oe){let le;return ee.node.isLeaf||(le=U===ee.id?oe[U].parent:ee.id),le}(Q,e,i),name:""+(Q.name||Q.id||Q.index),plotX:ne.plotX,plotY:ne.plotY,value:ge.val,isInside:ve,isNull:!ve}),Q.dlOptions=function(ee){let U=ee.point,oe=c(ee.shapeArgs)?ee.shapeArgs:{},le=c(ee.optionsPoint)?ee.optionsPoint.dataLabels:{},R=L({style:{}},q(c(ee.level)?ee.level.dataLabels:{})[0],le),be,pe,ie=R.rotationMode;return a(R.rotation)||((ie==="auto"||ie==="circular")&&(R.useHTML&&ie==="circular"&&(ie="auto"),U.innerArcLength<1&&U.outerArcLength>oe.radius?(be=0,U.dataLabelPath&&ie==="circular"&&(R.textPath={enabled:!0})):U.innerArcLength>1&&U.outerArcLength>1.5*oe.radius?ie==="circular"?R.textPath={enabled:!0,attributes:{dy:5}}:ie="parallel":(U.dataLabel&&U.dataLabel.textPath&&ie==="circular"&&(R.textPath={enabled:!1}),ie="perpendicular")),ie!=="auto"&&ie!=="circular"&&(U.dataLabel&&U.dataLabel.textPath&&(R.textPath={enabled:!1}),be=oe.end-(oe.end-oe.start)/2),ie==="parallel"?R.style.width=Math.min(2.5*oe.radius,(U.outerArcLength+U.innerArcLength)/2):!X(R.style.width)&&oe.radius&&(R.style.width=U.node.level===1?2*oe.radius:oe.radius),ie==="perpendicular"&&U.outerArcLength<16&&(R.style.width=1),R.style.width=Math.max(R.style.width-2*(R.padding||0),1),pe=be*F%180,ie==="parallel"&&(pe-=90),pe>90?pe-=180:pe<-90&&(pe+=180),R.rotation=pe),R.textPath&&(U.shapeExisting.innerR===0&&R.textPath.enabled?(R.rotation=0,R.textPath.enabled=!1,R.style.width=Math.max(2*U.shapeExisting.r-2*(R.padding||0),1)):U.dlOptions&&U.dlOptions.textPath&&!U.dlOptions.textPath.enabled&&ie==="circular"&&(R.textPath.enabled=!0),R.textPath.enabled&&(R.rotation=0,R.style.width=Math.max((U.outerArcLength+U.innerArcLength)/2-2*(R.padding||0),1))),R}({point:Q,level:we,optionsPoint:Q.options,shapeArgs:ne}),!he&&ve&&(he=!0,xe=de),Q.draw({animatableAttribs:me.to,attribs:Y(me.from,!p.styledMode&&o.pointAttribs(Q,Q.selected&&"select")),onComplete:xe,group:D,renderer:te,shapeType:"arc",shapeArgs:ne})}re&&he?(o.hasRendered=!1,o.options.dataLabels.defer=!0,P.prototype.drawDataLabels.call(o),o.hasRendered=!0,ue&&de()):P.prototype.drawDataLabels.call(o),o.idPreviousRoot=e}layoutAlgorithm(o,I,S){let D=o.start,V=o.end-D,e=o.val,t=o.x,i=o.y,s=S&&c(S.levelSize)&&a(S.levelSize.value)?S.levelSize.value:0,l=o.r,d=l+s,r=S&&a(S.slicedOffset)?S.slicedOffset:0;return(I||[]).reduce((p,g)=>{let n=1/e*g.val*V,y=$(t,i,D+n/2,r),J={x:g.sliced?y.x:t,y:g.sliced?y.y:i,innerR:l,r:d,radius:s,start:D,end:D+n};return p.push(J),D=J.end,p},[])}setRootNode(o,I,S){if(this.nodeMap[o].level===1&&this.nodeList.filter(D=>D.level===1).length===1){if(this.idPreviousRoot==="")return;o=""}super.setRootNode(o,I,S)}setShapeArgs(o,I,S){let D=S[o.level+1],V=o.children.filter(function(i){return i.visible}),e=[];e=this.layoutAlgorithm(I,V,D);let t=-1;for(let i of V){let s=e[++t],l=s.start+(s.end-s.start)/2,d=s.innerR+(s.r-s.innerR)/2,r=s.end-s.start,p=s.innerR===0&&r>6.28?{x:s.x,y:s.y}:$(s.x,s.y,l,d),g=i.val?i.childrenTotal>i.val?i.childrenTotal:i.val:i.childrenTotal;this.points[i.i]&&(this.points[i.i].innerArcLength=r*s.innerR,this.points[i.i].outerArcLength=r*s.r),i.shapeArgs=L(s,{plotX:p.x,plotY:p.y}),i.values=L(s,{val:g}),i.children.length&&this.setShapeArgs(i,i.values,S)}}translate(){let o=this.options,I=this.center=this.getCenter(),S=this.startAndEndRadians=h(o.startAngle,o.endAngle),D=I[3]/2,V=I[2]/2,e=z(this),t=this.nodeMap,i,s=t&&t[e],l={};this.shapeRoot=s&&s.shapeArgs,this.processedXData||this.processData(),this.generatePoints(),N(this,"afterTranslate");let d=this.tree=this.getTree(),r=x((s=(t=this.nodeMap)[e]).parent)?s.parent:"",p=t[r],{from:g,to:n}=j.getLevelFromAndTo(s);i=G({from:g,levels:this.options.levels,to:n,defaults:{colorByPoint:o.colorByPoint,dataLabels:o.dataLabels,levelIsConstant:o.levelIsConstant,levelSize:o.levelSize,slicedOffset:o.slicedOffset}}),i=j.calculateLevelSizes(i,{diffRadius:V-D,from:g,to:n}),M(d,{before:W,idRoot:e,levelIsConstant:o.levelIsConstant,mapOptionsToLevel:i,mapIdToNode:t,points:this.points,series:this});let y=t[""].shapeArgs={end:S.end,r:D,start:S.start,val:s.val,x:I[0],y:I[1]};for(let J of(this.setShapeArgs(p,y,i),this.mapOptionsToLevel=i,this.points))l[J.id]&&Z(31,!1,this.chart),l[J.id]=!0}}return H.defaultOptions=L(A.defaultOptions,O),Y(H.prototype,{axisTypes:[],drawDataLabels:m,getCenter:v,isCartesian:!1,onPointSupported:!0,pointAttribs:P.prototype.pointAttribs,pointClass:C,NodeClass:T,utils:j}),w.registerSeriesType("sunburst",H),H}),K(u,"masters/modules/sunburst.src.js",[u["Core/Globals.js"],u["Extensions/Breadcrumbs/Breadcrumbs.js"]],function(b,f){return b.Breadcrumbs=b.Breadcrumbs||f,b.Breadcrumbs.compose(b.Chart,b.defaultOptions),b})})})(Le);var Pe=Le.exports;const Oe=Re(Pe),je=Be({__proto__:null,default:Oe},[Pe]);export{je as s};
