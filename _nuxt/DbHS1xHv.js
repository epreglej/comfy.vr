import{r as m,n as v,c as o,a as e,b as f,u as a,q as d,s as b,o as i}from"./Bd-tPCVu.js";const x={class:"main responsive right page active"},y={class:"horizontal-margin"},k=e("div",{class:"space"},null,-1),C={class:"circle medium-width medium-height center"},A={key:0,id:"overlay-blur",class:"overlay blur active"},w={key:1,id:"dialog-eyes",class:"active"},F=e("h5",null,"Eyes",-1),I=e("div",null,"Some text here",-1),z={class:"middle-align no-space"},D={key:2,id:"dialog-arms",class:"active"},L=e("h5",null,"Arms",-1),O=e("div",null,"Some text here",-1),S=e("nav",{class:"right-align no-space"},[e("button",{class:"transparent link"},"Cancel"),e("button",{class:"transparent link"},"Confirm")],-1),V=[L,O,S],M={__name:"index",setup(j){const n=m(!1),l=m(!1);function g(t){t.value=!t.value}function p(){n.value=!1,l.value=!1}function h(t,s,r){const c=[];for(let u=0;u<t;u++)c.push(Math.floor(Math.random()*(r-s+1))+s);return c}const _=v(()=>({chart:{polar:!0,backgroundColor:"transparent"},title:{text:null},legend:{enabled:!1},tooltip:{enabled:!1},pane:{startAngle:0,endAngle:360,size:"80%"},xAxis:{tickInterval:72,min:0,max:360,labels:{distance:20,formatter:function(){return["<i class='large-icon red'>visibility</i>","<i class='yellow-text large-icon'>brand_awareness</i>","<i class='green-text large-icon'>brain</i>","<i class='purple-text large-icon'>arms</i>","<i class='red-text large-icon'>legs</i>"][this.value/72]},style:{fontSize:"32px"},useHTML:!0,allowOverlap:!0}},yAxis:{min:0,max:4,visible:1,tickInterval:1,endOnTick:!0,showLastLabel:!0,labels:{enabled:!1}},plotOptions:{series:{pointStart:0,pointInterval:72,colorByPoint:!0,colors:["rgba(0, 191, 255, 0.8)","rgba(255, 195, 0, 0.8)","rgba(34, 160, 34, 0.8)","rgba(138,43,226, 0.8)","rgba(255, 0, 0, 0.8)"],dataLabels:{enabled:!0,format:"{point.y}",color:"#ffffff",align:"center",verticalAlign:"middle",style:{fontSize:"18px"},inside:!0,useHTML:!0,zIndex:9999,allowOverlap:!0},borderWidth:3,borderColor:"#FFFFFF",point:{events:{click:function(){this.index===0&&g(n)}}}},column:{pointPadding:0,groupPadding:0}},series:[{type:"column",name:"Column 1",data:h(5,1,4)}]}));return(t,s)=>{const r=b("highchart");return i(),o("div",x,[e("div",y,[k,e("div",C,[f(r,{modules:["accessibility"],options:a(_),more:!0},null,8,["options"])])]),a(n)||a(l)?(i(),o("div",A)):d("",!0),a(n)?(i(),o("dialog",w,[F,I,e("nav",z,[e("button",{class:"transparent link",onClick:s[0]||(s[0]=c=>p())}," Close ")])])):d("",!0),a(l)?(i(),o("dialog",D,V)):d("",!0)])}}};export{M as default};
