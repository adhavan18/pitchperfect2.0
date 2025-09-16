import React from 'react';

const BackgroundWave = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0056D2" />
            <stop offset="50%" stopColor="#0066E6" />
            <stop offset="100%" stopColor="#0056D2" />
          </linearGradient>
        </defs>
        <path
          fill="url(#waveGradient)"
          d="M0,100 C150,200 350,0 500,100 C650,200 850,0 1000,100 L1000,0 L0,0 Z"
          className="animate-wave"
        />
      </svg>
      
      <svg
        className="absolute inset-0 w-full h-full opacity-5"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
        style={{ animationDelay: '2s' }}
      >
        <path
          fill="url(#waveGradient)"
          d="M0,150 C200,250 400,50 600,150 C800,250 900,50 1000,150 L1000,0 L0,0 Z"
          className="animate-wave-slow"
        />
      </svg>
    </div>
  );
};

export default BackgroundWave;