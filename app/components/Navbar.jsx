
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Industries", id: "industries" },
    { name: "Products", id: "products" },
    { name: "Blog", id: "blog" },
    { name: "Contact Us", id: "contact" },
    { name: "About Us", id: "about" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(item.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-50 bg-transparent lg:bg-[#FFFFFF0D] lg:backdrop-blur-md">
      <div className="w-full px-6 lg:px-10 h-[85px] flex items-center justify-between">

        {/* Logo */}
        <div
          onClick={() => scrollToSection("home")}
          className="cursor-pointer flex items-center"
        >
          <Image
            src="/assets/navbar_logo.svg"
            alt="AADRILA Technologies"
            width={150}
            height={42}
            priority
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <li
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="cursor-pointer transition-colors duration-300"
              style={{
                color: activeSection === item.id ? "#3E6EB4" : "#1E1C26",
                fontFamily: "Manrope",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "18px",
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>

        {/* Right Side (CTA + Hamburger) */}
        <div className="flex items-center gap-4">
          {/* Get a Demo Button */}
          <button
            className="hidden sm:block px-6 py-2.5 rounded-full text-white"
            style={{
              backgroundColor: "#3E6EB4",
              fontFamily: "Raleway",
              fontWeight: 600,
              fontSize: "16px",
            }}
          >
            Get a Demo
          </button>

          {/* Hamburger (Mobile) */}
          <button
            className="md:hidden text-[#1E1C26]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col px-6 py-6 gap-5">
            {navItems.map((item) => (
              <li
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="cursor-pointer"
                style={{
                  color:
                    activeSection === item.id ? "#3E6EB4" : "#1E1C26",
                  fontFamily: "Manrope",
                  fontSize: "16px",
                  fontWeight: 500,
                }}
              >
                {item.name}
              </li>
            ))}

            <button
              className="mt-4 px-6 py-3 rounded-full text-white"
              style={{
                backgroundColor: "#3E6EB4",
                fontFamily: "Raleway",
                fontWeight: 600,
                fontSize: "16px",
              }}
            >
              Get a Demo
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
}
