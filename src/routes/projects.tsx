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
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-xs uppercase tracking-[0.22em] text-muted-foreground"
        >
          Projects
        </motion.span>
      </section>

      <section className="mt-24 grid md:grid-cols-12 gap-x-8 gap-y-32 px-8 md:px-12 pb-32">
        {projects.map((p, i) => {
          const layouts = [
            "md:col-span-7 md:col-start-1",
            "md:col-span-5 md:col-start-8",
            "md:col-span-6 md:col-start-3",
            "md:col-span-5 md:col-start-8",
          ];
          const images = p.gallery.length > 0 ? p.gallery : [{ src: p.thumb, caption: p.name }];
          const imgHeight = i === 0 ? "h-[58vh]" : "h-[70vh]";
          return (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className={layouts[i % layouts.length]}
            >
              <div className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-4 [scrollbar-width:thin]">
                {images.map((img, idx) => (
                  <div
                    key={idx}
                    className="snap-start shrink-0 w-full overflow-hidden"
                  >
                    <img
                      src={img.src}
                      alt={img.caption || p.name}
                      className={`w-full ${imgHeight} object-cover`}
                    />
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <span className="text-xs uppercase tracking-[0.18em]">{p.name}</span>
              </div>
            </motion.div>
          );
        })}
      </section>
      <Footer />
    </main>
  );
}