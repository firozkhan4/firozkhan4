'use client'

import Image from 'next/image';
import { socialLink } from '../meta';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-newsreader bg-paper text-ink dark:bg-[#121212] dark:text-zinc-100 selection:bg-zinc-200 dark:selection:bg-zinc-800">

      <main className="grow container mx-auto px-6 py-12 md:py-20 max-w-7xl">
        <section className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-12 items-start">

          {/* Left Column: Content */}
          <div className="space-y-8">
            <header className="space-y-4">
              <h1 className="text-5xl font-medium tracking-tighter italic">
                Hey, I am Firoz
              </h1>
              <h2 className="text-2xl font-newsreader italic text-red-600 dark:text-red-400 leading-tight">
                engineering, databases, and systems. always building.
              </h2>
            </header>

            <div className="max-w-2xl space-y-6 text-[1.1rem] leading-relaxed text-zinc-700 dark:text-zinc-300">
              <p>
                I am a software engineer passionate about <span className="text-ink dark:text-white font-medium">Backend Architectures</span> and System Design.
                Recently, I served as a Backend Development Intern at <span className="italic">Tresveze & Co.</span>,
                where I focused on building scalable services.
              </p>

              <p>
                My technical foundation includes a 9.2 CGPA in my BCA from Career Point University.
                I spend my time exploring <span className="italic">distributed systems</span> and high-performance
                API development, backed by certifications in AWS, Linux and SQL Mastery.
              </p>

              <p className="text-zinc-500 dark:text-zinc-400">
                Currently exploring the intersection of API performance and developer experience.
              </p>
            </div>

            {/* Action Buttons / Socials */}
            <div className="flex flex-wrap gap-3 pt-4 font-mono">
              <SocialLink href={"FirozKhan_Java.pdf"} label="Resume" count="View" />
              <SocialLink href={socialLink.linkedin} label="LinkedIn" count="Connect" />
              <SocialLink href={socialLink.github} label="GitHub" count="Projects" />
              <SocialLink href={socialLink.twitter} label="Twitter" count="Builds" />
            </div>
          </div>

          {/* Right Column: Profile Image */}
          <div className="relative group flex items-center h-full">
            <div className="overflow-hidden rounded-2xl  border border-zinc-200 dark:border-zinc-800 object-center aspect-auto">
              <Image
                src="/hero.jpg"
                alt="Firoz Khan"
                width={800}
                height={800}
              />
            </div>
          </div>
        </section>

        {/* Recent Activity Teaser (Academic Index Style) */}
        <section className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-zinc-100  dark:border-white pt-12">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] mb-6 opacity-50">Recent blog posts</h3>
            <ul className="space-y-3">
              <li className="flex gap-4 text-sm items-baseline">
                <span className="font-mono opacity-30 text-[10px] shrink-0">2026.01.16</span>
                <a href="#" className="hover:text-blue-500 underline decoration-zinc-200 underline-offset-4">MySQL Replication Internals</a>
              </li>
              <li className="flex gap-4 text-sm items-baseline">
                <span className="font-mono opacity-30 text-[10px] shrink-0">2025.12.29</span>
                <a href="#" className="hover:text-blue-500 underline decoration-zinc-200 underline-offset-4">Bloom Filters</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] mb-6 opacity-50">Key Projects</h3>
            <ul className="space-y-3">
              <li className="flex gap-4 text-sm items-baseline">
                <span className="font-mono opacity-30 text-[10px] shrink-0">SYSTEM</span>
                <a href="#" className="hover:text-blue-500 underline decoration-zinc-200 underline-offset-4">School Management System</a>
              </li>
              <li className="flex gap-4 text-sm items-baseline">
                <span className="font-mono opacity-30 text-[10px] shrink-0">SOCIAL</span>
                <a href="#" className="hover:text-blue-500 underline decoration-zinc-200 underline-offset-4">QnA-Hub (Stack Overflow Clone)</a>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

function SocialLink({ href, label, count }: { href: string; label: string; count: string }) {
  return (
    <a
      href={href}
      target='_blank'
      className="flex items-center gap-2 px-3 py-2 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg text-sm hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
    >
      <span className="font-medium">{label}</span>
      <span className="opacity-40 text-[10px]">({count})</span>
    </a>
  );
}
