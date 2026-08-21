import '../styles/BenefitCard.css';

export default function BenefitCard({ icon: Icon, title, description }) {
  return (
    <div className="benefit-card">
      <div className="benefit-card-icon">
        <Icon size={32} />
      </div>
      <h3 className="benefit-card-title">{title}</h3>
      <p className="benefit-card-description">{description}</p>
    </div>
  );
}
