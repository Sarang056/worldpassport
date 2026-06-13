import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './AdminPanel.css'

const CATEGORIES = ["Undergraduate", "Postgraduate", "Doctoral", "Diploma", "Professional", "Language"]

function authHeader() {
  return { Authorization: `Bearer ${localStorage.getItem('adminToken')}` }
}

export default function AdminPanel() {
  const navigate = useNavigate()
  const [tab, setTab] = useState('enquiries')
  const username = localStorage.getItem('adminUsername') || 'Admin'

  // Enquiries
  const [enquiries, setEnquiries] = useState([])
  const [enqLoading, setEnqLoading] = useState(true)

  // Programs
  const [programs, setPrograms] = useState([])
  const [progLoading, setProgLoading] = useState(true)
  const [showProgForm, setShowProgForm] = useState(false)
  const [editProg, setEditProg] = useState(null)
  const [progForm, setProgForm] = useState({ title:'', category:'Undergraduate', country:'', duration:'', description:'', featured: false })
  const [progError, setProgError] = useState('')
  const [progSaving, setProgSaving] = useState(false)

  useEffect(() => { fetchEnquiries() }, [])
  useEffect(() => { if (tab === 'programs') fetchPrograms() }, [tab])

  const fetchEnquiries = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/enquiry', { headers: authHeader() })
      setEnquiries(res.data)
    } catch { /* handled by private route */ }
    setEnqLoading(false)
  }

  const fetchPrograms = async () => {
    setProgLoading(true)
    try {
      const res = await axios.get('http://localhost:5000/api/programs')
      setPrograms(res.data)
    } catch {}
    setProgLoading(false)
  }

  const deleteEnquiry = async (id) => {
    if (!window.confirm('Delete this enquiry?')) return
    await axios.delete(`http://localhost:5000/api/enquiry/${id}`, { headers: authHeader() })
    setEnquiries(enquiries.filter(e => e._id !== id))
  }

  const openNewProgForm = () => {
    setEditProg(null)
    setProgForm({ title:'', category:'Undergraduate', country:'', duration:'', description:'', featured: false })
    setProgError('')
    setShowProgForm(true)
  }

  const openEditProgForm = (p) => {
    setEditProg(p._id)
    setProgForm({ title:p.title, category:p.category, country:p.country, duration:p.duration||'', description:p.description||'', featured:p.featured })
    setProgError('')
    setShowProgForm(true)
  }

  const saveProg = async (e) => {
    e.preventDefault()
    setProgSaving(true)
    setProgError('')
    try {
      if (editProg) {
        const res = await axios.put(`http://localhost:5000/api/programs/${editProg}`, progForm, { headers: authHeader() })
        setPrograms(programs.map(p => p._id === editProg ? res.data.data : p))
      } else {
        const res = await axios.post('http://localhost:5000/api/programs', progForm, { headers: authHeader() })
        setPrograms([res.data.data, ...programs])
      }
      setShowProgForm(false)
    } catch (err) {
      setProgError(err.response?.data?.message || 'Failed to save program.')
    }
    setProgSaving(false)
  }

  const deleteProg = async (id) => {
    if (!window.confirm('Delete this program?')) return
    await axios.delete(`http://localhost:5000/api/programs/${id}`, { headers: authHeader() })
    setPrograms(programs.filter(p => p._id !== id))
  }

  const logout = () => {
    localStorage.removeItem('adminToken')
    localStorage.removeItem('adminUsername')
    navigate('/admin/login')
  }

  return (
    <div className="admin-panel">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="admin-sidebar-logo">
          <span>WORLD</span>
          <small>PASSPORT</small>
        </div>
        <nav className="admin-nav">
          <button className={tab === 'enquiries' ? 'active' : ''} onClick={() => setTab('enquiries')}>
            📩 Needs
            {enquiries.length > 0 && <span className="badge">{enquiries.length}</span>}
          </button>
          <button className={tab === 'programs' ? 'active' : ''} onClick={() => setTab('programs')}>
            🎓 Programs
          </button>
          <a href="/" target="_blank" rel="noreferrer" className="sidebar-link">🌐 View Website</a>
        </nav>
        <div className="admin-sidebar-footer">
          <p>👤 {username}</p>
          <button onClick={logout} className="logout-btn">Logout</button>
        </div>
      </aside>

      {/* Main */}
      <main className="admin-main">
        {/* ENQUIRIES TAB */}
        {tab === 'enquiries' && (
          <div>
            <div className="admin-header">
              <h1>Enquiries</h1>
              <p>All form submissions from visitors</p>
            </div>
            {enqLoading ? (
              <div className="admin-loading">Loading...</div>
            ) : enquiries.length === 0 ? (
              <div className="admin-empty">No enquiries yet.</div>
            ) : (
              <div className="table-wrap">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Country</th>
                      <th>Message</th>
                      <th>Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {enquiries.map((e, i) => (
                      <tr key={e._id}>
                        <td>{i + 1}</td>
                        <td><strong>{e.name}</strong></td>
                        <td>{e.email}</td>
                        <td>{e.phone}</td>
                        <td>{e.country || '—'}</td>
                        <td className="msg-cell">{e.message || '—'}</td>
                        <td>{new Date(e.createdAt).toLocaleDateString('en-IN')}</td>
                        <td>
                          <button className="del-btn" onClick={() => deleteEnquiry(e._id)}>🗑</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* PROGRAMS TAB */}
        {tab === 'programs' && (
          <div>
            <div className="admin-header">
              <div>
                <h1>Programs</h1>
                <p>Manage programs shown on the website</p>
              </div>
              <button className="btn-primary" onClick={openNewProgForm}>+ Add Program</button>
            </div>

            {showProgForm && (
              <div className="prog-form-wrap">
                <h3>{editProg ? 'Edit Program' : 'Add New Program'}</h3>
                <form onSubmit={saveProg} className="prog-form">
                  <div className="form-row-2">
                    <div className="form-group">
                      <label>Title *</label>
                      <input type="text" value={progForm.title} onChange={e=>setProgForm({...progForm,title:e.target.value})} required placeholder="e.g. BSc Computer Science" />
                    </div>
                    <div className="form-group">
                      <label>Category *</label>
                      <select value={progForm.category} onChange={e=>setProgForm({...progForm,category:e.target.value})}>
                        {CATEGORIES.map(c => <option key={c}>{c}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="form-row-2">
                    <div className="form-group">
                      <label>Country *</label>
                      <input type="text" value={progForm.country} onChange={e=>setProgForm({...progForm,country:e.target.value})} required placeholder="e.g. United Kingdom" />
                    </div>
                    <div className="form-group">
                      <label>Duration</label>
                      <input type="text" value={progForm.duration} onChange={e=>setProgForm({...progForm,duration:e.target.value})} placeholder="e.g. 3 Years" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Description</label>
                    <textarea rows="3" value={progForm.description} onChange={e=>setProgForm({...progForm,description:e.target.value})} placeholder="Brief description of the program..." />
                  </div>
                  <div className="form-group checkbox-group">
                    <label>
                      <input type="checkbox" checked={progForm.featured} onChange={e=>setProgForm({...progForm,featured:e.target.checked})} />
                      &nbsp; Mark as Featured
                    </label>
                  </div>
                  {progError && <p className="form-error">{progError}</p>}
                  <div className="prog-form-actions">
                    <button type="submit" className="btn-primary" disabled={progSaving}>{progSaving ? 'Saving...' : editProg ? 'Update' : 'Add Program'}</button>
                    <button type="button" className="btn-cancel" onClick={() => setShowProgForm(false)}>Cancel</button>
                  </div>
                </form>
              </div>
            )}

            {progLoading ? (
              <div className="admin-loading">Loading...</div>
            ) : programs.length === 0 ? (
              <div className="admin-empty">No programs yet. Add one above.</div>
            ) : (
              <div className="table-wrap">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Title</th>
                      <th>Category</th>
                      <th>Country</th>
                      <th>Duration</th>
                      <th>Featured</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {programs.map((p, i) => (
                      <tr key={p._id}>
                        <td>{i + 1}</td>
                        <td><strong>{p.title}</strong></td>
                        <td><span className="cat-badge">{p.category}</span></td>
                        <td>{p.country}</td>
                        <td>{p.duration || '—'}</td>
                        <td>{p.featured ? '⭐' : '—'}</td>
                        <td className="action-btns">
                          <button className="edit-btn" onClick={() => openEditProgForm(p)}>✏️</button>
                          <button className="del-btn" onClick={() => deleteProg(p._id)}>🗑</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  )
}
