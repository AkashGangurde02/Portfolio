import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Footer.css'

gsap.registerPlugin(ScrollTrigger)

const Footer = () => {
  const footerRef = useRef(null)
  const headingRef = useRef(null)
  const contentRef = useRef(null)
  const wordsRef = useRef([])
  const [isHovered, setIsHovered] = useState(false)
  const [currentText, setCurrentText] = useState('Good design disappears. Great UX remains.')

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 95%',
          toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      })

      gsap.from(contentRef.current.children, {
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 95%',
          toggleActions: 'play none none reverse'
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      })
    }, footerRef)

    return () => ctx.revert()
  }, [])

  // Word slide-up animation on hover
  useEffect(() => {
    if (isHovered) {
      gsap.to(wordsRef.current, {
        y: -100,
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: 'power2.in',
        onComplete: () => {
          setCurrentText('Yes, even this text was intentional 😄')
          requestAnimationFrame(() => {
            gsap.set(wordsRef.current, { y: 100, opacity: 0 })
            gsap.to(wordsRef.current, {
              y: 0,
              opacity: 1,
              duration: 0.5,
              stagger: 0.05,
              ease: 'power2.out'
            })
          })
        }
      })
    } else {
      gsap.to(wordsRef.current, {
        y: -100,
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: 'power2.in',
        onComplete: () => {
          setCurrentText('Good design disappears. Great UX remains.')
          requestAnimationFrame(() => {
            gsap.set(wordsRef.current, { y: 100, opacity: 0 })
            gsap.to(wordsRef.current, {
              y: 0,
              opacity: 1,
              duration: 0.5,
              stagger: 0.05,
              ease: 'power2.out'
            })
          })
        }
      })
    }
  }, [isHovered])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About me', href: '#about' },
    { name: 'Works', href: '#works' },
    { name: 'Insights', href: '#insights' }
  ]

  return (
    <footer ref={footerRef} className="footer">
      <div className="footer-container">
        {/* Tagline Section */}
        <div className="footer-tagline">
          <p className="footer-subtitle">Have a nice works? lets talk with me.</p>
          <h2
            ref={headingRef}
            className="footer-heading"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className="heading-text-wrapper">
              {currentText.split(' ').map((word, index) => (
                <span
                  key={`${word}-${index}`}
                  className="word-wrapper"
                  ref={(el) => (wordsRef.current[index] = el)}
                >
                  {word}
                  {index < currentText.split(' ').length - 1 && ' '}
                </span>
              ))}
            </span>
          </h2>
        </div>

        {/* Main Footer Content */}
        <div ref={contentRef} className="footer-main">
          {/* Left: Avatar and Name */}
          <div className="footer-brand">
            <div className="footer-avatar">
              <div className="avatar-circle"></div>
            </div>
            <p className="footer-name">Akash</p>
          </div>

          {/* Center: Navigation Links */}
          <nav className="footer-nav">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="footer-nav-link">
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right: Testimonial Card */}
          <div className="footer-testimonial">
            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar"></div>
                <span className="testimonial-name">Akash</span>
              </div>
              <p className="testimonial-text">Trust the people who trusted me for my work</p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="footer-credits">
            © 2025 Akash Gangurde. | Designed best so users don't have to think.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
