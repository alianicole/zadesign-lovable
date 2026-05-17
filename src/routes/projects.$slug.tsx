import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "motion/react";
import { getProject, projects } from "@/data/projects";
import { Footer } from "@/components/Nav";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.project.name} — Studio.ZA` },
          { name: "description", content: loaderData.project.description[0] },
          { property: "og:title", content: `${loaderData.project.name} — Studio.ZA` },
          { property: "og:description", content: loaderData.project.description[0] },
          { property: "og:image", content: loaderData.project.hero },
        ]
      : [],
  }),
  component: ProjectPage,
});

function ProjectPage() {
  const { project } = Route.useLoaderData();
  const next = projects.find((p) => p.slug === project.next) ?? projects[0];

  return (
    <main className="min-h-screen">
      <motion.img
        src={project.hero}
        alt={project.name}
        className="w-full h-screen object-cover"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      />

      <section className="px-8 md:px-12 mt-24 max-w-6xl">
        <Link to="/projects" className="text-xs uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground transition-colors">
          ← All projects
        </Link>
        <h1 className="font-serif text-5xl md:text-7xl mt-8 leading-[1.05]">
          {project.name}
        </h1>
        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
          <span>{project.location}</span>
          <span>{project.year}</span>
          <span>{project.scope}</span>
        </div>
        <div className="mt-12 grid md:grid-cols-12 gap-8">
          <div className="md:col-span-7 md:col-start-6 space-y-6 font-serif text-xl md:text-2xl text-muted-foreground leading-relaxed">
            {project.description.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-32 space-y-24 px-8 md:px-12 pb-32">
        {project.gallery.map((g, i) => (
          <motion.figure
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className={
              i % 3 === 0
                ? "md:max-w-5xl md:mx-auto"
                : i % 3 === 1
                ? "md:max-w-2xl md:ml-auto"
                : "md:max-w-3xl"
            }
          >
            <img src={g.src} alt={g.caption} className="w-full object-cover" />
            <figcaption className="mt-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {g.caption}
            </figcaption>
          </motion.figure>
        ))}
      </section>

      <section className="px-8 md:px-12 py-24 border-t border-border">
        <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Next project</span>
        <Link
          to="/projects/$slug"
          params={{ slug: next.slug }}
          className="block mt-6 font-serif text-5xl md:text-7xl italic hover:text-muted-foreground transition-colors"
        >
          {next.name} →
        </Link>
      </section>
      <Footer />
    </main>
  );
}