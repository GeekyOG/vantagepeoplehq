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

export default function CVServiceLanding() {
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
      name: "Sarah Johnson",
      role: "Software Engineer at Google",
      image: "👩‍💼",
      text: "CVPRO transformed my resume completely! I landed interviews at 5 top tech companies within 2 weeks. The attention to detail and ATS optimization made all the difference.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Marketing Director at Amazon",
      image: "👨‍💼",
      text: "I was struggling to get responses from recruiters. After using CVPRO's service, I got my dream job at Amazon! The professional presentation was outstanding.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Data Analyst at Microsoft",
      image: "👩‍💻",
      text: "The team understood exactly what I needed. They highlighted my achievements perfectly and created a modern, eye-catching design. Highly recommend!",
      rating: 5,
    },
    {
      name: "David Thompson",
      role: "Product Manager at Meta",
      image: "👨‍💻",
      text: "Best investment in my career! The turnaround was quick and the final product exceeded my expectations. Got multiple job offers within a month.",
      rating: 5,
    },
  ];

  const services = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Professional Resume Writing",
      description:
        "Custom-crafted resumes tailored to your industry and career goals, optimized for ATS systems",
      price: "$99",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Executive CV Package",
      description:
        "Premium service for senior professionals including cover letter and LinkedIn optimization",
      price: "$199",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Career Consultation",
      description:
        "One-on-one session with expert career coaches to align your CV with your career objectives",
      price: "$149",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Rush Delivery",
      description:
        "Need it fast? Get your professionally crafted resume within 12 hours",
      price: "$79",
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
    document
      .getElementById("request-form")
      .scrollIntoView({ behavior: "smooth" });
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
            Request Received!
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Thank you for choosing our professional CV building service. We'll
            review your information and get back to you within 24 hours.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all text-lg font-medium"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-3 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">Call Us: (252) 555-0126</span>
            <span className="sm:hidden">(252) 555-0126</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">info@cvpro.com</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-800">
                CV<span className="text-cyan-500">PRO</span>
              </span>
            </div>

            {/* Desktop Menu */}
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

              {/* Mobile Menu Button */}
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

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4 border-t pt-4">
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

      {/* Enhanced Hero Section */}
      <div
        id="home"
        className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700"
      >
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-500"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-yellow-300" />
                <span className="text-sm font-medium">
                  Trusted by 1.5K+ Professionals
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                The{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
                  Resume
                </span>{" "}
                to get your Dream job
              </h1>

              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                Create an impressive resume professionally crafted for you.
                Stand out from the competition and land interviews faster.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={scrollToForm}
                  className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  Request My Resume
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="bg-white bg-opacity-10 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-20 transition-all border-2 border-white border-opacity-30"
                >
                  View Services
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
                    5K+ Happy Clients
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
                    4.9/5 Rating
                  </span>
                </div>
              </div>
            </div>

            {/* Right Content - Resume Mockups */}
            <div className="relative h-96 md:h-[600px]">
              {/* Main Resume Card */}
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

              {/* Background Resume Cards */}
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

              {/* Floating Icons */}
              <div className="absolute top-10 right-10 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg animate-bounce z-40">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div className="absolute bottom-10 left-10 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg animate-bounce delay-300 z-40">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
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

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
            <div className="w-14 h-14 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Expert Writers
            </h3>
            <p className="text-gray-600">
              Professional CV writers with years of experience across multiple
              industries
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
            <div className="w-14 h-14 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mb-4">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              ATS Optimized
            </h3>
            <p className="text-gray-600">
              Resumes designed to pass applicant tracking systems and reach
              recruiters
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
            <div className="w-14 h-14 bg-gradient-to-r from-orange-400 to-red-500 rounded-xl flex items-center justify-center mb-4">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Fast Delivery
            </h3>
            <p className="text-gray-600">
              Get your professionally crafted resume within 24-48 hours
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                About{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                  CVPRO
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We are a team of professional resume writers, career coaches,
                and industry experts dedicated to helping job seekers land their
                dream positions. With over 10 years of experience, we've helped
                thousands of professionals across various industries achieve
                their career goals.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our mission is to empower individuals by showcasing their unique
                skills, experiences, and achievements in a way that captures the
                attention of hiring managers and passes through automated
                screening systems.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-500 mb-2">
                    10+
                  </div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-500 mb-2">
                    5K+
                  </div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-500 mb-2">
                    98%
                  </div>
                  <div className="text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-100 to-blue-100 rounded-3xl p-8 shadow-xl">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        Expert Team
                      </h3>
                      <p className="text-gray-600">
                        Certified professional resume writers and career
                        consultants
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        Industry Focus
                      </h3>
                      <p className="text-gray-600">
                        Specialized knowledge across 50+ industries and sectors
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        Proven Results
                      </h3>
                      <p className="text-gray-600">
                        Track record of clients landing roles at Fortune 500
                        companies
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our range of professional services designed to boost
              your career
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all group hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-white">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="flex items-center justify-between">
                  {/* <span className="text-3xl font-bold text-cyan-500">
                    {service.price}
                  </span> */}
                  {/* <button
                    onClick={scrollToForm}
                    className="text-cyan-500 hover:text-cyan-600 font-semibold"
                  >
                    Choose →
                  </button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
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
              Join thousands of satisfied professionals who landed their dream
              jobs
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
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 w-8"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-gray-500 mb-8 text-lg">
            Our clients are employed by:
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
            <span className="text-3xl font-bold text-gray-400">Google</span>
            <span className="text-3xl font-bold text-gray-400">Microsoft</span>
            <span className="text-3xl font-bold text-gray-400">Amazon</span>
            <span className="text-3xl font-bold text-gray-400">Meta</span>
            <span className="text-3xl font-bold text-gray-400">Apple</span>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Get In Touch
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Have questions? We're here to help! Reach out to us and we'll
                get back to you as soon as possible.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">
                      Phone
                    </h3>
                    <p className="text-gray-600">(252) 555-0126</p>
                    <p className="text-sm text-gray-500">Mon-Fri 9am-6pm EST</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">
                      Email
                    </h3>
                    <p className="text-gray-600">info@cvpro.com</p>
                    <p className="text-sm text-gray-500">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">
                      Location
                    </h3>
                    <p className="text-gray-600">123 Career Avenue</p>
                    <p className="text-gray-600">New York, NY 10001</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Send Us a Message
              </h3>
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
                  />
                </div>
                <div>
                  <textarea
                    rows="4"
                    placeholder="Your Message"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
                  />
                </div>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2">
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Request Form */}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold">
              CV<span className="text-cyan-400">PRO</span>
            </span>
          </div>
          <p className="text-gray-400 mb-4"></p>
        </div>
      </footer>
    </div>
  );
}
