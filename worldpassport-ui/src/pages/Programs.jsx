import { useEffect, useState } from 'react'
import axios from 'axios'
import PageBanner from '../components/PageBanner'
import './Programs.css'

const categories = ["All", "Undergraduate", "Postgraduate", "Doctoral", "Diploma", "Professional", "Language"]

export default function Programs() {
  const [programs, setPrograms] = useState([])
  const [filter, setFilter] = useState("All")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('http://localhost:5000/api/programs')
      .then(res => { setPrograms(res.data); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  const filtered = filter === "All" ? programs : programs.filter(p => p.category === filter)

  return (
    <main>
      <PageBanner title="Programs" breadcrumb="PROGRAMS" />

      <section className="programs-section">
        <div className="container">
          <div className="filter-tabs">
            {categories.map(c => (
              <button
                key={c}
                className={`filter-btn ${filter === c ? 'active' : ''}`}
                onClick={() => setFilter(c)}
              >
                {c}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="prog-loading">Loading programs...</div>
          ) : filtered.length === 0 ? (
            <div className="prog-empty">
              <p>No programs available yet. Please check back soon or <a href="/contact">contact us</a> for more info.</p>
            </div>
          ) : (
            <div className="programs-grid">
              {filtered.map(p => (
                <div key={p._id} className="program-card">
                  <div className="program-card-top">
                    <span className="prog-cat-tag">{p.category}</span>
                    {p.featured && <span className="prog-featured">⭐ Featured</span>}
                  </div>
                  <h3>{p.title}</h3>
                  <div className="program-meta">
                    <span>🌍 {p.country}</span>
                    {p.duration && <span>⏱ {p.duration}</span>}
                  </div>
                  {p.description && <p className="program-desc">{p.description}</p>}
                  <a href="/contact" className="prog-enquire-btn">Enquire Now</a>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
