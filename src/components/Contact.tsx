"use client";

import FadeIn from "./FadeIn";

export default function Contact() {
  return (
    <footer id="contact" className="bg-vercel-black text-white py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <FadeIn>
          <p className="text-mono-label text-vercel-gray-400 mb-4 tracking-[0.12em]">
            Contact
          </p>
        </FadeIn>

        <FadeIn delay={100}>
          <h2
            className="text-[2rem] md:text-[2.5rem] font-semibold text-white mb-6"
            style={{ letterSpacing: "-0.06em", lineHeight: 1.2 }}
          >
            Let&apos;s Connect
          </h2>
        </FadeIn>

        <FadeIn delay={150}>
          <p className="text-lg text-vercel-gray-400 max-w-[540px] mb-12" style={{ lineHeight: 1.7 }}>
            Open to opportunities in AI engineering, cloud infrastructure, and developer tooling.
            Currently based in Bloomington-Normal, IL.
          </p>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="flex flex-col sm:flex-row gap-4 mb-20">
            <a
              href="mailto:desmondfung123@gmail.com"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white text-vercel-black text-sm font-medium rounded-[6px] transition-colors hover:bg-vercel-gray-100"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              desmondfung123@gmail.com
            </a>
            <a
              href="https://github.com/ddhangdd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 text-sm font-medium rounded-[6px] transition-colors text-vercel-gray-400 hover:text-white"
              style={{ boxShadow: "0px 0px 0px 1px rgba(255,255,255,0.12)" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          </div>
        </FadeIn>

        {/* Bottom bar */}
        <div
          className="pt-8"
          style={{ boxShadow: "0px -1px 0px 0px rgba(255,255,255,0.08)" }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-vercel-gray-500">
              Desmond Fung
            </p>
            <p className="text-sm text-vercel-gray-500">
              Bloomington-Normal, IL
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
