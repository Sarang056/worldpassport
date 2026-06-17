import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import AnimatedSection from '../components/AnimatedSection'
import PageBanner from '../components/PageBanner'
import './CountryDetail.css'

const countryData = {
  malta: {
    name: 'Malta', code: 'MT',
    img: '/malta.jpg', img2: '/malta2.jpg',
    accent: '#C8963E',        // warm amber — Mediterranean gold
    dark:   '#2C1A06',
    light:  '#FDF6EC',
    tag: 'Europe · Mediterranean',
    description: [
      'Malta is an emerging destination for international students seeking high-quality education in a vibrant European setting. Known for its affordable tuition fees and English-medium programs, Malta offers globally recognized degrees in fields such as business, IT, hospitality, and the sciences.',
      'Beyond academics, Malta boasts a safe, student-friendly environment with a rich cultural heritage and scenic Mediterranean lifestyle. Students can enjoy part-time work opportunities and explore career pathways across the European Union.',
    ],
    why: [
      { icon: '💶', title: 'Affordable Education', desc: 'Quality degrees at significantly lower cost than most of Europe.' },
      { icon: '🇬🇧', title: 'English Advantage', desc: 'English widely spoken and used in all classrooms.' },
      { icon: '🌍', title: 'Global Recognition', desc: 'Degrees accepted and valued across the world.' },
      { icon: '🏖', title: 'Safe Lifestyle', desc: 'Student-friendly, safe, and welcoming Mediterranean environment.' },
      { icon: '💼', title: 'Work Opportunities', desc: 'Part-time work options during academic studies.' },
      { icon: '🇪🇺', title: 'EU Pathways', desc: 'Career opportunities across all European Union countries.' },
    ],
    faqs: [
      { q: 'Is English the medium of instruction in Malta?', a: 'Yes, English is widely spoken and used in higher education across Malta.' },
      { q: 'Can I work while studying in Malta?', a: 'Yes, international students can work part-time up to 20 hours per week during studies.' },
      { q: 'Are Maltese degrees recognized worldwide?', a: 'Yes, Maltese universities are internationally accredited and globally recognized.' },
      { q: 'How affordable is studying in Malta compared to other EU countries?', a: 'Malta offers significantly lower tuition fees while maintaining high quality standards.' },
      { q: 'Does World Passport provide post-arrival support in Malta?', a: 'Yes, we provide complete post-arrival support including accommodation and orientation.' },
    ],
  },
  singapore: {
    name: 'Singapore', code: 'SG',
    img: '/singapore.jpg', img2: '/singapore2.jpg',
    accent: '#E8522A',        // vibrant coral-red — Singapore flag
    dark:   '#1A0A06',
    light:  '#FFF4F0',
    tag: 'Asia · City-State',
    description: [
      'Singapore is one of the world\'s most sought-after education hubs, known for its academic excellence, modern infrastructure, and global opportunities. As a leading Asian powerhouse, Singapore offers a unique blend of world-class education, cultural diversity, and a highly safe environment.',
      'Home to top-ranked institutions like NUS and NTU, Singapore\'s education system stands among the best globally, with strong ties to multinational companies and thriving internship ecosystems.',
    ],
    why: [
      { icon: '🏛', title: 'Top Universities', desc: 'NUS & NTU rank among the top 15 globally.' },
      { icon: '🎓', title: 'Scholarship Support', desc: 'Wide range of financial aid for international students.' },
      { icon: '🌆', title: 'Modern Lifestyle', desc: 'Blend of tradition and cutting-edge modern living.' },
      { icon: '🌍', title: 'Global Recognition', desc: 'Degrees respected by employers around the world.' },
      { icon: '💻', title: 'Career Growth', desc: 'Strong opportunities in tech, science, and finance.' },
      { icon: '🎭', title: 'Cultural Exposure', desc: 'Unique multicultural experiences in a cosmopolitan city.' },
    ],
    faqs: [
      { q: 'What are the top universities in Singapore?', a: 'NUS, NTU, SMU, and SIT are among the top-ranked universities.' },
      { q: 'Is Singapore expensive for students?', a: 'While living costs are moderate, scholarships and part-time work help manage expenses.' },
      { q: 'Can I work while studying in Singapore?', a: 'Yes, student pass holders can work up to 16 hours per week during term time.' },
      { q: 'Are Singapore degrees recognized globally?', a: 'Yes, Singapore\'s universities are globally accredited and highly respected worldwide.' },
      { q: 'Does World Passport help with Singapore visa?', a: 'Yes, we provide complete student pass application and documentation support.' },
    ],
  },
  malaysia: {
    name: 'Malaysia', code: 'MY',
    img: '/Malaysia.jpg', img2: '/malaysia2.jpg',
    accent: '#2E7D32',        // deep forest green — Malaysian jungle
    dark:   '#051A06',
    light:  '#F0FBF0',
    tag: 'Asia · Southeast',
    description: [
      'Malaysia has rapidly emerged as a top education destination in Asia, attracting thousands of international students annually. It is celebrated for its affordability, multicultural environment, and globally recognized universities.',
      'English is widely used for instruction. Tuition and living costs are much lower than in Western countries, while degrees hold global recognition. Many Malaysian universities also offer pathways to prestigious institutions in the UK, Australia, and beyond.',
    ],
    why: [
      { icon: '💰', title: 'Affordable Study', desc: 'Cost-effective tuition and low living expenses.' },
      { icon: '🇬🇧', title: 'English Friendly', desc: 'English widely spoken in classrooms and society.' },
      { icon: '📜', title: 'Global Degrees', desc: 'Programs recognized by universities worldwide.' },
      { icon: '🌏', title: 'Multicultural Life', desc: 'Diverse community fostering cultural exchange.' },
      { icon: '🔗', title: 'University Pathways', desc: 'Transfer opportunities to UK, Australia and beyond.' },
      { icon: '🤝', title: 'Student Support', desc: 'Strong academic and living assistance for internationals.' },
    ],
    faqs: [
      { q: 'Is studying in Malaysia cost-effective?', a: 'Yes, Malaysia offers affordable tuition and low living costs.' },
      { q: 'What is the teaching language in Malaysian universities?', a: 'English is the primary medium of instruction in most universities.' },
      { q: 'Can I transfer from Malaysia to other universities abroad?', a: 'Yes, many universities have twinning programs with UK and Australian institutions.' },
      { q: 'Are there work opportunities for students in Malaysia?', a: 'Yes, international students can work up to 20 hours per week during vacations.' },
      { q: 'Does World Passport provide support for Malaysia?', a: 'Yes, from visa application to accommodation and settling in Malaysia.' },
    ],
  },
  'new-zealand': {
    name: 'New Zealand', code: 'NZ',
    img: '/newzealand.jpg', img2: '/newzealand2.jpg',
    accent: '#1565C0',        // deep ocean blue — NZ landscape
    dark:   '#04111A',
    light:  '#EEF4FF',
    tag: 'Pacific · Oceania',
    description: [
      'New Zealand is one of the world\'s most preferred study destinations, known for its high-quality education system, globally recognized universities, and exceptional student-friendly environment.',
      'Cities like Auckland, Wellington, and Christchurch provide a perfect blend of modern amenities, natural beauty, and vibrant student communities with world-class research and post-study work rights.',
    ],
    why: [
      { icon: '🏛', title: 'Top Universities', desc: 'Globally ranked, innovative, and research-focused institutions.' },
      { icon: '🎓', title: 'Scholarship Support', desc: 'Wide range of financial aid for international students.' },
      { icon: '🏔', title: 'Stunning Lifestyle', desc: 'Natural beauty combined with modern city living.' },
      { icon: '🌍', title: 'Global Recognition', desc: 'Degrees respected by employers worldwide.' },
      { icon: '💼', title: 'Post-Study Work', desc: 'Strong post-study work visa options for graduates.' },
      { icon: '🌿', title: 'Safe Environment', desc: 'Consistently ranked among the safest countries globally.' },
    ],
    faqs: [
      { q: 'Is New Zealand safe for international students?', a: 'Yes, New Zealand is consistently ranked among the safest countries in the world.' },
      { q: 'Can I work while studying in New Zealand?', a: 'Yes, student visa holders can work up to 20 hours per week during term time.' },
      { q: 'Are New Zealand degrees recognized globally?', a: 'Yes, New Zealand qualifications are recognized and respected worldwide.' },
      { q: 'What are the popular study fields in New Zealand?', a: 'Engineering, IT, healthcare, business, agriculture, and tourism are popular.' },
      { q: 'Does World Passport help with New Zealand visa?', a: 'Yes, we provide complete visa guidance and documentation support.' },
    ],
  },
  mauritius: {
    name: 'Mauritius', code: 'MU',
    img: '/mauritius.jpg', img2: '/mauritius2.jpg',
    accent: '#00838F',        // tropical teal — Mauritius ocean
    dark:   '#001A1C',
    light:  '#E8F9FA',
    tag: 'Africa · Indian Ocean',
    description: [
      'Mauritius is fast emerging as a preferred study destination for international students seeking quality education at an affordable cost. Known for its peaceful environment, scenic beauty, and multicultural society, Mauritius offers an excellent blend of academic excellence and high standard of living.',
      'The country hosts several internationally recognized universities offering programs in business, IT, hospitality, engineering, medicine, and finance at significantly lower costs than Western countries.',
    ],
    why: [
      { icon: '🌊', title: 'Stunning Setting', desc: 'Study in paradise — one of the world\'s most beautiful islands.' },
      { icon: '💰', title: 'Very Affordable', desc: 'Tuition and living costs far lower than Western countries.' },
      { icon: '🌍', title: 'Global Recognition', desc: 'Many universities affiliated with UK & French institutions.' },
      { icon: '🔒', title: 'Safe & Peaceful', desc: 'Extremely safe, stable, and welcoming environment.' },
      { icon: '🌐', title: 'Multilingual', desc: 'English and French instruction — great for language skills.' },
      { icon: '🤝', title: 'Full Support', desc: 'World Passport provides complete pre and post-arrival help.' },
    ],
    faqs: [
      { q: 'Is Mauritius a good study destination?', a: 'Yes, Mauritius offers quality education, affordable costs, and a safe, peaceful environment.' },
      { q: 'What languages are used in Mauritius universities?', a: 'English and French are widely spoken, making it easy for international students to adapt.' },
      { q: 'Can I work while studying in Mauritius?', a: 'Yes, students can work part-time with appropriate authorization.' },
      { q: 'Are Mauritius degrees globally recognized?', a: 'Yes, many universities are affiliated with UK and French institutions.' },
      { q: 'Does World Passport provide support for Mauritius?', a: 'Yes, complete support from visa processing to post-arrival assistance.' },
    ],
  },
}

