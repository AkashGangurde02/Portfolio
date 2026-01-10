import './AwardsSection.css'

const AwardsSection = () => {
  const featuredAward = {
    title: 'Awwards Winning - Independent of The Year',
    recipient: 'Ivan Kazanov - 2022',
    image: 'https://via.placeholder.com/300x200/e8e8e8/333333?text=Award',
    link: '#'
  }

  const awards = [
    {
      id: 1,
      title: 'Honorable Mention',
      year: '2022 - AWWARDS',
      link: '#'
    },
    {
      id: 2,
      title: 'Site of The Day',
      year: '2022 - CSS Winners',
      link: '#'
    },
    {
      id: 3,
      title: 'Best UI Design',
      year: '2022 - CSS Design Awards',
      link: '#'
    },
    {
      id: 4,
      title: 'Site of The Day',
      year: '2022 - AWWARDS',
      link: '#'
    }
  ]

  return (
    <section className="awards-section">
      <div className="awards-container">
        {/* Featured Award */}
        <div className="featured-award">
          <div className="featured-award-image">
            <img src={featuredAward.image} alt={featuredAward.title} />
          </div>
          <div className="featured-award-content">
            <h3 className="featured-award-title">{featuredAward.title}</h3>
            <p className="featured-award-recipient">{featuredAward.recipient}</p>
            <a href={featuredAward.link} className="featured-award-link">
              <svg className="arrow-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Awards List */}
        <div className="awards-list">
          {awards.map((award) => (
            <a key={award.id} href={award.link} className="award-item">
              <div className="award-info">
                <h4 className="award-title">{award.title}</h4>
                <p className="award-year">{award.year}</p>
              </div>
              <svg className="arrow-icon-small" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AwardsSection
