import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-a21ceaea.js";import{d as t,b as a,x as r,ak as n,o,h as s,w as i,g as l,B as m,t as d,a as c,k as p}from"./index-d7be3000.js";import{E as u}from"./el-button-f75734e0.js";import"./el-card-77e37130.js";import"./el-popper-daf49aa5.js";import"./index-acbbc940.js";import"./index-bb4cc3a4.js";const k=Symbol("watermark-dom");const g=t({__name:"useWatermark",setup(t){const g=a(),y=r((()=>g.getTitle)),{setWatermark:f,clear:h}=function(e=document.body){let t=()=>{};const a=k.toString(),r=()=>{const r=document.getElementById(a);r&&e&&e.removeChild(r),window.removeEventListener("resize",t)},n=t=>{r();const n=document.createElement("canvas");n.width=300,n.height=240;const o=n.getContext("2d");o&&(o.rotate(-20*Math.PI/120),o.font="15px Vedana",o.fillStyle="rgba(0, 0, 0, 0.15)",o.textAlign="left",o.textBaseline="middle",o.fillText(t,n.width/20,n.height));const s=document.createElement("div");return s.id=a,s.style.pointerEvents="none",s.style.top="0px",s.style.left="0px",s.style.position="absolute",s.style.zIndex="100000000",s.style.width=document.documentElement.clientWidth+"px",s.style.height=document.documentElement.clientHeight+"px",s.style.background="url("+n.toDataURL("image/png")+") left top repeat",e&&e.appendChild(s),a};return{setWatermark:function(e){n(e),t=()=>{n(e)},window.addEventListener("resize",t)},clear:r}}(),{t:x}=p();return n((()=>{h()})),(t,a)=>(o(),s(c(e),{title:"useWatermark"},{default:i((()=>[l(c(u),{type:"primary",onClick:a[0]||(a[0]=e=>c(f)(c(y)))},{default:i((()=>[m(d(c(x)("watermarkDemo.createdWatermark")),1)])),_:1}),l(c(u),{type:"danger",onClick:c(h)},{default:i((()=>[m(d(c(x)("watermarkDemo.clearWatermark")),1)])),_:1},8,["onClick"]),l(c(u),{type:"warning",onClick:a[1]||(a[1]=e=>c(f)(`New${c(y)}`))},{default:i((()=>[m(d(c(x)("watermarkDemo.resetWatermark")),1)])),_:1})])),_:1}))}});export{g as default};
