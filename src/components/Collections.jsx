import { useEffect, useRef } from 'react';

const collections = [
  { tag: 'Bridal 2025',      name: 'The Barat &\nNikah Edit',          cta: 'Discover Now →' },
  { tag: 'Luxury Pret',      name: 'Festive Formals',                   cta: 'Shop Now →' },
  { tag: 'Signature Series', name: 'Hand-Worked\nEmbroidery',           cta: 'Explore →' },
  { tag: 'Bespoke Couture',  name: 'The Atelier Collection',            cta: 'Book a Consultation →' },
];

export default function Collections() {
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
    <>
      <div className="section-header">
        <p className="section-eyebrow">Curated with Purpose</p>
        <h2 className="section-title">The GB <em>Collections</em></h2>
        <div className="section-rule" />
      </div>

      <section className="collections">
        <div className="collections-grid">
          {collections.map((col, i) => (
            <div
              key={i}
              className="col-item fade-in-up"
              ref={(el) => (itemRefs.current[i] = el)}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="col-img-placeholder">Placeholder</div>
              <div className="col-overlay" />
              <div className="col-caption">
                <p className="col-tag">{col.tag}</p>
                <h3 className="col-name">{col.name}</h3>
                <a href="#" className="col-cta">{col.cta}</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
