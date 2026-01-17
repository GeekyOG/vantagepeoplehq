import { CheckCircle, Mail, Clock } from "lucide-react";

export default function ThankYouPage({ onReturn }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-green-400 to-emerald-500 p-8 text-white text-center">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
              <CheckCircle className="w-14 h-14 text-green-500" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-2">
              Payment Successful!
            </h2>
            <p className="text-xl text-green-50">
              Thank you for choosing Vantage People
            </p>
          </div>

          <div className="p-8 md:p-12">
            <div className="text-center mb-8">
              <p className="text-xl text-gray-700 mb-6">
                Your payment has been processed successfully. Here's what
                happens next:
              </p>
            </div>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    Check Your Email
                  </h3>
                  <p className="text-gray-600">
                    We've sent a confirmation email with a form link to gather
                    the necessary information for your CV service.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    Complete the Form
                  </h3>
                  <p className="text-gray-600">
                    Fill out the form with your details so we can start working
                    on your CV immediately.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    We'll Deliver Your CV
                  </h3>
                  <p className="text-gray-600">
                    Your professionally crafted CV will be delivered within the
                    selected timeframe.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-2xl p-6 mb-8">
              <p className="text-center text-gray-700 font-medium">
                <strong className="text-yellow-700">Important:</strong> Please
                check your spam folder if you don't see our email within 5
                minutes.
              </p>
            </div>

            <button
              onClick={onReturn}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 rounded-2xl text-lg font-semibold hover:shadow-2xl transition-all transform hover:scale-105"
            >
              Return to Home
            </button>

            <p className="text-center text-sm text-gray-500 mt-6">
              Need help? Contact us at{" "}
              <a
                href="mailto:support@vantagepeople.com"
                className="text-blue-600 hover:underline"
              >
                support@vantagepeople.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
