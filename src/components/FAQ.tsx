import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Do I need a team beforehand?",
      answer: "No, you can participate individually or form teams during the orientation. We encourage networking and team formation during the event."
    },
    {
      question: "Is there a registration fee?",
      answer: "No, the event is completely free for all participants. This includes meals, materials, and all workshop sessions."
    },
    {
      question: "Do I need prior startup experience?",
      answer: "Absolutely not! This event is designed for beginners and experienced entrepreneurs alike. We provide all the necessary guidance and mentoring."
    },
    {
      question: "What should I bring to the event?",
      answer: "Just bring yourself, a notebook, and an open mind! We'll provide all materials, refreshments, and resources needed for the workshops."
    },
    {
      question: "How are the winners selected?",
      answer: "Winners are selected based on innovation, presentation quality, business viability, and audience voting during the final presentations."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 relative z-10">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#0056D2] mb-16">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-100 
                       hover:shadow-xl transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between 
                         hover:bg-blue-50/50 rounded-2xl transition-all duration-300"
              >
                <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#0056D2]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#0056D2]" />
                )}
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;