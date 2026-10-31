import { Link } from "react-router-dom";
import { ArrowUpRight, Clock3 } from "lucide-react";
import { chapters } from "../data/chapters";

export default function RoutePage() {
  const done = JSON.parse(localStorage.getItem("vida-completed") || "[]");
  return <div className="mx-auto max-w-4xl">
    <p className="text-xs font-bold uppercase tracking-[.18em] text-forest">La guía completa</p><h1 className="mt-3 text-4xl font-extrabold text-ink">Tu recorrido, paso a paso.</h1><p className="mt-4 max-w-2xl leading-7 text-muted">Cada capítulo aborda una parte de la vida independiente. Podés seguir el orden recomendado o entrar directamente al tema que necesitás resolver.</p>
    <div className="mt-9 space-y-3">{chapters.map((ch,i)=><Link key={ch.id} to={`/capitulo/${ch.id}`} className="group flex gap-4 rounded-2xl border border-line bg-white p-5 transition hover:border-[#b9d2c1] hover:shadow-soft sm:gap-6">
      <div className="flex flex-col items-center"><div className={`grid h-11 w-11 place-items-center rounded-2xl ${done.includes(ch.id) ? "bg-forest text-white" : "bg-sage text-forest"}`}>{done.includes(ch.id) ? "✓" : <ch.icon size={20}/>}</div>{i !== chapters.length-1 && <div className="mt-2 min-h-5 w-px flex-1 bg-line"/>}</div>
      <div className="min-w-0 flex-1"><div className="flex flex-wrap items-center gap-2"><span className="text-[10px] font-bold uppercase tracking-widest text-forest">Etapa {ch.number}</span>{done.includes(ch.id) && <span className="rounded-full bg-sage px-2 py-1 text-[9px] font-bold text-forest">COMPLETADO</span>}</div><h2 className="mt-1 text-lg font-extrabold text-ink">{ch.title}</h2><p className="mt-1 text-sm leading-6 text-muted">{ch.subtitle}</p><span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-muted"><Clock3 size={12}/>{ch.time}</span></div><ArrowUpRight className="mt-1 shrink-0 text-muted transition group-hover:text-forest" size={18}/>
    </Link>)}</div>
  </div>;
}
