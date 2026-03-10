'use client'

import Image from 'next/image'

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Founder', href: '#founder' },
  { label: 'Research', href: '#research' },
  { label: 'Contact', href: '#contact' },
]

const indicators = [
  { label: 'EMA', status: 'Bullish', color: '#16a34a' },
  { label: 'MACD', status: 'Cross ▲', color: '#16a34a' },
  { label: 'RSI', status: '58.4', color: '#f59e0b' },
  { label: 'ATR', status: 'Moderate', color: '#6366f1' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0F1923] text-white px-6 pt-16 pb-8">
      <div className="max-w-7xl mx-auto">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            {/* Logo */}
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="H TO H Partners LLP"
                width={120}
                height={40}
                className="h-10 w-auto object-contain invert"
              />
            </div>

            <p
              className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              A research-driven proprietary trading firm committed to decoding
              the complexities of the stock market. Empowering capital with
              clarity, discipline, and data.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/h-to-h-llp/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 border border-white/10 rounded-sm flex items-center justify-center hover:bg-[#16a34a] hover:border-[#16a34a] transition-all duration-200"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 border border-white/10 rounded-sm flex items-center justify-center hover:bg-[#16a34a] hover:border-[#16a34a] transition-all duration-200"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div
              className="text-xs text-gray-500 tracking-widest uppercase mb-5"
              style={{ fontFamily: 'Space Mono, monospace' }}
            >
              Quick Links
            </div>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-400 text-sm hover:text-[#16a34a] transition-colors duration-200 py-1"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  → {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Live Indicators */}
          <div>
            <div
              className="text-xs text-gray-500 tracking-widest uppercase mb-5"
              style={{ fontFamily: 'Space Mono, monospace' }}
            >
              Market Indicators
            </div>
            <div className="space-y-3">
              {indicators.map((ind) => (
                <div
                  key={ind.label}
                  className="flex items-center justify-between bg-white/5 border border-white/10 rounded-sm px-4 py-2"
                >
                  <span
                    className="text-xs text-gray-500 tracking-widest"
                    style={{ fontFamily: 'Space Mono, monospace' }}
                  >
                    {ind.label}
                  </span>
                  <span
                    className="text-xs font-bold"
                    style={{ color: ind.color, fontFamily: 'Space Mono, monospace' }}
                  >
                    {ind.status}
                  </span>
                </div>
              ))}
            </div>

            {/* Mission */}
            <div className="mt-6 border-l-2 border-[#16a34a] pl-4">
              <p
                className="text-gray-400 text-xs italic leading-relaxed"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                "Empowering capital with clarity, discipline, and data."
              </p>
              <span
                className="text-[#16a34a] text-[10px] tracking-widest uppercase mt-1 block"
                style={{ fontFamily: 'Space Mono, monospace' }}
              >
                — H TO H Partners LLP
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-gray-600 text-xs"
            style={{ fontFamily: 'Space Mono, monospace' }}
          >
            © {new Date().getFullYear()} H TO H Partners LLP. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a] blink-green" />
            <span
              className="text-gray-600 text-xs tracking-widest"
              style={{ fontFamily: 'Space Mono, monospace' }}
            >
              MARKETS OPEN · RESEARCH ACTIVE
            </span>
          </div>
        </div>

      </div>
    </footer>
  )
}