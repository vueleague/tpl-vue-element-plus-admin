import{d as e,az as l,at as t,R as s,I as a,K as r,a as n,o,c as i,e as c,F as d,C as p,h as u,g as b,ab as m,bc as f,aI as v,bv as y,ay as g,x as h,n as x,a9 as w,B as k,t as S,G as _,af as $,aL as j,ag as D,b as E,b3 as N,r as I,A,w as C,j as z,a7 as O,a8 as W,ah as B,aK as K}from"./index-d7be3000.js";import{i as R,E as F}from"./el-popper-daf49aa5.js";import{g as G,f as L}from"./vnode-7d43b0b2.js";import{E as M}from"./index-2afaceea.js";import{_ as P}from"./_plugin-vue_export-helper-1b428a4d.js";const V=Symbol("elDescriptions");var q=e({name:"ElDescriptionsCell",props:{cell:{type:Object},tag:{type:String},type:{type:String}},setup:()=>({descriptions:l(V,{})}),render(){var e,l,r,n,o,i;const c=G(this.cell),{border:d,direction:p}=this.descriptions,u="vertical"===p,b=(null==(r=null==(l=null==(e=this.cell)?void 0:e.children)?void 0:l.label)?void 0:r.call(l))||c.label,m=null==(i=null==(o=null==(n=this.cell)?void 0:n.children)?void 0:o.default)?void 0:i.call(o),f=c.span,v=c.align?`is-${c.align}`:"",y=c.labelAlign?`is-${c.labelAlign}`:v,g=c.className,h=c.labelClassName,x={width:t(c.width),minWidth:t(c.minWidth)},w=s("descriptions");switch(this.type){case"label":return a(this.tag,{style:x,class:[w.e("cell"),w.e("label"),w.is("bordered-label",d),w.is("vertical-label",u),y,h],colSpan:u?f:1},b);case"content":return a(this.tag,{style:x,class:[w.e("cell"),w.e("content"),w.is("bordered-content",d),w.is("vertical-content",u),v,g],colSpan:u?f:2*f-1},m);default:return a("td",{style:x,class:[w.e("cell"),v],colSpan:f},[R(b)?void 0:a("span",{class:[w.e("label"),h]},b),a("span",{class:[w.e("content"),g]},m)])}}});const H=r({row:{type:Array,default:()=>[]}}),J={key:1},Q=e({name:"ElDescriptionsRow"});var T=m(e({...Q,props:H,setup(e){const t=l(V,{});return(e,l)=>"vertical"===n(t).direction?(o(),i(d,{key:0},[c("tr",null,[(o(!0),i(d,null,p(e.row,((e,l)=>(o(),u(n(q),{key:`tr1-${l}`,cell:e,tag:"th",type:"label"},null,8,["cell"])))),128))]),c("tr",null,[(o(!0),i(d,null,p(e.row,((e,l)=>(o(),u(n(q),{key:`tr2-${l}`,cell:e,tag:"td",type:"content"},null,8,["cell"])))),128))])],64)):(o(),i("tr",J,[(o(!0),i(d,null,p(e.row,((e,l)=>(o(),i(d,{key:`tr3-${l}`},[n(t).border?(o(),i(d,{key:0},[b(n(q),{cell:e,tag:"td",type:"label"},null,8,["cell"]),b(n(q),{cell:e,tag:"td",type:"content"},null,8,["cell"])],64)):(o(),u(n(q),{key:1,cell:e,tag:"td",type:"both"},null,8,["cell"]))],64)))),128))]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/descriptions/src/descriptions-row.vue"]]);const U=r({border:{type:Boolean,default:!1},column:{type:Number,default:3},direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},size:f,title:{type:String,default:""},extra:{type:String,default:""}}),X=e({name:"ElDescriptions"});var Y=m(e({...X,props:U,setup(e){const l=e,t=s("descriptions"),a=v(),r=y();g(V,l);const b=h((()=>[t.b(),t.m(a.value)])),m=(e,l,t,s=!1)=>(e.props||(e.props={}),l>t&&(e.props.span=t),s&&(e.props.span=l),e),f=()=>{var e;const t=L(null==(e=r.default)?void 0:e.call(r)).filter((e=>{var l;return"ElDescriptionsItem"===(null==(l=null==e?void 0:e.type)?void 0:l.name)})),s=[];let a=[],n=l.column,o=0;return t.forEach(((e,r)=>{var i;const c=(null==(i=e.props)?void 0:i.span)||1;if(r<t.length-1&&(o+=c>n?n:c),r===t.length-1){const t=l.column-o%l.column;return a.push(m(e,t,n,!0)),void s.push(a)}c<n?(n-=c,a.push(e)):(a.push(m(e,c,n)),s.push(a),n=l.column,a=[])})),s};return(e,l)=>(o(),i("div",{class:x(n(b))},[e.title||e.extra||e.$slots.title||e.$slots.extra?(o(),i("div",{key:0,class:x(n(t).e("header"))},[c("div",{class:x(n(t).e("title"))},[w(e.$slots,"title",{},(()=>[k(S(e.title),1)]))],2),c("div",{class:x(n(t).e("extra"))},[w(e.$slots,"extra",{},(()=>[k(S(e.extra),1)]))],2)],2)):_("v-if",!0),c("div",{class:x(n(t).e("body"))},[c("table",{class:x([n(t).e("table"),n(t).is("bordered",e.border)])},[c("tbody",null,[(o(!0),i(d,null,p(f(),((e,l)=>(o(),u(T,{key:l,row:e},null,8,["row"])))),128))])],2)],2)],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/descriptions/src/description.vue"]]),Z=e({name:"ElDescriptionsItem",props:{label:{type:String,default:""},span:{type:Number,default:1},width:{type:[String,Number],default:""},minWidth:{type:[String,Number],default:""},align:{type:String,default:"left"},labelAlign:{type:String,default:""},className:{type:String,default:""},labelClassName:{type:String,default:""}}});const ee=$(Y,{DescriptionsItem:Z}),le=j(Z),te={class:"flex items-center"},se=P(e({__name:"Descriptions",props:{title:D.string.def(""),message:D.string.def(""),collapse:D.bool.def(!0),schema:{type:Array,default:()=>[]},data:{type:Object,default:()=>({})}},setup(e){const l=e,t=E(),s=h((()=>t.getMobile)),a=N(),r=y(),{getPrefixCls:m}=z(),f=m("descriptions"),v=h((()=>{const e=["title","message","collapse","schema","data","class"],t={...a,...l};for(const l in t)-1!==e.indexOf(l)&&delete t[l];return t})),g=I(!0),$=()=>{l.collapse&&(g.value=!n(g))};return(l,t)=>{const a=A("Icon");return o(),i("div",{class:x([n(f),"bg-[var(--el-color-white)] dark:bg-[var(--el-bg-color)] dark:border-[var(--el-border-color)] dark:border-1px"])},[e.title?(o(),i("div",{key:0,class:x([`${n(f)}-header`,"h-50px flex justify-between items-center border-bottom-1 border-solid border-[var(--tags-view-border-color)] px-10px cursor-pointer dark:border-[var(--el-border-color)]"]),onClick:$},[c("div",{class:x([`${n(f)}-header__title`,"relative font-18px font-bold ml-10px"])},[c("div",te,[k(S(e.title)+" ",1),e.message?(o(),u(n(F),{key:0,content:e.message,placement:"right"},{default:C((()=>[b(a,{icon:"ep:warning",class:"ml-5px"})])),_:1},8,["content"])):_("",!0)])],2),e.collapse?(o(),u(a,{key:0,icon:g.value?"ep:arrow-down":"ep:arrow-up"},null,8,["icon"])):_("",!0)],2)):_("",!0),b(n(M),null,{default:C((()=>[O(c("div",{class:x([`${n(f)}-content`,"p-10px"])},[b(n(ee),B({column:2,border:"",direction:n(s)?"vertical":"horizontal"},n(v)),K({default:C((()=>[(o(!0),i(d,null,p(e.schema,(t=>(o(),u(n(le),B({key:t.field},(e=>{const l=["field"],t={...e};for(const s in t)-1!==l.indexOf(s)&&delete t[s];return t})(t)),{label:C((()=>[w(l.$slots,`${t.field}-label`,{row:{label:t.label}},(()=>[k(S(t.label),1)]),!0)])),default:C((()=>[w(l.$slots,t.field,{row:e.data},(()=>[k(S(e.data[t.field]),1)]),!0)])),_:2},1040)))),128))])),_:2},[n(r).extra?{name:"extra",fn:C((()=>[w(l.$slots,"extra",{},void 0,!0)])),key:"0"}:void 0]),1040,["direction"])],2),[[W,g.value]])])),_:3})],2)}}}),[["__scopeId","data-v-129eed4f"]]);export{se as D};
