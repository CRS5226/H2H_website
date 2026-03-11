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

/* StatItem — commented out (stats bar hidden)
function StatItem({ stat, triggered }) {
  const [display, setDisplay] = useState(stat.numeric ? 0 : stat.value)

  useEffect(() => {
    if (!triggered || !stat.numeric) return
    const target = stat.value
    const duration = 1800
    const start = performance.now()
    const frame = (now) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(frame)
    }
    requestAnimationFrame(frame)
  }, [triggered, stat.numeric, stat.value])

  return (
    <div className="text-center">
      <div className="text-2xl font-bold text-[#0F1923]" style={{ fontFamily: 'Fraunces, serif' }}>
        {stat.numeric ? `${display}${stat.suffix}` : stat.value}
      </div>
      <div className="text-xs text-gray-400 tracking-widest uppercase mt-0.5" style={{ fontFamily: 'Space Mono, monospace' }}>
        {stat.label}
      </div>
    </div>
  )
}
*/

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
      <div className="absolute right-17 top-0 bottom-0 w-3/5 hidden lg:flex items-center justify-end pointer-events-none" style={{ opacity: 0.85 }}>
        <svg
          viewBox="0 0 600 420"
          className="w-full max-w-3xl h-auto candle-animate"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Grid lines - subtle */}
          <line x1="0" y1="100" x2="560" y2="100" stroke="#e5e7eb" strokeWidth="0.5" opacity="0.4" />
          <line x1="0" y1="180" x2="560" y2="180" stroke="#e5e7eb" strokeWidth="0.5" opacity="0.4" />
          <line x1="0" y1="260" x2="560" y2="260" stroke="#e5e7eb" strokeWidth="0.5" opacity="0.4" />
          <line x1="0" y1="320" x2="560" y2="320" stroke="#e5e7eb" strokeWidth="0.5" opacity="0.4" />

          {/* === PHASE 1: Consolidation (candles 1-5, sideways, small bodies) === */}
          {/* Candle 1 - bear, small */}
          <line x1="40" y1="290" x2="40" y2="320" stroke="#dc2626" strokeWidth="1.5" />
          <rect x="30" y="298" width="20" height="12" fill="#dc2626" rx="1" />

          {/* Candle 2 - bull, small */}
          <line x1="80" y1="285" x2="80" y2="318" stroke="#16a34a" strokeWidth="1.5" />
          <rect x="70" y="293" width="20" height="14" fill="#16a34a" rx="1" />

          {/* Candle 3 - bear, small */}
          <line x1="120" y1="288" x2="120" y2="322" stroke="#dc2626" strokeWidth="1.5" />
          <rect x="110" y="296" width="20" height="13" fill="#dc2626" rx="1" />

          {/* Candle 4 - bull, small */}
          <line x1="160" y1="284" x2="160" y2="316" stroke="#16a34a" strokeWidth="1.5" />
          <rect x="150" y="292" width="20" height="13" fill="#16a34a" rx="1" />

          {/* Candle 5 - bear, small — last consolidation candle */}
          <line x1="200" y1="287" x2="200" y2="319" stroke="#dc2626" strokeWidth="1.5" />
          <rect x="190" y="295" width="20" height="12" fill="#dc2626" rx="1" />

          {/* === ENTRY LINE — price is at this level before breakout === */}
          <line x1="20" y1="290" x2="560" y2="290"
            stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="5,4" opacity="0.9" />
          <text x="565" y="294" fill="#f59e0b" fontSize="10" fontFamily="Space Mono">ENTRY</text>

          {/* === STOPLOSS LINE — well below, never touched === */}
          <line x1="20" y1="350" x2="560" y2="350"
            stroke="#dc2626" strokeWidth="1.5" strokeDasharray="5,4" opacity="0.8" />
          <text x="565" y="354" fill="#dc2626" fontSize="10" fontFamily="Space Mono">SL</text>

          {/* === TARGET LINE — up top, price heading here === */}
          <line x1="20" y1="110" x2="560" y2="110"
            stroke="#16a34a" strokeWidth="1.5" strokeDasharray="5,4" opacity="0.9" />
          <text x="565" y="114" fill="#16a34a" fontSize="10" fontFamily="Space Mono">TARGET</text>

          {/* === PHASE 2: Breakout candle (candle 6 - big bull, breaks entry) === */}
          <line x1="240" y1="268" x2="240" y2="310" stroke="#16a34a" strokeWidth="2" />
          <rect x="230" y="272" width="20" height="30" fill="#16a34a" rx="1" />

          {/* === PHASE 3: Strong rally candles (7-12, all bullish, heading to target) === */}
          {/* Candle 7 - strong bull */}
          <line x1="280" y1="238" x2="280" y2="275" stroke="#16a34a" strokeWidth="2" />
          <rect x="270" y="242" width="20" height="28" fill="#16a34a" rx="1" />

          {/* Candle 8 - strong bull */}
          <line x1="320" y1="205" x2="320" y2="245" stroke="#16a34a" strokeWidth="2" />
          <rect x="310" y="209" width="20" height="30" fill="#16a34a" rx="1" />

          {/* Candle 9 - small pullback bear (healthy) */}
          <line x1="360" y1="200" x2="360" y2="230" stroke="#dc2626" strokeWidth="1.5" />
          <rect x="350" y="207" width="20" height="14" fill="#dc2626" rx="1" />

          {/* Candle 10 - strong bull resumes */}
          <line x1="400" y1="168" x2="400" y2="208" stroke="#16a34a" strokeWidth="2" />
          <rect x="390" y="172" width="20" height="30" fill="#16a34a" rx="1" />

          {/* Candle 11 - bull, near target */}
          <line x1="440" y1="140" x2="440" y2="175" stroke="#16a34a" strokeWidth="2" />
          <rect x="430" y="144" width="20" height="25" fill="#16a34a" rx="1" />

          {/* Candle 12 - last bull, hits target zone */}
          <line x1="480" y1="112" x2="480" y2="148" stroke="#16a34a" strokeWidth="2" />
          <rect x="470" y="116" width="20" height="26" fill="#16a34a" rx="1" />

          {/* EMA 200 line - rising, confirming trend */}
          <polyline
            points="40,318 80,315 120,314 160,312 200,311 240,300 280,280 320,255 360,238 400,210 440,185 480,158"
            fill="none"
            stroke="#6366f1"
            strokeWidth="2"
            strokeDasharray="6,3"
            opacity="0.7"
          />

          {/* EMA label */}
          <text x="490" y="155" fill="#6366f1" fontSize="9" fontFamily="Space Mono" opacity="0.8">EMA</text>

          {/* Breakout arrow pointing up */}
          <polygon
            points="240,250 234,265 246,265"
            fill="#16a34a"
            opacity="0.9"
          />

          {/* Target reached glow circle */}
          <circle cx="480" cy="115" r="8" fill="#16a34a" opacity="0.15" />
          <circle cx="480" cy="115" r="4" fill="#16a34a" opacity="0.4" />

        </svg>
      </div>

      {/* Ticker Tape */}
      <div style={{ width: '100%', backgroundColor: '#0F1923', overflow: 'hidden', height: '50px', display: 'flex', alignItems: 'center', position: 'relative', zIndex: 10 }}>
        <div className="ticker-animate" style={{ display: 'flex', alignItems: 'center', height: '50px' }}>
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span
              key={i}
              style={{
                fontFamily: 'Space Mono, monospace',
                display: 'inline-flex',
                alignItems: 'center',
                height: '50px',
                gap: '4px',
                paddingLeft: '24px',
                paddingRight: '24px',
                fontSize: '13px',
                whiteSpace: 'nowrap',
                lineHeight: 1,
              }}
            >
              <span style={{ color: '#9ca3af' }}>{item.label}</span>
              <span style={{ color: '#ffffff', fontWeight: 'bold' }}>{item.value}</span>
              <span style={{ color: item.up ? '#16a34a' : '#dc2626' }}>{item.change}</span>
              <span style={{ color: '#4b5563', marginLeft: '16px' }}>|</span>
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

      {/* Bottom Stats Bar — commented out
      <div className="relative z-10 border-t border-gray-100 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Years of Research', value: 5, suffix: '+', numeric: true },
            { label: 'Strategies Tested', value: 120, suffix: '+', numeric: true },
            { label: 'Publications', value: 3, suffix: '', numeric: true },
            { label: 'Market Focus', value: 'NSE · BSE', suffix: '', numeric: false },
          ].map((stat) => (
            <StatItem key={stat.label} stat={stat} triggered={mounted} />
          ))}
        </div>
      </div>
      */}
    </section>
  )
}