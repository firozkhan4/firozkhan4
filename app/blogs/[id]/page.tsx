import MarkdownRenderer from '@/app/components/MarkdownRenderer';
import Link from 'next/link';

interface BlogPost {
  _id?: string;
  title?: string;
  date?: string;
  category?: string;
  readingTime?: string;
  content?: string;
}

async function getBlogPost(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs/${id}`, {
    cache: 'no-store'
  });

  if (!res.ok) return null;
  return res.json();
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const blog: BlogPost | null = await getBlogPost(id);

  return (
    <article className="min-h-screen font-newsreader dark:text-white bg-paper text-ink dark:bg-[#121212] transition-colors duration-300">
      <main className="container mx-auto max-w-7xl px-6 py-16 md:py-24">

        {/* Breadcrumb / Back Navigation */}
        <nav className="mb-12">
          <Link href="/blogs" className="font-mono text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity flex items-center gap-2">
            ← Back to Archive
          </Link>
        </nav>

        {/* Post Metadata Header */}
        <header className="mb-16 space-y-6 border-b border-zinc-100 dark:border-zinc-900 pb-12">
          <div className="space-y-2">
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest opacity-50">
              <span>{blog?.date}</span>
              <span>/</span>
              <span>{blog?.category}</span>
              <span>/</span>
              <span>{blog?.readingTime}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-medium italic tracking-tight leading-[1.1] dark:text-white pt-6">
              {blog?.title}
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

          <MarkdownRenderer content={blog?.content || ""} />

        </section>

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
