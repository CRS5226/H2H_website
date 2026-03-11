'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // Animate progress bar 0 → 100 over ~1.4s
    const start = performance.now()
    const duration = 1400
    const frame = (now) => {
      const elapsed = now - start
      const pct = Math.min((elapsed / duration) * 100, 100)
      setProgress(pct)
      if (pct < 100) {
        requestAnimationFrame(frame)
      } else {
        // Begin fade out
        setTimeout(() => setFadeOut(true), 200)
        setTimeout(() => setVisible(false), 700)
      }
    }
    requestAnimationFrame(frame)
  }, [])

  if (!visible) return null

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#0F1923',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '32px',
        transition: 'opacity 0.5s ease',
        opacity: fadeOut ? 0 : 1,
        pointerEvents: fadeOut ? 'none' : 'all',
      }}
    >
      {/* Logo + Name */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
        <Image
          src="/logo.png"
          alt="H TO H Partners LLP"
          width={80}
          height={80}
          style={{ width: '80px', height: '80px', objectFit: 'contain' }}
          priority
        />
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: 'Fraunces, serif', color: '#ffffff', fontSize: '22px', fontWeight: 700, letterSpacing: '0.08em' }}>
            H TO H
          </div>
          <div style={{ fontFamily: 'Space Mono, monospace', color: '#6b7280', fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', marginTop: '2px' }}>
            Partners LLP
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div style={{ width: '200px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
        <div style={{ width: '100%', height: '2px', backgroundColor: '#1e2d3a', borderRadius: '2px', overflow: 'hidden' }}>
          <div
            style={{
              height: '100%',
              width: `${progress}%`,
              backgroundColor: '#16a34a',
              borderRadius: '2px',
              transition: 'width 0.05s linear',
              boxShadow: '0 0 8px #16a34a',
            }}
          />
        </div>
        <div style={{ fontFamily: 'Space Mono, monospace', color: '#4b5563', fontSize: '10px', letterSpacing: '0.15em' }}>
          LOADING MARKET DATA...
        </div>
      </div>
    </div>
  )
}
