import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import React, { useState } from "react";

const testimonials = [
  {
    name: "Chioma Adeleke",
    role: "Investment Banking Analyst at Access Bank",
    image: "👩‍💼",
    text: "Vantage People gave me the clarity I needed to position myself competitively. Within 3 weeks of optimizing my CV and preparing with their frameworks, I secured my dream role in banking!",
    rating: 5,
  },
  {
    name: "Olumide Taiwo",
    role: "Management Consultant at PwC Nigeria",
    image: "👨‍💼",
    text: "I was stuck with no interview responses despite a strong academic record. Vantage People taught me how to translate my achievements into professional value. Game changer!",
    rating: 5,
  },
  {
    name: "Funke Okafor",
    role: "Tech Product Manager at Flutterwave",
    image: "👩‍💻",
    text: "The insider knowledge they shared about what recruiters actually look for was invaluable. I went from confused to confident and landed multiple offers from top tech companies.",
    rating: 5,
  },
  {
    name: "Ibrahim Hassan",
    role: "Corporate Strategy at Dangote Group",
    image: "👨‍💻",
    text: "Best career investment I've made! Vantage People's international standards approach helped me compete globally. Their strategic guidance is unmatched.",
    rating: 5,
  },
];
function TestimonialSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };
  return (
    <div>
      <div
        id="testimonials"
        className="bg-gradient-to-br from-blue-900 to-blue-800 py-20"
      >
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-blue-200">
              Join ambitious Nigerian professionals achieving their career goals
            </p>
          </div>
          <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <div className="text-center max-w-3xl mx-auto px-12">
              <div className="text-6xl mb-6">
                {testimonials[currentTestimonial].image}
              </div>
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map(
                  (_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 text-yellow-400 fill-current"
                    />
                  )
                )}
              </div>
              <p className="text-xl text-gray-700 mb-8 italic">
                "{testimonials[currentTestimonial].text}"
              </p>
              <h4 className="text-2xl font-bold text-gray-800">
                {testimonials[currentTestimonial].name}
              </h4>
              <p className="text-cyan-500 font-medium">
                {testimonials[currentTestimonial].role}
              </p>
            </div>
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonial(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === currentTestimonial
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 w-8"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-gray-500 mb-8 text-lg">
            Our clients have secured roles at:
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
            <span className="text-3xl font-bold text-gray-400">
              Access Bank
            </span>
            <span className="text-3xl font-bold text-gray-400">PwC</span>
            <span className="text-3xl font-bold text-gray-400">Deloitte</span>
            <span className="text-3xl font-bold text-gray-400">
              Flutterwave
            </span>
            <span className="text-3xl font-bold text-gray-400">Dangote</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialSection;
