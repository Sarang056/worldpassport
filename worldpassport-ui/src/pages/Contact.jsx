import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Contact.css'

export default function Contact() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', phone: '', country: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)
  const [visible, setVisible] = useState(false)

  // Trigger entrance animation after mount
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
      await axios.post('http://localhost:5000/api/enquiry', form)
      navigate('/thank-you')
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  const copyEmail = () => {
    navigator.clipboard.writeText('bm@worldpassport.in')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <main className="contact-page">

      {/* ── LEFT PANEL ── */}
      <div className="contact-left">
        <div className={`contact-left-inner${visible ? ' is-visible' : ''}`}>

          <span className="contact-eyebrow cl-anim" style={{ '--d': '0ms' }}>contact us</span>
          <h1 className="contact-big-heading cl-anim" style={{ '--d': '80ms' }}>
            Let's make<br />it happen
          </h1>

          <div className="contact-email-row cl-anim" style={{ '--d': '160ms' }}>
            <a href="mailto:bm@worldpassport.in" className="contact-email-link">
              bm@worldpassport.in
            </a>
            <button className="contact-copy-btn" onClick={copyEmail} title="Copy email">
              {copied ? '✓ copied' : 'copy'}
            </button>
          </div>

          <div className="contact-details cl-anim" style={{ '--d': '240ms' }}>
            <div className="contact-detail-item">
              <span className="cd-label">Phone</span>
              <a href="tel:+919205031277" className="cd-value">+91 92050 31277</a>
            </div>
            <div className="contact-detail-item">
              <span className="cd-label">Office</span>
              <span className="cd-value">KPCC Junction, Shenoys,<br />Ernakulam, Kerala – 682011</span>
            </div>
            <div className="contact-detail-item">
              <span className="cd-label">Hours</span>
              <span className="cd-value">Mon – Sat &nbsp;9 AM – 6 PM</span>
            </div>
          </div>

          <div className="contact-social cl-anim" style={{ '--d': '320ms' }}>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">instagram</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">linkedin</a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">facebook</a>
          </div>

        </div>
      </div>

      {/* ── RIGHT PANEL ── */}
      <div className="contact-right">
        <div className={`contact-right-inner${visible ? ' is-visible' : ''}`}>

          <p className="contact-form-intro cl-anim" style={{ '--d': '100ms' }}>
            Fill in the form and our counselors will get back to you within 24 hours.
          </p>

          <form onSubmit={handleSubmit} className="contact-form-tubik cl-anim" style={{ '--d': '200ms' }}>

            <div className="ctf-group">
              <input
                type="text" name="name" placeholder="Your full name *"
                value={form.name} onChange={handleChange} required
              />
            </div>

            <div className="ctf-row">
              <div className="ctf-group">
                <input
                  type="email" name="email" placeholder="Email address *"
                  value={form.email} onChange={handleChange} required
                />
              </div>
              <div className="ctf-group">
                <input
                  type="tel" name="phone" placeholder="Phone number *"
                  value={form.phone} onChange={handleChange} required
                />
              </div>
            </div>

            <div className="ctf-group">
              <select name="country" value={form.country} onChange={handleChange}>
                <option value="">Preferred destination country</option>
                <option>Malta</option>
                <option>Singapore</option>
                <option>Malaysia</option>
                <option>New Zealand</option>
                <option>Mauritius</option>
                <option>United Kingdom</option>
                <option>Canada</option>
                <option>Australia</option>
                <option>Other</option>
              </select>
            </div>

            <div className="ctf-group">
              <textarea
                name="message" rows="4"
                placeholder="Tell us about your plans..."
                value={form.message} onChange={handleChange}
              />
            </div>

            {error && <p className="ctf-error">{error}</p>}

            <button type="submit" className="ctf-submit" disabled={loading}>
              {loading ? 'submitting…' : 'submit'}
              {!loading && <span className="ctf-arrow">→</span>}
            </button>

          </form>
        </div>
      </div>

    </main>
  )
}
