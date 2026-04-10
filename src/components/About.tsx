"use client";

import FadeIn from "./FadeIn";

const skillCategories = [
  {
    label: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "SQL"],
  },
  {
    label: "Cloud & Infra",
    skills: ["AWS Lambda", "SQS", "S3", "DynamoDB", "API Gateway", "Docker"],
  },
  {
    label: "AI / ML",
    skills: ["PyTorch", "LLMs", "RAG", "Claude Code", "MCP"],
  },
  {
    label: "Data",
    skills: ["Neo4j", "Databricks", "Unity Catalog"],
  },
  {
    label: "Tools",
    skills: ["Git", "Ansible", "tmux", "fish"],
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <FadeIn>
          <p className="text-mono-label text-vercel-gray-500 mb-4 tracking-[0.12em]">
            About
          </p>
        </FadeIn>

        <FadeIn delay={100}>
          <h2 className="text-section-heading text-[2rem] md:text-[2.5rem] mb-8">
            Background
          </h2>
        </FadeIn>

        <FadeIn delay={150}>
          <p className="text-body-large max-w-[720px] mb-16">
            Software Engineer at State Farm specializing in cloud infrastructure and AI engineering.
            Currently pursuing an M.S. in Computer Science at UIUC with coursework in deep learning,
            AI agents, and statistical learning. I build systems that bridge enterprise infrastructure
            with modern AI capabilities.
          </p>
        </FadeIn>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((category, idx) => (
            <FadeIn key={category.label} delay={100 + idx * 80}>
              <div className="card-shadow rounded-vercel p-6 bg-white hover:card-shadow-hover transition-shadow duration-300">
                <p className="text-mono-label text-vercel-gray-400 mb-4 tracking-[0.12em]">
                  {category.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-2.5 py-1 rounded-full bg-vercel-gray-50 text-vercel-gray-600 text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
