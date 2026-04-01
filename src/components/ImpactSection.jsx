import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './ImpactSection.css'

gsap.registerPlugin(ScrollTrigger)

const bullets = [
    'Real-world product experience',
    'System-driven UX thinking',
    'Scalable design solutions',
    'Strong developer collaboration',
]

const metrics = [
    {
        number: 'Designed for 2000+',
        label: 'Designed for a product serving 2000+ users',
        dark: false,
    },
    {
        number: '4+',
        label: 'Real-world products designed across mobile & web',
        dark: true,

    },
    {
        number: 'End-to-End UX',
        label: 'From research → workflows → developer-ready UI',
        dark: false,
    },
]

const ImpactSection = () => {
    const sectionRef = useRef(null)
    const leftRef = useRef(null)
    const cardsRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Left column entrance
            gsap.from(leftRef.current.children, {
                scrollTrigger: {
                    trigger: leftRef.current,
                    start: 'top 88%',
                    toggleActions: 'play none none none',
                },
                y: 40,
                opacity: 0,
                duration: 0.75,
                stagger: 0.1,
                ease: 'power3.out',
            })

            // Cards staggered entrance
            gsap.from(cardsRef.current.children, {
                scrollTrigger: {
                    trigger: cardsRef.current,
                    start: 'top 88%',
                    toggleActions: 'play none none none',
                },
                y: 50,
                opacity: 0,
                duration: 0.7,
                stagger: 0.12,
                ease: 'power3.out',
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} className="impact-section" aria-label="Impact and Metrics">
            <div className="impact-inner">

                {/* ── Left ── */}
                <div ref={leftRef} className="impact-left">
                    <span className="impact-eyebrow">Why Work With Me</span>
                    <h2 className="impact-title">Impact</h2>

                    <ul className="impact-bullets">
                        {bullets.map((item, i) => (
                            <li key={i} className="impact-bullet">
                                <span className="impact-bullet-dot" aria-hidden="true" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* ── Metric Cards ── */}
                <div ref={cardsRef} className="impact-cards">
                    {metrics.map((m, i) => (
                        <div
                            key={i}
                            className={`impact-card${m.dark ? ' impact-card--dark' : ''}`}
                        >
                            {m.tag && (
                                <span className="impact-card-tag">{m.tag}</span>
                            )}
                            <span className="impact-card-number">{m.number}</span>
                            <p className="impact-card-label">{m.label}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default ImpactSection
