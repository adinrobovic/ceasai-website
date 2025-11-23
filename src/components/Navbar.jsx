import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/CeasAI.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      // If user has scrolled down at least 20px, activate blur
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <motion.nav
        className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-md bg-black/60 shadow-lg"
            : "bg-transparent"
        }`}
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Logo */}
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <img
            src={logo}
            alt="CeasAI Logo"
            className="h-14 w-auto object-contain"
            style={{ cursor: "pointer" }}
          />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-gray-300">
          {[
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Industries", path: "/industries" },
            { name: "About", path: "/about" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className="hover:text-blue-400 transition cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-gray-300 text-3xl cursor-pointer z-50"
          onClick={toggleMenu}
        >
          ☰
        </div>
      </motion.nav>

      {/* Mobile Menu (unchanged) */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-70 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
            />
            <motion.div
              key="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-2/3 bg-[#111] shadow-lg flex flex-col items-center pt-12 space-y-8 text-xl text-gray-200 z-50"
            >
              <div
                className="absolute top-6 right-6 text-3xl text-gray-400 hover:text-blue-400 cursor-pointer"
                onClick={toggleMenu}
              >
                ✖
              </div>
              {["Home", "Services", "Industries", "About", "Contact"].map(
                (item) => (
                  <motion.div
                    key={item}
                    whileHover={{ scale: 1.1, color: "#3b82f6" }}
                    onClick={toggleMenu}
                    className="cursor-pointer"
                  >
                    {item}
                  </motion.div>
                )
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}