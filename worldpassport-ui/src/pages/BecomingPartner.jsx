import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import PageBanner from '../components/PageBanner'
import './BecomingPartner.css'

export default function BecomingPartner() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: '', email: '', phone: '', institute: '', address: '', pincode: '', message: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

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
    <main>
      <PageBanner title="Becoming a Partner" breadcrumb="BECOMING A PARTNER" bgImage="/partner-banner.jpg" />

      <section className="partner-section">
        <div className="container">
          <p className="partner-tagline">
            Ready to build something great? Join our team and become a franchise partner!
          </p>

          <form onSubmit={handleSubmit} className="partner-form">
            <div className="partner-form-row">
              <input type="text" name="name" placeholder="Your Full Name"
                value={form.name} onChange={handleChange} required />
              <input type="email" name="email" placeholder="E-mail Address"
                value={form.email} onChange={handleChange} required />
            </div>
            <div className="partner-form-row">
              <input type="tel" name="phone" placeholder="Phone Number"
                value={form.phone} onChange={handleChange} required />
              <input type="text" name="institute" placeholder="Institute"
                value={form.institute} onChange={handleChange} />
            </div>
            <div className="partner-form-row">
              <input type="text" name="address" placeholder="Address"
                value={form.address} onChange={handleChange} />
              <input type="text" name="pincode" placeholder="Pincode"
                value={form.pincode} onChange={handleChange} />
            </div>
            <textarea name="message" placeholder="Text" rows="5"
              value={form.message} onChange={handleChange} />
            {error && <p className="partner-error">{error}</p>}
            <div style={{ textAlign: 'center' }}>
              <button type="submit" className="partner-submit-btn" disabled={loading}>
                {loading ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}
