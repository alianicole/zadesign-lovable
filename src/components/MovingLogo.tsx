import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useRouterState } from "@tanstack/react-router";

function StudioZALogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 312"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className={className}
    >
      <path
        d="M74 26 Q74 20 50 20 Q22 20 22 38 Q22 52 50 52 Q78 52 78 66 Q78 84 50 84 Q22 84 22 78"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M92 20 L148 20 M120 20 L120 84"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M162 20 L162 64 Q162 84 190 84 Q218 84 218 64 L218 20"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M22 124 L22 188 L44 188 Q78 188 78 156 Q78 124 44 124 Z"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M120 124 L120 188"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <ellipse
        cx="190"
        cy="156"
        rx="26"
        ry="30"
        stroke="currentColor"
        strokeWidth="5"
      />
      <circle cx="50" cy="260" r="5" fill="currentColor" />
      <path
        d="M92 228 L148 228 L92 292 L148 292"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M162 292 L190 228 L218 292 M172 270 L208 270"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MovingLogo() {
  const { location } = useRouterState();
  const isHome = location.pathname === "/";
  const [loaded, setLoaded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 50);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const minimized = !isHome || scrolled;

  return (
    <motion.div
      layout
      transition={{ type: "spring", stiffness: 60, damping: 18, mass: 1.2 }}
      className={
        !minimized
          ? "fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
          : "fixed top-6 left-8 z-50 md:top-8 md:left-12"
      }
    >
      <Link
        to="/"
        className="pointer-events-auto inline-block leading-none"
        aria-label="Studio.ZA — home"
      >
        <motion.div
          layout
          initial={false}
          animate={{
            height: minimized ? "2rem" : "min(50vh, 26rem)",
            opacity: loaded ? 1 : 0,
          }}
          transition={{ type: "spring", stiffness: 70, damping: 20 }}
          style={{ aspectRatio: "240 / 312" }}
        >
          <StudioZALogo className="w-full h-full" />
        </motion.div>
      </Link>
    </motion.div>
  );
}

export function PageFade({ children }: { children: React.ReactNode }) {
  const { location } = useRouterState();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}