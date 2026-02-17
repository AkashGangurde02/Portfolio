import { useState, useEffect } from 'react'
import './HomeSubNavbar.css'

const HomeSubNavbar = () => {
    const [activeSection, setActiveSection] = useState('home')

    const navItems = [
        { id: 'home', label: 'Overview' },
        { id: 'about', label: 'About' },
        { id: 'experience', label: 'Experience' },
        { id: 'work', label: 'Case Studies' },
        { id: 'feedback', label: 'Feedback' },
        { id: 'insights', label: 'Insights' }
    ]

    useEffect(() => {
        const handleScroll = () => {
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

    const scrollToSection = (id) => {
        const section = document.getElementById(id)
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' })
            setActiveSection(id)
        }
    }

    return (
        <div className="home-sub-navbar">
            <div className="sub-nav-container">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        className={`sub-nav-item ${activeSection === item.id ? 'active' : ''}`}
                        onClick={() => scrollToSection(item.id)}
                    >
                        {item.label}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default HomeSubNavbar
