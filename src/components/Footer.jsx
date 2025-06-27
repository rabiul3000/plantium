import React from "react";
import { Link } from "react-router";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLeaf,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content py-8 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        {/* Brand */}
        <div className="flex justify-center items-center space-x-2">
          <FaLeaf className="text-2xl text-primary" />
          <span className="font-bold text-lg text-primary">Plantium</span>
        </div>

        {/* Tagline */}
        <p className="text-sm text-base-content">
          Buy & sell plants | Grow green with us 🌱
        </p>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-4 text-sm">
          {[
            { to: "/", label: "Home" },
            { to: "/all_plants", label: "All Plants" },
            { to: "/add_plant", label: "Add Plant" },
            { to: "/my_plants", label: "My Plants" },
            { to: "/about", label: "About" },
            { to: "/support", label: "Support" },
            { to: "/contact", label: "Contact" },
          ].map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="link link-hover hover:text-primary transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-5">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <FaFacebook className="text-xl" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <FaTwitter className="text-xl" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <FaInstagram className="text-xl" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-content2">
          &copy; {new Date().getFullYear()} Plantium. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
