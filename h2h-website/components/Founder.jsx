'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const strengths = [
  { label: 'Stock Market Research & Strategy', icon: '📊' },
  { label: 'Quantitative Analysis & Volatility Models', icon: '🔢' },
  { label: 'Academic Publications & Research Writing', icon: '📝' },
  { label: 'Institutional-Grade Trading Execution', icon: '⚡' },
]

const credentials = [
  { label: 'Degree', value: 'MPhil Economics & Finance' },
  { label: 'Degree', value: 'MA Economic Policy' },
  { label: 'Location', value: 'England (Academic Base)' },
  { label: 'Role', value: 'Founder & Partner, H TO H Partners LLP' },
]

export default function Founder() {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="founder" ref={ref} className="bg-[#f8f9fa] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Label */}
        <div className="flex items-center gap-3 mb-6">
          <span
            className="text-xs tracking-widest uppercase text-[#16a34a] font-semibold"
            style={{ fontFamily: 'Space Mono, monospace' }}
          >
            Meet the Founder
          </span>
          <div className="h-px w-16 bg-[#16a34a]" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left — Photo + Credentials */}
          <div
            className={`transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
          >
            {/* Founder Photo */}
            <div className="relative mb-8">
              <div className="w-full aspect-[4/3] rounded-sm overflow-hidden">
                <Image
                  src="/harshit.png"
                  alt="Harshit Agarwal"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover object-top"
                  priority
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-[#16a34a] text-white px-4 py-2 rounded-sm shadow-lg">
                <div
                  className="text-xs font-bold tracking-widest uppercase"
                  style={{ fontFamily: 'Space Mono, monospace' }}
                >
                  Founder & Partner
                </div>
              </div>
            </div>

            {/* Credentials Card */}
            <div className="bg-white border border-gray-100 rounded-sm p-5 shadow-sm mt-8">
              <div
                className="text-xs text-gray-400 tracking-widest uppercase mb-4"
                style={{ fontFamily: 'Space Mono, monospace' }}
              >
                Credentials
              </div>
              <div className="space-y-3">
                {credentials.map((c, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a] mt-2 flex-shrink-0" />
                    <div>
                      <span
                        className="text-[10px] text-gray-400 tracking-widest uppercase block"
                        style={{ fontFamily: 'Space Mono, monospace' }}
                      >
                        {c.label}
                      </span>
                      <span
                        className="text-sm font-semibold text-[#0F1923]"
                        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                      >
                        {c.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Bio */}
          <div
            className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
          >
            <h2
              className="text-4xl md:text-5xl font-black text-[#0F1923] leading-tight mb-2"
              style={{ fontFamily: 'Fraunces, serif' }}
            >
              Harshit Agarwal
            </h2>
            <p
              className="text-[#16a34a] font-semibold text-sm tracking-widest uppercase mb-8"
              style={{ fontFamily: 'Space Mono, monospace' }}
            >
              Academic-Turned-Entrepreneur · Market Researcher
            </p>

            <p
              className="text-gray-600 text-base leading-relaxed mb-5"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              I am an academic-turned-entrepreneur with a strong foundation in
              economic policy, financial research, and proprietary stock trading.
              After completing my MA in Economic Policy and an MPhil in Economics
              & Finance from England, I devoted myself to studying market behaviour,
              volatility, and long-term investment strategies.
            </p>

            <p
              className="text-gray-600 text-base leading-relaxed mb-5"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              My research has led to multiple publications in reputed journals,
              primarily focusing on stock market movements, trend analytics, and
              capital flow dynamics.
            </p>

            <p
              className="text-gray-600 text-base leading-relaxed mb-10"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              I am the founder and partner at{' '}
              <span className="font-bold text-[#0F1923]">H to H Partners LLP</span>,
              a proprietary trading firm engaged in high-turnover, research-backed
              stock trading strategies.
            </p>

            {/* Core Strengths */}
            <div className="mb-8">
              <div
                className="text-xs text-gray-400 tracking-widest uppercase mb-4"
                style={{ fontFamily: 'Space Mono, monospace' }}
              >
                Core Strengths
              </div>
              <div className="space-y-3">
                {strengths.map((s, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-white border border-gray-100 rounded-sm px-4 py-3 hover:border-[#16a34a]/30 hover:shadow-sm transition-all duration-200"
                  >
                    <span className="text-lg">{s.icon}</span>
                    <span
                      className="text-sm font-medium text-[#0F1923]"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* LinkedIn CTA */}
            <a
              href="https://www.linkedin.com/company/h-to-h-llp/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#0F1923] text-white font-semibold px-6 py-3 rounded-sm hover:bg-[#16a34a] transition-colors duration-300 text-sm tracking-wide"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Connect on LinkedIn
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}