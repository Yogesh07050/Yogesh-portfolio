import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects'
import { Experience } from '@/components/experience'
import { Skills } from '@/components/skills'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navigation />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}
