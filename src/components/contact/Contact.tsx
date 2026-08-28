"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 px-6 py-28 md:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true, amount: 0.3 }} className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] px-6 py-14 text-center sm:px-10 md:py-20">
          <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-500/15 blur-[90px]" />
          <div className="relative">
            <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-blue-400">Contact</p>
            <h2 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">Let&apos;s build something together.</h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
              I&apos;m open to freelance projects, collaborations, and opportunities in backend development. The easiest way to reach me is by email.
            </p>

            <a href="mailto:aminmonajati9@gmail.com" className="mt-9 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-medium text-black transition hover:-translate-y-0.5 hover:bg-zinc-200">
              <Mail size={18} /> Email Me <ArrowUpRight size={17} />
            </a>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href="https://github.com/MRAmin0" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-zinc-300 transition hover:bg-white/10 hover:text-white"><FaGithub size={18} /> GitHub</a>
              <a href="https://www.linkedin.com/in/amin-monajati/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-zinc-300 transition hover:bg-white/10 hover:text-white"><FaLinkedin size={18} /> LinkedIn</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
