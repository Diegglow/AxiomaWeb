// src/sections/Sistema.tsx
import React from "react";

export default function Sistema() {
  return (
    <section
      id="sistema"
      className="space-y-12 py-12 text-white"
    >
      {/* RECUADRO PRINCIPAL */}
      <div className="bg-slate-900/70 rounded-2xl border border-slate-700 shadow-md p-8 text-center">
        <h2 className="text-3xl font-bold text-cyan-300 mb-4">
          Sistema Embebido
        </h2>
        <p className="max-w-3xl mx-auto text-slate-300">
          Un sistema embebido combina hardware y software especializados para
          ejecutar tareas críticas dentro de un entorno controlado. En Sonar,
          este sistema procesa señales acústicas en tiempo real, interpreta
          datos complejos y optimiza la eficiencia energética de nuestros
          equipos marinos.
        </p>
      </div>

      {/* RECUADROS SECUNDARIOS */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Texto */}
        <div className="bg-slate-900/60 rounded-2xl p-6 border border-slate-700 shadow-md">
          <h3 className="text-2xl font-semibold text-cyan-300 mb-3">
            Funcionalidad del Sistema
          </h3>
          <p className="text-slate-300">
            Este sistema coordina la adquisición de señales, el preprocesamiento
            de datos y la inferencia mediante inteligencia artificial. Permite
            análisis acústicos precisos, supervisión remota y comunicación
            directa con los sensores subacuáticos.
          </p>
        </div>

        {/* Video */}
        <div className="aspect-video rounded-2xl overflow-hidden shadow-lg border border-slate-700">
         <iframe
  className="w-full h-full"
  src="https://www.youtube.com/watch?v=y2enEJaUOmI"
  title="Sistema Embebido Sonar"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
></iframe>

        </div>
      </div>
    </section>
  );
}
