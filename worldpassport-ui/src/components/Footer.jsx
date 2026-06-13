import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">

      {/* RED BANNER STRIP */}
      <div className="footer-strip">
        <div className="footer-strip-inner">
          <div className="footer-strip-logo">
            <img src="/logo.png" alt="World Passport" />
          </div>
          <div className="footer-strip-info">
            <span><span className="strip-icon">🏢</span> Kandamkulathy Towers, Ernakulam</span>
            <span className="strip-divider">|</span>
            <span><span className="strip-icon">📞</span> +91 92050 31277</span>
          </div>
          <div className="footer-strip-social">
            <a href="https://www.facebook.com/worldpassport.in" target="_blank" rel="noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/worldpassport.in" target="_blank" rel="noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="http://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            <a href="http://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="footer-main">
        <div className="container footer-grid">

          {/* Col 1 — Brand */}
          <div className="footer-col footer-about">
            <h3>Guiding Dreams, Building Careers</h3>
            <p>Trusted guidance, global partnerships, and complete support for your study abroad journey.</p>
            <p className="strengths-label">OUR KEY STRENGTHS</p>
            <div className="strengths-divider"></div>
            <div className="strengths-list">
              <div className="strengths-col">
                <span>→ Expert Career Guidance</span>
                <span>→ Global University Partnerships</span>
                <span>→ Hassle-Free Visa Support</span>
              </div>
              <div className="strengths-col">
                <span>→ Affordable Study Options</span>
                <span>→ Pre-Departure Assistance</span>
                <span>→ Post-Arrival Support</span>
              </div>
            </div>
            <div className="strengths-divider"></div>
            <Link to="/contact" className="partner-btn">Becoming a Partner</Link>
          </div>

          {/* Col 2 — Useful Links */}
          <div className="footer-col">
            <h4>Useful Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/study-abroad">Study Abroad</Link></li>
              <li><Link to="/programs">Program</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Col 3 — Programs */}
          <div className="footer-col">
            <h4>Our Programs</h4>
            <ul>
              <li><Link to="/programs">Undergraduate Programs</Link></li>
              <li><Link to="/programs">Postgraduate Programs</Link></li>
              <li><Link to="/programs">Doctoral Programs</Link></li>
              <li><Link to="/programs">Diploma &amp; Foundation Courses</Link></li>
              <li><Link to="/programs" className="red-link">Professional &amp; Executive Programs</Link></li>
              <li><Link to="/programs">Language &amp; Skill Development</Link></li>
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div className="footer-col">
            <h4>Contact Us</h4>
            <div className="footer-contact">
              <div className="fc-item">
                <span className="fc-icon">📍</span>
                <p>Mahatma Gandhi Road, KPCC Junction, Opp. Maharaja's Ground, Shenoys, Ernakulam, Kerala – 682011</p>
              </div>
              <div className="fc-item">
                <span className="fc-icon">📞</span>
                <a href="tel:+919205031277">+91 92050 31277</a>
              </div>
              <div className="fc-item">
                <span className="fc-icon">✉️</span>
                <a href="mailto:bm@worldpassport.in">bm@worldpassport.in</a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© Copyrights 2025 World Passport. All Rights Reserved.</p>
          <p style={{fontSize:'11px', color:'rgba(255,255,255,0.15)'}}>·</p>
        </div>
      </div>

    </footer>
  )
}
