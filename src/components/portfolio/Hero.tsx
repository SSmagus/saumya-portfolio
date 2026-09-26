import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Download,
  Mail,
  Github,
  Linkedin,
  Code2,
  Trophy,
  MessageCircle,
  Globe,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/photo3.png";
import resumeUrl from "@/assets/saumya_dhakad_resume.pdf";

const ROLES = [
  "SWE Intern @Agoda",
  "Competitive Programmer",
  "Backend Engineer",
  "Systems Developer",
  "Distributed Systems Enthusiast",
];

function Typewriter() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[i % ROLES.length];
    const speed = deleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);

        setText(next);

        if (next === current) {
          setTimeout(() => setDeleting(true), 1400);
        }
      } else {
        const next = current.slice(0, text.length - 1);

        setText(next);

        if (next === "") {
          setDeleting(false);
          setI((previous) => previous + 1);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, i]);

  return (
    <span className="font-display text-2xl font-semibold tracking-[-0.03em] text-[#d9f99d] sm:text-3xl md:text-4xl">
      {text}
      <span className="ml-1 inline-block h-[1em] w-[2px] -mb-1 bg-[#d9f99d] animate-blink" />
    </span>
  );
}

const STATS = [
  { label: "Problems Solved", value: "2000+" },
  { label: "Max LC Rating", value: "2100+" },
  { label: "CGPA", value: "9.04" },
  { label: "Experience", value: "4m+" },
];

const SOCIALS = [
  {
    icon: Github,
    href: "https://github.com/SSmagus",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/saumya-dhakad-021937290/",
    label: "LinkedIn",
  },
  {
    icon: Trophy,
    href: "https://leetcode.com/u/crackedDev/",
    label: "LeetCode",
  },
  {
    icon: Code2,
    href: "https://codeforces.com/profile/Saumya",
    label: "Codeforces",
  },
  {
    icon: MessageCircle,
    href: "https://discord.com/users/1126142090900938752",
    label: "Discord",
  },
  {
    icon: Globe,
    href: "https://codolio.com/profile/SSmagus",
    label: "Codolio",
  },
];

function createWavePath(offset: number, phase: number) {
  const width = 1600;
  const center = width / 2;
  const points: string[] = [];

  for (let x = 0; x <= width; x += 12) {
    const distance = Math.abs(x - center) / center;

    const centerStrength = 1 - Math.pow(distance, 1.7);

    const primary =
      Math.sin(x * 0.008 + phase) *
      62 *
      centerStrength;

    const secondary =
      Math.sin(x * 0.015 + phase * 0.65) *
      16 *
      centerStrength;

    const slow =
      Math.sin(x * 0.0032 + phase * 0.4) *
      18 *
      centerStrength;

    const y =
      150 +
      offset +
      primary +
      secondary +
      slow;

    points.push(`${x},${y}`);
  }

  return `M ${points.join(" L ")}`;
}

function AmbientWave() {
  const waves = useMemo(
    () =>
      Array.from({ length: 25 }, (_, index) => ({
        offset: (index - 12) * 3.4,
        opacity:
          0.055 +
          (1 - Math.abs(index - 12) / 12) * 0.14,
        width:
          index === 12
            ? 1.8
            : index % 5 === 0
              ? 1.3
              : 0.95,
      })),
    []
  );

  return (
    <div className="pointer-events-none absolute left-1/2 top-[-20px] z-0 h-[300px] w-screen -translate-x-1/2 overflow-visible">
      <motion.svg
        viewBox="0 0 1600 300"
        className="absolute inset-0 h-full w-full overflow-visible"
        preserveAspectRatio="none"
        aria-hidden="true"
        animate={{
          y: [0, -4, 2, -3, 0],
          scaleY: [1, 1.04, 0.98, 1.03, 1],
          rotateZ: [-1, 1.5, -0.5, 1, -1],
          rotateX: [0, 1.5, -1, 1, 0],
          rotateY: [-1.5, 1.5, -1, 1.5, -1.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          transformOrigin: "50% 50%",
          transformPerspective: 1000,
        }}
      >
        <defs>
          <linearGradient
            id="waveGradient"
            x1="0"
            y1="0"
            x2="1600"
            y2="0"
          >
            <stop
              offset="0"
              stopColor="#a3e635"
              stopOpacity="0"
            />

            <stop
              offset="0.10"
              stopColor="#a3e635"
              stopOpacity="0.03"
            />

            <stop
              offset="0.22"
              stopColor="#a3e635"
              stopOpacity="0.20"
            />

            <stop
              offset="0.35"
              stopColor="#a3e635"
              stopOpacity="0.60"
            />

            <stop
              offset="0.50"
              stopColor="#d9f99d"
              stopOpacity="0.95"
            />

            <stop
              offset="0.65"
              stopColor="#a3e635"
              stopOpacity="0.60"
            />

            <stop
              offset="0.78"
              stopColor="#a3e635"
              stopOpacity="0.20"
            />

            <stop
              offset="0.90"
              stopColor="#a3e635"
              stopOpacity="0.03"
            />

            <stop
              offset="1"
              stopColor="#a3e635"
              stopOpacity="0"
            />
          </linearGradient>

          <linearGradient
            id="waveGlowGradient"
            x1="0"
            y1="0"
            x2="1600"
            y2="0"
          >
            <stop
              offset="0"
              stopColor="#a3e635"
              stopOpacity="0"
            />

            <stop
              offset="0.25"
              stopColor="#a3e635"
              stopOpacity="0.08"
            />

            <stop
              offset="0.50"
              stopColor="#d9f99d"
              stopOpacity="0.28"
            />

            <stop
              offset="0.75"
              stopColor="#a3e635"
              stopOpacity="0.08"
            />

            <stop
              offset="1"
              stopColor="#a3e635"
              stopOpacity="0"
            />
          </linearGradient>

          <filter
            id="waveBlur"
            x="-20%"
            y="-100%"
            width="140%"
            height="300%"
          >
            <feGaussianBlur stdDeviation="9" />
          </filter>
        </defs>

        <motion.path
          d={createWavePath(0, 0)}
          stroke="url(#waveGlowGradient)"
          strokeWidth="22"
          fill="none"
          strokeLinecap="round"
          opacity="0.12"
          filter="url(#waveBlur)"
        />

        {waves.map((wave, index) => (
          <motion.path
            key={index}
            d={createWavePath(
              wave.offset,
              index * 0.018
            )}
            stroke={
              index === 12
                ? "url(#waveGradient)"
                : "#a3e635"
            }
            strokeWidth={wave.width}
            fill="none"
            strokeLinecap="round"
            opacity={wave.opacity}
          />
        ))}
      </motion.svg>
    </div>
  );
}

function RotatingRing() {
  return (
    <>
      <motion.div
        className="absolute -inset-5 rounded-full"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0deg, transparent 42deg, rgba(163,230,53,0.9) 90deg, transparent 145deg, transparent 220deg, rgba(217,249,157,0.6) 275deg, transparent 320deg)",
          mask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          maskComposite: "exclude",
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          padding: "1.5px",
        }}
      />

      <motion.div
        className="absolute -inset-2 rounded-full border border-[#a3e635]/25"
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </>
  );
}

