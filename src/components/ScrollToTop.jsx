import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
    const { pathname } = useLocation()

    useEffect(() => {
        // Immediately scroll to top
        window.scrollTo(0, 0)

        // Also set it after a brief delay to ensure smooth scroll resets
        setTimeout(() => {
            window.scrollTo(0, 0)
        }, 10)
    }, [pathname])

    return null
}

export default ScrollToTop
