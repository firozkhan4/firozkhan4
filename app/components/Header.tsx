'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Moon, Search, Sun } from 'lucide-react';
import { usePathname } from 'next/navigation';

// Define your Theme Enum clearly
enum Theme {
  LIGHT = "light",
  DARK = "dark"
}

export function Header() {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

  const path = usePathname()

  // Load theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === Theme.DARK);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    // For Tailwind dark mode support
    document.documentElement.classList.toggle('dark');
  };

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Experience", link: "/experience" },
    { name: "Projects", link: "/projects" },
    { name: "Blogs", link: "/blogs" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 shadow-2xl backdrop-blur-3xl dark:border-zinc-800 dark:bg-[#292B37]">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">

        <div className="flex items-center gap-x-12">
          <Link href="/" className="text-xl font-bold tracking-tighter hover:opacity-70 transition-opacity dark:text-white">
            FIROZ KHAN
          </Link>

          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.link}>
                  <Link
                    href={item.link}
                    className={`text-sm font-medium text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors ${path === item.link ? "text-white" : ""}`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-x-6 dark:text-white">
          <Search />
          <button
            onClick={toggleTheme}
            className="rounded-full p-2 hover:bg-zinc-100 dark:hover:bg-zinc-400 transition-colors "
            aria-label="Toggle Theme"
          >
            {theme === Theme.LIGHT ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>

      </div>
    </header >
  );
}
