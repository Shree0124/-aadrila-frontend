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

//             {/* TITLE */}
//             <h3
//               style={{
//                 fontFamily: "Raleway",
//                 fontWeight: 700,
//                 fontSize: "32px",
//                 lineHeight: "48px",
//                 color: "#141219",
//                 marginBottom: "20px",
//               }}
//             >
//               AI-Powered Document Similarity Engine
//             </h3>

//             {/* FEATURES SUBTITLE */}
//             <p
//               style={{
//                 fontFamily: "Raleway",
//                 fontWeight: 700,
//                 fontSize: "20px",
//                 lineHeight: "100%",
//                 color: "#696969",
//                 marginBottom: "12px",
//               }}
//             >
//               Features:
//             </p>

//             {/* FEATURES LIST */}
//             <ul
//               style={{
//                 fontFamily: "Manrope",
//                 fontWeight: 400,
//                 fontSize: "16px",
//                 lineHeight: "32px",
//                 color: "#696969",
//                 marginBottom: "20px",
//                 paddingLeft: "20px",
//                 listStyleType: "disc",
//               }}
//             >
//               <li>Detects near-duplicates and tampered documents.</li>
//               <li>Identifies fraudulent patterns across large repositories.</li>
//               <li>Multi-language support for global adaptability.</li>
//             </ul>

//             {/* BENEFITS SUBTITLE */}
//             <p
//               style={{
//                 fontFamily: "Raleway",
//                 fontWeight: 700,
//                 fontSize: "20px",
//                 lineHeight: "100%",
//                 color: "#696969",
//                 marginBottom: "12px",
//               }}
//             >
//               Benefits:
//             </p>

//             {/* BENEFITS LIST */}
//             <ul
//               style={{
//                 fontFamily: "Manrope",
//                 fontWeight: 400,
//                 fontSize: "16px",
//                 lineHeight: "32px",
//                 color: "#696969",
//                 marginBottom: "32px",
//                 paddingLeft: "20px",
//                 listStyleType: "disc",
//               }}
//             >
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

//             {/* TITLE */}
//             <h3
//               style={{
//                 fontFamily: "Raleway",
//                 fontWeight: 700,
//                 fontSize: "32px",
//                 lineHeight: "48px",
//                 color: "#141219",
//                 marginBottom: "20px",
//               }}
//             >
//               AI-Powered Document Similarity Engine
//             </h3>

//             {/* FEATURES SUBTITLE */}
//             <p
//               style={{
//                 fontFamily: "Raleway",
//                 fontWeight: 700,
//                 fontSize: "20px",
//                 lineHeight: "100%",
//                 color: "#696969",
//                 marginBottom: "12px",
//               }}
//             >
//               Features:
//             </p>

//             {/* FEATURES LIST */}
//             <ul
//               style={{
//                 fontFamily: "Manrope",
//                 fontWeight: 400,
//                 fontSize: "16px",
//                 lineHeight: "32px",
//                 color: "#696969",
//                 marginBottom: "20px",
//                 paddingLeft: "20px",
//                 listStyleType: "disc",
//               }}
//             >
//               <li>Detects near-duplicates and tampered documents.</li>
//               <li>Identifies fraudulent patterns across large repositories.</li>
//               <li>Multi-language support for global adaptability.</li>
//             </ul>

//             {/* BENEFITS SUBTITLE */}
//             <p
//               style={{
//                 fontFamily: "Raleway",
//                 fontWeight: 700,
//                 fontSize: "20px",
//                 lineHeight: "100%",
//                 color: "#696969",
//                 marginBottom: "12px",
//               }}
//             >
//               Benefits:
//             </p>

//             {/* BENEFITS LIST */}
//             <ul
//               style={{
//                 fontFamily: "Manrope",
//                 fontWeight: 400,
//                 fontSize: "16px",
//                 lineHeight: "32px",
//                 color: "#696969",
//                 marginBottom: "32px",
//                 paddingLeft: "20px",
//                 listStyleType: "disc",
//               }}
//             >
//               <li>Save 30% time on manual checks.</li>
//               <li>Reduce document fraud by up to 40%.</li>
//             </ul>

