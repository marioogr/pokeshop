(this.webpackJsonppostulacion=this.webpackJsonppostulacion||[]).push([[0],{35:function(e,t,n){},36:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),a=n(28),r=n.n(a),i=n(11),o=(n(35),n(2)),l=(n(36),n(8)),j=n.n(l),u=n(12),d=n(9),p=n(13),m=n.n(p),b=n.p+"static/media/not_foto.0e049a38.png";function h(e){return Object(c.jsx)(c.Fragment,{children:e.types.map((function(e){return Object(c.jsx)("p",{className:"fw-bold",style:{textTransform:"capitalize",margin:"1rem"},children:e.type.name},e.id)}))})}function f(e){var t=Object(s.useState)(null),n=Object(d.a)(t,2),a=n[0],r=n[1],i=Object(o.f)().id;Object(s.useEffect)((function(){(function(){var e=Object(u.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m()("https://pokeapi.co/api/v2/pokemon/".concat(i));case 2:t=e.sent,r(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[i]);return Object(c.jsx)(c.Fragment,{children:a?Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"d-flex justify-content-center",children:Object(c.jsxs)("div",{className:"card",style:{width:"70rem",height:"auto",margin:"5px"},children:[a.sprites.front_default?Object(c.jsx)("img",{src:a.sprites.front_default,className:"mx-auto d-block",alt:e.name,style:{height:"20rem",width:"20rem"}}):Object(c.jsx)("img",{src:b,className:"card-img-top",alt:"..."}),Object(c.jsxs)("div",{className:"card-body",children:[Object(c.jsx)("h5",{className:"card-title",style:{textTransform:"capitalize"},children:a.name}),Object(c.jsx)("div",{className:"d-flex justify-content-center",children:Object(c.jsx)(h,{types:a.types})}),Object(c.jsxs)("p",{children:["Peso: ",a.weight]}),Object(c.jsxs)("p",{children:["Altura: ",a.height]})]})]})})}):Object(c.jsx)("div",{className:"spinner-border",role:"status",children:Object(c.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})}function x(e){return Object(c.jsxs)(i.b,{to:"pokemon/".concat(e.id),className:"card",style:{width:"16rem",height:"22rem",margin:"5px"},children:[e.image?Object(c.jsx)("img",{src:e.image,className:"card-img-top",alt:"..."}):Object(c.jsx)("img",{src:b,className:"card-img-top",alt:"..."}),Object(c.jsxs)("div",{className:"card-body",children:[Object(c.jsx)("h5",{className:"card-title",style:{textTransform:"capitalize"},children:e.name}),Object(c.jsx)("div",{className:"row",children:e.tipos.map((function(e){return Object(c.jsx)("div",{className:"col-sm",children:Object(c.jsx)("p",{style:{textTransform:"capitalize"},children:e.type.name})},e.type.name)}))})]})]})}function O(e){return e.pokemons.map((function(e){return Object(c.jsx)(x,{name:e.name,image:e.sprites.front_default,id:e.id,url_specs:e.species.url,tipos:e.types},e.id)}))}function g(e){var t=Object(s.useState)(null),n=Object(d.a)(t,2),a=n[0],r=n[1];return Object(s.useEffect)((function(){(function(){var t=Object(u.a)(j.a.mark((function t(){var n,c,s,a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=[],c=0;case 2:if(!(c<e.ids.length)){t.next=11;break}return s="https://pokeapi.co/api/v2/pokemon/"+e.ids[c],t.next=6,m()(s);case 6:a=t.sent,n.push(a.data);case 8:c++,t.next=2;break;case 11:r(n);case 12:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e.ids]),Object(c.jsx)("div",{className:"d-flex justify-content-center flex-wrap",children:a?Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(O,{pokemons:a})}):Object(c.jsx)("div",{className:"spinner-border",role:"status",children:Object(c.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})}function v(){var e=Object(s.useState)(""),t=Object(d.a)(e,2),n=t[0],a=t[1],r=Object(s.useState)([]),i=Object(d.a)(r,2),o=i[0],l=i[1],p=Object(s.useState)([15,2,3,4,5,6,70,8,90,10]),b=Object(d.a)(p,2),h=b[0],f=b[1],x=Object(s.useState)(!1),O=Object(d.a)(x,2),v=O[0],y=O[1];Object(s.useEffect)((function(){(function(){var e=Object(u.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m()("https://pokeapi.co/api/v2/pokemon?limit=1118&offset=o");case 2:t=e.sent,n=t.data.results,l(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"flex-column bd-highlight mt-3 mb-3",children:[Object(c.jsx)("input",{className:"inputText mr-3",name:"searchInput",onClick:function(){y(!1)},onChange:function(e){return a(e.target.value)},type:"text"}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{className:"button",style:{marginLeft:"1rem",marginTop:"1rem"},onClick:function(){var e=[];""!==n?(o.filter((function(e){return e.name.includes(n.toLowerCase(),0)})).forEach((function(t){e.push(parseInt(t.url.split("pokemon",2)[1].replace("/","").replace("/","")))})),f(e),console.log(h)):y(!0)},children:"Buscar"}),v?Object(c.jsx)("p",{children:"Debe incluir un criterio de busqueda"}):Object(c.jsx)(c.Fragment,{})]}),Object(c.jsx)(g,{ids:h})]})}var y=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h2",{className:"textColor",children:"PokeInfo"}),Object(c.jsxs)(o.c,{children:[Object(c.jsx)(o.a,{path:"/pokemon/:id",exact:!0,children:Object(c.jsx)(f,{})}),Object(c.jsx)(o.a,{exact:!0,path:"/pokeinfo",children:Object(c.jsx)(v,{})})]})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,62)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))};r.a.render(Object(c.jsx)(i.a,{children:Object(c.jsx)(y,{})}),document.getElementById("root")),N()}},[[61,1,2]]]);
//# sourceMappingURL=main.dc7f1174.chunk.js.map