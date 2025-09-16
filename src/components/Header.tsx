import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-blue-100">
      <div className="container mx-auto px-6 py-4">
        <div className="font-bold text-2xl text-[#0056D2] tracking-wide">
          IEEE
        </div>
      </div>
    </header>
  );
};

export default Header;