import '../styles/FileFormats.css';
import solidWorksLogo from '../assets/solid_works.png';
import inventorLogo from '../assets/autodesk_inventor.png';
import solidEdgeLogo from '../assets/siemens_solid_edge.png';
import stepLogo from '../assets/step.png';
import igesLogo from '../assets/iges.png';
import parasolidLogo from '../assets/parasolid.png';

export default function FileFormats() {
  const formats = [
    { name: 'SolidWorks', type: 'logo', logo: solidWorksLogo },
    { name: 'Autodesk Inventor', type: 'logo', logo: inventorLogo },
    { name: 'Solid Edge', type: 'logo', logo: solidEdgeLogo },
    { name: 'STEP', type: 'logo', logo: stepLogo },
    { name: 'IGES', type: 'logo', logo: igesLogo },
    { name: 'Parasolid', type: 'logo', logo: parasolidLogo }
  ];

  return (
    <section className="file-formats">
      <div className="file-formats-container">
        <h2 className="file-formats-title">
          Native Files for Your Existing Workflow
        </h2>
        <div className="file-formats-grid">
          {formats.map((format, index) => (
            <div key={index} className={`file-format-pill file-format-${format.type}`}>
              {format.type === 'logo' ? (
                <img src={format.logo} alt={format.name} />
              ) : (
                format.name
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
