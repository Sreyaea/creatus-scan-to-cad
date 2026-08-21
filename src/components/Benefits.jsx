import { FileText, Clock, Shield } from 'lucide-react';
import BenefitCard from './BenefitCard';
import '../styles/Benefits.css';

export default function Benefits() {
  const benefits = [
    {
      icon: FileText,
      title: "Stop Struggling with 'Dumb' Files",
      description: 'Transform scan data into fully editable, parametric CAD models you can use with confidence.'
    },
    {
      icon: Clock,
      title: 'Eliminate Downtime from Missing Prints',
      description: 'Recreate critical parts quickly and keep your operations running smoothly.'
    },
    {
      icon: Shield,
      title: 'Zero-Fitment Risk',
      description: 'High-accuracy models ensure perfect fit, function and performance every time.'
    }
  ];

  return (
    <section className="benefits">
      <div className="benefits-container">
        <h2 className="benefits-title">
          Tailored 3D Solutions for Your Complex Engineering Challenges
        </h2>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
