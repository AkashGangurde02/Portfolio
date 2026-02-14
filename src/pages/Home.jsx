import HeroSection from '../components/HeroSection'
import MarqueeStrip from '../components/MarqueeStrip'
import WorksSection from '../components/WorksSection'
import SkillsSection from '../components/SkillsSection'
import ProcessSection from '../components/ProcessSection'
import AboutSection from '../components/AboutSection'
import ExperienceSection from '../components/ExperienceSection'
import CompactCardsSection from '../components/CompactCardsSection'
import InsightsSection from '../components/InsightsSection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <HeroSection />
      <MarqueeStrip />
      <AboutSection />
      <ExperienceSection />
      <WorksSection />
      {/* <SkillsSection /> */}
      {/* <ProcessSection /> */}
      <CompactCardsSection />
      <InsightsSection />
      <Footer />
    </>
  )
}

export default Home
