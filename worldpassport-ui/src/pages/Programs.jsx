import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import lottie from 'lottie-web'
import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import AnimatedSection from '../components/AnimatedSection'
import './Programs.css'

const staticPrograms = {
  Undergraduate: [
    'BA in Management',
    'BA in Marketing',
    'BA in Management with Human Resources Management',
    'BA in Tourism and Events Management',
    'BA in Accounting and Finance',
    'BA in Management and Psychology',
    'BA Information Technology for Business',
    'Bachelor of Arts Top-Up Degree in Business and Management',
    'Undergraduate Diploma in Management',
    'Award in Foundation in Business and Management',
    'Award in Business Studies',
    'Diploma in Financial Crime Compliance & Anti-Money Laundering',
    'Undergraduate Diploma in Foundation of Medical Science',
    'Intensive English (as a Foreign Language)',
  ],
  Postgraduate: [
    'Master of Business Administration (MBA)',
    'MBA in Logistics and Supply Chain Management',
    'Master of Science in Health and Social Care Management',
    'Master of Science in Management',
    'Master of Science in Marketing Management',
    'Master of Science in Management with Human Resources',
    'Master of Science in Tourism and Events Management',
    'MS in Leadership and Change Management',
    'Executive Master of Business Administration (EMBA)',
    'Postgraduate Diploma in Management (with pathways available)',
  ],
  Doctoral: [
    'Doctor of Business Administration (DBA)',
  ],
  Diploma: [
    'Diploma & Foundation Courses',
    'Professional & Executive Programs',
    'Language & Skill Development',
  ],
}

const categoryMeta = {
  Undergraduate: { icon: '🎓', label: 'Undergraduate Programs' },
  Postgraduate:  { icon: '📚', label: 'Postgraduate Programs' },
  Doctoral:      { icon: '🔬', label: 'Doctoral Programs' },
  Diploma:       { icon: '📜', label: 'Diploma Programs' },
}

export default function Programs() {
  const [dbPrograms, setDbPrograms] = useState([])
  const lottieRef = useRef(null)

  useEffect(() => {
    axios.get('http://localhost:5000/api/programs')
      .then(res => setDbPrograms(res.data))
      .catch(() => {})
  }, [])

  // Load lottie animation
  useEffect(() => {
    if (!lottieRef.current) return
    const anim = lottie.loadAnimation({
      container: lottieRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/education-anim.json',   // local file in /public
    })
    return () => anim.destroy()
  }, [])

  // Merge DB programs into static list by category
  const merged = { ...staticPrograms }
  dbPrograms.forEach(p => {
    if (merged[p.category]) {
      if (!merged[p.category].includes(p.title)) merged[p.category].push(p.title)
    } else {
      merged[p.category] = [p.title]
    }
  })

  return (
    <main>
      <PageBanner title="Programs" breadcrumb="PROGRAMS" />

      {/* INTRO SECTION */}
      <section className="programs-intro">
        <div className="container programs-intro-grid">
          <AnimatedSection direction="left">
            <div className="programs-intro-text">
              <h2>Our Programs</h2>
              <p>
                World Passport offers a diverse range of globally recognized academic programs designed
                to meet every student's ambition. Whether you are beginning your undergraduate journey,
                pursuing a master's degree, or aiming for doctoral research, our courses provide strong
                academic foundations and career-focused learning.
              </p>
              <p>
                With partnerships across leading international universities, we ensure access to quality
                education, modern learning environments, and globally respected qualifications. Each
                program is carefully curated to match industry demand and student goals, preparing you
                for success worldwide. From diplomas and foundation studies to executive and professional
                courses, World Passport is your trusted pathway to global opportunities, international
                exposure, and rewarding careers.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right">
            <div className="programs-intro-img">
              <div ref={lottieRef} style={{ width: '100%', height: '380px' }} />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* PROGRAMS LIST */}
      <section className="programs-list-section">
        <div className="container">
          <div className="programs-list-grid">
            {Object.entries(merged).map(([category, items], ci) => (
              <AnimatedSection key={category} direction={ci % 2 === 0 ? 'left' : 'right'} delay={ci * 100}>
                <div className="program-category">
                  <span className="prog-cat-icon">
                    {categoryMeta[category]?.icon || '📋'}
                  </span>
                  <h3>{category}</h3>
                  <span className="prog-cat-count">{items.length} course{items.length !== 1 ? 's' : ''}</span>
                  <ul>
                    {items.map((item, i) => (
                      <li key={i}>
                        <span className="prog-bullet">❯</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link to="/contact" className="btn-red" style={{ fontSize: '15px', padding: '13px 35px' }}>
              Enquire Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

