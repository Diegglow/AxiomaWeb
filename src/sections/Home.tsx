// src/sections/Home.tsx
import { motion } from "framer-motion";

// Variantes de animación
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
} as const;

export default function Home() {
  return (
    <div>
      {/* SECCIÓN PRINCIPAL */}
      <motion.section
        id="inicio"
        className="flex flex-col items-center justify-center text-center py-16 rounded-2xl bg-gradient-to-b from-blue-900 via-blue-800 to-cyan-800 text-white shadow-lg"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-sm">¿Escuchas el mar, o solo el ruido?</h1>
        <p className="text-lg mb-6 max-w-6xl">
          Cada ola tiene algo que contar...Con SONAR, transformamos el sonido del mar en datos que revelan su comportamiento. Nuestro equipo de cómputo analiza cada frecuencia, cada pulso y cada eco para comprender los fenómenos marinos con precisión científica. Porque escuchar no basta, hay que entender lo que el océano nos dice.  
        </p>

        <a
          href="#componentes"
          className="relative inline-block px-8 py-3 font-semibold text-cyan-900 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-out hover:scale-105 hover:shadow-cyan-400/50
          before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/40 before:via-transparent before:to-transparent before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-[1200ms] before:ease-in-out"
        >
          <span className="relative z-10">Explorar tecnología</span>
        </a>
      </motion.section>

    {/* Video */}
        <div className="mt-12 flex justify-center">
          <video
            className="rounded-xl shadow-lg border border-slate-700 w-full max-w-4xl"
            autoPlay
            loop
            muted
            playsInline
            controls
          >
            <source src="/SonarMix.mp4" type="video/mp4" />
            Tu navegador no soporta videos HTML5.
          </video>
        </div>

      {/* TARJETAS DE TECNOLOGÍA */}
      <section className="mt-12 relative rounded-2xl overflow-hidden shadow-lg">
        {/* Imagen de fondo */}
        <img
          src="/PATRON SONAR.jpg"
          alt="Fondo marino tecnológico"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        {/* Capa de gradiente */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/70 via-slate-900/60 to-cyan-900/80"></div>

        {/* Contenido principal */}
        <div className="relative grid gap-6 md:grid-cols-3 px-8 py-16">
          {[
            {
              title: "Captura",
              text: "Sensores acústicos de alta fidelidad para entornos marinos.",
            },
            {
              title: "Procesamiento",
              text: "Modelos de IA para detección, clasificación y alertas.",
            },
            {
              title: "Análisis",
              text: "Paneles de visualización y reportes de tendencias en tiempo real.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-xl bg-slate-900/70 border border-slate-700 p-6 hover:border-cyan-400/60 hover:shadow-lg backdrop-blur-sm transition"
            >
              <h3 className="text-cyan-300 font-semibold mb-2">{card.title}</h3>
              <p className="text-slate-300">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECCIÓN DE IMÁGENES / ENLACES */}
<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 px-8 py-20 bg-gradient-to-b from-blue-950 to-cyan-900 mt-16 rounded-2xl shadow-xl">
  {[
    { id: "empresa", title: "Empresa", img: "/Empresa.png" },
    { id: "componentes", title: "Componentes", img: "/Componentes.jpg" },
    { id: "aplicaciones", title: "Aplicaciones", img: "/Aplicaciones.jpg" },
    { id: "contacto", title: "Contacto", img: "/Contacto.jpg" },
  ].map((item, i) => (
    <motion.a
      key={item.id}
      href={`#${item.id}`}
      className="relative h-64 rounded-2xl overflow-hidden group shadow-lg transition-transform duration-500 hover:scale-105"
      initial={{ opacity: 0, y: i % 2 === 0 ? 50 : -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: i * 0.2, ease: 'easeOut' as const }}
      viewport={{ once: true }}
    >
      {/* Imagen */}
      <img
        src={item.img}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
      />

      {/* Capa de gradiente */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent group-hover:from-cyan-700/50 transition-all duration-500"></div>

      {/* Texto */}
      <h2 className="absolute bottom-6 left-6 text-3xl font-bold text-white group-hover:text-cyan-300 transition-colors">
        {item.title}
      </h2>
    </motion.a>
  ))}
</section>
    </div>
  );
}