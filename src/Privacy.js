import { ArrowLeft } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-6 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/"
            //   onClick={showHome}
            className="flex items-center gap-2 text-white hover:text-cyan-300 transition mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
          <p className="text-blue-200 mt-2">Effective Date: January 6, 2025</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              1. INTRODUCTION
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Vantage People ("we," "us," or "our") is committed to protecting
              your privacy. This Privacy Policy explains how we collect, use,
              store, and protect your personal information when you use our
              website or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              2. INFORMATION WE COLLECT
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  2.1 Information You Provide Directly
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>
                    Contact Information: Name, email address, phone number,
                    location
                  </li>
                  <li>
                    Professional Information: Education, work experience,
                    skills, achievements, career goals
                  </li>
                  <li>
                    Payment Information: Processed by Paystack (we do not store
                    credit card details)
                  </li>
                  <li>
                    Communications: Emails, messages, feedback, testimonials
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  2.2 Information Collected Automatically
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>
                    Usage Data: Pages visited, time spent, clicks, navigation
                    patterns
                  </li>
                  <li>
                    Device Information: IP address, browser type, operating
                    system
                  </li>
                  <li>Cookies: We use cookies to improve your experience</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              3. HOW WE USE YOUR INFORMATION
            </h2>
            <div className="space-y-3">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Provide Services
                </h3>
                <p className="text-gray-600">
                  Deliver the services you purchased, communicate about your
                  order, schedule appointments, and send deliverables.
                </p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Improve Our Services
                </h3>
                <p className="text-gray-600">
                  Understand how our services are used and identify areas for
                  improvement.
                </p>
              </div>
              <div className="bg-cyan-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Marketing (With Your Consent)
                </h3>
                <p className="text-gray-600">
                  Send career tips and resources, notify you of new services.
                  You can unsubscribe anytime.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              4. HOW WE SHARE YOUR INFORMATION
            </h2>
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl mb-4">
              <p className="text-gray-700 font-semibold mb-2">
                We Do NOT Sell Your Data
              </p>
              <p className="text-gray-600">
                We never sell, rent, or trade your personal information to third
                parties for marketing purposes.
              </p>
            </div>
            <p className="text-gray-600 mb-2">We share information with:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
              <li>
                <strong>Paystack:</strong> To process payments securely
              </li>
              <li>
                <strong>Email Service:</strong> To send communications
              </li>
              <li>
                <strong>Cloud Storage:</strong> To securely store files
              </li>
              <li>
                <strong>Legal Requirements:</strong> If required by law or to
                protect our rights
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              5. DATA SECURITY
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We implement measures including secure encrypted connections
              (SSL/HTTPS), password-protected systems, and limited access to
              personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              6. DATA RETENTION
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>
                <strong>Active Clients:</strong> Data retained during service
                delivery plus 90 days
              </li>
              <li>
                <strong>Completed Services:</strong> Files retained for 1 year
                for revision/reference
              </li>
              <li>
                <strong>Payment Records:</strong> Retained for 7 years for
                tax/legal compliance
              </li>
              <li>
                <strong>Marketing List:</strong> Until you unsubscribe
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              7. YOUR RIGHTS
            </h2>
            <p className="text-gray-600 mb-2">You have the right to:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
              <li>Request a copy of your personal data</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Request your data in a portable format</li>
            </ul>
            <p className="text-gray-600 mt-4">
              To exercise these rights, email contact@vantagepeoplehq.com
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              8. COOKIES POLICY
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Cookies are small text files stored on your device when you visit
              our website. We use essential cookies (required for
              functionality), analytics cookies (to understand site usage), and
              marketing cookies (to show relevant ads).
            </p>
            <p className="text-gray-600">
              You can control cookies through your browser settings. Disabling
              cookies may affect website functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              9. CONTACT US
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Questions about this Privacy Policy?
              <br />
              <strong>Email:</strong> contact@vantagepeoplehq.com
              <br />
              <strong>Website:</strong> www.vantagepeoplehq.com
            </p>
          </section>

          <div className="pt-8 border-t">
            <p className="text-sm text-gray-500">
              Last Updated: January 6, 2025
            </p>
          </div>
        </div>
      </div>

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 Vantage People. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Privacy;
