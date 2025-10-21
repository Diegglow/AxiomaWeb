// src/sections/Componentes.tsx
import React, { useMemo, useState } from "react";

type System = {
  id: string;
  name: string;
  tagline: string;
  img: string;
  price: string;
  components: { title: string; spec: string; price?: string }[];
};

export default function Componentes() {
  const systems: System[] = useMemo(
    () => [
      {
        id: "thalassys",
        name: "THALASSYS",
        tagline:
          "Estación de trabajo extremo para entrenamiento, simulación y análisis acústico avanzado.",
        img: "/THALASSYS.jpg",
        price: "$660,100 MXN / USD: 35,865",
        components: [
          { title: "CPU", spec: "AMD Ryzen Threadripper PRO 7985WX — 64 núcleos / 128 hilos" },
          { title: "Motherboard", spec: "ASUS Pro WS WRX90E-SAGE SE" },
          { title: "GPU Aceleradora", spec: "NVIDIA RTX 6000 Ada Generation — 48 GB de VRAM" },
          { title: "RAM", spec: "256 GB DDR5 ECC (8×32 GB)" },
          { title: "SSD", spec: "Sabrent Rocket 5 Gen5 NVMe 8TB" },
          { title: "HDD", spec: "16TB HDD SATA (x4, en RAID 10)" },
          { title: "Fuente de poder", spec: "MSI Meg Ai1600T PCIE5 (1600)" },
          { title: "Refrigeración", spec: "Enfriamiento líquido (AIO 360mm)" },
          { title: "Gabinete", spec: "Gabinete de estación de trabajo E-ATX" },
          { title: "SO", spec: "Embebido" },
          { title: "Pantalla", spec: "Dell UltraSharp 40 Pulgadas 5K2K(U4025QW)" },
          { title: "Teclado", spec: "Keychron K2" },
          { title: "Mouse", spec: "Logitech MX Ergo" },
          { title: "Cables y conectores", spec: "Cables para la instalación" },
        ],
      },
      {
        id: "hydronix",
        name: "HYDRONIX",
        tagline:
          "Nodo compacto para pre-procesamiento en campo e inferencia en borde",
        img: "/Hydronix2.jpg",
        price: "$425,700 MXN / USD: 23,130",
        components: [
          { title: "CPU", spec: "AMD Ryzen Threadripper PRO 5995WX — 64 núcleos / 128 hilos" },
          { title: "Motherboard", spec: "ASUS Pro WS WRX80E-SAGE SE" },
          { title: "GPU", spec: "NVIDIA RTX A6000 (48 GB)" },
          { title: "RAM", spec: "128 GB DDR5 ECC (4×32 GB)" },
          { title: "SSD", spec: "2 x Samsung 980 PRO 2TB" },
          { title: "HDD", spec: "4 X Seagate IronWolf Pro 12TB" },
          { title: "Fuente de poder", spec: "Corsair AX1600i" },
          { title: "Refrigeración", spec: "Enfriamiento líquido (AIO 360mm)" },
          { title: "Carcasa Sonar", spec: "Fractal Define 7XL" },
          { title: "SO", spec: "Embebido" },
          { title: "Pantalla", spec: "Dell UltraSharp 40 Pulgadas 5K2K(U4025QW)" },
          { title: "Teclado", spec: "Keychron K2" },
          { title: "Mouse", spec: "Logitech MX Ergo" },
          { title: "Cables y conectores", spec: "Cables para la instalación" },
        ],
      },
    ],
    []
  );

  const [open, setOpen] = useState<System | null>(null);

  return (
    <div className="space-y-10">
      {/* === ENCABEZADO === */}
      <header className="rounded-xl bg-gradient-to-r from-blue-950 to-cyan-900 p-8 text-white shadow-lg">
        <h2 className="text-3xl font-bold">Componentes</h2>
        <p className="text-slate-200 mt-2 max-w-4xl">
          Selecciona un equipo para ver su configuración completa. Cada sistema incluye
          especificaciones técnicas y precios actualizados de cada componente.
        </p>
      </header>

      {/* === GRID PRINCIPAL CENTRADA === */}
      <section className="grid md:grid-cols-2 gap-10 justify-center place-items-center">
        {systems.map((s) => (
          <article
            key={s.id}
            className="rounded-2xl overflow-hidden bg-slate-900/70 border border-slate-700 shadow-md hover:shadow-cyan-700/25 transition w-full max-w-md"
          >
            <div className="aspect-[16/10] bg-slate-800/50">
              <img src={s.img} alt={s.name} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="p-5 space-y-3">
              <h3 className="text-white text-lg font-bold tracking-wide">{s.name}</h3>
              <p className="text-slate-300 text-sm">{s.tagline}</p>
              <div className="flex items-center justify-between mt-2">
                <button
                  onClick={() => setOpen(s)}
                  className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-300 to-blue-400 text-cyan-900 font-semibold hover:brightness-110 transition"
                >
                  Ver configuración
                </button>
                <span className="text-cyan-300 font-bold text-sm">{s.price}</span>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* === MODAL DETALLE === */}
      {open && (
        <div className="fixed inset-0 z-50" role="dialog" aria-modal="true">
          <button
            className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"
            onClick={() => setOpen(null)}
            aria-label="Cerrar detalle"
          />
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="relative w-full max-w-6xl grid md:grid-cols-2 overflow-hidden rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl">
              
              {/* Imagen más alejada y centrada */}
              <div className="flex justify-center items-center bg-slate-800/60 p-6">
                <img
                  src={open.img}
                  alt={open.name}
                  className="w-[90%] h-auto object-contain rounded-xl shadow-lg"
                />
              </div>

              {/* Información del sistema */}
              <div className="p-6 md:p-8 relative">
                <h3 className="text-2xl font-bold text-white">{open.name}</h3>
                <p className="text-slate-300 mt-1">{open.tagline}</p>
                <p className="text-cyan-300 font-bold mt-2">{open.price}</p>

                <div className="mt-6 max-h-[60vh] overflow-auto pr-1">
                  <ul className="space-y-3">
                    {open.components.map((c, i) => (
                      <li
                        key={`${open.id}-${i}`}
                        className="rounded-xl border border-slate-700 bg-slate-800/60 px-4 py-3"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-white font-semibold">{c.title}</span>
                          {c.price && (
                            <span className="text-cyan-300 font-bold text-sm">{c.price}</span>
                          )}
                        </div>
                        <div className="text-slate-300 text-sm leading-relaxed mt-1">{c.spec}</div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex gap-3">
                  <a
                    href="#contacto"
                    className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-cyan-400 text-cyan-900 font-semibold hover:brightness-110 transition"
                  >
                    Solicitar cotización
                  </a>
                  <button
                    onClick={() => setOpen(null)}
                    className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-slate-600 text-slate-200 hover:bg-slate-800 transition"
                  >
                    Cerrar
                  </button>
                </div>

                {/* Botón cerrar arriba */}
                <button
                  onClick={() => setOpen(null)}
                  aria-label="Cerrar"
                  className="absolute top-3 right-3 md:top-4 md:right-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/40 hover:bg-black/60 text-white"
                >
                  ✕
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
