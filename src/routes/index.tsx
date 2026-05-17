import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen">
      {/* Hero – the giant ZA logo is rendered by MovingLogo and dominates this view */}
      <section className="h-screen relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-0 right-0 flex justify-between px-8 md:px-12 text-xs uppercase tracking-[0.22em] text-muted-foreground"
        >
          <span>Zoe Adden Design</span>
          <span className="hidden md:inline">Residential Interiors — London and New York</span>
          <Link to="/projects" className="hover:text-foreground transition-colors">
            Enter ↓
          </Link>
        </motion.div>
      </section>

      {/* Statement */}
      <section className="px-8 md:px-12 py-32 max-w-5xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.05]"
        >
          Classic in bones.{" "}
          <span className="italic text-muted-foreground">Joyful</span> in detail.
          <br />
          Designed for living.
        </motion.h1>
      </section>

      {/* Featured imagery — full-bleed, staggered */}
      <section className="space-y-32 md:space-y-48 pb-32">
        {projects.slice(0, 3).map((p, i) => (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className={
              i % 2 === 0
                ? "px-0 md:pr-[18vw]"
                : "px-0 md:pl-[18vw]"
            }
          >
            <Link to="/projects/$slug" params={{ slug: p.slug }} className="block group">
              <div className="overflow-hidden">
                <motion.img
                  src={p.hero}
                  alt={p.name}
                  className="w-full h-[70vh] md:h-[85vh] object-cover"
                  initial={{ scale: 1.08 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
              <div className="flex justify-between items-baseline mt-4 px-8 md:px-12">
                <span className="font-serif italic text-xl md:text-2xl">{p.name}</span>
                <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {p.location} — {p.year}
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </section>

      <section className="px-8 md:px-12 py-32 max-w-3xl">
        <p className="font-serif text-2xl md:text-3xl leading-snug text-muted-foreground">
          We design residential interiors at the meeting point of architecture and daily life. Every project begins with a single question: what does this family actually need to feel at home?
        </p>
        <Link
          to="/studio"
          className="inline-block mt-10 text-xs uppercase tracking-[0.22em] border-b border-foreground/40 pb-1 hover:border-foreground transition-colors"
        >
          About the studio →
        </Link>
      </section>
    </main>
  );
}
