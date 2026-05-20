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

            {/* Subheadline description */}
            <p ref={descRef} className="hero-subtitle">
              Senior Product Designer building end-to-end user experiences. Empowering SaaS, fintech, and consumer products with strategic design systems and high-converting flow structures.
            </p>

            {/* Key UX Impact Stats Grid (New Premium Addition) */}
            <div className="hero-impact-stats">
              <div className="impact-stat-card">
                <span className="impact-stat-number">32%</span>
                <div className="impact-stat-divider"></div>
                <h4 className="impact-stat-title">Bounce Drop</h4>
                <p className="impact-stat-desc">Through micro-interaction clarity and onboarding audits</p>
              </div>

              <div className="impact-stat-card">
                <span className="impact-stat-number">4.8★</span>
                <div className="impact-stat-divider"></div>
                <h4 className="impact-stat-title">User Rating</h4>
                <p className="impact-stat-desc">Targeted feedback loops and workflow refinement cycles</p>
              </div>

              <div className="impact-stat-card">
                <span className="impact-stat-number">SaaS</span>
                <div className="impact-stat-divider"></div>
                <h4 className="impact-stat-title">End-to-End UX</h4>
                <p className="impact-stat-desc">From research → workflows → developer-ready UI</p>
              </div>
            </div>
          </div>

          {/* ── Footer — CTA ── */}
          <div className="hero-footer">
            {/* CTA Buttons */}
            <div className="hero-cta-group" ref={ctaRef} style={{ gap: '16px' }}>
              <button
                onClick={() => setIsHireModalOpen(true)}
                className="hero-cta-btn secondary"
              >
                Hire Me
              </button>
              <Link to="/work" className="hero-cta-btn">
                View Work
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
