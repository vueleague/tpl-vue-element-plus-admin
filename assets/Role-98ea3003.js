import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-a21ceaea.js";import{d as a,k as s,I as r,r as t,o,h as i,w as l,g as m,a as p,B as n,t as d}from"./index-d7be3000.js";import{_ as u}from"./Table.vue_vue_type_script_lang-b78d29ca.js";import{b as _}from"./index-4c1e37a0.js";import{E as c}from"./el-button-f75734e0.js";import"./el-card-77e37130.js";import"./el-popper-daf49aa5.js";import"./index-acbbc940.js";import"./tsxHelper-fcb208b8.js";import"./event-5568c9d8.js";import"./index-bb4cc3a4.js";import"./el-input-1f746d58.js";import"./el-tag-2de61185.js";import"./index-ed021792.js";import"./scroll-d1ce5ce5.js";import"./debounce-d03dce44.js";import"./validator-c81d136b.js";const j=a({__name:"Role",setup(a){const{t:j}=s(),f=[{field:"index",label:j("userDemo.index"),type:"index"},{field:"username",label:j("userDemo.username")},{field:"password",label:j("userDemo.password")},{field:"role",label:j("userDemo.role")},{field:"remark",label:j("userDemo.remark"),formatter:e=>r("span","admin"===e.username?j("userDemo.remarkMessage1"):j("userDemo.remarkMessage2"))},{field:"action",label:j("userDemo.action")}],g=t(!0);let b=t([]);(async e=>{const a=await _({params:e||{pageIndex:1,pageSize:10}});a&&(b.value=a.data.list,g.value=!1)})();return(a,s)=>(o(),i(p(e),{title:p(j)("userDemo.title"),message:p(j)("userDemo.message")},{default:l((()=>[m(p(u),{columns:f,data:p(b),loading:g.value,selection:!1},{action:l((e=>[m(p(c),{type:"primary",onClick:e=>{}},{default:l((()=>[n(d(p(j)("tableDemo.action")),1)])),_:2},1032,["onClick"])])),_:1},8,["data","loading"])])),_:1},8,["title","message"]))}});export{j as default};
