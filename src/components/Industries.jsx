import { Pickaxe, Plane, Factory, Building2 } from 'lucide-react';
import IndustryCard from './IndustryCard';
import '../styles/Industries.css';

export default function Industries() {
  const industries = [
    {
      icon: Pickaxe,
      title: 'Mining & Heavy Industry',
      description: 'Recreate wear components, equipment parts and assemblies to minimise downtime and maximise productivity.'
    },
    {
      icon: Plane,
      title: 'Automotive & Aerospace',
      description: 'High-precision models for prototypes, legacy parts, tooling and performance-critical components.'
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      description: 'Improve product development, quality control and manufacturing with accurate 3D data.'
    },
    {
      icon: Building2,
      title: 'Architecture & Heritage',
      description: 'Digitise structures and heritage assets for preservation, restoration and documentation.'
    }
  ];

  return (
    <section className="industries">
      <div className="industries-container">
        <h2 className="industries-title">
          Comprehensive Scan-to-CAD Workflows for Every Industry
        </h2>
        <div className="industries-grid">
          {industries.map((industry, index) => (
            <IndustryCard
              key={index}
              icon={industry.icon}
              title={industry.title}
              description={industry.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
