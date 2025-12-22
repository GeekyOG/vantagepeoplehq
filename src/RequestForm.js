import { Award, Briefcase, FileText, User } from "lucide-react";
import React, { useState } from "react";

function RequestForm() {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    careerLevel: "",
    industry: "",
    targetRole: "",
    cvStyle: "",
    currentEmployment: "",
    yearsExperience: "",
    education: "",
    keySkills: "",
    achievements: "",
    additionalInfo: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    setSubmitted(true);
    console.log("Form submitted:", formData);
  };

  return (
    <div id="request-form" className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Request Your Professional CV
            </h2>
            <p className="text-lg text-gray-600">
              Fill out the form below and we'll create a stunning CV that gets
              you noticed
            </p>
          </div>

          <div className="space-y-8">
            {/* Personal Information */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2 pb-3 border-b-2 border-cyan-500">
                <User className="w-6 h-6 text-cyan-500" />
                Personal Information
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Career Level *
                  </label>
                  <select
                    name="careerLevel"
                    required
                    value={formData.careerLevel}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
                  >
                    <option value="">Select level</option>
                    <option value="entry">Entry Level</option>
                    <option value="mid">Mid-Level</option>
                    <option value="senior">Senior Level</option>
                    <option value="executive">Executive</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Career Information */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2 pb-3 border-b-2 border-cyan-500">
                <Briefcase className="w-6 h-6 text-cyan-500" />
                Career Information
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Industry/Field *
                  </label>
                  <input
                    type="text"
                    name="industry"
                    required
                    value={formData.industry}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
                    placeholder="e.g., Technology, Healthcare, Finance"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Target Role *
                  </label>
                  <input
                    type="text"
                    name="targetRole"
                    required
                    value={formData.targetRole}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
                    placeholder="e.g., Software Engineer, Marketing Manager"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Years of Experience *
                  </label>
                  <input
                    type="text"
                    name="yearsExperience"
                    required
                    value={formData.yearsExperience}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
                    placeholder="e.g., 5 years"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Current Employment Status
                  </label>
                  <select
                    name="currentEmployment"
                    value={formData.currentEmployment}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
                  >
                    <option value="">Select status</option>
                    <option value="employed">Currently Employed</option>
                    <option value="unemployed">Unemployed</option>
                    <option value="student">Student</option>
                    <option value="freelance">Freelancer</option>
                  </select>
                </div>
              </div>
            </div>

            {/* CV Style */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2 pb-3 border-b-2 border-cyan-500">
                <FileText className="w-6 h-6 text-cyan-500" />
                CV Style Preferences
              </h3>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Preferred CV Style *
                </label>
                <select
                  name="cvStyle"
                  required
                  value={formData.cvStyle}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
                >
                  <option value="">Select style</option>
                  <option value="modern">Modern & Creative</option>
                  <option value="professional">Professional & Classic</option>
                  <option value="minimal">Minimal & Clean</option>
                  <option value="executive">Executive & Formal</option>
                </select>
              </div>
            </div>

            {/* Experience Details */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2 pb-3 border-b-2 border-cyan-500">
                <Award className="w-6 h-6 text-cyan-500" />
                Experience Details
              </h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Education Background *
                  </label>
                  <textarea
                    name="education"
                    required
                    value={formData.education}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
                    placeholder="List your degrees, institutions, and graduation years"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Key Skills *
                  </label>
                  <textarea
                    name="keySkills"
                    required
                    value={formData.keySkills}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
                    placeholder="List your technical and soft skills"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Notable Achievements *
                  </label>
                  <textarea
                    name="achievements"
                    required
                    value={formData.achievements}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
                    placeholder="Highlight your key accomplishments, awards, certifications, or significant projects"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
                    placeholder="Any special requirements, preferences, or additional details you'd like us to know"
                  />
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-5 rounded-full text-xl font-bold hover:shadow-2xl transition-all transform hover:scale-105"
              >
                Submit CV Request
              </button>
              <p className="text-sm text-gray-500 text-center mt-4">
                We'll review your request and contact you within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequestForm;
