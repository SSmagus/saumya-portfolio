import { motion } from "framer-motion";
import {
  Code,
  Server,
  Database,
  Wrench,
  Brain,
  Cpu,
} from "lucide-react";
import { Section } from "./Section";

const GROUPS = [
  {
    icon: Code,
    title: "Languages",
    items: ["Java", "C++", "Python", "SQL"],
  },
  {
    icon: Server,
    title: "Backend",
    items: [
      "Spring Boot",
      "Spring Security",
      "REST APIs",
      "GraphQL",
      "JWT",
      "Hibernate",
      "WebSockets",
    ],
  },
  {
    icon: Database,
    title: "Databases",
    items: ["MySQL", "MongoDB", "Redis", "SQLite"],
  },
  {
    icon: Wrench,
    title: "DevOps & Tools",
    items: [
      "Docker",
      "AWS EC2",
      "Git",
      "Linux",
      "Postman",
      "Vim",
      "CMake",
    ],
  },
  {
    icon: Cpu,
    title: "Systems & Performance",
    items: [
      "Multithreading",
      "Concurrency",
      "Memory Management",
      "Performance Optimization",
      "File I/O",
      "Thread Pools",
    ],
  },
  {
    icon: Brain,
    title: "Core CS",
    items: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Computer Networks",
      "DBMS",
      "Caching",
      "System Design",
    ],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="// stack"
      title={
        <>
          Tools I reach for,{" "}
          <span className="text-gradient-static">daily</span>.
        </>
      }
      description="A pragmatic stack tuned for performance and clarity. I pick the right tool for the job — not the loudest one."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {GROUPS.map((g, idx) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.55,
              delay: idx * 0.07,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0e1511]/80 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#a3e635]/25 hover:bg-[#111a14]/90"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#a3e635]/[0.035] blur-3xl transition-opacity duration-300 group-hover:bg-[#a3e635]/[0.07]" />

            <div className="pointer-events-none absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#a3e635]/0 to-transparent transition-all duration-500 group-hover:via-[#a3e635]/35" />

            <div className="relative flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-[#a3e635]/20 bg-[#18250f] text-[#a3e635] transition-all duration-300 group-hover:border-[#a3e635]/40 group-hover:bg-[#1c2b12] group-hover:shadow-[0_0_20px_rgba(163,230,53,0.08)]">
                  <g.icon className="size-[18px]" />
                </div>

                <div>
                  <h3 className="font-display font-semibold tracking-tight text-[#f4f7f2]">
                    {g.title}
                  </h3>

                  <div className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.16em] text-[#66736a]">
                    {String(idx + 1).padStart(2, "0")} / stack
                  </div>
                </div>
              </div>

              <div className="font-mono text-[10px] text-[#4f5b53]">
                {String(g.items.length).padStart(2, "0")}
              </div>
            </div>

            <div className="relative mt-5 flex flex-wrap gap-2">
              {g.items.map((it, i) => (
                <motion.span
                  key={it}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: idx * 0.07 + i * 0.035,
                    duration: 0.25,
                  }}
                  className="rounded-lg border border-white/[0.07] bg-[#080c0a]/70 px-2.5 py-1.5 font-mono text-[11px] text-[#aebbb2] transition-all duration-200 hover:border-[#a3e635]/30 hover:bg-[#18250f] hover:text-[#d9f99d]"
                >
                  {it}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}