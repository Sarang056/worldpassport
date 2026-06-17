import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AnimatedSection from '../components/AnimatedSection'
import Counter from '../components/Counter'
import './Home.css'

const countries = [
  { id: 'malta', name: 'Malta', code: 'MT', img: '/malta.jpg', tag: 'Europe' },
  { id: 'singapore', name: 'Singapore', code: 'SG', img: '/singapore.jpg', tag: 'Asia' },
  { id: 'malaysia', name: 'Malaysia', code: 'MY', img: '/Malaysia.jpg', tag: 'Asia' },
  { id: 'new-zealand', name: 'New Zealand', code: 'NZ', img: '/newzealand.jpg', tag: 'Pacific' },
  { id: 'mauritius', name: 'Mauritius', code: 'MU', img: '/mauritius.jpg', tag: 'Africa' },
]

const services = [
  { icon: '🎯', title: 'Career Counseling', desc: 'Expert advisors help you choose the right career path, country, and course.' },
  { icon: '📋', title: 'Application Assistance', desc: 'End-to-end support with applications, SOPs, and recommendation letters.' },
  { icon: '🏛', title: 'University Selection', desc: 'Personalised shortlisting of universities matched to your profile.' },
  { icon: '🛂', title: 'Visa Support', desc: 'Hassle-free visa documentation and interview preparation.' },
  { icon: '✈️', title: 'Pre-Departure', desc: 'Travel prep, accommodation guidance, and orientation before you fly.' },
  { icon: '🌍', title: 'Post-Arrival Support', desc: 'Settling in support and ongoing help after you land.' },
]

