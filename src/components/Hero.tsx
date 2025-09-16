import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="text-center z-10 px-6">
        <h1 className="text-6xl md:text-8xl font-bold text-[#0056D2] mb-6 animate-fade-in">
          Pitch Perfect{' '}
          <span className="text-7xl md:text-9xl font-black text-[#0056D2] drop-shadow-lg">
            2.0
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 mb-4 max-w-4xl mx-auto leading-relaxed animate-fade-in-delay">
          The Premier Entrepreneurship Conference
        </p>
        
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto animate-fade-in-delay-2">
          Drive innovation, foster collaboration, and transform your ideas into reality.
        </p>
        
        <button
          onClick={scrollToRegistration}
          className="bg-gradient-to-r from-[#0056D2] to-[#0066E6] text-white px-12 py-4 rounded-full text-xl font-semibold 
                     shadow-2xl hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300 
                     animate-bounce-subtle group"
        >
          Register Now
          <ChevronDown className="inline-block ml-2 w-6 h-6 group-hover:translate-y-1 transition-transform duration-300" />
        </button>
      </div>
    </section>
  );
};

export default Hero;