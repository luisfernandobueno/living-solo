import { Link } from "react-router-dom";
import { ArrowUpRight, BookOpen, CheckCircle2, Clock3, Compass, Wallet, House, Sparkles } from "lucide-react";
import { chapters } from "../data/chapters";

export default function Home() {
  const completed = JSON.parse(localStorage.getItem("vida-completed") || "[]");
  return <div className="mx-auto max-w-5xl">
    <section className="relative overflow-hidden rounded-[2rem] bg-ink px-7 py-12 text-white sm:px-12 sm:py-16">
      <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full border-[1px] border-white/10"/><div className="absolute -right-4 -top-10 h-56 w-56 rounded-full border-[1px] border-white/10"/>
      <div className="relative max-w-2xl">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[.16em] text-[#c6dfcf]"><Sparkles size={13}/> Tu primera guía de independencia</div>
        <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl">Tu vida propia.<br/><span className="text-[#b9d9c5]">A tu manera.</span></h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-white/65 sm:text-lg">Una guía completa para entender, preparar y vivir tu primera experiencia de independencia. Desde el primer presupuesto hasta aprender a mantener tu casa.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/ruta" className="inline-flex items-center gap-2 rounded-full bg-[#c7e1d0] px-6 py-3.5 text-sm font-extrabold text-ink transition hover:bg-white">Empezar el recorrido <ArrowUpRight size={17}/></Link>
          <Link to="/checklist" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-bold text-white hover:bg-white/10">Ver checklist</Link>
        </div>
      </div>
      <div className="relative mt-12 grid grid-cols-3 gap-3 border-t border-white/10 pt-6 sm:max-w-lg">
        {[["10","capítulos"],["4","herramientas"],["100%","a tu ritmo"]].map(([n,l])=><div key={l}><div className="text-2xl font-extrabold">{n}</div><div className="mt-1 text-xs text-white/50">{l}</div></div>)}
      </div>
    </section>

    <section className="py-12">
      <div className="mb-6 flex items-end justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-forest">El recorrido</p><h2 className="mt-2 text-2xl font-extrabold text-ink sm:text-3xl">De cero a vivir por tu cuenta</h2><p className="mt-2 max-w-xl text-sm leading-6 text-muted">No tenés que leer todo de una vez. Avanzá capítulo por capítulo y volvé cuando lo necesites.</p></div><span className="hidden text-xs font-semibold text-muted sm:block">{completed.length} de 10 completados</span></div>
      <div className="grid gap-3 sm:grid-cols-2">
        {chapters.map(ch => <Link to={`/capitulo/${ch.id}`} key={ch.id} className="group rounded-2xl border border-line bg-white p-5 transition hover:-translate-y-0.5 hover:border-[#b9d2c1] hover:shadow-soft">
          <div className="flex items-start justify-between"><div className="grid h-11 w-11 place-items-center rounded-2xl bg-sage text-forest"><ch.icon size={21}/></div><span className="text-xs font-bold text-muted">{ch.number}</span></div>
          <h3 className="mt-5 text-lg font-extrabold text-ink">{ch.title}</h3><p className="mt-2 min-h-[44px] text-sm leading-6 text-muted">{ch.subtitle}</p>
          <div className="mt-5 flex items-center justify-between border-t border-line pt-4"><span className="flex items-center gap-1.5 text-xs text-muted"><Clock3 size={13}/>{ch.time}</span>{completed.includes(ch.id) ? <span className="flex items-center gap-1 text-xs font-bold text-forest"><CheckCircle2 size={14}/> Completado</span> : <span className="flex items-center gap-1 text-xs font-bold text-forest">Explorar <ArrowUpRight size={14}/></span>}</div>
        </Link>)}
      </div>
    </section>

    <section className="grid gap-4 sm:grid-cols-3">
      {[{icon:Wallet,title:"Calculá tus gastos",desc:"Estimá cuánto necesitás para mudarte y sostener tu hogar.",to:"/herramientas",cta:"Abrir calculadora"},{icon:CheckCircle2,title:"Prepará tu mudanza",desc:"Una lista organizada para no olvidarte de lo importante.",to:"/checklist",cta:"Ver checklist"},{icon:BookOpen,title:"Aprendé el vocabulario",desc:"Entendé los términos que aparecen al alquilar.",to:"/glosario",cta:"Consultar glosario"}].map(x=><Link to={x.to} key={x.title} className="rounded-2xl bg-sage/60 p-5 transition hover:bg-sage"><x.icon className="text-forest" size={22}/><h3 className="mt-4 font-extrabold text-ink">{x.title}</h3><p className="mt-2 text-sm leading-6 text-muted">{x.desc}</p><p className="mt-4 text-xs font-bold text-forest">{x.cta} →</p></Link>)}
    </section>
    <p className="mt-10 text-center text-xs leading-6 text-muted">No existe una edad exacta ni un único camino para independizarse. Esta guía es un punto de partida, no una carrera.</p>
  </div>;
}
