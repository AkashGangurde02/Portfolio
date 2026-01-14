import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Work.css'
import contactFormImage from '../images/Contact-Redesign.jpg'

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
            title: 'Estatery',
            category: 'UI/UX',
            image: contactFormImage,
            link: '/case-study/contact-form',
            featured: true
        },
        {
            id: 2,
            title: 'Wepay',
            category: 'Branding',
            image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
            link: '/case-study/wepay'
        },
        {
            id: 3,
            title: 'Somvanshi Technologies',
            category: 'Website Redesign',
            image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop',
            link: '/case-study/somvanshi',
            large: true
        },
        {
            id: 4,
            title: 'Estatery',
            category: 'UI/UX',
            image: contactFormImage,
            link: '/case-study/contact-form'
        },
        {
            id: 5,
            title: 'Wepay',
            category: 'Branding',
            image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
            link: '/case-study/wepay'
        }
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
                                className={`work-item ${project.featured ? 'featured' : ''} ${project.large ? 'large' : ''}`}
                            >
                                <div className="work-item-image">
                                    <img src={project.image} alt={project.title} />
                                </div>
                                <div className="work-item-info">
                                    <div className="work-item-details">
                                        <h3 className="work-item-title">{project.title}</h3>
                                        <p className="work-item-category">{project.category}</p>
                                    </div>
                                    <div className="work-item-arrow">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section ref={ctaRef} className="work-cta">
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
        </div>
    )
}

export default Work
