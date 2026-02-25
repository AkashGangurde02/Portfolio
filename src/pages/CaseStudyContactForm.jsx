import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
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
  { num: '01', label: 'Empathize', desc: 'Understood user pain points through heuristic evaluation and mental model analysis of the existing form.' },
  { num: '02', label: 'Define', desc: 'Pinpointed interaction-pattern mismatches in the phone input flow causing friction and invalid submissions.' },
  { num: '03', label: 'Ideate', desc: 'Explored standard UX patterns for phone inputs — text fields, masked inputs, country code selectors.' },
  { num: '04', label: 'Design', desc: 'Refined the UI in Figma within existing brand constraints — no visual disruption to the product identity.' },
]

const solutions = [
  { title: 'Standard Phone Input', text: 'Replaced the broken number-stepper control with a standard text input aligned to real-world mental models.' },
  { title: 'Country Code Selector', text: 'Added a country code dropdown to support international users and clarify the expected input format.' },
  { title: 'Input Constraints', text: 'Applied validation preventing negative values, letters, and invalid characters at the input level.' },
  { title: 'Visual Hierarchy', text: 'Improved field grouping and label spacing to reduce cognitive load and strengthen scan patterns.' },
  { title: 'Brand Consistency', text: 'Maintained existing brand colors, typography, and layout — zero visual disruption to the product.' },
  { title: 'Heuristic Validation', text: 'Validated improvements using Nielsen\'s heuristics and structured peer review checklist.' },
]

