import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import AnimatedSection from '../components/AnimatedSection'
import './About.css'

const features = [
  {
    icon: '🎓',
    shape: 'arch',
    title: 'Expert Career Guidance',
    desc: 'Our certified counselors assess your profile and career ambitions to recommend the best countries, universities, and courses suited to you.',
  },
  {
    icon: '🌍',
    shape: 'circle',
    title: 'Global University Network',
    desc: 'Access to 100+ partner universities across Malta, Singapore, Malaysia, New Zealand, Mauritius and beyond with guaranteed admission support.',
  },
  {
    icon: '🛂',
    shape: 'diamond',
    title: 'Visa & Settlement Support',
    desc: 'Complete visa documentation, interview preparation, pre-departure assistance, and post-arrival support so you never feel alone abroad.',
  },
]

export default function About() {
  return (
    <main>
      <PageBanner title="About Us" breadcrumb="ABOUT US" />

      {/* ── INTRO ── Fauna 3-col style */}
      <section className="about-intro-section">
        <div className="container">
          <AnimatedSection direction="up">
            <div className="about-intro-head">
              <span className="section-tag">About Our Company</span>
              <h2 className="section-heading">Building Pathways to<br />Global Education</h2>
              <p className="section-sub" style={{ marginTop: '14px' }}>
                World Passport is a premier international education consultancy dedicated to guiding students toward their dream universities worldwide.
              </p>
            </div>
          </AnimatedSection>

          {/* 3-col feature cards — Fauna style */}
          <div className="about-feature-cards">
            {features.map((f, i) => (
              <AnimatedSection key={i} direction="up" delay={i * 120}>
                <div className="afc-card">
                  {/* Animated geometric shape */}
                  <div className={`afc-shape afc-shape-${f.shape} afc-color-${i}`} aria-hidden="true">
                    <div className="afc-shape-inner" />
                  </div>
                  <span className="afc-icon">{f.icon}</span>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT DETAIL — split photo + text ── */}
      <section className="about-detail-section">
        <div className="about-detail-img">
          <img
            src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Students studying together"
            onError={e => { e.target.src = '/about-students.jpg' }}
          />
        </div>
        <div className="about-detail-text">
          <AnimatedSection direction="right">
            <span className="section-tag">Our Story</span>
            <h2 className="section-heading">World Passport –<br />Your Gateway to Global Careers</h2>
            <div className="about-detail-bar" />
            <p>World Passport is a premier international education consultancy headquartered in Ernakulam, Kerala. We have been helping students realize their dream of studying abroad by providing expert guidance and end-to-end support throughout the entire process.</p>
            <p>Our team of experienced counselors has deep knowledge of international education systems, university requirements, and visa procedures across countries worldwide.</p>
            <div className="about-detail-tags">
              <span>✓ Personalized counseling</span>
              <span>✓ 100+ partner universities</span>
              <span>✓ Visa support</span>
              <span>✓ Post-arrival assistance</span>
            </div>
            <Link to="/contact" className="btn-dark" style={{ marginTop: '32px' }}>Talk to a Counselor</Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── VISION & MISSION — new hexagon/card style ── */}
      <section className="vm-new-section">
        <div className="container">
          <AnimatedSection direction="up">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <span className="section-tag">Our Purpose</span>
              <h2 className="section-heading">Vision & Mission</h2>
            </div>
          </AnimatedSection>
          <div className="vm-new-grid">
            <AnimatedSection direction="left">
              <div className="vm-new-card vm-vision">
                <div className="vm-new-icon-wrap">
                  <img
                    src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Vision"
                    onError={e => { e.target.src = '/about-vision.jpg' }}
                  />
                </div>
                <h3>Vision</h3>
                <p>Our vision is to become the most trusted global education partner, empowering students to pursue international opportunities through transparent guidance, reliable support, and strong institutional collaborations. We aim to shape confident, globally-minded professionals who contribute meaningfully to society and achieve their career aspirations worldwide.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="vm-new-card vm-mission">
                <div className="vm-new-icon-wrap">
                  <img
                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Mission"
                    onError={e => { e.target.src = '/about-mission.jpg' }}
                  />
                </div>
                <h3>Mission</h3>
                <p>Our mission is to guide students in every step of their study abroad journey with honesty, expertise, and care. We provide personalized counseling, admissions support, visa assistance, financial advice, and settlement guidance, ensuring every student experiences a smooth, stress-free, and rewarding international education journey leading to lifelong success.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── CEO MESSAGE — fixed visibility ── */}
      <section className="ceo-section">
        <div className="container">
          <AnimatedSection direction="up">
            <div className="ceo-inner">
              <span className="section-tag" style={{ color: 'var(--orange)' }}>Leadership</span>
              <h2 className="section-heading">Message from CEO</h2>
              <div className="ceo-bar" />
              <p>At World Passport, we believe education is more than just academics – it is the gateway to opportunity, growth, and global exposure. Our mission is to empower students with the right knowledge, guidance, and support so they can step confidently into an international career.</p>
              <p>Every student's dream is unique, and so is our approach. We ensure that each journey is handled with honesty, transparency, and personalized care. From choosing the right university to settling into a new country, we walk with our students every step of the way.</p>
              <p>As we continue to expand globally, our commitment remains the same – to be a trusted partner in shaping the future of students who aspire to study abroad. <strong>Your success is our pride, and your journey is our purpose.</strong></p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="about-cta-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <AnimatedSection direction="up">
            <h2 className="section-heading">Ready to Start Your<br />Global Journey?</h2>
            <p style={{ color: 'var(--mid)', marginTop: '14px', marginBottom: '32px', fontSize: '16px' }}>
              Book a free counseling session with our experts today.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-dark">Get Free Counseling</Link>
              <Link to="/programs" className="btn-outline-dark">Explore Programs</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}

