(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{160:function(e,t,n){"use strict";var a=n(2),r=n.n(a),c=n(39),o=n(20);t.a=function(e){return Object(c.connect)(function(){return{}},{push:o.push,replace:o.replace,go:o.go,goBack:o.goBack,goForward:o.goForward})(function(t){return r.a.createElement(e,t)})}},162:function(e,t,n){"use strict";var a=n(185),r=n(47),c=n(48),o=n(50),l=n(49),u=n(51),i=n(2),s=n.n(i),m=n(74),f=n.n(m),h=n(178),p=n.n(h),d=n(179),E=n.n(d),g=n(164),v=n.n(g),b=n(176),w=n.n(b),O=n(19),C=n(165),y=n.n(C),j=n(180),_=n.n(j),k=n(166),B=n.n(k),S=n(183),N=n.n(S),I=n(167),T=n.n(I),L=n(172),A=n.n(L),D=n(168),M=n.n(D),R=n(182),F=n.n(R),U=n(184),x=n.n(U),J=n(177),z=n.n(J),H={root:{display:"flex"},appBar:{},menuButton:{marginLeft:-12,marginRight:20},content:{paddingTop:"4rem",width:"100%"},menuList:{width:"12rem"}},P=n(160),q={shouldShowMenu:!0,title:"Unicorn"};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=e.shouldShowMenu,n=e.title;return function(e){var i=function(i){function m(){var e,t;Object(r.a)(this,m);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(l.a)(m)).call.apply(e,[this].concat(a)))).state={open:!1},t._toggleDrawer=function(e){return function(){t.setState({open:e})}},t._renderMenuButton=function(){var e=t.props.classes;return s.a.createElement(v.a,{className:e.menuButton,color:"inherit","aria-label":"Menu",onClick:t._toggleDrawer(!0)},s.a.createElement(w.a,null))},t._renderBackButton=function(){var e=t.props,n=e.classes,a=e.goBack;return s.a.createElement(v.a,{className:n.menuButton,color:"inherit","aria-label":"Back",onClick:a},s.a.createElement(z.a,null))},t._handleItemClick=function(e){var n=t.props.push;n&&n(e)},t}return Object(u.a)(m,i),Object(c.a)(m,[{key:"render",value:function(){var r=this,c=this.props,o=c.classes,l=Object(a.a)(c,["classes"]),u=this.state.open;return s.a.createElement("div",{className:o.root},s.a.createElement(p.a,{className:o.appBar},s.a.createElement(E.a,null,t?this._renderMenuButton():this._renderBackButton(),s.a.createElement(y.a,{variant:"title",color:"inherit"},n))),s.a.createElement(_.a,{open:u,onClose:this._toggleDrawer(!1),onOpen:this._toggleDrawer(!0)},s.a.createElement("div",{className:o.menuList},s.a.createElement(B.a,null,s.a.createElement(T.a,{onClick:function(){return r._handleItemClick("/election/add/elector")},button:!0},s.a.createElement(A.a,null,s.a.createElement(F.a,null)),s.a.createElement(M.a,{primary:"Add Elector"}))),s.a.createElement(N.a,null),s.a.createElement(B.a,null,s.a.createElement(T.a,{onClick:function(){return r._handleItemClick("/settings/toggles")},button:!0},s.a.createElement(A.a,null,s.a.createElement(x.a,null)),s.a.createElement(M.a,{primary:"Settings"}))))),s.a.createElement("div",{className:o.content},s.a.createElement(e,l)))}}]),m}(s.a.Component);return f.a.flowRight(Object(O.withStyles)(H),P.a)(i)}}},193:function(e,t,n){"use strict";n.d(t,"c",function(){return h}),n.d(t,"d",function(){return p}),n.d(t,"a",function(){return d}),n.d(t,"b",function(){return E});var a=n(173),r=n(74),c=n.n(r),o=n(20),l=n(175),u=n.n(l),i=n(28),s=i.a.ELECTION_START_ELECT,m=i.a.ELECTION_ADD_ELECTOR,f=i.a.ELECTION_FETCH_ELECTORS,h=function(){return function(e){u.a.getItem("electors").then(function(t){var n=c.a.chain(t).sort(function(e){return e.name}).toArray().value();e({type:f,response:{electors:n}})}).catch(function(){})}},p=function(e){var t=c.a.chain(e).map(function(e){return Object(a.a)({},e,{value:(c.a.random(0,10)+e.weight)%10})}).sortBy(function(e){return e.value}).first().value();return{type:s,result:t}},d=function(e){return function(t){u.a.getItem("electors").then(function(t){return!t&&(t={}),t[c.a.toUpper(e)]={name:e,weight:c.a.random(0,3)},u.a.setItem("electors",t)}).then(function(e){t({type:m,electors:e}),t(Object(o.goBack)())}).catch(function(){})}},E=function(e){return function(t){u.a.getItem("electors").then(function(t){return delete t[c.a.toUpper(e.name)],u.a.setItem("electors",t)}).then(function(){t(h())}).catch(function(){})}}},283:function(e,t,n){"use strict";n.r(t);var a=n(47),r=n(48),c=n(50),o=n(49),l=n(51),u=n(74),i=n.n(u),s=n(2),m=n.n(s),f=n(39),h=n(275),p=n.n(h),d=n(169),E=n.n(d),g=n(19),v=n(193),b=n(162),w=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,l=new Array(r),u=0;u<r;u++)l[u]=arguments[u];return(n=Object(c.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(l)))).state={elector:""},n._handleSubmit=function(e){e&&e.stopPropagation(),e&&e.preventDefault();var t=n.props.addElector,a=n.state.elector;n.setState({elector:""}),t&&t(a)},n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return m.a.createElement("div",{className:t.root},m.a.createElement("form",{className:t.formContainer,onSubmit:this._handleSubmit},m.a.createElement(p.a,{value:this.state.elector,placeholder:"Name",onChange:function(t){e.setState({elector:t.target.value})}}),m.a.createElement(E.a,{variant:"contained",size:"large",color:"primary",type:"submit"},"Submit")))}}]),t}(s.Component),O={addElector:v.a},C=i.a.flowRight(Object(b.a)({shouldShowMenu:!1,title:"AddElector"}),Object(g.withStyles)({root:{},formContainer:{display:"flex",justifyContent:"space-around"}}),Object(f.connect)(function(e){return{}},O));t.default=C(w)}}]);
//# sourceMappingURL=9.1eb1f280.chunk.js.map