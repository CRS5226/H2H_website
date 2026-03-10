'use client'

import { useEffect, useState } from 'react'

const tickerItems = [
  { label: 'NIFTY 50', value: '24,850.30', change: '+1.2%', up: true },
  { label: 'SENSEX', value: '81,200.45', change: '+0.9%', up: true },
  { label: 'BANKNIFTY', value: '52,340.10', change: '+1.5%', up: true },
  { label: 'RSI', value: '58.4', change: 'Neutral', up: true },
  { label: 'MACD', value: 'Bullish Cross', change: '▲', up: true },
  { label: 'EMA 200', value: 'Above', change: 'Strong', up: true },
  { label: 'ATR', value: '142.5', change: 'Moderate', up: true },
  { label: 'RELIANCE', value: '2,945.60', change: '+0.7%', up: true },
  { label: 'INFY', value: '1,823.40', change: '-0.3%', up: false },
  { label: 'TCS', value: '4,102.75', change: '+0.5%', up: true },
]

const candles = [
  { x: 40,  open: 180, close: 140, high: 190, low: 130, bull: false },
  { x: 80,  open: 140, close: 175, high: 185, low: 130, bull: true  },
  { x: 120, open: 175, close: 160, high: 185, low: 150, bull: false },
  { x: 160, open: 160, close: 200, high: 210, low: 155, bull: true  },
  { x: 200, open: 200, close: 185, high: 215, low: 175, bull: false },
  { x: 240, open: 185, close: 230, high: 240, low: 180, bull: true  },
  { x: 280, open: 230, close: 210, high: 245, low: 200, bull: false },
  { x: 320, open: 210, close: 255, high: 265, low: 205, bull: true  },
  { x: 360, open: 255, close: 240, high: 270, low: 230, bull: false },
  { x: 400, open: 240, close: 280, high: 290, low: 235, bull: true  },
  { x: 440, open: 280, close: 260, high: 295, low: 250, bull: false },
  { x: 480, open: 260, close: 300, high: 310, low: 255, bull: true  },
]

