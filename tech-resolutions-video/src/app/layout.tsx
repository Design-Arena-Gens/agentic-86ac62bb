import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tech Resolutions Video",
  description:
    "Watch and share a 36-second tech resolutions manifesto designed to energize your 2025 engineering roadmap.",
  metadataBase: new URL("https://agentic-86ac62bb.vercel.app"),
  openGraph: {
    title: "Tech Resolutions Video",
    description:
      "A bold, punchy kickoff video to keep your engineering team aligned on 2025 priorities.",
    type: "website",
    url: "https://agentic-86ac62bb.vercel.app",
    images: [
      {
        url: "/tech-resolutions-poster.jpg",
        width: 1920,
        height: 1080,
        alt: "Tech resolutions video still",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Resolutions Video",
    description:
      "Kick off 2025 with a manifesto covering automation, observability, mentorship, focus, and community.",
    images: ["/tech-resolutions-poster.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
