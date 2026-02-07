import Link from "next/link";
import { socialLink } from "../meta";

export default function Footer() {
  return (
    <footer className="group border-t border-zinc-200 dark:border-zinc-800 py-10 text-sm font-medium transition-colors duration-300 dark:bg-[#1a1b23] text-zinc-500 dark:text-zinc-400">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Copyright Section - Subtle branding */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-zinc-900 dark:text-zinc-100 font-bold tracking-tighter">
            FIROZ KHAN
          </span>
          <p className="text-xs opacity-70">
            &copy; {new Date().getFullYear()} • Built with Next.js
          </p>
        </div>

        {/* Links Section - Enhanced Interactivity */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2">
          {[
            { name: "GitHub", href: socialLink.github },
            { name: "LinkedIn", href: socialLink.linkedin },
            { name: "Twitter", href: socialLink.twitter },
            { name: "RSS", href: "/feed.xml" },
          ].map((link) => (
            <Link
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative transition-colors duration-200 hover:text-zinc-900 dark:hover:text-white after:content-[''] after:absolute after:left-0 after:bottom-0.5 after:w-0 after:h-px after:bg-current after:transition-all hover:after:w-full"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
