"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import FadedRing from "./FadedRing";
import Button from "./Button";

export default function ProductCard({
  badgeText,
  title,
  features,
  benefits,
  buttons,
  imageSrc,
  imageAlt,
  imageLeft = false,
}) {
  const ringFadeDirection = imageLeft ? "left" : "right";

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative`}>
      {imageLeft && (
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative flex flex-col items-center"
        >
          {/* Image */}
          <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-xl z-10">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </div>

          {/* Ring behind image */}
          <div className="absolute bottom-[-180px] left-0 z-0 pointer-events-none">
            <FadedRing
              size={720}
              border={90}
              color="#EFF6FF"
              fade={ringFadeDirection}
              zIndex={0}
              position={{}}
            />
          </div>
        </motion.div>
      )}

      {/* Text content */}
      <motion.div
        initial={{ opacity: 0, x: imageLeft ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Badge */}
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "8px 20px",
            borderRadius: "9999px",
            background: "linear-gradient(90deg, #CD6028, #3E6EB4)",
            fontFamily: "Manrope",
            fontWeight: 700,
            fontSize: "20px",
            lineHeight: "20px",
            color: "#FFFFFF",
            marginBottom: "16px",
            width: "fit-content",
          }}
        >
          {badgeText}
        </span>

        {/* Title */}
        <h3
          style={{
            fontFamily: "Raleway",
            fontWeight: 700,
            fontSize: "32px",
            lineHeight: "48px",
            color: "#141219",
            marginBottom: "20px",
          }}
        >
          {title}
        </h3>

        {/* Features subtitle */}
        <p
          style={{
            fontFamily: "Raleway",
            fontWeight: 700,
            fontSize: "20px",
            lineHeight: "100%",
            color: "#696969",
            marginBottom: "12px",
          }}
        >
          Features:
        </p>

        {/* Features list */}
        <ul
          style={{
            fontFamily: "Manrope",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "32px",
            color: "#696969",
            marginBottom: "20px",
            paddingLeft: "20px",
            listStyleType: "disc",
          }}
        >
          {features.map((feat, i) => (
            <li key={i}>{feat}</li>
          ))}
        </ul>

        {/* Benefits subtitle */}
        <p
          style={{
            fontFamily: "Raleway",
            fontWeight: 700,
            fontSize: "20px",
            lineHeight: "100%",
            color: "#696969",
            marginBottom: "12px",
          }}
        >
          Benefits:
        </p>

        {/* Benefits list */}
        <ul
          style={{
            fontFamily: "Manrope",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "32px",
            color: "#696969",
            marginBottom: "32px",
            paddingLeft: "20px",
            listStyleType: "disc",
          }}
        >
          {benefits.map((ben, i) => (
            <li key={i}>{ben}</li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="flex gap-4">
          {buttons.map(({ text, onClick }, i) => (
            <Button key={i} text={text} onClick={onClick} />
          ))}
        </div>
      </motion.div>

      {!imageLeft && (
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative flex flex-col items-center"
        >
          {/* Image */}
          <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-xl z-10">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </div>

          {/* Ring behind image */}
          <div className="absolute bottom-[-180px] right-0 z-0 pointer-events-none">
            <FadedRing
              size={720}
              border={90}
              color="#EFF6FF"
              fade={ringFadeDirection}
              zIndex={0}
              position={{}}
            />
          </div>
        </motion.div>
      )}
    </div>
  );
}
