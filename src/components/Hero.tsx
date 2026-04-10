"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Subtle atmospheric gradient */}
      <div
        className="absolute inset-0 opacity-[0.03]"
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
                className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden"
                style={{
                  boxShadow:
                    "0px 0px 0px 1px rgba(0,0,0,0.08), 0px 4px 8px rgba(0,0,0,0.06), 0px 16px 24px -8px rgba(0,0,0,0.08)",
                }}
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
              <p className="text-mono-label text-vercel-gray-500 mb-6 tracking-[0.12em]">
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
                  className="inline-flex items-center px-5 py-2.5 bg-vercel-black text-white text-sm font-medium rounded-[6px] transition-colors hover:bg-black"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center px-5 py-2.5 bg-white text-vercel-black text-sm font-medium rounded-[6px] shadow-vercel-border transition-shadow hover:shadow-vercel-card"
                >
                  Get in Touch
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
