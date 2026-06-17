import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './AdminLogin.css'

export default function AdminLogin() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ username: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await axios.post('http://localhost:5000/api/admin/login', form)
      localStorage.setItem('adminToken', res.data.token)
      localStorage.setItem('adminUsername', res.data.username)
      navigate('/admin')
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Check your credentials.')
      setLoading(false)
    }
  }

  return (
    <div className="al-page">

      {/* ── LEFT — dark info panel ── */}
      <div className="al-left">
        <div className={`al-left-inner${visible ? ' al-in' : ''}`}>
          <div className="al-logo al-anim" style={{ '--d': '0ms' }}>
            <span>WORLD</span>
            <small>PASSPORT</small>
          </div>
          <h1 className="al-heading al-anim" style={{ '--d': '80ms' }}>
            Admin<br />
            <span className="al-heading-bold">Dashboard</span>
          </h1>
          <p className="al-desc al-anim" style={{ '--d': '160ms' }}>
            Manage enquiries, programs, and all content for the World Passport website from one place.
          </p>
          <ul className="al-features al-anim" style={{ '--d': '240ms' }}>
            <li><span>📩</span> View & manage student enquiries</li>
            <li><span>🎓</span> Add and edit programs</li>
            <li><span>🌐</span> Full website content control</li>
          </ul>
          <a href="/" className="al-back al-anim" style={{ '--d': '320ms' }}>
            ← Back to Website
          </a>
        </div>
      </div>

      {/* ── RIGHT — login form ── */}
      <div className="al-right">
        <div className={`al-form-wrap${visible ? ' al-in' : ''}`}>
          <span className="al-eyebrow">secure access</span>
          <h2 className="al-form-title">Sign in</h2>
          <p className="al-form-sub">Enter your credentials to access the admin panel.</p>

          <form onSubmit={handleSubmit} className="al-form">
            <div className="al-field">
              <input
                type="text"
                placeholder="Username"
                value={form.username}
                onChange={e => setForm({ ...form, username: e.target.value })}
                required
                autoFocus
              />
            </div>
            <div className="al-field">
              <input
                type="password"
                placeholder="Password"
                value={form.password}
                onChange={e => setForm({ ...form, password: e.target.value })}
                required
              />
            </div>
            {error && <p className="al-error">{error}</p>}
            <button type="submit" className="al-submit" disabled={loading}>
              {loading ? 'Signing in…' : 'Sign In'}
              {!loading && <span className="al-arrow">→</span>}
            </button>
          </form>
        </div>
      </div>

    </div>
  )
}
