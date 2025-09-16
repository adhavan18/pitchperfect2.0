import React, { useState } from 'react';
import { CheckCircle, User, Hash, Building, Calendar, Phone } from 'lucide-react';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    registerNumber: '',
    department: '',
    year: '',
    phone: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
    setFormData({ name: '', registerNumber: '', department: '', year: '', phone: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="registration" className="py-20 px-6 relative z-10">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#0056D2] mb-16">
          Register Now
        </h2>
        
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-blue-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-[#0056D2] 
                         focus:ring-2 focus:ring-blue-100 transition-all duration-300 bg-white/80"
              />
            </div>
            
            <div className="relative">
              <Hash className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                name="registerNumber"
                placeholder="Register Number"
                value={formData.registerNumber}
                onChange={handleChange}
                required
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-[#0056D2] 
                         focus:ring-2 focus:ring-blue-100 transition-all duration-300 bg-white/80"
              />
            </div>
            
            <div className="relative">
              <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                name="department"
                placeholder="Department"
                value={formData.department}
                onChange={handleChange}
                required
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-[#0056D2] 
                         focus:ring-2 focus:ring-blue-100 transition-all duration-300 bg-white/80"
              />
            </div>
            
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                name="year"
                value={formData.year}
                onChange={handleChange}
                required
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-[#0056D2] 
                         focus:ring-2 focus:ring-blue-100 transition-all duration-300 bg-white/80"
              >
                <option value="">Select Year</option>
                <option value="1st Year">1st Year</option>
                <option value="2nd Year">2nd Year</option>
                <option value="3rd Year">3rd Year</option>
                <option value="4th Year">4th Year</option>
              </select>
            </div>
            
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-[#0056D2] 
                         focus:ring-2 focus:ring-blue-100 transition-all duration-300 bg-white/80"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#0056D2] to-[#0066E6] text-white py-4 rounded-xl 
                       font-semibold text-lg shadow-xl hover:shadow-blue-500/25 hover:scale-105 
                       transition-all duration-300"
            >
              Submit Registration
            </button>
          </form>
        </div>
        
        {showSuccess && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-6">
            <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-sm w-full animate-scale-in">
              <div className="text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Registration Successful!</h3>
                <p className="text-gray-600">We'll contact you with further details soon.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Registration;