const indicators = [
  { label: 'RSI', value: '58.4', color: '#f59e0b' },
  { label: 'MACD', value: '▲ Bullish', color: '#16a34a' },
  { label: 'EMA 200', value: 'Above', color: '#16a34a' },
  { label: 'ATR', value: '142.5', color: '#6366f1' },
  { label: 'Breakout', value: '✓ Confirmed', color: '#16a34a' },
  { label: 'Signal', value: '● Bullish', color: '#16a34a' },
]

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden bg-white pt-16"
    >
      {/* Background Candlestick Chart SVG */}
      <div className="absolute right-0 top-0 bottom-0 w-3/5 flex items-center justify-end pointer-events-none" style={{ opacity: 0.85 }}>
        <svg
          viewBox="0 0 560 400"
          className="w-full max-w-3xl h-auto candle-animate"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* EMA line */}
          <polyline
            points="40,175 80,162 120,168 160,152 200,158 240,140 280,145 320,128 360,135 400,118 440,125 480,108"
            fill="none"
            stroke="#16a34a"
            strokeWidth="2"
            strokeDasharray="6,3"
            opacity="0.8"
          />
          {candles.map((c, i) => {
            const bodyTop = Math.min(c.open, c.close)
            const bodyHeight = Math.abs(c.close - c.open)
            return (
              <g key={i}>
                {/* Wick */}
                <line
                  x1={c.x} y1={c.high}
                  x2={c.x} y2={c.low}
                  stroke={c.bull ? '#16a34a' : '#dc2626'}
                  strokeWidth="2.5"
                />
                {/* Body */}
                <rect
                  x={c.x - 10}
                  y={bodyTop}
                  width={20}
                  height={Math.max(bodyHeight, 4)}
                  fill={c.bull ? '#16a34a' : '#dc2626'}
                  rx="1"
                />
              </g>
            )
          })}
          {/* Entry line */}
          <line x1="300" y1="210" x2="500" y2="210"
            stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4,3" opacity="0.9" />
          <text x="505" y="214" fill="#f59e0b" fontSize="10" fontFamily="Space Mono">ENTRY</text>

          {/* Target line */}
          <line x1="300" y1="100" x2="500" y2="100"
            stroke="#16a34a" strokeWidth="1.5" strokeDasharray="4,3" opacity="0.9" />
          <text x="505" y="104" fill="#16a34a" fontSize="10" fontFamily="Space Mono">TARGET</text>

          {/* Stoploss line */}
          <line x1="300" y1="260" x2="500" y2="260"
            stroke="#dc2626" strokeWidth="1.5" strokeDasharray="4,3" opacity="0.9" />
          <text x="505" y="264" fill="#dc2626" fontSize="10" fontFamily="Space Mono">SL</text>
        </svg>
      </div>

      {/* Ticker Tape */}
      <div style={{ width: '100%', backgroundColor: '#0F1923', overflow: 'hidden', height: '44px', display: 'flex', alignItems: 'center', position: 'relative', zIndex: 10 }}>
        <div className="ticker-animate" style={{ display: 'flex', alignItems: 'center', lineHeight: 1 }}>
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-1 px-6 text-xs whitespace-nowrap"
              style={{ fontFamily: 'Space Mono, monospace' }}
            >
              <span className="text-gray-400">{item.label}</span>
              <span className="text-white font-bold">{item.value}</span>
              <span className={item.up ? 'text-[#16a34a]' : 'text-[#dc2626]'}>
                {item.change}
              </span>
              <span className="text-gray-600 ml-4">|</span>
            </span>
          ))}
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full py-20">
          <div className="max-w-3xl">

            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 bg-[#f0fdf4] border border-[#16a34a]/30 text-[#16a34a] text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ fontFamily: 'Space Mono, monospace' }}
            >
              <span className="w-2 h-2 rounded-full blink-green inline-block" />
              Proprietary Trading · Indian Equity Markets
            </div>

            {/* Headline */}
            <h1
              className={`text-6xl md:text-8xl font-black text-[#0F1923] leading-none mb-6 transition-all duration-700 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ fontFamily: 'Fraunces, serif' }}
            >
              Decoding
              <br />
              <span className="text-[#16a34a]">Markets.</span>
              <br />
              Delivering
              <br />
              <span className="italic">Alpha.</span>
            </h1>

            {/* Subtext */}
            <p
              className={`text-lg text-gray-500 max-w-xl leading-relaxed mb-10 transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              A research-driven proprietary trading firm combining deep academic
              insight with real-time market execution to generate consistent returns
              across Indian equity markets.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-wrap gap-4 mb-16 transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <a
                href="#about"
                className="bg-[#0F1923] text-white font-semibold px-8 py-3 rounded-sm hover:bg-[#16a34a] transition-colors duration-300 text-sm tracking-wide"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                Explore Our Approach →
              </a>
              <a
                href="#contact"
                className="border border-[#0F1923] text-[#0F1923] font-semibold px-8 py-3 rounded-sm hover:bg-[#0F1923] hover:text-white transition-colors duration-300 text-sm tracking-wide"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                Get In Touch
              </a>
            </div>

            {/* Indicator Badges */}
            <div
              className={`flex flex-wrap gap-3 transition-all duration-700 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              {indicators.map((ind) => (
                <div
                  key={ind.label}
                  className="flex items-center gap-2 bg-white border border-gray-200 rounded-sm px-3 py-1.5 shadow-sm"
                >
                  <span
                    className="text-[10px] text-gray-400 tracking-widest uppercase"
                    style={{ fontFamily: 'Space Mono, monospace' }}
                  >
                    {ind.label}
                  </span>
                  <span
                    className="text-xs font-bold"
                    style={{ color: ind.color, fontFamily: 'Space Mono, monospace' }}
                  >
                    {ind.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Stats Bar */}
      <div className="relative z-10 border-t border-gray-100 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Focus Market', value: 'Indian Equities' },
            { label: 'Strategy Type', value: 'Proprietary' },
            { label: 'Research Base', value: 'Quantitative' },
            { label: 'Founded By', value: 'MPhil Economics' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-lg font-bold text-[#0F1923]"
                style={{ fontFamily: 'Fraunces, serif' }}
              >
                {stat.value}
              </div>
              <div
                className="text-xs text-gray-400 tracking-widest uppercase mt-0.5"
                style={{ fontFamily: 'Space Mono, monospace' }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}