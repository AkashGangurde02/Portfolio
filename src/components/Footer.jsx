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
    // Safety fallback: ensure content is always visible if animation doesn't fire
    const ensureVisible = setTimeout(() => {
      if (headingRef.current) headingRef.current.style.opacity = '1'
      if (contentRef.current) {
        Array.from(contentRef.current.children).forEach(child => {
          child.style.opacity = '1'
          child.style.transform = 'none'
        })
      }
    }, 800)

    const ctx = gsap.context(() => {
      // Check if mobile or tablet - simplified check matching CSS breakpoint
      if (window.innerWidth <= 968) {
        return // Skip animations on mobile to ensure visibility
      }

      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top bottom', // Fire as soon as footer enters viewport
          toggleActions: 'play none none none' // Don't reverse
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      })

      if (contentRef.current && contentRef.current.children.length > 0) {
        gsap.from(contentRef.current.children, {
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top bottom', // Fire as soon as footer enters viewport
            toggleActions: 'play none none none'
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out'
        })
      }
    }, footerRef)

    return () => {
      clearTimeout(ensureVisible)
      ctx.revert()
    }
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
    <>
      <div style={{ maxWidth: '1400px', margin: '2rem auto 0', padding: '0 2rem', display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
        <div className="footer-testimonial-top">
          <div className="suggestion-box">
            <div className="testimonial-header">
              <div className="testimonial-avatar"></div>
              <span className="testimonial-name">suggestion-heading</span>
            </div>
            <p className="testimonial-text">Hover on the below heading and see the magic </p>
          </div>
        </div>
      </div>
      <footer ref={footerRef} className="footer">
        <div className="footer-container">
          {/* Tagline Section */}
          <div className="footer-tagline">
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


            {/* Center: Navigation Links */}
            <nav className="footer-nav">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="footer-nav-link">
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p className="footer-credits">
              © 2025 Akash Gangurde. | Designed best so users don't have to think.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
