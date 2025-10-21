// src/islands/AppRouter.tsx
import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Home from "../sections/Home";
import Empresa from "../sections/Empresa";
import Componentes from "../sections/Componentes";
import Sistema from "../sections/Sistema"; // 🆕 Importamos la nueva sección
import Aplicaciones from "../sections/Aplicaciones";
import Contacto from "../sections/Contacto";

type RouteKey =
  | "inicio"
  | "empresa"
  | "componentes"
  | "sistema"
  | "aplicaciones"
  | "contacto";

const variants = {
  initial: { opacity: 0, y: 24 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] }, // easeOut en formato numérico
  },
  exit: {
    opacity: 0,
    y: -24,
    transition: { duration: 0.35, ease: [0.42, 0, 0.58, 1] }, // easeIn equivalente
  },
} as const;

function getRouteFromHash(): RouteKey {
  const h =
    typeof window !== "undefined"
      ? window.location.hash.replace("#", "")
      : "";
  if (
    [
      "inicio",
      "empresa",
      "componentes",
      "sistema",
      "aplicaciones",
      "contacto",
    ].includes(h)
  )
    return h as RouteKey;
  return "inicio";
}

export default function AppRouter() {
  const [route, setRoute] = useState<RouteKey>(getRouteFromHash());

  useEffect(() => {
    const onHash = () => {
      const newRoute = getRouteFromHash();
      setRoute(newRoute);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const View = useMemo(() => {
    switch (route) {
      case "empresa":
        return <Empresa />;
      case "componentes":
        return <Componentes />;
      case "sistema":
        return <Sistema />; // 🆕 Mostramos la nueva sección
      case "aplicaciones":
        return <Aplicaciones />;
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