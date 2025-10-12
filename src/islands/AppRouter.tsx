// src/islands/AppRouter.tsx
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Home from "../sections/Home";
import Empresa from "../sections/Empresa";
import Componentes from "../sections/Componentes";
import Aplicaciones from "../sections/Aplicaciones";
import Contacto from "../sections/Contacto";

// 🔹 Rutas válidas del sitio
type RouteKey = "inicio" | "empresa" | "componentes" | "aplicaciones" | "contacto";

// 🔹 Variantes de animación (slide lateral + fade)
const variants = {
  initial: { opacity: 0, x: 40 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
  exit: {
    opacity: 0,
    x: -40,
    transition: { duration: 0.4, ease: "easeIn" as const },
  },
};

// 🔹 Detecta la ruta actual según el hash (#)
function getRouteFromHash(): RouteKey {
  const h = (typeof window !== "undefined" ? window.location.hash : "").replace("#", "");
  if (["empresa", "componentes", "aplicaciones", "contacto", "inicio"].includes(h)) {
    return h as RouteKey;
  }
  return "inicio";
}

// 🔹 Componente principal del enrutador
export default function AppRouter() {
  const [route, setRoute] = useState<RouteKey>(getRouteFromHash());

  // Escucha los cambios del hash (por ejemplo #empresa)
  useEffect(() => {
    const onHash = () => {
      const newRoute = getRouteFromHash();
      setRoute(newRoute);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // Determina qué vista mostrar
  const View = useMemo(() => {
    switch (route) {
      case "empresa":
        return <Empresa />;
      case "componentes":
        return <Componentes />;
      case "aplicaciones":
        return <Aplicaciones />;
      case "contacto":
        return <Contacto />;
      default:
        return <Home />;
    }
  }, [route]);

  // Render con animaciones entre secciones
  return (
    <div className="relative mx-auto max-w-7xl px-4 py-10">
      <AnimatePresence mode="wait">
        <motion.section
          key={route}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="w-full bg-slate-950/50 backdrop-blur-md rounded-2xl shadow-lg"
        >
          {View}
        </motion.section>
      </AnimatePresence>
    </div>
  );
}