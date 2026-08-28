"use client";

import { motion } from "framer-motion";
import { CloudSun, ExternalLink, FileSearch, Terminal } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Weatherly",
    description:
      "A modern weather application with real-time data, polished animations, and a responsive interface.",
    tech: ["Flutter", "Dart", "REST API", "OpenWeatherMap"],
    github: "https://github.com/MRAmin0/Weatherly",
    demo: "https://weatherly-zeta.vercel.app/",
    type: "weather" as const,
    featured: true,
  },
  {
    title: "Duplicate File Scanner",
    description:
      "A Python automation tool that detects duplicate files using SHA-256 hashing and exports structured results.",
    tech: ["Python", "Automation", "File Processing", "SHA-256"],
    github: "https://github.com/MRAmin0/Duplicate-File-Scanner",
    type: "scanner" as const,
    featured: false,
  },
];

function ProjectVisual({ type }: { type: "weather" | "scanner" }) {
  if (type === "weather") {
    return (
      <div className="relative h-64 overflow-hidden rounded-[1.4rem] border border-white/10 bg-gradient-to-br from-sky-500/20 via-blue-500/10 to-zinc-950 p-5">
        <div className="absolute -right-10 -top-12 h-40 w-40 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="flex items-center justify-between text-xs text-zinc-400">
          <span>Weatherly</span>
          <span>Live weather</span>
        </div>
        <div className="mt-8 flex items-end justify-between">
          <div>
            <p className="text-sm text-zinc-400">Current weather</p>
            <p className="mt-2 text-5xl font-semibold tracking-tight">24°</p>
            <p className="mt-2 text-sm text-zinc-300">Clear sky</p>
          </div>
          <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-white/10 bg-white/10 text-blue-200 backdrop-blur">
            <CloudSun size={42} strokeWidth={1.5} />
          </div>
        </div>
        <div className="mt-8 grid grid-cols-3 gap-2">
          {["Humidity", "Wind", "Feels like"].map((label, index) => (
            <div key={label} className="rounded-xl border border-white/10 bg-black/20 px-3 py-3 backdrop-blur">
              <p className="text-[10px] text-zinc-500">{label}</p>
              <p className="mt-1 text-xs font-medium text-zinc-200">{["42%", "9 km/h", "23°"][index]}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-64 overflow-hidden rounded-[1.4rem] border border-white/10 bg-zinc-950 p-5 font-mono">
      <div className="absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-emerald-400/10 blur-3xl" />
      <div className="flex items-center gap-2 border-b border-white/10 pb-4 text-xs text-zinc-500">
        <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
        <span className="ml-2">duplicate-scanner</span>
      </div>
      <div className="mt-5 space-y-3 text-xs">
        <p className="flex gap-3 text-zinc-300"><Terminal size={14} className="text-blue-300" /> python scanner.py ./files</p>
        <p className="text-zinc-500">Scanning files and generating SHA-256 hashes...</p>
        <p className="text-emerald-300">✓ Scan complete</p>
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-zinc-400">
          <div className="flex items-center gap-2 text-zinc-200"><FileSearch size={15} /> Results</div>
          <div className="mt-3 grid grid-cols-2 gap-y-2">
            <span>Files scanned</span><span className="text-right text-zinc-200">1,248</span>
            <span>Duplicate groups</span><span className="text-right text-zinc-200">Detected</span>
            <span>Export</span><span className="text-right text-blue-300">Ready</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 px-6 py-28 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }}>
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-blue-400">Projects</p>
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Things I&apos;ve built</h2>
              <p className="mt-4 max-w-2xl text-zinc-400">A selection of projects focused on useful products, automation, and real-world problem solving.</p>
            </div>
            <a href="https://github.com/MRAmin0" target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-2 text-sm text-zinc-400 transition hover:text-white">
              More on GitHub <ExternalLink size={15} />
            </a>
          </div>
        </motion.div>

        <div className="mt-14 space-y-7">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-4 transition duration-300 hover:border-blue-400/25 hover:bg-white/[0.05] md:p-5"
            >
              <div className="grid items-center gap-7 lg:grid-cols-[1.08fr_.92fr]">
                <motion.div className="relative" whileHover={{ scale: 1.015 }} transition={{ type: "spring", stiffness: 260, damping: 24 }}>
                  <div className="pointer-events-none absolute inset-0 z-10 rounded-[1.4rem] bg-gradient-to-tr from-transparent via-transparent to-blue-400/0 transition duration-500 group-hover:to-blue-400/10" />
                  <ProjectVisual type={project.type} />
                </motion.div>
                <div className="px-2 pb-3 md:px-4 lg:py-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-xs text-zinc-600">PROJECT / 0{index + 1}</span>
                    {project.featured && <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-[11px] font-medium text-blue-300">Featured</span>}
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold tracking-tight md:text-3xl">{project.title}</h3>
                  <p className="mt-4 max-w-xl leading-relaxed text-zinc-400">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((item) => <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">{item}</span>)}
                  </div>
                  <div className="mt-8 flex flex-wrap gap-3 text-sm">
                    <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-zinc-300 transition hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"><FaGithub size={18} /> Source Code</a>
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 font-medium text-black transition hover:-translate-y-0.5 hover:bg-zinc-200"><ExternalLink size={17} /> Live Demo</a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
