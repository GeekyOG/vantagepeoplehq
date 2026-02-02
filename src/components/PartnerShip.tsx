import React, { useState } from "react";
import {
  Sparkles,
  CheckCircle,
  Clock,
  Shield,
  ArrowRight,
  Mail,
  Phone,
  Users,
  Award,
  TrendingUp,
  FileText,
  Linkedin,
  Target,
  Zap,
  ChevronRight,
  Star,
  Lock,
  Send,
  Loader2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { paymentManager } from "../api";
import Footer from "./Footer";

export default function PartnershipPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    stateOfService: "",
    targetIndustry: "",
    currentStatus: "",
    linkedin: "",
    experience: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const checkPaymentStatus = async (reference) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/payment/verify/${reference}`,
      );
      const data = await response.json();

      if (
        data.success &&
        (data.data.status === "success" || data.data.status === "failed")
      ) {
        // Payment successful - redirect to success page
        window.location.href = `https://vantagepeoplehq.vercel.app/payment-successful?trxref=${reference}&reference=${reference}`;
        return true;
      }
      return false;
    } catch (error) {
      console.error("Payment verification failed:", error);
      return false;
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log("Form submitted:", formData);

    setLoading(true);
    setError("");

    try {
      // Prepare payment data
      const paymentData = {
        email: formData.email,
        name: formData.fullName,
        phone: formData.phone,
        amount: 10000,
        metadata: {
          service: "NYSC Discount Package",
          delivery: `72 hrs`,
          tier: "NYSC Corpers",
        },
      };

      const paymentResponse = await paymentManager.initiate(paymentData);

      //   paymentManager.trackAbandonmentOnExit();

      window.open(paymentResponse.authorization_url, "_blank");

      // Start checking payment status after 10 seconds
      setTimeout(() => {
        checkPaymentStatus(paymentResponse.reference);
      }, 10000);

      // Continue checking every 5 seconds for up to 5 minutes
      const checkInterval = setInterval(async () => {
        const isSuccessful = await checkPaymentStatus(
          paymentResponse.reference,
        );
        if (isSuccessful) {
          clearInterval(checkInterval);
        }
      }, 5000);

      // Stop checking after 5 minutes
      setTimeout(() => {
        clearInterval(checkInterval);
        setLoading(false);
      }, 300000);
    } catch (err) {
      setError(
        err.message || "Failed to initialize payment. Please try again.",
      );
      setLoading(false);
    }
  };

  const benefits = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Professional CV",
      description:
        "ATS-optimized, professionally formatted, tailored to your target roles",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn Profile Makeover",
      description:
        "Compelling headline, achievement-focused content, 10x better recruiter visibility",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Weekly Career Insights",
      description:
        "Job search strategies, interview tips, networking advice, exclusive opportunities",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Free Revisions",
      description: "One round of revisions—we work until you're 100% satisfied",
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Pay ₦10,000",
      description: "Instant confirmation email",
      icon: <Zap className="w-8 h-8" />,
    },
    {
      number: "2",
      title: "Fill the Form",
      description: "Share your details (15 minutes)",
      icon: <FileText className="w-8 h-8" />,
    },
    {
      number: "3",
      title: "Get Your Package",
      description: "Receive within 72 hours",
      icon: <CheckCircle className="w-8 h-8" />,
    },
  ];

  const stats = [
    { number: "6 sec", label: "CV Review Time" },
    { number: "₦10,000", label: "Investment Only" },
    { number: "72 hrs", label: "Delivery Time" },
    { number: "100%", label: "Satisfaction" },
  ];

  //   if (submitted) {
  //     return (
  //       <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 flex items-center justify-center p-4">
  //         <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-2xl w-full text-center">
  //           <div className="w-32 h-32 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-8 relative">
  //             <CheckCircle className="w-16 h-16 text-white" />
  //             <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-ping opacity-20"></div>
  //           </div>
  //           <h2 className="text-5xl font-bold text-gray-900 mb-6">
  //             You're All Set! 🎉
  //           </h2>
  //           <p className="text-xl text-gray-600 mb-4">
  //             Your payment has been confirmed. Check your email for next steps.
  //           </p>
  //           <p className="text-lg text-gray-500 mb-8">
  //             We'll send you a detailed form to complete your CV and LinkedIn
  //             profile. Expect your professional package within 72 hours.
  //           </p>
  //           <div className="bg-cyan-50 rounded-2xl p-6 mb-8">
  //             <p className="text-cyan-700 font-medium">
  //               📧 Confirmation email sent to:{" "}
  //               <span className="font-bold">{formData.email}</span>
  //             </p>
  //           </div>
  //           <button
  //             onClick={() => setSubmitted(false)}
  //             className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full hover:shadow-lg transition-all text-lg font-semibold"
  //           >
  //             Back to Home
  //           </button>
  //         </div>
  //       </div>
  //     );
  //   }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div>
                <Link to={"/"}>
                  <img src="/logo.png" className="h-[50px] invert" alt="logo" />
                </Link>{" "}
              </div>
            </div>
            <button
              onClick={() =>
                document
                  .getElementById("payment-form")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all font-semibold text-sm md:text-base flex items-center gap-2"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-700"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-cyan-100 px-4 py-2 rounded-full mb-6">
                <Users className="w-4 h-4 text-cyan-600" />
                <span className="text-sm font-semibold text-cyan-700">
                  Partnership Announcement
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Launch Your Career with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                  Confidence
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                Professional CV & LinkedIn Profile for NYSC Corpers
              </p>

              <div className="bg-white rounded-2xl p-6 shadow-xl mb-8 border-2 border-cyan-100">
                <p className="text-gray-700 mb-2">
                  In partnership with{" "}
                  <span className="font-bold text-cyan-600">
                    Sansvid M. International
                  </span>
                </p>
                <p className="text-gray-600">
                  We're helping corps members like you stand out in today's
                  competitive job market—starting at just{" "}
                  <span className="font-bold text-3xl text-cyan-600">
                    ₦10,000
                  </span>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={() =>
                    document
                      .getElementById("payment-form")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-5 rounded-full text-lg font-bold hover:shadow-2xl transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  Get Started Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() =>
                    document
                      .getElementById("how-it-works")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="bg-white text-cyan-600 px-8 py-5 rounded-full text-lg font-bold hover:shadow-lg transition-all border-2 border-cyan-200"
                >
                  Learn More
                </button>
              </div>

              <div className="flex items-center gap-2 text-gray-600">
                <Lock className="w-5 h-5 text-cyan-500" />
                <span className="text-sm">
                  Secure Payment | ⚡ Instant Confirmation | ✅ Satisfaction
                  Guaranteed
                </span>
              </div>
            </div>

            {/* Right Content - Stats Cards */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 border-t-4 border-cyan-500"
                  >
                    <div className="text-4xl font-bold text-cyan-600 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-orange-400 to-red-500 text-white px-6 py-3 rounded-full shadow-2xl transform rotate-12 animate-pulse">
                <span className="font-bold text-lg">Save ₦15,000!</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Announcement Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h2 className=" text-xl lg:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              We've Partnered with Sansvid M. International!
            </h2>
            <p className=" lg:text-xl text-gray-600 mb-6 leading-relaxed">
              Whether you're wrapping up your service year or planning your next
              move, your CV and online presence can make or break opportunities.
              That's why we've created this special program—to give you the
              professional edge you deserve without breaking the bank.
            </p>
            <p className="lg:text-2xl font-bold text-cyan-600">
              This isn't just about documents. It's about opening doors to the
              future you've been working toward.
            </p>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What You Get
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything You Need to Stand Out —{" "}
              <span className="font-bold text-cyan-600 text-3xl">₦10,000</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform text-white">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                      {benefit.title}
                      <CheckCircle className="w-5 h-5 text-cyan-500" />
                    </h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              From Payment to Professional in 3 Simple Steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                    {step.icon}
                  </div>
                  <div className="text-5xl font-bold text-cyan-600 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-lg">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ChevronRight className="w-8 h-8 text-cyan-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Matters Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-emerald-500 to-teal-500"></div>
        </div>
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-4xl md:text-5xl font-bold mb-6">
              Your CV Has 6 Seconds to Impress
            </h2>
            <p className="lg:text-xl text-gray-300 mb-8 leading-relaxed">
              Most corpers leave NYSC with generic CVs and incomplete LinkedIn
              profiles. Recruiters spend just{" "}
              <span className="font-bold text-cyan-400">6 seconds</span>{" "}
              deciding if they'll read further or move on.
            </p>
            <p className="lg:text-2xl text-gray-200 mb-8">
              For the price of a few meals out, you're investing in a tool that
              could determine your salary, career trajectory, and professional
              opportunities for years to come.
            </p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-8 border-2 border-cyan-400 max-w-2xl mx-auto">
            <div className="flex justify-between items-center mb-4">
              <span className="text-2xl font-bold text-gray-300 line-through">
                Regular Value: ₦25,000+
              </span>
              <Award className="w-8 h-8 text-cyan-400" />
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-cyan-400 mb-2">
                ₦10,000
              </div>
              <div className="text-xl text-gray-300 font-semibold">
                Exclusive Partnership Rate
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Form Section */}
      <section
        id="payment-form"
        className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50"
      >
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-xl lg:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Your Next Chapter Starts Here
            </h2>
            <p className="text-[0.865rem] lg:text-xl text-gray-600">
              Don't wait until you're desperate for a job. The corps members who
              succeed are the ones who prepare while others procrastinate.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl p-6 mb-8 text-center">
              <div className="text-xl lg:text-5xl font-bold mb-2">₦10,000</div>
              <div className="lg:text-lg">Complete Professional Package</div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
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
                  <label className="block text-gray-700 font-semibold mb-2">
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
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
                    placeholder="080XXXXXXXX"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    State of Service *
                  </label>
                  <input
                    type="text"
                    name="stateOfService"
                    required
                    value={formData.stateOfService}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
                    placeholder="Lagos"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Target Industry/Field *
                </label>
                <input
                  type="text"
                  name="targetIndustry"
                  required
                  value={formData.targetIndustry}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
                  placeholder="e.g., Technology, Finance, Marketing"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Current NYSC Status *
                </label>
                <select
                  name="currentStatus"
                  required
                  value={formData.currentStatus}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
                >
                  <option value="">Select your status</option>
                  <option value="ongoing">Currently Serving</option>
                  <option value="completed">Completed Service</option>
                  <option value="awaiting">Awaiting Mobilization</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  LinkedIn Profile URL (if available)
                </label>
                <input
                  type="url"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
                  placeholder="https://linkedin.com/in/yourprofile"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Brief Work/Internship Experience
                </label>
                <textarea
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
                  placeholder="Tell us about your work experience, internships, or projects..."
                />
              </div>

              <button
                disabled={loading}
                type="submit"
                className="w-full px-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-5 rounded-xl  lg:text-xl font-bold hover:shadow-2xl transition-all transform hover:scale-105 flex items-center justify-center gap-3"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    Secure My Spot Now - ₦10,000
                    <ArrowRight className="w-6 h-6" />
                  </>
                )}
              </button>

              <div className="text-center text-sm text-gray-500">
                🔒 Secure Payment | ⚡ Instant Confirmation | ✅ Satisfaction
                Guaranteed
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
