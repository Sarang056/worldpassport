import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import './Navbar.css'

const studyAbroadItems = [
  { id: 'malta', name: 'Malta', code: 'MT' },
  { id: 'malaysia', name: 'Malaysia', code: 'MY' },
  { id: 'singapore', name: 'Singapore', code: 'SG' },
  { id: 'mauritius', name: 'Mauritius', code: 'MU' },
  { id: 'new-zealand', name: 'New Zealand', code: 'NZ' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [panelOpen, setPanelOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/contact`)
      setSearchOpen(false)
    }
  }

  return (
    <>
      <header className="site-header">
        {/* TOP BAR */}
        <div className="topbar">
          <div className="container topbar-inner">
            <div className="topbar-left">
              <a href="https://www.facebook.com/worldpassport.in" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
              <a href="https://www.instagram.com/worldpassport.in" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="http://twitter.com" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
              <a href="http://linkedin.com" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
              <a href="http://behance.net" target="_blank" rel="noreferrer"><i className="fab fa-behance"></i></a>
            </div>
            <div className="topbar-right">
              <a href="mailto:bm@worldpassport.in"><span className="topbar-icon">✉</span> bm@worldpassport.in</a>
              <span className="topbar-divider">|</span>
              <span><span className="topbar-icon">📍</span> Kandamkulathy Towers, Ernakulam, Kerala</span>
              <span className="topbar-divider">|</span>
              <a href="tel:+919205031277" className="topbar-phone">
                <span className="topbar-icon">💬</span> +91 92050 31277
              </a>
            </div>
          </div>
        </div>

        {/* MAIN NAVBAR */}
        <nav className="navbar">
          <div className="container nav-inner">
            <Link to="/" className="nav-logo">
              <img src="/logo.png" alt="World Passport Logo" />
            </Link>

            <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              <span></span><span></span><span></span>
            </button>

            <ul className={`nav-links ${open ? 'open' : ''}`}>
              <li><NavLink to="/" end onClick={() => setOpen(false)}>Home</NavLink></li>
              <li><NavLink to="/about" onClick={() => setOpen(false)}>About Us</NavLink></li>

              {/* Study Abroad Dropdown */}
              <li className="has-dropdown"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}>
                <NavLink to="/study-abroad" onClick={() => setOpen(false)} className="dropdown-trigger">
                  Study Abroad <i className="fas fa-chevron-down dropdown-arrow"></i>
                </NavLink>
                {dropdownOpen && (
                  <ul className="dropdown-menu">
                    {studyAbroadItems.map(item => (
                      <li key={item.id}>
                        <Link to={`/study-abroad/${item.id}`}
                          onClick={() => { setOpen(false); setDropdownOpen(false) }}>
                          <img src={`https://flagcdn.com/w40/${item.code.toLowerCase()}.png`}
                            alt={item.name} className="dropdown-flag" />
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              <li><NavLink to="/programs" onClick={() => setOpen(false)}>Programs</NavLink></li>
              <li><NavLink to="/services" onClick={() => setOpen(false)}>Services</NavLink></li>
              <li><NavLink to="/becoming-a-partner" onClick={() => setOpen(false)}>Becoming a Partner</NavLink></li>
              <li><NavLink to="/contact" onClick={() => setOpen(false)}>Contact Us</NavLink></li>
            </ul>

            {/* SEARCH + GRID BUTTONS */}
            <div className="nav-actions">
              <button className="search-pill" onClick={() => setSearchOpen(!searchOpen)} aria-label="Search">
                <i className="fas fa-search"></i>
                <span>Search...</span>
              </button>
              <button className="grid-btn" onClick={() => setPanelOpen(true)} aria-label="Info panel">
                <i className="fas fa-th"></i>
              </button>
              <NavLink to="/admin/login" className="nav-admin-link">Admin</NavLink>
            </div>
          </div>

          {/* SEARCH DROPDOWN */}
          {searchOpen && (
            <div className="search-dropdown">
              <form onSubmit={handleSearch} className="search-form">
                <i className="fas fa-search search-form-icon"></i>
                <input
                  type="text"
                  placeholder="Search pages, programs, countries..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  autoFocus
                />
                <button type="button" className="search-close" onClick={() => setSearchOpen(false)}>✕</button>
              </form>
            </div>
          )}
        </nav>
      </header>

      {/* SIDE PANEL OVERLAY */}
      {panelOpen && (
        <div className="panel-overlay" onClick={() => setPanelOpen(false)}>
          <div className="side-panel" onClick={e => e.stopPropagation()}>
            <button className="panel-close" onClick={() => setPanelOpen(false)}>✕</button>

            <div className="panel-logo">
              <img src="/logo.png" alt="World Passport" />
            </div>

            <div className="panel-section">
              <h3>About Us</h3>
              <p>World Passport guides students toward international education opportunities with trusted partnerships, transparent counseling, and complete support for admissions, visas, and post-arrival assistance worldwide.</p>
              <p>We make studying abroad simple, stress-free, and rewarding.</p>
            </div>

            <div className="panel-section">
              <h3>Contact Us</h3>
              <p><a href="mailto:info@worldpassport.in">info@worldpassport.in</a></p>
              <p><a href="tel:+919205031277">+91 92050 31277</a></p>
              <p>5th Floor, Kandamkulathy Towers, Mahatma Gandhi Road, KPCC Junction, Opp. Maharaja's Ground, Shenoys, Ernakulam, Kerala – 682011</p>
            </div>

            <div className="panel-social">
              <a href="https://www.facebook.com/worldpassport.in" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
              <a href="https://www.instagram.com/worldpassport.in" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="http://twitter.com" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
              <a href="http://linkedin.com" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
              <a href="http://pinterest.com" target="_blank" rel="noreferrer"><i className="fab fa-pinterest-p"></i></a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
