import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { projects } from "@/data/projects";
import { Footer } from "@/components/Nav";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Studio.ZA" },
      { name: "description", content: "Selected residential interior projects by Studio.ZA." },
      { property: "og:title", content: "Projects — Studio.ZA" },
      { property: "og:description", content: "Selected residential interior projects by Studio.ZA." },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <main className="min-h-screen pt-32 md:pt-40">
      <section className="px-8 md:px-12 max-w-5xl">
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-xs uppercase tracking-[0.22em] text-muted-foreground"
        >
          Projects
        </motion.span>
      </section>

      <section className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-3 gap-x-6 md:gap-x-10 gap-y-16 md:gap-y-24 px-8 md:px-12 pb-32">
        {projects.map((p, i) => (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              to="/projects/$slug"
              params={{ slug: p.slug }}
              className="group block"
            >
              <div className="overflow-hidden aspect-[4/5]">
                <img
                  src={p.thumb}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                />
              </div>
              <div className="mt-4 flex items-baseline justify-between gap-3">
                <span className="font-serif text-lg md:text-xl leading-tight">{p.name}</span>
                <span className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground whitespace-nowrap">
                  {p.location} — {p.year}
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </section>
      <Footer />
    </main>
  );
}