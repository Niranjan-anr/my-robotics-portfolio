"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 3rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Left Text Column */}
      <div style={{ maxWidth: "600px", zIndex: 2 }}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ fontSize: "4rem", fontWeight: 700, marginBottom: "1rem", color: "#fff" }}
        >
          A Niranjan Reddy
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          style={{ fontSize: "1.25rem", color: "#aaa", marginBottom: "2rem", lineHeight: 1.6 }}
        >
          I build intelligent robotic systems, simulations, and automation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <Link href="/projects">
            <button style={buttonStyle}>Explore Projects →</button>
          </Link>
        </motion.div>
      </div>

      {/* Right Image / GIF */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 1.2 }}
        style={{ maxWidth: "600px", zIndex: 1 }}
      >
        <img
          src="/robot-gif.gif" // You can replace with a premium robot GIF
          alt="Robot Animation"
          style={{ width: "100%", borderRadius: "1rem" }}
        />
      </motion.div>
    </section>
  );
}

const buttonStyle: React.CSSProperties = {
  padding: "0.75rem 2rem",
  borderRadius: "9999px",
  background: "#fff",
  color: "#000",
  fontWeight: 600,
  border: "none",
  cursor: "pointer",
};
