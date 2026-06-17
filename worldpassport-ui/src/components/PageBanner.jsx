import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import lottie from 'lottie-web'
import './PageBanner.css'

// Map page titles to their unique local Lottie JSON + a gradient accent colour
const BANNER_CONFIG = {
  'About Us':       { lottie: '/banner-about.json',    grad: 'linear-gradient(135deg,#0f2027,#1a3a4a,#0f2027)' },
  'Services':       { lottie: '/banner-services.json', grad: 'linear-gradient(135deg,#0d1f2d,#1a3a4a,#0a2a1a)' },
  'Programs':       { lottie: '/education-anim.json',  grad: 'linear-gradient(135deg,#0b2e1a,#1a4a2e,#0b2e1a)' },
  'Study Abroad':   { lottie: '/banner-study.json',    grad: 'linear-gradient(135deg,#1a1a0a,#3a2e0a,#1a1a0a)' },
  'Becoming a Partner': { lottie: '/banner-default.json', grad: 'linear-gradient(135deg,#1a0a0a,#3a1a1a,#1a0a0a)' },
  'default':        { lottie: '/banner-default.json',  grad: 'linear-gradient(135deg,#0a1628,#1c2e44,#0a1628)' },
}

export default function PageBanner({ title, breadcrumb }) {
  const lottieRef = useRef(null)
  const [visible, setVisible] = useState(false)
  const config = BANNER_CONFIG[title] || BANNER_CONFIG['default']

  // Title entrance animation
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80)
    return () => clearTimeout(t)
  }, [title])

  // Lottie animation
  useEffect(() => {
    if (!lottieRef.current) return
    const anim = lottie.loadAnimation({
      container: lottieRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: config.lottie,
    })
    return () => anim.destroy()
  }, [config.lottie])

  return (
    <div className="page-banner" style={{ background: config.grad }}>
      {/* Lottie animation — right side */}
      <div className="pb-lottie-wrap" ref={lottieRef} />

      {/* Dark overlay blending lottie into bg */}
      <div className="pb-overlay" />

      {/* Content */}
      <div className="container pb-content">
        <h1 className={`pb-title${visible ? ' pb-title--in' : ''}`}>
          {title}
        </h1>
        <div className={`pb-breadcrumb${visible ? ' pb-bc--in' : ''}`}>
          <Link to="/">HOME</Link>
          <span>›</span>
          <span>{breadcrumb || title.toUpperCase()}</span>
        </div>
      </div>
    </div>
  )
}
