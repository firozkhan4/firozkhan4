import Link from "next/link";
import { socialLink } from "../meta";


export default function Footer() {
  return (
    <footer className="border-t-4 border-zinc-200 dark:border-zinc-800 py-8 text-sm font-mono opacity-60 dark:bg-[#23252F] dark:text-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Copyright Section */}
        <span className="text-center md:text-left">
          &copy; FIROZ KHAN, 2026
        </span>

        {/* Links Section */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <Link href={socialLink.github} target="_blank" className="hover:underline">
            GitHub
          </Link>
          <Link href={socialLink.linkedin} target="_blank" className="hover:underline">
            LinkedIn
          </Link>
          <Link href={socialLink.twitter} target="_blank" className="hover:underline">
            Twitter
          </Link>
          <Link href="/feed.xml" target="_blank" className="hover:underline">
            RSS
          </Link>
        </div>
      </div>
    </footer>
  );
}
