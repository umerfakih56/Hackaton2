"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, CheckCircle2 } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-br from-blue-900/80 via-blue-800/80 to-blue-700/80 border-b border-blue-200/20 shadow-2xl backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center shadow-lg shadow-blue-400/40">
              <CheckCircle2 className="w-5 h-5 text-white drop-shadow" />
            </div>
            <span className="text-2xl font-extrabold text-blue-100 drop-shadow">TaskFlow</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-blue-100 hover:text-cyan-300 transition-colors font-semibold drop-shadow"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-blue-100 hover:text-cyan-300 transition-colors font-semibold drop-shadow"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-blue-100 hover:text-cyan-300 transition-colors font-semibold drop-shadow"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-blue-100 hover:text-cyan-300 transition-colors font-semibold drop-shadow"
            >
              FAQ
            </button>
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/signin">
              <Button variant="outline" className="font-bold border-cyan-200 text-cyan-100 hover:bg-cyan-100/10 rounded-full px-6 py-2">
                Sign In
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 text-white font-bold px-8 py-2 rounded-full shadow-lg hover:scale-110 hover:shadow-blue-400/40 transition-all duration-300 border-2 border-blue-200/30 backdrop-blur-xl">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-blue-100 hover:text-cyan-300 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-gradient-to-br from-blue-900/90 via-blue-800/90 to-blue-700/90">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection("features")}
              className="block w-full text-left px-4 py-2 text-blue-100 hover:bg-cyan-400/10 rounded-md font-semibold drop-shadow"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="block w-full text-left px-4 py-2 text-blue-100 hover:bg-cyan-400/10 rounded-md font-semibold drop-shadow"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="block w-full text-left px-4 py-2 text-blue-100 hover:bg-cyan-400/10 rounded-md font-semibold drop-shadow"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="block w-full text-left px-4 py-2 text-blue-100 hover:bg-cyan-400/10 rounded-md font-semibold drop-shadow"
            >
              FAQ
            </button>
            <div className="pt-4 space-y-2">
              <Link href="/signin" className="block">
                <Button variant="outline" className="w-full font-bold border-cyan-200 text-cyan-100 hover:bg-cyan-100/10 rounded-full px-6 py-2">
                  Sign In
                </Button>
              </Link>
              <Link href="/signup" className="block">
                <Button className="w-full bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 text-white font-bold px-8 py-2 rounded-full shadow-lg hover:scale-110 hover:shadow-blue-400/40 transition-all duration-300 border-2 border-blue-200/30 backdrop-blur-xl">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
