'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Moon, Search, Sun, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

enum Theme {
  LIGHT = "light",
  DARK = "dark"
}

export function Header() {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const path = usePathname();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === Theme.DARK);
    }
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle('dark');
  };

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Experience", link: "/experience" },
    { name: "Projects", link: "/projects" },
    { name: "Blogs", link: "/blogs" },
    { name: "Certifications", link: "/certifications" },
    { name: "Contact", link: "/contact" },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 shadow-2xl backdrop-blur-3xl dark:border-zinc-800 dark:bg-[#292B37]">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-x-6 lg:gap-x-12">
          <Link href="/" className="text-lg sm:text-xl font-bold tracking-tighter hover:opacity-70 transition-opacity dark:text-white">
            FIROZ KHAN
          </Link>

          <nav className="hidden md:block">
            <ul className="flex space-x-4 lg:space-x-8">
              {navItems.map((item) => {
                const isActive = path === item.link;
                return (
                  <li key={item.link}>
                    <Link
                      href={item.link}
                      className={`${isActive ? "dark:text-white text-black" : "text-zinc-600 dark:text-zinc-400"} text-sm font-medium hover:text-black dark:hover:text-white transition-colors`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-x-3 sm:gap-x-6 dark:text-white">
          <button className="hover:opacity-70 transition-opacity" aria-label="Search">
            <Search size={20} />
          </button>

          <button
            onClick={toggleTheme}
            className="rounded-full p-2 hover:bg-zinc-100 dark:hover:bg-zinc-400 transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === Theme.LIGHT ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden rounded-full p-2 hover:bg-zinc-100 dark:hover:bg-zinc-400 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div className={`md:hidden fixed inset-0 top-16 bg-black/20 dark:bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className={`absolute inset-x-0 top-0 bg-white dark:bg-[#292B37] shadow-2xl transform transition-transform duration-300 ease-out ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          <nav className="container mx-auto px-4 py-8">
            <ul className="flex flex-col space-y-2">
              {navItems.map((item, index) => {
                const isActive = path === item.link;
                return (
                  <li
                    key={item.link}
                    className={`transform transition-all duration-300 ${mobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}
                    style={{ transitionDelay: mobileMenuOpen ? `${index * 50}ms` : '0ms' }}
                  >
                    <Link
                      href={item.link}
                      onClick={handleNavClick}
                      className={`${isActive
                        ? "dark:text-white text-black font-semibold bg-zinc-100 dark:bg-zinc-800"
                        : "text-zinc-600 dark:text-zinc-400"} 
                        text-base block px-4 py-3 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-black dark:hover:text-white transition-all active:scale-95`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
