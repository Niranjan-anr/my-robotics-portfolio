"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import ProjectModal from "./ProjectModal";

interface ProjectCardProps {
  title: string;
  vimeoId: string;
  description: string;
}

export default function ProjectCard({ title, vimeoId, description }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.03, boxShadow: "0 10px 30px rgba(255,255,255,0.1)" }}
        onClick={() => setIsOpen(true)}
        style={{
          marginBottom: "2rem",
          borderRadius: "1rem",
          overflow: "hidden",
          background: "#111",
          padding: "1rem",
          cursor: "pointer",
        }}
      >
        <h3 style={{ color: "#fff", marginBottom: "0.5rem" }}>{title}</h3>
        <p style={{ color: "#aaa" }}>{description.slice(0, 100)}...</p>
      </motion.div>

      <ProjectModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={title}
        description={description}
        vimeoId={vimeoId}
      />
    </>
  );
}
