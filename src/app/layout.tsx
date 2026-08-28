import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://amin-monajati.vercel.app"),
  title: {
    default: "Amin Monajati | Backend Developer",
    template: "%s | Amin Monajati",
  },
  description:
    "Portfolio of Amin Monajati — a backend-focused developer building APIs, automation tools, and modern web experiences with Python, Django, FastAPI, and Next.js.",
  keywords: [
    "Amin Monajati",
    "Backend Developer",
    "Python Developer",
    "Django",
    "FastAPI",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Amin Monajati" }],
  creator: "Amin Monajati",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Amin Monajati | Backend Developer",
    description:
      "Backend-focused developer building APIs, automation tools, and modern web experiences.",
    siteName: "Amin Monajati",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Amin Monajati — Backend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amin Monajati | Backend Developer",
    description:
      "Backend-focused developer building APIs, automation tools, and modern web experiences.",
    images: ["/opengraph-image"],
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
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
