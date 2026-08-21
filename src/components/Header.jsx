import { ArrowRight, Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';
import logo from '../assets/logo.png';
import '../styles/Header.css';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToForm = () => {
    const form = document.getElementById('enquiry-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <img src={logo} alt="Creatus Technologies" />
        </div>

        {/* Desktop menu */}
        <div className="header-desktop">
          <a href="tel:+919876543210" className="header-phone">
            <Phone size={18} aria-hidden="true" />
            +91 98765 43210
          </a>
          <button className="header-cta" onClick={scrollToForm}>
            Request a Quote
            <ArrowRight size={18} aria-hidden="true" />
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="header-mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="header-mobile-menu">
            <a href="tel:+919876543210" className="header-mobile-link">
              +91 98765 43210
            </a>
            <button className="header-cta" onClick={scrollToForm}>
              Request a Quote
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
