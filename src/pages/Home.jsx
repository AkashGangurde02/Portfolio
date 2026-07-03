import { useSEO } from '../hooks/useSEO'
import HeroSection from '../components/HeroSection'
import MarqueeStrip from '../components/MarqueeStrip'
import WorksSection from '../components/WorksSection'
import SpotifyCasePreview from '../components/SpotifyCasePreview'
import SkillsSection from '../components/SkillsSection'
import ProcessSection from '../components/ProcessSection'
import AboutSection from '../components/AboutSection'
import ExperienceSection from '../components/ExperienceSection'
import CompanyFeedback from '../components/CompanyFeedback'
// import ExperienceSnapshot from '../components/ExperienceSnapshot'
import Footer from '../components/Footer'
import ImpactSection from '../components/ImpactSection'

const Home = () => {
  useSEO({
    title: 'Akash Gangurde – UX/UI Designer Portfolio',
    description: 'Award-winning UX/UI designer crafting mobile-first digital products. Explore case studies in product design, interaction design, food-tech, and music.',
    canonical: '/',
    ogImage: '/og/og-default.png',
  })
  return (
    <>
      <HeroSection />
      <MarqueeStrip />
      <AboutSection />
      <WorksSection />
      <SpotifyCasePreview />
      {/* <ExperienceSnapshot /> */}
      <ExperienceSection />
      {/* <ImpactSection /> */}
      {/* <SkillsSection /> */}
      {/* <ProcessSection /> */}
      <CompanyFeedback />
      <Footer />
    </>
  )
}

export default Home
