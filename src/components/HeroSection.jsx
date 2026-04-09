import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import './HeroSection.css'
import './HeroSectionNewButtons.css'
import resumePDF from '../images/Akash_Gangurde.pdf'
import profileImage from '../images/profile/about-image.jpg'
import HireMeModal from './HireMeModal'

const HeroSection = () => {
  const [isHireModalOpen, setIsHireModalOpen] = useState(false)
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const imageRef = useRef(null)
  const descRef = useRef(null)
  const socialRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.fromTo(titleRef.current, {
        y: 80,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 1.1,
        delay: 0.2
      })
        .fromTo(imageRef.current, {
          y: 40,
          opacity: 0,
          scale: 0.97
        }, {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7
        }, '-=0.7')
        .fromTo(descRef.current, {
          y: 40,
          opacity: 0
        }, {
          y: 0,
          opacity: 1,
          duration: 0.7
        }, '-=0.5')
        .fromTo(socialRef.current.children, {
          x: -20,
          opacity: 0
        }, {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1
        }, '-=0.3')
        .fromTo(ctaRef.current, {
          scale: 0.9,
          opacity: 0
        }, {
          scale: 1,
          opacity: 1,
          duration: 0.5
        }, '-=0.3')
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <>
      <section ref={heroRef} id="home" className="hero-section">
        <div className="hero-container">

          {/* ── Main content block ── */}
          <div className="hero-content">

            {/* Profile image — visible on mobile, hidden on desktop via CSS */}
            <div ref={imageRef} className="hero-profile-image">
              <img src={profileImage} alt="Akash Gangurde — UX Designer" />
            </div>

            {/* Headline */}
            <h1 ref={titleRef} className="hero-title">
              Designing scalable UX systems{' '}
              <span className="hero-title-highlight">for real-world products.</span>
            </h1>

            {/* Description */}
            <div ref={descRef} className="hero-stats-desc-block">
              <p className="hero-description">
                Worked on SaaS, mobility, and consumer apps used by 2000+ users —
                turning complex product problems into clean, developer-ready UX.
              </p>
            </div>

            {/* Impact Metrics — horizontal on desktop, 2-col grid on mobile */}
            <div className="hero-impact-stats">
              <div className="impact-stat-item">
                <h3 className="impact-stat-number">2000+</h3>
                <div className="impact-stat-divider"></div>
                <h4 className="impact-stat-title">Users Impacted</h4>
                <p className="impact-stat-desc">Designed for a product serving 2000+ users</p>
              </div>
              <div className="impact-stat-item">
                <h3 className="impact-stat-number">4+</h3>
                <div className="impact-stat-divider"></div>
                <h4 className="impact-stat-title">Products Delivered</h4>
                <p className="impact-stat-desc">Real-world products designed across mobile &amp; web</p>
              </div>
              <div className="impact-stat-item">
                <h3 className="impact-stat-number">100%</h3>
                <div className="impact-stat-divider"></div>
                <h4 className="impact-stat-title">End-to-End UX</h4>
                <p className="impact-stat-desc">From research → workflows → developer-ready UI</p>
              </div>
            </div>
          </div>

          {/* ── Footer — Social links + CTA ── */}
          <div className="hero-footer">
            {/* Social links (LinkedIn, Resume) */}
            <div ref={socialRef} className="social-links">
              <a
                href="https://www.linkedin.com/in/akash-gangurde-0794aa258"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                LINKEDIN
                <svg className="external-icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 8.66667V12.6667C12 13.0203 11.8595 13.3594 11.6095 13.6095C11.3594 13.8595 11.0203 14 10.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V5.33333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.33333 4H7.33333M10 2H14M14 2V6M14 2L6.66667 9.33333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href={resumePDF}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                RESUME
                <svg className="external-icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 8.66667V12.6667C12 13.0203 11.8595 13.3594 11.6095 13.6095C11.3594 13.8595 11.0203 14 10.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V5.33333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.33333 4H7.33333M10 2H14M14 2V6M14 2L6.66667 9.33333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            {/* CTA Button */}
            <div className="hero-cta-group" ref={ctaRef}>
              <Link to="/contact" className="hero-cta-btn">
                Let's Talk
                <svg className="arrow-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>

        </div>
      </section>

      <HireMeModal
        isOpen={isHireModalOpen}
        onClose={() => setIsHireModalOpen(false)}
      />
    </>
  )
}

export default HeroSection
