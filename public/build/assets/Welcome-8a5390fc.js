import{r,j as e,a as p}from"./app-e1314db8.js";import{P as C}from"./PageLayout-7b734fb7.js";import{f as u,g as v}from"./index.esm-45b37e5f.js";import w from"./Show-5de41fd0.js";import"./ApplicationLogo-230eb49b.js";import"./iconBase-44d39663.js";import"./index.esm-19e09d73.js";import"./transition-21b4ef59.js";import"./Modal-bafaee80.js";function W({auth:g,products:h}){const[a,i]=r.useState([]),[x,f]=r.useState(0);r.useEffect(()=>{const s=JSON.parse(localStorage.getItem("cart"))||[];i(s)},[]),r.useEffect(()=>{localStorage.setItem("cart",JSON.stringify(a));const s=a.filter(l=>l.store_id===c.id);f(s.length)},[a]);const m=s=>{const{id:l,store_id:n,price:d}=s;if((a.filter(t=>t.store_id===n)||[]).some(t=>t.id===l)){const t=a.filter(j=>j.id!==l);i(t),alert(`${s.name} removed from the cart!`)}else{const t=[...a,{...s,quantity:1}];i(t)}},[o,b]=r.useState(""),c={id:2,username:"mimash-signature"};return e.jsxs(C,{user:g.user,store:c,totalForCart:x,children:[e.jsx(p,{title:"Welcome"}),e.jsx("div",{className:"sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 selection:bg-gold selection:text-white",children:e.jsxs("div",{className:"max-w-7xl mx-auto p-6 lg:p-8",children:[e.jsx("div",{className:"flex max-w-7xl p-2 md:p-5 md:mx-9",children:e.jsx("input",{placeholder:"Search",value:o,onChange:s=>b(s.target.value),className:"w-full outline-none border border-gray-300 rounded-md px-3 py-2"})}),e.jsx("div",{className:"flex justify-center",children:e.jsx("div",{className:"grid lg:grid-cols-2 xl:grid-cols-3 gap-9 p-2 md:p-5 xl:p-10 md:mx-9 mb-20",children:h.filter(s=>s.name.toLowerCase().includes(o.toLowerCase())).map((s,l)=>{var n;return e.jsxs("div",{className:"card card-compact w-full bg-base-100 shadow-xl z-0",children:[e.jsx("figure",{className:"h-64 w-full",children:e.jsx("img",{src:s.image[0].url,alt:s.name,className:"object-cover h-full w-full"})}),e.jsxs("div",{className:"card-body bg-white text-slate-900",children:[e.jsxs("h2",{className:"card-title",children:[s.name,e.jsx("div",{className:"badge badge-secondary bg-gold",children:"NEW"})]}),e.jsxs("p",{className:"",children:[e.jsxs("span",{className:"line-through",children:["₦",s.selling_price]}),e.jsxs("span",{className:"pl-3   ",children:["₦",s.selling_price-s.discount]}),e.jsxs("span",{className:"pl-3",children:["Stock: ",s.quantity]})]}),e.jsxs("div",{className:"card-actions justify-start",children:[e.jsx("div",{className:"badge badge-outline",children:"Products"}),(n=s==null?void 0:s.tag)==null?void 0:n.map(d=>e.jsx("div",{className:"badge badge-outline",children:d.tag},Math.random(0,9999)))]}),e.jsxs("div",{className:"card-actions justify-end",children:[e.jsx(w,{product:s,existingCartItems:a,setExistingCartItems:i,handleAddToCart:m,children:e.jsx("span",{className:"btn btn-primary bg-gold hover:bg-gold/90",children:"Show"})}),e.jsx("button",{className:"btn btn-primary bg-gold/30 hover:bg-gold/50",onClick:()=>m(s),children:a.some(d=>d.id===s.id)?e.jsx(u,{className:"h-5 w-5 text-red-700"}):e.jsx(v,{className:"h-5 w-5 text-blue-700"})})]})]})]},s.id)})})})]})}),e.jsx("style",{children:`
                .bg-dots-darker {
                    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
                }
                @media (prefers-color-scheme: dark) {
                    .dark\\:bg-dots-lighter {
                        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
                    }
                }
            `})]})}export{W as default};
