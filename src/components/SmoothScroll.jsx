import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SmoothScroll = ({ children }) => {
    useEffect(() => {
        // Configure smooth scroll behavior
        const smoothScroll = () => {
            let scrollPos = 0
            let targetScrollPos = 0
            const ease = 0.06 // Lower value = smoother (0.06 is very smooth and luxurious)
            const wheelMultiplier = 0.8 // Reduce scroll speed for more control

            const smoothScrollUpdate = () => {
                scrollPos += (targetScrollPos - scrollPos) * ease

                if (Math.abs(targetScrollPos - scrollPos) < 0.5) {
                    scrollPos = targetScrollPos
                }

                window.scrollTo(0, scrollPos)

                if (scrollPos !== targetScrollPos) {
                    requestAnimationFrame(smoothScrollUpdate)
                }
            }

            const handleWheel = (e) => {
                e.preventDefault()
                targetScrollPos += e.deltaY * wheelMultiplier

                // Clamp scroll position
                const maxScroll = document.documentElement.scrollHeight - window.innerHeight
                targetScrollPos = Math.max(0, Math.min(targetScrollPos, maxScroll))

                smoothScrollUpdate()
            }

            const handleTouchStart = (e) => {
                const touch = e.touches[0]
                window.touchStartY = touch.clientY
            }

            const handleTouchMove = (e) => {
                if (!window.touchStartY) return

                const touch = e.touches[0]
                const deltaY = window.touchStartY - touch.clientY

                targetScrollPos += deltaY * 2

                const maxScroll = document.documentElement.scrollHeight - window.innerHeight
                targetScrollPos = Math.max(0, Math.min(targetScrollPos, maxScroll))

                window.touchStartY = touch.clientY
                smoothScrollUpdate()
            }

            // Add event listeners
            window.addEventListener('wheel', handleWheel, { passive: false })
            window.addEventListener('touchstart', handleTouchStart, { passive: true })
            window.addEventListener('touchmove', handleTouchMove, { passive: true })

            // Initialize ScrollTrigger
            ScrollTrigger.config({
                syncInterval: 10,
                smoothChildTiming: true
            })

            ScrollTrigger.update()

            return () => {
                window.removeEventListener('wheel', handleWheel)
                window.removeEventListener('touchstart', handleTouchStart)
                window.removeEventListener('touchmove', handleTouchMove)
            }
        }

        // Only apply smooth scroll on desktop
        if (window.innerWidth > 768) {
            const cleanup = smoothScroll()
            return cleanup
        }
    }, [])

    return <>{children}</>
}

export default SmoothScroll
