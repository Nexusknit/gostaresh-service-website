import{L as B,d as R,M as f,c as N,b as O,h as b,O as _,P as E,F as H,u as L,e as k,g as V,Q as j,R as p}from"./vp8MPyNN.js";let v=!1;function A(){if(B&&window.CSS&&!v&&(v=!0,"registerProperty"in window?.CSS))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}function F(e){const{heightSmall:o,heightMedium:i,heightLarge:t,borderRadius:r}=e;return{color:"#eee",colorEnd:"#ddd",borderRadius:r,heightSmall:o,heightMedium:i,heightLarge:t}}const M={common:R,self:F},T=f([N("skeleton",`
 height: 1em;
 width: 100%;
 transition:
 --n-color-start .3s var(--n-bezier),
 --n-color-end .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 animation: 2s skeleton-loading infinite cubic-bezier(0.36, 0, 0.64, 1);
 background-color: var(--n-color-start);
 `),f("@keyframes skeleton-loading",`
 0% {
 background: var(--n-color-start);
 }
 40% {
 background: var(--n-color-end);
 }
 80% {
 background: var(--n-color-start);
 }
 100% {
 background: var(--n-color-start);
 }
 `)]),$=Object.assign(Object.assign({},k.props),{text:Boolean,round:Boolean,circle:Boolean,height:[String,Number],width:[String,Number],size:String,repeat:{type:Number,default:1},animated:{type:Boolean,default:!0},sharp:{type:Boolean,default:!0}}),K=O({name:"Skeleton",inheritAttrs:!1,props:$,setup(e){A();const{mergedClsPrefixRef:o}=L(e),i=k("Skeleton","-skeleton",T,M,e,o);return{mergedClsPrefix:o,style:V(()=>{var t,r;const s=i.value,{common:{cubicBezierEaseInOut:y}}=s,g=s.self,{color:S,colorEnd:w,borderRadius:x}=g;let a;const{circle:l,sharp:P,round:z,width:n,height:c,size:h,text:m,animated:C}=e;h!==void 0&&(a=g[j("height",h)]);const d=l?(t=n??c)!==null&&t!==void 0?t:a:n,u=(r=l?n??c:c)!==null&&r!==void 0?r:a;return{display:m?"inline-block":"",verticalAlign:m?"-0.125em":"",borderRadius:l?"50%":z?"4096px":P?"":x,width:typeof d=="number"?p(d):d,height:typeof u=="number"?p(u):u,animation:C?"":"none","--n-bezier":y,"--n-color-start":S,"--n-color-end":w}})}},render(){const{repeat:e,style:o,mergedClsPrefix:i,$attrs:t}=this,r=b("div",_({class:`${i}-skeleton`,style:o},t));return e>1?b(H,null,E(e,null).map(s=>[r,`
`])):r}});export{K as N};
