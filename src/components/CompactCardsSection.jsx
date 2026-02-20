import React, { useRef, useLayoutEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './CompactCardsSection.css'

gsap.registerPlugin(ScrollTrigger)

const CompactCardsSection = () => {
    const sectionRef = useRef(null)
    const trackRef = useRef(null)
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
        const track = trackRef.current
        const section = sectionRef.current
        if (!track || !section) return

        const mm = gsap.matchMedia()

        mm.add('(min-width: 769px)', () => {
            const getScrollDistance = () => {
                const lastCard = track.lastElementChild
                if (!lastCard) return 0
                const trackStyle = window.getComputedStyle(track)
                const paddingRight = parseFloat(trackStyle.paddingRight) || 0
                const gap = parseFloat(trackStyle.columnGap) || parseFloat(trackStyle.gap) || 0
                const distance = track.scrollWidth - paddingRight - lastCard.offsetWidth - gap
                return Math.max(0, distance)
            }

            // Paused tween — we drive it manually (no scrub)
            const tween = gsap.to(track, {
                x: () => -getScrollDistance(),
                ease: 'none',
                paused: true,
            })

            let maxProgress = 0      // only ever increases — cards never go backward
            let currentProgress = 0  // lerped toward maxProgress each frame
            let animComplete = false

            // Smooth ticker replaces scrub: 1
            // Lerps currentProgress toward maxProgress each animation frame
            const ticker = gsap.ticker.add(() => {
                if (currentProgress !== maxProgress) {
                    currentProgress += (maxProgress - currentProgress) * 0.12
                    // Snap when very close to avoid infinite loop
                    if (Math.abs(maxProgress - currentProgress) < 0.001) {
                        currentProgress = maxProgress
                    }
                    tween.progress(currentProgress)
                }
            })

            const st = ScrollTrigger.create({
                trigger: section,
                start: 'top top',
                end: () => '+=' + getScrollDistance(),
                pin: true,
                pinSpacing: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,
                // Only advance maxProgress when scrolling DOWN
                onUpdate: (self) => {
                    if (self.direction === 1) {
                        maxProgress = Math.max(maxProgress, self.progress)
                    }
                    // Scrolling UP: do nothing — maxProgress stays frozen
                    // Ticker will hold tween at current position
                },
                onLeave: () => {
                    // Horizontal scroll complete — snap to end and disable trigger
                    // so scrolling back UP won't re-pin this section
                    maxProgress = 1
                    currentProgress = 1
                    tween.progress(1)
                    gsap.set(track, { x: -getScrollDistance() })
                    animComplete = true
                    // Disable the trigger: removes pin so section scrolls normally upward
                    st.disable()
                },
                onLeaveBack: () => {
                    // User scrolled all the way back BEFORE the trigger (going up past start)
                    // Only reset if animation hasn't completed yet
                    if (!animComplete) {
                        maxProgress = 0
                        currentProgress = 0
                        tween.progress(0)
                        gsap.set(track, { x: 0 })
                    }
                },
                onRefresh: () => {
                    tween.invalidate()
                }
            })

            // ─── Reset on scroll-to-top or page refresh ───
            const handleScrollReset = () => {
                if (window.scrollY < 5 && animComplete) {
                    animComplete = false
                    maxProgress = 0
                    currentProgress = 0
                    gsap.set(track, { x: 0 })
                    tween.progress(0)
                    st.enable()
                    ScrollTrigger.refresh()
                }
            }
            window.addEventListener('scroll', handleScrollReset, { passive: true })

            // Cleanup
            return () => {
                gsap.ticker.remove(ticker)
                window.removeEventListener('scroll', handleScrollReset)
                st.kill()
                tween.kill()
                gsap.set(track, { x: 0 })
            }
        })

        return () => mm.revert()
    }, [])


    return (
        <>
            <section className="sumip-wrapper" ref={sectionRef} id="feedback">
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
                            </div>
                        </div>

                        {/* Right Side: Dark Carousel Container */}
                        <div className="right-carousel-container">
                            <div className="carousel-window">
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

export default CompactCardsSection
