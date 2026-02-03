import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './WorksSection.css'
import contactFormImage from '../images/case-studies/case-study-1/contact-redesign.jpg'
import hempHopImage from '../images/case-studies/case-study-2/hemp-hop-cover.png'

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
          start: 'top 95%',
          toggleActions: 'play none none reverse'
        },
        scale: 0.95,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out'
      })

      gsap.from(projectsRef.current.children, {
        scrollTrigger: {
          trigger: projectsRef.current,
          start: 'top 100%',
          toggleActions: 'play none none reverse'
        },
        y: 40,
        opacity: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out'
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const featuredProject = {
    id: 1,
    title: 'Improving Contact Form Usability',
    category: 'UX/UI REDESIGN',
    description: 'Redesigned the contact form to enhance user experience with improved field validation, clear error messaging, and a streamlined layout that increased form completion rates by 40%.',
    image: contactFormImage,
    link: '/case-study/contact-form'
  }

  const projects = [
    {
      id: 2,
      title: 'Improving Product Discovery & Trust',
      category: 'E-COMMERCE UX',
      description: 'Redesigned Hemp Hop\'s D2C wellness platform to help users discover products effortlessly, understand their value quickly, and feel confident completing purchases without overwhelming them.',
      image: hempHopImage,
      link: '/dino-game',
      ctaText: 'View Case Study'
    },
    {
      id: 3,
      title: 'Rebuilding a Trust-First Food Ordering Experience',
      category: 'MOBILE APP UX',
      description: 'End-to-end redesign of Grubwala food delivery app, transforming a functional product into a cohesive experience focused on emotional connection, trust, and reducing cognitive load.',
      image: hempHopImage,
      link: '/dino-game',
      ctaText: 'View Case Study'
    },
    // {
    //   id: 4,
    //   title: 'Flexible build system',
    //   category: 'BUILD',
    //   description: 'Powered by Gradle, Android Studio\'s build system lets you customize your build to generate multiple build variants for different Android devices from a single project.',
    //   image: 'https://via.placeholder.com/600x400/e8e8e8/666666?text=Estatery+Project',
    //   link: '#',
    //   ctaText: 'More about Android Build'
    // },
    // {
    //   id: 5,
    //   title: 'Easily emulate any device',
    //   category: 'TEST',
    //   description: 'The Android Emulator lets you to test your application on a variety of Android devices. Unlock the full potential of your apps by using responsive layouts.',
    //   image: 'https://via.placeholder.com/600x400/e8e8e8/666666?text=Wepay+Project',
    //   link: '#',
    //   ctaText: 'Use Android Emulator'
    // }
  ]

  return (
    <section ref={sectionRef} id="work" className="works-section">
      <div className="works-container">
        {/* Featured Project */}
        <div ref={featuredRef} className="featured-work-card">
          <div className="featured-image-wrapper">
            <img
              src={featuredProject.image}
              alt={featuredProject.title}
              className="featured-image"
            />
          </div>

          <div className="featured-content">
            <span className="featured-category">{featuredProject.category}</span>
            <h2 className="featured-title">{featuredProject.title}</h2>
            <p className="featured-description">{featuredProject.description}</p>
            <Link to={featuredProject.link} className="featured-cta">
              View Case Study
            </Link>
          </div>
        </div>

        {/* Regular Projects Grid */}
        <div ref={projectsRef} className="works-grid">
          {projects.map((project) => (
            <div key={project.id} className="work-card">
              <span className="work-category-label">{project.category}</span>
              <h3 className="work-title">{project.title}</h3>
              <p className="work-description">{project.description}</p>

              <Link to={project.link} className="featured-cta">
                {project.ctaText}
              </Link>

              <div className="work-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="work-image"
                />
              </div>
            </div>
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
