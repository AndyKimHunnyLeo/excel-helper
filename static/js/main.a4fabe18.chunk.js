(this["webpackJsonpexcel-helper"]=this["webpackJsonpexcel-helper"]||[]).push([[0],{104:function(e,t,a){e.exports=a(168)},113:function(e,t,a){},118:function(e,t){},120:function(e,t){},168:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(9),o=a.n(c),r=a(29),i=a(209),u=a(210),m=a(208),s=a(211),d=a(206),f=a(203),p=Object(f.a)((function(e){return{row:{background:function(e){return e.odd?"#effefe":"#fff"}}}}));var b=function(e){var t,a=e.value,n=e.odd,c=p({odd:n});return t=a.length>6?a.slice(0,6)+"...":a,l.a.createElement(d.a,{className:c.text,style:{minWidth:"20",maxWidth:"50",wordBreak:"break-all"}},t)},E=a(213),h=a(214),v=(a(112),Object(f.a)((function(e){return{row:{background:"#fff"},checkedRow:{backgroundColor:"#1abc9c"}}})));var g=function(e){var t=e.row,a=e.key,c=e.columnIndex,o=void 0===c?0:c,i=e.columnIndexTwo,u=void 0===i?0:i,s=e.numberOfCopy,f=Object(n.useState)(!1),p=Object(r.a)(f,2),b=p[0],E=p[1],g=v({checked:b});function y(e){try{var t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style={position:"absolute",left:"-9999px"},document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}catch(a){console.log(a)}finally{E(!0)}}return t.length>0&&0!==a&&l.a.createElement(l.a.Fragment,null,b?l.a.createElement(m.a,{className:g.checkedRow},t.length>0&&t.map((function(e,t){return l.a.createElement(d.a,{key:t},e)})),l.a.createElement(d.a,null,l.a.createElement(h.a,{size:"small",width:70,variant:"outlined",onClick:function(){y(t[o])},className:g.button},"copied\u2713 \xa0"," ")),"2"===s&&l.a.createElement(d.a,null,l.a.createElement(h.a,{size:"small",width:70,variant:"outlined",onClick:function(){y(t[u])},className:g.button},"copied\u2713 \xa0"," "))):l.a.createElement(m.a,{className:g.row},t.length>0&&t.map((function(e,t){return l.a.createElement(d.a,{key:t},e)})),l.a.createElement(d.a,null,l.a.createElement(h.a,{size:"small",width:70,variant:"outlined",onClick:function(){y(t[o])},className:g.button},"copy")),"2"===s&&l.a.createElement(d.a,null,l.a.createElement(h.a,{size:"small",width:70,variant:"outlined",onClick:function(){y(t[u])},className:g.button},"copied"))))},y=a(212),k=a(216),w=a(215),C=(a(113),Object(f.a)((function(e){return{body:{width:"100%",display:"flex",alignItems:"center",flexDirection:"column"},column:{backgroundColor:"#bdc3c7"},input_container:{width:"30%",display:"flex",justifyContent:"space-around",alignItems:"flex-end",marginTop:"3%"},table_container:{width:"90%",marginTop:"2%"},input_button:{fontSize:"calc(0.4vw + 10px)"},selector:{fontSize:"calc(0.4vw + 10px)"}}})));var N=function(){var e=C(),t=Object(n.useState)([]),a=Object(r.a)(t,2),c=a[0],o=a[1],f=Object(n.useState)("1"),p=Object(r.a)(f,2),h=p[0],v=p[1],N=Object(n.useState)(),x=Object(r.a)(N,2),O=x[0],j=x[1],z=Object(n.useState)(),I=Object(r.a)(z,2),S=I[0],_=I[1];return l.a.createElement("div",{className:e.body},l.a.createElement("div",{className:e.input_container},l.a.createElement("input",{type:"file",size:"600",id:"input",onChange:function(){var e=document.getElementById("input");Object(E.a)(e.files[0]).then((function(e){o(e)}))},className:e.input_button}),l.a.createElement(w.a,{className:e.formControl},l.a.createElement(k.a,{shrink:!0,htmlFor:"age-native-label-placeholder"},"Number of Copy"),l.a.createElement(y.a,{native:!0,value:h,onChange:function(e){v(e.target.value)},className:e.selector},l.a.createElement("option",{value:1},"1"),l.a.createElement("option",{value:2},"2"))),l.a.createElement(w.a,{className:e.formControl},l.a.createElement(k.a,{shrink:!0,htmlFor:"age-native-label-placeholder"},"Action 1"),l.a.createElement(y.a,{native:!0,value:O,onChange:function(e){return j(e.target.value)},className:e.selector},c.length>0&&c[0].map((function(e,t){return l.a.createElement("option",{value:t,key:t},e)})))),"2"===h&&l.a.createElement(w.a,{className:e.formControl},l.a.createElement(k.a,{shrink:!0,htmlFor:"age-native-label-placeholder"},"Action 2"),l.a.createElement(y.a,{native:!0,value:S,onChange:function(e){_(e.target.value),console.log(S)},className:e.selector},c.length>0&&c[0].map((function(e,t){return l.a.createElement("option",{value:t,key:t},e)}))))),l.a.createElement("div",{className:e.table_container},c.length>0&&l.a.createElement(i.a,{size:"small","aria-label":"a dense table"},l.a.createElement(u.a,null,l.a.createElement(m.a,{className:e.column},c[0].length>0&&c[0].map((function(e,t){return l.a.createElement(b,{value:e,key:t})})),l.a.createElement(d.a,null,"Action1"),"2"===h&&l.a.createElement(d.a,null,"Action2"))),l.a.createElement(s.a,null,c.map((function(e,t){return 0!==t?l.a.createElement(g,{row:e,key:t,columnIndex:O,columnIndexTwo:S,numberOfCopy:h}):l.a.createElement("div",null)}))))))};o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(N,null)),document.getElementById("root"))}},[[104,1,2]]]);
//# sourceMappingURL=main.a4fabe18.chunk.js.map