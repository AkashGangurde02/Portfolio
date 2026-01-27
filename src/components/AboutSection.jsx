import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './AboutSection.css'
import aboutProfile from '../images/about-image.jpg'

gsap.registerPlugin(ScrollTrigger)

const AboutSection = () => {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 95%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        },
        x: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      })

      gsap.from(contentRef.current.children, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 95%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="about-section">
      <div className="about-container">
        <div ref={imageRef} className="about-image-wrapper">
          <img
            src={aboutProfile}
            alt="Profile"
            className="about-image"
          />
        </div>

        <div ref={contentRef} className="about-content">
          <h2 className="about-title">
            Design that sparks engagement and inspires action
          </h2>

          <p className="home-about-description">
            Concentrate on your primary objective which is expanding your business,
            and leave it to me to ensure that your business is efficiently portrayed
            in the digital realm and distinguishes itself from the rivals.
          </p>

          <Link to="/about" className="about-secondary-btn" style={{ opacity: 1 }}>
            Know More
            <svg className="arrow-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
