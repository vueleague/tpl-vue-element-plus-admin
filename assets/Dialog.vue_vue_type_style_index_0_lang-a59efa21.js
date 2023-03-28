import{d as e,az as s,x as o,o as a,c as l,e as t,a9 as n,n as r,a as i,t as c,g as d,w as u,h as f,a4 as m,_ as p,G as g,Y as b,ab as v,cU as y,bv as h,R as x,r as k,ay as C,a7 as $,ah as _,aK as R,a8 as A,i as w,aa as F,af as I,ag as j,cs as H,W as z,A as E,b3 as M,B as L,aF as D,X as S}from"./index-49a290d0.js";import{u as T,E as B,b as q}from"./el-overlay-73010e68.js";import{d as O,a as P,b as U,c as K,u as V}from"./use-dialog-920c9c4d.js";import{u as G}from"./index-f70a908c.js";import{F as N,e as W}from"./el-popper-a90ba639.js";import{c as X}from"./refs-c4c6679c.js";import{u as Y}from"./el-button-2ca4fc68.js";const J=Symbol("dialogInjectionKey"),Q=["aria-label"],Z=["id"],ee=e({name:"ElDialogContent"});var se=v(e({...ee,props:O,emits:P,setup(e){const v=e,{t:h}=G(),{Close:x}=y,{dialogRef:k,headerRef:C,bodyId:$,ns:_,style:R}=s(J),{focusTrapRef:A}=s(N),w=X(A,k),F=o((()=>v.draggable));return T(k,C,F),(e,s)=>(a(),l("div",{ref:i(w),class:r([i(_).b(),i(_).is("fullscreen",e.fullscreen),i(_).is("draggable",i(F)),i(_).is("align-center",e.alignCenter),{[i(_).m("center")]:e.center},e.customClass]),style:b(i(R)),tabindex:"-1"},[t("header",{ref_key:"headerRef",ref:C,class:r(i(_).e("header"))},[n(e.$slots,"header",{},(()=>[t("span",{role:"heading",class:r(i(_).e("title"))},c(e.title),3)])),e.showClose?(a(),l("button",{key:0,"aria-label":i(h)("el.dialog.close"),class:r(i(_).e("headerbtn")),type:"button",onClick:s[0]||(s[0]=s=>e.$emit("close"))},[d(i(p),{class:r(i(_).e("close"))},{default:u((()=>[(a(),f(m(e.closeIcon||i(x))))])),_:1},8,["class"])],10,Q)):g("v-if",!0)],2),t("div",{id:i($),class:r(i(_).e("body"))},[n(e.$slots,"default")],10,Z),e.$slots.footer?(a(),l("footer",{key:0,class:r(i(_).e("footer"))},[n(e.$slots,"footer")],2)):g("v-if",!0)],6))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog-content.vue"]]);const oe=["aria-label","aria-labelledby","aria-describedby"],ae=e({name:"ElDialog",inheritAttrs:!1});const le=I(v(e({...ae,props:U,emits:K,setup(e,{expose:s}){const l=e,c=h();Y({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},o((()=>!!c.title))),Y({scope:"el-dialog",from:"custom-class",replacement:"class",version:"2.3.0",ref:"https://element-plus.org/en-US/component/dialog.html#attributes",type:"Attribute"},o((()=>!!l.customClass)));const m=x("dialog"),p=k(),v=k(),y=k(),{visible:I,titleId:j,bodyId:H,style:z,overlayDialogStyle:E,rendered:M,zIndex:L,afterEnter:D,afterLeave:S,beforeLeave:T,handleClose:O,onModalClick:P,onOpenAutoFocus:U,onCloseAutoFocus:K,onCloseRequested:G,onFocusoutPrevented:N}=V(l,p);C(J,{dialogRef:p,headerRef:v,bodyId:H,ns:m,rendered:M,style:z});const X=q(P),Q=o((()=>l.draggable&&!l.fullscreen));return s({visible:I,dialogContentRef:y}),(e,s)=>(a(),f(F,{to:"body",disabled:!e.appendToBody},[d(w,{name:"dialog-fade",onAfterEnter:i(D),onAfterLeave:i(S),onBeforeLeave:i(T),persisted:""},{default:u((()=>[$(d(i(B),{"custom-mask-event":"",mask:e.modal,"overlay-class":e.modalClass,"z-index":i(L)},{default:u((()=>[t("div",{role:"dialog","aria-modal":"true","aria-label":e.title||void 0,"aria-labelledby":e.title?void 0:i(j),"aria-describedby":i(H),class:r(`${i(m).namespace.value}-overlay-dialog`),style:b(i(E)),onClick:s[0]||(s[0]=(...e)=>i(X).onClick&&i(X).onClick(...e)),onMousedown:s[1]||(s[1]=(...e)=>i(X).onMousedown&&i(X).onMousedown(...e)),onMouseup:s[2]||(s[2]=(...e)=>i(X).onMouseup&&i(X).onMouseup(...e))},[d(i(W),{loop:"",trapped:i(I),"focus-start-el":"container",onFocusAfterTrapped:i(U),onFocusAfterReleased:i(K),onFocusoutPrevented:i(N),onReleaseRequested:i(G)},{default:u((()=>[i(M)?(a(),f(se,_({key:0,ref_key:"dialogContentRef",ref:y},e.$attrs,{"custom-class":e.customClass,center:e.center,"align-center":e.alignCenter,"close-icon":e.closeIcon,draggable:i(Q),fullscreen:e.fullscreen,"show-close":e.showClose,title:e.title,onClose:i(O)}),R({header:u((()=>[e.$slots.title?n(e.$slots,"title",{key:1}):n(e.$slots,"header",{key:0,close:i(O),titleId:i(j),titleClass:i(m).e("title")})])),default:u((()=>[n(e.$slots,"default")])),_:2},[e.$slots.footer?{name:"footer",fn:u((()=>[n(e.$slots,"footer")]))}:void 0]),1040,["custom-class","center","align-center","close-icon","draggable","fullscreen","show-close","title","onClose"])):g("v-if",!0)])),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,oe)])),_:3},8,["mask","overlay-class","z-index"]),[[A,i(I)]])])),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog.vue"]])),te={class:"flex justify-between"},ne=e({__name:"Dialog",props:{modelValue:j.bool.def(!1),title:j.string.def("Dialog"),fullscreen:j.bool.def(!0),maxHeight:j.oneOfType([String,Number]).def("500px")},setup(e){const s=e,l=h(),r=o((()=>{const e=["fullscreen","title","maxHeight"],o={...M(),...s};for(const s in o)-1!==e.indexOf(s)&&delete o[s];return o})),m=k(!1),p=()=>{m.value=!i(m)},v=k(H(s.maxHeight)?`${s.maxHeight}px`:s.maxHeight);z((()=>m.value),(async e=>{if(await S(),e){const e=document.documentElement.offsetHeight;v.value=e-55-60-(l.footer?63:0)+"px"}else v.value=H(s.maxHeight)?`${s.maxHeight}px`:s.maxHeight}),{immediate:!0});const y=o((()=>({height:i(v)})));return(s,o)=>{const v=E("Icon");return a(),f(i(le),_(i(r),{fullscreen:m.value,"destroy-on-close":"","lock-scroll":"",draggable:"","close-on-click-modal":!1}),R({header:u((()=>[t("div",te,[n(s.$slots,"title",{},(()=>[L(c(e.title),1)])),e.fullscreen?(a(),f(v,{key:0,class:"mr-18px cursor-pointer is-hover mt-2px z-10",icon:m.value?"zmdi:fullscreen-exit":"zmdi:fullscreen",color:"var(--el-color-info)",onClick:p},null,8,["icon"])):g("",!0)])])),default:u((()=>[d(i(D),{style:b(i(y))},{default:u((()=>[n(s.$slots,"default")])),_:3},8,["style"])])),_:2},[i(l).footer?{name:"footer",fn:u((()=>[n(s.$slots,"footer")])),key:"0"}:void 0]),1040,["fullscreen"])}}});export{ne as _};
