// src/sections/Aplicaciones.tsx
export default function Aplicaciones() {
  const items = [
    {
      name: "Monitoreo ambiental",
      desc: "Registro de presencia de embarcaciones, fauna marina o eventos acústicos como explosiones submarinas.",
    },
    {
      name: "Defensa y seguridad",
      desc: "Vigilancia acústica de zonas estratégicas para detección temprana de submarinos o vehículos no tripulados.",
    },
    {
      name: "Exploración geológica y petrolera",
      desc: "Identificación de eventos sísmicos submarinos y prospección acústica para análisis del subsuelo marino.",
    },
    {
      name: "Educación e investigación",
      desc: "Acceso abierto para instituciones académicas interesadas en analizar datos acústicos en tiempo real desde plataformas remotas.",
    },
  ];

  return (
    <section className="space-y-10 py-12">
      <header className="rounded-xl bg-gradient-to-r from-blue-950 to-cyan-900 p-8 text-white shadow-lg">
        <h2 className="text-3xl font-bold mb-2">Aplicaciones del sistema</h2>
        <p className="text-slate-200 max-w-3xl">
          Los sistemas Axioma pueden adaptarse a distintas áreas de investigación, vigilancia y desarrollo tecnológico, proporcionando
          datos acústicos precisos y confiables en tiempo real.
        </p>
      </header>

      <ul className="grid md:grid-cols-2 gap-6">
        {items.map((it) => (
          <li
            key={it.name}
            className="rounded-xl bg-slate-900/70 border border-slate-700 p-6 hover:border-cyan-400/60 hover:shadow-lg transition-all duration-300 backdrop-blur-sm"
          >
            <h3 className="text-cyan-300 font-semibold mb-2">{it.name}</h3>
            <p className="text-slate-300">{it.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}