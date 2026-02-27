import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './CaseStudyContactForm.css'
import grubwalaImage from '../images/case-studies/case-study-3/grubwala-cover.png'
import Footer from '../components/Footer'

gsap.registerPlugin(ScrollTrigger)

const processSteps = [
    { num: '01', label: 'Audit', desc: 'Used the app extensively as a real user to uncover friction points, revealing users were asked to commit too early.' },
    { num: '02', label: 'Research', desc: 'Studied market leaders (Swiggy, Zomato, Blinkit) to identify core UX paradigms for food delivery systems.' },
    { num: '03', label: 'Restructure', desc: 'Combined registration/login, overhauled the home page hierarchy, and replaced persuasive visuals with clear, guiding UI elements.' },
    { num: '04', label: 'Scale', desc: 'Created a mobile-first design system ensuring consistency, edge-case coverage, and smoother handoffs to developers.' },
]

const solutions = [
    { title: 'Forgiving Onboarding', text: 'Merged registration and sign-in using OTP to lower psychological commitment and shorten the path to food.' },
    { title: 'Emotional Framing', text: 'Replaced generic images with welcome screens centered on warmth and familiarity to match homemade food values.' },
    { title: 'Instinctual Discovery', text: 'Simplified food cards and pricing so users could compare options reflexively rather than analytically.' },
    { title: 'Confident Checkout', text: 'Removed redundant review steps to create clear progression, making checkout a moment of confidence, not doubt.' },
]

