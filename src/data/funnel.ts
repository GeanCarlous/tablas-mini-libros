import {
  BadgeCheck,
  BookOpen,
  Box,
  CheckCircle2,
  Download,
  FileText,
  GraduationCap,
  HeartHandshake,
  Home,
  Printer,
  School,
  ShieldCheck,
  Sparkles,
  Star,
  Zap
} from "lucide-react";

export const product = {
  id: "multiplication-mini-books-pack",
  name: "Practica divertida para aprender las tablas de multiplicar",
  oldPrice: "US$24.90",
  price: "US$9.90",
  image: "/hero-activities-portrait.png"
};

export const trustBadges = [
  { label: "Empieza en minutos", icon: Download },
  { label: "Facil de usar en casa", icon: Printer },
  { label: "Practica una y otra vez", icon: BadgeCheck }
];

export const proofStats = [
  { value: "2.300+", label: "familias con menos frustracion" },
  { value: "4.9/5", label: "confianza de padres y docentes" },
  { value: "12", label: "tablas explicadas con calma" }
];

export const testimonials = [
  {
    name: "Mariana G.",
    role: "Mama de Sofi, 8 anos",
    country: "Mexico",
    quote:
      "Mi hija se bloqueaba apenas veia las tablas. Ahora practica de a poquito, se rie mas y ya no termina la tarea llorando.",
    initials: "MG"
  },
  {
    name: "Prof. Camila R.",
    role: "Docente de primaria",
    country: "Chile",
    quote:
      "Me gusta porque convierte la repeticion en una actividad amable. Los ninos participan mas y sienten que si pueden.",
    initials: "CR"
  },
  {
    name: "Daniela P.",
    role: "Mama de mellizos",
    country: "Colombia",
    quote:
      "Lo use esa misma tarde. Mis hijos dejaron de pelear con la hoja y empezaron a competir por completar una tabla mas.",
    initials: "DP"
  }
];

export const benefits = [
  {
    title: "Aprenden sin presion",
    text: "Actividades cortas que se sienten posibles, incluso cuando las tablas ya venian causando rechazo.",
    icon: Sparkles
  },
  {
    title: "Ganan confianza",
    text: "Cada avance pequeno le recuerda a tu hijo que puede mejorar sin sentirse juzgado.",
    icon: HeartHandshake
  },
  {
    title: "Menos preparacion",
    text: "Tienes una actividad lista para esos momentos en que necesitas ayudar, pero no sabes por donde empezar.",
    icon: Printer
  },
  {
    title: "Mejor rutina en casa",
    text: "Practica sin pantallas, en sesiones pequenas que caben entre merienda, tarea y descanso.",
    icon: Home
  },
  {
    title: "Mas seguridad en clase",
    text: "Ayuda a que llegue mejor preparado y participe con menos miedo cuando toca matematica.",
    icon: School
  }
];

export const includes = [
  { title: "Una tabla por vez", text: "Avanza paso a paso para que tu hijo no se sienta abrumado.", icon: BookOpen },
  { title: "Todo queda ordenado", text: "Un formato especial que motiva a guardar, repetir y sentirse orgulloso del progreso.", icon: Box },
  { title: "Practica con variedad", text: "Pequenos retos que refuerzan memoria, atencion y seguridad sin volverlo pesado.", icon: FileText },
  { title: "Acceso inmediato", text: "Empieza hoy mismo, justo cuando necesitas resolver la tarea o reforzar para una prueba.", icon: Download },
  { title: "Uso sin limites", text: "Repite las actividades todas las veces que tu hijo necesite hasta sentirse seguro.", icon: Zap }
];

export const galleryItems = [
  { title: "Primeros logros", label: "Completar sin miedo", image: "/activity-table-3.png" },
  { title: "Avance por etapas", label: "Entender una tabla a la vez", image: "/activity-wheel.png" },
  { title: "Retos divertidos", label: "Aprender sin aburrirse", image: "/activity-labyrinth.png" },
  { title: "Progreso visible", label: "Color, orgullo y motivacion", image: "/activity-coloring.png" }
];

export const faqs = [
  {
    question: "Mi hijo se frustra con las tablas. Esto puede ayudar?",
    answer:
      "Si. Esta pensado para practicar en pasos pequenos, con actividades visuales y cortas que bajan la presion y hacen que aprender se sienta mas facil."
  },
  {
    question: "Puedo empezar hoy mismo?",
    answer:
      "Si. En cuanto tu pago se confirma, tu material queda disponible al instante para empezar a practicar en casa."
  },
  {
    question: "Sirve si mi hijo aprende lento?",
    answer:
      "Si. Justamente ayuda porque divide la practica en partes simples. Tu hijo puede repetir sin sentirse atrasado ni comparado."
  },
  {
    question: "Esto reemplaza estudiar?",
    answer:
      "No reemplaza la practica: la hace mas amable. La idea es que tu hijo quiera intentarlo otra vez y gane seguridad con cada sesion."
  },
  {
    question: "El pago es seguro?",
    answer:
      "Si. Tu compra se realiza en un entorno seguro y, cuando se confirma, el acceso queda disponible de inmediato."
  }
];

export const secureBadges = [
  { label: "Pago 100% seguro", icon: ShieldCheck },
  { label: "Acceso inmediato", icon: CheckCircle2 },
  { label: "Creado para aprender mejor", icon: GraduationCap },
  { label: "Amado por familias", icon: Star }
];
