import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Footer } from "@/components/Nav";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Studio.ZA" },
      { name: "description", content: "Get in touch with Studio.ZA — Zoe Adden Design, North London." },
      { property: "og:title", content: "Contact — Studio.ZA" },
      { property: "og:description", content: "Get in touch with Studio.ZA — Zoe Adden Design." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="min-h-screen pt-32 md:pt-40">
      <section className="px-8 md:px-12 max-w-6xl">
        <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Get in touch</span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-serif text-5xl md:text-7xl mt-6 leading-[1.05] max-w-4xl"
        >
          Let's talk about <span className="italic">your home.</span>
        </motion.h1>
      </section>

      <section className="grid md:grid-cols-12 gap-12 px-8 md:px-12 mt-24 max-w-7xl">
        <div className="md:col-span-6">
          <img
            src="https://alianicole.github.io/zadesign-lovable/images/zoe.jpg"
            alt="Zoe Adden"
            className="w-full h-[70vh] object-cover"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
        </div>
        <div className="md:col-span-5 md:col-start-8 space-y-10 md:pt-8">
          <Field label="Email" value="zoeaddendesign@gmail.com" href="mailto:zoeaddendesign@gmail.com" />
          <Field label="Telephone" value="07590 551 580" href="tel:07590551580" />
          <Field label="Instagram" value="@zoeaddendesign" href="https://instagram.com/zoeaddendesign" />
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Studio</div>
            <div className="font-serif text-2xl mt-2">North London, England</div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

function Field({ label, value, href }: { label: string; value: string; href: string }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{label}</div>
      <a
        href={href}
        className="font-serif text-2xl md:text-3xl mt-2 inline-block border-b border-foreground/20 hover:border-foreground transition-colors"
      >
        {value}
      </a>
    </div>
  );
}