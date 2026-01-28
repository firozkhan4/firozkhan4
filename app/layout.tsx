import type { Metadata } from "next";
import { Newsreader } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import Footer from "./components/Footer";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"]
})


// Define your production URL here
const siteUrl = process.env.NODE_ENV === 'production'
  ? 'https://firozkhan4.vercel.app'
  : 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl), // This solves the warning
  title: {
    default: "Firoz Khan | Software Engineer",
    template: "%s | Firoz Khan"
  },
  description: "Backend Developer specializing in scalable architectures, database internals, and distributed systems.",
  keywords: [
    "Firoz Khan",
    "Backend Developer",
    "Software Engineer Kota",
    "Database Internals",
    "System Design Portfolio",
    "Next.js Research Blog"
  ],
  authors: [{ name: "Firoz Khan" }],
  creator: "Firoz Khan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Firoz Khan",
    title: "Firoz Khan | Technical Research & Engineering",
    description: "Documenting thoughts on database internals, career growth, and scalable systems.",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Firoz Khan Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Firoz Khan",
    description: "Software Engineer & Backend Enthusiast",
    creator: "@firozkhan_4", // Update this with your actual handle
    images: ["/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  }
};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${newsreader.variable} ${newsreader.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
