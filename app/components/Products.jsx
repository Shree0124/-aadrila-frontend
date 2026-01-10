
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import FadedRing from "../util/FadedRing";
import DottedGrid from "../util/DottedGrid";
import Button from "../util/Button";

const products = [
  {
    name: "DocSim",
    title: "AI-Powered Document Similarity Engine",
    image: "/assets/product_bg.svg",
    ringFade: "right",
    imageSide: "right",
    features: [
      "Detects near-duplicate documents",
      "Identifies tampered files",
      "Multi-language support",
    ],
    benefits: [
      "Save 30% time on manual reviews",
      "Reduce document fraud by 40%",
    ],
  },
  {
    name: "DocPilot",
    title: "Streamline Document Workflows with Automation",
    image: "/assets/docpilot.svg",
    ringFade: "left",
    imageSide: "left",
    features: [
      "Automates document routing and task assignments",
      "Real-time tracking with dashboards",
      "Enterprise API integrations",
    ],
    benefits: [
      "Reduce turnaround time by 50%",
      "Improve operational efficiency",
    ],
  },
  {
    name: "Doxtract",
    title: "Extract, Validate, and Process Documents with Ease",
    image: "/assets/doxtract.svg",
    ringFade: "right",
    imageSide: "right",
    features: [
      "OCR & NLP-based data extraction",
      "Handles unstructured documents",
      "External data validation",
    ],
    benefits: [
      "Process 10,000+ documents in minutes",
      "99% AI-driven accuracy",
    ],
  },
  
];

export default function ProductsSection() {
  return (
    <section className="relative w-full py-32 bg-white overflow-hidden">
      <DottedGrid
        rows={3}
        cols={6}
        opacity={0.35}
        position={{ left: "6rem", top: "4rem" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* HEADER */}
        <div className="text-center mb-24">
            <p className="text-2xl font-bold bg-gradient-to-r from-[#CD6028] to-[#3E6EB4] text-transparent bg-clip-text mb-2">
            features and benefits.
          </p>
          <h2 className="text-5xl font-semibold text-[#141219]">
            Our Products
          </h2>
        </div>

        {/* PRODUCTS */}
        {products.map((product, index) => {
          const imageFirst = product.imageSide === "left";

          return (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${
                index !== products.length - 1 ? "mb-32" : ""
              }`}
            >
              {/* IMAGE LEFT */}
              {imageFirst && (
                <ProductImage
                  image={product.image}
                  ringFade={product.ringFade}
                  side="left"
                />
              )}

              {/* TEXT */}
              <motion.div
                initial={{ opacity: 0, x: imageFirst ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="inline-flex px-5 py-2 mb-4 rounded-full text-white font-bold text-lg bg-gradient-to-r from-[#CD6028] to-[#3E6EB4]">
                  {product.name}
                </span>

                {/* TITLE */}
                <h3 className="font-raleway font-bold text-[32px] leading-[48px] text-[#141219] mb-5">
                  {product.title}
                </h3>

                {/* FEATURES */}
                <p className="font-raleway font-bold text-[20px] leading-[100%] text-[#696969] mb-3">
                  Features:
                </p>
                <ul className="list-disc pl-5 font-manrope text-[16px] leading-[32px] text-[#696969] mb-6">
                  {product.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>

                {/* BENEFITS */}
                <p className="font-raleway font-bold text-[20px] leading-[100%] text-[#696969] mb-3">
                  Benefits:
                </p>
                <ul className="list-disc pl-5 font-manrope text-[16px] leading-[32px] text-[#696969] mb-8">
                  {product.benefits.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>

                <div className="flex gap-4">
                  <Button text="Learn More" />
                  <Button text="Schedule a Demo" />
                </div>
              </motion.div>

              {/* IMAGE RIGHT */}
              {!imageFirst && (
                <ProductImage
                  image={product.image}
                  ringFade={product.ringFade}
                  side="right"
                />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ================= IMAGE COMPONENT ================= */

function ProductImage({ image, ringFade, side }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: side === "left" ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative flex justify-center"
    >
      {/* LOCAL RING */}
      <FadedRing
        size={520}
        border={70}
        color="#EFF6FF"
        fade={ringFade}
        zIndex={0}
        position={{
          [side]: "-120px",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      />

      {/* CARD STACK */}
      <div className="relative w-full max-w-lg h-[420px] z-10">
        <div className="absolute inset-0 -translate-x-8 translate-y-8 rounded-2xl bg-white/40 backdrop-blur-md opacity-40" />
        <div className="absolute inset-0 -translate-x-4 translate-y-4 rounded-2xl bg-white/60 backdrop-blur-md opacity-60" />

        <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl bg-white">
          <Image
            src={image}
            alt="Product image"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
}
