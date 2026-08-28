"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaTelegramPlane } from "react-icons/fa";

export default function Contact() {
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const mailSubject = subject.trim() || "Project Request";
    const mailBody = [
      "Hi Amin,",
      "",
      "I would like to discuss a project with you.",
      "",
      description.trim(),
      "",
      "— Sent from amin-monajati.vercel.app",
    ].join("\n");

    window.location.href = `mailto:aminmonajati9@gmail.com?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
  };

  return (
    <section id="contact" className="scroll-mt-24 px-6 py-28 md:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] px-6 py-14 text-center sm:px-10 md:py-20"
        >
          <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-500/15 blur-[90px]" />
          <div className="relative">
            <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-blue-400">Contact</p>
            <h2 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">Let&apos;s build something together.</h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
              I&apos;m open to freelance projects, collaborations, and opportunities in backend development. Reach out by email, Telegram, or send a project request below.
            </p>

            <a
              href="mailto:aminmonajati9@gmail.com"
              className="mt-9 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-medium text-black transition hover:-translate-y-0.5 hover:bg-zinc-200"
            >
              <Mail size={18} /> Email Me <ArrowUpRight size={17} />
            </a>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href="https://github.com/MRAmin0" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-zinc-300 transition hover:bg-white/10 hover:text-white">
                <FaGithub size={18} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/amin-monajati/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-zinc-300 transition hover:bg-white/10 hover:text-white">
                <FaLinkedin size={18} /> LinkedIn
              </a>
              <a href="https://t.me/amin.m8320" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-zinc-300 transition hover:bg-white/10 hover:text-white">
                <FaTelegramPlane size={18} /> @amin.m8320
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto mt-8 max-w-3xl rounded-[1.75rem] border border-white/10 bg-zinc-950/70 p-5 sm:p-7"
        >
          <div className="mb-6 flex items-start justify-between gap-5">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-blue-400">Project Request</p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">Have something in mind?</h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-zinc-500">
                Share a short brief. Submitting will open your email app with the project details ready to send.
              </p>
            </div>
            <div className="hidden rounded-xl border border-white/10 bg-white/5 p-3 text-zinc-500 sm:block">
              <Send size={18} />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="project-subject" className="mb-2 block text-sm font-medium text-zinc-300">
                Subject
              </label>
              <input
                id="project-subject"
                type="text"
                value={subject}
                onChange={(event) => setSubject(event.target.value)}
                placeholder="e.g. Backend API for my product"
                required
                maxLength={100}
                className="w-full rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-500/60 focus:bg-white/[0.05] focus:ring-4 focus:ring-blue-500/10"
              />
            </div>

            <div>
              <label htmlFor="project-description" className="mb-2 block text-sm font-medium text-zinc-300">
                Description
              </label>
              <textarea
                id="project-description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                placeholder="Tell me what you want to build, the main features, and anything important I should know..."
                required
                rows={5}
                maxLength={1800}
                className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm leading-6 text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-500/60 focus:bg-white/[0.05] focus:ring-4 focus:ring-blue-500/10"
              />
              <div className="mt-2 text-right font-mono text-[11px] text-zinc-600">{description.length}/1800</div>
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-zinc-200 sm:w-auto"
            >
              Send Project Request <Send size={16} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
