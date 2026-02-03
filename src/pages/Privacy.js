import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

function Privacy() {
  const [activeSection, setActiveSection] = useState("introduction");

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = useNavigate();
  const scrollToForm = () => {
    setMobileMenuOpen(false);
    document
      .getElementById("payment-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSectionHeader = (id) => {
    setMobileMenuOpen(false);
    navigate(`/?scrollTo=${id}`);

    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        scrollToForm={scrollToForm}
        scrollToSection={scrollToSectionHeader}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br pt-[200px] from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm uppercase tracking-wide text-gray-500 mb-4">
            PRIVACY POLICY
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            We care more about your
            <br />
            privacy than ever!
          </h1>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <aside className="hidden lg:block lg:w-64 flex-shrink-0">
            <div className="lg:sticky lg:top-24 bg-white rounded-2xl shadow-sm p-6 space-y-2">
              <h3 className="text-xs uppercase tracking-wide text-gray-400 mb-4 font-semibold">
                Overview
              </h3>
              <nav className="space-y-1">
                {[
                  { id: "introduction", label: "Introduction" },
                  {
                    id: "information-collect",
                    label: "Information We Collect",
                  },
                  { id: "how-we-use", label: "How We Use Your Information" },
                  {
                    id: "data-sharing",
                    label: "How We Share Your Information",
                  },
                  { id: "data-security", label: "Data Security" },
                  { id: "data-retention", label: "Data Retention" },
                  { id: "user-rights", label: "Your Rights" },
                  { id: "cookies", label: "Cookies Policy" },
                  { id: "contact", label: "Contact Us" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors text-sm ${
                      activeSection === item.id
                        ? "bg-blue-50 text-blue-600 font-medium"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <main className="flex-1 min-w-0">
            <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 space-y-12">
              {/* 1. INTRODUCTION */}
              <section id="introduction">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  1. INTRODUCTION
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Vantage People ("we," "us," or "our") is committed to
                  protecting your privacy. This Privacy Policy explains how we
                  collect, use, store, and protect your personal information
                  when you use our website or services.
                </p>
              </section>

              {/* 2. INFORMATION WE COLLECT */}
              <section id="information-collect">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  2. INFORMATION WE COLLECT
                </h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      2.1 Information You Provide Directly
                    </h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">
                          •
                        </span>
                        <span>
                          <strong>Contact Information:</strong> Name, email
                          address, phone number, location
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">
                          •
                        </span>
                        <span>
                          <strong>Professional Information:</strong> Education,
                          work experience, skills, achievements, career goals
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">
                          •
                        </span>
                        <span>
                          <strong>Payment Information:</strong> Processed by
                          Paystack (we do not store credit card details)
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">
                          •
                        </span>
                        <span>
                          <strong>Communications:</strong> Emails, messages,
                          feedback, testimonials
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      2.2 Information Collected Automatically
                    </h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">
                          •
                        </span>
                        <span>
                          <strong>Usage Data:</strong> Pages visited, time
                          spent, clicks, navigation patterns
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">
                          •
                        </span>
                        <span>
                          <strong>Device Information:</strong> IP address,
                          browser type, operating system
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">
                          •
                        </span>
                        <span>
                          <strong>Cookies:</strong> We use cookies to improve
                          your experience
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 3. HOW WE USE YOUR INFORMATION */}
              <section id="how-we-use">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  3. HOW WE USE YOUR INFORMATION
                </h2>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Provide Services
                    </h3>
                    <p className="text-gray-600">
                      Deliver the services you purchased, communicate about your
                      order, schedule appointments, and send deliverables.
                    </p>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Improve Our Services
                    </h3>
                    <p className="text-gray-600">
                      Understand how our services are used and identify areas
                      for improvement.
                    </p>
                  </div>
                  <div className="bg-cyan-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Marketing (With Your Consent)
                    </h3>
                    <p className="text-gray-600">
                      Send career tips and resources, notify you of new
                      services. You can unsubscribe anytime.
                    </p>
                  </div>
                </div>
              </section>

              {/* 4. HOW WE SHARE YOUR INFORMATION */}
              <section id="data-sharing">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  4. HOW WE SHARE YOUR INFORMATION
                </h2>
                <div className="space-y-6">
                  <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl">
                    <p className="text-gray-700 font-semibold mb-2">
                      We Do NOT Sell Your Data
                    </p>
                    <p className="text-gray-600">
                      We never sell, rent, or trade your personal information to
                      third parties for marketing purposes.
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-3">
                      We share information with:
                    </p>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">
                          •
                        </span>
                        <span>
                          <strong>Paystack:</strong> To process payments
                          securely
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">
                          •
                        </span>
                        <span>
                          <strong>Email Service:</strong> To send communications
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">
                          •
                        </span>
                        <span>
                          <strong>Cloud Storage:</strong> To securely store
                          files
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">
                          •
                        </span>
                        <span>
                          <strong>Legal Requirements:</strong> If required by
                          law or to protect our rights
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 5. DATA SECURITY */}
              <section id="data-security">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  5. DATA SECURITY
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  We implement measures including secure encrypted connections
                  (SSL/HTTPS), password-protected systems, and limited access to
                  personal information.
                </p>
              </section>

              {/* 6. DATA RETENTION */}
              <section id="data-retention">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  6. DATA RETENTION
                </h2>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">
                      •
                    </span>
                    <span>
                      <strong>Active Clients:</strong> Data retained during
                      service delivery plus 90 days
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">
                      •
                    </span>
                    <span>
                      <strong>Completed Services:</strong> Files retained for 1
                      year for revision/reference
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">
                      •
                    </span>
                    <span>
                      <strong>Payment Records:</strong> Retained for 7 years for
                      tax/legal compliance
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">
                      •
                    </span>
                    <span>
                      <strong>Marketing List:</strong> Until you unsubscribe
                    </span>
                  </li>
                </ul>
              </section>

              {/* 7. YOUR RIGHTS */}
              <section id="user-rights">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  7. YOUR RIGHTS
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-600">You have the right to:</p>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">
                        •
                      </span>
                      <span>Request a copy of your personal data</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">
                        •
                      </span>
                      <span>Request correction of inaccurate information</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">
                        •
                      </span>
                      <span>Request deletion of your data</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">
                        •
                      </span>
                      <span>Opt-out of marketing communications</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">
                        •
                      </span>
                      <span>Request your data in a portable format</span>
                    </li>
                  </ul>
                  <p className="text-gray-600 mt-4">
                    To exercise these rights, email{" "}
                    <a
                      href="mailto:contact@vantagepeoplehq.com"
                      className="text-blue-600 hover:underline"
                    >
                      contact@vantagepeoplehq.com
                    </a>
                  </p>
                </div>
              </section>

              {/* 8. COOKIES POLICY */}
              <section id="cookies">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  8. COOKIES POLICY
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    Cookies are small text files stored on your device when you
                    visit our website. We use essential cookies (required for
                    functionality), analytics cookies (to understand site
                    usage), and marketing cookies (to show relevant ads).
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    You can control cookies through your browser settings.
                    Disabling cookies may affect website functionality.
                  </p>
                </div>
              </section>

              {/* 9. CONTACT US */}
              <section id="contact">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  9. CONTACT US
                </h2>
                <div className="text-gray-600 leading-relaxed space-y-2">
                  <p>Questions about this Privacy Policy?</p>
                  <p>
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:contact@vantagepeoplehq.com"
                      className="text-blue-600 hover:underline"
                    >
                      contact@vantagepeoplehq.com
                    </a>
                  </p>
                  <p>
                    <strong>Website:</strong>{" "}
                    <a
                      href="https://www.vantagepeoplehq.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      www.vantagepeoplehq.com
                    </a>
                  </p>
                </div>
              </section>

              {/* Last Updated */}
              <div className="pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  Last Updated: January 6, 2025
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Privacy;
