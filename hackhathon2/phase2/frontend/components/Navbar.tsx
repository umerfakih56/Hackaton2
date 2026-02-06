"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-gradient-to-br from-blue-900/80 via-blue-800/80 to-blue-700/80 border-b border-blue-200/20 shadow-2xl backdrop-blur-xl py-2" : "bg-transparent py-4"
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Bluish Glassy */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg shadow-blue-400/40 group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6 text-white drop-shadow" />
            </div>
            <span className="text-2xl font-extrabold text-blue-100 drop-shadow bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-cyan-200">
             ThunderAi
            </span>
          </Link>

          {/* Desktop Navigation - Bluish */}
          <div className="hidden md:flex items-center space-x-1">
            {["Features", "How it Works", "Pricing"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(/ /g, "-"))}
                className="px-4 py-2 text-sm text-blue-100 hover:text-cyan-300 transition-colors rounded-full hover:bg-cyan-400/10 font-semibold drop-shadow"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Auth Buttons - Bluish */}
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

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/signin">
              <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10">
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="rounded-full px-6 bg-white text-black hover:bg-cyan-400 transition-all duration-300 font-bold shadow-xl shadow-white/5">
                Join Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white p-2">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-background/95 backdrop-blur-2xl border-b border-white/10 p-6 space-y-4 animate-fade-in-down">
            {/* ... keeping your mobile logic, but updating button styles ... */}
            <Link href="/signup" className="block w-full">
               <Button className="w-full bg-primary text-white rounded-xl">Get Started</Button>
            </Link>
        </div>
      )}
    </nav>
  );
}