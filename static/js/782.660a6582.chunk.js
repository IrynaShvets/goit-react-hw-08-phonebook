"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[782],{3485:function(e,t,n){n.r(t),n.d(t,{default:function(){return B}});var a=n(885),i=n(2791),r=n(5048),s=n(6871),o=n(4708),d=n(4554),l=n(3044),c=n(890),u=n(1889),m=n(7946),x=n(5523),h=n(9174),p=n(6151),f=n(403),Z=n(7107),b=n(7012),g=n(688),v=n(168),j=n(7939),W=n(4942),w=n(3366),k=n(7462),S=n(8182),C=n(767),P=n(1046),y=n(7630),G=n(5159);function _(e){return(0,G.Z)("MuiContainer",e)}(0,n(208).Z)("MuiContainer",["root","disableGutters","fixed","maxWidthXs","maxWidthSm","maxWidthMd","maxWidthLg","maxWidthXl"]);var M,R,L,N=n(4036),q=n(184),z=["className","component","disableGutters","fixed","maxWidth"],E=(0,y.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["maxWidth".concat((0,N.Z)(String(n.maxWidth)))],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}})((function(e){var t=e.theme,n=e.ownerState;return(0,k.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!n.disableGutters&&(0,W.Z)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}))}),(function(e){var t=e.theme;return e.ownerState.fixed&&Object.keys(t.breakpoints.values).reduce((function(e,n){var a=t.breakpoints.values[n];return 0!==a&&(e[t.breakpoints.up(n)]={maxWidth:"".concat(a).concat(t.breakpoints.unit)}),e}),{})}),(function(e){var t=e.theme,n=e.ownerState;return(0,k.Z)({},"xs"===n.maxWidth&&(0,W.Z)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),n.maxWidth&&"xs"!==n.maxWidth&&(0,W.Z)({},t.breakpoints.up(n.maxWidth),{maxWidth:"".concat(t.breakpoints.values[n.maxWidth]).concat(t.breakpoints.unit)}))})),I=i.forwardRef((function(e,t){var n=(0,P.Z)({props:e,name:"MuiContainer"}),a=n.className,i=n.component,r=void 0===i?"div":i,s=n.disableGutters,o=void 0!==s&&s,d=n.fixed,l=void 0!==d&&d,c=n.maxWidth,u=void 0===c?"lg":c,m=(0,w.Z)(n,z),x=(0,k.Z)({},n,{component:r,disableGutters:o,fixed:l,maxWidth:u}),h=function(e){var t=e.classes,n=e.fixed,a=e.disableGutters,i=e.maxWidth,r={root:["root",i&&"maxWidth".concat((0,N.Z)(String(i))),n&&"fixed",a&&"disableGutters"]};return(0,C.Z)(r,_,t)}(x);return(0,q.jsx)(E,(0,k.Z)({as:r,ownerState:x,className:(0,S.Z)(h.root,a),ref:t},m))})),A=n(3504),D=j.ZP.img(M||(M=(0,v.Z)(["\n  display: block;\n  width: 100%;\n  height: 100vh;\n"]))),O=(0,j.ZP)(I)(R||(R=(0,v.Z)(["\n  position: absolute;\n  top: 50px;\n  left: 354px;\n"]))),X=(0,j.ZP)(A.OL)(L||(L=(0,v.Z)(["\n  font-weight: 400;\n  font-size: 14px;\n  color: #100733;\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    color: #9e1111;\n  }\n"]))),T=n.p+"static/media/sign-up.013d8140cef7badc0036.jpg",U=(0,Z.Z)();function V(){var e=(0,r.I0)(),t=((0,s.s0)(),(0,i.useState)("")),n=(0,a.Z)(t,2),Z=n[0],v=n[1],j=(0,i.useState)(""),W=(0,a.Z)(j,2),w=W[0],k=W[1],S=(0,i.useState)(""),C=(0,a.Z)(S,2),P=C[0],y=C[1],G=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":return v(a);case"email":return k(a);case"password":return y(a);default:return}};return(0,q.jsxs)(b.Z,{theme:U,children:[(0,q.jsx)(D,{src:T,alt:"alt"}),(0,q.jsxs)(O,{component:"main",maxWidth:"xs",children:[(0,q.jsx)(o.ZP,{}),(0,q.jsxs)(d.Z,{sx:{marginTop:6,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,q.jsx)(l.Z,{sx:{m:1,bgcolor:"#100733"},children:(0,q.jsx)(f.Z,{})}),(0,q.jsx)(c.Z,{component:"h1",variant:"h5",children:"Sign up"}),(0,q.jsxs)(d.Z,{component:"form",noValidate:!0,onSubmit:function(t){t.preventDefault(),e(g.Z.register({name:Z,email:w,password:P})),v(""),k(""),y("")},sx:{mt:3},children:[(0,q.jsxs)(u.ZP,{container:!0,spacing:2,children:[(0,q.jsx)(u.ZP,{item:!0,xs:12,children:(0,q.jsx)(m.Z,{required:!0,fullWidth:!0,id:"name",label:"Name",name:"name",autoComplete:"name",value:Z,onChange:G})}),(0,q.jsx)(u.ZP,{item:!0,xs:12,children:(0,q.jsx)(m.Z,{required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",value:w,onChange:G})}),(0,q.jsx)(u.ZP,{item:!0,xs:12,children:(0,q.jsx)(m.Z,{required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"new-password",value:P,onChange:G})}),(0,q.jsx)(u.ZP,{item:!0,xs:12,children:(0,q.jsx)(x.Z,{control:(0,q.jsx)(h.Z,{value:"allowExtraEmails",color:"primary"}),label:"I want to receive inspiration, marketing promotions and updates via email."})})]}),(0,q.jsx)(p.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:2,mb:2},children:"Sign Up"}),(0,q.jsx)(u.ZP,{container:!0,justifyContent:"flex-end",children:(0,q.jsx)(u.ZP,{item:!0,children:(0,q.jsx)(X,{to:"/login",children:"Already have an account? Sign in"})})})]})]})]})]})}var B=function(){return(0,q.jsx)(V,{})}}}]);
//# sourceMappingURL=782.660a6582.chunk.js.map