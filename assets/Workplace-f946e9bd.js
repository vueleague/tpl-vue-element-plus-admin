import{_ as a}from"./avatar-4f383e99.js";import{v as e,x as t,y as s,a as l,z as n,d as r,r as d,q as o,A as c,o as i,c as p,e as u,g as m,w as x,t as v,B as f,F as y,C as g,h as w,D as _,k as h,s as k}from"./index-d7be3000.js";import{a as $,E as j}from"./el-col-0630a27f.js";import{E as b}from"./el-skeleton-item-8708063f.js";import{E}from"./el-card-77e37130.js";import{E as C}from"./el-divider-e5511c75.js";import{E as O}from"./el-link-51b32b72.js";import{_ as D}from"./CountTo.vue_vue_type_script_setup_true_lang-5083fe00.js";import{r as z,_ as M}from"./Echart.vue_vue_type_script_setup_true_lang-46dbde87.js";import{_ as N}from"./Highlight.vue_vue_type_script_lang-c668d49f.js";import"./debounce-d03dce44.js";const A={"zh-CN":{justNow:"刚刚",invalid:"无效时间",past:a=>a.match(/\d/)?`${a}前`:a,future:a=>a.match(/\d/)?`${a}后`:a,month:(a,e)=>1===a?e?"上个月":"下个月":`${a} 个月`,year:(a,e)=>1===a?e?"去年":"明年":`${a} 年`,day:(a,e)=>1===a?e?"昨天":"明天":`${a} 天`,week:(a,e)=>1===a?e?"上周":"下周":`${a} 周`,hour:a=>`${a} 小时`,minute:a=>`${a} 分钟`,second:a=>`${a} 秒`},en:{justNow:"刚刚",invalid:"Invalid Date",past:a=>a.match(/\d/)?`${a} ago`:a,future:a=>a.match(/\d/)?`in ${a}`:a,month:(a,e)=>1===a?e?"last month":"next month":`${a} month${a>1?"s":""}`,year:(a,e)=>1===a?e?"last year":"next year":`${a} year${a>1?"s":""}`,day:(a,e)=>1===a?e?"yesterday":"tomorrow":`${a} day${a>1?"s":""}`,week:(a,e)=>1===a?e?"last week":"next week":`${a} week${a>1?"s":""}`,hour:a=>`${a} hour${a>1?"s":""}`,minute:a=>`${a} minute${a>1?"s":""}`,second:a=>`${a} second${a>1?"s":""}`}},I=a=>{const n=e(),r=t((()=>n.getCurrentLocale));return s(a,{messages:A[l(r).lang]})},q={class:"flex items-center"},B=u("img",{src:a,alt:"",class:"w-70px h-70px rounded-[50%] mr-20px"},null,-1),F={class:"text-20px text-700"},H={class:"mt-10px text-14px text-gray-500"},L={class:"flex h-70px items-center justify-end <sm:mt-20px"},P={class:"px-8px text-right"},T={class:"text-14px text-gray-400 mb-20px"},U={class:"px-8px text-right"},W={class:"text-14px text-gray-400 mb-20px"},G={class:"px-8px text-right"},J={class:"text-14px text-gray-400 mb-20px"},K={class:"flex justify-between"},Q={class:"flex items-center"},R={class:"text-16px"},S={class:"mt-15px text-14px text-gray-400"},V={class:"mt-20px text-12px text-gray-400 flex justify-between"},X={class:"flex justify-between"},Y={class:"flex items-center"},Z=u("img",{src:a,alt:"",class:"w-35px h-35px rounded-[50%] mr-20px"},null,-1),aa={class:"text-14px"},ea={class:"mt-15px text-12px text-gray-400"},ta={class:"flex items-center"},sa=r({__name:"Workplace",setup(a){const e=d(!0);let t=o({project:0,access:0,todo:0});const s=async()=>{const a=await n.get({url:"/workplace/total"}).catch((()=>{}));a&&(t=Object.assign(t,a.data))};let r=o([]);const A=async()=>{const a=await n.get({url:"/workplace/project"}).catch((()=>{}));a&&(r=Object.assign(r,a.data))};let sa=o([]);const la=async()=>{const a=await n.get({url:"/workplace/dynamic"}).catch((()=>{}));a&&(sa=Object.assign(sa,a.data))};let na=o([]);const ra=async()=>{const a=await n.get({url:"/workplace/team"}).catch((()=>{}));a&&(na=Object.assign(na,a.data))};let da=o(z);const oa=async()=>{const a=await n.get({url:"/workplace/radar"}).catch((()=>{}));a&&(k(da,"radar.indicator",a.data.map((a=>({name:ca(a.name),max:a.max})))),k(da,"series",[{name:`xxx${ca("workplace.index")}`,type:"radar",data:[{value:a.data.map((a=>a.personal)),name:ca("workplace.personal")},{value:a.data.map((a=>a.team)),name:ca("workplace.team")}]}]))};(async()=>{await Promise.all([s(),A(),la(),ra(),oa()]),e.value=!1})();const{t:ca}=h();return(a,s)=>{const n=c("Icon");return i(),p(y,null,[u("div",null,[m(l(E),{shadow:"never"},{default:x((()=>[m(l(b),{loading:e.value,animated:""},{default:x((()=>[m(l($),{gutter:20,justify:"space-between"},{default:x((()=>[m(l(j),{xl:12,lg:12,md:12,sm:24,xs:24},{default:x((()=>[u("div",q,[B,u("div",null,[u("div",F,v(l(ca)("workplace.goodMorning"))+"，Archer，"+v(l(ca)("workplace.happyDay")),1),u("div",H,v(l(ca)("workplace.toady"))+"，20℃ - 32℃！ ",1)])])])),_:1}),m(l(j),{xl:12,lg:12,md:12,sm:24,xs:24},{default:x((()=>[u("div",L,[u("div",P,[u("div",T,v(l(ca)("workplace.project")),1),m(l(D),{class:"text-20px","start-val":0,"end-val":l(t).project,duration:2600},null,8,["end-val"])]),m(l(C),{direction:"vertical"}),u("div",U,[u("div",W,v(l(ca)("workplace.toDo")),1),m(l(D),{class:"text-20px","start-val":0,"end-val":l(t).todo,duration:2600},null,8,["end-val"])]),m(l(C),{direction:"vertical","border-style":"dashed"}),u("div",G,[u("div",J,v(l(ca)("workplace.access")),1),m(l(D),{class:"text-20px","start-val":0,"end-val":l(t).access,duration:2600},null,8,["end-val"])])])])),_:1})])),_:1})])),_:1},8,["loading"])])),_:1})]),m(l($),{class:"mt-20px",gutter:20,justify:"space-between"},{default:x((()=>[m(l(j),{xl:16,lg:16,md:24,sm:24,xs:24,class:"mb-20px"},{default:x((()=>[m(l(E),{shadow:"never"},{header:x((()=>[u("div",K,[u("span",null,v(l(ca)("workplace.project")),1),m(l(O),{type:"primary",underline:!1},{default:x((()=>[f(v(l(ca)("workplace.more")),1)])),_:1})])])),default:x((()=>[m(l(b),{loading:e.value,animated:""},{default:x((()=>[m(l($),null,{default:x((()=>[(i(!0),p(y,null,g(l(r),((a,e)=>(i(),w(l(j),{key:`card-${e}`,xl:8,lg:8,md:12,sm:24,xs:24},{default:x((()=>[m(l(E),{shadow:"hover"},{default:x((()=>[u("div",Q,[m(n,{icon:a.icon,size:25,class:"mr-10px"},null,8,["icon"]),u("span",R,v(a.name),1)]),u("div",S,v(l(ca)(a.message)),1),u("div",V,[u("span",null,v(a.personal),1),u("span",null,v(l(_)(a.time,"yyyy-MM-dd")),1)])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1},8,["loading"])])),_:1}),m(l(E),{shadow:"never",class:"mt-20px"},{header:x((()=>[u("div",X,[u("span",null,v(l(ca)("workplace.dynamic")),1),m(l(O),{type:"primary",underline:!1},{default:x((()=>[f(v(l(ca)("workplace.more")),1)])),_:1})])])),default:x((()=>[m(l(b),{loading:e.value,animated:""},{default:x((()=>[(i(!0),p(y,null,g(l(sa),((a,e)=>(i(),p("div",{key:`dynamics-${e}`},[u("div",Y,[Z,u("div",null,[u("div",aa,[m(l(N),{keys:a.keys.map((a=>l(ca)(a)))},{default:x((()=>[f(v(l(ca)("workplace.pushCode")),1)])),_:2},1032,["keys"])]),u("div",ea,v(l(I)(a.time)),1)])]),m(l(C))])))),128))])),_:1},8,["loading"])])),_:1})])),_:1}),m(l(j),{xl:8,lg:8,md:24,sm:24,xs:24,class:"mb-20px"},{default:x((()=>[m(l(E),{shadow:"never"},{header:x((()=>[u("span",null,v(l(ca)("workplace.shortcutOperation")),1)])),default:x((()=>[m(l(b),{loading:e.value,animated:""},{default:x((()=>[(i(),p(y,null,g(9,(a=>m(l(j),{key:`card-${a}`,xl:12,lg:12,md:12,sm:24,xs:24,class:"mb-10px"},{default:x((()=>[m(l(O),{type:"default",underline:!1},{default:x((()=>[f(v(l(ca)("workplace.operation"))+v(a),1)])),_:2},1024)])),_:2},1024))),64))])),_:1},8,["loading"])])),_:1}),m(l(E),{shadow:"never",class:"mt-20px"},{header:x((()=>[u("span",null,"xx"+v(l(ca)("workplace.index")),1)])),default:x((()=>[m(l(b),{loading:e.value,animated:""},{default:x((()=>[m(l(M),{options:l(da),height:400},null,8,["options"])])),_:1},8,["loading"])])),_:1}),m(l(E),{shadow:"never",class:"mt-20px"},{header:x((()=>[u("span",null,v(l(ca)("workplace.team")),1)])),default:x((()=>[m(l(b),{loading:e.value,animated:""},{default:x((()=>[m(l($),null,{default:x((()=>[(i(!0),p(y,null,g(l(na),(a=>(i(),w(l(j),{key:`team-${a.name}`,span:12,class:"mb-20px"},{default:x((()=>[u("div",ta,[m(n,{icon:a.icon,class:"mr-10px"},null,8,["icon"]),m(l(O),{type:"default",underline:!1},{default:x((()=>[f(v(a.name),1)])),_:2},1024)])])),_:2},1024)))),128))])),_:1})])),_:1},8,["loading"])])),_:1})])),_:1})])),_:1})],64)}}});export{sa as default};
