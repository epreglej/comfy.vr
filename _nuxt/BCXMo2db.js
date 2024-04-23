import{h as U,c as _,a as e,y as x,z,u as l,n,v as A,q as s,b as C,A as i,B as g,o as h}from"./De0R8DIU.js";import{t as S,o as k,s as y,u as T,a as p,b as c,E as Y}from"./B_CGu8ze.js";const B={class:"page right responsive active"},E={class:"horizontal-margin"},w=e("div",{class:"space"},null,-1),F={class:"round"},R={class:"horizontal-margin"},j=e("p",{class:"top-margin center-align"},[e("h6",{class:"center-align"},"Form")],-1),q={class:"vertical-margin"},D=e("label",null,"Application's name",-1),J={class:"horizontal-margin vertical-margin vertical"},O=e("span",{class:"large-text"}," Application contains camera movement. ",-1),G={class:"radio"},H=e("span",null,"Yes",-1),I={class:"radio"},K=e("span",null,"No",-1),L={key:0,class:"horizontal-margin top-margin vertical"},P=e("span",{class:"large-text"}," Camera movement is choppy. ",-1),Q={class:"radio"},W=e("span",null,"Yes",-1),X={class:"radio"},Z=e("span",null,"No",-1),$={key:1,class:"horizontal-margin top-margin vertical"},ee=e("span",{class:"large-text"}," Camera movement is unpredictable. ",-1),ae={class:"radio"},te=e("span",null,"Yes",-1),le={class:"radio"},oe=e("span",null,"No",-1),ne={key:2,class:"horizontal-margin top-margin vertical"},se=e("span",{class:"large-text"}," Alternative camera movement methods not supported. ",-1),ie={class:"radio"},re=e("span",null,"Yes",-1),de={class:"radio"},ue=e("span",null,"No",-1),me={class:"horizontal-margin top-margin vertical"},pe=e("span",{class:"large-text"}," Application contains avatar movement. ",-1),ce={class:"radio"},ve=e("span",null,"Yes",-1),_e={class:"radio"},he=e("span",null,"No",-1),be=e("div",{class:"vertical-margin center-align"},[e("button",{type:"submit"},"Submit")],-1),fe={__name:"add",setup(ge){const f=S(k({applicationName:y().min(1),cameraMovement:y()})),{handleSubmit:V,errors:N}=T({validationSchema:f}),{value:b}=p("applicationName"),{value:o}=p("cameraMovement",c(),{initialValue:"false"}),{value:r}=p("cameraMovementChoppy",c(),{initialValue:"false"}),{value:d}=p("cameraMovementUnpredictable",c(),{initialValue:"false"}),{value:u}=p("cameraMovementNoAlternativeMethods",c(),{initialValue:"false"}),{value:m}=p("avatarMovement",c(),{initialValue:"false"});U(o,v=>{v==="false"&&(r.value="false",d.value="false",u.value="false")});const M=V(v=>{alert(JSON.stringify(v,null,2))});return(v,a)=>(h(),_("div",B,[e("div",E,[w,e("article",F,[e("div",R,[e("form",{class:"vertical",onSubmit:a[11]||(a[11]=x((...t)=>l(M)&&l(M)(...t),["prevent"]))},[j,e("div",q,[e("div",{class:z(["field label border round no-margin",{invalid:l(N).applicationName}])},[n(e("input",{type:"text","aria-invalid":"true","aria-describedby":"addressError","onUpdate:modelValue":a[0]||(a[0]=t=>s(b)?b.value=t:null)},null,512),[[A,l(b)]]),D,C(l(Y),{class:"horizontal-margin error-text",name:"applicationName"})],2)]),e("div",J,[O,e("label",G,[n(e("input",{type:"radio",name:"cameraMovement",value:"true","onUpdate:modelValue":a[1]||(a[1]=t=>s(o)?o.value=t:null)},null,512),[[i,l(o)]]),H]),e("label",I,[n(e("input",{type:"radio",name:"cameraMovement",value:"false","onUpdate:modelValue":a[2]||(a[2]=t=>s(o)?o.value=t:null)},null,512),[[i,l(o)]]),K])]),l(o)&&l(o)==="true"?(h(),_("div",L,[P,e("label",Q,[n(e("input",{type:"radio",name:"cameraMovementChoppy",value:"true","onUpdate:modelValue":a[3]||(a[3]=t=>s(r)?r.value=t:null)},null,512),[[i,l(r)]]),W]),e("label",X,[n(e("input",{type:"radio",name:"cameraMovementChoppy",value:"false","onUpdate:modelValue":a[4]||(a[4]=t=>s(r)?r.value=t:null)},null,512),[[i,l(r)]]),Z])])):g("",!0),l(o)==="true"?(h(),_("div",$,[ee,e("label",ae,[n(e("input",{type:"radio",name:"cameraMovementUnpredictable",value:"true","onUpdate:modelValue":a[5]||(a[5]=t=>s(d)?d.value=t:null)},null,512),[[i,l(d)]]),te]),e("label",le,[n(e("input",{type:"radio",name:"cameraMovementUnpredictable",value:"false","onUpdate:modelValue":a[6]||(a[6]=t=>s(d)?d.value=t:null)},null,512),[[i,l(d)]]),oe])])):g("",!0),l(o)==="true"?(h(),_("div",ne,[se,e("label",ie,[n(e("input",{type:"radio",name:"cameraMovementNoAlternativeMethods",value:"true","onUpdate:modelValue":a[7]||(a[7]=t=>s(u)?u.value=t:null)},null,512),[[i,l(u)]]),re]),e("label",de,[n(e("input",{type:"radio",name:"cameraMovementNoAlternativeMethods",value:"false","onUpdate:modelValue":a[8]||(a[8]=t=>s(u)?u.value=t:null)},null,512),[[i,l(u)]]),ue])])):g("",!0),e("div",me,[pe,e("label",ce,[n(e("input",{type:"radio",name:"avatarMovement",value:"true","onUpdate:modelValue":a[9]||(a[9]=t=>s(m)?m.value=t:null)},null,512),[[i,l(m)]]),ve]),e("label",_e,[n(e("input",{type:"radio",name:"avatarMovement",value:"false","onUpdate:modelValue":a[10]||(a[10]=t=>s(m)?m.value=t:null)},null,512),[[i,l(m)]]),he])]),be],32)])])])]))}};export{fe as default};
