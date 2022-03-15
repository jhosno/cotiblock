import{j as b,n as a,r as d,R as v,a as E}from"./vendor.2d929333.js";const A=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const l of e.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function i(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(t){if(t.ep)return;t.ep=!0;const e=i(t);fetch(t.href,e)}};A();const n=b.exports.jsx,r=b.exports.jsxs,O=a.label`
  color: aliceblue;
  padding: 0.5rem;
  font-weight: bold;
`,j=a.select`
  padding: 0.5rem;
`,P=a.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem auto;
  width: 100%;
`,S=(o,s)=>{const[i,c]=d.exports.useState("");return[i,()=>r(P,{children:[n(O,{children:o}),r(j,{name:"",id:"",value:i,onChange:e=>c(e.target.value),children:[n("option",{value:"",children:"Selecciona"}),s.map(e=>n("option",{value:e.id,children:e.name},e.id))]})]})]},D=[{id:"USD",name:"D\xF3lar Estado unidense"},{id:"EUR",name:"Euro"},{id:"VES",name:"Bol\xEDvar"},{id:"ARS",name:"Pesos Argentinos"}],h=[{id:"0",signal:"\u274C",color:"#C70039"},{id:"1",signal:"\u2714",color:"#00c733"},{id:"2",signal:"\u26A0",color:"#b8c700"}],I=({type:o,children:s})=>{const i=a.div`
    background-color: ${h[o].color};
    color: ;
    border-radius: 15px;
    padding: 1rem;
    margin-bottom: 1rem;
  `;return r(i,{children:[console.log(h),h[o].signal," ",s]})},L=a.input`
  background-color: #9497ff;
  height: 2rem;
  width: 100%;
  padding: 1rem auto;
  color: aliceblue;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 1.1rem;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  border: none;

  &:hover {
    background-color: #747dfe;
    cursor: pointer;
  }
`,R=({setCurrencies:o})=>{const[s,i]=d.exports.useState([]),[c,t]=d.exports.useState(!1),[e,l]=S("Selecciona tu moneda",D),[u,f]=S("Selecciona tu crypto",s);return d.exports.useEffect(()=>{(async()=>{const C=(await(await fetch("https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD")).json()).Data.map(x=>({id:x.CoinInfo.Name,name:x.CoinInfo.FullName}));i(C)})()},[]),r("form",{onSubmit:p=>{if(p.preventDefault(),[e,u].includes("")){t(!0);return}o({currencyState:e,cryptoState:u}),t(!1)},style:{width:"100%"},children:[n(l,{}),n(f,{}),c?n(I,{type:"0",children:"Todos los campos son obligatorios"}):null,n(L,{type:"submit",value:"enviar"})]})};var k="/assets/bc-side.de035f20.png";a.section`
  display: flex;
  justify-content: center;
`;const N=a.p`
  font-size: 2rem;
  spam {
    font-weight: bold;
  }
`,F=a.h2`
  font-family: "Open Sans", sans-serif;
  color: #9dbddb;
  align-self: center; 
  &::after {
    content: "";
    width: 8rem;
    height: 0.1rem;
    background: indigo;
    display: block;
    margin: 1rem auto;
  }
`,M=({result:o})=>{const{PRICE:s,IMAGEURL:i,FROMSYMBOL:c,TOSYMBOL:t,LOWDAY:e,HIGHDAY:l,LASTUPDATE:u,CHANGEPCT24HOUR:f}=o,m=`https://www.cryptocompare.com${i}`;return r("div",{children:[r(F,{children:["Precio del ",c," en ",t]}),n("img",{src:m,alt:c}),r(N,{children:["Precio actual:",r("spam",{children:[" ",s]})]}),r("div",{children:[r("p",{children:["Precio m\xE1s alto del d\xEDa:",r("spam",{children:[" ",l]})]}),r("p",{children:["Precio m\xE1s bajo del d\xEDa:",r("spam",{children:[" ",e]})]}),r("p",{children:["\xDAltima actualizaci\xF3n del d\xEDa:",r("spam",{children:[" ",u]})]}),r("p",{children:["Cambios de las \xFAltimas 24h:",r("spam",{children:[" ",f]})]})]})]})};const z=()=>n("div",{className:"spinner"}),H=a.h1`
  font-family: "Open Sans", sans-serif;
  color: #9dbddb;
  &::after {
    content: "";
    width: 8rem;
    height: 0.1rem;
    background: indigo;
    display: block;
    margin: 1rem auto;
  }
`,U=a.img`
  max-width: 100%;
  width: 45rem;
  height: auto;
`,B=a.section`
  margin: 0;
  padding: 3rem;
  display: grid;
  grid-template-columns: 45% 55%;
  justify-content: space-around;
  justify-items: center;
  align-content: center;
  height: 82vh;
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    align-content: flex-start;
    columns-grip: 1rem;
    grid-templates-rows: 45% 55%;
  }
`,T=a.div`
  max-width: 50%;
  width: 52vw;
  padding: 2rem;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  align-items: center;
`;function Y(){const[o,s]=d.exports.useState({}),[i,c]=d.exports.useState({}),[t,e]=d.exports.useState(!1),[l,u]=d.exports.useState(!0);return d.exports.useEffect(()=>{Object.keys(o).length>0&&(async()=>{e(!0),u(!1),c({});const{currencyState:m,cryptoState:p}=o,g=`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${p}&tsyms=${m}`,y=await(await fetch(g)).json();c(y.DISPLAY[p][m]),e(!1)})()},[o]),r(B,{className:"App",children:[r(T,{children:[n(H,{children:"Cotiza tus cryptos "}),n(R,{setCurrencies:s})]}),t&&n(z,{}),i.PRICE&&n(M,{result:i}),l&&n(U,{src:k,alt:"Conoce elprecio de tus cryptos a precio real"})]})}v.render(n(E.StrictMode,{children:n(Y,{})}),document.getElementById("root"));
