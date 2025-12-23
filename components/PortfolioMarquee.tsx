
import React from 'react';

const PortfolioMarquee: React.FC = () => {
  const brands = [
    { name: 'CEMIG', color: 'hover:text-white' },
    { name: 'EDP', color: 'hover:text-red-600' },
    { name: 'LOJAS PREÇO BOM', color: 'hover:text-blue-600' },
    { name: 'AIME MODAS', color: 'hover:text-pink-500' },
    { name: 'VEX NET', color: 'hover:text-green-500' },
  ];

  const marqueeContent = [...brands, ...brands, ...brands];

  return (
    <section className="py-20 bg-background-dark overflow-hidden" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="text-3xl font-display font-bold text-white border-l-4 border-primary pl-4">
          Empresas Atendidas
        </h2>
      </div>
      
      <div className="relative w-full py-8 bg-card-dark border-y border-white/5">
        <div className="flex overflow-hidden relative z-10">
          <div className="flex animate-scroll min-w-full shrink-0 items-center justify-around gap-16 px-8">
            {marqueeContent.map((brand, idx) => (
              <span key={idx} className={`text-2xl md:text-3xl font-bold text-gray-500 ${brand.color} transition-colors cursor-default whitespace-nowrap`}>
                {brand.name}
              </span>
            ))}
          </div>
        </div>
        {/* Fade masks */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background-dark to-transparent z-20 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background-dark to-transparent z-20 pointer-events-none"></div>
      </div>
    </section>
  );
};

export default PortfolioMarquee;
