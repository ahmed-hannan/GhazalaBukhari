import { useEffect, useRef, useState } from 'react';

/* ── LOOKBOOK ── */
export function Lookbook() {
  return (
    <section className="lookbook">
      <div className="lookbook-bg" />
      <div className="lookbook-overlay" />
      <div className="lookbook-content">
        <p className="section-eyebrow">GB Lookbook 2025</p>
        <h2>Dressed in <em>Intention</em></h2>
        <a href="#" className="btn-gold">View Full Lookbook →</a>
      </div>
      <span className="lookbook-placeholder-label">Placeholder Image</span>
    </section>
  );
}

/* ── TESTIMONIALS ── */
const testimonials = [
  {
    quote: 'Ghazala Bukhari has an extraordinary eye for detail. My bridal lehenga was everything I envisioned and more — structured, soulful, and completely one of a kind.',
    author: 'Maryam A., Lahore',
  },
  {
    quote: 'The GB atelier understood my aesthetic from the very first consultation. The craftsmanship on my Walima outfit was truly exceptional — I received compliments all evening.',
    author: 'Nida S., Karachi',
  },
  {
    quote: 'Every stitch reflected a design philosophy that is rare to find. GB pieces carry a signature elegance that you simply cannot replicate off the rack.',
    author: 'Sana R., Islamabad',
  },
];

export function Testimonials() {
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.12 }
    );
    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="testimonials">
      <div className="section-header">
        <p className="section-eyebrow">Our Patrons</p>
        <h2 className="section-title">Worn with <em>Love</em></h2>
        <div className="section-rule" />
      </div>
      <div className="testimonial-grid">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="testimonial fade-in-up"
            ref={(el) => (itemRefs.current[i] = el)}
            style={{ transitionDelay: `${i * 0.12}s` }}
          >
            <p>{t.quote}</p>
            <p className="testimonial-author">— {t.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── NEWSLETTER ── */
export function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="newsletter">
      <p className="section-eyebrow">Stay in the World of GB</p>
      <h2>The Ghazala Bukhari Journal</h2>
      <p>
        Be the first to receive new collection previews, atelier invitations,
        and exclusive styling notes from the GB studio.
      </p>
      {submitted ? (
        <p style={{ fontFamily: "'Cinzel', serif", fontSize: '.7rem', letterSpacing: '.2em', color: 'var(--gold)' }}>
          THANK YOU — YOU'RE ON THE LIST
        </p>
      ) : (
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            className="newsletter-input"
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="newsletter-submit">Subscribe</button>
        </form>
      )}
    </section>
  );
}

/* ── FOOTER ── */
const footerLinks = {
  Collections:       ['Bridal Couture', 'Luxury Pret', 'Formal Wear', 'Festive Edit', 'Bespoke Orders'],
  'The Studio':      ['About GB', 'Design Philosophy', 'Atelier', 'Press & Features', 'Journal'],
  'Client Services': ['Contact Us', 'Book a Consultation', 'Care Instructions', 'Shipping & Returns', 'Size Guide'],
};

export function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <a href="#" className="nav-logo">
            GB
            <span>Ghazala Bukhari</span>
          </a>
          <p className="footer-brand-desc">
            Art, elegance, and design aesthetics with allure, wit, and artistry —
            crafted for the timeless audience.
          </p>
          <div className="footer-social">
            {[
              { label: 'ig', href: 'https://www.instagram.com/gb.ghazalabukhari' },
              { label: 'fb', href: 'https://www.facebook.com/GB.GhazalaBukhari' },
              { label: 'pi', href: 'https://pinterest.com/gbukhari' },
              { label: 'yt', href: '#' },
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer">{s.label}</a>
            ))}
          </div>
        </div>

        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading} className="footer-col">
            <h4>{heading}</h4>
            <ul>
              {links.map((link) => (
                <li key={link}><a href="#">{link}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <p>© 2025 Ghazala Bukhari Studio. All rights reserved.</p>
        <div className="footer-bottom-links">
          {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((l) => (
            <a key={l} href="#">{l}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
