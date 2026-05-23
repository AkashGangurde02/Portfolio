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
      gsap.from('.wsc-header', {
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
    const firstCard = el.querySelector('.wsc-card')
    const scrollAmount = firstCard ? firstCard.clientWidth : 340
    el.scrollBy({ left: dir * scrollAmount, behavior: 'smooth' })
    setTimeout(updateScrollButtons, 400)
  }

  useEffect(() => {
    const timer = setTimeout(updateScrollButtons, 100)
    window.addEventListener('resize', updateScrollButtons)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', updateScrollButtons)
    }
  }, [])

  return (
    <section ref={sectionRef} id="work" className="works-section">
      <div className="work-container">

        {/* ── Header row ── */}
        <div className="wsc-header">
          <h2 className="wsc-section-title">Selected Works</h2>
          <Link to="/work" className="wsc-view-all-btn">
            View all works
          </Link>
        </div>

        {/* ── Cards grid ── */}
        <div
          ref={cardsRef}
          className="wsc-grid"
          onScroll={updateScrollButtons}
        >
          {projects.map((project) => (
            <Link key={project.id} to={project.link} className="wsc-card">
              {/* Thumbnail */}
              <div className="wsc-image-wrap">
                <img src={project.image} alt={project.title} className="wsc-image" />
              </div>

              {/* Info */}
              <div className="wsc-body">
                <h3 className="wsc-title">{project.title}</h3>
                <div className="wsc-meta">
                  <span className="wsc-date">{project.date}</span>
                  <span className="wsc-category">{project.category}</span>
                </div>
                <span className="wsc-cta-link">
                  View case study
                  <svg className="wsc-cta-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* ── Scroll nav arrows (mobile) ── */}
        <div className="wsc-nav-arrows">
          <button
            className={`wsc-nav-btn ${!canScrollLeft ? 'wsc-nav-btn--disabled' : ''}`}
            onClick={() => scrollCards(-1)}
            aria-label="Scroll left"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            className={`wsc-nav-btn ${!canScrollRight ? 'wsc-nav-btn--disabled' : ''}`}
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
