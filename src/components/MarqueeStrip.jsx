import React from 'react'
import './MarqueeStrip.css'

const MarqueeStrip = () => {
    const items = [
        'App Design',
        'Website Design',
        'Dashboard',
        'Wireframe',
        'User Research',
        'Prototyping'
    ]

    // Create block items for seamless looping
    const blockItems = [...items, ...items]

    return (
        <div className="marquee-main-strip">
            <div className="marquee-content">
                {/* First block */}
                {blockItems.map((item, index) => (
                    <div key={`original-${index}`} className="marquee-item">
                        <span>{item}</span>
                        <span className="marquee-separator">✻</span>
                    </div>
                ))}
                {/* Duplicate block for seamless loop */}
                {blockItems.map((item, index) => (
                    <div key={`duplicate-${index}`} className="marquee-item">
                        <span>{item}</span>
                        <span className="marquee-separator">✻</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MarqueeStrip
