import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Cpu,
  Database,
  Network,
  Zap,
  Trophy,
} from "lucide-react";
import { Section } from "./Section";

const FOCUS = [
  { icon: Cpu, label: "Spring Boot" },
  { icon: Database, label: "C++ / Systems" },
  { icon: Network, label: "Distributed Systems" },
  { icon: Zap, label: "Performance" },
  { icon: Trophy, label: "Competitive Programming" },
];

const TIMELINE = [
  {
    icon: GraduationCap,
    type: "Education",
    title: "B.Tech, Computer Science",
    org: "Poornima University, Jaipur, Rajasthan, India",
    period: "2023 — 2027",
    detail:
      "CGPA 9.04 · Coursework in AI, ML, OS, DBMS, Networks, Dsa etc.",
  },
  {
    icon: Briefcase,
    type: "Experience",
    title: "SWE Intern @ AGODA",
    org: "Agoda Company Pte. Ltd.",
    period: "June 2026 - Dec 2026",
    detail:
      "Currently working with Agoda’s RTA Cars (APAC) team, contributing to backend engineering and large-scale travel systems.",
  },
  {
    icon: Trophy,
    type: "Journey",
    title: "Competitive Programming",
    org: "Leetcode · Codeforces",
    period: "2024 — Present",
    detail:
      "Specialist on CF, Guardian on LeetCode. 2000+ problems across DSA, graphs, DP, and number theory.",
  },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="// about"
      title={
        <>
          Engineer at the intersection of{" "}
          <span className="text-gradient-static">systems</span> &{" "}
          <span className="text-gradient-static">scale</span>.
        </>
      }
      description="I'm a software engineer focused on building robust backends and high-performance systems. I love digging deep — into databases, into protocols, into the JVM, into cache lines."
    >
      <div className="grid gap-6 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 rounded-2xl border border-[#a3e635]/15 bg-[#0e1511]/80 p-6 backdrop-blur-md transition-all duration-300 hover:border-[#a3e635]/25 hover:bg-[#111a14]/90"
        >
          <h3 className="font-display text-xl font-semibold text-white">
            Core focus
          </h3>

          <p className="mt-2 text-sm text-[#8f9d93]">
            Backend, systems, and the algorithmic foundations that make them
            fly.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {FOCUS.map((f, i) => (
              <motion.span
                key={f.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#a3e635]/15 bg-[#131c17] px-3 py-1.5 text-xs font-medium text-[#c8d2cb] transition-all duration-200 hover:border-[#a3e635]/40 hover:bg-[#18250f] hover:text-[#d9f99d]"
              >
                <f.icon className="size-3.5 text-[#a3e635]" />
                {f.label}
              </motion.span>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-[#a3e635]/10 bg-[#080c0a]/70 p-4 font-mono text-xs leading-relaxed text-[#7f8d84]">
            <span className="text-[#a3e635]">$</span> whoami
            <br />
            <span className="text-[#f4f7f2]">saumya</span> — engineer who
            believes the best abstraction is the one you don't notice.
          </div>
        </motion.div>

        <div className="space-y-4 lg:col-span-3">
          {TIMELINE.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-[#a3e635]/12 bg-[#0e1511]/80 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-[#a3e635]/30 hover:bg-[#111a14]/90"
            >
              <div className="flex items-start gap-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-[#a3e635]/20 bg-[#18250f] text-[#a3e635] transition-all duration-300 group-hover:border-[#a3e635]/40 group-hover:bg-[#1c2b12]">
                  <t.icon className="size-5" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 font-mono text-xs text-[#7f8d84]">
                    <span>{t.type}</span>
                    <span className="text-[#4f5b53]">·</span>
                    <span>{t.period}</span>
                  </div>

                  <h4 className="mt-0.5 font-semibold text-[#f4f7f2]">
                    {t.title}
                  </h4>

                  <div className="text-sm text-[#a3e635]">
                    {t.org}
                  </div>

                  <p className="mt-2 text-sm leading-relaxed text-[#8f9d93]">
                    {t.detail}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}