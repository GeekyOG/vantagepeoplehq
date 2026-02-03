import { Menu, X, ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header({
  scrollToForm,
  scrollToSection,
  setMobileMenuOpen,
  mobileMenuOpen,
}) {
  const [partnershipDropdownOpen, setPartnershipDropdownOpen] = useState(false);

  return (
    <div>
      <nav className=" bg-white border-b right-0 left-0  fixed shadow-sm  top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Link to={"/"}>
                <img src="/logo.png" className="h-[50px] invert" alt="logo" />
              </Link>
            </div>

            <div className="hidden lg:flex items-center lg:gap-8 gap-4">
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

              {/* Partnership Dropdown */}
              <div className="relative">
                <button
                  onClick={() =>
                    setPartnershipDropdownOpen(!partnershipDropdownOpen)
                  }
                  onMouseEnter={() => setPartnershipDropdownOpen(true)}
                  className="text-neutral-600 font-[600] hover:scale-[1.1] transition flex items-center gap-1"
                >
                  Partnerships
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${partnershipDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {partnershipDropdownOpen && (
                  <div
                    className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-100 py-2 min-w-[250px] z-50"
                    onMouseLeave={() => setPartnershipDropdownOpen(false)}
                  >
                    <Link
                      to="/partnership/nysc-corpers"
                      className="block px-6 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 hover:text-cyan-600 transition-all font-medium"
                    >
                      <div className="font-semibold">NYSC Corpers Program</div>
                      <div className="text-xs text-gray-500 mt-1">
                        Professional CV & LinkedIn - ₦10,000
                      </div>
                    </Link>
                    {/* Add more partnership items here in the future */}
                  </div>
                )}
              </div>

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
                className="hidden lg:block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all font-medium"
              >
                Get Started
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden text-gray-700 hover:scale-[1.1] transition"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {
            <div
              className={`lg:hidden mt-4 pb-4 space-y-4 border-t pt-4 absolute bg-white right-0 left-0 -top-[500px] px-8 shadow-lg transition-all duration-500 ease-in-out ${mobileMenuOpen && "top-[60px]"}`}
            >
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

              {/* Mobile Partnership Dropdown */}
              <div className="border-l-4 border-cyan-500 pl-4">
                <div className="font-semibold text-gray-900 mb-2">
                  Partnerships
                </div>
                <Link
                  to="/partnership/nysc-corpers"
                  className="block py-2 text-gray-700 hover:text-cyan-600 transition"
                >
                  <div className="font-medium">NYSC Corpers Program</div>
                  <div className="text-xs text-gray-500">
                    CV & LinkedIn - ₦10,000
                  </div>
                </Link>
              </div>

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
          }
        </div>
      </nav>
    </div>
  );
}

export default Header;
