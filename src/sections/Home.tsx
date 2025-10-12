// src/sections/Home.tsx
import React from "react";

export default function Home() {
  return (
    <div>
      <section className="flex flex-col items-center justify-center text-center py-24 rounded-2xl bg-gradient-to-b from-blue-900 via-blue-800 to-cyan-800 text-white shadow-lg">
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-sm">Axioma</h1>
        <p className="text-lg mb-8 max-w-2xl">
          Innovación y precisión en sistemas de monitoreo acústico marino 🌊
        </p>

        <a
          href="#componentes"
          className="relative inline-block px-8 py-3 font-semibold text-cyan-900 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-out hover:scale-105 hover:shadow-cyan-400/50
          before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/40 before:via-transparent before:to-transparent before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-[1200ms] before:ease-in-out"
        >
          <span className="relative z-10">Explorar tecnología</span>
        </a>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-3">
        {[
          { title: "Captura", text: "Sensores acústicos de alta fidelidad para entornos marinos." },
          { title: "Procesamiento", text: "Modelos de IA para detección, clasificación y alertas." },
          { title: "Análisis", text: "Paneles de visualización y reportes de tendencias en tiempo real." },
        ].map((card) => (
          <div
            key={card.title}
            className="rounded-xl bg-slate-900/60 border border-slate-700 p-6 hover:border-cyan-400/60 hover:shadow-lg transition"
          >
            <h3 className="text-cyan-300 font-semibold mb-2">{card.title}</h3>
            <p className="text-slate-300">{card.text}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
