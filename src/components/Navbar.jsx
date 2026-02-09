import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import gsap from 'gsap'
import './Navbar.css'

const Navbar = () => {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const isContactPage = location.pathname === '/contact'
  const navRef = useRef(null)
  const logoRef = useRef(null)
  const linksRef = useRef(null)
  const btnRef = useRef(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.from(logoRef.current, {
        x: -30,
        opacity: 0,
        duration: 0.6
      })
        .from(linksRef.current?.children || [], {
          y: -20,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1
        }, '-=0.4')

      if (btnRef.current) {
        tl.from(btnRef.current, {
          x: 30,
          opacity: 0,
          duration: 0.6
        }, '-=0.5')
      }
    }, navRef)

    return () => ctx.revert()
  }, [location])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav ref={navRef} className="navbar">
      <div className="navbar-container">
        <Link ref={logoRef} to="/" className="navbar-logo">
          Akash <span className="logo-year">2026</span>
        </Link>

        <ul ref={linksRef} className={`navbar-links ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
          <li><Link to="/work" onClick={() => setIsMobileMenuOpen(false)}>Work</Link></li>
          <li><Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link></li>
          <li><Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Let's Talk</Link></li>
          {/* <li><Link to="/blog">Blog</Link></li> */}
        </ul>

        <Link to="/contact" className="lets-talk-btn" style={{ opacity: 1 }}>
          Let's Talk
          <svg className="arrow-icon" width="16" height="16" viewBox="0 0 20 20" fill="none">
            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>

        {/* Hamburger Menu Icon (Mobile Only) */}
        <button
          className={`hamburger-menu ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
