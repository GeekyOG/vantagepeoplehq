import { Mail, MapPin, Menu, X } from "lucide-react";
import React from "react";

function Header({
  scrollToForm,
  scrollToSection,
  setMobileMenuOpen,
  mobileMenuOpen,
}) {
  return (
    <div>
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-3 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span className="hidden sm:inline">
              Nigeria's Premier Career Development Ecosystem
            </span>
            <span className="sm:hidden">Career Development</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">
              contact@vantagepeoplehq.com
            </span>
          </div>
        </div>
      </div>

      <nav className=" bg-white border-b  shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img src="/logo.png" className="h-[50px] invert" alt="logo" />
            </div>

            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-neutral-600 font-[600] hover:scale-[1.2] transition"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-neutral-600 font-[600] hover:scale-[1.2] transition"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-neutral-600 font-[600] hover:scale-[1.1] transition"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-neutral-600 font-[600] hover:scale-[1.1] transition"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-neutral-600 font-[600] hover:scale-[1.1] transition"
              >
                Contact
              </button>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={scrollToForm}
                className="hidden md:block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all font-medium"
              >
                Get Started
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-gray-700 hover:scale-[1.1] transition"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4 border-t pt-4 absolute bg-white right-0 left-0 px-8 shadow-lg">
              <button
                onClick={() => scrollToSection("home")}
                className="block w-full text-left text-gray-700 hover:scale-[1.2] transition py-2"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left text-gray-700 hover:scale-[1.2] transition py-2"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left text-gray-700 hover:scale-[1.2] transition py-2"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="block w-full text-left text-gray-700 hover:scale-[1.2] transition py-2"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left text-gray-700 hover:scale-[1.2] transition py-2"
              >
                Contact
              </button>
              <button
                onClick={scrollToForm}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all font-medium"
              >
                Get Started
              </button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Header;
