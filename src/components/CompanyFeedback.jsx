import React, { useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import './CompanyFeedback.css'

// Desktop  → GSAP wheel-driven horizontal carousel (no ScrollTrigger)
// Mobile   → Pure native overflow-x scroll on .carousel-window; GSAP never runs

const CompanyFeedback = () => {
    const trackRef  = useRef(null)   // .carousel-track  (GSAP target on desktop)
    const windowRef = useRef(null)   // .carousel-window (native scroll on mobile)

    const testimonials = [
        {
            id: 1,
            date: 'September 2025',
            text: '\u201cAkash played a key role in developing HempHop\u2019s user interface and contributed meaningful improvements to Grubwala\u2019s UI. His strong grasp of UI/UX fundamentals, creative problem-solving, and ability to translate requirements into practical design solutions positively influenced overall usability and project outcomes.\u201d',
            author: 'Somvanshi Technologies Pvt. Ltd.',
            rating: '5/5'
        },
        {
            id: 2,
            date: 'October 2025',
            text: '\u201cAkash delivered outstanding performance across HempHop UI modules and the digital reconstruction of the Somvanshi Technologies homepage. He combined strong technical understanding with creativity and attention to detail, effectively implementing feedback to produce high-quality results. His in-depth research on IT leaders, hemp industries, and consumer behavior added strategic value to the team\u2019s approach, demonstrating initiative, cognitive strength, and professionalism.\u201d',
            author: 'Somvanshi Technologies Pvt. Ltd.',
            rating: '5/5'
        },
        {
            id: 3,
            date: 'November 2025',
            text: '\u201cAkash significantly contributed to major Routematic wireframe modules and led user experience development for key Somvanshi Technologies website pages, including Home, Solutions, and Healthcare. His strong ownership, stakeholder communication, and attention to detail reflect maturity and the ability to handle complex tasks with minimal supervision.\u201d',
            author: 'Somvanshi Technologies Pvt. Ltd.',
            rating: '4.5/5'
        },
        {
            id: 4,
            date: 'December 2025',
            text: '\u201cAkash consistently delivered high-quality UI/UX work across the Somvanshi Technologies website and Grubwala applications. By engineering and implementing cohesive UI components across multiple modules, he strengthened visual consistency and usability while demonstrating reliability, initiative, and growing leadership capabilities.\u201d',
            author: 'Somvanshi Technologies Pvt. Ltd.',
            rating: '5/5'
        },
        {
            id: 5,
            date: 'January 2026',
            text: '\u201cAkash maintained excellent professionalism and delivered refined, user-centered interfaces for both the Somvanshi Technologies website and Grubwala applications. His ability to ensure design consistency, responsiveness, and usability across projects\u2014combined with his receptiveness to feedback\u2014positions him strongly for higher-impact design responsibilities.\u201d',
            author: 'Somvanshi Technologies Pvt. Ltd.',
            rating: '5/5'
        }
    ]

    useLayoutEffect(() => {
        const mq = window.matchMedia('(max-width: 768px)')

        let wheelCleanup = null

        // ── DESKTOP SETUP ─────────────────────────────────────────────────────
        const setup = () => {
            const win = windowRef.current
            if (!win) return

            const handleWheel = (e) => {
                if (window.innerWidth <= 768) return

                const rect       = win.getBoundingClientRect()
                const centreDiff = Math.abs((rect.top + rect.height / 2) - window.innerHeight / 2)
                
                // Keep default scrolling if page section is not roughly centered in viewport
                if (centreDiff > window.innerHeight * 0.25) return

                const scrollingUp   = e.deltaY < 0
                const scrollingDown = e.deltaY > 0
                const maxScroll     = win.scrollWidth - win.clientWidth

                if (win.scrollLeft <= 0 && scrollingUp)   return
                if (win.scrollLeft >= maxScroll && scrollingDown) return

                // Intercept scroll wheel
                e.preventDefault()
                e.stopPropagation()

                let raw = e.deltaY * 1.5
                if (e.deltaMode === 1) raw *= 30
                if (e.deltaMode === 2) raw *= 300

                // Animate native scrollLeft smoothly using GSAP
                gsap.to(win, {
                    scrollLeft: win.scrollLeft + raw,
                    duration: 0.45,
                    ease: 'power2.out',
                    overwrite: 'auto'
                })
            }

            win.addEventListener('wheel', handleWheel, { passive: false })
            wheelCleanup = () => win.removeEventListener('wheel', handleWheel)
        }

        // ── TEARDOWN ──────────────────────────────────────────────────────────
        const teardown = () => {
            if (wheelCleanup) { wheelCleanup(); wheelCleanup = null }
            if (windowRef.current) {
                gsap.killTweensOf(windowRef.current)
            }
        }

        // ── BREAKPOINT LISTENER ───────────────────────────────────────────────
        const handleBreakpoint = (e) => {
            teardown()
            if (!e.matches) setup()
        }

        // Initial boot
        if (!mq.matches) setup()

        mq.addEventListener('change', handleBreakpoint)
        return () => {
            mq.removeEventListener('change', handleBreakpoint)
            teardown()
        }
    }, [])

    return (
        <section className="cf-section" id="feedback">
            <div className="cf-container">

                {/* ── HEADER ── */}
                <div className="cf-header">
                    <h2 className="cf-title">
                        Internship Feedback
                    </h2>
                </div>

                {/* ── DARK CAROUSEL BLOCK ── */}
                <div className="cf-carousel-block">
                    {/* scrollable window */}
                    <div className="cf-window" ref={windowRef}>
                        <div className="cf-track" ref={trackRef}>
                            {testimonials.map((item) => (
                                <div key={item.id} className="cf-card">
                                    <div className="cf-card-header">
                                        <h3>{item.date}</h3>
                                    </div>
                                    <div className="cf-card-body">
                                        <p>{item.text}</p>
                                    </div>
                                    <div className="cf-card-footer">
                                        <span className="cf-star">★</span>
                                        <span className="cf-rating">{item.rating}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* scrollbar lives here, below the window */}
                </div>

            </div>
        </section>
    )
}

export default CompanyFeedback
