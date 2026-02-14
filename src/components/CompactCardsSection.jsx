import React from 'react'
import './CompactCardsSection.css'

const CompactCardsSection = () => {
    const cards = [
        {
            id: 1,
            icon: '🎨',
            title: 'Design Excellence',
            description: 'Crafting intuitive user experiences with modern aesthetics'
        },
        {
            id: 2,
            icon: '⚡',
            title: 'Fast Delivery',
            description: 'Quick turnaround without compromising on quality'
        },
        {
            id: 3,
            icon: '🚀',
            title: 'Innovation First',
            description: 'Staying ahead with cutting-edge design trends'
        }
    ]

    return (
        <section className="compact-cards-section">
            <div className="compact-cards-container">
                <div className="compact-cards-wrapper">
                    <div className="compact-cards-left">
                        <h2 className="compact-section-title">What Our Customers Says</h2>
                        <p className="compact-section-description">
                            Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common.
                        </p>
                    </div>
                    <div className="compact-cards-right">
                        {cards.map((card) => (
                            <div key={card.id} className="compact-card">
                                <div className="compact-card-icon">{card.icon}</div>
                                <div className="compact-card-content">
                                    <h3 className="compact-card-title">{card.title}</h3>
                                    <p className="compact-card-description">{card.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CompactCardsSection
