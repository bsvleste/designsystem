var c=Object.defineProperty;var i=(n,r)=>c(n,"name",{value:r,configurable:!0});import{r as h}from"./index.e2ae53dd.js";import{I as f,r as x}from"./IconBase.esm.1fb064c9.js";import{a as s,F as o,j as e}from"./jsx-runtime.ac08dce0.js";import{c as a,$ as L}from"./clsx.m.e9e24f27.js";var t=new Map;t.set("bold",function(n){return s(o,{children:[e("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),e("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56a0,0,0,0,1,0,0Z",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),e("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),e("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})]})});t.set("duotone",function(n){return s(o,{children:[e("polygon",{points:"224 56 128 144 32 56 224 56",opacity:"0.2"}),e("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),e("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),e("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),e("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});t.set("fill",function(){return e(o,{children:e("path",{d:"M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM98.7,128,40,181.8V74.2Zm11.8,10.9,12.1,11a8,8,0,0,0,10.8,0l12.1-11L203.4,192H52.6ZM157.3,128,216,74.2V181.8Z"})})});t.set("light",function(n){return s(o,{children:[e("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),e("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),e("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),e("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})]})});t.set("thin",function(n){return s(o,{children:[e("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),e("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),e("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),e("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})]})});t.set("regular",function(n){return s(o,{children:[e("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),e("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),e("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),e("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});var y=i(function(r,p){return x(r,p,t)},"renderPath"),d=h.exports.forwardRef(function(n,r){return e(f,{...Object.assign({ref:r},n,{renderPath:y})})});d.displayName="Envelope";const V=d;function k(n){return e("div",{className:a("flex items-center gap-3 py-4 px-3 h-12 rounded w-full bg-gray-900","focus-within:ring-1 ring-cyan-500 "),children:n.children})}i(k,"TextInputRoot");function u({children:n}){return e(L,{className:"w-6 h-6 text-gray-400",children:n})}i(u,"TextInputIcon");function l(n){return e("input",{className:a("bg-transparent flex-1 outline-none text-gray-400 text-sx placeholder:text-gray-700 "),...n})}i(l,"TextInputInput");k.displayName="TextInput.Root";u.displayName="TextInput.Icon";l.displaName="TextInput.Input";const H={Root:k,Input:l,Icon:u};export{V as E,H as T};
//# sourceMappingURL=index.114726ca.js.map
