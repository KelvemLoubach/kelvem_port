
import React from 'react';

const DailyTools: React.FC = () => {
  const tools = [
    {
      name: 'Scriptcase',
      description: 'Desenvolvimento rápido de sistemas e Dashboards PHP complexos.',
      icon: 'https://cdn.simpleicons.org/php/white', // Usando PHP como base visual
      badge: 'RAD Platform'
    },
    {
      name: 'n8n',
      description: 'Orquestração de workflows e conexões complexas via API.',
      icon: 'https://cdn.simpleicons.org/n8n/white',
      badge: 'Workflow'
    },
    {
      name: 'BotConversa',
      description: 'Criação de fluxos inteligentes e automação para WhatsApp.',
      icon: 'forum', // Material icon para chat
      badge: 'WhatsApp AI',
      isMaterial: true
    },
    {
      name: 'BotCity',
      description: 'RPA avançado e automação de tarefas repetitivas com Python.',
      icon: 'precision_manufacturing', // Material icon para automação industrial/RPA
      badge: 'Python RPA',
      isMaterial: true
    }
  ];

  return (
    <section className="py-24 bg-surface-dark/30 border-y border-white/5" id="ferramentas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <div className="text-left max-w-2xl">
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Ferramentas de <span className="text-primary italic">Alta Produtividade</span>
            </h2>
            <p className="text-gray-400">
              Utilizo as melhores plataformas do mercado para garantir que seu projeto seja entregue com 
              velocidade, segurança e integração total entre seus sistemas.
            </p>
          </div>
          <div className="flex -space-x-4">
            <div className="w-12 h-12 rounded-full border-2 border-background-dark bg-blue-600 flex items-center justify-center text-xs font-bold">SC</div>
            <div className="w-12 h-12 rounded-full border-2 border-background-dark bg-orange-600 flex items-center justify-center text-xs font-bold">N8N</div>
            <div className="w-12 h-12 rounded-full border-2 border-background-dark bg-green-600 flex items-center justify-center text-xs font-bold">BC</div>
            <div className="w-12 h-12 rounded-full border-2 border-background-dark bg-purple-600 flex items-center justify-center text-xs font-bold">BTY</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, idx) => (
            <div key={idx} className="group glass-panel p-8 rounded-[2rem] hover:bg-white/5 transition-all duration-500 border border-white/5 hover:border-primary/20">
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-all">
                  {tool.isMaterial ? (
                    <span className="material-icons-round text-3xl text-primary">{tool.icon}</span>
                  ) : (
                    <img src={tool.icon} alt={tool.name} className="w-8 h-8 opacity-80 group-hover:opacity-100" />
                  )}
                </div>
                <span className="text-[10px] font-bold px-3 py-1 bg-white/5 rounded-full text-gray-400 group-hover:text-primary transition-colors">
                  {tool.badge}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{tool.name}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {tool.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DailyTools;
