"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils/cn";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/news", label: "News" },
  { href: "/category/celebrity", label: "Celebrity" },
  { href: "/category/movies", label: "Movies" },
  { href: "/category/tv", label: "TV" },
  { href: "/category/music", label: "Music" },
  { href: "/category/fashion", label: "Fashion" },
  { href: "/category/royals", label: "Royals" },
];

const trendingTopics = [
  "Love Island",
  "Dua Lipa Wedding",
  "Jay-Z Diss Track",
  "Met Gala 2026",
  "Taylor Swift",
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showTrending, setShowTrending] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
      if (window.scrollY > 200) {
        setShowTrending(false);
      } else {
        setShowTrending(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Breaking News Ticker */}
      <AnimatePresence>
        {showTrending && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-red-600 text-white overflow-hidden"
          >
            <div className="max-w-[1280px] mx-auto px-4 py-1.5 flex items-center gap-3">
              <span className="flex-shrink-0 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-2 h-2 bg-white rounded-full breaking-pulse" />
                Breaking
              </span>
              <div className="flex-1 overflow-hidden">
                <div className="flex gap-6 animate-marquee">
                  {trendingTopics.map((topic, i) => (
                    <span key={i} className="text-sm font-medium whitespace-nowrap">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Navigation */}
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-black/95 backdrop-blur-md border-b border-gray-800"
            : "bg-black"
        )}
      >
        <nav className="max-w-[1280px] mx-auto px-4 flex items-center justify-between">
          {/* Left Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.slice(0, 4).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-200 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Logo */}
          <Link href="/" className="flex-shrink-0 z-50">
            <h1 className="font-playfair font-bold text-2xl md:text-3xl tracking-tight">
              STYLE<span className="text-red-600">&</span> SOCIETY
            </h1>
          </Link>

          {/* Right Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.slice(4).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-200 group-hover:w-full" />
              </Link>
            ))}
            <button className="text-gray-300 hover:text-white transition-colors p-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden text-white p-2 -mr-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between px-4 py-4 border-b border-gray-800">
                <h1 className="font-playfair font-bold text-2xl tracking-tight">
                  STYLE <span className="text-red-600">&</span> SOCIETY
                </h1>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white p-2 -mr-2"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="flex flex-col justify-center flex-1 px-4 py-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block font-playfair text-3xl text-white hover:text-red-600 transition-colors py-3 border-b border-gray-800"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="px-4 py-6 border-t border-gray-800">
                <div className="flex gap-4 justify-center">
                  {["Instagram", "Twitter", "Facebook", "TikTok"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </>
  );
}
