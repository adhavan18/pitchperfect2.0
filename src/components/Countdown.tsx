import React, { useState, useEffect } from 'react';
import { Hourglass } from 'lucide-react';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 12,
    minutes: 30,
    seconds: 45
  });
  const [isEventStarted, setIsEventStarted] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.days === 0 && prev.hours === 0 && prev.minutes === 0 && prev.seconds === 0) {
          setIsEventStarted(true);
          return prev;
        }

        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (isEventStarted) {
    return (
      <section className="py-20 px-6 relative z-10">
        <div className="container mx-auto text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-blue-100 max-w-2xl mx-auto">
            <div className="animate-pulse">
              <Hourglass className="w-16 h-16 mx-auto mb-6 text-[#0056D2] animate-bounce" />
              <h2 className="text-4xl font-bold text-[#0056D2] animate-glow">
                The Event Has Started! 🎉
              </h2>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-6 relative z-10">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0056D2] mb-12">
          Event Countdown
        </h2>
        
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-blue-100 max-w-4xl mx-auto">
          <div className="mb-8">
            <Hourglass className="w-12 h-12 mx-auto text-[#0056D2] animate-spin-slow" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="text-center">
                <div className="bg-[#0056D2] text-white rounded-xl p-6 mb-2 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl font-black flip-animate">
                    {String(value).padStart(2, '0')}
                  </div>
                </div>
                <div className="text-gray-600 font-semibold capitalize">{unit}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countdown;