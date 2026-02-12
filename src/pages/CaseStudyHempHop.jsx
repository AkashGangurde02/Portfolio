import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './CaseStudyContactForm.css'
import Footer from '../components/Footer'

const CaseStudyHempHop = () => {
    const heroRef = useRef(null)
    const titleRef = useRef(null)
    const subtitleRef = useRef(null)
    const metaRef = useRef(null)
    const contentRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

            tl.from(titleRef.current, {
                y: 80,
                opacity: 0,
                duration: 1,
                delay: 0.3
            })
                .from(subtitleRef.current, {
                    y: 40,
                    opacity: 0,
                    duration: 0.8
                }, '-=0.5')
                .from(metaRef.current.children, {
                    y: 30,
                    opacity: 0,
                    duration: 0.6,
                    stagger: 0.1
                }, '-=0.4')
                .from(contentRef.current?.children || [], {
                    y: 50,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.15
                }, '-=0.4')
        }, heroRef)

        return () => ctx.revert()
    }, [])

    return (
        <div className="case-study-page">
            {/* Hero Section */}
            <section ref={heroRef} className="case-study-hero">
                <div className="case-study-container">
                    <h1 ref={titleRef} className="case-study-title">
                        Improving Product Discovery & Trust
                    </h1>
                    <p ref={subtitleRef} className="case-study-subtitle">
                        Hemp Hop — D2C Wellness E-commerce Platform
                    </p>

                    <div ref={metaRef} className="case-study-meta">
                        <div className="meta-item">
                            <span className="meta-label">Role</span>
                            <span className="meta-value">UX/UI Designer</span>
                        </div>
                        <div className="meta-item">
                            <span className="meta-label">Domain</span>
                            <span className="meta-value">Direct-to-Consumer (D2C), Wellness</span>
                        </div>
                        <div className="meta-item">
                            <span className="meta-label">Platform</span>
                            <span className="meta-value">Web (Responsive)</span>
                        </div>
                        <div className="meta-item">
                            <span className="meta-label">Focus Areas</span>
                            <span className="meta-value">Product Discovery • Trust Building • E-commerce UX</span>
                        </div>
                    </div>

                    <div ref={contentRef} className="case-study-content">
                        <div className="case-study-section">
                            <h2 className="section-title">Background</h2>
                            <p className="section-text">
                                Hemp Hop is a direct-to-consumer wellness brand offering hemp-based products in a category where trust,
                                clarity, and credibility play a decisive role in purchase behavior. Users often arrive with uncertainty—questions
                                around ingredients, benefits, safety, and legitimacy—which makes information hierarchy and product presentation critical.
                            </p>
                            <p className="section-text">
                                The objective of this project was to redesign the e-commerce experience to help users discover products effortlessly,
                                understand their value quickly, and feel confident completing a purchase—without overwhelming them.
                            </p>
                        </div>

                        <div className="case-study-section">
                            <h2 className="section-title">Problem Context</h2>
                            <p className="section-text">
                                Many wellness e-commerce platforms attempt to compensate for trust issues by adding more content. In practice,
                                this often leads to cluttered layouts, unclear differentiation between products, and weak trust signals.
                            </p>
                            <p className="section-text">
                                For Hemp Hop, this resulted in friction across key touchpoints—particularly the Product Listing Page (PLP) and
                                Product Detail Page (PDP). Users struggled to compare products efficiently and lacked reassurance at key decision
                                moments, increasing hesitation before purchase.
                            </p>
                        </div>

                        <div className="case-study-section">
                            <h2 className="section-title">Observations & UX Diagnosis</h2>
                            <p className="section-text">
                                An evaluation of the existing experience, along with competitive analysis, revealed a consistent behavioral pattern:
                                <strong> users scan before they read.</strong>
                            </p>
                            <p className="section-text">
                                However, critical information such as product benefits, usage guidance, and credibility indicators was either
                                buried deep in the layout or presented inconsistently. PLPs lacked scannability, while PDPs attempted to communicate
                                too much at once, ultimately weakening clarity rather than building confidence.
                            </p>
                            <p className="section-text">
                                The experience demanded effort at moments where users expected answers.
                            </p>
                        </div>

                        <div className="case-study-section">
                            <h2 className="section-title">Design Constraints</h2>
                            <p className="section-text">The redesign needed to operate within practical constraints:</p>
                            <ul className="content-list">
                                <li>The existing product catalog structure could not be changed</li>
                                <li>Marketing content was limited at launch</li>
                                <li>The system needed to scale as new products were added</li>
                            </ul>
                            <p className="section-text">
                                These limitations reinforced the need for a modular, system-driven approach rather than page-by-page customization.
                            </p>
                        </div>

                        <div className="case-study-section">
                            <h2 className="section-title">UX Strategy & Rationale</h2>
                            <p className="section-text">
                                The core strategy focused on <strong>clarity over complexity</strong>. Content was prioritized based on its role
                                in user decision-making—ensuring users could quickly understand:
                            </p>
                            <ul className="content-list">
                                <li>What the product is</li>
                                <li>Why it matters</li>
                                <li>Whether it's right for them</li>
                            </ul>
                            <p className="section-text">
                                Trust signals were integrated naturally into the flow instead of being treated as isolated badges or sections.
                                The goal was to build confidence without visual clutter.
                            </p>
                        </div>

                        <div className="case-study-section">
                            <h2 className="section-title">Solution Overview</h2>

                            <h3 className="subsection-title">Product Listing Page (PLP)</h3>
                            <p className="section-text">
                                The PLP was redesigned to surface essential information at a glance. Clear product imagery, benefit-led summaries,
                                pricing, and consistent layouts allowed users to compare options quickly without opening every product.
                            </p>

                            <h3 className="subsection-title">Product Detail Page (PDP)</h3>
                            <p className="section-text">
                                The PDP was structured into clear, digestible sections that supported both skimmers and detail-oriented users.
                                Benefits, ingredients, usage, and trust indicators were presented in a logical sequence aligned with user intent.
                            </p>
                            <p className="section-text">
                                Reusable components and consistent layouts ensured predictability across products, reducing friction throughout the journey.
                            </p>
                        </div>

                        <div className="case-study-section">
                            <h2 className="section-title">Before vs After — Design Comparison</h2>

                            <h3 className="subsection-title">Before: Existing Experience</h3>
                            <p className="section-text">
                                The previous version of the experience lacked a clear visual hierarchy and placed a high cognitive load on users.
                                Key information such as benefits, reassurance elements, and product clarity competed visually, making the flow feel
                                heavy and unintuitive.
                            </p>
                            <p className="section-text">
                                Users were frequently required to pause, interpret, and reassess—adding friction to what should have been a
                                straightforward shopping experience.
                            </p>

                            <h3 className="subsection-title">After: Redesigned Experience</h3>
                            <p className="section-text">
                                The redesigned experience emphasizes structure, hierarchy, and guided progression. Information is grouped logically,
                                visual priority directs attention naturally, and trust-building elements appear exactly when users need them—without
                                overwhelming the interface.
                            </p>
                            <p className="section-text">
                                The result is a calmer, more confident experience that supports faster decision-making and smoother completion.
                            </p>
                        </div>

                        <div className="case-study-section">
                            <h2 className="section-title">Wireframing & Structure Validation</h2>
                            <p className="section-text">
                                Early wireframes focused on restructuring information hierarchy before applying visual styles. This stage helped
                                validate layout decisions, content grouping, and flow logic, ensuring usability goals were met before moving into
                                high-fidelity design.
                            </p>
                        </div>

                        <div className="case-study-section">
                            <h2 className="section-title">UI & Visual Considerations</h2>
                            <p className="section-text">
                                The visual language followed a calm, premium wellness aesthetic. Typography, spacing, and color usage were
                                intentionally restrained to reinforce credibility and product quality.
                            </p>
                            <p className="section-text">Design decisions prioritized:</p>
                            <ul className="content-list">
                                <li>Readability over decoration</li>
                                <li>Consistency over novelty</li>
                                <li>Trust over visual noise</li>
                            </ul>
                        </div>

                        <div className="case-study-section">
                            <h2 className="section-title">Impact & Outcome</h2>
                            <ul className="content-list">
                                <li>Improved clarity and scannability across PLP and PDP</li>
                                <li>Stronger trust perception through structured content and visual cues</li>
                                <li>Faster design iteration enabled by a scalable design system</li>
                                <li>Smoother developer handoff through reusable, well-documented components</li>
                            </ul>
                        </div>

                        <div className="case-study-section">
                            <h2 className="section-title">Reflection</h2>
                            <p className="section-text">
                                This project reinforced the importance of simplifying information in trust-sensitive domains like wellness.
                                Thoughtful hierarchy, system-driven design, and intentional restraint proved far more effective than adding
                                more content or visual complexity.
                            </p>
                        </div>

                        <div className="case-study-section">
                            <h2 className="section-title">Final Thought</h2>
                            <p className="section-text">
                                Good design reduces doubt.<br />
                                Great UX builds confidence.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default CaseStudyHempHop
