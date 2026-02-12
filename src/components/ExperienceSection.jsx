import { Link } from 'react-router-dom'
import './ExperienceSection.css'
import { forwardRef, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import somvanshiLogo from '../images/icons/Somvanshi_tech_logo.svg'
import vrcLogo from '../images/icons/VRC_logo.png'

gsap.registerPlugin(ScrollTrigger)

const ExperienceSection = forwardRef((props, ref) => {
    const titleRef = useRef(null)
    const listRef = useRef(null)

    useEffect(() => {
        // Skip animation if embedded (About page handles its own animation)
        if (props.className?.includes('embedded')) return

        const ctx = gsap.context(() => {
            gsap.from(titleRef.current, {
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out'
            })

            gsap.from(listRef.current.children, {
                scrollTrigger: {
                    trigger: listRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                },
                y: 20,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: 'power3.out',
                clearProps: 'all' // Ensure props are cleared after animation
            })
        })

        return () => ctx.revert()
    }, [props.className])

    const experiences = [
        { title: 'UX/UI Designer Intern', company: 'Somvanshi Technologies', period: '2025 – Present', logo: somvanshiLogo },
        { title: 'Non-Technical Head (Design & Coordination)', company: 'VIIT Robotics Club', period: '2024 – 2025', logo: vrcLogo },
        { title: 'Software Team Member', company: 'VIIT Robotics Club', period: '2023 – 2024', logo: vrcLogo }
    ]

    return (
        <div ref={ref} className={`experience-section ${props.className || ''}`}>
            <h2 ref={titleRef} className="section-title">My work experience</h2>
            <div ref={listRef} className="experience-list">
                {experiences.map((exp, index) => {
                    let linkPath = null;
                    if (exp.title === 'Software Team Member') linkPath = '/experience/robotics';
                    else if (exp.title === 'Non-Technical Head (Design & Coordination)') linkPath = '/experience/non-technical';
                    else if (exp.title === 'UX/UI Designer Intern') linkPath = '/experience/somvanshi';

                    const content = (
                        <>
                            <div className="experience-left-group">
                                <img src={exp.logo} alt={`${exp.company} logo`} className="experience-logo" />
                                <div className="experience-info">
                                    <h3 className="experience-title">{exp.title}</h3>
                                    <p className="experience-company">{exp.company}</p>
                                </div>
                            </div>
                            <div className="experience-right">
                                <span className="experience-period">{exp.period}</span>
                                {linkPath && (
                                    <svg className="experience-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                )}
                            </div>
                        </>
                    );

                    return linkPath ? (
                        <Link
                            key={index}
                            to={linkPath}
                            className="experience-item experience-item-clickable"
                        >
                            {content}
                        </Link>
                    ) : (
                        <div key={index} className="experience-item">
                            {content}
                        </div>
                    );
                })}
            </div>
        </div>
    )
})

ExperienceSection.displayName = 'ExperienceSection'

export default ExperienceSection
