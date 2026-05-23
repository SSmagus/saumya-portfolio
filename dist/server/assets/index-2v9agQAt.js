import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import * as React from "react";
import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence, useInView, useScroll, useSpring } from "framer-motion";
import { Command, X, Menu, ArrowRight, Mail, Download, Github, Linkedin, Trophy, Code2, MessageCircle, Globe, Cpu, Database, Network, Zap, GraduationCap, Briefcase, Code, Server, Wrench, Brain, ArrowUpRight, ExternalLink, Flame, Target, Award, MapPin, FileText, Sparkles, Heart, Home, User, FolderGit2, Clock, Search, ArrowUp } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
function AnimatedBackground() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e) => {
      el.style.setProperty("--mx", `${e.clientX}px`);
      el.style.setProperty("--my", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref,
      "aria-hidden": true,
      className: "pointer-events-none fixed inset-0 -z-10 overflow-hidden",
      style: { ["--mx"]: "50%", ["--my"]: "30%" },
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-bg" }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "glow-orb",
            style: {
              width: 520,
              height: 520,
              background: "var(--glow)",
              top: "-10%",
              left: "-10%",
              opacity: 0.25
            }
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "glow-orb",
            style: {
              width: 600,
              height: 600,
              background: "var(--glow-2)",
              top: "30%",
              right: "-15%",
              opacity: 0.2
            }
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "glow-orb",
            style: {
              width: 420,
              height: 420,
              background: "var(--glow)",
              bottom: "-10%",
              left: "30%",
              opacity: 0.18
            }
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute pointer-events-none transition-opacity",
            style: {
              left: "var(--mx)",
              top: "var(--my)",
              width: 400,
              height: 400,
              transform: "translate(-50%,-50%)",
              background: "radial-gradient(circle, color-mix(in oklab, var(--glow) 22%, transparent), transparent 60%)",
              filter: "blur(20px)"
            }
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" })
      ]
    }
  );
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent/30 hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "relative bg-gradient-to-r from-[var(--glow)] to-[var(--glow-2)] text-primary-foreground font-semibold shadow-[0_8px_30px_-8px_color-mix(in_oklab,var(--glow)_60%,transparent)] hover:shadow-[0_12px_40px_-8px_color-mix(in_oklab,var(--glow)_80%,transparent)] hover:scale-[1.02] transition-all",
        glass: "glass text-foreground hover:bg-accent/20 hover:border-[color-mix(in_oklab,var(--glow)_50%,transparent)] transition-all"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-11 rounded-lg px-7 text-[15px]",
        xl: "h-12 rounded-lg px-8 text-base",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "cp", label: "CP" },
  { id: "timeline", label: "Journey" },
  { id: "contact", label: "Contact" }
];
function Navbar({ onOpenPalette }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };
  return /* @__PURE__ */ jsx(
    motion.header,
    {
      initial: { y: -24, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
      className: cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-4"
      ),
      children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-4", children: [
        /* @__PURE__ */ jsxs(
          "nav",
          {
            className: cn(
              "flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all",
              scrolled ? "glass-strong" : "glass"
            ),
            children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: () => go("home"),
                  className: "flex items-center gap-2 font-display font-bold tracking-tight",
                  "aria-label": "Home",
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[var(--glow)] to-[var(--glow-2)] text-primary-foreground shadow-[0_4px_20px_-4px_var(--glow)]", children: "SD" }),
                    /* @__PURE__ */ jsxs("span", { className: "hidden sm:inline", children: [
                      "Saumya",
                      /* @__PURE__ */ jsx("span", { className: "text-gradient-static", children: "." })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsx("ul", { className: "hidden md:flex items-center gap-1", children: SECTIONS.map((s) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: () => go(s.id),
                  className: cn(
                    "relative px-3 py-1.5 text-sm rounded-md transition-colors",
                    active === s.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  ),
                  children: [
                    active === s.id && /* @__PURE__ */ jsx(
                      motion.span,
                      {
                        layoutId: "nav-pill",
                        className: "absolute inset-0 -z-10 rounded-md bg-accent/30 border border-border",
                        transition: { type: "spring", stiffness: 380, damping: 30 }
                      }
                    ),
                    s.label
                  ]
                }
              ) }, s.id)) }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    variant: "glass",
                    size: "sm",
                    onClick: onOpenPalette,
                    className: "hidden sm:inline-flex font-mono text-xs",
                    "aria-label": "Open command palette",
                    children: [
                      /* @__PURE__ */ jsx(Command, { className: "size-3.5" }),
                      /* @__PURE__ */ jsx("span", { className: "hidden md:inline", children: "Search" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    variant: "ghost",
                    size: "icon",
                    className: "md:hidden",
                    onClick: () => setOpen((v) => !v),
                    "aria-label": "Toggle menu",
                    children: open ? /* @__PURE__ */ jsx(X, {}) : /* @__PURE__ */ jsx(Menu, {})
                  }
                )
              ] })
            ]
          }
        ),
        open && /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: -8 },
            animate: { opacity: 1, y: 0 },
            className: "md:hidden glass-strong mt-2 rounded-2xl p-2",
            children: SECTIONS.map((s) => /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => go(s.id),
                className: cn(
                  "w-full text-left rounded-lg px-3 py-2 text-sm transition-colors",
                  active === s.id ? "bg-accent/30 text-foreground" : "text-muted-foreground hover:text-foreground hover:bg-accent/20"
                ),
                children: s.label
              },
              s.id
            ))
          }
        )
      ] })
    }
  );
}
const ROLES = [
  "Competitive Programmer",
  "Backend Engineer",
  "Systems Developer",
  "Distributed Systems Enthusiast"
];
function Typewriter() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const current = ROLES[i % ROLES.length];
    const speed = deleting ? 40 : 80;
    const t = setTimeout(() => {
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
          setI((p) => p + 1);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, i]);
  return /* @__PURE__ */ jsxs("span", { className: "font-semibold bg-gradient-to-r from-[#6e86ff] via-[#8d7dff] to-[#ec9fc1] bg-clip-text text-transparent", children: [
    text,
    /* @__PURE__ */ jsx("span", { className: "inline-block w-[2px] h-[1em] -mb-1 ml-1 bg-[#8d7dff] animate-blink" })
  ] });
}
const STATS = [
  { label: "Problems Solved", value: "2000+" },
  { label: "Max LC Rating", value: "2100+" },
  { label: "CGPA", value: "9.04" },
  { label: "Projects Built", value: "10+" }
];
const SOCIALS$1 = [
  {
    icon: Github,
    href: "https://github.com/SSmagus",
    label: "GitHub"
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/saumya-dhakad-021937290/",
    label: "LinkedIn"
  },
  {
    icon: Trophy,
    href: "https://leetcode.com/u/crackedDev/",
    label: "LeetCode"
  },
  {
    icon: Code2,
    href: "https://codeforces.com/profile/Saumya",
    label: "Codeforces"
  },
  {
    icon: MessageCircle,
    href: "https://discord.com/users/1126142090900938752",
    label: "Discord"
  },
  {
    icon: Globe,
    href: "https://codolio.com/profile/SSmagus",
    label: "Codeolio"
  }
];
function Hero() {
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "home",
      className: "relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 -z-10 overflow-hidden", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-[-10%] left-[-5%] h-[500px] w-[500px] rounded-full bg-[#8ba8ff]/20 blur-[120px]" }),
          /* @__PURE__ */ jsx("div", { className: "absolute bottom-[-20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-[#f2a7c5]/20 blur-[140px]" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mx-auto w-full max-w-6xl px-4", children: [
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.7 },
              className: "inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm font-medium text-[#687086] border border-white/40",
              children: [
                /* @__PURE__ */ jsxs("span", { className: "relative flex h-2 w-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" }),
                  /* @__PURE__ */ jsx("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-emerald-400" })
                ] }),
                "Available for opportunities · Open to SDE roles"
              ]
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "mt-10 grid items-center gap-14 lg:grid-cols-[1fr_340px]", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs(
                motion.h1,
                {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.8, delay: 0.1 },
                  className: "font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-[-0.04em] leading-[0.98]",
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "block text-[#5b6275] text-2xl sm:text-3xl md:text-4xl font-semibold tracking-normal mb-4", children: "Hi, I'm" }),
                    /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-[#6e86ff] via-[#8d7dff] to-[#ec9fc1] bg-clip-text text-transparent", children: "Saumya Dhakad" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                motion.p,
                {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.7, delay: 0.25 },
                  className: "mt-8 text-lg sm:text-xl text-[#687086] max-w-2xl leading-relaxed",
                  children: [
                    /* @__PURE__ */ jsx(Typewriter, {}),
                    /* @__PURE__ */ jsx("br", {}),
                    "Crafting scalable backends, low-latency systems, and elegant algorithms — with a deep love for performance and clean architecture."
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.7, delay: 0.4 },
                  className: "mt-10 flex flex-wrap items-center gap-3",
                  children: [
                    /* @__PURE__ */ jsxs(
                      Button,
                      {
                        variant: "hero",
                        size: "lg",
                        onClick: () => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }),
                        children: [
                          "View Projects ",
                          /* @__PURE__ */ jsx(ArrowRight, { className: "size-4" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxs(
                      Button,
                      {
                        variant: "glass",
                        size: "lg",
                        onClick: () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }),
                        children: [
                          /* @__PURE__ */ jsx(Mail, { className: "size-4" }),
                          "Contact Me"
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "lg", asChild: true, children: /* @__PURE__ */ jsxs("a", { href: "src\\assets\\saumya_dhakad_resume.pdf", download: true, children: [
                      /* @__PURE__ */ jsx(Download, { className: "size-4" }),
                      "Resume"
                    ] }) })
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: { duration: 0.7, delay: 0.55 },
                  className: "mt-8 flex items-center gap-2",
                  children: SOCIALS$1.map((s) => /* @__PURE__ */ jsx(
                    "a",
                    {
                      href: s.href,
                      target: "_blank",
                      rel: "noreferrer",
                      "aria-label": s.label,
                      className: "grid h-11 w-11 place-items-center rounded-xl glass border border-white/40 text-[#5b6275] hover:text-[#7c95ff] transition-all duration-300 hover:-translate-y-1",
                      children: /* @__PURE__ */ jsx(s.icon, { className: "size-4" })
                    },
                    s.label
                  ))
                }
              )
            ] }),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, scale: 0.94 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 0.8, delay: 0.25 },
                className: "relative mx-auto lg:mx-0",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "absolute -inset-[3px] rounded-[2rem] bg-gradient-to-br from-[#8ba8ff] via-[#c6b7ff] to-[#f2a7c5] opacity-70 blur-xl" }),
                  /* @__PURE__ */ jsx("div", { className: "relative overflow-hidden rounded-[2rem] border border-white/50 bg-white/30 p-2 backdrop-blur-xl shadow-[0_20px_80px_rgba(124,149,255,0.18)]", children: /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: "src\\assets\\photo2.png",
                      alt: "Saumya Dhakad",
                      className: "h-[420px] w-[320px] rounded-[1.5rem] object-cover"
                    }
                  ) })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8, delay: 0.7 },
              className: "mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4",
              children: STATS.map((s, i) => /* @__PURE__ */ jsxs(
                motion.div,
                {
                  whileHover: { y: -3 },
                  transition: { duration: 0.2 },
                  className: "rounded-xl border border-[#8ba8ff]/15 bg-white/45 backdrop-blur-xl shadow-[0_8px_30px_rgba(124,149,255,0.08)] p-5",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "font-display text-3xl md:text-4xl font-black tracking-tight bg-gradient-to-r from-[#5f7dff] via-[#8d7dff] to-[#ec9fc1] bg-clip-text text-transparent", children: s.value }),
                    /* @__PURE__ */ jsx("div", { className: "mt-1 text-[11px] uppercase tracking-[0.18em] text-[#8b93a7]", children: s.label })
                  ]
                },
                s.label
              ))
            }
          )
        ] })
      ]
    }
  );
}
function Section({
  id,
  eyebrow,
  title,
  description,
  children
}) {
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id,
      className: "relative overflow-hidden py-16 sm:py-24",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 -z-10", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#8ba8ff]/8 to-transparent blur-3xl" }),
          /* @__PURE__ */ jsx("div", { className: "absolute top-[10%] left-[-10%] h-[420px] w-[420px] rounded-full bg-[#8ba8ff]/10 blur-[120px]" }),
          /* @__PURE__ */ jsx("div", { className: "absolute bottom-[0%] right-[-10%] h-[420px] w-[420px] rounded-full bg-[#f2a7c5]/10 blur-[120px]" }),
          /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent via-[#7c95ff]/[0.03] to-[#5f7dff]/[0.08]" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-4", children: [
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, margin: "-80px" },
              transition: { duration: 0.6 },
              className: "max-w-2xl",
              children: [
                eyebrow && /* @__PURE__ */ jsx("div", { className: "mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[#8ba8ff]", children: eyebrow }),
                /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#2a3042]", children: title }),
                description && /* @__PURE__ */ jsx("p", { className: "mt-4 text-base sm:text-lg leading-relaxed text-[#687086]", children: description })
              ]
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "mt-12", children })
        ] })
      ]
    }
  );
}
const FOCUS = [
  { icon: Cpu, label: "Spring Boot" },
  { icon: Database, label: "C++ / Systems" },
  { icon: Network, label: "Distributed Systems" },
  { icon: Zap, label: "Performance" },
  { icon: Trophy, label: "Competitive Programming" }
];
const TIMELINE = [
  {
    icon: GraduationCap,
    type: "Education",
    title: "B.Tech, Computer Science",
    org: "Poornima University, Jaipur, Rajasthan, India",
    period: "2023 — 2027",
    detail: "CGPA 9.04 · Coursework in OS, DBMS, Networks, Dsa etc."
  },
  {
    icon: Briefcase,
    type: "Experience",
    title: "Contributor at GSSOC",
    org: "GSSOC foundation",
    period: "Winter 2025",
    detail: "Built REST + GraphQL APIs in Spring Boot, optimized DB queries (3× faster), shipped Redis cache layer."
  },
  {
    icon: Trophy,
    type: "Journey",
    title: "Competitive Programming",
    org: "Leetcode · Codeforces",
    period: "2024 — Present",
    detail: "Specialist on CF, Guardian on LeetCode. 2000+ problems across DSA, graphs, DP, and number theory."
  }
];
function About() {
  return /* @__PURE__ */ jsx(
    Section,
    {
      id: "about",
      eyebrow: "// about",
      title: /* @__PURE__ */ jsxs(Fragment, { children: [
        "Engineer at the intersection of ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient-static", children: "systems" }),
        " & ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient-static", children: "scale" }),
        "."
      ] }),
      description: "I'm a software engineer focused on building robust backends and high-performance systems. I love digging deep — into databases, into protocols, into the JVM, into cache lines.",
      children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-5 gap-6", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.6 },
            className: "lg:col-span-2 glass glow-border rounded-2xl p-6",
            children: [
              /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold", children: "Core focus" }),
              /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Backend, systems, and the algorithmic foundations that make them fly." }),
              /* @__PURE__ */ jsx("div", { className: "mt-5 flex flex-wrap gap-2", children: FOCUS.map((f, i) => /* @__PURE__ */ jsxs(
                motion.span,
                {
                  initial: { opacity: 0, scale: 0.9 },
                  whileInView: { opacity: 1, scale: 1 },
                  viewport: { once: true },
                  transition: { delay: i * 0.05 },
                  className: "inline-flex items-center gap-1.5 rounded-full glass px-3 py-1.5 text-xs font-medium hover:border-[color-mix(in_oklab,var(--glow)_50%,transparent)] hover:text-[var(--glow)] transition-colors",
                  children: [
                    /* @__PURE__ */ jsx(f.icon, { className: "size-3.5" }),
                    f.label
                  ]
                },
                f.label
              )) }),
              /* @__PURE__ */ jsxs("div", { className: "mt-6 rounded-xl bg-muted/40 p-4 font-mono text-xs text-muted-foreground leading-relaxed", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[var(--glow)]", children: "$" }),
                " whoami",
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "saumya" }),
                " — engineer who believes the best abstraction is the one you don't notice."
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "lg:col-span-3 space-y-4", children: TIMELINE.map((t, i) => /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, x: 20 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { duration: 0.5, delay: i * 0.1 },
            className: "group glass rounded-2xl p-5 hover:border-[color-mix(in_oklab,var(--glow)_40%,transparent)] transition-all hover:-translate-y-0.5",
            children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ jsx("div", { className: "grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-[var(--glow)]/20 to-[var(--glow-2)]/20 border border-border text-[var(--glow)]", children: /* @__PURE__ */ jsx(t.icon, { className: "size-5" }) }),
              /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-xs font-mono text-muted-foreground", children: [
                  /* @__PURE__ */ jsx("span", { children: t.type }),
                  /* @__PURE__ */ jsx("span", { children: "·" }),
                  /* @__PURE__ */ jsx("span", { children: t.period })
                ] }),
                /* @__PURE__ */ jsx("h4", { className: "mt-0.5 font-semibold text-foreground", children: t.title }),
                /* @__PURE__ */ jsx("div", { className: "text-sm text-[var(--glow)]", children: t.org }),
                /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: t.detail })
              ] })
            ] })
          },
          t.title
        )) })
      ] })
    }
  );
}
const GROUPS = [
  {
    icon: Code,
    title: "Languages",
    items: ["Java", "C++", "Python", "SQL"]
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
      "WebSockets"
    ]
  },
  {
    icon: Database,
    title: "Databases",
    items: ["MySQL", "MongoDB", "Redis", "SQLite"]
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
      "CMake"
    ]
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
      "Thread Pools"
    ]
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
      "System Design"
    ]
  }
];
function Skills() {
  return /* @__PURE__ */ jsx(
    Section,
    {
      id: "skills",
      eyebrow: "// stack",
      title: /* @__PURE__ */ jsxs(Fragment, { children: [
        "Tools I reach for, ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient-static", children: "daily" }),
        "."
      ] }),
      description: "A pragmatic stack tuned for performance and clarity. I pick the right tool for the job — not the loudest one.",
      children: /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4", children: GROUPS.map((g, idx) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5, delay: idx * 0.08 },
          className: "glass glow-border rounded-2xl p-6 group hover:-translate-y-1 transition-transform",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("div", { className: "grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-[var(--glow)]/20 to-[var(--glow-2)]/20 border border-border text-[var(--glow)] group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsx(g.icon, { className: "size-4" }) }),
              /* @__PURE__ */ jsx("h3", { className: "font-display font-semibold", children: g.title })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "mt-4 flex flex-wrap gap-2", children: g.items.map((it, i) => /* @__PURE__ */ jsx(
              motion.span,
              {
                initial: { opacity: 0, scale: 0.9 },
                whileInView: { opacity: 1, scale: 1 },
                viewport: { once: true },
                transition: { delay: idx * 0.08 + i * 0.04 },
                className: "rounded-md bg-muted/50 border border-border px-2.5 py-1 text-xs font-mono text-foreground/90 hover:border-[color-mix(in_oklab,var(--glow)_50%,transparent)] hover:text-[var(--glow)] transition-colors",
                children: it
              },
              it
            )) })
          ]
        },
        g.title
      )) })
    }
  );
}
const PROJECTS = [
  {
    title: "LeetHost",
    tagline: "Scalable competitive programming platform",
    description: "Competitive programming platform backend built with Spring Boot, featuring GraphQL APIs, Discord account verification, concurrent duel handling, and real-time competitive session management.",
    highlights: [
      "GraphQL-powered backend for tracking 3000+ LeetCode problems and user stats",
      "Discord ↔ LeetCode verification and authenticated profile linking",
      "Multithreaded duel engine with Elo-based ranking",
      "Dockerized deployment on AWS EC2 with persistent uptime"
    ],
    stack: [
      "Java",
      "Spring Boot",
      "GraphQL",
      "MySQL",
      "Docker",
      "AWS EC2",
      "JWT"
    ],
    category: "Backend",
    github: "https://github.com/SSmagus/Leetcode-Discord-Bot",
    demo: "#",
    gradient: "from-[#8ba8ff]/40 to-[#6e86ff]/40"
  },
  {
    title: "Nearby",
    tagline: "Location-aware realtime social platform",
    description: "Distributed social platform supporting nearby discussion rooms, events, requests, and realtime communication using WebSockets, Redis GEO queries, and JWT-secured APIs.",
    highlights: [
      "Realtime event, discussion, and request-based rooms",
      "Nearby room discovery using Redis GEO indexing",
      "Persistent bidirectional communication with WebSockets",
      "JWT authentication and request filtering via Spring Security"
    ],
    stack: [
      "Java",
      "Spring Boot",
      "WebSocket",
      "Redis",
      "MongoDB",
      "JWT"
    ],
    category: "Distributed",
    github: "https://github.com/SSmagus/Proximity",
    demo: "#",
    gradient: "from-[#f2a7c5]/40 to-[#c6b7ff]/40"
  },
  {
    title: "Vector Database Engine",
    tagline: "High-performance vector similarity engine",
    description: "Custom vector similarity engine in C++ implementing clustering-based ANN retrieval, memory-efficient vector layouts, and optimized high-dimensional search pipelines.",
    highlights: [
      "Centroid-based clustering reducing query scan space by 60–70%",
      "Configurable k-NN retrieval pipeline for vector search",
      "Optimized memory layouts for scalable embedding storage",
      "Designed for high-dimensional similarity retrieval workloads"
    ],
    stack: [
      "C++",
      "Performance Optimization",
      "STL",
      "CMake"
    ],
    category: "Systems",
    github: "https://github.com/SSmagus/vectorDb",
    gradient: "from-[#8be0c8]/40 to-[#6edcc1]/40"
  },
  {
    title: "Multithreaded Log Search Engine",
    tagline: "Parallel large-scale log analyzer",
    description: "Multithreaded log search engine in C++ designed for high-throughput parallel scanning of large log files using worker thread pools and optimized file I/O.",
    highlights: [
      "Parallel scanning architecture for 100MB+ log files",
      "Configurable worker thread pool for concurrent execution",
      "Optimized throughput with O(N / T) search scaling",
      "Thread-safe aggregation and high-performance file handling"
    ],
    stack: [
      "C++",
      "Multithreading",
      "POSIX",
      "File I/O"
    ],
    category: "Systems",
    github: "https://github.com/SSmagus/multithreaded-log-search",
    gradient: "from-[#ffd89b]/40 to-[#ffb86b]/40"
  },
  {
    title: "Flow State Zone",
    tagline: "CLI productivity and CP workbench",
    description: "C++ CLI workspace for competitive programmers featuring structured task management, Codeforces integration, AI-powered hints, and SQLite persistence.",
    highlights: [
      "Integrated Codeforces API for automatic problem metadata fetching",
      "Progressive AI hint pipeline using Gemini API",
      "SQLite-backed persistence for tasks and reflections",
      "Structured CLI workflow for CP practice management"
    ],
    stack: [
      "C++",
      "SQLite",
      "REST APIs",
      "Gemini API"
    ],
    category: "Backend",
    github: "https://github.com/SSmagus/flow-zone-cli-tool",
    gradient: "from-[#b8b5ff]/40 to-[#8f94fb]/40"
  },
  {
    title: "Authentication & Authorization Service",
    tagline: "Secure JWT authentication backend",
    description: "Authentication backend implementing JWT-based security, account verification, password reset flows, and stateless session management using Spring Security.",
    highlights: [
      "JWT-based stateless authentication flow",
      "Secure password reset and account verification",
      "Custom Spring Security authentication filters",
      "BCrypt password hashing and token validation"
    ],
    stack: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "MySQL"
    ],
    category: "Security",
    github: "https://github.com/SSmagus/email-auth-service",
    gradient: "from-[#f7b0c8]/40 to-[#ff8a8a]/40"
  }
];
const FILTERS = [
  "All",
  "Backend",
  "Systems",
  "Distributed",
  "Security"
];
function Projects() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState(null);
  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);
  const duplicated = [...filtered, ...filtered];
  return /* @__PURE__ */ jsxs(
    Section,
    {
      id: "projects",
      eyebrow: "// projects",
      title: /* @__PURE__ */ jsxs(Fragment, { children: [
        "Things I've",
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient-static", children: "built" }),
        "."
      ] }),
      description: "Production-grade systems, engineering experiments, and ideas I wanted to see exist.",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "relative mb-16", children: [
          /* @__PURE__ */ jsx("div", { className: "h-px w-full bg-gradient-to-r from-transparent via-[#c6b7ff]/50 to-transparent" }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#8ba8ff]/8 to-transparent blur-2xl" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mb-10 flex flex-wrap gap-2", children: FILTERS.map((f) => /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setFilter(f),
            className: cn(
              "rounded-full px-4 py-1.5 text-sm transition-all border",
              filter === f ? "bg-gradient-to-r from-[#8ba8ff] to-[#f2a7c5] text-white border-transparent shadow-[0_8px_30px_rgba(139,168,255,0.25)]" : "glass text-[#687086] border-white/40 hover:text-[#2a3042]"
            ),
            children: f
          },
          f
        )) }),
        /* @__PURE__ */ jsxs("div", { className: "relative left-1/2 w-screen -translate-x-1/2 space-y-6 overflow-hidden py-2", children: [
          /* @__PURE__ */ jsx(
            motion.div,
            {
              animate: { x: ["0%", "-50%"] },
              transition: {
                duration: 38,
                repeat: Infinity,
                ease: "linear"
              },
              className: "flex gap-6 w-max",
              children: duplicated.map((p, i) => /* @__PURE__ */ jsxs(
                motion.article,
                {
                  whileHover: {
                    y: -8,
                    scale: 1.02
                  },
                  transition: { duration: 0.25 },
                  onClick: () => setActive(p),
                  className: "group relative glass rounded-[2rem] overflow-hidden cursor-pointer border border-white/40 min-w-[420px] max-w-[420px]",
                  children: [
                    /* @__PURE__ */ jsx(
                      "div",
                      {
                        className: cn(
                          "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl bg-gradient-to-br",
                          p.gradient
                        )
                      }
                    ),
                    /* @__PURE__ */ jsxs(
                      "div",
                      {
                        className: cn(
                          "relative h-52 bg-gradient-to-br overflow-hidden",
                          p.gradient
                        ),
                        children: [
                          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-white/10" }),
                          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-white/40 to-transparent" }),
                          /* @__PURE__ */ jsxs("div", { className: "absolute bottom-4 left-5", children: [
                            /* @__PURE__ */ jsx("div", { className: "font-mono text-xs text-[#5b6275]", children: p.category }),
                            /* @__PURE__ */ jsx("h3", { className: "mt-1 font-display text-2xl font-black text-[#2a3042]", children: p.title })
                          ] }),
                          /* @__PURE__ */ jsx("div", { className: "absolute top-4 right-4 grid h-10 w-10 place-items-center rounded-xl bg-white/50 backdrop-blur-md border border-white/50 opacity-0 group-hover:opacity-100 transition-all duration-300", children: /* @__PURE__ */ jsx(ArrowUpRight, { className: "size-4 text-[#2a3042]" }) })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxs("div", { className: "relative p-6", children: [
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-[#7b8194] font-medium", children: p.tagline }),
                      /* @__PURE__ */ jsx("p", { className: "mt-4 text-[15px] leading-relaxed text-[#687086]", children: p.description }),
                      /* @__PURE__ */ jsx("p", { className: "mt-5 text-sm text-[#7b8194]", children: p.stack.join(" · ") }),
                      /* @__PURE__ */ jsxs("div", { className: "mt-6 flex gap-2", children: [
                        p.github && /* @__PURE__ */ jsx(
                          Button,
                          {
                            variant: "glass",
                            size: "sm",
                            asChild: true,
                            onClick: (e) => e.stopPropagation(),
                            children: /* @__PURE__ */ jsxs(
                              "a",
                              {
                                href: p.github,
                                target: "_blank",
                                rel: "noreferrer",
                                children: [
                                  /* @__PURE__ */ jsx(Github, {}),
                                  "Code"
                                ]
                              }
                            )
                          }
                        ),
                        p.demo && /* @__PURE__ */ jsx(
                          Button,
                          {
                            variant: "glass",
                            size: "sm",
                            asChild: true,
                            onClick: (e) => e.stopPropagation(),
                            children: /* @__PURE__ */ jsxs(
                              "a",
                              {
                                href: p.demo,
                                target: "_blank",
                                rel: "noreferrer",
                                children: [
                                  /* @__PURE__ */ jsx(ExternalLink, {}),
                                  "Demo"
                                ]
                              }
                            )
                          }
                        )
                      ] })
                    ] })
                  ]
                },
                `top-${p.title}-${i}`
              ))
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              animate: { x: ["-50%", "0%"] },
              transition: {
                duration: 42,
                repeat: Infinity,
                ease: "linear"
              },
              className: "flex gap-6 w-max",
              children: [...duplicated].reverse().map((p, i) => /* @__PURE__ */ jsxs(
                motion.article,
                {
                  whileHover: {
                    y: -8,
                    scale: 1.02
                  },
                  transition: { duration: 0.25 },
                  onClick: () => setActive(p),
                  className: "group relative glass rounded-[2rem] overflow-hidden cursor-pointer border border-white/40 min-w-[420px] max-w-[420px]",
                  children: [
                    /* @__PURE__ */ jsx(
                      "div",
                      {
                        className: cn(
                          "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl bg-gradient-to-br",
                          p.gradient
                        )
                      }
                    ),
                    /* @__PURE__ */ jsxs(
                      "div",
                      {
                        className: cn(
                          "relative h-52 bg-gradient-to-br overflow-hidden",
                          p.gradient
                        ),
                        children: [
                          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-white/10" }),
                          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-white/40 to-transparent" }),
                          /* @__PURE__ */ jsxs("div", { className: "absolute bottom-4 left-5", children: [
                            /* @__PURE__ */ jsx("div", { className: "font-mono text-xs text-[#5b6275]", children: p.category }),
                            /* @__PURE__ */ jsx("h3", { className: "mt-1 font-display text-2xl font-black text-[#2a3042]", children: p.title })
                          ] }),
                          /* @__PURE__ */ jsx("div", { className: "absolute top-4 right-4 grid h-10 w-10 place-items-center rounded-xl bg-white/50 backdrop-blur-md border border-white/50 opacity-0 group-hover:opacity-100 transition-all duration-300", children: /* @__PURE__ */ jsx(ArrowUpRight, { className: "size-4 text-[#2a3042]" }) })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxs("div", { className: "relative p-6", children: [
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-[#7b8194] font-medium", children: p.tagline }),
                      /* @__PURE__ */ jsx("p", { className: "mt-4 text-[15px] leading-relaxed text-[#687086]", children: p.description }),
                      /* @__PURE__ */ jsx("p", { className: "mt-5 text-sm text-[#7b8194]", children: p.stack.join(" · ") }),
                      /* @__PURE__ */ jsxs("div", { className: "mt-6 flex gap-2", children: [
                        p.github && /* @__PURE__ */ jsx(
                          Button,
                          {
                            variant: "glass",
                            size: "sm",
                            asChild: true,
                            onClick: (e) => e.stopPropagation(),
                            children: /* @__PURE__ */ jsxs(
                              "a",
                              {
                                href: p.github,
                                target: "_blank",
                                rel: "noreferrer",
                                children: [
                                  /* @__PURE__ */ jsx(Github, {}),
                                  "Code"
                                ]
                              }
                            )
                          }
                        ),
                        p.demo && /* @__PURE__ */ jsx(
                          Button,
                          {
                            variant: "glass",
                            size: "sm",
                            asChild: true,
                            onClick: (e) => e.stopPropagation(),
                            children: /* @__PURE__ */ jsxs(
                              "a",
                              {
                                href: p.demo,
                                target: "_blank",
                                rel: "noreferrer",
                                children: [
                                  /* @__PURE__ */ jsx(ExternalLink, {}),
                                  "Demo"
                                ]
                              }
                            )
                          }
                        )
                      ] })
                    ] })
                  ]
                },
                `bottom-${p.title}-${i}`
              ))
            }
          )
        ] }),
        /* @__PURE__ */ jsx(AnimatePresence, { children: active && /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            onClick: () => setActive(null),
            className: "fixed inset-0 z-[100] grid place-items-center bg-background/80 backdrop-blur-md p-4",
            children: /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: {
                  opacity: 0,
                  scale: 0.95,
                  y: 20
                },
                animate: {
                  opacity: 1,
                  scale: 1,
                  y: 0
                },
                exit: {
                  opacity: 0,
                  scale: 0.95,
                  y: 20
                },
                onClick: (e) => e.stopPropagation(),
                className: "glass-strong rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-auto border border-white/40",
                children: [
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: cn(
                        "relative h-52 bg-gradient-to-br",
                        active.gradient
                      ),
                      children: /* @__PURE__ */ jsx(
                        "button",
                        {
                          onClick: () => setActive(null),
                          className: "absolute top-4 right-4 grid h-10 w-10 place-items-center rounded-xl glass",
                          children: /* @__PURE__ */ jsx(X, { className: "size-4" })
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { className: "p-7", children: [
                    /* @__PURE__ */ jsx("div", { className: "font-mono text-xs text-[#7c95ff]", children: active.category }),
                    /* @__PURE__ */ jsx("h3", { className: "mt-2 font-display text-3xl font-black text-[#2a3042]", children: active.title }),
                    /* @__PURE__ */ jsx("p", { className: "mt-2 text-[#687086]", children: active.tagline }),
                    /* @__PURE__ */ jsx("p", { className: "mt-5 leading-relaxed text-[#5b6275]", children: active.description }),
                    /* @__PURE__ */ jsx("h4", { className: "mt-6 text-xs uppercase tracking-wider text-[#7b8194]", children: "Highlights" }),
                    /* @__PURE__ */ jsx("ul", { className: "mt-3 space-y-2 text-sm", children: active.highlights.map((h) => /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-[#8ba8ff]", children: "▸" }),
                      /* @__PURE__ */ jsx("span", { className: "text-[#5b6275]", children: h })
                    ] }, h)) }),
                    /* @__PURE__ */ jsx("p", { className: "mt-6 text-sm text-[#7b8194]", children: active.stack.join(" · ") }),
                    /* @__PURE__ */ jsxs("div", { className: "mt-7 flex gap-2", children: [
                      active.github && /* @__PURE__ */ jsx(
                        Button,
                        {
                          variant: "hero",
                          size: "sm",
                          asChild: true,
                          children: /* @__PURE__ */ jsxs(
                            "a",
                            {
                              href: active.github,
                              target: "_blank",
                              rel: "noreferrer",
                              children: [
                                /* @__PURE__ */ jsx(Github, {}),
                                "View Code"
                              ]
                            }
                          )
                        }
                      ),
                      active.demo && /* @__PURE__ */ jsx(
                        Button,
                        {
                          variant: "glass",
                          size: "sm",
                          asChild: true,
                          children: /* @__PURE__ */ jsxs(
                            "a",
                            {
                              href: active.demo,
                              target: "_blank",
                              rel: "noreferrer",
                              children: [
                                /* @__PURE__ */ jsx(ExternalLink, {}),
                                "Live Demo"
                              ]
                            }
                          )
                        }
                      )
                    ] })
                  ] })
                ]
              }
            )
          }
        ) })
      ]
    }
  );
}
function Counter({ to, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1500;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / dur);
      setVal(Math.floor(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to]);
  return /* @__PURE__ */ jsxs("span", { ref, children: [
    val.toLocaleString(),
    suffix
  ] });
}
const PLATFORMS = [
  { name: "LeetCode", rating: "Guardian", value: 2127, label: "Max Rating", color: "from-amber-500 to-orange-500" },
  { name: "Codeforces", rating: "Specialist", value: 1506, label: "Max Rating", color: "from-cyan-500 to-blue-500" },
  { name: "CodeChef", rating: "3★", value: 1691, label: "Max Rating", color: "from-fuchsia-500 to-purple-500" },
  { name: "AtCoder", rating: "7 Kyu", value: 615, label: "Problems", color: "from-emerald-500 to-teal-500" }
];
const ACHIEVEMENTS = [
  { icon: Trophy, label: "Top 1.33%", sub: "Leetcode" },
  { icon: Flame, label: "600-day streak", sub: "Daily problem solving" },
  { icon: Target, label: "Round 3", sub: "Meta Hacker Cup" },
  { icon: Award, label: "Top 3", sub: "University Competitions ( GLA etc )" }
];
function Heatmap() {
  const [cells, setCells] = useState([]);
  useEffect(() => {
    async function load() {
      const res = await fetch("/leetcode/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          query: `
          query userProfileCalendar($username: String!) {
            matchedUser(username: $username) {
              userCalendar {
                submissionCalendar
              }
            }
          }
        `,
          variables: {
            username: "crackedDev"
          }
        })
      });
      const json = await res.json();
      const raw = JSON.parse(
        json.data.matchedUser.userCalendar.submissionCalendar
      );
      const arr = [];
      Object.values(raw).forEach((v) => {
        const count = Number(v);
        if (count === 0) arr.push(0);
        else if (count < 3) arr.push(1);
        else if (count < 6) arr.push(2);
        else if (count < 10) arr.push(3);
        else arr.push(4);
      });
      while (arr.length < 371) arr.unshift(0);
      setCells(arr.slice(-371));
    }
    load();
  }, []);
  const colors = [
    "bg-[#161b22]",
    "bg-[#0e4429]",
    "bg-[#006d32]",
    "bg-[#26a641]",
    "bg-[#39d353]"
  ];
  return /* @__PURE__ */ jsxs("div", { className: "overflow-x-auto scrollbar-none", children: [
    /* @__PURE__ */ jsx("div", { className: "grid grid-flow-col grid-rows-7 gap-[3px] min-w-max", children: cells.map((v, i) => /* @__PURE__ */ jsx(
      motion.div,
      {
        className: `size-2.5 rounded-[3px] ${colors[v]}`
      },
      i
    )) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-5 grid grid-cols-3 gap-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-border/50 bg-card/40 p-3", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Submissions" }),
        /* @__PURE__ */ jsx("h3", { className: "mt-1 text-xl font-semibold", children: "5000" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-border/50 bg-card/40 p-3", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Current Streak" }),
        /* @__PURE__ */ jsx("h3", { className: "mt-1 text-xl font-semibold text-emerald-400", children: "587" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-border/50 bg-card/40 p-3", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Total Days" }),
        /* @__PURE__ */ jsx("h3", { className: "mt-1 text-xl font-semibold", children: "607" })
      ] })
    ] })
  ] });
}
function CompetitiveProgramming() {
  return /* @__PURE__ */ jsxs(
    Section,
    {
      id: "cp",
      eyebrow: "// competitive programming",
      title: /* @__PURE__ */ jsxs(Fragment, { children: [
        "Algorithms are my ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient-static", children: "playground" }),
        "."
      ] }),
      description: "From graph theory to segment trees, from contests at 8 AM Sunday to debugging WA at 3 AM — competitive programming sharpened how I think about every system I build.",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-5", children: [
          /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 gap-4", children: PLATFORMS.map((p, i) => /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: i * 0.08 },
              className: "glass glow-border rounded-2xl p-5 relative overflow-hidden",
              children: [
                /* @__PURE__ */ jsx("div", { className: `absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br ${p.color} opacity-20 blur-2xl` }),
                /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: p.name }),
                /* @__PURE__ */ jsx("div", { className: "mt-1 font-display text-3xl font-bold text-gradient-static", children: /* @__PURE__ */ jsx(Counter, { to: p.value }) }),
                /* @__PURE__ */ jsx("div", { className: "mt-1 text-xs text-muted-foreground", children: p.label }),
                /* @__PURE__ */ jsx("div", { className: `mt-3 inline-flex rounded-md bg-gradient-to-r ${p.color} px-2 py-0.5 text-[11px] font-mono text-white`, children: p.rating })
              ]
            },
            p.name
          )) }),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              className: "glass glow-border rounded-2xl p-5",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-baseline justify-between", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h3", { className: "font-display font-semibold", children: "Activity" }),
                    /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Problems solved this year" })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "font-display text-2xl font-bold text-gradient-static", children: /* @__PURE__ */ jsx(Counter, { to: 612 }) })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "mt-5", children: /* @__PURE__ */ jsx(Heatmap, {}) })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-3", children: ACHIEVEMENTS.map((a, i) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: i * 0.06 },
            whileHover: { y: -3 },
            className: "glass rounded-xl p-4 hover:border-[color-mix(in_oklab,var(--glow)_40%,transparent)] transition-all",
            children: [
              /* @__PURE__ */ jsx(a.icon, { className: "size-5 text-[var(--glow)]" }),
              /* @__PURE__ */ jsx("div", { className: "mt-2 font-semibold", children: a.label }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: a.sub })
            ]
          },
          a.label
        )) })
      ]
    }
  );
}
const ITEMS = [
  {
    year: "2020",
    title: "First line of code",
    text: "Built small games with Scratch and basic web pages with HTML — curiosity turned into obsession pretty quickly."
  },
  {
    year: "2022",
    title: "Automation & internet rabbit holes",
    text: "Experimented with trading tools, automation scripts, and online ecosystems — learned fast iteration and self-learning early on."
  },
  {
    year: "2023",
    title: "Started building seriously",
    text: "Learned core web development fundamentals, explored how software works under the hood, and began creating real projects."
  },
  {
    year: "SUMMER 2024",
    title: "Backend journey began",
    text: "Built full-stack applications, explored APIs, databases, authentication, and contributed to open-source ecosystems."
  },
  {
    year: "WINTER 2024",
    title: "Competitive programming era",
    text: "Discovered the power of consistency through DSA and problem solving, building strong foundations in algorithms and optimization."
  },
  {
    year: "SUMMER 2025",
    title: "Deep dive into systems & backend",
    text: "Started building larger backend and systems projects with Spring Boot and C++, including LeetHost, Nearby, Vector DB, and concurrent engines."
  },
  {
    year: "WINTER 2025",
    title: "Codeforces & performance mindset",
    text: "Got heavily into mathematical thinking, optimization, and low-level performance concepts while climbing to Specialist on Codeforces."
  },
  {
    year: "2026",
    title: "Building for scale",
    text: "Focused on scalable backend systems, distributed architectures, and preparing for high-impact software engineering roles."
  }
];
function Timeline() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"]
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    mass: 0.2
  });
  return /* @__PURE__ */ jsx(
    Section,
    {
      id: "timeline",
      eyebrow: "// journey",
      title: /* @__PURE__ */ jsxs(Fragment, { children: [
        "The road",
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient-static", children: "so far" }),
        "."
      ] }),
      description: "Every line, every contest, every failed submission — they all add up.",
      children: /* @__PURE__ */ jsxs("div", { ref, className: "relative", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute left-4 sm:left-1/2 top-0 bottom-0\n             w-[2px] -translate-x-1/2\n             bg-white/10"
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            style: { scaleY },
            className: "absolute origin-top left-4 sm:left-1/2 top-0 bottom-0\n             w-[3px] -translate-x-1/2 rounded-full z-10\n\n             bg-gradient-to-b\n             from-[#8ba8ff]\n             via-[#c6b7ff]\n             to-[#f2a7c5]\n\n             shadow-[0_0_12px_rgba(139,168,255,0.7),\n                     0_0_28px_rgba(198,183,255,0.45)]"
          }
        ),
        ITEMS.map((it, i) => {
          const leftSide = i % 2 === 0;
          return /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 40 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, margin: "-80px" },
              transition: {
                duration: 0.6,
                delay: i * 0.05
              },
              className: "relative pl-12 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-8 mb-14",
              children: [
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    whileInView: {
                      scale: [0.8, 1.35, 1]
                    },
                    transition: { duration: 0.6 },
                    className: "absolute left-4 sm:left-1/2 -translate-x-1/2\n             size-5 rounded-full z-20\n\n             bg-gradient-to-br\n             from-[#8ba8ff]\n             via-[#c6b7ff]\n             to-[#f2a7c5]\n\n             shadow-[0_0_15px_rgba(139,168,255,0.9),\n                     0_0_40px_rgba(242,167,197,0.45)]",
                    style: { top: 8 }
                  }
                ),
                leftSide ? /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsxs("div", { className: "sm:pr-8 sm:text-right", children: [
                    /* @__PURE__ */ jsx(
                      motion.div,
                      {
                        whileInView: { opacity: [0.4, 1] },
                        transition: { duration: 0.6 },
                        className: "font-mono text-xs tracking-widest text-[var(--glow)]",
                        children: it.year
                      }
                    ),
                    /* @__PURE__ */ jsx("h3", { className: "mt-2 font-display text-lg font-semibold", children: it.title }),
                    /* @__PURE__ */ jsx(
                      "p",
                      {
                        className: "mt-2 text-sm leading-relaxed\n                                 text-muted-foreground max-w-md sm:ml-auto",
                        children: it.text
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "hidden sm:block" })
                ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsx("div", { className: "hidden sm:block" }),
                  /* @__PURE__ */ jsxs("div", { className: "sm:pl-8", children: [
                    /* @__PURE__ */ jsx(
                      motion.div,
                      {
                        whileInView: { opacity: [0.4, 1] },
                        transition: { duration: 0.6 },
                        className: "font-mono text-xs tracking-widest text-[var(--glow)]",
                        children: it.year
                      }
                    ),
                    /* @__PURE__ */ jsx("h3", { className: "mt-2 font-display text-lg font-semibold", children: it.title }),
                    /* @__PURE__ */ jsx(
                      "p",
                      {
                        className: "mt-2 text-sm leading-relaxed\n                                 text-muted-foreground max-w-md",
                        children: it.text
                      }
                    )
                  ] })
                ] })
              ]
            },
            it.year
          );
        })
      ] })
    }
  );
}
function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  return /* @__PURE__ */ jsx(
    Section,
    {
      id: "contact",
      eyebrow: "// contact",
      title: /* @__PURE__ */ jsxs(Fragment, { children: [
        "Let's build something ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient-static", children: "great" }),
        "."
      ] }),
      description: "Got an opportunity, a question, need guidance or just want to talk ? My inbox is open.",
      children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-5 gap-6", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -20 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            className: "lg:col-span-2 space-y-3",
            children: [
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: "mailto:saumya12004@gmail.com",
                  className: "group flex items-start gap-3 glass glow-border rounded-2xl p-5 hover:border-[color-mix(in_oklab,var(--glow)_40%,transparent)] transition-all",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-[var(--glow)]/20 to-[var(--glow-2)]/20 border border-border text-[var(--glow)]", children: /* @__PURE__ */ jsx(Mail, { className: "size-4" }) }),
                    /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
                      /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: "Email" }),
                      /* @__PURE__ */ jsx("div", { className: "font-mono text-sm truncate", children: "saumya122004@gmail.com" })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: "https://linkedin.com/in/saumya-dhakad-100x",
                  target: "_blank",
                  rel: "noreferrer",
                  className: "group flex items-start gap-3 glass rounded-2xl p-5 hover:border-[color-mix(in_oklab,var(--glow)_40%,transparent)] transition-all",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-[var(--glow)]/20 to-[var(--glow-2)]/20 border border-border text-[var(--glow)]", children: /* @__PURE__ */ jsx(Linkedin, { className: "size-4" }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: "LinkedIn" }),
                      /* @__PURE__ */ jsx("div", { className: "font-mono text-sm", children: "/in/saumya-dhakad-100x" })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: "https://github.com/SSmagus",
                  target: "_blank",
                  rel: "noreferrer",
                  className: "group flex items-start gap-3 glass rounded-2xl p-5 hover:border-[color-mix(in_oklab,var(--glow)_40%,transparent)] transition-all",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-[var(--glow)]/20 to-[var(--glow-2)]/20 border border-border text-[var(--glow)]", children: /* @__PURE__ */ jsx(Github, { className: "size-4" }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: "GitHub" }),
                      /* @__PURE__ */ jsx("div", { className: "font-mono text-sm", children: "@SSmagus" })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 glass rounded-2xl p-5", children: [
                /* @__PURE__ */ jsx("div", { className: "grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-[var(--glow)]/20 to-[var(--glow-2)]/20 border border-border text-[var(--glow)]", children: /* @__PURE__ */ jsx(MapPin, { className: "size-4" }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: "Location" }),
                  /* @__PURE__ */ jsx("div", { className: "font-mono text-sm", children: "India · Remote-friendly" })
                ] })
              ] }),
              /* @__PURE__ */ jsx(Button, { variant: "hero", size: "lg", className: "w-full", asChild: true, children: /* @__PURE__ */ jsxs("a", { href: "src\\assets\\saumya_dhakad_resume.pdf", download: true, children: [
                /* @__PURE__ */ jsx(Download, {}),
                " Download Resume"
              ] }) })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: 20 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            className: "lg:col-span-3 glass-strong glow-border rounded-2xl p-6 sm:p-8 flex flex-col justify-between",
            children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "mt-3 text-3xl sm:text-4xl font-semibold leading-tight", children: "Let's Connect" }),
                /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-2xl text-muted-foreground leading-relaxed", children: "I enjoy solving complex engineering problems — from competitive programming and low-level optimization to scalable backend architectures and distributed systems. Always open to impactful opportunities, collaborations, and ambitious ideas." })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-8 grid sm:grid-cols-3 gap-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border/50 bg-muted/20 p-4", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: "Focus" }),
                  /* @__PURE__ */ jsx("div", { className: "mt-2 text-sm font-medium", children: "Backend · Systems · CP" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border/50 bg-muted/20 p-4", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: "Availability" }),
                  /* @__PURE__ */ jsx("div", { className: "mt-2 text-sm font-medium", children: "Internships · Full-time" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border/50 bg-muted/20 p-4", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: "Preferred Work" }),
                  /* @__PURE__ */ jsx("div", { className: "mt-2 text-sm font-medium", children: "In-office · Remote · Hybrid" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
                /* @__PURE__ */ jsx(Button, { variant: "hero", size: "lg", asChild: true, children: /* @__PURE__ */ jsxs("a", { href: "mailto:saumya122004@gmail.com", children: [
                  /* @__PURE__ */ jsx(Mail, { className: "mr-2 size-4" }),
                  "Contact Me"
                ] }) }),
                /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "lg", asChild: true, children: /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: "/saumya_dhakad_resume.pdf",
                    target: "_blank",
                    rel: "noreferrer",
                    children: [
                      /* @__PURE__ */ jsx(FileText, { className: "mr-2 size-4" }),
                      "View Resume"
                    ]
                  }
                ) })
              ] })
            ]
          }
        )
      ] })
    }
  );
}
const SOCIALS = [
  { icon: Github, href: "https://github.com/SSmagus", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/saumya-dhakad-100x", label: "LinkedIn" },
  { icon: Code2, href: "https://leetcode.com/CrackedDev", label: "LeetCode" },
  { icon: Sparkles, href: "https://codeforces.com/profile/saumya", label: "Codeforces" },
  { icon: Mail, href: "mailto:saumya122004@gmail.com", label: "Email" }
];
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "relative border-t border-border mt-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-4 py-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx("div", { className: "grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-[var(--glow)] to-[var(--glow-2)] text-primary-foreground font-display font-bold", children: "SD" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "font-display font-semibold", children: "Saumya Dhakad" }),
          /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground font-mono", children: "Backend Engineer · Competitive Programmer" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("nav", { className: "flex items-center gap-6 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsx("a", { href: "#about", className: "hover:text-foreground transition-colors", children: "About" }),
        /* @__PURE__ */ jsx("a", { href: "#projects", className: "hover:text-foreground transition-colors", children: "Projects" }),
        /* @__PURE__ */ jsx("a", { href: "#cp", className: "hover:text-foreground transition-colors", children: "CP" }),
        /* @__PURE__ */ jsx("a", { href: "#contact", className: "hover:text-foreground transition-colors", children: "Contact" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1.5", children: SOCIALS.map((s) => /* @__PURE__ */ jsx(
        "a",
        {
          href: s.href,
          target: "_blank",
          rel: "noreferrer",
          "aria-label": s.label,
          className: "grid h-9 w-9 place-items-center rounded-lg glass hover:text-[var(--glow)] transition-colors",
          children: /* @__PURE__ */ jsx(s.icon, { className: "size-4" })
        },
        s.label
      )) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground font-mono", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Saumya Dhakad. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
        "Built with ",
        /* @__PURE__ */ jsx(Heart, { className: "size-3 text-[var(--glow)] fill-[var(--glow)]" }),
        " using React, Tailwind & Framer Motion"
      ] })
    ] })
  ] }) });
}
function CommandPalette({ open, onOpenChange }) {
  const [q, setQ] = useState("");
  const [idx, setIdx] = useState(0);
  const go = (id) => {
    onOpenChange(false);
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 50);
  };
  const items = [
    { label: "Home", icon: Home, action: () => go("home"), group: "Navigate" },
    { label: "About", icon: User, action: () => go("about"), group: "Navigate" },
    { label: "Skills", icon: Code, action: () => go("skills"), group: "Navigate" },
    { label: "Projects", icon: FolderGit2, action: () => go("projects"), group: "Navigate" },
    { label: "Competitive Programming", icon: Trophy, action: () => go("cp"), group: "Navigate" },
    { label: "Journey", icon: Clock, action: () => go("timeline"), group: "Navigate" },
    { label: "Contact", icon: Mail, action: () => go("contact"), group: "Navigate" },
    { label: "GitHub", hint: "↗", icon: Github, action: () => window.open("https://github.com/", "_blank"), group: "Links" },
    { label: "LinkedIn", hint: "↗", icon: Linkedin, action: () => window.open("https://linkedin.com/", "_blank"), group: "Links" },
    { label: "Email me", hint: "↗", icon: Mail, action: () => window.location.href = "mailto:saumya@example.com", group: "Links" },
    { label: "Download Resume", icon: Download, action: () => {
    }, group: "Actions" }
  ];
  const filtered = items.filter((i) => i.label.toLowerCase().includes(q.toLowerCase()));
  useEffect(() => {
    setIdx(0);
  }, [q, open]);
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        onOpenChange(!open);
      }
      if (!open) return;
      if (e.key === "Escape") onOpenChange(false);
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setIdx((i) => Math.min(filtered.length - 1, i + 1));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setIdx((i) => Math.max(0, i - 1));
      }
      if (e.key === "Enter") {
        e.preventDefault();
        filtered[idx]?.action();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, filtered, idx, onOpenChange]);
  const groups = ["Navigate", "Links", "Actions"];
  return /* @__PURE__ */ jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      onClick: () => onOpenChange(false),
      className: "fixed inset-0 z-[200] grid place-items-start justify-center pt-[15vh] bg-background/70 backdrop-blur-md px-4",
      children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: -10, scale: 0.97 },
          animate: { opacity: 1, y: 0, scale: 1 },
          exit: { opacity: 0, y: -10, scale: 0.97 },
          transition: { duration: 0.18 },
          onClick: (e) => e.stopPropagation(),
          className: "glass-strong glow-border rounded-2xl w-full max-w-lg overflow-hidden",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 px-4 py-3 border-b border-border", children: [
              /* @__PURE__ */ jsx(Search, { className: "size-4 text-muted-foreground" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  autoFocus: true,
                  value: q,
                  onChange: (e) => setQ(e.target.value),
                  placeholder: "Type a command or search...",
                  className: "flex-1 bg-transparent outline-none text-sm placeholder:text-muted-foreground"
                }
              ),
              /* @__PURE__ */ jsx("kbd", { className: "rounded bg-muted px-1.5 py-0.5 text-[10px] text-muted-foreground font-mono", children: "ESC" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "max-h-[50vh] overflow-y-auto p-2", children: [
              groups.map((g) => {
                const groupItems = filtered.filter((i) => i.group === g);
                if (!groupItems.length) return null;
                return /* @__PURE__ */ jsxs("div", { className: "mb-2", children: [
                  /* @__PURE__ */ jsx("div", { className: "px-2 py-1 text-[10px] uppercase tracking-wider text-muted-foreground font-mono", children: g }),
                  groupItems.map((it) => {
                    const realIdx = filtered.indexOf(it);
                    return /* @__PURE__ */ jsxs(
                      "button",
                      {
                        onMouseEnter: () => setIdx(realIdx),
                        onClick: it.action,
                        className: `w-full flex items-center gap-3 rounded-lg px-2.5 py-2 text-sm transition-colors ${realIdx === idx ? "bg-accent/30 text-foreground" : "text-muted-foreground"}`,
                        children: [
                          /* @__PURE__ */ jsx(it.icon, { className: "size-4" }),
                          /* @__PURE__ */ jsx("span", { className: "flex-1 text-left", children: it.label }),
                          it.hint && /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground font-mono", children: it.hint })
                        ]
                      },
                      it.label
                    );
                  })
                ] }, g);
              }),
              !filtered.length && /* @__PURE__ */ jsx("div", { className: "px-3 py-8 text-center text-sm text-muted-foreground", children: "No results" })
            ] })
          ]
        }
      )
    }
  ) });
}
function ScrollToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 600);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return /* @__PURE__ */ jsx(AnimatePresence, { children: show && /* @__PURE__ */ jsx(
    motion.button,
    {
      initial: { opacity: 0, scale: 0.6, y: 20 },
      animate: { opacity: 1, scale: 1, y: 0 },
      exit: { opacity: 0, scale: 0.6, y: 20 },
      onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
      "aria-label": "Scroll to top",
      className: "fixed bottom-6 right-6 z-40 grid h-11 w-11 place-items-center rounded-full glass-strong glow-border hover:text-[var(--glow)] transition-colors",
      children: /* @__PURE__ */ jsx(ArrowUp, { className: "size-4" })
    }
  ) });
}
function Index() {
  const [paletteOpen, setPaletteOpen] = useState(false);
  return /* @__PURE__ */ jsxs("div", { className: "relative min-h-screen", children: [
    /* @__PURE__ */ jsx(AnimatedBackground, {}),
    /* @__PURE__ */ jsx(Navbar, { onOpenPalette: () => setPaletteOpen(true) }),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx(Hero, {}),
      /* @__PURE__ */ jsx(About, {}),
      /* @__PURE__ */ jsx(Skills, {}),
      /* @__PURE__ */ jsx(Projects, {}),
      /* @__PURE__ */ jsx(CompetitiveProgramming, {}),
      /* @__PURE__ */ jsx(Timeline, {}),
      /* @__PURE__ */ jsx(Contact, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(ScrollToTop, {}),
    /* @__PURE__ */ jsx(CommandPalette, { open: paletteOpen, onOpenChange: setPaletteOpen })
  ] });
}
export {
  Index as component
};
