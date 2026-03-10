'use client'

import { useEffect, useRef, useState } from 'react'

const pillars = [
  {
    icon: '📊',
    title: 'Quantitative Research',
    desc: 'Every trade is backed by rigorous data models, backtested strategies, and statistical validation before execution.',
  },
  {
    icon: '🧠',
    title: 'Academic Rigour',
    desc: 'Founded on deep academic knowledge in economic policy and finance, bridging theory with live market application.',
  },
  {
    icon: '⚡',
    title: 'Real-Time Execution',
    desc: 'Combining research with fast, disciplined execution to capture opportunities across Indian equity markets.',
  },
  {
    icon: '📈',
    title: 'Macro Intelligence',
    desc: 'Monitoring macroeconomic trends, capital flows, and policy shifts to stay ahead of market movements.',
  },
]

export default function AboutFirm() {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={ref} className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Label */}
        <div className="flex items-center gap-3 mb-6">
          <span
            className="text-xs tracking-widest uppercase text-[#16a34a] font-semibold"
            style={{ fontFamily: 'Space Mono, monospace' }}
          >
            About the Firm
          </span>
          <div className="h-px w-16 bg-[#16a34a]" />
        </div>

        {/* Top Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-start mb-20">

          {/* Left — Heading */}
          <div
            className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <h2
              className="text-4xl md:text-5xl font-black text-[#0F1923] leading-tight mb-6"
              style={{ fontFamily: 'Fraunces, serif' }}
            >
              Where Academic
              <br />
              <span className="text-[#16a34a]">Insight Meets</span>
              <br />
              Market Reality
            </h2>

            {/* Trade Setup Visual */}
            <div className="bg-[#0F1923] rounded-sm p-5 mt-8 font-mono text-xs">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#16a34a] blink-green" />
                <span
                  className="text-gray-400 tracking-widest uppercase text-[10px]"
                  style={{ fontFamily: 'Space Mono, monospace' }}
                >
                  Live Strategy Model
                </span>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                  <span className="text-gray-500">INSTRUMENT</span>
                  <span className="text-white font-bold">NIFTY 50</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                  <span className="text-gray-500">SIGNAL</span>
                  <span className="text-[#16a34a] font-bold">▲ BULLISH BREAKOUT</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                  <span className="text-gray-500">ENTRY</span>
                  <span className="text-[#f59e0b] font-bold">24,850</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                  <span className="text-gray-500">TARGET</span>
                  <span className="text-[#16a34a] font-bold">25,400</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                  <span className="text-gray-500">STOP LOSS</span>
                  <span className="text-[#dc2626] font-bold">24,500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">INDICATORS</span>
                  <span className="text-white">EMA ✓ MACD ✓ RSI ✓</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Description */}
          <div
            className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <p
              className="text-gray-600 text-lg leading-relaxed mb-6"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              <span className="font-bold text-[#0F1923]">H TO H Partners LLP</span> is
              a research-driven proprietary trading firm committed to decoding the
              complexities of the stock market. Founded by a team of economic policy
              and finance experts, we combine deep academic insight with real-time
              market execution to generate consistent returns.
            </p>
            <p
              className="text-gray-600 text-lg leading-relaxed mb-6"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              With a strong foundation in quantitative research, market behaviour
              analysis, and macroeconomic trends, we specialise in strategic equity
              trading across Indian markets.
            </p>
            <p
              className="text-gray-600 text-lg leading-relaxed mb-10"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Our mission is to{' '}
              <span className="font-bold text-[#0F1923]">
                empower capital with clarity, discipline, and data.
              </span>
            </p>

            {/* Indicator Row */}
            <div className="flex flex-wrap gap-3">
              {['EMA', 'MACD', 'RSI', 'ATR', 'Bollinger', 'VWAP'].map((ind) => (
                <span
                  key={ind}
                  className="bg-[#f0fdf4] border border-[#16a34a]/20 text-[#16a34a] text-xs font-bold px-3 py-1 rounded-full tracking-widest"
                  style={{ fontFamily: 'Space Mono, monospace' }}
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className={`border border-gray-100 rounded-sm p-6 hover:border-[#16a34a]/40 hover:shadow-md transition-all duration-300 group transition-all duration-700`}
              style={{ transitionDelay: `${i * 100}ms`, opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)' }}
            >
              <div className="text-3xl mb-4">{p.icon}</div>
              <h3
                className="text-base font-bold text-[#0F1923] mb-2 group-hover:text-[#16a34a] transition-colors"
                style={{ fontFamily: 'Fraunces, serif' }}
              >
                {p.title}
              </h3>
              <p
                className="text-sm text-gray-500 leading-relaxed"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                {p.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}