import{r,W as m,j as e,a as p}from"./app-538c0eac.js";import{A as g}from"./AuthenticatedLayout-d608ad51.js";import{I as h}from"./ImageUpload-28093108.js";import u from"./Color-c0985eb6.js";import j from"./Size-8fc34110.js";import N from"./Tag-d29704b8.js";import f from"./Category-b0eeefb6.js";import"./index.esm-9deedd2b.js";import"./transition-ec6ab584.js";import"./iconBase-501bf5e5.js";import"./index.esm-c5861fed.js";import"./Modal-7b9e9670.js";import"./index.esm-adafddb4.js";function A({store:c,product:s,thumbnails:n,categories:x}){r.useState([]),r.useState([]);const{data:a,setData:i,errors:l,put:d}=m({name:s.name??"",cost_price:s.cost_price??"",selling_price:s.selling_price??"",discount:s.discount??"",quantity:s.quantity??"",color:s.color??"",size:s.size??"",image:s.image??"",category:s.category??"",tag:s.tag??"",description:s.description??"",store_id:s.store_id??c.id}),o=t=>{t.preventDefault(),d(route("product.update",{store:c.username,product:s.id}))};return e.jsxs(g,{children:[e.jsx(p,{title:"Create product"}),e.jsxs("div",{className:"max-w-7xl mx-auto p-6 lg:p-8",children:[e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-9 pt-9",children:e.jsxs("div",{className:"bg-white flex gap-2 p-6 overflow-hidden shadow-sm sm:rounded-lg",children:[e.jsx("div",{className:"text-gray-900",children:"Create product,"}),e.jsx("div",{className:"text-gray-900",children:c.name})]})}),e.jsx("div",{className:"max-w-7xl py-5 sm:px-6 lg:px-9",children:e.jsxs("form",{onSubmit:o,className:"bg-white flex flex-col gap-5 w-full p-2 md:p-5 sm:rounded-lg",children:[e.jsxs("div",{className:"grid lg:grid-cols-2 gap-9",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex flex-col gap-1 w-full",children:[l.image&&e.jsx("p",{className:"text-red-500",children:l.image}),e.jsx("label",{className:"label",children:e.jsx("span",{className:"label-text",children:"Image?"})}),e.jsx("div",{className:"bg-gray-300 h-96 w-full rounded-xl",children:a.image.length?e.jsx("img",{className:"h-full w-full rounded-xl object-cover",src:a.image[0].url,alt:a.image[0].url}):null}),e.jsx("div",{children:e.jsx(h,{thumbnails:n,store:c,image:a.image,setImage:i})})]}),e.jsxs("div",{className:"grid gap-2",children:[e.jsxs("div",{className:"flex flex-col gap-1 w-full",children:[l.color&&e.jsx("p",{className:"text-red-500",children:l.color}),e.jsx("label",{className:"label",children:e.jsx("span",{className:"label-text",children:"Color's?"})}),e.jsx(u,{color:a.color,setColor:i})]}),e.jsxs("div",{className:"flex flex-col gap-1 w-full",children:[l.size&&e.jsx("p",{className:"text-red-500",children:l.size}),e.jsx("label",{className:"label",children:e.jsx("span",{className:"label-text",children:"Size's?"})}),e.jsx(j,{size:a.size,setSize:i})]}),e.jsxs("div",{className:"flex flex-col gap-1 w-full",children:[l.tag&&e.jsx("p",{className:"text-red-500",children:l.tag}),e.jsx("label",{className:"label",children:e.jsx("span",{className:"label-text",children:"Tag's?"})}),e.jsx(N,{tag:a.tag,setTag:i})]}),e.jsx("label",{className:"label",children:e.jsx("span",{className:"label-text",children:"Category?"})}),e.jsx(f,{store:c,categories:x,category:a.category,setCategory:i})]})]}),e.jsxs("div",{className:"grid gap-9",children:[e.jsxs("div",{className:"flex flex-col gap-1 w-full",children:[l.name&&e.jsx("p",{className:"text-red-500",children:l.name}),e.jsx("label",{className:"label",children:e.jsx("span",{className:"label-text",children:"Product name?"})}),e.jsx("input",{value:a.name,onChange:t=>i("name",t.target.value),className:"input bg-slate-200 w-full text-slate-800 border-none outline-none placeholder:text-slate-400",placeholder:"Bag"})]}),e.jsxs("div",{className:"flex flex-col gap-1 w-full",children:[l.cost_price&&e.jsx("p",{className:"text-red-500",children:l.cost_price}),e.jsx("label",{className:"label",children:e.jsx("span",{className:"label-text",children:"Cost price?"})}),e.jsx("input",{value:a.cost_price,onChange:t=>i("cost_price",t.target.value),className:"input bg-slate-200 w-full text-slate-800 border-none outline-none placeholder:text-slate-400",placeholder:"4000"})]}),e.jsxs("div",{className:"flex flex-col gap-1 w-full",children:[l.selling_price&&e.jsx("p",{className:"text-red-500",children:l.selling_price}),e.jsx("label",{className:"label",children:e.jsx("span",{className:"label-text",children:"Selling price?"})}),e.jsx("input",{value:a.selling_price,onChange:t=>i("selling_price",t.target.value),className:"input bg-slate-200 w-full text-slate-800 border-none outline-none placeholder:text-slate-400",placeholder:"5000"})]}),e.jsxs("div",{className:"flex flex-col gap-1 w-full",children:[l.discount&&e.jsx("p",{className:"text-red-500",children:l.discount}),e.jsx("label",{className:"label",children:e.jsx("span",{className:"label-text",children:"Discount?"})}),e.jsx("input",{value:a.discount,onChange:t=>i("discount",t.target.value),className:"input bg-slate-200 w-full text-slate-800 border-none outline-none placeholder:text-slate-400",placeholder:"100"})]}),e.jsxs("div",{className:"flex flex-col gap-1 w-full",children:[l.quantity&&e.jsx("p",{className:"text-red-500",children:l.quantity}),e.jsx("label",{className:"label",children:e.jsx("span",{className:"label-text",children:"Quantity on stock?"})}),e.jsx("input",{value:a.quantity,onChange:t=>i("quantity",t.target.value),className:"input bg-slate-200 w-full text-slate-800 border-none outline-none placeholder:text-slate-400",placeholder:"20"})]}),e.jsxs("div",{className:"flex flex-col gap-1 w-full",children:[l.description&&e.jsx("p",{className:"text-red-500",children:l.description}),e.jsx("label",{className:"label",children:e.jsx("span",{className:"label-text",children:"Description?"})}),e.jsx("textarea",{value:a.description,onChange:t=>i("description",t.target.value),className:"input bg-slate-200 h-56 w-full text-slate-800 border-none outline-none placeholder:text-s4ate-300",placeholder:"General merchandise"})]})]})]}),e.jsx("div",{className:"flex justify-end",children:e.jsx("button",{type:"submit",className:"btn bg-gold text-white",children:"submit"})})]})})]})]})}export{A as default};
