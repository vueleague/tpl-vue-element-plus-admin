import{d as e,ag as t,r as s,E as a,A as r,o as l,c as i,g as o,w as n,a as p,e as c,n as d,j as f,B as _,t as x,a9 as m,k as u}from"./index-d7be3000.js";import{E as g}from"./el-card-77e37130.js";import{E as v}from"./el-button-f75734e0.js";import{_ as b}from"./Sticky.vue_vue_type_script_setup_true_lang-55933770.js";const h={class:"text-16px font-700"},$={style:{padding:"var(--app-content-padding)"}},k=e({__name:"ContentDetailWrap",props:{title:t.string.def(""),message:t.string.def("")},emits:["back"],setup(e,{emit:t}){const{t:k}=u(),{getPrefixCls:j}=f(),y=j("content-detail-wrap"),w=s(85),C=s();return a((()=>{w.value=C.value.getBoundingClientRect().top})),(s,a)=>{const f=r("Icon");return l(),i("div",{class:d([`${p(y)}-container`,"relative bg-[#fff]"]),ref_key:"contentDetailWrap",ref:C},[o(p(b),{offset:w.value},{default:n((()=>[c("div",{class:d([`${p(y)}-header`,"flex border-bottom-1 h-50px items-center text-center bg-white pr-10px"])},[c("div",{class:d([`${p(y)}-header__back`,"flex pl-10px pr-10px "])},[o(p(v),{onClick:a[0]||(a[0]=e=>t("back"))},{default:n((()=>[o(f,{icon:"ep:arrow-left",class:"mr-5px"}),_(" "+x(p(k)("common.back")),1)])),_:1})],2),c("div",{class:d([`${p(y)}-header__title`,"flex flex-1  justify-center"])},[m(s.$slots,"title",{},(()=>[c("label",h,x(e.title),1)]))],2),c("div",{class:d([`${p(y)}-header__right`,"flex  pl-10px pr-10px"])},[m(s.$slots,"right")],2)],2)])),_:3},8,["offset"]),c("div",$,[o(p(g),{class:d([`${p(y)}-body`,"mb-20px"]),shadow:"never"},{default:n((()=>[c("div",null,[m(s.$slots,"default")])])),_:3},8,["class"])])],2)}}});export{k as _};
