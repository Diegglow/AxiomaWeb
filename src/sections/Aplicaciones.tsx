import React from "react";

export default function Aplicaciones() {
  const aplicaciones = [
    {
      name: "Monitoreo ambiental",
      desc: "Registro de presencia de embarcaciones, fauna marina o eventos acústicos como explosiones submarinas. Este sistema permite evaluar el impacto del ruido antropogénico y proteger zonas ecológicamente sensibles.",
      img: "/MonitoreoAmbiental.png",
      btn: "Explorar tecnología",
    },
    {
      name: "Defensa y seguridad",
      desc: "Vigilancia acústica de zonas estratégicas para detección temprana de submarinos o vehículos no tripulados. Su precisión permite una respuesta inmediata ante amenazas o anomalías bajo el mar.",
      img: "/DefensaSeguridad.png",
      btn: "Ver más detalles",
    },
    {
      name: "Exploración geológica y petrolera",
      desc: "Identificación de eventos sísmicos submarinos y prospección acústica para análisis del subsuelo marino. Los ecos procesados en tiempo real aportan información crucial para la exploración responsable de recursos.",
      img: "/Petrolera.jpg",
      btn: "Descubrir más",
    },
    {
      name: "Educación e investigación",
      desc: "Acceso abierto para instituciones académicas interesadas en analizar datos acústicos en tiempo real desde plataformas remotas, fomentando la ciencia colaborativa y la innovación oceánica.",
      img: "/InvestigaMari.jpg",
      btn: "Conocer proyectos",
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
    </section>
  );
}