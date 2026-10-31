import { useState } from "react";
import { Search } from "lucide-react";
import { glossary } from "../data/glossary";

export default function Glossary(){
  const [q,setQ]=useState("");
  const filtered=glossary.filter(([term,desc])=>(term+" "+desc).toLowerCase().includes(q.toLowerCase()));
  return <div className="mx-auto max-w-4xl"><p className="text-xs font-bold uppercase tracking-[.18em] text-forest">Diccionario práctico</p><h1 className="mt-3 text-4xl font-extrabold text-ink">Glosario para independizarte.</h1><p className="mt-4 leading-7 text-muted">Términos que podés encontrar al buscar vivienda, firmar un contrato o administrar tu hogar.</p><div className="mt-7 flex items-center gap-3 rounded-xl border border-line bg-white px-4"><Search className="text-muted" size={18}/><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Buscar un término..." className="w-full bg-transparent py-4 text-sm outline-none"/></div><div className="mt-6 divide-y divide-line rounded-2xl border border-line bg-white px-5">{filtered.map(([term,desc])=><div key={term} className="py-5 sm:flex sm:gap-8"><h2 className="w-48 shrink-0 font-extrabold text-ink">{term}</h2><p className="mt-1 text-sm leading-6 text-muted sm:mt-0">{desc}</p></div>)}{filtered.length===0&&<p className="py-8 text-center text-sm text-muted">No encontramos ese término.</p>}</div></div>;
}
