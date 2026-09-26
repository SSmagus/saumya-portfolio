import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  ExternalLink,
  X,
  ArrowUpRight,
} from "lucide-react";

import { Section } from "./Section";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Project = {
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  category: "Backend" | "Systems" | "Distributed" | "Security";
  github?: string;
  demo?: string;
  gradient: string;
};

const PROJECTS: Project[] = [
  {
    title: "LeetHost",
    tagline: "Scalable competitive programming platform",
    description:
      "Competitive programming platform backend built with Spring Boot, featuring GraphQL APIs, Discord account verification, concurrent duel handling, and real-time competitive session management.",
    highlights: [
      "GraphQL-powered backend for tracking 3000+ LeetCode problems and user stats",
      "Discord ↔ LeetCode verification and authenticated profile linking",
      "Multithreaded duel engine with Elo-based ranking",
      "Dockerized deployment on AWS EC2 with persistent uptime",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "GraphQL",
      "MySQL",
      "Docker",
      "AWS EC2",
      "JWT",
    ],
    category: "Backend",
    github: "https://github.com/SSmagus/Leetcode-Discord-Bot",
    demo: "#",
    gradient:
      "from-[#a3e635]/30 via-[#24351b] to-[#121a14]",
  },
  {
    title: "Nearby",
    tagline: "Location-aware realtime social platform",
    description:
      "Distributed social platform supporting nearby discussion rooms, events, requests, and realtime communication using WebSockets, Redis GEO queries, and JWT-secured APIs.",
    highlights: [
      "Realtime event, discussion, and request-based rooms",
      "Nearby room discovery using Redis GEO indexing",
      "Persistent bidirectional communication with WebSockets",
      "JWT authentication and request filtering via Spring Security",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "WebSocket",
      "Redis",
      "MongoDB",
      "JWT",
    ],
    category: "Distributed",
    github: "https://github.com/SSmagus/Proximity",
    demo: "#",
    gradient:
      "from-[#7dd3fc]/25 via-[#183039] to-[#121a18]",
  },
  {
    title: "Vector Database Engine",
    tagline: "High-performance vector similarity engine",
    description:
      "Custom vector similarity engine in C++ implementing clustering-based ANN retrieval, memory-efficient vector layouts, and optimized high-dimensional search pipelines.",
    highlights: [
      "Centroid-based clustering reducing query scan space by 60–70%",
      "Configurable k-NN retrieval pipeline for vector search",
      "Optimized memory layouts for scalable embedding storage",
      "Designed for high-dimensional similarity retrieval workloads",
    ],
    stack: [
      "C++",
      "Performance Optimization",
      "STL",
      "CMake",
    ],
    category: "Systems",
    github: "https://github.com/SSmagus/vectorDb",
    gradient:
      "from-[#86efac]/25 via-[#193323] to-[#121a18]",
  },
  {
    title: "Multithreaded Log Search Engine",
    tagline: "Parallel large-scale log analyzer",
    description:
      "Multithreaded log search engine in C++ designed for high-throughput parallel scanning of large log files using worker thread pools and optimized file I/O.",
    highlights: [
      "Parallel scanning architecture for 100MB+ log files",
      "Configurable worker thread pool for concurrent execution",
      "Optimized throughput with O(N / T) search scaling",
      "Thread-safe aggregation and high-performance file handling",
    ],
    stack: [
      "C++",
      "Multithreading",
      "POSIX",
      "File I/O",
    ],
    category: "Systems",
    github:
      "https://github.com/SSmagus/multithreaded-log-search",
    gradient:
      "from-[#fbbf24]/22 via-[#302714] to-[#151812]",
  },
  {
    title: "Flow State Zone",
    tagline: "CLI productivity and CP workbench",
    description:
      "C++ CLI workspace for competitive programmers featuring structured task management, Codeforces integration, AI-powered hints, and SQLite persistence.",
    highlights: [
      "Integrated Codeforces API for automatic problem metadata fetching",
      "Progressive AI hint pipeline using Gemini API",
      "SQLite-backed persistence for tasks and reflections",
      "Structured CLI workflow for CP practice management",
    ],
    stack: [
      "C++",
      "SQLite",
      "REST APIs",
      "Gemini API",
    ],
    category: "Backend",
    github:
      "https://github.com/SSmagus/flow-zone-cli-tool",
    gradient:
      "from-[#c4b5fd]/22 via-[#29233b] to-[#151219]",
  },
  {
    title: "Authentication & Authorization Service",
    tagline: "Secure JWT authentication backend",
    description:
      "Authentication backend implementing JWT-based security, account verification, password reset flows, and stateless session management using Spring Security.",
    highlights: [
      "JWT-based stateless authentication flow",
      "Secure password reset and account verification",
      "Custom Spring Security authentication filters",
      "BCrypt password hashing and token validation",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "MySQL",
    ],
    category: "Security",
    github:
      "https://github.com/SSmagus/email-auth-service",
    gradient:
      "from-[#fb7185]/20 via-[#321a22] to-[#171214]",
  },
];

