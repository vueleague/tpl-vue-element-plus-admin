import{_ as e}from"./Write.vue_vue_type_script_setup_true_lang-5bba8bad.js";import{_ as t}from"./ContentDetailWrap.vue_vue_type_script_setup_true_lang-c78b4818.js";import{d as s,u as r,r as i,o as a,h as o,w as p,g as m,B as l,t as u,a as n,k as _}from"./index-d7be3000.js";import{E as j}from"./el-button-f75734e0.js";import{s as d}from"./index-1d0c84a5.js";import{u as c}from"./useEmitt-e3a3e468.js";import"./Form-edba205d.js";import"./el-col-0630a27f.js";import"./el-popper-daf49aa5.js";import"./index-acbbc940.js";import"./el-input-1f746d58.js";import"./event-5568c9d8.js";import"./index-bb4cc3a4.js";import"./el-tag-2de61185.js";import"./tsxHelper-fcb208b8.js";import"./index-ed021792.js";import"./scroll-d1ce5ce5.js";import"./debounce-d03dce44.js";import"./validator-c81d136b.js";import"./el-input-number-6842cbcb.js";import"./el-switch-5747c5e1.js";import"./el-divider-e5511c75.js";import"./InputPassword-0e3702b6.js";import"./_plugin-vue_export-helper-1b428a4d.js";import"./style.css_vue_type_style_index_0_src_true_lang-9ed36e75.js";import"./aria-ecee1d93.js";import"./useForm-ceeecdcf.js";import"./useValidator-48f5904a.js";import"./el-card-77e37130.js";import"./Sticky.vue_vue_type_script_setup_true_lang-55933770.js";const v=s({__name:"ExampleAdd",setup(s){const{emitter:v}=c(),{push:x}=r(),{t:f}=_(),g=i(),y=i(!1),w=async()=>{var e;const t=n(g);await(null==(e=null==t?void 0:t.elFormRef)?void 0:e.validate((async e=>{if(e){y.value=!0;const e=await(null==t?void 0:t.getFormData());await d(e).catch((()=>{})).finally((()=>{y.value=!1}))&&(v.emit("getList","add"),x("/example/example-page"))}})))};return(s,r)=>(a(),o(n(t),{title:n(f)("exampleDemo.add"),onBack:r[0]||(r[0]=e=>n(x)("/example/example-page"))},{right:p((()=>[m(n(j),{type:"primary",loading:y.value,onClick:w},{default:p((()=>[l(u(n(f)("exampleDemo.save")),1)])),_:1},8,["loading"])])),default:p((()=>[m(e,{ref_key:"writeRef",ref:g},null,512)])),_:1},8,["title"]))}});export{v as default};
