'use client'

import React from 'react';

const blogs = [
  { date: "Jan 16, 2026", title: "MySQL Replication Internals", link: "#" },
  { date: "Dec 29, 2025", title: "Bloom Filters", link: "#" },
  { date: "Dec 23, 2025", title: "Clock Synchronization is a Nightmare", link: "#" },
  { date: "Dec 13, 2025", title: "When You Increase Kafka Partitions", link: "#" },
  { date: "Dec 07, 2025", title: "Product Quantization", link: "#" },
  { date: "Nov 26, 2025", title: "The Q, K, V Matrices", link: "#" },
];

export default function Blogs() {
  return (
    <div className="min-h-screen font-newsreader bg-paper text-ink dark:bg-[#121212] transition-colors duration-300">
      <main className="container mx-auto max-w-7xl px-6 py-16 md:py-24">

        {/* Header Section: Matches Hero Aesthetic */}
        <header className="mb-16 space-y-8">
          <div className="flex items-baseline gap-4">
            <h1 className="text-5xl font-medium italic tracking-tighter dark:text-white">
              Blogs <span className="text-2xl font-normal not-italic opacity-30 ml-2">(158)</span>
            </h1>
            <button className="hidden sm:flex items-center gap-2 px-3 py-1 text-[11px] font-mono uppercase tracking-widest border border-zinc-200 dark:border-zinc-800 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all dark:text-zinc-400">
              Subscribe RSS <span className="opacity-50">ツ</span>
            </button>
          </div>

          <div className="max-w-2xl space-y-6 text-[1.1rem] leading-relaxed text-zinc-600 dark:text-zinc-400">
            <p>
              Every week, I document and articulate my thoughts and learnings on
              <span className="text-ink dark:text-white font-medium"> Career Growth</span>,
              <span className="text-ink dark:text-white font-medium"> Database Internals</span>, and
              Engineering Explorations. Here are all blogs I wrote to date.
            </p>
            <p className="text-sm italic">
              If you find my writings helpful, consider subscribing to my
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-4 ml-1">RSS feed</a>.
            </p>
          </div>
        </header>

        {/* The Archive List: High-Density UI */}
        <section className="border-t border-zinc-200 dark:border-zinc-800">
          <ul className="divide-y divide-zinc-100 dark:divide-zinc-900">
            {blogs.map((blog, idx) => (
              <li key={idx} className="group py-4">
                <a href={blog.link} className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6">
                  {/* Monospace Metadata */}
                  <span className="font-mono text-[13px] opacity-40 tabular-nums shrink-0 w-28 dark:text-zinc-500">
                    {blog.date}
                  </span>

                  {/* Separator seen in reference images */}
                  <span className="hidden md:block opacity-20 font-mono text-sm dark:text-white">:</span>

                  {/* Title with specialized hover state */}
                  <span className="text-[18px] font-medium tracking-tight text-blue-600 dark:text-blue-400 group-hover:underline decoration-[0.5px] underline-offset-4">
                    {blog.title}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

      </main>
    </div>
  );
}
