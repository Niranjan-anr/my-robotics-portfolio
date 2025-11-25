"use client";
import { motion } from "framer-motion";
import React from "react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  vimeoId: string;
}

export default function ProjectModal({ isOpen, onClose, title, description, vimeoId }: ProjectModalProps) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.85)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999,
        overflowY: "auto",
        padding: "2rem",
      }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: "800px",
          width: "100%",
          background: "#111",
          borderRadius: "1rem",
          overflow: "hidden",
          padding: "1.5rem",
          color: "#fff",
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>{title}</h2>

        <div style={{ position: "relative", paddingTop: "56.25%", marginBottom: "1rem" }}>
          <iframe
            src={`https://player.vimeo.com/video/${vimeoId}?title=0&byline=0&portrait=0`}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            title={title}
          ></iframe>
        </div>

        <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>Project Details:</h3>
        <p style={{ color: "#aaa", lineHeight: 1.6 }}>{description}</p>

        <button
          onClick={onClose}
          style={{
            marginTop: "1rem",
            padding: "0.5rem 1.5rem",
            background: "#fff",
            color: "#000",
            border: "none",
            borderRadius: "9999px",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );
}
