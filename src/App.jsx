import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
// import Blog from './pages/Blog'
import Contact from './pages/Contact'
import CaseStudyContactForm from './pages/CaseStudyContactForm'
import CaseStudyHempHop from './pages/CaseStudyHempHop'
import CaseStudyGrubwala from './pages/CaseStudyGrubwala'
import CaseStudySpotify from './pages/CaseStudySpotify'
import ExperienceRobotics from './pages/ExperienceRobotics'
import ExperienceNonTechnical from './pages/ExperienceNonTechnical'
import ExperienceSomvanshi from './pages/ExperienceSomvanshi'
import DinoGame from './pages/DinoGame'

import CursorFollower from './components/CursorFollower'
import ScrollToTop from './components/ScrollToTop'
import ScrollToTopButton from './components/ScrollToTopButton'

import WhatsAppFloat from './components/WhatsAppFloat'
// import IntroOverlay from './components/IntroOverlay'
import './App.css'
import './mobile-enhancements.css'
import './mobile-polish.css'
import './responsive.css'

function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* <IntroOverlay /> */}
      <CursorFollower />
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          {/* <Route path="/blog" element={<Blog />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/case-study" element={<CaseStudyContactForm />} />
          <Route path="/case-study/hemp-hop" element={<CaseStudyHempHop />} />
          <Route path="/case-study/grubwala" element={<CaseStudyGrubwala />} />
          <Route path="/case-study/spotify" element={<CaseStudySpotify />} />
          <Route path="/experience/robotics" element={<ExperienceRobotics />} />
          <Route path="/experience/non-technical" element={<ExperienceNonTechnical />} />
          <Route path="/experience/somvanshi" element={<ExperienceSomvanshi />} />
          <Route path="/dino-game" element={<DinoGame />} />
        </Routes>
        <WhatsAppFloat />
        <ScrollToTopButton />
      </div>
    </Router>
  )
}

export default App
