import HeroSection from '../components/HeroSection'
import MarqueeStrip from '../components/MarqueeStrip'
import WorksSection from '../components/WorksSection'
import SkillsSection from '../components/SkillsSection'
import ProcessSection from '../components/ProcessSection'
import AboutSection from '../components/AboutSection'
import ExperienceSection from '../components/ExperienceSection'
import CompanyFeedback from '../components/CompanyFeedback'
import InsightsSection from '../components/InsightsSection'
import Footer from '../components/Footer'
import HomeSubNavbar from '../components/HomeSubNavbar'
import ImpactSection from '../components/ImpactSection'

const Home = () => {
  return (
    <>
      <HeroSection />
      <MarqueeStrip />
      <AboutSection />
      <ExperienceSection />
      <WorksSection />
      {/* <ImpactSection /> */}
      {/* <SkillsSection /> */}
      {/* <ProcessSection /> */}
      <CompanyFeedback />
      {/* Blog / Insights — minimized, low priority */}
      <div className="insights-minimized-wrapper">
        <InsightsSection />
      </div>
      <Footer />
      <HomeSubNavbar />
    </>
  )
}

export default Home
