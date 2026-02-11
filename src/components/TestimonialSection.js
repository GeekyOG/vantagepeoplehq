import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import React, { useState } from "react";

const testimonials = [
  {
    name: "Rotimi",
    role: "Assistant Product Manager – Yorkshire Building Society – United Kingdom",
    image: "",
    text: "Working with Vantage People was a game-changer for my career transition. They didn't just optimize my CV, they completely transformed how I presented my experience and value proposition. The interview strategies they provided were incredibly practical and gave me the confidence I needed to stand out. I'm thrilled to say I secured my role as Assistant Product Manager, and I genuinely believe their guidance was instrumental in making that happen. Highly recommended for anyone serious about advancing their career.",
    rating: 5,
  },
  {
    name: "Abiodun",
    role: "Operations Specialist – Amazon United Kingdom",
    image: "👨‍💼",
    text: "The CV optimization service from Vantage People exceeded my expectations. They took the time to understand my operational expertise and restructured my CV to highlight my key achievements in a way that truly resonated with hiring managers. The transformation was remarkable—my CV went from being overlooked to opening doors. Their attention to detail and strategic approach made all the difference in how I present myself professionally.",
    rating: 5,
  },
  {
    name: "Abdulrahman",
    role: "Network Engineer – United Bank for Africa",
    image: "👩‍💻",
    text: "The CV optimization from Vantage People was exactly what I needed. They transformed how I present my networking expertise and technical achievements, making my CV far more competitive. Professional, efficient, and highly effective.",
    rating: 5,
  },
  {
    name: "Wunmi",
    role: "Graduate",
    image: "👨‍💻",
    text: "As a recent graduate, I struggled to get my CV noticed by employers. Vantage People completely changed that. They optimized my CV to highlight my strengths, academic achievements, and transferable skills in a way that finally got attention. Since working with them, I've been getting interviews—something that wasn't happening before. I'm confident that landing my first role is just around the corner, and I have their expertise to thank for it.",
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
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
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
                  ),
                )}
              </div>
              <p className="lg:text-xl text-gray-700 mb-8 italic">
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
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 opacity-50">
            <span className=" text-center text-2xl lg:text-3xl font-bold text-gray-400">
              Amazon
            </span>
            <span className=" text-center text-2xl lg:text-3xl font-bold text-gray-400">
              United Bank for Africa
            </span>
            <span className=" text-center text-2xl lg:text-3xl font-bold text-gray-400">
              Yorkshire Building Society
            </span>
            <span className=" text-center text-2xl lg:text-3xl font-bold text-gray-400">
              Access Bank
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialSection;
