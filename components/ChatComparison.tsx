
import React from 'react';

const ChatComparison: React.FC = () => {
  return (
    <section className="py-24 bg-surface-dark relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary opacity-5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-display font-bold text-white">Redescubra seu Atendimento</h2>
          <p className="mt-4 text-gray-400">A diferença entre processos manuais e a inteligência automatizada.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          {/* Intelligent Automation */}
          <div className="relative">
            <h3 className="text-xl font-bold text-primary mb-8 flex items-center gap-2">
              <span className="material-icons-round">auto_awesome</span>
              Automação Inteligente
            </h3>
            <div className="space-y-6">
              <div className="flex items-end gap-3">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-primary/30">AI</div>
                <div className="relative bg-primary/20 text-gray-100 p-4 rounded-2xl rounded-bl-none max-w-[85%] chat-bubble-tail">
                  <p className="text-sm font-medium">Olá! Como posso ajudar sua empresa a crescer hoje?</p>
                  <span className="text-[10px] text-gray-400 absolute bottom-1 right-3">Agora</span>
                </div>
              </div>
              <div className="flex items-end gap-3 justify-end">
                <div className="relative bg-gray-800 text-gray-200 p-4 rounded-2xl rounded-br-none max-w-[85%] chat-bubble-tail-right">
                  <p className="text-sm">Quero saber sobre os preços dos chatbots.</p>
                  <span className="text-[10px] text-gray-400 absolute bottom-1 right-3">Agora</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-700 overflow-hidden">
                  <img alt="User" className="w-full h-full object-cover" src="https://picsum.photos/100/100?random=1" />
                </div>
              </div>
              <div className="flex items-end gap-3">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-primary/30">AI</div>
                <div className="relative bg-primary/20 text-gray-100 p-4 rounded-2xl rounded-bl-none max-w-[85%] chat-bubble-tail">
                  <p className="text-sm font-medium">Claro! Temos planos personalizados. Vou te enviar o PDF agora mesmo. 📄✅</p>
                  <span className="text-[10px] text-gray-400 absolute bottom-1 right-3">Agora</span>
                </div>
              </div>
            </div>
            <ul className="mt-8 space-y-3">
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <span className="material-icons-round text-green-500 text-lg">check_circle</span>
                Atendimento imediato (24/7)
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <span className="material-icons-round text-green-500 text-lg">check_circle</span>
                Sem filas de espera
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <span className="material-icons-round text-green-500 text-lg">check_circle</span>
                Integração com seu sistema
              </li>
            </ul>
          </div>

          {/* Manual Process */}
          <div className="relative opacity-60 hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-xl font-bold text-gray-400 mb-8 flex items-center gap-2">
              <span className="material-icons-round">schedule</span>
              Atendimento Manual
            </h3>
            <div className="space-y-6">
              <div className="flex items-end gap-3 justify-end">
                <div className="relative bg-gray-800 text-gray-200 p-4 rounded-2xl rounded-br-none max-w-[85%] chat-bubble-tail-right">
                  <p className="text-sm">Oi, gostaria de fazer um orçamento.</p>
                  <span className="text-[10px] text-gray-400 absolute bottom-1 right-3">09:00</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-700 overflow-hidden">
                  <img alt="User" className="w-full h-full object-cover" src="https://picsum.photos/100/100?random=2" />
                </div>
              </div>
              <div className="flex items-end gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center text-white text-xs font-bold">AT</div>
                <div className="relative bg-gray-700 text-gray-300 p-4 rounded-2xl rounded-bl-none max-w-[85%] chat-bubble-tail">
                  <p className="text-sm">Desculpe a demora, estava em horário de almoço. Ainda tem interesse?</p>
                  <span className="text-[10px] text-gray-400 absolute bottom-1 right-3">14:30</span>
                </div>
              </div>
            </div>
            <ul className="mt-8 space-y-3">
              <li className="flex items-center gap-3 text-sm text-gray-500">
                <span className="material-icons-round text-red-400 text-lg">cancel</span>
                Tempo de resposta elevado
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-500">
                <span className="material-icons-round text-red-400 text-lg">cancel</span>
                Disponibilidade limitada
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-500">
                <span className="material-icons-round text-red-400 text-lg">cancel</span>
                Erros humanos recorrentes
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatComparison;
