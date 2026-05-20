import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './WorksSection.css'
import '../pages/Work.css'
import contactFormImage from '../images/case-studies/case-study-1/contact-redesign.jpg'
import hempHopImage from '../images/case-studies/case-study-2/hemp-hop-cover.png'
import grubwalaImage from '../images/case-studies/case-study-3/grubwala-cover.jpg'

gsap.registerPlugin(ScrollTrigger)

const WorksSection = () => {
  const sectionRef = useRef(null)
  const projectsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(projectsRef.current.children, {
        scrollTrigger: {
          trigger: projectsRef.current,
          start: 'top 95%',
          toggleActions: 'play none none reverse'
        },
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out',
        clearProps: 'all'
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const projects = [
    {
      id: 1,
      title: 'Reducing friction in lead capture workflows (B2B website)',
      category: 'UX/UI REDESIGN',
      description: 'Users were abandoning a critical contact form mid-way due to unclear field labels, confusing error states, and a fragmented layout. Redesigned the end-to-end form experience — improving validation logic, error messaging, and visual hierarchy — resulting in a 40% increase in completion rates.',
      image: contactFormImage,
      link: '/case-study',
      ctaText: 'View Case Study'
    },
    {
      id: 2,
      title: 'Improving Product Discovery & Trust',
      category: 'E-COMMERCE UX',
      description: 'Redesigned the product and collection pages of a D2C wellness e-commerce platform to improve product discovery, information clarity, and purchase confidence.',
      image: hempHopImage,
      link: '/case-study/hemp-hop',
      ctaText: 'View Case Study'
    },
    {
      id: 3,
      title: 'Rebuilding a Trust-First Food Ordering Experience',
      category: 'MOBILE APP UX',
      description: 'Led the end-to-end UX redesign of a food delivery platform, improving usability, strengthening user trust, and creating a more emotionally engaging ordering experience.',
      image: grubwalaImage,
      link: '/case-study/grubwala',
      ctaText: 'View Case Study'
    }
  ]

  return (
    <section ref={sectionRef} id="work" className="works-section">
      <div className="work-container">
        
        {/* Projects Grid */}
        <div ref={projectsRef} className="wc-grid">
          {projects.map((project) => (
            <Link key={project.id} to={project.link} className="wc-card">
                {/* Image */}
                <div className="wc-image-wrap">
                    <img src={project.image} alt={project.title} className="wc-image" />
                </div>

                {/* Body */}
                <div className="wc-body">
                    <h3 className="wc-title">{project.title}</h3>
                    <p className="wc-desc">{project.description}</p>
                </div>

                {/* CTA */}
                <div className="wc-footer">
                    <span className="wc-cta-link">
                        {project.ctaText}
                        <svg className="wc-cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>
                </div>
            </Link>
          ))}
        </div>

        {/* View All Works Link */}
        <div className="view-all-wrapper" style={{ marginTop: '3rem' }}>
          <Link to="/work" className="view-all-link">
            View All Works
            <svg className="arrow-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default WorksSection
