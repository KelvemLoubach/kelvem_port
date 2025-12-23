
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-hero-glow pointer-events-none opacity-80"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Disponível para Projetos</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6">
          Landing Pages & Automação com <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400 glow-text">Inteligência Artificial</span>
        </h1>
        
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-400">
          Desenvolvo <strong className="text-white">Landing Pages de alta conversão</strong>, chatbots inteligentes e automações que transformam visitantes em clientes e otimizam seu tempo.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-hover transition-all shadow-lg shadow-primary/25" href="#portfolio">
            Ver Projetos
            <span className="material-icons-round ml-2 text-sm">arrow_forward</span>
          </a>
          <a className="inline-flex items-center justify-center px-8 py-3 border border-white/20 text-base font-medium rounded-md text-white bg-transparent hover:bg-white/5 transition-all" href="#contato">
            Entrar em Contato
          </a>
        </div>

        {/* Decorative Floating Icons */}
        <div className="absolute top-1/2 left-10 hidden lg:block opacity-20 animate-bounce" style={{ animationDuration: '3s' }}>
          <img alt="Python" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtevX6pCRGOeyJ-iZAmGw5_u6l5o0ExxnXhp8psFECIbabc5rBBMvHFzkPxHxwNoA6tPPwee1jzgMBUTWovvWjqk041uKnnKHSfheSxLpKcq2WTOeOQqmrU7Q1kCLRCWeK4YRWQuoUkn020YGOEveKtYIY8g08pjgsqOGbW5p-f4OCkHqSUCmUY9dVEFb7smIzU0Dz0ndxfTQT5D9PNmk1Q52AFZHh0QYcCPPprYKt0TwnHF_51_m48Gr9AwYTLANRx1B-YWwupCg" width="40" />
        </div>
        <div className="absolute top-1/3 right-10 hidden lg:block opacity-20 animate-bounce" style={{ animationDuration: '4s' }}>
          <img alt="Node" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNFFkq_0IbvZrgGKt0zQ5EdDYTBy7_lejKCi9O15mJK96kRu9q3ChPJJnklJi2H9fvNlf7JFAXPrqptjCIoldQ5-EbZCLaGJ1LU4YPBEyFQgWr1JQ0lMIZibPNDqO584lxUIVaLnC5oDMTR3sP26uogxW7juOH3BnSFUNIWSm-Btpn5ZqRnKNVOtYPu8pKZSMr9ZxfcLYZG5fETiPPBTZP8oEMeFR0b_YrgSxqXeajdyf5yPEr7dA_5855W4xxLYp1msLKQlO5Yo4" width="40" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
