import{a5 as v}from"./De0R8DIU.js";function j(c,o){for(var n=0;n<o.length;n++){const s=o[n];if(typeof s!="string"&&!Array.isArray(s)){for(const t in s)if(t!=="default"&&!(t in c)){const r=Object.getOwnPropertyDescriptor(s,t);r&&Object.defineProperty(c,t,r.get?r:{enumerable:!0,get:()=>s[t]})}}}return Object.freeze(Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}))}var p={exports:{}};(function(c){(function(o){c.exports?(o.default=o,c.exports=o):o(typeof Highcharts<"u"?Highcharts:void 0)})(function(o){var n=o?o._modules:{};function s(t,r,u,l){t.hasOwnProperty(r)||(t[r]=l.apply(null,u),typeof CustomEvent=="function"&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:r,module:t[r]}})))}s(n,"Extensions/CurrentDateIndication.js",[n["Core/Globals.js"],n["Core/Utilities.js"]],function(t,r){let{composed:u}=t,{addEvent:l,merge:f,pushUnique:m,wrap:b}=r,d={color:"#ccd3ff",width:2,label:{format:"%a, %b %d %Y, %H:%M",formatter:function(a,i){return this.axis.chart.time.dateFormat(i||"",a)},rotation:0,style:{fontSize:"0.7em"}}};function g(){let a=this.options,i=a.currentDateIndicator;if(i){let e=typeof i=="object"?f(d,i):f(d);e.value=Date.now(),e.className="highcharts-current-date-indicator",a.plotLines||(a.plotLines=[]),a.plotLines.push(e)}}function x(){this.label&&this.label.attr({text:this.getLabelText(this.options.label)})}function y(a,i){let e=this.options;return e&&e.className&&e.className.indexOf("highcharts-current-date-indicator")!==-1&&e.label&&typeof e.label.formatter=="function"?(e.value=Date.now(),e.label.formatter.call(this,e.value,e.label.format)):a.call(this,i)}return{compose:function(a,i){m(u,"CurrentDateIndication")&&(l(a,"afterSetOptions",g),l(i,"render",x),b(i.prototype,"getLabelText",y))}}}),s(n,"masters/modules/current-date-indicator.src.js",[n["Core/Globals.js"],n["Extensions/CurrentDateIndication.js"]],function(t,r){return r.compose(t.Axis,t.PlotLineOrBand),t})})})(p);var h=p.exports;const D=v(h),C=j({__proto__:null,default:D},[h]);export{C as c};