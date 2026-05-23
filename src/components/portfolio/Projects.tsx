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

    gradient: "from-[#8ba8ff]/40 to-[#6e86ff]/40",
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

    gradient: "from-[#f2a7c5]/40 to-[#c6b7ff]/40",
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

    gradient: "from-[#8be0c8]/40 to-[#6edcc1]/40",
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

    github: "https://github.com/SSmagus/multithreaded-log-search",

    gradient: "from-[#ffd89b]/40 to-[#ffb86b]/40",
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

    github: "https://github.com/SSmagus/flow-zone-cli-tool",

    gradient: "from-[#b8b5ff]/40 to-[#8f94fb]/40",
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

    github: "https://github.com/SSmagus/email-auth-service",

    gradient: "from-[#f7b0c8]/40 to-[#ff8a8a]/40",
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
      {/* separator */}
      <div className="relative mb-16">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#c6b7ff]/50 to-transparent" />

        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#8ba8ff]/8 to-transparent blur-2xl" />
      </div>

      {/* filters */}
      <div className="mb-10 flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={cn(
              "rounded-full px-4 py-1.5 text-sm transition-all border",
              filter === f
                ? "bg-gradient-to-r from-[#8ba8ff] to-[#f2a7c5] text-white border-transparent shadow-[0_8px_30px_rgba(139,168,255,0.25)]"
                : "glass text-[#687086] border-white/40 hover:text-[#2a3042]"
            )}
          >
            {f}
          </button>
        ))}
      </div>

      {/* rows */}
      <div className="relative left-1/2 w-screen -translate-x-1/2 space-y-6 overflow-hidden py-2">
        {/* TOP */}
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 38,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-6 w-max"
        >
          {duplicated.map((p, i) => (
            <motion.article
              key={`top-${p.title}-${i}`}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              transition={{ duration: 0.25 }}
              onClick={() => setActive(p)}
              className="group relative glass rounded-[2rem] overflow-hidden cursor-pointer border border-white/40 min-w-[420px] max-w-[420px]"
            >
              {/* hover glow */}
              <div
                className={cn(
                  "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl bg-gradient-to-br",
                  p.gradient
                )}
              />

              {/* preview */}
              <div
                className={cn(
                  "relative h-52 bg-gradient-to-br overflow-hidden",
                  p.gradient
                )}
              >
                <div className="absolute inset-0 bg-white/10" />

                <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent" />

                <div className="absolute bottom-4 left-5">
                  <div className="font-mono text-xs text-[#5b6275]">
                    {p.category}
                  </div>

                  <h3 className="mt-1 font-display text-2xl font-black text-[#2a3042]">
                    {p.title}
                  </h3>
                </div>

                <div className="absolute top-4 right-4 grid h-10 w-10 place-items-center rounded-xl bg-white/50 backdrop-blur-md border border-white/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <ArrowUpRight className="size-4 text-[#2a3042]" />
                </div>
              </div>

              {/* content */}
              <div className="relative p-6">
                <p className="text-sm text-[#7b8194] font-medium">
                  {p.tagline}
                </p>

                <p className="mt-4 text-[15px] leading-relaxed text-[#687086]">
                  {p.description}
                </p>

                <p className="mt-5 text-sm text-[#7b8194]">
                  {p.stack.join(" · ")}
                </p>

                <div className="mt-6 flex gap-2">
                  {p.github && (
                    <Button
                      variant="glass"
                      size="sm"
                      asChild
                      onClick={(e) =>
                        e.stopPropagation()
                      }
                    >
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Github />
                        Code
                      </a>
                    </Button>
                  )}

                  {p.demo && (
                    <Button
                      variant="glass"
                      size="sm"
                      asChild
                      onClick={(e) =>
                        e.stopPropagation()
                      }
                    >
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <ExternalLink />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* BOTTOM */}
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            duration: 42,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-6 w-max"
        >
          {[...duplicated].reverse().map((p, i) => (
            <motion.article
              key={`bottom-${p.title}-${i}`}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              transition={{ duration: 0.25 }}
              onClick={() => setActive(p)}
              className="group relative glass rounded-[2rem] overflow-hidden cursor-pointer border border-white/40 min-w-[420px] max-w-[420px]"
            >
              <div
                className={cn(
                  "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl bg-gradient-to-br",
                  p.gradient
                )}
              />

              <div
                className={cn(
                  "relative h-52 bg-gradient-to-br overflow-hidden",
                  p.gradient
                )}
              >
                <div className="absolute inset-0 bg-white/10" />

                <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent" />

                <div className="absolute bottom-4 left-5">
                  <div className="font-mono text-xs text-[#5b6275]">
                    {p.category}
                  </div>

                  <h3 className="mt-1 font-display text-2xl font-black text-[#2a3042]">
                    {p.title}
                  </h3>
                </div>

                <div className="absolute top-4 right-4 grid h-10 w-10 place-items-center rounded-xl bg-white/50 backdrop-blur-md border border-white/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <ArrowUpRight className="size-4 text-[#2a3042]" />
                </div>
              </div>

              <div className="relative p-6">
                <p className="text-sm text-[#7b8194] font-medium">
                  {p.tagline}
                </p>

                <p className="mt-4 text-[15px] leading-relaxed text-[#687086]">
                  {p.description}
                </p>

                <p className="mt-5 text-sm text-[#7b8194]">
                  {p.stack.join(" · ")}
                </p>

                <div className="mt-6 flex gap-2">
                  {p.github && (
                    <Button
                      variant="glass"
                      size="sm"
                      asChild
                      onClick={(e) =>
                        e.stopPropagation()
                      }
                    >
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Github />
                        Code
                      </a>
                    </Button>
                  )}

                  {p.demo && (
                    <Button
                      variant="glass"
                      size="sm"
                      asChild
                      onClick={(e) =>
                        e.stopPropagation()
                      }
                    >
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <ExternalLink />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      {/* modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[100] grid place-items-center bg-background/80 backdrop-blur-md p-4"
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
              onClick={(e) =>
                e.stopPropagation()
              }
              className="glass-strong rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-auto border border-white/40"
            >
              <div
                className={cn(
                  "relative h-52 bg-gradient-to-br",
                  active.gradient
                )}
              >
                <button
                  onClick={() => setActive(null)}
                  className="absolute top-4 right-4 grid h-10 w-10 place-items-center rounded-xl glass"
                >
                  <X className="size-4" />
                </button>
              </div>

              <div className="p-7">
                <div className="font-mono text-xs text-[#7c95ff]">
                  {active.category}
                </div>

                <h3 className="mt-2 font-display text-3xl font-black text-[#2a3042]">
                  {active.title}
                </h3>

                <p className="mt-2 text-[#687086]">
                  {active.tagline}
                </p>

                <p className="mt-5 leading-relaxed text-[#5b6275]">
                  {active.description}
                </p>

                <h4 className="mt-6 text-xs uppercase tracking-wider text-[#7b8194]">
                  Highlights
                </h4>

                <ul className="mt-3 space-y-2 text-sm">
                  {active.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="text-[#8ba8ff]">
                        ▸
                      </span>

                      <span className="text-[#5b6275]">
                        {h}
                      </span>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 text-sm text-[#7b8194]">
                  {active.stack.join(" · ")}
                </p>

                <div className="mt-7 flex gap-2">
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