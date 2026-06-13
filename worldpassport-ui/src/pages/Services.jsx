import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import './Services.css'

const services = [
  { icon: '👥', title: 'Career Counseling & Guidance', desc: 'Helping you choose the right country, course, and university based on your academic goals, career plans, and personal interests.' },
  { icon: '💰', title: 'Financial Advice', desc: 'Expert guidance on scholarships, education loans, and budgeting tips to make your study abroad journey more affordable and stress-free.' },
  { icon: '🎓', title: 'University & Course Selection', desc: 'Personalized recommendations from globally recognized institutions, ensuring you find the program best suited to your ambitions and future career.' },
  { icon: '🧳', title: 'Pre-Departure Support', desc: 'Orientation sessions, travel planning, and cultural preparation to ensure you are fully ready before flying to your destination.' },
  { icon: '🤝', title: 'Authorized Partnerships', desc: 'Direct collaborations with trusted global universities and colleges, ensuring a transparent and reliable admission process.' },
  { icon: '🛂', title: 'Visa Guidance', desc: 'Complete assistance with visa documentation, application forms, and interview preparation to make the process simple and worry-free.' },
  { icon: '📝', title: 'Application Assistance', desc: 'End-to-end support with university applications, SOPs, and recommendation letters to maximize your acceptance chances.' },
  { icon: '🌍', title: 'Post-Arrival Support', desc: 'We remain by your side even after you land — local guidance, bank accounts, accommodation, and settling in support.' },
]

export default function Services() {
  return (
    <main>
      <PageBanner title="Services" breadcrumb="SERVICES" />

      <section className="services-page-section">
        <div className="container">
          <div className="section-title-center">
            <h2>Comprehensive Services for Your Global Journey</h2>
            <p>
              At <strong>World Passport</strong>, we provide complete end-to-end services to make your
              study abroad journey smooth, transparent, and stress-free. From choosing the right course
              to settling into your new destination, our expert team is with you every step of the way.
            </p>
          </div>
          <div className="services-page-grid">
            {services.map((s, i) => (
              <div key={i} className="service-page-card">
                <div className="red-icon-circle">{s.icon}</div>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-cta">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Ready to Get Started?</h2>
          <p>Talk to our expert counselors for free today.</p>
          <Link to="/contact" className="btn-red" style={{ marginTop: '20px', fontSize: '16px', padding: '13px 35px' }}>
            Book Free Counseling
          </Link>
        </div>
      </section>
    </main>
  )
}
