import{r as m,n as b,c as l,a as e,b as f,u as a,q as h,F as y,s as x,o as r}from"./CnF9CK4p.js";const k={class:"main responsive right page active"},C={class:"horizontal-margin"},A=e("div",{class:"space"},null,-1),F={class:"circle medium-width medium-height center"},z={key:0,id:"overlay-blur",class:"overlay blur active"},M={key:1,id:"dialog-eyes",class:"active center middle small-width"},S=e("h6",{class:"center-align bottom-margin"},"Detailed information",-1),D=e("div",{class:"vertical-margin horizontal-margin horizontal-padding"},[e("p",null,"Must use eyes"),e("p",null,"Color go bright, eye hurt, ouch"),e("p",null,"Must use eyes"),e("p",null,"Color go bright, eye hurt, ouch"),e("p",null,"Must use eyes"),e("p",null,"Color go bright, eye hurt, ouch")],-1),I={class:"middle-align no-space"},w={key:2,id:"dialog-arms",class:"active"},V=e("h5",null,"Arms",-1),j=e("div",null,"Some text here",-1),B=e("nav",{class:"right-align no-space"},[e("button",{class:"transparent link"},"Cancel"),e("button",{class:"transparent link"},"Confirm")],-1),O=[V,j,B],$={class:"bottom s tertiary-container"},L=e("i",null,"chair",-1),N=e("span",null,"Comfort",-1),P=[L,N],E=e("i",null,"person",-1),H=e("span",null,"Accessibility",-1),T=[E,H],q=e("i",null,"health_and_safety",-1),W=e("span",null,"Safety",-1),G=[q,W],Q={__name:"index",setup(J){const o=m("comfort"),i=m(!1),c=m(!1);function _(s){s.value=!s.value}function g(){i.value=!1,c.value=!1}function u(s,t,d){const n=[];for(let p=0;p<s;p++)n.push(Math.floor(Math.random()*(d-t+1))+t);return n}const v=b(()=>({chart:{polar:!0,backgroundColor:"transparent"},title:{text:null},legend:{enabled:!1},tooltip:{enabled:!1},pane:{startAngle:0,endAngle:360,size:"75%"},xAxis:{tickInterval:72,min:0,max:360,labels:{distance:20,formatter:function(){return["<i class='large-icon blue-text'>visibility</i>","<i class='large-icon amber-text'>brand_awareness</i>","<i class='large-icon green-text'>psychology</i>","<i class='large-icon purple-text '>front_hand</i>","<i class=' large-icon red-text'>barefoot</i>"][this.value/72]},style:{fontSize:"32px"},useHTML:!0,allowOverlap:!0}},yAxis:{min:0,max:4,visible:1,tickInterval:1,labels:{enabled:!1}},plotOptions:{series:{pointStart:0,pointInterval:72,colorByPoint:!0,colors:["rgba(0, 191, 255, 0.8)","rgba(255, 195, 0, 0.8)","rgba(34, 160, 34, 0.8)","rgba(138,43,226, 0.8)","rgba(255, 0, 0, 0.8)"],dataLabels:{enabled:!0,format:"{point.y}",color:"#ffffff",align:"center",verticalAlign:"middle",style:{fontSize:"18px"},inside:!0,useHTML:!0,zIndex:9999,allowOverlap:!0},borderWidth:3,borderColor:"#FFFFFF",point:{events:{click:function(){this.index===0&&_(i)}}}},column:{pointPadding:0,groupPadding:0}},series:[{type:"column",name:"Comfort",data:u(5,1,4),visible:o.value==="comfort"},{type:"column",name:"Accessibility",data:u(5,1,4),visible:o.value==="accessibility"},{type:"column",name:"Safety",data:u(5,1,4),visible:o.value==="safety"}]}));return(s,t)=>{const d=x("highchart");return r(),l(y,null,[e("div",k,[e("div",C,[A,e("div",F,[f(d,{modules:["accessibility"],options:a(v),more:!0},null,8,["options"])])]),a(i)||a(c)?(r(),l("div",z)):h("",!0),a(i)?(r(),l("dialog",M,[S,D,e("nav",I,[e("button",{class:"transparent link",onClick:t[0]||(t[0]=n=>g())}," Close ")])])):h("",!0),a(c)?(r(),l("dialog",w,O)):h("",!0)]),e("nav",$,[e("button",{class:"transparent vertical",onClick:t[1]||(t[1]=n=>o.value="comfort")},P),e("button",{class:"transparent vertical",onClick:t[2]||(t[2]=n=>o.value="accessibility")},T),e("button",{class:"transparent vertical",onClick:t[3]||(t[3]=n=>o.value="safety")},G)])],64)}}};export{Q as default};