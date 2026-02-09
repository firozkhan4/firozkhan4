'use client'

import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'

interface Blog {
  _id: string
  title: string
  date: string
  link: string
}

export default function Blogs() {

  const fetchBlogPosts = async (): Promise<Blog[]> => {
    const res = await fetch('/api/blogs')

    if (!res.ok) {
      throw new Error('Failed to fetch Blog Posts')
    }

    return res.json()
  }

  const {
    data: blogs = [],
    isLoading,
    isError,
    error
  } = useQuery<Blog[]>({
    queryKey: ['apiBlogPost'],
    queryFn: fetchBlogPosts,
  })

  /* ----------------------------------
     Skeleton Loader Component
  ---------------------------------- */
  const SkeletonRow = () => (
    <li className="py-4 animate-pulse flex gap-6">

      {/* Date Skeleton */}
      <div className="w-24 h-4 bg-zinc-200 dark:bg-zinc-800 rounded" />

      {/* Separator */}
      <div className="hidden md:block w-2 h-4 bg-zinc-200 dark:bg-zinc-800 rounded" />

      {/* Title Skeleton */}
      <div className="flex-1 h-5 bg-zinc-200 dark:bg-zinc-800 rounded" />

    </li>
  )

  return (
    <div className="min-h-screen font-newsreader bg-paper text-ink dark:bg-[#121212] transition-colors duration-300">
      <main className="container mx-auto max-w-7xl px-6 py-16 md:py-24">

        {/* Header Section: Matches Hero Aesthetic */}
        <header className="mb-16 space-y-8">
          <div className="flex items-baseline gap-4">
            <h1 className="text-5xl font-medium italic tracking-tighter dark:text-white">
              Blogs <span className="text-2xl font-normal not-italic opacity-30 ml-2">({blogs.length})</span>
            </h1>
            <Link href={'/feed.xml'} className="hidden sm:flex items-center gap-2 px-3 py-1 text-[11px] font-mono uppercase tracking-widest border border-zinc-200 dark:border-zinc-800 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all dark:text-zinc-400">
              Subscribe RSS <span className="opacity-50">ツ</span>
            </Link>
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
              <Link href="/feed.xml" className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-4 ml-1">RSS feed</Link>.
            </p>
          </div>
        </header>

        {/* The Archive List: High-Density UI */}
        <section className="border-t border-zinc-200 dark:border-zinc-800">

          <ul className="divide-y divide-zinc-100 dark:divide-zinc-900">

            {/* ----------------------------------
               Loading Skeleton
            ---------------------------------- */}
            {isLoading &&
              Array.from({ length: 6 }).map((_, i) => (
                <SkeletonRow key={i} />
              ))
            }

            {/* ----------------------------------
               Error State
            ---------------------------------- */}
            {isError && (
              <li className="py-12 text-center text-red-500">
                {error.message}
              </li>
            )}

            {/* ----------------------------------
               Empty State
            ---------------------------------- */}
            {!isLoading && !isError && blogs.length === 0 && (
              <li className="py-16 text-center text-zinc-500 dark:text-zinc-400">

                <p className="text-lg font-medium">
                  No blogs present
                </p>

                <p className="text-sm mt-2 opacity-70">
                  Please check back later.
                </p>

              </li>
            )}

            {/* ----------------------------------
               Blog List
            ---------------------------------- */}
            {!isLoading && !isError && blogs.map((blog, idx) => (

              <li key={idx} className="group py-4">

                <Link
                  href={`/blogs/${blog._id}`}
                  className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6"
                >

                  {/* Date */}
                  <span className="font-mono text-[13px] opacity-40 tabular-nums shrink-0 w-28 dark:text-zinc-500">
                    {blog.date}
                  </span>

                  {/* Separator */}
                  <span className="hidden md:block opacity-20 font-mono text-sm dark:text-white">
                    :
                  </span>

                  {/* Title */}
                  <span className="text-[18px] font-medium tracking-tight text-blue-600 dark:text-blue-400 group-hover:underline underline-offset-4">
                    {blog.title}
                  </span>

                </Link>

              </li>
            ))}

          </ul>

        </section>

      </main>
    </div>
  );
}
