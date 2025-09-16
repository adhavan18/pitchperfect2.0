import React, { useEffect, useRef, useState } from 'react';
import { Trophy, Medal, Award } from 'lucide-react';

const Prizes = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const prizes = [
    { place: '1st Place', icon: Trophy, color: 'text-yellow-500', delay: 'delay-100', prize: '₹15,000' },
    { place: '2nd Place', icon: Medal, color: 'text-gray-400', delay: 'delay-300', prize: '₹10,000' },
    { place: '3rd Place', icon: Award, color: 'text-orange-600', delay: 'delay-500', prize: '₹5,000' }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-6 relative z-10">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#0056D2] mb-16">
          Prize Pool
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {prizes.map((prize, index) => (
            <div
              key={index}
              className={`bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-blue-100
                         hover:shadow-blue-500/20 hover:-translate-y-2 transition-all duration-500
                         ${isVisible ? `animate-bounce-in ${prize.delay}` : 'opacity-0 translate-y-12'}`}
            >
              <div className="text-center">
                <prize.icon className={`w-16 h-16 mx-auto mb-4 ${prize.color}`} />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{prize.place}</h3>
                <p className="text-3xl font-black text-[#0056D2]">{prize.prize}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prizes;