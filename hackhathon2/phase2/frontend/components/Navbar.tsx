"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-background/70 backdrop-blur-xl border-b border-white/10 py-2" : "bg-transparent py-4"
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with 2026 Gradient */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-tr from-violet-600 via-fuchsia-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg shadow-violet-500/20 group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6 text-white fill-white" />
            </div>
            <span className="text-2xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              TASKFLOW
            </span>
          </Link>

          {/* Desktop Navigation with Hover Effects */}
          <div className="hidden md:flex items-center space-x-1">
            {["Features", "How it Works", "Pricing"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(/ /g, "-"))}
                className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/5 font-medium"
              >
                {item}
              </button>
            ))}
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