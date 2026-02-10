'use client';

import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';

interface Certificate {
  _id: string;
  title: string;
  issuer: string;
  date: string;
  link: string;
  skills: string;
  certificateId: string;
}

/* ---------------- Fetcher ---------------- */

const fetchCertifications = async (): Promise<Certificate[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/certificates`,
    {
      cache: 'no-store', // Prevent Next.js cache conflicts
    }
  );

  if (!res.ok) {
    throw new Error(`Failed: ${res.status}`);
  }

  return res.json();
};

/* ---------------- Component ---------------- */

export default function Certifications() {
  const {
    data: certifications = [],
    isLoading,
    isError,
    error,
  } = useQuery<Certificate[]>({
    queryKey: ['certifications'],
    queryFn: fetchCertifications,

    // Performance tuning
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,

    retry: 2,
    refetchOnWindowFocus: false,
  });

  return (
    <div className="min-h-screen antialiased dark:text-white font-newsreader bg-paper text-ink dark:bg-[#121212] transition-colors duration-300">
      <main className="container mx-auto max-w-7xl px-6 py-16 md:py-24">

        {/* Header */}
        <header className="mb-20 space-y-6">
          <h1 className="text-5xl font-medium italic tracking-tighter">
            Certifications
          </h1>

          <div className="max-w-2xl text-lg opacity-70 italic leading-relaxed">
            <p>
              A verified record of technical proficiencies, including AWS, Red Hat, and API development.
              Each credential is linked for verification.
            </p>
          </div>
        </header>

        {/* Loading */}
        {isLoading && <SkeletonGrid />}

        {/* Error */}
        {isError && (
          <div className="text-red-500 font-mono text-sm uppercase tracking-widest">
            Error: {(error as Error).message}
          </div>
        )}

        {/* Empty */}
        {!isLoading && !isError && certifications.length === 0 && (
          <div className="opacity-40 font-mono text-sm uppercase tracking-widest">
            No certifications found.
          </div>
        )}

        {/* Data */}
        {!isLoading && !isError && certifications.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert) => (
              <CertificationCard key={cert._id} cert={cert} />
            ))}
          </div>
        )}

      </main>
    </div>
  );
}

/* ---------------- Skeleton ---------------- */

function SkeletonGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="h-64 bg-zinc-100 dark:bg-zinc-900/50 animate-pulse border border-zinc-200 dark:border-zinc-800"
        />
      ))}
    </div>
  );
}

/* ---------------- Card ---------------- */

function CertificationCard({ cert }: { cert: Certificate }) {
  const skillList = cert.skills
    .split(',')
    .map((s) => s.trim());

  return (
    <article className="group flex flex-col justify-between p-8 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all bg-white/50 dark:bg-zinc-900/30">

      <div>
        <div className="flex justify-between items-start mb-4">
          <span className="font-mono text-[10px] uppercase tracking-widest opacity-40">
            {cert.issuer}
          </span>

          <span className="font-mono text-[10px] opacity-30">
            {cert.date}
          </span>
        </div>

        <h2 className="text-2xl font-medium tracking-tight mb-2 dark:text-zinc-100 italic">
          {cert.title}
        </h2>

        <div className="font-mono text-[11px] opacity-30 mb-6 tracking-tighter">
          VERIFICATION_ID: {cert.certificateId}
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {skillList.map((skill) => (
            <span
              key={skill}
              className="text-[10px] font-mono opacity-60 bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded uppercase"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <Link
        href={cert.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto w-fit flex items-center gap-2 px-4 py-2 border border-zinc-200 dark:border-zinc-800 text-[11px] font-mono uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all group/btn"
      >
        View Credential
        <span className="group-hover/btn:translate-x-1 transition-transform">
          →
        </span>
      </Link>

    </article>
  );
}
