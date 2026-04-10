"use client";

import FadeIn from "./FadeIn";

interface TimelineEntry {
  type: "work" | "education";
  title: string;
  organization: string;
  period: string;
  description: string;
  highlights: string[];
}

const timeline: TimelineEntry[] = [
  {
    type: "work",
    title: "Software Engineer",
    organization: "State Farm",
    period: "Present",
    description:
      "Cloud infrastructure and developer tooling for enterprise systems. Pursuing lead software engineer role.",
    highlights: [
      "Cloud infrastructure with AWS Lambda, SQS, S3, DynamoDB, API Gateway",
      "Developer tooling and migration projects using Ansible playbooks",
      "Led CRMT server migration establishing automated deployment patterns",
    ],
  },
  {
    type: "education",
    title: "M.S. Computer Science",
    organization: "University of Illinois Urbana-Champaign",
    period: "Graduating August 2026",
    description:
      "Advanced coursework in AI, deep learning, and statistical methods.",
    highlights: [
      "Deep Learning for Healthcare (CS 598)",
      "AI Agents (CS 498)",
      "Statistics & Statistical Learning (CS 598 PSL)",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <FadeIn>
          <p className="text-mono-label text-vercel-gray-500 mb-4 tracking-[0.12em]">
            Experience
          </p>
        </FadeIn>

        <FadeIn delay={100}>
          <h2 className="text-section-heading text-[2rem] md:text-[2.5rem] mb-14">
            Career & Education
          </h2>
        </FadeIn>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[11px] md:left-[15px] top-2 bottom-2 w-px bg-vercel-gray-100" />

          <div className="space-y-12">
            {timeline.map((entry, idx) => (
              <FadeIn key={entry.organization} delay={100 + idx * 120}>
                <div className="relative pl-10 md:pl-14">
                  {/* Timeline dot */}
                  <div
                    className="absolute left-0 md:left-1 top-1.5 w-[22px] h-[22px] md:w-[28px] md:h-[28px] rounded-full bg-white flex items-center justify-center"
                    style={{
                      boxShadow: "0px 0px 0px 1px rgba(0,0,0,0.08)",
                    }}
                  >
                    <div
                      className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full ${
                        entry.type === "work" ? "bg-accent-blue" : "bg-accent-pink"
                      }`}
                    />
                  </div>

                  <div className="card-shadow rounded-vercel p-6 md:p-8 bg-white hover:card-shadow-hover transition-shadow duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-card-title mb-1">{entry.title}</h3>
                        <p className="text-base font-medium text-vercel-gray-600">
                          {entry.organization}
                        </p>
                      </div>
                      <span className="text-mono-label text-vercel-gray-400 tracking-[0.1em] whitespace-nowrap">
                        {entry.period}
                      </span>
                    </div>

                    <p className="text-body-small mb-5">{entry.description}</p>

                    <ul className="space-y-2">
                      {entry.highlights.map((h) => (
                        <li
                          key={h}
                          className="text-sm text-vercel-gray-500 flex items-start gap-2.5"
                        >
                          <span className="w-1 h-1 rounded-full bg-vercel-gray-400 mt-2 shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