//             {/* BUTTONS */}
//             <div className="flex gap-4">
//               {[
//                 {
//                   text: "Learn More",
//                   bgColor: "#3E6EB4",
//                   textColor: "#FFFFFF",
//                 },
//                 {
//                   text: "Schedule a Demo",
//                   bgColor: "#E8EEFF",
//                   textColor: "#3E6EB4",
//                 },
//               ].map((btn, index) => (
//                 <button
//                   key={index}
//                   style={{
//                     width: "250px",
//                     height: "52px",
//                     gap: "10px",
//                     opacity: 1,
//                     borderRadius: "160px",
//                     padding: "16px 80px",
//                     backgroundColor: btn.bgColor,
//                     color: btn.textColor,
//                     fontFamily: "Raleway, sans-serif",
//                     fontWeight: 600,
//                     fontSize: "16px",
//                     lineHeight: "20px",
//                     letterSpacing: "0px",
//                     textAlign: "center",
//                     verticalAlign: "middle",
//                     border: "none",
//                     cursor: "pointer",
//                   }}
//                 >
//                   {btn.text}
//                 </button>
//               ))}
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

// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import FadedRing from "../util/FadedRing";
// import DottedGrid from "../util/DottedGrid";
// import Button from "../util/Button";

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

//             {/* TITLE */}
//             <h3
//               style={{
//                 fontFamily: "Raleway",
//                 fontWeight: 700,
//                 fontSize: "32px",
//                 lineHeight: "48px",
//                 color: "#141219",
//                 marginBottom: "20px",
//               }}
//             >
//               AI-Powered Document Similarity Engine
//             </h3>

//             {/* FEATURES SUBTITLE */}
//             <p
//               style={{
//                 fontFamily: "Raleway",
//                 fontWeight: 700,
//                 fontSize: "20px",
//                 lineHeight: "100%",
//                 color: "#696969",
//                 marginBottom: "12px",
//               }}
//             >
//               Features:
//             </p>

//             {/* FEATURES LIST */}
//             <ul
//               style={{
//                 fontFamily: "Manrope",
//                 fontWeight: 400,
//                 fontSize: "16px",
//                 lineHeight: "32px",
//                 color: "#696969",
//                 marginBottom: "20px",
//                 paddingLeft: "20px",
//                 listStyleType: "disc",
//               }}
//             >
//               <li>Detects near-duplicates and tampered documents.</li>
//               <li>Identifies fraudulent patterns across large repositories.</li>
//               <li>Multi-language support for global adaptability.</li>
//             </ul>

//             {/* BENEFITS SUBTITLE */}
//             <p
//               style={{
//                 fontFamily: "Raleway",
//                 fontWeight: 700,
//                 fontSize: "20px",
//                 lineHeight: "100%",
//                 color: "#696969",
//                 marginBottom: "12px",
//               }}
//             >
//               Benefits:
//             </p>

//             {/* BENEFITS LIST */}
//             <ul
//               style={{
//                 fontFamily: "Manrope",
//                 fontWeight: 400,
//                 fontSize: "16px",
//                 lineHeight: "32px",
//                 color: "#696969",
//                 marginBottom: "32px",
//                 paddingLeft: "20px",
//                 listStyleType: "disc",
//               }}
//             >
//               <li>Save 30% time on manual checks.</li>
//               <li>Reduce document fraud by up to 40%.</li>
//             </ul>

//             {/* BUTTONS */}
//             <div className="flex gap-4">
//               <Button text="Learn More" />
//               <Button text="Schedule a Demo" />
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
// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import FadedRing from "../util/FadedRing";
// import DottedGrid from "../util/DottedGrid";
// import Button from "../util/Button";

// export default function ProductsSection() {
//   return (
//     <section className="relative w-full py-32 bg-white overflow-hidden">
//       {/* Decorative dots */}
//       <DottedGrid
//         rows={3}
//         cols={6}
//         opacity={0.35}
//         position={{ left: "6rem", top: "4rem" }}
//       />

//       <div className="relative max-w-7xl mx-auto px-6 lg:px-16 z-20">
//         {/* HEADER */}
//         <div className="text-center mb-20">
//           <p className="text-2xl font-bold bg-gradient-to-r from-[#CD6028] to-[#3E6EB4] text-transparent bg-clip-text mb-2">
//             features and benefits.
//           </p>
//           <h2 className="text-5xl font-semibold text-[#141219]">
//             Our Products
//           </h2>
//         </div>

//         {/* ================= PRODUCT 1 ================= */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
//           {/* TEXT */}
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <span className="inline-flex px-5 py-2 mb-4 rounded-full text-white font-bold text-lg bg-gradient-to-r from-[#CD6028] to-[#3E6EB4]">
//               DocPilot
//             </span>

//             <h3 className="text-3xl font-bold mb-5">
//               Streamline Document Workflows with Automation
//             </h3>

