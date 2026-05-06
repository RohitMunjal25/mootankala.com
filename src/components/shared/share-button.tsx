'use client'

import { useState } from 'react'
import { Share2, Check } from 'lucide-react'

interface ShareButtonProps {
  title: string
  url: string
  className?: string
}

export function ShareButton({ title, url, className }: ShareButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          url,
        })
      } catch (error) {
        // User cancelled sharing or error occurred
        console.log('Share cancelled or failed:', error)
      }
    } else {
      // Fallback to clipboard
      try {
        await navigator.clipboard.writeText(url)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      } catch (error) {
        console.error('Failed to copy URL:', error)
      }
    }
  }

  return (
    <>
      <button
        onClick={handleShare}
        className={`rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-muted inline-flex items-center gap-2 ${className || ''}`}
      >
        {copied ? (
          <>
            <Check className="h-4 w-4 text-green-600" />
            URL Copied
          </>
        ) : (
          <>
            <Share2 className="h-4 w-4" />
            Share
          </>
        )}
      </button>
      {copied && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-4 py-2 rounded-lg text-sm shadow-lg z-50">
          URL copied to clipboard!
        </div>
      )}
    </>
  )
}
