import{_ as d}from"./BJfxxbEI.js";import{_,o as t,c as l,y as c,w as n,a as e,t as m,b as u,z as p,F as f}from"./Cos6VTb9.js";const h={computed:{currentPageName(){return this.$route.name}}},g=e("i",null,"home",-1),x=e("i",null,"arrow_back",-1),$={class:"max left-align"},k=e("i",null,"logout",-1);function N(s,i,r,P,v,o){const a=d;return t(),l("nav",null,[o.currentPageName==="Dashboard"?(t(),c(a,{key:0,class:"transparent circle large s"},{default:n(()=>[g]),_:1})):(t(),c(a,{key:1,to:"/dashboard",class:"transparent circle large s no-margin"},{default:n(()=>[x]),_:1})),e("h6",$,m(o.currentPageName),1),u(a,{to:"/logout",class:"transparent circle large"},{default:n(()=>[k]),_:1})])}const y=_(h,[["render",N]]),b={},B={class:"s transparent"};function w(s,i){const r=y;return t(),l(f,null,[e("header",B,[u(r)]),p(s.$slots,"default")],64)}const L=_(b,[["render",w]]);export{L as default};