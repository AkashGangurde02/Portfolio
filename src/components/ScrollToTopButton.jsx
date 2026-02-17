import React, { useState, useEffect } from 'react'
import './ScrollToTopButton.css'

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => {
        // Trigger after scrolling past approx 3-4 sections (2500px)
        if (window.scrollY > 2500) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    return (
        <div
            className={`scroll-to-top-btn ${isVisible ? 'visible' : ''}`}
            onClick={scrollToTop}
            aria-label="Scroll to top"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="arrow-icon"
            >
                <path d="M18 15l-6-6-6 6" />
            </svg>
        </div>
    )
}

export default ScrollToTopButton
