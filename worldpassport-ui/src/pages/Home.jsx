import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AnimatedSection from '../components/AnimatedSection'
import Counter from '../components/Counter'
import './Home.css'

const slides = [
  {
    img: '/hero1.jpeg',
    subtitle: 'WELCOME TO World Passport',
    title: 'Study in Malta, Europe\'s Rising Destination',
    desc: 'Affordable EU education, English-speaking environment, global exposure, and excellent career opportunities await.',
  },
  {
    img: '/hero2.jpeg',
    subtitle: 'WELCOME TO World Passport',
    title: 'We Ensure Great Lifestyle For your family',
    desc: 'We provide a complete immigration & visa services for USA Canada & Australia for travel & education',
  },
  {
    img: '/hero3.jpeg',
    subtitle: 'WELCOME TO World Passport',
    title: 'Immigration & Visa Solutions the easy way',
    desc: 'We provide a complete immigration & visa services for USA Canada & Australia for travel & education',
  },
]

const serviceCards = [
  { img: '/service1.jpg', title: 'Career Counseling & Guidance' },
  { img: '/service2.jpg', title: 'Application Assistance' },
  { img: '/service3.jpg', title: 'University & Course Selection' },
]

const programs = [
  { icon: '🎓', title: 'Undergraduate Programs', desc: 'Start your academic journey with internationally recognized bachelor\'s degrees designed to build strong foundations and prepare you for global careers' },
  { icon: '🎓', title: 'Postgraduate Programs', desc: 'Advance your knowledge and skills through specialized master\'s degrees that open doors to leadership roles and international opportunities.' },
  { icon: '🎓', title: 'Doctoral Programs', desc: 'Start your academic journey with internationally recognized bachelor\'s degrees designed to build strong foundations and prepare you for global careers' },
  { icon: '🎓', title: 'Diploma & Foundation Courses', desc: 'Step into higher education with diploma and foundation programs that prepare you for undergraduate study abroad.' },
]

const whyItems = [
  { icon: '🌍', title: 'Global University Partnerships', desc: 'We collaborate with trusted international universities across multiple destinations, offering students globally recognized education and strong career opportunities.' },
  { icon: '📚', title: 'Personalized Student Guidance', desc: 'Our expert counselors provide tailored advice on country, course, and career choices, helping students make confident decisions for their future.' },
  { icon: '🤝', title: 'Complete End-to-End Support', desc: 'From admission and visa guidance to pre-departure and post-arrival assistance, we ensure a smooth and stress-free study abroad journey.' },
]

const testimonials = [
  { name: 'Aisha Thomas', text: '"World Passport guided me through every step of my application. From course selection to visa approval, the process was smooth and stress-free."' },
  { name: 'Rahul Menon', text: '"I am grateful to World Passport for their transparent guidance. Their counseling helped me choose the right country and course for my career aspirations."' },
  { name: 'Meera Joseph', text: '"From admission to accommodation, World Passport provided complete support. Their team ensured my transition abroad was comfortable and filled with confidence."' },
]

const faqs = [
  { q: 'Q1. How do I choose the right country for my studies?', a: 'Our expert counselors analyze your goals, interests, and budget to recommend the best country, course, and university for your future.' },
  { q: 'Q2. Does World Passport help with visa applications?', a: 'Yes, we provide complete visa guidance, including documentation, application support, and interview preparation, to ensure a smooth approval process.' },
  { q: 'Q3. Are scholarships available for international students?', a: 'Absolutely. We guide students in finding and applying for scholarships, financial aid, and loan options to make studying abroad affordable.' },
  { q: 'Q4. Will I get support after reaching my study destination?', a: 'Yes, we offer post-arrival assistance, including airport pickup, accommodation support, and cultural orientation to help you settle in easily.' },
  { q: 'Q5. Can I work part-time while studying abroad?', a: 'Most countries allow international students to work part-time during studies. Our team will guide you on rules and opportunities available.' },
  { q: 'Q6. How long has World Passport been providing services?', a: 'World Passport has years of expertise in global education consulting, supporting thousands of students in achieving successful international careers.' },
]

