import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 px-6 relative z-10">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#0056D2] mb-16">
          Contact & Information
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-blue-100 text-center
                           hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300">
              <Mail className="w-12 h-12 text-[#0056D2] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600">ieee@college.edu</p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-blue-100 text-center
                           hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300">
              <Phone className="w-12 h-12 text-[#0056D2] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Phone</h3>
              <p className="text-gray-600">+91 98765 43210</p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-blue-100 text-center
                           hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300">
              <MapPin className="w-12 h-12 text-[#0056D2] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Venue</h3>
              <p className="text-gray-600">Main Auditorium</p>
            </div>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-blue-100">
            <h3 className="text-2xl font-bold text-[#0056D2] mb-6 text-center">Event Guidelines</h3>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                <strong>Professional Conduct:</strong> All participants are expected to maintain professionalism 
                throughout the event. Respect for fellow participants, organizers, and judges is mandatory.
              </p>
              <p>
                <strong>Attendance:</strong> Regular attendance is required for all sessions. Late arrivals may 
                result in disqualification from competitions.
              </p>
              <p>
                <strong>Originality:</strong> All ideas and presentations must be original work. Plagiarism 
                will result in immediate disqualification.
              </p>
              <p className="text-sm text-gray-600 italic">
                By registering, you agree to abide by IEEE event guidelines and terms of participation.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="mt-20 text-center">
        <div className="border-t border-blue-100 pt-8">
          <p className="text-gray-600">© 2024 IEEE - Pitch Perfect 2.0. All rights reserved.</p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;