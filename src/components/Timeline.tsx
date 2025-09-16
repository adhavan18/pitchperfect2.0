import React, { useEffect, useRef, useState } from 'react';
import { 
  Users, 
  Lightbulb, 
  Coffee, 
  FileText, 
  Brain, 
  Mic, 
  BarChart3, 
  BookOpen, 
  Puzzle, 
  Trophy 
} from 'lucide-react';

const Timeline = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const timelineRef = useRef<HTMLElement>(null);

  const timelineItems = [
    // Day 1
    { day: 1, time: '9:00 AM', title: 'Orientation & Icebreaker', icon: Users, description: 'Welcome session and networking' },
    { day: 1, time: '10:00 AM', title: 'Entrepreneurial & Design Thinking', icon: Lightbulb, description: 'Problem Canvas Task' },
    { day: 1, time: '12:30 PM', title: 'Lunch Break', icon: Coffee, description: 'Networking over lunch' },
    { day: 1, time: '1:30 PM', title: 'Assignment Submission & Prep', icon: FileText, description: 'Submit and prepare presentations' },
    { day: 1, time: '2:30 PM', title: 'Sales & Psychology', icon: Brain, description: 'Understanding customer psychology' },
    { day: 1, time: '3:30 PM', title: 'Random Sales Pitch Drill', icon: Mic, description: 'Practice improvisation skills' },
    { day: 1, time: '4:30 PM', title: 'Round 1 Presentations', icon: BarChart3, description: 'Initial pitches with feedback' },
    
    // Day 2
    { day: 2, time: '9:00 AM', title: 'Storytelling & Pitching', icon: BookOpen, description: 'Master the art of compelling narratives' },
    { day: 2, time: '10:30 AM', title: 'Preliminary Pitches', icon: Mic, description: 'Semi-final presentations' },
    { day: 2, time: '12:30 PM', title: 'Lunch Break', icon: Coffee, description: 'Final preparation time' },
    { day: 2, time: '1:30 PM', title: 'Finalists\' Preparation', icon: Puzzle, description: 'Polish your final pitch' },
    { day: 2, time: '3:00 PM', title: 'Final Pitches & Awards', icon: Trophy, description: 'Grand finale with audience voting' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.5 }
    );

    const timelineElements = document.querySelectorAll('.timeline-item');
    timelineElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={timelineRef} className="py-20 px-6 relative z-10">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#0056D2] mb-16">
          Event Schedule
        </h2>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-1 bg-gradient-to-b from-[#0056D2] to-blue-300"></div>
          
          {timelineItems.map((item, index) => (
            <div
              key={index}
              data-index={index}
              className={`timeline-item relative flex items-center justify-center mb-16
                         ${visibleItems.includes(index) 
                           ? 'opacity-100 translate-y-0' 
                           : 'opacity-0 translate-y-8'
                         } transition-all duration-700 ease-out`}
            >
              {/* Day badge */}
              {index === 0 || timelineItems[index - 1].day !== item.day ? (
                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 
                               bg-[#0056D2] text-white px-6 py-2 rounded-full font-bold text-lg shadow-lg">
                  Day {item.day}
                </div>
              ) : null}
              
              {/* Timeline card */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-blue-100 
                             max-w-md w-full hover:shadow-blue-500/20 hover:scale-105 transition-all duration-300
                             relative z-10">
                <div className="flex items-center mb-4">
                  <div className="bg-[#0056D2] p-3 rounded-full mr-4 shadow-lg">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#0056D2] mb-1">{item.time}</div>
                    <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
              
              {/* Connection point */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#0056D2] rounded-full border-4 border-white shadow-lg"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;