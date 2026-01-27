'use client'

import Link from 'next/link';
import React from 'react';

const certifications = [
  {
    title: "SQL Mastery Certificate",
    issuer: "Udemy",
    date: "2025",
    id: "UC-SQL-101",

    link: "#",
    skills: ["Database Design", "Query Optimization", "ACID Compliance"]
  },
  {
    title: "AWS Services Fundamentals",
    issuer: "Amazon Web Services",
    date: "2025",
    id: "AWS-REF-992",

    link: "#",
    skills: ["EC2", "S3", "Lambda", "IAM"]
  },
  {
    title: "Postman API Fundamentals",
    issuer: "Postman Student Expert",
    date: "2024",
    id: "POST-7721",

    link: "#",
    skills: ["API Testing", "Documentation", "Automation"]
  },
  {
    title: "Red Hat Enterprise Linux Fundamentals",
    issuer: "Red Hat",
    date: "2024",
    id: "RH-8821",

    link: "#",
    skills: ["Shell Scripting", "User Management", "Networking"]
  },
  {
    title: "Advanced React.js Development",
    issuer: "Certification Authority",
    date: "2024",
    id: "REACT-ADV-01",

    link: "#",
    skills: ["Hooks", "Performance", "State Management"]
  }
];


export default function Certifications() {
  return (
    <div className="min-h-screen dark:text-white font-newsreader bg-paper text-ink dark:bg-[#121212] transition-colors duration-300">
      <main className="container mx-auto max-w-7xl px-6 py-16 md:py-24">

        <header className="mb-20 space-y-6">
          <h1 className="text-5xl font-medium italic tracking-tighter dark:text-white">
            Certifications
          </h1>
          <div className="max-w-2xl text-lg opacity-70 italic leading-relaxed">
            <p>
              A verified record of technical proficiencies. Each credential is
              linked to its respective issuing authority for verification purposes.
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, idx) => (
            <article
              key={idx}
              className="group flex flex-col justify-between p-8 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all bg-white/50 dark:bg-zinc-900/30"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="font-mono text-[10px] uppercase tracking-widest opacity-40">
                    {cert.issuer}
                  </span>
                  <span className="font-mono text-[10px] opacity-30">{cert.date}</span>
                </div>

                <h2 className="text-2xl font-medium tracking-tight mb-2 dark:text-zinc-100 italic">
                  {cert.title}
                </h2>

                <div className="font-mono text-[11px] opacity-30 mb-6 tracking-tighter">
                  VERIFICATION_ID: {cert.id}
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {cert.skills.map(skill => (
                    <span
                      key={skill}
                      className="text-[10px] font-mono opacity-60 bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded uppercase"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* The "Access" Button */}
              <Link
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto w-fit flex items-center gap-2 px-4 py-2 border border-zinc-200 dark:border-zinc-800 text-[11px] font-mono uppercase tracking-widest hover:bg-ink hover:text-white dark:hover:bg-white dark:hover:text-black transition-all group/btn"
              >
                View Credential
                <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
              </Link>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
