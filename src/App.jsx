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
import ExperienceRobotics from './pages/ExperienceRobotics'
import ExperienceNonTechnical from './pages/ExperienceNonTechnical'
import ExperienceSomvanshi from './pages/ExperienceSomvanshi'
import DinoGame from './pages/DinoGame'
import Footer from './components/Footer'
import SmoothScroll from './components/SmoothScroll'
import CursorFollower from './components/CursorFollower'
import ScrollToTop from './components/ScrollToTop'
import PasswordProtectedRoute from './components/PasswordProtectedRoute'
// import IntroOverlay from './components/IntroOverlay'
import './App.css'
import './mobile-enhancements.css'
import './mobile-polish.css'

function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* <IntroOverlay /> */}
      <CursorFollower />
      <SmoothScroll>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            {/* <Route path="/blog" element={<Blog />} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/case-study/contact-form" element={<CaseStudyContactForm />} />
            <Route path="/case-study/hemp-hop" element={
              <PasswordProtectedRoute>
                <CaseStudyHempHop />
              </PasswordProtectedRoute>
            } />
            <Route path="/case-study/grubwala" element={
              <PasswordProtectedRoute>
                <CaseStudyGrubwala />
              </PasswordProtectedRoute>
            } />
            <Route path="/experience/robotics" element={<ExperienceRobotics />} />
            <Route path="/experience/non-technical" element={<ExperienceNonTechnical />} />
            <Route path="/experience/somvanshi" element={<ExperienceSomvanshi />} />
            <Route path="/dino-game" element={<DinoGame />} />
          </Routes>
          <Footer />
        </div>
      </SmoothScroll>
    </Router>
  )
}

export default App
