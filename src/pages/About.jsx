import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import './About.css'
import aboutProfile from '../images/about-image.jpg'

const About = () => {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const topSectionRef = useRef(null)
  const experienceRef = useRef(null)
  const partnersRef = useRef(null)
  const awardsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.fromTo(titleRef.current, {
        y: 80,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.3
      })
      .fromTo(topSectionRef.current.children, {
        y: 50,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15
      }, '-=0.5')
      .fromTo([experienceRef.current, partnersRef.current, awardsRef.current], {
        y: 60,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2
      }, '-=0.4')
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const experiences = [
    { title: 'Product Designer', company: 'Uber', period: '2020 - 2021' },
    { title: 'Lead Product Designer', company: 'Revic', period: '2021 - 2022' },
    { title: 'Head Of Product Designer', company: 'Spotify', period: '2022 - 2023' },
    { title: 'Design Director', company: 'Google', period: '2023 - Present' }
  ]

  const partners = [
    { name: 'pipefy', category: 'UI/UX & Branding', year: '2022' },
    { name: 'django', category: 'UI/UX & Branding', year: '2022' },
    { name: 'rackspace', category: 'UI/UX & Branding', year: '2022' },
    { name: 'portal', category: 'UI/UX & Branding', year: '2022' }
  ]

  const awards = [
    { title: 'Honorable Mention', organization: '2022 - AWWARDS', link: '#' },
    { title: 'Site of The Day', organization: '2022 - CSS Winners', link: '#' },
    { title: 'Best UI Design', organization: '2022 - CSS Design Awards', link: '#' },
    { title: 'Site of The Day', organization: '2022 - AWWARDS', link: '#' }
  ]

  return (
    <div className="about-page">
      <section ref={heroRef} className="about-hero">
        <div className="about-page-container">
          <h1 ref={titleRef} className="about-page-title">
            <span className="title-light">About me,</span> my story and my experience
          </h1>
          
          <div ref={topSectionRef} className="about-top-section">
            <div className="about-profile-image">
              <img src={aboutProfile} alt="Profile" />
            </div>

            <div className="about-top-content">
              <p className="about-description">
                As a Senior Designer with over 10 years of experience, I specialize in creating intuitive and user-centered interfaces for a wide range of digital products and experiences.
              </p>
              
              <Link to="/contact" className="about-cta-btn">
                Let's Talk
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Experience Section */}
          <div ref={experienceRef} className="experience-section">
            <h2 className="section-title">My past work experience</h2>
            <div className="experience-list">
              {experiences.map((exp, index) => (
                <div key={index} className="experience-item">
                  <div className="experience-info">
                    <h3 className="experience-title">{exp.title}</h3>
                    <p className="experience-company">{exp.company}</p>
                  </div>
                  <span className="experience-period">{exp.period}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Partners Section */}
          <div ref={partnersRef} className="partners-section">
            <h2 className="section-title">A visual partner for brands, companies, and agencies</h2>
            <div className="partners-grid">
              {partners.map((partner, index) => (
                <div key={index} className="partner-card">
                  <h3 className="partner-name">{partner.name}</h3>
                  <p className="partner-category">{partner.category}</p>
                  <p className="partner-year">{partner.year}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Awards Section */}
          <div ref={awardsRef} className="awards-section">
            <div className="awards-featured">
              <div className="award-image">
                <div className="award-placeholder">W</div>
              </div>
              <div className="award-feature-content">
                <h2 className="award-feature-title">Awwards Winning - Independent of The Year</h2>
                <p className="award-feature-subtitle">Ivan Kazarov - 2022</p>
                <a href="#" className="award-link">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="awards-list">
              {awards.map((award, index) => (
                <div key={index} className="award-item">
                  <div className="award-info">
                    <h4 className="award-title">{award.title}</h4>
                    <p className="award-org">{award.organization}</p>
                  </div>
                  <a href={award.link} className="award-arrow">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M7 13L13 7M13 7H7M13 7V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
