"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Subtle atmospheric gradient */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08]"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, #0a72ef 0%, transparent 50%), radial-gradient(ellipse 60% 40% at 30% 60%, #de1d8d 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 70% 30%, #ff5b4f 0%, transparent 50%)",
        }}
      />

      <div className="relative max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Photo */}
          <FadeIn>
            <div className="shrink-0">
              <div
                className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-vercel-card dark:shadow-dark-card"
              >
                <Image
                  src="/profile.jpg"
                  alt="Desmond Fung"
                  width={256}
                  height={256}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </FadeIn>

          {/* Text */}
          <div className="text-center md:text-left">
            <FadeIn delay={100}>
              <p className="text-mono-label text-vercel-gray-500 dark:text-vercel-gray-400 mb-6 tracking-[0.12em]">
                Data Engineer & MCS Student
              </p>
            </FadeIn>

            <FadeIn delay={150}>
              <h1 className="text-display text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] mb-6">
                Desmond Fung
              </h1>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="text-body-large max-w-[640px] mb-10">
                Building production data infrastructure at State Farm while pursuing a Master of Computer Science at UIUC.
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="flex items-center justify-center md:justify-start gap-4 flex-wrap">
                <a
                  href="#projects"
                  className="inline-flex items-center px-5 py-2.5 bg-vercel-black dark:bg-white text-white dark:text-vercel-black text-sm font-medium rounded-[6px] transition-colors hover:bg-black dark:hover:bg-vercel-gray-100"
                >
                  View Projects
                </a>
                <a
                  href="https://linkedin.com/in/desmond-fung"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full text-vercel-gray-600 dark:text-vercel-gray-400 shadow-vercel-border dark:shadow-dark-border transition-all hover:text-vercel-black dark:hover:text-white hover:shadow-vercel-card dark:hover:shadow-dark-card"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://github.com/ddhangdd"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full text-vercel-gray-600 dark:text-vercel-gray-400 shadow-vercel-border dark:shadow-dark-border transition-all hover:text-vercel-black dark:hover:text-white hover:shadow-vercel-card dark:hover:shadow-dark-card"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
