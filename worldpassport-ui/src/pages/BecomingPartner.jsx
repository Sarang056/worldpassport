import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './BecomingPartner.css'

const benefits = [
  { icon: '🌍', text: 'Access to a global network of universities & institutions' },
  { icon: '📋', text: 'Full marketing support & co-branded materials' },
  { icon: '💼', text: 'Dedicated relationship manager for your franchise' },
  { icon: '🎓', text: 'Training & certification for your counseling team' },
]

export default function BecomingPartner() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: '', email: '', phone: '', institute: '', address: '', pincode: '', message: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 60)
    return () => clearTimeout(t)
  }, [])

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      await axios.post('http://localhost:5000/api/enquiry', {
        name: form.name,
        email: form.email,
        phone: form.phone,
        country: form.institute,
        message: `Institute: ${form.institute} | Address: ${form.address} | Pincode: ${form.pincode} | ${form.message}`
      })
      navigate('/thank-you')
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
    <main className="partner-page">

      {/* ── LEFT PANEL ── */}
      <div className="partner-left">
        <div className={`partner-left-inner${visible ? ' is-visible' : ''}`}>

          <span className="partner-eyebrow pl-anim" style={{ '--d': '0ms' }}>
            become a partner
          </span>

          <h1 className="partner-big-heading pl-anim" style={{ '--d': '80ms' }}>
            Let's build<br />together
          </h1>

          <p className="partner-tagline pl-anim" style={{ '--d': '160ms' }}>
            Join the World Passport franchise network and help students reach their global education dreams.
          </p>

          <ul className="partner-benefits pl-anim" style={{ '--d': '240ms' }}>
            {benefits.map((b, i) => (
              <li key={i}>
                <span className="pb-icon">{b.icon}</span>
                <span>{b.text}</span>
              </li>
            ))}
          </ul>

          <div className="partner-contact-row pl-anim" style={{ '--d': '340ms' }}>
            <div className="pcr-item">
              <span className="pcr-label">Email us</span>
              <a href="mailto:bm@worldpassport.in" className="pcr-value">bm@worldpassport.in</a>
            </div>
            <div className="pcr-item">
              <span className="pcr-label">Call us</span>
              <a href="tel:+919205031277" className="pcr-value">+91 92050 31277</a>
            </div>
          </div>

        </div>
      </div>

      {/* ── RIGHT PANEL ── */}
      <div className="partner-right">
        <div className={`partner-right-inner${visible ? ' is-visible' : ''}`}>

          <p className="partner-form-intro pl-anim" style={{ '--d': '100ms' }}>
            Fill in your details and our partnership team will reach out within 48 hours.
          </p>

          <form onSubmit={handleSubmit} className="partner-form-tubik pl-anim" style={{ '--d': '200ms' }}>

            <div className="ptf-group">
              <input type="text" name="name" placeholder="Your full name *"
                value={form.name} onChange={handleChange} required />
            </div>

            <div className="ptf-row">
              <div className="ptf-group">
                <input type="email" name="email" placeholder="Email address *"
                  value={form.email} onChange={handleChange} required />
              </div>
              <div className="ptf-group">
                <input type="tel" name="phone" placeholder="Phone number *"
                  value={form.phone} onChange={handleChange} required />
              </div>
            </div>

            <div className="ptf-group">
              <input type="text" name="institute" placeholder="Institute / Organisation name"
                value={form.institute} onChange={handleChange} />
            </div>

            <div className="ptf-row">
              <div className="ptf-group">
                <input type="text" name="address" placeholder="Address"
                  value={form.address} onChange={handleChange} />
              </div>
              <div className="ptf-group">
                <input type="text" name="pincode" placeholder="Pincode"
                  value={form.pincode} onChange={handleChange} />
              </div>
            </div>

            <div className="ptf-group">
              <textarea name="message" rows="4"
                placeholder="Tell us about your institute or any questions..."
                value={form.message} onChange={handleChange} />
            </div>

            {error && <p className="ptf-error">{error}</p>}

            <button type="submit" className="ptf-submit" disabled={loading}>
              {loading ? 'submitting…' : 'submit'}
              {!loading && <span className="ptf-arrow">→</span>}
            </button>

          </form>
        </div>
      </div>

    </main>
  )
}
