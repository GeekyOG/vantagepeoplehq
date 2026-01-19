import { X, FileText, ShoppingBag } from "lucide-react";

export default function DecisionModal({
  isOpen,
  onClose,
  onTakeAssessment,
  onViewServices,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-cyan-500 to-blue-600"></div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
            How would you like to proceed?
          </h2>
          <p className="text-gray-600 text-center mb-10">
            Choose the option that best fits your needs
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="https://forms.gle/HbTsQxEyRTFDEto66"
              target="_blank"
              className="group relative bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-2xl p-8 hover:border-blue-400 hover:shadow-xl transition-all text-left"
              rel="noreferrer"
            >
              <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                <FileText className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-xl lg:mt-10 font-bold text-gray-800 mb-3">
                Take Assessment
              </h3>
              <p className="text-gray-600 mb-4">
                Not sure what you need? Fill out our assessment form and receive
                personalized recommendations via email.
              </p>
              <div className="text-blue-600 font-semibold group-hover:translate-x-2 transition-transform inline-block">
                Start Assessment →
              </div>
            </a>

            <button
              onClick={onViewServices}
              className="group relative bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl p-8 hover:border-purple-400 hover:shadow-xl transition-all text-left"
            >
              <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                <ShoppingBag className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-3">
                View Services
              </h3>
              <p className="text-gray-600 mb-4">
                Know what you need? Browse our services and pricing, then
                proceed directly to payment.
              </p>
              <div className="text-purple-600 font-semibold group-hover:translate-x-2 transition-transform inline-block">
                Browse Services →
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
