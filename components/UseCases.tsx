
import React from 'react';

const UseCases: React.FC = () => {
  const cases = [
    {
      title: 'Automação Imobiliária',
      problem: 'Perda de leads por demora no atendimento inicial via WhatsApp.',
      solution: 'Chatbot com IA que qualifica o lead, agenda visitas e envia PDFs de imóveis automaticamente 24/7.',
      icon: 'business',
      results: '+45% em agendamentos'
    },
    {
      title: 'Dashboard de Vendas',
      problem: 'Dificuldade em consolidar dados de múltiplas plataformas de anúncios.',
      solution: 'Mini ERP customizado que extrai dados via API e gera relatórios em tempo real.',
      icon: 'analytics',
      results: 'Economia de 10h/semana'
    },
    {
      title: 'Página de Lançamento',
      problem: 'Landing page lenta com baixa taxa de conversão em dispositivos móveis.',
      solution: 'LP ultra-otimizada com Next.js atingindo 98+ no Google PageSpeed Insights.',
      icon: 'rocket_launch',
      results: 'Conversão subiu de 3% para 12%'
    }
  ];

  return (
    <section className="py-24 bg-background-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-display font-bold text-white italic">Cases de <span className="text-primary underline">Uso</span></h2>
            <p className="mt-4 text-gray-400 max-w-lg">Exemplos reais de como a tecnologia pode resolver gargalos operacionais e aumentar seu faturamento.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((item, idx) => (
            <div key={idx} className="bg-surface-dark p-8 rounded-3xl border border-white/10 hover:bg-card-dark transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <span className="material-icons-round text-primary group-hover:text-white">{item.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
              <div className="space-y-4 mb-6">
                <div>
                  <span className="text-[10px] uppercase font-bold text-red-400 tracking-wider">Desafio</span>
                  <p className="text-sm text-gray-400">{item.problem}</p>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-green-400 tracking-wider">Solução</span>
                  <p className="text-sm text-gray-300">{item.solution}</p>
                </div>
              </div>
              <div className="pt-4 border-t border-white/5">
                <span className="text-primary font-bold text-lg">{item.results}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
