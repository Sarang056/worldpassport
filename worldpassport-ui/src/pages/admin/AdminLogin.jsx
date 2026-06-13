import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './AdminLogin.css'

export default function AdminLogin() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ username: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

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
    <div className="admin-login-page">
      <div className="admin-login-card">
        <div className="admin-logo">
          <span>WORLD</span>
          <small>PASSPORT</small>
        </div>
        <h2>Admin Panel</h2>
        <p>Sign in to access the dashboard</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text" placeholder="admin"
              value={form.username}
              onChange={e => setForm({...form, username: e.target.value})}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password" placeholder="••••••••"
              value={form.password}
              onChange={e => setForm({...form, password: e.target.value})}
              required
            />
          </div>
          {error && <p className="login-error">{error}</p>}
          <button type="submit" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
        <a href="/" className="back-link">← Back to Website</a>
      </div>
    </div>
  )
}
