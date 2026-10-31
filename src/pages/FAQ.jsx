import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs=[
["¿Tengo que estar completamente preparado antes de mudarme?","No. Es normal aprender muchas cosas durante el proceso. Lo importante es tener una base económica realista, entender las obligaciones que asumís y contar con un plan para imprevistos."],
["¿Es mejor vivir solo o con roomies?","Depende de tu presupuesto, necesidad de privacidad, hábitos y disponibilidad de vivienda. Vivir solo suele dar más control; compartir puede reducir costos y aportar compañía, pero exige acuerdos y flexibilidad."],
["¿Cuánto debería ganar para poder alquilar?","No existe una cifra universal. Sumá todos los gastos esenciales, considerá tus ingresos líquidos y dejá margen para ahorro e imprevistos. También verificá los requisitos de ingreso que pueda exigir la garantía."],
["¿Qué garantía de alquiler me conviene en Uruguay?","Depende de tus ingresos, requisitos, costo, plazo y de cuáles acepta el propietario. Consultá directamente con las instituciones o aseguradoras y compará las condiciones vigentes antes de comprometerte."],
["¿Puedo firmar un contrato sin entender alguna cláusula?","Lo recomendable es no hacerlo. Pedí una explicación por escrito y asesoramiento independiente si es necesario. No te apures por presión de tiempo."],
["¿Qué pasa si algo se rompe en la vivienda?","Depende de la causa, el tipo de reparación y lo que establezca el contrato y la normativa aplicable. Documentá el problema, notificá al responsable y no encargues trabajos importantes sin aclarar quién debe autorizarlos y pagarlos."],
["¿Qué debería comprar primero?","Lo necesario para dormir, higienizarte, preparar y conservar comida, limpiar y mantener la vivienda segura. Podés incorporar muebles y decoración de a poco."],
["¿Es normal sentirse solo o arrepentirse al principio?","Puede pasar. Cambiar de entorno y asumir nuevas responsabilidades demanda adaptación. Mantené vínculos, armá rutinas y date tiempo. Si el malestar es persistente o intenso, buscá apoyo."],
["¿Esta guía sustituye asesoramiento legal o financiero?","No. Es material educativo general. Las leyes, contratos, requisitos y precios pueden cambiar. Verificá la información con organismos oficiales, instituciones, profesionales y documentos vigentes."]
];
export default function FAQ(){
 const [active,setActive]=useState(0);
 return <div className="mx-auto max-w-4xl"><p className="text-xs font-bold uppercase tracking-[.18em] text-forest">Dudas habituales</p><h1 className="mt-3 text-4xl font-extrabold text-ink">Preguntas frecuentes.</h1><p className="mt-4 leading-7 text-muted">Respuestas iniciales a algunas de las preguntas que suelen aparecer antes y después de independizarse.</p><div className="mt-8 space-y-3">{faqs.map(([q,a],i)=><section key={q} className="overflow-hidden rounded-2xl border border-line bg-white"><button onClick={()=>setActive(active===i?-1:i)} className="flex w-full items-center justify-between gap-4 p-5 text-left"><span className="font-bold text-ink">{q}</span><ChevronDown size={18} className={`shrink-0 text-muted transition ${active===i?"rotate-180":""}`}/></button>{active===i&&<p className="border-t border-line px-5 pb-5 pt-4 text-sm leading-7 text-muted">{a}</p>}</section>)}</div></div>;
}
