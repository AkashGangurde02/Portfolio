import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './CaseStudyContactForm.css'
import contactFormImage from '../images/case-studies/case-study-1/contact-redesign.jpg'
import wireframeImage from '../images/case-studies/case-study-1/wireframe.jpg'
import beforeImage from '../images/case-studies/case-study-1/before.jpg'
import afterImage from '../images/case-studies/case-study-1/after.jpg'
import Footer from '../components/Footer'

gsap.registerPlugin(ScrollTrigger)

const CaseStudyContactForm = () => {
  const pageRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    
    const ctx = gsap.context(() => {
      // Fade up entrance for all main text sections and images
      gsap.utils.toArray('.cs3-animate-up').forEach(el => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 100%',
            toggleActions: 'play none none none'
          },
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          clearProps: 'all'
        })
      })
      
      // Timeline staggered animation
      gsap.from('.cs3-timeline-step', {
        scrollTrigger: {
          trigger: '.cs3-timeline-chart',
          start: 'top 95%',
          toggleActions: 'play none none none'
        },
        y: 20,
        opacity: 0,
        stagger: 0.15,
        duration: 0.6,
        ease: 'back.out(1.2)',
        clearProps: 'all'
      })
    }, pageRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="cs3-page" ref={pageRef}>
      {/* ── HERO ── */}
      <section className="cs3-hero cs3-animate-up">
        <div className="cs3-hero-left">
          <h1 className="cs3-title">Improving Contact<br/>Form Usability</h1>
          <p className="cs3-desc">
            A focused audit and redesign of a SaaS contact form —
            fixing interaction mismatches within existing brand constraints.
            By identifying hidden friction points, the redesign significantly improved the form's usability and visual hierarchy.
          </p>
          <p className="cs3-meta-tag">Role: UI/UX Designer  |  Timeline: 1–2 Days  |  Tools: Figma</p>
        </div>
        <div className="cs3-hero-right">
          <div className="cs3-hero-img-wrap">
             <img src={contactFormImage} alt="Contact Form Mockup" />
          </div>
        </div>
      </section>

      {/* ── PROJECT GOAL ── */}
      <section className="cs3-grid-section cs3-animate-up">
        <div className="cs3-col-left">
          <h2 className="cs3-section-heading">Project Goal</h2>
        </div>
        <div className="cs3-col-right">
          <p className="cs3-bold-text">Design for high-intent users.</p>
          <ul className="cs3-list">
            <li>Identify layout issues causing cognitive overload.</li>
            <li>Fix interaction-pattern mismatches (e.g. number-stepper for phone input).</li>
            <li>Maintain existing brand constraints while improving usability.</li>
            <li>Add missing "trust signals" to reassure potential clients.</li>
          </ul>
        </div>
      </section>

      {/* ── CHALLENGES ── */}
      <section className="cs3-grid-section cs3-animate-up">
        <div className="cs3-col-left">
          <h2 className="cs3-section-heading">Challenges</h2>
        </div>
        <div className="cs3-col-right">
          <p className="cs3-bold-text">1. Interaction Mismatches</p>
          <ul className="cs3-list cs3-margin-bottom">
            <li>The phone field used a number-stepper, allowing negative values.</li>
            <li>No country code fallback created formatting confusion.</li>
            <li>Generic unstructured error states only appeared post-submission.</li>
          </ul>
          
          <p className="cs3-bold-text">2. Structural Friction</p>
          <ul className="cs3-list cs3-margin-bottom">
            <li>A monotonous single-column layout made the form feel overwhelmingly long.</li>
            <li>Related fields (First/Last name) were unnecessarily stacked vertically.</li>
          </ul>
          
          <p className="cs3-bold-text">3. Brand Constraints</p>
          <ul className="cs3-list">
            <li>Must operate strictly within existing global color and typography tokens.</li>
            <li>Backend fields requested had to remain exactly identical.</li>
          </ul>
        </div>
      </section>

      {/* ── OUTCOMES ── */}
      <section className="cs3-grid-section cs3-animate-up">
        <div className="cs3-col-left">
          <h2 className="cs3-section-heading">Outcomes</h2>
        </div>
        <div className="cs3-col-right">
          <ul className="cs3-list">
            <li>Clear focus states and inline validation prevented user frustration.</li>
            <li>Reduced subjective completion time utilizing a split side-by-side layout.</li>
            <li>Global inclusivity solved with standard country-code inputs.</li>
            <li>Incorporated physical location details and hours for trust-building.</li>
          </ul>
        </div>
      </section>

      {/* ── PROJECT TIMELINE ── */}
      <section className="cs3-timeline-section cs3-animate-up">
        <div className="cs3-section-heading cs3-timeline-title">Project Timeline</div>
        <div className="cs3-timeline-header">
          The project spanned a rapid 2-day redesign sprint focusing heavily on UX heuristics and interaction flow.
        </div>
        
        <div className="cs3-timeline-chart-wrap">
          <div className="cs3-timeline-line"></div>
          <div className="cs3-timeline-chart">
            <div className="cs3-timeline-step cs3-step-1">Discovery & Audit</div>
            <div className="cs3-timeline-step cs3-step-2">Interaction Flow (Figma)</div>
            <div className="cs3-timeline-step cs3-step-3">UI Redesign</div>
            <div className="cs3-timeline-step cs3-step-4">Prototyping & Handoff</div>
            <div className="cs3-timeline-step cs3-step-5">Final Polish</div>
          </div>
        </div>
      </section>

      {/* ── 1. DISCOVERY ── */}
      <section className="cs3-grid-section cs3-animate-up">
        <div className="cs3-col-left">
          <div className="cs3-num-badge">1</div>
          <h2 className="cs3-section-heading">Discovery &amp;<br/>Research</h2>
        </div>
        <div className="cs3-col-right">
          <p className="cs3-text">The initial phase involved standard UX heuristic evaluation. We looked at forms as conversations. If a user is asked for a phone number, providing an up/down quantity stepper breaks real-world mental models.</p>
          <div className="cs3-cards-container">
            <div className="cs3-phase-card cs3-card-purple">
               <span className="cs3-card-num">01</span>
               <p className="cs3-card-title">Empathize &<br/>Audit</p>
            </div>
            <div className="cs3-phase-card cs3-card-yellow">
               <span className="cs3-card-num">02</span>
               <p className="cs3-card-title">Define the<br/>Friction</p>
            </div>
            <div className="cs3-phase-card cs3-card-pink">
               <span className="cs3-card-num">03</span>
               <p className="cs3-card-title">Ideate<br/>Solutions</p>
            </div>
            <div className="cs3-phase-card cs3-card-green">
               <span className="cs3-card-num">04</span>
               <p className="cs3-card-title">Design within<br/>Constraints</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. UI DESIGN ── */}
      <section className="cs3-grid-section cs3-animate-up">
        <div className="cs3-col-left">
          <div className="cs3-num-badge">2</div>
          <h2 className="cs3-section-heading">Structural &amp;<br/>UI Design</h2>
        </div>
        <div className="cs3-col-right">
          <p className="cs3-bold-text">The Split-Screen Approach</p>
          <ul className="cs3-list cs3-margin-bottom">
            <li><strong>Left Pane (The Form):</strong> Dedicated entirely to input fields. Encased in a subtle elevated card.</li>
            <li><strong>Right Pane (Trust & Alternatives):</strong> Floating cards for direct phone numbers and physical location.</li>
          </ul>
          
          <p className="cs3-bold-text">Component Breakdown</p>
          <ul className="cs3-list">
            <li>Side-by-side Layout for First & Last name to save vertical space.</li>
            <li>Standardized text input for Phone with an integrated Country Code dropdown selector.</li>
            <li>Distinct focus-state borders matching primary brand colors.</li>
            <li>Full width Call-To-Action button ensuring undisputed visual hierarchy.</li>
          </ul>
        </div>
      </section>

      {/* ── WIREFRAME/COMPONENT LIBRARY ── */}
      <section className="cs3-full-image-section cs3-animate-up">
        <div className="cs3-section-heading cs3-img-title">Wireframes & Flow</div>
        <div className="cs3-large-img-wrap">
          <img src={wireframeImage} alt="Wireframe components" />
        </div>
      </section>

      {/* ── 3. REFINEMENT ── */}
      <section className="cs3-grid-section cs3-animate-up">
        <div className="cs3-col-left">
          <div className="cs3-num-badge">3</div>
          <h2 className="cs3-section-heading">UI Refinement<br/>&amp; Polish</h2>
        </div>
        <div className="cs3-col-right">
          <p className="cs3-text">The final detail work revolved around padding, margin rhythms, and typography scale adjustments. The goal was to transform a data-entry task into a sleek, premium brand touchpoint.</p>
          <ul className="cs3-list">
            <li>Helper text implemented inside the description textarea.</li>
            <li>Color-coded real-time inline validation planning.</li>
            <li>Contrast verified strictly to WCAG AAA standards.</li>
          </ul>
        </div>
      </section>

      {/* ── BEFORE DESIGN IMAGE ── */}
      <section className="cs3-full-image-section cs3-animate-up">
        <div className="cs3-large-img-wrap">
          <img src={beforeImage} alt="Before UI Design" />
        </div>
      </section>

      {/* ── FINAL DESIGN IMAGE ── */}
      <section className="cs3-full-image-section cs3-animate-up">
        <div className="cs3-large-img-wrap cs3-final-img">
          <img src={afterImage} alt="Final UI Design" />
        </div>
      </section>

      {/* ── FOOTER OUTRO ── */}
      <section className="cs3-footer-outro cs3-animate-up">
        <p className="cs3-outro-text">
          'Strong UX design is not always about reinventing the wheel. Sometimes, the most significant improvements in conversion rates come from subtle, disciplined refinements.'
        </p>
      </section>

      <Footer />
    </div>
  )
}

export default CaseStudyContactForm
