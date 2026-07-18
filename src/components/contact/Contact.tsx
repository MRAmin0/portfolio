"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
        >
          <p className="text-blue-400 mb-4">Contact</p>

          <h2
            className="
            text-4xl md:text-6xl
            font-bold
          "
          >
            Let's build something together.
          </h2>

          <p
            className="
            mt-6
            text-zinc-400
            text-lg
          "
          >
            I'm open to freelance projects, collaborations, and opportunities in
            backend development.
          </p>

          <div
            className="
            mt-10
            flex
            justify-center
            gap-5
            flex-wrap
          "
          >
            <a
              href="mailto:aminmonajati9@gmail.com"
              className="
                flex
                items-center
                gap-2
                px-6
                py-3
                rounded-xl
                bg-white
                text-black
                hover:bg-zinc-200
                transition
              "
            >
              <Mail size={18} />
              Email Me
            </a>

            <a
              href="https://github.com/MRAmin0"
              target="_blank"
              className="
                flex
                items-center
                gap-2
                px-6
                py-3
                rounded-xl
                border border-white/10
                bg-white/5
                hover:bg-white/10
                transition
              "
            >
              <FaGithub size={18} />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/amin-monajati/"
              target="_blank"
              className="
                flex
                items-center
                gap-2
                px-6
                py-3
                rounded-xl
                border border-white/10
                bg-white/5
                hover:bg-white/10
                transition
              "
            >
              <FaLinkedin size={18} />
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
