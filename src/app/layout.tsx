import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mramin0.github.io"),

  title: "Amin Monajati | Python Backend Developer",
  description:
    "Amin Monajati is a Python Backend Developer building REST APIs, automation tools, and scalable software solutions.",

  keywords: [
    "Python Developer",
    "Backend Developer",
    "Django Developer",
    "FastAPI Developer",
    "REST API",
    "Software Engineer",
  ],

  authors: [
    {
      name: "Amin Monajati",
    },
  ],

  openGraph: {
    title: "Amin Monajati | Python Backend Developer",
    description:
      "Building backend systems, APIs, and automation tools with Python.",
    url: "https://mramin0.github.io",
    siteName: "Amin Monajati Portfolio",
    locale: "en_US",
    type: "website",
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
