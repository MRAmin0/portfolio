"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Mail, Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Focus", href: "#focus" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = links.map((link) => document.querySelector(link.href)).filter(Boolean) as Element[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0.05, 0.2, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.nav initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fixed top-4 left-1/2 z-50 flex w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2 items-center justify-between rounded-2xl border border-white/10 bg-black/70 px-5 py-3 shadow-2xl shadow-black/20 backdrop-blur-xl md:top-6 md:px-6" aria-label="Main navigation">
        <a href="#top" className="text-xl font-bold tracking-tight" onClick={() => setOpen(false)}>Amin<span className="text-blue-400">.</span></a>

        <div className="hidden items-center gap-2 text-sm text-zinc-300 md:flex">
          {links.map((link) => {
            const isActive = active === link.href;
            return (
              <a key={link.href} href={link.href} className={`relative rounded-lg px-3 py-2 transition ${isActive ? "text-white" : "hover:text-white"}`}>
                {isActive && <motion.span layoutId="nav-active" className="absolute inset-0 -z-10 rounded-lg border border-white/10 bg-white/[0.07]" transition={{ type: "spring", stiffness: 350, damping: 30 }} />}
                {link.label}
              </a>
            );
          })}
        </div>

        <div className="hidden items-center gap-4 text-sm sm:flex">
          <a href="https://github.com/MRAmin0" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-zinc-400 transition hover:text-white"><FaGithub size={18} /></a>
          <a href="https://www.linkedin.com/in/amin-monajati/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-zinc-400 transition hover:text-white"><FaLinkedin size={18} /></a>
          <a href="mailto:aminmonajati9@gmail.com" aria-label="Email" className="text-zinc-400 transition hover:text-white"><Mail size={18} /></a>
        </div>

        <button type="button" onClick={() => setOpen((value) => !value)} className="rounded-lg p-1 text-zinc-300 transition hover:bg-white/10 hover:text-white md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>{open ? <X size={22} /> : <Menu size={22} />}</button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="fixed top-20 left-1/2 z-40 w-[calc(100%-2rem)] -translate-x-1/2 rounded-2xl border border-white/10 bg-zinc-950/95 p-3 shadow-2xl backdrop-blur-xl md:hidden">
            <div className="flex flex-col">
              {links.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)} className={`rounded-xl px-4 py-3 transition ${active === link.href ? "bg-white/10 text-white" : "text-zinc-300 hover:bg-white/5 hover:text-white"}`}>{link.label}</a>)}
              <div className="mt-2 flex gap-2 border-t border-white/10 pt-3 sm:hidden">
                <a href="https://github.com/MRAmin0" target="_blank" rel="noreferrer" className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white/5 px-3 py-3 text-sm text-zinc-300"><FaGithub /> GitHub</a>
                <a href="mailto:aminmonajati9@gmail.com" className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white/5 px-3 py-3 text-sm text-zinc-300"><Mail size={17} /> Email</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
