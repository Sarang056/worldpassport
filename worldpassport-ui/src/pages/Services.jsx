import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import AnimatedSection from '../components/AnimatedSection'
import './Services.css'

const services = [
  {
    num: '01',
    icon: '🎯',
    title: 'Career Counseling & Guidance',
    desc: 'Expert advisors help you choose the right country, course, and university based on your academic goals, career plans, and personal interests.',
    tag: 'Foundation',
  },
  {
    num: '02',
    icon: '🎓',
    title: 'University & Course Selection',
    desc: 'Personalized shortlisting from globally recognized institutions, ensuring you find the program best suited to your ambitions and future career.',
    tag: 'Academics',
  },
  {
    num: '03',
    icon: '📝',
    title: 'Application Assistance',
    desc: 'End-to-end support with university applications, SOPs, and recommendation letters to maximize your acceptance chances worldwide.',
    tag: 'Admissions',
  },
  {
    num: '04',
    icon: '🛂',
    title: 'Visa Guidance',
    desc: 'Complete assistance with visa documentation, application forms, and interview preparation to make the process simple and worry-free.',
    tag: 'Visa & Legal',
  },
  {
    num: '05',
    icon: '🤝',
    title: 'Authorized Partnerships',
    desc: 'Direct collaborations with trusted global universities and colleges, ensuring a transparent and reliable admission process for every student.',
    tag: 'Partnerships',
  },
  {
    num: '06',
    icon: '💰',
    title: 'Financial Advice',
    desc: 'Expert guidance on scholarships, education loans, and budgeting tips to make your study abroad journey more affordable and stress-free.',
    tag: 'Finance',
  },
  {
    num: '07',
    icon: '✈️',
    title: 'Pre-Departure Support',
    desc: 'Orientation sessions, travel planning, and cultural preparation to ensure you are fully ready before flying to your destination.',
    tag: 'Pre-Departure',
  },
  {
    num: '08',
    icon: '🌍',
    title: 'Post-Arrival Support',
    desc: 'We remain by your side even after you land — local guidance, bank accounts, accommodation, and settling-in support wherever you are.',
    tag: 'Post-Arrival',
  },
]

export default function Services() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <main>
      <PageBanner title="Services" breadcrumb="SERVICES" />

      {/* ── INTRO STRIP ── */}
      <section className="svc-intro">
        <div className="svc-intro-inner">
          <div className={`svc-intro-left${visible ? ' sv-in' : ''}`}>
            <span className="svc-eyebrow">what we do</span>
            <h2 className="svc-heading">
              Everything you need<br />
              <span className="svc-heading-bold">for your journey abroad</span>
            </h2>
          </div>
          <div className={`svc-intro-right${visible ? ' sv-in' : ''}`} style={{ '--sd': '120ms' }}>
            <p>
              At <strong>World Passport</strong>, we provide complete end-to-end support — from choosing
              the right course to settling into your new home. Our expert team is with you at every step.
            </p>
            <Link to="/contact" className="svc-cta-pill">Book Free Counseling →</Link>
          </div>
        </div>
      </section>

      {/* ── SERVICES — accordion row list ── */}
      <section className="svc-list-section">
        {services.map((s, i) => (
          <AnimatedSection key={i} direction="up" delay={i * 50}>
            <div className={`svc-row ${i % 2 === 0 ? 'svc-row--light' : 'svc-row--cream'}`}>
              <div className="svc-row-inner">
                <span className="svc-row-num">{s.num}</span>
                <span className="svc-row-icon">{s.icon}</span>
                <div className="svc-row-body">
                  <div className="svc-row-top">
                    <h3>{s.title}</h3>
                    <span className="svc-row-tag">{s.tag}</span>
                  </div>
                  <p>{s.desc}</p>
                </div>
                <span className="svc-row-arrow">→</span>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </section>

      {/* ── BOTTOM CTA — dark split ── */}
      <section className="svc-bottom-cta">
        <div className="svc-cta-left">
          <AnimatedSection direction="left">
            <span className="svc-eyebrow" style={{ color: '#3DBFB0' }}>get started</span>
            <h2 className="svc-cta-heading">
              Ready to begin<br />
              <span style={{ fontWeight: 900 }}>your global journey?</span>
            </h2>
          </AnimatedSection>
        </div>
        <div className="svc-cta-right">
          <AnimatedSection direction="right">
            <p>Talk to our expert counselors for free. No commitment required.</p>
            <div className="svc-cta-btns">
              <Link to="/contact" className="svc-btn-dark">Book Counseling →</Link>
              <Link to="/study-abroad" className="svc-btn-outline">Explore Destinations</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