const CaseStudyGrubwala = () => {
    const heroRef = useRef(null)
    const sectionsRef = useRef([])

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero stagger entrance
            gsap.from('.cs2-hero-tag, .cs2-hero-title, .cs2-hero-sub, .cs2-meta-row', {
                y: 40, opacity: 0, duration: 0.9, stagger: 0.12, ease: 'power3.out', delay: 0.1,
            })
            gsap.from('.cs2-hero-image', {
                y: 60, opacity: 0, duration: 1.1, ease: 'power3.out', delay: 0.3,
            })

            // Scroll sections
            sectionsRef.current.forEach((el) => {
                if (!el) return
                gsap.from(el, {
                    scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
                    y: 50, opacity: 0, duration: 0.85, ease: 'power3.out',
                })
            })

            // Process cards staggered
            gsap.from('.cs2-step', {
                scrollTrigger: { trigger: '.cs2-steps', start: 'top 85%' },
                y: 60, opacity: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
            })

            // Solution cards staggered
            gsap.from('.cs2-sol-card', {
                scrollTrigger: { trigger: '.cs2-sol-grid', start: 'top 85%' },
                y: 40, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
            })
        })

        return () => ctx.revert()
    }, [])

    const addSection = (el) => { if (el && !sectionsRef.current.includes(el)) sectionsRef.current.push(el) }

    return (
        <div className="cs2-page">

            {/* ── BREADCRUMB NAV ── */}
            <div className="cs2-breadcrumb">
                <Link to="/work" className="cs2-breadcrumb-link">← Back to Work</Link>
                <span className="cs2-breadcrumb-sep">/</span>
                <span className="cs2-breadcrumb-current">Grubwala Redesign</span>
            </div>

            {/* ══════════════════════════════════
          HERO
      ══════════════════════════════════ */}
            <section ref={heroRef} className="cs2-hero">
                <div className="cs2-hero-inner">

                    <div className="cs2-hero-left">
                        <span className="cs2-hero-tag">Mobile App UX</span>
                        <h1 className="cs2-hero-title">
                            Rebuilding a<br />Trust-First<br />Food Experience
                        </h1>
                        <p className="cs2-hero-sub">
                            Grubwala is a delivery app built around local homemade food. This project was a complete end-to-end UX redesign shifting from fragmented screens to an emotional, cohesive journey.
                        </p>

                        <div className="cs2-meta-row">
                            <div className="cs2-meta-item">
                                <span className="cs2-meta-label">Role</span>
                                <span className="cs2-meta-val">UI/UX Designer</span>
                            </div>
                            <div className="cs2-meta-item">
                                <span className="cs2-meta-label">Domain</span>
                                <span className="cs2-meta-val">Food Delivery</span>
                            </div>
                            <div className="cs2-meta-item">
                                <span className="cs2-meta-label">Platform</span>
                                <span className="cs2-meta-val">Mobile App (iOS/Android)</span>
                            </div>
                            <div className="cs2-meta-item">
                                <span className="cs2-meta-label">Scope</span>
                                <span className="cs2-meta-val">End-to-End Redesign</span>
                            </div>
                        </div>
                    </div>

                    <div className="cs2-hero-right">
                        <div className="cs2-hero-image">
                            <img src={grubwalaImage} alt="Grubwala Mobile UX" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
          DARK STAT BAND
      ══════════════════════════════════ */}
            <section ref={addSection} className="cs2-stat-band">
                <div className="cs2-stat-inner">
                    <div className="cs2-stat-item">
                        <span className="cs2-stat-num">20+</span>
                        <span className="cs2-stat-label">Screens Overhauled</span>
                    </div>
                    <div className="cs2-stat-divider" />
                    <div className="cs2-stat-item">
                        <span className="cs2-stat-num">1</span>
                        <span className="cs2-stat-label">Design System Created</span>
                    </div>
                    <div className="cs2-stat-divider" />
                    <div className="cs2-stat-item">
                        <span className="cs2-stat-num">0</span>
                        <span className="cs2-stat-label">Friction In Onboarding</span>
                    </div>
                    <div className="cs2-stat-divider" />
                    <div className="cs2-stat-item">
                        <span className="cs2-stat-num">100%</span>
                        <span className="cs2-stat-label">End-to-End Ownership</span>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
          OVERVIEW — two col
      ══════════════════════════════════ */}
            <section ref={addSection} className="cs2-section cs2-overview">
                <div className="cs2-container cs2-two-col">
                    <div className="cs2-overview-left">
                        <h2 className="cs2-heading">Designing for food is designing for emotion</h2>
                        <p className="cs2-body">
                            Users don't open Grubwala just because they are hungry. They open it because they want comfort, familiarity, and food that feels safe and personal. This changes the emotional stakes of every design decision.
                        </p>
                        <p className="cs2-body">
                            When I began working on Grubwala, the product already functioned, but it didn't flow. Each screen solved its own problem without acknowledging the user's broader journey. The task wasn't just visual polish — it was rebuilding the entire mobile application as an intentional, continuous product experience.
                        </p>
                    </div>
                    <div className="cs2-overview-right">
                        <div className="cs2-image-stack" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div className="cs2-img-card" style={{ transform: 'none', position: 'relative', width: '100%' }}>
                                <img src={grubwalaImage} alt="Grubwala Mobile Screens" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
          PROBLEM — full-width dark
      ══════════════════════════════════ */}
            <section ref={addSection} className="cs2-section cs2-problem-band">
                <div className="cs2-container">
                    <h2 className="cs2-heading cs2-heading--light cs2-heading--center">
                        Users were working too hard<br />to reach food
                    </h2>
                    <div className="cs2-problem-grid">
                        <div className="cs2-problem-card">
                            <span className="cs2-problem-num">01</span>
                            <h3>High Upfront Effort</h3>
                            <p>Onboarding demanded email registration and passwords, asking users to heavily invest effort before they could even evaluate the food offerings.</p>
                        </div>
                        <div className="cs2-problem-card">
                            <span className="cs2-problem-num">02</span>
                            <h3>Fragmented Home</h3>
                            <p>The home screen attempted to showcase kitchens, categories, and offers all at once without clear priority, confusing users instead of guiding them.</p>
                        </div>
                        <div className="cs2-problem-card">
                            <span className="cs2-problem-num">03</span>
                            <h3>Heavy Checkouts</h3>
                            <p>Cart flows repeatedly asked users to confirm, review, and reconsider details. It introduced anxiety where there should only be confidence.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
          DESIGN PROCESS
      ══════════════════════════════════ */}
            <section ref={addSection} className="cs2-section cs2-process">
                <div className="cs2-container">
                    <h2 className="cs2-heading cs2-center">How I approached the problem</h2>

                    <div className="cs2-steps">
                        {processSteps.map((step, i) => (
                            <div key={i} className="cs2-step">
                                <div className="cs2-step-top">
                                    <span className="cs2-step-num">{step.num}</span>
                                    {i < processSteps.length - 1 && <div className="cs2-step-connector" />}
                                </div>
                                <h3 className="cs2-step-label">{step.label}</h3>
                                <p className="cs2-step-desc">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
          SOLUTION HIGHLIGHTS
      ══════════════════════════════════ */}
            <section ref={addSection} className="cs2-section cs2-solutions">
                <div className="cs2-container">
                    <h2 className="cs2-heading cs2-center">Solution Highlights</h2>

                    <div className="cs2-sol-grid">
                        {solutions.map((s, i) => (
                            <div key={i} className="cs2-sol-card">
                                <div className="cs2-sol-icon-wrap">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <h3 className="cs2-sol-title">{s.title}</h3>
                                <p className="cs2-sol-text">{s.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
          IMPACT — dark band
      ══════════════════════════════════ */}
            <section ref={addSection} className="cs2-section cs2-impact-band">
                <div className="cs2-container">
                    <h2 className="cs2-heading cs2-heading--light cs2-center">Impact &amp; Reflection</h2>

                    <div className="cs2-impact-grid">
                        <div className="cs2-impact-card">
                            <span className="cs2-impact-icon">
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                                    <circle cx="14" cy="14" r="12" stroke="currentColor" strokeWidth="1.5" />
                                    <path d="M9 14l3.5 3.5L19 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            <h3>Higher Conversions</h3>
                            <p>Fast tracked value-delivery right out of the gate by replacing painful logins with seamless OTP onboarding methodologies.</p>
                        </div>
                        <div className="cs2-impact-card">
                            <span className="cs2-impact-icon">
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                                    <circle cx="14" cy="14" r="12" stroke="currentColor" strokeWidth="1.5" />
                                    <path d="M14 8v6l4 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                                </svg>
                            </span>
                            <h3>Guided Navigation</h3>
                            <p>Re-prioritized the home experience. By answering "What do I feel like eating?", we dramatically improved scannability and direction.</p>
                        </div>
                        <div className="cs2-impact-card">
                            <span className="cs2-impact-icon">
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                                    <circle cx="14" cy="14" r="12" stroke="currentColor" strokeWidth="1.5" />
                                    <path d="M10 17c0-3 8-3 8 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                                    <circle cx="11" cy="12" r="1.5" fill="currentColor" />
                                    <circle cx="17" cy="12" r="1.5" fill="currentColor" />
                                </svg>
                            </span>
                            <h3>Holistic Flow</h3>
                            <p>Every phase, even edge cases or empty constraints, was mapped through a cohesive design system treating failures as warmly as successes.</p>
                        </div>
                    </div>

                    <blockquote className="cs2-reflection">
                        "Users don't continually desire new features within service applications—they primarily want fewer obstacles when attempting to satisfy an instinct."
                    </blockquote>
                </div>
            </section>

            {/* ══════════════════════════════════
          CTA
      ══════════════════════════════════ */}
            <section ref={addSection} className="cs2-section cs2-cta">
                <div className="cs2-container cs2-cta-inner">
                    <h2 className="cs2-cta-heading">Want to see more of my work?</h2>
                    <p className="cs2-cta-sub">Back to the primary case studies or drop me an email.</p>
                    <div className="cs2-cta-actions">
                        <Link to="/work" className="cs2-btn cs2-btn-ghost">← Back to Work</Link>
                        <Link to="/contact" className="cs2-btn cs2-btn-primary">
                            Let's Talk →
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default CaseStudyGrubwala
