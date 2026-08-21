import '../styles/TrustBar.css';
import autodeskInventor from '../assets/autodesk_inventor.png';
import solidworks from '../assets/solidworks.png';
import fusion360 from '../assets/autodesk_fusion_360.png';
import solidEdge from '../assets/siemens_solid_edge.png';
import geomagic from '../assets/geomagic.png';
import ptc from '../assets/ptc.png';

export default function TrustBar() {
  const software = [
    { name: 'Autodesk Inventor', logo: autodeskInventor },
    { name: 'SolidWorks', logo: solidworks },
    { name: 'Autodesk Fusion 360', logo: fusion360 },
    { name: 'Siemens Solid Edge', logo: solidEdge },
    { name: 'Geomagic', logo: geomagic },
    { name: 'PTC', logo: ptc }
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
