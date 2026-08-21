import heroImage from '../assets/hero-scan-cad.png';
import '../styles/Hero.css';

export default function Hero() {
  const scrollToForm = () => {
    const form = document.getElementById('enquiry-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-eyebrow">3D SCAN TO CAD & REVERSE ENGINEERING</div>
          <h1 className="hero-headline">
            Convert Physical Parts to Production-Ready CAD Models
          </h1>
          <p className="hero-subtext">
            High-accuracy reverse engineering for manufacturing, mining and automotive. Get STL to STEP/IGES conversion with guaranteed accuracy.
          </p>
          <button className="hero-cta" onClick={scrollToForm}>
            REQUEST A QUOTE →
          </button>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="3D scanning to CAD conversion process" />
        </div>
      </div>
    </section>
  );
}
