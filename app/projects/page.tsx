'use client'

import Link from "next/link";


const projects = [
  {
    title: "School Management System",
    category: "Full-Stack / Architecture",
    period: "2025",
    description: "A comprehensive administrative platform designed to streamline academic operations. Built with a focus on data integrity and high-performance backend logic.",
    tech: ["SQL", "Node.js", "Express", "React.js"],
    link: "#",
    research_note: "Optimized database queries for 40% faster student record retrieval."
  },
  {
    title: "QnA-Hub",
    category: "Platform / Social",
    period: "2024",
    description: "A Stack Overflow clone facilitating community-driven knowledge exchange. Features include real-time voting, markdown support, and complex relational data mapping.",
    tech: ["React.js", "Spring Boot", "Postman API", "AWS", "Tailwind CSS"],
    link: "#",
    research_note: "Implemented advanced caching strategies for high-traffic question threads."
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen font-newsreader bg-paper text-ink dark:bg-[#121212] transition-colors duration-300 dark:text-white">
      <main className="container mx-auto max-w-5xl px-6 py-16 md:py-24">

        {/* Page Header */}
        <header className="mb-20 space-y-6">
          <h1 className="text-5xl font-medium italic tracking-tighter dark:text-white">
            Project Archives
          </h1>
          <div className="max-w-2xl text-lg opacity-70 italic leading-relaxed">
            <p>
              A selection of engineering artifacts and functional systems developed between 2024 and 2026.
              Each project serves as a case study in scalable architecture and user-centric design.
            </p>
          </div>
        </header>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {projects.map((project, idx) => (
            <article key={idx} className="group space-y-6 border-t border-zinc-200 dark:border-zinc-800 pt-8">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-3xl font-medium tracking-tight group-hover:text-blue-600 dark:text-zinc-100 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h2>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-40">
                    {project.category}
                  </span>
                </div>
                <span className="font-mono text-sm opacity-30">{project.period}</span>
              </div>

              <p className="text-[1.05rem] leading-relaxed text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>

              {/* Research Note - The "Academic" Touch */}
              <div className="pl-4 border-l-2 border-blue-500/20 italic text-sm text-zinc-500">
                <span className="font-mono text-[10px] not-italic uppercase tracking-widest block mb-1 opacity-50">Engineering Note:</span>
                "{project.research_note}"
              </div>

              {/* Tech Manifest */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tech.map(t => (
                  <span key={t} className="px-2 py-0.5 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[10px] font-mono opacity-70 uppercase">
                    {t}
                  </span>
                ))}
              </div>

              <Link href={project.link} className="inline-block pt-4 text-sm font-mono uppercase tracking-widest hover:underline underline-offset-8 decoration-1">
                View Repository &rarr;
              </Link>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
