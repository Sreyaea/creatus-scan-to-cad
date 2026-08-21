import '../styles/CTASection.css';

export default function CTASection() {
  const scrollToForm = () => {
    const form = document.getElementById('enquiry-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="cta-section">
      <div className="cta-section-container">
        <div className="cta-section-content">
          <h2 className="cta-section-heading">Ready to Start Your Project?</h2>
          <p className="cta-section-main">Get a Rapid Quote Today</p>
          <p className="cta-section-supporting">
            Send us your part, scan or project requirements and our engineering team will get back to you.
          </p>
          <button className="cta-section-button" onClick={scrollToForm}>
            REQUEST A QUOTE →
          </button>
        </div>
      </div>
    </section>
  );
}
