import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './CaseStudyContactForm.css'
import contactFormImage from '../images/case-studies/case-study-1/contact-redesign.jpg'
import beforeImage from '../images/case-studies/case-study-1/before.jpg'
import wireframeImage from '../images/case-studies/case-study-1/wireframe.jpg'
import afterImage from '../images/case-studies/case-study-1/after.jpg'
import Footer from '../components/Footer'

gsap.registerPlugin(ScrollTrigger)

const processSteps = [
  { icon: '🔍', label: 'Empathize', desc: 'Understood user pain points through heuristic review' },
  { icon: '📌', label: 'Define', desc: 'Pinpointed interaction mismatches in the form flow' },
  { icon: '💡', label: 'Ideate', desc: 'Explored standard UX patterns for phone inputs' },
  { icon: '✏️', label: 'Design', desc: 'Refined the UI in Figma within brand constraints' },
  { icon: '✅', label: 'Test', desc: 'Validated with peer review and heuristic checklist' },
]

const solutions = [
  { icon: '📞', text: 'Replaced increment/decrement control with a standard text input for phone numbers' },
  { icon: '🌍', text: 'Added country code selector to support global users and clarify input format' },
  { icon: '🚫', text: 'Applied input constraints preventing negative values and invalid characters' },
  { icon: '📐', text: 'Improved field grouping and spacing to strengthen visual hierarchy' },
  { icon: '🔒', text: 'Maintained brand colors, typography, and layout — zero visual disruption' },
]

const impacts = [
  { icon: '⚡', stat: 'Error Prevention', detail: 'Invalid phone entries eliminated at input level' },
  { icon: '🌐', stat: 'Global Inclusivity', detail: 'Added country code support for international users' },
  { icon: '🧠', stat: 'Cognitive Load ↓', detail: 'Familiar patterns reduced user confusion in a high-intent flow' },
]

