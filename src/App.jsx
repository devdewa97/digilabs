import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import PortfolioDetail from './components/PortfolioDetail';
import PortfolioAll from './components/PortfolioAll';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <div className="min-h-screen font-sans text-gray-900 bg-white selection:bg-blue-200 selection:text-blue-900">
        <ScrollToTop />
        <Routes>
          <Route path="/portfolio/:id" element={<PortfolioDetail />} />
          <Route path="/karya-terbaik-kami" element={<PortfolioAll />} />
          <Route path="/" element={
            <>
              <Navbar />
              <main>
                <Hero />
                <Services />
                <Portfolio />
                <Testimonials />
                <Pricing />
                <CallToAction />
              </main>
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;