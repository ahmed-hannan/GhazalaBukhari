import { useState, useEffect } from 'react';

const slides = [
  { bg: 'hero-bg-1', label: 'Placeholder Image' },
  { bg: 'hero-bg-2', label: 'Placeholder Image' },
  { bg: 'hero-bg-3', label: 'Placeholder Image' },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero">
      {slides.map((slide, i) => (
        <div key={i} className={`hero-slide${i === current ? ' active' : ''}`}>
          <div className={`hero-bg ${slide.bg}`}>
            <span className="hero-bg-label">{slide.label}</span>
          </div>
        </div>
      ))}

      <div className="hero-overlay" />

      <div className="hero-content">
        <p className="hero-eyebrow">New Collection — 2025</p>
        <h1 className="hero-title">
          Art, Elegance &<br /><em>Timeless</em> Allure
        </h1>
        <p className="hero-sub">
          Design aesthetics with wit and artistry — Ghazala Bukhari crafts each
          piece for the woman who lives with intention and dresses with soul.
        </p>
        <div className="hero-buttons">
          <a href="#" className="btn-gold">Explore Collection</a>
          <a href="#" className="btn-outline">Book a Consultation</a>
        </div>
      </div>

      <div className="hero-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero-dot${i === current ? ' active' : ''}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>

      <div className="scroll-cue">Scroll</div>
    </section>
  );
}
