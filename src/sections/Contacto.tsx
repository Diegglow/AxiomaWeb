// src/sections/Contacto.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contacto() {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.reset(); // limpia los campos
    setEnviado(true);
    setTimeout(() => setEnviado(false), 4000); // oculta mensaje después de 4 seg
  };

  return (
    <div className="relative space-y-8 flex flex-col items-center text-white">
      {/* ENCABEZADO CON IMAGEN DE FONDO */}
      <header className="relative rounded-xl w-full max-w-4xl overflow-hidden bg-gradient-to-r from-slate-900 to-cyan-900 p-8 shadow-lg">
        <img
          src="/Keren.jpeg"
          alt="Decoración contacto"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="relative z-10">
          <h2
            className="text-3xl font-bold text-cyan-300"
            style={{
              fontFamily: "'Glacial Indifference', 'Nunito Sans', sans-serif",
            }}
          >
            Contacto
          </h2>
          <p className="text-slate-200 mt-3 max-w-3xl leading-relaxed">
            ¿Tienes un proyecto o investigación? ¡Contáctanos y conversemos cómo
            integrar tu idea a un proyecto de inteligencia marítima!
          </p>
        </div>
      </header>

      {/* FORMULARIO */}
      <form
        onSubmit={handleSubmit}
        className="rounded-xl bg-slate-900/60 border border-slate-700 p-8 w-full max-w-3xl flex flex-col gap-6 shadow-lg backdrop-blur-sm"
      >
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 grid gap-2">
            <label className="text-sm text-slate-300" htmlFor="nombre">
              Nombre
            </label>
            <input
              id="nombre"
              required
              className="rounded-lg bg-slate-800 border border-slate-700 px-4 py-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            />
          </div>
          <div className="flex-1 grid gap-2">
            <label className="text-sm text-slate-300" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="rounded-lg bg-slate-800 border border-slate-700 px-4 py-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            />
          </div>
        </div>

        <div className="grid gap-2">
          <label className="text-sm text-slate-300" htmlFor="mensaje">
            Mensaje
          </label>
          <textarea
            id="mensaje"
            rows={5}
            required
            className="rounded-lg bg-slate-800 border border-slate-700 px-4 py-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="px-10 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-[#041026] font-semibold hover:scale-105 hover:shadow-cyan-400/40 transition-all duration-300"
          >
            Enviar
          </button>
        </div>
      </form>

      {/* MENSAJE DE CONFIRMACIÓN */}
      <AnimatePresence>
        {enviado && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-gradient-to-b from-blue-900 to-cyan-800 text-white px-10 py-8 rounded-2xl shadow-2xl text-center max-w-sm"
            >
              <h3 className="text-xl font-bold mb-2 text-cyan-300">
                Tu respuesta se ha enviado satisfactoriamente, agradecemos tu interes
              </h3>
              <p className="text-sm text-slate-300">
                Mantente atento a nuestra respuesta.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}