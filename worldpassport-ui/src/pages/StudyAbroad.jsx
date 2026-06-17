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
    desc: 'Quality European education, affordable tuition & vibrant student life in the Mediterranean.',
  },
  {
    id: 'singapore',
    name: 'Singapore',
    code: 'SG',
    img: '/singapore.jpg',
    desc: 'Asia\'s top education hub with world-class universities, scholarships & skill development.',
  },
  {
    id: 'malaysia',
    name: 'Malaysia',
    code: 'MY',
    img: '/Malaysia.jpg',
    desc: 'Affordable, globally recognised qualifications with rich cultural diversity in Southeast Asia.',
  },
  {
    id: 'new-zealand',
    name: 'New Zealand',
    code: 'NZ',
    img: '/newzealand.jpg',
    desc: 'Low tuition fees, post-study work rights & internationally respected degrees.',
  },
  {
    id: 'mauritius',
    name: 'Mauritius',
    code: 'MU',
    img: '/mauritius.jpg',
    desc: 'Emerging education destination with English-medium universities & vibrant island living.',
  },
]

export default function StudyAbroad() {
  return (
    <main>
      <PageBanner title="Study Abroad" breadcrumb="STUDY ABROAD" />

      <section className="study-abroad-section">
        <div className="container">
          <AnimatedSection direction="up">
            <div className="section-title-center" style={{ marginBottom: '40px' }}>
              <span className="section-label">🎓 STUDY ABROAD</span>
              <h2 className="sa-title">
                Begin Your Global Education<br />
                <span className="sa-title-bold">Journey</span>
              </h2>
              <p>Choose your destination and start your international education journey with World Passport</p>
            </div>
          </AnimatedSection>

          <div className="country-cards-grid">
            {countries.map((c, i) => (
              <AnimatedSection key={c.id} direction="up" delay={i * 100}>
                <div className="country-card-new">
                  <div className="country-card-img-wrap">
                    <img
                      src={c.img}
                      alt={c.name}
                      className="country-card-img"
                      onError={e => { e.target.src = '/hero1.jpeg' }}
                    />
                    <div className="country-flag-badge">
                      <img
                        src={`https://flagcdn.com/w80/${c.code.toLowerCase()}.png`}
                        alt={`${c.name} flag`}
                        className="country-flag-circle"
                      />
                    </div>
                  </div>
                  <div className="country-card-body">
                    <h3>{c.name}</h3>
                    <p>{c.desc}</p>
                    <Link to={`/study-abroad/${c.id}`} className="learn-more-link">
                      Learn More
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

