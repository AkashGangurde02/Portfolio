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
            text: '“Akash played a key role in developing HempHop’s user interface and contributed meaningful improvements to Grubwala’s UI. His strong grasp of UI/UX fundamentals, creative problem-solving, and ability to translate requirements into practical design solutions positively influenced overall usability and project outcomes.” — Ms. Shraddha Nagrani, Head of Human Resources | Somvanshi Technologies Pvt. Ltd.',
            rating: '5/5'
        },
        {
            id: 2,
            date: 'October 2025',
            text: '“Akash delivered outstanding performance across HempHop UI modules and the digital reconstruction of the Somvanshi Technologies homepage. He combined strong technical understanding with creativity and attention to detail, effectively implementing feedback to produce high-quality results. His in-depth research on IT leaders, hemp industries, and consumer behavior added strategic value to the team’s approach, demonstrating initiative, cognitive strength, and professionalism.” — Ms. Shraddha Nagrani, Head of Human Resources | Somvanshi Technologies Private Limited',
            rating: '10/10'
        },
        {
            id: 3,
            date: 'November 2025',
            text: '“Akash significantly contributed to major Routematic wireframe modules and led user experience development for key Somvanshi Technologies website pages, including Home, Solutions, and Healthcare. His strong ownership, stakeholder communication, and attention to detail reflect maturity and the ability to handle complex tasks with minimal supervision.” — Ms. Shraddha Nagrani, Head of Human Resources | Somvanshi Technologies',
            rating: '4.5/5'
        },
        {
            id: 4,
            date: 'December 2025',
            text: '“Akash consistently delivered high-quality UI/UX work across the Somvanshi Technologies website and Grubwala applications. By engineering and implementing cohesive UI components across multiple modules, he strengthened visual consistency and usability while demonstrating reliability, initiative, and growing leadership capabilities.” — Ms. Shraddha Nagrani, Head of Human Resources | Somvanshi Technologies',
            rating: '5/5'
        },
        {
            id: 5,
            date: 'January 2026',
            text: '“Akash maintained excellent professionalism and delivered refined, user-centered interfaces for both the Somvanshi Technologies website and Grubwala applications. His ability to ensure design consistency, responsiveness, and usability across projects—combined with his receptiveness to feedback—positions him strongly for higher-impact design responsibilities.” — Ms. Shraddha Nagrani, Head of Human Resources | Somvanshi Technologies',
            rating: '5/5'
        }
    ]

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const track = trackRef.current
            const section = sectionRef.current
            const carouselWindow = section.querySelector('.carousel-window')

            if (!track || !section || !carouselWindow) return

            const getScrollDistance = () => {
                const lastCard = track.lastElementChild
                if (!lastCard) return 0

                const style = window.getComputedStyle(track)
                const paddingRight = parseFloat(style.paddingRight) || 0
                const gap = parseFloat(style.columnGap) || parseFloat(style.gap) || 0
                const secondLastCard = lastCard.previousElementSibling || track.firstElementChild
                const lastCardWidth = lastCard.offsetWidth
                const secondLastCardWidth = secondLastCard ? secondLastCard.offsetWidth : 0

                // User's specific logic for stopping point (centering last cards)
                const distance = track.scrollWidth - paddingRight - lastCardWidth - gap - secondLastCardWidth
                return Math.max(0, distance)
            }

            // Create the horizontal tween
            const tween = gsap.to(track, {
                x: () => -getScrollDistance(),
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: () => "+=" + getScrollDistance(),
                    pin: true,
                    scrub: 1,
                    invalidateOnRefresh: true,
                }
            })

        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
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

            {/* Optional Modal/Overlay if selectedCard is active (Currently unused visually in this snippet but state exists) */}
        </section>
    )
}

export default CompactCardsSection
