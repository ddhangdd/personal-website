"use client";

import FadeIn from "./FadeIn";

const skillCategories = [
  {
    label: "Languages",
    skills: ["Python", "Java", "SQL", "JavaScript", "C", "R", "HTML/CSS"],
  },
  {
    label: "AI / ML",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "NumPy", "Pandas", "Matplotlib", "NetworkX"],
  },
  {
    label: "Cloud & DevOps",
    skills: ["AWS", "Terraform", "GitLab CI/CD", "Docker", "Ansible", "boto3"],
  },
  {
    label: "AWS Services",
    skills: ["EC2", "Lambda", "S3", "DynamoDB", "SQS", "SNS", "API Gateway", "Step Functions", "CloudWatch", "IAM"],
  },
  {
    label: "Databases & Tools",
    skills: ["MySQL", "DuckDB", "Git", "Splunk", "Dynatrace", "Tableau", "Linux/Unix"],
  },
  {
    label: "Certifications",
    skills: ["AWS Cloud Practitioner", "Terraform Associate"],
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <FadeIn>
          <p className="text-mono-label text-vercel-gray-500 dark:text-vercel-gray-400 mb-4 tracking-[0.12em]">
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
            Data Engineer at State Farm building production serverless systems processing millions
            of documents daily. Currently pursuing a Master of Computer Science in Data Science at
            UIUC (4.00 GPA) with coursework spanning deep learning, cloud computing, and statistical
            learning. B.S. in Computer Science and B.S. in Statistics from UW–Madison.
          </p>
        </FadeIn>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((category, idx) => (
            <FadeIn key={category.label} delay={100 + idx * 80}>
              <div className="card-shadow rounded-vercel p-6 bg-white dark:bg-[#111111] hover:card-shadow-hover transition-shadow duration-300">
                <p className="text-mono-label text-vercel-gray-400 mb-4 tracking-[0.12em]">
                  {category.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-2.5 py-1 rounded-full bg-vercel-gray-50 dark:bg-white/[0.06] text-vercel-gray-600 dark:text-vercel-gray-400 text-xs font-medium"
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
