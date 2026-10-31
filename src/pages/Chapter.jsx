import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Check, Clock3, ChevronRight } from "lucide-react";
import { chapters } from "../data/chapters";

export default function Chapter() {
  const { id } = useParams();
  const index = chapters.findIndex(c => c.id === id);
  const chapter = chapters[index];
  const [completed, setCompleted] = useState(() => JSON.parse(localStorage.getItem("vida-completed") || "[]"));
  if (!chapter) return <div className="py-20 text-center"><h1 className="text-3xl font-extrabold">Capítulo no encontrado</h1><Link className="mt-4 inline-block text-forest" to="/ruta">Volver a la guía</Link></div>;
  const done = completed.includes(id);
  function toggle() {
    const next = done ? completed.filter(x => x !== id) : [...completed, id];
    localStorage.setItem("vida-completed", JSON.stringify(next)); setCompleted(next);
  }
  const next = chapters[index + 1], prev = chapters[index - 1];
  return <article className="mx-auto max-w-3xl">
    <Link to="/ruta" className="inline-flex items-center gap-2 text-xs font-bold text-muted hover:text-forest"><ArrowLeft size={14}/> Todos los capítulos</Link>
    <div className="mt-8 flex items-center gap-3"><div className="grid h-12 w-12 place-items-center rounded-2xl bg-sage text-forest"><chapter.icon size={23}/></div><div><p className="text-[10px] font-bold uppercase tracking-[.18em] text-forest">Capítulo {chapter.number}</p><p className="mt-1 flex items-center gap-1 text-xs text-muted"><Clock3 size={12}/>{chapter.time} de lectura estimada</p></div></div>
    <h1 className="mt-6 text-4xl font-extrabold leading-tight text-ink sm:text-5xl">{chapter.title}</h1>
    <p className="mt-4 text-lg leading-8 text-muted">{chapter.subtitle}</p>
    <div className="mt-8 rounded-2xl border-l-4 border-forest bg-sage/60 p-5"><p className="text-sm leading-7 text-ink">{chapter.intro}</p></div>
    <div className="prose-copy mt-10 space-y-9">
      {chapter.sections.map((s,i)=><section key={s.title}><div className="mb-3 flex items-start gap-3"><span className="mt-1 text-xs font-bold text-forest">0{i+1}</span><h2 className="text-xl font-extrabold text-ink sm:text-2xl">{s.title}</h2></div>{s.body && <p>{s.body}</p>}{s.bullets && <ul>{s.bullets.map(b=><li key={b}>{b}</li>)}</ul>}</section>)}
    </div>
    <div className="mt-10 rounded-2xl bg-ink p-6 text-white"><p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#b9d9c5]">Para recordar</p><p className="mt-3 text-lg font-semibold leading-7">{chapter.takeaway}</p></div>
    <button onClick={toggle} className={`mt-6 flex w-full items-center justify-center gap-2 rounded-full px-5 py-4 text-sm font-extrabold transition ${done ? "border border-forest bg-white text-forest" : "bg-forest text-white hover:bg-[#193f33]"}`}>{done ? <><Check size={17}/> Capítulo completado — desmarcar</> : <><Check size={17}/> Marcar capítulo como completado</>}</button>
    <div className="mt-8 grid grid-cols-2 gap-3 border-t border-line pt-6">
      {prev ? <Link to={`/capitulo/${prev.id}`} className="rounded-xl border border-line p-4 hover:bg-white"><span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-muted"><ArrowLeft size={12}/> Anterior</span><span className="mt-2 block text-sm font-bold text-ink">{prev.title}</span></Link> : <div/>}
      {next ? <Link to={`/capitulo/${next.id}`} className="rounded-xl bg-sage p-4 text-right hover:bg-[#d0e2d5]"><span className="flex items-center justify-end gap-1 text-[10px] font-bold uppercase tracking-wider text-forest">Siguiente <ArrowRight size={12}/></span><span className="mt-2 block text-sm font-bold text-ink">{next.title}</span></Link> : <Link to="/checklist" className="rounded-xl bg-sage p-4 text-right"><span className="text-[10px] font-bold uppercase tracking-wider text-forest">Siguiente paso</span><span className="mt-2 block text-sm font-bold text-ink">Tu checklist <ChevronRight className="inline" size={14}/></span></Link>}
    </div>
  </article>;
}
