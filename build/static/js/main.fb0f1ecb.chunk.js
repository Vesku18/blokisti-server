(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{43:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(17),c=n.n(o),s=n(2),u=n.n(s),i=n(5),l=n(3),d=n(0),j=function(e){var t=e.handleLogin,n=Object(r.useState)(""),a=Object(l.a)(n,2),o=a[0],c=a[1],s=Object(r.useState)(""),u=Object(l.a)(s,2),i=u[0],j=u[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"login"}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),!0===t(o,i)&&(c(""),j(""))},children:[Object(d.jsxs)("div",{children:["username ",Object(d.jsx)("input",{type:"text",value:o,name:"Username",onChange:function(e){var t=e.target;return c(t.value)}})]}),Object(d.jsxs)("div",{children:["password ",Object(d.jsx)("input",{type:"password",value:i,name:"Password",onChange:function(e){var t=e.target;return j(t.value)}})]}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{type:"submit",children:"login"})})]})]})},b=function(e){var t=e.addBlog,n=Object(r.useState)(""),a=Object(l.a)(n,2),o=a[0],c=a[1],s=Object(r.useState)(""),u=Object(l.a)(s,2),i=u[0],j=u[1],b=Object(r.useState)(""),p=Object(l.a)(b,2),f=p[0],g=p[1];return Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n={title:o,author:i,url:f};console.log(n),t(n),c(""),j(""),g("")},children:[Object(d.jsxs)("p",{children:["Blog",Object(d.jsx)("input",{type:"text",value:o,onChange:function(e){c(e.target.value)}})," "]}),Object(d.jsxs)("p",{children:["Author",Object(d.jsx)("input",{type:"text",value:i,onChange:function(e){j(e.target.value)}})," "]}),Object(d.jsxs)("p",{children:["Url",Object(d.jsx)("input",{type:"text",value:f,onChange:function(e){g(e.target.value)}})," "]}),Object(d.jsx)("button",{type:"submit",children:"save"})]})},p=a.a.forwardRef((function(e,t){var n=Object(r.useState)(!1),a=Object(l.a)(n,2),o=a[0],c=a[1],s={display:o?"none":""},u={display:o?"":"none"},i=function(){c(!o)};return Object(r.useImperativeHandle)(t,(function(){return{toggleVisibility:i}})),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{style:s,children:Object(d.jsx)("button",{onClick:i,children:e.buttonLabel})}),Object(d.jsxs)("div",{style:u,children:[e.children,Object(d.jsx)("button",{onClick:i,children:"cancel"})]})]})}));p.displayName="Togglable";var f=p,g=function(e){var t=e.n,n=e.updateBlog,a=e.deleteBlog,o=Object(r.useState)(!1),c=Object(l.a)(o,2),s=c[0],u=c[1],i={display:"none"},j="Show";s&&(i={display:""},j="Hide");return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{children:["Juttu: ",t.title,Object(d.jsxs)("button",{onClick:function(){u(!s)},children:[" ",j," "]})]}),Object(d.jsxs)("div",{style:i,children:[Object(d.jsxs)("p",{children:["Url:",t.url]}),Object(d.jsxs)("p",{children:["likes:",t.likes," ",Object(d.jsx)("button",{onClick:function(e){e.preventDefault();var r=t;r.likes=t.likes+1,n(t.id,r)},children:" like "})]}),Object(d.jsxs)("p",{children:[" Tuottaja: ",t.author," "]})]}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{onClick:function(e){e.preventDefault(),a(t.id)},children:" Poista "})})]})},h=function(e){var t=e.user,n=e.blogs,r=e.updateBlog,a=e.deleteBlog;return null!==t?n.map((function(e){return Object(d.jsx)(g,{n:e,updateBlog:r,deleteBlog:a},e.id)})):"nobody logged in yet"},O=n(6),v=n.n(O),x="http://127.0.0.1:3003/api/blogs",m=null,w={getAll:function(){var e=Object(i.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={headers:{Authorization:m}},console.log("config:",t),e.next=4,v.a.get(x,t);case 4:return n=e.sent,console.log(n.data),e.abrupt("return",n.data);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(i.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:m}},console.log("config addiss\xe4:",n),e.next=4,v.a.post(x,t,n);case 4:return r=e.sent,console.log("status adist\xe4",r.status),console.log("response",r.data),e.abrupt("return",r.data);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(e,t){console.log("update alkaa");var n={headers:{Authorization:m}},r=v.a.put("".concat(x,"/").concat(e),t,n);return console.log("update done",r),r.data},deleteRecord:function(){var e=Object(i.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("delete alkaa"),n={headers:{Authorization:m}},e.next=4,v.a.delete("".concat(x,"/").concat(t),n);case 4:return r=e.sent,console.log("delete done",r.status),e.abrupt("return",r.status);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),setToken:function(e){m=e?"bearer ".concat(e):null}},k={login:function(){var e=Object(i.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.post("http://localhost:3003/login",t);case 2:return n=e.sent,console.log("response",n),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},y=function(e){var t=e.message;if(null!==t)return Object(d.jsx)("div",{className:"error",children:t})},S=function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),n=t[0],a=t[1],o=Object(r.useState)(""),c=Object(l.a)(o,2),s=c[0],p=c[1],g=Object(r.useState)(null),O=Object(l.a)(g,2),v=O[0],x=O[1],m=Object(r.useRef)(),S=Object(r.useRef)();Object(r.useEffect)((function(){var e=window.localStorage.getItem("loggedBlogappUser");if(e){var t=JSON.parse(e);x(t),w.setToken(t.token),setTimeout(p("Tervetuloa taas ".concat(t.name),2e3)),setTimeout((function(){p("")}),5e3)}}),[]);var T=function(){w.getAll().then((function(e){console.log("promise fullfilled"),a(e)})).catch((function(e){throw console.log("Error",e),p(e.message),setTimeout((function(){p("")}),5e3),e}))};Object(r.useEffect)(T,[]);var B=function(){var e=Object(i.a)(u.a.mark((function e(t,n){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("logging with",t,n),e.prev=1,e.next=4,k.login({username:t,password:n});case 4:if(r=e.sent,console.log("response status:",r.status),console.log("response data:",r.data),200!==r.status){e.next=14;break}return window.localStorage.setItem("loggedBlogappUser",JSON.stringify(r.data)),console.log("Asetetaan local storakeen",r.data),w.setToken(r.data.token),x(r.data),S.current.toggleVisibility(),e.abrupt("return",!0);case 14:e.next=21;break;case 16:e.prev=16,e.t0=e.catch(1),console.log("wrong credentials"),p("V\xe4\xe4r\xe4 tunnus tai salasana"),setTimeout((function(){p("")}),5e3);case 21:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(t,n){return e.apply(this,arguments)}}(),C=function(){x(null),window.localStorage.removeItem("loggedBlogappUser")},A=function(){var e=Object(i.a)(u.a.mark((function e(t){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m.current.toggleVisibility(),e.prev=1,console.log("Luodaan uusi",t),e.next=5,w.create(t);case 5:r=e.sent,a(n.concat(r)),p("Uusi tietue lis\xe4tty"),setTimeout((function(){p("")}),5e3),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(1),console.log("Joku virhe",e.t0),p(e.t0),setTimeout((function(){p("")}),5e3);case 16:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(i.a)(u.a.mark((function e(t,n){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.update(t,n);case 2:return r=e.sent,p("Tietue lis\xe4tty"),setTimeout((function(){p("")}),5e3),e.abrupt("return",r.data);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),U=function(){var e=Object(i.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.deleteRecord(t);case 2:204===e.sent?(p("Tietue poistettu"),setTimeout((function(){p("")}),5e3),T()):(p("Poisto ei onnistunut"),setTimeout((function(){p("")}),5e3));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{children:[Object(d.jsx)(y,{message:s}),Object(d.jsx)(f,{buttonLabel:"lggin",ref:S,children:Object(d.jsx)(j,{handleLogin:B})}),function(){if(null!==v)return Object(d.jsx)("div",{children:Object(d.jsxs)("p",{children:[v.name," logged in",Object(d.jsx)("button",{onClick:C,children:" Logout "})]})})}(),null!==v&&Object(d.jsx)(f,{buttonLabel:"create new",ref:m,children:Object(d.jsx)(b,{addBlog:A})}),Object(d.jsx)(h,{user:v,blogs:n,updateBlog:L,deleteBlog:U})]})};c.a.render(Object(d.jsx)(S,{}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.fb0f1ecb.chunk.js.map