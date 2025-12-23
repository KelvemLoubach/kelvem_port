
import React from 'react';

const PortfolioGrid: React.FC = () => {
  const projects = [
    {
      title: 'Landing Page de Alta Conversão',
      description: 'Design focado em performance, SEO e vendas.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3pLTtDSk5yxLqCXR2H3zFrs8mM88pBGvTVo2bq-EHf4M4wnMo6Wv4GJVT9uHkS-IKJb7B6dIwYMWOwS-IOso-thrFDOjY3naKjp4y4MQ6ffV03se_xp7CPUUOyf5iedXlCqqhzoiJMaRfFrkdGIxFze-h_IL2H72p-QHCN8pCqQNu3gBgvro_kdi8AZtxyNcjEgKg6vf9YLycOUJwUgPxnIMxIJdsI4UJ7hPvMyplKANWDyOJONL3PSnsroLEeAoKYMU1-zklNps'
    },
    {
      title: 'Sistema de Controle (Mini ERP)',
      description: 'Painéis administrativos desenvolvidos com Scriptcase e PHP.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmKEFp1ViGhh9z5IpOZPpkfyxJ-qTYeRzHsCWebfQM6ZVh_eXnSaSArAYpJ9tYOwaH7zP4krijTFKumPnYsAdaCajaJA3cPVjvSeixc4l4Idimr56NY0yazT0OGRm4oc2DWUnZ5VKegFrVKq5e3wKvAesz7G6MmjsFeYokFWPWM4zVGdhdLYJGihRcc7zaC6FIj6CwEwllygGFxUdA_imKPe5LOtHwYbr3ILKzRehvMnN3mUhamn6iaWCzNFCUMxoYZMlwEB7t-qw'
    }
  ];

  return (
    <section className="py-20 bg-surface-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-display font-bold text-white mb-12 border-l-4 border-primary pl-4">
          Landing Pages & Sistemas
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="relative group rounded-xl overflow-hidden shadow-lg aspect-video bg-gray-900">
              <img 
                alt={project.title} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                src={project.image} 
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <h3 className="text-white font-bold text-lg">{project.title}</h3>
                <p className="text-gray-300 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
