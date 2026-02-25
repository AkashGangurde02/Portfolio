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
    const titleRef = useRef(null)
    const gridRef = useRef(null)
    const ctaRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Title animation
            gsap.from(titleRef.current.children, {
                y: 60,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power3.out'
            })

            // Grid items animation
            gsap.from(gridRef.current.children, {
                scrollTrigger: {
                    trigger: gridRef.current,
                    start: 'top 90%',
                    toggleActions: 'play none none reverse'
                },
                y: 80,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out'
            })

            // CTA animation
            gsap.from(ctaRef.current.children, {
                scrollTrigger: {
                    trigger: ctaRef.current,
                    start: 'top 90%',
                    toggleActions: 'play none none reverse'
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out'
            })
        })

        return () => ctx.revert()
    }, [])

    const projects = [
        {
            id: 1,
            title: 'Improving Contact Form Usability',
            category: 'UX/UI REDESIGN',
            description: 'Redesigned the contact form to enhance user experience with improved field validation, clear error messaging, and a streamlined layout that increased form completion rates by 40%.',
            image: contactFormImage,
            link: '/case-study',
            ctaText: 'View Case Study'
        },
        // {
        //     id: 2,
        //     title: 'Improving Product Discovery & Trust',
        //     category: 'E-COMMERCE UX',
        //     description: 'Redesigned the product and collection pages of a D2C wellness e-commerce platform to improve product discovery, information clarity, and purchase confidence.',
        //     image: hempHopImage,
        //     link: '/case-study/hemp-hop',
        //     ctaText: 'View Case Study'
        // },
        // {
        //     id: 3,
        //     title: 'Rebuilding a Trust-First Food Ordering Experience',
        //     category: 'MOBILE APP UX',
        //     description: 'Led the end-to-end UX redesign of a food delivery platform, improving usability, strengthening user trust, and creating a more emotionally engaging ordering experience.',
        //     image: grubwalaImage,
        //     link: '/case-study/grubwala',
        //     large: true,
        //     ctaText: 'View Case Study'
        // }
    ]

    return (
        <div className="work-page">
            <section className="work-hero">
                <div className="work-container">
                    <h1 ref={titleRef} className="work-page-title">
                        <span>What I've been </span>
                        <span className="title-highlight">working on</span>
                        <span> so far</span>
                    </h1>
                </div>
            </section>

            <section className="work-portfolio">
                <div className="work-container">
                    <div ref={gridRef} className="work-grid">
                        {projects.map((project) => (
                            <Link
                                key={project.id}
                                to={project.link}
                                className={`work-item ${project.large ? 'large' : ''}`}
                            >
                                <div className="work-item-content">
                                    <span className="work-item-category">{project.category}</span>
                                    <h3 className="work-item-title">{project.title}</h3>
                                    <p className="work-item-description">{project.description}</p>
                                    <span className="work-item-cta">{project.ctaText}</span>
                                </div>
                                <div className="work-item-image">
                                    <img src={project.image} alt={project.title} />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>


            <section ref={ctaRef} className="work-page-cta">
                <div className="work-container">
                    <h2 className="work-cta-title">
                        Want to create something <span className="title-highlight">awesome?</span>
                    </h2>
                    <Link to="/contact" className="work-cta-button">
                        Let's Talk
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Work
