import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './ExperienceSnapshot.css'

// Carousel images
import img1 from '../images/experience/somvanshi/images/Workplace_1.jpeg'
import img2 from '../images/experience/somvanshi/images/Team_1.jpeg'
import img3 from '../images/experience/somvanshi/images/Team_2.jpeg'
import img4 from '../images/experience/somvanshi/images/Team_3.jpeg'
import img5 from '../images/experience/somvanshi/images/Office_Space.jpeg'
import img6 from '../images/experience/somvanshi/images/Scenic_1.jpeg'
import img7 from '../images/experience/somvanshi/images/Scenic_2.jpeg'
import img8 from '../images/experience/somvanshi/images/Book_gift.jpeg'
import img9 from '../images/experience/somvanshi/images/Workplace_3.jpeg'

gsap.registerPlugin(ScrollTrigger)

const carouselImages = [
  { src: img1, alt: 'Workplace' },
  { src: img2, alt: 'Team' },
  { src: img3, alt: 'Team moments' },
  { src: img4, alt: 'Team gathering' },
  { src: img5, alt: 'Office space' },
  { src: img6, alt: 'Scenic view' },
  { src: img7, alt: 'Scenic view 2' },
  { src: img8, alt: 'Book gift' },
  { src: img9, alt: 'Workplace 3' },
]

const highlights = ['UX Research', 'Wireframing & Prototyping', 'Developer Handoff']

const metrics = [
  { value: '4+', label: 'Live Projects' },
  { value: '~', label: 'End-to-End Product Work' },
]

const ExperienceSnapshot = () => {
  const sectionRef = useRef(null)
  const leftRef = useRef(null)
  const track1Ref = useRef(null)
  const track2Ref = useRef(null)
  const isHovered = useRef(false)
  const anim1Ref = useRef(null)
  const anim2Ref = useRef(null)

  // Duplicate images so the loop is seamless
  const doubled = [...carouselImages, ...carouselImages]
  const row1 = doubled
  const row2 = [...doubled].reverse()

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation for left content
      gsap.from(leftRef.current.children, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
        y: 36,
        opacity: 0,
        duration: 0.75,
        stagger: 0.1,
        ease: 'power3.out',
        clearProps: 'all',
      })
    }, sectionRef)

    // CSS-driven infinite scroll via keyframe animation
    // We control pause via JS on hover
    const track1 = track1Ref.current
    const track2 = track2Ref.current

    const pause = () => {
      if (track1) track1.style.animationPlayState = 'paused'
      if (track2) track2.style.animationPlayState = 'paused'
    }
    const resume = () => {
      if (track1) track1.style.animationPlayState = 'running'
      if (track2) track2.style.animationPlayState = 'running'
    }

    const section = sectionRef.current
    section.addEventListener('mouseenter', pause)
    section.addEventListener('mouseleave', resume)

    return () => {
      ctx.revert()
      section.removeEventListener('mouseenter', pause)
      section.removeEventListener('mouseleave', resume)
    }
  }, [])

  return (
    <section ref={sectionRef} id="experience-snapshot" className="exp-snap-section">
      <div className="exp-snap-container">

        {/* ── LEFT ── */}
        <div ref={leftRef} className="exp-snap-left">
          <span className="exp-snap-label">Experience</span>

          <h2 className="exp-snap-heading">UX/UI Designer Intern</h2>

          <p className="exp-snap-company">Somvanshi Technologies &bull; 2025 &mdash; Present</p>

          <p className="exp-snap-desc">
            Worked on real-world SaaS and product interfaces by conducting UX research, creating
            wireframes, prototyping flows, and collaborating closely with developers to deliver
            clean, user-centered experiences.
          </p>

          {/* Highlight pills */}
          <div className="exp-snap-pills">
            {highlights.map((h) => (
              <span key={h} className="exp-snap-pill">{h}</span>
            ))}
          </div>

          {/* Metrics */}
          <div className="exp-snap-metrics">
            {metrics.map((m) => (
              <div key={m.label} className="exp-snap-metric">
                <span className="exp-snap-metric-value">{m.value}</span>
                <span className="exp-snap-metric-label">{m.label}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link to="/about" className="exp-snap-cta">
            View Full Experience
            <svg className="arrow-icon" width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* ── RIGHT — dual-row carousel ── */}
        <div className="exp-snap-right">
          {/* Fade edges */}
          <div className="exp-snap-fade exp-snap-fade--left" />
          <div className="exp-snap-fade exp-snap-fade--right" />

          <div className="exp-snap-carousel">
            {/* Row 1 — scrolls left */}
            <div className="exp-carousel-track exp-carousel-track--fwd" ref={track1Ref}>
              {row1.map((img, i) => (
                <div key={`r1-${i}`} className="exp-carousel-card">
                  <img src={img.src} alt={img.alt} loading="lazy" />
                </div>
              ))}
            </div>

            {/* Row 2 — scrolls right */}
            <div className="exp-carousel-track exp-carousel-track--rev" ref={track2Ref}>
              {row2.map((img, i) => (
                <div key={`r2-${i}`} className="exp-carousel-card">
                  <img src={img.src} alt={img.alt} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ExperienceSnapshot
