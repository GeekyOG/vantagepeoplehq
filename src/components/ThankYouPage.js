import {
  CheckCircle,
  Mail,
  Clock,
  XCircle,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function ThankYouPage() {
  const [verificationStatus, setVerificationStatus] = useState("loading"); // loading, success, failed
  const [paymentData, setPaymentData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        // Get reference from URL parameters
        const urlParams = new URLSearchParams(window.location.search);
        const reference = urlParams.get("reference") || urlParams.get("trxref");

        if (!reference) {
          setVerificationStatus("failed");
          setError("No payment reference found in URL");
          return;
        }

        // Verify payment with backend
        const response = await fetch(
          `http://localhost:3000/api/payment/verify/${reference}`,
        );
        const data = await response.json();

        if (data.success && data.data.status === "success") {
          setVerificationStatus("success");
          setPaymentData(data.data);
        } else {
          setVerificationStatus("failed");
          setError(data.message || "Payment verification failed");
        }
      } catch (err) {
        console.error("Verification error:", err);
        setVerificationStatus("failed");
        setError("Unable to verify payment. Please contact support.");
      }
    };

    verifyPayment();
  }, []);

  const handleReturnHome = () => {
    window.location.href = "/";
  };

  // Loading State
  if (verificationStatus === "loading") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden p-12">
            <div className="text-center">
              <Loader2 className="w-16 h-16 text-blue-600 animate-spin mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Verifying Your Payment
              </h2>
              <p className="text-gray-600">
                Please wait while we confirm your transaction...
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Failed State
  if (verificationStatus === "failed") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-red-400 to-orange-500 p-8 text-white text-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <XCircle className="w-14 h-14 text-red-500" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-2">
                Payment Verification Failed
              </h2>
              <p className="text-xl text-red-50">
                We couldn't verify your payment
              </p>
            </div>

            <div className="p-8 md:p-12">
              <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 mb-8">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-red-800 mb-2">
                      Error Details:
                    </p>
                    <p className="text-red-700">{error}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-bold text-gray-800">
                  What should you do?
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-sm">
                      1
                    </span>
                    <span>
                      Check if you received a debit alert. If yes, your payment
                      may still be processing.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-sm">
                      2
                    </span>
                    <span>
                      Wait 5-10 minutes and refresh this page to verify again.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-sm">
                      3
                    </span>
                    <span>
                      If problem persists, contact our support team with your
                      transaction reference.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => window.location.reload()}
                  className="flex-1 bg-blue-600 text-white py-4 rounded-2xl text-lg font-semibold hover:bg-blue-700 transition-all"
                >
                  Retry Verification
                </button>
                <button
                  onClick={handleReturnHome}
                  className="flex-1 bg-gray-200 text-gray-800 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-300 transition-all"
                >
                  Return Home
                </button>
              </div>

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

  // Success State
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
            {/* Payment Details */}
            {paymentData && (
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 mb-8">
                <h3 className="font-bold text-gray-800 mb-4 text-center">
                  Transaction Details
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Reference:</span>
                    <span className="font-mono font-semibold text-gray-800">
                      {paymentData.reference}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Amount:</span>
                    <span className="font-semibold text-gray-800">
                      ₦{(paymentData.amount / 100).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Payment Method:</span>
                    <span className="font-semibold text-gray-800 capitalize">
                      {paymentData.channel || "Card"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date:</span>
                    <span className="font-semibold text-gray-800">
                      {paymentData.paid_at
                        ? new Date(paymentData.paid_at).toLocaleString()
                        : new Date().toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            )}

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
              onClick={handleReturnHome}
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

      <style>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-bounce {
          animation: bounce 2s infinite;
        }
      `}</style>
    </div>
  );
}
