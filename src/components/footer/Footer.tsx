import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-9">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-center text-sm text-zinc-500 sm:text-left">© {new Date().getFullYear()} Amin Monajati. Built with Next.js.</p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/MRAmin0" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-zinc-500 transition hover:text-white"><FaGithub size={19} /></a>
          <a href="https://www.linkedin.com/in/amin-monajati/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-zinc-500 transition hover:text-white"><FaLinkedin size={19} /></a>
          <a href="#top" aria-label="Back to top" className="ml-1 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-zinc-400 transition hover:bg-white/10 hover:text-white"><ArrowUp size={17} /></a>
        </div>
      </div>
      <p className="mt-5 text-center font-mono text-[10px] tracking-[0.2em] text-zinc-800">v6.2</p>
    </footer>
  );
}
