import { useState } from "react";
import { RotateCcw, CheckCircle2 } from "lucide-react";

const groups = [
  { title:"Antes de buscar", items:["Definí por qué quiero mudarme y qué espero de la experiencia.","Calculé mis ingresos líquidos y gastos actuales.","Estimé cuánto puedo destinar a vivienda sin comprometer lo esencial.","Empecé un fondo para gastos iniciales e imprevistos.","Definí zonas, tiempos de traslado y necesidades básicas."] },
  { title:"Al evaluar una vivienda", items:["Comparé el costo total, no solo el alquiler.","Visité el inmueble y revisé humedad, agua, electricidad y cerraduras.","Consulté gastos comunes, servicios y reglas del edificio.","Verifiqué la identidad y autoridad de quien alquila.","Pregunté por garantía, plazo, reajustes y condiciones."] },
  { title:"Antes de firmar", items:["Leí el contrato completo y sus anexos.","Entendí garantía, gastos, vencimientos y ajustes.","Aclaré por escrito las dudas y condiciones especiales.","Revisé cómo se termina el contrato y se entregan las llaves.","Guardé copia firmada y comprobantes."] },
  { title:"Antes de mudarme", items:["Coordiné flete, fecha, acceso y llaves.","Medí los muebles y accesos importantes.","Contraté o coordiné los servicios necesarios.","Preparé documentos, medicación y objetos importantes.","Compré lo básico para dormir, comer, higienizarme y limpiar."] },
  { title:"Al llegar", items:["Registré el estado del inmueble con fotos y notas.","Localicé tablero eléctrico y llaves de paso.","Probé agua, electricidad y servicios.","Guardé contactos de emergencia y responsables.","Organicé vencimientos y pagos mensuales."] },
  { title:"Durante los primeros meses", items:["Comparé gastos reales con mi presupuesto.","Establecí una rutina de limpieza y compras.","Separé ahorro para emergencias.","Revisé qué muebles o elementos realmente necesito.","Mantuve contacto con mi red de apoyo."] }
];

export default function Checklist() {
  const [checked,setChecked] = useState(()=>JSON.parse(localStorage.getItem("vida-checks")||"[]"));
  const all = groups.flatMap(g=>g.items);
  const count = checked.length;
  function toggle(item){const next=checked.includes(item)?checked.filter(x=>x!==item):[...checked,item];setChecked(next);localStorage.setItem("vida-checks",JSON.stringify(next));}
  function reset(){setChecked([]);localStorage.removeItem("vida-checks");}
  return <div className="mx-auto max-w-4xl">
    <p className="text-xs font-bold uppercase tracking-[.18em] text-forest">Tu espacio de planificación</p><h1 className="mt-3 text-4xl font-extrabold text-ink">Checklist de independencia</h1><p className="mt-4 max-w-2xl leading-7 text-muted">Marcá cada tarea a medida que la completes. Tu progreso queda guardado en este navegador.</p>
    <div className="mt-8 rounded-2xl bg-ink p-6 text-white"><div className="flex items-end justify-between"><div><p className="text-xs font-bold text-white/60">PROGRESO GENERAL</p><p className="mt-1 text-3xl font-extrabold">{Math.round(count/all.length*100)}%</p></div><p className="text-sm text-white/60">{count} de {all.length} tareas</p></div><div className="mt-4 h-2 overflow-hidden rounded-full bg-white/15"><div className="h-full rounded-full bg-[#b9d9c5] transition-all" style={{width:`${count/all.length*100}%`}}/></div></div>
    <div className="mt-7 space-y-5">{groups.map((g,i)=>{const n=g.items.filter(x=>checked.includes(x)).length;return <section key={g.title} className="rounded-2xl border border-line bg-white p-5 sm:p-6"><div className="mb-4 flex items-center justify-between"><div><p className="text-[10px] font-bold uppercase tracking-widest text-forest">ETAPA 0{i+1}</p><h2 className="mt-1 text-xl font-extrabold text-ink">{g.title}</h2></div><span className="text-xs font-semibold text-muted">{n}/{g.items.length}</span></div><div className="space-y-1">{g.items.map(item=><label key={item} className="flex cursor-pointer items-start gap-3 rounded-xl px-2 py-3 hover:bg-paper"><input type="checkbox" checked={checked.includes(item)} onChange={()=>toggle(item)} className="mt-1 h-4 w-4 accent-[#245747]"/><span className={`text-sm leading-6 ${checked.includes(item)?"text-muted line-through":"text-ink"}`}>{item}</span></label>)}</div></section>})}</div>
    <div className="mt-6 flex flex-wrap items-center justify-between gap-3"><p className="flex items-center gap-2 text-xs text-muted"><CheckCircle2 size={15}/> Tus tareas se guardan automáticamente.</p><button onClick={reset} className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2.5 text-xs font-bold text-muted hover:bg-white"><RotateCcw size={13}/> Reiniciar checklist</button></div>
  </div>;
}
