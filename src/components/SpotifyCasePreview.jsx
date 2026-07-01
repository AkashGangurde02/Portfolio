import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './SpotifyCasePreview.css'
import SpotifyPlayerPrototype from './SpotifyPlayerPrototype'

// ── PARTICLES background (tiny floating UI dots) ──────────────────────────────
const PARTICLE_COUNT = 22

function useParticles() {
  const [particles] = useState(() =>
    Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.5 + 0.8,
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.25 + 0.05,
    }))
  )
  return particles
}

// ── (MiniPlayerCard replaced by SpotifyPlayerPrototype import above) ──────────

// ── INSIGHT CARD ──────────────────────────────────────────────────────────────
function InsightCard({ number, title, body, delay }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`scp-insight-card ${visible ? 'scp-insight-card--visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="scp-insight-num">{number}</span>
      <div className="scp-insight-divider" aria-hidden="true" />
      <h4 className="scp-insight-title">{title}</h4>
      <p className="scp-insight-body">{body}</p>
    </div>
  )
}

// ── MAIN COMPONENT ────────────────────────────────────────────────────────────
export default function SpotifyCasePreview() {
  const sectionRef = useRef(null)
  const headlineRef = useRef(null)
  const subRef = useRef(null)
  const chipsRef = useRef(null)
  const impactRef = useRef(null)
  const particles = useParticles()

  // Scroll-triggered reveal for left column text
  useEffect(() => {
    const targets = [headlineRef, subRef, chipsRef, impactRef]
    const observers = targets.map((ref, i) => {
      const el = ref.current
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => el.classList.add('scp-reveal--in'), i * 120)
          }
        },
        { threshold: 0.15, rootMargin: '-60px 0px' }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [])

  const chips = ['UX Research', 'Interaction Design', 'Desktop UX', 'Community Driven']

  return (
    <section
      ref={sectionRef}
      id="spotify-case-preview"
      className="scp-section"
      aria-label="Spotify Desktop Mini Player Redesign — Case Study Preview"
    >
      {/* ── Background canvas ── */}
      <div className="scp-bg" aria-hidden="true">
        <div className="scp-bg-grid" />
        <div className="scp-bg-noise" />
        {particles.map(p => (
          <span
            key={p.id}
            className="scp-particle"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              opacity: p.opacity,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* ── Thin top rule ── */}
      <div className="scp-top-rule" aria-hidden="true" />

      <div className="scp-inner">
        {/* ══════════════════════════════════════════
            LEFT COLUMN — Editorial typography
        ══════════════════════════════════════════ */}
        <div className="scp-left">

          {/* Project eyebrow */}
          <div className="scp-eyebrow scp-reveal" ref={headlineRef}>
            <span className="scp-eyebrow-index">04</span>
            <span className="scp-eyebrow-divider" aria-hidden="true" />
            <span className="scp-eyebrow-label">Case Study</span>
          </div>

          {/* Main headline */}
          <h2 className="scp-headline scp-reveal" ref={headlineRef} style={{ transitionDelay: '80ms' }}>
            <span className="scp-headline-line">Lyrics Without</span>
            <span className="scp-headline-line scp-headline-line--accent">Leaving Your</span>
            <span className="scp-headline-line">Workflow</span>
          </h2>

          {/* Subheadline */}
          <p className="scp-subheadline scp-reveal" ref={subRef}>
            A UX redesign of Spotify's Desktop Mini Player that helps users access
            live lyrics without breaking focus or switching applications.
          </p>

          {/* Metadata chips */}
          <div className="scp-chips scp-reveal" ref={chipsRef} style={{ transitionDelay: '60ms' }}>
            {chips.map(chip => (
              <span key={chip} className="scp-chip">{chip}</span>
            ))}
          </div>

          {/* Impact statement */}
          <blockquote className="scp-impact scp-reveal" ref={impactRef} style={{ transitionDelay: '100ms' }}>
            <span className="scp-impact-bar" aria-hidden="true" />
            <p>
              Users repeatedly switched back to the main Spotify window just to view lyrics.
              This concept introduces a lightweight hover-based lyrics experience that
              preserves workflow and reduces context switching.
            </p>
          </blockquote>

          {/* CTA */}
          <Link
            to="/case-study/spotify"
            className="scp-cta scp-reveal"
            style={{ transitionDelay: '140ms' }}
            aria-label="View Spotify case study"
          >
            <span className="scp-cta-text">View Case Study</span>
            <span className="scp-cta-arrow" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
          </Link>
        </div>

        {/* ══════════════════════════════════════════
            RIGHT COLUMN — Interactive 4-State Prototype
        ══════════════════════════════════════════ */}
        <div className="scp-right">
          <SpotifyPlayerPrototype />
        </div>
      </div>

      {/* ══════════════════════════════════════════
          INSIGHT CARDS — Bottom row
      ══════════════════════════════════════════ */}
      <div className="scp-insights-row">
        <InsightCard
          number="01"
          title="Problem"
          body="Users had to reopen Spotify repeatedly for lyrics, breaking their focus and workflow."
          delay={0}
        />
        <InsightCard
          number="02"
          title="Research"
          body="Community discussions across Spotify forums and Reddit revealed strong demand for lyrics in Mini Player."
          delay={100}
        />
        <InsightCard
          number="03"
          title="Solution"
          body="Progressive disclosure through hover-based lyrics peek mode — zero new windows, zero friction."
          delay={200}
        />
      </div>

      {/* ── Bottom rule ── */}
      <div className="scp-bottom-rule" aria-hidden="true" />
    </section>
  )
}
