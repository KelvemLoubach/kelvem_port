
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-surface-dark border-y border-white/5" id="sobre">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-display font-bold text-white mb-6">Quem é <span className="text-primary">Kelvem Loubach?</span></h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Com 2 anos de experiência focada em desenvolvimento Fullstack, crio <strong className="text-white">Landing Pages</strong> que vendem e automações que escalam operações. Minha missão é entregar tecnologia que gera resultados reais.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Seja desenvolvendo uma página de vendas otimizada, implementando um Chatbot 24/7 ou integrando sistemas complexos, meu foco é performance e qualidade.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4 group">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <span className="material-icons-round text-primary">email</span>
                </div>
                <a className="text-gray-300 hover:text-primary transition-colors" href="mailto:kelvemloubach@outlook.com">kelvemloubach@outlook.com</a>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <span className="material-icons-round text-primary">smartphone</span>
                </div>
                <a className="text-gray-300 hover:text-primary transition-colors" href="tel:33999493748">(33) 99949-3748</a>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <span className="material-icons-round text-primary">link</span>
                </div>
                <a className="text-gray-300 hover:text-primary transition-colors" href="https://www.linkedin.com/in/kelvem-loubach" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-primary opacity-20 blur-3xl rounded-full"></div>
            <div className="relative bg-card-dark border border-white/10 rounded-2xl p-8 shadow-2xl overflow-hidden">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="font-mono text-sm text-gray-400 space-y-2">
                <p><span className="text-purple-500">const</span> <span className="text-blue-500">developer</span> = {'{'}</p>
                <p className="pl-4">name: <span className="text-green-500">'Kelvem Loubach'</span>,</p>
                <p className="pl-4">focus: <span className="text-green-500">'High Conversion'</span>,</p>
                <p className="pl-4">skills: [<span className="text-green-500">'Landing Pages'</span>, <span className="text-green-500">'Chatbots'</span>, <span className="text-green-500">'Automations'</span>],</p>
                <p className="pl-4">status: <span className="text-green-500">'Ready to Scale'</span></p>
                <p>{'}'}</p>
                <br />
                <p><span className="text-purple-500">await</span> developer.<span className="text-yellow-500">buildYourSuccess</span>();</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
