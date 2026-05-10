"use client";

import { ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "glass";
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center px-8 py-3 font-semibold rounded-full overflow-hidden transition-all duration-300 transform";

  const variants = {
    primary:
      "bg-gradient-to-r from-gold-dark to-gold text-primary hover:shadow-[0_0_20px_rgba(199,154,66,0.6)] hover:-translate-y-1",
    secondary:
      "bg-white text-primary hover:bg-gray-100 hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] hover:-translate-y-1",
    outline:
      "border-2 border-gold text-gold hover:bg-gold hover:text-primary hover:shadow-[0_0_15px_rgba(199,154,66,0.4)] hover:-translate-y-1",
    glass:
      "glass text-white hover:bg-white/10 hover:border-white/30 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:-translate-y-1",
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {variant === "primary" && (
        <div className="absolute inset-0 bg-white/20 translate-y-full hover:translate-y-0 transition-transform duration-300 ease-out" />
      )}
    </motion.button>
  );
}
