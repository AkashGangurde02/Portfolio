import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './CaseStudyGrubwala.css'
import grubwalaImage from '../images/case-studies/case-study-3/grubwala-cover.png'
import Footer from '../components/Footer'

gsap.registerPlugin(ScrollTrigger)

const PROCESS = [
  { num:'01', label:'Empathize', desc:'Interviewed users and used the app extensively to surface real friction points and unmet emotional needs.' },
  { num:'02', label:'Define', desc:'Synthesized research into a clear problem statement: users were asked to commit before experiencing any value.' },
  { num:'03', label:'Ideate', desc:'Ran design sprints exploring onboarding, ordering, checkout, and kitchen workflow improvements.' },
  { num:'04', label:'Design', desc:'Built a mobile-first design system and high-fidelity prototypes across all four critical flows.' },
  { num:'05', label:'Test & Improve', desc:'Validated designs through usability testing, iterated on friction points, and refined edge cases.' },
]

const PROBLEMS = [
  { n:'01', title:'Friction-Heavy Onboarding', desc:'Email + password registration before users could see any food—maximum commitment, zero value shown upfront.' },
  { n:'02', title:'Cluttered Home Screen', desc:'Kitchens, categories, and offers competed equally for attention. No clear visual hierarchy or priority.' },
  { n:'03', title:'Broken Checkout Flow', desc:'Multiple confirmation steps created anxiety at the final moment. Users abandoned carts at the last screen.' },
  { n:'04', title:'Unstructured Kitchen Workflow', desc:'Kitchen staff had no organized order queue or status system—leading to operational confusion and delays.' },
]

const SOLUTIONS = [
  { title:'OTP Onboarding', desc:'One-tap phone + OTP login eliminates passwords entirely. Users reach food in under 30 seconds.', tag:'Friction Removed' },
  { title:'Guided Home Feed', desc:'Priority hierarchy: location → category → kitchen → dish. Every decision has a natural next step.', tag:'Clarity Added' },
  { title:'Streamlined Checkout', desc:'Linear cart → address → payment → confirm. Reduced from 6 steps to 3 decisive moments.', tag:'Confidence Built' },
  { title:'Kitchen Dashboard', desc:'Real-time order queue with status tracking and preparation timers. Clarity at every stage.', tag:'Operations Improved' },
]

const RESEARCH = [
  { stat:'78%', label:'Preferred phone-based login', sub:'Over email/password auth' },
  { stat:'63%', label:'Dropped off during onboarding', sub:'Before seeing any food' },
  { stat:'41%', label:'Abandoned cart at checkout', sub:'Due to too many steps' },
  { stat:'89%', label:'Wanted real-time order status', sub:'For both users and kitchens' },
]

const EMPATHY = [
  { q:'Says', icon:'💬', items:['"I just want to quickly order food"', '"Why do I need to sign up first?"', '"The app feels clunky and slow"'] },
  { q:'Thinks', icon:'🧠', items:['Is this food really homemade?', 'Why is there so much to look at?', 'I hope checkout doesn\'t take long'] },
  { q:'Does', icon:'🖐️', items:['Abandons signup midway through', 'Scrolls past cards without clicking', 'Exits on the last checkout screen'] },
  { q:'Feels', icon:'❤️', items:['Skeptical about authenticity', 'Overwhelmed by choice density', 'Anxious during multi-step checkout'] },
]

const FLOWS = [
  { title:'Onboarding', before:'Email/password form, mandatory profile setup, app tour before any food was shown.', after:'Phone number → OTP → instant home feed. Zero friction, instant value delivery.' },
  { title:'Product Ordering', before:'Dense menu grid, unclear pricing, no smart filtering or dietary preference indicators.', after:'Category-first browsing, smart cards with clear pricing, one-tap add to cart.' },
  { title:'Checkout', before:'Cart → review → address → payment → review again → confirm. Six screens of redundancy.', after:'Cart → address+payment combined → confirmation. Three decisive, confident screens.' },
  { title:'Kitchen Workflow', before:'No dedicated kitchen interface. Orders managed via basic notification list with no tracking.', after:'Dedicated dashboard with live order queue, status updates, and preparation timers.' },
]

