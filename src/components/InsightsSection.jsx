import { useEffect, useState } from 'react'
import { fetchUXUIInsights } from '../services/insightsService'
import './InsightsSection.css'

const InsightsSection = () => {
  const [insights, setInsights] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadInsights = async () => {
      try {
        setLoading(true)
        setError(null)
        const data = await fetchUXUIInsights()
        setInsights(data)
      } catch (err) {
        console.error('Failed to load insights:', err)
        setError('Failed to load insights. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    loadInsights()

    // Refresh insights every 5 minutes
    const interval = setInterval(loadInsights, 5 * 60 * 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="insights-section">
      <div className="insights-container">
        <div className="insights-header">
          <h2 className="insights-title">Latest UX/UI Design Insights</h2>
          <p className="insights-subtitle">
            Curated design articles, trends, and best practices from across the web
          </p>
        </div>

        {loading && (
          <div className="insights-loading">
            <div className="loading-spinner"></div>
            <p>Loading latest insights...</p>
          </div>
        )}

        {error && (
          <div className="insights-error">
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && (
          <div className="insights-grid">
            {insights.map((insight) => (
              <a
                key={insight.id}
                href={insight.link}
                className="insight-card"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="insight-image">
                  <img
                    src={insight.image}
                    alt={insight.title}
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x250/f5f5f5/666666?text=UX/UI+Design'
                    }}
                  />
                  <div className="insight-source-badge">{insight.source}</div>
                </div>
                <div className="insight-content">
                  <h3 className="insight-title">{insight.title}</h3>
                  {insight.description && (
                    <p className="insight-description">{insight.description}</p>
                  )}
                  <p className="insight-date">{insight.date}</p>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default InsightsSection

