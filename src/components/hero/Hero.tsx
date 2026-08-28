"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ArrowDown, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 md:grid-cols-[1.15fr_.85fr]">
        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1.5 text-sm text-blue-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Open to new opportunities
          </div>

          <p className="mb-3 font-mono text-blue-400">Hello, I&apos;m</p>
          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">Amin Monajati</h1>
          <h2 className="mt-4 text-2xl font-medium text-zinc-400 md:text-3xl">Python Backend Developer</h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            I build reliable backend systems, REST APIs, and automation tools using Python, Django, and FastAPI — with a focus on clean code and practical solutions.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-medium text-black transition hover:-translate-y-0.5 hover:bg-zinc-200">
              View Projects <ArrowDown size={17} />
            </a>
            <a href="https://github.com/MRAmin0" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 transition hover:-translate-y-0.5 hover:bg-white/10">
              <FaGithub /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/amin-monajati/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 transition hover:-translate-y-0.5 hover:bg-white/10">
              <FaLinkedin /> LinkedIn
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 transition hover:-translate-y-0.5 hover:bg-white/10">
              <Mail size={18} /> Contact
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="flex justify-center md:justify-end">
          <div className="relative h-72 w-72 sm:h-80 sm:w-80 md:h-96 md:w-96">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-blue-500/15 blur-3xl" />
            <div className="absolute -inset-3 rotate-3 rounded-[2.3rem] border border-blue-400/20 bg-blue-400/5" />
            <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900 shadow-2xl shadow-blue-950/30">
              <Image src="/images/amin.jpg" alt="Amin Monajati" fill priority sizes="(max-width: 768px) 320px, 384px" className="object-cover" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