const allCountries = [
  { id: 'malta',       name: 'Malta',       code: 'MT' },
  { id: 'singapore',   name: 'Singapore',   code: 'SG' },
  { id: 'malaysia',    name: 'Malaysia',    code: 'MY' },
  { id: 'new-zealand', name: 'New Zealand', code: 'NZ' },
  { id: 'mauritius',   name: 'Mauritius',   code: 'MU' },
]

export default function CountryDetail() {
  const { countryId } = useParams()
  const navigate = useNavigate()
  const [openFaq, setOpenFaq] = useState(0)
  const [visible, setVisible] = useState(false)

  const country = countryData[countryId]

  useEffect(() => {
    setVisible(false)
    const t = setTimeout(() => setVisible(true), 80)
    return () => clearTimeout(t)
  }, [countryId])

  if (!country) {
    return (
      <main style={{ padding: '100px 20px', textAlign: 'center' }}>
        <h2>Country not found</h2>
        <Link to="/study-abroad" style={{ marginTop: '20px', display: 'inline-block' }}>← Back</Link>
      </main>
    )
  }

  const css = {
    '--accent': country.accent,
    '--cdark':  country.dark,
    '--clight': country.light,
  }

  return (
    <main className="cd-page" style={css}>
      <PageBanner title={country.name} breadcrumb={country.name.toUpperCase()} />

      {/* ── HERO SPLIT: image left + intro right ── */}
      <section className="cd-hero">
        <div className={`cd-hero-img-wrap${visible ? ' cd-in' : ''}`}>
          <img src={country.img} alt={country.name}
            onError={e => { e.target.src = '/hero1.jpeg' }} />
          <div className="cd-flag-badge">
            <img src={`https://flagcdn.com/w80/${country.code.toLowerCase()}.png`} alt={country.name} />
          </div>
        </div>

        <div className={`cd-hero-info${visible ? ' cd-in' : ''}`} style={{ '--cd': '120ms' }}>
          <span className="cd-tag">{country.tag}</span>
          <h2 className="cd-hero-title">Study in<br /><strong>{country.name}</strong></h2>
          {country.description.map((p, i) => <p key={i}>{p}</p>)}
          <Link to="/contact" className="cd-enquire-btn">Enquire Now →</Link>
        </div>
      </section>

      {/* ── COUNTRY NAV STRIP ── */}
      <div className="cd-country-nav">
        {allCountries.map(c => (
          <Link
            key={c.id}
            to={`/study-abroad/${c.id}`}
            className={`cd-nav-item${c.id === countryId ? ' active' : ''}`}
          >
            <img src={`https://flagcdn.com/w40/${c.code.toLowerCase()}.png`} alt={c.name} />
            <span>{c.name}</span>
          </Link>
        ))}
      </div>

      {/* ── SECOND IMAGE + WHY CHOOSE ── */}
      <section className="cd-why-section">
        <AnimatedSection direction="left">
          <div className="cd-why-img">
            <img src={country.img2} alt={`${country.name} lifestyle`}
              onError={e => { e.target.src = country.img }} />
          </div>
        </AnimatedSection>

        <div className="cd-why-content">
          <AnimatedSection direction="right">
            <span className="cd-eyebrow">why choose</span>
            <h3 className="cd-why-title">Why Study in<br /><strong>{country.name}?</strong></h3>
            <div className="cd-why-grid">
              {country.why.map((w, i) => (
                <AnimatedSection key={i} direction="up" delay={i * 60}>
                  <div className="cd-why-card">
                    <span className="cd-why-icon">{w.icon}</span>
                    <div>
                      <h5>{w.title}</h5>
                      <p>{w.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="cd-faq-section">
        <div className="cd-faq-inner">
          <AnimatedSection direction="up">
            <span className="cd-eyebrow">faq</span>
            <h3 className="cd-faq-title">Common Questions</h3>
          </AnimatedSection>
          <div className="cd-faq-list">
            {country.faqs.map((f, i) => (
              <AnimatedSection key={i} direction="up" delay={i * 50}>
                <div
                  className={`cd-faq-item${openFaq === i ? ' open' : ''}`}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <div className="cd-faq-q">
                    <span>{f.q}</span>
                    <button>{openFaq === i ? '−' : '+'}</button>
                  </div>
                  {openFaq === i && <p className="cd-faq-a">{f.a}</p>}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="cd-cta">
        <AnimatedSection direction="up">
          <p className="cd-cta-sub">Ready to take the next step?</p>
          <h3 className="cd-cta-title">Start your journey to <strong>{country.name}</strong> today</h3>
          <div className="cd-cta-btns">
            <Link to="/contact" className="cd-btn-primary">Book Free Counseling →</Link>
            <Link to="/study-abroad" className="cd-btn-outline">Explore Other Destinations</Link>
          </div>
        </AnimatedSection>
      </section>

    </main>
  )
}
