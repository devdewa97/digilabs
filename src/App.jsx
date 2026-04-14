import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import PortfolioDetail from './components/PortfolioDetail';

function App() {
  return (
    <Router>
      <div className="min-h-screen font-sans text-gray-900 bg-white selection:bg-blue-200 selection:text-blue-900">
        <Routes>
          <Route path="/portfolio/:id" element={<PortfolioDetail />} />
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