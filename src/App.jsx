import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import ContactCTA from './components/ContactCTA';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Top navigation */}
      <header className="sticky top-0 z-40 border-b border-white/10 backdrop-blur bg-neutral-950/70">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-block h-6 w-6 rounded-md bg-gradient-to-br from-violet-500 to-sky-400" />
            <span className="font-semibold tracking-tight">Flames AI Agency</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a className="hover:text-white" href="#services">Services</a>
            <a className="hover:text-white" href="#work">Work</a>
            <a className="hover:text-white" href="#contact">Contact</a>
            <a
              href="#contact"
              className="ml-2 inline-flex items-center justify-center rounded-md bg-violet-500 hover:bg-violet-400 transition-colors text-white px-4 py-2 font-medium"
            >
              Get started
            </a>
          </nav>
        </div>
      </header>

      {/* Sections */}
      <main>
        <Hero />
        <Services />
        <CaseStudies />
        <ContactCTA />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <div className="flex items-center gap-2">
            <span className="inline-block h-5 w-5 rounded-md bg-gradient-to-br from-violet-500 to-sky-400" />
            <span>© {new Date().getFullYear()} Flames AI Agency. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-5">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
