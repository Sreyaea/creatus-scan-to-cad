import '../styles/IndustryCard.css';

export default function IndustryCard({ icon: Icon, title, description }) {
  return (
    <div className="industry-card">
      <div className="industry-card-icon">
        <Icon size={40} />
      </div>
      <h3 className="industry-card-title">{title}</h3>
      <p className="industry-card-description">{description}</p>
    </div>
  );
}