const faqs = [
  { q: 'How do I choose the right country for my studies?', a: 'Our expert counselors analyze your goals, interests, and budget to recommend the best country, course, and university.' },
  { q: 'Does World Passport help with visa applications?', a: 'Yes, we provide complete visa guidance, documentation support, and interview preparation.' },
  { q: 'Are scholarships available for international students?', a: 'We guide students in finding and applying for scholarships, financial aid, and loan options.' },
  { q: 'Will I get support after reaching my destination?', a: 'Yes, we offer full post-arrival assistance including accommodation support and cultural orientation.' },
  { q: 'Can I work part-time while studying abroad?', a: 'Most countries allow part-time work for international students. We guide you on all rules and opportunities.' },
]

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null)
  const [heroVisible, setHeroVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <main className="home-main">

      {/* ── 1. HERO — animated CSS background + text ── */}
      <section className="hero-full">
        {/* Animated gradient background — no video needed */}
        <div className="hero-bg">
          <div className="hero-animated-bg" />
          <div className="hero-bg-overlay" />
        </div>
        <div className="hero-inner container">
          <div className={`hero-text ${heroVisible ? 'visible' : ''}`}>
            <span className="hero-tag">World Passport · Est. 2015</span>
            <h1 className="hero-h1">
              Your Gateway to<br />
              <em className="hero-em">Global Education.</em>
            </h1>
            <p className="hero-p">
              Expert guidance and complete support for your international
              study journey — from course selection to settling abroad.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn-orange">Get Free Counseling</Link>
              <Link to="/study-abroad" className="btn-outline-hero">Explore Destinations →</Link>
            </div>
          </div>
          <div className="hero-stats-row">
            <div className="hero-stat"><strong>100+</strong><span>Universities</span></div>
            <div className="hero-stat-divider" />
            <div className="hero-stat"><strong>5</strong><span>Countries</span></div>
            <div className="hero-stat-divider" />
            <div className="hero-stat"><strong>8+</strong><span>Branches</span></div>
            <div className="hero-stat-divider" />
            <div className="hero-stat"><strong>2500+</strong><span>Admissions</span></div>
          </div>
        </div>
        {/* Floating circles on hero */}
        <div className="hero-circles" aria-hidden="true">
          <div className="hc hc-1" />
          <div className="hc hc-2" />
          <div className="hc hc-3" />
          <div className="hc hc-4" />
        </div>
      </section>

      {/* ── 2. MARQUEE TICKER ── */}
      <div className="ticker-wrap">
        <div className="ticker-track">
          {['Malta', 'Singapore', 'Malaysia', 'New Zealand', 'Mauritius',
            'Career Counseling', 'Visa Support', 'University Selection',
            'Malta', 'Singapore', 'Malaysia', 'New Zealand', 'Mauritius',
            'Career Counseling', 'Visa Support', 'University Selection'].map((t, i) => (
            <span key={i} className="ticker-item">{t} <span className="ticker-dot">·</span></span>
          ))}
        </div>
      </div>

      {/* ── 3+6. ABOUT & WHY — combined single horizontal grid like Fauna ── */}
      <section className="combined-grid-section">
        {/* Left: About photo */}
        <div className="cg-photo cg-photo-left">
          <img src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Students studying"
            onError={e => { e.target.src = '/about-students.jpg' }} />
          <div className="cg-badge">
            <strong>2500+</strong>
            <span>Global Admissions</span>
          </div>
        </div>
        {/* Center: About text */}
        <div className="cg-text-block">
          <AnimatedSection direction="up">
            <span className="section-tag">About Us</span>
            <h2 className="section-heading">Building Pathways to Global Education</h2>
            <div className="orange-bar" />
            <p>World Passport empowers students with trusted guidance and complete support. From course selection to settlement abroad, we ensure a smooth, transparent, career-focused study journey.</p>
            <div className="cg-checks">
              <span>✓ Personalized counseling</span>
              <span>✓ Visa support</span>
              <span>✓ Global partnerships</span>
              <span>✓ Post-arrival help</span>
            </div>
            <Link to="/about" className="btn-dark" style={{ marginTop: '28px' }}>Learn More</Link>
          </AnimatedSection>
        </div>
        {/* Right: Why Choose Us text */}
        <div className="cg-text-block cg-dark">
          <AnimatedSection direction="up" delay={100}>
            <span className="section-tag" style={{ color: '#888' }}>Why Choose Us</span>
            <h2 className="section-heading-white">The Right Choice Abroad</h2>
            <div className="orange-bar" />
            <div className="cg-why-list">
              {[
                { n: '01', t: 'Global University Partnerships', d: 'Trusted universities across multiple destinations.' },
                { n: '02', t: 'Personalized Guidance', d: 'Tailored advice for every student\'s unique goals.' },
                { n: '03', t: 'End-to-End Support', d: 'From admission to post-arrival assistance.' },
                { n: '04', t: 'Transparent Process', d: 'Honest guidance at every stage.' },
              ].map((w, i) => (
                <div key={i} className="cg-why-row">
                  <span className="cg-why-n">{w.n}</span>
                  <div><h5>{w.t}</h5><p>{w.d}</p></div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
        {/* Far right: Why photo */}
        <div className="cg-photo cg-photo-right">
          <img src="https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Students abroad"
            onError={e => { e.target.src = '/about-mission.jpg' }} />
        </div>
      </section>

      {/* ── 4. DESTINATIONS — horizontal scroll cards ── */}
      <section className="dest-section">
        <div className="container">
          <AnimatedSection direction="left">
            <div className="dest-head">
              <div>
                <span className="section-tag">Study Abroad</span>
                <h2 className="section-heading">Top Study<br />Destinations</h2>
              </div>
              <Link to="/study-abroad" className="btn-outline-dark">View All →</Link>
            </div>
          </AnimatedSection>
        </div>
        <div className="dest-scroll-track">
          {countries.map((c, i) => (
            <AnimatedSection key={c.id} direction="up" delay={i * 80}>
              <Link to={`/study-abroad/${c.id}`} className="dest-scroll-card">
                <div className="dsc-img">
                  <img src={c.img} alt={c.name} onError={e => { e.target.src = '/hero1.jpeg' }} />
                  <span className="dsc-tag">{c.tag}</span>
                </div>
                <div className="dsc-foot">
                  <img src={`https://flagcdn.com/w40/${c.code.toLowerCase()}.png`} alt="" className="dsc-flag" />
                  <span>{c.name}</span>
                  <span className="dsc-arrow">→</span>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── 5. SERVICES — dark, numbered grid ── */}
      <section className="services-dark">
        <div className="container">
          <div className="services-head">
            <AnimatedSection direction="left">
              <span className="section-tag" style={{ color: '#888' }}>Our Services</span>
              <h2 className="section-heading-white">Comprehensive Services<br />for Your Journey</h2>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <Link to="/services" className="btn-cream" style={{ alignSelf: 'flex-end' }}>All Services</Link>
            </AnimatedSection>
          </div>
          <div className="services-num-grid">
            {services.map((s, i) => (
              <AnimatedSection key={i} direction="up" delay={i * 70}>
                <div className="sng-card">
                  <div className="sng-top">
                    <span className="sng-num">0{i + 1}</span>
                    <span className="sng-icon">{s.icon}</span>
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. WHY removed — merged into combined grid above ── */}

      {/* ── 7. STATS — tubik-style bold asymmetric layout ── */}
      <section className="stats-tubik">
        <div className="stats-tubik-inner">
          <div className="stats-tubik-label">
            <span className="section-tag">by the numbers</span>
            <h2 className="stats-tubik-heading">Trusted by<br />thousands of<br />students</h2>
          </div>
          <div className="stats-tubik-grid">
            {[
              { target: 100, suffix: '+', label: 'Partner Universities', desc: 'across 5 countries' },
              { target: 5,   suffix: '',  label: 'Countries',           desc: 'Malta, Singapore, Malaysia, New Zealand, Mauritius' },
              { target: 8,   suffix: '+', label: 'Branches',            desc: 'across Kerala & beyond' },
              { target: 2500,suffix: '+', label: 'Global Admissions',   desc: 'students placed worldwide' },
            ].map((s, i) => (
              <AnimatedSection key={i} direction="up" delay={i * 80}>
                <Counter
                  target={s.target}
                  suffix={s.suffix}
                  label={s.label}
                  desc={s.desc}
                  variant="tubik"
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. FAUNA-STYLE ANIMATED SECTION ── */}
      <section className="fauna-section">
        <div className="fauna-shapes" aria-hidden="true">
          <div className="fs fs-1"></div>
          <div className="fs fs-2"></div>
          <div className="fs fs-3"></div>
          <div className="fs fs-4"></div>
          <div className="fs fs-5"></div>
          <div className="fs fs-6"></div>
          <div className="fs fs-7"></div>
          <div className="fs fs-8"></div>
          <div className="fs fs-9"></div>
        </div>
        <div className="fauna-center">
          <AnimatedSection direction="up">
            <h2 className="fauna-big-title">Make It Yours.</h2>
            <p className="fauna-desc">Expert guidance · Global reach · Your future, simplified.</p>
            <div className="fauna-cta-row">
              <span className="fauna-cta-pill">Free counseling. No commitment required.</span>
              <Link to="/contact" className="btn-orange">Get Started</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
      {/* ── 9. FAQ — 2 col, cream ── */}
      <section className="faq-cream">
        <div className="container faq-layout">
          <div className="faq-l">
            <AnimatedSection direction="left">
              <span className="section-tag">FAQ</span>
              <h2 className="section-heading">Common<br />Questions</h2>
              <div className="orange-bar" />
              <p style={{ color: 'var(--mid)', marginTop: '16px', lineHeight: 1.7 }}>
                Everything you need to know about studying abroad with World Passport.
              </p>
              <Link to="/contact" className="btn-dark" style={{ marginTop: '28px' }}>Talk to an Expert</Link>
            </AnimatedSection>
          </div>
          <div className="faq-r">
            {faqs.map((f, i) => (
              <AnimatedSection key={i} direction="right" delay={i * 60}>
                <div className={`faq-row ${openFaq === i ? 'open' : ''}`}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <div className="faq-row-q">
                    <span>{f.q}</span>
                    <button className="faq-tog">{openFaq === i ? '−' : '+'}</button>
                  </div>
                  {openFaq === i && <p className="faq-row-a">{f.a}</p>}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. CTA FULL-WIDTH BANNER ── */}
      <section className="cta-banner">
        <div className="cta-banner-bg">
          <img src="/about-mission.jpg" alt="CTA"
            onError={e => { e.target.src = '/hero3.jpeg' }} />
          <div className="cta-banner-overlay" />
        </div>
        <div className="container cta-content">
          <AnimatedSection direction="up">
            <h2 className="section-heading-white">Ready to Start Your<br />Global Journey?</h2>
            <p>Book a free counseling session with our experts today.</p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '32px' }}>
              <Link to="/contact" className="btn-orange">Get Free Counseling</Link>
              <Link to="/programs" className="btn-outline-hero">Explore Programs →</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── WHATSAPP ── */}
      <a href="https://api.whatsapp.com/send?phone=919205031277" target="_blank" rel="noreferrer"
        className="wa-float" aria-label="WhatsApp">
        <i className="fab fa-whatsapp"></i>
        <span>Chat with us</span>
      </a>

    </main>
  )
}
