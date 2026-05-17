import { Link, useRouterState } from "@tanstack/react-router";

const links = [
  { to: "/studio", label: "Studio" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const { location } = useRouterState();
  if (location.pathname === "/") return null;
  return (
    <nav className="fixed top-6 right-8 z-50 md:top-9 md:right-12 flex gap-6 text-xs uppercase tracking-[0.18em]">
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