import{u as v,r as p,n as y,h as x,c as i,a as e,q as k,v as w,s as d,x as L,F as _,y as u,o as r,t as h}from"./BM8W5yRS.js";const C={class:"main responsive page active center-align"},N=e("article",{class:"top-margin medium-elevate medium-width center center-align middle-align surface"},[e("h1",{class:"freeman-regular"},"comfy.vr")],-1),b={class:"medium top-margin medium-elevate medium-width center surface"},B={class:"field large prefix round fill small-elevate vertical-margin medium-margin"},E=e("i",{class:"front"},"search",-1),S=e("div",{class:"small-divider"},null,-1),D=["href"],F={class:"extra"},I=["src"],R={class:"large-text left-margin small-margin"},V=["href"],q={class:"extra"},A=["src"],M={class:"large-text left-margin small-margin"},Q=e("div",{class:"center top-margin"},[e("a",{href:"./login",class:"small-text primary-text"},"administrator login")],-1),j={__name:"index",async setup(T){let l,m;const g=a=>c.filter(t=>t.applicationName.toLowerCase().includes(a.toLowerCase())),f=v(),n=p(),o=p();let c=[];try{const{data:a,error:t}=([l,m]=y(()=>f.from("applications").select("*")),l=await l,m(),l);t?console.error("Error during insertion:",t):c=a}catch(a){console.error("Error:",a)}for(let a of c)a.applicationLink="./ratings/"+a.id;return x(n,a=>{o.value=g(a),console.log(o.value)}),(a,t)=>(r(),i("div",C,[N,e("article",b,[e("div",B,[E,k(e("input",{"onUpdate:modelValue":t[0]||(t[0]=s=>L(n)?n.value=s:null),type:"text",placeholder:"Search..."},null,512),[[w,d(n)]])]),S,d(o)?(r(!0),i(_,{key:1},u(d(o),s=>(r(),i("div",{class:"bottom-margin small-margin",key:s.id},[e("a",{class:"full-width vertical-padding small-padding primary-hover",href:s.applicationLink},[e("i",q,[e("img",{class:"",src:s.applicationIconLink},null,8,A)]),e("span",M,h(s.applicationName),1)],8,V)]))),128)):(r(!0),i(_,{key:0},u(d(c),s=>(r(),i("div",{class:"bottom-margin small-margin",key:s.id},[e("a",{class:"full-width vertical-padding small-padding primary-hover",href:s.applicationLink},[e("i",F,[e("img",{class:"",src:s.applicationIconLink},null,8,I)]),e("span",R,h(s.applicationName),1)],8,D)]))),128))]),Q]))}};export{j as default};