const DS_COLORS = [
  { name:'Primary Orange', hex:'#FF6B35', use:'CTAs, active states' },
  { name:'Deep Charcoal', hex:'#1A1A2E', use:'Text, backgrounds' },
  { name:'Warm White', hex:'#FFF8F5', use:'Page background' },
  { name:'Muted Grey', hex:'#8B9299', use:'Secondary text' },
]

const DS_TYPE = [
  { role:'Display', size:'40px', weight:'800', use:'Hero headlines' },
  { role:'H1', size:'32px', weight:'700', use:'Section titles' },
  { role:'H2', size:'24px', weight:'600', use:'Card headings' },
  { role:'Body', size:'16px', weight:'400', use:'Paragraphs' },
  { role:'Caption', size:'12px', weight:'500', use:'Labels, tags' },
]

const IMPACT = [
  { metric:'↓ 60%', label:'Onboarding drop-off reduced' },
  { metric:'↓ 3x', label:'Steps to place an order' },
  { metric:'↑ 45%', label:'Checkout completion rate' },
  { metric:'↑ 89%', label:'Kitchen operational clarity' },
  { metric:'100%', label:'End-to-end design ownership' },
  { metric:'20+', label:'Screens redesigned from scratch' },
]

const LEARNINGS = [
  { title:'Simplicity is strategic', desc:'Every removed step is a trust deposit. Fewer decisions mean faster, more confident users.' },
  { title:'Emotion drives food decisions', desc:'Homemade food is personal. The UI needed to feel warm and trustworthy, not transactional.' },
  { title:'Operational UX is product UX', desc:'The kitchen workflow was as critical as the consumer flow. Both define the full product experience.' },
  { title:'Hierarchy reduces load', desc:'When everything has a visual priority, users don\'t think—they flow. Hierarchy is the product.' },
]

const IA_CUSTOMER = ['Open App','Phone Login','OTP Verify','Home Feed','Browse Category','View Kitchen','Select Dish','Add to Cart','Checkout','Track Order']
const IA_KITCHEN = ['Receive Order','Update Status','Prepare Dish','Mark Ready','Dispatch','Complete']

