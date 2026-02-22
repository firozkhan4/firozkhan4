"use client";

import { useEffect, useState } from 'react';
import MarkdownRenderer from '@/app/components/MarkdownRenderer';
import Link from 'next/link';
import blogs from "../../data/blogs.json"
import { useParams } from 'next/navigation';

interface BlogPost {
  _id?: string;
  title?: string;
  slug: string;
  date?: string;
  category?: string;
  readingTime?: string;
  content?: string;
}

export default function BlogPostPage() {

  const { slug } = useParams();
  const [content, seetContent] = useState("")
  const blog = blogs.find((b) => b.slug === slug);

  useEffect(() => {
    if (!blog?.slug) return;

    import(`../../data/blogs/${slug}.json`)
      .then((data) => seetContent(data.content));

  }, [blog]);

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="font-mono text-xs uppercase opacity-50">
          Entry Not Found
        </p>
        <Link href="/blogs" className="underline text-xs">
          Return to Archive
        </Link>
      </div>
    );
  }

  return (
    <article className="min-h-screen font-newsreader dark:text-white bg-paper text-ink dark:bg-[#121212] transition-colors duration-300">
      <main className="container mx-auto max-w-7xl px-6 py-16 md:py-24">

        <nav className="mb-12">
          <Link href="/blogs" className="font-mono text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity flex items-center gap-2">
            ← Back to Archive
          </Link>
        </nav>

        <header className=" space-y-6 border-b border-zinc-100 dark:border-zinc-900 pb-12">
          <div className="space-y-2">
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest opacity-50">
              <span>{blog.date}</span>
              <span>/</span>
              <span>{blog.category}</span>
              <span>/</span>
              <span>{blog.readingTime}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-medium italic tracking-tight leading-[1.1] dark:text-white pt-6">
              {blog.title}
            </h1>
          </div>
        </header>

        <section className="prose prose-zinc dark:prose-invert prose-lg max-w-none 
          prose-headings:font-medium prose-headings:italic prose-headings:tracking-tight
          prose-p:leading-relaxed prose-p:text-zinc-700 dark:prose-p:text-zinc-300
          prose-code:font-mono prose-code:bg-zinc-100 dark:prose-code:bg-zinc-900 
          prose-code:px-1 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
          prose-strong:text-ink dark:prose-strong:text-white">

          <MarkdownRenderer content={content} />
        </section>

        <footer className="mt-24 pt-12 border-t border-zinc-200 dark:border-zinc-800">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div className="space-y-2">
              <h4 className="font-mono text-xs uppercase tracking-widest opacity-40">Author</h4>
              <p className="text-lg font-medium italic">Firoz Khan</p>
              <p className="text-sm opacity-60">Software Engineer & Backend Enthusiast</p>
            </div>
            <button
              onClick={() => navigator.clipboard.writeText(window.location.href)}
              className="px-4 py-2 border border-zinc-200 dark:border-zinc-800 text-[10px] font-mono uppercase tracking-[0.2em] hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            >
              Share Entry
            </button>
          </div>
        </footer>
      </main>
    </article>
  );
}
