import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import './HeroSection.css'
import './HeroSectionNewButtons.css'
import resumePDF from '../images/Akash_Gangurde.pdf'
import profileImage from '../images/profile/about-image.jpg'
import HireMeModal from './HireMeModal'
import { BackgroundBeamsWithCollision } from './BackgroundBeamsWithCollision'

const HeroSection = () => {
  const [isHireModalOpen, setIsHireModalOpen] = useState(false)
  const [mousePos, setMousePos] = useState({ x: -9999, y: -9999 })
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const imageRef = useRef(null)
  const descRef = useRef(null)
  const ctaRef = useRef(null)
  const eyebrowRef = useRef(null)
  const statsRef = useRef(null)
  const orbRef = useRef(null)

  // Mouse-follow ambient orb
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // GSAP entrance animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.fromTo(titleRef.current, {
          y: 60,
          opacity: 0
        }, {
          y: 0,
          opacity: 1,
          duration: 1.0,
          delay: 0.1
        })
        .fromTo(imageRef.current, {
          y: 30,
          opacity: 0,
          scale: 0.95
        }, {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6
        }, '-=0.7')
        .fromTo(descRef.current, {
          y: 30,
          opacity: 0
        }, {
          y: 0,
          opacity: 1,
          duration: 0.7
        }, '-=0.5')
        .fromTo(statsRef.current, {
          y: 20,
          opacity: 0
        }, {
          y: 0,
          opacity: 1,
          duration: 0.6
        }, '-=0.5')
        .fromTo(ctaRef.current, {
          y: 16,
          opacity: 0
        }, {
          y: 0,
          opacity: 1,
          duration: 0.5
        }, '-=0.4')
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <>
      {/* Mouse-follow ambient orb */}
      <div
        ref={orbRef}
        className="hero-ambient-orb"
        style={{
          left: mousePos.x,
          top: mousePos.y,
        }}
      />

      <section ref={heroRef} id="home" className="hero-section">
        <BackgroundBeamsWithCollision />
        <div className="hero-container">
          <div className="hero-content">

            {/* Profile image — mobile only */}
            <div ref={imageRef} className="hero-profile-image">
              <img src={profileImage} alt="Akash Gangurde — UX Designer" />
            </div>

            {/* Headline */}
            <h1 ref={titleRef} className="hero-title">
              Designing scalable{' '}
              <span className="hero-title-highlight">UX systems</span>{' '}
              for real-world products.
            </h1>

            {/* Subtitle */}
            <p ref={descRef} className="hero-subtitle">
              UI/UX Designer building clean, intuitive, and user-centric digital experiences.
            </p>

            {/* Stats */}
            <div ref={statsRef} className="hero-impact-stats">
              <div className="impact-stat-item">
                <span className="impact-stat-number">2000+</span>
                <div className="impact-stat-divider" />
                <h4 className="impact-stat-title">Users Impacted</h4>
              </div>
              <div className="impact-stat-item">
                <span className="impact-stat-number">4+</span>
                <div className="impact-stat-divider" />
                <h4 className="impact-stat-title">Products Delivered</h4>
              </div>
              <div className="impact-stat-item">
                <span className="impact-stat-number">100%</span>
                <div className="impact-stat-divider" />
                <h4 className="impact-stat-title">End-to-End UX</h4>
              </div>
            </div>

          </div>

          {/* CTA */}
          <div className="hero-footer">
            <div className="hero-cta-group" ref={ctaRef}>
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
