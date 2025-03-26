import React from "react";
import { Link } from "react-router";

const Footer = () => (
  <footer className="bg-gray-900 text-gray-300 py-4">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
      {/* Copyright Section */}
      <p className="text-sm text-center md:text-left">
        © {new Date().getFullYear()}{" "}
        <Link to="/" className="text-blue-400 hover:text-blue-500">
          Go Nom Nom
        </Link>
        . All rights reserved.
      </p>

      {/* Footer Links */}
      <nav className="flex flex-wrap justify-center md:justify-end gap-4 mt-2 md:mt-0 text-sm">
        <Link to="/privacy" className="hover:text-white">
          Privacy Policy
        </Link>
        <Link to="/terms" className="hover:text-white">
          Terms & Conditions
        </Link>
        <Link to="/test" className="hover:text-white">
          Test
        </Link>
        <Link to="/cc1" className="hover:text-white">
          cc1
        </Link>
        <Link to="/cc2" className="hover:text-white">
          cc2
        </Link>
      </nav>
    </div>
  </footer>
);

export default Footer;
