import{F as e}from"./Form-b42d4de4.js";import{u as r}from"./useForm-4532d248.js";import{u as t}from"./useValidator-6dacdda0.js";import{d as s,q as o,W as a,o as m,h as i,a as u}from"./index-49a290d0.js";const n=s({__name:"Write",props:{currentRow:{type:Object,default:()=>null},formSchema:{type:Array,default:()=>[]}},setup(s,{expose:n}){const p=s,{required:l}=t(),c=o({title:[l()],author:[l()],importance:[l()],pageviews:[l()],display_time:[l()],content:[l()]}),{register:f,methods:d,elFormRef:F}=r({schema:p.formSchema});return a((()=>p.currentRow),(e=>{if(!e)return;const{setValues:r}=d;r(e)}),{deep:!0,immediate:!0}),n({elFormRef:F,getFormData:d.getFormData}),(r,t)=>(m(),i(u(e),{rules:c,onRegister:u(f)},null,8,["rules","onRegister"]))}});export{n as _};
