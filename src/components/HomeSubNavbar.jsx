import { useState, useEffect, useRef } from 'react'
import './HomeSubNavbar.css'

const HomeSubNavbar = () => {
    const [activeSection, setActiveSection] = useState('home')
    const [isVisible, setIsVisible] = useState(false)
    const navContainerRef = useRef(null)
    const indicatorRef = useRef(null)
    const itemRefs = useRef({})

    const navItems = [
        { id: 'about', label: 'About' },
        { id: 'experience', label: 'Experience' },
        { id: 'work', label: 'Case Studies' },
        { id: 'feedback', label: 'Feedback' },
        { id: 'insights', label: 'Insights' }
    ]

    // Update indicator position when activeSection changes
    useEffect(() => {
        const activeButton = itemRefs.current[activeSection]
        const container = navContainerRef.current
        const indicator = indicatorRef.current

        if (activeButton && container && indicator) {
            const containerRect = container.getBoundingClientRect()
            const buttonRect = activeButton.getBoundingClientRect()

            const left = buttonRect.left - containerRect.left
            const width = buttonRect.width

            indicator.style.left = `${left}px`
            indicator.style.width = `${width}px`
            indicator.style.opacity = '1'
        }
    }, [activeSection])

    useEffect(() => {
        const handleScroll = () => {
            // Show sub-navbar at same trigger as WhatsApp float button
            setIsVisible(window.scrollY > 800)

            const sections = navItems.map(item => {
                const el = document.getElementById(item.id)
                if (el) return { id: item.id, top: el.getBoundingClientRect().top }
                return null
            }).filter(Boolean)

            // Find the current section by checking which one is closest to the top (or center)
            const viewportPosition = window.innerHeight / 3 // Trigger a bit earlier than middle

            for (let i = sections.length - 1; i >= 0; i--) {
                if (sections[i].top <= viewportPosition) {
                    setActiveSection(sections[i].id)
                    break
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll() // Initial check
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Recalculate indicator on resize
    useEffect(() => {
        const handleResize = () => {
            const activeButton = itemRefs.current[activeSection]
            const container = navContainerRef.current
            const indicator = indicatorRef.current

            if (activeButton && container && indicator) {
                const containerRect = container.getBoundingClientRect()
                const buttonRect = activeButton.getBoundingClientRect()

                indicator.style.left = `${buttonRect.left - containerRect.left}px`
                indicator.style.width = `${buttonRect.width}px`
            }
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [activeSection])

    const scrollToSection = (id) => {
        const section = document.getElementById(id)
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' })
            setActiveSection(id)
        }
    }

    return (
        <div className={`home-sub-navbar ${isVisible ? 'sub-nav-visible' : 'sub-nav-hidden'}`}>
            <div className="sub-nav-container" ref={navContainerRef}>
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        ref={(el) => (itemRefs.current[item.id] = el)}
                        className={`sub-nav-item ${activeSection === item.id ? 'active' : ''}`}
                        onClick={() => scrollToSection(item.id)}
                    >
                        {item.label}
                    </button>
                ))}
                {/* Sliding indicator */}
                <div className="sub-nav-indicator" ref={indicatorRef}></div>
            </div>
        </div>
    )
}

export default HomeSubNavbar
