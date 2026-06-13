import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import './StudyAbroad.css'

const countries = [
  { flag: '🇬🇧', name: 'United Kingdom', unis: '130+ Universities', desc: 'Home to Oxford, Cambridge and Russell Group universities offering world-class education.' },
  { flag: '🇺🇸', name: 'United States', unis: '500+ Universities', desc: 'Ivy League and top-ranked universities with cutting-edge research and diverse campuses.' },
  { flag: '🇨🇦', name: 'Canada', unis: '100+ Universities', desc: 'Post-study work visa friendly with excellent quality of life and multicultural society.' },
  { flag: '🇦🇺', name: 'Australia', unis: '90+ Universities', desc: 'Group of Eight universities with strong industry connections and clear PR pathways.' },
  { flag: '🇳🇿', name: 'New Zealand', unis: '30+ Universities', desc: 'Safe, student-friendly environment with globally recognized qualifications.' },
  { flag: '🇮🇪', name: 'Ireland', unis: '25+ Universities', desc: 'EU gateway with tech hub culture — home to Google, Apple, Meta European HQs.' },
  { flag: '🇩🇪', name: 'Germany', unis: '80+ Universities', desc: 'Tuition-free options at public universities with strong engineering and tech programs.' },
  { flag: '🇦🇪', name: 'Dubai / UAE', unis: '40+ Universities', desc: 'Tax-free income, world-class infrastructure, and growing hub for global education.' },
]

const steps = [
  { n: '01', title: 'Free Consultation', desc: 'Talk to our counselor to understand your profile, goals, and the best options available.' },
  { n: '02', title: 'University Shortlisting', desc: 'We shortlist universities based on your academic background, budget, and career goals.' },
  { n: '03', title: 'Application Preparation', desc: 'We help prepare SOP, LORs, resume, and submit applications to selected universities.' },
  { n: '04', title: 'Offer & Acceptance', desc: 'Receive offer letters, compare options, and confirm your preferred university.' },
  { n: '05', title: 'Visa Application', desc: 'Complete documentation and visa application with expert guidance and mock interviews.' },
  { n: '06', title: 'Pre-Departure & Travel', desc: 'Accommodation help, travel preparation, orientation, and post-arrival support.' },
]

export default function StudyAbroad() {
  return (
    <main>
      <PageBanner title="Study Abroad" breadcrumb="STUDY ABROAD" />

      <section className="countries-section">
        <div className="container">
          <div className="section-title-center">
            <span className="section-label">D E S T I N A T I O N S</span>
            <h2>Top Study Destinations</h2>
            <p>We provide expert guidance for all major study abroad destinations</p>
          </div>
          <div className="countries-grid">
            {countries.map((c, i) => (
              <div key={i} className="country-card">
                <div className="country-flag">{c.flag}</div>
                <h3>{c.name}</h3>
                <span className="country-unis-tag">{c.unis}</span>
                <p>{c.desc}</p>
                <Link to="/contact" className="country-enquire">Enquire →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="container">
          <div className="section-title-center">
            <span className="section-label" style={{ color: 'rgba(255,255,255,0.6)' }}>T H E  P R O C E S S</span>
            <h2 style={{ color: 'white' }}>How It Works</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)' }}>A simple guided journey from dream to destination</p>
          </div>
          <div className="steps-grid">
            {steps.map((s, i) => (
              <div key={i} className="step-card">
                <div className="step-number">{s.n}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link to="/contact" className="btn-red">Start Your Journey Today</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
