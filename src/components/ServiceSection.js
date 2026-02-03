import { Briefcase, Target, User, Users } from "lucide-react";
import React from "react";

function ServiceSection({ services }) {
  return (
    <div>
      <div id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our Integrated Platforms
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three powerful services working together to transform your career
              journey
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all group hover:-translate-y-2"
              >
                <div className="flex justify-between items-start">
                  <div className="lg:w-16 lg:h-16 h-12 w-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-white">
                    {service.icon}
                  </div>
                  {service.comingSoon && (
                    <div className="bg-red-300 px-3 py-1 text-white rounded-md">
                      <p className="text-[0.75rem] lg:text-[0.865rem]font-[600]">
                        Coming Soon
                      </p>
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our Transformation Promise
            </h2>
            <p className="text-xl text-gray-600">
              From confusion to clarity. From potential to performance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-red-100">
              <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                BEFORE
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-600 text-sm">✗</span>
                  </div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Feeling:</span> Clueless
                    about converting qualifications to opportunities
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-600 text-sm">✗</span>
                  </div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Held back by:</span> Lack of
                    information and confidence
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-600 text-sm">✗</span>
                  </div>
                  <p className="text-gray-700">
                    Sending CVs with no responses, frustrated with unclear
                    career direction
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-green-100">
              <div className="inline-block bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                AFTER
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Now feeling:</span>{" "}
                    Confident and ready for strategic action
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <p className="text-gray-700">
                    <span className="font-semibold">What's possible:</span> Top
                    companies, global competition, faster goals
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <p className="text-gray-700">
                    Landing interviews at dream companies with clear positioning
                    and insider knowledge
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Who We Serve
            </h3>
            <p className="text-lg text-gray-600 text-center mb-8">
              Ambitious Nigerian professionals who refuse to let confusion or
              outdated advice limit their potential
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <User className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Students</h4>
                <p className="text-sm text-gray-600">
                  Final-year students preparing for the job market
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Graduates</h4>
                <p className="text-sm text-gray-600">
                  Frustrated with lack of interview responses
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Professionals</h4>
                <p className="text-sm text-gray-600">
                  Seeking career transitions or advancement
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Organizations</h4>
                <p className="text-sm text-gray-600">
                  Companies building world-class talent pipelines
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceSection;
