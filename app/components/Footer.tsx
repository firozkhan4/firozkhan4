import { socialLink } from "../meta";


export default function Footer() {
  return (
    <footer className="border-t-4  border-zinc-200 dark:border-zinc-800 py-8 text-sm font-mono opacity-60 dark:bg-[#23252F] dark:text-white">
      < div className="container mx-auto px-6 flex justify-between items-center" >
        <span>&copy; FIROZ KHAN, 2026</span>
        <div className="flex gap-4">
          <a href={socialLink.github} target="_blank" className="hover:underline">GitHub</a>
          <a href={socialLink.linkedin} target="_blank" className="hover:underline">LinkedIn</a>
          <a href={socialLink.twitter} target="_blank" className="hover:underline">Twitter</a>
          <a href="#" target="_blank" className="hover:underline">RSS</a>
        </div>
      </div >
    </footer >
  )
}
