'use client'

import React from 'react';

// Example data structure from your SQLite 'blogs' table
const blogPost = {
  title: "MySQL Replication Internals: The Binlog & Relay Log",
  date: "2026.01.16",
  category: "Databases",
  readingTime: "12 min read",
  content: `## Introduction
  In distributed systems, replication is a fundamental concept...`, // This would be your Markdown string
};

export default function BlogPost() {
  return (
    <article className="min-h-screen font-newsreader dark:text-white bg-paper text-ink dark:bg-[#121212] transition-colors duration-300">
      <main className="container mx-auto max-w-6xl px-6 py-16 md:py-24">

        {/* Breadcrumb / Back Navigation */}
        <nav className="mb-12">
          <a href="/blogs" className="font-mono text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity flex items-center gap-2">
            ← Back to Archive
          </a>
        </nav>

        {/* Post Metadata Header */}
        <header className="mb-16 space-y-6 border-b border-zinc-100 dark:border-zinc-900 pb-12">
          <div className="space-y-2">
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest opacity-50">
              <span>{blogPost.date}</span>
              <span>/</span>
              <span>{blogPost.category}</span>
              <span>/</span>
              <span>{blogPost.readingTime}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-medium italic tracking-tight leading-[1.1] dark:text-white">
              {blogPost.title}
            </h1>
          </div>
        </header>

        {/* Article Body */}
        <section className="prose prose-zinc dark:prose-invert prose-lg max-w-none 
          prose-headings:font-medium prose-headings:italic prose-headings:tracking-tight
          prose-p:leading-relaxed prose-p:text-zinc-700 dark:prose-p:text-zinc-300
          prose-code:font-mono prose-code:bg-zinc-100 dark:prose-code:bg-zinc-900 
          prose-code:px-1 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
          prose-strong:text-ink dark:prose-strong:text-white">

          {/* Content would be rendered here via a Markdown parser */}
          <div className="space-y-8">
            <p>
              Replication is the process of sharing information so as to ensure consistency
              between redundant resources. In the context of MySQL, this primarily happens
              through the binary log (binlog).
            </p>

            <h2 className="text-2xl mt-12 mb-4">The Binary Log Architecture</h2>

            <pre className="bg-zinc-950 text-zinc-100 p-6 rounded-lg font-mono text-sm overflow-x-auto border border-zinc-800">
              {`SHOW BINARY LOGS;
-- Demonstrating database internals mastery`}
            </pre>

            <p>
              By analyzing the binlog events, we can see exactly how the master coordinates
              writes with the replicas. This is crucial for maintaining data integrity
              in high-scale environments like those I explored during my internship.
            </p>
          </div>
        </section>

        {/* Academic Footer / Citation Style */}
        <footer className="mt-24 pt-12 border-t border-zinc-200 dark:border-zinc-800">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div className="space-y-2">
              <h4 className="font-mono text-xs uppercase tracking-widest opacity-40">Author</h4>
              <p className="text-lg font-medium italic">Firoz Khan</p>
              <p className="text-sm opacity-60">Software Engineer & Backend Enthusiast</p>
            </div>
            <button className="px-4 py-2 border border-zinc-200 dark:border-zinc-800 text-[10px] font-mono uppercase tracking-[0.2em] hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors">
              Share Entry
            </button>
          </div>
        </footer>

      </main>
    </article>
  );
}
