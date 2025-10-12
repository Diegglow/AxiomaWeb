// src/sections/Contacto.tsx
import React from "react";

export default function Contacto() {
  return (
    <div className="space-y-8">
      <header className="rounded-xl bg-gradient-to-r from-slate-900 to-cyan-900 p-8 text-white">
        <h2 className="text-3xl font-bold">Contacto</h2>
        <p className="text-slate-200 mt-2 max-w-3xl">
          ¿Tienes un proyecto o investigación? ¡Contactanos y conversemos cómo integrar
          tu idea a un proyecto de inteligencia maritima!
        </p>
      </header>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="rounded-xl bg-slate-900/60 border border-slate-700 p-6 grid gap-4 md:grid-cols-2"
      >
        <div className="grid gap-2">
          <label className="text-sm text-slate-300" htmlFor="nombre">Nombre</label>
          <input id="nombre" className="rounded-lg bg-slate-800 border border-slate-700 px-3 py-2 text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
        </div>
        <div className="grid gap-2">
          <label className="text-sm text-slate-300" htmlFor="email">Email</label>
          <input type="email" id="email" className="rounded-lg bg-slate-800 border border-slate-700 px-3 py-2 text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
        </div>
        <div className="md:col-span-2 grid gap-2">
          <label className="text-sm text-slate-300" htmlFor="mensaje">Mensaje</label>
          <textarea id="mensaje" rows={5} className="rounded-lg bg-slate-800 border border-slate-700 px-3 py-2 text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
        </div>
        <div className="md:col-span-2">
          <button
            type="submit"
            className="px-6 py-2 rounded-lg bg-cyan-400 text-cyan-900 font-semibold hover:brightness-110 transition"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}
