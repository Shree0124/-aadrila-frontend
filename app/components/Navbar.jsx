"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
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
        // 85px navbar + small buffer
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(item.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check

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

        {/* Menu Items */}
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
                fontStyle: "normal",
                fontSize: "16px",
                lineHeight: "18px",
                letterSpacing: "0%",
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>

        {/* Get a Demo Button */}
        <button
          className="px-6 py-2.5 rounded-full text-white"
          style={{
            backgroundColor: "#3E6EB4",
            fontFamily: "Raleway",
            fontWeight: 600,
            fontStyle: "normal",
            fontSize: "16px",
            lineHeight: "20px",
            letterSpacing: "0px",
            textAlign: "center",
            verticalAlign: "middle",
          }}
        >
          Get a Demo
        </button>

      </div>
    </nav>
  );
}
