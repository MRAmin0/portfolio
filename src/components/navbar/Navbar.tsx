"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="
        fixed top-6 left-1/2 -translate-x-1/2 z-50
        flex items-center justify-between
        w-[90%] max-w-5xl
        px-6 py-3
        rounded-2xl
        border border-white/10
        bg-black/40
        backdrop-blur-xl
      "
    >
      <div className="font-bold text-xl tracking-tight">
        Amin<span className="text-blue-400">.</span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
        <a href="#about" className="hover:text-white transition">
          About
        </a>

        <a href="#projects" className="hover:text-white transition">
          Projects
        </a>

        <a href="#contact" className="hover:text-white transition">
          Contact
        </a>
      </div>

      <div className="flex items-center gap-4 text-sm">
        <a
          href="https://github.com/MRAmin0"
          target="_blank"
          className="text-zinc-400 hover:text-white transition"
        >
          <FaGithub size={18} />
        </a>

        <a
          href="https://www.linkedin.com/in/amin-monajati/"
          target="_blank"
          className="text-zinc-400 hover:text-white transition"
        >
          <FaLinkedin size={18} />
        </a>

        <a
          href="mailto:aminmonajati9@gmail.com"
          className="text-zinc-400 hover:text-white transition"
        >
          <Mail size={18} />
        </a>
      </div>
    </motion.nav>
  );
}
