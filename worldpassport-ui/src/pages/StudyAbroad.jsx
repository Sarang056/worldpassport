import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import AnimatedSection from '../components/AnimatedSection'
import './StudyAbroad.css'

const countries = [
  {
    id: 'malta',
    name: 'Malta',
    code: 'MT',
    img: '/malta.jpg',
    services: ['Student Visa & Admission Support', 'Visitor Visa Processing', 'Work Visa & Internship Guidance', 'Business Visa Applications'],
  },
  {
    id: 'singapore',
    name: 'Singapore',
    code: 'SG',
    img: '/singapore.jpg',
    services: ['Student Visa & University Admission', 'Visitor Visa Guidance', 'Business Visa Support', 'Skill Development'],
  },
  {
    id: 'malaysia',
    name: 'Malaysia',
    code: 'MY',
    img: '/Malaysia.jpg',
    services: ['Student Visa & Admission Assistance', 'Visitor Visa Guidance', 'Scholarship & Financial Assistance', 'Work Visa & Internship Opportunities'],
  },
  {
    id: 'new-zealand',
    name: 'New Zealand',
    code: 'NZ',
    img: '/newzealand.jpg',
    services: ['Student Visa & University Admission', 'Visitor Visa Guidance', 'Business Visa Support', 'Skill Development'],
  },
  {
    id: 'mauritius',
    name: 'Mauritius',
    code: 'MU',
    img: '/mauritius.jpg',
    services: ['Student Visa & University Admission', 'Visitor Visa Guidance', 'Business Visa Support', 'Skill Development'],
  },
]

export default function StudyAbroad() {
  return (
    <main>
      <PageBanner title="Study Abroad" breadcrumb="STUDY ABROAD" bgImage="/partner-banner.jpg" />

      <section className="study-abroad-section">
        <div className="container">
          <AnimatedSection direction="up">
            <div className="section-title-center" style={{ marginBottom: '40px' }}>
              <span className="section-label">🎓 STUDY ABROAD</span>
              <h2>Begin Your Global Education Journey</h2>
              <p>Choose your destination and start your international education journey with World Passport</p>
            </div>
          </AnimatedSection>

          <div className="country-cards-grid">
            {countries.map((c, i) => (
              <AnimatedSection key={c.id} direction="up" delay={i * 100}>
                <div className="country-card-new">
                  <div className="country-card-header">
                    <img
                      src={`https://flagcdn.com/w80/${c.code.toLowerCase()}.png`}
                      alt={`${c.name} flag`}
                      className="country-flag-circle"
                    />
                    <div>
                      <span className="country-name-small">{c.name}</span>
                      <h3>{c.name}</h3>
                    </div>
                  </div>
                  <ul className="country-services">
                    {c.services.map((s, j) => (
                      <li key={j}><span>✓</span> {s}</li>
                    ))}
                  </ul>
                  <Link to={`/study-abroad/${c.id}`} className="read-more-btn">
                    READ MORE <span>↗</span>
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
