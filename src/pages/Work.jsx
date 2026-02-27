import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Work.css'
import contactFormImage from '../images/case-studies/case-study-1/contact-redesign.jpg'
import hempHopImage from '../images/case-studies/case-study-2/hemp-hop-cover.png'
import grubwalaImage from '../images/case-studies/case-study-3/grubwala-cover.png'
import Footer from '../components/Footer'

gsap.registerPlugin(ScrollTrigger)

const Work = () => {
    const heroRef = useRef(null)
    const featuredRef = useRef(null)
    const gridRef = useRef(null)
    const ctaRef = useRef(null)

    const featuredProject = {
        id: 'featured',
        title: 'Improving Contact Form Usability',
        category: 'UX/UI REDESIGN',
        description: 'Redesigned the entire contact flow to drastically enhance user experience through better field validation, intelligent error messaging, and a streamlined layout resulting in a 40% increase in completion rates.',
        image: contactFormImage,
        link: '/case-study',
        ctaText: 'View Case Study',
        tag: 'Featured'
    }

    const projects = [
        {
            id: 2,
            title: 'Improving Product Discovery & Trust',
            category: 'E-COMMERCE UX',
            description: 'Redesigned the product and collection pages of a D2C wellness e-commerce platform to improve product discovery, information clarity, and purchase confidence.',
            image: hempHopImage,
            link: '/case-study/hemp-hop',
            ctaText: 'View Case Study'
        },
        {
            id: 3,
            title: 'Rebuilding a Trust-First Food Ordering Experience',
            category: 'MOBILE APP UX',
            description: 'Led the end-to-end UX redesign of a food delivery platform, improving usability, strengthening user trust, and creating a more emotionally engaging ordering experience.',
            image: grubwalaImage,
            link: '/case-study/grubwala',
            ctaText: 'View Case Study'
        }
    ]

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero text animation
            gsap.from(heroRef.current.children, {
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out',
                delay: 0.2
            })

            // Featured project animation
            gsap.from(featuredRef.current, {
                scrollTrigger: {
                    trigger: featuredRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                },
                y: 60,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out'
            })

            // Grid items staggered reveal
            gsap.from(gridRef.current.children, {
                scrollTrigger: {
                    trigger: gridRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                },
                y: 40,
                opacity: 0,
                duration: 0.6,
                stagger: 0.15,
                ease: 'power3.out'
            })

            // CTA section animation
            gsap.from(ctaRef.current.children, {
                scrollTrigger: {
                    trigger: ctaRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                },
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out'
            })
        })

        return () => ctx.revert()
    }, [])

    return (
        <div className="work-page">
            {/* Hero Section */}
            <section className="work-hero-modern">
                <div className="work-container-narrow" ref={heroRef}>
                    <h1 className="work-headline-modern">Featured UX Case Studies</h1>
                    <p className="work-subheadline-modern">
                        A selected showcase of projects exploring user-centered design, problem-solving, and seamless digital experiences.
                    </p>
                </div>
            </section>

            {/* Featured Project */}
            <section className="work-featured-section">
                <div className="work-container" ref={featuredRef}>
                    <Link to={featuredProject.link} className="featured-card">
                        <div className="featured-card-content">
                            <div className="featured-card-header">
                                <span className="pill-badge featured-badge">{featuredProject.tag}</span>
                                <span className="pill-badge category-badge">{featuredProject.category}</span>
                            </div>
                            <h2 className="featured-title">{featuredProject.title}</h2>
                            <p className="featured-description">{featuredProject.description}</p>
                            <span className="primary-btn">
                                {featuredProject.ctaText}
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </div>
                        <div className="featured-card-image">
                            <div className="image-wrapper">
                                <img src={featuredProject.image} alt={featuredProject.title} />
                            </div>
                        </div>
                    </Link>
                </div>
            </section>

            {/* Projects Grid */}
            {/* <section className="work-grid-section">
                <div className="work-container">
                    <div className="modern-work-grid" ref={gridRef}>
                        {projects.map((project) => (
                            <Link key={project.id} to={project.link} className="modern-work-card">
                                <div className="card-image-container">
                                    <img src={project.image} alt={project.title} />
                                </div>
                                <div className="card-content">
                                    <div className="card-tags">
                                        <span className="pill-badge category-badge">{project.category}</span>
                                    </div>
                                    <h3 className="card-title">{project.title}</h3>
                                    <p className="card-description">{project.description}</p>
                                    <span className="text-cta">
                                        {project.ctaText}
                                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                                            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* Bottom CTA Section */}
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
