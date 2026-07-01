import { useEffect, useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../components/HomeSubNavbar.css'
import './CaseStudySpotify.css'
import Footer from '../components/Footer'
import SpotifyPlayerPrototype from '../components/SpotifyPlayerPrototype'

// Images
import spotifyHero from '../images/case-studies/case-study-4/spotify-hero.png'
import spotifyResearch from '../images/case-studies/case-study-4/spotify-research.png'
import spotifyFlow from '../images/case-studies/case-study-4/spotify-flow.png'

// Player State Screenshots
import stateDefault from '../images/case-studies/case-study-4/state-1-default.png'
import stateHover from '../images/case-studies/case-study-4/state-2-hover.png'
import stateLyricsPeek from '../images/case-studies/case-study-4/state-3-lyrics-peek.png'
import stateLyricsMetadata from '../images/case-studies/case-study-4/state-4-lyrics-metadata.png'

// Tool Icons
import figmaIcon from '../images/icons/tool_figma.svg'
import chatgptIcon from '../images/icons/tool_chatgpt.svg'

gsap.registerPlugin(ScrollTrigger)

// ── SVG ICON COMPONENTS ──────────────────────────────────────────────────────
const MusicIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', flexShrink: 0 }}>
    <path d="M9 18V5l12-2v13" />
    <circle cx="6" cy="18" r="3" />
    <circle cx="18" cy="16" r="3" />
  </svg>
)

const ZapIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', flexShrink: 0 }}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
)

const LayersIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', flexShrink: 0 }}>
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
)

const EyeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', flexShrink: 0 }}>
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)

const RefreshIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', flexShrink: 0 }}>
    <polyline points="23 4 23 10 17 10" />
    <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
  </svg>
)

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', flexShrink: 0 }}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', flexShrink: 0 }}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

const TargetIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', flexShrink: 0 }}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
)

const LightbulbIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', flexShrink: 0 }}>
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .5 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
    <line x1="9" y1="18" x2="15" y2="18" />
    <line x1="10" y1="22" x2="14" y2="22" />
  </svg>
)

const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', flexShrink: 0 }}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)

const TrendingUpIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', flexShrink: 0 }}>
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
)

const UserIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', flexShrink: 0 }}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
)

const ShieldIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', flexShrink: 0 }}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
)

// ── CARD COMPONENTS ───────────────────────────────────────────────────────────
const GoalCard = ({ icon, title, description }) => (
  <div className="sp-goal-card">
    <div className="sp-goal-icon">{icon}</div>
    <h4 className="sp-goal-title">{title}</h4>
    <p className="sp-goal-desc">{description}</p>
  </div>
)

const PainPointCard = ({ number, title, description, tag }) => (
  <div className="sp-audit-card">
    <div className="sp-audit-card-top">
      <span className="sp-audit-number">{number}</span>
      <span className="sp-audit-tag">{tag}</span>
    </div>
    <h4 className="sp-audit-title">{title}</h4>
    <p className="sp-audit-desc">{description}</p>
  </div>
)

const ImprovementCard = ({ icon, title, description }) => (
  <div className="sp-improvement-card">
    <span className="sp-improvement-icon">{icon}</span>
    <div>
      <h5 className="sp-improvement-title">{title}</h5>
      <p className="sp-improvement-desc">{description}</p>
    </div>
  </div>
)

const InsightCard = ({ question, answer }) => (
  <div className="sp-insight-card">
    <p className="sp-insight-q">{question}</p>
    <p className="sp-insight-a">{answer}</p>
  </div>
)

