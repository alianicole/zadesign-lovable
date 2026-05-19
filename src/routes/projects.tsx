import { createFileRoute } from "@tanstack/react-router";
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

      <section className="mt-24 pb-32">
        <div className="flex gap-6 md:gap-10 overflow-x-auto snap-x snap-mandatory px-8 md:px-12 pb-6 [scrollbar-width:thin]">
          {projects.map((p, i) => (
            <motion.figure
              key={p.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className={`snap-start shrink-0 ${
                i === 0
                  ? "w-[78vw] md:w-[44vw]"
                  : "w-[88vw] md:w-[54vw]"
              }`}
            >
              <div className="overflow-hidden">
                <img
                  src={p.thumb}
                  alt={p.name}
                  className={`w-full object-cover ${
                    i === 0 ? "h-[58vh]" : "h-[70vh]"
                  }`}
                />
              </div>
              <figcaption className="mt-4">
                <span className="text-xs uppercase tracking-[0.18em]">{p.name}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}