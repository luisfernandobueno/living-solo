import {
  Compass, Wallet, Search, FileText, Truck, CookingPot,
  Users, ShieldCheck, HeartHandshake, CalendarCheck
} from "lucide-react";

export const chapters = [
  {
    id: "mentalidad",
    number: "01",
    title: "Entender la independencia",
    subtitle: "Antes de buscar un apartamento, entendé qué significa realmente vivir por tu cuenta.",
    icon: Compass,
    time: "15 min",
    intro: "Independizarte no es solamente mudarte. Es pasar a gestionar tu propio espacio, tiempo, dinero y bienestar. Puede ser una experiencia muy liberadora, pero también exige aprender habilidades que quizás antes resolvía otra persona.",
    sections: [
      { title: "Qué cambia cuando vivís por tu cuenta", body: "Las decisiones cotidianas pasan a depender de vos: qué comés, cuándo limpiás, cómo organizás tus horarios, cuándo pagás las cuentas y qué hacés cuando algo se rompe. La libertad aumenta, pero también la responsabilidad." },
      { title: "Ventajas posibles", bullets: ["Más autonomía para organizar tus días y tus espacios.", "Privacidad y libertad para establecer tus propias rutinas.", "Aprender habilidades prácticas y ganar confianza.", "Construir un hogar que refleje tus gustos y necesidades.", "Tomar decisiones sin negociar cada detalle con otras personas."] },
      { title: "Desafíos y desventajas", bullets: ["Todos los gastos y tareas requieren planificación.", "Puede aparecer soledad, especialmente al principio.", "Los imprevistos económicos recaen sobre vos.", "Hay menos ayuda inmediata para tareas, trámites o reparaciones.", "La convivencia con roomies también puede traer conflictos."] },
      { title: "Independencia no significa hacerlo todo solo", body: "Pedir ayuda, compartir gastos, vivir con compañeros o mantener vínculos cercanos no te hace menos independiente. La autonomía consiste en poder tomar decisiones y responsabilizarte por ellas, no en aislarte." },
      { title: "Señales de preparación", bullets: ["Tenés una fuente de ingresos razonablemente previsible.", "Podés estimar tus gastos mensuales y reconocer tus límites.", "Estás dispuesto a ocuparte de la limpieza, comida y administración.", "Tenés un plan para emergencias y cambios de ingresos.", "La decisión responde a una necesidad o proyecto propio, no solamente a presión externa."] }
    ],
    takeaway: "No necesitás saber hacerlo todo antes de mudarte. Sí necesitás estar dispuesto a aprender, planificar y pedir ayuda cuando haga falta."
  },
  {
    id: "finanzas",
    number: "02",
    title: "Preparar tus finanzas",
    subtitle: "Calculá cuánto cuesta independizarte y cuánto necesitás para sostenerlo.",
    icon: Wallet,
    time: "25 min",
    intro: "El alquiler es solo una parte del costo de vivir por tu cuenta. Para evaluar si una mudanza es viable, tenés que considerar los gastos iniciales, los gastos mensuales y un margen para imprevistos.",
    sections: [
      { title: "Ingresos reales y estabilidad", body: "Partí de tu ingreso líquido: lo que efectivamente recibís después de descuentos. Si tus ingresos varían, calculá un promedio conservador y armá el presupuesto con un mes flojo, no con el mejor mes." },
      { title: "Gastos iniciales", bullets: ["Garantía, depósito o costos asociados a la garantía elegida.", "Primer alquiler y posibles gastos de contratación.", "Mudanza, flete o transporte.", "Muebles, colchón, ropa de cama y elementos de cocina.", "Conexión o instalación de internet y servicios.", "Productos de limpieza y alimentos para empezar.", "Pequeñas compras que aparecen al ocupar el lugar."] },
      { title: "Gastos mensuales", bullets: ["Alquiler y gastos comunes, si corresponden.", "Electricidad, agua, gas y saneamiento según el inmueble.", "Internet y teléfono.", "Comida, higiene y limpieza.", "Transporte, salud y medicamentos.", "Suscripciones, ocio y gastos personales.", "Ahorro para mantenimiento e imprevistos."] },
      { title: "El fondo de emergencia", body: "Intentá construir un ahorro separado del dinero destinado al alquiler y a las compras cotidianas. Como objetivo orientativo, muchas personas buscan reunir entre tres y seis meses de gastos esenciales, pero podés empezar con una meta más pequeña y alcanzable." },
      { title: "Errores frecuentes", bullets: ["Calcular el presupuesto usando solamente el precio del alquiler.", "Olvidar gastos comunes, consumos o costos de garantía.", "Comprar todos los muebles nuevos antes de conocer tus necesidades.", "Comprometer casi todo el ingreso en gastos fijos.", "No prever reparaciones, salud o meses con menos ingresos."] }
    ],
    takeaway: "Si el presupuesto solo funciona cuando no ocurre absolutamente ningún imprevisto, todavía no es un presupuesto seguro."
  },
  {
    id: "vivienda",
    number: "03",
    title: "Buscar y elegir vivienda",
    subtitle: "Aprendé a comparar propiedades más allá de las fotos y del precio publicado.",
    icon: Search,
    time: "30 min",
    intro: "La vivienda adecuada no es necesariamente la más linda ni la más barata. Es la que se ajusta a tu presupuesto, ubicación, necesidades, seguridad y forma de vida.",
    sections: [
      { title: "Definí tus prioridades", bullets: ["Distancia al trabajo, estudio, transporte y comercios.", "Presupuesto total, incluyendo gastos comunes y consumos.", "Tamaño, ventilación, luz natural y distribución.", "Ruido, privacidad y características del barrio.", "Accesibilidad, humedad, calefacción y estado general.", "Reglas sobre mascotas, visitas y uso de espacios comunes."] },
      { title: "Dónde buscar", body: "Podés comparar inmobiliarias, portales de alquiler, avisos de particulares y redes de contacto. Verificá quién publica, quién administra la propiedad y quién tiene autoridad para alquilarla. Desconfiá de la presión para transferir dinero antes de verificar el inmueble y las condiciones." },
      { title: "Cómo visitar una propiedad", bullets: ["Abrí canillas y comprobá presión y desagües.", "Buscá humedad, manchas, olor a encierro y filtraciones.", "Probá puertas, ventanas, cerraduras y persianas.", "Revisá enchufes visibles y el estado del tablero sin manipularlo.", "Preguntá por gastos comunes, servicios, calefacción y conexiones.", "Visitá la zona en distintos horarios si podés.", "Sacá fotos y anotá desperfectos con autorización."] },
      { title: "Preguntas para quien alquila", bullets: ["¿Cuál es el costo mensual total estimado?", "¿Qué garantía se acepta y qué requisitos tiene?", "¿Qué gastos se pagan al entrar?", "¿Quién se ocupa de reparaciones y mantenimiento?", "¿Qué servicios están instalados y cuáles hay que contratar?", "¿Hay reglamento de copropiedad o normas del edificio?", "¿Cuándo estaría disponible y cuál es el plazo del contrato?"] },
      { title: "Alertas", body: "No envíes señas ni documentación sensible sin verificar la identidad de la contraparte, la propiedad y las condiciones por escrito. Una oferta extraordinariamente barata, la urgencia artificial o la negativa a mostrar el lugar merecen cautela." }
    ],
    takeaway: "Visitá con una lista. La emoción de encontrar un lugar puede hacer que pases por alto problemas que después cuestan dinero."
  },
  {
    id: "contratos",
    number: "04",
    title: "Contratos y garantías",
    subtitle: "Entendé qué estás aceptando antes de firmar o entregar dinero.",
    icon: FileText,
    time: "35 min",
    intro: "Un contrato establece derechos, obligaciones, plazos y consecuencias. No firmes algo que no entendés ni confíes únicamente en explicaciones verbales: pedí el documento completo y tiempo para revisarlo.",
    sections: [
      { title: "Qué revisar en un contrato", bullets: ["Identidad de las partes y dirección exacta del inmueble.", "Destino del inmueble y personas autorizadas a ocuparlo.", "Plazo, fecha de inicio y condiciones de renovación.", "Precio, moneda, vencimiento y mecanismo de ajuste.", "Gastos comunes, tributos, consumos y otros cargos.", "Garantía exigida y condiciones para su liberación.", "Responsabilidades por reparaciones y mantenimiento.", "Condiciones de rescisión, entrega y devolución de llaves.", "Inventario, estado inicial y anexos que forman parte del acuerdo."] },
      { title: "Garantías de alquiler en Uruguay", body: "En Uruguay pueden existir distintas modalidades, como garantías estatales, de ANDA, aseguradoras o depósitos, según el tipo de arrendamiento y la aceptación del propietario. Cada alternativa tiene requisitos, costos, topes y procedimientos propios. Consultá directamente con la institución y confirmá que la garantía sea aceptada para ese inmueble." },
      { title: "Antes de firmar", bullets: ["Leé todas las páginas, anexos y reglamentos mencionados.", "Pedí aclaración escrita de cualquier cláusula ambigua.", "Verificá cómo se calcula y cuándo se actualiza el alquiler.", "Confirmá qué conceptos están incluidos y cuáles se pagan aparte.", "No aceptes compromisos que no puedas cumplir.", "Guardá una copia firmada y comprobantes de pagos."] },
      { title: "Inventario y estado de entrega", body: "Documentá el estado del inmueble al entrar: paredes, pisos, sanitarios, artefactos, llaves, medidores y desperfectos. Usá fotos o video fechados y compartilos por un medio que deje constancia. Esto puede evitar desacuerdos al finalizar el contrato." },
      { title: "Al terminar el alquiler", body: "Revisá el procedimiento de aviso, plazos, inspección, entrega de llaves, deudas pendientes y devolución de garantía. No supongas que alcanza con dejar el inmueble vacío: seguí el mecanismo previsto en el contrato y buscá asesoramiento si hay un conflicto." }
    ],
    takeaway: "Las condiciones importantes deben estar claras y por escrito. Si algo no se entiende, pausá la firma y consultá a un profesional o institución competente."
  },
  {
    id: "mudanza",
    number: "05",
    title: "Organizar la mudanza",
    subtitle: "Pasá de tener un lugar disponible a convertirlo en un hogar funcional.",
    icon: Truck,
    time: "20 min",
    intro: "No hace falta comprar todo el primer día. Priorizá lo que necesitás para dormir, comer, higienizarte y mantener el espacio seguro. El resto puede incorporarse gradualmente.",
    sections: [
      { title: "Lo imprescindible para empezar", bullets: ["Colchón, almohada, sábanas y abrigo de cama.", "Toalla, jabón, papel higiénico y artículos de higiene.", "Platos, vasos, cubiertos, olla y sartén básicos.", "Heladera y sistema seguro para conservar alimentos.", "Elementos de limpieza y bolsas de residuos.", "Iluminación, cortinas o elementos básicos de privacidad.", "Botiquín básico, linterna y cargadores."] },
      { title: "Antes del día de mudanza", bullets: ["Confirmá fecha, horario, acceso y ascensor si corresponde.", "Medí puertas, pasillos y espacios para muebles grandes.", "Coordiná flete y ayudantes.", "Separá documentos, medicamentos y objetos valiosos.", "Etiquetá cajas por habitación y prioridad.", "Registrá lecturas de medidores cuando corresponda.", "Acordá cómo recibir llaves y dejar constancia del estado."] },
      { title: "Qué comprar primero y qué puede esperar", body: "Primero resolvé descanso, higiene, alimentación, limpieza y seguridad. Decoración, televisores, muebles auxiliares y electrodomésticos secundarios pueden esperar. Considerá segunda mano, préstamos temporales y compras compartidas, revisando siempre el estado y la seguridad." },
      { title: "Primeras 48 horas", bullets: ["Ubicá llaves de paso, tablero eléctrico y medidores.", "Probá agua caliente, iluminación y electrodomésticos.", "Conocé salidas, accesos y contactos de emergencia.", "Desempacá lo necesario para dormir y cocinar algo simple.", "Anotá desperfectos y comunicá los relevantes por escrito."] }
    ],
    takeaway: "Un hogar funcional se construye por etapas. No te endeudes para que el apartamento parezca terminado desde el primer día."
  },
  {
    id: "vida-diaria",
    number: "06",
    title: "Manejar la vida diaria",
    subtitle: "Las habilidades pequeñas que hacen que una casa funcione.",
    icon: CookingPot,
    time: "35 min",
    intro: "La independencia se sostiene con sistemas simples. No necesitás ser experto en cocina ni limpieza: necesitás conocer lo básico y repetir hábitos que eviten que las tareas se acumulen.",
    sections: [
      { title: "Cocina y alimentación", bullets: ["Aprendé algunas comidas económicas, nutritivas y fáciles.", "Planificá comidas antes de comprar para reducir desperdicio.", "Entendé fechas de vencimiento y conservación segura.", "Separá alimentos crudos de los listos para consumir.", "Limpiá superficies y utensilios después de cocinar.", "Tené opciones rápidas para días de poco tiempo o energía."] },
      { title: "Limpieza básica", bullets: ["Cocina: mesadas, hornallas, pileta y residuos.", "Baño: inodoro, ducha, lavatorio y ventilación.", "Pisos: barrer o aspirar y limpiar según el material.", "Ropa: separar colores y tejidos, revisar etiquetas y secar bien.", "Heladera: revisar alimentos y limpiar derrames.", "Ventilar y controlar humedad para prevenir moho."] },
      { title: "Lavado de ropa", body: "Separá prendas por color y tipo de tejido, revisá etiquetas, no sobrecargues el lavarropas y usá la dosis indicada de detergente. Limpiá el filtro cuando corresponda y dejá secar bien la ropa para evitar olor y humedad." },
      { title: "Compras y despensa", body: "Mantené una lista de básicos y revisá lo que ya tenés antes de ir al supermercado. Compará precio por unidad o kilogramo, no solamente el precio del paquete. Evitá comprar grandes cantidades de productos perecederos si no sabés si vas a consumirlos." },
      { title: "Administración del hogar", bullets: ["Registrá vencimientos de alquiler, servicios y cuentas.", "Guardá facturas, garantías y manuales.", "Anotá tareas de mantenimiento y fechas de revisión.", "Tené contactos de administración, propietario y técnicos confiables.", "Revisá semanalmente el presupuesto y la despensa."] }
    ],
    takeaway: "La constancia le gana a las grandes limpiezas ocasionales. Una rutina pequeña evita que el hogar se vuelva abrumador."
  },
  {
    id: "roomies",
    number: "07",
    title: "Vivir con roomies",
    subtitle: "Compartir vivienda puede reducir costos, pero requiere acuerdos explícitos.",
    icon: Users,
    time: "25 min",
    intro: "Vivir con otras personas no es simplemente dividir el alquiler. También compartís espacios, horarios, hábitos y responsabilidades. La compatibilidad cotidiana importa tanto como el precio.",
    sections: [
      { title: "Ventajas y desventajas", bullets: ["Ventajas: repartir alquiler y servicios, compañía, dividir tareas y acceder a una mejor ubicación o vivienda.", "Desventajas: menos privacidad, diferencias de hábitos, conflictos por limpieza, visitas, ruido y pagos.", "La convivencia puede ser económica y agradable cuando las expectativas están claras."] },
      { title: "Qué conversar antes de mudarse", bullets: ["Cómo se divide alquiler, gastos comunes, servicios y compras.", "Qué pasa si alguien paga tarde o pierde sus ingresos.", "Cómo se organizan limpieza y tareas compartidas.", "Reglas sobre visitas, parejas, fiestas y horarios de descanso.", "Uso de heladera, cocina, baño y espacios de guardado.", "Mascotas, fumar, teletrabajo y privacidad.", "Qué ocurre si alguien quiere irse o sumar a otra persona."] },
      { title: "Acuerdo de convivencia", body: "Aunque exista un contrato de alquiler, conviene tener un acuerdo práctico entre convivientes. Dejen por escrito los montos, fechas, tareas, normas y procedimiento para resolver desacuerdos. Aclaren también quién figura en el contrato y qué responsabilidad asume cada persona." },
      { title: "Cómo elegir compañeros", body: "Hablá de hábitos concretos, no solamente de gustos. Preguntá por horarios, limpieza, descanso, visitas, consumo de alcohol o tabaco, mascotas y forma de manejar el dinero. Una conversación incómoda antes de mudarse puede evitar un conflicto grande después." },
      { title: "Señales de alerta", bullets: ["Una persona evita hablar de pagos o responsabilidades.", "Se espera que alguien haga tareas sin acuerdo.", "No hay claridad sobre quién está autorizado a vivir allí.", "Se minimizan problemas de seguridad o límites personales.", "Una persona controla, intimida o no respeta la privacidad de las demás."] }
    ],
    takeaway: "No confíes en que 'después nos arreglamos'. Los acuerdos funcionan mejor cuando se conversan antes de que aparezca el problema."
  },
  {
    id: "seguridad",
    number: "08",
    title: "Seguridad y emergencias",
    subtitle: "Prepará respuestas para los problemas que no avisan.",
    icon: ShieldCheck,
    time: "25 min",
    intro: "La prevención no elimina todos los riesgos, pero reduce la posibilidad de que un problema pequeño se convierta en una emergencia. Conocé tu vivienda y prepará contactos y procedimientos.",
    sections: [
      { title: "Seguridad cotidiana", bullets: ["Cerrá puertas y ventanas al salir y antes de dormir.", "No compartas llaves ni códigos de acceso sin confianza.", "Verificá quién solicita entrar a tu vivienda.", "Mantené pasillos y salidas despejados.", "No publiques en tiempo real que la vivienda está vacía.", "Conocé las reglas de seguridad del edificio o complejo."] },
      { title: "Electricidad, gas y agua", body: "Identificá el tablero eléctrico y las llaves de paso. No manipules instalaciones que no conocés, no sobrecargues enchufes y no uses equipos dañados. Ante olor a gas, salí del lugar, evitá accionar interruptores o generar chispas y contactá al servicio de emergencia correspondiente desde un lugar seguro." },
      { title: "Kit básico", bullets: ["Linterna y pilas o batería cargada.", "Botiquín con elementos básicos y medicamentos personales.", "Agua potable y alimentos no perecederos para una contingencia.", "Cargador portátil.", "Copias accesibles de documentos y contactos importantes.", "Extintor adecuado si corresponde y sabés utilizarlo."] },
      { title: "Si ocurre una avería", body: "Priorizá la seguridad de las personas. Si hay riesgo eléctrico, incendio, fuga de gas o inundación importante, alejate y llamá a los servicios de emergencia. Para problemas no urgentes, documentá el daño y notificá al responsable según el contrato." },
      { title: "Red de apoyo", body: "Tené al menos una persona de confianza que sepa cómo contactarte y a quién llamar si no respondés. Compartí información necesaria sin exponer innecesariamente tu privacidad." }
    ],
    takeaway: "No esperes a una emergencia para averiguar dónde está la llave de paso o a quién tenés que llamar."
  },
  {
    id: "bienestar",
    number: "09",
    title: "Bienestar y adaptación",
    subtitle: "La parte emocional de vivir por tu cuenta también necesita atención.",
    icon: HeartHandshake,
    time: "20 min",
    intro: "La mudanza puede traer entusiasmo, alivio, miedo, cansancio o soledad, a veces todo en la misma semana. Adaptarte lleva tiempo y no existe una única forma correcta de vivir independientemente.",
    sections: [
      { title: "La soledad y el cambio de rutina", body: "Al principio puede sentirse extraño volver a una casa silenciosa o tener que organizar cada actividad. Planificá contacto social, actividades fuera de casa y momentos de descanso. Vivir solo no significa pasar todo el tiempo solo." },
      { title: "Construí una rutina sostenible", bullets: ["Definí horarios razonables de sueño y comidas.", "Reservá un momento semanal para ordenar y limpiar.", "Planificá compras y tareas en bloques pequeños.", "Mantené actividades sociales, recreativas y físicas.", "Dejá espacios sin obligaciones para descansar."] },
      { title: "Cuando algo sale mal", body: "Un mes difícil, una comida quemada, una cuenta inesperada o un desacuerdo no significan que no puedas vivir independientemente. Identificá qué ocurrió, qué podés resolver y qué apoyo necesitás. Aprender también implica corregir." },
      { title: "Mantener vínculos", body: "Acordá con familiares y amistades cómo querés mantener el contacto. Podés pedir consejos sin entregar el control de tus decisiones. Los límites saludables permiten recibir apoyo sin perder autonomía." }
    ],
    takeaway: "No midas tu independencia por lo perfecto que se vea tu casa o por cuánto hacés sin ayuda. Medila por tu capacidad de cuidarte y tomar decisiones."
  },
  {
    id: "estabilidad",
    number: "10",
    title: "Después de mudarte",
    subtitle: "Convertí la mudanza en una vida estable y sostenible a largo plazo.",
    icon: CalendarCheck,
    time: "20 min",
    intro: "La mudanza no es el final del proceso. Después empieza la etapa de ajustar el presupuesto, conocer mejor la vivienda y construir hábitos que te permitan sostenerla.",
    sections: [
      { title: "Primer mes", bullets: ["Compará los gastos reales con el presupuesto estimado.", "Identificá consumos que podés reducir sin perjudicar tu bienestar.", "Terminá de registrar desperfectos y resolver pendientes.", "Ajustá compras y comidas a tus hábitos reales.", "Revisá si la ubicación y la convivencia funcionan."] },
      { title: "Mantenimiento preventivo", body: "Ventilá, controlá humedad, limpiá filtros según instrucciones, no ignores pérdidas de agua y atendé señales de fallas eléctricas. Consultá antes de realizar modificaciones y registrá las reparaciones." },
      { title: "Revisiones financieras", bullets: ["Actualizá el presupuesto cuando cambien ingresos o precios.", "Separá ahorro para emergencias y gastos previsibles.", "Revisá vencimientos y comprobantes cada mes.", "Planificá compras grandes antes de financiarlas.", "Evitá asumir nuevas obligaciones hasta conocer tu costo de vida real."] },
      { title: "Pensar a futuro", body: "Preguntate si el lugar sigue respondiendo a tus necesidades, si el costo es sostenible y qué querés cambiar. Podés renegociar, mudarte, vivir con otras personas o volver a compartir vivienda. La independencia no es una decisión irreversible." }
    ],
    takeaway: "Tu primera vivienda no tiene que ser definitiva. Es una etapa de aprendizaje y una oportunidad para conocer qué necesitás."
  }
];

export const quickLinks = [
  { label: "Calculadora de presupuesto", to: "/herramientas" },
  { label: "Lista de mudanza", to: "/checklist" },
  { label: "Glosario", to: "/glosario" },
  { label: "Preguntas frecuentes", to: "/preguntas" }
];
