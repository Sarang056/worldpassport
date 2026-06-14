import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import './StudyAbroad.css'

const countryData = {
  malta: {
    name: 'Malta', code: 'MT', img: '/malta.jpg',
    description: [
      'Malta is an emerging destination for international students seeking high-quality education in a vibrant European setting. Known for its affordable tuition fees and English-medium programs, Malta offers globally recognized degrees in fields such as business, IT, hospitality, and the sciences.',
      'Beyond academics, Malta boasts a safe, student-friendly environment with a rich cultural heritage and scenic Mediterranean lifestyle. Students can enjoy part-time work opportunities and explore career pathways across the European Union.',
      'With its welcoming community, affordable education, and international recognition, Malta provides students with a perfect balance of learning, personal growth, and cultural exposure.',
    ],
    why: [
      { title: 'Affordable Education', desc: 'Quality degrees at lower cost than Europe.' },
      { title: 'English Advantage', desc: 'English widely spoken and used in classrooms.' },
      { title: 'Global Recognition', desc: 'Degrees accepted and valued across the world.' },
      { title: 'Safe Lifestyle', desc: 'Student-friendly, safe, and welcoming environment.' },
      { title: 'Work Opportunities', desc: 'Part-time work options during academic studies.' },
      { title: 'EU Pathways', desc: 'Career opportunities across European Union countries.' },
    ],
    faqs: [
      { q: 'Is English the medium of instruction in Malta?', a: 'Yes, English is widely spoken and used in higher education across Malta.' },
      { q: 'Can I work while studying in Malta?', a: 'Yes, international students can work part-time up to 20 hours per week during studies.' },
      { q: 'Are Maltese degrees recognized worldwide?', a: 'Yes, Maltese universities are internationally accredited and degrees are globally recognized.' },
      { q: 'How affordable is studying in Malta compared to other EU countries?', a: 'Malta offers significantly lower tuition fees compared to most EU countries while maintaining high quality.' },
      { q: 'Does World Passport provide post-arrival support in Malta?', a: 'Yes, we provide complete post-arrival support including accommodation, orientation, and settling-in assistance.' },
    ],
  },
  singapore: {
    name: 'Singapore', code: 'SG', img: '/singapore.jpg',
    description: [
      'Singapore is one of the world\'s most sought-after education hubs, known for its academic excellence, modern infrastructure, and global opportunities. As a leading Asian powerhouse, Singapore offers a unique blend of world-class education, cultural diversity, and a highly safe environment.',
      'Home to top-ranked institutions like the National University of Singapore (NUS) and Nanyang Technological University (NTU), Singapore\'s education system stands among the best globally.',
      'One of Singapore\'s biggest advantages is its strategic location and strong economic landscape. Students gain exposure to multinational companies, thriving business hubs, and internship opportunities with global brands.',
    ],
    why: [
      { title: 'Top Universities', desc: 'Globally ranked, innovative, and research-focused institutions.' },
      { title: 'Scholarship Support', desc: 'Wide range of financial aid for internationals.' },
      { title: 'Modern Lifestyle', desc: 'Blend of tradition and advanced modern living.' },
      { title: 'Global Recognition', desc: 'Degrees respected by employers around the world.' },
      { title: 'Career Growth', desc: 'Strong opportunities in technology, science, and business.' },
      { title: 'Cultural Exposure', desc: 'Unique cultural experiences with international community.' },
    ],
    faqs: [
      { q: 'What are the top universities in Singapore?', a: 'NUS, NTU, SMU, and SIT are among the top-ranked universities in Singapore.' },
      { q: 'Is Singapore expensive for students?', a: 'While living costs are moderate, scholarships and part-time work opportunities help manage expenses.' },
      { q: 'Can I work while studying in Singapore?', a: 'Yes, student pass holders can work up to 16 hours per week during term time.' },
      { q: 'Are Singapore degrees recognized globally?', a: 'Yes, Singapore\'s universities are globally accredited and highly respected by employers worldwide.' },
      { q: 'Does World Passport help with Singapore visa?', a: 'Yes, we provide complete student pass application support and documentation guidance.' },
    ],
  },
  malaysia: {
    name: 'Malaysia', code: 'MY', img: '/Malaysia.jpg',
    description: [
      'Malaysia has rapidly emerged as a top education destination in Asia, attracting thousands of international students annually. It is celebrated for its affordability, multicultural environment, and globally recognized universities.',
      'English is widely used for instruction, ensuring smooth academic adaptation. Tuition and living costs are much lower than in Western countries, while degrees hold global recognition. Many Malaysian universities also offer pathways to prestigious institutions in the UK, Australia, and beyond.',
      'With its welcoming culture, strong student support, and cost-effective education, Malaysia provides international students with excellent learning opportunities, career prospects, and a rich cultural experience.',
    ],
    why: [
      { title: 'Affordable Study', desc: 'Cost-effective tuition and low living expenses.' },
      { title: 'English Friendly', desc: 'English widely spoken in classrooms and society.' },
      { title: 'Global Degrees', desc: 'Programs recognized by universities worldwide.' },
      { title: 'Multicultural Life', desc: 'Diverse community fostering cultural exchange and learning.' },
      { title: 'University Pathways', desc: 'Transfer opportunities to UK, Australia, and beyond.' },
      { title: 'Student Support', desc: 'Strong academic and living assistance for internationals.' },
    ],
    faqs: [
      { q: 'Is studying in Malaysia cost-effective?', a: 'Yes, Malaysia offers affordable tuition and low living costs compared to many countries.' },
      { q: 'What is the teaching language in Malaysian universities?', a: 'English is the primary medium of instruction in most private and public universities.' },
      { q: 'Can I transfer from Malaysia to other universities abroad?', a: 'Yes, many Malaysian universities have twinning and transfer programs with UK and Australian institutions.' },
      { q: 'Are there work opportunities for students in Malaysia?', a: 'Yes, international students can work up to 20 hours per week during vacations.' },
      { q: 'Does World Passport provide pre-departure and post-arrival support for Malaysia?', a: 'Yes, we provide complete support from visa application to accommodation and settling in Malaysia.' },
    ],
  },
  'new-zealand': {
    name: 'New Zealand', code: 'NZ', img: '/newzealand.jpg',
    description: [
      'New Zealand is one of the world\'s most preferred study destinations, known for its high-quality education system, globally recognized universities, and exceptional student-friendly environment.',
      'New Zealand\'s universities consistently rank among the top in the world, offering a wide range of degree programs in engineering, business, IT, healthcare, tourism, agriculture, and more.',
      'New Zealand is known for its safety, welcoming culture, and quality of life. Cities like Auckland, Wellington, and Christchurch provide a perfect blend of modern amenities, natural beauty, and vibrant student communities.',
    ],
    why: [
      { title: 'Top Universities', desc: 'Globally ranked, innovative, and research-focused institutions.' },
      { title: 'Scholarship Support', desc: 'Wide range of financial aid for internationals.' },
      { title: 'Modern Lifestyle', desc: 'Blend of tradition and advanced modern living.' },
      { title: 'Global Recognition', desc: 'Degrees respected by employers around the world.' },
      { title: 'Career Growth', desc: 'Strong opportunities in technology, science, and business.' },
      { title: 'Cultural Exposure', desc: 'Unique cultural experiences with international community.' },
    ],
    faqs: [
      { q: 'Is New Zealand safe for international students?', a: 'Yes, New Zealand is consistently ranked among the safest countries in the world for students.' },
      { q: 'Can I work while studying in New Zealand?', a: 'Yes, student visa holders can work up to 20 hours per week during term time.' },
      { q: 'Are New Zealand degrees recognized globally?', a: 'Yes, New Zealand qualifications are recognized and respected worldwide.' },
      { q: 'What are the popular study fields in New Zealand?', a: 'Engineering, IT, healthcare, business, agriculture, and tourism are popular fields.' },
      { q: 'Does World Passport help with New Zealand visa?', a: 'Yes, we provide complete visa guidance, documentation support, and interview preparation.' },
    ],
  },
  mauritius: {
    name: 'Mauritius', code: 'MU', img: '/mauritius.jpg',
    description: [
      'Mauritius is fast emerging as a preferred study destination for international students seeking quality education at an affordable cost. Known for its peaceful environment, scenic beauty, and multicultural society, Mauritius offers an excellent blend of academic excellence and a high standard of living.',
      'The country hosts several internationally recognized universities and institutions offering programs in business, information technology, hospitality & tourism, engineering, medicine, finance, and more.',
      'One of the major advantages of studying in Mauritius is its affordability. Tuition fees and living expenses are significantly lower compared to Western countries. The country also provides a safe and friendly atmosphere with efficient public services and a welcoming culture.',
    ],
    why: [
      { title: 'Top Universities', desc: 'Globally ranked, innovative, and research-focused institutions.' },
      { title: 'Scholarship Support', desc: 'Wide range of financial aid for internationals.' },
      { title: 'Modern Lifestyle', desc: 'Blend of tradition and advanced modern living.' },
      { title: 'Global Recognition', desc: 'Degrees respected by employers around the world.' },
      { title: 'Career Growth', desc: 'Strong opportunities in technology, science, and business.' },
      { title: 'Cultural Exposure', desc: 'Unique cultural experiences with international community.' },
    ],
    faqs: [
      { q: 'Is Mauritius a good study destination?', a: 'Yes, Mauritius offers quality education, affordable costs, and a safe, peaceful environment.' },
      { q: 'What languages are used in Mauritius universities?', a: 'English and French are widely spoken, making it easy for international students to adapt.' },
      { q: 'Can I work while studying in Mauritius?', a: 'Yes, students can work part-time with appropriate authorization from authorities.' },
      { q: 'Are Mauritius degrees globally recognized?', a: 'Yes, many Mauritius universities are affiliated with UK and French institutions offering globally accepted qualifications.' },
      { q: 'Does World Passport provide support for Mauritius?', a: 'Yes, we provide complete support from visa processing to accommodation and post-arrival assistance.' },
    ],
  },
}

