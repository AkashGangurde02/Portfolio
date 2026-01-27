// Service to fetch UX/UI Design insights from various sources

const FALLBACK_INSIGHTS = [
    {
        id: 1,
        title: 'Design Systems: Building Scalable and Consistent User Experiences',
        description: 'Explore how design systems create consistency, improve collaboration, and accelerate product development across teams.',
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        image: '/insights/design-systems.jpg',
        source: 'UX Design',
        link: 'https://uxdesign.cc/'
    },
    {
        id: 2,
        title: 'The Psychology of Color in UI Design',
        description: 'Understanding how color choices influence user behavior, emotions, and decision-making in digital products.',
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        image: '/insights/color-psychology.jpg',
        source: 'Nielsen Norman Group',
        link: 'https://www.nngroup.com/'
    },
    {
        id: 3,
        title: 'Accessibility-First Design: Creating Inclusive Digital Experiences',
        description: 'Learn best practices for designing accessible interfaces that work for everyone, regardless of ability.',
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        image: '/insights/accessibility.jpg',
        source: 'A11y Project',
        link: 'https://www.a11yproject.com/'
    },
    {
        id: 4,
        title: 'Micro-interactions: The Secret to Delightful User Experiences',
        description: 'Discover how small animations and interactions can significantly enhance user engagement and satisfaction.',
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        image: '/insights/microinteractions.jpg',
        source: 'Smashing Magazine',
        link: 'https://www.smashingmagazine.com/'
    }
]

/**
 * Fetches UX/UI design insights from Medium's RSS feed
 */
async function fetchMediumInsights() {
    try {
        // Using RSS2JSON API to convert RSS feed to JSON
        const topics = ['ux-design', 'ui-design', 'user-experience']
        const randomTopic = topics[Math.floor(Math.random() * topics.length)]

        const response = await fetch(
            `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/tag/${randomTopic}`
        )

        if (!response.ok) {
            throw new Error('Failed to fetch Medium insights')
        }

        const data = await response.json()

        if (data.status === 'ok' && data.items && data.items.length > 0) {
            return data.items.slice(0, 4).map((item, index) => ({
                id: index + 1,
                title: item.title,
                description: item.description.replace(/<[^>]*>/g, '').substring(0, 150) + '...',
                date: new Date(item.pubDate).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                }),
                image: item.thumbnail || item.enclosure?.link || '/insights/placeholder.jpg',
                source: item.author || 'Medium',
                link: item.link
            }))
        }

        return null
    } catch (error) {
        console.error('Error fetching Medium insights:', error)
        return null
    }
}

/**
 * Fetches UX/UI design insights from Dev.to
 */
async function fetchDevToInsights() {
    try {
        const response = await fetch(
            'https://dev.to/api/articles?tag=ux&top=7'
        )

        if (!response.ok) {
            throw new Error('Failed to fetch Dev.to insights')
        }

        const articles = await response.json()

        if (articles && articles.length > 0) {
            return articles.slice(0, 4).map((article, index) => ({
                id: index + 1,
                title: article.title,
                description: article.description || article.title,
                date: new Date(article.published_at).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                }),
                image: article.cover_image || article.social_image || '/insights/placeholder.jpg',
                source: article.user?.name || 'Dev.to',
                link: article.url
            }))
        }

        return null
    } catch (error) {
        console.error('Error fetching Dev.to insights:', error)
        return null
    }
}

/**
 * Fetches UX/UI design insights from HackerNews
 */
async function fetchHackerNewsInsights() {
    try {
        // Search for UX/UI related stories
        const response = await fetch(
            'https://hn.algolia.com/api/v1/search?query=UX+UI+design&tags=story&hitsPerPage=4'
        )

        if (!response.ok) {
            throw new Error('Failed to fetch HackerNews insights')
        }

        const data = await response.json()

        if (data.hits && data.hits.length > 0) {
            return data.hits.map((hit, index) => ({
                id: index + 1,
                title: hit.title,
                description: hit.story_text || hit.title,
                date: new Date(hit.created_at).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                }),
                image: '/insights/hackernews.jpg',
                source: hit.author || 'HackerNews',
                link: hit.url || `https://news.ycombinator.com/item?id=${hit.objectID}`
            }))
        }

        return null
    } catch (error) {
        console.error('Error fetching HackerNews insights:', error)
        return null
    }
}

/**
 * Main function to fetch UX/UI design insights
 * Tries multiple sources and falls back to curated content if all fail
 */
export async function fetchUXUIInsights() {
    try {
        // Try Dev.to first as it's most reliable
        let insights = await fetchDevToInsights()
        if (insights) {
            return insights
        }

        // Try Medium RSS feed
        insights = await fetchMediumInsights()
        if (insights) {
            return insights
        }

        // Try HackerNews
        insights = await fetchHackerNewsInsights()
        if (insights) {
            return insights
        }

        // Fallback to curated content
        console.log('Using fallback insights')
        return FALLBACK_INSIGHTS
    } catch (error) {
        console.error('Error fetching insights:', error)
        return FALLBACK_INSIGHTS
    }
}

// Export fallback for testing purposes
export { FALLBACK_INSIGHTS }