//             <p className="font-bold text-gray-600 mb-2">Features:</p>
//             <ul className="list-disc pl-5 text-gray-600 mb-4 leading-8">
//               <li>Automated routing and task assignments</li>
//               <li>Real-time dashboards</li>
//               <li>Enterprise API integration</li>
//             </ul>

//             <p className="font-bold text-gray-600 mb-2">Benefits:</p>
//             <ul className="list-disc pl-5 text-gray-600 mb-8 leading-8">
//               <li>Reduce turnaround time by 50%</li>
//               <li>Higher operational efficiency</li>
//             </ul>

//             <div className="flex gap-4">
//               <Button text="Learn More" />
//               <Button text="Schedule a Demo" />
//             </div>
//           </motion.div>

//           {/* IMAGE + LOCAL RING */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="relative flex justify-center"
//           >
//             {/* LOCAL RING */}
//             <FadedRing
//               size={520}
//               border={70}
//               color="#EFF6FF"
//               fade="right"
//               zIndex={0}
//               position={{
//                 right: "-120px",
//                 top: "50%",
//                 transform: "translateY(-50%)",
//               }}
//             />

//             {/* CARD STACK */}
//             <div className="relative w-full max-w-lg h-[420px] z-10">
//               <div className="absolute inset-0 -translate-x-8 translate-y-8 rounded-2xl bg-white/40 backdrop-blur-md opacity-40" />
//               <div className="absolute inset-0 -translate-x-4 translate-y-4 rounded-2xl bg-white/60 backdrop-blur-md opacity-60" />

//               <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl bg-white">
//                 <Image
//                   src="/assets/product_bg.svg"
//                   alt="DocPilot"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         {/* ================= PRODUCT 2 ================= */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
//           {/* IMAGE LEFT */}
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="relative flex justify-center"
//           >
//             {/* LOCAL RING */}
//             <FadedRing
//               size={520}
//               border={70}
//               color="#EFF6FF"
//               fade="left"
//               zIndex={0}
//               position={{
//                 left: "-120px",
//                 top: "50%",
//                 transform: "translateY(-50%)",
//               }}
//             />

//             <div className="relative w-full max-w-lg h-[420px] z-10">
//               <div className="absolute inset-0 translate-x-8 translate-y-8 rounded-2xl bg-white/40 backdrop-blur-md opacity-40" />
//               <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl bg-white/60 backdrop-blur-md opacity-60" />

//               <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl bg-white">
//                 <Image
//                   src="/assets/product_bg_2.svg"
//                   alt="Doxtract"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//             </div>
//           </motion.div>

//           {/* TEXT */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <span className="inline-flex px-5 py-2 mb-4 rounded-full text-white font-bold text-lg bg-gradient-to-r from-[#CD6028] to-[#3E6EB4]">
//               Doxtract
//             </span>

//             <h3 className="text-3xl font-bold mb-5">
//               Extract, Validate, and Process Documents with Ease
//             </h3>

//             <p className="font-bold text-gray-600 mb-2">Features:</p>
//             <ul className="list-disc pl-5 text-gray-600 mb-4 leading-8">
//               <li>OCR & NLP-based extraction</li>
//               <li>Handles unstructured documents</li>
//               <li>External data validation</li>
//             </ul>

//             <p className="font-bold text-gray-600 mb-2">Benefits:</p>
//             <ul className="list-disc pl-5 text-gray-600 mb-8 leading-8">
//               <li>Process 10,000+ documents in minutes</li>
//               <li>99% AI-driven accuracy</li>
//             </ul>

//             <div className="flex gap-4">
//               <Button text="Learn More" />
//               <Button text="Schedule a Demo" />
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
// import Button from "../util/Button";

// const products = [
//     {
//     name: "DocSim",
//     title: "AI-Powered Document Similarity Engine",
//     image:  "/assets/product_bg.svg",
//     ringFade: "right",
//     imageSide: "right",
//     features: [
//       "Detects near-duplicate documents",
//       "Identifies tampered files",
//       "Multi-language support",
//     ],
//     benefits: [
//       "Save 30% time on manual reviews",
//       "Reduce document fraud by 40%",
//     ],
//   },{
//     name: "Doxtract",
//     title: "Extract, Validate, and Process Documents with Ease",
//     image: "/assets/product_bg_2.svg",
//     ringFade: "left",
//     imageSide: "left",
//     features: [
//       "OCR & NLP-based data extraction",
//       "Handles unstructured documents",
//       "External data validation",
//     ],
//     benefits: [
//       "Process 10,000+ documents in minutes",
//       "99% AI-driven accuracy",
//     ],
//   },
//   {
//     name: "DocPilot",
//     title: "Streamline Document Workflows with Automation",
//     image: "/assets/product_bg.svg",
//     ringFade: "right",
//     imageSide: "right",
//     features: [
//       "Automates document routing and task assignments",
//       "Real-time tracking with dashboards",
//       "Enterprise API integrations",
//     ],
//     benefits: [
//       "Reduce turnaround time by 50%",
//       "Improve operational efficiency",
//     ],
//   },
  
  
// ];

