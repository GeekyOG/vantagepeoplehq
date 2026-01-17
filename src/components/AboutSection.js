import { Award, Sparkles, Target, Zap } from "lucide-react";
import React from "react";

function AboutSection() {
  return (
    <div id="about">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            The Vantage Difference
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            What sets us apart in Nigeria's career development landscape
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
            <div className="w-14 h-14 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mb-4">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Clarity Over Confusion
            </h3>
            <p className="text-gray-600">
              No vague motivational talk—just clear pathways to results backed
              by proven frameworks
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
            <div className="w-14 h-14 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              International Standards
            </h3>
            <p className="text-gray-600">
              UK, US, EU standards for Nigerian talent while understanding local
              market realities
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
            <div className="w-14 h-14 bg-gradient-to-r from-orange-400 to-red-500 rounded-xl flex items-center justify-center mb-4">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Insider Knowledge, Democratized
            </h3>
            <p className="text-gray-600">
              We share strategies that traditionally stayed behind closed doors
              in banking and consulting
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                  Story
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Vantage People was born from a simple observation: talented
                Nigerian graduates and professionals struggle not because they
                lack ability, but because they lack clarity.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our founder spent over 10 years navigating the Nigerian and UK
                banking industries—experiencing firsthand the gap between what
                universities teach and what employers actually value.
              </p>
              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border-l-4 border-cyan-500 p-6 mb-8 rounded-r-xl">
                <p className="text-gray-700 italic">
                  "Success isn't just about credentials—it's about knowing how
                  to position yourself, articulate your value, and navigate the
                  hidden curriculum of professional advancement."
                </p>
              </div>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-500 mb-2">
                    10+
                  </div>
                  <div className="text-gray-600 text-sm">
                    Years Banking Expertise
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-500 mb-2">
                    44%
                  </div>
                  <div className="text-gray-600 text-sm">
                    Graduates Need Clarity
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-500 mb-2">3</div>
                  <div className="text-gray-600 text-sm">
                    Integrated Platforms
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-100 to-blue-100 rounded-3xl p-8 shadow-xl">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        Our Purpose
                      </h3>
                      <p className="text-gray-600">
                        Bridge the gap between academic excellence and career
                        success by providing the clarity, strategy, and insider
                        knowledge needed to compete globally
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        Our Vision
                      </h3>
                      <p className="text-gray-600">
                        To become Africa's most trusted career development
                        ecosystem where every ambitious professional has access
                        to world-class guidance
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        Results Accountability
                      </h3>
                      <p className="text-gray-600">
                        We measure success by outcomes, not activity. Your
                        career advancement is our metric
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
