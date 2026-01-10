import './InsightsSection.css'

const InsightsSection = () => {
  const insights = [
    {
      id: 1,
      title: 'The Power of Typography in Visual Design: Enhancing Communication and Impact',
      date: 'May 5, 2023',
      image: 'https://via.placeholder.com/400x250/f5f5f5/666666?text=Typography',
      link: '#'
    },
    {
      id: 2,
      title: 'Designing for User Experience: Creating Intuitive and Engaging Interfaces',
      date: 'May 5, 2023',
      image: 'https://via.placeholder.com/400x250/f5f5f5/666666?text=UX+Design',
      link: '#'
    }
  ]

  return (
    <section className="insights-section">
      <div className="insights-container">
        <div className="insights-header">
          <h2 className="insights-title">Latest Insights</h2>
          <a href="#all-insights" className="view-all-insights">
            View All Insights
            <svg className="arrow-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        <div className="insights-grid">
          {insights.map((insight) => (
            <a key={insight.id} href={insight.link} className="insight-card">
              <div className="insight-image">
                <img src={insight.image} alt={insight.title} />
              </div>
              <div className="insight-content">
                <h3 className="insight-title">{insight.title}</h3>
                <p className="insight-date">{insight.date}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default InsightsSection
