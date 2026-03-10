import './globals.css'

export const metadata = {
  title: 'H TO H Partners LLP | Proprietary Trading Firm',
  description:
    'A research-driven proprietary trading firm committed to decoding the complexities of the stock market. Founded by experts in economic policy and finance.',
  keywords:
    'proprietary trading, stock market, equity trading, market research, quantitative analysis, Indian markets',
  openGraph: {
    title: 'H TO H Partners LLP',
    description: 'Decoding Markets. Delivering Alpha.',
    url: 'https://h2hpartners.com',
    siteName: 'H TO H Partners LLP',
    locale: 'en_IN',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;0,9..144,900;1,9..144,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}