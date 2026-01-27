import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
// import Blog from './pages/Blog'
import Contact from './pages/Contact'
import CaseStudyContactForm from './pages/CaseStudyContactForm'
import Footer from './components/Footer'
import SmoothScroll from './components/SmoothScroll'
import CursorFollower from './components/CursorFollower'
// import IntroOverlay from './components/IntroOverlay'
import './App.css'

function App() {
  return (
    <Router>
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
          </Routes>
          <Footer />
        </div>
      </SmoothScroll>
    </Router>
  )
}

export default App
