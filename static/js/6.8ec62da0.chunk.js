(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{160:function(e,t,a){"use strict";var n=a(2),r=a.n(n),o=a(39),l=a(20);t.a=function(e){return Object(o.connect)(function(){return{}},{push:l.push,replace:l.replace,go:l.go,goBack:l.goBack,goForward:l.goForward})(function(t){return r.a.createElement(e,t)})}},162:function(e,t,a){"use strict";var n=a(185),r=a(47),o=a(48),l=a(50),c=a(49),i=a(51),s=a(2),u=a.n(s),d=a(74),p=a.n(d),h=a(178),f=a.n(h),m=a(179),g=a.n(m),b=a(164),v=a.n(b),y=a(176),k=a.n(y),E=a(19),w=a(165),C=a.n(w),O=a(180),_=a.n(O),B=a(166),j=a.n(B),S=a(183),N=a.n(S),F=a(167),I=a.n(F),x=a(172),M=a.n(x),T=a(168),P=a.n(T),A=a(182),L=a.n(A),$=a(184),G=a.n($),R=a(177),z=a.n(R),H={root:{display:"flex"},appBar:{},menuButton:{marginLeft:-12,marginRight:20},content:{paddingTop:"4rem",width:"100%"},menuList:{width:"12rem"}},D=a(160),V={shouldShowMenu:!0,title:"Unicorn"};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=e.shouldShowMenu,a=e.title;return function(e){var s=function(s){function d(){var e,t;Object(r.a)(this,d);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(t=Object(l.a)(this,(e=Object(c.a)(d)).call.apply(e,[this].concat(n)))).state={open:!1},t._toggleDrawer=function(e){return function(){t.setState({open:e})}},t._renderMenuButton=function(){var e=t.props.classes;return u.a.createElement(v.a,{className:e.menuButton,color:"inherit","aria-label":"Menu",onClick:t._toggleDrawer(!0)},u.a.createElement(k.a,null))},t._renderBackButton=function(){var e=t.props,a=e.classes,n=e.goBack;return u.a.createElement(v.a,{className:a.menuButton,color:"inherit","aria-label":"Back",onClick:n},u.a.createElement(z.a,null))},t._handleItemClick=function(e){var a=t.props.push;a&&a(e)},t}return Object(i.a)(d,s),Object(o.a)(d,[{key:"render",value:function(){var r=this,o=this.props,l=o.classes,c=Object(n.a)(o,["classes"]),i=this.state.open;return u.a.createElement("div",{className:l.root},u.a.createElement(f.a,{className:l.appBar},u.a.createElement(g.a,null,t?this._renderMenuButton():this._renderBackButton(),u.a.createElement(C.a,{variant:"title",color:"inherit"},a))),u.a.createElement(_.a,{open:i,onClose:this._toggleDrawer(!1),onOpen:this._toggleDrawer(!0)},u.a.createElement("div",{className:l.menuList},u.a.createElement(j.a,null,u.a.createElement(I.a,{onClick:function(){return r._handleItemClick("/election/add/elector")},button:!0},u.a.createElement(M.a,null,u.a.createElement(L.a,null)),u.a.createElement(P.a,{primary:"Add Elector"}))),u.a.createElement(N.a,null),u.a.createElement(j.a,null,u.a.createElement(I.a,{onClick:function(){return r._handleItemClick("/settings/toggles")},button:!0},u.a.createElement(M.a,null,u.a.createElement(G.a,null)),u.a.createElement(P.a,{primary:"Settings"}))))),u.a.createElement("div",{className:l.content},u.a.createElement(e,c)))}}]),d}(u.a.Component);return p.a.flowRight(Object(E.withStyles)(H),D.a)(s)}}},189:function(e,t,a){"use strict";a.d(t,"b",function(){return d}),a.d(t,"a",function(){return p});var n=a(173),r=a(45),o=a(175),l=a.n(o),c=a(74),i=a.n(c),s=r.a.SETTINGS_TOGGLE_TOGGLES,u=r.a.SETTINGS_FETCH_TOGGLES,d=function(e){return function(t,a){var r=i.a.get(a(),"app.settings.togglesPage.toggles"),o=Object(n.a)({},r);i.a.forEach(e,function(e){return e&&(o[e]=!o[e])}),l.a.setItem("toggles",o).then(function(e){return t({type:s,toggles:e})})}},p=function(){return function(e){return l.a.getItem("toggles").then(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e({type:u,toggles:t}),t})}}},191:function(e,t,a){"use strict";var n=a(6);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=n(a(192))},192:function(e,t,a){"use strict";var n=a(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=n(a(11)),o=n(a(12)),l=n(a(2)),c=(n(a(0)),n(a(73))),i=n(a(46)),s={root:{position:"absolute",right:4,top:"50%",transform:"translateY(-50%)"}};function u(e){var t=e.children,a=e.classes,n=e.className,i=(0,o.default)(e,["children","classes","className"]);return l.default.createElement("div",(0,r.default)({className:(0,c.default)(a.root,n)},i),t)}t.styles=s,u.propTypes={},u.muiName="ListItemSecondaryAction";var d=(0,i.default)(s,{name:"MuiListItemSecondaryAction"})(u);t.default=d},269:function(e,t,a){"use strict";var n=a(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(2)),o=(0,n(a(161)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("defs",null,r.default.createElement("path",{id:"a",d:"M0 0h24v24H0V0z"})),r.default.createElement("defs",null,r.default.createElement("path",{id:"c",d:"M0 0h24v24H0V0z"})),r.default.createElement("path",{d:"M6 22h12l-6-6zM21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v-2H3V5h18v12h-4v2h4c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"})),"Airplay");t.default=o},270:function(e,t,a){"use strict";var n=a(6);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=n(a(271))},271:function(e,t,a){"use strict";var n=a(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=n(a(11)),o=n(a(12)),l=n(a(2)),c=(n(a(0)),n(a(73))),i=n(a(46)),s=a(75),u=n(a(272)),d=function(e){return{root:{display:"inline-flex",width:62,position:"relative",flexShrink:0,verticalAlign:"middle"},icon:{boxShadow:e.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"},iconChecked:{boxShadow:e.shadows[2]},switchBase:{zIndex:1,padding:0,height:48,width:48,color:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[400],transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},checked:{transform:"translateX(14px)","& + $bar":{opacity:.5}},colorPrimary:{"&$checked":{color:e.palette.primary.main,"& + $bar":{backgroundColor:e.palette.primary.main}}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"& + $bar":{backgroundColor:e.palette.secondary.main}}},disabled:{"& + $bar":{opacity:"light"===e.palette.type?.12:.1},"& $icon":{boxShadow:e.shadows[1]},"&$switchBase":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800],"& + $bar":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}}},bar:{borderRadius:7,display:"block",position:"absolute",width:34,height:14,top:"50%",left:"50%",marginTop:-7,marginLeft:-17,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white,opacity:"light"===e.palette.type?.38:.3}}};function p(e){var t=e.classes,a=e.className,n=e.color,i=(0,o.default)(e,["classes","className","color"]);return l.default.createElement("span",{className:(0,c.default)(t.root,a)},l.default.createElement(u.default,(0,r.default)({type:"checkbox",icon:l.default.createElement("span",{className:t.icon}),classes:{root:(0,c.default)(t.switchBase,t["color".concat((0,s.capitalize)(n))]),checked:t.checked,disabled:t.disabled},checkedIcon:l.default.createElement("span",{className:(0,c.default)(t.icon,t.iconChecked)})},i)),l.default.createElement("span",{className:t.bar}))}t.styles=d,p.propTypes={},p.defaultProps={color:"secondary"};var h=(0,i.default)(d,{name:"MuiSwitch"})(p);t.default=h},272:function(e,t,a){"use strict";var n=a(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=n(a(11)),o=n(a(18)),l=n(a(12)),c=n(a(34)),i=n(a(35)),s=n(a(36)),u=n(a(37)),d=n(a(38)),p=n(a(2)),h=n(a(0)),f=n(a(73)),m=n(a(46)),g=n(a(164)),b={root:{display:"inline-flex",alignItems:"center",transition:"none","&:hover":{backgroundColor:"transparent"}},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0}};t.styles=b;var v=function(e){function t(e){var a;return(0,c.default)(this,t),(a=(0,s.default)(this,(0,u.default)(t).call(this))).handleFocus=function(e){a.props.onFocus&&a.props.onFocus(e);var t=a.context.muiFormControl;t&&t.onFocus&&t.onFocus(e)},a.handleBlur=function(e){a.props.onBlur&&a.props.onBlur(e);var t=a.context.muiFormControl;t&&t.onBlur&&t.onBlur(e)},a.handleInputChange=function(e){var t=e.target.checked;a.isControlled||a.setState({checked:t}),a.props.onChange&&a.props.onChange(e,t)},a.isControlled=null!=e.checked,a.state={},a.isControlled||(a.state.checked=void 0!==e.defaultChecked&&e.defaultChecked),a}return(0,d.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e,t=this.props,a=t.autoFocus,n=t.checked,c=t.checkedIcon,i=t.classes,s=t.className,u=t.disabled,d=t.icon,h=t.id,m=t.inputProps,b=t.inputRef,v=t.name,y=(t.onBlur,t.onChange,t.onFocus,t.readOnly),k=t.required,E=t.tabIndex,w=t.type,C=t.value,O=(0,l.default)(t,["autoFocus","checked","checkedIcon","classes","className","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),_=this.context.muiFormControl,B=u;_&&"undefined"===typeof B&&(B=_.disabled);var j=this.isControlled?n:this.state.checked,S="checkbox"===w||"radio"===w;return p.default.createElement(g.default,(0,r.default)({component:"span",className:(0,f.default)(i.root,(e={},(0,o.default)(e,i.checked,j),(0,o.default)(e,i.disabled,B),e),s),disabled:B,tabIndex:null,role:void 0,onFocus:this.handleFocus,onBlur:this.handleBlur},O),j?c:d,p.default.createElement("input",(0,r.default)({autoFocus:a,checked:j,className:i.input,disabled:B,id:S&&h,name:v,onChange:this.handleInputChange,readOnly:y,ref:b,required:k,tabIndex:E,type:w,value:C},m)))}}]),t}(p.default.Component);v.propTypes={},v.contextTypes={muiFormControl:h.default.object};var y=(0,m.default)(b,{name:"MuiSwitchBase"})(v);t.default=y},289:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),o=a(285),l=a(286),c=a(47),i=a(48),s=a(50),u=a(49),d=a(51),p=a(39),h=a(74),f=a.n(h),m=a(19),g=a(166),b=a.n(g),v=a(167),y=a.n(v),k=a(172),E=a.n(k),w=a(191),C=a.n(w),O=a(168),_=a.n(O),B=a(270),j=a.n(B),S=a(269),N=a.n(S),F=a(189),I=a(162),x=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r))))._handleSwitchToggle=function(e){var t=a.props.toggleToggles;t&&t([e])},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.toggles;t.toggleToggles;return r.a.createElement("div",{className:a.root},r.a.createElement(b.a,null,r.a.createElement(y.a,null,r.a.createElement(E.a,null,r.a.createElement(N.a,null)),r.a.createElement(_.a,{primary:"\u9996\u5c4f\u52a8\u753b"}),r.a.createElement(C.a,null,r.a.createElement(j.a,{onChange:function(){return e._handleSwitchToggle("landingAnimation")},checked:n.landingAnimation})))))}}]),t}(n.Component),M={toggleToggles:F.b},T=f.a.flowRight(Object(I.a)({shouldShowMenu:!1,title:"Settings"}),Object(m.withStyles)(function(e){return{root:{width:"100%",backgroundColor:e.palette.background.paper}}}),Object(p.connect)(function(e){return{toggles:f.a.get(e,"app.settings.togglesPage.toggles")}},M))(x);t.default=function(e){var t=e.match;return r.a.createElement(o.a,null,r.a.createElement(l.a,{path:"".concat(t.url,"/toggles"),component:T}))}}}]);
//# sourceMappingURL=6.8ec62da0.chunk.js.map