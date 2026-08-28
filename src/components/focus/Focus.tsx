"use client";

import { motion } from "framer-motion";
import { Braces, Database, Layers3, Rocket } from "lucide-react";

const focusItems = [
  {
    icon: Braces,
    eyebrow: "Core",
    title: "Python Backend",
    description:
      "Designing clean APIs and backend services with Python, Django, and FastAPI.",
  },
  {
    icon: Database,
    eyebrow: "Deepening",
    title: "Databases",
    description:
      "Improving data modeling, querying, and persistence patterns for production-ready applications.",
  },
  {
    icon: Layers3,
    eyebrow: "Expanding",
    title: "Full-stack awareness",
    description:
      "Learning TypeScript and modern frontend workflows so I can collaborate across the whole product stack.",
  },
];

export default function Focus() {
  return (
    <section id="focus" className="scroll-mt-24 px-6 py-28 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end"
        >
          <div>
            <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-blue-400">
              Current Focus
            </p>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Growing one layer at a time.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-relaxed text-zinc-400 lg:justify-self-end lg:text-lg">
            I&apos;m strengthening the fundamentals that make backend systems reliable while expanding into the surrounding tools that make software easier to ship and maintain.
          </p>
        </motion.div>

        <div className="relative mt-14 grid gap-5 md:grid-cols-3">
          <div className="pointer-events-none absolute left-[16.66%] right-[16.66%] top-0 hidden h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent md:block" />
          {focusItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/25 hover:bg-white/[0.05] md:p-7"
              >
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-400/10 text-blue-300 shadow-lg shadow-blue-950/20">
                    <Icon size={24} />
                  </div>
                  <span className="font-mono text-xs text-zinc-600">0{index + 1}</span>
                </div>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-blue-400/80">{item.eyebrow}</p>
                <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                <p className="mt-4 leading-relaxed text-zinc-400">{item.description}</p>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-6 flex flex-col gap-4 rounded-3xl border border-blue-400/15 bg-blue-400/[0.06] p-6 sm:flex-row sm:items-center sm:justify-between md:p-7"
        >
          <div className="flex items-start gap-4">
            <div className="mt-0.5 text-blue-300"><Rocket size={22} /></div>
            <div>
              <p className="font-medium">Next milestone</p>
              <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                Turn more ideas into deployable projects with stronger backend architecture and real-world integrations.
              </p>
            </div>
          </div>
          <a href="#contact" className="shrink-0 text-sm font-medium text-blue-300 transition hover:text-blue-200">
            Build with me →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
