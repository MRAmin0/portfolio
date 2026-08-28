"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ArrowDown, Mail } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const commandSequence = [
  { command: "whoami", output: ["Amin Monajati"] },
  { command: "cat focus.txt", output: ["› Python Backend Development", "› Django & FastAPI", "› REST APIs & Automation"] },
  { command: "status", output: ["OPEN TO OPPORTUNITIES"] },
];

function useTypedText(text: string, active: boolean, speed = 58) {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (!active) {
      setTyped("");
      return;
    }

    let index = 0;
    const timer = window.setInterval(() => {
      index += 1;
      setTyped(text.slice(0, index));
      if (index >= text.length) window.clearInterval(timer);
    }, speed);

    return () => window.clearInterval(timer);
  }, [active, speed, text]);

  return typed;
}

function Prompt({ command, active }: { command: string; active: boolean }) {
  const typed = useTypedText(command, active);
  return (
    <p className="text-zinc-500">
      <span className="text-emerald-400">amin@portfolio</span>:<span className="text-blue-400">~</span>$ {typed}
      {active && typed.length < command.length && (
        <motion.span aria-hidden animate={{ opacity: [1, 0, 1] }} transition={{ duration: 0.8, repeat: Infinity }} className="ml-0.5 inline-block h-4 w-1.5 translate-y-0.5 bg-zinc-300" />
      )}
    </p>
  );
}

export default function Hero() {
  const [step, setStep] = useState(0);
  const timings = useMemo(() => [950, 1850, 3250, 4450], []);

  useEffect(() => {
    const timers = timings.map((time, index) => window.setTimeout(() => setStep(index + 1), time));
    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, [timings]);

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 md:grid-cols-[1.15fr_.85fr]">
        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1.5 text-sm text-blue-300">
            <motion.span className="h-2 w-2 rounded-full bg-emerald-400" animate={{ opacity: [1, 0.4, 1], scale: [1, 0.8, 1] }} transition={{ repeat: Infinity, duration: 1.8 }} />
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
            <a href="https://github.com/MRAmin0" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 transition hover:-translate-y-0.5 hover:bg-white/10"><FaGithub /> GitHub</a>
            <a href="https://www.linkedin.com/in/amin-monajati/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 transition hover:-translate-y-0.5 hover:bg-white/10"><FaLinkedin /> LinkedIn</a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 transition hover:-translate-y-0.5 hover:bg-white/10"><Mail size={18} /> Contact</a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-md">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-blue-500/10 blur-3xl" />
            <motion.div whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 260, damping: 20 }} className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b0d10]/95 shadow-2xl shadow-blue-950/30">
              <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.035] px-4 py-3">
                <div className="flex gap-2"><span className="h-2.5 w-2.5 rounded-full bg-red-400/80" /><span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" /><span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" /></div>
                <span className="font-mono text-[11px] text-zinc-500">amin@portfolio: ~</span><span className="w-10" />
              </div>

              <div className="min-h-[310px] p-5 font-mono text-sm leading-7 sm:p-7">
                <Prompt command={commandSequence[0].command} active={step >= 1} />
                {step >= 2 && <motion.p initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} className="mt-1 text-zinc-200">Amin Monajati</motion.p>}

                {step >= 2 && <div className="mt-5"><Prompt command={commandSequence[1].command} active={step >= 2} /></div>}
                {step >= 3 && (
                  <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="mt-1 space-y-1 text-zinc-300">
                    <p><span className="text-blue-400">›</span> Python Backend Development</p><p><span className="text-blue-400">›</span> Django &amp; FastAPI</p><p><span className="text-blue-400">›</span> REST APIs &amp; Automation</p>
                  </motion.div>
                )}

                {step >= 3 && <div className="mt-5"><Prompt command={commandSequence[2].command} active={step >= 3} /></div>}
                {step >= 4 && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-1 flex items-center gap-2 text-emerald-300"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> OPEN TO OPPORTUNITIES</motion.p>}

                {step >= 4 && <p className="mt-5 text-zinc-500"><span className="text-emerald-400">amin@portfolio</span>:<span className="text-blue-400">~</span>$ <motion.span aria-hidden animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity }} className="inline-block h-4 w-2 translate-y-0.5 bg-zinc-300" /></p>}
              </div>
            </motion.div>
            <motion.div animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 3 }} className="absolute -bottom-3 -right-3 rounded-lg border border-blue-400/20 bg-blue-400/10 px-3 py-1.5 font-mono text-xs text-blue-300 backdrop-blur">build • learn • iterate</motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
