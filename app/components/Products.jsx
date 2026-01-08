// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import FadedRing from "../util/FadedRing";
// import DottedGrid from "../util/DottedGrid";

// export default function ProductsSection() {
//   return (
//     <section className="relative w-full py-32 bg-white overflow-hidden">
//       {/* BACKGROUND RING */}
//       <FadedRing
//         size={720}
//         border={90}
//         color="#EFF6FF"
//         fade="right"
//         zIndex={0}
//         position={{
//           right: "-200px",
//           top: "50%",
//           transform: "translateY(-50%)",
//         }}
//       />

//       {/* TOP LEFT DOTS */}
//       <DottedGrid
//         rows={3}
//         cols={6}
//         opacity={0.35}
//         position={{ left: "6rem", top: "4rem" }}
//       />

//       {/* CONTAINER */}
//       <div className="relative max-w-7xl mx-auto px-6 lg:px-16 z-20">
//         {/* SECTION HEADER */}
//         <div className="text-center mb-20">
//           <p className="text-sm font-semibold text-[#CD6028] mb-2">
//             features and benefits.
//           </p>
//           <h2 className="text-4xl font-semibold text-[#141219]">
//             Our Products
//           </h2>
//         </div>

//         {/* CONTENT */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
//           {/* LEFT CONTENT */}
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <span className="inline-block mb-4 px-4 py-1 rounded-full text-sm font-medium bg-[#F2F6FF] text-[#3E6EB4]">
//               DocSim
//             </span>

//             <h3 className="text-3xl font-semibold text-[#141219] mb-4">
//               AI-Powered Document Similarity Engine
//             </h3>

//             <p className="text-[#696969] mb-6">
//               Features:
//             </p>

//             <ul className="space-y-3 text-[#696969] mb-6 list-disc list-inside">
//               <li>Detects near-duplicates and tampered documents.</li>
//               <li>Identifies fraudulent patterns across large repositories.</li>
//               <li>Multi-language support for global adaptability.</li>
//             </ul>

//             <p className="text-[#696969] mb-2">Benefits:</p>

//             <ul className="space-y-2 text-[#696969] list-disc list-inside mb-8">
//               <li>Save 30% time on manual checks.</li>
//               <li>Reduce document fraud by up to 40%.</li>
//             </ul>

//             <div className="flex gap-4">
//               <button className="px-6 py-3 rounded-full bg-[#3E6EB4] text-white text-sm font-medium">
//                 Learn More
//               </button>
//               <button className="px-6 py-3 rounded-full bg-[#E8EEFF] text-[#3E6EB4] text-sm font-medium">
//                 Schedule a Demo
//               </button>
//             </div>
//           </motion.div>

//           {/* RIGHT IMAGE */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="relative"
//           >
//             <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-xl">
//               <Image
//                 src="/assets/docsim-product.png" // 👈 your asset image
//                 alt="DocSim Product"
//                 fill
//                 className="object-cover"
//                 priority
//               />
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }


// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import FadedRing from "../util/FadedRing";
// import DottedGrid from "../util/DottedGrid";

// export default function ProductsSection() {
//   return (
//     <section className="relative w-full py-32 bg-white overflow-hidden">
//       {/* BACKGROUND RING */}
//       <FadedRing
//         size={720}
//         border={90}
//         color="#EFF6FF"
//         fade="right"
//         zIndex={0}
//         position={{
//           right: "-200px",
//           top: "50%",
//           transform: "translateY(-50%)",
//         }}
//       />

//       {/* TOP LEFT DOTS */}
//       <DottedGrid
//         rows={3}
//         cols={6}
//         opacity={0.35}
//         position={{ left: "6rem", top: "4rem" }}
//       />

//       {/* CONTAINER */}
//       <div className="relative max-w-7xl mx-auto px-6 lg:px-16 z-20">
//         {/* SECTION HEADER */}
//         <div className="text-center mb-20">
//           {/* FEATURES & BENEFITS */}
//           <p
//             style={{
//               fontFamily: "Manrope",
//               fontWeight: 700,
//               fontSize: "24px",
//               lineHeight: "100%",
//               background: "linear-gradient(90deg, #CD6028, #3E6EB4)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               marginBottom: "8px",
//             }}
//           >
//             features and benefits.
//           </p>

