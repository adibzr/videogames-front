(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{81:function(e,A,t){},86:function(e,A,t){"use strict";t.r(A);var a=t(1),n=t(24),c=t.n(n),r=t(5),i=t(10),s=t.p+"static/media/zed-video.751db469.mp4",o=t(0);function l(){return Object(o.jsxs)("div",{className:"landing",children:[Object(o.jsx)("h1",{children:" Proyect by Adib Raed "}),Object(o.jsx)(i.b,{to:"/home",children:Object(o.jsx)("button",{children:"Start"})}),Object(o.jsx)("video",{className:"video-bg",autoPlay:!0,muted:!0,loop:!0,children:Object(o.jsx)("source",{src:s,type:"video/mp4"})})]})}var d=t(13),u=t(4),b=t(7),j=t(15),g=t(14),h=t.n(g),m="GET_ALL_VIDEOGAME",O="GET_ALL_GENRES",p="FILTER_BY_GENRE",f="FILTER_BY_CREATION",E="ORDER_BY",v="ORDER_ASC_DEC",x="GET_DETAIL",C="POST_GAME",I="CLEAR_DETAILS",Q="SEARCH_GAME",D="GAME_RESET",w="PAGE_NUMBER",B="ACTIVE_PAGE",y="MODIFY_STATE",N=function(){return function(){var e=Object(j.a)(Object(b.a)().mark((function e(A){var t;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h()("/videogames");case 2:return t=e.sent,e.abrupt("return",A({type:m,payload:t.data}));case 4:case"end":return e.stop()}}),e)})));return function(A){return e.apply(this,arguments)}}()},H=function(){return{type:D}},M=function(e){return function(){var A=Object(j.a)(Object(b.a)().mark((function A(t){var a;return Object(b.a)().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,h()("/videogames?name=".concat(e));case 3:return a=A.sent,A.abrupt("return",t({type:Q,payload:a.data}));case 7:return A.prev=7,A.t0=A.catch(0),A.abrupt("return",t({type:Q,payload:A.t0.response}));case 10:case"end":return A.stop()}}),A,null,[[0,7]])})));return function(e){return A.apply(this,arguments)}}()},R=function(){return function(){var e=Object(j.a)(Object(b.a)().mark((function e(A){var t;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h()("/genres");case 2:return t=e.sent,e.abrupt("return",A({type:O,payload:t.data}));case 4:case"end":return e.stop()}}),e)})));return function(A){return e.apply(this,arguments)}}()},Y=function(e){return{type:p,payload:e}},G=function(e){return function(){var A=Object(j.a)(Object(b.a)().mark((function A(t){var a;return Object(b.a)().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,h()("/videogames?createdApi=".concat(e));case 3:return a=A.sent,A.abrupt("return",t({type:f,payload:a.data}));case 7:return A.prev=7,A.t0=A.catch(0),A.abrupt("return",t({type:f,payload:A.t0.response}));case 10:case"end":return A.stop()}}),A,null,[[0,7]])})));return function(e){return A.apply(this,arguments)}}()},F=function(e){return{type:E,payload:e}},V=function(e){return{type:v,payload:e}},P=function(e){return function(){var A=Object(j.a)(Object(b.a)().mark((function A(t){var a;return Object(b.a)().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,h()("/videogames/".concat(e));case 2:return a=A.sent,A.abrupt("return",t({type:x,payload:a.data}));case 4:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}()},S=function(e){return function(){var A=Object(j.a)(Object(b.a)().mark((function A(t){var a;return Object(b.a)().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,h.a.post("/videogames",e);case 2:return a=A.sent,A.abrupt("return",t({type:C,payload:a}));case 4:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}()},k=function(){return{type:I}},z=function(e){return{type:B,payload:e}},T=function(e){return{type:w,payload:e}},L=function(e){return Object(j.a)(Object(b.a)().mark((function A(){return Object(b.a)().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,h.a.delete("/videogames?idVideogame=".concat(e));case 2:case"end":return A.stop()}}),A)})))},X=function(e,A){return Object(j.a)(Object(b.a)().mark((function t(){return Object(b.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,h.a.post("/videogames/".concat(e),A);case 3:case"end":return t.stop()}}),t)})))},U=function(e){return{type:y,payload:e}},J=t.p+"static/media/default_image.1620a242.jpg",W=t.p+"static/media/Error.04fd3d1b.gif";function q(e){var A=e.name,t=e.id,n=e.img,c=e.genres,r=e.createdInDb,s=Object(a.useState)(!1),l=Object(d.a)(s,2),b=l[0],j=l[1],g=Object(u.b)(),h=function(){j(!b)},m=b?{transform:"scale(1.1)"}:{},O=function(e,A){try{"delete"===A&&(e.preventDefault(),g(L(t)),g(N())),"modify"===A&&g(U(t))}catch(a){}};return Object(o.jsx)(i.b,{style:m,onMouseEnter:h,onMouseLeave:h,to:"/videogames/".concat(t),children:Object(o.jsxs)("div",{className:"card-container",children:[function(){if(r)return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i.b,{to:"/videgames/create",children:Object(o.jsx)("button",{className:"card-modify",onClick:function(e){return O(e,"modify")},children:"Modify"})}),Object(o.jsx)("button",{className:"card-delete",onClick:function(e){return O(e,"delete")},children:"Del"})]})}(),Object(o.jsx)("img",{src:n,alt:"Card"}),Object(o.jsx)("p",{className:"card-name",children:A}),Object(o.jsx)("p",{className:"card-genre",children:c})]})})}var Z=t.p+"static/media/load-loading.81df87c1.gif";function K(){return Object(o.jsx)("div",{className:"loading",children:Object(o.jsx)("img",{alt:"Loading",src:Z})})}var _="data:image/png;base64,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",$=t.p+"static/media/magnifying-glass.48320050.png";function ee(){var e=Object(a.useState)(""),A=Object(d.a)(e,2),t=A[0],n=A[1],c=Object(u.b)();return Object(o.jsxs)("div",{className:"search-bar",children:[Object(o.jsx)("input",{type:"text",placeholder:" Search",onChange:function(e){return(A=e).preventDefault(),void n((function(){return A.target.value}));var A}}),Object(o.jsx)("img",{src:$,alt:"search",onClick:function(e){e.preventDefault(),t.length&&(c(H()),c(M(t)),c(T(1)),n(""))}})]})}function Ae(){var e=Object(u.b)(),A=Object(a.useState)(""),t=Object(d.a)(A,2),n=t[0],c=t[1],r=Object(u.c)((function(e){return e.genre}));return Object(o.jsxs)("div",{className:"nav-bar",children:[Object(o.jsx)(ee,{}),Object(o.jsx)(i.b,{to:"/videgames/create",children:Object(o.jsx)("button",{className:"create-game",children:"Add Videogame"})}),Object(o.jsxs)("nav",{className:"select-container",children:[Object(o.jsxs)("div",{className:"custom-select",children:[Object(o.jsxs)("select",{defaultValue:"placeholder",onChange:function(A){return function(A){e(Y(A.target.value)),e(T(1)),e(z(1))}(A)},children:[Object(o.jsx)("option",{value:"placeholder",disabled:!0,hidden:!0,children:"Select Genre"}),null===r||void 0===r?void 0:r.map((function(e){return Object(o.jsx)("option",{value:e.name,children:e.name},e.id+"option")}))]}),Object(o.jsx)("span",{className:"custom-arrow"})]}),Object(o.jsxs)("div",{className:"custom-select",children:[Object(o.jsxs)("select",{defaultValue:"placeholder",onChange:function(A){return function(A){e(G(A.target.value)),e(T(1)),e(z(1))}(A)},children:[Object(o.jsx)("option",{value:"placeholder",disabled:!0,hidden:!0,children:"Existing/Created"}),Object(o.jsx)("option",{value:"created",children:"Created"}),Object(o.jsx)("option",{value:"fromApi",children:"Existing"})]}),Object(o.jsx)("span",{className:"custom-arrow"})]}),Object(o.jsxs)("div",{className:"custom-select",children:[Object(o.jsxs)("select",{defaultValue:"placeholder",onChange:function(A){return function(A){e(F(A.target.value)),e(T(1)),e(z(1))}(A)},children:[Object(o.jsx)("option",{value:"placeholder",disabled:!0,hidden:!0,children:"Order by"}),Object(o.jsx)("option",{value:"A-Z",children:"A-Z"}),Object(o.jsx)("option",{value:"rating",children:"Rating"})]}),Object(o.jsx)("span",{className:"custom-arrow"})]}),Object(o.jsx)("img",{src:_,alt:"up down arrow",className:"custom-select asc-des-img ".concat(n),onClick:function(){return e(V()),c("rotate-up"===n?"rotate-down":"rotate-up"),e(T(1)),void e(z(1))}})]})]})}function te(e){for(var A=e.videogames,t=e.gamePerPages,a=e.currentPage,n=Object(u.c)((function(e){return e.active})),c=[],r=Math.ceil(A/t),i=Object(u.b)(),s=1;s<=r;s++)c.push(s);return Object(o.jsxs)("nav",{className:"pg-conteiner",children:[Object(o.jsx)("button",{onClick:function(){a>1&&(i(T(a-1)),i(z(a-1)))},children:"prev"}),c.map((function(e){return Object(o.jsx)("button",{className:n===e?"active":"",onClick:function(){!function(e){i(T(e))}(e),function(){i(z(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1))}(e)},children:e},e)})),Object(o.jsx)("button",{onClick:function(){a<r&&(i(T(a+1)),i(z(a+1)))},children:"next"})]})}function ae(){var e=Object(u.b)(),A=Object(u.c)((function(e){return e.videogames})),t=Object(u.c)((function(e){return e.loading})),n=Object(u.c)((function(e){return e.page})),c=Object(a.useState)(15),r=Object(d.a)(c,1)[0],i=n*r,s=i-r;Object(a.useEffect)((function(){A.length||(e(N()),e(R()))}),[]);if(404!==A.status){var l=(null===A||void 0===A?void 0:A.slice(s,i)).map((function(e){var A,t=""===e.img?J:e.img;return Object(o.jsx)(q,{id:e.id,name:e.name,img:t,genres:(A=e.genres,null===A||void 0===A?void 0:A.reduce((function(e,A,t){return 0===t?A.name:e+" - "+A.name}),"")),createdInDb:e.createdInDb},e.id)}));return t?Object(o.jsx)(K,{}):Object(o.jsxs)("div",{className:"home container",children:[Object(o.jsx)("button",{className:"get-games-button",onClick:function(){return e(N()),e(T(1)),void e(z(1))},children:"Retrive all games"}),Object(o.jsx)(Ae,{}),Object(o.jsx)(te,{videogames:A.length,gamePerPages:r,currentPage:n}),Object(o.jsx)("div",{className:"cards",children:l})]})}return Object(o.jsxs)("div",{className:"Error",children:[Object(o.jsx)("p",{children:"Videogame not found"}),Object(o.jsx)("img",{src:W,alt:"Error"}),Object(o.jsx)("button",{onClick:function(){return window.location.reload(!1)},children:"Try again"})]})}function ne(){var e,A,t,n=Object(u.c)((function(e){return e.videogamesDetail})),c=Object(u.b)(),i=Object(r.f)();Object(a.useEffect)((function(){return c(P(i.idVideogame)),function(){c(k())}}),[c,i]);var s=null===(e=n.genres)||void 0===e?void 0:e.reduce((function(e,A,t){return 0===t?A.name:e+"/"+A.name}),""),l=n.createdInDb?null===(A=n.platforms)||void 0===A?void 0:A.reduce((function(e,A,t){return 0===t?A:e+"/"+A}),""):null===(t=n.platforms)||void 0===t?void 0:t.reduce((function(e,A,t){return 0===t?A.platform.name:e+" - "+A.platform.name}),""),d=Object(r.e)(),b=""===n.img?J:n.img;return n.name?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("button",{className:"detail-back-btn",onClick:function(){return d.goBack()},children:"Back"}),Object(o.jsxs)("div",{className:"detail-container",children:[Object(o.jsxs)("div",{className:"detail-col-1",children:[Object(o.jsx)("div",{className:"detail-name",children:n.name}),Object(o.jsx)("img",{src:b,alt:"Game detail",width:"250px",hight:"250px"}),Object(o.jsxs)("div",{className:"detail-genre",children:[Object(o.jsx)("p",{children:"Genre:"}),s]}),Object(o.jsxs)("div",{className:"detil-released",children:[Object(o.jsx)("p",{children:"Released:"}),n.releaseDate]}),Object(o.jsxs)("div",{className:"detail-rating",children:[Object(o.jsx)("p",{children:"Rating:"}),n.rating]}),Object(o.jsxs)("div",{className:"detail-platform",children:[Object(o.jsx)("p",{children:"Platforms:"}),l]})]}),Object(o.jsx)("p",{children:n.description})]})]}):Object(o.jsx)(K,{})}var ce=t(16),re=t(22),ie=t(2),se=t(43),oe=["label","errorMessage","onChange","onInvalid"];function le(e){var A=e.label,t=e.errorMessage,a=e.onChange,n=e.onInvalid,c=Object(se.a)(e,oe);return Object(o.jsxs)("div",{className:"".concat(A," form-item"),children:[Object(o.jsx)("label",{children:A}),Object(o.jsx)("input",Object(ie.a)(Object(ie.a)({},c),{},{onChange:a,onInvalid:n})),Object(o.jsx)("span",{className:"form-error",children:t})]})}function de(e){var A={};e.name?/^[a-zA-Z0-9_. -]*$/.test(e.name)||(A.name="Invalid name"):A.name="Name required",e.description?e.description.length>700&&(A.description="Description must be less than 700 characters"):A.description="Description required",e.rating&&(e.rating<1||e.rating>5)&&(A.rating="Rate from 1 to 5");var t=new Date,a=t.getFullYear(),n=t.getMonth()+1,c=t.getDate(),r=e.releaseDate.split("-").map((function(e){return parseInt(e)}));return(r[0]>a||r[1]>n||r[1]===n&&r[2]>c)&&(A.releaseDate="Invalid date"),e.platforms.length||(A.platforms="Must select at least 1"),A}function ue(){var e=Object(u.c)((function(e){return e.genre})),A=Object(u.c)((function(e){return e.videogames})),t=Object(u.c)((function(e){return e.modify})),n=Object(u.b)(),c=Object(r.e)(),s=Object(a.useState)({name:"",img:"",description:"",releaseDate:"",rating:"",platforms:[],genres:[]}),l=Object(d.a)(s,2),b=l[0],j=l[1],g=Object(a.useState)({}),h=Object(d.a)(g,2),m=h[0],O=h[1],p=[{id:"a",name:"pc",type:"checkbox",label:"PC"},{id:"b",name:"playstation",type:"checkbox",label:"PlayStation"},{id:"c",name:"xbox",type:"checkbox",label:"xBox"},{id:"d",name:"nintendo switch",type:"checkbox",label:"Nintendo Switch"}],f=[{id:1,name:"name",type:"text",placeholder:"Name",label:"Name",errorMessage:m.name},{id:2,name:"img",type:"text",placeholder:"Image",label:"Image"},{id:3,name:"releaseDate",type:"date",placeholder:"Release Date",label:"Release Date",errorMessage:m.releaseDate},{id:4,name:"description",type:"text",placeholder:"Description",label:"Description",errorMessage:m.description},{id:5,name:"rating",type:"number",placeholder:"Rating",label:"Rating",errorMessage:m.rating},{id:6,name:"platforms",type:"text",placeholder:"Platforms",label:"Platforms",errorMessage:m.platforms},{id:7,name:"genres",type:"text",placeholder:"Genres",label:"Genres"}],E=function(e){j(Object(ie.a)(Object(ie.a)({},b),{},Object(re.a)({},e.target.name,e.target.value))),O(de(Object(ie.a)(Object(ie.a)({},b),{},Object(re.a)({},e.target.name,e.target.value))))};return Object(o.jsxs)("div",{className:"form-continer",children:[Object(o.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),Object.keys(m).length)alert("Must compleate required fields");else{if(t.length)n(X(t,b)),n(N());else{var a=A.filter((function(e){return e.name===b.name}));a.length?alert("Videogame already exists"):(n(S(b)),n(N()),alert("Videogame created"))}c.push("/home")}},children:[t.length?Object(o.jsx)("h1",{children:"Modify Videogame"}):Object(o.jsx)("h1",{children:"Create Videogame"}),f.map((function(A){return"genres"===A.name?Object(o.jsxs)("div",{className:"custom-select genre-select",children:[Object(o.jsxs)("select",{name:"genres",onChange:function(e){return function(e){!b.genres.includes(e.target.value)&&j(Object(ie.a)(Object(ie.a)({},b),{},{genres:[].concat(Object(ce.a)(b.genres),[e.target.value])}))}(e)},defaultValue:"placeholder",children:[Object(o.jsx)("option",{value:"placeholder",disabled:!0,hidden:!0,children:"Select Genre/s"}),null===e||void 0===e?void 0:e.map((function(e){return Object(o.jsx)("option",{value:e.name,children:e.name},e.id)}))]},"genres"),Object(o.jsx)("span",{className:"custom-arrow"})]}):"platforms"===A.name?Object(o.jsxs)("div",{style:{position:"relative"},children:[Object(o.jsx)("span",{className:"platfor-form-title",children:"Select Platform/s"}),p.map((function(e,A){return Object(o.jsxs)("div",{className:"platform-select-conteiner",children:[Object(o.jsx)("input",{type:"checkbox",id:A,name:e.name,value:e.name,onChange:function(e){return function(e){if(e.target.checked)j(Object(ie.a)(Object(ie.a)({},b),{},{platforms:[].concat(Object(ce.a)(b.platforms),[e.target.value])})),O(de(Object(ie.a)(Object(ie.a)({},b),{},{platforms:[].concat(Object(ce.a)(b.platforms),[e.target.value])})));else{var A=b.platforms.filter((function(A){return A!==e.target.value}));j(Object(ie.a)(Object(ie.a)({},b),{},{platforms:A})),O(de(Object(ie.a)(Object(ie.a)({},b),{},{platforms:A})))}}(e)}}),Object(o.jsx)("label",{htmlFor:A,className:"platform-label",children:e.name},A)]})})),Object(o.jsx)("span",{className:"form-error platform-error",children:A.errorMessage})]},"platforms"):Object(o.jsx)(le,Object(ie.a)(Object(ie.a)({},A),{},{value:b[A.name],onChange:E}),A.id)})),t.length?Object(o.jsx)("button",{className:"create-submit",children:"Modify"}):Object(o.jsx)("button",{className:"create-submit",children:"Create"})]}),Object(o.jsx)("div",{className:"genre-selection-conteiner",children:b.genres.map((function(e){return Object(o.jsxs)("div",{className:"genre-selection",children:[Object(o.jsx)("button",{onClick:function(){return function(e){var A=b.genres.filter((function(A){return A!==e}));j(Object(ie.a)(Object(ie.a)({},b),{},{genres:A}))}(e)},children:"x"}),Object(o.jsx)("p",{children:e})]},e)}))}),Object(o.jsx)(i.b,{to:"/home",children:Object(o.jsx)("button",{className:"create-back",children:"Back"})})]})}t(81);var be=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(r.a,{exact:!0,path:"/",component:l}),Object(o.jsx)(r.a,{path:"/home",component:ae}),Object(o.jsx)(r.a,{path:"/videogames/:idVideogame",component:ne}),Object(o.jsx)(r.a,{exact:!0,path:"/videgames/create",component:ue})]})},je=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,87)).then((function(A){var t=A.getCLS,a=A.getFID,n=A.getFCP,c=A.getLCP,r=A.getTTFB;t(e),a(e),n(e),c(e),r(e)}))},ge=t(26),he={videogames:[],videogamesFilter:[],genre:[],videogamesDetail:[],gameCreated:"",loading:!0,searchParam:"",page:1,active:1,modify:""};var me=t(44),Oe=Object(ge.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,A=arguments.length>1?arguments[1]:void 0,t=e.videogamesFilter;switch(A.type){case m:return Object(ie.a)(Object(ie.a)({},e),{},{loading:!1,videogames:A.payload,videogamesFilter:A.payload});case D:return Object(ie.a)(Object(ie.a)({},e),{},{videogames:[],videogamesFilter:[],videogamesDetail:[],loading:!0,searchParam:"",page:1,active:1});case Q:return Object(ie.a)(Object(ie.a)({},e),{},{loading:!1,videogames:A.payload,videogamesFilter:A.payload});case O:return Object(ie.a)(Object(ie.a)({},e),{},{genre:A.payload});case p:var a="all"===A.payload?t:t.filter((function(e){for(var t=0;t<e.genres.length;t++)if(e.genres[t].name===A.payload)return!0;return!1}));return Object(ie.a)(Object(ie.a)({},e),{},{videogames:a});case f:return Object(ie.a)(Object(ie.a)({},e),{},{videogames:A.payload,videogamesFilter:A.payload});case E:var n;return"A-Z"===A.payload?n=Object(ce.a)(e.videogames).sort((function(e,A){return e.name.toLowerCase()>A.name.toLowerCase()?1:A.name.toLowerCase()>e.name.toLowerCase()?-1:0})):"rating"===A.payload&&(n=Object(ce.a)(e.videogames).sort((function(e,A){return e.rating>A.rating?-1:A.rating>e.rating?1:0}))),Object(ie.a)(Object(ie.a)({},e),{},{videogames:n});case v:var c=Object(ce.a)(e.videogames).reverse();return Object(ie.a)(Object(ie.a)({},e),{},{videogames:c});case x:return Object(ie.a)(Object(ie.a)({},e),{},{loading:!1,videogamesDetail:A.payload});case C:return Object(ie.a)(Object(ie.a)({},e),{},{gameCreated:A.payload});case I:return Object(ie.a)(Object(ie.a)({},e),{},{videogamesDetail:[]});case B:return Object(ie.a)(Object(ie.a)({},e),{},{active:A.payload});case w:return Object(ie.a)(Object(ie.a)({},e),{},{page:A.payload});case y:return Object(ie.a)(Object(ie.a)({},e),{},{modify:A.payload});default:return Object(ie.a)({},e)}}),Object(ge.b)(Object(ge.a)(me.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),pe=Oe,fe=t(45);t.n(fe).a.config(),h.a.defaults.baseURL="https://videogames-backend-4que.onrender.com",c.a.render(Object(o.jsx)(u.a,{store:pe,children:Object(o.jsx)(i.a,{children:Object(o.jsx)(be,{})})}),document.getElementById("root")),je()}},[[86,1,2]]]);
//# sourceMappingURL=main.fa794fc2.chunk.js.map