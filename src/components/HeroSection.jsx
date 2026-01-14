import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import './HeroSection.css'
import resumePDF from '../images/Akash_Gangurde.pdf'

const HeroSection = () => {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const descRef = useRef(null)
  const socialRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.fromTo(titleRef.current, {
        y: 100,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 1.2,
        delay: 0.3
      })
        .fromTo(descRef.current, {
          y: 50,
          opacity: 0
        }, {
          y: 0,
          opacity: 1,
          duration: 0.8
        }, '-=0.6')
        .fromTo(socialRef.current.children, {
          x: -30,
          opacity: 0
        }, {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1
        }, '-=0.4')
        .fromTo(ctaRef.current, {
          scale: 0.8,
          opacity: 0
        }, {
          scale: 1,
          opacity: 1,
          duration: 0.6
        }, '-=0.4')
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 ref={titleRef} className="hero-title">
            Designing experiences— {' '}
            <span className="hero-title-highlight">so users don't have to think </span>
          </h1>

          <p ref={descRef} className="hero-description">
            I'm <strong>Akash Gangurde</strong>, a <strong>UX/UI Designer Intern</strong> at <strong>Somvanshi Technologies Pvt. Ltd.</strong>,
            focused on designing clear, user-centered web and mobile experiences through research, usability, and thoughtful design.
          </p>
        </div>

        <div className="hero-footer">
          <div ref={socialRef} className="social-links">
            <a href="https://www.linkedin.com/in/akash-gangurde-0794aa258" target="_blank" rel="noopener noreferrer" className="social-link">
              LINKEDIN
              <svg className="external-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M12 8.66667V12.6667C12 13.0203 11.8595 13.3594 11.6095 13.6095C11.3594 13.8595 11.0203 14 10.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V5.33333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.33333 4H7.33333M10 2H14M14 2V6M14 2L6.66667 9.33333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href={resumePDF} download="Akash_Gangurde_Resume.pdf" className="social-link">
              RESUME
              <svg className="external-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M12 8.66667V12.6667C12 13.0203 11.8595 13.3594 11.6095 13.6095C11.3594 13.8595 11.0203 14 10.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V5.33333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.33333 4H7.33333M10 2H14M14 2V6M14 2L6.66667 9.33333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#" className="social-link">
              DRIBBBLE
              <svg className="external-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M12 8.66667V12.6667C12 13.0203 11.8595 13.3594 11.6095 13.6095C11.3594 13.8595 11.0203 14 10.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V5.33333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.33333 4H7.33333M10 2H14M14 2V6M14 2L6.66667 9.33333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          <Link to="/contact" ref={ctaRef} className="hero-cta-btn">
            Let's Talk
            <svg className="arrow-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
