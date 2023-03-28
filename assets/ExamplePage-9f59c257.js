import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-a21ceaea.js";import{_ as t}from"./Search.vue_vue_type_script_setup_true_lang-d8cac8e5.js";import{d as a,u as o,q as l,I as i,r as s,o as r,h as m,w as p,a as n,k as d,g as c,e as u,B as g,t as _}from"./index-d7be3000.js";import{E as j}from"./el-button-f75734e0.js";import{E as b}from"./el-tag-2de61185.js";import{_ as f}from"./Table.vue_vue_type_script_lang-b78d29ca.js";import{g as x,d as v}from"./index-1d0c84a5.js";import{u as h}from"./useTable-7e620bd0.js";import{u as y}from"./useEmitt-e3a3e468.js";import{u as D}from"./useCrudSchemas-c6cecb35.js";import"./el-card-77e37130.js";import"./el-popper-daf49aa5.js";import"./index-acbbc940.js";import"./Form-edba205d.js";import"./el-col-0630a27f.js";import"./el-input-1f746d58.js";import"./event-5568c9d8.js";import"./index-bb4cc3a4.js";import"./tsxHelper-fcb208b8.js";import"./index-ed021792.js";import"./scroll-d1ce5ce5.js";import"./debounce-d03dce44.js";import"./validator-c81d136b.js";import"./el-input-number-6842cbcb.js";import"./el-switch-5747c5e1.js";import"./el-divider-e5511c75.js";import"./InputPassword-0e3702b6.js";import"./_plugin-vue_export-helper-1b428a4d.js";import"./style.css_vue_type_style_index_0_src_true_lang-9ed36e75.js";import"./aria-ecee1d93.js";import"./useForm-ceeecdcf.js";import"./el-message-box-55a1fd81.js";import"./el-overlay-5806737b.js";import"./vnode-7d43b0b2.js";import"./tree-b59d36bb.js";const w={class:"mb-10px"},S=a({name:"ExamplePage"}),C=a({...S,setup(a){const{push:S}=o(),{register:C,tableObject:k,methods:P}=h({getListApi:x,delListApi:v,response:{list:"list",total:"total"}}),{getList:L,setSearchParams:R}=P;L(),y({name:"getList",callback:e=>{"add"===e&&(k.currentPage=1),L()}});const{t:z}=d(),E=l([{field:"index",label:z("tableDemo.index"),type:"index"},{field:"title",label:z("tableDemo.title"),search:{show:!0}},{field:"author",label:z("tableDemo.author")},{field:"display_time",label:z("tableDemo.displayTime")},{field:"importance",label:z("tableDemo.importance"),formatter:(e,t,a)=>i(b,{type:1===a?"success":2===a?"warning":"danger"},(()=>z(1===a?"tableDemo.important":2===a?"tableDemo.good":"tableDemo.commonly")))},{field:"pageviews",label:z("tableDemo.pageviews")},{field:"content",label:z("exampleDemo.content"),table:{show:!1}},{field:"action",width:"260px",label:z("tableDemo.action")}]),{allSchemas:T}=D(E),U=()=>{S("/example/example-add")},$=s(!1),q=async(e,t)=>{var a;k.currentRow=e;const{delList:o,getSelections:l}=P,i=await l();$.value=!0,await o(t?i.map((e=>e.id)):[null==(a=k.currentRow)?void 0:a.id],t).finally((()=>{$.value=!1}))},A=(e,t)=>{S(`/example/example-${t}?id=${e.id}`)};return(a,o)=>(r(),m(n(e),null,{default:p((()=>[c(n(t),{schema:n(T).searchSchema,onSearch:n(R),onReset:n(R)},null,8,["schema","onSearch","onReset"]),u("div",w,[c(n(j),{type:"primary",onClick:U},{default:p((()=>[g(_(n(z)("exampleDemo.add")),1)])),_:1}),c(n(j),{loading:$.value,type:"danger",onClick:o[0]||(o[0]=e=>q(null,!0))},{default:p((()=>[g(_(n(z)("exampleDemo.del")),1)])),_:1},8,["loading"])]),c(n(f),{pageSize:n(k).pageSize,"onUpdate:pageSize":o[1]||(o[1]=e=>n(k).pageSize=e),currentPage:n(k).currentPage,"onUpdate:currentPage":o[2]||(o[2]=e=>n(k).currentPage=e),columns:n(T).tableColumns,data:n(k).tableList,loading:n(k).loading,pagination:{total:n(k).total},onRegister:n(C)},{action:p((({row:e})=>[c(n(j),{type:"primary",onClick:t=>A(e,"edit")},{default:p((()=>[g(_(n(z)("exampleDemo.edit")),1)])),_:2},1032,["onClick"]),c(n(j),{type:"success",onClick:t=>A(e,"detail")},{default:p((()=>[g(_(n(z)("exampleDemo.detail")),1)])),_:2},1032,["onClick"]),c(n(j),{type:"danger",onClick:t=>q(e,!1)},{default:p((()=>[g(_(n(z)("exampleDemo.del")),1)])),_:2},1032,["onClick"])])),_:1},8,["pageSize","currentPage","columns","data","loading","pagination","onRegister"])])),_:1}))}});export{C as default};