// ── MINI PLAYER MOCKUP COMPONENT ──────────────────────────────────────────────
const MiniPlayerMockup = ({ state, label, hasLyrics, isSelected }) => (
  <div className={`sp-player-mockup ${isSelected ? 'sp-player-mockup--selected' : ''}`}>
    <div className="sp-player-screen">
      {/* Window chrome */}
      <div className="sp-window-bar">
        <span className="sp-dot sp-dot--red" />
        <span className="sp-dot sp-dot--yellow" />
        <span className="sp-dot sp-dot--green" />
      </div>
      {/* Desktop wallpaper area */}
      <div className="sp-desktop-area">
        <div className="sp-desktop-lines">
          <div className="sp-line" />
          <div className="sp-line sp-line--short" />
          <div className="sp-line" />
          <div className="sp-line sp-line--medium" />
        </div>
      </div>
      {/* Mini Player */}
      <div className={`sp-mini-player ${state}`}>
        <div className="sp-mp-track">
          <div className="sp-mp-cover" />
          <div className="sp-mp-info">
            <div className="sp-mp-title" />
            <div className="sp-mp-artist" />
          </div>
        </div>
        <div className="sp-mp-controls">
          <span className="sp-ctrl-btn">⟨⟨</span>
          <span className="sp-ctrl-btn sp-ctrl-play">▶</span>
          <span className="sp-ctrl-btn">⟩⟩</span>
          {state !== 'default' && <span className="sp-lyrics-btn">♪</span>}
        </div>
        {hasLyrics && (
          <div className="sp-mp-lyrics">
            <div className="sp-lyric-line sp-lyric-line--active" />
            <div className="sp-lyric-line" />
            <div className="sp-lyric-line sp-lyric-line--faded" />
          </div>
        )}
      </div>
    </div>
    {isSelected && <div className="sp-selected-badge">Selected</div>}
    <p className="sp-mockup-label">{label}</p>
  </div>
)

// ── TOC SLUGIFY ───────────────────────────────────────────────────────────────
const slugify = (text) => text.toLowerCase().replace(/\s+/g, '-')

const TOC_ITEMS = [
  'Overview',
  'Existing Experience',
  'Research & Validation',
  'Design Goals',
  'Exploring Solutions',
  'UX Thinking',
  'Final UI',
  'Prototype',
  'Key UX Decisions',
  'Expected Impact',
  'What I Learned',
]


