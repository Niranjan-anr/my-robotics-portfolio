import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main style={{ padding: "4rem 2rem", maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "3rem", fontWeight: 700, color: "#fff", marginBottom: "2rem" }}>Projects</h1>
      <br></br>
      <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "#e2acacff", marginBottom: "2rem" }}>click on the below projects to view them!</h4>
      {projects.map((proj) => (
        <ProjectCard
          key={proj.vimeoId}
          title={proj.title}
          vimeoId={proj.vimeoId}
          description={proj.description}
        />
      ))}
    </main>
  );
}
