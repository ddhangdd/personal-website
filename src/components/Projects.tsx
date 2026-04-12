"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";

interface Project {
  title: string;
  description: string;
  category: string;
  categoryColor: string;
  tech: string[];
  href?: string;
  image?: string;
  imageFit?: "cover" | "contain";
}

const projects: Project[] = [
  {
    title: "Clinical Outcome Prediction with KEEP",
    description:
      "Reproducing the KEEP embedding framework for in-hospital mortality prediction on MIMIC-IV — constructing a ~5,700-node medical knowledge graph from OMOP vocabularies and integrating as a pluggable embedding layer into PyHealth 2.0.",
    category: "Healthcare AI",
    categoryColor: "#de1d8d",
    tech: ["PyTorch", "node2vec", "GloVe", "NetworkX", "DuckDB"],
    image: "/projects/pyhealth-logo.png",
    imageFit: "contain",
  },
  {
    title: "Take-Home Pay Calculator",
    description:
      "I built this to get a better handle on my own finances and know what to actually expect per paycheck\n\nThis app supports side-by-side scenario comparison, 401(k) and HSA contributions, Social Security and Medicare, and URL-shareable state\n\n2025/2026 tax data verified against IRS sources.",
    category: "Personal Finance",
    categoryColor: "#1ed760",
    tech: ["React", "Vite", "GitHub Pages"],
    href: "https://ddhangdd.github.io/take-home-calculator/",
    image: "/projects/take-home-calculator.png",
  },
  {
    title: "Work in Progress",
    description: "Project details coming soon.",
    category: "TBD",
    categoryColor: "#171717",
    tech: [],
  },
];

// Future projects — uncomment and replace placeholders above when ready
// {
//   title: "Enterprise Knowledge Graph",
//   description:
//     "Architecture integrating Databricks, Neo4j, and Unity Catalog with MCP integration patterns for semantic search across enterprise data.",
//   category: "AI Engineering",
//   categoryColor: "#0a72ef",
//   tech: ["Databricks", "Neo4j", "MCP", "Python"],
// },
// {
//   title: "AI Coding Workflow System",
//   description:
//     "Orchestration layer for Claude Code with custom agents, Eisenhower Matrix TODO tracking, and tmux-based terminal multiplexing across WSL2 and macOS.",
//   category: "Developer Tooling",
//   categoryColor: "#ff5b4f",
//   tech: ["Claude Code", "tmux", "fish", "TypeScript"],
// },
// {
//   title: "CRMT Server Migration",
//   description:
//     "Led migration of critical infrastructure using Ansible playbooks, establishing automated deployment patterns at enterprise scale.",
//   category: "Cloud Infrastructure",
//   categoryColor: "#171717",
//   tech: ["AWS", "Ansible", "Lambda", "SQS"],
// },
// {
//   title: "Smart Bookmark Organizer",
//   description:
//     "AI-powered bookmark management with topic-based collections and intelligent categorization.",
//   category: "Full Stack",
//   categoryColor: "#171717",
//   tech: ["React", "TypeScript", "AI/ML", "REST APIs"],
// },
// {
//   title: "MCP Server Architecture",
//   description:
//     "Model Context Protocol servers for AI agent integration with enterprise tools.",
//   category: "MCP Integration",
//   categoryColor: "#0a72ef",
//   tech: ["MCP", "TypeScript", "Node.js", "APIs"],
// },

function CategoryBadge({ label, color }: { label: string; color: string }) {
  const isAccent = color !== "#171717";
  return (
    <span
      className="text-mono-label tracking-[0.1em] px-2.5 py-1 rounded-full text-[0.6875rem]"
      style={{
        color: isAccent ? color : undefined,
        backgroundColor: isAccent ? `${color}10` : undefined,
      }}
    >
      {!isAccent && (
        <span className="text-vercel-gray-600 dark:text-vercel-gray-400 bg-vercel-gray-50 dark:bg-white/[0.06] px-2.5 py-1 rounded-full">
          {label}
        </span>
      )}
      {isAccent && label}
    </span>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-vercel-gray-50 dark:bg-[#0a0a0a]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <FadeIn>
          <p className="text-mono-label text-vercel-gray-500 dark:text-vercel-gray-400 mb-4 tracking-[0.12em]">
            Projects
          </p>
        </FadeIn>

        <FadeIn delay={100}>
          <h2 className="text-section-heading text-[2rem] md:text-[2.5rem] mb-12">
            Selected Work
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
          {projects.map((project, idx) => {
            const cardBody = (
              <div className="group bg-white dark:bg-[#111111] rounded-vercel-lg card-shadow hover:card-shadow-hover transition-shadow duration-300 flex flex-col overflow-hidden">
                {project.image ? (
                  <div className={`relative aspect-[16/10] overflow-hidden ${project.imageFit === "contain" ? "bg-white dark:bg-white/[0.04] flex items-center justify-center" : "bg-vercel-gray-50 dark:bg-white/[0.03]"}`}>
                    {project.imageFit === "contain" ? (
                      <Image
                        src={project.image}
                        alt={`${project.title} logo`}
                        width={185}
                        height={185}
                        className="object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <Image
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    )}
                    <div
                      className="absolute inset-x-0 bottom-0 h-[2px]"
                      style={{ backgroundColor: project.categoryColor === "#171717" ? "rgba(255,255,255,0.1)" : project.categoryColor }}
                    />
                  </div>
                ) : (
                  <div
                    className="h-[2px]"
                    style={{ backgroundColor: project.categoryColor === "#171717" ? "rgba(255,255,255,0.1)" : project.categoryColor }}
                  />
                )}

                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-4 flex items-center justify-between gap-2">
                    <CategoryBadge
                      label={project.category}
                      color={project.categoryColor}
                    />
                    {project.href && (
                      <span
                        aria-hidden="true"
                        className="text-vercel-gray-400 dark:text-vercel-gray-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M7 17L17 7" />
                          <path d="M7 7h10v10" />
                        </svg>
                      </span>
                    )}
                  </div>

                  <h3 className="text-card-title mb-3">
                    {project.title}
                  </h3>

                  <p className="text-body-small mb-6 whitespace-pre-line">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[0.6875rem] font-medium uppercase tracking-wider text-vercel-gray-400 px-2 py-0.5 rounded bg-vercel-gray-50 dark:bg-white/[0.06]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );

            return (
              <FadeIn key={project.title} delay={100 + idx * 80}>
                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-vercel-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    style={{ outlineColor: project.categoryColor }}
                    aria-label={`${project.title} — open live demo`}
                  >
                    {cardBody}
                  </a>
                ) : (
                  cardBody
                )}
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
