import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <img src="/logo.png" alt="World Passport" className="footer-logo" />
          <p>Guiding Dreams, Building Careers. Trusted guidance, global partnerships, and complete support for your study abroad journey.</p>
          <div className="footer-socials">
            <a href="https://www.facebook.com/worldpassport.in" target="_blank" rel="noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/worldpassport.in" target="_blank" rel="noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="http://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="http://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            <a href="http://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/study-abroad">Study Abroad</Link></li>
            <li><Link to="/programs">Programs</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Destinations</h4>
          <ul>
            <li><Link to="/study-abroad/malta">Malta</Link></li>
            <li><Link to="/study-abroad/singapore">Singapore</Link></li>
            <li><Link to="/study-abroad/malaysia">Malaysia</Link></li>
            <li><Link to="/study-abroad/new-zealand">New Zealand</Link></li>
            <li><Link to="/study-abroad/mauritius">Mauritius</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul className="footer-contact-list">
            <li><i className="fas fa-map-marker-alt"></i><span>Mahatma Gandhi Road, KPCC Junction, Opp. Maharaja's Ground, Shenoys, Ernakulam, Kerala – 682011</span></li>
            <li><i className="fas fa-phone"></i><a href="tel:+919205031277">+91 92050 31277</a></li>
            <li><i className="fas fa-envelope"></i><a href="mailto:bm@worldpassport.in">bm@worldpassport.in</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© 2025 World Passport. All Rights Reserved.</p>
          <Link to="/admin/login" className="footer-admin-link">Admin</Link>
        </div>
      </div>
    </footer>
  )
}
