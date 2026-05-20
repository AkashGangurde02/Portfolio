import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import gsap from 'gsap'
import './Navbar.css'
import resumePDF from '../images/Akash_Gangurde.pdf'

const Navbar = () => {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const isContactPage = location.pathname === '/contact'
  const navRef = useRef(null)
  const logoRef = useRef(null)
  const linksRef = useRef(null)
  const btnRef = useRef(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isPastThreshold, setIsPastThreshold] = useState(false)
  const [isNavHidden, setIsNavHidden] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      const subNav = document.querySelector('.home-sub-navbar.sub-nav-visible')

      setIsScrolled(currentY > 50)
      setIsPastThreshold(currentY > 600)

      if (subNav) {
        // Scrolling down past the sub-navbar trigger → hide main navbar
        if (currentY > lastScrollY.current && currentY > 400) {
          setIsNavHidden(true)
        } else {
          // Scrolling up → reveal main navbar
          setIsNavHidden(false)
        }
      } else {
        setIsNavHidden(false)
      }

      lastScrollY.current = currentY
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [location])

  const showLetsTalk = !isHomePage || isPastThreshold

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
    <nav ref={navRef} className={`navbar ${isScrolled ? 'scrolled' : ''} ${isNavHidden ? 'nav-hidden' : ''}`}>
      <div className="navbar-container">
        <Link ref={logoRef} to="/" className="navbar-logo">
          Akash <span className="logo-year">2026</span>
        </Link>

        <ul ref={linksRef} className={`navbar-links ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About me</Link></li>
          <li><Link to="/work" onClick={() => setIsMobileMenuOpen(false)}>Works</Link></li>
          <li className="mobile-only">
            <a href="https://www.linkedin.com/in/akash-gangurde-0794aa258" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)}>
              LinkedIn
              <svg className="external-icon" viewBox="0 0 16 16" fill="none" width="14" height="14" style={{ marginLeft: '6px', display: 'inline-block', verticalAlign: 'middle' }}>
                <path d="M12 8.66667V12.6667C12 13.0203 11.8595 13.3594 11.6095 13.6095C11.3594 13.8595 11.0203 14 10.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V5.33333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.33333 4H7.33333M10 2H14M14 2V6M14 2L6.66667 9.33333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </li>
          <li className="mobile-only">
            <a href={resumePDF} target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)}>
              Resume
              <svg className="external-icon" viewBox="0 0 16 16" fill="none" width="14" height="14" style={{ marginLeft: '6px', display: 'inline-block', verticalAlign: 'middle' }}>
                <path d="M12 8.66667V12.6667C12 13.0203 11.8595 13.3594 11.6095 13.6095C11.3594 13.8595 11.0203 14 10.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V5.33333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.33333 4H7.33333M10 2H14M14 2V6M14 2L6.66667 9.33333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </li>
          <li><Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Let's Talk</Link></li>
        </ul>

        <div
          ref={btnRef}
          className="navbar-actions"
        >
          <a
            href="https://www.linkedin.com/in/akash-gangurde-0794aa258"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-btn secondary"
          >
            LinkedIn
            <svg className="external-icon" viewBox="0 0 16 16" fill="none" width="14" height="14" style={{ marginLeft: '6px', display: 'inline-block', verticalAlign: 'middle' }}>
              <path d="M12 8.66667V12.6667C12 13.0203 11.8595 13.3594 11.6095 13.6095C11.3594 13.8595 11.0203 14 10.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V5.33333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.33333 4H7.33333M10 2H14M14 2V6M14 2L6.66667 9.33333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href={resumePDF}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-btn secondary"
          >
            Resume
            <svg className="external-icon" viewBox="0 0 16 16" fill="none" width="14" height="14" style={{ marginLeft: '6px', display: 'inline-block', verticalAlign: 'middle' }}>
              <path d="M12 8.66667V12.6667C12 13.0203 11.8595 13.3594 11.6095 13.6095C11.3594 13.8595 11.0203 14 10.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V5.33333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.33333 4H7.33333M10 2H14M14 2V6M14 2L6.66667 9.33333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <Link
            to="/contact"
            className="lets-talk-btn"
            style={{
              opacity: showLetsTalk ? 1 : 0,
              visibility: showLetsTalk ? 'visible' : 'hidden',
              pointerEvents: showLetsTalk ? 'auto' : 'none',
              transform: showLetsTalk ? 'translateX(0)' : 'translateX(15px)',
              width: showLetsTalk ? 'auto' : '0',
              paddingLeft: showLetsTalk ? '24px' : '0',
              paddingRight: showLetsTalk ? '24px' : '0',
              marginLeft: showLetsTalk ? '0' : '-12px',
              borderWidth: showLetsTalk ? '1.5px' : '0px',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            Let's Talk
            <svg className="arrow-icon" width="16" height="16" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

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
