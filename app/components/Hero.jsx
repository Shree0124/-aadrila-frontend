
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  const images = [
    "/assets/drive.svg",
    "/assets/Invocie.svg",
    "/assets/Doc.svg",
  ];

  const [active, setActive] = useState(0);
  const [isScanning, setIsScanning] = useState(false);

  useEffect(() => {
    const scanTimeout = setTimeout(() => setIsScanning(true), 2500);
    const nextTimeout = setTimeout(() => {
      setIsScanning(false);
      setActive((prev) => (prev + 1) % images.length);
    }, 4200);

    return () => {
      clearTimeout(scanTimeout);
      clearTimeout(nextTimeout);
    };
  }, [active]);

  // Diamond layout positions
  const getStyle = (index) => {
    const prev = (active - 1 + images.length) % images.length;
    const next = (active + 1) % images.length;

    if (index === active) return { x: 0, y: 0, scale: 1, opacity: 1, zIndex: 3, filter: "blur(0px)" };
    if (index === prev) return { x: -120, y: -60, scale: 0.85, opacity: 0.5, zIndex: 2, filter: "blur(2px)" };
    if (index === next) return { x: 120, y: -60, scale: 0.85, opacity: 0.5, zIndex: 2, filter: "blur(2px)" };
    return { x: 0, y: 100, scale: 0.75, opacity: 0, zIndex: 1, filter: "blur(4px)" };
  };

  return (
    <section
      className="relative w-full min-h-screen flex items-center"
      style={{
        backgroundImage: "url('/assets/home_bg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full px-6 lg:px-16 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        
                     <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Main Heading */}
          <h1 className="text-[48px] leading-[68.25px] font-bold mb-4">
            {/* Top line: AI-Powered with gradient */}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(90deg, #CD6028 0%, #3E6EB4 100%)",
                fontFamily: "Raleway",
                fontWeight: 700,
                verticalAlign: "middle",
              }}
            >
              AI-Powered
            </span>
            <br />
            {/* Bottom line: Remaining text in black */}
            <span
              style={{
                color: "#000000",
                fontFamily: "Raleway",
                fontWeight: 700,
                verticalAlign: "middle",
              }}
            >
              Document Automation & Fraud Detection
            </span>
          </h1>

          {/* Subtext */}
          <p
            className="mt-6"
            style={{
              fontFamily: "Manrope",
              fontWeight: 500,
              fontSize: "20px",
              lineHeight: "31.2px",
              letterSpacing: "0px",
              verticalAlign: "middle",
              color: "#000000",
            }}
          >
            Enhance security, accuracy, and efficiency with our cutting-edge AI
            solutions for seamless document processing and fraud prevention.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex gap-5">
            {/* Top Button */}
            <button
              className="px-8 py-3 rounded-full text-white"
              style={{
                backgroundColor: "#3E6EB4",
                fontFamily: "Raleway",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "20px",
                letterSpacing: "0px",
                textAlign: "center",
                verticalAlign: "middle",
              }}
            >
              Get a Demo
            </button>
            {/* Bottom Button (Changed as requested) */}
            <button
              className="px-8 py-3 rounded-full text-white"
              style={{
                backgroundColor: "#3E6EB4", // Updated background color
                color: "#FFFFFF",           // Updated text color
                fontFamily: "Raleway",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "20px",
                letterSpacing: "0px",
                textAlign: "center",
                verticalAlign: "middle",
              }}
            >
              Explore Solutions
            </button>
          </div>
        </motion.div>

        {/* RIGHT SIDE – DIAMOND CAROUSEL */}
        <div className="relative h-[420px] w-full flex items-center justify-center overflow-visible">
          {images.map((src, index) => (
            <motion.div
              key={index}
              className="absolute"
              animate={getStyle(index)}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              style={{ width: 340 }}
            >
              <div className="relative overflow-hidden">
                <Image src={src} alt="document" width={340} height={220} className="object-contain" priority />

                {/* SCAN LINES */}
                <AnimatePresence>
                  {isScanning && index === active && (
                    <motion.div
                      initial={{ top: "-20%" }}
                      animate={{ top: "100%" }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1.6, ease: "linear" }}
                      className="absolute left-0 w-full pointer-events-none"
                    >
                      {[0, 1, 2, 3, 4].map((line) => (
                        <div
                          key={line}
                          className="w-full h-[2px] mb-[10px]"
                          style={{
                            background: "linear-gradient(90deg, transparent, #60a5fa, transparent)",
                            boxShadow: "0 0 10px rgba(96,165,250,0.8)",
                          }}
                        />
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