// ── MAIN COMPONENT ────────────────────────────────────────────────────────────
export default function CaseStudySpotify() {
  const [activeSection, setActiveSection] = useState('')
  const tocListRef = useRef(null)
  const tocIndicatorRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(['.sp-hero-tag', '.sp-hero-title', '.sp-hero-sub', '.sp-meta-row'], {
        y: 40, opacity: 0, duration: 0.9, stagger: 0.12, ease: 'power3.out', delay: 0.1
      })
      gsap.from('.sp-hero-visual', { y: 70, opacity: 0, duration: 1.2, ease: 'power3.out', delay: 0.4 })
    })
    return () => ctx.revert()
  }, [])

  // Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.sp-flow-section')
      let current = ''
      sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top
        if (top < 300) current = sec.getAttribute('id')
      })
      if (current) setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // TOC indicator
  useEffect(() => {
    const list = tocListRef.current
    const bar = tocIndicatorRef.current
    if (!list || !bar) return
    const activeItem = list.querySelector('.gw-toc-item.active')
    if (activeItem) {
      bar.style.transform = `translateY(${activeItem.offsetTop}px)`
      bar.style.height = `${activeItem.offsetHeight}px`
      bar.style.opacity = '1'
    } else {
      bar.style.opacity = '0'
    }
  }, [activeSection])

  const handleNavClick = (e, id) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 150
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <div className="gw-page sp-page">


      {/* ── HERO ── */}
      <section className="gw-hero">
        <div className="gw-hero-content">
          <span className="gw-hero-tag">UX Research · Interaction Design · Product Design</span>
          <h1 className="gw-hero-title">
            Spotify Desktop<br />
            <span className="gw-accent">Mini Player</span><br />
            Redesign
          </h1>
          <p className="gw-hero-sub">
            Making Spotify lyrics accessible without interrupting user workflow — bringing live lyrics directly into the Desktop Mini Player experience.
          </p>
          <div className="gw-meta-row">
            {[
              ['Role', 'UX/UI Designer'],
              ['Platform', 'Desktop'],
              ['Timeline', '3 Weeks'],
              ['Tools', 'Figma, Figma Make'],
            ].map(([l, v], i) => (
              <div key={i} className="gw-meta-item">
                <span className="gw-meta-label">{l}</span>
                <span className="gw-meta-val">{v}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="gw-hero-visual">
          <div className="gw-hero-glow" />
          <div className="gw-hero-img-wrap">
            <img src={spotifyHero} alt="Spotify Mini Player Redesign — Before vs After" className="gw-hero-img" />
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <div className="gw-main-content">

        {/* ── SIDEBAR TOC ── */}
        <aside className="gw-toc-area">
          <div className="gw-toc-sticky">
            <h4 className="gw-toc-title">Table of Contents</h4>
            <ul className="gw-toc-list" ref={tocListRef}>
              <span className="gw-toc-indicator" ref={tocIndicatorRef} />
              {TOC_ITEMS.map((item, i) => {
                const id = slugify(item)
                return (
                  <li key={i} className={`gw-toc-item ${activeSection === id ? 'active' : ''}`}>
                    <a href={`#${id}`} onClick={(e) => handleNavClick(e, id)}>{item}</a>
                  </li>
                )
              })}
            </ul>
          </div>
        </aside>

        {/* ── FLOW CONTENT ── */}
        <div className="gw-flow-area">

          {/* ── SECTION 1: OVERVIEW ── */}
          <section id="overview" className="gw-flow-section sp-ord-section">
            <h3 className="sp-section-headline">Lyrics Without<br />Leaving Your Workflow</h3>
            <p className="sp-section-sub">
              Spotify's Desktop Mini Player lets users listen to music without opening the full application —
              a lightweight companion for multitaskers and focus sessions.
            </p>
            <p className="gw-body" style={{ marginBottom: '2rem' }}>
              However, accessing live song lyrics forces users to switch back to the main Spotify window,
              breaking the very workflow the Mini Player was designed to preserve. This project explores how
              Spotify could bring lyrics directly into the Desktop Mini Player experience — using progressive
              disclosure and hover-based interaction to deliver lyrics on demand without disrupting simplicity.
            </p>
            <div className="sp-context-cards">
              <div className="sp-context-card">
                <span className="sp-context-icon"><MusicIcon /></span>
                <div>
                  <strong>The Mini Player</strong>
                  <p>A compact Spotify window for listening without opening the full app — but it has no lyrics access.</p>
                </div>
              </div>
              <div className="sp-context-card">
                <span className="sp-context-icon"><RefreshIcon /></span>
                <div>
                  <strong>The Problem</strong>
                  <p>Users must switch back to the main Spotify window just to read lyrics, interrupting their workflow.</p>
                </div>
              </div>
              <div className="sp-context-card">
                <span className="sp-context-icon"><TargetIcon /></span>
                <div>
                  <strong>The Opportunity</strong>
                  <p>Design a lyrics experience native to the Mini Player using progressive disclosure and interaction design.</p>
                </div>
              </div>
            </div>
          </section>

          {/* ── SECTION 2: EXISTING EXPERIENCE ── */}
          <section id="existing-experience" className="gw-flow-section sp-ord-section">
            <h3 className="sp-section-headline">Existing Experience</h3>
            <p className="sp-section-sub">
              The current Spotify Desktop Mini Player offers playback controls but leaves lyrics entirely inaccessible.
            </p>

            <p className="gw-body" style={{ marginBottom: '2.5rem' }}>
              To view synchronized lyrics, users are forced to restore the main Spotify window, which defeats the purpose
              of the compact player. This creates workflow disruption, constant window switching, and breaks the immersive
              listening experience.
            </p>

            <img
              src={spotifyFlow}
              alt="Existing Spotify Mini Player Flow"
              className="sp-flow-img"
            />

            <h5 className="gw-sub-heading" style={{ marginTop: '3.5rem', marginBottom: '1.5rem', fontSize: '1.25rem', color: 'var(--text-primary)', fontWeight: 700 }}>Problems Identified</h5>
            <div className="sp-audit-grid" style={{ marginBottom: '3.5rem' }}>
              <PainPointCard
                number="01"
                tag="Feature Gap"
                title="No Lyrics Inside Mini Player"
                description="Lyrics are entirely absent from the Mini Player experience. Users who multitask with Spotify minimized have no way to read lyrics without fully switching applications."
              />
              <PainPointCard
                number="02"
                tag="Interruption"
                title="Workflow Interruption"
                description="Opening the full Spotify window breaks user focus during deep work sessions. The Mini Player's core value — staying out of the way — is undermined the moment lyrics are needed."
              />
              <PainPointCard
                number="03"
                tag="Context Switching"
                title="Repeated Context Switching"
                description="Users must toggle between their primary application and Spotify repeatedly during a session. This constant switching compounds over time, degrading the music listening experience."
              />
              <PainPointCard
                number="04"
                tag="Immersion"
                title="Reduced Music Immersion"
                description="The inability to see lyrics passively during work reduces the sense of connection with the music. Workarounds like secondary lyric apps create unnecessary desktop clutter."
              />
            </div>

          </section>

          {/* ── SECTION 4: RESEARCH & VALIDATION ── */}
          <section id="research-&-validation" className="gw-flow-section sp-ord-section">
            <h3 className="sp-section-headline">Research & Validation</h3>
            <p className="sp-section-sub">
              Before designing, I validated the problem through community-driven research — Spotify Community,
              Reddit discussions, and feature request threads.
            </p>

            <img
              src={spotifyResearch}
              alt="Spotify Community and Reddit research evidence showing user requests for Mini Player lyrics"
              className="sp-research-img"
            />

            <h4 className="sp-sub-heading" style={{ marginTop: '2.5rem', marginBottom: '1.25rem' }}>Key Research Findings</h4>
            <div className="sp-findings-grid">
              <div className="sp-finding-card">
                <div className="sp-finding-icon">🎤</div>
                <p>Users want to <strong>sing along</strong> while working without disrupting focus</p>
              </div>
              <div className="sp-finding-card">
                <div className="sp-finding-icon">💼</div>
                <p>Users want lyrics during <strong>multitasking</strong> — coding, writing, designing</p>
              </div>
              <div className="sp-finding-card">
                <div className="sp-finding-icon">😤</div>
                <p>Users <strong>dislike reopening</strong> the full Spotify app repeatedly just for lyrics</p>
              </div>
              <div className="sp-finding-card">
                <div className="sp-finding-icon">🔧</div>
                <p>Users <strong>actively search for workarounds</strong> — browser tabs, third-party apps</p>
              </div>
            </div>
          </section>



          {/* ── SECTION 6: DESIGN GOALS ── */}
          <section id="design-goals" className="gw-flow-section sp-ord-section">
            <h3 className="sp-section-headline">Design Goals</h3>
            <p className="sp-section-sub">Four goals guided every design decision in this project.</p>
            <div className="sp-goals-grid">
              <GoalCard icon={<RefreshIcon />} title="Reduce Context Switching" description="Keep users in their primary workflow by delivering lyrics without requiring them to open the main Spotify application." />
              <GoalCard icon={<MusicIcon />} title="Improve Lyric Accessibility" description="Make live synchronized lyrics immediately available within the Mini Player on demand, without friction or extra steps." />
              <GoalCard icon={<LayersIcon />} title="Preserve Mini Player Simplicity" description="The Mini Player's compact footprint and minimal interface must remain unchanged. Lyrics should feel like an extension, not an addition." />
              <GoalCard icon={<ShieldIcon />} title="Maintain Spotify Familiarity" description="Visual language, typography, and interaction patterns must align with the existing Spotify design system to feel native, not foreign." />
            </div>
          </section>

          {/* ── SECTION 7: DESIGN EXPLORATION ── */}
          <section id="exploring-solutions" className="gw-flow-section sp-ord-section">
            <h3 className="sp-section-headline">Exploring Solutions</h3>
            <p className="sp-section-sub">
              Three design directions were explored before arriving at the final solution.
            </p>

            <div className="sp-concepts-grid">
              <div className="sp-concept-card">
                <div className="sp-concept-label">Concept A</div>
                <h4 className="sp-concept-title">Single Line Lyrics</h4>
                <p className="sp-concept-desc">A single scrolling line of the current lyric appears below the track controls — always visible, always synced.</p>
                <div className="sp-concept-verdict sp-concept-verdict--no">
                  <XIcon />
                  Not Selected — Too little context; single line disrupts reading flow
                </div>
              </div>
              <div className="sp-concept-card">
                <div className="sp-concept-label">Concept B</div>
                <h4 className="sp-concept-title">Expanded Mini Player</h4>
                <p className="sp-concept-desc">The Mini Player expands to a larger window that includes a full lyrics panel alongside playback controls.</p>
                <div className="sp-concept-verdict sp-concept-verdict--no">
                  <XIcon />
                  Not Selected — Loses Mini Player's compact value proposition
                </div>
              </div>
              <div className="sp-concept-card sp-concept-card--selected">
                <div className="sp-concept-label">Concept C</div>
                <h4 className="sp-concept-title">Lyrics Peek Mode ✦</h4>
                <p className="sp-concept-desc">A hover-triggered overlay that reveals 2–3 lines of synchronized lyrics below the compact player without permanently expanding it.</p>
                <div className="sp-concept-verdict sp-concept-verdict--yes">
                  <CheckIcon />
                  Selected — Balances accessibility with simplicity
                </div>
              </div>
            </div>

            <div className="sp-selection-rationale">
              <div className="sp-rationale-eyebrow">Why Lyrics Peek Mode</div>
              <p className="gw-body">
                Lyrics Peek Mode was selected because it respects the core promise of the Mini Player — staying compact and non-intrusive.
                By using progressive disclosure (lyrics only appear when the user interacts), the feature adds genuine value without cluttering
                the default experience. Users who never want lyrics see nothing new. Users who want lyrics get them with a single hover.
              </p>
            </div>
          </section>

          {/* ── SECTION 8: UX THINKING ── */}
          <section id="ux-thinking" className="gw-flow-section sp-ord-section">
            <h3 className="sp-section-headline">UX Thinking</h3>
            <p className="sp-section-sub">The solution is built on core interaction design principles that respect user workflow.</p>
            <div className="sp-insights-grid">
              <InsightCard
                question="Why progressive disclosure?"
                answer="Lyrics should surface only when requested. Showing lyrics constantly would overwhelm the minimal interface and distract users who are actively multitasking. Progressive disclosure keeps the default state simple and the experienced state richer."
              />
              <InsightCard
                question="Why hover-based interaction?"
                answer="Hover is the lowest-effort interaction on desktop. A user who wants to glance at lyrics doesn't need to click — a momentary hover reveals the content. This mirrors patterns like tooltip reveals and hover cards in modern desktop software."
              />
              <InsightCard
                question="Why keep playback controls accessible?"
                answer="Even in Lyrics Peek Mode, the play, pause, and skip controls remain visible and functional. Users should never have to dismiss lyrics to manage playback — these two actions must coexist without conflict."
              />
              <InsightCard
                question="Why not a full lyrics window?"
                answer="The Mini Player's value is its footprint. A full lyrics window defeats the purpose. The peek approach gives users quick lyric access during focused work — not a karaoke session. The right amount of lyrics at the right time."
              />
            </div>
          </section>

          {/* ── SECTION 10: FINAL UI ── */}
          <section id="final-ui" className="gw-flow-section sp-ord-section">
            <h3 className="sp-section-headline">Final UI</h3>
            <p className="sp-section-sub">
              High-fidelity screens showing the complete Lyrics Peek Mode design system.
            </p>

            <div className="sp-player-showcase">
              <div className="sp-state-img-card">
                <div className="sp-state-img-wrap">
                  <img src={stateDefault} alt="State 1 — Default Mini Player" className="sp-state-img" />
                </div>
                <div className="sp-state-img-label">
                  <span className="sp-state-img-num">01</span>
                  <span className="sp-state-img-name">Default State</span>
                </div>
              </div>
              <div className="sp-state-img-card">
                <div className="sp-state-img-wrap">
                  <img src={stateHover} alt="State 2 — Hover State" className="sp-state-img" />
                </div>
                <div className="sp-state-img-label">
                  <span className="sp-state-img-num">02</span>
                  <span className="sp-state-img-name">Hover State</span>
                </div>
              </div>
              <div className="sp-state-img-card sp-state-img-card--selected">
                <div className="sp-state-img-wrap">
                  <img src={stateLyricsPeek} alt="State 3 — Lyrics Peek Mode" className="sp-state-img" />
                </div>
                <div className="sp-state-img-label">
                  <span className="sp-state-img-num">03</span>
                  <span className="sp-state-img-name">Lyrics Peek Mode</span>
                </div>
              </div>
              <div className="sp-state-img-card">
                <div className="sp-state-img-wrap">
                  <img src={stateLyricsMetadata} alt="State 4 — Lyrics + Metadata" className="sp-state-img" />
                </div>
                <div className="sp-state-img-label">
                  <span className="sp-state-img-num">04</span>
                  <span className="sp-state-img-name">Lyrics + Metadata</span>
                </div>
              </div>
            </div>

            <div className="sp-ui-highlights">
              <div className="sp-highlight">
                <span className="sp-highlight-dot" />
                <div>
                  <strong>Lyrics Button</strong>
                  <p>Subtle ♪ icon appears on hover — discoverable without being intrusive</p>
                </div>
              </div>
              <div className="sp-highlight">
                <span className="sp-highlight-dot" />
                <div>
                  <strong>Translucent Lyrics Panel</strong>
                  <p>Glassmorphism overlay synced to track — current line highlighted in white</p>
                </div>
              </div>
              <div className="sp-highlight">
                <span className="sp-highlight-dot" />
                <div>
                  <strong>Persistent Controls</strong>
                  <p>Play, pause, skip always visible — never hidden behind the lyrics layer</p>
                </div>
              </div>
              <div className="sp-highlight">
                <span className="sp-highlight-dot" />
                <div>
                  <strong>Spotify Visual Language</strong>
                  <p>Native dark theme, Inter typography, and green accent color throughout</p>
                </div>
              </div>
            </div>
          </section>

          {/* ── SECTION 11: PROTOTYPE ── */}
          <section id="prototype" className="gw-flow-section sp-ord-section">
            <h3 className="sp-section-headline">Prototype</h3>
            <p className="sp-section-sub">
              An interactive coded prototype showing all four Mini Player states.
              Hover the player to reveal controls, then click the mic icon to toggle lyrics.
            </p>

            {/* ── Live Interactive Prototype ── */}
            <div className="sp-proto-live-wrap">
              <div className="sp-proto-live-label">
                <span className="sp-proto-live-dot" />
                Live Interactive Prototype
              </div>
              <SpotifyPlayerPrototype />
            </div>

            {/* ── Figma links ── */}
            <div className="sp-prototype-cards">
              <div className="sp-proto-card">
                <div className="sp-proto-icon">
                  <img src={figmaIcon} alt="Figma" style={{ width: 32, height: 32 }} />
                </div>
                <div className="sp-proto-info">
                  <h4>Figma Design</h4>
                  <p>Explore the complete high-fidelity UI screens and component library.</p>
                </div>
                <a
                  href="https://www.figma.com/design/vM1YbJONNAlsayJCEJIt6y/Spotify-Case-study--PUBLIC?node-id=0-1&t=YerxVfUt2TrRVIR8-1"
                  className="gw-btn gw-btn-primary sp-proto-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Design →
                </a>
              </div>
              <div className="sp-proto-card">
                <div className="sp-proto-icon sp-proto-icon--make">
                  <img src={figmaIcon} alt="Figma Make" style={{ width: 32, height: 32, filter: 'hue-rotate(120deg)' }} />
                </div>
                <div className="sp-proto-info">
                  <h4>Figma Make Prototype</h4>
                  <p>Interact with the live Figma prototype including hover states and lyrics reveal.</p>
                </div>
                <a
                  href="https://www.figma.com/make/ZUwGWcofp0lVANyUK3z7Yu/Spotify-Mini-Player-Prototype?t=m6eWMcqLwuSvKbyJ-20&fullscreen=1"
                  className="gw-btn gw-btn-ghost sp-proto-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Prototype →
                </a>
              </div>
            </div>
          </section>

          {/* ── SECTION 12: KEY UX DECISIONS ── */}
          <section id="key-ux-decisions" className="gw-flow-section sp-ord-section">
            <h3 className="sp-section-headline">Key UX Decisions</h3>
            <p className="sp-section-sub">Five interaction design choices that define the Lyrics Peek Mode experience.</p>
            <div className="sp-improvements-grid">
              <ImprovementCard icon={<EyeIcon />} title="Lyrics Peek Mode" description="Lyrics surface only in a compact overlay — never replacing the player. The interface adapts to the user's momentary need without commitment." />
              <ImprovementCard icon={<LayersIcon />} title="Progressive Disclosure" description="Default state shows no lyrics. Lyrics appear only when the user interacts — either by hovering or tapping the lyrics button. Zero noise by default." />
              <ImprovementCard icon={<ZapIcon />} title="Control Simplification" description="Playback controls are never hidden or obscured. Every state of the player keeps pause, skip, and volume fully accessible." />
              <ImprovementCard icon={<MusicIcon />} title="Hover-Based Interaction" description="Leveraging desktop hover patterns means zero additional clicks. Glancing at lyrics requires the same effort as reading a tooltip — nearly none." />
              <ImprovementCard icon={<TargetIcon />} title="Reduced Cognitive Load" description="By keeping the Mini Player visually unchanged in its default state, users maintain their workflow mental model. Lyrics don't announce themselves." />
            </div>
          </section>

          {/* ── SECTION 13: EXPECTED IMPACT ── */}
          <section id="expected-impact" className="gw-flow-section sp-ord-section">
            <h3 className="sp-section-headline">Expected Impact</h3>
            <p className="sp-section-sub">
              Based on research findings and UX principles, these outcomes are expected from shipping Lyrics Peek Mode.
            </p>
            <div className="sp-impact-grid">
              <div className="sp-impact-card">
                <div className="sp-impact-icon"><TrendingUpIcon /></div>
                <h4>Reduced App Switching</h4>
                <p>Users no longer need to open the full Spotify window to access lyrics — keeping them in their primary workflow.</p>
              </div>
              <div className="sp-impact-card">
                <div className="sp-impact-icon"><ZapIcon /></div>
                <h4>Faster Access To Lyrics</h4>
                <p>From zero to lyrics in a single hover — compared to multiple clicks and application switches in the current experience.</p>
              </div>
              <div className="sp-impact-card">
                <div className="sp-impact-icon"><UserIcon /></div>
                <h4>Improved Multitasking</h4>
                <p>Professionals who use Spotify during work sessions can now engage with lyrics passively without breaking their concentration.</p>
              </div>
              <div className="sp-impact-card">
                <div className="sp-impact-icon"><MusicIcon /></div>
                <h4>Higher Lyric Engagement</h4>
                <p>Lower friction to access lyrics drives more frequent lyric viewing — increasing time spent with Spotify's lyrics feature.</p>
              </div>
            </div>
          </section>

          {/* ── SECTION 14: REFLECTION ── */}
          <section id="what-i-learned" className="gw-flow-section sp-ord-section sp-outcome-section">
            <h3 className="sp-outcome-headline">What I Learned</h3>
            <p className="sp-outcome-body">
              This project reinforced that the best product improvements often don't add new screens — they add the right information
              to the right moment. The Mini Player redesign is a pure interaction design problem: no new architecture, no new visual language,
              just a smarter use of the space and states that already exist.
            </p>

            <div className="sp-improvements-grid" style={{ marginBottom: '3rem' }}>
              <ImprovementCard icon={<CheckIcon />} title="Community-Driven Research" description="Spotify Community and Reddit threads were rich sources of genuine user frustration. Real user language informed every design decision." />
              <ImprovementCard icon={<CheckIcon />} title="Constrained Space Design" description="Designing within the Mini Player's footprint forced creative prioritization. Every pixel had to earn its place." />
              <ImprovementCard icon={<CheckIcon />} title="Function vs. Simplicity" description="The hardest part was adding functionality without adding complexity. Progressive disclosure was the solution that made both possible." />
              <ImprovementCard icon={<CheckIcon />} title="Interaction Over New Screens" description="Hover states and overlay layers solved this problem without new windows, new flows, or new navigation — pure interaction design." />
            </div>

            <h4 className="sp-sub-heading" style={{ marginBottom: '1.25rem' }}>Future Improvements</h4>
            <div className="sp-future-grid">
              <div className="sp-future-card">
                <div className="sp-future-icon">🧪</div>
                <h5>User Testing</h5>
                <p>Validate hover trigger timing, lyrics panel height, and control visibility with real users across different screen sizes.</p>
              </div>
              <div className="sp-future-card">
                <div className="sp-future-icon">♿</div>
                <h5>Accessibility Validation</h5>
                <p>Ensure lyric contrast ratios, keyboard navigation fallbacks, and screen reader compatibility are validated against WCAG standards.</p>
              </div>
              <div className="sp-future-card">
                <div className="sp-future-icon">🖥️</div>
                <h5>Desktop Behavior Testing</h5>
                <p>Test the hover and overlay behavior across Windows and macOS environments, including multi-monitor setups and different DPI scales.</p>
              </div>
            </div>

            <div className="sp-outcome-tags">
              <span className="sp-outcome-tag">Interaction Design</span>
              <span className="sp-outcome-tag">Progressive Disclosure</span>
              <span className="sp-outcome-tag">Community Research</span>
              <span className="sp-outcome-tag">Constraint-Led Design</span>
              <span className="sp-outcome-tag">Desktop UX</span>
            </div>
          </section>

        </div>
      </div>

      {/* ── CTA ── */}
      <section className="gw-cta">
        <h2>Want to see more of my work?</h2>
        <p>Explore other case studies or get in touch.</p>
        <div className="gw-cta-btns">
          <Link to="/work" className="gw-btn gw-btn-ghost">← Back to Work</Link>
          <Link to="/contact" className="gw-btn gw-btn-primary">Let's Talk →</Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
