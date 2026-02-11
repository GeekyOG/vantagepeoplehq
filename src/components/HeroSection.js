import { ArrowRight, CheckCircle, Sparkles, Star } from "lucide-react";
import React from "react";

function HeroSection({ scrollToForm, scrollToSection }) {
  return (
    <div
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mt-10 lg:mt-0 mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span className="text-sm font-medium">
                10+ years of providing
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6 leading-tight">
              Career{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
                Clarity.
              </span>{" "}
              Global Competitiveness.
            </h1>

            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
              Your qualifications got you this far. Strategic career guidance
              gets you even further. Expert positioning, insider knowledge, and
              international standards that turn applications into interviews.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={scrollToForm}
                className="group bg-gradient-to-r md:text-[0.75rem] from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full lg:text-lg font-semibold hover:shadow-2xl transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="bg-white md:text-[0.75rem] bg-opacity-10 backdrop-blur-sm text-white px-8 py-4 rounded-full lg:text-lg font-semibold hover:bg-opacity-20 transition-all border-2 border-white border-opacity-30"
              >
                Explore Services
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 border-2 border-white"></div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-blue-500 border-2 border-white"></div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 border-2 border-white"></div>
                </div>
                <span className="text-sm text-blue-100">
                  Trusted by Nigerian Professionals
                </span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
                <span className="text-sm text-blue-100 ml-2">
                  Banking, Consulting & Tech
                </span>
              </div>
            </div>
          </div>

          <div className="relative h-96 md:h-[600px]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 md:w-80 z-30">
              <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 transform hover:scale-105 transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                  <div className="flex-1">
                    <div className="h-3 bg-gray-800 rounded w-3/4 mb-2"></div>
                    <div className="h-2 bg-gray-300 rounded w-1/2"></div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-2 bg-gray-200 rounded w-full"></div>
                  <div className="h-2 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-2 bg-gray-200 rounded w-4/6"></div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="h-2 bg-purple-200 rounded w-3/4 mb-2"></div>
                    <div className="h-2 bg-purple-200 rounded w-2/3"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute top-1/4 left-0 w-56 md:w-64 z-20">
              <div className="bg-white rounded-2xl shadow-xl p-6 transform -rotate-6 opacity-90">
                <div className="space-y-2">
                  <div className="h-3 bg-blue-900 rounded w-3/4"></div>
                  <div className="h-2 bg-gray-300 rounded w-full"></div>
                  <div className="h-2 bg-gray-300 rounded w-5/6"></div>
                  <div className="mt-4 space-y-1">
                    <div className="h-2 bg-gray-200 rounded w-full"></div>
                    <div className="h-2 bg-gray-200 rounded w-4/5"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-1/4 right-0 w-56 md:w-64 z-20">
              <div className="bg-white rounded-2xl shadow-xl p-6 transform rotate-6 opacity-90">
                <div className="space-y-2">
                  <div className="h-3 bg-cyan-500 rounded w-2/3"></div>
                  <div className="h-2 bg-gray-300 rounded w-full"></div>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <div className="h-2 bg-gray-200 rounded"></div>
                    <div className="h-2 bg-gray-200 rounded"></div>
                    <div className="h-2 bg-gray-200 rounded"></div>
                    <div className="h-2 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute top-10 right-10 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg animate-bounce z-40">
              <Star className="w-6 h-6 text-white" />
            </div>
            <div className="absolute bottom-10 left-10 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg animate-bounce z-40">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
            fillOpacity="0.1"
          />
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#f0f9ff"
          />
        </svg>
      </div>
    </div>
  );
}

export default HeroSection;
