
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import DailyTools from './components/DailyTools';
import ChatComparison from './components/ChatComparison';
import UseCases from './components/UseCases';
import PortfolioMarquee from './components/PortfolioMarquee';
import PortfolioGrid from './components/PortfolioGrid';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background-dark selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <DailyTools />
        <ChatComparison />
        <UseCases />
        <PortfolioMarquee />
        <PortfolioGrid />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
