const words = [
  'Bridal Couture', 'Luxury Pret', 'Formal Wear', 'Bespoke Atelier',
  'Festive Edit', 'Hand Embroidery', 'Signature Cuts', 'Timeless Artistry',
];

export default function Marquee() {
  // Duplicate for seamless looping
  const doubled = [...words, ...words];

  return (
    <div className="marquee-strip">
      <div className="marquee-inner">
        {doubled.map((word, i) => (
          <span key={i}>
            <span className="marquee-word">{word}</span>
            <span className="marquee-sep">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
