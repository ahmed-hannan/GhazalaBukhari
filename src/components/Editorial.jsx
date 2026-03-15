import { useEffect, useRef } from 'react';

export default function Editorial() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) ref.current?.classList.add('visible'); },
      { threshold: 0.12 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="editorial">
      <div className="editorial-img">
        <span className="editorial-img-label">Placeholder Image</span>
      </div>
      <div className="editorial-text fade-in-up" ref={ref}>
        <p className="section-eyebrow">The GB Studio</p>
        <h2>Design as an Act<br />of <em>Artistry</em></h2>
        <p>
          Ghazala Bukhari's work is rooted in a singular belief — that clothing
          is the intersection of art and identity. Each piece is conceived with
          allure, shaped with wit, and finished with the kind of precision that
          only a truly timeless atelier can offer.
        </p>
        <a href="#" className="btn-gold">Discover Our Story →</a>
      </div>
    </section>
  );
}
