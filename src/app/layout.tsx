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
        <link rel="icon" href="/favicon-light/favicon.ico" sizes="any" media="(prefers-color-scheme: light)" />
        <link rel="icon" href="/favicon-light/favicon-32x32.png" type="image/png" sizes="32x32" media="(prefers-color-scheme: light)" />
        <link rel="icon" href="/favicon-light/favicon-16x16.png" type="image/png" sizes="16x16" media="(prefers-color-scheme: light)" />
        <link rel="apple-touch-icon" href="/favicon-light/apple-touch-icon.png" media="(prefers-color-scheme: light)" />
        <link rel="icon" href="/favicon-dark/favicon.ico" sizes="any" media="(prefers-color-scheme: dark)" />
        <link rel="icon" href="/favicon-dark/favicon-32x32.png" type="image/png" sizes="32x32" media="(prefers-color-scheme: dark)" />
        <link rel="icon" href="/favicon-dark/favicon-16x16.png" type="image/png" sizes="16x16" media="(prefers-color-scheme: dark)" />
        <link rel="apple-touch-icon" href="/favicon-dark/apple-touch-icon.png" media="(prefers-color-scheme: dark)" />
        <link rel="manifest" href="/favicon-light/site.webmanifest" />
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
