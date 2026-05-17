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
        <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Archive</span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-serif text-5xl md:text-7xl mt-6 leading-[1.05]"
        >
          Every room has a <span className="italic">story</span>.
        </motion.h1>
      </section>

      <section className="mt-24 grid md:grid-cols-12 gap-x-8 gap-y-32 px-8 md:px-12 pb-32">
        {projects.map((p, i) => {
          const layouts = [
            "md:col-span-7 md:col-start-1",
            "md:col-span-5 md:col-start-8",
            "md:col-span-6 md:col-start-3",
            "md:col-span-5 md:col-start-8",
          ];
          return (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className={layouts[i % layouts.length]}
            >
              <Link to="/projects/$slug" params={{ slug: p.slug }} className="block group">
                <div className="overflow-hidden">
                  <motion.img
                    src={p.thumb}
                    alt={p.name}
                    className="w-full h-[70vh] object-cover"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
                <div className="mt-4">
                  <span className="text-xs uppercase tracking-[0.18em]">{p.name}</span>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </section>
      <Footer />
    </main>
  );
}