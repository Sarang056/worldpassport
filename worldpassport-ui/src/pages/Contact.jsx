import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import PageBanner from '../components/PageBanner'
import './Contact.css'

export default function Contact() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', phone: '', country: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

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

  return (
    <main>
      <PageBanner title="Contact Us" breadcrumb="CONTACT US" />

      <section className="contact-section">
        <div className="container contact-grid">

          {/* INFO */}
          <div className="contact-info">
            <h2>We're Here to Help</h2>
            <p>Reach out to our team of expert counselors ready to guide you on your journey to study abroad.</p>

            <div className="info-card">
              <div className="red-icon-circle">📍</div>
              <div>
                <strong>Office Address</strong>
                <p>Mahatma Gandhi Road, KPCC Junction, Opp. Maharaja's Ground, Shenoys, Ernakulam, Kerala – 682011</p>
              </div>
            </div>
            <div className="info-card">
              <div className="red-icon-circle">📞</div>
              <div>
                <strong>Phone</strong>
                <p><a href="tel:+919205031277">+91 92050 31277</a></p>
              </div>
            </div>
            <div className="info-card">
              <div className="red-icon-circle">✉️</div>
              <div>
                <strong>Email</strong>
                <p><a href="mailto:bm@worldpassport.in">bm@worldpassport.in</a></p>
              </div>
            </div>
            <div className="info-card">
              <div className="red-icon-circle">🕐</div>
              <div>
                <strong>Working Hours</strong>
                <p>Monday – Saturday: 9:00 AM – 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="contact-form-wrap">
            <h2>Send Us an Enquiry</h2>
            <p>Fill in the form and our team will contact you within 24 hours.</p>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input type="text" id="name" name="name" placeholder="Your full name"
                    value={form.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input type="tel" id="phone" name="phone" placeholder="+91 XXXXX XXXXX"
                    value={form.phone} onChange={handleChange} required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input type="email" id="email" name="email" placeholder="your@email.com"
                  value={form.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="country">Preferred Country</label>
                <select id="country" name="country" value={form.country} onChange={handleChange}>
                  <option value="">Select a country</option>
                  <option>United Kingdom</option>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Australia</option>
                  <option>New Zealand</option>
                  <option>Ireland</option>
                  <option>Germany</option>
                  <option>France</option>
                  <option>Dubai / UAE</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="4"
                  placeholder="Tell us about your plans..."
                  value={form.message} onChange={handleChange} />
              </div>
              {error && <p className="form-error">{error}</p>}
              <button type="submit" className="btn-red submit-btn" disabled={loading}>
                {loading ? 'Submitting...' : 'Submit Enquiry'}
              </button>
            </form>
          </div>

        </div>
      </section>
    </main>
  )
}
