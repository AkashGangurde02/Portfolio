import { useEffect, useRef } from 'react'
import { useSEO } from '../hooks/useSEO'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Work.css'
import contactFormImage from '../images/case-studies/case-study-1/contact-redesign.jpg'
import hempHopImage from '../images/case-studies/case-study-2/hemp-hop-cover.png'
import grubwalaImage from '../images/case-studies/case-study-3/grubwala-cover.jpg'
import spotifyImage from '../images/case-studies/case-study-4/spotify-hero.png'
import Footer from '../components/Footer'

gsap.registerPlugin(ScrollTrigger)

const Work = () => {
    useSEO({
      title: 'Work',
      description: 'Browse UX case studies by Akash Gangurde — covering food-tech, music UX, wellness e-commerce, and B2B SaaS. Mobile-first, user-centered design work.',
      canonical: '/work',
      ogImage: '/og/og-work.png',
    })
    const heroRef    = useRef(null)
    const cardsRef   = useRef(null)
    const ctaRef     = useRef(null)

    // All projects — featured first, rest follow
    const projects = [
        {
            id: 1,
            title: 'Reducing friction in lead capture workflows (B2B website)',
            description: 'Users were abandoning a critical contact form mid-way due to unclear field labels, confusing error states, and a fragmented layout.',
            image: contactFormImage,
            link: '/case-study',
            ctaText: 'View Case Study'
        },
        {
            id: 4,
            title: 'Spotify Desktop Mini Player Redesign',
            description: 'Designed a lyrics-in-mini-player feature for Spotify Desktop using progressive disclosure and hover-based interaction — bringing live lyrics to users without disrupting their workflow.',
            image: spotifyImage,
            link: '/case-study/spotify',
            ctaText: 'View Case Study'
        },
        {
            id: 3,
            title: 'Rebuilding a Trust-First Food Ordering Experience',
            description: 'Led the end-to-end UX redesign of a food delivery platform, improving usability, strengthening user trust, and creating a more emotionally engaging ordering experience.',
            image: grubwalaImage,
            link: '/case-study/grubwala',
            ctaText: 'View Case Study'
        }
    ]

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero
            gsap.from(heroRef.current.children, {
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out',
                delay: 0.2,
                clearProps: 'all'
            })

            // Cards
            if (cardsRef.current && cardsRef.current.children.length > 0) {
                gsap.set(cardsRef.current.children, { opacity: 0, y: 40 })
                gsap.to(cardsRef.current.children, {
                    opacity: 1,
                    y: 0,
                    duration: 0.65,
                    stagger: 0.12,
                    ease: 'power3.out',
                    delay: 0.4,
                    clearProps: 'all'
                })
            }

            // CTA
            gsap.from(ctaRef.current.children, {
                scrollTrigger: {
                    trigger: ctaRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                },
                y: 40,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out'
            })
        })

        const timer = setTimeout(() => ScrollTrigger.refresh(), 300)
        return () => {
            clearTimeout(timer)
            ctx.revert()
        }
    }, [])

    return (
        <div className="work-page">

            {/* ── Hero ── */}
            <section className="work-hero-modern">
                <div className="work-container" ref={heroRef}>
                    <h1 className="work-headline-modern">Featured UX Case Studies</h1>
                    <p className="work-subheadline-modern">
                        A selected showcase of projects exploring user-centered design, problem-solving, and seamless digital experiences.
                    </p>
                </div>
            </section>

            {/* ── Cards Grid ── */}
            <section className="work-cards-section">
                <div className="work-container">
                    <div className="wc-grid" ref={cardsRef}>
                        {projects.map((project) => (
                            <Link key={project.id} to={project.link} className="wc-card">
                                {/* Image */}
                                <div className="wc-image-wrap">
                                    <img src={project.image} alt={project.title} className="wc-image" />
                                </div>

                                {/* Body */}
                                <div className="wc-body">
                                    <h2 className="wc-title">{project.title}</h2>
                                    <p className="wc-desc">{project.description}</p>
                                </div>

                                {/* CTA */}
                                <div className="wc-footer">
                                    <span className="wc-cta-link">
                                        {project.ctaText}
                                        <svg className="wc-cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none">
                                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Bottom CTA ── */}
            <section className="work-bottom-cta">
                <div className="cta-container" ref={ctaRef}>
                    <h2 className="cta-headline">Have a project in mind?</h2>
                    <p className="cta-subheadline">Let's build something users love, together.</p>
                    <Link to="/contact" className="cta-button-large">
                        Let's Talk
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Work
