import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

function Terms() {
  const [activeSection, setActiveSection] = useState("acceptance");

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
            TERMS & CONDITIONS
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            We value transparency
            <br />
            and clarity!
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
                  { id: "acceptance", label: "Acceptance of Terms" },
                  { id: "services", label: "Services Description" },
                  { id: "payment", label: "Payment Terms" },
                  { id: "refund", label: "Refund Policy" },
                  { id: "delivery", label: "Service Delivery" },
                  { id: "responsibilities", label: "Client Responsibilities" },
                  { id: "disclaimers", label: "Disclaimers" },
                  { id: "contact", label: "Contact Information" },
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
              {/* 1. ACCEPTANCE OF TERMS */}
              <section id="acceptance">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  1. ACCEPTANCE OF TERMS
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  By accessing or using Vantage People's website
                  (www.vantagepeoplehq.com), purchasing our services, or
                  engaging with our content, you agree to be bound by these
                  Terms and Conditions. If you do not agree to these terms,
                  please do not use our services.
                </p>
              </section>

              {/* 2. SERVICES DESCRIPTION */}
              <section id="services">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  2. SERVICES DESCRIPTION
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    Vantage People provide professional career development
                    services, including but not limited to:
                  </p>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">
                        •
                      </span>
                      <span>CV (Curriculum Vitae) review and optimization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">
                        •
                      </span>
                      <span>New CV creation from scratch</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">
                        •
                      </span>
                      <span>Interview preparation and coaching</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">
                        •
                      </span>
                      <span>Career strategy consulting</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">
                        •
                      </span>
                      <span>Career Accelerator Programs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">
                        •
                      </span>
                      <span>Corporate training and talent development</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* 3. PAYMENT TERMS */}
              <section id="payment">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  3. PAYMENT TERMS
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      3.1 Pricing
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      All prices are listed in Nigerian Naira (₦) and are
                      subject to change without notice. Current pricing is
                      displayed on our website and payment pages.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      3.2 Payment Methods
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      We accept payment via credit/debit cards (processed
                      through Paystack), bank transfer, and other payment
                      methods as displayed on our payment pages.
                    </p>
                  </div>
                </div>
              </section>

              {/* 4. REFUND POLICY */}
              <section id="refund">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  4. REFUND POLICY
                </h2>
                <div className="bg-cyan-50 border-l-4 border-cyan-500 p-6 rounded-r-xl">
                  <p className="text-gray-700 font-semibold mb-3">
                    CV Review & Optimization Services
                  </p>
                  <div className="space-y-3">
                    <p className="text-gray-600">
                      <strong>Before Work Begins:</strong> Full refund available
                      if you request cancellation within 24 hours of payment AND
                      before submitting the intake form.
                    </p>
                    <p className="text-gray-600">
                      <strong>After Work Begins:</strong> Once you submit the
                      intake form and we begin work, payments are
                      non-refundable. We offer one round of minor revisions
                      within 7 days of delivery at no additional cost.
                    </p>
                  </div>
                </div>
              </section>

              {/* 5. SERVICE DELIVERY */}
              <section id="delivery">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  5. SERVICE DELIVERY
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    Early Career delivery times:
                  </p>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">
                        •
                      </span>
                      <span>
                        <strong>CV Optimization (Early Career):</strong> 48
                        hours
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">
                        •
                      </span>
                      <span>
                        <strong>CV Optimization (Rush):</strong> 24 hours
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">
                        •
                      </span>
                      <span>
                        <strong>New CV Creation (Early Career):</strong> 5-7
                        days
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">
                        •
                      </span>
                      <span>
                        <strong>Interview Mastery:</strong> Scheduled within 3-7
                        days
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">
                        •
                      </span>
                      <span>
                        <strong>Career Accelerator:</strong> 4 weeks from
                        program start
                      </span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* 6. CLIENT RESPONSIBILITIES */}
              <section id="responsibilities">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  6. CLIENT RESPONSIBILITIES
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    By purchasing our services, you agree to:
                  </p>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">
                        •
                      </span>
                      <span>
                        Provide truthful, accurate, and complete information
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">
                        •
                      </span>
                      <span>
                        Submit intake forms within specified timeframes
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">
                        •
                      </span>
                      <span>
                        Maintain professional and respectful communication
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">
                        •
                      </span>
                      <span>Use our deliverables ethically and honestly</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* 7. DISCLAIMERS */}
              <section id="disclaimers">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  7. DISCLAIMERS
                </h2>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl">
                  <p className="text-gray-700 font-semibold mb-3">
                    No Guarantee of Employment
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    While our services are designed to significantly improve
                    your job search success, we cannot and do not guarantee that
                    you will be hired, receive interview invitations, or receive
                    job offers. Employment outcomes depend on many factors
                    outside our control.
                  </p>
                </div>
              </section>

              {/* 8. CONTACT INFORMATION */}
              <section id="contact">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  8. CONTACT INFORMATION
                </h2>
                <div className="text-gray-600 leading-relaxed space-y-2">
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
                  <p>
                    <strong>Business Hours:</strong> Monday - Friday, 9:00 AM -
                    6:00 PM WAT
                  </p>
                </div>
              </section>

              {/* Last Updated */}
              <div className="pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  Last Updated: January 6, 2025 | Version 1.0
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

export default Terms;
