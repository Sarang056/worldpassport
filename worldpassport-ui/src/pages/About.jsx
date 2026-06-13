import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import './About.css'

export default function About() {
  return (
    <main>
      <PageBanner title="About Us" breadcrumb="ABOUT US" />

      <section className="about-story">
        <div className="container about-story-grid">
          <div className="about-story-img-col">
            <img src="/hero2.jpeg" alt="About World Passport" className="about-story-img" />
          </div>
          <div className="about-story-text">
            <span className="section-label">O U R  S T O R Y</span>
            <h2>World Passport – Your Gateway to Global Careers</h2>
            <p>World Passport is a premier international education consultancy headquartered in Ernakulam, Kerala. We have been helping students realize their dream of studying abroad by providing expert guidance and end-to-end support throughout the entire process.</p>
            <p>Our team of experienced counselors has deep knowledge of international education systems, university requirements, and visa procedures across 30+ countries. We maintain strong partnerships with 500+ universities worldwide to ensure our students get the best opportunities.</p>
            <div className="about-values">
              <div className="value-item">
                <div className="red-icon-circle">🎯</div>
                <div>
                  <strong>Our Mission</strong>
                  <p>To make quality international education accessible to every aspiring student.</p>
                </div>
              </div>
              <div className="value-item">
                <div className="red-icon-circle">👁</div>
                <div>
                  <strong>Our Vision</strong>
                  <p>To be India's most trusted study abroad consultancy with a global footprint.</p>
                </div>
              </div>
            </div>
            <Link to="/contact" className="btn-red" style={{ marginTop: '25px' }}>Talk to a Counselor</Link>
          </div>
        </div>
      </section>

      <section className="strengths-section">
        <div className="container">
          <div className="section-title-center">
            <span className="section-label">O U R  S T R E N G T H S</span>
            <h2>Why Students Trust Us</h2>
          </div>
          <div className="strengths-grid">
            {[
              { icon: '🏆', title: '1000+ Admissions', desc: 'Over a thousand students successfully placed in top universities worldwide.' },
              { icon: '🌍', title: '30+ Countries', desc: 'Expertise covering universities and visa processes across 30+ countries.' },
              { icon: '🤝', title: '500+ Partners', desc: 'Strong relationships with 500+ accredited universities globally.' },
              { icon: '👨‍💼', title: 'Expert Counselors', desc: 'Certified advisors with years of study abroad experience.' },
              { icon: '📋', title: '100% Visa Support', desc: 'Comprehensive visa documentation and interview preparation.' },
              { icon: '⭐', title: '5-Star Reviews', desc: 'Consistently high-rated service based on student feedback.' },
            ].map((s, i) => (
              <div key={i} className="strength-card">
                <div className="red-icon-circle" style={{ margin: '0 auto 14px' }}>{s.icon}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
