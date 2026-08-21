import '../styles/FileFormats.css';

export default function FileFormats() {
  const formats = [
    { name: 'SolidWorks', type: 'logo', logo: '/src/assets/solid_works.png' },
    { name: 'Autodesk Inventor', type: 'logo', logo: '/src/assets/autodesk_inventor.png' },
    { name: 'Solid Edge', type: 'logo', logo: '/src/assets/siemens_solid_edge.png' },
    { name: 'STEP', type: 'logo', logo: '/src/assets/step.png' },
    { name: 'IGES', type: 'logo', logo: '/src/assets/iges.png' },
    { name: 'Parasolid', type: 'logo', logo: '/src/assets/parasolid.png' }
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
