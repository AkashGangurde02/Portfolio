import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './SkillsSection.css'

gsap.registerPlugin(ScrollTrigger)

const SkillsSection = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const skillsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      })

      gsap.from(skillsRef.current.children, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse'
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const skills = {
    ux: [
      'User Research',
      'User Personas',
      'User Flows',
      'Information Architecture',
      'Wireframing',
      'Prototyping',
      'Usability Testing',
      'UX Writing'
    ],
    ui: [
      'Visual Design',
      'Typography',
      'Color Theory',
      'Design Systems',
      'Responsive Design',
      'Micro-interactions',
      'Accessibility',
      'Brand Identity'
    ],
    tools: [
      'Figma',
      'Adobe XD',
      'Sketch',
      'Photoshop',
      'Illustrator',
      'Principle',
      'After Effects',
      'Miro'
    ]
  }

  return (
    <section ref={sectionRef} className="skills-section">
      <div className="skills-container">
        <h2 ref={titleRef} className="skills-title">Skills Snapshot</h2>
        
        <div ref={skillsRef} className="skills-grid">
          <div className="skill-category">
            <h3 className="category-title">UX Skills</h3>
            <ul className="skills-list">
              {skills.ux.map((skill, index) => (
                <li key={index} className="skill-item">{skill}</li>
              ))}
            </ul>
          </div>

          <div className="skill-category">
            <h3 className="category-title">UI Skills</h3>
            <ul className="skills-list">
              {skills.ui.map((skill, index) => (
                <li key={index} className="skill-item">{skill}</li>
              ))}
            </ul>
          </div>

          <div className="skill-category">
            <h3 className="category-title">Tools</h3>
            <ul className="skills-list">
              {skills.tools.map((skill, index) => (
                <li key={index} className="skill-item">{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
