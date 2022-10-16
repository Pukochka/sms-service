import{E as S,x as ee,K as te,L as $,M,P as O,G as V,Q as B,r as W,i as v,B as ne,k as N,j as P,X as ae,y as oe,Z as re,A as b,C as X,D as ie,S as se,_ as ue,a as le,o as ce,h as pe,w as q,g as E,l as g}from"./index.3132da9b.js";import{b as de,h as T,c as F,d as ve}from"./render.9d3a9ebc.js";import{g as H,s as R,c as fe,u as me}from"./MainStore.2dc60c71.js";import{g as he}from"./vm.065e6a9e.js";import{u as ge,a as Pe}from"./use-dark.ac970539.js";function ye(t){const n=[.06,6,50];return typeof t=="string"&&t.length&&t.split(":").forEach((s,r)=>{const u=parseFloat(s);u&&(n[r]=u)}),n}var Ce=de({name:"touch-swipe",beforeMount(t,{value:n,arg:s,modifiers:r}){if(r.mouse!==!0&&S.has.touch!==!0)return;const u=r.mouseCapture===!0?"Capture":"",e={handler:n,sensitivity:ye(s),direction:H(r),noop:ee,mouseStart(a){R(a,e)&&te(a)&&($(e,"temp",[[document,"mousemove","move",`notPassive${u}`],[document,"mouseup","end","notPassiveCapture"]]),e.start(a,!0))},touchStart(a){if(R(a,e)){const i=a.target;$(e,"temp",[[i,"touchmove","move","notPassiveCapture"],[i,"touchcancel","end","notPassiveCapture"],[i,"touchend","end","notPassiveCapture"]]),e.start(a)}},start(a,i){S.is.firefox===!0&&M(t,!0);const d=O(a);e.event={x:d.left,y:d.top,time:Date.now(),mouse:i===!0,dir:!1}},move(a){if(e.event===void 0)return;if(e.event.dir!==!1){V(a);return}const i=Date.now()-e.event.time;if(i===0)return;const d=O(a),m=d.left-e.event.x,p=Math.abs(m),y=d.top-e.event.y,c=Math.abs(y);if(e.event.mouse!==!0){if(p<e.sensitivity[1]&&c<e.sensitivity[1]){e.end(a);return}}else if(p<e.sensitivity[2]&&c<e.sensitivity[2])return;const h=p/i,C=c/i;e.direction.vertical===!0&&p<c&&p<100&&C>e.sensitivity[0]&&(e.event.dir=y<0?"up":"down"),e.direction.horizontal===!0&&p>c&&c<100&&h>e.sensitivity[0]&&(e.event.dir=m<0?"left":"right"),e.direction.up===!0&&p<c&&y<0&&p<100&&C>e.sensitivity[0]&&(e.event.dir="up"),e.direction.down===!0&&p<c&&y>0&&p<100&&C>e.sensitivity[0]&&(e.event.dir="down"),e.direction.left===!0&&p>c&&m<0&&c<100&&h>e.sensitivity[0]&&(e.event.dir="left"),e.direction.right===!0&&p>c&&m>0&&c<100&&h>e.sensitivity[0]&&(e.event.dir="right"),e.event.dir!==!1?(V(a),e.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),fe(),e.styleCleanup=w=>{e.styleCleanup=void 0,document.body.classList.remove("non-selectable");const x=()=>{document.body.classList.remove("no-pointer-events--children")};w===!0?setTimeout(x,50):x()}),e.handler({evt:a,touch:e.event.mouse!==!0,mouse:e.event.mouse,direction:e.event.dir,duration:i,distance:{x:p,y:c}})):e.end(a)},end(a){e.event!==void 0&&(B(e,"temp"),S.is.firefox===!0&&M(t,!1),e.styleCleanup!==void 0&&e.styleCleanup(!0),a!==void 0&&e.event.dir!==!1&&V(a),e.event=void 0)}};if(t.__qtouchswipe=e,r.mouse===!0){const a=r.mouseCapture===!0||r.mousecapture===!0?"Capture":"";$(e,"main",[[t,"mousedown","mouseStart",`passive${a}`]])}S.has.touch===!0&&$(e,"main",[[t,"touchstart","touchStart",`passive${r.capture===!0?"Capture":""}`],[t,"touchmove","noop","notPassiveCapture"]])},updated(t,n){const s=t.__qtouchswipe;s!==void 0&&(n.oldValue!==n.value&&(typeof n.value!="function"&&s.end(),s.handler=n.value),s.direction=H(n.modifiers))},beforeUnmount(t){const n=t.__qtouchswipe;n!==void 0&&(B(n,"main"),B(n,"temp"),S.is.firefox===!0&&M(t,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete t.__qtouchswipe)}});function be(){const t=new Map;return{getCache:function(n,s){return t[n]===void 0?t[n]=s:t[n]},getCacheWithFn:function(n,s){return t[n]===void 0?t[n]=s():t[n]}}}const xe={name:{required:!0},disable:Boolean},U={setup(t,{slots:n}){return()=>P("div",{class:"q-panel scroll",role:"tabpanel"},T(n.default))}},_e={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},Se=["update:modelValue","before-transition","transition"];function qe(){const{props:t,emit:n,proxy:s}=N(),{getCacheWithFn:r}=be();let u,e;const a=W(null),i=W(null);function d(o){const l=t.vertical===!0?"up":"left";_((s.$q.lang.rtl===!0?-1:1)*(o.direction===l?1:-1))}const m=v(()=>[[Ce,d,void 0,{horizontal:t.vertical!==!0,vertical:t.vertical,mouse:!0}]]),p=v(()=>t.transitionPrev||`slide-${t.vertical===!0?"down":"right"}`),y=v(()=>t.transitionNext||`slide-${t.vertical===!0?"up":"left"}`),c=v(()=>`--q-transition-duration: ${t.transitionDuration}ms`),h=v(()=>typeof t.modelValue=="string"||typeof t.modelValue=="number"?t.modelValue:String(t.modelValue)),C=v(()=>({include:t.keepAliveInclude,exclude:t.keepAliveExclude,max:t.keepAliveMax})),w=v(()=>t.keepAliveInclude!==void 0||t.keepAliveExclude!==void 0);ne(()=>t.modelValue,(o,l)=>{const f=k(o)===!0?D(o):-1;e!==!0&&K(f===-1?0:f<D(l)?-1:1),a.value!==f&&(a.value=f,n("before-transition",o,l),oe(()=>{n("transition",o,l)}))});function x(){_(1)}function I(){_(-1)}function L(o){n("update:modelValue",o)}function k(o){return o!=null&&o!==""}function D(o){return u.findIndex(l=>l.props.name===o&&l.props.disable!==""&&l.props.disable!==!0)}function Y(){return u.filter(o=>o.props.disable!==""&&o.props.disable!==!0)}function K(o){const l=o!==0&&t.animated===!0&&a.value!==-1?"q-transition--"+(o===-1?p.value:y.value):null;i.value!==l&&(i.value=l)}function _(o,l=a.value){let f=l+o;for(;f>-1&&f<u.length;){const A=u[f];if(A!==void 0&&A.props.disable!==""&&A.props.disable!==!0){K(o),e=!0,n("update:modelValue",A.props.name),setTimeout(()=>{e=!1});return}f+=o}t.infinite===!0&&u.length>0&&l!==-1&&l!==u.length&&_(o,o===-1?u.length:-1)}function z(){const o=D(t.modelValue);return a.value!==o&&(a.value=o),!0}function j(){const o=k(t.modelValue)===!0&&z()&&u[a.value];return t.keepAlive===!0?[P(re,C.value,[P(w.value===!0?r(h.value,()=>({...U,name:h.value})):U,{key:h.value,style:c.value},()=>o)])]:[P("div",{class:"q-panel scroll",style:c.value,key:h.value,role:"tabpanel"},[o])]}function G(){if(u.length!==0)return t.animated===!0?[P(ae,{name:i.value},j)]:j()}function Z(o){return u=he(T(o.default,[])).filter(l=>l.props!==null&&l.props.slot===void 0&&k(l.props.name)===!0),u.length}function J(){return u}return Object.assign(s,{next:x,previous:I,goTo:L}),{panelIndex:a,panelDirectives:m,updatePanelsList:Z,updatePanelIndex:z,getPanelContent:G,getEnabledPanels:Y,getPanels:J,isValidPanelName:k,keepAliveProps:C,needsUniqueKeepAliveWrapper:w,goToPanelByOffset:_,goToPanel:L,nextPanel:x,previousPanel:I}}var Q=F({name:"QTabPanel",props:xe,setup(t,{slots:n}){return()=>P("div",{class:"q-tab-panel",role:"tabpanel"},T(n.default))}}),we=F({name:"QTabPanels",props:{..._e,...ge},emits:Se,setup(t,{slots:n}){const s=N(),r=Pe(t,s.proxy.$q),{updatePanelsList:u,getPanelContent:e,panelDirectives:a}=qe(),i=v(()=>"q-tab-panels q-panel-parent"+(r.value===!0?" q-tab-panels--dark q-dark":""));return()=>(u(n),ve("div",{class:i.value},e(),"pan",t.swipeable,()=>a.value))}}),ke=F({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(t,{slots:n}){const{proxy:{$q:s}}=N(),r=X(ie,b);if(r===b)return console.error("QPage needs to be a deep child of QLayout"),b;if(X(se,b)===b)return console.error("QPage needs to be child of QPageContainer"),b;const e=v(()=>{const i=(r.header.space===!0?r.header.size:0)+(r.footer.space===!0?r.footer.size:0);if(typeof t.styleFn=="function"){const d=r.isContainer.value===!0?r.containerHeight.value:s.screen.height;return t.styleFn(i,d)}return{minHeight:r.isContainer.value===!0?r.containerHeight.value-i+"px":s.screen.height===0?i!==0?`calc(100vh - ${i}px)`:"100vh":s.screen.height-i+"px"}}),a=v(()=>`q-page${t.padding===!0?" q-layout-padding":""}`);return()=>P("main",{class:a.value,style:e.value},T(n.default))}});const Ae=le({name:"IndexPage",setup(){return{MainStore:me()}}});function $e(t,n,s,r,u,e){const a=E("CatalogPage"),i=E("OrderPage"),d=E("ProfilePage");return ce(),pe(ke,{class:"row items-center justify-evenly"},{default:q(()=>[g(we,{modelValue:t.MainStore.Tabs,"onUpdate:modelValue":n[0]||(n[0]=m=>t.MainStore.Tabs=m),animated:"","transition-duration":"200",class:"full-width h-ingerit"},{default:q(()=>[g(Q,{name:"catalog"},{default:q(()=>[g(a)]),_:1}),g(Q,{name:"order"},{default:q(()=>[g(i)]),_:1}),g(Q,{name:"profile"},{default:q(()=>[g(d)]),_:1})]),_:1},8,["modelValue"])]),_:1})}var Ee=ue(Ae,[["render",$e]]);export{Ee as default};
