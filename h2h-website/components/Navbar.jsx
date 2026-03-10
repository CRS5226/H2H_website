'use client'

import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Founder', href: '#founder' },
    { label: 'Research', href: '#research' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-9 h-9 bg-[#0F1923] rounded-sm flex items-center justify-center">
            <span
              className="text-white font-bold text-sm tracking-widest"
              style={{ fontFamily: 'Space Mono, monospace' }}
            >
              H2H
            </span>
          </div>
          <div className="flex flex-col leading-none">
            <span
              className="text-[#0F1923] font-bold text-sm tracking-wide"
              style={{ fontFamily: 'Fraunces, serif' }}
            >
              H TO H
            </span>
            <span className="text-[#6b7280] text-[10px] tracking-widest uppercase">
              Partners LLP
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#0F1923] text-sm font-medium hover:text-[#16a34a] transition-colors duration-200 tracking-wide"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://www.linkedin.com/company/h-to-h-llp/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0F1923] text-white text-sm font-semibold px-5 py-2 rounded-sm hover:bg-[#16a34a] transition-colors duration-300 tracking-wide"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            Connect on LinkedIn →
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-[#0F1923] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#0F1923] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#0F1923] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#0F1923] text-sm font-medium hover:text-[#16a34a] transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://www.linkedin.com/company/h-to-h-llp/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0F1923] text-white text-sm font-semibold px-5 py-2 rounded-sm text-center hover:bg-[#16a34a] transition-colors"
          >
            Connect on LinkedIn →
          </a>
        </div>
      )}
    </nav>
  )
}
