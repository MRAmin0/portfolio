"use client";

import { motion } from "framer-motion";
import { Code2, Server, Zap } from "lucide-react";

const features = [
  { icon: Code2, title: "Clean Code", description: "I aim for readable, maintainable code and simple architecture that can grow with the product." },
  { icon: Server, title: "Backend Development", description: "I build APIs, automation tools, and backend solutions with Python and modern frameworks." },
  { icon: Zap, title: "Problem Solving", description: "I enjoy turning ideas and everyday problems into practical software solutions." },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 border-y border-white/[0.06] bg-white/[0.02] px-6 py-28 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true, amount: 0.3 }} className="max-w-3xl">
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-blue-400">About Me</p>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Building software with a backend mindset.</h2>
          <p className="mt-6 text-lg leading-relaxed text-zinc-400">
            I&apos;m Amin, an IT student focused on Python backend development. I build automation tools, REST APIs, and practical software solutions while continuously improving my engineering skills.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div key={feature.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.08 }} viewport={{ once: true }} className="rounded-2xl border border-white/10 bg-black/30 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/20 hover:bg-white/5">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-400/10 text-blue-400"><Icon size={22} /></div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="mt-3 leading-relaxed text-zinc-400">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
