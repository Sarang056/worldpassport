import { Link } from 'react-router-dom'
import './PageBanner.css'

export default function PageBanner({ title, breadcrumb, bgImage = '/hero1.jpeg' }) {
  return (
    <div className="page-banner">
      <div
        className="page-banner-bg"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="container">
        <h1>{title}</h1>
        <div className="breadcrumb">
          <Link to="/">HOME</Link>
          <span className="crumb-sep">›</span>
          <span className="crumb-current">{breadcrumb || title.toUpperCase()}</span>
        </div>
      </div>
    </div>
  )
}
