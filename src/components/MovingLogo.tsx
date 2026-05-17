import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useRouterState } from "@tanstack/react-router";

export function MovingLogo() {
  const { location } = useRouterState();
  const isHome = location.pathname === "/";
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <motion.div
      layout
      transition={{ type: "spring", stiffness: 60, damping: 18, mass: 1.2 }}
      className={
        isHome
          ? "fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
          : "fixed top-6 left-8 z-50 md:top-8 md:left-12"
      }
    >
      <Link
        to="/"
        className="pointer-events-auto inline-block leading-none"
        aria-label="Studio.ZA — home"
      >
        <motion.span
          layout
          initial={false}
          animate={{
            fontSize: isHome ? "min(28vw, 22rem)" : "1.5rem",
            letterSpacing: isHome ? "-0.04em" : "0em",
            opacity: loaded ? 1 : 0,
          }}
          transition={{ type: "spring", stiffness: 70, damping: 20 }}
          className="font-serif italic block text-foreground"
        >
          ZA
        </motion.span>
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