(this["webpackJsonppokemon-go"]=this["webpackJsonppokemon-go"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(10),r=n.n(a),i=(n(15),n(2)),o=n.n(i),d=n(9),u=n(4),l=n(5),p=(n(17),function(){var e=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("".concat(n.status," -- ").concat(n.statusText));case 5:return e.abrupt("return",n.json());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),j=function(){var e=Object(u.a)(o.a.mark((function e(t){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("https://pokeapi.co/api/v2/pokemon/?limit=12&offset=".concat(12*t));case 2:return n=e.sent,e.next=5,Promise.all(n.results.map(function(){var e=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t.url);case 2:return n=e.sent,e.abrupt("return",{name:n.name,id:n.id,type:n.types});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("https://pokeapi.co/api/v2/type?limit=999");case 2:return t=e.sent,e.abrupt("return",t.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("https://pokeapi.co/api/v2/pokemon/".concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=n(3),O=n.n(f),h=(n(20),n(21),n(0)),x=s.a.memo((function(e){var t=e.name,n=e.id,c=e.types,s=e.detCardId;return Object(h.jsxs)("div",{className:"card",onClick:function(){return s(n)},onKeyPress:function(){return s(n)},role:"button",tabIndex:"0",children:[Object(h.jsx)("img",{className:"card__image",src:"https://pokeres.bastionbot.org/images/pokemon/".concat(n,".png"),alt:"a pict. ".concat(t)}),Object(h.jsx)("p",{className:"card__name",children:t[0].toUpperCase()+t.slice(1)}),Object(h.jsx)("div",{className:"card__types",children:c.map((function(e){return Object(h.jsx)("div",{className:"card__type card__type--".concat(e.type.name),children:e.type.name[0].toUpperCase()+e.type.name.slice(1)},e.type.url)}))})]})}));x.propTypes={name:O.a.string.isRequired,id:O.a.number.isRequired,detCardId:O.a.func.isRequired,types:O.a.arrayOf(O.a.shape({type:O.a.shape({name:O.a.string.isRequired,url:O.a.string.isRequired}).isRequired}).isRequired).isRequired};n(23);var _=function(){return Object(h.jsx)("div",{className:"Loader",children:Object(h.jsx)("div",{className:"Loader__content"})})},v=(n(24),s.a.memo((function(e){var t=e.pokemonId,n=e.onClose,s=Object(c.useState)([]),a=Object(l.a)(s,2),r=a[0],i=a[1];Object(c.useEffect)((function(){d()}),[t]);var d=function(){var e=Object(u.a)(o.a.mark((function e(){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(t);case 2:n=e.sent,c={type:n.types[0].type.name[0].toUpperCase()+n.types[0].type.name.slice(1),name:n.name[0].toUpperCase()+n.name.slice(1),id:String(n.id/100).replace(".",""),attack:n.stats[1].base_stat,defense:n.stats[2].base_stat,hp:n.stats[0].base_stat,spAttack:n.stats[3].base_stat,spDefense:n.stats[4].base_stat,speed:n.stats[5].base_stat,weight:n.weight,totalMoves:n.moves.length},i(c);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"selectedCard",onClick:n,role:"button",onKeyPress:n,tabIndex:"0",children:[Object(h.jsx)("img",{className:"selectedCard__image",src:"https://pokeres.bastionbot.org/images/pokemon/".concat(t,".png"),alt:"pokemon's foto"}),Object(h.jsx)("h2",{className:"selectedCard__name",children:"".concat(r.name," #").concat(r.id)}),Object(h.jsxs)("table",{cellSpacing:"0",className:"selectedCard__description",children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{className:"selectedCard__description--columnL",children:"Type"}),Object(h.jsx)("td",{className:"selectedCard__description--column",children:r.type})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{className:"selectedCard__description--columnL",children:"Attack"}),Object(h.jsx)("td",{className:"selectedCard__description--column",children:r.attack})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{className:"selectedCard__description--columnL",children:"Defense"}),Object(h.jsx)("td",{className:"selectedCard__description--column",children:r.defense})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{className:"selectedCard__description--columnL",children:"HP"}),Object(h.jsx)("td",{className:"selectedCard__description--column",children:r.hp})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{className:"selectedCard__description--columnL",children:"SP attack"}),Object(h.jsx)("td",{className:"selectedCard__description--column",children:r.spAttack})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{className:"selectedCard__description--columnL",children:"SP defense"}),Object(h.jsx)("td",{className:"selectedCard__description--column",children:r.spDefense})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{className:"selectedCard__description--columnL",children:"Speed"}),Object(h.jsx)("td",{className:"selectedCard__description--column",children:r.speed})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{className:"selectedCard__description--columnL",children:"Weight"}),Object(h.jsx)("td",{className:"selectedCard__description--column",children:r.weight})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{className:"selectedCard__description--columnL",children:"Total moves"}),Object(h.jsx)("td",{className:"selectedCard__description--column",children:r.totalMoves})]})]})]})}))),y=function(e){var t=e.pokemonsList,n=e.onLoadButton,s=e.isLoading,a=Object(c.useState)(null),r=Object(l.a)(a,2),i=r[0],o=r[1],d=function(e){o(i!==e?e:null)};return Object(h.jsxs)("div",{className:"cards",children:[i&&Object(h.jsx)(v,{pokemonId:i,onClose:function(){o(null)}}),Object(h.jsx)("div",{className:"cards__list",children:t.map((function(e){return Object(h.jsx)(x,{name:e.name,id:e.id,types:e.type,detCardId:d},e.id)}))}),Object(h.jsx)("button",{className:"cards__button",type:"button",onClick:n,children:s?Object(h.jsx)(_,{}):"Load More"})]})};y.propTyped={pokemonsList:O.a.arrayOf(O.a.object).isRequired,onLoadButton:O.a.func.isRequired,isLoading:O.a.bool.isRequired};n(25);var k=function(e){var t=e.onSelect,n=Object(c.useState)([]),s=Object(l.a)(n,2),a=s[0],r=s[1];Object(c.useEffect)((function(){i()}),[]);var i=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)("select",{className:"select",onChange:t,children:[Object(h.jsx)("option",{value:"all",children:"all"}),a.map((function(e){return Object(h.jsx)("option",{value:e.name,children:e.name},e.url)}))]})};var N=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(0),r=Object(l.a)(a,2),i=r[0],p=r[1],m=Object(c.useState)(!1),b=Object(l.a)(m,2),f=b[0],O=b[1],x=Object(c.useState)("all"),_=Object(l.a)(x,2),v=_[0],N=_[1],C=Object(c.useState)(!1),g=Object(l.a)(C,2),w=g[0],L=g[1];Object(c.useEffect)((function(){S(),O(!0)}),[i]);var S=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(i);case 2:t=e.sent,O(!1),s([].concat(Object(d.a)(n),Object(d.a)(t)));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=Object(c.useMemo)((function(){return"all"===v?n:n.filter((function(e){return e.type.some((function(e){return e.type.name===v}))}))}),[v]);return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{className:"App__title",children:"Pokedex"}),Object(h.jsx)(k,{onSelect:function(e){var t=e.target;L(!0),N(t.value)}}),Object(h.jsxs)("div",{className:"App__main",children:[Object(h.jsx)(y,{pokemonsList:w?q:n,onLoadButton:function(){p(i+1),L(!1)},isLoading:f}),Object(h.jsx)("div",{className:"App__leftFild"})]})]})};r.a.render(Object(h.jsx)(N,{}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.282a0c64.chunk.js.map