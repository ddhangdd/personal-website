"use client";

import FadeIn from "./FadeIn";

interface TimelineEntry {
  type: "work" | "education";
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
}

const timeline: TimelineEntry[] = [
  {
    type: "work",
    title: "Data Engineer",
    organization: "State Farm",
    location: "Bloomington, IL",
    period: "June 2022 — Present",
    description:
      "Production serverless infrastructure and automated data pipelines at enterprise scale.",
    highlights: [
      "Built a serverless document storage API (Lambda, API Gateway, S3, DynamoDB) processing ~1.56M documents per workday (~36M/month) across 12 applications, replacing a legacy on-premises system with zero-downtime cutover",
      "Architected an automated data pipeline processing 38K–124K records daily with concurrent CloudWatch Logs queries, achieving ~4x throughput improvement through intelligent time-slicing",
      "Engineered idempotent document processing to handle duplicate S3 events, eliminating ~150 daily false alerts and ~20 hours/week of manual investigation",
      "Developed a self-healing error recovery pipeline auto-recovering ~60K documents daily, reducing manual reprocessing from ~10 hours/week to near-zero",
      "Built multi-region DR infrastructure (us-east-1/us-west-2) for a zero-downtime platform serving 18.5B documents (~6PB) using modular Terraform with DynamoDB global tables",
      "Co-led migration of 60+ production servers in 1 month (6x acceleration), owning end-to-end execution across multiple dependent teams",
      "Mentored 3 engineers on infrastructure operations and co-mentored 2 summer interns on AWS, Terraform, and deployment",
    ],
  },
  {
    type: "education",
    title: "Master of Computer Science in Data Science",
    organization: "University of Illinois Urbana-Champaign",
    location: "Urbana-Champaign, IL",
    period: "Expected Aug 2026",
    description: "GPA: 4.00",
    highlights: [
      "Deep Learning for Healthcare",
      "Cloud Computing Applications",
      "Applied Machine Learning",
      "Practical Statistical Learning",
      "Methods of Applied Statistics",
      "Database Systems",
      "Scientific Visualization",
      "Theory and Practice of Data Cleaning",
    ],
  },
  {
    type: "education",
    title: "B.S. in Computer Science and B.S. in Statistics",
    organization: "University of Wisconsin-Madison",
    location: "Madison, WI",
    period: "",
    description: "",
    highlights: [
      "Elementary Matrix and Linear Algebra",
      "Multivariable Calculus",
      "Applied Regression Analysis",
      "Introduction to Probability and Mathematical Statistics",
      "Deep Learning",
      "Machine Learning",
      "Introduction to Artificial Intelligence",
      "Data Visualization",
      "Discrete Mathematics",
      "Introduction to Operating Systems",
      "Introduction to Algorithm",
      "Database Management Systems",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <FadeIn>
          <p className="text-mono-label text-vercel-gray-500 dark:text-vercel-gray-400 mb-4 tracking-[0.12em]">
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
          <div className="absolute left-[11px] md:left-[15px] top-2 bottom-2 w-px bg-vercel-gray-100 dark:bg-white/10" />

          <div className="space-y-12">
            {timeline.map((entry, idx) => (
              <FadeIn key={entry.organization} delay={100 + idx * 120}>
                <div className="relative pl-10 md:pl-14">
                  {/* Timeline dot */}
                  <div
                    className="absolute left-0 md:left-1 top-1.5 w-[22px] h-[22px] md:w-[28px] md:h-[28px] rounded-full bg-white dark:bg-[#111111] flex items-center justify-center shadow-vercel-border dark:shadow-dark-border"
                  >
                    <div
                      className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full ${
                        entry.type === "work" ? "bg-accent-blue" : "bg-accent-pink"
                      }`}
                    />
                  </div>

                  <div className="card-shadow rounded-vercel p-6 md:p-8 bg-white dark:bg-[#111111] hover:card-shadow-hover transition-shadow duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-card-title mb-1">{entry.title}</h3>
                        <p className="text-base font-medium text-vercel-gray-600 dark:text-vercel-gray-400">
                          {entry.organization}
                        </p>
                        <p className="text-sm text-vercel-gray-400">
                          {entry.location}
                        </p>
                      </div>
                      {entry.period && (
                        <span className="text-mono-label text-vercel-gray-400 tracking-[0.1em] whitespace-nowrap">
                          {entry.period}
                        </span>
                      )}
                    </div>

                    {entry.description && (
                      <p className="text-body-small mb-5">{entry.description}</p>
                    )}

                    {entry.highlights.length > 0 && (
                      <ul className="space-y-2">
                        {entry.highlights.map((h) => (
                          <li
                            key={h}
                            className="text-sm text-vercel-gray-500 dark:text-vercel-gray-400 flex items-start gap-2.5"
                          >
                            <span className="w-1 h-1 rounded-full bg-vercel-gray-400 dark:bg-vercel-gray-500 mt-2 shrink-0" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    )}
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
