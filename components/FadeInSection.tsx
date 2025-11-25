"use client";
import { motion, MotionProps } from "framer-motion";
import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

interface FadeInSectionProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
}

export default function FadeInSection({ children, direction = "up", delay = 0 }: FadeInSectionProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const initial: MotionProps["initial"] =
    direction === "up"
      ? { opacity: 0, y: 20 }
      : direction === "down"
      ? { opacity: 0, y: -20 }
      : direction === "left"
      ? { opacity: 0, x: 20 }
      : { opacity: 0, x: -20 };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}
