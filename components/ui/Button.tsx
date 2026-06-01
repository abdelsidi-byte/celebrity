"use client";

import { cn } from "@/lib/utils/cn";
import { motion } from "framer-motion";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  className,
  type = "button",
  onClick,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-inter font-medium tracking-wide transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-white text-black hover:bg-accent hover:text-black",
    secondary:
      "bg-transparent text-white border border-white hover:bg-white hover:text-black",
    outline:
      "bg-transparent text-white border border-gray-600 hover:border-white hover:text-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      type={type}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