const CaseStudyContactForm = () => {
  const heroRef = useRef(null)
  const sectionsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero stagger entrance
      gsap.from('.cs2-hero-tag, .cs2-hero-title, .cs2-hero-sub, .cs2-meta-row', {
        y: 40, opacity: 0, duration: 0.9, stagger: 0.12, ease: 'power3.out', delay: 0.1,
      })
      gsap.from('.cs2-hero-image', {
        y: 60, opacity: 0, duration: 1.1, ease: 'power3.out', delay: 0.3,
      })

      // Scroll sections
      sectionsRef.current.forEach((el) => {
        if (!el) return
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
          y: 50, opacity: 0, duration: 0.85, ease: 'power3.out',
        })
      })

      // Process cards staggered
      gsap.from('.cs2-step', {
        scrollTrigger: { trigger: '.cs2-steps', start: 'top 85%' },
        y: 60, opacity: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
      })

      // Solution cards staggered
      gsap.from('.cs2-sol-card', {
        scrollTrigger: { trigger: '.cs2-sol-grid', start: 'top 85%' },
        y: 40, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
      })
    })

    return () => ctx.revert()
  }, [])

  const addSection = (el) => { if (el && !sectionsRef.current.includes(el)) sectionsRef.current.push(el) }

  return (
    <div className="cs2-page">

      {/* ── BREADCRUMB NAV ── */}
      <div className="cs2-breadcrumb">
        <Link to="/work" className="cs2-breadcrumb-link">← Back to Work</Link>
        <span className="cs2-breadcrumb-sep">/</span>
        <span className="cs2-breadcrumb-current">Contact Form Usability</span>
      </div>

      {/* ══════════════════════════════════
          HERO
      ══════════════════════════════════ */}
      <section ref={heroRef} className="cs2-hero">
        <div className="cs2-hero-inner">

          <div className="cs2-hero-left">
            <span className="cs2-hero-tag">UX / UI Redesign</span>
            <h1 className="cs2-hero-title">
              Improving<br />Contact Form<br />Usability
            </h1>
            <p className="cs2-hero-sub">
              A focused audit and redesign of a SaaS contact form —
              fixing interaction mismatches within existing brand constraints.
            </p>

            <div className="cs2-meta-row">
              <div className="cs2-meta-item">
                <span className="cs2-meta-label">Role</span>
                <span className="cs2-meta-val">UI/UX Designer</span>
              </div>
              <div className="cs2-meta-item">
                <span className="cs2-meta-label">Timeline</span>
                <span className="cs2-meta-val">1–2 Days</span>
              </div>
              <div className="cs2-meta-item">
                <span className="cs2-meta-label">Tools</span>
                <span className="cs2-meta-val">Figma</span>
              </div>
              <div className="cs2-meta-item">
                <span className="cs2-meta-label">Platform</span>
                <span className="cs2-meta-val">Web</span>
              </div>
            </div>
          </div>

          <div className="cs2-hero-right">
            <div className="cs2-hero-image">
              <img src={contactFormImage} alt="Contact Form Redesign" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          DARK STAT BAND
      ══════════════════════════════════ */}
      <section ref={addSection} className="cs2-stat-band">
        <div className="cs2-stat-inner">
          <div className="cs2-stat-item">
            <span className="cs2-stat-num">3</span>
            <span className="cs2-stat-label">UX Issues Identified</span>
          </div>
          <div className="cs2-stat-divider" />
          <div className="cs2-stat-item">
            <span className="cs2-stat-num">5</span>
            <span className="cs2-stat-label">Design Solutions Delivered</span>
          </div>
          <div className="cs2-stat-divider" />
          <div className="cs2-stat-item">
            <span className="cs2-stat-num">0</span>
            <span className="cs2-stat-label">Brand Inconsistencies</span>
          </div>
          <div className="cs2-stat-divider" />
          <div className="cs2-stat-item">
            <span className="cs2-stat-num">100%</span>
            <span className="cs2-stat-label">Heuristic Compliance</span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          OVERVIEW — two col
      ══════════════════════════════════ */}
      <section ref={addSection} className="cs2-section cs2-overview">
        <div className="cs2-container cs2-two-col">
          <div className="cs2-overview-left">
            <h2 className="cs2-heading">A high-intent flow with friction in the wrong place</h2>
            <p className="cs2-body">
              During interview preparation for a SaaS startup, I audited their Contact Us form and discovered
              interaction-pattern mismatches that introduced unnecessary friction at a critical conversion
              touchpoint.
            </p>
            <p className="cs2-body">
              The phone field used a number-stepper control — a pattern designed for quantity inputs, not phone
              numbers. Users could increment to negative values, no country code was available, and no constraints
              prevented invalid submissions.
            </p>
          </div>
          <div className="cs2-overview-right">
            <div className="cs2-image-stack">
              <div className="cs2-img-card cs2-img-card--top">
                <img src={beforeImage} alt="Before" />
                <span className="cs2-img-badge">Before</span>
              </div>
              <div className="cs2-img-card cs2-img-card--bottom">
                <img src={afterImage} alt="After" />
                <span className="cs2-img-badge cs2-badge-after">After</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          PROBLEM — full-width dark
      ══════════════════════════════════ */}
      <section ref={addSection} className="cs2-section cs2-problem-band">
        <div className="cs2-container">
          <h2 className="cs2-heading cs2-heading--light cs2-heading--center">
            Unnecessary friction<br />in a motivated user flow
          </h2>
          <div className="cs2-problem-grid">
            <div className="cs2-problem-card">
              <span className="cs2-problem-num">01</span>
              <h3>Wrong Input Control</h3>
              <p>Phone field used a number-stepper — users could enter negative values, violating real-world mental models.</p>
            </div>
            <div className="cs2-problem-card">
              <span className="cs2-problem-num">02</span>
              <h3>No Country Code</h3>
              <p>No country code selector created ambiguity for international users with no guidance on expected format.</p>
            </div>
            <div className="cs2-problem-card">
              <span className="cs2-problem-num">03</span>
              <h3>Zero Validation</h3>
              <p>Insufficient input constraints allowed invalid submissions and increased cognitive load on an already motivated user.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          DESIGN PROCESS
      ══════════════════════════════════ */}
      <section ref={addSection} className="cs2-section cs2-process">
        <div className="cs2-container">
          <h2 className="cs2-heading cs2-center">How I approached the problem</h2>

          <div className="cs2-steps">
            {processSteps.map((step, i) => (
              <div key={i} className="cs2-step">
                <div className="cs2-step-top">
                  <span className="cs2-step-num">{step.num}</span>
                  {i < processSteps.length - 1 && <div className="cs2-step-connector" />}
                </div>
                <h3 className="cs2-step-label">{step.label}</h3>
                <p className="cs2-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          SOLUTION HIGHLIGHTS
      ══════════════════════════════════ */}
      <section ref={addSection} className="cs2-section cs2-solutions">
        <div className="cs2-container">
          <h2 className="cs2-heading cs2-center">Solution Highlights</h2>

          <div className="cs2-sol-grid">
            {solutions.map((s, i) => (
              <div key={i} className="cs2-sol-card">
                <div className="cs2-sol-icon-wrap">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="cs2-sol-title">{s.title}</h3>
                <p className="cs2-sol-text">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          BEFORE & AFTER
      ══════════════════════════════════ */}
      <section ref={addSection} className="cs2-section cs2-compare">
        <div className="cs2-container">
          <h2 className="cs2-heading cs2-center">Before &amp; After</h2>

          <div className="cs2-compare-grid">
            <div className="cs2-compare-card">
              <div className="cs2-compare-label cs2-label-before">Before</div>
              <img src={beforeImage} alt="Before Redesign" />
              <p className="cs2-compare-cap">Number stepper — allows invalid input, breaks real-world mental models</p>
            </div>
            <div className="cs2-compare-arrow">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M8 20h24M24 14l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="cs2-compare-card cs2-compare-card--after">
              <div className="cs2-compare-label cs2-label-after">After</div>
              <img src={afterImage} alt="After Redesign" />
              <p className="cs2-compare-cap">Standard text input + country code — clear, constrained, globally inclusive</p>
            </div>
          </div>

          <div className="cs2-wireframe">
            <p className="cs2-wireframe-label">Annotated Wireframe — Interaction Improvements</p>
            <img src={wireframeImage} alt="Wireframe" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          IMPACT — dark band
      ══════════════════════════════════ */}
      <section ref={addSection} className="cs2-section cs2-impact-band">
        <div className="cs2-container">
          <h2 className="cs2-heading cs2-heading--light cs2-center">Impact &amp; Reflection</h2>

          <div className="cs2-impact-grid">
            <div className="cs2-impact-card">
              <span className="cs2-impact-icon">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <circle cx="14" cy="14" r="12" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M9 14l3.5 3.5L19 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <h3>Error Prevention</h3>
              <p>Invalid phone entries eliminated at the input level — no post-submission validation needed.</p>
            </div>
            <div className="cs2-impact-card">
              <span className="cs2-impact-icon">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <circle cx="14" cy="14" r="12" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M14 8v6l4 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </span>
              <h3>Global Inclusivity</h3>
              <p>Country code selector added — international users can now submit without format ambiguity.</p>
            </div>
            <div className="cs2-impact-card">
              <span className="cs2-impact-icon">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <circle cx="14" cy="14" r="12" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M10 17c0-3 8-3 8 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <circle cx="11" cy="12" r="1.5" fill="currentColor" />
                  <circle cx="17" cy="12" r="1.5" fill="currentColor" />
                </svg>
              </span>
              <h3>Cognitive Load ↓</h3>
              <p>Familiar patterns reduced confusion during a high-intent, conversion-critical interaction flow.</p>
            </div>
          </div>

          <blockquote className="cs2-reflection">
            "Strong UX design is not about introducing complexity — it's about identifying friction and
            resolving it with clarity and restraint. Good UX quietly removes obstacles."
          </blockquote>
        </div>
      </section>

      {/* ══════════════════════════════════
          CTA
      ══════════════════════════════════ */}
      <section ref={addSection} className="cs2-section cs2-cta">
        <div className="cs2-container cs2-cta-inner">
          <h2 className="cs2-cta-heading">Want to see the full Figma file?</h2>
          <p className="cs2-cta-sub">Includes annotated screens, interaction notes, and full design rationale.</p>
          <div className="cs2-cta-actions">
            <Link to="/work" className="cs2-btn cs2-btn-ghost">← Back to Work</Link>
            <a
              href="https://www.figma.com"
              target="_blank"
              rel="noopener noreferrer"
              className="cs2-btn cs2-btn-primary"
            >
              View on Figma →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CaseStudyContactForm
