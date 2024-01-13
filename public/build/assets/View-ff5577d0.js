import{r as l,j as s,a as f}from"./app-538c0eac.js";import{P as N}from"./PageLayout-89152d1b.js";import{g as w,h as y}from"./index.esm-adafddb4.js";import S from"./Show-09abf0b9.js";import"./ApplicationLogo-51dfdd94.js";import"./iconBase-501bf5e5.js";import"./index.esm-9deedd2b.js";import"./transition-ec6ab584.js";import"./Modal-7b9e9670.js";function B({auth:x,store:c,products:p,categories:i}){const[a,d]=l.useState([]),[b,j]=l.useState(0);l.useEffect(()=>{const e=JSON.parse(localStorage.getItem("cart"))||[];d(e)},[]),l.useEffect(()=>{localStorage.setItem("cart",JSON.stringify(a));const e=a.filter(r=>r.store_id===c.id);j(e.length)},[a]);const g=e=>{const{id:r,store_id:n,price:o}=e;if((a.filter(t=>t.store_id===n)||[]).some(t=>t.id===r)){const t=a.filter(v=>v.id!==r);d(t),alert(`${e.name} removed from the cart!`)}else{const t=[...a,{...e,quantity:1}];d(t)}},[h,C]=l.useState(""),[m,u]=l.useState("");return s.jsxs(N,{user:x.user,store:c,totalForCart:b,children:[s.jsx(f,{title:"Welcome"}),s.jsx("div",{className:"min-h-screen bg-dots-darker bg-center bg-gray-100 selection:bg-gold selection:text-white",children:s.jsxs("div",{className:"max-w-7xl mx-auto p-6 lg:p-8",children:[s.jsxs("div",{className:"flex flex-col gap-2 max-w-7xl p-2 md:p-5 md:mx-9",children:[s.jsx("input",{placeholder:"Search",value:h,onChange:e=>C(e.target.value),className:"w-full outline-none border border-gray-300 rounded-md px-3 py-2"}),i.length&&s.jsxs("select",{value:m,onChange:e=>u(e.target.value),className:"border border-gray-300 rounded-md px-3 py-2",children:[s.jsx("option",{value:"",children:"All Categories"}),i==null?void 0:i.map(e=>s.jsx("option",{value:e.id,children:e.name},e.id))]})]}),s.jsx("div",{className:"mx-auto",children:s.jsx("div",{className:"grid lg:grid-cols-2 xl:grid-cols-3 gap-9 p-2 md:p-5 xl:p-10 md:mx-9 mb-20",children:p.filter(e=>e.name.toLowerCase().includes(h.toLowerCase())&&(m?e.category==m:!0)).map((e,r)=>{var n;return s.jsxs("div",{className:"card card-compact w-full bg-base-100 shadow-xl z-0",children:[s.jsx("figure",{className:"h-64 w-full",children:s.jsx("img",{src:e.image[0].url,alt:e.name,className:"object-cover h-full w-full"})}),s.jsxs("div",{className:"card-body bg-white text-slate-900",children:[s.jsxs("h2",{className:"card-title",children:[e.name,s.jsx("div",{className:"badge badge-secondary bg-gold",children:"NEW"})]}),s.jsxs("p",{className:"",children:[s.jsxs("span",{className:"line-through",children:["₦",e.selling_price]}),s.jsxs("span",{className:"pl-3   ",children:["₦",e.selling_price-e.discount]}),s.jsxs("span",{className:"pl-3",children:["Stock: ",e.quantity]})]}),s.jsxs("div",{className:"card-actions justify-start",children:[s.jsx("div",{className:"badge badge-outline",children:"Products"}),(n=e==null?void 0:e.tag)==null?void 0:n.map(o=>s.jsx("div",{className:"badge badge-outline",children:o.tag},Math.random(0,9999)))]}),s.jsxs("div",{className:"card-actions justify-end",children:[s.jsx(S,{product:e,existingCartItems:a,setExistingCartItems:d,handleAddToCart:g,children:s.jsx("span",{className:"btn btn-primary bg-gold hover:bg-gold/90",children:"Show"})}),s.jsx("button",{className:"btn btn-primary bg-gold/30 hover:bg-gold/50",onClick:()=>g(e),children:a.some(o=>o.id===e.id)?s.jsx(w,{className:"h-5 w-5 text-red-700"}):s.jsx(y,{className:"h-5 w-5 text-blue-700"})})]})]})]},e.id)})})})]})}),s.jsx("style",{children:`
                .bg-dots-darker {
                    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
                }
                @media (prefers-color-scheme: dark) {
                    .dark\\:bg-dots-lighter {
                        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
                    }
                }
            `})]})}export{B as default};
