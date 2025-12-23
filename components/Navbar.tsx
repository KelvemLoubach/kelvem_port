
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <span className="font-display font-bold text-xl tracking-wider text-white">
              KELVEM<span className="text-primary">.DEV</span>
            </span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a className="text-sm font-medium text-gray-300 hover:text-primary transition-colors" href="#sobre">Sobre</a>
            <a className="text-sm font-medium text-gray-300 hover:text-primary transition-colors" href="#skills">Especialidades</a>
            <a className="text-sm font-medium text-gray-300 hover:text-primary transition-colors" href="#portfolio">Portfolio</a>
            <a className="text-sm font-medium text-gray-300 hover:text-primary transition-colors" href="#contato">Contato</a>
          </div>

          <div className="flex items-center gap-4">
            <a 
              className="bg-primary hover:bg-primary-hover text-white px-5 py-2 rounded-full text-sm font-medium transition-all shadow-lg shadow-primary/20 hidden sm:block" 
              href="https://wa.me/5533999493748" 
              target="_blank"
              rel="noopener noreferrer"
            >
              Fale Comigo
            </a>
            <button 
              className="md:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="material-icons-round">{isOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-surface-dark/95 border-b border-white/10 p-4 space-y-4">
          <a className="block text-gray-300 py-2" href="#sobre" onClick={() => setIsOpen(false)}>Sobre</a>
          <a className="block text-gray-300 py-2" href="#skills" onClick={() => setIsOpen(false)}>Especialidades</a>
          <a className="block text-gray-300 py-2" href="#portfolio" onClick={() => setIsOpen(false)}>Portfolio</a>
          <a className="block text-gray-300 py-2" href="#contato" onClick={() => setIsOpen(false)}>Contato</a>
          <a className="block bg-primary text-white px-4 py-2 rounded-lg text-center" href="https://wa.me/5533999493748">Fale Comigo</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
