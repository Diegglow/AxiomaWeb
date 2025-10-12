// src/sections/Empresa.tsx
import React from "react";

export default function Empresa() {
  return (
    <div className="space-y-8">
      <header className="rounded-xl bg-gradient-to-r from-slate-900 to-cyan-900 p-8 text-white">
        <h2 className="text-3xl font-bold">Sobre Axioma</h2>
        <p className="text-slate-200 mt-2 max-w-3xl">
          Hacemos del sonido el lenguaje que conecta la ciencia con el océano.
          Diseñamos y fabricamos soluciones de computación acústica de precisión
          para captura, procesamiento y análisis de datos subacuáticos en tiempo real.
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="rounded-xl bg-slate-900/60 border border-slate-700 p-6">
          <h3 className="text-cyan-300 font-semibold mb-2">Propósito</h3>
          <p className="text-slate-300">
            Hacer del sonido el lenguaje que nos conecta con el ecosistema global,
            proveyendo la inteligencia que la ciencia y la industria necesitan para un futuro sostenible.
          </p>
        </div>

        <div className="rounded-xl bg-slate-900/60 border border-slate-700 p-6">
          <h3 className="text-cyan-300 font-semibold mb-2">Misión</h3>
          <p className="text-slate-300">
            Desarrollamos y fabricamos soluciones de computación acústica de precisión
            que permiten la captura, procesamiento y análisis de datos del entorno subacuático y ambiental.
          </p>
        </div>

        <div className="rounded-xl bg-slate-900/60 border border-slate-700 p-6">
          <h3 className="text-cyan-300 font-semibold mb-2">Visión</h3>
          <p className="text-slate-300">
            Ser reconocidos globalmente como el referente de excelencia y el socio estratégico
            en tecnologías acústicas para la investigación y preservación marina.
          </p>
        </div>
      </div>
    </div>
  );
}
