import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Section } from "./Section";

const ITEMS = [
  {
    year: "2020",
    title: "First line of code",
    text: "Built small games with Scratch and basic web pages with HTML — curiosity turned into obsession pretty quickly.",
  },

  {
    year: "2022",
    title: "Automation & internet rabbit holes",
    text: "Experimented with trading tools, automation scripts, and online ecosystems — learned fast iteration and self-learning early on.",
  },

  {
    year: "2023",
    title: "Started building seriously",
    text: "Learned core web development fundamentals, explored how software works under the hood, and began creating real projects.",
  },

  {
    year: "SUMMER 2024",
    title: "Backend journey began",
    text: "Built full-stack applications, explored APIs, databases, authentication, and contributed to open-source ecosystems.",
  },

  {
    year: "WINTER 2024",
    title: "Competitive programming era",
    text: "Discovered the power of consistency through DSA and problem solving, building strong foundations in algorithms and optimization.",
  },

  {
    year: "SUMMER 2025",
    title: "Deep dive into systems & backend",
    text: "Started building larger backend and systems projects with Spring Boot and C++, including LeetHost, Nearby, Vector DB, and concurrent engines.",
  },

  {
    year: "WINTER 2025",
    title: "Codeforces & performance mindset",
    text: "Got heavily into mathematical thinking, optimization, and low-level performance concepts while climbing to Specialist on Codeforces.",
  },

  {
    year: "2026",
    title: "Building for scale at AGODA",
    text: "Focused on scalable backend systems, distributed architectures, and AI incorporation innovations.",
  },
];

export function Timeline() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    mass: 0.2,
  });

  return (
    <Section
      id="timeline"
      eyebrow="// journey"
      title={
        <>
          The road{" "}
          <span className="text-gradient-static">so far</span>.
        </>
      }
      description="Every line, every contest, every failed submission — they all add up."
    >
      <div ref={ref} className="relative">
        
{/* base line */}
<div
  className="absolute left-4 sm:left-1/2 top-0 bottom-0
             w-[2px] -translate-x-1/2
             bg-white/10"
/>

{/* animated glow line */}
<motion.div
  style={{ scaleY }}
  className="absolute origin-top left-4 sm:left-1/2 top-0 bottom-0
             w-[3px] -translate-x-1/2 rounded-full z-10

             bg-gradient-to-b
             from-[#8ba8ff]
             via-[#c6b7ff]
             to-[#f2a7c5]

             shadow-[0_0_12px_rgba(139,168,255,0.7),
                     0_0_28px_rgba(198,183,255,0.45)]"
/>

        {ITEMS.map((it, i) => {
          const leftSide = i % 2 === 0;

          return (
            <motion.div
              key={it.year}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.05,
              }}
              className="relative pl-12 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-8 mb-14"
            >
              <motion.div
  whileInView={{
    scale: [0.8, 1.35, 1],
  }}
  transition={{ duration: 0.6 }}
  className="absolute left-4 sm:left-1/2 -translate-x-1/2
             size-5 rounded-full z-20

             bg-gradient-to-br
             from-[#8ba8ff]
             via-[#c6b7ff]
             to-[#f2a7c5]

             shadow-[0_0_15px_rgba(139,168,255,0.9),
                     0_0_40px_rgba(242,167,197,0.45)]"
  style={{ top: 8 }}
/>

              {leftSide ? (
                <>
                  <div className="sm:pr-8 sm:text-right">
                    <motion.div
                      whileInView={{ opacity: [0.4, 1] }}
                      transition={{ duration: 0.6 }}
                      className="font-mono text-xs tracking-widest text-[var(--glow)]"
                    >
                      {it.year}
                    </motion.div>

                    <h3 className="mt-2 font-display text-lg font-semibold">
                      {it.title}
                    </h3>

                    <p
                      className="mt-2 text-sm leading-relaxed
                                 text-muted-foreground max-w-md sm:ml-auto"
                    >
                      {it.text}
                    </p>
                  </div>

                  <div className="hidden sm:block" />
                </>
              ) : (
                <>
                  <div className="hidden sm:block" />

                  <div className="sm:pl-8">
                    <motion.div
                      whileInView={{ opacity: [0.4, 1] }}
                      transition={{ duration: 0.6 }}
                      className="font-mono text-xs tracking-widest text-[var(--glow)]"
                    >
                      {it.year}
                    </motion.div>

                    <h3 className="mt-2 font-display text-lg font-semibold">
                      {it.title}
                    </h3>

                    <p
                      className="mt-2 text-sm leading-relaxed
                                 text-muted-foreground max-w-md"
                    >
                      {it.text}
                    </p>
                  </div>
                </>
              )}
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}