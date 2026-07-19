"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6">
      <div
        className="
        max-w-6xl
        mx-auto
        w-full
        grid
        md:grid-cols-2
        gap-12
        items-center
      "
      >
        {/* Text */}
        <motion.div
          initial={{
            opacity: 0,
            x: -40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <p className="text-blue-400 mb-4 font-mono">Hello, I'm</p>

          <h1
            className="
            text-5xl
            md:text-7xl
            font-bold
            leading-tight
          "
          >
            Amin Monajati
          </h1>

          <h2
            className="
            mt-4
            text-2xl
            md:text-3xl
            text-zinc-400
          "
          >
            Python Backend Developer
          </h2>

          <p
            className="
            mt-6
            text-zinc-400
            text-lg
            max-w-xl
            leading-relaxed
          "
          >
            I build scalable backend systems, REST APIs, and automation tools
            using Python, Django, and FastAPI.
          </p>

          <div
            className="
            flex
            flex-wrap
            gap-4
            mt-10
          "
          >
            <a
              href="https://github.com/MRAmin0"
              target="_blank"
              className="
                flex
                items-center
                gap-2
                px-5
                py-3
                rounded-xl
                bg-white
                text-black
                hover:bg-zinc-200
                transition
              "
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/amin-monajati/"
              target="_blank"
              className="
                flex
                items-center
                gap-2
                px-5
                py-3
                rounded-xl
                border
                border-white/10
                hover:bg-white/10
                transition
              "
            >
              <FaLinkedin />
              LinkedIn
            </a>

            <a
              href="#contact"
              className="
                flex
                items-center
                gap-2
                px-5
                py-3
                rounded-xl
                border
                border-white/10
                hover:bg-white/10
                transition
              "
            >
              <Mail size={18} />
              Contact
            </a>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            flex
            justify-center
          "
        >
          <div
            className="
            relative
            w-72
            h-72
            md:w-96
            md:h-96
          "
          >
            <div
              className="
              absolute
              inset-0
              rounded-full
              bg-blue-500/20
              blur-3xl
            "
            />

            <Image
              src="/images/amin.jpg"
              alt="Amin Monajati"
              fill
              className="
                relative
                object-cover
                rounded-full
                border
                border-white/10
              "
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
