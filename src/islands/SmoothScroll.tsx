// src/islands/SmoothScroll.tsx
import { useEffect } from "react";

// Función de easing: suaviza el movimiento del scroll
const easeInOutQuad = (t: number) =>
  t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

export default function SmoothScroll() {
  useEffect(() => {
    const links = document.querySelectorAll("a[href^='#']");
    const sections = Array.from(document.querySelectorAll("section[id]"));

    // Función de scroll animado
    const scrollToSection = (target: HTMLElement) => {
      const start = window.scrollY;
      const end = target.getBoundingClientRect().top + window.scrollY - 60; // margen superior
      const duration = 700;
      let startTime: number | null = null;

      const animation = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const eased = easeInOutQuad(progress);

        window.scrollTo(0, start + (end - start) * eased);

        if (timeElapsed < duration) requestAnimationFrame(animation);
      };

      requestAnimationFrame(animation);
    };

    // Al hacer clic en un link #
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const link = target.closest("a[href^='#']") as HTMLAnchorElement | null;
      if (!link) return;
      const id = link.getAttribute("href")?.substring(1);
      const section = id ? document.getElementById(id) : null;

      if (section) {
        event.preventDefault();
        window.history.pushState(null, "", `#${id}`);
        scrollToSection(section);
      }
    };

    // Highlight del enlace activo
    const updateActiveLink = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      let activeId = "";

      for (const sec of sections) {
        if (scrollPosition >= sec.offsetTop) activeId = sec.id;
      }

      links.forEach((link) => {
        const id = link.getAttribute("href")?.substring(1);
        if (id === activeId) {
          link.classList.add("text-cyan-400", "font-semibold");
        } else {
          link.classList.remove("text-cyan-400", "font-semibold");
        }
      });
    };

    document.addEventListener("click", handleClick);
    window.addEventListener("scroll", updateActiveLink);

    // Ejecuta al cargar
    updateActiveLink();

    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener("scroll", updateActiveLink);
    };
  }, []);

  return null;
}
