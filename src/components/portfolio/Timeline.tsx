import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Section } from "./Section";

const ITEMS = [
  {
    year: "2020",
    title: "First line of code",
    text: "Built small games with Scratch and basic web pages with HTML — curiosity turned into obsession pretty quickly.",
  },
  {
    year: "2022",
    title: "Automation & Trading",
    text: "Experimented with trading tools, automation scripts, and online ecosystems — learned fast iteration and self-learning early on while making > $2500.",
  },
  {
    year: "2023",
    title: "Started building seriously",
    text: "Learned core web development fundamentals, explored how software works under the hood, and began creating real projects.",
  },
  {
    year: "SUMMER 2024",
    title: "Backend journey",
    text: "Explored APIs, databases, authentication, and full-stack development.",
  },
  {
    year: "WINTER 2024",
    title: "Competitive programming",
    text: "Started taking DSA and problem solving seriously, building strong foundations in algorithms and optimization.",
  },
  {
    year: "SUMMER 2025",
    title: "Systems & backend",
    text: "Built larger backend and systems projects with Spring Boot and C++, including LeetHost, Nearby, Vector DB, and concurrent engines.",
  },
  {
    year: "WINTER 2025",
    title: "Performance mindset",
    text: "Focused heavily on optimization, mathematical thinking, and low-level performance concepts while climbing to Specialist on Codeforces.",
  },
  {
    year: "2026",
    title: "Building at AGODA",
    text: "Focused on scalable backend systems, distributed architectures, and AI incorporation innovations.",
  },
];

function Milestone({
  item,
  index,
  active,
  setActive,
}: {
  item: (typeof ITEMS)[number];
  index: number;
  active: number | null;
  setActive: (value: number | null) => void;
}) {
  const isActive = active === index;
  const isFinal = index === ITEMS.length - 1;

  return (
    <div
      className="relative flex justify-center"
      onMouseEnter={() => setActive(index)}
      onMouseLeave={() => setActive(null)}
    >
      <motion.div
        animate={{
          scale: isActive ? 1.3 : 1,
        }}
        transition={{ duration: 0.18 }}
        className={
          isFinal
            ? "relative z-20 grid size-5 place-items-center rounded-full border-2 border-[#d9f99d] bg-[#b6f34a] shadow-[0_0_12px_rgba(163,230,53,1),0_0_28px_rgba(163,230,53,0.9),0_0_50px_rgba(163,230,53,0.45)]"
            : "relative z-20 grid size-4 place-items-center rounded-full border-2 border-[#a3e635] bg-[#8fca32] shadow-[0_0_7px_rgba(163,230,53,0.65),0_0_15px_rgba(163,230,53,0.3)]"
        }
      >
        <div
          className={
            isFinal
              ? "size-2 rounded-full bg-[#f0ffc7] shadow-[0_0_7px_rgba(240,255,199,0.95)]"
              : "size-1.5 rounded-full bg-[#d9f99d]"
          }
        />
      </motion.div>

      <motion.div
        animate={{
          opacity: isActive ? 1 : 0.8,
        }}
        className="absolute top-8 whitespace-nowrap text-center"
      >
        <div className="font-mono text-[9px] tracking-[0.16em] text-[#a3e635]">
          {item.year}
        </div>

        <div
          className={
            isFinal
              ? "mt-1 text-xs font-semibold text-[#d9f99d]"
              : "mt-1 text-xs font-medium text-[#dce5de]"
          }
        >
          {item.title}
        </div>
      </motion.div>
    </div>
  );
}

export function Timeline() {
  const [active, setActive] = useState<number | null>(null);

  /*
    Explicit positions create a true snake instead of relying
    on flex distribution.

    0 ---- 1 ---- 2
                   |
                   |
    5 ---- 4 ---- 3
    |
    |
    6 ---- 7
  */

  const rows = [
    {
      items: [0, 1, 2],
      direction: "ltr",
      turn: "right",
    },
    {
      items: [5, 4, 3],
      direction: "rtl",
      turn: "left",
    },
    {
      items: [6, 7],
      direction: "ltr",
      turn: null,
    },
  ];

  return (
    <Section
      id="timeline"
      eyebrow="// journey"
      title={
        <>
          The road{" "}
          <span className="text-gradient-static">
            so far
          </span>
          .
        </>
      }
      description="Every line, every contest, every failed submission — they all add up."
    >
      <div className="relative mx-auto max-w-5xl py-10">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="relative h-[115px]"
          >
            {/* Horizontal line */}
            {/* Horizontal line */}
            <div
              className={
                row.items.length === 3
                  ? "absolute left-0 right-0 top-2 z-0 h-[3px] rounded-full bg-[#a3e635]/70 shadow-[0_0_8px_rgba(163,230,53,0.5),0_0_18px_rgba(163,230,53,0.2)]"
                  : "absolute left-0 right-1/4 top-2 z-0 h-[3px] rounded-full bg-[#a3e635]/70 shadow-[0_0_8px_rgba(163,230,53,0.5),0_0_18px_rgba(163,230,53,0.2)]"
              }
            />

            {/* Nodes */}
            <div
              className={`absolute left-0 right-0 top-0 z-10 grid ${
                row.items.length === 3
                  ? "grid-cols-3"
                  : "grid-cols-2"
              }`}
            >
              {row.items.map((itemIndex) => (
                <Milestone
                  key={itemIndex}
                  item={ITEMS[itemIndex]}
                  index={itemIndex}
                  active={active}
                  setActive={setActive}
                />
              ))}
            </div>

            {/* Vertical connector */}
            {rowIndex < rows.length - 1 && (
              <div
                className={`absolute top-2 z-0 h-[115px] w-[3px] rounded-full bg-[#a3e635]/70 shadow-[0_0_8px_rgba(163,230,53,0.5),0_0_18px_rgba(163,230,53,0.2)] ${
                  row.turn === "right"
                    ? "right-0"
                    : "left-0"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Bottom hover information panel */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 30,
            }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
            }}
            className="fixed bottom-5 left-1/2 z-[80] w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2"
          >
            <div className="relative overflow-hidden rounded-2xl border border-[#a3e635]/25 bg-[#111813]/95 px-5 py-4 shadow-[0_12px_50px_rgba(0,0,0,0.5),0_0_30px_rgba(163,230,53,0.08)] backdrop-blur-xl">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#a3e635]/70 to-transparent" />

              <div className="pointer-events-none absolute -right-20 -top-20 size-40 rounded-full bg-[#a3e635]/[0.06] blur-3xl" />

              <div className="relative flex items-start gap-4">
                <div className="hidden shrink-0 pt-0.5 sm:block">
                  <div className="grid size-9 place-items-center rounded-lg border border-[#a3e635]/20 bg-[#a3e635]/[0.08]">
                    <div className="size-3 rounded-full bg-[#a3e635] shadow-[0_0_10px_rgba(163,230,53,0.8)]" />
                  </div>
                </div>

                <div className="min-w-0">
                  <div className="font-mono text-[9px] tracking-[0.18em] text-[#a3e635]">
                    {ITEMS[active].year}
                  </div>

                  <h3 className="mt-0.5 font-display text-base font-semibold text-[#f1f5f1]">
                    {ITEMS[active].title}
                  </h3>

                  <p className="mt-1.5 text-xs leading-relaxed text-[#9eaaa1] sm:text-sm">
                    {ITEMS[active].text}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}