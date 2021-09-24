var e=Object.defineProperty,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,n=(t,r,a)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a;"undefined"!=typeof require&&require;import{R as o,r as c,a as l,j as i,B as s,b as m,u,c as d,F as f,I as p,L as g,S as h,d as y,T as b,H as E,e as x,G as v,m as S,f as C,w,C as P,g as k,h as N,i as j,k as O}from"./vendor.32afea7c.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const I=o.createContext({});function M({children:e}){const[t,r]=c.exports.useState([]),[a,n]=c.exports.useState(),[l,i]=c.exports.useState(1),[s,m]=c.exports.useState("");return o.createElement(I.Provider,{value:{filter:s,setFilter:m,page:l,setPage:i,characters:t,setCharacters:r,requestInfo:a,setRequestInfo:n}},e)}function q(e){const[t,r]=c.exports.useState(!1),[a,n]=c.exports.useState(),{characters:o}=c.exports.useContext(I);return c.exports.useEffect((()=>{if(!e)return;const t=o.find((t=>t.id===Number(e)));t?n(t):(r(!0),function(e){return l.get(`https://rickandmortyapi.com/api/character/${e}`).then((e=>e.data))}(e).then(n).finally((()=>r(!1))))}),[]),{character:a,loading:t}}function L({id:e}){const{character:t}=q(e);return o.createElement("div",null,e,JSON.stringify(t))}function B(){const{page:e,filter:t,characters:r,setCharacters:a,setRequestInfo:n}=c.exports.useContext(I);return c.exports.useEffect((()=>{(function(e,t){return l.get("https://rickandmortyapi.com/api/character",{params:{name:e,page:t}}).then((e=>e.data))})(t,e).then((e=>{a(e.results),n(e.info)})).catch((()=>{a([]),n()}))}),[e,t]),{characters:r}}function F(){const{requestInfo:e,filter:t,setPage:r,setFilter:a}=c.exports.useContext(I);const n=c.exports.useCallback(i((e=>a(e)),500),[]);return{canMoveNext:null==e?void 0:e.next,canMovePrev:null==e?void 0:e.prev,moveNext:function(){r((t=>e.next?t+1:t))},movePrev:function(){r((t=>e.prev?t-1:t))},filter:t,findByName:n}}function T(){const{moveNext:e,movePrev:t,canMoveNext:r,canMovePrev:a}=F();return o.createElement(s,{colorScheme:"primary",spacing:"1",mx:"1"},o.createElement(m,{onClick:t,disabled:!a()},"Prev"),o.createElement(m,{onClick:e,disabled:!r()},"Next"))}function W(e){const c=e,{variant:l,children:i}=c,s=((e,n)=>{var o={};for(var c in e)r.call(e,c)&&n.indexOf(c)<0&&(o[c]=e[c]);if(null!=e&&t)for(var c of t(e))n.indexOf(c)<0&&a.call(e,c)&&(o[c]=e[c]);return o})(c,["variant","children"]),m=u("Card",{variant:l});return o.createElement(d,((e,o)=>{for(var c in o||(o={}))r.call(o,c)&&n(e,c,o[c]);if(t)for(var c of t(o))a.call(o,c)&&n(e,c,o[c]);return e})({__css:m},s),i)}function R(){const{findByName:e,filter:t}=F(),[r,a]=c.exports.useState(t);return c.exports.useEffect((()=>{e(r)}),[r]),o.createElement(W,{boxShadow:"md",my:"2"},o.createElement(f,{m:"3",direction:"row"},o.createElement(p,{placeholder:"Search by name",type:"text",onChange:e=>a(e.target.value),value:r}),o.createElement(T,null)))}function _({character:e}){const[t,r]=c.exports.useState(!1);return o.createElement(o.Fragment,null,o.createElement(g,{href:`/character/${e.id}`},o.createElement(W,{cursor:"pointer"},o.createElement(f,{direction:["row","row","column","column","column"]},o.createElement(h,{alignSelf:"center",size:["100","100","300"],hidden:t}),o.createElement(y,{src:e.image,maxW:["20%","30%","100%"],maxH:"300px",objectFit:"cover",objectPosition:"top",alt:e.name,hidden:!t,onLoad:()=>r(!0)}),o.createElement(d,{p:"2",overflow:"hidden"},o.createElement(b,{label:e.name},o.createElement(E,{as:"h2",size:"lg",isTruncated:!0},e.name)),o.createElement(x,{color:"gray.500",isTruncated:!0},e.status," - ",e.species),o.createElement(b,{label:e.location.name},o.createElement(x,{isTruncated:!0},o.createElement(x,{as:"span",fontWeight:"bold",color:"secondary.500"},"Localtion: "),e.location.name)),o.createElement(b,{label:e.origin.name},o.createElement(x,{isTruncated:!0},o.createElement(x,{as:"span",fontWeight:"bold",color:"secondary.500"},"Origin: "),e.origin.name)))))))}function z(){const{characters:e}=B();return o.createElement(o.Fragment,null,o.createElement(R,null),o.createElement(v,{templateColumns:"repeat(auto-fill, minmax(346px, 1fr))",gap:6,alignItems:"center"},e.map((e=>o.createElement(_,{key:e.id,character:e})))),o.createElement(W,{w:"100%",p:"2",my:"2",display:"flex",justifyContent:"center"},o.createElement(T,null)))}var H=C({styles:{global:e=>({"*, *::before, &::after":{borderColor:"primary.600",wordWrap:"break-word"},body:{bg:S('white url("/img/bg.jpg") repeat fixed center','white url("/img/bg-dark.jpg") repeat fixed center;')(e)}})},colors:{primary:{50:"#d8fff8",100:"#acfff9",200:"#7dfffc",300:"#4dfcff",400:"#27f2fe",500:"#17d2e5",600:"#009eb3",700:"#007a81",800:"#004f4f",900:"#001e1d"},secondary:{50:"#eefbe2",100:"#d9eebf",200:"#c4e19b",300:"#afd575",400:"#9ec94f",500:"#7cb036",600:"#5a8928",700:"#3b621b",800:"#1e3b0d",900:"#051500"}},config:{initialColorMode:"light",useSystemColorMode:!0},components:{Input:{defaultProps:{focusBorderColor:"secondary.600"}},Card:{baseStyle:e=>({borderWidth:"5px",borderColor:"primary.600",borderRadius:"lg",background:S("gray.50","gray.800")(e)})},Button:{defaultProps:{colorScheme:"primary"},variants:{solid:{bg:"primary.600",_hover:{bg:"primary.500"}}}},Tooltip:{baseStyle:{color:"secondary.500"}}}},w({colorScheme:"primary"}));function $(){return o.createElement(P,{theme:H},o.createElement(M,null,o.createElement(k,{maxW:"container.xl"},o.createElement("header",null,o.createElement(y,{margin:"auto",src:"img/logo.png"})),o.createElement(N,{base:"/Rick-Morty"},o.createElement(j,{path:"/",component:z}),o.createElement(j,{path:"/character/:id"},(e=>o.createElement(L,{id:e.id})))))))}O.render(o.createElement(o.StrictMode,null,o.createElement($,null)),document.getElementById("root"));
