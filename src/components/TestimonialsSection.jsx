import './TestimonialsSection.css'

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      quote: "I had the pleasure of working with Ivan on a recent project, and I was blown away by their creativity and attention to detail. I highly recommend them to anyone looking for a talented and professional designer.",
      author: 'Richard Jonas',
      position: 'CEO of Teamwork',
      company: 'teamwork',
      avatar: 'https://via.placeholder.com/50/333333/ffffff?text=RJ'
    },
    {
      id: 2,
      quote: "His professionalism, responsiveness, and dedication to delivering high-quality work have exceeded our expectations. We are incredibly grateful for Sarah's contributions and would highly recommend her to anyone in need of a talented and reliable designer.",
      author: 'Savnnah Megan',
      position: 'CEO of Django',
      company: 'django',
      avatar: 'https://via.placeholder.com/50/333333/ffffff?text=SM'
    },
    {
      id: 3,
      quote: "Ivan is an exceptionally talented designer who consistently exceeded our expectations. His ability to blend creativity and functionality resulted in visually stunning designs that perfectly captured our brand's essence.",
      author: 'Rachel Vaskov',
      position: 'CEO of Pipefy',
      company: 'pipefy',
      avatar: 'https://via.placeholder.com/50/333333/ffffff?text=RV'
    },
    {
      id: 4,
      quote: "Working with Ivan was a game-changer for our business. His keen eye for detail and deep understanding of user experience resulted in designs that not only looked great but also enhanced the overall usability of our product.",
      author: 'Jacob McDany',
      position: 'CEO of Rackspace',
      company: 'rackspace',
      avatar: 'https://via.placeholder.com/50/333333/ffffff?text=JM'
    }
  ]

  return (
    <section id="reviews" className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">
            Let's see what my clients say
          </h2>
        </div>

        <div className="testimonials-scroll-wrapper">
          <div className="testimonials-list">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                
                <div className="testimonial-footer">
                  <div className="testimonial-author-info">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.author}
                      className="testimonial-avatar"
                    />
                    <div className="testimonial-author-details">
                      <h4 className="testimonial-author">{testimonial.author}</h4>
                      <p className="testimonial-position">{testimonial.position}</p>
                    </div>
                  </div>
                  
                  <div className="testimonial-company">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
