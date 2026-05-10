"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  align?: "left" | "center" | "right";
}

export default function SectionHeading({
  title,
  subtitle,
  children,
  align = "center",
}: SectionHeadingProps) {
  const alignment =
    align === "center"
      ? "items-center text-center"
      : align === "right"
      ? "items-end text-right"
      : "items-start text-left";

  return (
    <div className={`flex flex-col ${alignment} mb-16`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-4"
      >
        {align !== "left" && <div className="h-px w-12 bg-gold/50" />}
        <span className="text-gold uppercase tracking-widest font-semibold text-sm">
          {subtitle || "VARNAYA EXIM"}
        </span>
        {align !== "right" && <div className="h-px w-12 bg-gold/50" />}
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6"
      >
        {title}
      </motion.h2>

      {children && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-warm max-w-2xl text-lg"
        >
          {children}
        </motion.div>
      )}
    </div>
  );
}
