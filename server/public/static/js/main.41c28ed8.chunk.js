(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{117:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n(0),a=n.n(r),s=n(23),i=n.n(s),o=n(9),l=n(120),j=n(126),u=n(129),d=n(121),b=n(124),O=n(125);function x(e){var t=e.setId,n=e.setName,a=Object(r.useRef)(),s=function(){var e=Object(O.a)();t(e)};return Object(c.jsxs)(l.a,{className:"d-flex flex-column justify-content-center",style:{height:"100vh"},children:[Object(c.jsx)(j.a,{children:Object(c.jsxs)(u.a,{children:[Object(c.jsx)(u.a.Header,{className:"text-center",children:Object(c.jsx)(j.a.Toggle,{as:d.a,variant:"link",eventKey:"0",children:"READ ME!"})}),Object(c.jsx)(j.a.Collapse,{eventKey:"0",children:Object(c.jsx)(u.a.Body,{children:"Hello! This is a WhatsApp clone built by Zeyu Liu using SocketIO and React Hooks. Enter your name and press start or create a random ID. Add a contact by their ID and can start a conversation with one or multiple contacts."})})]})}),Object(c.jsxs)(b.a,{onSubmit:function(e){e.preventDefault(),n(a.current.value),s()},className:"w-100",children:[Object(c.jsxs)(b.a.Group,{children:[Object(c.jsx)(b.a.Label,{children:"Enter Your Name"}),Object(c.jsx)(b.a.Control,{type:"text",ref:a,required:!0})]}),Object(c.jsx)(d.a,{type:"submit",className:"mr-2",children:"Start"}),Object(c.jsx)(d.a,{variant:"secondary",onClick:s,children:"Create Random ID"})]})]})}function f(e,t){var n="whatsapp-clone-"+e,c=Object(r.useState)((function(){var e=localStorage.getItem(n);return null!=e?JSON.parse(e):"function"===typeof t?t():t})),a=Object(o.a)(c,2),s=a[0],i=a[1];return Object(r.useEffect)((function(){localStorage.setItem(n,JSON.stringify(s))}),[n,s]),[s,i]}var v=n(26),h=n(18),m=a.a.createContext(),C=function(){return Object(r.useContext)(m)},p=function(e){var t=e.children,n=f("contacts",[]),r=Object(o.a)(n,2),a=r[0],s=r[1];return Object(c.jsx)(m.Provider,{value:{contacts:a,createContact:function(e,t){s((function(n){return[].concat(Object(h.a)(n),[{id:e,name:t}])}))}},children:t})},g=n(75),S=n.n(g),y=a.a.createContext(),N=function(e){var t=e.id,n=e.children,a=Object(r.useState)(),s=Object(o.a)(a,2),i=s[0],l=s[1];return console.log(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_DEV_URL),Object(r.useEffect)((function(){var e=S()(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_DEV_URL,{query:{id:t}},[t]);return l(e),function(){return e.close()}}),[t]),Object(c.jsx)(y.Provider,{value:i,children:n})},E=a.a.createContext(),_=function(){return Object(r.useContext)(E)},I=function(e){var t=e.children,n=e.id,a=C().contacts,s=f("coversations",[]),i=Object(o.a)(s,2),l=i[0],j=i[1],u=Object(r.useState)(0),d=Object(o.a)(u,2),b=d[0],O=d[1],x=Object(r.useContext)(y),m=l.map((function(e,t){console.log("test",e);var c=e.ids.map((function(e){var t=a.find((function(t){return t.id===e})),n=t&&t.name||e;return{id:e,name:n}})),r=e.messages.map((function(e){var t=a.find((function(t){return t.id===e.sender})),c=t&&t.name||e.sender,r=e.sender===n;return Object(v.a)(Object(v.a)({},e),{},{senderName:c,fromMe:r})})),s=t===b;return Object(v.a)(Object(v.a)({},e),{},{messages:r,chatMembers:c,selected:s})})),p=Object(r.useCallback)((function(e){var t=e.ids,n=e.text,c={sender:e.sender,text:n};j((function(e){var n=!1,r=e.map((function(e){return T(e.ids,t)?(n=!0,Object(v.a)(Object(v.a)({},e),{},{messages:[].concat(Object(h.a)(e.messages),[c])})):e}));return n?r:[].concat(Object(h.a)(e),[{ids:t,messages:[c]}])}))}),[j]);Object(r.useEffect)((function(){if(x)return x.on("receive-message",p),function(){return x.off("receive-message")}}),[x,p]);return Object(c.jsx)(E.Provider,{value:{conversations:m,createConversation:function(e){j((function(t){var n=null;return t.some((function(t,c){return!!T(t.ids,e)&&(n=c,!0)}))?(O(n),Object(h.a)(t)):[].concat(Object(h.a)(t),[{ids:e,messages:[]}])}))},selectConversationIndex:O,selectedConversation:m[b],sendMessage:function(e){var t=m[b].chatMembers.map((function(e){return e.id}));x.emit("send-message",{ids:t,text:e,sender:n}),p({ids:t,text:e,sender:n})}},children:t})},T=function(e,t){return e.length===t.length&&(t.sort(),e.sort(),e.every((function(e,n){return e===t[n]})))},D=n(122);var R=function(e){var t=e.message,n=e.isLastMessage,a=Object(r.useCallback)((function(e){e&&e.scrollIntoView({smooth:!0})}),[]);return Object(c.jsxs)("div",{className:"my-1 d-flex flex-column ".concat(t.fromMe?"align-self-end":""),ref:n?a:null,children:[Object(c.jsx)("div",{className:"rounded px-2 py-1 ".concat(t.fromMe?"bg-primary text-white":"border"),children:t.text}),Object(c.jsx)("div",{className:"text-muted small ".concat(t.fromMe?"text-right":""),children:t.fromMe?"You":t.sender})]})};var M=function(e){var t=e.selectedConversation;return Object(c.jsx)("div",{className:"d-flex flex-column align-items-start justify-content-end px-3",children:t.messages.map((function(e,n){var r=t.messages.length-1===n;return Object(c.jsx)(R,{isLastMessage:r,message:e},n)}))})};var k=function(){var e=Object(r.useState)(""),t=Object(o.a)(e,2),n=t[0],a=t[1],s=_(),i=s.sendMessage,l=s.selectedConversation;return Object(c.jsxs)("div",{className:"d-flex flex-column flex-grow-1",children:[Object(c.jsx)("div",{className:"flex-grow-1 overflow-auto",children:Object(c.jsx)(M,{selectedConversation:l})}),Object(c.jsx)(b.a,{children:Object(c.jsx)(b.a.Group,{className:"m-2",children:Object(c.jsxs)(D.a,{children:[Object(c.jsx)(b.a.Control,{as:"textarea",required:!0,value:n,onChange:function(e){return a(e.target.value)},style:{height:"100px",resize:"none"}}),Object(c.jsx)(D.a.Append,{children:Object(c.jsx)(d.a,{onClick:function(e){e.preventDefault(),i(n),a("")},type:"submit",children:"Send"})})]})})})]})},P=n(127),w=n(128),A=n(123),L=n(130);var K=function(){var e=_(),t=e.conversations,n=e.selectConversationIndex;return Object(c.jsx)(L.a,{varaiant:"flush",children:t.map((function(e,t){return Object(c.jsx)(L.a.Item,{action:!0,active:e.selected,onClick:function(){return n(t)},children:(r=e.chatMembers,r.map((function(e){return e.name})).join(", "))},t);var r}))})};var H=function(e){var t=e.closeModal,n=C().contacts,a=_().createConversation,s=Object(r.useState)([]),i=Object(o.a)(s,2),l=i[0],j=i[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(A.a.Header,{closeButton:!0,children:"Create Conversation"}),Object(c.jsx)(A.a.Body,{children:Object(c.jsxs)(b.a,{onSubmit:function(e){e.preventDefault(),a(l),t()},children:[n.map((function(e){return Object(c.jsx)(b.a.Group,{controlId:e.id,children:Object(c.jsx)(b.a.Check,{type:"checkbox",value:l.includes(e.id),label:e.name,onChange:function(){var t;t=e.id,j((function(e){return e.includes(t)?e.filter((function(e){return e.id!==t})):[].concat(Object(h.a)(e),[t])}))}})},e.id)})),Object(c.jsx)(d.a,{type:"submit",children:"Create Conversation"})]})})]})};var B=function(e){var t=e.closeModal,n=Object(r.useRef)(),a=Object(r.useRef)(),s=C().createContact;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(A.a.Header,{closeButton:!0,children:"Create Contact"}),Object(c.jsx)(A.a.Body,{children:Object(c.jsxs)(b.a,{onSubmit:function(e){e.preventDefault(),s(n.current.value,a.current.value),t()},children:[Object(c.jsxs)(b.a.Group,{children:[Object(c.jsx)(b.a.Label,{children:"ID"}),Object(c.jsx)(b.a.Control,{type:"text",ref:n,required:!0})]}),Object(c.jsxs)(b.a.Group,{children:[Object(c.jsx)(b.a.Label,{children:"Name"}),Object(c.jsx)(b.a.Control,{type:"text",ref:a,required:!0})]}),Object(c.jsx)(d.a,{type:"submit",children:"Create Contact"})]})})]})},W=function(){var e=C().contacts;return Object(c.jsx)(L.a,{varaiant:"flush",children:e.map((function(e){return Object(c.jsx)(L.a.Item,{children:e.name},e.id)}))})},F="contacts",U="conversations";var V=function(e){var t=e.id,n=Object(r.useState)(U),a=Object(o.a)(n,2),s=a[0],i=a[1],l=Object(r.useState)(!1),j=Object(o.a)(l,2),u=j[0],b=j[1],O=s===U,x=function(){b(!1)};return Object(c.jsxs)("div",{style:{width:"250px"},className:"d-flex flex-column",children:[Object(c.jsxs)(P.a.Container,{activeKey:s,onSelect:i,children:[Object(c.jsxs)(w.a,{variant:"tabs",className:"justify-content-center",children:[Object(c.jsx)(w.a.Item,{children:Object(c.jsx)(w.a.Link,{eventKey:U,children:" Conversations"})}),Object(c.jsx)(w.a.Item,{children:Object(c.jsx)(w.a.Link,{eventKey:F,children:"Contacts"})})]}),Object(c.jsxs)(P.a.Content,{className:"border-right overflow-auto flex-grow-1",children:[Object(c.jsx)(P.a.Pane,{eventKey:U,children:Object(c.jsx)(K,{})}),Object(c.jsx)(P.a.Pane,{eventKey:F,children:Object(c.jsx)(W,{})})]}),Object(c.jsxs)("div",{className:"p-2 border-top border-right small",children:["Your ID ",Object(c.jsxs)("span",{className:"text-muted",children:[" ",t]})]}),Object(c.jsxs)(d.a,{className:"rounded-0",onClick:function(){return b(!0)},children:["NEW ",O?"CONVERSATION":"CONTACTS"]})]}),Object(c.jsx)(A.a,{show:u,onHide:x,children:O?Object(c.jsx)(H,{closeModal:x}):Object(c.jsx)(B,{closeModal:x})})]})};var q=function(e){var t=e.id,n=_().selectedConversation;return Object(c.jsxs)("div",{className:"d-flex",style:{height:"100vh"},children:[Object(c.jsx)(V,{id:t}),n&&Object(c.jsx)(k,{})]})};var G=function(){var e=f("id",null),t=Object(o.a)(e,2),n=t[0],r=t[1],a=f("name",null),s=Object(o.a)(a,2),i=(s[0],s[1]);return n?Object(c.jsx)(N,{id:n,children:Object(c.jsx)(p,{children:Object(c.jsx)(I,{id:n,children:Object(c.jsx)(q,{id:n})})})}):Object(c.jsx)(x,{setId:r,setName:i})};n(116);i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(G,{})}),document.getElementById("root"))}},[[117,1,2]]]);
//# sourceMappingURL=main.41c28ed8.chunk.js.map