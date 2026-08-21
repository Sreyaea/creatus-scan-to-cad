import '../styles/TrustBar.css';

export default function TrustBar() {
  const software = [
    { name: 'Autodesk Inventor', logo: '/src/assets/autodesk_inventor.png' },
    { name: 'SolidWorks', logo: '/src/assets/solidworks.png' },
    { name: 'Autodesk Fusion 360', logo: '/src/assets/autodesk_fusion_360.png' },
    { name: 'Siemens Solid Edge', logo: '/src/assets/siemens_solid_edge.png' },
    { name: 'Geomagic', logo: '/src/assets/geomagic.png' },
    { name: 'PTC', logo: '/src/assets/ptc.png' }
  ];

  return (
    <section className="trust-bar">
      <div className="trust-bar-container">
        <h3 className="trust-bar-heading">
          Trusted by Industry. Powered by Leading Software.
        </h3>
        <div className="trust-bar-logos">
          <div className="trust-bar-track">
            <div className="trust-bar-group">
              {software.map((item) => (
                <div key={item.name} className="trust-bar-logo">
                  <img src={item.logo} alt={item.name} />
                </div>
              ))}
            </div>
            <div className="trust-bar-group" aria-hidden="true">
              {software.map((item) => (
                <div key={`${item.name}-duplicate`} className="trust-bar-logo">
                  <img src={item.logo} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
