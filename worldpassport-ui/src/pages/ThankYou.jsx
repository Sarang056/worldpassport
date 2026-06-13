import { Link } from 'react-router-dom'
import './ThankYou.css'

export default function ThankYou() {
  return (
    <main className="thankyou-page">
      <div className="thankyou-card">
        <div className="thankyou-icon">✅</div>
        <h1>Thank You!</h1>
        <p>Your enquiry has been submitted successfully. Our team will contact you within 24 hours.</p>
        <div className="thankyou-btns">
          <Link to="/" className="btn-primary">Back to Home</Link>
          <Link to="/programs" className="btn-outline">Explore Programs</Link>
        </div>
      </div>
    </main>
  )
}
