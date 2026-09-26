import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Trophy, Flame, Target, Award } from "lucide-react";
import { Section } from "./Section";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const start = performance.now();
    const dur = 1500;

    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);

      setVal(
        Math.floor(to * (1 - Math.pow(1 - p, 3)))
      );

      if (p < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {val.toLocaleString()}
      {suffix}
    </span>
  );
}

const PLATFORMS = [
  {
    name: "LeetCode",
    rating: "Guardian",
    value: 2127,
    label: "Max Rating",
    color: "from-amber-500 to-orange-500",
  },
  {
    name: "Codeforces",
    rating: "Specialist",
    value: 1506,
    label: "Max Rating",
    color: "from-cyan-500 to-blue-500",
  },
  {
    name: "CodeChef",
    rating: "3★",
    value: 1691,
    label: "Max Rating",
    color: "from-fuchsia-500 to-purple-500",
  },
  {
    name: "AtCoder",
    rating: "7 Kyu",
    value: 615,
    label: "Problems",
    color: "from-emerald-500 to-teal-500",
  },
];

const ACHIEVEMENTS = [
  {
    icon: Trophy,
    label: "Top 1.33%",
    sub: "Leetcode",
  },
  {
    icon: Flame,
    label: "600-day streak",
    sub: "Daily problem solving",
  },
  {
    icon: Target,
    label: "Round 3",
    sub: "Meta Hacker Cup",
  },
  {
    icon: Award,
    label: "Top 3",
    sub: "University Competitions ( GLA etc )",
  },
];

function ActivityChart() {
  const data = [
    { month: "Sep 24", submissions: 205 },
    { month: "Oct 24", submissions: 170 },
    { month: "Nov 24", submissions: 40 },
    { month: "Dec 24", submissions: 260 },
    { month: "Jan 25", submissions: 275 },
    { month: "Feb 25", submissions: 390 },
    { month: "Mar 25", submissions: 325 },
    { month: "Apr 25", submissions: 200 },
    { month: "May 25", submissions: 245 },
    { month: "Jun 25", submissions: 370 },
    { month: "Jul 25", submissions: 490 },
    { month: "Aug 25", submissions: 410 },
    { month: "Sep 25", submissions: 435 },
    { month: "Oct 25", submissions: 280 },
    { month: "Nov 25", submissions: 640 },
    { month: "Dec 25", submissions: 515 },
    { month: "Jan 26", submissions: 390 },
    { month: "Feb 26", submissions: 525 },
    { month: "Mar 26", submissions: 470 },
    { month: "Apr 26", submissions: 430 },
    { month: "May 26", submissions: 575 },
    { month: "Jun 26", submissions: 420 },
  ];

  const max = Math.max(
    ...data.map((item) => item.submissions)
  );

  return (
    <div className="w-full min-w-0">
      <div className="relative h-44 w-full overflow-hidden">
        <div className="absolute inset-0 flex flex-col justify-between">
          {[100, 75, 50, 25, 0].map((value) => (
            <div
              key={value}
              className="border-t border-border/30"
            />
          ))}
        </div>

        <div className="absolute inset-0 flex items-end gap-[2px] px-1">
          {data.map((item) => {
            const height =
              (item.submissions / max) * 100;

            return (
              <div
                key={item.month}
                className="group relative h-full min-w-0 flex-1"
              >
                <motion.div
                  initial={{
                    height: 0,
                    opacity: 0,
                  }}
                  whileInView={{
                    height: `${height}%`,
                    opacity: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  className="absolute bottom-0 left-0 right-0 rounded-t-[3px] bg-gradient-to-t from-emerald-500/20 to-emerald-400/80 transition-all duration-300 group-hover:from-emerald-500/30 group-hover:to-emerald-300"
                />

                <div className="absolute bottom-0 left-1/2 z-10 -translate-x-1/2 translate-y-[-8px] whitespace-nowrap rounded-md border border-emerald-400/20 bg-background/90 px-2 py-1 text-[10px] font-mono opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                  {item.submissions}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-3 flex justify-between px-1">
        {data.map((item) => (
          <span
            key={item.month}
            className="min-w-0 text-center text-[8px] text-muted-foreground"
          >
            {item.month}
          </span>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-3 gap-3">
        <div className="rounded-xl border border-border/50 bg-card/40 p-3">
          <p className="text-xs text-muted-foreground">
            Submissions
          </p>

          <h3 className="mt-1 text-xl font-semibold">
            <Counter to={4322} />
          </h3>
        </div>

        <div className="rounded-xl border border-border/50 bg-card/40 p-3">
          <p className="text-xs text-muted-foreground">
            Longest Streak
          </p>

          <h3 className="mt-1 text-xl font-semibold text-emerald-400">
            <Counter to={611} />
          </h3>
        </div>

        <div className="rounded-xl border border-border/50 bg-card/40 p-3">
          <p className="text-xs text-muted-foreground">
            Total Days
          </p>

          <h3 className="mt-1 text-xl font-semibold">
            <Counter to={725} />
          </h3>
        </div>
      </div>
    </div>
  );
}

export function CompetitiveProgramming() {
  return (
    <Section
      id="cp"
      eyebrow="// competitive programming"
      title={
        <>
          Algorithms are my{" "}
          <span className="text-gradient-static">
            playground
          </span>
          .
        </>
      }
      description="From graph theory to segment trees, from contests at 8 AM Sunday to debugging WA at 3 AM — competitive programming sharpened how I think about every system I build."
    >
      {/* Platforms */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {PLATFORMS.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              delay: i * 0.08,
            }}
            className="glass glow-border relative overflow-hidden rounded-2xl p-5"
          >
            <div
              className={`absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br ${p.color} opacity-20 blur-2xl`}
            />

            <div className="relative">
              <div className="text-sm text-muted-foreground">
                {p.name}
              </div>

              <div className="mt-1 font-display text-3xl font-bold text-gradient-static">
                <Counter to={p.value} />
              </div>

              <div className="mt-1 text-xs text-muted-foreground">
                {p.label}
              </div>

              <div
                className={`mt-3 inline-flex rounded-md bg-gradient-to-r ${p.color} px-2 py-0.5 text-[11px] font-mono text-white`}
              >
                {p.rating}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Activity */}
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        className="glass glow-border mt-5 rounded-2xl p-5"
      >
        <div className="flex items-baseline justify-between">
          <div>
            <h3 className="font-display font-semibold">
              Activity
            </h3>

            <p className="text-xs text-muted-foreground">
              Competitive programming activity · Sep 2024 — Jun 2026
            </p>
          </div>

          <div className="font-display text-2xl font-bold text-gradient-static">
            <Counter to={4322} />
          </div>
        </div>

        <div className="mt-5">
          <ActivityChart />
        </div>
      </motion.div>

      {/* Achievements */}
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {ACHIEVEMENTS.map((a, i) => (
          <motion.div
            key={a.label}
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              delay: i * 0.06,
            }}
            whileHover={{
              y: -3,
            }}
            className="glass rounded-xl p-4 transition-all hover:border-[color-mix(in_oklab,var(--glow)_40%,transparent)]"
          >
            <a.icon className="size-5 text-[var(--glow)]" />

            <div className="mt-2 font-semibold">
              {a.label}
            </div>

            <div className="text-xs text-muted-foreground">
              {a.sub}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}