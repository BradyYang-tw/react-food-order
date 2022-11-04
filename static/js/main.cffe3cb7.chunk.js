(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__2hi1H",summary:"CartItem_summary__1eN56",price:"CartItem_price__1BQZP",amount:"CartItem_amount__3VzR8",actions:"CartItem_actions__2gS1H"}},,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(10),i=n.n(c),a=(n(18),n(2)),r=n(1),s=n.n(r),o=n(0),l=function(){return Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(o.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},d=s.a.createContext({item:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),u=(n(20),function(e){var t=Object(r.useContext)(d),n=t.items.reduce((function(e,t){return e+t.amount}),0),c=Object(r.useState)(!1),i=Object(a.a)(c,2),s=i[0],u=i[1],m="button ".concat(s?"bump":"");return Object(r.useEffect)((function(){if(0!==t.items.length){u(!0);var e=setTimeout((function(){u(!1)}),300);return function(){clearTimeout(e)}}}),[t.items]),Object(o.jsxs)("button",{className:m,onClick:e.onClick,children:[Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)(l,{})}),Object(o.jsx)("span",{children:"Your Cart"}),Object(o.jsxs)("span",{className:"badge",children:["Total Amount: ",n]})]})}),m=(n(21),function(e){return Object(o.jsxs)(r.Fragment,{children:[Object(o.jsxs)("header",{children:[Object(o.jsx)("h1",{children:"ReactMeals"}),Object(o.jsx)(u,{onClick:e.onShowCart})]}),Object(o.jsx)("div",{className:"header-img",children:Object(o.jsx)("img",{src:"https://github.com/academind/react-complete-guide-code/blob/11-practice-food-order-app/extra-files/meals.jpg?raw=true",alt:"header-pic"})})]})}),j=(n(22),function(e){return Object(o.jsx)("div",{className:"card",children:e.children})}),b=n(3),O=(n(23),s.a.forwardRef((function(e,t){return Object(o.jsxs)("div",{className:"input",children:[Object(o.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(o.jsx)("input",Object(b.a)({ref:t,type:"text",id:e.input.id},e.input))]})}))),h=(n(24),function(e){var t=Object(r.useState)(!0),n=Object(a.a)(t,2),c=n[0],i=n[1],s=Object(r.useRef)();return Object(o.jsxs)("form",{className:"form",onSubmit:function(t){t.preventDefault();var n=s.current.value,c=+n;0===n.trim().length||c<1||c>5?i(!1):e.onAddToCart(c)},children:[Object(o.jsx)(O,{ref:s,label:"Amount",input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(o.jsx)("button",{children:"+ Add"}),!c&&Object(o.jsx)("p",{children:"please enter a valid amount"})]})}),x=(n(25),function(e){var t=Object(r.useContext)(d),n="".concat(e.price.toFixed(2));return Object(o.jsxs)("li",{children:[Object(o.jsxs)("div",{className:"meal",children:[Object(o.jsx)("h3",{children:e.name}),Object(o.jsx)("div",{className:"description",children:e.description}),Object(o.jsx)("div",{className:"price",children:n})]}),Object(o.jsx)("div",{children:Object(o.jsx)(h,{id:e.id,onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})}),f=(n(26),[{id:"m1",name:"Sushi",description:"Finest fish and veggies",price:22.99},{id:"m2",name:"Schnitzel",description:"A german specialty!",price:16.5},{id:"m3",name:"Barbecue Burger",description:"American, raw, meaty",price:12.99},{id:"m4",name:"Green Bowl",description:"Healthy...and green...",price:18.99}]),p=function(){var e=f.map((function(e){return Object(o.jsx)(x,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(o.jsx)(j,{className:"meals",children:Object(o.jsx)("ul",{children:e})})},v=function(){return Object(o.jsxs)("section",{className:"summary",children:[Object(o.jsx)("h2",{children:"Delicious Food, Dasdasdafa"}),Object(o.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(o.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},C=function(){return Object(o.jsxs)(r.Fragment,{children:[Object(o.jsx)(v,{}),Object(o.jsx)(p,{})]})},g=(n(27),n(6)),N=n.n(g),A=function(e){return Object(o.jsx)("div",{className:"backdrop",onClick:e.onClose})},y=function(e){return Object(o.jsx)("div",{className:"modal",children:Object(o.jsx)("div",{className:"content",children:e.children})})},I=document.getElementById("overlays"),_=function(e){return Object(o.jsxs)(r.Fragment,{children:[N.a.createPortal(Object(o.jsx)(A,{onClose:e.onClose}),I),N.a.createPortal(Object(o.jsx)(y,{children:e.children}),I)]})},w=(n(28),n(4)),k=n.n(w),R=function(e){var t="$".concat(e.price.toFixed(2));return Object(o.jsxs)("li",{className:k.a["cart-item"],children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:e.name}),Object(o.jsxs)("div",{className:k.a.summary,children:[Object(o.jsx)("span",{className:k.a.price,children:t}),Object(o.jsxs)("span",{className:k.a.amount,children:["x ",e.amount]})]})]}),Object(o.jsxs)("div",{className:k.a.actions,children:[Object(o.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(o.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},F=function(e){var t=Object(r.useContext)(d),n=t.totalAmount.toFixed(2),c=t.items.length>0,i=function(e){t.removeItem(e)},a=function(e){t.addItem(e)},s=Object(o.jsx)("ul",{className:"cart-items",children:t.items.map((function(e){return Object(o.jsx)(R,{name:e.name,amount:e.amount,price:e.price,onRemove:i.bind(null,e.id),onAdd:a.bind(null,e)},e.id)}))});return Object(o.jsxs)(_,{onClose:e.onClose,children:[s,Object(o.jsxs)("div",{className:"total",children:[Object(o.jsx)("span",{children:"Total Amount"}),Object(o.jsx)("span",{children:n})]}),Object(o.jsxs)("div",{className:"actions",children:[Object(o.jsx)("button",{className:"button--alt",onClick:e.onClose,children:"Close"}),c&&Object(o.jsx)("button",{className:"button",children:"Order"})]})]})},H=n(8),S={items:[],totalAmount:0},B=function(e,t){if("ADD"===t.type){var n,c=e.totalAmount+t.item.price*t.item.amount,i=e.items.findIndex((function(e){return e.id===t.item.id})),a=e.items[i];if(a){var r=Object(b.a)(Object(b.a)({},a),{},{amount:a.amount+t.item.amount});(n=Object(H.a)(e.items))[i]=r}else n=e.items.concat(t.item);return{items:n,totalAmount:c}}if("REMOVE"===t.type){var s,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],d=e.totalAmount-l.price;if(1===l.amount)s=e.items.filter((function(e){return e.id!==t.id}));else{var u=Object(b.a)(Object(b.a)({},l),{},{amount:l.amount-1});(s=Object(H.a)(e.items))[o]=u}return{items:s,totalAmount:d}}return S},D=function(e){var t=Object(r.useReducer)(B,S),n=Object(a.a)(t,2),c=n[0],i=n[1],s={items:c.items,totalAmount:c.totalAmount,addItem:function(e){i({type:"ADD",item:e})},removeItem:function(e){i({type:"REMOVE",id:e})}};return Object(o.jsx)(d.Provider,{value:s,children:e.children})};var E=function(){var e=Object(r.useState)(!1),t=Object(a.a)(e,2),n=t[0],c=t[1],i=function(){c(!1)};return Object(o.jsxs)(D,{children:[n&&Object(o.jsx)(F,{onClose:i}),Object(o.jsx)(m,{onShowCart:function(){c(!0)},onHideCart:i}),Object(o.jsx)("main",{children:Object(o.jsx)(C,{})})]})};i.a.createRoot(document.getElementById("root")).render(Object(o.jsx)(E,{}))}],[[29,1,2]]]);
//# sourceMappingURL=main.cffe3cb7.chunk.js.map