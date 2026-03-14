import { useState } from 'react'
import './App.css'

const services = [
  {
    title: 'Panel Upgrades',
    description:
      'Safe service upgrades for growing homes, EV chargers, and modern appliances.',
  },
  {
    title: 'Commercial Wiring',
    description:
      'Code-compliant build-outs, lighting plans, and preventive maintenance for businesses.',
  },
  {
    title: 'Emergency Repairs',
    description:
      'Fast diagnostics and dependable repairs for outages, shorts, and breaker issues.',
  },
]


const faqs = [
  {
    q: 'Are you licensed and insured?',
    a: 'Yes — fully licensed in the state and carrying general liability plus workers\u2019 comp on every job.',
  },
  {
    q: 'Do you offer free estimates?',
    a: 'We provide free written estimates for all residential and commercial projects. Call or fill out the form and we\u2019ll schedule a walkthrough.',
  },
  {
    q: 'How quickly can you respond to an emergency?',
    a: 'For active electrical emergencies we aim to be on site within 2\u20134 hours, depending on location and time of day.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We serve Austin, Round Rock, Cedar Park, Pflugerville, Georgetown, and surrounding communities within a 40-mile radius.',
  },
  {
    q: 'Will my project require a permit?',
    a: 'Most panel replacements and new-circuit work require permits. We handle all permit applications and coordinate city inspections on your behalf.',
  },
]


function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`faq-item${open ? ' faq-open' : ''}`}>
      <button className="faq-q" onClick={() => setOpen(!open)} aria-expanded={open}>
        {q}
        <span className="faq-chevron" aria-hidden="true">{open ? '−' : '+'}</span>
      </button>
      {open && <p className="faq-a">{a}</p>}
    </div>
  )
}

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'success' | 'error'

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate a form submission
    if (form.name && form.email && form.message) {
      setStatus('success')
      setForm({ name: '', email: '', phone: '', message: '' })
    } else {
      setStatus('error')
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <label className="form-label">
          Name *
          <input
            className="form-input"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            required
          />
        </label>
        <label className="form-label">
          Email *
          <input
            className="form-input"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="jane@example.com"
            required
          />
        </label>
      </div>
      <label className="form-label">
        Phone
        <input
          className="form-input"
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="555-0100"
        />
      </label>
      <label className="form-label">
        Message *
        <textarea
          className="form-input form-textarea"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Describe your project or issue…"
          rows={4}
          required
        />
      </label>
      <button className="form-submit" type="submit">
        Send Message
      </button>
      {status === 'success' && (
        <p className="form-feedback success">
          Message sent! We&apos;ll be in touch within one business day.
        </p>
      )}
      {status === 'error' && (
        <p className="form-feedback error">Please fill in all required fields.</p>
      )}
    </form>
  )
}

function App() {
  return (
    <div className="site-shell">
      <header className="hero">
        <nav className="topbar">
          <p className="brand">Shock Wave Electric</p>
          <div className="topbar-links">
            <a className="topbar-nav" href="#services">Services</a>
            <a className="topbar-nav" href="#faq">FAQ</a>
            <a className="topbar-link" href="#contact">Get a Quote</a>
          </div>
        </nav>

        <div className="hero-content">
          <p className="eyebrow">Licensed • Insured • Residential + Commercial</p>
          <h1>Power You Can Trust, Work You Can Verify.</h1>
          <p className="hero-copy">
            Shock Wave Electric delivers clean installations, rapid troubleshooting, and
            safety-first workmanship across every project.
          </p>
          <a className="cta" href="#services">
            Explore Services
          </a>
        </div>
      </header>

      <main>
        <section id="services" className="section">
          <h2>What We Do</h2>
          <div className="service-grid">
            {services.map((service) => (
              <article key={service.title} className="service-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section split">
          <div>
            <h2>Built for Reliability</h2>
            <p>
              From first walkthrough to final inspection, our team keeps communication clear,
              timelines realistic, and every connection up to code.
            </p>
          </div>
          <ul className="checklist">
            <li>Transparent estimates before work begins</li>
            <li>Neat, well-labeled installations</li>
            <li>Final safety checks on every job</li>
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq" className="section faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map((item) => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section contact-section">
          <div className="contact-split">
            <div className="contact-info">
              <h2>Need an Electrician?</h2>
              <p>Fill out the form and we&apos;ll get back to you within one business day — or call us directly for emergencies.</p>
              <div className="contact-details">
                <a href="https://wa.me/2347066220031" target="_blank" rel="noopener noreferrer" className="contact-detail-link contact-detail-primary">
                  <svg className="wa-icon" viewBox="0 0 32 32" aria-hidden="true">
                    <path fill="#25D366" d="M16 0C7.163 0 0 7.163 0 16c0 2.822.737 5.469 2.027 7.77L0 32l8.43-2.007A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0z"/>
                    <path fill="#fff" d="M23.3 19.914c-.32-.16-1.894-.934-2.188-1.04-.294-.107-.508-.16-.721.16-.214.32-.828 1.04-.975 1.254-.147.213-.294.24-.614.08-.32-.16-1.35-.498-2.572-1.587-.95-.848-1.592-1.895-1.778-2.215-.186-.32-.02-.493.14-.652.144-.143.32-.373.48-.56.16-.186.213-.32.32-.533.107-.214.053-.4-.027-.56-.08-.16-.72-1.734-.987-2.374-.26-.623-.524-.538-.72-.548l-.614-.01c-.213 0-.56.08-.853.4-.294.32-1.12 1.094-1.12 2.668s1.147 3.094 1.307 3.307c.16.214 2.257 3.447 5.47 4.834.764.33 1.36.527 1.824.674.766.243 1.464.209 2.016.127.615-.092 1.894-.774 2.16-1.52.267-.747.267-1.387.187-1.52-.08-.134-.294-.214-.614-.374z"/>
                  </svg>
                  2347066220031
                </a>
                <a href="mailto:hello@shockwaveelectric.com" className="contact-detail-link">✉️ hello@shockwaveelectric.com</a>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} Shock Wave Electric. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
