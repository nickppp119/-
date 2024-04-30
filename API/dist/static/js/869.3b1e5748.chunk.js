"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[869],{7452:(e,t,a)=>{a.d(t,{A:()=>s});var n=a(3768);const o="127.0.0.1",r="443",s={login:(e,t,a,s)=>{const i="http://".concat(o,":").concat(r,"/api/user/login"),c={method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({username:e,password:t})};fetch(i,c).then((async e=>{const t=await e.json();e.ok?(a.setValue(t.detail),s("/")):n.Ay.error(t.detail)}))},create:(e,t,a,s)=>{const i="http://".concat(o,":").concat(r,"/api/user/create"),c={method:"POST",headers:{Authorization:"Bearer ".concat(s),"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({username:e,password:t,role:a})};fetch(i,c).then((async e=>{const t=await e.json();e.ok?n.Ay.success(t.detail):n.Ay.error(t.detail)}))},remove:(e,t)=>{const a="http://".concat(o,":").concat(r,"/api/user/remove"),s={method:"DELETE",headers:{Authorization:"Bearer ".concat(t),"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({username:e})};fetch(a,s).then((async e=>{const t=await e.json();e.ok?n.Ay.success(t.detail):n.Ay.error(t.detail)}))},update:(e,t,a,s)=>{const i="http://".concat(o,":").concat(r,"/api/user/update"),c={method:"PUT",headers:{Authorization:"Bearer ".concat(s),"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({username:e,password:t,role:a})};fetch(i,c).then((async e=>{const t=await e.json();e.ok?n.Ay.success(t.detail):n.Ay.error(t.detail)}))},search:(e,t,a)=>{const s="http://".concat(o,":").concat(r,"/api/user/search"),i={method:"GET",headers:{Authorization:"Bearer ".concat(a)}};fetch(s,i).then((async a=>{const o=await a.json();if(a.ok){const a=o.filter((e=>e.username!==t));e(a)}else n.Ay.error(o.detail)}))}}},2292:(e,t,a)=>{a.d(t,{H1:()=>c,H3:()=>l});var n=a(8387),o=a(6446),r=a(4535),s=(a(5043),a(579));const i=(0,r.Ay)(o.A)((e=>{let{texttransformstyle:t,ellipsis:a}=e;return{textTransform:t||"none",whiteSpace:a?"nowrap":"normal",overflow:a?"hidden":"",textOverflow:a?"ellipsis":""}})),c=e=>{let{children:t,className:a,ellipsis:o,textTransform:r,...c}=e;return(0,s.jsx)(i,{texttransformstyle:r,ellipsis:o,className:(0,n.A)({[a||""]:!0}),component:"h1",mb:0,mt:0,fontSize:"28px",fontWeight:"600",lineHeight:"1.5",...c,children:t})},l=e=>{let{children:t,className:a,ellipsis:o,textTransform:r,...c}=e;return(0,s.jsx)(i,{texttransformstyle:r,ellipsis:o,className:(0,n.A)({[a||""]:!0}),component:"h3",mb:0,mt:0,fontSize:"18px",fontWeight:"600",lineHeight:"1.5",...c,children:t})}},3869:(e,t,a)=>{a.r(t),a.d(t,{default:()=>y});var n=a(5043),o=a(6446),r=a(9252),s=a(8911),i=a(8982),c=a(1906),l=a(9190),d=a(6607),p=a(3193),u=a(5187),m=a(2292),h=a(7452),v=a(579);const y=()=>{const{userState:e}=(0,u.Z)(),[t,a]=(0,n.useState)(""),[y,f]=(0,n.useState)([]);return(0,n.useEffect)((()=>{h.A.search(f,e.value.username,e.value.token)}),[e.value.token,e.value.username]),(0,v.jsx)(r.A,{fixed:!0,sx:{width:"100%",height:"100%"},children:(0,v.jsx)(o.A,{component:"form",onSubmit:a=>{a.preventDefault(),t&&h.A.remove(t,e.value.token)},noValidate:!0,sx:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},children:(0,v.jsxs)(s.A,{spacing:2,sx:{display:"flex",justifyContent:"center",alignItems:"center"},children:[(0,v.jsx)(m.H1,{children:"\u522a\u9664\u4f7f\u7528\u8005"}),(0,v.jsxs)(p.A,{fullWidth:!0,children:[(0,v.jsx)(l.A,{children:"\u5e33\u865f"}),(0,v.jsx)(i.A,{value:t,label:"\u5e33\u865f",onChange:e=>a(e.target.value),children:0===y.length?(0,v.jsx)(d.A,{value:null,children:"None"},"user-0"):y.map(((e,t)=>(0,v.jsx)(d.A,{value:e.username,children:e.username},"user-".concat(t))))})]}),(0,v.jsx)(c.A,{type:"submit",variant:"outlined",size:"large",children:"\u9001\u51fa"})]})})})}},6607:(e,t,a)=>{a.d(t,{A:()=>S});var n=a(8587),o=a(8168),r=a(5043),s=a(8387),i=a(8606),c=a(7266),l=a(4535),d=a(1475),p=a(2876),u=a(1347),m=a(5429),h=a(5013),v=a(5849),y=a(7056);const f=(0,y.A)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);const g=(0,y.A)("MuiListItemIcon",["root","alignItemsFlexStart"]);const b=(0,y.A)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);var A=a(2400);function x(e){return(0,A.Ay)("MuiMenuItem",e)}const w=(0,y.A)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]);var C=a(579);const j=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],k=(0,l.Ay)(m.A,{shouldForwardProp:e=>(0,d.A)(e)||"classes"===e,name:"MuiMenuItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.dense&&t.dense,a.divider&&t.divider,!a.disableGutters&&t.gutters]}})((e=>{let{theme:t,ownerState:a}=e;return(0,o.A)({},t.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!a.disableGutters&&{paddingLeft:16,paddingRight:16},a.divider&&{borderBottom:"1px solid ".concat((t.vars||t).palette.divider),backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},["&.".concat(w.selected)]:{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.selectedOpacity,")"):(0,c.X4)(t.palette.primary.main,t.palette.action.selectedOpacity),["&.".concat(w.focusVisible)]:{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / calc(").concat(t.vars.palette.action.selectedOpacity," + ").concat(t.vars.palette.action.focusOpacity,"))"):(0,c.X4)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},["&.".concat(w.selected,":hover")]:{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / calc(").concat(t.vars.palette.action.selectedOpacity," + ").concat(t.vars.palette.action.hoverOpacity,"))"):(0,c.X4)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.selectedOpacity,")"):(0,c.X4)(t.palette.primary.main,t.palette.action.selectedOpacity)}},["&.".concat(w.focusVisible)]:{backgroundColor:(t.vars||t).palette.action.focus},["&.".concat(w.disabled)]:{opacity:(t.vars||t).palette.action.disabledOpacity},["& + .".concat(f.root)]:{marginTop:t.spacing(1),marginBottom:t.spacing(1)},["& + .".concat(f.inset)]:{marginLeft:52},["& .".concat(b.root)]:{marginTop:0,marginBottom:0},["& .".concat(b.inset)]:{paddingLeft:36},["& .".concat(g.root)]:{minWidth:36}},!a.dense&&{[t.breakpoints.up("sm")]:{minHeight:"auto"}},a.dense&&(0,o.A)({minHeight:32,paddingTop:4,paddingBottom:4},t.typography.body2,{["& .".concat(g.root," svg")]:{fontSize:"1.25rem"}}))})),S=r.forwardRef((function(e,t){const a=(0,p.A)({props:e,name:"MuiMenuItem"}),{autoFocus:c=!1,component:l="li",dense:d=!1,divider:m=!1,disableGutters:y=!1,focusVisibleClassName:f,role:g="menuitem",tabIndex:b,className:A}=a,w=(0,n.A)(a,j),S=r.useContext(u.A),T=r.useMemo((()=>({dense:d||S.dense||!1,disableGutters:y})),[S.dense,d,y]),O=r.useRef(null);(0,h.A)((()=>{c&&O.current&&O.current.focus()}),[c]);const I=(0,o.A)({},a,{dense:T.dense,divider:m,disableGutters:y}),M=(e=>{const{disabled:t,dense:a,divider:n,disableGutters:r,selected:s,classes:c}=e,l={root:["root",a&&"dense",t&&"disabled",!r&&"gutters",n&&"divider",s&&"selected"]},d=(0,i.A)(l,x,c);return(0,o.A)({},c,d)})(a),L=(0,v.A)(O,t);let N;return a.disabled||(N=void 0!==b?b:-1),(0,C.jsx)(u.A.Provider,{value:T,children:(0,C.jsx)(k,(0,o.A)({ref:L,role:g,tabIndex:N,component:l,focusVisibleClassName:(0,s.A)(M.focusVisible,f),className:(0,s.A)(M.root,A)},w,{ownerState:I,classes:M}))})}))}}]);
//# sourceMappingURL=869.3b1e5748.chunk.js.map