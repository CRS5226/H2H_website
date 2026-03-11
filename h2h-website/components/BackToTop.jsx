'use client'

import { useEffect, useState } from 'react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      style={{
        position: 'fixed',
        bottom: '32px',
        right: '32px',
        zIndex: 9997,
        width: '44px',
        height: '44px',
        borderRadius: '4px',
        backgroundColor: '#0F1923',
        color: '#ffffff',
        border: '1px solid #16a34a',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '18px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        transition: 'background-color 0.2s ease',
      }}
      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#16a34a'}
      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0F1923'}
    >
      ↑
    </button>
  )
}