// export default function ProductsSection() {
//   return (
//     <section className="relative w-full py-32 bg-white overflow-hidden">
//       <DottedGrid
//         rows={3}
//         cols={6}
//         opacity={0.35}
//         position={{ left: "6rem", top: "4rem" }}
//       />

//       <div className="max-w-7xl mx-auto px-6 lg:px-16">
//         {/* HEADER */}
//         <div className="text-center mb-24">
//           <p className="text-2xl font-bold bg-gradient-to-r from-[#CD6028] to-[#3E6EB4] text-transparent bg-clip-text mb-2">
//             features and benefits.
//           </p>
//           <h2 className="text-5xl font-semibold text-[#141219]">
//             Our Products
//           </h2>
//         </div>

//         {/* PRODUCTS */}
//         {products.map((product, index) => {
//           const imageFirst = product.imageSide === "left";

//           return (
//             <div
//               key={index}
//               className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${
//                 index !== products.length - 1 ? "mb-32" : ""
//               }`}
//             >
//               {/* IMAGE */}
//               {imageFirst && (
//                 <ProductImage
//                   image={product.image}
//                   ringFade={product.ringFade}
//                   side="left"
//                 />
//               )}

//               {/* TEXT */}
//               <motion.div
//                 initial={{ opacity: 0, x: imageFirst ? 40 : -40 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.6 }}
//                 viewport={{ once: true }}
//               >
//                 <span className="inline-flex px-5 py-2 mb-4 rounded-full text-white font-bold text-lg bg-gradient-to-r from-[#CD6028] to-[#3E6EB4]">
//                   {product.name}
//                 </span>

//                 <h3 className="text-3xl font-bold mb-5">
//                   {product.title}
//                 </h3>

//                 <p className="font-bold text-gray-600 mb-2">Features:</p>
//                 <ul className="list-disc pl-5 text-gray-600 mb-4 leading-8">
//                   {product.features.map((f, i) => (
//                     <li key={i}>{f}</li>
//                   ))}
//                 </ul>

//                 <p className="font-bold text-gray-600 mb-2">Benefits:</p>
//                 <ul className="list-disc pl-5 text-gray-600 mb-8 leading-8">
//                   {product.benefits.map((b, i) => (
//                     <li key={i}>{b}</li>
//                   ))}
//                 </ul>

//                 <div className="flex gap-4">
//                   <Button text="Learn More" />
//                   <Button text="Schedule a Demo" />
//                 </div>
//               </motion.div>

//               {/* IMAGE RIGHT */}
//               {!imageFirst && (
//                 <ProductImage
//                   image={product.image}
//                   ringFade={product.ringFade}
//                   side="right"
//                 />
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }

// /* ================= IMAGE COMPONENT ================= */

// function ProductImage({ image, ringFade, side }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, x: side === "left" ? -40 : 40 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.6 }}
//       viewport={{ once: true }}
//       className="relative flex justify-center"
//     >
//       {/* LOCAL RING */}
//       <FadedRing
//         size={520}
//         border={70}
//         color="#EFF6FF"
//         fade={ringFade}
//         zIndex={0}
//         position={{
//           [side]: "-120px",
//           top: "50%",
//           transform: "translateY(-50%)",
//         }}
//       />

//       {/* CARD STACK */}
//       <div className="relative w-full max-w-lg h-[420px] z-10">
//         <div className="absolute inset-0 -translate-x-8 translate-y-8 rounded-2xl bg-white/40 backdrop-blur-md opacity-40" />
//         <div className="absolute inset-0 -translate-x-4 translate-y-4 rounded-2xl bg-white/60 backdrop-blur-md opacity-60" />

//         <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl bg-white">
//           <Image
//             src={image}
//             alt="Product image"
//             fill
//             className="object-cover"
//           />
//         </div>
//       </div>
//     </motion.div>
//   );
// }
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
