import { Mail, Phone } from 'lucide-react';
import logo from '../assets/logo.png';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <img src={logo} alt="Creatus Technologies" className="footer-logo" />
          </div>

          <div className="footer-section footer-contact">
            <ul className="footer-list">
              <li>
                <a href="tel:+919876543210">
                  <Phone size={16} aria-hidden="true" />
                  <span>+91 98765 43210</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@creatustechnologies.com.au">
                  <Mail size={16} aria-hidden="true" />
                  <span>info@creatustechnologies.com.au</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Creatus Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
