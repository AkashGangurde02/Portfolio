import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './CaseStudyContactForm.css'
import contactFormImage from '../images/Contact-Redesign.jpg'
import beforeImage from '../images/CaseStudy_1_Before.jpg'
import wireframeImage from '../images/CaseStudy_1_Wireframe.jpg'
import afterImage from '../images/CaseStudy_1_After.jpg'

const CaseStudyContactForm = () => {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const metaRef = useRef(null)
  const imageRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.from(titleRef.current, {
        y: 80,
        opacity: 0,
        duration: 1,
        delay: 0.3
      })
        .from(subtitleRef.current, {
          y: 40,
          opacity: 0,
          duration: 0.8
        }, '-=0.5')
        .from(metaRef.current.children, {
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1
        }, '-=0.4')
        .from(imageRef.current, {
          scale: 0.95,
          opacity: 0,
          duration: 1
        }, '-=0.6')
        .from(contentRef.current?.children || [], {
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15
        }, '-=0.4')
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="case-study-page">
      {/* Hero Section */}
      <section ref={heroRef} className="case-study-hero">
        <div className="case-study-container">
          <h1 ref={titleRef} className="case-study-title">
            Improving Contact Form Usability
          </h1>
          <p ref={subtitleRef} className="case-study-subtitle">
            UX/UI Redesign Case Study
          </p>

          <div ref={metaRef} className="case-study-meta">
            <div className="meta-item">
              <span className="meta-label">Role</span>
              <span className="meta-value">UI/UX Designer (Individual Case Study)</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Project Type</span>
              <span className="meta-value">Website UX Audit & Redesign</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Platform</span>
              <span className="meta-value">Web</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Timeline</span>
              <span className="meta-value">1–2 Days</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Tools</span>
              <span className="meta-value">Figma</span>
            </div>
          </div>

          <div ref={imageRef} className="case-study-hero-image">
            <img src={contactFormImage} alt="Contact Form Redesign" />
          </div>

          <div ref={contentRef} className="case-study-content">
            <div className="case-study-section">
              <h2 className="section-title">Background</h2>
              <p className="section-text">
                This case study originated during my preparation for a UI/UX Design Intern interview at a SaaS startup. As part of my
                preparation, I reviewed the company's website to understand its product offering, brand language, and how it enables
                user communication.
              </p>
              <p className="section-text">
                Rather than limiting my review to surface-level visual observations, I approached the website from a real-world UX
                perspective—evaluating whether the experience effectively supports user intent. The Contact Us form, a high-intent
                conversion touchpoint, stood out as an area where small interaction decisions could have a meaningful impact on usability.
              </p>
            </div>

            <div className="case-study-section">
              <h2 className="section-title">Problem Context</h2>
              <p className="section-text">
                Contact forms often represent the final step before a user initiates communication with a company. Users who reach this
                stage are typically motivated and time-sensitive, making clarity and ease of use critical.
              </p>
              <p className="section-text">
                While the form appeared visually consistent with the brand, several interaction-level decisions introduced unnecessary
                friction. These issues had the potential to confuse users, allow invalid input, and reduce the overall efficiency of a
                high-intent user flow. The challenge was to improve usability while respecting existing visual constraints, brand identity,
                and layout structure.
              </p>
            </div>

            <div className="case-study-section">
              <h2 className="section-title">Observations & UX Diagnosis</h2>
              <p className="section-text">
                During the audit, I analyzed the form through the lens of interaction design principles, error prevention, and user
                expectations.
              </p>
              <p className="section-text">
                One key issue was the phone number input field, which used an increase/decrease control commonly associated with
                incremental numeric values. This interaction allowed users to enter negative numbers, creating a mismatch between the
                system's behavior and real-world mental models. From a UX standpoint, this violated the principle of mapping—users do
                not perceive phone numbers as adjustable quantities.
              </p>
              <p className="section-text">
                Another usability gap was the absence of a country code selector. Given that SaaS products often serve global users,
                this omission introduced ambiguity around expected input formats and reduced inclusivity for international users.
              </p>
              <p className="section-text">
                Additionally, the form lacked sufficient input constraints and guidance, allowing poorly formatted or incorrect data to
                be submitted. While these issues were subtle in isolation, together they increased cognitive load and the likelihood of
                errors in a critical flow.
              </p>

              <div className="case-study-image-before">
                <img src={beforeImage} alt="Before Redesign - Original Contact Form" />
                <p className="image-caption">Before Redesign - Original Contact Form with usability issues</p>
              </div>
            </div>

            <div className="case-study-section">
              <h2 className="section-title">Design Constraints</h2>
              <p className="section-text">This redesign was carried out under deliberate, real-world constraints:</p>
              <ul className="content-list">
                <li>No changes to brand colors or typography</li>
                <li>No structural overhaul of the existing layout</li>
                <li>Focus strictly on usability and interaction improvements</li>
              </ul>
              <p className="section-text">
                These constraints reflected common product scenarios, where designers are required to improve experiences within
                established systems rather than redesigning from scratch.
              </p>
            </div>

            <div className="case-study-section">
              <h2 className="section-title">UX Strategy & Rationale</h2>
              <p className="section-text">
                Rather than introducing new visual elements, I focused on aligning interactions with established UX patterns that users
                already understand.
              </p>
              <p className="section-text">
                The redesign strategy prioritized predictability over novelty, error prevention over error correction, and familiar
                patterns over custom interactions. This ensured that usability improvements reduced friction without increasing the
                learning curve or disrupting the existing visual language.
              </p>
            </div>

            <div className="case-study-section">
              <h2 className="section-title">Solution Details</h2>
              <p className="section-text">
                The phone number input was redesigned using a standard numeric field without increment controls. Input constraints were
                applied to prevent negative values and invalid characters, ensuring users could only enter realistic phone numbers. This
                change aligned the interaction with user expectations and significantly reduced the likelihood of incorrect submissions.
              </p>

              <div className="case-study-image-wireframe">
                <img src={wireframeImage} alt="Wireframe - Form Improvements" />
                <p className="image-caption">Wireframe showing the improved form structure and interactions</p>
              </div>

              <p className="section-text">
                To improve global usability, a country code selector was introduced before the phone number field. This followed widely
                recognized patterns and clarified expected input formats for users across different regions.
              </p>
              <p className="section-text">
                The overall form flow was refined by improving spacing and grouping related fields. These adjustments strengthened visual
                hierarchy and scanability, helping users move through the form more efficiently without altering the existing layout
                structure.
              </p>
            </div>

            <div className="case-study-section">
              <h2 className="section-title">UI & Visual Considerations</h2>
              <p className="section-text">
                All visual changes were intentionally minimal. Existing colors, typography, and styling were retained to maintain brand
                consistency. The redesign focused on subtle structural and behavioral improvements rather than aesthetic changes,
                reinforcing the idea that effective UX often operates beneath the surface.
              </p>
            </div>

            <div className="case-study-section">
              <h2 className="section-title">Impact & Outcome</h2>
              <p className="section-text">
                Although this project was an interview-driven exercise rather than a production deployment, it demonstrated how small
                interaction-level improvements can meaningfully enhance usability in high-intent flows.
              </p>

              <div className="case-study-image-after">
                <img src={afterImage} alt="After Redesign - Improved Contact Form" />
                <p className="image-caption">After Redesign - Enhanced form with improved usability and user experience</p>
              </div>

              <p className="section-text">
                This work strengthened my ability to conduct focused UX audits, identify interaction-pattern mismatches, design within
                real-world constraints, and articulate design rationale clearly and confidently.
              </p>
            </div>

            <div className="case-study-section">
              <h2 className="section-title">Reflection</h2>
              <p className="section-text">
                This case study reinforced that strong UX design is not about introducing complexity or visual novelty. It is about
                understanding user intent, identifying friction, and resolving it with clarity and restraint.
              </p>
              <p className="section-text">
                It also highlighted that interviews can be treated as opportunities to demonstrate real product thinking and user-centered
                problem-solving, rather than purely theoretical answers.
              </p>
            </div>

            <div className="case-study-section">
              <h2 className="section-title">Final Thought</h2>
              <p className="section-text">
                Good UX rarely draws attention to itself. When done well, it quietly removes obstacles and allows users to accomplish
                their goals without friction.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CaseStudyContactForm
