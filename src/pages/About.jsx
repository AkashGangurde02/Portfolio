import { useEffect, useRef } from 'react'
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

const About = () => {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const topSectionRef = useRef(null)
  const experienceRef = useRef(null)
  const toolsRef = useRef(null)
  const partnersRef = useRef(null)
  const awardsRef = useRef(null)

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
        .from([experienceRef.current, toolsRef.current, partnersRef.current, awardsRef.current], {
          y: 60,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          clearProps: "all"
        }, '-=0.4')
    }, heroRef)

    // Don't revert to preserve final animation state
    return () => { }
  }, [])

  const experiences = [
    { title: 'UX/UI Designer Intern', company: 'Somvanshi Technologies', period: '2025 – Present' },
    { title: 'Non-Technical Head (Design & Coordination)', company: 'VIIT Robotics Club', period: '2024 – 2025' },
    { title: 'Software Team Member', company: 'VIIT Robotics Club', period: '2023 – 2024' }
  ]

  const toolsCategories = [
    {
      category: 'Design Inspiration',
      tools: [
        { name: 'Dribbble', description: 'A space to track evolving UI trends and discover fresh interface styles that influence visual direction.', icon: dribbbleIcon },
        { name: 'Behance', description: 'A reference library for studying complete design case studies and strong presentation storytelling.' },
        { name: 'Mobbin', description: 'A practical resource for analyzing real product UX flows and proven interface patterns.' },
        { name: 'Awwwards', description: 'A showcase of experimental web experiences that inspires bold interaction and motion design.' },
        { name: 'Pinterest', description: 'A moodboard hub for shaping color systems, typography direction, and brand aesthetics.', icon: pinterestIcon }
      ]
    },
    {
      category: 'Design Tools',
      tools: [
        { name: 'Figma', description: 'A collaborative interface design tool for creating UI/UX designs and interactive prototypes.', icon: figmaIcon },
        { name: 'Framer', description: 'A powerful prototyping tool for creating interactive and high-fidelity design prototypes.', icon: framerIcon },
        { name: 'Webflow', description: 'A visual web development platform for building responsive websites without code.', icon: webflowIcon },
        { name: 'Canva', description: 'An easy-to-use design platform for creating graphics, presentations, and marketing materials.', icon: canvaIcon }
      ]
    },
    {
      category: 'AI & Productivity',
      tools: [
        { name: 'UX Pilot', description: 'An AI-powered workspace for accelerating wireframes, ideation, and rapid UX exploration.', icon: uxpilotIcon },
        { name: 'ChatGPT', description: 'A creative partner for UX writing, structured thinking, and refining product concepts.', icon: chatgptIcon },
        { name: 'Google Gemini', description: 'A research companion that supports brainstorming and expands product perspectives.', icon: geminiIcon }
      ]
    },
    {
      category: 'Collaboration',
      tools: [
        { name: 'Slack', description: 'A powerful communication platform for team collaboration and project coordination.', icon: slackIcon },
        { name: 'Notion', description: 'An all-in-one workspace for notes, docs, and project management.', icon: notionIcon },
        { name: 'Trello', description: 'A visual project management tool for organizing tasks and workflows.', icon: trelloIcon }
      ]
    },
    {
      category: 'Learning & Research',
      tools: [
        { name: 'Medium', description: 'A continuous stream of UX insights that keeps design decisions aligned with industry thinking.', icon: mediumIcon }
      ]
    }
  ]

  const partners = [
    { name: 'Somvanshi Technologies Pvt Ltd', category: 'UI/UX & Branding', year: '2025' },
    { name: 'Grubwala', category: 'UI/UX & Branding', year: '2025' },
    { name: 'Hemphop Store', category: 'UI/UX & Branding', year: '2024' }
  ]

  const awards = [
    { title: 'Honorable Mention', organization: '2022 - AWWARDS', link: '#' },
    { title: 'Site of The Day', organization: '2022 - CSS Winners', link: '#' },
    { title: 'Best UI Design', organization: '2022 - CSS Design Awards', link: '#' },
    { title: 'Site of The Day', organization: '2022 - AWWARDS', link: '#' }
  ]

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
                Junior UX/UI Designer with 1 year of experience — making digital experiences feel effortless (so users don’t have to work as hard as I do).
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
          <div ref={experienceRef} className="experience-section">
            <h2 className="section-title">My work experience</h2>
            <div className="experience-list">
              {experiences.map((exp, index) => (
                exp.title === 'Software Team Member' ? (
                  <Link
                    key={index}
                    to="/experience/robotics"
                    className="experience-item experience-item-clickable"
                  >
                    <div className="experience-info">
                      <h3 className="experience-title">{exp.title}</h3>
                      <p className="experience-company">{exp.company}</p>
                    </div>
                    <div className="experience-right">
                      <span className="experience-period">{exp.period}</span>
                      <svg className="experience-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </Link>
                ) : exp.title === 'Non-Technical Head (Design & Coordination)' ? (
                  <Link
                    key={index}
                    to="/experience/non-technical"
                    className="experience-item experience-item-clickable"
                  >
                    <div className="experience-info">
                      <h3 className="experience-title">{exp.title}</h3>
                      <p className="experience-company">{exp.company}</p>
                    </div>
                    <div className="experience-right">
                      <span className="experience-period">{exp.period}</span>
                      <svg className="experience-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </Link>
                ) : exp.title === 'UX/UI Designer Intern' ? (
                  <Link
                    key={index}
                    to="/experience/somvanshi"
                    className="experience-item experience-item-clickable"
                  >
                    <div className="experience-info">
                      <h3 className="experience-title">{exp.title}</h3>
                      <p className="experience-company">{exp.company}</p>
                    </div>
                    <div className="experience-right">
                      <span className="experience-period">{exp.period}</span>
                      <svg className="experience-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </Link>
                ) : (
                  <div key={index} className="experience-item">
                    <div className="experience-info">
                      <h3 className="experience-title">{exp.title}</h3>
                      <p className="experience-company">{exp.company}</p>
                    </div>
                    <span className="experience-period">{exp.period}</span>
                  </div>
                )
              ))}
            </div>
          </div>

          {/* Tools Section */}
          <div ref={toolsRef} className="tools-section">
            <h2 className="section-title">Tools I use to craft experiences</h2>
            <div className="tools-categories">
              {toolsCategories.map((category, catIndex) => (
                <div key={catIndex} className="tools-category">
                  <h3 className="tools-category-title">{category.category}</h3>
                  <div className="tools-grid">
                    {category.tools.map((tool, toolIndex) => (
                      tool.icon ? (
                        <div key={toolIndex} className="tool-card">
                          <div className="tool-icon">
                            <img src={tool.icon} alt={`${tool.name} icon`} />
                          </div>
                          <p className="tool-description">{tool.description}</p>
                        </div>
                      ) : null
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Partners Section */}
          <div ref={partnersRef} className="partners-section">
            <h2 className="section-title">A visual partner for brands, companies, and agencies</h2>
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

          {/* Awards Section */}
          <div ref={awardsRef} className="awards-section">
            <div className="awards-featured">
              <div className="award-image">
                <div className="award-placeholder">W</div>
              </div>
              <div className="award-feature-content">
                <h2 className="award-feature-title">Awwards Winning - Independent of The Year</h2>
                <p className="award-feature-subtitle">Ivan Kazarov - 2022</p>
                <a href="#" className="award-link">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="awards-list">
              {awards.map((award, index) => (
                <div key={index} className="award-item">
                  <div className="award-info">
                    <h4 className="award-title">{award.title}</h4>
                    <p className="award-org">{award.organization}</p>
                  </div>
                  <a href={award.link} className="award-arrow">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M7 13L13 7M13 7H7M13 7V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
