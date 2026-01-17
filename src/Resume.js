import { useState } from "react";
import { User, Target, Users } from "lucide-react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServiceSection from "./components/ServiceSection";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import TestimonialSection from "./components/TestimonialSection";
import Header from "./components/Header";
import DecisionModal from "./components/DecisionModal";
import ServicesPricing from "./components/ServicesPricing";
import TierConfirmation from "./components/TierConfirmation";
import ThankYouPage from "./components/ThankYouPage";

export default function VantagePeopleLanding() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    careerLevel: "",
    industry: "",
    targetRole: "",
    cvStyle: "",
    currentEmployment: "",
    yearsExperience: "",
    education: "",
    keySkills: "",
    achievements: "",
    additionalInfo: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showDecisionModal, setShowDecisionModal] = useState(false);
  const [currentStep, setCurrentStep] = useState("home");
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDelivery, setSelectedDelivery] = useState(null);
  const [selectedTier, setSelectedTier] = useState(null);

  const services = [
    {
      icon: <User className="w-8 h-8" />,
      title: "Vantage Career",
      description:
        "Empowering individuals with CV optimization, interview mastery, and strategic career guidance to compete globally",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Vantage HR",
      description:
        "Partnering with organizations to develop high-performing talent and build world-class teams",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Vantage Recruitment",
      description:
        "Connecting exceptional Nigerian candidates with opportunity through strategic placement",
    },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    setSubmitted(true);
    console.log("Form submitted:", formData);
  };

  const scrollToForm = () => {
    setMobileMenuOpen(false);
    setShowDecisionModal(true);
  };

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // Step 6: Thank You Page - Shows after payment
  if (submitted) {
    return (
      <ThankYouPage
        onReturn={() => {
          setSubmitted(false);
          setCurrentStep("home");
          setSelectedService(null);
          setSelectedDelivery(null);
          setSelectedTier(null);
        }}
      />
    );
  }

  // Step 4: Tier Confirmation - Shows after service selection
  if (currentStep === "tier-confirmation") {
    return (
      <TierConfirmation
        service={selectedService}
        delivery={selectedDelivery}
        tier={selectedTier}
        onConfirm={() => {
          // In production, this would redirect to Paystack
          // For now, we'll simulate payment success
          setCurrentStep("payment");
          setTimeout(() => setSubmitted(true), 1000);
        }}
        onBack={() => setCurrentStep("services-pricing")}
      />
    );
  }

  // Step 3: Services & Pricing - Shows when user selects "View Services"
  if (currentStep === "services-pricing") {
    return (
      <ServicesPricing
        selectedService={selectedService}
        onServiceSelect={(service, delivery, tier) => {
          setSelectedService(service);
          setSelectedDelivery(delivery);
          setSelectedTier(tier);
          setCurrentStep("tier-confirmation");
        }}
        onBack={() => {
          setCurrentStep("home");
          setShowDecisionModal(true);
        }}
      />
    );
  }

  // Step 1: Default Homepage with Step 2: Decision Modal overlay
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <Header
        scrollToForm={scrollToForm}
        scrollToSection={scrollToSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <HeroSection
        scrollToForm={scrollToForm}
        scrollToSection={scrollToSection}
      />

      <AboutSection />

      <ServiceSection services={services} />

      <TestimonialSection />

      <Contact
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />

      <Footer />

      {/* Step 2: Decision Modal - Opens when "Get Started" is clicked */}
      <DecisionModal
        isOpen={showDecisionModal}
        onClose={() => setShowDecisionModal(false)}
        onTakeAssessment={() => {
          setShowDecisionModal(false);
          document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
        onViewServices={() => {
          setShowDecisionModal(false);
          setCurrentStep("services-pricing");
        }}
      />
    </div>
  );
}
