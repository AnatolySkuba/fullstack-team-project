"use strict";(self.webpackChunkfullstack_team_project=self.webpackChunkfullstack_team_project||[]).push([[614],{1614:function(e,n,t){t.d(n,{Z:function(){return ke}});var o=t(4942),r=t(3366),i=t(7462),a=t(2791),c=t(8182),l=t(4419),u=t(2065),s=t(9439),d=t(9853),p=t(6863),f=t(4938);var h=a.createContext();var v=t(8929),m=t(7933),b=t(8956).Z,Z=t(2763),g=t(3433),x=t(168),k=t(7326),y=t(4578),R=t(5545);function M(e,n){var t=Object.create(null);return e&&a.Children.map(e,(function(e){return e})).forEach((function(e){t[e.key]=function(e){return n&&(0,a.isValidElement)(e)?n(e):e}(e)})),t}function C(e,n,t){return null!=t[n]?t[n]:e.props[n]}function E(e,n,t){var o=M(e.children),r=function(e,n){function t(t){return t in n?n[t]:e[t]}e=e||{},n=n||{};var o,r=Object.create(null),i=[];for(var a in e)a in n?i.length&&(r[a]=i,i=[]):i.push(a);var c={};for(var l in n){if(r[l])for(o=0;o<r[l].length;o++){var u=r[l][o];c[r[l][o]]=t(u)}c[l]=t(l)}for(o=0;o<i.length;o++)c[i[o]]=t(i[o]);return c}(n,o);return Object.keys(r).forEach((function(i){var c=r[i];if((0,a.isValidElement)(c)){var l=i in n,u=i in o,s=n[i],d=(0,a.isValidElement)(s)&&!s.props.in;!u||l&&!d?u||!l||d?u&&l&&(0,a.isValidElement)(s)&&(r[i]=(0,a.cloneElement)(c,{onExited:t.bind(null,c),in:s.props.in,exit:C(c,"exit",e),enter:C(c,"enter",e)})):r[i]=(0,a.cloneElement)(c,{in:!1}):r[i]=(0,a.cloneElement)(c,{onExited:t.bind(null,c),in:!0,exit:C(c,"exit",e),enter:C(c,"enter",e)})}})),r}var P=Object.values||function(e){return Object.keys(e).map((function(n){return e[n]}))},w=function(e){function n(n,t){var o,r=(o=e.call(this,n,t)||this).handleExited.bind((0,k.Z)(o));return o.state={contextValue:{isMounting:!0},handleExited:r,firstRender:!0},o}(0,y.Z)(n,e);var t=n.prototype;return t.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},t.componentWillUnmount=function(){this.mounted=!1},n.getDerivedStateFromProps=function(e,n){var t,o,r=n.children,i=n.handleExited;return{children:n.firstRender?(t=e,o=i,M(t.children,(function(e){return(0,a.cloneElement)(e,{onExited:o.bind(null,e),in:!0,appear:C(e,"appear",t),enter:C(e,"enter",t),exit:C(e,"exit",t)})}))):E(e,r,i),firstRender:!1}},t.handleExited=function(e,n){var t=M(this.props.children);e.key in t||(e.props.onExited&&e.props.onExited(n),this.mounted&&this.setState((function(n){var t=(0,i.Z)({},n.children);return delete t[e.key],{children:t}})))},t.render=function(){var e=this.props,n=e.component,t=e.childFactory,o=(0,r.Z)(e,["component","childFactory"]),i=this.state.contextValue,c=P(this.state.children).map(t);return delete o.appear,delete o.enter,delete o.exit,null===n?a.createElement(R.Z.Provider,{value:i},c):a.createElement(R.Z.Provider,{value:i},a.createElement(n,o,c))},n}(a.Component);w.propTypes={},w.defaultProps={component:"div",childFactory:function(e){return e}};var S=w,T=t(2554),F=t(184);var V=function(e){var n=e.className,t=e.classes,o=e.pulsate,r=void 0!==o&&o,i=e.rippleX,l=e.rippleY,u=e.rippleSize,d=e.in,p=e.onExited,f=e.timeout,h=a.useState(!1),v=(0,s.Z)(h,2),m=v[0],b=v[1],Z=(0,c.Z)(n,t.ripple,t.rippleVisible,r&&t.ripplePulsate),g={width:u,height:u,top:-u/2+l,left:-u/2+i},x=(0,c.Z)(t.child,m&&t.childLeaving,r&&t.childPulsate);return d||m||b(!0),a.useEffect((function(){if(!d&&null!=p){var e=setTimeout(p,f);return function(){clearTimeout(e)}}}),[p,d,f]),(0,F.jsx)("span",{className:Z,style:g,children:(0,F.jsx)("span",{className:x})})},B=t(5878);var j,z,I,N,L,D,O,H,X=(0,B.Z)("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),U=["center","classes","className"],Y=(0,T.F4)(L||(L=j||(j=(0,x.Z)(["\n  0% {\n    transform: scale(0);\n    opacity: 0.1;\n  }\n\n  100% {\n    transform: scale(1);\n    opacity: 0.3;\n  }\n"])))),q=(0,T.F4)(D||(D=z||(z=(0,x.Z)(["\n  0% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n  }\n"])))),K=(0,T.F4)(O||(O=I||(I=(0,x.Z)(["\n  0% {\n    transform: scale(1);\n  }\n\n  50% {\n    transform: scale(0.92);\n  }\n\n  100% {\n    transform: scale(1);\n  }\n"])))),A=(0,p.ZP)("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),W=(0,p.ZP)(V,{name:"MuiTouchRipple",slot:"Ripple"})(H||(H=N||(N=(0,x.Z)(["\n  opacity: 0;\n  position: absolute;\n\n  &."," {\n    opacity: 0.3;\n    transform: scale(1);\n    animation-name: ",";\n    animation-duration: ","ms;\n    animation-timing-function: ",";\n  }\n\n  &."," {\n    animation-duration: ","ms;\n  }\n\n  & ."," {\n    opacity: 1;\n    display: block;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    background-color: currentColor;\n  }\n\n  & ."," {\n    opacity: 0;\n    animation-name: ",";\n    animation-duration: ","ms;\n    animation-timing-function: ",";\n  }\n\n  & ."," {\n    position: absolute;\n    /* @noflip */\n    left: 0px;\n    top: 0;\n    animation-name: ",";\n    animation-duration: 2500ms;\n    animation-timing-function: ",";\n    animation-iteration-count: infinite;\n    animation-delay: 200ms;\n  }\n"]))),X.rippleVisible,Y,550,(function(e){return e.theme.transitions.easing.easeInOut}),X.ripplePulsate,(function(e){return e.theme.transitions.duration.shorter}),X.child,X.childLeaving,q,550,(function(e){return e.theme.transitions.easing.easeInOut}),X.childPulsate,K,(function(e){return e.theme.transitions.easing.easeInOut})),_=a.forwardRef((function(e,n){var t=(0,v.Z)({props:e,name:"MuiTouchRipple"}),o=t.center,l=void 0!==o&&o,u=t.classes,d=void 0===u?{}:u,p=t.className,f=(0,r.Z)(t,U),h=a.useState([]),m=(0,s.Z)(h,2),b=m[0],Z=m[1],x=a.useRef(0),k=a.useRef(null);a.useEffect((function(){k.current&&(k.current(),k.current=null)}),[b]);var y=a.useRef(!1),R=a.useRef(null),M=a.useRef(null),C=a.useRef(null);a.useEffect((function(){return function(){clearTimeout(R.current)}}),[]);var E=a.useCallback((function(e){var n=e.pulsate,t=e.rippleX,o=e.rippleY,r=e.rippleSize,i=e.cb;Z((function(e){return[].concat((0,g.Z)(e),[(0,F.jsx)(W,{classes:{ripple:(0,c.Z)(d.ripple,X.ripple),rippleVisible:(0,c.Z)(d.rippleVisible,X.rippleVisible),ripplePulsate:(0,c.Z)(d.ripplePulsate,X.ripplePulsate),child:(0,c.Z)(d.child,X.child),childLeaving:(0,c.Z)(d.childLeaving,X.childLeaving),childPulsate:(0,c.Z)(d.childPulsate,X.childPulsate)},timeout:550,pulsate:n,rippleX:t,rippleY:o,rippleSize:r},x.current)])})),x.current+=1,k.current=i}),[d]),P=a.useCallback((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2?arguments[2]:void 0,o=n.pulsate,r=void 0!==o&&o,i=n.center,a=void 0===i?l||n.pulsate:i,c=n.fakeElement,u=void 0!==c&&c;if("mousedown"===(null==e?void 0:e.type)&&y.current)y.current=!1;else{"touchstart"===(null==e?void 0:e.type)&&(y.current=!0);var s,d,p,f=u?null:C.current,h=f?f.getBoundingClientRect():{width:0,height:0,left:0,top:0};if(a||void 0===e||0===e.clientX&&0===e.clientY||!e.clientX&&!e.touches)s=Math.round(h.width/2),d=Math.round(h.height/2);else{var v=e.touches&&e.touches.length>0?e.touches[0]:e,m=v.clientX,b=v.clientY;s=Math.round(m-h.left),d=Math.round(b-h.top)}if(a)(p=Math.sqrt((2*Math.pow(h.width,2)+Math.pow(h.height,2))/3))%2===0&&(p+=1);else{var Z=2*Math.max(Math.abs((f?f.clientWidth:0)-s),s)+2,g=2*Math.max(Math.abs((f?f.clientHeight:0)-d),d)+2;p=Math.sqrt(Math.pow(Z,2)+Math.pow(g,2))}null!=e&&e.touches?null===M.current&&(M.current=function(){E({pulsate:r,rippleX:s,rippleY:d,rippleSize:p,cb:t})},R.current=setTimeout((function(){M.current&&(M.current(),M.current=null)}),80)):E({pulsate:r,rippleX:s,rippleY:d,rippleSize:p,cb:t})}}),[l,E]),w=a.useCallback((function(){P({},{pulsate:!0})}),[P]),T=a.useCallback((function(e,n){if(clearTimeout(R.current),"touchend"===(null==e?void 0:e.type)&&M.current)return M.current(),M.current=null,void(R.current=setTimeout((function(){T(e,n)})));M.current=null,Z((function(e){return e.length>0?e.slice(1):e})),k.current=n}),[]);return a.useImperativeHandle(n,(function(){return{pulsate:w,start:P,stop:T}}),[w,P,T]),(0,F.jsx)(A,(0,i.Z)({className:(0,c.Z)(X.root,d.root,p),ref:C},f,{children:(0,F.jsx)(S,{component:null,exit:!0,children:b})}))})),G=_,J=t(1217);function Q(e){return(0,J.Z)("MuiButtonBase",e)}var $,ee=(0,B.Z)("MuiButtonBase",["root","disabled","focusVisible"]),ne=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],te=(0,p.ZP)("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:function(e,n){return n.root}})(($={display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"}},(0,o.Z)($,"&.".concat(ee.disabled),{pointerEvents:"none",cursor:"default"}),(0,o.Z)($,"@media print",{colorAdjust:"exact"}),$)),oe=a.forwardRef((function(e,n){var t=(0,v.Z)({props:e,name:"MuiButtonBase"}),o=t.action,u=t.centerRipple,d=void 0!==u&&u,p=t.children,f=t.className,h=t.component,g=void 0===h?"button":h,x=t.disabled,k=void 0!==x&&x,y=t.disableRipple,R=void 0!==y&&y,M=t.disableTouchRipple,C=void 0!==M&&M,E=t.focusRipple,P=void 0!==E&&E,w=t.LinkComponent,S=void 0===w?"a":w,T=t.onBlur,V=t.onClick,B=t.onContextMenu,j=t.onDragLeave,z=t.onFocus,I=t.onFocusVisible,N=t.onKeyDown,L=t.onKeyUp,D=t.onMouseDown,O=t.onMouseLeave,H=t.onMouseUp,X=t.onTouchEnd,U=t.onTouchMove,Y=t.onTouchStart,q=t.tabIndex,K=void 0===q?0:q,A=t.TouchRippleProps,W=t.touchRippleRef,_=t.type,J=(0,r.Z)(t,ne),$=a.useRef(null),ee=a.useRef(null),oe=(0,m.Z)(ee,W),re=(0,Z.Z)(),ie=re.isFocusVisibleRef,ae=re.onFocus,ce=re.onBlur,le=re.ref,ue=a.useState(!1),se=(0,s.Z)(ue,2),de=se[0],pe=se[1];k&&de&&pe(!1),a.useImperativeHandle(o,(function(){return{focusVisible:function(){pe(!0),$.current.focus()}}}),[]);var fe=a.useState(!1),he=(0,s.Z)(fe,2),ve=he[0],me=he[1];a.useEffect((function(){me(!0)}),[]);var be=ve&&!R&&!k;function Ze(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:C;return b((function(o){return n&&n(o),!t&&ee.current&&ee.current[e](o),!0}))}a.useEffect((function(){de&&P&&!R&&ve&&ee.current.pulsate()}),[R,P,de,ve]);var ge=Ze("start",D),xe=Ze("stop",B),ke=Ze("stop",j),ye=Ze("stop",H),Re=Ze("stop",(function(e){de&&e.preventDefault(),O&&O(e)})),Me=Ze("start",Y),Ce=Ze("stop",X),Ee=Ze("stop",U),Pe=Ze("stop",(function(e){ce(e),!1===ie.current&&pe(!1),T&&T(e)}),!1),we=b((function(e){$.current||($.current=e.currentTarget),ae(e),!0===ie.current&&(pe(!0),I&&I(e)),z&&z(e)})),Se=function(){var e=$.current;return g&&"button"!==g&&!("A"===e.tagName&&e.href)},Te=a.useRef(!1),Fe=b((function(e){P&&!Te.current&&de&&ee.current&&" "===e.key&&(Te.current=!0,ee.current.stop(e,(function(){ee.current.start(e)}))),e.target===e.currentTarget&&Se()&&" "===e.key&&e.preventDefault(),N&&N(e),e.target===e.currentTarget&&Se()&&"Enter"===e.key&&!k&&(e.preventDefault(),V&&V(e))})),Ve=b((function(e){P&&" "===e.key&&ee.current&&de&&!e.defaultPrevented&&(Te.current=!1,ee.current.stop(e,(function(){ee.current.pulsate(e)}))),L&&L(e),V&&e.target===e.currentTarget&&Se()&&" "===e.key&&!e.defaultPrevented&&V(e)})),Be=g;"button"===Be&&(J.href||J.to)&&(Be=S);var je={};"button"===Be?(je.type=void 0===_?"button":_,je.disabled=k):(J.href||J.to||(je.role="button"),k&&(je["aria-disabled"]=k));var ze=(0,m.Z)(le,$),Ie=(0,m.Z)(n,ze);var Ne=(0,i.Z)({},t,{centerRipple:d,component:g,disabled:k,disableRipple:R,disableTouchRipple:C,focusRipple:P,tabIndex:K,focusVisible:de}),Le=function(e){var n=e.disabled,t=e.focusVisible,o=e.focusVisibleClassName,r=e.classes,i={root:["root",n&&"disabled",t&&"focusVisible"]},a=(0,l.Z)(i,Q,r);return t&&o&&(a.root+=" ".concat(o)),a}(Ne);return(0,F.jsxs)(te,(0,i.Z)({as:Be,className:(0,c.Z)(Le.root,f),ownerState:Ne,onBlur:Pe,onClick:V,onContextMenu:xe,onFocus:we,onKeyDown:Fe,onKeyUp:Ve,onMouseDown:ge,onMouseLeave:Re,onMouseUp:ye,onDragLeave:ke,onTouchEnd:Ce,onTouchMove:Ee,onTouchStart:Me,ref:Ie,tabIndex:k?-1:K,type:_},je,J,{children:[p,be?(0,F.jsx)(G,(0,i.Z)({ref:oe,center:d},A)):null]}))})),re=oe;function ie(e){return(0,J.Z)("PrivateSwitchBase",e)}(0,B.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var ae=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],ce=(0,p.ZP)(re)((function(e){var n=e.ownerState;return(0,i.Z)({padding:9,borderRadius:"50%"},"start"===n.edge&&{marginLeft:"small"===n.size?-3:-12},"end"===n.edge&&{marginRight:"small"===n.size?-3:-12})})),le=(0,p.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),ue=a.forwardRef((function(e,n){var t=e.autoFocus,o=e.checked,u=e.checkedIcon,p=e.className,v=e.defaultChecked,m=e.disabled,b=e.disableFocusRipple,Z=void 0!==b&&b,g=e.edge,x=void 0!==g&&g,k=e.icon,y=e.id,R=e.inputProps,M=e.inputRef,C=e.name,E=e.onBlur,P=e.onChange,w=e.onFocus,S=e.readOnly,T=e.required,V=e.tabIndex,B=e.type,j=e.value,z=(0,r.Z)(e,ae),I=(0,f.Z)({controlled:o,default:Boolean(v),name:"SwitchBase",state:"checked"}),N=(0,s.Z)(I,2),L=N[0],D=N[1],O=a.useContext(h),H=m;O&&"undefined"===typeof H&&(H=O.disabled);var X="checkbox"===B||"radio"===B,U=(0,i.Z)({},e,{checked:L,disabled:H,disableFocusRipple:Z,edge:x}),Y=function(e){var n=e.classes,t=e.checked,o=e.disabled,r=e.edge,i={root:["root",t&&"checked",o&&"disabled",r&&"edge".concat((0,d.Z)(r))],input:["input"]};return(0,l.Z)(i,ie,n)}(U);return(0,F.jsxs)(ce,(0,i.Z)({component:"span",className:(0,c.Z)(Y.root,p),centerRipple:!0,focusRipple:!Z,disabled:H,tabIndex:null,role:void 0,onFocus:function(e){w&&w(e),O&&O.onFocus&&O.onFocus(e)},onBlur:function(e){E&&E(e),O&&O.onBlur&&O.onBlur(e)},ownerState:U,ref:n},z,{children:[(0,F.jsx)(le,(0,i.Z)({autoFocus:t,checked:o,defaultChecked:v,className:Y.input,disabled:H,id:X&&y,name:C,onChange:function(e){if(!e.nativeEvent.defaultPrevented){var n=e.target.checked;D(n),P&&P(e,n)}},readOnly:S,ref:M,required:T,ownerState:U,tabIndex:V,type:B},"checkbox"===B&&void 0===j?{}:{value:j},R)),L?u:k]}))})),se=t(1245),de=(0,se.Z)((0,F.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),pe=(0,se.Z)((0,F.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),fe=(0,se.Z)((0,F.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function he(e){return(0,J.Z)("MuiCheckbox",e)}var ve=(0,B.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),me=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],be=(0,p.ZP)(ue,{shouldForwardProp:function(e){return(0,p.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,t.indeterminate&&n.indeterminate,"default"!==t.color&&n["color".concat((0,d.Z)(t.color))]]}})((function(e){var n,t=e.theme,r=e.ownerState;return(0,i.Z)({color:(t.vars||t).palette.text.secondary},!r.disableRipple&&{"&:hover":{backgroundColor:t.vars?"rgba(".concat("default"===r.color?t.vars.palette.action.activeChannel:t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,u.Fq)("default"===r.color?t.palette.action.active:t.palette[r.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==r.color&&(n={},(0,o.Z)(n,"&.".concat(ve.checked,", &.").concat(ve.indeterminate),{color:(t.vars||t).palette[r.color].main}),(0,o.Z)(n,"&.".concat(ve.disabled),{color:(t.vars||t).palette.action.disabled}),n))})),Ze=(0,F.jsx)(pe,{}),ge=(0,F.jsx)(de,{}),xe=(0,F.jsx)(fe,{}),ke=a.forwardRef((function(e,n){var t,o,u=(0,v.Z)({props:e,name:"MuiCheckbox"}),s=u.checkedIcon,p=void 0===s?Ze:s,f=u.color,h=void 0===f?"primary":f,m=u.icon,b=void 0===m?ge:m,Z=u.indeterminate,g=void 0!==Z&&Z,x=u.indeterminateIcon,k=void 0===x?xe:x,y=u.inputProps,R=u.size,M=void 0===R?"medium":R,C=u.className,E=(0,r.Z)(u,me),P=g?k:b,w=g?k:p,S=(0,i.Z)({},u,{color:h,indeterminate:g,size:M}),T=function(e){var n=e.classes,t=e.indeterminate,o=e.color,r={root:["root",t&&"indeterminate","color".concat((0,d.Z)(o))]},a=(0,l.Z)(r,he,n);return(0,i.Z)({},n,a)}(S);return(0,F.jsx)(be,(0,i.Z)({type:"checkbox",inputProps:(0,i.Z)({"data-indeterminate":g},y),icon:a.cloneElement(P,{fontSize:null!=(t=P.props.fontSize)?t:M}),checkedIcon:a.cloneElement(w,{fontSize:null!=(o=w.props.fontSize)?o:M}),ownerState:S,ref:n,className:(0,c.Z)(T.root,C)},E,{classes:T}))}))}}]);
//# sourceMappingURL=614.c9abbdbc.chunk.js.map