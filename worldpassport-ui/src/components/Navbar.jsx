import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      {/* TOP BAR */}
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-left">
            <a href="https://www.facebook.com/worldpassport.in" target="_blank" rel="noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/worldpassport.in" target="_blank" rel="noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="http://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="http://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            <a href="http://behance.net" target="_blank" rel="noreferrer" aria-label="Behance"><i className="fab fa-behance"></i></a>
          </div>
          <div className="topbar-right">
            <a href="mailto:bm@worldpassport.in">
              <span className="topbar-icon">✉</span> bm@worldpassport.in
            </a>
            <span className="topbar-divider">|</span>
            <span>
              <span className="topbar-icon">📍</span> Kandamkulathy Towers, Ernakulam, Kerala
            </span>
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

          <button
            className="hamburger"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span></span><span></span><span></span>
          </button>

          <ul className={`nav-links ${open ? 'open' : ''}`}>
            <li><NavLink to="/" end onClick={() => setOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/about" onClick={() => setOpen(false)}>About Us</NavLink></li>
            <li><NavLink to="/study-abroad" onClick={() => setOpen(false)}>Study Abroad</NavLink></li>
            <li><NavLink to="/programs" onClick={() => setOpen(false)}>Programs</NavLink></li>
            <li><NavLink to="/services" onClick={() => setOpen(false)}>Services</NavLink></li>
            <li><NavLink to="/becoming-a-partner" onClick={() => setOpen(false)}>Becoming a Partner</NavLink></li>
            <li><NavLink to="/contact" onClick={() => setOpen(false)}>Contact Us</NavLink></li>
            <li><NavLink to="/admin/login" onClick={() => setOpen(false)} className="nav-admin-link">Admin</NavLink></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
