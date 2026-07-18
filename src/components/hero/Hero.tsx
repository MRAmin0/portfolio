"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="
          absolute top-1/3 left-1/2 
          -translate-x-1/2
          w-[500px] h-[500px]
          bg-blue-500/20
          rounded-full
          blur-[120px]
        " />
      </div>

      {/* Grid */}
      <div className="
        absolute inset-0 -z-20
        bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),
        linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]
        bg-[size:40px_40px]
      " />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl text-center"
      >

        <div className="
          inline-flex items-center gap-2
          px-4 py-2 mb-8
          rounded-full
          border border-white/10
          bg-white/5
          text-sm text-zinc-300
        ">
          <Code2 size={16} className="text-blue-400" />
          Python Backend Developer
        </div>


        <h1 className="
          text-5xl md:text-7xl
          font-bold
          tracking-tight
        ">
          Building{" "}
          <span className="text-blue-400">
            Backend Systems
          </span>
          <br />
          That Solve Real Problems
        </h1>


        <p className="
          mt-8
          text-lg md:text-xl
          text-zinc-400
          max-w-2xl
          mx-auto
          leading-relaxed
        ">
          I build Python applications, automation tools,
          and REST APIs with clean architecture and modern technologies.
        </p>


        <div className="
          mt-10
          flex flex-col sm:flex-row
          justify-center
          gap-4
        ">

          <a
            href="#projects"
            className="
              group
              flex items-center justify-center gap-2
              px-6 py-3
              rounded-xl
              bg-white
              text-black
              font-medium
              hover:bg-zinc-200
              transition
            "
          >
            View Projects

            <ArrowRight
              size={18}
              className="
                group-hover:translate-x-1
                transition
              "
            />
          </a>


          <a
            href="#contact"
            className="
              px-6 py-3
              rounded-xl
              border border-white/10
              bg-white/5
              hover:bg-white/10
              transition
            "
          >
            Contact Me
          </a>

        </div>


      </motion.div>

    </section>
  );
}