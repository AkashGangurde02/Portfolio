import './TestimonialsSection.css'

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Embark on a literary journey like never before with our revolutionary library application.✨",
      author: 'Name',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 2,
      quote: "Embark on a literary journey like never before with our revolutionary library application.✨",
      author: 'Name',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 3,
      quote: "Embark on a literary journey like never before with our revolutionary library application.✨",
      author: 'Name',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 4,
      quote: "Embark on a literary journey like never before with our revolutionary library application.✨",
      author: 'Name',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    }
  ]

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">
            What <span className="text-light">people says</span> about my work.
          </h2>
          <p className="testimonials-subtitle">
            Embark on a literary journey like never before with our revolutionary library application.✨
          </p>
        </div>

        <div className="testimonials-scroll-wrapper">
          <div className="testimonials-list">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-content">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="testimonial-avatar"
                  />
                  <div className="testimonial-text">
                    <h4 className="testimonial-author">{testimonial.author}</h4>
                    <p className="testimonial-quote">{testimonial.quote}</p>
                  </div>
                  <div className="quote-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="scroll-fade-top"></div>
          <div className="scroll-fade-bottom"></div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
