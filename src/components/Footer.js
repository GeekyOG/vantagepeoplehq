import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <img src="/logo.png" className="h-[50px]" alt="" />
        </div>
        <p className="text-gray-400 mb-2">
          Career Clarity. Global Competitiveness.
        </p>
        <p className="text-gray-500 text-sm">
          Nigeria's Premier Career Development Ecosystem
        </p>
        <p className="text-gray-600 text-sm mt-4">
          © 2025 Vantage People. All rights reserved.
        </p>
        <div className="flex justify-center items-center gap-6 mt-6">
          <Link
            to="/privacy"
            className="text-gray-500 hover:text-white text-sm"
          >
            Privacy Policy
          </Link>
          <Link to="/terms" className="text-gray-500 hover:text-white text-sm">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
