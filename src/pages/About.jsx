import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import './About.css'
import aboutProfile from '../images/profile/about-image.jpg'
import dribbbleIcon from '../images/icons/Dribbble.svg'
import pinterestIcon from '../images/icons/Pinterest.svg'
import mediumIcon from '../images/icons/Medium.svg'
import chatgptIcon from '../images/icons/Chatgpt.svg'
import geminiIcon from '../images/icons/Gemini.svg'
import uxpilotIcon from '../images/icons/UXpilot.svg'
import slackIcon from '../images/icons/Slack.svg'
import notionIcon from '../images/icons/Notion.svg'
import trelloIcon from '../images/icons/Trello.svg'
import framerIcon from '../images/icons/Framer.svg'
import webflowIcon from '../images/icons/Webflow.svg'
import canvaIcon from '../images/icons/Canva.svg'
import figmaIcon from '../images/icons/Figma.svg'
import Footer from '../components/Footer'
import ExperienceSection from '../components/ExperienceSection'

const About = () => {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const topSectionRef = useRef(null)
  const experienceRef = useRef(null)
  const toolsRef = useRef(null)
  const partnersRef = useRef(null)
  const awardsRef = useRef(null)

  const toolsCategories = [
    {
      category: 'Design Inspiration',
      tools: [
        { name: 'Dribbble', description: 'Tracks evolving UI trends and fresh interface styles that influence visual direction.', icon: dribbbleIcon },
        { name: 'Behance', description: 'Reference library for complete design case studies and strong presentation storytelling.' },
        { name: 'Mobbin', description: 'Analyzes real product UX flows and proven interface patterns.' },
        { name: 'Awwwards', description: 'Showcases experimental web experiences for bold interaction and motion design.' },
        { name: 'Pinterest', description: 'Moodboard hub for color systems, typography direction, and brand aesthetics.', icon: pinterestIcon }
      ]
    },
    {
      category: 'Design Tools',
      tools: [
        { name: 'Figma', description: 'Collaborative interface design tool for UI/UX designs and interactive prototypes.', icon: figmaIcon },
        { name: 'Framer', description: 'Powerful prototyping tool for interactive and high-fidelity design prototypes.', icon: framerIcon },
        { name: 'Webflow', description: 'Visual web development platform for building responsive websites without code.', icon: webflowIcon },
        { name: 'Canva', description: 'Easy-to-use design platform for graphics, presentations, and marketing materials.', icon: canvaIcon }
      ]
    },
    {
      category: 'AI & Productivity',
      tools: [
        { name: 'UX Pilot', description: 'AI-powered workspace for accelerating wireframes, ideation, and rapid UX exploration.', icon: uxpilotIcon },
        { name: 'ChatGPT', description: 'Creative partner for UX writing, structured thinking, and refining product concepts.', icon: chatgptIcon },
        { name: 'Google Gemini', description: 'Research companion that supports brainstorming and expands product perspectives.', icon: geminiIcon }
      ]
    },
    {
      category: 'Collaboration',
      tools: [
        { name: 'Slack', description: 'Powerful communication platform for team collaboration and project coordination.', icon: slackIcon },
        { name: 'Notion', description: 'All-in-one workspace for notes, docs, and project management.', icon: notionIcon },
        { name: 'Trello', description: 'Visual project management tool for organizing tasks and workflows.', icon: trelloIcon }
      ]
    },
    {
      category: 'Learning & Research',
      tools: [
        { name: 'Medium', description: 'Continuous stream of UX insights that keeps design decisions aligned with industry thinking.', icon: mediumIcon }
      ]
    }
  ]

  // Flatten all tools into a single array for the marquee
  const allTools = toolsCategories.flatMap(cat => cat.tools);
  const midPoint = Math.ceil(allTools.length / 2);
  const row1ToolsBase = allTools.slice(0, midPoint);
  const row2ToolsBase = allTools.slice(midPoint);
  
  // Double each row's items so it's wide enough to not end/snap early on large 4k desktop screens
  const row1Tools = [...row1ToolsBase, ...row1ToolsBase, ...row1ToolsBase];
  const row2Tools = [...row2ToolsBase, ...row2ToolsBase, ...row2ToolsBase];

  const ToolNode = ({ tool, index }) => {
    return (
      <div className="tool-bubble-wrapper">
        <div className="tool-card-square" aria-label={tool.name}>
          {tool.icon ? (
            <img src={tool.icon} alt={`${tool.name} icon`} className="tool-card-inline-img" />
          ) : (
            <span className="tool-card-placeholder">
              {tool.name.substring(0, 2).toUpperCase()}
            </span>
          )}
          <span className="tool-card-name">{tool.name}</span>
        </div>
        <div className="tool-tooltip">
          <span className="tooltip-name">{tool.name}</span>
          <span className="tooltip-desc">{tool.description}</span>
        </div>
      </div>
    );
  };

  const partners = [
    { name: 'Somvanshi Technologies Pvt Ltd', category: 'UI/UX & Branding', year: '2025' },
    { name: 'Grubwala', category: 'Product Design', year: '2023' }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.from(titleRef.current, {
        y: 80,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        clearProps: "all"
      })
        .from(topSectionRef.current.children, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          clearProps: "all"
        }, '-=0.5')
        .from([experienceRef.current, toolsRef.current, partnersRef.current].filter(Boolean), {
          y: 60,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          clearProps: "all"
        }, '-=0.4')
    }, heroRef)

    return () => { }
  }, [])

  return (
    <div className="about-page">
      <section ref={heroRef} className="about-hero">
        <div className="about-page-container">
          <h1 ref={titleRef} className="about-page-title">
            <span className="title-light">About me,</span> my story and my experience
          </h1>

          <div ref={topSectionRef} className="about-top-section">
            <div className="about-profile-image">
              <img src={aboutProfile} alt="Profile" />
            </div>

            <div className="about-top-content">
              <p className="about-description">
                I design systems, not screens. Across SaaS, mobility, and consumer apps, I've owned the full UX process — research, information architecture, interaction design, and developer handoff — building products used by 2000+ users. I work closest to the problem, closest to the user, and closest to the team shipping the product.
              </p>

              <Link to="/contact" className="about-cta-btn">
                Let's Talk
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Experience Section */}
          <ExperienceSection ref={experienceRef} className="embedded" />

          {/* Tools Section — Animated Logo Cloud */}
          <div ref={toolsRef} className="tools-section">
            <h2 className="section-title">Tools I use to craft experiences</h2>

            <div className="marquee-container">
              {/* Row 1 */}
              <div className="marquee-track">
                <div className="marquee-group">
                  {row1Tools.map((tool, index) => (
                    <ToolNode key={`r1-first-${index}`} tool={tool} index={index} />
                  ))}
                </div>
                <div className="marquee-group" aria-hidden="true">
                  {row1Tools.map((tool, index) => (
                    <ToolNode key={`r1-second-${index}`} tool={tool} index={index} />
                  ))}
                </div>
              </div>

              {/* Row 2 */}
              <div className="marquee-track marquee-track--reverse">
                <div className="marquee-group">
                  {row2Tools.map((tool, index) => (
                    <ToolNode key={`r2-first-${index}`} tool={tool} index={index + 5} />
                  ))}
                </div>
                <div className="marquee-group" aria-hidden="true">
                  {row2Tools.map((tool, index) => (
                    <ToolNode key={`r2-second-${index}`} tool={tool} index={index + 5} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Partners Section */}
          <div ref={partnersRef} className="partners-section">
            <h2 className="section-title">A visual partner for company</h2>
            <div className="partners-grid">
              {partners.map((partner, index) => (
                <div key={index} className="partner-card">
                  <h3 className="partner-name">{partner.name}</h3>
                  <p className="partner-category">{partner.category}</p>
                  <p className="partner-year">{partner.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default About
