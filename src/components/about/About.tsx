"use client";

import { motion } from "framer-motion";
import { Code2, Server, Zap } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable and scalable software with modern development practices.",
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "Building APIs, automation tools, and backend solutions using Python.",
  },
  {
    icon: Zap,
    title: "Problem Solving",
    description:
      "Turning ideas and business needs into practical software solutions.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <p className="text-blue-400 mb-4">
            About Me
          </p>

          <h2 className="
            text-4xl md:text-5xl
            font-bold
            tracking-tight
          ">
            Building software with a
            backend mindset.
          </h2>

          <p className="
            mt-6
            text-zinc-400
            text-lg
            leading-relaxed
          ">
            I'm Amin, an IT student focused on Python backend
            development. I build automation tools, REST APIs,
            and practical software solutions while continuously
            improving my engineering skills.
          </p>

        </motion.div>


        <div className="
          mt-16
          grid
          md:grid-cols-3
          gap-6
        ">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="
                  p-6
                  rounded-2xl
                  border border-white/10
                  bg-white/5
                  hover:bg-white/10
                  transition
                "
              >

                <Icon
                  className="text-blue-400 mb-5"
                  size={28}
                />

                <h3 className="
                  text-xl
                  font-semibold
                ">
                  {feature.title}
                </h3>

                <p className="
                  mt-3
                  text-zinc-400
                ">
                  {feature.description}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}