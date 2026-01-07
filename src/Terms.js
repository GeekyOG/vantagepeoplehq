import { ArrowLeft } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function Terms() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-6 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/"
            className="flex items-center gap-2 text-white hover:text-cyan-300 transition mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold">Terms & Conditions</h1>
          <p className="text-blue-200 mt-2">Effective Date: January 6, 2025</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              1. ACCEPTANCE OF TERMS
            </h2>
            <p className="text-gray-600 leading-relaxed">
              By accessing or using Vantage People's website
              (www.vantagepeoplehq.com), purchasing our services, or engaging
              with our content, you agree to be bound by these Terms and
              Conditions. If you do not agree to these terms, please do not use
              our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              2. SERVICES DESCRIPTION
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Vantage People provide professional career development services,
              including but not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>CV (Curriculum Vitae) review and optimization</li>
              <li>New CV creation from scratch</li>
              <li>Interview preparation and coaching</li>
              <li>Career strategy consulting</li>
              <li>Career Accelerator Programs</li>
              <li>Corporate training and talent development</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              3. PAYMENT TERMS
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  3.1 Pricing
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  All prices are listed in Nigerian Naira (₦) and are subject to
                  change without notice. Current pricing is displayed on our
                  website and payment pages.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  3.2 Payment Methods
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We accept payment via credit/debit cards (processed through
                  Paystack), bank transfer, and other payment methods as
                  displayed on our payment pages.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              4. REFUND POLICY
            </h2>
            <div className="bg-cyan-50 border-l-4 border-cyan-500 p-6 rounded-r-xl mb-4">
              <p className="text-gray-700 font-semibold mb-2">
                CV Review & Optimization Services
              </p>
              <p className="text-gray-600">
                <strong>Before Work Begins:</strong> Full refund available if
                you request cancellation within 24 hours of payment AND before
                submitting the intake form.
              </p>
              <p className="text-gray-600 mt-2">
                <strong>After Work Begins:</strong> Once you submit the intake
                form and we begin work, payments are non-refundable. We offer
                one round of minor revisions within 7 days of delivery at no
                additional cost.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              5. SERVICE DELIVERY
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Standard delivery times:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>CV Optimization (Standard): 48 hours</li>
              <li>CV Optimization (Rush): 24 hours</li>
              <li>New CV Creation (Standard): 5-7 days</li>
              <li>Interview Mastery: Scheduled within 3-7 days</li>
              <li>Career Accelerator: 4 weeks from program start</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              6. CLIENT RESPONSIBILITIES
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              By purchasing our services, you agree to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Provide truthful, accurate, and complete information</li>
              <li>Submit intake forms within specified timeframes</li>
              <li>Maintain professional and respectful communication</li>
              <li>Use our deliverables ethically and honestly</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              7. DISCLAIMERS
            </h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl">
              <p className="text-gray-700 font-semibold mb-2">
                No Guarantee of Employment
              </p>
              <p className="text-gray-600">
                While our services are designed to significantly improve your
                job search success, we cannot and do not guarantee that you will
                be hired, receive interview invitations, or receive job offers.
                Employment outcomes depend on many factors outside our control.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              8. CONTACT INFORMATION
            </h2>
            <p className="text-gray-600 leading-relaxed">
              <strong>Email:</strong> contact@vantagepeoplehq.com
              <br />
              <strong>Website:</strong> www.vantagepeoplehq.com
              <br />
              <strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00
              PM WAT
            </p>
          </section>

          <div className="pt-8 border-t">
            <p className="text-sm text-gray-500">
              Last Updated: January 6, 2025 | Version 1.0
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

export default Terms;
