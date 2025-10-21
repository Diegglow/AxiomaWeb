// src/sections/Sistema.tsx
import React from "react";

export default function Sistema() {
  return (
    <section id="sistema" className="space-y-12 py-12 text-white">

      {/* === RECUADRO PRINCIPAL CON FONDO === */}
      <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-700">
        {/* Imagen de fondo */}
        <img
          src="/PATRON SONAR.jpg"
          alt="Fondo SONAR"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />

        {/* Capa de color con degradado para unificar tono */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900/80 to-cyan-900/70"></div>

        {/* Contenido */}
        <div className="relative text-center px-8 py-12">
          <h2 className="text-3xl font-bold text-cyan-300 mb-4">
            Sistema Embebido SONAR
          </h2>
          <p className="max-w-4xl mx-auto text-slate-300 leading-relaxed">
            En el núcleo de nuestros equipos vive un sistema embebido diseñado
            para interpretar el lenguaje del océano. Este módulo combina hardware
            especializado y software inteligente para procesar datos acústicos en
            tiempo real, optimizando el rendimiento energético, reduciendo la
            latencia y garantizando la precisión de cada análisis, desde las
            profundidades hasta los laboratorios de superficie.
          </p>
        </div>
      </div>

      {/* RECUADROS */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Texto 1 */}
        <div className="bg-slate-900/60 rounded-2xl p-8 border border-slate-700 shadow-lg backdrop-blur-sm hover:border-cyan-400/50 transition">
          <h3 className="text-3xl font-bold text-cyan-300 mb-6 tracking-wide">
            Funcionalidad del Sistema
          </h3>

          <div className="space-y-5 text-slate-300 leading-relaxed">
            <p>
              El sistema embebido es el{" "}
              <span className="text-cyan-200 font-semibold">
                núcleo de procesamiento local
              </span>{" "}
              dentro de cada estación de cómputo, ya sea fija o embarcada. Su
              misión es{" "}
              <span className="text-cyan-200">
                recibir, interpretar y procesar en tiempo real
              </span>{" "}
              los datos acústicos capturados por los sensores marinos.
            </p>

            <p>
              Este módulo garantiza un análisis confiable bajo cualquier
              entorno, optimizando el rendimiento energético y reduciendo la
              latencia en cada operación.
            </p>

            <div className="mt-4">
              <h4 className="text-cyan-300 font-semibold text-lg mb-3">
                Cada etapa aprovecha lo que el sistema embebido produce:
              </h4>
              <ul className="list-disc list-inside space-y-2 ml-3">
                <li>
                  <span className="text-slate-200">Señales filtradas</span> —
                  limpias y libres de ruido para análisis más precisos.
                </li>
                <li>
                  <span className="text-slate-200">
                    Datos de frecuencia y amplitud
                  </span>{" "}
                  — esenciales para interpretar patrones marinos.
                </li>
                <li>
                  <span className="text-slate-200">Inferencias básicas</span> —
                  detección de objetos, biovibraciones y estructuras
                  submarinas.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Video YouTube */}
        <div className="mt-12 flex justify-center">
          <div className="w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-lg border border-slate-700">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/y2enEJaUOmI?rel=0&modestbranding=1"
              title="Sistema Embebido SONAR"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* TABLA DE BENEFICIOS */}
<div className="bg-slate-900/70 rounded-2xl p-8 border border-slate-700 shadow-lg">
  <h3 className="text-3xl font-bold text-cyan-300 mb-6 text-center">
    Beneficios del Sistema Embebido SONAR
  </h3>
  <div className="overflow-x-auto">
    <table className="min-w-full border-collapse text-sm md:text-base text-center">
      <thead>
        <tr className="bg-gradient-to-r from-cyan-900 to-blue-900 text-cyan-100">
          <th className="p-4 font-semibold rounded-tl-xl text-center">Función</th>
          <th className="p-4 font-semibold rounded-tr-xl text-center">Impacto</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-700">
        <tr className="hover:bg-slate-800/60 transition">
          <td className="p-4 font-semibold text-slate-200 text-center">
            Procesamiento local en tiempo real
          </td>
          <td className="p-4 text-slate-300 text-center">
            Evita depender de la nube para análisis inmediatos.
          </td>
        </tr>
        <tr className="hover:bg-slate-800/60 transition">
          <td className="p-4 font-semibold text-slate-200 text-center">
            Optimización energética
          </td>
          <td className="p-4 text-slate-300 text-center">
            Reduce el consumo eléctrico en embarcaciones y estaciones remotas.
          </td>
        </tr>
        <tr className="hover:bg-slate-800/60 transition">
          <td className="p-4 font-semibold text-slate-200 text-center">
            Reducción de latencia
          </td>
          <td className="p-4 text-slate-300 text-center">
            Permite decisiones más rápidas en detección acústica.
          </td>
        </tr>
        <tr className="hover:bg-slate-800/60 transition">
          <td className="p-4 font-semibold text-slate-200 text-center">
            Escalabilidad modular
          </td>
          <td className="p-4 text-slate-300 text-center">
            Cada estación puede actualizarse o integrarse fácilmente.
          </td>
        </tr>
        <tr className="hover:bg-slate-800/60 transition">
          <td className="p-4 font-semibold text-slate-200 text-center">
            Seguridad de datos
          </td>
          <td className="p-4 text-slate-300 text-center">
            Procesamiento local que protege la información científica.
               </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
