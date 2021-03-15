(this["webpackJsonpcontact-list"]=this["webpackJsonpcontact-list"]||[]).push([[0],{35:function(e,t,c){},38:function(e,t,c){},51:function(e,t,c){},58:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},68:function(e,t,c){"use strict";c.r(t);var n=c(0),A=c.n(n),a=c(18),i=c.n(a),s=(c(51),c(3)),o=c(6),r="SET_USER_NAME",j="SET_IS_LOGGED",l="SET_CONTACT",d="DELETE_CONTACT",b="UPDATE_CONTACT",u="CLEAR_CONTACTS",h=function(e){return{type:r,login:e}},O=function(e){return{type:j,bool:e}},g=(c(58),c(2)),m=function(){var e=Object(o.c)((function(e){return e.mainPage.userName})),t=Object(o.b)(),c=Object(s.f)();return Object(g.jsxs)("div",{className:"Login",children:[Object(g.jsx)("div",{children:Object(g.jsx)("span",{className:"Login__title",children:"SignIn"})}),Object(g.jsx)("div",{children:Object(g.jsx)("input",{onChange:function(e){var c=e.target.value;t(h(c))},className:"Login__input",placeholder:"What's your name?",value:e,autoFocus:!0})}),Object(g.jsx)("div",{children:Object(g.jsx)("button",{onClick:function(){e.length>=1&&(c.push("/"),t(O(!0)))},className:"Login__submit",children:"Submit"})})]})},x=c(23),C=c(20),I=(c(35),function(){var e=Object(n.useState)(""),t=Object(C.a)(e,2),c=t[0],A=t[1],a=Object(n.useState)(""),i=Object(C.a)(a,2),r=i[0],j=i[1],d=Object(o.c)((function(e){return e.mainPage.contactsData})),b=Object(o.b)(),u=Object(s.f)(),h=Math.ceil(1e3*Math.random());return Object(g.jsxs)("div",{className:"CreateContact",children:[Object(g.jsx)("div",{children:Object(g.jsx)("span",{className:"CreateContact__title",children:"New contact"})}),Object(g.jsx)("div",{children:Object(g.jsx)("input",{onChange:function(e){var t=e.target.value;A(t)},value:c||"",placeholder:"Contact Name",className:"CreateContact__nameInput",autoFocus:!0})}),Object(g.jsx)("div",{children:Object(g.jsx)("input",{onChange:function(e){var t=e.target.value;j(t)},value:r||"",type:"number",placeholder:"Contact Phone",className:"CreateContact__numberInput"})}),Object(g.jsxs)("div",{children:[Object(g.jsx)("button",{onClick:function(){var e={name:c,number:r,id:h,imageURL:"https://picsum.photos/200/300?random=".concat(d.length+1)};c.length&&r.length&&(b({type:l,contact:e}),u.push("/contactList"))},className:"CreateContact__save",children:"Save"}),Object(g.jsx)("button",{onClick:function(){u.push("/contactList")},className:"CreateContact__close",children:"Close"})]})]})}),E=c(10),f=function(){var e=Object(o.c)((function(e){return e.mainPage.contactsData})),t=Object(o.b)(),c=Object(n.useState)(""),A=Object(C.a)(c,2),a=A[0],i=A[1],r=Object(n.useState)(""),j=Object(C.a)(r,2),l=j[0],d=j[1],u=Object(s.f)(),h=Object(s.h)().id,O=e.find((function(e){return e.id===Number(h)}));Object(n.useEffect)((function(){i(O.name),d(O.number)}),[]);return Object(g.jsxs)("div",{className:"CreateContact",children:[Object(g.jsx)("div",{children:Object(g.jsx)("span",{className:"CreateContact__title",children:"Edit contact"})}),Object(g.jsx)("div",{children:Object(g.jsx)("input",{placeholder:"Contact Name",className:"CreateContact__nameInput",onChange:function(e){var t=e.target.value;i(t)},value:a||"",autoFocus:!0})}),Object(g.jsx)("div",{children:Object(g.jsx)("input",{placeholder:"Contact Phone",className:"CreateContact__numberInput",onChange:function(e){var t=e.target.value;d(t)},value:l||"",type:"number"})}),Object(g.jsxs)("div",{children:[Object(g.jsx)("button",{className:"CreateContact__save",onClick:function(){var e=Object(E.a)(Object(E.a)({},O),{},{name:a,number:l});t({type:b,edit:e}),u.push("/contactList")},children:"Save"}),Object(g.jsx)("button",{className:"CreateContact__close",onClick:function(){u.push("/contactList")},children:"Close"})]})]})},v=(c(63),function(e){var t=e.edit,c=e.children,n=e.id;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(s.c,{children:Object(g.jsx)(s.a,{path:"/",children:Object(g.jsx)(Q,{edit:t,children:c,id:n})})}),Object(g.jsx)(s.a,{path:"/:id/edit",children:Object(g.jsx)(B,{})}),Object(g.jsx)(s.a,{path:"/new",children:Object(g.jsx)(B,{})})]})}),Q=function(e){var t=e.edit,c=e.children,n=e.id;return Object(g.jsx)("div",{children:"edit"===t?Object(g.jsx)(x.b,{to:{pathname:"/".concat(n,"/edit")},children:c},n):Object(g.jsx)(x.b,{to:{pathname:"/new"},children:Object(g.jsx)("button",{className:"ButtonViev_button-newContact",children:Object(g.jsx)("p",{children:"New Contact"})})})})},B=function(){var e=Object(s.g)().pathname;return Object(g.jsx)("div",{className:"ModalWindow__modalBackground",children:"/new"===e?Object(g.jsx)(I,{}):Object(g.jsx)(f,{})})},D=function(e){var t=e.edit,c=e.children,n=e.id;return Object(g.jsx)(x.a,{children:Object(g.jsx)(v,{edit:t,children:c,id:n})})},w=(c(64),function(){var e=Object(o.c)((function(e){return e.mainPage.userName})),t=Object(o.b)(),c=Object(s.f)();return Object(g.jsxs)("div",{className:"Header",children:[Object(g.jsx)("div",{children:Object(g.jsxs)("span",{className:"Header__title",children:["Hello, ",e," "]})}),Object(g.jsx)("div",{children:Object(g.jsx)("span",{onClick:function(){localStorage.clear(),t(h("")),t(O(!1)),t({type:u,clear:""}),c.push("/login")},className:"Header__logout",children:"Logout"})})]})}),p=c(89),R=c(97),N=c(95),P=c(93),S=c(92),U=c(96),M=c(94),L=c(91),H=c.p+"static/media/delete-icon.5e81cde7.png",k=Object(p.a)({root:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",maxWidth:"300px",maxHeight:"400px",backgroundColor:"rgb(250, 250, 250)",margin:"2%"},media:{margin:"0.5em",height:"12em",width:"12em",borderRadius:"50%"},edit:{position:"relative"},editChildren:{position:"absolute",left:"3.7em",height:"1.8em",width:"1.8em",borderRadius:300},editIcon:{position:"inherit",height:"1.2em",width:"1.2em",fontSize:"1rem"},deleteChildren:{position:"absolute",right:"3.7em",height:"1.8em",width:"1.8em",borderRadius:300},deleteIcon:{position:"inherit",height:"1.2em",width:"1.2em",fontSize:"1rem"},buttonCall:{position:"relative",width:"18.7em",height:"3.4em",borderRadius:"5%",margin:" 0% 1.5% 0% 1.5%"},iconCall:{position:"absolute",top:"0em",right:"0em",width:"100%",height:"100%",borderRadius:"5%"}}),z=function(e){var t=k(),c=Object(o.b)();return Object(g.jsxs)(R.a,{className:t.root,children:[Object(g.jsxs)("div",{className:t.edit,children:[Object(g.jsx)(D,{edit:"edit",id:e.contact.id,children:Object(g.jsx)(L.a,{className:t.editChildren,children:Object(g.jsx)("img",{className:t.editIcon,alt:"edit",src:"data:image/png;base64,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"})})}),Object(g.jsx)(L.a,{className:t.deleteChildren,onClick:function(){var t;c((t=e.contact.id,{type:d,del:t}))},children:Object(g.jsx)("img",{className:t.deleteIcon,alt:"delete",src:H})})]}),Object(g.jsx)(S.a,{className:t.media,image:e.contact.imageURL,title:"User"}),Object(g.jsx)(P.a,{children:Object(g.jsx)(M.a,{gutterBottom:!0,variant:"h4",component:"h2",children:e.contact.name})}),Object(g.jsx)(N.a,{children:Object(g.jsx)(U.a,{size:"medium",color:"primary",className:t.buttonCall,children:Object(g.jsx)("a",{href:"tel:".concat(e.contact.number),children:Object(g.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhEAAABaCAYAAAAGngSUAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAR7SURBVHhe7d2/a15VHMDhG1sbm2KMFWuLqVVsoxBoFkGyRLCgQ4uTq3FQIYIdxEwaQWg2x7jZKXVrFrG6SBQdUlGQ2NEfmJJItBpti6YWK9Hz9rRJmjd5b7518d7nWXLOS/6AD+ece07btqmhpQIAYJNuyX8BADZFRAAAISICAAgREQBAiIgAAEJEBAAQIiIAgBARAQCEiAgAIEREAAAhIgIACBERAECIiAAAQkQEABAiIgCAEBEBAISICAAgREQAACEiAgAIEREAQIiIAABCRAQAECIiAIAQEQEAhIgIACBERAAAIW3bpoaW8hiomMFd/cWb+54uurZ25F/WNzY/WQzPTOQZQGtWIqDCRroPlwqI5OieQ8VA54E8A2hNRECF7Wu/K4/K6duxN48AWhMRUGFnLy/kUTl9O7rzCKA1EQEVduHvS3lUzkBnTx4BtCYioMKmf5/No3LS9kfZMxQAIgIq7Ks/5vKovIMd9+YRwMZEBFTYmcXNR4TDlUBZIgIq7MzibHH+ymKeleNwJVCWiIAKO3/l0r8h8UOelXPfJj8LBepLREDFvbswnUflnDj3WR4BbExEQMW988vpPGrt2Oyp4sTP5f8fqDcRARWXtjQ+vfhNnq0vBcTo3Pt5BtCaiIAaGD+38eqCgAAiRATUwHu/Ta/7lYaAAKJEBNRA2tIYm/84z5YJCOBmiAioibd+nFyzGnH/bT7nBOJEBNREWo0Ynfsgz6565u7+YqDzQJ4BbI6IgBoZm59ccxX28f3PenQLCBERUDOvfH8yj65KL3e+/eBgngGUt2XLc4+8kcdADZy9vNBYeXj09gfyL0Xx0PbdRVtbUeo+CYBrrERADY3OnVqzrTHSfaQY3NWfZwCttW2bGlrKY6BG0jbG5wdfXXMe4oXvxlteTrXS0T2PFwOdPY3xJxe+brwcmh792uzrocD/j4iAGjvY0V180fdani0bnjlZjM1/lGfre33vkWKk+3CerZZWOmb+XLgeFrZKoHqciYAa++mvi8XZy78WT+3sy79c9URXb8szEhsFRHLPrZ2NsxZP3tnb2CZx5gKqx5kIqLn0aufz347n2bJ0RuL4/sHGtseNWgVEMy/tPpRHQFWICGDdkEiXUX3Y+/KqC6kiAZF0bd2eR0BVOBMBXJfOSEw8PNR09SGFRrr1Mh2kjGo//WIeAVUgIoBVUkCk1YdmIXGzRARUi+0MYJV0GVXPlyPFsVmvewIbExFAU+lCqhQTKSoAmhERwLqurUqkQ5diAriRiABaSocqxQRwIxEBlLYyJlwcBfg6AwhLX3CkdzPSjZQr75Jo5trWCFAdIgL4z6SgSHdNPHZHT+Nhr33tOxuhkR7jGp6ZaKxkANUhIgCAEGciAIAQEQEAhIgIACBERAAAISICAAgREQBAiIgAAEJEBAAQIiIAgBARAQCEiAgAIEREAAAhIgIACBERAECIiAAAQkQEABAiIgCAEBEBAISICAAgREQAACEiAgAIEREAQIiIAABCRAQAECIiAIAQEQEABBTFPwbZE5Xb2WnxAAAAAElFTkSuQmCC",alt:"call",className:t.iconCall})})})})]})},T=c(41),F=(c(38),function(){var e={data:Object(o.c)((function(e){return e.mainPage.contactsData})),headers:[{label:"Name",key:"name"},{label:"Number",key:"number"}],filename:"Contacts.csv"};return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(T.CSVLink,Object(E.a)(Object(E.a)({className:"DownloadCSV__link"},e),{},{children:Object(g.jsx)("span",{children:"Download CSV"})}))})}),Y=function(){var e=Object(o.c)((function(e){return e})),t=Object(o.c)((function(e){return e.mainPage.contactsData}));return Object(n.useEffect)((function(){localStorage.setItem("state",JSON.stringify(e))})),Object(g.jsxs)("div",{className:"MainPage",children:[Object(g.jsx)(w,{}),Object(g.jsxs)("div",{className:"MainPage__buttonsBlock",children:[Object(g.jsx)(D,{edit:"new"}),Object(g.jsx)(F,{})]}),Object(g.jsx)("div",{className:"MainPage__contactsBlock",children:t.length<=0?Object(g.jsx)("div",{className:"MainPage__noContactsMessage",children:"No contacts yet"}):t.sort((function(e,t){return 2*(e.name>t.name)-1})).map((function(e){return Object(g.jsx)("div",{className:"MainPage__buttonsBlock-contactCard",children:Object(g.jsx)(z,{contact:e})},e.id)}))})]})},X=function(){var e=Object(o.c)((function(e){return e.mainPage.isLogged})),t=Object(s.f)();return e?Object(g.jsxs)("div",{children:[Object(g.jsx)(s.a,{exact:!0,path:"/",component:Y}),Object(g.jsx)(s.a,{path:"/new",component:I}),Object(g.jsx)(s.a,{path:"/:id/edit",component:f}),Object(g.jsx)(s.a,{path:"/login",component:m})]}):(t.push("/login"),Object(g.jsx)("div",{children:Object(g.jsx)(s.a,{path:"/login",component:m})}))},K=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,99)).then((function(t){var c=t.getCLS,n=t.getFID,A=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),A(e),a(e),i(e)}))},y=c(25),J=c(19),W={userName:"",isLogged:!1,contactsData:[]},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r:return Object(E.a)(Object(E.a)({},e),{},{userName:t.login});case j:return Object(E.a)(Object(E.a)({},e),{},{isLogged:t.bool});case l:return Object(E.a)(Object(E.a)({},e),{},{contactsData:[].concat(Object(J.a)(e.contactsData),[t.contact])});case d:return Object(E.a)(Object(E.a)({},e),{},{contactsData:e.contactsData.filter((function(e){return e.id!==t.del}))});case b:return Object(E.a)(Object(E.a)({},e),{},{contactsData:e.contactsData.map((function(e){return e.id===t.edit.id?t.edit:e}))});case u:return Object(E.a)(Object(E.a)({},e),{},{contactsData:t.clear});default:return e}},_=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){}}(),G=Object(y.b)({mainPage:V}),Z=Object(y.c)(G,_,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());window.store=Z;var q=Z;i.a.render(Object(g.jsx)(o.a,{store:q,children:Object(g.jsx)(x.a,{basename:"/contactList",children:Object(g.jsx)(A.a.StrictMode,{children:Object(g.jsx)(X,{})})})}),document.getElementById("root")),K()}},[[68,1,2]]]);
//# sourceMappingURL=main.b047a345.chunk.js.map