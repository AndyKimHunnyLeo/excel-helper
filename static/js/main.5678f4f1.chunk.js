(this["webpackJsonpexcel-helper"]=this["webpackJsonpexcel-helper"]||[]).push([[0],{100:function(e,t,a){e.exports=a(164)},109:function(e,t,a){},114:function(e,t){},116:function(e,t){},164:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(8),o=a.n(c),r=a(25),u=a(202),i=a(203),m=a(201),s=a(204),d=a(199),f=a(196),p=Object(f.a)((function(e){return{row:{background:function(e){return e.odd?"#effefe":"#fff"}}}}));var b=function(e){var t,a=e.value,n=e.odd,c=p({odd:n});return t=a.length>6?a.slice(0,6)+"...":a,l.a.createElement(d.a,{className:c.text,style:{minWidth:"20",maxWidth:"50",wordBreak:"break-all"}},t)},E=a(206),v=a(207),h=(a(108),Object(f.a)((function(e){return{row:{background:"#fff"},checkedRow:{backgroundColor:"#1abc9c"}}})));var g=function(e){var t=e.row,a=e.key,c=e.columnIndex,o=void 0===c?0:c,u=e.columnIndexTwo,i=void 0===u?0:u,s=e.numberOfCopy,f=Object(n.useState)(!1),p=Object(r.a)(f,2),b=p[0],E=p[1],g=h({checked:b});function y(e){try{var t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style={position:"absolute",left:"-9999px"},document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}catch(a){console.log(a)}finally{E(!0)}}return t.length>0&&0!==a&&l.a.createElement(l.a.Fragment,null,b?l.a.createElement(m.a,{className:g.checkedRow},t.length>0&&t.map((function(e,t){return l.a.createElement(d.a,{key:t},e)})),l.a.createElement(d.a,null,l.a.createElement(v.a,{size:"small",width:70,variant:"outlined",onClick:function(){y(t[o])},className:g.button},"copied\u2713 \xa0"," ")),"2"===s&&l.a.createElement(d.a,null,l.a.createElement(v.a,{size:"small",width:70,variant:"outlined",onClick:function(){y(t[i])},className:g.button},"copied\u2713 \xa0"," "))):l.a.createElement(m.a,{className:g.row},t.length>0&&t.map((function(e,t){return l.a.createElement(d.a,{key:t},e)})),l.a.createElement(d.a,null,l.a.createElement(v.a,{size:"small",width:70,variant:"outlined",onClick:function(){y(t[o])},className:g.button},"copy")),"2"===s&&l.a.createElement(d.a,null,l.a.createElement(v.a,{size:"small",width:70,variant:"outlined",onClick:function(){y(t[i])},className:g.button},"copied"))))},y=a(205),k=(a(109),Object(f.a)((function(e){return{body:{width:"100%",display:"flex",alignItems:"center",flexDirection:"column"},column:{backgroundColor:"#bdc3c7"},input_container:{width:"30%",display:"flex",justifyContent:"space-around",marginTop:"3%"},table_container:{width:"90%",marginTop:"2%"},input_button:{fontSize:"calc(0.4vw + 10px)"},selector:{fontSize:"calc(0.4vw + 10px)"}}})));var w=function(){var e=k(),t=Object(n.useState)([]),a=Object(r.a)(t,2),c=a[0],o=a[1],f=Object(n.useState)("1"),p=Object(r.a)(f,2),v=p[0],h=p[1],w=Object(n.useState)(),x=Object(r.a)(w,2),C=x[0],O=x[1],j=Object(n.useState)(),N=Object(r.a)(j,2),z=N[0],S=N[1];return l.a.createElement("div",{className:e.body},l.a.createElement("div",{className:e.input_container},l.a.createElement("input",{type:"file",size:"600",id:"input",onChange:function(){var e=document.getElementById("input");Object(E.a)(e.files[0]).then((function(e){o(e)}))},className:e.input_button}),l.a.createElement(y.a,{native:!0,value:v,onChange:function(e){h(e.target.value)},className:e.selector},l.a.createElement("option",{value:1},"1"),l.a.createElement("option",{value:2},"2")),l.a.createElement(y.a,{native:!0,value:C,onChange:function(e){return O(e.target.value)},className:e.selector},c.length>0&&c[0].map((function(e,t){return l.a.createElement("option",{value:t,key:t},e)}))),"2"===v&&l.a.createElement(y.a,{native:!0,value:z,onChange:function(e){S(e.target.value),console.log(z)},className:e.selector},c.length>0&&c[0].map((function(e,t){return l.a.createElement("option",{value:t,key:t},e)})))),l.a.createElement("div",{className:e.table_container},c.length>0&&l.a.createElement(u.a,{size:"small","aria-label":"a dense table"},l.a.createElement(i.a,null,l.a.createElement(m.a,{className:e.column},c[0].length>0&&c[0].map((function(e,t){return l.a.createElement(b,{value:e,key:t})})),l.a.createElement(d.a,null,"Action1"),"2"===v&&l.a.createElement(d.a,null,"Action2"))),l.a.createElement(s.a,null,c.map((function(e,t){if(0!==t)return l.a.createElement(g,{row:e,key:t,columnIndex:C,columnIndexTwo:z,numberOfCopy:v})}))))))};o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(w,null)),document.getElementById("root"))}},[[100,1,2]]]);
//# sourceMappingURL=main.5678f4f1.chunk.js.map