export default function CaseStudyGrubwala() {
  const sRef = useRef([])
  const add = el => { if (el && !sRef.current.includes(el)) sRef.current.push(el) }

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(['.gw-hero-tag','.gw-hero-title','.gw-hero-sub','.gw-meta-row'], {
        y:40, opacity:0, duration:0.9, stagger:0.12, ease:'power3.out', delay:0.1
      })
      gsap.from('.gw-hero-visual', { y:70, opacity:0, duration:1.2, ease:'power3.out', delay:0.4 })
      sRef.current.forEach(el => {
        if (!el) return
        gsap.from(el, {
          scrollTrigger:{ trigger:el, start:'top 88%' },
          y:45, opacity:0, duration:0.8, ease:'power3.out'
        })
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <div className="gw-page">

      {/* BREADCRUMB */}
      <div className="gw-breadcrumb">
        <Link to="/work" className="gw-bc-link">← Work</Link>
        <span className="gw-bc-sep">/</span>
        <span className="gw-bc-cur">Grubwala Case Study</span>
      </div>

      {/* ── 1. HERO ── */}
      <section className="gw-hero">
        <div className="gw-hero-content">
          <span className="gw-hero-tag">Mobile App · Food Delivery · End-to-End UX Redesign</span>
          <h1 className="gw-hero-title">Redesigning Grubwala's<br /><span className="gw-accent">Food Ordering</span><br />Experience</h1>
          <p className="gw-hero-sub">Simplifying onboarding, ordering, checkout, and kitchen workflows through a mobile-first UX redesign that removes friction at every touchpoint.</p>
          <div className="gw-meta-row">
            {[['Role','UI/UX Designer'],['Platform','iOS & Android'],['Tools','Figma, FigJam'],['Focus','End-to-End Redesign']].map(([l,v],i)=>(
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
            <img src={grubwalaImage} alt="Grubwala Redesign" className="gw-hero-img" />
          </div>
          <div className="gw-float-card gw-float-1"><span className="gw-float-icon">✓</span><span>OTP Onboarding</span></div>
          <div className="gw-float-card gw-float-2"><span className="gw-float-icon">↑</span><span>45% Checkout Rate</span></div>
          <div className="gw-float-card gw-float-3"><span className="gw-float-icon">↓</span><span>60% Drop-off</span></div>
        </div>
      </section>

      {/* STAT BAND */}
      <div className="gw-stat-band">
        {[['20+','Screens Redesigned'],['4','Flows Rebuilt'],['1','Design System'],['100%','Solo Ownership']].map(([n,l],i)=>(
          <div key={i} className="gw-stat-item"><span className="gw-stat-n">{n}</span><span className="gw-stat-l">{l}</span></div>
        ))}
      </div>

      {/* ── 2. OVERVIEW ── */}
      <section ref={add} className="gw-section gw-overview">
        <div className="gw-two-col">
          <div>
            <p className="gw-label">Project Overview</p>
            <h2 className="gw-h2">Designing for food is designing for emotion</h2>
            <p className="gw-body">Users don't open Grubwala simply because they're hungry. They open it seeking comfort, familiarity, and food that feels personal. This emotional dimension raises the stakes of every design decision.</p>
            <p className="gw-body" style={{marginTop:'1rem'}}>The product functioned—but it didn't <em>flow</em>. Screens solved isolated problems without acknowledging the user's complete journey. The goal was rebuilding the entire mobile experience as one intentional, continuous narrative.</p>
            <div className="gw-tag-row">
              {['Homemade Food Platform','B2C + B2B Flows','Mobile First','OTP Auth'].map((t,i)=><span key={i} className="gw-tag">{t}</span>)}
            </div>
          </div>
          <div className="gw-overview-img-wrap">
            <img src={grubwalaImage} alt="Grubwala Overview" />
          </div>
        </div>
      </section>

      {/* ── 3. PROBLEM STATEMENT ── */}
      <section className="gw-dark-band">
        <div className="gw-inner">
          <p className="gw-label gw-label--dark">Problem Statement</p>
          <h2 className="gw-h2 gw-h2--dark">Users were working too hard to reach food</h2>
          <p className="gw-body gw-body--dark" style={{maxWidth:580,margin:'0 auto 3rem',textAlign:'center'}}>Four critical UX failures were creating drop-off across every stage of the product journey.</p>
          <div className="gw-problem-grid">
            {PROBLEMS.map((p,i)=>(
              <div key={i} className="gw-problem-card">
                <span className="gw-prob-num">{p.n}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. POSSIBLE SOLUTION ── */}
      <section ref={add} className="gw-section">
        <p className="gw-label">Possible Solutions</p>
        <h2 className="gw-h2">Four design interventions, one cohesive experience</h2>
        <div className="gw-sol-grid">
          {SOLUTIONS.map((s,i)=>(
            <div key={i} className="gw-sol-card">
              <span className="gw-sol-tag">{s.tag}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 5. DESIGN PROCESS ── */}
      <section ref={add} className="gw-alt-section">
        <div className="gw-inner">
          <p className="gw-label">Design Process</p>
          <h2 className="gw-h2 gw-center">A structured, human-centered approach</h2>
          <div className="gw-process-row">
            {PROCESS.map((p,i)=>(
              <div key={i} className="gw-process-card">
                <span className="gw-proc-num">{p.num}</span>
                <h3>{p.label}</h3>
                <p>{p.desc}</p>
                {i < PROCESS.length-1 && <div className="gw-proc-arrow">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. USER RESEARCH ── */}
      <section ref={add} className="gw-section">
        <p className="gw-label">User Research</p>
        <h2 className="gw-h2">What the data revealed</h2>
        <p className="gw-body" style={{maxWidth:600,marginBottom:'2.5rem'}}>Conducted in-depth interviews with 12 users and analyzed app usage patterns to surface key behavioral insights.</p>
        <div className="gw-research-grid">
          {RESEARCH.map((r,i)=>(
            <div key={i} className="gw-research-card">
              <span className="gw-res-stat">{r.stat}</span>
              <p className="gw-res-label">{r.label}</p>
              <p className="gw-res-sub">{r.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 7. USER PERSONA ── */}
      <section ref={add} className="gw-alt-section">
        <div className="gw-inner">
          <p className="gw-label">User Persona</p>
          <h2 className="gw-h2">Designing for Priya</h2>
          <div className="gw-persona-card">
            <div className="gw-persona-left">
              <div className="gw-persona-avatar">👩</div>
              <div className="gw-persona-identity">
                <strong>Priya Mehta</strong>
                <span>26 · Working Professional</span>
                <span>Mumbai, Maharashtra</span>
              </div>
            </div>
            <div className="gw-persona-right">
              {[['Goals','Quick, reliable, homemade-feeling food during a busy workday without wasting time.'],['Frustrations','Unclear food origins, mandatory signups, and too many steps before ordering.'],['Motivation','Wants the comfort and safety of home food for daily meals—not restaurant food.'],['Behavior','Abandons apps requiring login before showing content. Highly price-conscious.']].map(([h,b],i)=>(
                <div key={i} className="gw-persona-detail">
                  <h5>{h}</h5>
                  <p>{b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. EMPATHY MAP ── */}
      <section ref={add} className="gw-section">
        <p className="gw-label">User Empathy Map</p>
        <h2 className="gw-h2">Getting inside Priya's head</h2>
        <div className="gw-empathy-grid">
          {EMPATHY.map((e,i)=>(
            <div key={i} className="gw-empathy-card">
              <div className="gw-empathy-head"><span>{e.icon}</span><h4>{e.q}</h4></div>
              <ul>{e.items.map((it,j)=><li key={j}>{it}</li>)}</ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── 9. INFORMATION ARCHITECTURE ── */}
      <section ref={add} className="gw-dark-band">
        <div className="gw-inner">
          <p className="gw-label gw-label--dark">Information Architecture</p>
          <h2 className="gw-h2 gw-h2--dark">Restructuring how the app thinks</h2>
          <div className="gw-ia-block">
            <p className="gw-ia-title">Customer Journey Flow</p>
            <div className="gw-ia-row">
              {IA_CUSTOMER.map((n,i)=>(
                <span key={i} className="gw-ia-wrap">
                  <span className="gw-ia-node">{n}</span>
                  {i < IA_CUSTOMER.length-1 && <span className="gw-ia-arr">→</span>}
                </span>
              ))}
            </div>
          </div>
          <div className="gw-ia-block" style={{marginTop:'2rem'}}>
            <p className="gw-ia-title">Kitchen Workflow Flow</p>
            <div className="gw-ia-row">
              {IA_KITCHEN.map((n,i)=>(
                <span key={i} className="gw-ia-wrap">
                  <span className="gw-ia-node gw-ia-node--kitchen">{n}</span>
                  {i < IA_KITCHEN.length-1 && <span className="gw-ia-arr">→</span>}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 10–14. FLOWS BEFORE/AFTER ── */}
      <section ref={add} className="gw-section">
        <p className="gw-label">UX Audit · Before & After</p>
        <h2 className="gw-h2">From friction to flow — across every touchpoint</h2>
        <div className="gw-flows-list">
          {FLOWS.map((f,i)=>(
            <div key={i} className="gw-flow-item">
              <div className="gw-flow-label-wrap">
                <span className="gw-flow-num">0{i+1}</span>
                <h3>{f.title}</h3>
              </div>
              <div className="gw-flow-compare">
                <div className="gw-flow-before">
                  <span className="gw-ba-tag gw-ba-before">Before</span>
                  <p>{f.before}</p>
                </div>
                <div className="gw-flow-divider">→</div>
                <div className="gw-flow-after">
                  <span className="gw-ba-tag gw-ba-after">After</span>
                  <p>{f.after}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 15. HI-FI SHOWCASE ── */}
      <section ref={add} className="gw-showcase">
        <div className="gw-showcase-glow" />
        <div className="gw-inner" style={{position:'relative',zIndex:1}}>
          <p className="gw-label gw-label--dark">High Fidelity UI</p>
          <h2 className="gw-h2 gw-h2--dark">The final product, crafted to precision</h2>
          <div className="gw-hifi-grid">
            <div className="gw-hifi-main">
              <img src={grubwalaImage} alt="Grubwala HiFi" />
            </div>
            <div className="gw-hifi-side">
              {[['Onboarding Screen','OTP-first, warm welcome, instant value delivery'],['Home Feed','Category-first hierarchy, smart food cards, clear CTAs'],['Checkout','3-step flow, no redundancy, confident progression'],['Kitchen Dashboard','Real-time queue, status management, operational clarity']].map(([t,d],i)=>(
                <div key={i} className="gw-hifi-card">
                  <h4>{t}</h4>
                  <p>{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 16. DESIGN SYSTEM ── */}
      <section ref={add} className="gw-section">
        <p className="gw-label">Design System</p>
        <h2 className="gw-h2">The foundation that scales</h2>
        <div className="gw-ds-grid">
          <div className="gw-ds-card">
            <h3>Color Palette</h3>
            <div className="gw-colors">
              {DS_COLORS.map((c,i)=>(
                <div key={i} className="gw-color-item">
                  <div className="gw-color-swatch" style={{background:c.hex}} />
                  <div><strong>{c.name}</strong><span>{c.hex}</span><span>{c.use}</span></div>
                </div>
              ))}
            </div>
          </div>
          <div className="gw-ds-card">
            <h3>Typography Scale</h3>
            <div className="gw-type-list">
              {DS_TYPE.map((t,i)=>(
                <div key={i} className="gw-type-row">
                  <span className="gw-type-role">{t.role}</span>
                  <span className="gw-type-size">{t.size} · {t.weight}</span>
                  <span className="gw-type-use">{t.use}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="gw-ds-card">
            <h3>Component Tokens</h3>
            <div className="gw-tokens-list">
              {[['Border Radius','12px / 8px / 100px'],['Spacing Base','8px grid system'],['Shadow','0 4px 24px rgba(0,0,0,0.08)'],['Transition','0.25s cubic-bezier'],['Icon Size','20px / 24px / 32px']].map(([k,v],i)=>(
                <div key={i} className="gw-token-row"><span>{k}</span><code>{v}</code></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 17. FINAL IMPACT ── */}
      <section className="gw-dark-band">
        <div className="gw-inner">
          <p className="gw-label gw-label--dark">Final Impact</p>
          <h2 className="gw-h2 gw-h2--dark gw-center">Measurable outcomes across the product</h2>
          <div className="gw-impact-grid">
            {IMPACT.map((m,i)=>(
              <div key={i} className="gw-impact-card">
                <span className="gw-impact-metric">{m.metric}</span>
                <span className="gw-impact-label">{m.label}</span>
              </div>
            ))}
          </div>
          <blockquote className="gw-quote">
            "Users don't want new features. They want fewer obstacles between themselves and the thing they're trying to do."
          </blockquote>
        </div>
      </section>

      {/* ── 18. LEARNINGS ── */}
      <section ref={add} className="gw-section">
        <p className="gw-label">Key Learnings</p>
        <h2 className="gw-h2">What this project taught me</h2>
        <div className="gw-learn-grid">
          {LEARNINGS.map((l,i)=>(
            <div key={i} className="gw-learn-card">
              <span className="gw-learn-num">0{i+1}</span>
              <h3>{l.title}</h3>
              <p>{l.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section ref={add} className="gw-cta">
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
