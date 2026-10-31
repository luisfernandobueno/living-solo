import { useState } from "react";
import { NavLink, Link, Outlet, useLocation } from "react-router-dom";
import { Menu, X, House, BookOpen, ClipboardCheck, Wrench, ChevronRight } from "lucide-react";
import { chapters } from "../data/chapters";

const mainLinks = [
  { to: "/", label: "Inicio", icon: House },
  { to: "/ruta", label: "La guía", icon: BookOpen },
  { to: "/checklist", label: "Mi checklist", icon: ClipboardCheck },
  { to: "/herramientas", label: "Herramientas", icon: Wrench }
];

export function Layout() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const completed = JSON.parse(localStorage.getItem("vida-completed") || "[]");
  const close = () => setOpen(false);

  return (
    <div className="min-h-screen bg-paper">
      <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
        <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-5 lg:px-8">
          <Link to="/" onClick={close} className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-forest text-white"><House size={20}/></div>
            <div><div className="font-extrabold tracking-tight text-ink">vida propia<span className="text-forest">.</span></div><div className="text-[10px] font-semibold uppercase tracking-[.18em] text-muted">Guía de independencia</div></div>
          </Link>
          <nav className="hidden items-center gap-1 md:flex">
            {mainLinks.map(item => <NavLink key={item.to} to={item.to} className={({isActive}) => `rounded-full px-4 py-2 text-sm font-semibold transition ${isActive ? "bg-sage text-forest" : "text-muted hover:bg-white hover:text-ink"}`}>{item.label}</NavLink>)}
          </nav>
          <button onClick={() => setOpen(!open)} className="rounded-xl border border-line p-2 text-ink md:hidden" aria-label="Abrir menú">{open ? <X/> : <Menu/>}</button>
        </div>
        {open && <div className="border-t border-line bg-white px-5 py-3 md:hidden">{mainLinks.map(item => <NavLink onClick={close} key={item.to} to={item.to} className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-ink hover:bg-sage"><item.icon size={17}/>{item.label}</NavLink>)}</div>}
      </header>

      <div className="mx-auto grid max-w-[1400px] grid-cols-1 lg:grid-cols-[250px_minmax(0,1fr)]">
        <aside className="hidden border-r border-line px-5 py-8 lg:block">
          <div className="sticky top-24">
            <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[.2em] text-muted">Tu recorrido</p>
            <div className="space-y-1">
              {chapters.map(ch => <NavLink key={ch.id} to={`/capitulo/${ch.id}`} className={({isActive}) => `group flex items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] transition ${isActive ? "bg-sage font-bold text-forest" : "text-muted hover:bg-white hover:text-ink"}`}>
                <span className="w-5 text-[10px] font-bold opacity-60">{ch.number}</span><span className="min-w-0 flex-1 truncate">{ch.title}</span>{completed.includes(ch.id) && <span className="h-1.5 w-1.5 rounded-full bg-forest"/>}
              </NavLink>)}
            </div>
            <div className="mt-8 rounded-2xl bg-ink p-4 text-white">
              <p className="text-xs font-bold text-white/60">TU PROGRESO</p>
              <div className="mt-2 flex items-end justify-between"><span className="text-2xl font-extrabold">{Math.round(completed.length / chapters.length * 100)}%</span><span className="text-xs text-white/60">{completed.length}/{chapters.length} capítulos</span></div>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/15"><div className="h-full rounded-full bg-[#b7d8c4]" style={{width: `${completed.length / chapters.length * 100}%`}}/></div>
              <Link to="/checklist" className="mt-4 flex items-center justify-between text-xs font-bold text-[#cce4d4]">Ver mi recorrido <ChevronRight size={15}/></Link>
            </div>
            <div className="mt-6 space-y-2 border-t border-line pt-5">
              <NavLink to="/glosario" className="block px-3 py-2 text-xs font-semibold text-muted hover:text-forest">Glosario de términos</NavLink>
              <NavLink to="/preguntas" className="block px-3 py-2 text-xs font-semibold text-muted hover:text-forest">Preguntas frecuentes</NavLink>
            </div>
          </div>
        </aside>
        <main className="min-w-0 px-5 py-8 sm:px-8 lg:px-12 lg:py-12"><Outlet/></main>
      </div>
      <footer className="border-t border-line bg-white">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-3 px-5 py-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p><strong className="text-ink">vida propia.</strong> Aprender a vivir por tu cuenta, paso a paso.</p>
          <p>Contenido educativo. Verificá siempre la normativa y las condiciones vigentes.</p>
        </div>
      </footer>
    </div>
  );
}
