
import React from 'react';

const TechStack: React.FC = () => {
  const stacks = [
    { name: 'PHP', icon: 'https://cdn.simpleicons.org/php/white', type: 'image' },
    { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/white', type: 'image' },
    { name: 'Python', icon: 'https://cdn.simpleicons.org/python/white', type: 'image' },
    { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/white', type: 'image' },
    { name: 'Chatbots & AI', icon: 'smart_toy', color: 'text-blue-400', type: 'material' },
    { name: 'Landing Pages', icon: 'layers', color: 'text-orange-500', type: 'material' },
    { name: 'n8n Automation', icon: 'hub', color: 'text-purple-400', type: 'material' },
    { name: 'Mini ERP', icon: 'dashboard', color: 'text-yellow-400', type: 'material' },
  ];

  return (
    <section className="py-20 bg-background-dark" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-display font-bold text-white uppercase tracking-tighter">Stack Tecnológico</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
          <p className="mt-6 text-gray-400 max-w-xl mx-auto">Tecnologias de ponta para garantir escalabilidade, segurança e velocidade em cada entrega.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stacks.map((stack, idx) => (
            <div key={idx} className="group bg-card-dark border border-white/10 p-8 rounded-2xl hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 flex flex-col items-center justify-center gap-4 text-center">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                {stack.type === 'image' ? (
                  <img alt={stack.name} className="w-8 h-8 opacity-80 group-hover:opacity-100 transition-all group-hover:scale-110" src={stack.icon} />
                ) : (
                  <span className={`material-icons-round text-4xl ${stack.color} group-hover:scale-110 transition-transform`}>{stack.icon}</span>
                )}
              </div>
              <span className="font-semibold text-gray-300 group-hover:text-white transition-colors">{stack.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
