'use client'

import React from 'react';

const experiences = [
  {
    period: "Apr 2025 – Aug 2025",
    role: "Backend Development Intern",
    company: "Tresveze & Co.",
    location: "Remote",
    description: "Focused on architecting scalable server-side logic and optimizing API performance. Handled database migrations and microservice communication.",
    stack: ["Node.js", "Express", "PostgreSQL", "Redis"]
  },
  {
    period: "Jan 2024 – Mar 2024",
    role: "Frontend Development Intern",
    company: "Grass Solution Pvt Ltd",
    location: "Remote",
    description: "Developed responsive user interfaces and integrated complex state management systems. Collaborated with design teams to translate wireframes into high-fidelity code.",
    stack: ["React.js", "TypeScript", "Tailwind CSS", "Redux"]
  }
];

export default function Experience() {
  return (
    <div className="min-h-screen font-newsreader bg-paper text-ink dark:bg-[#121212] transition-colors duration-300 dark:text-white">
      <main className="container mx-auto max-w-7xl px-6 py-16 md:py-24">

        {/* Header: Academic Style */}
        <header className="mb-20 space-y-6">
          <h1 className="text-5xl font-medium italic tracking-tighter dark:text-white">
            Professional Record
          </h1>
          <div className="max-w-2xl text-lg opacity-70 italic leading-relaxed">
            <p>
              An overview of my engineering contributions and technical research
              conducted during various internships and academic pursuits.
            </p>
          </div>
        </header>

        {/* Timeline Section */}
        <div className="space-y-16">
          {experiences.map((exp, idx) => (
            <section key={idx} className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 group">
              {/* Date Column */}
              <div className="font-mono text-[12px] uppercase tracking-widest opacity-40 pt-1.5">
                {exp.period}
              </div>

              {/* Content Column */}
              <div className="space-y-4">
                <div className="space-y-1">
                  <h2 className="text-2xl font-medium dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {exp.role}
                  </h2>
                  <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 font-newsreader italic">
                    <span>{exp.company}</span>
                    <span className="text-[10px] not-italic opacity-30">•</span>
                    <span>{exp.location}</span>
                  </div>
                </div>

                <p className="text-[1.05rem] leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-2xl">
                  {exp.description}
                </p>

                {/* Tech Tags: Monospace and Bordered */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.stack.map(tech => (
                    <span key={tech} className="px-2 py-0.5 border border-zinc-200 dark:border-zinc-800 rounded text-[10px] font-mono opacity-60 uppercase tracking-tighter">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Academic Qualification Footer */}
        <section className="mt-32 pt-12 border-t border-zinc-200 dark:border-zinc-800">
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] mb-8 opacity-40">Academic Foundation</h3>
          <div className="flex justify-between items-baseline">
            <div>
              <h4 className="text-xl font-medium">Bachelor of Computer Application</h4>
              <p className="italic opacity-60">Career Point University – Kota</p>
            </div>
            <div className="text-right">
              <span className="text-3xl font-light">9.2</span>
              <span className="text-sm opacity-40 ml-1">/ 10.0 CGPA</span>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
