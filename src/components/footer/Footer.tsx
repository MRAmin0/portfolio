"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 px-6">
      <div
        className="
        max-w-6xl
        mx-auto
        flex
        flex-col
        md:flex-row
        items-center
        justify-between
        gap-6
      "
      >
        <p className="text-zinc-500 text-sm">
          © {new Date().getFullYear()} Amin Monajati. All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/MRAmin0"
            target="_blank"
            className="
              text-zinc-400
              hover:text-white
              transition
            "
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/amin-monajati/"
            target="_blank"
            className="
              text-zinc-400
              hover:text-white
              transition
            "
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
