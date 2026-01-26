'use client'

import Link from "next/link";
import { socialLink } from "../meta";


export default function Contact() {
  return (
    <div className="min-h-screen font-newsreader bg-paper text-ink dark:bg-[#121212] transition-colors duration-300">
      <main className="container mx-auto max-w-7xl px-6 py-16 md:py-24">

        {/* Header Section */}
        <header className="mb-16 space-y-8 border-b border-zinc-200 dark:border-zinc-800 pb-12">
          <h1 className="text-5xl font-medium italic tracking-tighter dark:text-white">
            Contact
          </h1>
          <div className="max-w-2xl text-[1.15rem] leading-relaxed text-zinc-600 dark:text-zinc-400 italic">
            <p>
              I am always open to discussing backend architecture, database internals,
              or potential research collaborations. Whether you have a question about my
              work  or
              just want to talk systems, feel free to reach out.
            </p>
          </div>
        </header>

        {/* Contact Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">

          {/* Professional Channels */}
          <div className="space-y-10">
            <div>
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] mb-6 opacity-50 dark:text-zinc-500">
                Electronic Mail
              </h2>
              <Link
                href="mailto:firozkhan907979@gmail.com"
                className="text-2xl font-medium hover:text-blue-600 dark:text-zinc-200 dark:hover:text-blue-400 underline decoration-zinc-300 underline-offset-8 transition-colors"
              >
                firozkhan907979@gmail.com
              </Link>
            </div>

            <div>
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] mb-6 opacity-50 dark:text-zinc-500">
                Digital Presence
              </h2>
              <ul className="space-y-4">
                <ContactLink href={socialLink.linkedin} platform="LinkedIn" detail="Professional Network" />
                <ContactLink href={socialLink.github} platform="GitHub" detail="Source Code" />
                <ContactLink href={socialLink.twitter} platform="Twitter" detail="Technical Logs" />
              </ul>
            </div>
          </div>

          {/* Availability / Location */}
          <div className="space-y-10">
            <div>
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] mb-6 opacity-50 dark:text-zinc-500">
                Current Location
              </h2>
              <p className="text-xl dark:text-zinc-300">
                Kota, Rajasthan, India
              </p>
              <p className="font-mono text-[11px] opacity-40 mt-1 uppercase tracking-tighter">
                GMT +5:30
              </p>
            </div>

            <div className="p-6 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800 rounded-lg">
              <h3 className="text-sm font-semibold mb-2 dark:text-white">Office Hours</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                I typically respond to technical inquiries within 24-48 hours.
                For urgent matters regarding system architecture or API consultations,
                please use LinkedIn InMail.
              </p>
            </div>
          </div>

        </section>
      </main>
    </div>
  );
}

function ContactLink({ href, platform, detail }: { href: string; platform: string; detail: string }) {
  return (
    <li>
      <Link href={href} className="group flex justify-between items-baseline border-b border-zinc-100 dark:border-zinc-900 pb-2 hover:border-blue-400 transition-colors">
        <span className="text-lg font-medium dark:text-zinc-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">{platform}</span>
        <span className="font-mono text-[10px] uppercase opacity-30 tracking-widest">{detail}</span>
      </Link>
    </li>
  );
}
