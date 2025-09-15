import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SpeakersCarousel } from "@/components/SpeakersCarousel";
import { FloatingRegistrationCard } from "@/components/FloatingRegistrationCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <FloatingRegistrationCard />
      
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-ieee-blue">IEEE TEMS</h1>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-foreground hover:text-ieee-blue transition-colors">Home</a>
            <a href="#speakers" className="text-foreground hover:text-ieee-blue transition-colors">Speakers</a>
            <a href="#itinerary" className="text-foreground hover:text-ieee-blue transition-colors">Itinerary</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in-left">
            <h1 className="text-4xl md:text-6xl font-bold text-ieee-blue leading-tight">
              Pitch Perfect 2.0
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The Premier Entrepreneurship Conference. Drive innovation, 
              foster collaboration, and transform your ideas into reality.
            </p>
            <Button 
              size="lg"
              className="bg-ieee-teal hover:bg-ieee-teal/90 text-accent-foreground font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              onClick={() => {
                const element = document.getElementById('register');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Register Now →
            </Button>
          </div>
          
          <div className="space-y-6 animate-slide-in-right">
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-ieee-teal" />
                  <span className="font-medium">Date:</span>
                  <span className="text-muted-foreground">October 25-27, 2025</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-ieee-teal" />
                  <span className="font-medium">Venue:</span>
                  <span className="text-muted-foreground">Virtual & In-Person</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-ieee-teal" />
                  <span className="font-medium">Focus:</span>
                  <span className="text-muted-foreground">Ideation, Pitching, & Entrepreneurship</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <SpeakersCarousel />

      {/* Event Itinerary Section */}
      <section id="itinerary" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-ieee-blue">
            Event Itinerary
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Day 1 */}
            <div className="bg-card p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-bold text-ieee-blue mb-6">
                Day 1: Ideation & Persuasion
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-ieee-teal pl-4">
                  <p className="font-semibold text-sm text-ieee-blue">9:00 AM - 9:45 AM</p>
                  <h4 className="font-medium">Orientation & Icebreaker</h4>
                  <p className="text-sm text-muted-foreground">Welcome, event briefing, and randomized team formation (5 members per team).</p>
                </div>
                <div className="border-l-4 border-ieee-teal pl-4">
                  <p className="font-semibold text-sm text-ieee-blue">9:45 AM - 12:30 PM</p>
                  <h4 className="font-medium">Core Session: Entrepreneurial & Design Thinking</h4>
                  <p className="text-sm text-muted-foreground">Learn to spot opportunities and use design thinking to define problems.</p>
                </div>
                <div className="border-l-4 border-ieee-teal pl-4">
                  <p className="font-semibold text-sm text-ieee-blue">2:00 PM - 3:00 PM</p>
                  <h4 className="font-medium">Session: Sales & Psychology</h4>
                  <p className="text-sm text-muted-foreground">Build confidence by learning the basics of persuasion.</p>
                </div>
                <div className="border-l-4 border-ieee-teal pl-4">
                  <p className="font-semibold text-sm text-ieee-blue">4:00 PM - 5:00 PM</p>
                  <h4 className="font-medium">Round 1 Presentations + Feedback</h4>
                  <p className="text-sm text-muted-foreground">Each team presents their Problem Canvas and receives feedback.</p>
                </div>
              </div>
            </div>

            {/* Day 2 */}
            <div className="bg-card p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-bold text-ieee-blue mb-6">
                Day 2: Storytelling & Finals
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-ieee-teal pl-4">
                  <p className="font-semibold text-sm text-ieee-blue">9:00 AM - 10:00 AM</p>
                  <h4 className="font-medium">Session: Storytelling & Pitching</h4>
                  <p className="text-sm text-muted-foreground">Learn how to structure a compelling pitch and turn ideas into powerful stories.</p>
                </div>
                <div className="border-l-4 border-ieee-teal pl-4">
                  <p className="font-semibold text-sm text-ieee-blue">10:00 AM - 12:30 PM</p>
                  <h4 className="font-medium">Round 1: Preliminary Pitches</h4>
                  <p className="text-sm text-muted-foreground">Each team delivers a 3-minute pitch. Judges evaluate and shortlist the top 5 teams.</p>
                </div>
                <div className="border-l-4 border-ieee-teal pl-4">
                  <p className="font-semibold text-sm text-ieee-blue">1:30 PM - 2:30 PM</p>
                  <h4 className="font-medium">Finalists' Preparation Time</h4>
                  <p className="text-sm text-muted-foreground">The 5 shortlisted teams refine their presentations with dedicated mentor feedback.</p>
                </div>
                <div className="border-l-4 border-ieee-teal pl-4">
                  <p className="font-semibold text-sm text-ieee-blue">2:30 PM - 4:30 PM</p>
                  <h4 className="font-medium">Round 2: Final Pitches</h4>
                  <p className="text-sm text-muted-foreground">Each finalist team gets 7 minutes to pitch, followed by a 3-minute Q&A.</p>
                </div>
                <div className="border-l-4 border-ieee-teal pl-4">
                  <p className="font-semibold text-sm text-ieee-blue">4:30 PM - 5:00 PM</p>
                  <h4 className="font-medium">Closing & Awards Ceremony</h4>
                  <p className="text-sm text-muted-foreground">Announcement of winners for Best Pitch, Most Creative Idea, Best Storytelling, and Audience Favorite.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="register" className="py-16 bg-ieee-blue text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Ideas?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join the Premier Entrepreneurship Conference and turn your vision into reality.
          </p>
          <Button 
            size="lg"
            className="bg-ieee-teal hover:bg-ieee-teal/90 text-accent-foreground font-semibold px-12 py-4 rounded-lg transition-all duration-300 hover:scale-105"
          >
            Register for Pitch Perfect 2.0
          </Button>
          <p className="text-sm mt-4 opacity-75">
            Limited seats available • Early bird discount until October 20th
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2025 IEEE TEMS - Technology Engineering Management Society
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;