const CaseStudyContactForm = () => {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const metaRef = useRef(null)
  const imageRef = useRef(null)
  const sectionsRef = useRef([])

  /* ── Entrance animations ── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Hero */
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from(titleRef.current, { y: 60, opacity: 0, duration: 1, delay: 0.2 })
        .from(subtitleRef.current, { y: 30, opacity: 0, duration: 0.7 }, '-=0.5')
        .from(metaRef.current?.children || [], { y: 20, opacity: 0, duration: 0.5, stagger: 0.08 }, '-=0.4')
        .from(imageRef.current, { scale: 0.96, opacity: 0, duration: 1 }, '-=0.5')

      /* Scroll-triggered sections */
      sectionsRef.current.forEach((el) => {
        if (!el) return
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
          y: 40, opacity: 0, duration: 0.8, ease: 'power3.out',
        })
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const addSection = (el) => { if (el && !sectionsRef.current.includes(el)) sectionsRef.current.push(el) }

  return (
    <div className="cs-page">

      {/* ── Sticky minimal header ── */}
      <header className="cs-sticky-header">
        <span className="cs-sticky-tag">Case Study</span>
        <span className="cs-sticky-title">Improving Contact Form Usability</span>
      </header>

      {/* ══════════════════════════════════
          HERO
      ══════════════════════════════════ */}
      <section ref={heroRef} className="cs-hero">
        <div className="cs-hero-inner">

          {/* Left */}
          <div className="cs-hero-left">
            <span className="cs-tag">UX / UI Redesign</span>
            <h1 ref={titleRef} className="cs-hero-title">
              Improving Contact<br />Form Usability
            </h1>
            <p ref={subtitleRef} className="cs-hero-sub">
              A focused UX audit and redesign of a SaaS contact form — fixing interaction mismatches within existing brand constraints.
            </p>

            <div ref={metaRef} className="cs-meta">
              <div className="cs-meta-item">
                <span className="cs-meta-label">Role</span>
                <span className="cs-meta-value">UI/UX Designer</span>
              </div>
              <div className="cs-meta-item">
                <span className="cs-meta-label">Timeline</span>
                <span className="cs-meta-value">1–2 Days</span>
              </div>
              <div className="cs-meta-item">
                <span className="cs-meta-label">Tools</span>
                <span className="cs-meta-value">Figma</span>
              </div>
              <div className="cs-meta-item">
                <span className="cs-meta-label">Platform</span>
                <span className="cs-meta-value">Web</span>
              </div>
            </div>
          </div>

          {/* Right — mockup */}
          <div ref={imageRef} className="cs-hero-right">
            <div className="cs-hero-mockup">
              <img src={contactFormImage} alt="Contact Form Redesign Mockup" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          OVERVIEW
      ══════════════════════════════════ */}
      <section ref={addSection} className="cs-section cs-overview">
        <div className="cs-container cs-two-col">
          <div className="cs-overview-images">
            <div className="cs-thumb">
              <img src={beforeImage} alt="Before" />
              <span className="cs-thumb-label">Before</span>
            </div>
            <div className="cs-thumb cs-thumb-offset">
              <img src={afterImage} alt="After" />
              <span className="cs-thumb-label">After</span>
            </div>
          </div>
          <div className="cs-overview-text">
            <span className="cs-section-label">Overview</span>
            <h2 className="cs-section-heading">A high-intent flow with small but impactful friction</h2>
            <p className="cs-body">
              During interview preparation for a SaaS startup, I audited their Contact Us form and discovered interaction-pattern mismatches that introduced friction in a critical conversion touchpoint — without changing the brand's visual identity.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          PROBLEM STATEMENT
      ══════════════════════════════════ */}
      <section ref={addSection} className="cs-section cs-problem">
        <div className="cs-container cs-two-col cs-two-col-reverse">
          <div className="cs-problem-text">
            <span className="cs-section-label">Problem Statement</span>
            <h2 className="cs-section-heading">Unnecessary friction in a motivated user flow</h2>
            <ul className="cs-bullet-list">
              <li>
                <span className="cs-bullet-icon">⚠️</span>
                <span>Phone field used a number-stepper control — users could enter negative values, violating real-world mental models</span>
              </li>
              <li>
                <span className="cs-bullet-icon">⚠️</span>
                <span>No country code selector created ambiguity for international users</span>
              </li>
              <li>
                <span className="cs-bullet-icon">⚠️</span>
                <span>Insufficient input constraints allowed invalid submissions, increasing cognitive load</span>
              </li>
            </ul>
          </div>
          <div className="cs-problem-illustration">
            <div className="cs-illustration-card">
              <span className="cs-illustration-icon">😕</span>
              <p>Users reaching a contact form are highly motivated. Every friction point risks losing them.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          DESIGN PROCESS STEPPER
      ══════════════════════════════════ */}
      <section ref={addSection} className="cs-section cs-process">
        <div className="cs-container">
          <span className="cs-section-label cs-label-center">Design Process</span>
          <h2 className="cs-section-heading cs-heading-center">Double Diamond approach</h2>

          <div className="cs-stepper">
            {processSteps.map((step, i) => (
              <div key={i} className="cs-step">
                <div className="cs-step-circle">
                  <span>{step.icon}</span>
                </div>
                {i < processSteps.length - 1 && <div className="cs-step-line" />}
                <p className="cs-step-label">{step.label}</p>
                <p className="cs-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          SOLUTIONS
      ══════════════════════════════════ */}
      <section ref={addSection} className="cs-section cs-solutions">
        <div className="cs-container">
          <span className="cs-section-label cs-label-center">Solutions</span>
          <h2 className="cs-section-heading cs-heading-center">Solution Highlights</h2>

          <div className="cs-solution-grid">
            {solutions.map((s, i) => (
              <div key={i} className="cs-solution-card">
                <span className="cs-solution-icon">{s.icon}</span>
                <p className="cs-solution-text">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          BEFORE vs AFTER
      ══════════════════════════════════ */}
      <section ref={addSection} className="cs-section cs-comparison">
        <div className="cs-container">
          <span className="cs-section-label cs-label-center">Visual Comparison</span>
          <h2 className="cs-section-heading cs-heading-center">Before &amp; After</h2>

          <div className="cs-compare-grid">
            <div className="cs-compare-card">
              <div className="cs-compare-badge cs-badge-before">Before</div>
              <img src={beforeImage} alt="Before Redesign" />
              <p className="cs-compare-caption">Number stepper for phone — allows invalid input, poor mental model mapping</p>
            </div>
            <div className="cs-compare-divider" />
            <div className="cs-compare-card cs-compare-card-after">
              <div className="cs-compare-badge cs-badge-after">After</div>
              <img src={afterImage} alt="After Redesign" />
              <p className="cs-compare-caption">Standard text input + country code selector — clear, constrained, globally inclusive</p>
            </div>
          </div>

          {/* Wireframe */}
          <div className="cs-wireframe-wrap">
            <p className="cs-wireframe-label">Wireframe — annotated interaction improvements</p>
            <img src={wireframeImage} alt="Wireframe" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          IMPACT
      ══════════════════════════════════ */}
      <section ref={addSection} className="cs-section cs-impact">
        <div className="cs-container">
          <span className="cs-section-label cs-label-center">Outcome</span>
          <h2 className="cs-section-heading cs-heading-center">Impact &amp; Reflection</h2>

          <div className="cs-impact-grid">
            {impacts.map((item, i) => (
              <div key={i} className="cs-impact-card">
                <span className="cs-impact-icon">{item.icon}</span>
                <p className="cs-impact-stat">{item.stat}</p>
                <p className="cs-impact-detail">{item.detail}</p>
              </div>
            ))}
          </div>

          <p className="cs-reflection">
            This project reinforced that strong UX design is not about introducing complexity — it is about understanding user intent, identifying friction, and resolving it with clarity and restraint. Good UX quietly removes obstacles.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════
          CTA
      ══════════════════════════════════ */}
      <section ref={addSection} className="cs-section cs-cta">
        <div className="cs-container cs-cta-inner">
          <h2 className="cs-cta-heading">Want to see the full Figma file?</h2>
          <p className="cs-cta-sub">Includes annotated screens, interaction notes, and design rationale.</p>
          <a
            href="https://www.figma.com"
            target="_blank"
            rel="noopener noreferrer"
            className="cs-cta-btn"
          >
            👉 View Full Case Study
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CaseStudyContactForm
