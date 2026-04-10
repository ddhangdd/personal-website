"use client";

import FadeIn from "./FadeIn";

interface Project {
  title: string;
  description: string;
  category: string;
  categoryColor: string;
  tech: string[];
}

const projects: Project[] = [
  {
    title: "Enterprise Knowledge Graph",
    description:
      "Architecture integrating Databricks, Neo4j, and Unity Catalog with MCP integration patterns for semantic search across enterprise data.",
    category: "AI Engineering",
    categoryColor: "#0a72ef",
    tech: ["Databricks", "Neo4j", "MCP", "Python"],
  },
  {
    title: "Clinical Outcome Prediction with KEEP",
    description:
      "Reproducing the KEEP embedding framework for in-hospital mortality prediction on MIMIC-IV — constructing a ~5,700-node medical knowledge graph from OMOP vocabularies and integrating as a pluggable embedding layer into PyHealth 2.0.",
    category: "Healthcare AI",
    categoryColor: "#de1d8d",
    tech: ["PyTorch", "node2vec", "GloVe", "NetworkX", "DuckDB"],
  },
  {
    title: "AI Coding Workflow System",
    description:
      "Orchestration layer for Claude Code with custom agents, Eisenhower Matrix TODO tracking, and tmux-based terminal multiplexing across WSL2 and macOS.",
    category: "Developer Tooling",
    categoryColor: "#ff5b4f",
    tech: ["Claude Code", "tmux", "fish", "TypeScript"],
  },
  {
    title: "CRMT Server Migration",
    description:
      "Led migration of critical infrastructure using Ansible playbooks, establishing automated deployment patterns at enterprise scale.",
    category: "Cloud Infrastructure",
    categoryColor: "#171717",
    tech: ["AWS", "Ansible", "Lambda", "SQS"],
  },
  {
    title: "Smart Bookmark Organizer",
    description:
      "AI-powered bookmark management with topic-based collections and intelligent categorization.",
    category: "Full Stack",
    categoryColor: "#171717",
    tech: ["React", "TypeScript", "AI/ML", "REST APIs"],
  },
  {
    title: "MCP Server Architecture",
    description:
      "Model Context Protocol servers for AI agent integration with enterprise tools.",
    category: "MCP Integration",
    categoryColor: "#0a72ef",
    tech: ["MCP", "TypeScript", "Node.js", "APIs"],
  },
];

function CategoryBadge({ label, color }: { label: string; color: string }) {
  const isAccent = color !== "#171717";
  return (
    <span
      className="text-mono-label tracking-[0.1em] px-2.5 py-1 rounded-full text-[0.6875rem]"
      style={{
        color: color,
        backgroundColor: isAccent ? `${color}10` : "#f5f5f5",
      }}
    >
      {label}
    </span>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-vercel-gray-50">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <FadeIn>
          <p className="text-mono-label text-vercel-gray-500 mb-4 tracking-[0.12em]">
            Projects
          </p>
        </FadeIn>

        <FadeIn delay={100}>
          <h2 className="text-section-heading text-[2rem] md:text-[2.5rem] mb-12">
            Selected Work
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, idx) => (
            <FadeIn key={project.title} delay={100 + idx * 80}>
              <div className="group h-full bg-white rounded-vercel-lg card-shadow hover:card-shadow-hover transition-shadow duration-300 flex flex-col">
                {/* Colored top edge */}
                <div
                  className="h-[2px] rounded-t-vercel-lg"
                  style={{ backgroundColor: project.categoryColor }}
                />

                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-4">
                    <CategoryBadge
                      label={project.category}
                      color={project.categoryColor}
                    />
                  </div>

                  <h3 className="text-card-title mb-3 group-hover:text-vercel-black transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-body-small flex-1 mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[0.6875rem] font-medium uppercase tracking-wider text-vercel-gray-400 px-2 py-0.5 rounded bg-vercel-gray-50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
