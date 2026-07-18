"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
const projects = [
  {
    title: "Weatherly",
    description:
      "A modern weather application with real-time data, beautiful animations, and responsive design.",
    tech: ["Flutter", "Dart", "REST API", "OpenWeatherMap"],
    github: "https://github.com/MRAmin0/Weatherly",
  },
  {
    title: "Duplicate File Scanner",
    description:
      "A Python automation tool that detects duplicate files using SHA-256 hashing and exports structured results.",
    tech: ["Python", "Automation", "File Processing", "SHA-256"],
    github: "https://github.com/MRAmin0/Duplicate-File-Scanner",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
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
          <p className="text-blue-400 mb-4">Projects</p>

          <h2
            className="
            text-4xl md:text-5xl
            font-bold
          "
          >
            Things I've built
          </h2>
        </motion.div>

        <div
          className="
          mt-16
          grid
          md:grid-cols-2
          gap-8
        "
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.15,
              }}
              viewport={{
                once: true,
              }}
              className="
                rounded-3xl
                border border-white/10
                bg-white/5
                p-8
                hover:bg-white/10
                transition
              "
            >
              <h3
                className="
                text-2xl
                font-semibold
              "
              >
                {project.title}
              </h3>

              <p
                className="
                mt-4
                text-zinc-400
                leading-relaxed
              "
              >
                {project.description}
              </p>

              <div
                className="
                flex
                flex-wrap
                gap-2
                mt-6
              "
              >
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="
                      px-3
                      py-1
                      rounded-full
                      text-sm
                      bg-white/10
                      text-zinc-300
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-8">
                <a
                  href={project.github}
                  target="_blank"
                  className="
      flex
      items-center
      gap-2
      text-zinc-300
      hover:text-white
    "
                >
                  <FaGithub size={18} />
                  GitHub
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  className="
      flex
      items-center
      gap-2
      text-zinc-300
      hover:text-white
    "
                >
                  <ExternalLink size={18} />
                  Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
