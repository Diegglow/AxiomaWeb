// src/islands/AppRouter.tsx
import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Home from "../sections/Home";
import Empresa from "../sections/Empresa.tsx";
import Componentes from "../sections/Componentes";
import Contacto from "../sections/Contacto";

type RouteKey = "inicio" | "empresa" | "componentes" | "contacto";

const variants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.28, ease: "easeOut" } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.22, ease: "easeIn" } },
};

function getRouteFromHash(): RouteKey {
  const h = (typeof window !== "undefined" ? window.location.hash : "").replace("#", "");
  if (h === "empresa" || h === "componentes" || h === "contacto" || h === "inicio") return h;
  return "inicio";
}

export default function AppRouter() {
  const [route, setRoute] = useState<RouteKey>(getRouteFromHash());

  useEffect(() => {
    const onHash = () => setRoute(getRouteFromHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

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
