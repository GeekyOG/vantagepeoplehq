import {
  ArrowLeft,
  CheckCircle,
  Clock,
  CreditCard,
  X,
  User,
  Mail,
  Phone,
  Loader2,
} from "lucide-react";
import { useEffect, useState } from "react";
import { paymentManager } from "../api";

export default function TierConfirmation({
  service = "cv-review",
  delivery = { delivery: "Standard", timeline: "3-5 days", price: "₦5,000" },
  tier = { name: "Professional", price: "₦5,000" },
  onBack = () => alert("Going back"),
}) {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const getPrice = () => {
    if (tier) {
      return tier.price;
    }
    return delivery.price;
  };

  const getPriceValue = () => {
    const price = getPrice();
    // Extract numeric value from price string (e.g., "₦5,000" -> 5000)
    return parseFloat(price.replace(/[^0-9.]/g, ""));
  };

  const getServiceName = () => {
    if (service === "cv-review") {
      return "CV Review & Optimization";
    }
    return "New CV Creation";
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Invalid email format";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    }

    // else if (!/^[\d\s\+\-\(\)]+$/.test(formData.phone)) {
    //   errors.phone = "Invalid phone number format";
    // }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user types
    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleProceedToPayment = () => {
    setShowModal(true);
    setError("");
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setFormErrors({});
    setError("");
  };

  const checkPaymentStatus = async (reference) => {
    try {
      const response = await fetch(
        `https://vantage.aoudit.com/api/payment/verify/${reference}`,
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

  const handleSubmitPayment = async () => {
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setError("");

    try {
      // Prepare payment data
      const paymentData = {
        email: formData.email,
        name: formData.name,
        phone: formData.phone,
        amount: getPriceValue(),
        metadata: {
          service: getServiceName(),
          delivery: `${delivery.delivery} - ${delivery.timeline}`,
          tier: tier ? `${tier.name} Tier` : null,
        },
      };

      const paymentResponse = await paymentManager.initiate(paymentData);

      // paymentManager.trackAbandonmentOnExit();

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Services
        </button>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-8 text-white text-center">
            <div className="w-20 h-20 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Confirm Your Selection
            </h2>
            <p className="text-blue-100">
              Review your choices before proceeding to payment
            </p>
          </div>

          <div className="p-8 md:p-12">
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-600 mb-1">Service</p>
                  <p className="text-xl font-bold text-gray-800">
                    {getServiceName()}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-600 mb-1">Delivery</p>
                  <p className="text-xl font-bold text-gray-800">
                    {delivery.delivery} - {delivery.timeline}
                  </p>
                </div>
              </div>

              {tier && (
                <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-600 mb-1">Tier</p>
                    <p className="text-xl font-bold text-gray-800">
                      {tier.name} Tier
                    </p>
                  </div>
                </div>
              )}

              <div className="border-t-2 border-gray-200 pt-6">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-lg text-gray-600">Total Amount</p>
                  <p className="text-4xl font-bold text-gray-800">
                    {getPrice()}
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={handleProceedToPayment}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 rounded-2xl text-lg font-semibold hover:shadow-2xl transition-all transform hover:scale-105 flex items-center justify-center gap-3"
            >
              <CreditCard className="w-6 h-6" />
              Proceed to Payment
            </button>

            <p className="text-center text-sm text-gray-500 mt-4">
              You'll be redirected to Paystack for secure payment
            </p>
          </div>
        </div>
      </div>

      {/* Payment Details Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fadeIn">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full transform transition-all animate-slideUp">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-6 text-white rounded-t-3xl flex items-center justify-between">
              <h3 className="text-2xl font-bold">Payment Details</h3>
              <button
                onClick={handleCloseModal}
                className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all"
                disabled={loading}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <p className="text-gray-600 mb-6 text-center">
                Please provide your details to proceed with payment
              </p>

              {error && (
                <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
                  {error}
                </div>
              )}

              {/* Name Field */}
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className={`w-full pl-11 pr-4 py-3 border ${
                      formErrors.name ? "border-red-400" : "border-gray-300"
                    } rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
                    disabled={loading}
                  />
                </div>
                {formErrors.name && (
                  <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className={`w-full pl-11 pr-4 py-3 border ${
                      formErrors.email ? "border-red-400" : "border-gray-300"
                    } rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
                    disabled={loading}
                  />
                </div>
                {formErrors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {formErrors.email}
                  </p>
                )}
              </div>

              {/* Phone Field */}
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+234 801 234 5678"
                    className={`w-full pl-11 pr-4 py-3 border ${
                      formErrors.phone ? "border-red-400" : "border-gray-300"
                    } rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
                    disabled={loading}
                  />
                </div>
                {formErrors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {formErrors.phone}
                  </p>
                )}
              </div>

              {/* Amount Summary */}
              <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Amount to Pay</span>
                  <span className="text-2xl font-bold text-gray-800">
                    {getPrice()}
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmitPayment}
                disabled={loading}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 rounded-xl text-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <CreditCard className="w-5 h-5" />
                    Pay Now
                  </>
                )}
              </button>

              <p className="text-center text-xs text-gray-500 mt-4">
                Secured by Paystack • Your payment information is encrypted
              </p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
