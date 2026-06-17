import { useState, useEffect } from 'react'
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
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [panelOpen, setPanelOpen] = useState(false)
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    setSearchOpen(false)
    navigate('/contact')
  }

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          {/* LOGO */}
          <Link to="/" className="nav-logo" onClick={() => setMobileOpen(false)}>
            <img src="/logo.png" alt="World Passport" className="logo-img" />
          </Link>

          {/* PILL NAV */}
          <div className="nav-pill">
            <ul className="nav-links">
              <li><NavLink to="/" end>Home</NavLink></li>
              <li><NavLink to="/about">About Us</NavLink></li>
              <li
                className="has-dropdown"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <NavLink to="/study-abroad" className="dropdown-trigger">
                  Study Abroad <i className="fas fa-chevron-down"></i>
                </NavLink>
                {dropdownOpen && (
                  <ul className="dropdown-menu">
                    {studyAbroadItems.map(item => (
                      <li key={item.id}>
                        <Link to={`/study-abroad/${item.id}`} onClick={() => setDropdownOpen(false)}>
                          <img src={`https://flagcdn.com/w40/${item.code.toLowerCase()}.png`} alt={item.name} className="dd-flag" />
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li><NavLink to="/programs">Programs</NavLink></li>
              <li><NavLink to="/services">Services</NavLink></li>
              <li><NavLink to="/becoming-a-partner">Partner</NavLink></li>
            </ul>
          </div>

          {/* RIGHT ICONS */}
          <div className="nav-right">
            <button className="nav-icon-btn" onClick={() => setSearchOpen(!searchOpen)} aria-label="Search">
              <i className="fas fa-search"></i>
            </button>
            <button className="nav-grid-btn" onClick={() => setPanelOpen(true)} aria-label="Info">
              <i className="fas fa-th"></i>
            </button>
            <Link to="/contact" className="nav-cta-btn nav-contact-btn">Contact</Link>
            <Link to="/admin/login" className="nav-cta-btn">Admin</Link>
            <button className="hamburger" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
              {mobileOpen ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
            </button>
          </div>
        </div>

        {/* SEARCH */}
        {searchOpen && (
          <div className="search-bar">
            <form onSubmit={handleSearch}>
              <i className="fas fa-search"></i>
              <input type="text" placeholder="Search programs, countries..." value={query}
                onChange={e => setQuery(e.target.value)} autoFocus />
              <button type="button" onClick={() => setSearchOpen(false)}>
                <i className="fas fa-times"></i>
              </button>
            </form>
          </div>
        )}

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="mobile-menu">
            <NavLink to="/" end onClick={() => setMobileOpen(false)}>Home</NavLink>
            <NavLink to="/about" onClick={() => setMobileOpen(false)}>About Us</NavLink>
            <NavLink to="/study-abroad" onClick={() => setMobileOpen(false)}>Study Abroad</NavLink>
            {studyAbroadItems.map(item => (
              <Link key={item.id} to={`/study-abroad/${item.id}`} onClick={() => setMobileOpen(false)} className="mobile-sub">
                {item.name}
              </Link>
            ))}
            <NavLink to="/programs" onClick={() => setMobileOpen(false)}>Programs</NavLink>
            <NavLink to="/services" onClick={() => setMobileOpen(false)}>Services</NavLink>
            <NavLink to="/becoming-a-partner" onClick={() => setMobileOpen(false)}>Becoming a Partner</NavLink>
            <NavLink to="/contact" onClick={() => setMobileOpen(false)}>Contact Us</NavLink>
            <Link to="/admin/login" onClick={() => setMobileOpen(false)} className="mobile-admin">Admin Panel</Link>
          </div>
        )}
      </nav>

      {/* SIDE PANEL */}
      {panelOpen && (
        <div className="panel-overlay" onClick={() => setPanelOpen(false)}>
          <div className="side-panel" onClick={e => e.stopPropagation()}>
            <button className="panel-close-btn" onClick={() => setPanelOpen(false)}>
              <i className="fas fa-times"></i>
            </button>
            <img src="/logo.png" alt="World Passport" className="panel-logo" />
            <div className="panel-block">
              <h4>About Us</h4>
              <p>World Passport guides students toward international education opportunities with trusted partnerships, transparent counseling, and complete support for admissions, visas, and post-arrival assistance worldwide.</p>
              <p>We make studying abroad simple, stress-free, and rewarding.</p>
            </div>
            <div className="panel-block">
              <h4>Contact Us</h4>
              <p><a href="mailto:info@worldpassport.in">info@worldpassport.in</a></p>
              <p><a href="tel:+919205031277">+91 92050 31277</a></p>
              <p>5th Floor, Kandamkulathy Towers, Mahatma Gandhi Road, KPCC Junction, Shenoys, Ernakulam, Kerala – 682011</p>
            </div>
            <div className="panel-socials">
              <a href="https://www.facebook.com/worldpassport.in" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
              <a href="https://www.instagram.com/worldpassport.in" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="http://twitter.com" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
              <a href="http://linkedin.com" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
              <a href="http://youtube.com" target="_blank" rel="noreferrer"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
