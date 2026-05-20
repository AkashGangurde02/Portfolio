import HeroSection from '../components/HeroSection'
import MarqueeStrip from '../components/MarqueeStrip'
import WorksSection from '../components/WorksSection'
import SkillsSection from '../components/SkillsSection'
import ProcessSection from '../components/ProcessSection'
import AboutSection from '../components/AboutSection'
import ExperienceSection from '../components/ExperienceSection'
import CompanyFeedback from '../components/CompanyFeedback'
// import ExperienceSnapshot from '../components/ExperienceSnapshot'
import Footer from '../components/Footer'
import ImpactSection from '../components/ImpactSection'

const Home = () => {
  return (
    <>
      <HeroSection />
      <MarqueeStrip />
      <AboutSection />
      <WorksSection />
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
