export default function Navbar() {
  return (
    <>
      <div className="announcement">
        Complimentary alterations on all bespoke orders &nbsp;·&nbsp; Bridal Consultations Now Available — Book Your Appointment
      </div>

      <nav className="navbar">
        <ul className="nav-links left">
          {['Couture', 'Pret', 'Bridal', 'Formals'].map((item) => (
            <li key={item}><a href="#">{item}</a></li>
          ))}
        </ul>

        <a href="#" className="nav-logo">
          GB
          <span>Ghazala Bukhari</span>
        </a>

        <div className="nav-right-group">
          <ul className="nav-links">
            {['Atelier', 'Journal', 'Contact'].map((item) => (
              <li key={item}><a href="#">{item}</a></li>
            ))}
          </ul>
          <div className="nav-icons">
            <button className="nav-icon-btn" title="Search">⊕</button>
            <button className="nav-icon-btn" title="Account">☺</button>
            <button className="nav-icon-btn" title="Cart">⛒</button>
          </div>
        </div>
      </nav>
    </>
  );
}
