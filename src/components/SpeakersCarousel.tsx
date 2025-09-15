import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import speaker1 from "@/assets/speaker-1.jpg";
import speaker2 from "@/assets/speaker-2.jpg";
import speaker3 from "@/assets/speaker-3.jpg";
import speaker4 from "@/assets/speaker-4.jpg";
import speaker5 from "@/assets/speaker-5.jpg";

const speakers = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    designation: "Chief Technology Officer at InnovateTech",
    image: speaker1,
  },
  {
    id: 2,
    name: "Alex Rodriguez",
    designation: "Founder & CEO of StartupFlow",
    image: speaker2,
  },
  {
    id: 3,
    name: "Prof. Michael Thompson",
    designation: "Director of Innovation at MIT",
    image: speaker3,
  },
  {
    id: 4,
    name: "Dr. Priya Patel",
    designation: "Managing Partner at Venture Capital Partners",
    image: speaker4,
  },
  {
    id: 5,
    name: "David Kim",
    designation: "AI Research Lead at TechFuture",
    image: speaker5,
  },
];

export const SpeakersCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % speakers.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % speakers.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + speakers.length) % speakers.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 bg-conference-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-ieee-blue">
          Featured Speakers
        </h2>
        
        <div className="relative max-w-6xl mx-auto">
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {speakers.map((speaker, index) => (
                <div key={speaker.id} className="w-full flex-shrink-0 px-4">
                  <Card className="max-w-md mx-auto bg-card hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-8 text-center">
                      <div className="mb-6">
                        <img
                          src={speaker.image}
                          alt={speaker.name}
                          className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto object-cover border-4 border-ieee-teal shadow-lg"
                        />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-card-foreground mb-2">
                        {speaker.name}
                      </h3>
                      <p className="text-muted-foreground text-sm md:text-base">
                        {speaker.designation}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-card hover:bg-ieee-blue hover:text-primary-foreground"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-card hover:bg-ieee-blue hover:text-primary-foreground"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Dot Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {speakers.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex
                    ? "bg-ieee-blue"
                    : "bg-muted hover:bg-ieee-blue/50"
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};