//           {/* OUR PRODUCTS */}
//           <h2
//             style={{
//               fontFamily: "Raleway",
//               fontWeight: 600,
//               fontSize: "48px",
//               lineHeight: "100%",
//               letterSpacing: "-1px",
//               color: "#141219",
//             }}
//           >
//             Our Products
//           </h2>
//         </div>

//         {/* CONTENT */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
//           {/* LEFT CONTENT */}
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             {/* DOCSIM BADGE */}
//             <span
//               style={{
//                 display: "inline-flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 padding: "8px 20px",
//                 borderRadius: "9999px",
//                 background: "linear-gradient(90deg, #CD6028, #3E6EB4)",
//                 fontFamily: "Manrope",
//                 fontWeight: 700,
//                 fontSize: "20px",
//                 lineHeight: "20px",
//                 color: "#FFFFFF",
//                 marginBottom: "16px",
//               }}
//             >
//               DocSim
//             </span>

//             <h3 className="text-3xl font-semibold text-[#141219] mb-4">
//               AI-Powered Document Similarity Engine
//             </h3>

//             <p className="text-[#696969] mb-4">Features:</p>
//             <ul className="space-y-3 text-[#696969] mb-6 list-disc list-inside">
//               <li>Detects near-duplicates and tampered documents.</li>
//               <li>Identifies fraudulent patterns across large repositories.</li>
//               <li>Multi-language support for global adaptability.</li>
//             </ul>

//             <p className="text-[#696969] mb-2">Benefits:</p>
//             <ul className="space-y-2 text-[#696969] list-disc list-inside mb-8">
//               <li>Save 30% time on manual checks.</li>
//               <li>Reduce document fraud by up to 40%.</li>
//             </ul>

//             <div className="flex gap-4">
//               <button className="px-6 py-3 rounded-full bg-[#3E6EB4] text-white text-sm font-medium">
//                 Learn More
//               </button>
//               <button className="px-6 py-3 rounded-full bg-[#E8EEFF] text-[#3E6EB4] text-sm font-medium">
//                 Schedule a Demo
//               </button>
//             </div>
//           </motion.div>

//           {/* RIGHT IMAGE */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="relative"
//           >
//             <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-xl">
//               <Image
//                 src="/assets/product_bg.svg"
//                 alt="DocSim Product"
//                 fill
//                 className="object-cover"
//                 priority
//               />
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import FadedRing from "../util/FadedRing";
import DottedGrid from "../util/DottedGrid";

export default function ProductsSection() {
  return (
    <section className="relative w-full py-32 bg-white overflow-hidden">
      {/* BACKGROUND RING */}
      <FadedRing
        size={720}
        border={90}
        color="#EFF6FF"
        fade="right"
        zIndex={0}
        position={{
          right: "-200px",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      />

      {/* TOP LEFT DOTS */}
      <DottedGrid
        rows={3}
        cols={6}
        opacity={0.35}
        position={{ left: "6rem", top: "4rem" }}
      />

      {/* CONTAINER */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-16 z-20">
        {/* SECTION HEADER */}
        <div className="text-center mb-20">
          {/* FEATURES & BENEFITS */}
          <p
            style={{
              fontFamily: "Manrope",
              fontWeight: 700,
              fontSize: "24px",
              lineHeight: "100%",
              background: "linear-gradient(90deg, #CD6028, #3E6EB4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "8px",
            }}
          >
            features and benefits.
          </p>

          {/* OUR PRODUCTS */}
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
            Our Products
          </h2>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* DOCSIM BADGE */}
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
              }}
            >
              DocSim
            </span>

            {/* TITLE */}
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
              AI-Powered Document Similarity Engine
            </h3>

            {/* FEATURES SUBTITLE */}
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

            {/* FEATURES LIST */}
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
              <li>Detects near-duplicates and tampered documents.</li>
              <li>Identifies fraudulent patterns across large repositories.</li>
              <li>Multi-language support for global adaptability.</li>
            </ul>

            {/* BENEFITS SUBTITLE */}
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

            {/* BENEFITS LIST */}
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
              <li>Save 30% time on manual checks.</li>
              <li>Reduce document fraud by up to 40%.</li>
            </ul>

            <div className="flex gap-4">
              <button className="px-6 py-3 rounded-full bg-[#3E6EB4] text-white text-sm font-medium">
                Learn More
              </button>
              <button className="px-6 py-3 rounded-full bg-[#E8EEFF] text-[#3E6EB4] text-sm font-medium">
                Schedule a Demo
              </button>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/assets/product_bg.svg"
                alt="DocSim Product"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
