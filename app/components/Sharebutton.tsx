'use client'

import { useState, useRef, useEffect } from "react";

const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LinkIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M5 6.5a2.5 2.5 0 003.536.414l1.5-1.5a2.5 2.5 0 00-3.536-3.536L5.793 3.09" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    <path d="M7 5.5a2.5 2.5 0 00-3.536-.414l-1.5 1.5a2.5 2.5 0 003.536 3.536l.707-.707" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
    <path d="M1.5 3.5a1 1 0 100-2 1 1 0 000 2zM1 4.5h1V10H1V4.5zM4 4.5h1v.75C5.33 4.83 5.9 4.4 6.75 4.4c1.4 0 2.25.9 2.25 2.5V10H8V7c0-1-.4-1.6-1.25-1.6-.9 0-1.75.6-1.75 1.8V10H4V4.5z" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
    <path d="M10 1H2a1 1 0 00-1 1v8a1 1 0 001 1h4.5V7.5H5V6h1.5V5a2 2 0 012-2H10v1.5H8.5c-.28 0-.5.22-.5.5V6H10l-.5 1.5H8V11H10a1 1 0 001-1V2a1 1 0 00-1-1z" />
  </svg>
);

const ShareIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M9 4a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM3 7.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM9 11a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" stroke="currentColor" strokeWidth="1.2" />
    <path d="M4.4 5.6l3.2-1.7M4.4 7l3.2 1.7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

export default function ShareButton() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      setOpen(false);
    }, 1500);
  };

  const shareLinkedIn = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`;
    window.open(url, "_blank", "width=600,height=500");
    setOpen(false);
  };

  const shareFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
    window.open(url, "_blank", "width=600,height=500");
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative inline-block">
      {/* Trigger Button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 px-4 py-2 border border-zinc-200 dark:border-zinc-800 text-[10px] font-mono uppercase tracking-[0.2em] hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
      >
        <ShareIcon />
        Share Entry
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 top-full mt-1 w-44 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-lg z-50 overflow-hidden">
          {/* Copy Link */}
          <button
            onClick={copyLink}
            className="w-full flex items-center gap-2.5 px-4 py-2.5 text-[10px] font-mono uppercase tracking-[0.15em] hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors text-zinc-700 dark:text-zinc-300"
          >
            {copied ? (
              <>
                <CheckIcon />
                <span className="text-zinc-900 dark:text-zinc-100">Copied!</span>
              </>
            ) : (
              <>
                <LinkIcon />
                Copy Link
              </>
            )}
          </button>

          <div className="border-t border-zinc-100 dark:border-zinc-900" />

          {/* LinkedIn */}
          <button
            onClick={shareLinkedIn}
            className="w-full flex items-center gap-2.5 px-4 py-2.5 text-[10px] font-mono uppercase tracking-[0.15em] hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors text-zinc-700 dark:text-zinc-300"
          >
            <LinkedInIcon />
            LinkedIn
          </button>

          <div className="border-t border-zinc-100 dark:border-zinc-900" />

          {/* Facebook */}
          <button
            onClick={shareFacebook}
            className="w-full flex items-center gap-2.5 px-4 py-2.5 text-[10px] font-mono uppercase tracking-[0.15em] hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors text-zinc-700 dark:text-zinc-300"
          >
            <FacebookIcon />
            Facebook
          </button>
        </div>
      )}
    </div>
  );
}
