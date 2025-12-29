import xe from"./QLnPFQ3u.js";import{_ as ve}from"./Bno8S_cx.js";import{d as ge,b as A,g as z,ad as ye,h as t,ae as ee,af as te,ag as re,ah as oe,ai as ie,M as G,c as x,$ as j,u as he,e as Y,Q as V,i as me,a as X,aj as be,ak as se,_ as we,j as H,E as Ce,G as Se,J as _e,k as O,l as s,y as v,q as J,s as y,B as b,o as M,D as I,F as le,m as ae,A as N,C as Z,U as ze,V as $e,W as F,N as ce,al as ke,p as U,t as Be}from"./vp8MPyNN.js";import{u as De}from"./ybW-YjLz.js";import{f as L,N as Ne}from"./Bw_fySTz.js";import{N as de}from"./BMt9G5p1.js";import{N as Pe}from"./VBYp0bj-.js";import{N as ue}from"./CXuCsgek.js";import{N as Re,a as Ie}from"./DToeYN_d.js";import"./Bk_rJcZu.js";function je(e){const{infoColor:c,successColor:a,warningColor:u,errorColor:p,textColor2:l,progressRailColor:o,fontSize:n,fontWeight:f}=e;return{fontSize:n,fontSizeCircle:"28px",fontWeightCircle:f,railColor:o,railHeight:"8px",iconSizeCircle:"36px",iconSizeLine:"18px",iconColor:c,iconColorInfo:c,iconColorSuccess:a,iconColorWarning:u,iconColorError:p,textColorCircle:l,textColorLineInner:"rgb(255, 255, 255)",textColorLineOuter:l,fillColor:c,fillColorInfo:c,fillColorSuccess:a,fillColorWarning:u,fillColorError:p,lineBgProcessing:"linear-gradient(90deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .5) 100%)"}}const Me={common:ge,self:je},We={titleFontSizeSmall:"26px",titleFontSizeMedium:"32px",titleFontSizeLarge:"40px",titleFontSizeHuge:"48px",fontSizeSmall:"14px",fontSizeMedium:"14px",fontSizeLarge:"15px",fontSizeHuge:"16px",iconSizeSmall:"64px",iconSizeMedium:"80px",iconSizeLarge:"100px",iconSizeHuge:"125px",iconColor418:void 0,iconColor404:void 0,iconColor403:void 0,iconColor500:void 0};function Fe(e){const{textColor2:c,textColor1:a,errorColor:u,successColor:p,infoColor:l,warningColor:o,lineHeight:n,fontWeightStrong:f}=e;return Object.assign(Object.assign({},We),{lineHeight:n,titleFontWeight:f,titleTextColor:a,textColor:c,iconColorError:u,iconColorSuccess:p,iconColorInfo:l,iconColorWarning:o})}const Le={common:ge,self:Fe},Ve={success:t(ie,null),error:t(oe,null),warning:t(re,null),info:t(te,null)},Ae=A({name:"ProgressCircle",props:{clsPrefix:{type:String,required:!0},status:{type:String,required:!0},strokeWidth:{type:Number,required:!0},fillColor:[String,Object],railColor:String,railStyle:[String,Object],percentage:{type:Number,default:0},offsetDegree:{type:Number,default:0},showIndicator:{type:Boolean,required:!0},indicatorTextColor:String,unit:String,viewBoxWidth:{type:Number,required:!0},gapDegree:{type:Number,required:!0},gapOffsetDegree:{type:Number,default:0}},setup(e,{slots:c}){const a=z(()=>{const l="gradient",{fillColor:o}=e;return typeof o=="object"?`${l}-${ye(JSON.stringify(o))}`:l});function u(l,o,n,f){const{gapDegree:w,viewBoxWidth:g,strokeWidth:C}=e,h=50,_=0,m=h,i=0,D=2*h,P=50+C/2,$=`M ${P},${P} m ${_},${m}
      a ${h},${h} 0 1 1 ${i},${-D}
      a ${h},${h} 0 1 1 ${-i},${D}`,k=Math.PI*2*h,R={stroke:f==="rail"?n:typeof e.fillColor=="object"?`url(#${a.value})`:n,strokeDasharray:`${l/100*(k-w)}px ${g*8}px`,strokeDashoffset:`-${w/2}px`,transformOrigin:o?"center":void 0,transform:o?`rotate(${o}deg)`:void 0};return{pathString:$,pathStyle:R}}const p=()=>{const l=typeof e.fillColor=="object",o=l?e.fillColor.stops[0]:"",n=l?e.fillColor.stops[1]:"";return l&&t("defs",null,t("linearGradient",{id:a.value,x1:"0%",y1:"100%",x2:"100%",y2:"0%"},t("stop",{offset:"0%","stop-color":o}),t("stop",{offset:"100%","stop-color":n})))};return()=>{const{fillColor:l,railColor:o,strokeWidth:n,offsetDegree:f,status:w,percentage:g,showIndicator:C,indicatorTextColor:h,unit:_,gapOffsetDegree:m,clsPrefix:i}=e,{pathString:D,pathStyle:P}=u(100,0,o,"rail"),{pathString:$,pathStyle:k}=u(g,f,l,"fill"),R=100+n;return t("div",{class:`${i}-progress-content`,role:"none"},t("div",{class:`${i}-progress-graph`,"aria-hidden":!0},t("div",{class:`${i}-progress-graph-circle`,style:{transform:m?`rotate(${m}deg)`:void 0}},t("svg",{viewBox:`0 0 ${R} ${R}`},p(),t("g",null,t("path",{class:`${i}-progress-graph-circle-rail`,d:D,"stroke-width":n,"stroke-linecap":"round",fill:"none",style:P})),t("g",null,t("path",{class:[`${i}-progress-graph-circle-fill`,g===0&&`${i}-progress-graph-circle-fill--empty`],d:$,"stroke-width":n,"stroke-linecap":"round",fill:"none",style:k}))))),C?t("div",null,c.default?t("div",{class:`${i}-progress-custom-content`,role:"none"},c.default()):w!=="default"?t("div",{class:`${i}-progress-icon`,"aria-hidden":!0},t(ee,{clsPrefix:i},{default:()=>Ve[w]})):t("div",{class:`${i}-progress-text`,style:{color:h},role:"none"},t("span",{class:`${i}-progress-text__percentage`},g),t("span",{class:`${i}-progress-text__unit`},_))):null)}}}),qe={success:t(ie,null),error:t(oe,null),warning:t(re,null),info:t(te,null)},Oe=A({name:"ProgressLine",props:{clsPrefix:{type:String,required:!0},percentage:{type:Number,default:0},railColor:String,railStyle:[String,Object],fillColor:[String,Object],status:{type:String,required:!0},indicatorPlacement:{type:String,required:!0},indicatorTextColor:String,unit:{type:String,default:"%"},processing:{type:Boolean,required:!0},showIndicator:{type:Boolean,required:!0},height:[String,Number],railBorderRadius:[String,Number],fillBorderRadius:[String,Number]},setup(e,{slots:c}){const a=z(()=>L(e.height)),u=z(()=>{var o,n;return typeof e.fillColor=="object"?`linear-gradient(to right, ${(o=e.fillColor)===null||o===void 0?void 0:o.stops[0]} , ${(n=e.fillColor)===null||n===void 0?void 0:n.stops[1]})`:e.fillColor}),p=z(()=>e.railBorderRadius!==void 0?L(e.railBorderRadius):e.height!==void 0?L(e.height,{c:.5}):""),l=z(()=>e.fillBorderRadius!==void 0?L(e.fillBorderRadius):e.railBorderRadius!==void 0?L(e.railBorderRadius):e.height!==void 0?L(e.height,{c:.5}):"");return()=>{const{indicatorPlacement:o,railColor:n,railStyle:f,percentage:w,unit:g,indicatorTextColor:C,status:h,showIndicator:_,processing:m,clsPrefix:i}=e;return t("div",{class:`${i}-progress-content`,role:"none"},t("div",{class:`${i}-progress-graph`,"aria-hidden":!0},t("div",{class:[`${i}-progress-graph-line`,{[`${i}-progress-graph-line--indicator-${o}`]:!0}]},t("div",{class:`${i}-progress-graph-line-rail`,style:[{backgroundColor:n,height:a.value,borderRadius:p.value},f]},t("div",{class:[`${i}-progress-graph-line-fill`,m&&`${i}-progress-graph-line-fill--processing`],style:{maxWidth:`${e.percentage}%`,background:u.value,height:a.value,lineHeight:a.value,borderRadius:l.value}},o==="inside"?t("div",{class:`${i}-progress-graph-line-indicator`,style:{color:C}},c.default?c.default():`${w}${g}`):null)))),_&&o==="outside"?t("div",null,c.default?t("div",{class:`${i}-progress-custom-content`,style:{color:C},role:"none"},c.default()):h==="default"?t("div",{role:"none",class:`${i}-progress-icon ${i}-progress-icon--as-text`,style:{color:C}},w,g):t("div",{class:`${i}-progress-icon`,"aria-hidden":!0},t(ee,{clsPrefix:i},{default:()=>qe[h]}))):null)}}});function pe(e,c,a=100){return`m ${a/2} ${a/2-e} a ${e} ${e} 0 1 1 0 ${2*e} a ${e} ${e} 0 1 1 0 -${2*e}`}const Te=A({name:"ProgressMultipleCircle",props:{clsPrefix:{type:String,required:!0},viewBoxWidth:{type:Number,required:!0},percentage:{type:Array,default:[0]},strokeWidth:{type:Number,required:!0},circleGap:{type:Number,required:!0},showIndicator:{type:Boolean,required:!0},fillColor:{type:Array,default:()=>[]},railColor:{type:Array,default:()=>[]},railStyle:{type:Array,default:()=>[]}},setup(e,{slots:c}){const a=z(()=>e.percentage.map((l,o)=>`${Math.PI*l/100*(e.viewBoxWidth/2-e.strokeWidth/2*(1+2*o)-e.circleGap*o)*2}, ${e.viewBoxWidth*8}`)),u=(p,l)=>{const o=e.fillColor[l],n=typeof o=="object"?o.stops[0]:"",f=typeof o=="object"?o.stops[1]:"";return typeof e.fillColor[l]=="object"&&t("linearGradient",{id:`gradient-${l}`,x1:"100%",y1:"0%",x2:"0%",y2:"100%"},t("stop",{offset:"0%","stop-color":n}),t("stop",{offset:"100%","stop-color":f}))};return()=>{const{viewBoxWidth:p,strokeWidth:l,circleGap:o,showIndicator:n,fillColor:f,railColor:w,railStyle:g,percentage:C,clsPrefix:h}=e;return t("div",{class:`${h}-progress-content`,role:"none"},t("div",{class:`${h}-progress-graph`,"aria-hidden":!0},t("div",{class:`${h}-progress-graph-circle`},t("svg",{viewBox:`0 0 ${p} ${p}`},t("defs",null,C.map((_,m)=>u(_,m))),C.map((_,m)=>t("g",{key:m},t("path",{class:`${h}-progress-graph-circle-rail`,d:pe(p/2-l/2*(1+2*m)-o*m,l,p),"stroke-width":l,"stroke-linecap":"round",fill:"none",style:[{strokeDashoffset:0,stroke:w[m]},g[m]]}),t("path",{class:[`${h}-progress-graph-circle-fill`,_===0&&`${h}-progress-graph-circle-fill--empty`],d:pe(p/2-l/2*(1+2*m)-o*m,l,p),"stroke-width":l,"stroke-linecap":"round",fill:"none",style:{strokeDasharray:a.value[m],strokeDashoffset:0,stroke:typeof f[m]=="object"?`url(#gradient-${m})`:f[m]}})))))),n&&c.default?t("div",null,t("div",{class:`${h}-progress-text`},c.default())):null)}}}),Ee=G([x("progress",{display:"inline-block"},[x("progress-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 `),j("line",`
 width: 100%;
 display: block;
 `,[x("progress-content",`
 display: flex;
 align-items: center;
 `,[x("progress-graph",{flex:1})]),x("progress-custom-content",{marginLeft:"14px"}),x("progress-icon",`
 width: 30px;
 padding-left: 14px;
 height: var(--n-icon-size-line);
 line-height: var(--n-icon-size-line);
 font-size: var(--n-icon-size-line);
 `,[j("as-text",`
 color: var(--n-text-color-line-outer);
 text-align: center;
 width: 40px;
 font-size: var(--n-font-size);
 padding-left: 4px;
 transition: color .3s var(--n-bezier);
 `)])]),j("circle, dashboard",{width:"120px"},[x("progress-custom-content",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `),x("progress-text",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: inherit;
 font-size: var(--n-font-size-circle);
 color: var(--n-text-color-circle);
 font-weight: var(--n-font-weight-circle);
 transition: color .3s var(--n-bezier);
 white-space: nowrap;
 `),x("progress-icon",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: var(--n-icon-color);
 font-size: var(--n-icon-size-circle);
 `)]),j("multiple-circle",`
 width: 200px;
 color: inherit;
 `,[x("progress-text",`
 font-weight: var(--n-font-weight-circle);
 color: var(--n-text-color-circle);
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `)]),x("progress-content",{position:"relative"}),x("progress-graph",{position:"relative"},[x("progress-graph-circle",[G("svg",{verticalAlign:"bottom"}),x("progress-graph-circle-fill",`
 stroke: var(--n-fill-color);
 transition:
 opacity .3s var(--n-bezier),
 stroke .3s var(--n-bezier),
 stroke-dasharray .3s var(--n-bezier);
 `,[j("empty",{opacity:0})]),x("progress-graph-circle-rail",`
 transition: stroke .3s var(--n-bezier);
 overflow: hidden;
 stroke: var(--n-rail-color);
 `)]),x("progress-graph-line",[j("indicator-inside",[x("progress-graph-line-rail",`
 height: 16px;
 line-height: 16px;
 border-radius: 10px;
 `,[x("progress-graph-line-fill",`
 height: inherit;
 border-radius: 10px;
 `),x("progress-graph-line-indicator",`
 background: #0000;
 white-space: nowrap;
 text-align: right;
 margin-left: 14px;
 margin-right: 14px;
 height: inherit;
 font-size: 12px;
 color: var(--n-text-color-line-inner);
 transition: color .3s var(--n-bezier);
 `)])]),j("indicator-inside-label",`
 height: 16px;
 display: flex;
 align-items: center;
 `,[x("progress-graph-line-rail",`
 flex: 1;
 transition: background-color .3s var(--n-bezier);
 `),x("progress-graph-line-indicator",`
 background: var(--n-fill-color);
 font-size: 12px;
 transform: translateZ(0);
 display: flex;
 vertical-align: middle;
 height: 16px;
 line-height: 16px;
 padding: 0 10px;
 border-radius: 10px;
 position: absolute;
 white-space: nowrap;
 color: var(--n-text-color-line-inner);
 transition:
 right .2s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),x("progress-graph-line-rail",`
 position: relative;
 overflow: hidden;
 height: var(--n-rail-height);
 border-radius: 5px;
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 `,[x("progress-graph-line-fill",`
 background: var(--n-fill-color);
 position: relative;
 border-radius: 5px;
 height: inherit;
 width: 100%;
 max-width: 0%;
 transition:
 background-color .3s var(--n-bezier),
 max-width .2s var(--n-bezier);
 `,[j("processing",[G("&::after",`
 content: "";
 background-image: var(--n-line-bg-processing);
 animation: progress-processing-animation 2s var(--n-bezier) infinite;
 `)])])])])])]),G("@keyframes progress-processing-animation",`
 0% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 100%;
 opacity: 1;
 }
 66% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 100% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 `)]),Ge=Object.assign(Object.assign({},Y.props),{processing:Boolean,type:{type:String,default:"line"},gapDegree:Number,gapOffsetDegree:Number,status:{type:String,default:"default"},railColor:[String,Array],railStyle:[String,Array],color:[String,Array,Object],viewBoxWidth:{type:Number,default:100},strokeWidth:{type:Number,default:7},percentage:[Number,Array],unit:{type:String,default:"%"},showIndicator:{type:Boolean,default:!0},indicatorPosition:{type:String,default:"outside"},indicatorPlacement:{type:String,default:"outside"},indicatorTextColor:String,circleGap:{type:Number,default:1},height:Number,borderRadius:[String,Number],fillBorderRadius:[String,Number],offsetDegree:Number}),He=A({name:"Progress",props:Ge,setup(e){const c=z(()=>e.indicatorPlacement||e.indicatorPosition),a=z(()=>{if(e.gapDegree||e.gapDegree===0)return e.gapDegree;if(e.type==="dashboard")return 75}),{mergedClsPrefixRef:u,inlineThemeDisabled:p}=he(e),l=Y("Progress","-progress",Ee,Me,e,u),o=z(()=>{const{status:f}=e,{common:{cubicBezierEaseInOut:w},self:{fontSize:g,fontSizeCircle:C,railColor:h,railHeight:_,iconSizeCircle:m,iconSizeLine:i,textColorCircle:D,textColorLineInner:P,textColorLineOuter:$,lineBgProcessing:k,fontWeightCircle:R,[V("iconColor",f)]:q,[V("fillColor",f)]:W}}=l.value;return{"--n-bezier":w,"--n-fill-color":W,"--n-font-size":g,"--n-font-size-circle":C,"--n-font-weight-circle":R,"--n-icon-color":q,"--n-icon-size-circle":m,"--n-icon-size-line":i,"--n-line-bg-processing":k,"--n-rail-color":h,"--n-rail-height":_,"--n-text-color-circle":D,"--n-text-color-line-inner":P,"--n-text-color-line-outer":$}}),n=p?me("progress",z(()=>e.status[0]),o,e):void 0;return{mergedClsPrefix:u,mergedIndicatorPlacement:c,gapDeg:a,cssVars:p?void 0:o,themeClass:n?.themeClass,onRender:n?.onRender}},render(){const{type:e,cssVars:c,indicatorTextColor:a,showIndicator:u,status:p,railColor:l,railStyle:o,color:n,percentage:f,viewBoxWidth:w,strokeWidth:g,mergedIndicatorPlacement:C,unit:h,borderRadius:_,fillBorderRadius:m,height:i,processing:D,circleGap:P,mergedClsPrefix:$,gapDeg:k,gapOffsetDegree:R,themeClass:q,$slots:W,onRender:E}=this;return E?.(),t("div",{class:[q,`${$}-progress`,`${$}-progress--${e}`,`${$}-progress--${p}`],style:c,"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":f,role:e==="circle"||e==="line"||e==="dashboard"?"progressbar":"none"},e==="circle"||e==="dashboard"?t(Ae,{clsPrefix:$,status:p,showIndicator:u,indicatorTextColor:a,railColor:l,fillColor:n,railStyle:o,offsetDegree:this.offsetDegree,percentage:f,viewBoxWidth:w,strokeWidth:g,gapDegree:k===void 0?e==="dashboard"?75:0:k,gapOffsetDegree:R,unit:h},W):e==="line"?t(Oe,{clsPrefix:$,status:p,showIndicator:u,indicatorTextColor:a,railColor:l,fillColor:n,railStyle:o,percentage:f,processing:D,indicatorPlacement:C,unit:h,fillBorderRadius:m,railBorderRadius:_,height:i},W):e==="multiple-circle"?t(Te,{clsPrefix:$,strokeWidth:g,railColor:l,fillColor:n,railStyle:o,viewBoxWidth:w,percentage:f,showIndicator:u,circleGap:P},W):null)}});function Ue(){return t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 36"},t("path",{fill:"#EF9645",d:"M15.5 2.965c1.381 0 2.5 1.119 2.5 2.5v.005L20.5.465c1.381 0 2.5 1.119 2.5 2.5V4.25l2.5-1.535c1.381 0 2.5 1.119 2.5 2.5V8.75L29 18H15.458L15.5 2.965z"}),t("path",{fill:"#FFDC5D",d:"M4.625 16.219c1.381-.611 3.354.208 4.75 2.188.917 1.3 1.187 3.151 2.391 3.344.46.073 1.234-.313 1.234-1.397V4.5s0-2 2-2 2 2 2 2v11.633c0-.029 1-.064 1-.082V2s0-2 2-2 2 2 2 2v14.053c0 .017 1 .041 1 .069V4.25s0-2 2-2 2 2 2 2v12.638c0 .118 1 .251 1 .398V8.75s0-2 2-2 2 2 2 2V24c0 6.627-5.373 12-12 12-4.775 0-8.06-2.598-9.896-5.292C8.547 28.423 8.096 26.051 8 25.334c0 0-.123-1.479-1.156-2.865-1.469-1.969-2.5-3.156-3.125-3.866-.317-.359-.625-1.707.906-2.384z"}))}function Ye(){return t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 36"},t("circle",{fill:"#FFCB4C",cx:"18",cy:"17.018",r:"17"}),t("path",{fill:"#65471B",d:"M14.524 21.036c-.145-.116-.258-.274-.312-.464-.134-.46.13-.918.59-1.021 4.528-1.021 7.577 1.363 7.706 1.465.384.306.459.845.173 1.205-.286.358-.828.401-1.211.097-.11-.084-2.523-1.923-6.182-1.098-.274.061-.554-.016-.764-.184z"}),t("ellipse",{fill:"#65471B",cx:"13.119",cy:"11.174",rx:"2.125",ry:"2.656"}),t("ellipse",{fill:"#65471B",cx:"24.375",cy:"12.236",rx:"2.125",ry:"2.656"}),t("path",{fill:"#F19020",d:"M17.276 35.149s1.265-.411 1.429-1.352c.173-.972-.624-1.167-.624-1.167s1.041-.208 1.172-1.376c.123-1.101-.861-1.363-.861-1.363s.97-.4 1.016-1.539c.038-.959-.995-1.428-.995-1.428s5.038-1.221 5.556-1.341c.516-.12 1.32-.615 1.069-1.694-.249-1.08-1.204-1.118-1.697-1.003-.494.115-6.744 1.566-8.9 2.068l-1.439.334c-.54.127-.785-.11-.404-.512.508-.536.833-1.129.946-2.113.119-1.035-.232-2.313-.433-2.809-.374-.921-1.005-1.649-1.734-1.899-1.137-.39-1.945.321-1.542 1.561.604 1.854.208 3.375-.833 4.293-2.449 2.157-3.588 3.695-2.83 6.973.828 3.575 4.377 5.876 7.952 5.048l3.152-.681z"}),t("path",{fill:"#65471B",d:"M9.296 6.351c-.164-.088-.303-.224-.391-.399-.216-.428-.04-.927.393-1.112 4.266-1.831 7.699-.043 7.843.034.433.231.608.747.391 1.154-.216.405-.74.546-1.173.318-.123-.063-2.832-1.432-6.278.047-.257.109-.547.085-.785-.042zm12.135 3.75c-.156-.098-.286-.243-.362-.424-.187-.442.023-.927.468-1.084 4.381-1.536 7.685.48 7.823.567.415.26.555.787.312 1.178-.242.39-.776.495-1.191.238-.12-.072-2.727-1.621-6.267-.379-.266.091-.553.046-.783-.096z"}))}function Ke(){return t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 36"},t("ellipse",{fill:"#292F33",cx:"18",cy:"26",rx:"18",ry:"10"}),t("ellipse",{fill:"#66757F",cx:"18",cy:"24",rx:"18",ry:"10"}),t("path",{fill:"#E1E8ED",d:"M18 31C3.042 31 1 16 1 12h34c0 2-1.958 19-17 19z"}),t("path",{fill:"#77B255",d:"M35 12.056c0 5.216-7.611 9.444-17 9.444S1 17.271 1 12.056C1 6.84 8.611 3.611 18 3.611s17 3.229 17 8.445z"}),t("ellipse",{fill:"#A6D388",cx:"18",cy:"13",rx:"15",ry:"7"}),t("path",{d:"M21 17c-.256 0-.512-.098-.707-.293-2.337-2.337-2.376-4.885-.125-8.262.739-1.109.9-2.246.478-3.377-.461-1.236-1.438-1.996-1.731-2.077-.553 0-.958-.443-.958-.996 0-.552.491-.995 1.043-.995.997 0 2.395 1.153 3.183 2.625 1.034 1.933.91 4.039-.351 5.929-1.961 2.942-1.531 4.332-.125 5.738.391.391.391 1.023 0 1.414-.195.196-.451.294-.707.294zm-6-2c-.256 0-.512-.098-.707-.293-2.337-2.337-2.376-4.885-.125-8.262.727-1.091.893-2.083.494-2.947-.444-.961-1.431-1.469-1.684-1.499-.552 0-.989-.447-.989-1 0-.552.458-1 1.011-1 .997 0 2.585.974 3.36 2.423.481.899 1.052 2.761-.528 5.131-1.961 2.942-1.531 4.332-.125 5.738.391.391.391 1.023 0 1.414-.195.197-.451.295-.707.295z",fill:"#5C913B"}))}function Xe(){return t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 36"},t("path",{fill:"#FFCC4D",d:"M36 18c0 9.941-8.059 18-18 18-9.94 0-18-8.059-18-18C0 8.06 8.06 0 18 0c9.941 0 18 8.06 18 18"}),t("ellipse",{fill:"#664500",cx:"18",cy:"27",rx:"5",ry:"6"}),t("path",{fill:"#664500",d:"M5.999 11c-.208 0-.419-.065-.599-.2-.442-.331-.531-.958-.2-1.4C8.462 5.05 12.816 5 13 5c.552 0 1 .448 1 1 0 .551-.445.998-.996 1-.155.002-3.568.086-6.204 3.6-.196.262-.497.4-.801.4zm24.002 0c-.305 0-.604-.138-.801-.4-2.64-3.521-6.061-3.598-6.206-3.6-.55-.006-.994-.456-.991-1.005C22.006 5.444 22.45 5 23 5c.184 0 4.537.05 7.8 4.4.332.442.242 1.069-.2 1.4-.18.135-.39.2-.599.2zm-16.087 4.5l1.793-1.793c.391-.391.391-1.023 0-1.414s-1.023-.391-1.414 0L12.5 14.086l-1.793-1.793c-.391-.391-1.023-.391-1.414 0s-.391 1.023 0 1.414l1.793 1.793-1.793 1.793c-.391.391-.391 1.023 0 1.414.195.195.451.293.707.293s.512-.098.707-.293l1.793-1.793 1.793 1.793c.195.195.451.293.707.293s.512-.098.707-.293c.391-.391.391-1.023 0-1.414L13.914 15.5zm11 0l1.793-1.793c.391-.391.391-1.023 0-1.414s-1.023-.391-1.414 0L23.5 14.086l-1.793-1.793c-.391-.391-1.023-.391-1.414 0s-.391 1.023 0 1.414l1.793 1.793-1.793 1.793c-.391.391-.391 1.023 0 1.414.195.195.451.293.707.293s.512-.098.707-.293l1.793-1.793 1.793 1.793c.195.195.451.293.707.293s.512-.098.707-.293c.391-.391.391-1.023 0-1.414L24.914 15.5z"}))}const Je=x("result",`
 color: var(--n-text-color);
 line-height: var(--n-line-height);
 font-size: var(--n-font-size);
 transition:
 color .3s var(--n-bezier);
`,[x("result-icon",`
 display: flex;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `,[X("status-image",`
 font-size: var(--n-icon-size);
 width: 1em;
 height: 1em;
 `),x("base-icon",`
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]),x("result-content",{marginTop:"24px"}),x("result-footer",`
 margin-top: 24px;
 text-align: center;
 `),x("result-header",[X("title",`
 margin-top: 16px;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 text-align: center;
 color: var(--n-title-text-color);
 font-size: var(--n-title-font-size);
 `),X("description",`
 margin-top: 4px;
 text-align: center;
 font-size: var(--n-font-size);
 `)])]),Ze={403:Ue,404:Ye,418:Ke,500:Xe,info:()=>t(te,null),success:()=>t(ie,null),warning:()=>t(re,null),error:()=>t(oe,null)},Qe=Object.assign(Object.assign({},Y.props),{size:{type:String,default:"medium"},status:{type:String,default:"info"},title:String,description:String}),fe=A({name:"Result",props:Qe,slots:Object,setup(e){const{mergedClsPrefixRef:c,inlineThemeDisabled:a}=he(e),u=Y("Result","-result",Je,Le,e,c),p=z(()=>{const{size:o,status:n}=e,{common:{cubicBezierEaseInOut:f},self:{textColor:w,lineHeight:g,titleTextColor:C,titleFontWeight:h,[V("iconColor",n)]:_,[V("fontSize",o)]:m,[V("titleFontSize",o)]:i,[V("iconSize",o)]:D}}=u.value;return{"--n-bezier":f,"--n-font-size":m,"--n-icon-size":D,"--n-line-height":g,"--n-text-color":w,"--n-title-font-size":i,"--n-title-font-weight":h,"--n-title-text-color":C,"--n-icon-color":_||""}}),l=a?me("result",z(()=>{const{size:o,status:n}=e;let f="";return o&&(f+=o[0]),n&&(f+=n[0]),f}),p,e):void 0;return{mergedClsPrefix:c,cssVars:a?void 0:p,themeClass:l?.themeClass,onRender:l?.onRender}},render(){var e;const{status:c,$slots:a,mergedClsPrefix:u,onRender:p}=this;return p?.(),t("div",{class:[`${u}-result`,this.themeClass],style:this.cssVars},t("div",{class:`${u}-result-icon`},((e=a.icon)===null||e===void 0?void 0:e.call(a))||t(ee,{clsPrefix:u},{default:()=>Ze[c]()})),t("div",{class:`${u}-result-header`},this.title?t("div",{class:`${u}-result-header__title`},this.title):null,this.description?t("div",{class:`${u}-result-header__description`},this.description):null),a.default&&t("div",{class:`${u}-result-content`},a),a.footer&&t("div",{class:`${u}-result-footer`},a.footer()))}}),et=()=>{const{$dayjs:e}=be();return{j:(a,u="YYYY/MM/DD")=>e(a).calendar("jalali").locale("fa").format(u)}},tt=e=>e.replace(/[۰-۹]/g,c=>"0123456789"["۰۱۲۳۴۵۶۷۸۹".indexOf(c)]),Q=e=>tt(e).replace(/[^A-Za-z0-9-]/g,"").toUpperCase();let T=null;async function rt(){if(T)return T;try{T=await $fetch("/mock/warranty-mock.json")}catch{T=(await we(()=>import("./DHgtq0G8.js"),[],import.meta.url)).default}return T}async function ot(e){const c=Q(e),{public:a}=typeof se=="function"?se():{public:{}},u=a.warrantyApiBase||a.apiBase||"/api/v1",p=(()=>{const o=String(u).replace(/\/$/,"");try{return new URL(o,window.location.origin).toString().replace(/\/$/,"")}catch{}return o})();try{const o=await $fetch(`${p.replace(/\/$/,"")}/warranty/inquiry/${encodeURIComponent(c)}`);if(Array.isArray(o)&&o.length>0){const n=o[0];return{serials:[n.productSerial,n.warrantySerial,n.trackingSerial].filter(g=>!!g).map(Q),brand:"",model:n.productName||"",purchaseDate:n.startDate,expireDate:n.endDate,warranty:{value:n.duration??0,unit:"month"},companyService:n.warrantySerialName||"",serviceCenter:n.warrantyName||"",status:{current:"registered",history:[n.startDate?{key:"registered",at:n.startDate,note:"شروع گارانتی"}:void 0].filter(Boolean)},policyRef:void 0}}}catch{}return(await rt()).records.find(o=>o.serials.some(n=>Q(n)===c))||null}const it={class:"space-y-6",dir:"rtl"},nt={class:"flex flex-col md:flex-row md:items-end gap-4"},st={class:"w-full md:flex-1 md:min-w-[360px]"},lt={class:"ltr"};const at={class:"w-full md:w-[16%] md:pt-[28px]"},ct={class:"flex gap-2 md:justify-end"},dt={class:"flex flex-col gap-3 md:flex-row md:items-center md:justify-between"},ut={class:"flex items-center gap-3"},pt={class:"flex items-center gap-2 text-xs text-slate-400"},ft={class:"ltr font-mono text-sm text-slate-500"},gt={class:"space-y-6"},ht={class:"flex flex-col gap-4 md:flex-row md:items-center md:justify-between"},mt={class:"flex items-center gap-3"},xt={class:"space-y-1"},vt={class:"text-xl font-semibold"},yt={class:"text-xs text-slate-500"},bt={class:"flex flex-wrap items-center justify-start gap-6 text-slate-700"},wt={class:"min-w-[110px] text-center"},Ct={class:"min-w-[140px] text-center"},St={class:"text-base font-semibold"},_t={class:"grid gap-3 md:grid-cols-2"},zt={class:"flex items-center justify-between gap-3"},$t={class:"flex items-center gap-2 text-sm text-slate-500"},kt={key:0,class:"text-xs font-normal text-slate-500"},Bt={class:"mb-2 flex items-center justify-between text-sm text-slate-600"},Dt={class:"font-medium"},Nt={class:"flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200/70 bg-white px-4 py-3 text-sm text-slate-600"},Pt={class:"flex items-center gap-2"},Rt={class:"flex items-center gap-2 text-xs text-slate-400"},It=A({__name:"check",setup(e){const{j:c}=et(),a=De(),u=d=>d.replace(/[۰-۹]/g,r=>"0123456789"["۰۱۲۳۴۵۶۷۸۹".indexOf(r)]),p=d=>String(d).replace(/\d/g,r=>"۰۱۲۳۴۵۶۷۸۹"[+r]),l=["SN1234567890","AS-TUF-F15-001","356789012345678"],o=d=>{h(d),setTimeout(()=>document.querySelector(".ltr input")?.focus(),0)},n=H(),f=H(!1),w=H(!1),g=Ce({serial:"",phone:""}),C=d=>u(d||"").toUpperCase(),h=d=>{g.serial=C(d)},_=d=>{g.phone=u(d).replace(/[^\d]/g,"").slice(0,11)},m={serial:[{required:!0,validator:(d,r)=>{const S=C(r);return S?S.length<5?new Error("حداقل ۵ کاراکتر"):!0:new Error("شماره سریال لازم است")},trigger:["input","blur"]}],phone:[{validator:(d,r)=>r?/^09\d{9}$/.test(u(r))||new Error("فرمت موبایل معتبر نیست"):!0,trigger:["input","blur"]}]};m.serial[0].validator=(d,r)=>{const S=C(r);return S?/^[\x00-\x7F]*$/.test(S)?!0:new Error("Only Latin characters allowed"):new Error("Serial is required")};const i=H(null),D=async()=>{if(await n.value?.validate?.().catch(()=>!1)){w.value=!0,f.value=!0;try{const r=await ot(g.serial);if(!r){i.value=null,a.warning("رکوردی برای این سریال یافت نشد");return}const S=r.status.history[r.status.history.length-1];i.value={serial:r.serials?.[0]||"",brand:r.brand,model:r.model,warrantySerial:r.serials?.[1]||"",trackingSerial:r.serials?.[2]||"",durationMonths:r.warranty?.unit==="month"?r.warranty.value:void 0,purchaseDate:new Date(r.purchaseDate),expireDate:new Date(r.expireDate),warrantyActive:new Date(r.expireDate).getTime()>Date.now(),status:r.status.current,serviceCenter:r.serviceCenter,updatedAt:new Date(S?.at||r.purchaseDate),note:S?.note}}catch{i.value=null,a.error("خطا در استعلام. دوباره تلاش کنید.")}finally{f.value=!1}}},P=z(()=>{if(!i.value)return 0;const d=new Date(i.value.expireDate).getTime()-Date.now();return Math.max(0,Math.ceil(d/(1e3*60*60*24)))}),$=z(()=>{if(!i.value)return 0;const d=new Date(i.value.purchaseDate).getTime(),r=new Date(i.value.expireDate).getTime(),K=(Date.now()-d)/Math.max(1,r-d)*100;return Math.min(100,Math.max(0,Math.round(K)))}),k=z(()=>{const d=i.value?.warrantyActive;return d===void 0?{container:"border border-slate-200 bg-slate-50 text-slate-600",iconWrapper:"bg-slate-200 text-slate-500",icon:"ph:shield-duotone",accent:"text-slate-600",progress:"#0ea5e9"}:d?{container:"border border-emerald-200/80 bg-emerald-50 text-emerald-700",iconWrapper:"bg-emerald-500/10 text-emerald-600",icon:"ph:shield-check-duotone",accent:"text-emerald-600",progress:"#10b981"}:{container:"border border-rose-200/80 bg-rose-50 text-rose-700",iconWrapper:"bg-rose-500/10 text-rose-600",icon:"ph:shield-warning-duotone",accent:"text-rose-600",progress:"#ef4444"}}),R=z(()=>{const d=i.value;if(!d)return[];const r=P.value;return!d.warrantyActive||r<=0,[{label:"نام محصول",value:d.model||"—",icon:"ph:device-mobile-duotone"},{label:"سریال دستگاه",value:d.serial||"—",icon:"ph:barcode-duotone",mono:!0},{label:"سریال گارانتی",value:d.warrantySerial||"—",icon:"ph:identification-badge-duotone",mono:!0},{label:"سریال رهگیری",value:d.trackingSerial||"—",icon:"ph:qrcode-duotone",mono:!0},{label:"تاریخ شروع",value:c(d.purchaseDate),icon:"ph:calendar-check-duotone"},{label:"پایان گارانتی",value:c(d.expireDate),icon:"ph:calendar-dots-duotone"}]}),q=()=>window.print(),W=async()=>{const d=new URL(location.href);d.searchParams.set("track",C(g.serial)),await navigator.clipboard.writeText(d.toString()),a.success("لینک پیگیری کپی شد")},E=()=>{a.success("اعلان پیامکی برای این سریال فعال شد (دمو)")},ne=()=>{g.serial="",g.phone="",i.value=null,w.value=!1,n.value?.restoreValidation?.()};return Se(()=>{const d=new URLSearchParams(location.search).get("track");d&&(g.serial=C(d),D())}),_e({title:"استعلام وضعیت گارانتی"}),(d,r)=>{const S=xe,K=ve;return M(),O("div",it,[r[19]||(r[19]=s("h1",{class:"text-xl font-bold"},"استعلام وضعیت گارانتی",-1)),v(b(ce),{bordered:!1,class:"rounded-2xl ring-1 ring-slate-200/70"},{default:y(()=>[v(b(Pe),{type:"info","show-icon":!0,class:"mb-4"},{default:y(()=>[r[2]||(r[2]=I(" شماره را دقیق و بدون فاصله وارد کنید. نمونه: ",-1)),(M(),O(le,null,ae(l,B=>v(b(ue),{key:B,size:"small",round:"",type:"info",bordered:!1,class:"ltr cursor-pointer mx-1",onClick:jt=>o(B)},{default:y(()=>[I(N(B),1)]),_:2},1032,["onClick"])),64))]),_:1}),v(b(Re),{model:g,rules:m,"label-placement":"top",ref_key:"formRef",ref:n},{default:y(()=>[s("div",nt,[s("div",st,[v(b(Ie),{label:"سریال کالا/گارانتی یا شماره رهگیری",path:"serial",class:"mb-0"},{feedback:y(()=>[...r[3]||(r[3]=[s("div",{class:"text-xs text-slate-500"}," حروف انگلیسی و اعداد مجاز است؛ خط تیره مجاز. ",-1)])]),default:y(()=>[s("div",lt,[v(b(Ne),{value:g.serial,"onUpdate:value":[r[0]||(r[0]=B=>g.serial=B),h],size:"large",clearable:"",placeholder:"مثلاً: SN1234567890",onKeydown:ze($e(D,["prevent"]),["enter"])},{prefix:y(()=>[v(S,{name:"ph:fingerprint-duotone",size:"18"})]),_:1},8,["value","onKeydown"])])]),_:1})]),Z("",!0),s("div",at,[s("div",ct,[v(b(F),{type:"primary",size:"large",strong:"",round:"",class:"w-full md:w-auto",loading:f.value,onClick:D},{default:y(()=>[...r[5]||(r[5]=[I(" استعلام ",-1)])]),_:1},8,["loading"]),v(b(F),{quaternary:"",size:"large",round:"",class:"w-full md:w-auto",onClick:ne},{default:y(()=>[...r[6]||(r[6]=[I(" پاک کردن ",-1)])]),_:1})])])])]),_:1},8,["model"])]),_:1}),i.value?(M(),J(b(ce),{key:0,segmented:{content:"soft",footer:"soft"},class:"rounded-2xl",bordered:!1},{header:y(()=>[s("div",dt,[s("div",ut,[r[7]||(r[7]=s("span",{class:"text-base font-semibold"},"نتیجه استعلام",-1)),v(b(ue),{type:i.value.warrantyActive?"success":"error"},{default:y(()=>[I(N(i.value.warrantyActive?"گارانتی فعال":"گارانتی منقضی"),1)]),_:1},8,["type"])]),s("div",pt,[v(S,{name:"ph:fingerprint-duotone",class:"text-base"}),s("span",ft,N(i.value.serial),1)])])]),action:y(()=>[v(b(de),{wrap:""},{default:y(()=>[v(b(F),{quaternary:"",onClick:q},{icon:y(()=>[v(S,{name:"ph:printer-duotone"})]),default:y(()=>[r[13]||(r[13]=I(" چاپ ",-1))]),_:1}),v(b(F),{quaternary:"",onClick:W},{icon:y(()=>[v(S,{name:"ph:link-duotone"})]),default:y(()=>[r[14]||(r[14]=I(" کپی لینک پیگیری ",-1))]),_:1}),Z("",!0)]),_:1})]),default:y(()=>[v(b(ke),{show:f.value},{default:y(()=>[s("div",gt,[s("section",{class:U(["rounded-2xl p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] transition-colors",k.value.container])},[s("div",ht,[s("div",mt,[s("div",{class:U(["grid h-12 w-12 place-items-center rounded-full text-2xl",k.value.iconWrapper])},[v(S,{name:k.value.icon},null,8,["name"])],2),s("div",xt,[r[8]||(r[8]=s("p",{class:"text-sm text-slate-600/80"},"وضعیت کنونی",-1)),s("p",vt,N(i.value.warrantyActive?"گارانتی فعال":"گارانتی منقضی")+" "+N(i.value.serviceCenter),1),s("p",yt," آخرین بروزرسانی: "+N(b(c)(i.value.updatedAt)),1)])]),s("div",bt,[s("div",wt,[r[9]||(r[9]=s("p",{class:"text-xs text-slate-500"},"روز باقیمانده",-1)),s("p",{class:U(["text-3xl font-bold",k.value.accent])},N(p(P.value)),3)]),r[11]||(r[11]=s("div",{class:"hidden h-12 w-px bg-white/40 md:block"},null,-1)),s("div",Ct,[r[10]||(r[10]=s("p",{class:"text-xs text-slate-500"},"پایان گارانتی",-1)),s("p",St,N(b(c)(i.value.expireDate)),1)])])])],2),s("div",_t,[(M(!0),O(le,null,ae(R.value,B=>(M(),O("div",{key:B.label,class:"rounded-xl border border-slate-200/70 bg-slate-50/50 px-4 py-3"},[s("div",zt,[s("div",$t,[v(S,{name:B.icon,class:"text-lg text-slate-400"},null,8,["name"]),s("span",null,N(B.label),1)]),s("div",{class:U(["text-sm font-semibold text-slate-700",B.tone,B.mono?"ltr font-mono text-base":""])},[I(N(B.value)+" ",1),B.suffix?(M(),O("span",kt,N(B.suffix),1)):Z("",!0)],2)])]))),128))]),s("div",null,[s("div",Bt,[r[12]||(r[12]=s("span",null,"پیشرفت مصرف گارانتی",-1)),s("span",Dt,N(p($.value))+"%",1)]),v(b(He),{type:"line",percentage:$.value,height:10,color:k.value.progress,"indicator-text-color":k.value.progress,"rail-color":"rgba(148, 163, 184, 0.25)","show-indicator":!1},null,8,["percentage","color","indicator-text-color"])]),s("div",Nt,[s("div",Pt,[v(S,{name:"ph:map-pin-duotone",class:"text-lg text-slate-400"}),s("span",null,"مرکز خدمات: "+N(i.value.serviceCenter),1)]),s("div",Rt,[v(S,{name:"ph:clock-counter-clockwise-duotone",class:"text-base"}),s("span",null,"آخرین بروزرسانی "+N(b(c)(i.value.updatedAt)),1)])])])]),_:1},8,["show"])]),_:1})):w.value&&!f.value?(M(),J(b(fe),{key:1,status:"warning",title:"موردی یافت نشد",description:`سریال «${g.serial||"—"}» در سامانه پیدا نشد.`},{footer:y(()=>[...r[16]||(r[16]=[s("div",{class:"space-y-2 text-right"},[s("div",{class:"text-slate-600 text-sm"}," لطفاً این موارد را بررسی کنید: "),s("ul",{class:"list-disc pr-5 text-slate-600 text-sm"},[s("li",null,"از اعداد انگلیسی استفاده کنید (۰→0، ۱→1 …)"),s("li",null,"فاصله و کاراکترهای غیرضروری را حذف کنید"),s("li",null,"حروف را انگلیسی و بزرگ وارد کنید")])],-1)])]),action:y(()=>[v(b(de),{justify:"center"},{default:y(()=>[v(b(F),{type:"primary",secondary:"",onClick:ne},{default:y(()=>[...r[17]||(r[17]=[I("استعلام جدید",-1)])]),_:1}),v(K,{to:"/warranty/policies"},{default:y(()=>[v(b(F),{quaternary:""},{default:y(()=>[...r[18]||(r[18]=[I("شرایط گارانتی برندها",-1)])]),_:1})]),_:1})]),_:1})]),_:1},8,["description"])):(M(),J(b(fe),{key:2,status:"info",title:"هنوز جستجویی انجام نشده",description:"سریال/IMEI را وارد کنید و دکمه استعلام را بزنید."}))])}}}),Gt=Be(It,[["__scopeId","data-v-3d98899a"]]);export{Gt as default};
