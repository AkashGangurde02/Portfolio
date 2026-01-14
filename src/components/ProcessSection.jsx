import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './ProcessSection.css'

gsap.registerPlugin(ScrollTrigger)

const ProcessSection = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const processRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 95%',
          toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      })

      gsap.from(processRef.current.children, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 90%',
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

  const processSteps = [
    {
      number: '01',
      title: 'Discover',
      description: 'Understanding users, their needs, and business goals through research and analysis.'
    },
    {
      number: '02',
      title: 'Define',
      description: 'Synthesizing research findings to identify problems and opportunities.'
    },
    {
      number: '03',
      title: 'Design',
      description: 'Creating wireframes, prototypes, and high-fidelity designs that solve user problems.'
    },
    {
      number: '04',
      title: 'Test',
      description: 'Validating designs through usability testing and iterating based on feedback.'
    }
  ]

  return (
    <section ref={sectionRef} className="process-section">
      <div className="process-container">
        <h2 ref={titleRef} className="process-title">My Design Process</h2>

        <div ref={processRef} className="process-steps">
          {processSteps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-number">{step.number}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
              {index < processSteps.length - 1 && (
                <div className="step-arrow">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M15 10L25 20L15 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
