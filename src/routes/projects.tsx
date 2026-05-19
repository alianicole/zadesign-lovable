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

      <section className="mt-16 md:mt-24 pb-32">
        {projects.map((p) => (
          <div
            key={p.slug}
            className="min-h-[85vh] flex items-center justify-center px-8 md:px-12 py-16 md:py-24"
          >
            <Link
              to="/projects/$slug"
              params={{ slug: p.slug }}
              className="group block w-full max-w-5xl"
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="overflow-hidden">
                  <img
                    src={p.thumb}
                    alt={p.name}
                    className="w-full h-[70vh] object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-5">
                  <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{p.name}</span>
                </div>
              </motion.div>
            </Link>
          </div>
        ))}
      </section>
      <Footer />
    </main>
  );
}