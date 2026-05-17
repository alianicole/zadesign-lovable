import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";

const links = [
  { to: "/projects", label: "Projects" },
  { to: "/studio", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const { location } = useRouterState();
  const isHome = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let raf = 0;
    const check = () => {
      const y =
        window.scrollY ||
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      setScrolled(y > 20);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(check);
    };
    check();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("touchmove", onScroll, { passive: true });
    window.addEventListener("touchend", onScroll, { passive: true });
    window.addEventListener("wheel", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("touchmove", onScroll);
      window.removeEventListener("touchend", onScroll);
      window.removeEventListener("wheel", onScroll);
    };
  }, []);

  if (isHome && !scrolled) return null;
  return (
    <nav className="fixed top-20 left-1/2 -translate-x-1/2 z-50 md:top-24 flex gap-6 text-xs uppercase tracking-[0.18em]">
      {links.map((l) => (
        <Link
          key={l.to}
          to={l.to}
          className="text-foreground/60 hover:text-foreground transition-colors"
          activeProps={{ className: "text-foreground" }}
        >
          {l.label}
        </Link>
      ))}
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="mt-32 px-8 md:px-12 py-10 border-t border-border text-xs uppercase tracking-[0.18em] text-muted-foreground flex flex-col md:flex-row justify-between gap-4">
      <span>Studio.ZA — North London</span>
      <span>© {new Date().getFullYear()} Zoe Adden Design</span>
    </footer>
  );
}