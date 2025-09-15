import { useState, useEffect } from "react";
import { Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const FloatingRegistrationCard = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set registration end date (October 20, 2025)
    const registrationEndDate = new Date("2025-10-20T23:59:59").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = registrationEndDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-20 right-4 md:right-8 z-50 animate-float">
      <Card className="w-72 bg-floating-bg shadow-2xl border border-ieee-blue/20 animate-pulse-glow">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="h-5 w-5 text-ieee-teal" />
            <p className="text-sm font-semibold text-destructive">
              Registration ends soon!
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            <div className="bg-ieee-blue/5 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold text-ieee-blue">{timeLeft.days}</div>
              <div className="text-xs text-muted-foreground">Days</div>
            </div>
            <div className="bg-ieee-blue/5 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold text-ieee-blue">{timeLeft.hours}</div>
              <div className="text-xs text-muted-foreground">Hours</div>
            </div>
            <div className="bg-ieee-blue/5 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold text-ieee-blue">{timeLeft.minutes}</div>
              <div className="text-xs text-muted-foreground">Minutes</div>
            </div>
            <div className="bg-ieee-blue/5 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold text-ieee-blue">{timeLeft.seconds}</div>
              <div className="text-xs text-muted-foreground">Seconds</div>
            </div>
          </div>

          {/* Register Button */}
          <Button 
            className="w-full bg-ieee-teal hover:bg-ieee-teal/90 text-accent-foreground font-semibold transition-all duration-300 hover:scale-105 group"
            onClick={() => {
              // Scroll to registration section or handle registration
              const element = document.getElementById('register');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Register Now
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>

          <p className="text-xs text-center text-muted-foreground mt-3">
            Limited seats available
          </p>
        </CardContent>
      </Card>
    </div>
  );
};