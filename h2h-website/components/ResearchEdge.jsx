'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: '5+', label: 'Years of Research', color: '#16a34a' },
  { value: '10+', label: 'Journal Publications', color: '#6366f1' },
  { value: '₹Cr+', label: 'Capital Deployed', color: '#f59e0b' },
  { value: '100%', label: 'Data-Driven Decisions', color: '#16a34a' },
]

const edges = [
  {
    title: 'Volatility Modelling',
    desc: 'Advanced ATR-based models to size positions correctly and manage drawdowns with precision.',
    tag: 'ATR · VIX · SD',
    color: '#dc2626',
    chart: [40, 55, 45, 65, 50, 70, 60, 80, 65, 85],
  },
  {
    title: 'Trend & Momentum',
    desc: 'Multi-timeframe EMA stacking combined with MACD and RSI confirmation for high-probability entries.',
    tag: 'EMA · MACD · RSI',
    color: '#6366f1',
    chart: [30, 35, 42, 40, 50, 55, 52, 62, 68, 75],
  },
  {
    title: 'Macro-Driven Strategy',
    desc: 'Policy shifts, capital flow analysis, and macroeconomic cycles integrated into equity positioning.',
    tag: 'Policy · Flow · Cycle',
    color: '#f59e0b',
    chart: [50, 48, 55, 52, 58, 56, 62, 60, 65, 70],
  },
  {
    title: 'Breakout Detection',
    desc: 'Pattern recognition and volume confirmation to identify institutional breakouts before momentum builds.',
    tag: 'Volume · Pattern · OI',
    color: '#16a34a',
    chart: [35, 38, 36, 42, 40, 55, 60, 58, 72, 80],
  },
]

const publications = [
  {
    title: 'Stock Market Reaction to Macroeconomic Variables in Brics: An Assessment with Dynamic Autoregressive Distributed Lag Simulations',
    meta: 'H Agarwal · The Journal of Developing Areas · 2025',
    url: 'https://muse.jhu.edu/pub/51/article/970241/summary',
  },
]

function MiniChart({ data, color }) {
  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min || 1
  const w = 120
  const h = 40
  const points = data
    .map((v, i) => `${(i / (data.length - 1)) * w},${h - ((v - min) / range) * h}`)
    .join(' ')
  const areaPoints = `0,${h} ${points} ${w},${h}`

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-10" preserveAspectRatio="none">
      <defs>
        <linearGradient id={`grad-${color.replace('#','')}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon
        points={areaPoints}
        fill={`url(#grad-${color.replace('#','')})`}
      />
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx={w}
        cy={h - ((data[data.length - 1] - min) / range) * h}
        r="3"
        fill={color}
      />
    </svg>
  )
}

function CountUp({ target, suffix = '' }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true) },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    const num = parseInt(target.replace(/\D/g, '')) || 0
    if (num === 0) { setCount(target); return }
    let start = 0
    const duration = 1500
    const step = Math.ceil(num / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= num) { setCount(target); clearInterval(timer) }
      else setCount(start + suffix)
    }, 16)
    return () => clearInterval(timer)
  }, [started, target, suffix])

  return <span ref={ref}>{count || '0' + suffix}</span>
}

export default function ResearchEdge() {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="research" ref={ref} className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Label */}
        <div className="flex items-center gap-3 mb-6">
          <span
            className="text-xs tracking-widest uppercase text-[#16a34a] font-semibold"
            style={{ fontFamily: 'Space Mono, monospace' }}
          >
            Research & Edge
          </span>
          <div className="h-px w-16 bg-[#16a34a]" />
        </div>

        {/* Heading */}
        <div className="grid md:grid-cols-2 gap-10 items-end mb-16">
          <h2
            className={`text-4xl md:text-5xl font-black text-[#0F1923] leading-tight transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ fontFamily: 'Fraunces, serif' }}
          >
            Our Quantitative
            <br />
            <span className="text-[#16a34a]">Research Edge</span>
          </h2>
          <p
            className={`text-gray-500 text-base leading-relaxed transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            Built on peer-reviewed academic research and real-world market
            experience — our edge comes from understanding markets at a depth
            most participants never reach.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="border border-gray-100 rounded-sm p-6 text-center hover:shadow-md transition-all duration-300"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.6s ease ${i * 100}ms, transform 0.6s ease ${i * 100}ms`,
              }}
            >
              <div
                className="text-3xl font-black mb-1"
                style={{ color: s.color, fontFamily: 'Space Mono, monospace' }}
              >
                <CountUp target={s.value} />
              </div>
              <div
                className="text-xs text-gray-400 tracking-widest uppercase"
                style={{ fontFamily: 'Space Mono, monospace' }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Edge Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {edges.map((e, i) => (
            <div
              key={e.title}
              className="border border-gray-100 rounded-sm p-6 hover:border-gray-300 hover:shadow-md transition-all duration-300 group"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(24px)',
                transition: `opacity 0.6s ease ${i * 120}ms, transform 0.6s ease ${i * 120}ms`,
              }}
            >
              <div className="flex items-start justify-between mb-3">
                <h3
                  className="text-lg font-bold text-[#0F1923] group-hover:text-[#16a34a] transition-colors"
                  style={{ fontFamily: 'Fraunces, serif' }}
                >
                  {e.title}
                </h3>
                <span
                  className="text-[10px] font-bold px-2 py-1 rounded-sm tracking-widest"
                  style={{
                    color: e.color,
                    backgroundColor: e.color + '15',
                    fontFamily: 'Space Mono, monospace',
                  }}
                >
                  {e.tag}
                </span>
              </div>
              <p
                className="text-sm text-gray-500 leading-relaxed mb-4"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                {e.desc}
              </p>
              <div className="opacity-50 group-hover:opacity-100 transition-opacity">
                <MiniChart data={e.chart} color={e.color} />
              </div>
            </div>
          ))}
        </div>

        {/* Publications */}
        <div className="bg-[#0F1923] rounded-sm p-8">
          <div className="flex items-center gap-3 mb-6">
            <span
              className="text-xs tracking-widest uppercase text-[#16a34a] font-semibold"
              style={{ fontFamily: 'Space Mono, monospace' }}
            >
              Research Publications
            </span>
            <div className="h-px w-16 bg-[#16a34a]" />
          </div>
          <div className="grid md:grid-cols-1 gap-4">
            {publications.map((pub, i) => (
              <a
                key={i}
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-sm px-4 py-4 hover:bg-white/10 hover:border-[#16a34a]/40 transition-colors group"
              >
                <span
                  className="text-[#16a34a] font-bold text-sm mt-0.5 shrink-0"
                  style={{ fontFamily: 'Space Mono, monospace' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <span
                    className="text-gray-200 text-sm leading-relaxed block mb-1 group-hover:text-white transition-colors"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    {pub.title}
                  </span>
                  <span
                    className="text-[#16a34a] text-xs tracking-wide"
                    style={{ fontFamily: 'Space Mono, monospace' }}
                  >
                    {pub.meta} ↗
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}