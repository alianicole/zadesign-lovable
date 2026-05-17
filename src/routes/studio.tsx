import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Footer } from "@/components/Nav";

export const Route = createFileRoute("/studio")({
  head: () => ({
    meta: [
      { title: "Studio — Studio.ZA" },
      { name: "description", content: "About Studio.ZA, founded by Zoe Adden in 2015." },
      { property: "og:title", content: "Studio — Studio.ZA" },
      { property: "og:description", content: "About Studio.ZA, founded by Zoe Adden in 2015." },
    ],
  }),
  component: StudioPage,
});

const steps = [
  { n: "01", title: "Discovery", body: "We meet at your home, existing or prospective, and spend time understanding how you actually live. No questionnaires, just conversation." },
  { n: "02", title: "Concept", body: "We present a single, considered design direction. Not three options to hedge our bets. Just one, because we've done the thinking and we stand behind it." },
  { n: "03", title: "Sourcing", body: "We draw on two decades of supplier relationships — from established makers to the small workshops we've discovered along the way." },
  { n: "04", title: "Delivery", body: "We manage the installation ourselves. On handover day, every detail is taken care of — from the sheets on the bed to the flowers on the table." },
];

function StudioPage() {
  return (
    <main className="min-h-screen pt-32 md:pt-40">
      <section className="px-8 md:px-12 max-w-5xl">
        <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">About</span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-5xl md:text-7xl mt-6 leading-[1.05]"
        >
          Every home is <span className="italic">personal</span>.
        </motion.h1>
      </section>

      <section className="grid md:grid-cols-12 gap-12 px-8 md:px-12 mt-24 max-w-7xl">
        <div className="md:col-span-7 md:col-start-2">
          <img
            src="https://alianicole.github.io/zadesign-lovable/images/kensington/handles-detail.jpg"
            alt="Faceted brass handles on fluted oak joinery"
            className="w-full h-[60vh] md:h-[80vh] object-cover"
          />
        </div>
        <div className="md:col-span-4 space-y-6 font-serif text-lg md:text-xl text-muted-foreground leading-relaxed md:pt-12">
          <p>
            Studio.ZA was founded by Zoe Adden in 2015 with a simple conviction: that the best interior design is about the people who live inside it. The way they move, gather, rest, cook, and celebrate.
          </p>
          <p>
            We work primarily in London and the English countryside, where the brief is to make a home feel elevated and comfortable. The studio is deliberately small, with Zoe leading every project personally.
          </p>
        </div>
      </section>

      <section className="px-8 md:px-12 mt-40 max-w-5xl">
        <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Philosophy</span>
        <h2 className="font-serif text-4xl md:text-6xl mt-6 leading-[1.05]">
          Elevated and <span className="italic">practical</span>.
        </h2>
        <p className="font-serif text-xl md:text-2xl text-muted-foreground mt-10 max-w-3xl leading-relaxed">
          We believe in fabrics that can be washed, surfaces that get better with age, and sofas deep enough to actually fall asleep on. Above all, that a well-designed home is the foundation for a life well lived.
        </p>
      </section>

      <section className="px-8 md:px-12 mt-40 max-w-6xl">
        <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">How we work</span>
        <h2 className="font-serif text-4xl md:text-6xl mt-6 leading-[1.05]">
          A process built around <span className="italic">listening</span>.
        </h2>
        <div className="mt-20 grid md:grid-cols-2 gap-x-16 gap-y-20">
          {steps.map((s) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9 }}
            >
              <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{s.n}</div>
              <h3 className="font-serif text-3xl mt-3">{s.title}</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-8 md:px-12 mt-40 mb-20 max-w-5xl">
        <Link
          to="/contact"
          className="font-serif text-3xl md:text-5xl italic border-b border-foreground/30 pb-2 hover:border-foreground transition-colors"
        >
          Start a conversation →
        </Link>
      </section>
      <Footer />
    </main>
  );
}