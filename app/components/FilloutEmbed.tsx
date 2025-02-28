'use client'

import { useEffect, useRef } from 'react'
import Script from 'next/script'

interface FilloutEmbedProps {
  style?: React.CSSProperties
  [key: string]: any
}

export function FilloutEmbed({ style, ...props }: FilloutEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Create a new script element on mount to reinitialize the embed
    const script = document.createElement('script')
    script.src = 'https://server.fillout.com/embed/v1/'
    script.async = true
    // Append the script to the container
    containerRef.current?.appendChild(script)

    return () => {
      // Optionally clean up the script on unmount
      if (containerRef.current && script.parentNode === containerRef.current) {
        containerRef.current.removeChild(script)
      }
    }
  }, [])

  return <div ref={containerRef} style={style} {...props}></div>
}
