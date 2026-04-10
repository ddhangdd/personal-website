import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Desmond Fung — AI Engineer & Software Engineer",
  description:
    "Portfolio of Desmond Fung. AI Engineer and Software Engineer building intelligent systems at the intersection of cloud infrastructure, AI engineering, and developer tooling.",
  metadataBase: new URL("https://desmondfung.dev"),
  openGraph: {
    title: "Desmond Fung — AI Engineer & Software Engineer",
    description:
      "Building intelligent systems at the intersection of cloud infrastructure, AI engineering, and developer tooling.",
    type: "website",
    locale: "en_US",
    siteName: "Desmond Fung",
  },
  twitter: {
    card: "summary_large_image",
    title: "Desmond Fung — AI Engineer & Software Engineer",
    description:
      "Building intelligent systems at the intersection of cloud infrastructure, AI engineering, and developer tooling.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var d=document.documentElement;var t=localStorage.getItem("theme");if(t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme:dark)").matches)){d.classList.add("dark")}}catch(e){}})()`,
          }}
        />
      </head>
      <body className="min-h-screen bg-white dark:bg-[#0a0a0a] text-vercel-black dark:text-[#ededed] font-sans transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
