
import React from 'react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: 'Ricardo Costa',
      role: 'CEO, Vex Net',
      initials: 'RC',
      content: '"O chatbot implementado revolucionou nosso atendimento. Reduzimos o tempo de resposta em 90% e nossos clientes estão muito mais satisfeitos com o suporte 24h."',
      verified: true
    },
    {
      name: 'Ana Maria',
      role: 'Gerente, Aime Modas',
      initials: 'AM',
      content: '"A landing page superou todas as expectativas. O design é incrível e a conversão de leads aumentou significativamente desde o lançamento. Profissionalismo ímpar!"',
      verified: true
    },
    {
      name: 'Lucas Pereira',
      role: 'Diretor, Lojas Preço Bom',
      initials: 'LP',
      content: '"As automações criadas pelo Kelvem nos pouparam horas de trabalho manual. A integração com nosso sistema foi perfeita e muito eficiente."',
      verified: true
    },
  ];

  return (
    <section className="py-24 bg-background-dark relative overflow-hidden" id="depoimentos">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Feedback</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white">O que nossos <span className="text-primary">clientes</span> dizem</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div 
              key={idx} 
              className="group bg-surface-dark/50 backdrop-blur-sm p-10 rounded-[2.5rem] border border-white/5 hover:border-primary/30 transition-all duration-500 relative flex flex-col"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-icons-round text-yellow-500 text-lg">star</span>
                ))}
              </div>
              
              <p className="text-gray-300 mb-8 flex-grow text-lg leading-relaxed">
                {review.content}
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-xl font-bold text-white shadow-lg shadow-primary/20">
                  {review.initials}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-white">{review.name}</h4>
                    {review.verified && (
                      <span className="material-icons-round text-blue-400 text-sm">verified</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
