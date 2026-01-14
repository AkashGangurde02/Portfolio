import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Footer.css'

gsap.registerPlugin(ScrollTrigger)

const Footer = () => {
  const currentYear = new Date().getFullYear()
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
      // Animate words sliding up
      gsap.to(wordsRef.current, {
        y: -100,
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: 'power2.in',
        onComplete: () => {
          setCurrentText('Yes, even this text was intentional 😄')
          // Wait for React to re-render with new text
          requestAnimationFrame(() => {
            // Reset position for new text
            gsap.set(wordsRef.current, { y: 100, opacity: 0 })
            // Animate new text sliding up word by word
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
      // Animate back to original text
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
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT ME', href: '#about' },
    { name: 'WORKS', href: '#works' },
    { name: 'INSIGHTS', href: '#insights' }
  ]

  const socialLinks = [
    { name: 'Twitter', icon: '𝕏', href: '#' },
    { name: 'YouTube', icon: '▶', href: '#' },
    { name: 'TikTok', icon: '♪', href: '#' },
    { name: 'Instagram', icon: '⬡', href: '#' }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle newsletter subscription
  }

  return (
    <footer
      ref={footerRef}
      className="footer"
    >
      <div className="footer-container">
        {/* Contact Section */}
        <div className="footer-contact">
          <p className="footer-subtitle">Have a nice works? lets talk with me.</p>
          <p
            ref={headingRef}
            className="footer-Heading"
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
          </p>
        </div>

        {/* Navigation and Newsletter */}
        <div ref={contentRef} className="footer-content">
          <div className="footer-left">
            <nav className="footer-nav">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="footer-nav-link">
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          <div className="footer-right">
            <div className="footer-social">
              {socialLinks.map((link) => (
                <a key={link.name} href={link.href} className="footer-social-link" aria-label={link.name}>
                  {link.icon}
                </a>
              ))}
            </div>

            <div className="footer-newsletter">
              <p className="newsletter-text">Keep up with me if you can.</p>
              <form onSubmit={handleSubmit} className="newsletter-form">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="newsletter-input"
                  required
                />
                <button type="submit" className="newsletter-submit">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Credits */}
        <div className="footer-bottom">
          <p className="footer-credits">
            © 2026 Akash Gangurde. I Designed best so users don't have to think
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