const FILTERS = [
  "All",
  "Backend",
  "Systems",
  "Distributed",
  "Security",
] as const;

export function Projects() {
  const [filter, setFilter] =
    useState<(typeof FILTERS)[number]>("All");

  const [active, setActive] = useState<Project | null>(null);

  const filtered =
    filter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filter);

  const duplicated = [...filtered, ...filtered];

  return (
    <Section
      id="projects"
      eyebrow="// projects"
      title={
        <>
          Things I've{" "}
          <span className="text-gradient-static">
            built
          </span>
          .
        </>
      }
      description="Production-grade systems, engineering experiments, and ideas I wanted to see exist."
    >
      <div className="relative mb-10">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#a3e635]/25 to-transparent" />

        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#a3e635]/[0.04] to-transparent blur-2xl" />
      </div>

      <div className="mb-7 flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={cn(
              "rounded-full border px-3.5 py-1 text-xs font-medium transition-all duration-200",
              filter === f
                ? "border-[#a3e635]/40 bg-[#a3e635]/10 text-[#d9f99d] shadow-[0_0_20px_rgba(163,230,53,0.06)]"
                : "border-white/[0.10] bg-[#121a15]/80 text-[#a7b4aa] hover:border-[#a3e635]/25 hover:text-[#d0dad2]"
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="relative left-1/2 w-screen -translate-x-1/2 space-y-4 overflow-hidden py-5">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 38,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex w-max gap-4"
        >
          {duplicated.map((p, i) => (
            <ProjectCard
              key={`top-${p.title}-${i}`}
              project={p}
              onClick={() => setActive(p)}
            />
          ))}
        </motion.div>

        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            duration: 42,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex w-max gap-4"
        >
          {[...duplicated].reverse().map((p, i) => (
            <ProjectCard
              key={`bottom-${p.title}-${i}`}
              project={p}
              onClick={() => setActive(p)}
            />
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[100] grid place-items-center bg-[#080c0a]/85 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                y: 20,
              }}
              onClick={(e) => e.stopPropagation()}
              className="glass-strong max-h-[90vh] w-full max-w-2xl overflow-auto rounded-3xl border border-[#a3e635]/15"
            >
              <div
                className={cn(
                  "relative h-40 overflow-hidden bg-gradient-to-br",
                  active.gradient
                )}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#111813] to-transparent" />

                <button
                  onClick={() => setActive(null)}
                  className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-lg border border-white/[0.12] bg-[#080c0a]/55 text-[#c8d2cb] backdrop-blur-md transition-colors hover:border-[#a3e635]/30 hover:text-[#d9f99d]"
                >
                  <X className="size-4" />
                </button>
              </div>

              <div className="p-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#a3e635]">
                  {active.category}
                </div>

                <h3 className="mt-1 font-display text-2xl font-black text-[#f4f7f2]">
                  {active.title}
                </h3>

                <p className="mt-1 text-sm text-[#b5c1b8]">
                  {active.tagline}
                </p>

                <p className="mt-4 text-sm leading-relaxed text-[#9eaca3]">
                  {active.description}
                </p>

                <h4 className="mt-5 text-[10px] uppercase tracking-[0.18em] text-[#748078]">
                  Highlights
                </h4>

                <ul className="mt-2.5 space-y-1.5 text-sm">
                  {active.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="text-[#a3e635]">
                        ▸
                      </span>

                      <span className="text-[#b5c1b8]">
                        {h}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {active.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-white/[0.09] bg-[#080c0a]/60 px-2 py-1 font-mono text-[10px] text-[#a5b2a9]"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-2">
                  {active.github && (
                    <Button
                      variant="hero"
                      size="sm"
                      asChild
                    >
                      <a
                        href={active.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Github />
                        View Code
                      </a>
                    </Button>
                  )}

                  {active.demo && (
                    <Button
                      variant="glass"
                      size="sm"
                      asChild
                    >
                      <a
                        href={active.demo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <ExternalLink />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}

function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  return (
    <motion.article
      whileHover={{
        y: -5,
        scale: 1.015,
      }}
      transition={{
        duration: 0.2,
        ease: "easeOut",
      }}
      onClick={onClick}
      className="group relative w-[400px] shrink-0 cursor-pointer overflow-hidden rounded-2xl border-[2px] border-white/[0.20] bg-[#151d18]/95 backdrop-blur-md transition-colors duration-300 hover:border-[#a3e635]/30 hover:bg-[#19231c]"
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-[0.10] blur-3xl transition-opacity duration-300 group-hover:opacity-[0.22]",
          project.gradient
        )}
      />

      <div
        className={cn(
          "relative h-40 overflow-hidden bg-gradient-to-br",
          project.gradient
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#151d18] via-[#111813]/20 to-transparent" />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
          <div>
            <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#b9c6bc]">
              {project.category}
            </div>

            <h3 className="mt-0.5 font-display text-xl font-black tracking-tight text-[#f5f8f4]">
              {project.title}
            </h3>
          </div>

          <div className="grid h-8 w-8 place-items-center rounded-lg border border-white/20 bg-[#0c110e]/60 text-[#dce5de] opacity-0 backdrop-blur-md transition-all duration-200 group-hover:opacity-100 group-hover:text-[#d9f99d]">
            <ArrowUpRight className="size-4" />
          </div>
        </div>
      </div>

      <div className="relative p-4">
        <p className="text-xs font-medium leading-relaxed text-[#bdc9c0]">
          {project.tagline}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 5).map((item) => (
            <span
              key={item}
              className="rounded-md border border-white/[0.13] bg-[#0c110e]/70 px-2 py-1 font-mono text-[9px] text-[#aebbb2] transition-all duration-200 group-hover:border-[#a3e635]/20 group-hover:text-[#d1e3d4]"
            >
              {item}
            </span>
          ))}

          {project.stack.length > 5 && (
            <span className="rounded-md border border-white/[0.13] bg-[#0c110e]/70 px-2 py-1 font-mono text-[9px] text-[#929f96]">
              +{project.stack.length - 5}
            </span>
          )}
        </div>

        <div className="mt-3 flex gap-1.5">
          {project.github && (
            <Button
              variant="glass"
              size="sm"
              className="h-7 border-white/[0.13] bg-white/[0.04] px-2.5 text-[10px] text-[#c8d2cb] hover:border-[#a3e635]/25 hover:bg-[#a3e635]/[0.06] hover:text-[#d9f99d]"
              asChild
              onClick={(e) => e.stopPropagation()}
            >
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                <Github className="size-3" />
                Code
              </a>
            </Button>
          )}

          {project.demo && (
            <Button
              variant="glass"
              size="sm"
              className="h-7 border-white/[0.13] bg-white/[0.04] px-2.5 text-[10px] text-[#c8d2cb] hover:border-[#a3e635]/25 hover:bg-[#a3e635]/[0.06] hover:text-[#d9f99d]"
              asChild
              onClick={(e) => e.stopPropagation()}
            >
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
              >
                <ExternalLink className="size-3" />
                Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.article>
  );
}