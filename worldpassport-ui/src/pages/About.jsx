import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import AnimatedSection from '../components/AnimatedSection'
import './About.css'

export default function About() {
  return (
    <main>
      <PageBanner title="About Us" breadcrumb="ABOUT US" bgImage="/partner-banner.jpg" />

      {/* ABOUT OUR COMPANY */}
      <section className="about-intro">
        <div className="container about-intro-grid">
          <AnimatedSection direction="left">
            <div className="about-intro-left">
              <span className="section-label">🎓 ABOUT OUR COMPANY</span>
              <h2>Building Pathways to Dreams Through Global Education</h2>
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right">
            <div className="about-intro-right">
              <p>World Passport is dedicated to guiding students in achieving their international education dreams. With strong global partnerships and transparent counseling, we provide reliable solutions for every stage of the study abroad process.</p>
              <p>From career counseling and admissions to visa guidance and settlement support, our expert team ensures a smooth, stress-free, and rewarding journey worldwide.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* STUDENTS GROUP PHOTO */}
      <section className="about-students-photo">
        <div className="container">
          <AnimatedSection direction="up">
            <img src="/about-students.jpg" alt="World Passport Students" className="about-full-img" />
          </AnimatedSection>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="vision-mission-section">
        <div className="container">
          <div className="vm-grid">
            <AnimatedSection direction="left">
              <div className="vm-card">
                <div className="vm-img-wrap">
                  <img src="/about-vision.jpg" alt="Vision" className="vm-img" />
                  <div className="vm-dot"><span></span></div>
                </div>
                <h3>Vision</h3>
                <p>Our vision is to become the most trusted global education partner, empowering students to pursue international opportunities through transparent guidance, reliable support, and strong institutional collaborations. We aim to shape confident, globally-minded professionals who contribute meaningfully to society and achieve their career aspirations worldwide.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="vm-card">
                <div className="vm-img-wrap">
                  <img src="/about-mission.jpg" alt="Mission" className="vm-img" />
                  <div className="vm-dot"><span></span></div>
                </div>
                <h3>Mission</h3>
                <p>Our mission is to guide students in every step of their study abroad journey with honesty, expertise, and care. We provide personalized counseling, admissions support, visa assistance, financial advice, and settlement guidance, ensuring every student experiences a smooth, stress-free, and rewarding international education journey leading to lifelong success.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* MESSAGE FROM CEO */}
      <section className="ceo-message">
        <div className="container">
          <AnimatedSection direction="up">
            <h2>Message from CEO</h2>
            <p>At World Passport, we believe education is more than just academics – it is the gateway to opportunity, growth, and global exposure. Our mission is to empower students with the right knowledge, guidance, and support so they can step confidently into an international career. Every student's dream is unique, and so is our approach. We ensure that each journey is handled with honesty, transparency, and personalized care. From choosing the right university to settling into a new country, we walk with our students every step of the way. As we continue to expand globally, our commitment remains the same – to be a trusted partner in shaping the future of students who aspire to study abroad. Your success is our pride, and your journey is our purpose.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* STATS */}
      <section className="about-stats-section">
        <div className="container">
          <div className="about-stats-grid">
            {[
              { num: '100+', label: 'Partner Universities' },
              { num: '3+', label: 'Countries' },
              { num: '8+', label: 'Branches' },
              { num: '2500+', label: 'Global Admissions' },
            ].map((s, i) => (
              <AnimatedSection key={i} direction="up" delay={i * 100}>
                <div className="about-stat-item">
                  <strong>{s.num}</strong>
                  <span>{s.label}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container" style={{ textAlign: 'center' }}>
          <AnimatedSection direction="up">
            <h2>Ready to Start Your Global Journey?</h2>
            <p>Book a free counseling session with our experts today.</p>
            <Link to="/contact" className="btn-red" style={{ marginTop: '20px', display: 'inline-block', fontSize: '15px', padding: '13px 35px' }}>
              Get Free Counseling
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
