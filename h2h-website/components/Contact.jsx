'use client'

import { useEffect, useRef, useState } from 'react'

export default function Contact() {
  const [visible, setVisible] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const contactItems = [
    {
      icon: '🔗',
      label: 'LinkedIn',
      value: 'H TO H Partners LLP',
      href: 'https://www.linkedin.com/company/h-to-h-llp/',
    },
    {
      icon: '📍',
      label: 'Focus Market',
      value: 'Indian Equity Markets',
      href: null,
    },
    {
      icon: '🏢',
      label: 'Entity',
      value: 'H TO H Partners LLP',
      href: null,
    },
  ]

  return (
    <section id="contact" ref={ref} className="bg-[#fdf8f0] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Label */}
        <div className="flex items-center gap-3 mb-6">
          <span
            className="text-xs tracking-widest uppercase text-[#16a34a] font-semibold"
            style={{ fontFamily: 'Space Mono, monospace' }}
          >
            Get In Touch
          </span>
          <div className="h-px w-16 bg-[#16a34a]" />
        </div>

        {/* Heading */}
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div
            className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <h2
              className="text-4xl md:text-5xl font-black text-[#0F1923] leading-tight mb-6"
              style={{ fontFamily: 'Fraunces, serif' }}
            >
              Let's Build
              <br />
              <span className="text-[#16a34a]">Something</span>
              <br />
              Together
            </h2>
            <p
              className="text-gray-500 text-base leading-relaxed mb-10"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Whether you're interested in collaboration, research opportunities,
              or proprietary trading ventures — we'd love to connect. Reach out
              and let's start a conversation.
            </p>

            {/* Contact Items */}
            <div className="space-y-4 mb-10">
              {contactItems.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-white border border-gray-100 rounded-sm px-5 py-4 hover:border-[#16a34a]/30 hover:shadow-sm transition-all duration-200"
                >
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <div
                      className="text-[10px] text-gray-400 tracking-widest uppercase"
                      style={{ fontFamily: 'Space Mono, monospace' }}
                    >
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-[#0F1923] hover:text-[#16a34a] transition-colors"
                        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                      >
                        {item.value} →
                      </a>
                    ) : (
                      <div
                        className="text-sm font-semibold text-[#0F1923]"
                        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                      >
                        {item.value}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Trade Setup Style CTA Box */}
            <div className="bg-[#0F1923] rounded-sm p-5">
              <div
                className="text-[10px] text-gray-500 tracking-widest uppercase mb-3"
                style={{ fontFamily: 'Space Mono, monospace' }}
              >
                Collaboration Signal
              </div>
              <div className="space-y-2">
                {[
                  { label: 'TYPE', value: 'Research · Trading · Advisory', color: '#fff' },
                  { label: 'STATUS', value: '▲ OPEN TO CONNECT', color: '#16a34a' },
                  { label: 'MARKET', value: 'Indian Equities', color: '#f59e0b' },
                  { label: 'SIGNAL', value: '● BULLISH ON PARTNERSHIPS', color: '#16a34a' },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex justify-between items-center border-b border-gray-800 pb-2"
                  >
                    <span
                      className="text-xs text-gray-500"
                      style={{ fontFamily: 'Space Mono, monospace' }}
                    >
                      {row.label}
                    </span>
                    <span
                      className="text-xs font-bold"
                      style={{ color: row.color, fontFamily: 'Space Mono, monospace' }}
                    >
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div
            className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {submitted ? (
              <div className="bg-white border border-[#16a34a]/30 rounded-sm p-10 text-center h-full flex flex-col items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[#f0fdf4] border border-[#16a34a]/30 flex items-center justify-center text-3xl">
                  ✓
                </div>
                <h3
                  className="text-2xl font-black text-[#0F1923]"
                  style={{ fontFamily: 'Fraunces, serif' }}
                >
                  Message Sent!
                </h3>
                <p
                  className="text-gray-500 text-sm"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  Thank you for reaching out. We'll get back to you shortly.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', subject: '', message: '' }) }}
                  className="text-[#16a34a] text-sm font-semibold hover:underline mt-2"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <div className="bg-white border border-gray-100 rounded-sm p-8 shadow-sm">
                <h3
                  className="text-xl font-bold text-[#0F1923] mb-6"
                  style={{ fontFamily: 'Fraunces, serif' }}
                >
                  Send a Message
                </h3>
                <div className="space-y-4">
                  {/* Name */}
                  <div>
                    <label
                      className="text-[10px] text-gray-400 tracking-widest uppercase block mb-1.5"
                      style={{ fontFamily: 'Space Mono, monospace' }}
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm text-[#0F1923] placeholder-gray-300 focus:outline-none focus:border-[#16a34a] transition-colors"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                      suppressHydrationWarning
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      className="text-[10px] text-gray-400 tracking-widest uppercase block mb-1.5"
                      style={{ fontFamily: 'Space Mono, monospace' }}
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm text-[#0F1923] placeholder-gray-300 focus:outline-none focus:border-[#16a34a] transition-colors"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                      suppressHydrationWarning
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      className="text-[10px] text-gray-400 tracking-widest uppercase block mb-1.5"
                      style={{ fontFamily: 'Space Mono, monospace' }}
                    >
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm text-[#0F1923] focus:outline-none focus:border-[#16a34a] transition-colors bg-white"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                      suppressHydrationWarning
                    >
                      <option value="">Select a topic</option>
                      <option value="collaboration">Research Collaboration</option>
                      <option value="trading">Proprietary Trading</option>
                      <option value="advisory">Advisory</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      className="text-[10px] text-gray-400 tracking-widest uppercase block mb-1.5"
                      style={{ fontFamily: 'Space Mono, monospace' }}
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us about your interest..."
                      className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm text-[#0F1923] placeholder-gray-300 focus:outline-none focus:border-[#16a34a] transition-colors resize-none"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-[#0F1923] text-white font-semibold py-3 rounded-sm hover:bg-[#16a34a] transition-colors duration-300 text-sm tracking-wide"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    suppressHydrationWarning
                  >
                    Send Message →
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}