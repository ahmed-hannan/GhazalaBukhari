import { useEffect, useRef } from 'react';

const products = [
  { cat: 'Bridal Couture',   name: 'Barat Lehenga — Crimson & Gold',  price: 'PKR 3,50,000', bg: 'prod-img-1' },
  { cat: 'Luxury Pret',      name: 'Festive Embroidered Suit',         price: 'PKR 85,000',   bg: 'prod-img-2' },
  { cat: 'Formals',          name: 'Hand-Worked Chiffon Ensemble',     price: 'PKR 1,20,000', bg: 'prod-img-3' },
  { cat: 'Signature Series', name: 'Walima — Ivory & Blush Gown',      price: 'PKR 2,20,000', bg: 'prod-img-4' },
];

export default function Products() {
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.1 }
    );
    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="section-header">
        <p className="section-eyebrow">Crafted for the Occasion</p>
        <h2 className="section-title">New <em>Arrivals</em></h2>
        <div className="section-rule" />
      </div>

      <section className="products">
        <div className="products-grid">
          {products.map((prod, i) => (
            <div
              key={i}
              className="prod-item fade-in-up"
              ref={(el) => (itemRefs.current[i] = el)}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className={`prod-img ${prod.bg}`}>Placeholder</div>
              <div className="prod-action">
                <button className="prod-add-btn">+</button>
              </div>
              <div className="prod-info">
                <p className="prod-cat">{prod.cat}</p>
                <h4 className="prod-name">{prod.name}</h4>
                <p className="prod-price">{prod.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
