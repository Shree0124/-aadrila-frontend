
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import FadedRing from "../util/FadedRing";
import DottedGrid from "../util/DottedGrid";

export default function Industries() {
  const cards = [
    {
      title: "Insurance",
      text: "Automate claims processing with accurate document validation.",
      image: "/assets/Insurance_Icon.svg",
    },
    {
      title: "Lending",
      text: "Ensure faster loan approvals with fraud detection and instant verification.",
      image: "/assets/Lending_Icon.svg",
    },
    {
      title: "Healthcare",
      text: "Streamline patient record management and ensure compliance with HIPAA standards.",
      image: "/assets/Healthcare_Icon.svg",
    },
  ];

  const headingStyle = {
    fontFamily: "Raleway",
    fontWeight: 600,
    fontSize: "24px",
    lineHeight: "100%",
    textAlign: "center",
    color: "#141219",
  };

  const subTextStyle = {
    fontFamily: "Manrope",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "100%",
    letterSpacing: "-0.75px",
    textAlign: "center",
    color: "#696969",
  };

  return (
    <section className="relative w-full py-16 bg-white overflow-hidden">
      {/* LEFT FADED RING */}
      <FadedRing
        size={651}
        border={100}
        color="#EFF6FF"
        fade="left"
        zIndex={0}
        position={{
          left: "-62px",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      />

      {/* TOP DOTS */}
      <DottedGrid
        rows={4}
        cols={4}
        opacity={0.4}
        position={{ right: "12rem", top: "10rem" }}
      />

      {/* BOTTOM RIGHT DOTS */}
      <DottedGrid
        rows={5}
        cols={5}
        opacity={0.3}
        position={{ right: "6rem", bottom: "6rem" }}
      />

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-16 z-20">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-xl mb-16"
        >
          <p
            className="mb-2"
            style={{
              background: "linear-gradient(90deg, #CD6028, #3E6EB4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontFamily: "Manrope",
              fontWeight: 700,
              fontSize: "24px",
              lineHeight: "100%",
            }}
          >
            AI-driven innovation for growth.
          </p>

          <h2
            style={{
              fontFamily: "Raleway",
              fontWeight: 600,
              fontSize: "48px",
              lineHeight: "100%",
              letterSpacing: "-1px",
              color: "#141219",
            }}
          >
            Industries We Empower
          </h2>
        </motion.div>

        {/* CARDS */}
        <div className="relative h-[460px]">
          {cards.map((card, index) => {
            // Updated positions to remove negative top/bottom
            const positions = [
              { left: "40px", bottom: "0px" },
              { left: "420px", top: "100px" },
              { right: "50px", top: "0px" },
            ];

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="absolute w-[320px] bg-white rounded-2xl px-8 py-10 text-center shadow-[0_28px_56px_rgba(0,0,0,0.15)] z-30"
                style={positions[index]}
              >
                <div className="mx-auto mb-4 w-14 h-14 relative">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-contain"
                  />
                </div>

                <h3 style={headingStyle}>{card.title}</h3>
                <p style={subTextStyle}>{card.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
