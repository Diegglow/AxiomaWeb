// src/sections/Componentes.tsx
import React, { useMemo, useState } from "react";

type System = {
  id: string;
  name: string;
  tagline: string;
  img: string;
  price: string;
  components: { title: string; spec: string; price: string }[];
};

export default function Componentes() {
  const systems: System[] = useMemo(
    () => [
      {
        id: "thalassys",
        name: "THALASSYS",
        tagline:
          "Estación de trabajo extremo para entrenamiento, simulación y análisis acústico avanzado.",
        img: "/thalassys.jpg",
        price: "$489,000 MXN",
        components: [
          { title: "CPU", spec: "AMD Ryzen Threadripper PRO 5995WX — 64 núcleos / 128 hilos", price: "$218,500 MXN" },
          { title: "Motherboard", spec: "WRX80/WRX90 Pro Workstation con 7× PCIe 4.0/5.0 y 8× DDR5 ECC", price: "$27,800 MXN" },
          { title: "GPU Aceleradora", spec: "NVIDIA RTX 6000 Ada — 48 GB GDDR6 ECC", price: "$166,500 MXN" },
          { title: "GPU Secundaria (opcional)", spec: "NVIDIA RTX 4000 Ada — 20 GB GDDR6", price: "$45,000 MXN" },
          { title: "RAM", spec: "256 GB DDR5 ECC (8×32 GB)", price: "$30,000 MXN" },
          { title: "SSD Sistema", spec: "NVMe Gen4 2 TB", price: "$5,000 MXN" },
          { title: "SSD Proyecto", spec: "NVMe Gen5 8 TB", price: "$30,000 MXN" },
          { title: "Matriz de datos", spec: "RAID10 4× 16 TB HDD", price: "$25,000 MXN" },
          { title: "Red", spec: "Dual 10 GbE + 2.5 GbE", price: "$8,000 MXN" },
          { title: "Fuente", spec: "1600 W 80+ Titanium", price: "$15,000 MXN" },
          { title: "Refrigeración", spec: "AIO líquida 360 mm", price: "$5,500 MXN" },
          { title: "Chasis", spec: "Torre ATX insonorizada", price: "$6,500 MXN" },
          { title: "SO", spec: "Windows 11 Pro / Ubuntu 24.04", price: "$4,000 MXN" },
          { title: "Gestión", spec: "IPMI + telemetría", price: "$2,000 MXN" },
          { title: "Respaldos", spec: "Backup incremental + snapshot local", price: "$2,200 MXN" },
        ],
      },
      {
        id: "aquaenova",
        name: "AQUAENOVA",
        tagline:
          "Workstation balanceada para desarrollo de modelos, visualización y operación diaria.",
        img: "/aquaenova.jpg",
        price: "$326,000 MXN",
        components: [
          { title: "CPU", spec: "AMD Ryzen Threadripper PRO 5975WX — 32 núcleos / 64 hilos", price: "$110,000 MXN" },
          { title: "Motherboard", spec: "WRX80 Pro Workstation con DDR5 ECC", price: "$22,000 MXN" },
          { title: "GPU", spec: "NVIDIA RTX 5000 Ada — 32 GB GDDR6", price: "$120,000 MXN" },
          { title: "RAM", spec: "128 GB DDR5 ECC (4×32 GB)", price: "$15,000 MXN" },
          { title: "SSD Sistema", spec: "NVMe Gen4 1 TB", price: "$2,500 MXN" },
          { title: "SSD Proyecto", spec: "NVMe Gen4 4 TB", price: "$8,000 MXN" },
          { title: "HDD", spec: "2× 12 TB (RAID1)", price: "$10,000 MXN" },
          { title: "Red", spec: "2.5 GbE + 10 GbE opcional", price: "$3,500 MXN" },
          { title: "PSU", spec: "1200 W 80+ Platinum", price: "$8,000 MXN" },
          { title: "Refrigeración", spec: "Líquida AIO 280 mm", price: "$4,500 MXN" },
          { title: "Chasis", spec: "Mid tower ATX", price: "$5,000 MXN" },
          { title: "SO", spec: "Windows 11 Pro / Ubuntu 24.04", price: "$3,500 MXN" },
          { title: "I/O", spec: "USB-C/USB-A frontal, lector SD", price: "$2,000 MXN" },
          { title: "Seguridad", spec: "TPM 2.0 + BitLocker", price: "$1,500 MXN" },
          { title: "Respaldos", spec: "Snapshot + copia externa", price: "$2,000 MXN" },
        ],
      },
      {
        id: "hydronix",
        name: "Hydronix",
        tagline:
          "Nodo compacto para pre-procesamiento en campo e inferencia en borde.",
        img: "/hydronix.jpg",
        price: "$168,000 MXN",
        components: [
          { title: "CPU", spec: "AMD Ryzen 9 7950X — 16 núcleos / 32 hilos", price: "$12,000 MXN" },
          { title: "Acelerador", spec: "NVIDIA RTX 4000 SFF Ada — 20 GB GDDR6", price: "$40,000 MXN" },
          { title: "Motherboard", spec: "AM5 Pro con DDR5 ECC", price: "$8,000 MXN" },
          { title: "RAM", spec: "64 GB DDR5 ECC (2×32 GB)", price: "$8,500 MXN" },
          { title: "SSD Sistema", spec: "NVMe Gen4 1 TB", price: "$2,000 MXN" },
          { title: "SSD Proyecto", spec: "NVMe Gen4 2 TB", price: "$4,500 MXN" },
          { title: "Almacenamiento externo", spec: "NVMe USB-C 4 TB IP67", price: "$5,500 MXN" },
          { title: "Red", spec: "2.5 GbE + Wi-Fi 6E", price: "$2,500 MXN" },
          { title: "PSU", spec: "850 W 80+ Gold SFX", price: "$4,000 MXN" },
          { title: "Refrigeración", spec: "Torre aire premium", price: "$3,000 MXN" },
          { title: "Chasis", spec: "SFF aluminio", price: "$4,500 MXN" },
          { title: "SO", spec: "Ubuntu Server 24.04 / Windows 11 Pro", price: "$2,000 MXN" },
          { title: "I/O", spec: "USB-C 20Gbps, HDMI/DP", price: "$1,500 MXN" },
          { title: "Robustez", spec: "Filtros antipolvo + antivibración", price: "$1,000 MXN" },
          { title: "Energía", spec: "UPS mini 600 VA", price: "$3,500 MXN" },
        ],
      },
    ],
    []
  );

  const [open, setOpen] = useState<System | null>(null);

  return (
    <div className="space-y-10">
      <header className="rounded-xl bg-gradient-to-r from-blue-950 to-cyan-900 p-8 text-white shadow-lg">
        <h2 className="text-3xl font-bold">Componentes</h2>
        <p className="text-slate-200 mt-2 max-w-4xl">
          Selecciona un equipo para ver su configuración completa. Cada sistema incluye
          especificaciones técnicas y precios actualizados de cada componente.
        </p>
      </header>

      {/* === GRID PRINCIPAL === */}
      <section className="grid gap-6 md:grid-cols-3">
        {systems.map((s) => (
          <article
            key={s.id}
            className="rounded-2xl overflow-hidden bg-slate-900/70 border border-slate-700 shadow-md hover:shadow-cyan-700/25 transition"
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

      {/* === DETALLE (MODAL) === */}
      {open && (
        <div className="fixed inset-0 z-50" role="dialog" aria-modal="true">
          <button
            className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"
            onClick={() => setOpen(null)}
            aria-label="Cerrar detalle"
          />
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="relative w-full max-w-6xl grid md:grid-cols-2 overflow-hidden rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl">
              <div className="bg-slate-800/60">
                <img src={open.img} alt={open.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 md:p-8">
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
                          <span className="text-cyan-300 font-bold text-sm">{c.price}</span>
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