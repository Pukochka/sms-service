import{d as f,r as $,a as n,_ as u,o as s,c as d,e as r,F as h,f as v,g,h as P,i as _,t as l,j as b,k as q,l as k,w as x,p as C,m as y,b as S}from"./index.1696587b.js";import{u as w,a as B}from"./use-dark.40216ff8.js";import{c as E,h as I}from"./render.5daac9a1.js";const D=f({id:"ProductsStore",state:()=>$({products:[{title:"123",desc:"lorem ipsum",id:1},{title:"56745",desc:"lorem ipsum",id:2},{title:"4654",desc:"lorem ipsum",id:3}]}),getters:{ViewProducts:e=>e.products},actions:{}}),A=n({name:"CatalogPage",setup(){const e=D();return console.log(e.products),{store:e}}}),O={class:""},V=r("div",{class:"text-h6"},"Mails",-1),W={class:"row q-col-gutter-sm"};function j(e,t,o,a,c,i){const m=g("ProductElement");return s(),d("div",O,[V,r("div",W,[(s(!0),d(h,null,v(e.store.products,p=>(s(),P(m,{key:p.id,prod:p},null,8,["prod"]))),128))])])}var F=u(A,[["render",j]]);const M=n({name:"OrderPage",setup(){return{WebApp:_(()=>window.Telegram)}}}),N={class:"text-h6"};function Q(e,t,o,a,c,i){return s(),d("div",N,l(e.WebApp),1)}var L=u(M,[["render",Q]]);const T=n({name:"ProfilePage",setup(){return{}}}),z={class:"text-h6"};function G(e,t,o,a,c,i){return s(),d("div",z,"Movies")}var H=u(T,[["render",G]]),J=E({name:"QCard",props:{...w,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:t}){const{proxy:{$q:o}}=q(),a=B(e,o),c=_(()=>"q-card"+(a.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>b(e.tag,{class:c.value},I(t.default))}});const K=n({name:"ProductElement",props:{prod:{type:Object,required:!0}},setup(){return{}}}),R=e=>(C("data-v-fee074b0"),e=e(),y(),e),U={class:"col-12 col-sm-6 col-md-4"},X=R(()=>r("div",{class:"img q-pa-lg bg-grey-7 rounded-borders border-r-1"},null,-1)),Y={class:"q-pl-md"},Z={class:"text-h6"},ee={class:""};function te(e,t,o,a,c,i){return s(),d("div",U,[k(J,{class:"product-card flex q-pa-sm"},{default:x(()=>[X,r("div",Y,[r("div",Z,l(e.prod.title),1),r("div",ee,l(e.prod.desc),1)])]),_:1})])}var se=u(K,[["render",te],["__scopeId","data-v-fee074b0"]]),ce=S(async({app:e})=>{[F,L,H,se].forEach(t=>e.component(t.name,t))});export{ce as default};