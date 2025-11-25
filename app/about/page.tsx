"use client";
import FadeInSection from "@/components/FadeInSection";

export default function About() {
  return (
    <main style={{ padding: "6rem 2rem", maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
      <FadeInSection direction="up">
        <h1 style={{ fontSize: "3rem", fontWeight: 700, marginBottom: "1.5rem" }}>About Me</h1>
      </FadeInSection>

      <FadeInSection direction="up" delay={0.3}>
        <p style={{ color: "#ccc", fontSize: "1.2rem", lineHeight: "1.8rem" }}>
          I am a robotics enthusiast and developer, building intelligent robotic systems,
          automation projects, and simulations. I enjoy creating innovative solutions
          with a focus on AI, robotics, and embedded systems.
        </p>
      </FadeInSection>
    </main>
  );
}
