import { Award, Mail, MapPin, Send } from "lucide-react";
import React from "react";

function Contact() {
  return (
    <div id="contact" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Ready to Transform Your Career?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join ambitious Nigerian professionals who are taking control of
              their career trajectory with clarity, strategy, and insider
              knowledge.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">
                    Email Us
                  </h3>
                  <p className="text-gray-600">contact@vantagepeoplehq.com</p>
                  <p className="text-sm text-gray-500">
                    Get a response within 24 hours
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">
                    Serving
                  </h3>
                  <p className="text-gray-600">Nigerian Professionals</p>
                  <p className="text-gray-600">Nationwide & Diaspora</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">
                    Our Promise
                  </h3>
                  <p className="text-gray-600">From Confusion to Clarity</p>
                  <p className="text-gray-600">From Potential to Performance</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Get Started Today
            </h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
              />
              <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition">
                <option value="">I'm interested in...</option>
                <option value="career">Vantage Career (Individual)</option>
                <option value="hr">Vantage HR (Organization)</option>
                <option value="recruitment">Vantage Recruitment</option>
              </select>
              <textarea
                rows="4"
                placeholder="Tell us about your career goals..."
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
              />
              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2">
                Start Your Journey
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
