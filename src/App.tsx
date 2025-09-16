import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Prizes from './components/Prizes';
import Countdown from './components/Countdown';
import Timeline from './components/Timeline';
import Registration from './components/Registration';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import BackgroundWave from './components/BackgroundWave';

function App() {
  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden">
      <BackgroundWave />
      <Header />
      <Hero />
      <Prizes />
      <Countdown />
      <Timeline />
      <Registration />
      <FAQ />
      <Contact />
    </div>
  );
}

export default App;