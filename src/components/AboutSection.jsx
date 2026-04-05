import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './AboutSection.css'
import aboutProfile from '../images/profile/about-image.jpg'
import figmaIcon from '../images/icons/tool_figma.svg'
import framerIcon from '../images/icons/tool_framer.svg'
import dribbbleIcon from '../images/icons/tool_dribbble.svg'
import chatgptIcon from '../images/icons/tool_chatgpt.svg'
import notionIcon from '../images/icons/tool_notion.svg'
import uxpilotIcon from '../images/icons/tool_ux.svg'
import geminiIcon from '../images/icons/tool_gemini.svg'
import pinterestIcon from '../images/icons/tool_pinterest.svg'
import trelloIcon from '../images/icons/tool_trello.svg'
import slackIcon from '../images/icons/tool_slack.svg'
import mediumIcon from '../images/icons/tool_medium.svg'

gsap.registerPlugin(ScrollTrigger)

const AboutSection = () => {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const contentRef = useRef(null)
  const toolsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Check if mobile
      const isMobile = window.innerWidth <= 768;

      // Skip animations on mobile - show content immediately
      if (isMobile) {
        return;
      }

      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      })

      gsap.from(contentRef.current.children, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out'
      })

      // Removed tools animation to keep icons always visible
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const tools = [
    { name: 'Figma', icon: figmaIcon },
    { name: 'UX Pilot', icon: uxpilotIcon },
    // { name: 'Framer', icon: framerIcon },
    { name: 'ChatGPT', icon: chatgptIcon },
    { name: 'Gemini', icon: geminiIcon },
    { name: 'Pinterest', icon: pinterestIcon },
    { name: 'Dribbble', icon: dribbbleIcon },
    // { name: 'Trello', icon: trelloIcon },
    // { name: 'Jira', icon: JiraIcon },
    // { name: 'Slack', icon: slackIcon },
    { name: 'Medium', icon: mediumIcon },
    // { name: 'Notion', icon: notionIcon }
  ]

  return (
    <section ref={sectionRef} id="about" className="about-section">
      <div className="about-container">
        <div ref={imageRef} className="about-image-wrapper">
          <img
            src={aboutProfile}
            alt="Profile"
            className="about-image"
          />
        </div>

        <div ref={contentRef} className="about-content">
          <h2 className="about-title">
            Design that sparks{' '}
            <span className="title-highlight">engagement and inspires action</span>
          </h2>

          <p className="home-about-description">
            UX Designer building <strong>end-to-end product experiences</strong> — from research to developer-ready flows, across SaaS, mobility, and consumer apps <strong>(so users don't have to work as hard as I do)</strong>.
          </p>

          <Link to="/about" className="about-secondary-btn" style={{ opacity: 1 }}>
            Know More
            <svg className="arrow-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          {/* Strength tags */}
          <div className="about-strength-tags">
            <span className="about-strength-tag">System thinking</span>
            <span className="about-strength-tag">Business alignment</span>
            <span className="about-strength-tag">Developer collaboration</span>
          </div>

          {/* Tools Icons Grid */}
          <div ref={toolsRef} className="tools-grid-home">
            {tools.map((tool, index) => (
              <div key={index} className="tool-icon-wrapper">
                <img src={tool.icon} alt={tool.name} className="tool-icon-img" />
                {/* <span className="tool-name">{tool.name}</span> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
