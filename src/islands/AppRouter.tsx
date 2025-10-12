// src/islands/AppRouter.tsx
import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Home from "../sections/Home";
import Empresa from "../sections/Empresa";
import Componentes from "../sections/Componentes";
import Contacto from "../sections/Contacto";

type RouteKey = "inicio" | "empresa" | "componentes" | "contacto";

const variants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: -24, transition: { duration: 0.35, ease: "easeIn" } },
};

// 🔹 Detecta la ruta actual según el hash (#)
function getRouteFromHash(): RouteKey {
  const h = (typeof window !== "undefined" ? window.location.hash : "").replace("#", "");
  if (h === "empresa" || h === "componentes" || h === "contacto" || h === "inicio") return h;
  return "inicio";
}

export default function AppRouter() {
  const [route, setRoute] = useState<RouteKey>(getRouteFromHash());

  // 🔹 Escucha cambios en el hash (#empresa, #contacto, etc.)
  useEffect(() => {
    const onHash = () => {
      const newRoute = getRouteFromHash();
      setRoute(newRoute);
      // 🔹 Hace scroll suave al inicio cuando cambia de sección
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // 🔹 Renderiza la sección correspondiente
  const View = useMemo(() => {
    switch (route) {
      case "empresa":
        return <Empresa />;
      case "componentes":
        return <Componentes />;
      case "contacto":
        return <Contacto />;
      default:
        return <Home />;
    }
  }, [route]);

  return (
    <div className="relative mx-auto max-w-7xl px-4 py-10">
      <AnimatePresence mode="wait">
        <motion.section
          key={route}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="w-full"
        >
          {View}
        </motion.section>
      </AnimatePresence>
    </div>
  );
}
