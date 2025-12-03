"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Check if we're on the home page
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation links - use full path when not on home page
  const navLinks = [
    { href: isHomePage ? "#projects" : "/#projects", label: "Projects" },
    { href: isHomePage ? "#about" : "/#about", label: "About" },
    { href: "/resume", label: "Resume" },
    { href: isHomePage ? "#contact" : "/#contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 hidden md:flex justify-center px-4 py-4"
    >
      <motion.div
        className={`flex items-center gap-4 px-6 py-3 rounded-full transition-all duration-300 ${
          scrolled
            ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50"
            : "bg-white/60 dark:bg-gray-900/60 backdrop-blur-lg shadow-lg border border-gray-200/30 dark:border-gray-700/30"
        }`}
      >
        {/* AE Logo */}
        <motion.a
          href="/"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 120 120"
            className="w-10 h-10"
          >
            <defs>
              <linearGradient id="gA" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0" stopColor="#7C3AED" />
                <stop offset="1" stopColor="#FF5CA0" />
              </linearGradient>
              <linearGradient id="gE" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0" stopColor="#06B6D4" />
                <stop offset="1" stopColor="#60A5FA" />
              </linearGradient>
              <filter id="shadow" x="-40%" y="-40%" width="180%" height="180%">
                <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.12" />
              </filter>
            </defs>
            <text
              x="42"
              y="74"
              fontFamily="Inter,Roboto,Helvetica,Arial,sans-serif"
              fontWeight="800"
              fontSize="74"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="url(#gA)"
              filter="url(#shadow)"
              style={{ letterSpacing: "-4px" }}
            >
              A
            </text>
            <g transform="translate(68,72) rotate(-8)">
              <text
                x="0"
                y="0"
                fontFamily="Inter,Roboto,Helvetica,Arial,sans-serif"
                fontWeight="800"
                fontSize="78"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="url(#gE)"
                style={{ mixBlendMode: "multiply", opacity: 0.95, letterSpacing: "-6px" }}
              >
                E
              </text>
            </g>
          </svg>
        </motion.a>

        {/* Divider */}
        <div className="w-px h-8 bg-gray-300 dark:bg-gray-600" />

        {/* Desktop Navigation Links */}
        {navLinks.map((link, index) => (
          <motion.a
            key={link.href}
            href={link.href}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-5 py-2.5 text-gray-700 dark:text-gray-200 font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {link.label}
          </motion.a>
        ))}

        {/* Divider */}
        <div className="w-px h-8 bg-gray-300 dark:bg-gray-600" />

        {/* Theme Toggle */}
        <ThemeToggle />

        {/* CTA Button */}
        <motion.a
          href={isHomePage ? "#contact" : "/#contact"}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-bold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl"
        >
          Hire Me
        </motion.a>
      </motion.div>
    </motion.nav>
  );
}
