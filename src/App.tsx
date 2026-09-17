import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Services from './components/Services';
import ProblemSolver from './components/ProblemSolver';
import Portfolio from './components/Portfolio';
import Results from './components/Results';
import Process from './components/Process';
import WhySynapt from './components/WhySynapt';
import TechnologyStack from './components/TechnologyStack';
import AISection from './components/AISection';
import Testimonials from './components/Testimonials';
import Insights from './components/Insights';
import ContactForm from './components/ContactForm';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] font-sans selection:bg-white selection:text-black">
      <CustomCursor />
      <Navbar />
      
      <main>
        <Hero />
        <Marquee />
        <Services />
        <ProblemSolver />
        <Portfolio />
        <Results />
        <Process />
        <WhySynapt />
        <TechnologyStack />
        <AISection />
        <Testimonials />
        <Insights />
        <ContactForm />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