const allCountries = [
  { id: 'malta', name: 'Malta', code: 'MT' },
  { id: 'singapore', name: 'Singapore', code: 'SG' },
  { id: 'malaysia', name: 'Malaysia', code: 'MY' },
  { id: 'new-zealand', name: 'New Zealand', code: 'NZ' },
  { id: 'mauritius', name: 'Mauritius', code: 'MU' },
]

export default function CountryDetail() {
  const { countryId } = useParams()
  const navigate = useNavigate()
  const country = countryData[countryId]
  const [openFaq, setOpenFaq] = useState(0)

  if (!country) {
    return (
      <main style={{ padding: '100px 20px', textAlign: 'center' }}>
        <h2>Country not found</h2>
        <Link to="/study-abroad" className="btn-red" style={{ marginTop: '20px', display: 'inline-block' }}>
          Back to Study Abroad
        </Link>
      </main>
    )
  }

  return (
    <main>
      <PageBanner
        title={country.name}
        breadcrumb={country.name.toUpperCase()}
        bgImage="/partner-banner.jpg"
      />

      <div className="country-detail-page">
        <div className="country-detail-layout">

          {/* SIDEBAR */}
          <div className="country-sidebar">
            {allCountries.map(c => (
              <Link
                key={c.id}
                to={`/study-abroad/${c.id}`}
                className={`country-sidebar-item ${c.id === countryId ? 'active' : ''}`}
              >
                <img
                  src={`https://flagcdn.com/w80/${c.code.toLowerCase()}.png`}
                  alt={c.name}
                  className="country-sidebar-flag"
                />
                <span className="country-sidebar-name">{c.name}</span>
                <span className="sidebar-arrow">›</span>
              </Link>
            ))}
          </div>

          {/* CONTENT */}
          <div className="country-content">
            {/* Country photo */}
            <img
              src={country.img}
              alt={country.name}
              className="country-hero-img"
              onError={e => {
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'flex'
              }}
            />
            <div className="country-hero-img-placeholder" style={{ display: 'none' }}>
              🌍
            </div>

            {/* Description */}
            <div className="country-detail-body">
              <h2>Study in {country.name}</h2>
              <div className="country-detail-divider"></div>
              {country.description.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Why Choose */}
            <div className="why-choose-section">
              <h3>Why Choose {country.name}?</h3>
              <div className="why-choose-divider"></div>
              <div className="why-choose-grid">
                {country.why.map((w, i) => (
                  <div key={i} className="why-item-new">
                    <div className="why-number">{i + 1}</div>
                    <div>
                      <h5>{w.title}</h5>
                      <p>{w.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enquire button */}
            <div style={{ padding: '20px 40px 10px' }}>
              <Link to="/contact" className="country-enquire-btn">
                Enquire Now
              </Link>
            </div>

            {/* FAQ */}
            <div className="country-faq-section">
              <h3>Do you have Questions ?</h3>
              <div className="why-choose-divider"></div>
              {country.faqs.map((f, i) => (
                <div
                  key={i}
                  className={`country-faq-item ${openFaq === i ? 'open' : ''}`}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <div className="country-faq-q">
                    <span>{f.q}</span>
                    <div className="faq-toggle">{openFaq === i ? '−' : '+'}</div>
                  </div>
                  {openFaq === i && <p className="country-faq-a">{f.a}</p>}
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </main>
  )
}
