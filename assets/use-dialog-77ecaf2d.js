import{K as e,aE as o,L as l,aq as a,aH as t,S as n,r as s,bP as u,x as c,at as d,W as r,X as p,E as f,bW as i,cV as y,a$ as v}from"./index-d7be3000.js";import{U as m}from"./event-5568c9d8.js";import{u as C}from"./index-acbbc940.js";import{a as b}from"./el-overlay-5806737b.js";const B=e({center:{type:Boolean,default:!1},alignCenter:{type:Boolean,default:!1},closeIcon:{type:o},customClass:{type:String,default:""},draggable:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},showClose:{type:Boolean,default:!0},title:{type:String,default:""}}),g={close:()=>!0},x=e({...B,appendToBody:{type:Boolean,default:!1},beforeClose:{type:l(Function)},destroyOnClose:{type:Boolean,default:!1},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:{type:Boolean,default:!1},modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1}}),D={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[m]:e=>a(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},F=(e,o)=>{const l=t().emit,{nextZIndex:a}=n();let B="";const g=C(),x=C(),D=s(!1),F=s(!1),S=s(!1),I=s(e.zIndex||a());let O,h;const A=u("namespace",i),k=c((()=>{const o={},l=`--${A.value}-dialog`;return e.fullscreen||(e.top&&(o[`${l}-margin-top`]=e.top),e.width&&(o[`${l}-width`]=d(e.width))),o})),w=c((()=>e.alignCenter?{display:"flex"}:{}));function E(){null==h||h(),null==O||O(),e.openDelay&&e.openDelay>0?({stop:O}=y((()=>N()),e.openDelay)):N()}function j(){null==O||O(),null==h||h(),e.closeDelay&&e.closeDelay>0?({stop:h}=y((()=>P()),e.closeDelay)):P()}function z(){e.beforeClose?e.beforeClose((function(e){e||(F.value=!0,D.value=!1)})):j()}function N(){v&&(D.value=!0)}function P(){D.value=!1}return e.lockScroll&&b(D),r((()=>e.modelValue),(t=>{t?(F.value=!1,E(),S.value=!0,I.value=e.zIndex?I.value++:a(),p((()=>{l("open"),o.value&&(o.value.scrollTop=0)}))):D.value&&j()})),r((()=>e.fullscreen),(e=>{o.value&&(e?(B=o.value.style.transform,o.value.style.transform=""):o.value.style.transform=B)})),f((()=>{e.modelValue&&(D.value=!0,S.value=!0,E())})),{afterEnter:function(){l("opened")},afterLeave:function(){l("closed"),l(m,!1),e.destroyOnClose&&(S.value=!1)},beforeLeave:function(){l("close")},handleClose:z,onModalClick:function(){e.closeOnClickModal&&z()},close:j,doClose:P,onOpenAutoFocus:function(){l("openAutoFocus")},onCloseAutoFocus:function(){l("closeAutoFocus")},onCloseRequested:function(){e.closeOnPressEscape&&z()},onFocusoutPrevented:function(e){var o;"pointer"===(null==(o=e.detail)?void 0:o.focusReason)&&e.preventDefault()},titleId:g,bodyId:x,closed:F,style:k,overlayDialogStyle:w,rendered:S,visible:D,zIndex:I}};export{g as a,x as b,D as c,B as d,F as u};
