// src/sections/Componentes.tsx
import React from "react";

export default function Componentes() {
  const items = [
    { name: "HydroMic", desc: "Matriz de micrófonos submarinos de alta sensibilidad." },
    { name: "AxiEdge", desc: "Unidad de cómputo perimetral para preprocesamiento en boya/plataforma." },
    { name: "AxiCloud", desc: "Ingesta, almacenamiento y entrenamiento de modelos en la nube." },
    { name: "AxiDash", desc: "Panel web para visualización, alertas y exportes." },
  ];

  return (
    <div className="space-y-8">
      <header className="rounded-xl bg-gradient-to-r from-slate-900 to-cyan-900 p-8 text-white">
        <h2 className="text-3xl font-bold">Componentes del sistema</h2>
        <p className="text-slate-200 mt-2 max-w-3xl">
          Arquitectura modular para capturar, procesar y analizar audio subacuático
          con baja latencia y alta confiabilidad.
        </p>
      </header>

      <ul className="grid md:grid-cols-2 gap-6">
        {items.map((it) => (
          <li key={it.name} className="rounded-xl bg-slate-900/60 border border-slate-700 p-6">
            <h3 className="text-cyan-300 font-semibold mb-2">{it.name}</h3>
            <p className="text-slate-300">{it.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
