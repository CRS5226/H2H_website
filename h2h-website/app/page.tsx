import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import AboutFirm from '@/components/AboutFirm'
import WhatWeDo from '@/components/WhatWeDo'
import Founder from '@/components/Founder'
import ResearchEdge from '@/components/ResearchEdge'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import LoadingScreen from '@/components/LoadingScreen'
import ScrollProgress from '@/components/ScrollProgress'
import BackToTop from '@/components/BackToTop'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <LoadingScreen />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <AboutFirm />
      <WhatWeDo />
      <Founder />
      <ResearchEdge />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  )
}