import{d as ct,M as X,c as r,Y as ut,Z as vt,$ as R,a as ae,a0 as ze,a1 as ht,b as Ne,h as y,a2 as ft,a3 as mt,u as pt,e as Ee,j as f,a4 as bt,g as k,a5 as gt,H as Te,I as xt,i as Be,a6 as wt,a7 as oe,a8 as ne,a9 as le,X as pe,E as yt,w as kt,aa as re,k as Y,l as u,y as _,s as be,B as $,ab as ge,ac as xe,A as se,C as Ct,F as Ve,m as Me,o as L,q as Rt,_ as St}from"./vp8MPyNN.js";import _t from"./QLnPFQ3u.js";import{P as zt}from"./A4uUemyR.js";import{f as De,b as Tt}from"./i_-PaMFz.js";import{g as Bt,a as Vt}from"./DT6wiafG.js";import{N as Mt,a as Dt}from"./DTlRyxep.js";import{B as $t,V as Ft,a as It,u as we,N as $e}from"./uD4T5QrJ.js";import{u as Ht,N as Fe}from"./Bw_fySTz.js";import"./Bno8S_cx.js";import"./CXuCsgek.js";const Nt={railHeight:"4px",railWidthVertical:"4px",handleSize:"18px",dotHeight:"8px",dotWidth:"8px",dotBorderRadius:"4px"};function Et(o){const c="rgba(0, 0, 0, .85)",V="0 2px 8px 0 rgba(0, 0, 0, 0.12)",{railColor:p,primaryColor:i,baseColor:h,cardColor:z,modalColor:S,popoverColor:F,borderRadius:T,fontSize:M,opacityDisabled:N}=o;return Object.assign(Object.assign({},Nt),{fontSize:M,markFontSize:M,railColor:p,railColorHover:p,fillColor:i,fillColorHover:i,opacityDisabled:N,handleColor:"#FFF",dotColor:z,dotColorModal:S,dotColorPopover:F,handleBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowHover:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowActive:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowFocus:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",indicatorColor:c,indicatorBoxShadow:V,indicatorTextColor:h,indicatorBorderRadius:T,dotBorder:`2px solid ${p}`,dotBorderActive:`2px solid ${i}`,dotBoxShadow:""})}const At={common:ct,self:Et},Pt=X([r("slider",`
 display: block;
 padding: calc((var(--n-handle-size) - var(--n-rail-height)) / 2) 0;
 position: relative;
 z-index: 0;
 width: 100%;
 cursor: pointer;
 user-select: none;
 -webkit-user-select: none;
 `,[R("reverse",[r("slider-handles",[r("slider-handle-wrapper",`
 transform: translate(50%, -50%);
 `)]),r("slider-dots",[r("slider-dot",`
 transform: translateX(50%, -50%);
 `)]),R("vertical",[r("slider-handles",[r("slider-handle-wrapper",`
 transform: translate(-50%, -50%);
 `)]),r("slider-marks",[r("slider-mark",`
 transform: translateY(calc(-50% + var(--n-dot-height) / 2));
 `)]),r("slider-dots",[r("slider-dot",`
 transform: translateX(-50%) translateY(0);
 `)])])]),R("vertical",`
 box-sizing: content-box;
 padding: 0 calc((var(--n-handle-size) - var(--n-rail-height)) / 2);
 width: var(--n-rail-width-vertical);
 height: 100%;
 `,[r("slider-handles",`
 top: calc(var(--n-handle-size) / 2);
 right: 0;
 bottom: calc(var(--n-handle-size) / 2);
 left: 0;
 `,[r("slider-handle-wrapper",`
 top: unset;
 left: 50%;
 transform: translate(-50%, 50%);
 `)]),r("slider-rail",`
 height: 100%;
 `,[ae("fill",`
 top: unset;
 right: 0;
 bottom: unset;
 left: 0;
 `)]),R("with-mark",`
 width: var(--n-rail-width-vertical);
 margin: 0 32px 0 8px;
 `),r("slider-marks",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 22px;
 font-size: var(--n-mark-font-size);
 `,[r("slider-mark",`
 transform: translateY(50%);
 white-space: nowrap;
 `)]),r("slider-dots",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 50%;
 `,[r("slider-dot",`
 transform: translateX(-50%) translateY(50%);
 `)])]),R("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `,[r("slider-handle",`
 cursor: not-allowed;
 `)]),R("with-mark",`
 width: 100%;
 margin: 8px 0 32px 0;
 `),X("&:hover",[r("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[ae("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),r("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),R("active",[r("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[ae("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),r("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),r("slider-marks",`
 position: absolute;
 top: 18px;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[r("slider-mark",`
 position: absolute;
 transform: translateX(-50%);
 white-space: nowrap;
 `)]),r("slider-rail",`
 width: 100%;
 position: relative;
 height: var(--n-rail-height);
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 border-radius: calc(var(--n-rail-height) / 2);
 `,[ae("fill",`
 position: absolute;
 top: 0;
 bottom: 0;
 border-radius: calc(var(--n-rail-height) / 2);
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-fill-color);
 `)]),r("slider-handles",`
 position: absolute;
 top: 0;
 right: calc(var(--n-handle-size) / 2);
 bottom: 0;
 left: calc(var(--n-handle-size) / 2);
 `,[r("slider-handle-wrapper",`
 outline: none;
 position: absolute;
 top: 50%;
 transform: translate(-50%, -50%);
 cursor: pointer;
 display: flex;
 `,[r("slider-handle",`
 height: var(--n-handle-size);
 width: var(--n-handle-size);
 border-radius: 50%;
 overflow: hidden;
 transition: box-shadow .2s var(--n-bezier), background-color .3s var(--n-bezier);
 background-color: var(--n-handle-color);
 box-shadow: var(--n-handle-box-shadow);
 `,[X("&:hover",`
 box-shadow: var(--n-handle-box-shadow-hover);
 `)]),X("&:focus",[r("slider-handle",`
 box-shadow: var(--n-handle-box-shadow-focus);
 `,[X("&:hover",`
 box-shadow: var(--n-handle-box-shadow-active);
 `)])])])]),r("slider-dots",`
 position: absolute;
 top: 50%;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[R("transition-disabled",[r("slider-dot","transition: none;")]),r("slider-dot",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 transform: translate(-50%, -50%);
 height: var(--n-dot-height);
 width: var(--n-dot-width);
 border-radius: var(--n-dot-border-radius);
 overflow: hidden;
 box-sizing: border-box;
 border: var(--n-dot-border);
 background-color: var(--n-dot-color);
 `,[R("active","border: var(--n-dot-border-active);")])])]),r("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[ze()]),r("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[R("top",`
 margin-bottom: 12px;
 `),R("right",`
 margin-left: 12px;
 `),R("bottom",`
 margin-top: 12px;
 `),R("left",`
 margin-right: 12px;
 `),ze()]),ut(r("slider",[r("slider-dot","background-color: var(--n-dot-color-modal);")])),vt(r("slider",[r("slider-dot","background-color: var(--n-dot-color-popover);")]))]);function Ie(o){return window.TouchEvent&&o instanceof window.TouchEvent}function He(){const o=new Map,c=V=>p=>{o.set(V,p)};return ht(()=>{o.clear()}),[o,c]}const jt=0,Ut=Object.assign(Object.assign({},Ee.props),{to:we.propTo,defaultValue:{type:[Number,Array],default:0},marks:Object,disabled:{type:Boolean,default:void 0},formatTooltip:Function,keyboard:{type:Boolean,default:!0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:[Number,String],default:1},range:Boolean,value:[Number,Array],placement:String,showTooltip:{type:Boolean,default:void 0},tooltip:{type:Boolean,default:!0},vertical:Boolean,reverse:Boolean,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onDragstart:[Function],onDragend:[Function]}),Lt=Ne({name:"Slider",props:Ut,slots:Object,setup(o){const{mergedClsPrefixRef:c,namespaceRef:V,inlineThemeDisabled:p}=pt(o),i=Ee("Slider","-slider",Pt,At,o,c),h=f(null),[z,S]=He(),[F,T]=He(),M=f(new Set),N=bt(o),{mergedDisabledRef:E}=N,A=k(()=>{const{step:e}=o;if(Number(e)<=0||e==="mark")return 0;const t=e.toString();let a=0;return t.includes(".")&&(a=t.length-t.indexOf(".")-1),a}),P=f(o.defaultValue),ie=gt(o,"value"),I=Ht(ie,P),g=k(()=>{const{value:e}=I;return(o.range?e:[e]).map(Ce)}),C=k(()=>g.value.length>2),K=k(()=>o.placement===void 0?o.vertical?"right":"top":o.placement),q=k(()=>{const{marks:e}=o;return e?Object.keys(e).map(Number.parseFloat):null}),d=f(-1),n=f(-1),m=f(-1),l=f(!1),B=f(!1),O=k(()=>{const{vertical:e,reverse:t}=o;return e?t?"top":"bottom":t?"right":"left"}),de=k(()=>{if(C.value)return;const e=g.value,t=Q(o.range?Math.min(...e):o.min),a=Q(o.range?Math.max(...e):e[0]),{value:s}=O;return o.vertical?{[s]:`${t}%`,height:`${a-t}%`}:{[s]:`${t}%`,width:`${a-t}%`}}),ce=k(()=>{const e=[],{marks:t}=o;if(t){const a=g.value.slice();a.sort((w,x)=>w-x);const{value:s}=O,{value:v}=C,{range:b}=o,D=v?()=>!1:w=>b?w>=a[0]&&w<=a[a.length-1]:w<=a[0];for(const w of Object.keys(t)){const x=Number(w);e.push({active:D(x),key:x,label:t[w],style:{[s]:`${Q(x)}%`}})}}return e});function ue(e,t){const a=Q(e),{value:s}=O;return{[s]:`${a}%`,zIndex:t===d.value?1:0}}function W(e){return o.showTooltip||m.value===e||d.value===e&&l.value}function Ae(e){return l.value?!(d.value===e&&n.value===e):!0}function Pe(e){var t;~e&&(d.value=e,(t=z.get(e))===null||t===void 0||t.focus())}function je(){F.forEach((e,t)=>{W(t)&&e.syncPosition()})}function ye(e){const{"onUpdate:value":t,onUpdateValue:a}=o,{nTriggerFormInput:s,nTriggerFormChange:v}=N;a&&oe(a,e),t&&oe(t,e),P.value=e,s(),v()}function ke(e){const{range:t}=o;if(t){if(Array.isArray(e)){const{value:a}=g;e.join()!==a.join()&&ye(e)}}else Array.isArray(e)||g.value[0]!==e&&ye(e)}function ve(e,t){if(o.range){const a=g.value.slice();a.splice(t,1,e),ke(a)}else ke(e)}function he(e,t,a){const s=a!==void 0;a||(a=e-t>0?1:-1);const v=q.value||[],{step:b}=o;if(b==="mark"){const x=G(e,v.concat(t),s?a:void 0);return x?x.value:t}if(b<=0)return t;const{value:D}=A;let w;if(s){const x=Number((t/b).toFixed(D)),H=Math.floor(x),fe=x>H?H:H-1,me=x<H?H:H+1;w=G(t,[Number((fe*b).toFixed(D)),Number((me*b).toFixed(D)),...v],a)}else{const x=Le(e);w=G(e,[...v,x])}return w?Ce(w.value):t}function Ce(e){return Math.min(o.max,Math.max(o.min,e))}function Q(e){const{max:t,min:a}=o;return(e-a)/(t-a)*100}function Ue(e){const{max:t,min:a}=o;return a+(t-a)*e}function Le(e){const{step:t,min:a}=o;if(Number(t)<=0||t==="mark")return e;const s=Math.round((e-a)/t)*t+a;return Number(s.toFixed(A.value))}function G(e,t=q.value,a){if(!t?.length)return null;let s=null,v=-1;for(;++v<t.length;){const b=t[v]-e,D=Math.abs(b);(a===void 0||b*a>0)&&(s===null||D<s.distance)&&(s={index:v,distance:D,value:t[v]})}return s}function Re(e){const t=h.value;if(!t)return;const a=Ie(e)?e.touches[0]:e,s=t.getBoundingClientRect();let v;return o.vertical?v=(s.bottom-a.clientY)/s.height:v=(a.clientX-s.left)/s.width,o.reverse&&(v=1-v),Ue(v)}function Oe(e){if(E.value||!o.keyboard)return;const{vertical:t,reverse:a}=o;switch(e.key){case"ArrowUp":e.preventDefault(),J(t&&a?-1:1);break;case"ArrowRight":e.preventDefault(),J(!t&&a?-1:1);break;case"ArrowDown":e.preventDefault(),J(t&&a?1:-1);break;case"ArrowLeft":e.preventDefault(),J(!t&&a?1:-1);break}}function J(e){const t=d.value;if(t===-1)return;const{step:a}=o,s=g.value[t],v=Number(a)<=0||a==="mark"?s:s+a*e;ve(he(v,s,e>0?1:-1),t)}function Xe(e){var t,a;if(E.value||!Ie(e)&&e.button!==jt)return;const s=Re(e);if(s===void 0)return;const v=g.value.slice(),b=o.range?(a=(t=G(s,v))===null||t===void 0?void 0:t.index)!==null&&a!==void 0?a:-1:0;b!==-1&&(e.preventDefault(),Pe(b),Ye(),ve(he(s,g.value[b]),b))}function Ye(){l.value||(l.value=!0,o.onDragstart&&oe(o.onDragstart),ne("touchend",document,te),ne("mouseup",document,te),ne("touchmove",document,ee),ne("mousemove",document,ee))}function Z(){l.value&&(l.value=!1,o.onDragend&&oe(o.onDragend),le("touchend",document,te),le("mouseup",document,te),le("touchmove",document,ee),le("mousemove",document,ee))}function ee(e){const{value:t}=d;if(!l.value||t===-1){Z();return}const a=Re(e);a!==void 0&&ve(he(a,g.value[t]),t)}function te(){Z()}function Ke(e){d.value=e,E.value||(m.value=e)}function qe(e){d.value===e&&(d.value=-1,Z()),m.value===e&&(m.value=-1)}function We(e){m.value=e}function Qe(e){m.value===e&&(m.value=-1)}Te(d,(e,t)=>{pe(()=>n.value=t)}),Te(I,()=>{if(o.marks){if(B.value)return;B.value=!0,pe(()=>{B.value=!1})}pe(je)}),xt(()=>{Z()});const Se=k(()=>{const{self:{markFontSize:e,railColor:t,railColorHover:a,fillColor:s,fillColorHover:v,handleColor:b,opacityDisabled:D,dotColor:w,dotColorModal:x,handleBoxShadow:H,handleBoxShadowHover:fe,handleBoxShadowActive:me,handleBoxShadowFocus:Ge,dotBorder:Je,dotBoxShadow:Ze,railHeight:et,railWidthVertical:tt,handleSize:at,dotHeight:ot,dotWidth:nt,dotBorderRadius:lt,fontSize:rt,dotBorderActive:st,dotColorPopover:it},common:{cubicBezierEaseInOut:dt}}=i.value;return{"--n-bezier":dt,"--n-dot-border":Je,"--n-dot-border-active":st,"--n-dot-border-radius":lt,"--n-dot-box-shadow":Ze,"--n-dot-color":w,"--n-dot-color-modal":x,"--n-dot-color-popover":it,"--n-dot-height":ot,"--n-dot-width":nt,"--n-fill-color":s,"--n-fill-color-hover":v,"--n-font-size":rt,"--n-handle-box-shadow":H,"--n-handle-box-shadow-active":me,"--n-handle-box-shadow-focus":Ge,"--n-handle-box-shadow-hover":fe,"--n-handle-color":b,"--n-handle-size":at,"--n-opacity-disabled":D,"--n-rail-color":t,"--n-rail-color-hover":a,"--n-rail-height":et,"--n-rail-width-vertical":tt,"--n-mark-font-size":e}}),j=p?Be("slider",void 0,Se,o):void 0,_e=k(()=>{const{self:{fontSize:e,indicatorColor:t,indicatorBoxShadow:a,indicatorTextColor:s,indicatorBorderRadius:v}}=i.value;return{"--n-font-size":e,"--n-indicator-border-radius":v,"--n-indicator-box-shadow":a,"--n-indicator-color":t,"--n-indicator-text-color":s}}),U=p?Be("slider-indicator",void 0,_e,o):void 0;return{mergedClsPrefix:c,namespace:V,uncontrolledValue:P,mergedValue:I,mergedDisabled:E,mergedPlacement:K,isMounted:wt(),adjustedTo:we(o),dotTransitionDisabled:B,markInfos:ce,isShowTooltip:W,shouldKeepTooltipTransition:Ae,handleRailRef:h,setHandleRefs:S,setFollowerRefs:T,fillStyle:de,getHandleStyle:ue,activeIndex:d,arrifiedValues:g,followerEnabledIndexSet:M,handleRailMouseDown:Xe,handleHandleFocus:Ke,handleHandleBlur:qe,handleHandleMouseEnter:We,handleHandleMouseLeave:Qe,handleRailKeyDown:Oe,indicatorCssVars:p?void 0:_e,indicatorThemeClass:U?.themeClass,indicatorOnRender:U?.onRender,cssVars:p?void 0:Se,themeClass:j?.themeClass,onRender:j?.onRender}},render(){var o;const{mergedClsPrefix:c,themeClass:V,formatTooltip:p}=this;return(o=this.onRender)===null||o===void 0||o.call(this),y("div",{class:[`${c}-slider`,V,{[`${c}-slider--disabled`]:this.mergedDisabled,[`${c}-slider--active`]:this.activeIndex!==-1,[`${c}-slider--with-mark`]:this.marks,[`${c}-slider--vertical`]:this.vertical,[`${c}-slider--reverse`]:this.reverse}],style:this.cssVars,onKeydown:this.handleRailKeyDown,onMousedown:this.handleRailMouseDown,onTouchstart:this.handleRailMouseDown},y("div",{class:`${c}-slider-rail`},y("div",{class:`${c}-slider-rail__fill`,style:this.fillStyle}),this.marks?y("div",{class:[`${c}-slider-dots`,this.dotTransitionDisabled&&`${c}-slider-dots--transition-disabled`]},this.markInfos.map(i=>y("div",{key:i.key,class:[`${c}-slider-dot`,{[`${c}-slider-dot--active`]:i.active}],style:i.style}))):null,y("div",{ref:"handleRailRef",class:`${c}-slider-handles`},this.arrifiedValues.map((i,h)=>{const z=this.isShowTooltip(h);return y($t,null,{default:()=>[y(Ft,null,{default:()=>y("div",{ref:this.setHandleRefs(h),class:`${c}-slider-handle-wrapper`,tabindex:this.mergedDisabled?-1:0,role:"slider","aria-valuenow":i,"aria-valuemin":this.min,"aria-valuemax":this.max,"aria-orientation":this.vertical?"vertical":"horizontal","aria-disabled":this.disabled,style:this.getHandleStyle(i,h),onFocus:()=>{this.handleHandleFocus(h)},onBlur:()=>{this.handleHandleBlur(h)},onMouseenter:()=>{this.handleHandleMouseEnter(h)},onMouseleave:()=>{this.handleHandleMouseLeave(h)}},ft(this.$slots.thumb,()=>[y("div",{class:`${c}-slider-handle`})]))}),this.tooltip&&y(It,{ref:this.setFollowerRefs(h),show:z,to:this.adjustedTo,enabled:this.showTooltip&&!this.range||this.followerEnabledIndexSet.has(h),teleportDisabled:this.adjustedTo===we.tdkey,placement:this.mergedPlacement,containerClass:this.namespace},{default:()=>y(mt,{name:"fade-in-scale-up-transition",appear:this.isMounted,css:this.shouldKeepTooltipTransition(h),onEnter:()=>{this.followerEnabledIndexSet.add(h)},onAfterLeave:()=>{this.followerEnabledIndexSet.delete(h)}},{default:()=>{var S;return z?((S=this.indicatorOnRender)===null||S===void 0||S.call(this),y("div",{class:[`${c}-slider-handle-indicator`,this.indicatorThemeClass,`${c}-slider-handle-indicator--${this.mergedPlacement}`],style:this.indicatorCssVars},typeof p=="function"?p(i):i)):null}})})]})})),this.marks?y("div",{class:`${c}-slider-marks`},this.markInfos.map(i=>y("div",{key:i.key,class:`${c}-slider-mark`,style:i.style},typeof i.label=="function"?i.label():i.label))):null))}}),Ot={class:"container mx-auto px-4 py-8",dir:"rtl"},Xt={class:"grid gap-6 lg:grid-cols-[280px_1fr]"},Yt={class:"lg:sticky lg:top-24 h-fit"},Kt={class:"rounded-2xl bg-white p-4 ring-1 ring-slate-200 shadow-sm"},qt={class:"mb-4"},Wt={class:"border-t border-slate-200 pt-3 first:border-t-0 first:pt-0"},Qt={class:"mt-3 space-y-3"},Gt={class:"max-h-64 overflow-auto pr-1"},Jt={class:"text-xs text-slate-500"},Zt={class:"flex items-center gap-2"},ea={class:"text-sm text-slate-700"},ta={class:"border-t border-slate-200 pt-3"},aa={class:"mt-3 space-y-3"},oa={class:"border-t border-slate-200 pt-3"},na={class:"mt-4"},la={class:"mt-2 flex items-center justify-between text-xs text-slate-600"},ra={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"},sa={key:0,class:"mt-6 text-slate-500"},ia=5e4,xa=Ne({__name:"index",async setup(o){let c,V;const p=f([]),i=yt({brand:!0,category:!0,price:!0}),h=f([]),z=f(""),S=f([]),F=f(""),T=f(null),M=f(null);k(()=>h.value.map(d=>({label:d.name,value:d.slug||d.name.toLowerCase().replace(/\s+/g,"-")})));const N=f(([c,V]=kt(()=>Bt()),c=await c,V(),c)),E=k(()=>N.value.map(d=>({label:d.title,value:d.slug}))),A=f([]);re(async()=>{const d=(await St(async()=>{const{default:n}=await import("./XmB3RRHO.js");return{default:n}},[],import.meta.url)).default;h.value=d}),re(async()=>{p.value=await Tt()}),re(async()=>{if(!T.value){M.value=null,A.value=[];return}const d=await Vt(T.value);A.value=d.map(n=>({label:n.title,value:n.slug}))});const P=d=>d?.toLowerCase()?.trim()||"",ie=k(()=>{const d=P(z.value);return h.value.map(n=>({...n,slug:n.slug||n.name.toLowerCase().replace(/\s+/g,"-")})).filter(n=>!d||[n.name,n.slug].join(" ").toLowerCase().includes(d))}),I=f(0),g=f(0),C=f([0,0]);re(()=>{if(!p.value.length)return;const d=p.value.map(l=>l.priceToman),n=Math.min(...d),m=Math.max(...d);I.value=n,g.value=m,C.value[0]===0&&C.value[1]===0&&(C.value=[n,m])});const K=k(()=>{const d=P(F.value),n=S.value,m=T.value||"",l=M.value||"";return p.value.filter(B=>{const O=!d||JSON.stringify(B).toLowerCase().includes(d),de=!n.length||n.includes(B.brandSlug),ce=!m||B.parentCategory===m,ue=!l||B.childCategory===l,W=B.priceToman>=C.value[0]&&B.priceToman<=C.value[1];return O&&de&&ce&&ue&&W})}),q=()=>{F.value="",S.value=[],T.value=null,M.value=null,z.value="",(I.value||g.value)&&(C.value=[I.value,g.value])};return(d,n)=>{const m=_t;return L(),Y("section",Ot,[u("div",Xt,[u("aside",Yt,[u("div",Kt,[u("div",{class:"mb-3 flex items-center justify-between"},[n[9]||(n[9]=u("h3",{class:"text-sm font-semibold text-slate-700"},"فیلترها",-1)),u("button",{type:"button",class:"text-xs text-sky-600 hover:text-sky-700",onClick:q}," پاک‌سازی ")]),u("div",qt,[_($(Fe),{value:F.value,"onUpdate:value":n[0]||(n[0]=l=>F.value=l),placeholder:"جستجوی نام/تگ/ویژگی...",clearable:"",size:"large"},{prefix:be(()=>[_(m,{name:"ph:magnifying-glass-duotone"})]),_:1},8,["value"])]),u("div",Wt,[u("button",{type:"button",class:"flex w-full items-center justify-between text-right",onClick:n[1]||(n[1]=l=>i.brand=!i.brand)},[n[10]||(n[10]=u("span",{class:"text-sm font-medium text-slate-700"},"برند",-1)),_(m,{name:i.brand?"ph:caret-up-duotone":"ph:caret-down-duotone"},null,8,["name"])]),ge(u("div",Qt,[_($(Fe),{value:z.value,"onUpdate:value":n[2]||(n[2]=l=>z.value=l),placeholder:"جستجو برند ...",clearable:"",size:"large"},{prefix:be(()=>[_(m,{name:"ph:magnifying-glass-duotone"})]),_:1},8,["value"]),_($(Dt),{value:S.value,"onUpdate:value":n[3]||(n[3]=l=>S.value=l)},{default:be(()=>[u("div",Gt,[(L(!0),Y(Ve,null,Me(ie.value,l=>(L(),Y("div",{key:l.slug||l.name,class:"flex items-center justify-between gap-3 border-b border-slate-100 py-3 last:border-b-0"},[u("span",Jt,se(l.nameEn||l.slug||l.name),1),u("div",Zt,[u("span",ea,se(l.name),1),_($(Mt),{value:l.slug||l.name.toLowerCase().replace(/\s+/g,"-")},null,8,["value"])])]))),128))])]),_:1},8,["value"])],512),[[xe,i.brand]])]),u("div",ta,[u("button",{type:"button",class:"flex w-full items-center justify-between text-right",onClick:n[4]||(n[4]=l=>i.category=!i.category)},[n[11]||(n[11]=u("span",{class:"text-sm font-medium text-slate-700"},"دسته‌بندی",-1)),_(m,{name:i.category?"ph:caret-up-duotone":"ph:caret-down-duotone"},null,8,["name"])]),ge(u("div",aa,[_($($e),{value:T.value,"onUpdate:value":n[5]||(n[5]=l=>T.value=l),options:E.value,placeholder:"دسته اصلی",clearable:"",size:"large"},null,8,["value","options"]),_($($e),{value:M.value,"onUpdate:value":n[6]||(n[6]=l=>M.value=l),options:A.value,placeholder:"زیر دسته",clearable:"",size:"large",disabled:!T.value},null,8,["value","options","disabled"])],512),[[xe,i.category]])]),u("div",oa,[u("button",{type:"button",class:"flex w-full items-center justify-between text-right",onClick:n[7]||(n[7]=l=>i.price=!i.price)},[n[12]||(n[12]=u("span",{class:"text-sm font-medium text-slate-700"},"محدوده قیمت",-1)),_(m,{name:i.price?"ph:caret-up-duotone":"ph:caret-down-duotone"},null,8,["name"])]),ge(u("div",na,[_($(Lt),{value:C.value,"onUpdate:value":n[8]||(n[8]=l=>C.value=l),range:"",min:I.value,max:g.value,step:ia},null,8,["value","min","max"]),u("div",la,[u("span",null,se($(De)(C.value[0])),1),u("span",null,se($(De)(C.value[1])),1)])],512),[[xe,i.price]])])])]),u("main",null,[u("div",ra,[(L(!0),Y(Ve,null,Me(K.value,l=>(L(),Rt(zt,{key:l.id,product:l},null,8,["product"]))),128))]),K.value.length?Ct("",!0):(L(),Y("div",sa,"محصولی یافت نشد."))])])])}}});export{xa as default};
