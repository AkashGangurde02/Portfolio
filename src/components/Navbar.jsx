import { useEffect, useRef } from 'react'
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
        
        <ul ref={linksRef} className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/#work">Work</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>
        
        {!isContactPage && (
          <Link ref={btnRef} to="/contact" className="lets-talk-btn">
            Let's Talk
            <svg className="arrow-icon" width="16" height="16" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Navbar
