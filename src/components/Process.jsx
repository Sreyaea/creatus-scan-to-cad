import '../styles/Process.css';

import scannerIcon from '../assets/3D_scanner.png';
import cubeIcon from '../assets/cube.png';
import cadIcon from '../assets/cube_CAD.png';

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Precision 3D Scanning',
      description:
        'Capture accurate 3D data using advanced scanning technology.',
      icon: scannerIcon
    },
    {
      number: '02',
      title: 'Point Cloud Processing',
      description:
        'Clean, align and optimise raw scan data for maximum accuracy.',
      icon: cubeIcon
    },
    {
      number: '03',
      title: 'Parametric Modelling',
      description:
        'Create editable, production-ready CAD models tailored to your requirements.',
      icon: cadIcon
    }
  ];

  return (
    <section className="process">
      <div className="process-container">
        <h2 className="process-title">
          Our 3-Step Reverse Engineering Process
        </h2>

        <div className="process-steps">
          {steps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="process-visual">
                <div className="process-step-number">{step.number}</div>
                <div className="process-icon">
                  <img src={step.icon} alt={step.title} />
                </div>
              </div>

              <h3 className="process-step-title">{step.title}</h3>

              <p className="process-step-description">{step.description}</p>

              {index < steps.length - 1 && (
                <span className="process-arrow" aria-hidden="true">→</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
