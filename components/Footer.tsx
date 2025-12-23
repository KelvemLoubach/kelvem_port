
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="font-display font-bold text-lg tracking-wider text-white">
          KELVEM<span className="text-primary">.DEV</span>
        </span>
        <p className="text-gray-500 text-sm">© 2025 Kelvem Loubach. Todos os direitos reservados.</p>
        <div className="flex space-x-4">
          <a className="text-gray-500 hover:text-white transition-colors text-sm" href="#">Privacidade</a>
          <a className="text-gray-500 hover:text-white transition-colors text-sm" href="#">Termos</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
