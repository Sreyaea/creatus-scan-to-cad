import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import MainContent from './components/MainContent';
import Benefits from './components/Benefits';
import Industries from './components/Industries';
import Process from './components/Process';
import FileFormats from './components/FileFormats';
import EnquiryForm from './components/EnquiryForm';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import './styles/index.css';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <TrustBar />
      <main className="page-body">
        <div className="page-body-container">
          <div className="page-content-column">
            <MainContent />
            <Benefits />
            <Industries />
            <Process />
            <FileFormats />
          </div>
          <aside className="page-form-column">
            <EnquiryForm />
          </aside>
        </div>
      </main>
      <CTASection />
      <Footer />
    </>
  );
}

export default App;
