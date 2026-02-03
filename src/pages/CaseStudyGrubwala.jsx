import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './CaseStudyContactForm.css'

const CaseStudyGrubwala = () => {
    const heroRef = useRef(null)
    const titleRef = useRef(null)
    const subtitleRef = useRef(null)
    const metaRef = useRef(null)
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
                        Rebuilding a Trust-First Food Ordering Experience
                    </h1>
                    <p ref={subtitleRef} className="case-study-subtitle">
                        Grubwala — Food Delivery Mobile Application
                    </p>

                    <div ref={metaRef} className="case-study-meta">
                        <div className="meta-item">
                            <span className="meta-label">Role</span>
                            <span className="meta-value">UX/UI Designer</span>
                        </div>
                        <div className="meta-item">
                            <span className="meta-label">Domain</span>
                            <span className="meta-value">Food Delivery, Consumer Mobile App</span>
                        </div>
                        <div className="meta-item">
                            <span className="meta-label">Platform</span>
                            <span className="meta-value">Mobile (Android & iOS)</span>
                        </div>
                        <div className="meta-item">
                            <span className="meta-label">Scope</span>
                            <span className="meta-value">End-to-End Product Redesign</span>
                        </div>
                    </div>

                    <div ref={contentRef} className="case-study-content">
                        <div className="case-study-section">
                            <p className="section-intro" style={{ fontSize: '1.25rem', fontStyle: 'italic', color: '#666', marginBottom: '3rem' }}>
                                A Deep, Chapter-Based UX Case Study on Transforming a Food Delivery Product End-to-End
                            </p>
                        </div>

                        {/* Chapter 1 */}
                        <div className="case-study-section">
                            <h2 className="section-title">Chapter 1: Setting the Context — Designing for Food Is Designing for Emotion</h2>
                            <p className="section-text">
                                Grubwala is a food delivery application built around homemade food and local kitchens. On the surface, it operates
                                in the same space as other food delivery apps. But emotionally, it lives somewhere else.
                            </p>
                            <p className="section-text">
                                Users don't open Grubwala just because they are hungry. They open it because they want comfort, familiarity, and
                                food that feels safe and personal. In many cases, they are ordering for their families, not just themselves. This
                                changes the emotional stakes of every design decision.
                            </p>
                            <p className="section-text">
                                When I began working on Grubwala, the product already existed. Orders could be placed. Screens were designed.
                                Features were implemented. But the experience felt fragmented. Each part of the app seemed to solve its own problem
                                without acknowledging the rest of the journey.
                            </p>
                            <p className="section-text">
                                The product functioned — but it didn't flow.
                            </p>
                            <p className="section-text">
                                <strong>It became clear very early that this wasn't a visual redesign problem. This was a product experience problem.</strong>
                            </p>
                            <p className="section-text">
                                The task wasn't to redesign individual screens. The task was to rebuild Grubwala as a cohesive, intentional product.
                            </p>
                        </div>

                        {/* Chapter 2 */}
                        <div className="case-study-section">
                            <h2 className="section-title">Chapter 2: My Role — Owning the Experience End-to-End</h2>
                            <p className="section-text">
                                This project was handled with full UX/UI ownership. I worked as the sole designer responsible for how the product
                                felt, behaved, and scaled, while collaborating closely with developers across multiple sprints.
                            </p>
                            <p className="section-text">This meant taking responsibility not just for UI outputs, but for:</p>
                            <ul className="content-list">
                                <li>How users enter the product</li>
                                <li>How they understand it</li>
                                <li>How they move through it</li>
                                <li>How it behaves when things go wrong</li>
                                <li>How it can grow without breaking</li>
                            </ul>
                            <p className="section-text"><strong>My role covered:</strong></p>
                            <ul className="content-list">
                                <li>Auditing existing UX and flows</li>
                                <li>Researching patterns from similar products</li>
                                <li>Redesigning onboarding, home, discovery, cart, checkout, and post-order experiences</li>
                                <li>Designing account, address, subscription, feedback, and referral flows</li>
                                <li>Creating a mobile-first design system</li>
                                <li>Handling edge cases and failure states</li>
                                <li>Collaborating sprint-by-sprint with developers</li>
                            </ul>
                            <p className="section-text">
                                The objective was clarity, trust, and scalability — not just polish.
                            </p>
                        </div>

                        {/* Chapter 3 */}
                        <div className="case-study-section">
                            <h2 className="section-title">Chapter 3: Auditing the Existing Product — Learning by Using</h2>
                            <p className="section-text">
                                Before opening Figma or sketching solutions, I used the app exactly like a real user would.
                            </p>
                            <p className="section-text">I paid attention to:</p>
                            <ul className="content-list">
                                <li>Where I hesitated</li>
                                <li>Where I had to re-read something</li>
                                <li>Where I felt unsure</li>
                                <li>Where I had to "figure out" the app instead of being guided by it</li>
                            </ul>
                            <p className="section-text">A pattern emerged quickly.</p>
                            <p className="section-text">
                                <strong>The app asked users to commit too early.</strong>
                            </p>
                            <p className="section-text">
                                Onboarding demanded effort before delivering value. Navigation assumed learning. Important actions didn't visually
                                stand out. None of these issues were catastrophic on their own — but together, they created friction that compounded
                                across the journey.
                            </p>
                            <p className="section-text">
                                The most important insight from this audit was simple: <strong>Users were working too hard to reach food.</strong>
                            </p>
                            <p className="section-text">
                                For a food delivery app, this is a critical failure.
                            </p>
                        </div>

                        {/* Chapter 4 */}
                        <div className="case-study-section">
                            <h2 className="section-title">Chapter 4: The Onboarding Problem — Friction at the Worst Possible Moment</h2>
                            <h3 className="subsection-title">What Existed Before</h3>
                            <p className="section-text">
                                The original onboarding flow required users to register using an email and password. After completing registration,
                                users were pushed out of the flow and had to come back again to sign in before accessing the home screen.
                            </p>
                            <p className="section-text">This introduced several UX issues at once:</p>
                            <ul className="content-list">
                                <li>Repetition of effort</li>
                                <li>Context switching</li>
                                <li>Memory load (remembering credentials)</li>
                                <li>A high risk of early drop-off</li>
                            </ul>
                            <p className="section-text">
                                From a mobile UX perspective, this flow felt outdated. From a business perspective, it was dangerous — because
                                onboarding is where most products lose users permanently.
                            </p>
                            <p className="section-text">
                                <strong>The app was asking users to invest effort before proving value.</strong>
                            </p>
                        </div>

                        {/* Chapter 5 */}
                        <div className="case-study-section">
                            <h2 className="section-title">Chapter 5: Learning from the Market — Why Patterns Exist</h2>
                            <p className="section-text">
                                To validate whether this friction was avoidable, I studied onboarding flows from Swiggy, Zomato, Blinkit, and Zepto.
                            </p>
                            <p className="section-text">
                                These apps operate in high-frequency, low-attention environments. They don't have the luxury of asking users to
                                "learn" the product.
                            </p>
                            <p className="section-text">Despite serving different needs, they shared core principles:</p>
                            <ul className="content-list">
                                <li>Mobile number as primary identity</li>
                                <li>OTP-based authentication</li>
                                <li>No separation between sign-up and sign-in</li>
                                <li>Immediate access to core value</li>
                            </ul>
                            <p className="section-text">
                                These patterns exist because they reduce friction, build momentum, and respect user time.
                            </p>
                            <p className="section-text">
                                <strong>The takeaway was clear: Grubwala didn't need a clever onboarding flow — it needed a forgiving one.</strong>
                            </p>
                        </div>

                        {/* Chapter 6 */}
                        <div className="case-study-section">
                            <h2 className="section-title">Chapter 6: Redesigning Onboarding — Removing Unnecessary Commitment</h2>
                            <p className="section-text">
                                The onboarding flow was rebuilt around mobile number and OTP authentication.
                            </p>
                            <p className="section-text">
                                Registration and login were merged into a single flow. Whether a user was new or returning, the system handled it
                                gracefully without forcing different paths.
                            </p>
                            <p className="section-text">
                                This change wasn't just about convenience. It was about lowering psychological commitment.
                            </p>
                            <p className="section-text">
                                Users could now enter the app without feeling like they were "signing up for something." They were simply continuing
                                forward.
                            </p>
                            <p className="section-text">
                                The result was a much shorter path between opening the app and seeing food — which is exactly where value begins.
                            </p>
                        </div>

                        {/* Chapter 7 */}
                        <div className="case-study-section">
                            <h2 className="section-title">Chapter 7: Welcome Screens — Framing the Experience Emotionally</h2>
                            <p className="section-text">
                                The client wanted welcome screens to communicate Grubwala's values. Instead of treating this as a branding requirement,
                                I treated it as experience framing.
                            </p>
                            <p className="section-text">
                                Food is emotional. Homemade food is deeply emotional.
                            </p>
                            <p className="section-text">
                                Rather than generic food imagery, I designed welcome screens that told a small, human story centered around a mother
                                and child. The visuals focused on warmth, care, and familiarity — emotions users already associate with homemade meals.
                            </p>
                            <p className="section-text">
                                These screens intentionally slowed users down for a moment. Not to delay them, but to set emotional context before
                                entering a transactional experience.
                            </p>
                            <p className="section-text">
                                They helped users understand what kind of app this is before asking them to order.
                            </p>
                        </div>

                        {/* Chapter 8 */}
                        <div className="case-study-section">
                            <h2 className="section-title">Chapter 8: Diagnosing the Home Page — Where Everything Collides</h2>
                            <p className="section-text">
                                The home page was the most critical and problematic part of the app.
                            </p>
                            <p className="section-text">It tried to do too much at once:</p>
                            <ul className="content-list">
                                <li>Promote content</li>
                                <li>Showcase kitchens</li>
                                <li>Highlight categories</li>
                                <li>Push offers</li>
                                <li>Drive conversion</li>
                            </ul>
                            <p className="section-text">
                                The result was a screen with no clear priority.
                            </p>
                            <p className="section-text">
                                Users had to decide what to focus on — which is the opposite of what a good home page should do.
                            </p>
                            <p className="section-text">
                                To address this, I created a dedicated UX diagnosis document outlining what wasn't working and why. This allowed
                                decisions to be grounded in user behavior rather than subjective preferences.
                            </p>
                        </div>

                        {/* Chapter 9 */}
                        <div className="case-study-section">
                            <h2 className="section-title">Chapter 9: Redesigning the Home Experience — From Dump to Guide</h2>
                            <p className="section-text">
                                The redesigned home page was structured around how users actually think when ordering food:
                            </p>
                            <ul className="content-list">
                                <li>What do I feel like eating?</li>
                                <li>Where should I order from?</li>
                                <li>Can I trust this option?</li>
                            </ul>
                            <p className="section-text">
                                Content hierarchy, spacing, and typography were adjusted to support fast scanning. Visual noise was reduced. The
                                primary action became unmistakable.
                            </p>
                            <p className="section-text">
                                The home page stopped trying to "show everything" and started guiding users toward decisions.
                            </p>
                        </div>

                        {/* Chapter 10 */}
                        <div className="case-study-section">
                            <h2 className="section-title">Chapter 10: Rethinking Food Discovery — Designing for Instinct</h2>
                            <p className="section-text">
                                Food discovery screens were redesigned to minimize interpretation effort.
                            </p>
                            <p className="section-text">
                                Food cards were simplified. Pricing became easier to spot. Decorative elements that didn't add clarity were removed.
                            </p>
                            <p className="section-text">
                                The goal was to let users compare options instinctively rather than analytically.
                            </p>
                            <p className="section-text">
                                <strong>When the interface disappears, decision-making becomes faster.</strong>
                            </p>
                        </div>

                        {/* Chapter 11 */}
                        <div className="case-study-section">
                            <h2 className="section-title">Chapter 11: Cart & Checkout — Turning Hesitation into Confidence</h2>
                            <p className="section-text">
                                Earlier cart and checkout flows felt heavy. Users were repeatedly asked to confirm, review, and reconsider.
                            </p>
                            <p className="section-text">The redesigned checkout focused on:</p>
                            <ul className="content-list">
                                <li>Clear progression</li>
                                <li>One primary action per screen</li>
                                <li>Minimal distractions</li>
                                <li>Reassurance at key moments</li>
                            </ul>
                            <p className="section-text">
                                Checkout became a moment of confidence — not doubt.
                            </p>
                        </div>

                        {/* Chapter 12 */}
                        <div className="case-study-section">
                            <h2 className="section-title">Chapter 12: Kitchen Pages — Trust at the Source</h2>
                            <p className="section-text">
                                The kitchen page plays a critical role in Grubwala's ecosystem. Users aren't just trusting the app; they're
                                trusting individual kitchens.
                            </p>
                            <p className="section-text">
                                Layouts emphasized clarity and consistency. Menu structures were predictable so users could focus on food quality
                                rather than navigation.
                            </p>
                            <p className="section-text">
                                <strong>Trust was built through familiarity, not persuasion.</strong>
                            </p>
                        </div>

                        {/* Chapter 13 */}
                        <div className="case-study-section">
                            <h2 className="section-title">Chapter 13: Order Confirmation & Tracking — Reducing Anxiety</h2>
                            <p className="section-text">
                                Order confirmation and tracking screens were treated as emotional checkpoints.
                            </p>
                            <p className="section-text">
                                Clear status updates, calm visuals, and predictable layouts reassured users that everything was progressing as expected.
                            </p>
                            <p className="section-text">
                                These screens weren't about information alone — they were about peace of mind.
                            </p>
                        </div>

                        {/* Chapter 14 */}
                        <div className="case-study-section">
                            <h2 className="section-title">Chapter 14: Account, Address & Profile — Reliable by Design</h2>
                            <p className="section-text">
                                Profile and address management flows were redesigned to feel stable and boring — intentionally.
                            </p>
                            <p className="section-text">
                                Users could manage multiple addresses, update details, and move between sections without fear of losing progress.
                            </p>
                            <p className="section-text">
                                In these areas, reliability matters more than delight.
                            </p>
                        </div>

                        {/* Chapter 15 */}
                        <div className="case-study-section">
                            <h2 className="section-title">Chapter 15: Subscriptions, Feedback & Referrals — Respecting User Time</h2>
                            <p className="section-text">
                                Subscription flows focused on clarity rather than persuasion. Feedback and referral flows minimized effort while
                                still achieving business goals.
                            </p>
                            <p className="section-text">
                                These features were designed to feel optional, not forced.
                            </p>
                        </div>

                        {/* Chapter 16 */}
                        <div className="case-study-section">
                            <h2 className="section-title">Chapter 16: The Design System — Designing for the Future</h2>
                            <p className="section-text">
                                A mobile-first design system was built to ensure consistency and scalability.
                            </p>
                            <p className="section-text">
                                Reusable components reduced design debt, improved development speed, and ensured new features could be added without
                                breaking the experience.
                            </p>
                            <p className="section-text">
                                This system wasn't just visual — it was structural.
                            </p>
                        </div>

                        {/* Chapter 17 */}
                        <div className="case-study-section">
                            <h2 className="section-title">Chapter 17: Edge Cases & Failure States — Designing for Reality</h2>
                            <p className="section-text">
                                A large portion of the work involved designing for failure:
                            </p>
                            <ul className="content-list">
                                <li>Empty states</li>
                                <li>Network issues</li>
                                <li>No-data scenarios</li>
                                <li>Partial flows</li>
                                <li>Repeated actions</li>
                            </ul>
                            <p className="section-text">
                                These states ensure the app never feels broken — even when things go wrong.
                            </p>
                        </div>

                        {/* Chapter 18 */}
                        <div className="case-study-section">
                            <h2 className="section-title">Chapter 18: Collaboration & Execution — Design in Reality</h2>
                            <p className="section-text">
                                Designs were delivered sprint-wise, with continuous developer collaboration.
                            </p>
                            <p className="section-text">
                                Edge cases were discussed early. Flows were reviewed before implementation. Feedback loops stayed tight.
                            </p>
                            <p className="section-text">
                                This ensured design intent survived development.
                            </p>
                        </div>

                        {/* Chapter 19 */}
                        <div className="case-study-section">
                            <h2 className="section-title">Chapter 19: Outcome & Impact — A New Product Experience</h2>
                            <p className="section-text">The result was a transformed product:</p>
                            <ul className="content-list">
                                <li>Faster onboarding</li>
                                <li>Stronger emotional connection</li>
                                <li>Reduced cognitive load</li>
                                <li>Consistent UI across the app</li>
                                <li>A foundation ready to scale</li>
                            </ul>
                            <p className="section-text">
                                Grubwala evolved from a functional app into a designed experience.
                            </p>
                        </div>

                        {/* Chapter 20 */}
                        <div className="case-study-section">
                            <h2 className="section-title">Chapter 20: Reflection — What This Project Reinforced</h2>
                            <p className="section-text">
                                This project reinforced a core UX truth:
                            </p>
                            <p className="section-text">
                                <strong>Users don't want more features. They want fewer obstacles.</strong>
                            </p>
                        </div>

                        {/* Closing Thought */}
                        <div className="case-study-section">
                            <h2 className="section-title">Closing Thought</h2>
                            <p className="section-text">
                                Good food satisfies hunger.<br />
                                Great UX removes doubt.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CaseStudyGrubwala
