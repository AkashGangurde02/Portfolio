import './BlogPage.css'
import blogHeroImage from '../images/about-image.jpg'

const BlogPage = () => {
  return (
    <section id="blog" className="blog-page">
      <div className="blog-container">
        <div className="blog-header">
          <h1 className="blog-title">Designing for Humans, Not Screens</h1>
          <p className="blog-subtitle">A Practical Guide to Meaningful UX/UI Design</p>
          <div className="blog-meta">
            <span>By Akash Gangurde | UX/UI Designer | 6 min read</span>
          </div>
        </div>

        <div className="blog-content">
          <section className="blog-section">
            <h2 className="section-heading">Introduction</h2>
            <p>
              Every day, users interact with dozens of digital products — food delivery apps, banking 
              platforms, learning portals, dashboards, and websites. Yet, only a few of these experiences 
              feel effortless.
            </p>
            <p>
              Good UX design isn't about aesthetics alone — it's about understanding human behavior. 
              This blog explores why UX/UI design should always prioritize people over pixels.
            </p>
            <div className="blog-image-placeholder">
              <img src={blogHeroImage} alt="UX Design Hero" className="blog-image" />
            </div>
          </section>

          <section className="blog-section">
            <h2 className="section-heading">UX vs UI: Clearing the Confusion</h2>
            <p>
              UI focuses on visual elements such as colors, typography, and layouts. UX focuses on how 
              the product works — navigation, flow, usability, and emotions.
            </p>
            <p>A product can look beautiful and still fail if the experience is confusing.</p>
            <div className="blog-image-placeholder">
              <div className="placeholder-box">
                <p className="image-caption">[Insert image: UX vs UI Comparison]</p>
              </div>
            </div>
          </section>

          <section className="blog-section">
            <h2 className="section-heading golden-rule">The Golden Rule of UX Design</h2>
            <p>Design is not what it looks like. Design is how it works.</p>
            <p>
              Great UX starts by understanding who the user is, what problem they are trying to solve, 
              and in what context they are using the product.
            </p>
          </section>

          <section className="blog-section">
            <h2 className="section-heading">Understanding the User Before Designing</h2>
            <p>
              Designers don't always need complex research. Studying reviews, competitors, and user 
              behavior can reveal powerful insights. Empathy is the most important UX tool.
            </p>
            <div className="blog-image-placeholder">
              <div className="placeholder-box">
                <p className="image-caption">[Insert image: User Persona / Empathy Map]</p>
              </div>
            </div>
          </section>

          <section className="blog-section">
            <h2 className="section-heading">My UX Design Process</h2>
            <ol className="blog-list">
              <li>Problem Understanding</li>
              <li>User Flow Creation</li>
              <li>Wireframing</li>
              <li>Visual UI Design</li>
              <li>Iteration and Improvement</li>
            </ol>
            <div className="blog-image-placeholder">
              <div className="placeholder-box">
                <p className="image-caption">[Insert image: User Flow Diagram]</p>
              </div>
            </div>
            <div className="blog-image-placeholder">
              <div className="placeholder-box">
                <p className="image-caption">[Insert image: Wireframes]</p>
              </div>
            </div>
            <div className="blog-image-placeholder">
              <div className="placeholder-box">
                <p className="image-caption">[Insert image: High-Fidelity UI]</p>
              </div>
            </div>
          </section>

          <section className="blog-section">
            <h2 className="section-heading">Common UX Mistakes</h2>
            <ul className="blog-list">
              <li>Designing for yourself instead of users</li>
              <li>Overloading screens</li>
              <li>Ignoring edge cases</li>
              <li>Copying trends blindly</li>
              <li>Making users think too much</li>
            </ul>
          </section>

          <section className="blog-section">
            <h2 className="section-heading">Why UX Matters for Business</h2>
            <p>
              Good UX increases retention, trust, and conversions. It directly impacts business growth 
              and customer satisfaction.
            </p>
          </section>

          <section className="blog-section">
            <h2 className="section-heading">Accessibility: Designing for Everyone</h2>
            <p>
              Inclusive design ensures readability, clarity, and usability for all users. Accessibility is not 
              optional — it's essential.
            </p>
            <div className="blog-image-placeholder">
              <div className="placeholder-box">
                <p className="image-caption">[Insert image: Accessible Design Examples]</p>
              </div>
            </div>
          </section>

          <section className="blog-section">
            <h2 className="section-heading">Final Thoughts</h2>
            <p>
              UX/UI design is about empathy, clarity, and problem-solving. We don't design screens — we 
              design experiences people rely on every day.
            </p>
          </section>

          <section className="blog-section author-section">
            <h2 className="section-heading">About the Author</h2>
            <div className="author-content">
              <img src={blogHeroImage} alt="Akash Gangurde" className="author-image" />
              <p>
                Akash Gangurde is a Junior UX/UI Designer passionate about building meaningful digital 
                experiences through user-centered design.
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}

export default BlogPage