const blogs = [
  { title: 'Essential Pre-Departure Checklist for Students Going Abroad', excerpt: 'Preparing to study abroad is exciting, but it can feel overwhelming. A pre-departure checklist helps ensure you don\'t miss anything important.' },
  { title: 'Scholarships Every International Student Should Know About', excerpt: 'One of the biggest concerns for students is funding their education. Thankfully, many scholarships make studying abroad more accessible.' },
  { title: 'How to Choose the Right Country to Study Abroad', excerpt: 'With so many options available, selecting the right study destination can feel overwhelming. Here\'s a practical guide to help you make the best choice.' },
  { title: 'Top 5 Benefits of Studying Abroad', excerpt: 'Studying abroad is more than just a degree—it\'s a life-changing journey. It builds knowledge, skills, and confidence, while opening doors to international careers.' },
]

export default function Home() {
  const [current, setCurrent] = useState(0)
  const [openFaq, setOpenFaq] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setCurrent(c => (c + 1) % slides.length), 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <main>
      {/* ── HERO SLIDER ── */}
      <section className="hero-slider">
        {slides.map((s, i) => (
          <div key={i} className={`hero-slide ${i === current ? 'active' : ''}`}
            style={{ backgroundImage: `url(${s.img})` }}>
            <div className="hero-overlay" />
            <div className="container hero-content">
              <AnimatedSection direction="left" key={i === current ? 'a' : 'b'}>
                <span className="hero-subtitle">{s.subtitle} <span className="hero-divider"></span></span>
                <h1>{s.title}</h1>
                <p>{s.desc}</p>
                <Link to="/about" className="btn-hero">Get Started</Link>
              </AnimatedSection>
            </div>
          </div>
        ))}
        <div className="slider-dots">
          {slides.map((_, i) => (
            <button key={i} className={`dot ${i === current ? 'active' : ''}`}
              onClick={() => setCurrent(i)} aria-label={`Slide ${i + 1}`} />
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="about-section">
        <div className="container about-grid">
          <AnimatedSection direction="left">
            <div className="about-img-col">
              <img src="/student.jpg" alt="World Passport Student" className="about-img" />
              <div className="about-call-card">
                <div className="about-call-icon">📞</div>
                <div>
                  <p>Call For Consultation</p>
                  <strong>+91 92050 31277</strong>
                </div>
              </div>
              <div className="about-badge-bottom">
                <div className="about-badge-inner">
                  <span className="grad-icon">🎓</span>
                  <h5>Shaping Global Careers Through Quality Education</h5>
                  <p className="badge-sub">Creating Great opportunities</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="about-text-col">
              <span className="section-label">🎓 ABOUT OUR COMPANY</span>
              <h2>World Passport – Your Gateway to Global Careers</h2>
              <div className="about-title-divider"></div>
              <p>World Passport empowers students with trusted guidance, global university partnerships, and complete support. From course selection to settlement abroad, we ensure a smooth, transparent, and career-focused study journey.</p>
              <div className="about-features">
                <div className="about-feature-item">
                  <div className="about-feature-icon">🎫</div>
                  <span>Global university partnerships</span>
                </div>
                <div className="about-feature-item">
                  <div className="about-feature-icon">🎓</div>
                  <span>Complete student support</span>
                </div>
              </div>
              <div className="about-checklist">
                <p><span className="check">✓</span> Personalized counseling for the right course and country</p>
                <p><span className="check">✓</span> Transparent process ensuring stress-free global education journey</p>
              </div>
              <Link to="/about" className="btn-blue" style={{ marginTop: '25px' }}>Discover More</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── SERVICES (image cards) ── */}
      <section className="services-img-section">
        <div className="container">
          <AnimatedSection direction="up">
            <div className="section-title-center">
              <span className="section-label">🎓 OUR SERVICES</span>
              <h2>Comprehensive Services for Your Global Education Journey</h2>
            </div>
          </AnimatedSection>
          <div className="services-img-grid">
            {serviceCards.map((s, i) => (
              <AnimatedSection key={i} direction="up" delay={i * 120}>
                <Link to="/services" className="service-img-card">
                  <div className="service-img-wrap">
                    <img src={s.img} alt={s.title} onError={e => { e.target.style.display = 'none' }} />
                    <div className="service-img-fallback">{s.title[0]}</div>
                  </div>
                  <h5>{s.title}</h5>
                </Link>
              </AnimatedSection>
            ))}
            <AnimatedSection direction="up" delay={360}>
              <div className="service-img-card service-view-all">
                <Link to="/services" className="btn-blue">View All Services</Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── OUR COURSES / PROGRAMS ── */}
      <section className="courses-section">
        <div className="container">
          <AnimatedSection direction="up">
            <div className="section-title-center">
              <span className="section-label">🎓 OUR COURSES</span>
              <h2>Explore Global Courses for Your Future</h2>
            </div>
          </AnimatedSection>
          <div className="courses-grid">
            <div className="courses-left">
              <AnimatedSection direction="left">
                <div className="courses-review-box">
                  <div className="crb-icon">🎓</div>
                  <h5>Shaping Global Careers Through Quality Education</h5>
                  <p>Creating Great opportunities</p>
                </div>
              </AnimatedSection>
            </div>
            <div className="courses-right">
              <div className="programs-grid">
                {programs.map((p, i) => (
                  <AnimatedSection key={i} direction="right" delay={i * 100}>
                    <div className="program-item">
                      <div className="program-icon">{p.icon}</div>
                      <div>
                        <h5>{p.title}</h5>
                        <p>{p.desc}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BANNER ── */}
      <section className="stats-banner">
        <div className="container">
          <div className="stats-row">
            <Counter target={100} suffix="+" label="Partner Universities" />
            <Counter target={3} suffix="+" label="Countries" />
            <Counter target={8} suffix="+" label="Branches" />
            <Counter target={2500} suffix="+" label="Global Admissions" />
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="why-section">
        <div className="container why-grid">
          <div className="why-left">
            <AnimatedSection direction="left">
              <span className="section-label">🎓 WHY CHOOSE US</span>
              <h2>The Right Choice Abroad</h2>
              <div className="about-title-divider"></div>
            </AnimatedSection>
            {whyItems.map((w, i) => (
              <AnimatedSection key={i} direction="left" delay={i * 150}>
                <div className="why-item">
                  <div className="why-item-icon">{w.icon}</div>
                  <div>
                    <h5>{w.title}</h5>
                    <p>{w.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection direction="right">
            <div className="why-right">
              <img src="/student.jpg" alt="Why Choose Us" className="why-img" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="testimonials-section">
        <div className="container">
          <AnimatedSection direction="up">
            <div className="section-title-center">
              <span className="section-label">🎓 testimonial</span>
              <h2>Student Experiences With Us</h2>
            </div>
          </AnimatedSection>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <AnimatedSection key={i} direction="up" delay={i * 150}>
                <div className="testimonial-card">
                  <div className="t-top">
                    <span className="t-rating">Rating:</span>
                    <div className="stars">★★★★★</div>
                  </div>
                  <p>{t.text}</p>
                  <div className="t-author">
                    <div className="t-avatar">{t.name[0]}</div>
                    <div>
                      <strong>{t.name}</strong>
                      <span>Student</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="faq-section">
        <div className="container faq-grid">
          <div className="faq-left">
            <img src="/student.jpg" alt="FAQ" className="faq-img" />
          </div>
          <div className="faq-right">
            <AnimatedSection direction="right">
              <span className="section-label">✈ FREQUENTLY ASKED QUESTIONS</span>
              <h2>Questions &amp; Answer</h2>
              <div className="about-title-divider"></div>
            </AnimatedSection>
            <div className="faq-list">
              {faqs.map((f, i) => (
                <AnimatedSection key={i} direction="right" delay={i * 60}>
                  <div className={`faq-item ${openFaq === i ? 'open' : ''}`}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    <div className="faq-q">
                      <span>{f.q}</span>
                      <span className="faq-icon">{openFaq === i ? '▲' : '▼'}</span>
                    </div>
                    {openFaq === i && <p className="faq-a">{f.a}</p>}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BLOGS ── */}
      <section className="blogs-section">
        <div className="container">
          <AnimatedSection direction="up">
            <div className="section-title-center">
              <span className="section-label">🎓 Recent Blogs</span>
              <h2>Read Our Recent Articles On International Education Trends</h2>
            </div>
          </AnimatedSection>
          <div className="blogs-grid">
            {blogs.map((b, i) => (
              <AnimatedSection key={i} direction="up" delay={i * 100}>
                <div className="blog-card">
                  <div className="blog-img-placeholder"></div>
                  <div className="blog-content">
                    <h5>{b.title}</h5>
                    <p>{b.excerpt}</p>
                    <a href="#" className="blog-readmore">View More →</a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHATSAPP BUTTON ── */}
      <a href="https://api.whatsapp.com/send?phone=919205031277" target="_blank" rel="noreferrer"
        className="whatsapp-btn" aria-label="Chat on WhatsApp">
        <span className="wa-icon">💬</span>
        <span className="wa-text">Need Help? <strong>Chat with us</strong></span>
      </a>
    </main>
  )
}
