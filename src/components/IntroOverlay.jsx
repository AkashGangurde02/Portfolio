import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import './IntroOverlay.css'

const IntroOverlay = () => {
    const overlayRef = useRef(null)
    const watermarkRef = useRef(null)
    const line1Ref = useRef(null)
    const line2Ref = useRef(null)
    const shutterTopRef = useRef(null)
    const shutterBottomRef = useRef(null)
    const finalFrameRef = useRef(null)
    const [show, setShow] = useState(true)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                onComplete: () => {
                    gsap.set(overlayRef.current, { display: 'none' })
                }
            })

            // Initial Setup
            gsap.set(overlayRef.current, { visibility: 'visible' })

            // FRAME 1: Watermark "portfolio" + "UX/UI Design" appears
            tl.fromTo(watermarkRef.current, {
                opacity: 0,
                scale: 0.9
            }, {
                opacity: 1,
                scale: 1,
                duration: 0.8,
                ease: 'power3.out'
            })
                .fromTo([line1Ref.current, line2Ref.current], {
                    y: 120,
                    opacity: 0
                }, {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: 'power4.out'
                }, '-=0.4')

                // Hold to appreciate Frame 1
                .to({}, { duration: 0.8 })

                // FRAMES 2-4: Make shutters visible and close diagonally
                // Also fade out the original text as lines close
                .to([shutterTopRef.current, shutterBottomRef.current], {
                    opacity: 1,
                    duration: 0.2
                }, 'close')
                .to([watermarkRef.current, line1Ref.current, line2Ref.current], {
                    opacity: 0,
                    duration: 0.5
                }, 'close+=0.3')
                .to(shutterTopRef.current, {
                    y: '100vh',
                    duration: 0.8,
                    ease: 'power2.inOut'
                }, 'close+=0.1')
                .to(shutterBottomRef.current, {
                    y: '-100vh',
                    duration: 0.8,
                    ease: 'power2.inOut'
                }, 'close+=0.1')

                // FRAME 5: SNAP to horizontal rotation (both shutters rotate from -30deg to 0deg)
                .to([shutterTopRef.current, shutterBottomRef.current], {
                    rotation: 30, // Counteract the CSS -30deg to get to 0deg total
                    duration: 0.3,
                    ease: 'power2.inOut'
                })

                // FRAME 6: Fade lines to light grey
                .to([shutterTopRef.current, shutterBottomRef.current], {
                    borderColor: '#e0e0e0',
                    duration: 0.5,
                    ease: 'power2.inOut'
                })

                // FRAME 7: Hide shutters and show final frame
                .to([shutterTopRef.current, shutterBottomRef.current], {
                    opacity: 0,
                    duration: 0.4
                })
                // Old text already hidden during close animation
                .to(finalFrameRef.current, {
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power3.out'
                }, '-=0.3')

                // Hold Frame 7
                .to({}, { duration: 0.8 })

                // EXIT: Fade entire overlay quickly
                .to(overlayRef.current, {
                    opacity: 0,
                    duration: 0.4,
                    ease: 'power2.inOut'
                })

        }, overlayRef)

        return () => ctx.revert()
    }, [])

    if (!show) return null

    return (
        <div ref={overlayRef} className="intro-overlay">
            {/* Shutters - Diagonal lines that close */}
            <div ref={shutterTopRef} className="intro-shutter shutter-top"></div>
            <div ref={shutterBottomRef} className="intro-shutter shutter-bottom"></div>

            <div className="intro-container">
                {/* Background watermark */}
                <h1 ref={watermarkRef} className="intro-watermark">
                    portfolio
                </h1>

                {/* Initial text (Frames 1-4) */}
                <div className="intro-main-text">
                    <div className="intro-text-row">
                        <span ref={line1Ref} className="intro-line-text">UX/UI</span>
                    </div>
                    <div className="intro-text-row">
                        <span ref={line2Ref} className="intro-line-text">Design</span>
                    </div>
                </div>


                {/* Final frame content (Frame 7) */}
                <div ref={finalFrameRef} className="intro-final-frame">
                    {/* <p className="final-uxui">UX/UI</p> */}
                    <div className="final-name-section">
                        <p className="final-name">Akash Gangurde</p>
                        <div className="final-underline"></div>
                        <p className="final-year">2026</p>
                    </div>
                    {/* <p className="final-role">Designer</p> */}
                </div>
            </div>
        </div>
    )
}

export default IntroOverlay
