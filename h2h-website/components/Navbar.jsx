'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sectionIds = ['home', 'about', 'services', 'founder', 'research', 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Founder', href: '#founder' },
    { label: 'Research', href: '#research' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <>
      {/* Full screen transparent overlay — outside nav */}
      {menuOpen && (
        <div
          className="fixed inset-0 md:hidden"
          style={{ zIndex: 45, background: 'rgba(0,0,0,0.01)' }}
          onClick={() => setMenuOpen(false)}
        />
      )}

      <nav
        className={`fixed top-0 left-0 right-0 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
            : 'bg-white/95 backdrop-blur-sm shadow-sm py-5'
        }`}
        style={{ zIndex: 50 }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <Image
              src="/logo.png"
              alt="H TO H Partners LLP"
              width={40}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
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
                className={`text-sm font-medium transition-colors duration-200 tracking-wide ${activeSection === link.href.slice(1) ? 'text-[#16a34a]' : 'text-[#0F1923] hover:text-[#16a34a]'}`}
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
          <div
            className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4 shadow-lg"
            style={{ position: 'relative', zIndex: 50 }}
          >
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
    </>
  )
}
