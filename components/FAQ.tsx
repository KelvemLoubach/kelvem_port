
import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Quanto tempo leva para criar uma Landing Page?',
      answer: 'O prazo médio é de 5 a 10 dias úteis, dependendo da complexidade do design e das integrações necessárias.'
    },
    {
      question: 'O Chatbot de IA funciona com meu WhatsApp pessoal?',
      answer: 'Sim, podemos integrar com números pessoais ou business, permitindo que a IA responda enquanto você está ocupado ou fora do horário comercial.'
    },
    {
      question: 'Quais são as formas de pagamento?',
      answer: 'Trabalhamos com 50% de entrada e 50% na entrega, ou parcelamento via cartão de crédito.'
    },
    {
      question: 'Você oferece suporte após a entrega do projeto?',
      answer: 'Com certeza! Oferecemos 30 dias de suporte técnico gratuito para qualquer ajuste ou correção necessária após o lançamento.'
    }
  ];

  return (
    <section className="py-24 bg-surface-dark" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-display font-bold text-white tracking-tight">Perguntas Frequentes</h2>
          <p className="mt-4 text-gray-400">Tire suas dúvidas rápidas sobre como trabalhamos.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === idx ? 'bg-card-dark ring-1 ring-primary/30' : 'bg-background-dark hover:bg-card-dark'}`}
            >
              <button 
                className="w-full px-6 py-5 flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="font-semibold text-gray-200">{faq.question}</span>
                <span className={`material-icons-round transition-transform duration-300 ${openIndex === idx ? 'rotate-180 text-primary' : 'text-gray-500'}`}>
                  expand_more
                </span>
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ${openIndex === idx ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-gray-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center p-8 bg-primary/5 rounded-3xl border border-primary/20">
          <p className="text-gray-300 mb-4">Ainda tem alguma dúvida específica?</p>
          <a href="https://wa.me/5533999493748" className="text-primary font-bold hover:underline flex items-center justify-center gap-2">
            Me chame no WhatsApp 
            <span className="material-icons-round text-sm">open_in_new</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
