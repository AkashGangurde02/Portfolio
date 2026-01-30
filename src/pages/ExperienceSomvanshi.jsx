import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import './ExperienceRobotics.css'

const ExperienceSomvanshi = () => {
    const heroRef = useRef(null)
    const contentRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

            tl.from(heroRef.current.children, {
                y: 80,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                delay: 0.3
            })
                .from(contentRef.current.children, {
                    y: 60,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.15
                }, '-=0.5')
        })

        return () => ctx.revert()
    }, [])

    return (
        <div className="experience-story-page">
            <section className="experience-hero">
                <div className="experience-container">
                    <div ref={heroRef} className="experience-hero-content">
                        <div className="experience-meta">
                            <span className="meta-label">Role Focus:</span>
                            <span className="meta-tags">UX Research • Wireframing • Prototyping • Visual Design</span>
                        </div>

                        <h1 className="experience-hero-title">UX/UI Designer Intern</h1>
                        <p className="experience-hero-subtitle">Somvanshi Technologies • 2025 – Present</p>

                        <Link to="/about" className="back-link">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Back to About
                        </Link>
                    </div>
                </div>
            </section>

            <section className="experience-content-section">
                <div className="experience-container">
                    <div ref={contentRef} className="experience-content">
                        <div className="content-block story">
                            <h2 className="content-title">The Journey</h2>
                            <p className="content-text">
                                My journey into UX/UI design started from curiosity about how digital products shape everyday experiences. While my technical background gave me system-level thinking, I became increasingly drawn toward designing interfaces that are not just visually appealing, but intuitive and purposeful. I spent months learning design principles, experimenting with tools, and building projects that helped me understand usability, structure, and clarity.
                            </p>
                            <p className="content-text">
                                While preparing for my interview at Somvanshi Technologies, I treated the opportunity as a design challenge. I studied the company's website deeply and analyzed it from a usability perspective. During the interview, I presented key drawbacks I noticed and suggested improvements to enhance clarity and user experience. Instead of only describing my skills, I demonstrated how I approach real problems — and that conversation became the turning point that led to my selection.
                            </p>
                            <p className="content-text">
                                At Somvanshi Technologies, I applied my learning in real-world projects, designing user-centered web and product interfaces. My work involved UX research, wireframing, prototyping, and refining visual systems while collaborating closely with developers. Each project strengthened my ability to balance creativity with constraints, communicate design decisions clearly, and think holistically about the user journey.
                            </p>
                            <p className="content-text">
                                This internship transformed my mindset from learning design to practicing it professionally — turning curiosity into confidence and ideas into impact.
                            </p>
                        </div>

                        <div className="content-block contributions">
                            <h2 className="content-title">🔧 Key Contributions</h2>
                            <ul className="contributions-list">
                                <li>Conducted UX research to inform design decisions</li>
                                <li>Created wireframes and interactive prototypes in Figma</li>
                                <li>Designed intuitive user interfaces for live projects</li>
                                <li>Collaborated with developers for smooth design handoff</li>
                                <li>Improved visual consistency through design system thinking</li>
                                <li>Identified usability gaps and proposed practical solutions</li>
                                <li>Participated in iterative feedback and rapid refinements</li>
                            </ul>
                        </div>

                        <div className="content-block highlight">
                            <h2 className="content-title">📈 Impact</h2>
                            <ul className="contributions-list">
                                <li>Strengthened clarity and usability across multiple screens</li>
                                <li>Reduced friction in user flows through structured layouts</li>
                                <li>Contributed to faster design-to-development handoff</li>
                                <li>Helped translate business requirements into usable interfaces</li>
                                <li>Demonstrated proactive problem-solving during hiring process</li>
                            </ul>
                        </div>

                        <div className="content-block impact">
                            <h2 className="content-title">Impact & Growth</h2>
                            <p className="content-text">
                                This internship marked the moment my preparation met opportunity — turning passion into practice and learning into real-world impact. It taught me that design is not just about making things look good, but about solving problems thoughtfully and creating experiences that users don't have to think about.
                            </p>
                            <p className="content-text">
                                The skills I developed — from conducting user research to translating complex requirements into clean interfaces — continue to shape how I approach every design challenge. Most importantly, this experience reinforced that the best way to demonstrate capability is through action, critical thinking, and a genuine commitment to understanding the problem before proposing solutions.
                            </p>
                        </div>

                        {/* Photo Gallery */}
                        <div className="content-block gallery">
                            <h2 className="content-title">Moments from the Journey</h2>
                            <div className="photo-gallery">
                                <div className="photo-item photo-1">
                                    <div className="photo-placeholder">Design Process</div>
                                </div>
                                <div className="photo-item photo-2">
                                    <div className="photo-placeholder">Wireframing</div>
                                </div>
                                <div className="photo-item photo-3">
                                    <div className="photo-placeholder">Team Collaboration</div>
                                </div>
                                <div className="photo-item photo-4">
                                    <div className="photo-placeholder">UX Research</div>
                                </div>
                                <div className="photo-item photo-5">
                                    <div className="photo-placeholder">Design Review</div>
                                </div>
                                <div className="photo-item photo-6">
                                    <div className="photo-placeholder">Prototyping</div>
                                </div>
                                <div className="photo-item photo-7">
                                    <div className="photo-placeholder">Developer Handoff</div>
                                </div>
                                <div className="photo-item photo-8">
                                    <div className="photo-placeholder">Learning</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ExperienceSomvanshi
