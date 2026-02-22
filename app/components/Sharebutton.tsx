'use client'

import { useState, useRef, useEffect } from 'react'
import {
  Share2,
  Link as LinkIcon,
  Linkedin,
  Facebook,
  Check,
} from 'lucide-react'

export default function ShareButton() {

  const [open, setOpen] = useState<boolean>(false)
  const [copied, setCopied] = useState<boolean>(false)

  const ref = useRef<HTMLDivElement | null>(null)

  /**
   * Close dropdown when clicking outside
   */
  useEffect(() => {

    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handler)

    return () => {
      document.removeEventListener('mousedown', handler)
    }

  }, [])

  /**
   * Copy Current Page URL
   */
  const copyLink = async (): Promise<void> => {

    try {

      await navigator.clipboard.writeText(window.location.href)

      setCopied(true)

      setTimeout(() => {
        setCopied(false)
        setOpen(false)
      }, 1500)

    } catch (error) {
      console.error('Copy failed:', error)
    }
  }

  /**
   * LinkedIn Share
   */
  const shareLinkedIn = (): void => {

    const url =
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        window.location.href
      )}`

    window.open(url, '_blank', 'width=600,height=500')

    setOpen(false)
  }

  /**
   * Facebook Share
   */
  const shareFacebook = (): void => {

    const url =
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        window.location.href
      )}`

    window.open(url, '_blank', 'width=600,height=500')

    setOpen(false)
  }

  return (

    <div ref={ref} className="relative inline-block">

      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setOpen(prev => !prev)}
        className="flex items-center gap-2 px-4 py-2 border border-zinc-200 dark:border-zinc-800 text-[10px] font-mono uppercase tracking-[0.2em] hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
      >
        <Share2 size={14} />
        Share Entry
      </button>


      {/* Dropdown */}
      {open && (

        <div className="absolute right-0 top-full mt-1 w-44 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-lg z-50 overflow-hidden">

          {/* Copy Link */}
          <button
            type="button"
            onClick={copyLink}
            className="w-full flex items-center gap-2.5 px-4 py-2.5 text-[10px] font-mono uppercase tracking-[0.15em] hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors text-zinc-700 dark:text-zinc-300"
          >

            {copied ? (
              <>
                <Check size={14} />
                <span className="text-zinc-900 dark:text-zinc-100">
                  Copied!
                </span>
              </>
            ) : (
              <>
                <LinkIcon size={14} />
                Copy Link
              </>
            )}

          </button>


          <div className="border-t border-zinc-100 dark:border-zinc-900" />


          {/* LinkedIn */}
          <button
            type="button"
            onClick={shareLinkedIn}
            className="w-full flex items-center gap-2.5 px-4 py-2.5 text-[10px] font-mono uppercase tracking-[0.15em] hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors text-zinc-700 dark:text-zinc-300"
          >
            <Linkedin size={14} />
            LinkedIn
          </button>


          <div className="border-t border-zinc-100 dark:border-zinc-900" />


          {/* Facebook */}
          <button
            type="button"
            onClick={shareFacebook}
            className="w-full flex items-center gap-2.5 px-4 py-2.5 text-[10px] font-mono uppercase tracking-[0.15em] hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors text-zinc-700 dark:text-zinc-300"
          >
            <Facebook size={14} />
            Facebook
          </button>

        </div>

      )}

    </div>

  )
}
