import { ArrowLeft, CheckCircle, Clock, CreditCard } from "lucide-react";
import { useEffect } from "react";

export default function TierConfirmation({
  service,
  delivery,
  tier,
  onConfirm,
  onBack,
}) {
  const getPrice = () => {
    if (tier) {
      return tier.price;
    }
    return delivery.price;
  };

  const getServiceName = () => {
    if (service === "cv-review") {
      return "CV Review & Optimization";
    }
    return "New CV Creation";
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  });

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
              onClick={onConfirm}
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
    </div>
  );
}
