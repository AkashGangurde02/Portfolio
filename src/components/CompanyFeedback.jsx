import React, { useRef, useLayoutEffect, useState } from 'react'
import { gsap } from 'gsap'
import './CompanyFeedback.css'

// ─── No ScrollTrigger needed anymore ───────────────────────────────────────
// Cards now respond to mouse-wheel ONLY when the cursor is over the
// dark carousel-window. Page scrolls normally everywhere else.

const CompanyFeedback = () => {
    const trackRef = useRef(null)
    const carouselWindowRef = useRef(null)
    const [selectedCard, setSelectedCard] = useState(null)

    const testimonials = [
        {
            id: 1,
            date: 'September 2025',
            text: '"Akash played a key role in developing HempHop\u2019s user interface and contributed meaningful improvements to Grubwala\u2019s UI. His strong grasp of UI/UX fundamentals, creative problem-solving, and ability to translate requirements into practical design solutions positively influenced overall usability and project outcomes." \u2014 Ms. Shraddha Nagrani, Head of Human Resources | Somvanshi Technologies Pvt. Ltd.',
            rating: '5/5'
        },
        {
            id: 2,
            date: 'October 2025',
            text: '"Akash delivered outstanding performance across HempHop UI modules and the digital reconstruction of the Somvanshi Technologies homepage. He combined strong technical understanding with creativity and attention to detail, effectively implementing feedback to produce high-quality results. His in-depth research on IT leaders, hemp industries, and consumer behavior added strategic value to the team\u2019s approach, demonstrating initiative, cognitive strength, and professionalism." \u2014 Ms. Shraddha Nagrani, Head of Human Resources | Somvanshi Technologies Private Limited',
            rating: '10/10'
        },
        {
            id: 3,
            date: 'November 2025',
            text: '"Akash significantly contributed to major Routematic wireframe modules and led user experience development for key Somvanshi Technologies website pages, including Home, Solutions, and Healthcare. His strong ownership, stakeholder communication, and attention to detail reflect maturity and the ability to handle complex tasks with minimal supervision." \u2014 Ms. Shraddha Nagrani, Head of Human Resources | Somvanshi Technologies',
            rating: '4.5/5'
        },
        {
            id: 4,
            date: 'December 2025',
            text: '"Akash consistently delivered high-quality UI/UX work across the Somvanshi Technologies website and Grubwala applications. By engineering and implementing cohesive UI components across multiple modules, he strengthened visual consistency and usability while demonstrating reliability, initiative, and growing leadership capabilities." \u2014 Ms. Shraddha Nagrani, Head of Human Resources | Somvanshi Technologies',
            rating: '5/5'
        },
        {
            id: 5,
            date: 'January 2026',
            text: '"Akash maintained excellent professionalism and delivered refined, user-centered interfaces for both the Somvanshi Technologies website and Grubwala applications. His ability to ensure design consistency, responsiveness, and usability across projects\u2014combined with his receptiveness to feedback\u2014positions him strongly for higher-impact design responsibilities." \u2014 Ms. Shraddha Nagrani, Head of Human Resources | Somvanshi Technologies',
            rating: '5/5'
        }
    ]

    useLayoutEffect(() => {
        const track = carouselWindowRef.current
            ? carouselWindowRef.current.querySelector('.carousel-track')
            : null
        const carouselWindow = carouselWindowRef.current
        if (!track || !carouselWindow) return

        // ── Compute how far the track can travel ────────────────────────────
        const getScrollDistance = () => {
            const lastCard = track.lastElementChild
            if (!lastCard) return 0
            const style = window.getComputedStyle(track)
            const paddingRight = parseFloat(style.paddingRight) || 0
            const gap = parseFloat(style.columnGap) || parseFloat(style.gap) || 0
            return Math.max(0, track.scrollWidth - paddingRight - lastCard.offsetWidth - gap)
        }

        // ── GSAP paused tween driven by the ticker ──────────────────────────
        const tween = gsap.to(track, {
            x: () => -getScrollDistance(),
            ease: 'none',
            paused: true,
        })

        // targetProgress  — what we want to reach (updated on wheel)
        // currentProgress — where we actually are (smoothly lerped every frame)
        let targetProgress = 0
        let currentProgress = 0

        // ── Smooth lerp ticker (runs every rAF) ─────────────────────────────
        // Gives the carousel natural inertia / coast-to-stop feel.
        const ticker = gsap.ticker.add(() => {
            const diff = targetProgress - currentProgress
            if (Math.abs(diff) > 0.0005) {
                currentProgress += diff * 0.10          // 0.10 = easing speed
                tween.progress(Math.max(0, Math.min(1, currentProgress)))
            } else if (currentProgress !== targetProgress) {
                currentProgress = targetProgress
                tween.progress(Math.max(0, Math.min(1, currentProgress)))
            }
        })

        // ── Wheel handler — attached only to the carousel-window ────────────
        // Intercepts wheel events ONLY while the carousel still has room to move.
        // Once all cards have reached the left end  → scroll DOWN passes to the page.
        // When the carousel is at the start again   → scroll UP  passes to the page.
        const handleWheel = (e) => {
            const scrollingDown = e.deltaY > 0
            const scrollingUp = e.deltaY < 0

            // ── Boundary pass-through ────────────────────────────────────────
            // At the rightmost position (start): let the page scroll up
            if (targetProgress <= 0 && scrollingUp) return

            // At the leftmost position (all cards visible / end reached):
            // let the page continue scrolling down
            if (targetProgress >= 1 && scrollingDown) return

            // ── Intercept: move the carousel ─────────────────────────────────
            e.preventDefault()
            e.stopPropagation()

            const dist = getScrollDistance()
            if (dist === 0) return

            // Normalise delta across devices:
            //   deltaMode 0 = pixels  (trackpad, high-DPI mouse)
            //   deltaMode 1 = lines   (typical mouse wheel on Windows)
            //   deltaMode 2 = pages
            let rawDelta = e.deltaY
            if (e.deltaMode === 1) rawDelta *= 30   // lines → pixels
            if (e.deltaMode === 2) rawDelta *= 300  // pages → pixels

            // scroll DOWN (rawDelta > 0) → cards slide LEFT  (progress ↑)
            // scroll UP   (rawDelta < 0) → cards slide RIGHT (progress ↓)
            const delta = rawDelta / dist
            targetProgress = Math.max(0, Math.min(1, targetProgress + delta))
        }

        // passive: false is required so that e.preventDefault() is allowed
        carouselWindow.addEventListener('wheel', handleWheel, { passive: false })

        // Invalidate tween dimensions on resize
        const handleResize = () => { tween.invalidate() }
        window.addEventListener('resize', handleResize, { passive: true })

        // ── Cleanup ─────────────────────────────────────────────────────────
        return () => {
            gsap.ticker.remove(ticker)
            carouselWindow.removeEventListener('wheel', handleWheel)
            window.removeEventListener('resize', handleResize)
            tween.kill()
            gsap.set(track, { x: 0 })
        }
    }, [])


    return (
        <>
            <section className="sumip-wrapper" id="feedback">
                <div className="sumip-container">
                    <div className="content-grid">
                        {/* Left Side: Typography & Info */}
                        <div className="left-content">
                            <div className="main-typography">
                                <h1>
                                    Monthly Feedback <span className="sub-highlight">By My<br /> Current Company</span>
                                </h1>
                            </div>

                            <div className="description-wrapper">
                                <p className="description-text">
                                    Performance evaluations highlighting my growth in UI/UX, design thinking, leadership, and execution across live projects.
                                </p>
                                <p className="scroll-hint">↔ Scroll inside the panel to browse</p>
                            </div>
                        </div>

                        {/* Right Side: Dark Carousel Container */}
                        <div className="right-carousel-container">
                            {/* ref is on the window — wheel fires only when cursor is here */}
                            <div className="carousel-window" ref={carouselWindowRef}>
                                <div className="carousel-track" ref={trackRef}>
                                    {testimonials.map((item) => (
                                        <div
                                            key={item.id}
                                            className="testimonial-card"
                                            onClick={() => setSelectedCard(item)}
                                        >
                                            <div className="card-header">
                                                <h3>{item.date}</h3>
                                            </div>
                                            <div className="card-body">
                                                <p>{item.text}</p>
                                            </div>
                                            <div className="card-footer">
                                                <span className="star-icon">★</span>
                                                <span className="rating-text">{item.rating}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Card Detail Modal */}
            {selectedCard && (
                <div className="modal-overlay" onClick={() => setSelectedCard(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>{selectedCard.date}</h3>
                            <button className="modal-close-btn" onClick={() => setSelectedCard(null)}>×</button>
                        </div>
                        <div className="modal-body">
                            <p>{selectedCard.text}</p>
                        </div>
                        <div className="modal-footer">
                            <span className="star-icon">★</span>
                            <span className="rating-text">{selectedCard.rating}</span>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default CompanyFeedback
