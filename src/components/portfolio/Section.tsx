import { motion } from "framer-motion";
import { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="relative overflow-hidden bg-[#080c0a] py-16 sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-40 w-full -translate-x-1/2 bg-gradient-to-b from-[#a3e635]/[0.035] to-transparent blur-3xl" />

        <div className="absolute left-[-12%] top-[10%] h-[420px] w-[420px] rounded-full bg-[#a3e635]/[0.025] blur-[120px]" />

        <div className="absolute bottom-[0%] right-[-12%] h-[420px] w-[420px] rounded-full bg-[#65a30d]/[0.025] blur-[120px]" />

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#0e1511]/40" />
      </div>

      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          {eyebrow && (
            <div className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[#a3e635]">
              {eyebrow}
            </div>
          )}

          <h2 className="font-display text-3xl font-black tracking-tight text-[#f4f7f2] sm:text-4xl md:text-5xl">
            {title}
          </h2>

          {description && (
            <p className="mt-4 text-base leading-relaxed text-[#aebbb2] sm:text-lg">
              {description}
            </p>
          )}
        </motion.div>

        <div className="mt-12">
          {children}
        </div>
      </div>
    </section>
  );
}