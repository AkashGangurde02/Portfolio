import HeroSection from '../components/HeroSection'
import WorksSection from '../components/WorksSection'
import SkillsSection from '../components/SkillsSection'
import ProcessSection from '../components/ProcessSection'
import AboutSection from '../components/AboutSection'
import InsightsSection from '../components/InsightsSection'

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WorksSection />
      {/* <SkillsSection /> */}
      {/* <ProcessSection /> */}
      <InsightsSection />
    </>
  )
}

export default Home
