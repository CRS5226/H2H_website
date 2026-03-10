'use client'

import { useEffect, useRef, useState } from 'react'

const services = [
  {
    number: '01',
    title: 'Proprietary Equity Trading',
    desc: 'High-conviction, research-backed equity positions across Indian markets. Every trade is driven by data, not emotion — with defined entry, target, and stop-loss levels.',
    indicators: ['Breakout Entry', 'Target: R:R 1:3', 'Stop Loss: ATR'],
    signal: '▲ BULLISH',
    signalColor: '#16a34a',
    bg: '#f0fdf4',
    border: '#16a34a',
    chart: [30, 45, 38, 55, 48, 65, 58, 75, 68, 85],
  },
  {
    number: '02',
    title: 'Research & Market Intelligence',
    desc: 'Deep-dive market research combining macroeconomic analysis, sector trends, and behavioural finance to identify high-probability setups before the market moves.',
    indicators: ['Macro Analysis', 'Sector Rotation', 'Capital Flow'],
    signal: '◉ MONITORING',
    signalColor: '#f59e0b',
    bg: '#fffbeb',
    border: '#f59e0b',
    chart: [65, 60, 55, 58, 50, 52, 45, 48, 42, 40],
  },
  {
    number: '03',
    title: 'Advanced Stock Analytics',
    desc: 'Quantitative models, factor-based analysis, and multi-timeframe backtesting to validate strategies with statistical edge before deploying capital.',
    indicators: ['RSI Divergence', 'MACD Cross', 'EMA Stack'],
    signal: '▼ CORRECTION',
    signalColor: '#0ea5e9',
    bg: '#f0f9ff',
    border: '#0ea5e9',
    chart: [78, 72, 75, 68, 65, 60, 62, 55, 50, 45],
  },
  {
    number: '04',
    title: 'Academic-to-Market Bridge',
    desc: 'Translating peer-reviewed economic research and volatility models into actionable trading strategies — a rare combination of institutional-grade thinking and live execution.',
    indicators: ['Volatility Models', 'Policy Impact', 'Trend Analytics'],
    signal: '◈ RESEARCH',
    signalColor: '#6366f1',
    bg: '#eef2ff',
    border: '#6366f1',
    chart: [60, 58, 62, 65, 63, 68, 70, 67, 72, 75],
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

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-10" preserveAspectRatio="none">
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Last point dot */}
      <circle
        cx={(((data.length - 1) / (data.length - 1)) * w)}
        cy={h - ((data[data.length - 1] - min) / range) * h}
        r="3"
        fill={color}
      />
    </svg>
  )
}

export default function WhatWeDo() {
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
    <section id="services" ref={ref} className="bg-[#0F1923] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Label */}
        <div className="flex items-center gap-3 mb-6">
          <span
            className="text-xs tracking-widest uppercase text-[#16a34a] font-semibold"
            style={{ fontFamily: 'Space Mono, monospace' }}
          >
            What We Do
          </span>
          <div className="h-px w-16 bg-[#16a34a]" />
        </div>

        {/* Heading */}
        <div className="grid md:grid-cols-2 gap-10 items-end mb-16">
          <h2
            className={`text-4xl md:text-5xl font-black text-white leading-tight transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ fontFamily: 'Fraunces, serif' }}
          >
            Our Core
            <br />
            <span className="text-[#16a34a]">Capabilities</span>
          </h2>
          <p
            className={`text-gray-400 text-base leading-relaxed transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            Four pillars that define our approach to proprietary trading —
            each grounded in research, precision, and a relentless pursuit of edge.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <div
              key={s.number}
              className="bg-[#141e2b] border border-gray-800 rounded-sm p-6 hover:border-gray-600 transition-all duration-300 group"
              style={{
                transitionDelay: `${i * 100}ms`,
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(24px)',
                transition: `opacity 0.6s ease ${i * 100}ms, transform 0.6s ease ${i * 100}ms, border-color 0.3s ease`,
              }}
            >
              {/* Top Row */}
              <div className="flex items-start justify-between mb-4">
                <span
                  className="text-4xl font-black text-gray-800 group-hover:text-gray-700 transition-colors"
                  style={{ fontFamily: 'Space Mono, monospace' }}
                >
                  {s.number}
                </span>
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full border"
                  style={{
                    color: s.signalColor,
                    borderColor: s.signalColor + '40',
                    backgroundColor: s.signalColor + '15',
                    fontFamily: 'Space Mono, monospace',
                  }}
                >
                  {s.signal}
                </span>
              </div>

              {/* Title */}
              <h3
                className="text-xl font-bold text-white mb-3 group-hover:text-[#16a34a] transition-colors"
                style={{ fontFamily: 'Fraunces, serif' }}
              >
                {s.title}
              </h3>

              {/* Description */}
              <p
                className="text-gray-400 text-sm leading-relaxed mb-5"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                {s.desc}
              </p>

              {/* Mini Chart */}
              <div className="mb-5 opacity-60 group-hover:opacity-100 transition-opacity h-10 overflow-hidden">
                <MiniChart data={s.chart} color={s.signalColor} />
              </div>

              {/* Indicator Tags */}
              <div className="flex flex-wrap gap-2">
                {s.indicators.map((ind) => (
                  <span
                    key={ind}
                    className="text-[10px] font-semibold px-2.5 py-1 rounded-sm tracking-widest uppercase"
                    style={{
                      color: s.signalColor,
                      backgroundColor: s.signalColor + '15',
                      fontFamily: 'Space Mono, monospace',
                    }}
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}