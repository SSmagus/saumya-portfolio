import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Cpu, Database, Network, Zap, Trophy } from "lucide-react";
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
    detail: "CGPA 9.04 · Coursework in AI, ML, OS, DBMS, Networks, Dsa etc.",
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
      title={<>Engineer at the intersection of <span className="text-gradient-static">systems</span> & <span className="text-gradient-static">scale</span>.</>}
      description="I'm a software engineer focused on building robust backends and high-performance systems. I love digging deep — into databases, into protocols, into the JVM, into cache lines."
    >
      <div className="grid lg:grid-cols-5 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 glass glow-border rounded-2xl p-6"
        >
          <h3 className="font-display text-xl font-semibold">Core focus</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Backend, systems, and the algorithmic foundations that make them fly.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {FOCUS.map((f, i) => (
              <motion.span
                key={f.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1.5 text-xs font-medium hover:border-[color-mix(in_oklab,var(--glow)_50%,transparent)] hover:text-[var(--glow)] transition-colors"
              >
                <f.icon className="size-3.5" />
                {f.label}
              </motion.span>
            ))}
          </div>
          <div className="mt-6 rounded-xl bg-muted/40 p-4 font-mono text-xs text-muted-foreground leading-relaxed">
            <span className="text-[var(--glow)]">$</span> whoami<br />
            <span className="text-foreground">saumya</span> — engineer who believes
            the best abstraction is the one you don't notice.
          </div>
        </motion.div>

        <div className="lg:col-span-3 space-y-4">
          {TIMELINE.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass rounded-2xl p-5 hover:border-[color-mix(in_oklab,var(--glow)_40%,transparent)] transition-all hover:-translate-y-0.5"
            >
              <div className="flex items-start gap-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-[var(--glow)]/20 to-[var(--glow-2)]/20 border border-border text-[var(--glow)]">
                  <t.icon className="size-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                    <span>{t.type}</span>
                    <span>·</span>
                    <span>{t.period}</span>
                  </div>
                  <h4 className="mt-0.5 font-semibold text-foreground">{t.title}</h4>
                  <div className="text-sm text-[var(--glow)]">{t.org}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{t.detail}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
