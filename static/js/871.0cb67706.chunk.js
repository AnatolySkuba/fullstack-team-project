"use strict";(self.webpackChunkbr_frontend=self.webpackChunkbr_frontend||[]).push([[871],{6871:function(e,r,n){n.r(r),n.d(r,{default:function(){return Q}});var t,a=n(5861),i=n(1413),o=n(9439),s=n(5987),l=n(4687),c=n.n(l),m=n(5048),u=n(2791),d=n(1087),p=n(5705),g=n(1724),h=n(2430),_=n(3168),f="LoginTimer_changePage__s-hur",x=n(184),v=function(){var e=(0,u.useState)(!1),r=(0,o.Z)(e,2),n=r[0],t=r[1],a=(0,u.useState)(1),i=(0,o.Z)(a,2),s=i[0],l=i[1],c=(0,u.useState)(30),m=(0,o.Z)(c,2),d=m[0],p=m[1],g=(0,_.$)().t;(0,u.useEffect)((function(){if(n){var e=setInterval((function(){return p(d-1)}),1e3);return 0===d&&(l(s-1),p(60)),0===s&&0===d&&t(!1),function(){return clearInterval(e)}}}),[s,d,n]);return(0,x.jsx)(x.Fragment,{children:n?(0,x.jsxs)("span",{children:["\xa0",s<10?"0"+s:s,":",d<10?"0"+d:d]}):(0,x.jsx)("span",{className:f,onClick:function(){t(!0),l(1),p(30)},children:g("LoginForm.newPassword")})})},j=n(7193),L=n(2986),w=n(7609),b=n(5985),F={container:"LoginForm_container__YDFcb",googleLink:"LoginForm_googleLink__avqDA",form:"LoginForm_form__gPEx5",relative:"LoginForm_relative__irvv0",label:"LoginForm_label__F7sLE",input:"LoginForm_input__aQRtt",errInput:"LoginForm_errInput__3QWea LoginForm_input__aQRtt",btn:"LoginForm_btn__B2KLK",signupLink:"LoginForm_signupLink__KglMR",text:"LoginForm_text__um7cL",errEmail:"LoginForm_errEmail__5XuQW",errPassword:"LoginForm_errPassword__AB54N",errText:"LoginForm_errText__3YH5V",icon:"LoginForm_icon__TSGuZ"},N=["name","label","htmlFor","error"],C={email:"",password:""},k=function(e){var r=e.name,n=e.label,t=e.htmlFor,a=e.error,l=(0,s.Z)(e,N),c=(0,p.U$)(r),m=(0,o.Z)(c,2),u=m[0],d=m[1];return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("label",{className:F.label,htmlFor:t,children:n}),(0,x.jsx)("input",(0,i.Z)((0,i.Z)({className:"".concat(d.error?F.errInput:F.input)},u),l)),(0,x.jsx)(p.Bc,{name:r,render:function(e){return(0,x.jsx)("div",{className:F[a],children:(0,x.jsx)("p",{className:F.errText,children:e})})}})]})},y=function(){var e=(0,u.useState)(!1),r=(0,o.Z)(e,2),n=r[0],t=r[1],s=(0,h.OQ)(),l=(0,o.Z)(s,1)[0],f=(0,h.Kb)(),N=(0,o.Z)(f,1)[0],y=(0,m.v9)(j.ts),Z=(0,_.$)().t,E=(0,d.lr)(),S=(0,o.Z)(E,1)[0],O=S.get("email"),P=S.get("name"),I=S.get("accessToken"),R=(0,m.I0)(),q=g.Ry().shape({email:g.Z_().matches(/^[^ ]*$/,Z("validation.incorrectEmail")).matches(/^[^\u0430-\u044f\u0410-\u042f\u0456\u0406\u0457\u0407\u0454\u0404]*$/,Z("validation.incorrectEmail")).matches(/^[^-]\S*.@\S*.\.\S*[^-\s]$/,Z("validation.incorrectEmail")).min(10,Z("validation.emailMin")).max(63,Z("validation.emailMax")).required(Z("validation.emailRequired")),password:g.Z_().required(Z("validation.passwordRequired")).matches(/^[^\u0430-\u044f\u0410-\u042f\u0456\u0406\u0457\u0407\u0454\u0404]*$/,Z("validation.incorrectPassword")).matches(/^[^.-]\S*$/,Z("validation.incorrectPassword")).min(5,Z("validation.passwordMin")).max(30,Z("validation.passwordMax"))}),$=function(){var e=(0,a.Z)(c().mark((function e(r){var n,t,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.email,t=r.password,e.prev=1,e.next=4,l({email:n,password:t}).unwrap();case 4:a=e.sent,R((0,j.Dj)((0,i.Z)({},a.data))),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),b.Am.error(e.t0.data.message),R((0,j.Dj)({user:{email:n}}));case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(r){return e.apply(this,arguments)}}();return(0,u.useEffect)((function(){O&&R((0,j.Dj)({user:{name:P,email:O,token:I}}))}),[I,R,O,l,P]),(0,x.jsxs)("div",{className:F.container,children:[(0,x.jsxs)("a",{className:F.googleLink,href:"https://fullstack-team-project-back.herokuapp.com/auth/google",children:[(0,x.jsx)(L.r,{style:{marginRight:"15px"}}),"Google"]}),(0,x.jsx)(p.J9,{onSubmit:$,initialValues:C,validationSchema:q,children:function(){return(0,x.jsxs)(p.l0,{className:F.form,children:[(0,x.jsx)(k,{name:"email",label:Z("RegisterForm.emailLabel"),htmlFor:"email",error:"errEmail",type:"text",placeholder:"your@email.com"}),(0,x.jsxs)("div",{className:F.relative,children:[(0,x.jsx)(k,{name:"password",label:Z("RegisterForm.passwordLabel"),htmlFor:"password",error:"errPassword",type:n?"text":"password",placeholder:"...",maxLength:30}),(0,x.jsx)("svg",{className:F.icon,onClick:function(){return t(!n)},children:(0,x.jsx)("use",{href:w.Z+(n?"#icon-noeye":"#icon-eye")})})]}),(0,x.jsx)("button",{className:F.btn,type:"submit",children:Z("LoginForm.button")})]})}}),y?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("p",{className:F.text,children:[(0,x.jsx)("span",{onClick:function(){return N({email:y})},className:F.signupLink,children:(0,x.jsx)(v,{})}),Z("LoginForm.for"),y]}),(0,x.jsxs)("p",{className:F.text,children:[Z("LoginForm.orNew"),(0,x.jsx)(d.rU,{to:"/register",className:F.signupLink,children:Z("LoginForm.registration")})]})]}):(0,x.jsx)(d.rU,{to:"/register",className:F.signupLink,children:Z("RegisterForm.button")})]})},Z=["title","titleId"];function E(){return E=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},E.apply(this,arguments)}function S(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function O(e,r){var n=e.title,a=e.titleId,i=S(e,Z);return u.createElement("svg",E({width:23,height:17,viewBox:"0 0 23 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:r,"aria-labelledby":a},i),n?u.createElement("title",{id:a},n):null,t||(t=u.createElement("path",{d:"M19.8119 0.454997L20.3429 1.281C16.6849 3.68033 14.8559 6.07967 14.8559 8.479C14.8559 9.69833 15.3869 10.4063 16.4489 10.603L18.9269 8.302C19.7135 8.57733 20.4215 9.08867 21.0509 9.836C21.7195 10.544 22.0539 11.4683 22.0539 12.609C22.0539 13.7497 21.6015 14.733 20.6969 15.559C19.7922 16.3457 18.5925 16.739 17.0979 16.739C15.6425 16.739 14.4232 16.2473 13.4399 15.264C12.4959 14.2413 12.0239 12.845 12.0239 11.075C12.0239 7.22033 14.6199 3.68033 19.8119 0.454997ZM8.71986 0.454997L9.25086 1.281C5.59286 3.68033 3.76386 6.07967 3.76386 8.479C3.76386 9.69833 4.29486 10.4063 5.35686 10.603L7.83486 8.302C8.62152 8.57733 9.32952 9.08867 9.95886 9.836C10.6275 10.544 10.9619 11.4683 10.9619 12.609C10.9619 13.7497 10.5095 14.733 9.60486 15.559C8.70019 16.3457 7.50052 16.739 6.00586 16.739C4.55052 16.739 3.33119 16.2473 2.34786 15.264C1.40386 14.2413 0.931856 12.845 0.931856 11.075C0.931856 7.22033 3.52786 3.68033 8.71986 0.454997Z",fill:"#FF6B08"})))}var P=u.forwardRef(O),I=(n.p,"LoginInfoQuote_container__cAiCt"),R="LoginInfoQuote_text__tipPS",q=function(){var e=(0,_.$)().t,r=(0,m.I0)(),n=(0,m.v9)(j.ht);return(0,u.useEffect)((function(){var e=n<10?n+1:1;r((0,j.NN)(e))}),[]),(0,x.jsxs)("div",{className:I,children:[(0,x.jsx)(P,{style:{marginBottom:"15px"}}),(0,x.jsx)("p",{className:R,children:e("quotes.quote".concat([n-1]))}),(0,x.jsx)("hr",{}),(0,x.jsx)("p",{className:R,children:e("quotes.author".concat([n-1]))})]})},$="LoginView_section__TOjXP",M="LoginView_wrapper__wtrEq",Q=function(){return(0,x.jsxs)("div",{className:M,children:[(0,x.jsx)("section",{className:$,children:(0,x.jsx)(y,{})}),(0,x.jsx)(q,{})]})}}}]);
//# sourceMappingURL=871.0cb67706.chunk.js.map