import { useEffect, useState } from "react";
import { ArrowLeft, CheckCircle, Clock, Zap, Rocket } from "lucide-react";

export default function ServicesPricing({
  selectedService,
  onServiceSelect,
  onBack,
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const [serviceType, setServiceType] = useState(null);
  const [delivery, setDelivery] = useState(null);
  const [tier, setTier] = useState(null);

  const cvReviewPricing = [
    {
      delivery: "Standard",
      timeline: "48 hours",
      icon: <Clock className="w-5 h-5" />,
      tiers: [
        { name: "Standard", price: "₦8,000", original: null },
        { name: "Professional", price: "₦15,000", original: null },
      ],
    },
    {
      delivery: "Rush",
      timeline: "24 hours",
      icon: <Zap className="w-5 h-5" />,
      tiers: [
        { name: "Standard", price: "₦10,000", original: null },
        { name: "Professional", price: "₦18,000", original: null },
      ],
    },
    {
      delivery: "Same Day",
      timeline: "8-12 hours",
      icon: <Rocket className="w-5 h-5" />,
      tiers: [
        { name: "Standard", price: "₦15,000", original: null },
        { name: "Professional", price: "₦19,999", original: null },
      ],
    },
  ];

  const newCvPricing = [
    {
      delivery: "Standard",
      timeline: "5-7 days",
      icon: <Clock className="w-5 h-5" />,
      price: "₦10,000",
    },
    {
      delivery: "Rush",
      timeline: "3 days",
      icon: <Zap className="w-5 h-5" />,
      price: "₦12,000",
    },
    {
      delivery: "Express",
      timeline: "48 hours",
      icon: <Rocket className="w-5 h-5" />,
      price: "₦15,000",
    },
  ];

  const handleSelect = (deliveryOption, tierOption = null) => {
    onServiceSelect(serviceType, deliveryOption, tierOption);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {!serviceType && (
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>
        )}

        {!serviceType ? (
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Choose Your Service
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Select the service that best fits your needs
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <button
                onClick={() => setServiceType("cv-review")}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-blue-400 text-left"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  CV Review & Optimization
                </h3>
                <p className="text-gray-600 mb-4">
                  Already have a CV? Get professional review and optimization to
                  make it stand out.
                </p>
                <div className="text-blue-600 font-semibold">
                  View Pricing →
                </div>
              </button>

              <button
                onClick={() => setServiceType("new-cv")}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-purple-400 text-left"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  New CV Creation
                </h3>
                <p className="text-gray-600 mb-4">
                  Build your CV from scratch with our expert guidance (0-5 years
                  experience).
                </p>
                <div className="text-purple-600 font-semibold">
                  View Pricing →
                </div>
              </button>
            </div>
          </div>
        ) : (
          <div>
            <button
              onClick={() => {
                setServiceType(null);
                setDelivery(null);
                setTier(null);
              }}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back
            </button>

            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                {serviceType === "cv-review"
                  ? "CV Review & Optimization"
                  : "New CV Creation"}
              </h1>
              <p className="text-xl text-gray-600">
                {serviceType === "cv-review"
                  ? "Choose your delivery speed and tier"
                  : "Select your delivery timeline (Standard Tier Only for 0-5 years experience)"}
              </p>
            </div>

            {serviceType === "cv-review" ? (
              <div className="space-y-8 max-w-5xl mx-auto">
                {cvReviewPricing.map((option, idx) => (
                  <div key={idx} className="bg-white rounded-3xl p-8 shadow-lg">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center">
                        {option.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800">
                          {option.delivery}
                        </h3>
                        <p className="text-gray-600">{option.timeline}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {option.tiers.map((tierOption, tidx) => (
                        <button
                          key={tidx}
                          onClick={() => handleSelect(option, tierOption)}
                          className="group bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border-2 border-blue-200 hover:border-blue-400 hover:shadow-xl transition-all text-left"
                        >
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h4 className="text-xl font-bold text-gray-800 mb-2">
                                {tierOption.name} Tier
                              </h4>
                              {tierOption.original && (
                                <p className="text-gray-400 line-through text-sm">
                                  {tierOption.original}
                                </p>
                              )}
                              <p className="text-3xl font-bold text-blue-600">
                                {tierOption.price}
                              </p>
                            </div>
                            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                              <CheckCircle className="w-6 h-6 text-white" />
                            </div>
                          </div>
                          <div className="text-blue-600 font-semibold">
                            Select →
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {newCvPricing.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelect(option)}
                    className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-purple-400"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mb-6 mx-auto transform group-hover:scale-110 transition-transform">
                      {option.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center">
                      {option.delivery}
                    </h3>
                    <p className="text-gray-600 mb-4 text-center">
                      {option.timeline}
                    </p>
                    <p className="text-3xl font-bold text-purple-600 mb-4 text-center">
                      {option.price}
                    </p>
                    <div className="text-purple-600 font-semibold text-center">
                      Select →
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
