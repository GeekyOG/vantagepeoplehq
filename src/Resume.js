import React, { useState } from "react";
import {
  FileText,
  CheckCircle,
  Briefcase,
  Award,
  User,
  Phone,
  Mail,
  Clock,
  Star,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Send,
  Zap,
  Target,
  Users,
  Menu,
  X,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function VantagePeopleLanding() {
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

  const [submitted, setSubmitted] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const services = [
    {
      icon: <User className="w-8 h-8" />,
      title: "Vantage Career",
      description:
        "Empowering individuals with CV optimization, interview mastery, and strategic career guidance to compete globally",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Vantage HR",
      description:
        "Partnering with organizations to develop high-performing talent and build world-class teams",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Vantage Recruitment",
      description:
        "Connecting exceptional Nigerian candidates with opportunity through strategic placement",
    },
  ];

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

  const scrollToForm = () => {
    setMobileMenuOpen(false);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-lg w-full text-center">
          <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-14 h-14 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to Vantage People!
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Thank you for taking the first step towards career clarity. Our team
            will review your information and reach out within 24 hours to begin
            your transformation journey.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all text-lg font-medium"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-3 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span className="hidden sm:inline">
              Nigeria's Premier Career Development Ecosystem
            </span>
            <span className="sm:hidden">Career Development</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">
              contact@vantagepeoplehq.com
            </span>
          </div>
        </div>
      </div>

      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-800">
                Vantage<span className="text-cyan-500">People</span>
              </span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 hover:text-cyan-500 transition"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-cyan-500 transition"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-700 hover:text-cyan-500 transition"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-gray-700 hover:text-cyan-500 transition"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-cyan-500 transition"
              >
                Contact
              </button>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={scrollToForm}
                className="hidden md:block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all font-medium"
              >
                Get Started
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-gray-700 hover:text-cyan-500 transition"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4 border-t pt-4 absolute bg-white right-0 left-0 px-8 shadow-lg">
              <button
                onClick={() => scrollToSection("home")}
                className="block w-full text-left text-gray-700 hover:text-cyan-500 transition py-2"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left text-gray-700 hover:text-cyan-500 transition py-2"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left text-gray-700 hover:text-cyan-500 transition py-2"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="block w-full text-left text-gray-700 hover:text-cyan-500 transition py-2"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left text-gray-700 hover:text-cyan-500 transition py-2"
              >
                Contact
              </button>
              <button
                onClick={scrollToForm}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all font-medium"
              >
                Get Started
              </button>
            </div>
          )}
        </div>
      </nav>

      <div
        id="home"
        className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-yellow-300" />
                <span className="text-sm font-medium">
                  10+ Years Nigerian & International Banking Expertise
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-5xl font-bold mb-6 leading-tight">
                Career{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
                  Clarity.
                </span>{" "}
                Global Competitiveness.
              </h1>

              <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
                Bridge the gap between academic excellence and career success.
                Get the strategic guidance, insider knowledge, and international
                standards that turn potential into achievement.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={scrollToForm}
                  className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="bg-white bg-opacity-10 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-20 transition-all border-2 border-white border-opacity-30"
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

      <div id="about" className="bg-white py-20">
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
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-white">
                  {service.icon}
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
                    <p className="text-gray-600">
                      From Potential to Performance
                    </p>
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

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold">
              Vantage<span className="text-cyan-400">People</span>
            </span>
          </div>
          <p className="text-gray-400 mb-2">
            Career Clarity. Global Competitiveness.
          </p>
          <p className="text-gray-500 text-sm">
            Nigeria's Premier Career Development Ecosystem
          </p>
          <p className="text-gray-600 text-sm mt-4">
            © 2025 Vantage People. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
