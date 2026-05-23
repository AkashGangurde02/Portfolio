import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './WorksSection.css'
import contactFormImage from '../images/case-studies/case-study-1/contact-redesign.jpg'
import hempHopImage from '../images/case-studies/case-study-2/hemp-hop-cover.png'
import grubwalaImage from '../images/case-studies/case-study-3/grubwala-cover.jpg'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    id: 1,
    title: 'Reducing friction in lead capture workflows',
    category: 'UX/UI Redesign',
    description: 'Users were abandoning a critical contact form mid-way. Redesigned the end-to-end form experience resulting in a 40% increase in completion rates.',
    image: contactFormImage,
    link: '/case-study',
    date: 'Jan 2025',
  },
  {
    id: 2,
    title: 'Improving Product Discovery & Trust',
    category: 'E-Commerce UX',
    description: 'Redesigned the product and collection pages of a D2C wellness e-commerce platform to improve discovery, clarity, and purchase confidence.',
    image: hempHopImage,
    link: '/case-study/hemp-hop',
    date: 'Mar 2025',
  },
  {
    id: 3,
    title: 'Rebuilding a Trust-First Food Ordering Experience',
    category: 'Mobile App UX',
    description: 'Led the end-to-end UX redesign of a food delivery platform, improving usability, trust, and creating an emotionally engaging ordering experience.',
    image: grubwalaImage,
    link: '/case-study/grubwala',
    date: 'May 2025',
  },
]

const WorksSection = () => {
  const sectionRef = useRef(null)
  const cardsRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header fade-in
      gsap.from('.wc-header', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
        y: 24,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
      })

      // Cards stagger
      if (cardsRef.current) {
        gsap.from(cardsRef.current.children, {
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
          y: 40,
          opacity: 0,
          duration: 0.55,
          stagger: 0.12,
          ease: 'power3.out',
          clearProps: 'all',
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const updateScrollButtons = () => {
    const el = cardsRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 10)
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 10)
  }

  const scrollCards = (dir) => {
    const el = cardsRef.current
    if (!el) return
    el.scrollBy({ left: dir * 340, behavior: 'smooth' })
    setTimeout(updateScrollButtons, 400)
  }

  return (
    <section ref={sectionRef} id="work" className="works-section">
      <div className="work-container">

        {/* ── Header row ── */}
        <div className="wc-header">
          <h2 className="wc-section-title">Selected Works</h2>
          <Link to="/work" className="wc-view-all-btn">
            View all works
          </Link>
        </div>

        {/* ── Cards grid ── */}
        <div
          ref={cardsRef}
          className="wc-grid"
          onScroll={updateScrollButtons}
        >
          {projects.map((project) => (
            <Link key={project.id} to={project.link} className="wc-card">
              {/* Thumbnail */}
              <div className="wc-image-wrap">
                <img src={project.image} alt={project.title} className="wc-image" />
              </div>

              {/* Info */}
              <div className="wc-body">
                <h3 className="wc-title">{project.title}</h3>
                <div className="wc-meta">
                  <span className="wc-date">{project.date}</span>
                  <span className="wc-category">{project.category}</span>
                </div>
                <span className="wc-cta-link">
                  View case study
                  <svg className="wc-cta-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* ── Scroll nav arrows (mobile) ── */}
        <div className="wc-nav-arrows">
          <button
            className={`wc-nav-btn ${!canScrollLeft ? 'wc-nav-btn--disabled' : ''}`}
            onClick={() => scrollCards(-1)}
            aria-label="Scroll left"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            className={`wc-nav-btn ${!canScrollRight ? 'wc-nav-btn--disabled' : ''}`}
            onClick={() => scrollCards(1)}
            aria-label="Scroll right"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  )
}

export default WorksSection
