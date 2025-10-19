// src/sections/Aplicaciones.tsx
import React from "react";

export default function Aplicaciones() {
  const aplicaciones = [
    {
      name: "Monitoreo ambiental",
      desc: "Registro de presencia de embarcaciones, fauna marina o eventos acústicos como explosiones submarinas. Este sistema permite evaluar el impacto del ruido antropogénico y proteger zonas ecológicamente sensibles.",
      img: "/aplicacion1.png",
      btn: "Explorar tecnología",
    },
    {
      name: "Defensa y seguridad",
      desc: "Vigilancia acústica de zonas estratégicas para detección temprana de submarinos o vehículos no tripulados. Su precisión permite una respuesta inmediata ante amenazas o anomalías bajo el mar.",
      img: "/aplicacion2.png",
      btn: "Ver más detalles",
    },
    {
      name: "Exploración geológica y petrolera",
      desc: "Identificación de eventos sísmicos submarinos y prospección acústica para análisis del subsuelo marino. Los ecos procesados en tiempo real aportan información crucial para la exploración responsable de recursos.",
      img: "/aplicacion3.png",
      btn: "Descubrir más",
    },
    {
      name: "Educación e investigación",
      desc: "Acceso abierto para instituciones académicas interesadas en analizar datos acústicos en tiempo real desde plataformas remotas, fomentando la ciencia colaborativa y la innovación oceánica.",
      img: "/aplicacion4.png",
      btn: "Conocer proyectos",
    },
  ];

  const noticias = [
    {
      fecha: "Octubre 12, 2025",
      titulo:
        "Sonar colabora con universidades mexicanas para desarrollar sensores marinos inteligentes",
      desc: "En alianza con instituciones académicas, Sonar implementa módulos acústicos de bajo consumo capaces de registrar patrones de sonido marino y transmitir datos en tiempo real para análisis científico.",
      img: "/noticia1.png",
      btn: "Leer más",
    },
    {
      fecha: "Septiembre 28, 2025",
      titulo:
        "Nueva plataforma de análisis SonarData revoluciona la investigación oceánica",
      desc: "Sonar lanza una plataforma web que integra inteligencia artificial y visualización 3D de ondas acústicas, brindando a los investigadores un entorno completo para interpretar datos submarinos con precisión milimétrica.",
      img: "/noticia2.png",
      btn: "Ver detalles",
    },
  ];

  return (
    <section className="space-y-20 py-12">
      {/* ENCABEZADO PRINCIPAL */}
      <header className="rounded-xl bg-gradient-to-r from-blue-950 to-cyan-900 p-10 text-white shadow-lg">
        <h2
          className="text-4xl font-extrabold mb-3 text-cyan-300"
          style={{
            fontFamily: "'Glacial Indifference', 'Nunito Sans', sans-serif",
          }}
        >
          Aplicaciones del sistema
        </h2>
        <p className="text-slate-200 max-w-3xl">
          Los sistemas Sonar pueden adaptarse a distintas áreas de investigación,
          vigilancia y desarrollo tecnológico, proporcionando datos acústicos
          precisos y confiables en tiempo real.
        </p>
      </header>

      {/* APLICACIONES PRINCIPALES */}
      {aplicaciones.map((app, i) => (
        <div
          key={i}
          className={`rounded-2xl bg-gradient-to-b from-blue-900 to-cyan-900 shadow-lg overflow-hidden flex flex-col md:flex-row ${
            i % 2 !== 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Imagen */}
          <div className="md:w-1/2">
            <img
              src={app.img}
              alt={app.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Texto */}
          <div className="md:w-1/2 flex flex-col justify-center p-10 text-white">
            <h3 className="text-2xl font-bold text-cyan-300 mb-4">
              {app.name}
            </h3>
            <p className="text-slate-200 leading-relaxed mb-6">{app.desc}</p>
            <button className="self-start bg-gradient-to-r from-cyan-400 to-blue-500 text-blue-950 font-semibold px-6 py-2 rounded-lg hover:scale-105 transition-transform">
              {app.btn}
            </button>
          </div>
        </div>
      ))}

      {/* NOTICIAS Y AVANCES */}
      <section>
        <h3
          className="text-3xl font-bold text-center text-cyan-300 mb-12"
          style={{
            fontFamily: "'Glacial Indifference', 'Nunito Sans', sans-serif",
          }}
        >
          Noticias y avances recientes
        </h3>

        <div className="grid lg:grid-cols-2 gap-10">
          {noticias.map((n, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden bg-gradient-to-b from-blue-950 to-cyan-900 text-white shadow-lg flex flex-col md:flex-row"
            >
              {/* Imagen */}
              <div className="md:w-1/2">
                <img
                  src={n.img}
                  alt={n.titulo}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Texto */}
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <p className="text-cyan-300 text-sm font-semibold mb-2">
                  {n.fecha}
                </p>
                <h4 className="text-xl font-bold mb-3">{n.titulo}</h4>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {n.desc}
                </p>
                <button className="bg-gradient-to-r from-cyan-400 to-blue-500 text-blue-950 font-semibold px-5 py-2 rounded-lg hover:scale-105 transition-transform self-start">
                  {n.btn}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