export function Hero() {
  const leftSocials = SOCIALS.slice(0, 3);
  const rightSocials = SOCIALS.slice(3, 6);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#080c0a] pt-28 pb-10"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/2 top-[-5%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#a3e635]/[0.025] blur-[150px]" />

        <div className="absolute bottom-[-20%] left-1/2 h-[450px] w-[700px] -translate-x-1/2 rounded-full bg-[#65a30d]/[0.018] blur-[170px]" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-5.5rem)] w-full max-w-7xl flex-col items-center px-4 text-center">
        <AmbientWave />

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.94,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative z-20 mt-4"
        >
          <RotatingRing />

          <div className="absolute -inset-8 -z-10 rounded-full bg-[#a3e635]/[0.035] blur-3xl" />

          <div className="relative h-52 w-52 rounded-full bg-[#131c17] p-1">
            <div className="h-full w-full overflow-hidden rounded-full border border-white/[0.08] bg-[#0e1511]">
              <img
                src={profilePhoto}
                alt="Saumya Dhakad"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.25,
          }}
          className="relative z-30 mt-6 flex w-full items-center justify-center gap-4 sm:gap-7"
        >
          <div className="flex items-center gap-2 sm:gap-3">
            {leftSocials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="group grid h-10 w-10 place-items-center rounded-xl border border-white/[0.08] bg-[#0e1511]/80 text-[#aeb8b1] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#a3e635]/35 hover:text-[#a3e635] sm:h-11 sm:w-11"
              >
                <s.icon className="size-4 transition-transform duration-300 group-hover:scale-110" />
              </a>
            ))}
          </div>

          <h1 className="font-display text-5xl font-black tracking-[-0.06em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Saumya Dhakad
          </h1>

          <div className="flex items-center gap-2 sm:gap-3">
            {rightSocials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="group grid h-10 w-10 place-items-center rounded-xl border border-white/[0.08] bg-[#0e1511]/80 text-[#aeb8b1] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#a3e635]/35 hover:text-[#a3e635] sm:h-11 sm:w-11"
              >
                <s.icon className="size-4 transition-transform duration-300 group-hover:scale-110" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 16,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.4,
          }}
          className="relative z-30 mt-5"
        >
          <Typewriter />
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 16,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.5,
          }}
          className="relative z-30 mt-6 flex flex-wrap items-center justify-center gap-3"
        >
          <Button
            variant="hero"
            size="lg"
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({
                  behavior: "smooth",
                })
            }
          >
            View Projects
            <ArrowRight className="size-4" />
          </Button>

          <Button
            variant="hero"
            size="lg"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({
                  behavior: "smooth",
                })
            }
          >
            <Mail className="size-4" />
            Contact Me
          </Button>

          <Button
            variant="hero"
            size="lg"
            asChild
          >
            <a href={resumeUrl} download>
              <Download className="size-4" />
              Resume
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 18,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.65,
          }}
          className="relative z-30 mt-6 w-full"
        >
          <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-[#a3e635]/20 bg-[#18250f]/75 shadow-[0_0_40px_rgba(163,230,53,0.04)] backdrop-blur-md sm:grid-cols-4">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                whileHover={{
                  backgroundColor: "rgba(163, 230, 53, 0.10)",
                }}
                className={`px-4 py-3.5 transition-colors ${
                  i !== 0
                    ? "border-l border-[#a3e635]/15"
                    : ""
                }`}
              >
                <div className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  {s.value}
                </div>

                <div className="mt-1 font-mono text-[9px] uppercase tracking-[0.16em] text-[#b7d98a] sm:text-[10px]">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}