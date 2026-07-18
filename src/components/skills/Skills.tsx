"use client";

import { motion } from "framer-motion";
import { FaPython, FaDatabase, FaDocker, FaGitAlt } from "react-icons/fa";

import {
  SiDjango,
  SiFastapi,
  SiJavascript,
  SiTypescript,
  SiPostman,
  SiFlutter,
} from "react-icons/si";

const skills = [
  {
    category: "Backend",
    items: [
      {
        name: "Python",
        icon: FaPython,
      },
      {
        name: "Django",
        icon: SiDjango,
      },
      {
        name: "FastAPI",
        icon: SiFastapi,
      },
    ],
  },

  {
    category: "Mobile",
    items: [
      {
        name: "Flutter",
        icon: SiFlutter,
      },
    ],
  },

  {
    category: "Tools",
    items: [
      {
        name: "Git",
        icon: FaGitAlt,
      },
      {
        name: "Docker",
        icon: FaDocker,
      },
      {
        name: "Postman",
        icon: SiPostman,
      },
    ],
  },

  {
    category: "Learning",
    items: [
      {
        name: "TypeScript",
        icon: SiTypescript,
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
      },
      {
        name: "Databases",
        icon: FaDatabase,
      },
    ],
  },
];

export default function Skills() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-blue-400 mb-4">Skills</p>

        <h2
          className="
          text-4xl md:text-5xl
          font-bold
        "
        >
          Technologies I work with
        </h2>

        <div
          className="
          mt-16
          grid
          md:grid-cols-2
          gap-8
        "
        >
          {skills.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.1,
              }}
              viewport={{
                once: true,
              }}
              className="
                rounded-2xl
                border border-white/10
                bg-white/5
                p-8
              "
            >
              <h3
                className="
                text-xl
                font-semibold
                mb-6
              "
              >
                {group.category}
              </h3>

              <div
                className="
                flex
                flex-wrap
                gap-4
              "
              >
                {group.items.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={skill.name}
                      className="
                        flex
                        items-center
                        gap-3
                        px-4
                        py-3
                        rounded-xl
                        bg-white/5
                        border border-white/10
                      "
                    >
                      <Icon size={22} />

                      <span>{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
