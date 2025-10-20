import React from "react";

export default function Empresa() {
  return (
    <div className="space-y-20">
      {/* ENCABEZADO */}
      <header className="relative rounded-xl bg-gradient-to-r from-blue-950 via-blue-900 to-cyan-900 p-10 text-white shadow-lg overflow-hidden">
        <img
          src="/PATRON SONAR.jpg"
          alt="Fondo empresa"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative z-10 max-w-4xl">
          <h2
            className="text-4xl font-extrabold text-cyan-300 mb-3"
            style={{
              fontFamily: "'Glacial Indifference', 'Nunito Sans', sans-serif",
            }}
          >
            Agenda Sonar
          </h2>
          <p className="text-slate-200 leading-relaxed">
            En Sonar impulsamos la transformación digital marina mediante el
            desarrollo de soluciones de computación acústica que transforman los
            ecos del océano en datos científicos de alta precisión. Nuestro
            compromiso es contribuir al conocimiento, la preservación y el uso
            sostenible de los recursos marinos a través de tecnología avanzada,
            ciencia y colaboración.
          </p>
        </div>
      </header>

      {/* OBJETIVOS */}
      <section className="text-white text-center">
        <h3
          className="text-3xl font-bold text-cyan-300 mb-10"
          style={{
            fontFamily: "'Glacial Indifference', 'Nunito Sans', sans-serif",
          }}
        >
          Objetivos Estrategicos
        </h3>

        {/* Objetivos */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              titulo: "1. Innovación Acústica",
              texto:
                "Liderar la investigación aplicada en tecnologías acústicas que mejoren la exploración y monitoreo marino.",
            },
            {
              titulo: "2. Sustentabilidad",
              texto:
                "Fomentar la creación de herramientas tecnológicas que reduzcan el impacto ambiental y promuevan ecosistemas sostenibles.",
            },
            {
              titulo: "3. Formación Científica",
              texto:
                "Vincular la ciencia con la industria marina, impulsando la capacitación de nuevos talentos en oceanografía computacional.",
            },
            {
              titulo: "4. Colaboración Global",
              texto:
                "Establecer alianzas internacionales para compartir conocimiento y fortalecer la investigación marina.",
            },
            {
              titulo: "5. Divulgación y Conciencia",
              texto:
                "Traducir los hallazgos científicos en información accesible para la sociedad, inspirando una cultura de respeto hacia el mar.",
            },
          ].map((obj, i) => (
            <div
              key={i}
              className="rounded-xl bg-slate-900/70 border border-slate-700 p-6 shadow-md hover:shadow-cyan-500/30 transition-all duration-300"
            >
              <h4 className="text-cyan-300 font-semibold text-lg mb-2">
                {obj.titulo}
              </h4>
              <p className="text-slate-300 text-sm">{obj.texto}</p>
            </div>
          ))}
        </div>

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
            <source src="/Sonar1.mp4" type="video/mp4" />
            Tu navegador no soporta videos HTML5.
          </video>
        </div>
      </section>

      {/* MISIÓN Y VISIÓN */}
      <section className="bg-gradient-to-r from-blue-950 to-cyan-900 rounded-xl text-center text-white py-12 px-6 shadow-lg">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-bold text-cyan-300 mb-3">Visión</h3>
            <p className="text-slate-200">
              Ser el referente global en innovación acústica aplicada a la
              investigación marina, liderando la transformación digital de los
              océanos mediante tecnología y sostenibilidad.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-cyan-300 mb-3">Misión</h3>
            <p className="text-slate-200">
              Desarrollar soluciones de cómputo acústico de alta precisión para
              analizar y comprender los ecos del océano, aportando información
              esencial para la ciencia y la conservación marina.
            </p>
          </div>
        </div>
      </section>

      {/* EQUIPO */}
      <section className="text-white">
        <h3
          className="text-3xl font-bold text-center text-cyan-300 mb-12"
          style={{
            fontFamily: "'Glacial Indifference', 'Nunito Sans', sans-serif",
          }}
        >
          Nuestro Equipo
        </h3>

        {/* Columnas */}
        <div className="grid md:grid-cols-2 gap-10 justify-center items-start px-10">
          {[
            {
              nombre: "Diego Medina",
              cargo: "Director de Innovación y Cómputo",
              correo: "diego@sonar.mx",
              img: "/Diego.png",
            },
            {
              nombre: "Fernanda Ojeda",
              cargo: "Gestora de Proyectos Científicos",
              correo: "fernanda@sonar.mx",
              img: "/Fer.png",
            },
            {
              nombre: "Yulemi Nicolai",
              cargo: "Ingeniera en Análisis Acústico",
              correo: "yulemi@sonar.mx",
              img: "/Yulemi.png",
            },
            {
              nombre: "Keren Villanueva",
              cargo: "Especialista en Comunicación y Ciencia",
              correo: "keren@sonar.mx",
              img: "/Keren.jpeg",
            },
            {
              nombre: "Génesis Ariza",
              cargo: "Desarrolladora de Software Marino",
              correo: "genesis@sonar.mx",
              img: "/Genesis.png",
            },
          ].map((persona, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center bg-slate-900/60 border border-slate-700 rounded-2xl p-8 shadow-md hover:shadow-cyan-400/30 transition-all duration-300 w-full max-w-lg mx-auto"
            >
              <img
                src={persona.img}
                alt={persona.nombre}
                className="w-64 h-64 rounded-full object-cover border-4 border-blue-800 mb-5"
              />
              <h4 className="font-semibold text-cyan-500 text-xl">
                {persona.nombre}
              </h4>
              <p className="text-slate-300 text-sm mt-1">{persona.cargo}</p>
              <p className="text-cyan-400 text-xs mt-2">{persona.correo}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
