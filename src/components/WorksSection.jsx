import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './WorksSection.css'
import contactFormImage from '../images/Contact-Redesign.jpg'

gsap.registerPlugin(ScrollTrigger)

const WorksSection = () => {
  const sectionRef = useRef(null)
  const featuredRef = useRef(null)
  const projectsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(featuredRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        },
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      })

      gsap.from(projectsRef.current.children, {
        scrollTrigger: {
          trigger: projectsRef.current,
          start: 'top 95%',
          toggleActions: 'play none none reverse'
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const featuredProject = {
    id: 1,
    title: 'Improving Contact Form Usability',
    category: 'UX/UI Redesign Case Study',
    image: contactFormImage,
    link: '/case-study/contact-form'
  }

  const projects = [
    {
      id: 2,
      title: 'Estatery',
      category: 'UI/UX',
      image: 'https://via.placeholder.com/600x400/e8e8e8/666666?text=Estatery+Project',
      link: '#'
    },
    {
      id: 3,
      title: 'Wepay',
      category: 'Branding',
      image: 'https://via.placeholder.com/600x400/e8e8e8/666666?text=Wepay+Project',
      link: '#'
    }
  ]

  return (
    <section ref={sectionRef} id="work" className="works-section">
      <div className="works-container">
        {/* Featured Project */}
        <Link to={featuredProject.link} ref={featuredRef} className="featured-work-card">
          <div className="work-image-wrapper featured">
            <img
              src={featuredProject.image}
              alt={featuredProject.title}
              className="work-image"
            />
          </div>

          <div className="work-info">
            <div className="work-details">
              <h3 className="work-name">{featuredProject.title}</h3>
              <p className="work-category">{featuredProject.category}</p>
            </div>

            <div className="work-link">
              <svg className="arrow-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </Link>

        {/* Regular Projects Grid */}
        <div ref={projectsRef} className="works-grid">
          {projects.map((project) => (
            <Link to={project.link} key={project.id} className="work-card">
              <div className="work-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="work-image"
                />
              </div>

              <div className="work-info">
                <div className="work-details">
                  <h3 className="work-name">{project.title}</h3>
                  <p className="work-category">{project.category}</p>
                </div>

                <div className="work-link">
                  <svg className="arrow-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Works Link */}
        <div className="view-all-wrapper">
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
