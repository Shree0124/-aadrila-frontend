// "use client";

// import { motion } from "framer-motion";

// export default function Industries() {
//   const industries = [
//     {
//       title: "Insurance",
//       description:
//         "Automate claims processing with accurate document validation.",
//     },
//     {
//       title: "Lending",
//       description:
//         "Ensure faster loan approvals with fraud detection and instant verification.",
//     },
//     {
//       title: "Healthcare",
//       description:
//         "Streamline patient record management and ensure compliance with HIPAA standards.",
//     },
//   ];

//   return (
//     <section className="relative w-full py-32 overflow-hidden">
//       {/* Background circle effect */}
//       <div className="absolute left-[-200px] top-[-200px] w-[600px] h-[600px] rounded-full bg-blue-50" />

//       <div className="relative max-w-7xl mx-auto px-6 lg:px-16">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           viewport={{ once: true }}
//           className="mb-20"
//         >
//           <p
//             className="mb-2"
//             style={{
//               color: "#CD6028",
//               fontFamily: "Raleway",
//               fontWeight: 600,
//               fontSize: "14px",
//             }}
//           >
//             AI-driven innovation for growth.
//           </p>

//           <h2
//             style={{
//               fontFamily: "Raleway",
//               fontWeight: 700,
//               fontSize: "40px",
//               lineHeight: "52px",
//               color: "#000",
//             }}
//           >
//             Industries We Empower
//           </h2>
//         </motion.div>

//         {/* Cards */}
//         <div className="relative flex flex-wrap justify-center gap-12">
//           {industries.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{
//                 duration: 0.7,
//                 delay: index * 0.15,
//                 ease: "easeOut",
//               }}
//               viewport={{ once: true }}
//               className="w-[320px] bg-white rounded-2xl px-6 py-10 text-center"
//               style={{
//                 boxShadow: "0px 20px 40px rgba(0,0,0,0.08)",
//               }}
//             >
//               {/* Icon placeholder */}
//               <div className="mx-auto mb-6 w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
//                 <div className="w-6 h-6 rounded bg-orange-500" />
//               </div>

//               {/* Card Heading */}
//               <h3
//                 style={{
//                   fontFamily: "Raleway",
//                   fontWeight: 600,
//                   fontSize: "24px",
//                   lineHeight: "100%",
//                   letterSpacing: "0%",
//                   textAlign: "center",
//                   marginBottom: "12px",
//                 }}
//               >
//                 {item.title}
//               </h3>

//               {/* Card Subtext */}
//               <p
//                 style={{
//                   fontFamily: "Manrope",
//                   fontWeight: 500,
//                   fontSize: "16px",
//                   lineHeight: "100%",
//                   letterSpacing: "-0.75px",
//                   textAlign: "center",
//                   color: "#6B7280",
//                 }}
//               >
//                 {item.description}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
// "use client";

// import { motion } from "framer-motion";

// export default function Industries() {
//   return (
//     <section className="relative w-full py-32 bg-white overflow-hidden">
//       {/* Large left arc */}
//       <div className="absolute -left-[420px] -top-[260px] w-[900px] h-[900px] rounded-full border-[120px] border-blue-50" />

//       {/* Top-right dotted pattern */}
//       <div className="absolute right-40 top-44 grid grid-cols-4 gap-3 opacity-40">
//         {[...Array(16)].map((_, i) => (
//           <div key={i} className="w-2 h-2 bg-gray-300 rounded-full" />
//         ))}
//       </div>

//       {/* Bottom-right dotted pattern */}
//       <div className="absolute right-32 bottom-32 grid grid-cols-5 gap-4 opacity-40">
//         {[...Array(25)].map((_, i) => (
//           <div key={i} className="w-2.5 h-2.5 bg-gray-300 rounded-full" />
//         ))}
//       </div>

//       <div className="relative max-w-7xl mx-auto px-6 lg:px-16">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="max-w-xl mb-24"
//         >
//           <p
//             className="mb-2 text-sm font-semibold"
//             style={{ color: "#CD6028", fontFamily: "Raleway" }}
//           >
//             AI-driven innovation for growth.
//           </p>

//           <h2
//             className="text-[40px] font-bold text-black"
//             style={{ fontFamily: "Raleway", lineHeight: "52px" }}
//           >
//             Industries We Empower
//           </h2>
//         </motion.div>

//         {/* Cards container */}
//         <div className="relative h-[420px]">
//           {/* Insurance */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="absolute left-0 bottom-0 w-[300px] bg-white rounded-2xl px-8 py-10 text-center shadow-[0px_20px_40px_rgba(0,0,0,0.08)]"
//           >
//             <Icon />
//             <h3 className="text-lg font-semibold mt-4 mb-2">Insurance</h3>
//             <p className="text-sm text-gray-500 leading-6">
//               Automate claims processing with accurate document validation.
//             </p>
//           </motion.div>

//           {/* Lending */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.15 }}
//             viewport={{ once: true }}
//             className="absolute left-[360px] top-[80px] w-[300px] bg-white rounded-2xl px-8 py-10 text-center shadow-[0px_20px_40px_rgba(0,0,0,0.08)]"
//           >
//             <Icon />
//             <h3 className="text-lg font-semibold mt-4 mb-2">Lending</h3>
//             <p className="text-sm text-gray-500 leading-6">
//               Ensure faster loan approvals with fraud detection and instant
//               verification.
//             </p>
//           </motion.div>

//           {/* Healthcare */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             viewport={{ once: true }}
//             className="absolute right-0 top-0 w-[300px] bg-white rounded-2xl px-8 py-10 text-center shadow-[0px_20px_40px_rgba(0,0,0,0.08)]"
//           >
//             <Icon />
//             <h3 className="text-lg font-semibold mt-4 mb-2">Healthcare</h3>
//             <p className="text-sm text-gray-500 leading-6">
//               Streamline patient record management and ensure compliance with
//               HIPAA standards.
//             </p>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* Icon Component */
// function Icon() {
//   return (
//     <div className="mx-auto w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
//       <div className="w-6 h-6 rounded bg-orange-500" />
//     </div>
//   );
// }
// "use client";

// import { motion } from "framer-motion";

// export default function Industries() {
//   return (
//     <section className="relative w-full py-32 bg-white overflow-hidden">
//       {/* LARGE LEFT RING */}
//       <div className="absolute left-[-240px] top-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border-[100px] border-blue-50" />

//       {/* TOP DOTS */}
//       <div className="absolute right-48 top-40 grid grid-cols-4 gap-3 opacity-40">
//         {[...Array(16)].map((_, i) => (
//           <span key={i} className="w-2 h-2 bg-gray-300 rounded-full" />
//         ))}
//       </div>

//       {/* CONTENT */}
//       <div className="relative max-w-7xl mx-auto px-6 lg:px-16">
//         {/* HEADER */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="max-w-xl mb-24"
//         >
//           <p className="text-sm font-semibold mb-2 text-[#CD6028]">
//             AI-driven innovation for growth.
//           </p>

//           <h2 className="text-[44px] leading-[54px] font-bold text-black">
//             Industries We Empower
//           </h2>
//         </motion.div>

//         {/* CARDS */}
//         <div className="relative h-[520px]">
//           {/* Insurance */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="absolute left-[40px] bottom-[0px] w-[320px] bg-white rounded-2xl px-8 py-10 text-center shadow-[0_24px_48px_rgba(0,0,0,0.08)]"
//           >
//             <Icon />
//             <h3 className="text-lg font-semibold mt-4 mb-2">Insurance</h3>
//             <p className="text-sm text-gray-500 leading-6">
//               Automate claims processing with accurate document validation.
//             </p>
//           </motion.div>

//           {/* Lending (center, on ring edge) */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.15 }}
//             viewport={{ once: true }}
//             className="absolute left-[420px] top-[160px] w-[320px] bg-white rounded-2xl px-8 py-10 text-center shadow-[0_24px_48px_rgba(0,0,0,0.08)]"
//           >
//             <Icon />
//             <h3 className="text-lg font-semibold mt-4 mb-2">Lending</h3>
//             <p className="text-sm text-gray-500 leading-6">
//               Ensure faster loan approvals with fraud detection and instant
//               verification.
//             </p>
//           </motion.div>

//           {/* Healthcare */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             viewport={{ once: true }}
//             className="absolute right-[40px] top-[260px] w-[320px] bg-white rounded-2xl px-8 py-10 text-center shadow-[0_24px_48px_rgba(0,0,0,0.08)]"
//           >
//             <Icon />
//             <h3 className="text-lg font-semibold mt-4 mb-2">Healthcare</h3>
//             <p className="text-sm text-gray-500 leading-6">
//               Streamline patient record management and ensure compliance with
//               HIPAA standards.
//             </p>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function Icon() {
//   return (
//     <div className="mx-auto w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center">
//       <div className="w-7 h-7 rounded-md bg-orange-500" />
//     </div>
//   );
// }
// "use client";

// import { motion } from "framer-motion";

// export default function Industries() {
//   return (
//     <section className="relative w-full py-32 bg-white overflow-hidden">
//       {/* LARGE LEFT RING */}
//       <div className="absolute left-[-240px] top-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border-[100px] border-blue-50 z-0" />

//       {/* TOP DOTS */}
//       <div className="absolute right-48 top-40 grid grid-cols-4 gap-3 opacity-40 z-10">
//         {[...Array(16)].map((_, i) => (
//           <span key={i} className="w-2 h-2 bg-gray-300 rounded-full" />
//         ))}
//       </div>

//       {/* CONTENT */}
//       <div className="relative max-w-7xl mx-auto px-6 lg:px-16 z-20">
//         {/* HEADER */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="max-w-xl mb-24"
//         >
//           <p className="text-sm font-semibold mb-2 text-[#CD6028]">
//             AI-driven innovation for growth.
//           </p>

//           <h2 className="text-[44px] leading-[54px] font-bold text-black">
//             Industries We Empower
//           </h2>
//         </motion.div>

//         {/* CARDS */}
//         <div className="relative h-[520px]">
//           {/* Insurance — moved DOWN */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="absolute left-[40px] bottom-[-40px] w-[320px] bg-white rounded-2xl px-8 py-10 text-center shadow-[0_24px_48px_rgba(0,0,0,0.08)] z-30"
//           >
//             <Icon />
//             <h3 className="text-lg font-semibold mt-4 mb-2">Insurance</h3>
//             <p className="text-sm text-gray-500 leading-6">
//               Automate claims processing with accurate document validation.
//             </p>
//           </motion.div>

//           {/* Lending — moved UP */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.15 }}
//             viewport={{ once: true }}
//             className="absolute left-[420px] top-[120px] w-[320px] bg-white rounded-2xl px-8 py-10 text-center shadow-[0_24px_48px_rgba(0,0,0,0.08)] z-30"
//           >
//             <Icon />
//             <h3 className="text-lg font-semibold mt-4 mb-2">Lending</h3>
//             <p className="text-sm text-gray-500 leading-6">
//               Ensure faster loan approvals with fraud detection and instant
//               verification.
//             </p>
//           </motion.div>

//           {/* Healthcare — moved ON TOP of dotted pattern */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             viewport={{ once: true }}
//             className="absolute right-[80px] top-[120px] w-[320px] bg-white rounded-2xl px-8 py-10 text-center shadow-[0_24px_48px_rgba(0,0,0,0.08)] z-40"
//           >
//             <Icon />
//             <h3 className="text-lg font-semibold mt-4 mb-2">Healthcare</h3>
//             <p className="text-sm text-gray-500 leading-6">
//               Streamline patient record management and ensure compliance with
//               HIPAA standards.
//             </p>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function Icon() {
//   return (
//     <div className="mx-auto w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center">
//       <div className="w-7 h-7 rounded-md bg-orange-500" />
//     </div>
//   );
// }

// "use client";

// import { motion } from "framer-motion";

// export default function Industries() {
//   return (
//     <section className="relative w-full py-32 bg-white overflow-hidden">
//       {/* LARGE LEFT RING */}
//       <div className="absolute left-[-240px] top-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border-[100px] border-blue-50 z-0" />

//       {/* TOP DOTS */}
//       <div className="absolute right-48 top-40 grid grid-cols-4 gap-3 opacity-40 z-10">
//         {[...Array(16)].map((_, i) => (
//           <span key={i} className="w-2 h-2 bg-gray-300 rounded-full" />
//         ))}
//       </div>

//       {/* CONTENT */}
//       <div className="relative max-w-7xl mx-auto px-6 lg:px-16 z-20">
//         {/* HEADER */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="max-w-xl mb-24"
//         >
//           <p className="text-sm font-semibold mb-2 text-[#CD6028]">
//             AI-driven innovation for growth.
//           </p>

//           <h2 className="text-[44px] leading-[54px] font-bold text-black">
//             Industries We Empower
//           </h2>
//         </motion.div>

//         {/* CARDS */}
//         <div className="relative h-[520px]">
//           {/* Insurance — down */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="absolute left-[40px] bottom-[-40px] w-[320px] bg-white rounded-2xl px-8 py-10 text-center shadow-[0_24px_48px_rgba(0,0,0,0.08)] z-30"
//           >
//             <Icon />
//             <h3 className="text-lg font-semibold mt-4 mb-2">Insurance</h3>
//             <p className="text-sm text-gray-500 leading-6">
//               Automate claims processing with accurate document validation.
//             </p>
//           </motion.div>

//           {/* Lending — up */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.15 }}
//             viewport={{ once: true }}
//             className="absolute left-[420px] top-[120px] w-[320px] bg-white rounded-2xl px-8 py-10 text-center shadow-[0_24px_48px_rgba(0,0,0,0.08)] z-30"
//           >
//             <Icon />
//             <h3 className="text-lg font-semibold mt-4 mb-2">Lending</h3>
//             <p className="text-sm text-gray-500 leading-6">
//               Ensure faster loan approvals with fraud detection and instant
//               verification.
//             </p>
//           </motion.div>

//           {/* Healthcare — MOVED FURTHER UP */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             viewport={{ once: true }}
//             className="absolute right-[80px] top-[60px] w-[320px] bg-white rounded-2xl px-8 py-10 text-center shadow-[0_24px_48px_rgba(0,0,0,0.08)] z-40"
//           >
//             <Icon />
//             <h3 className="text-lg font-semibold mt-4 mb-2">Healthcare</h3>
//             <p className="text-sm text-gray-500 leading-6">
//               Streamline patient record management and ensure compliance with
//               HIPAA standards.
//             </p>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function Icon() {
//   return (
//     <div className="mx-auto w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center">
//       <div className="w-7 h-7 rounded-md bg-orange-500" />
//     </div>
//   );
// }

// "use client";

// import { motion } from "framer-motion";

// export default function Industries() {
//   return (
//     <section className="relative w-full py-32 bg-white overflow-hidden">
//       {/* LARGE LEFT RING */}
//       <div className="absolute left-[-240px] top-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border-[100px] border-blue-50 z-0" />

//       {/* TOP DOTS */}
//       <div className="absolute right-48 top-40 grid grid-cols-4 gap-3 opacity-40 z-10">
//         {[...Array(16)].map((_, i) => (
//           <span key={i} className="w-2 h-2 bg-gray-300 rounded-full" />
//         ))}
//       </div>

//       {/* CONTENT */}
//       <div className="relative max-w-7xl mx-auto px-6 lg:px-16 z-20">
//         {/* HEADER */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="max-w-xl mb-24"
//         >
//           <p className="text-sm font-semibold mb-2 text-[#CD6028]">
//             AI-driven innovation for growth.
//           </p>

//           <h2 className="text-[44px] leading-[54px] font-bold text-black">
//             Industries We Empower
//           </h2>
//         </motion.div>

//         {/* CARDS */}
//         <div className="relative h-[520px]">
//           {/* Insurance — DOWN */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="absolute left-[40px] bottom-[-40px] w-[320px] bg-white rounded-2xl px-8 py-10 text-center shadow-[0_24px_48px_rgba(0,0,0,0.08)] z-30"
//           >
//             <Icon />
//             <h3 className="text-lg font-semibold mt-4 mb-2">Insurance</h3>
//             <p className="text-sm text-gray-500 leading-6">
//               Automate claims processing with accurate document validation.
//             </p>
//           </motion.div>

//           {/* Lending — UP */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.15 }}
//             viewport={{ once: true }}
//             className="absolute left-[420px] top-[120px] w-[320px] bg-white rounded-2xl px-8 py-10 text-center shadow-[0_24px_48px_rgba(0,0,0,0.08)] z-30"
//           >
//             <Icon />
//             <h3 className="text-lg font-semibold mt-4 mb-2">Lending</h3>
//             <p className="text-sm text-gray-500 leading-6">
//               Ensure faster loan approvals with fraud detection and instant
//               verification.
//             </p>
//           </motion.div>

//           {/* Healthcare — EXACTLY AT TOP DOTTED */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             viewport={{ once: true }}
//             className="absolute right-[80px] top-[160px] w-[320px] bg-white rounded-2xl px-8 py-10 text-center shadow-[0_24px_48px_rgba(0,0,0,0.08)] z-40"
//           >
//             <Icon />
//             <h3 className="text-lg font-semibold mt-4 mb-2">Healthcare</h3>
//             <p className="text-sm text-gray-500 leading-6">
//               Streamline patient record management and ensure compliance with
//               HIPAA standards.
//             </p>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function Icon() {
//   return (
//     <div className="mx-auto w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center">
//       <div className="w-7 h-7 rounded-md bg-orange-500" />
//     </div>
//   );
// }
// "use client";

// import { motion } from "framer-motion";

// export default function Industries() {
//   return (
//     <section className="relative w-full py-32 bg-white overflow-hidden">
//       {/* LARGE LEFT RING */}
//       <div className="absolute left-[-240px] top-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border-[100px] border-blue-50 z-0" />

//       {/* TOP DOTS */}
//       <div className="absolute right-48 top-40 grid grid-cols-4 gap-3 opacity-40 z-10 pointer-events-none">
//         {[...Array(16)].map((_, i) => (
//           <span key={i} className="w-2 h-2 bg-gray-300 rounded-full" />
//         ))}
//       </div>

//       {/* CONTENT */}
//       <div className="relative max-w-7xl mx-auto px-6 lg:px-16 z-20">
//         {/* HEADER */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="max-w-xl mb-24"
//         >
//           <p className="text-sm font-semibold mb-2 text-[#CD6028]">
//             AI-driven innovation for growth.
//           </p>

//           <h2 className="text-[44px] leading-[54px] font-bold text-black">
//             Industries We Empower
//           </h2>
//         </motion.div>

//         {/* CARDS */}
//         <div className="relative h-[520px]">
//           {/* Insurance — moved DOWN */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="absolute left-[40px] bottom-[-40px] w-[320px] bg-white rounded-2xl px-8 py-10 text-center shadow-[0_24px_48px_rgba(0,0,0,0.08)] z-30"
//           >
//             <Icon />
//             <h3 className="text-lg font-semibold mt-4 mb-2">Insurance</h3>
//             <p className="text-sm text-gray-500 leading-6">
//               Automate claims processing with accurate document validation.
//             </p>
//           </motion.div>

//           {/* Lending — moved UP */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.15 }}
//             viewport={{ once: true }}
//             className="absolute left-[420px] top-[120px] w-[320px] bg-white rounded-2xl px-8 py-10 text-center shadow-[0_24px_48px_rgba(0,0,0,0.08)] z-30"
//           >
//             <Icon />
//             <h3 className="text-lg font-semibold mt-4 mb-2">Lending</h3>
//             <p className="text-sm text-gray-500 leading-6">
//               Ensure faster loan approvals with fraud detection and instant
//               verification.
//             </p>
//           </motion.div>

//           {/* Healthcare — SLIGHT OVERLAP ON DOTS */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             viewport={{ once: true }}
//             className="absolute right-[80px] top-[180px] w-[320px] bg-white rounded-2xl px-8 py-10 text-center shadow-[0_24px_48px_rgba(0,0,0,0.08)] z-[999]"
//           >
//             <Icon />
//             <h3 className="text-lg font-semibold mt-4 mb-2">Healthcare</h3>
//             <p className="text-sm text-gray-500 leading-6">
//               Streamline patient record management and ensure compliance with
//               HIPAA standards.
//             </p>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function Icon() {
//   return (
//     <div className="mx-auto w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center">
//       <div className="w-7 h-7 rounded-md bg-orange-500" />
//     </div>
//   );
// }

// "use client";

// import { motion } from "framer-motion";

// export default function Industries() {
//   return (
//     <section className="relative w-full py-32 bg-white overflow-hidden">
//       {/* LARGE LEFT RING */}
//       <div className="absolute left-[-240px] top-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border-[100px] border-blue-50 z-0" />

//       {/* TOP DOTS */}
//       <div className="absolute right-48 top-40 grid grid-cols-4 gap-3 opacity-40 z-10 pointer-events-none">
//         {[...Array(16)].map((_, i) => (
//           <span key={i} className="w-2 h-2 bg-gray-300 rounded-full" />
//         ))}
//       </div>

//       {/* CONTENT */}
//       <div className="relative max-w-7xl mx-auto px-6 lg:px-16 z-20">
//         {/* HEADER */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="max-w-xl mb-24"
//         >
//           <p className="text-sm font-semibold mb-2 text-[#CD6028]">
//             AI-driven innovation for growth.
//           </p>

//           <h2 className="text-[44px] leading-[54px] font-bold text-black">
//             Industries We Empower
//           </h2>
//         </motion.div>

//         {/* CARDS */}
//         <div className="relative h-[520px]">
//           {/* Insurance */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="absolute left-[40px] bottom-[-40px] w-[320px] bg-white rounded-2xl px-8 py-10 text-center shadow-[0_24px_48px_rgba(0,0,0,0.08)] z-30"
//           >
//             <Icon />
//             <h3 className="text-lg font-semibold mt-4 mb-2">Insurance</h3>
//             <p className="text-sm text-gray-500 leading-6">
//               Automate claims processing with accurate document validation.
//             </p>
//           </motion.div>

//           {/* Lending */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.15 }}
//             viewport={{ once: true }}
//             className="absolute left-[420px] top-[120px] w-[320px] bg-white rounded-2xl px-8 py-10 text-center shadow-[0_24px_48px_rgba(0,0,0,0.08)] z-30"
//           >
//             <Icon />
//             <h3 className="text-lg font-semibold mt-4 mb-2">Lending</h3>
//             <p className="text-sm text-gray-500 leading-6">
//               Ensure faster loan approvals with fraud detection and instant
//               verification.
//             </p>
//           </motion.div>

//           {/* Healthcare — TOP AT -20px */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             viewport={{ once: true }}
//             className="absolute right-[80px] top-[-20px] w-[320px] bg-white rounded-2xl px-8 py-10 text-center shadow-[0_24px_48px_rgba(0,0,0,0.08)] z-[999]"
//           >
//             <Icon />
//             <h3 className="text-lg font-semibold mt-4 mb-2">Healthcare</h3>
//             <p className="text-sm text-gray-500 leading-6">
//               Streamline patient record management and ensure compliance with
//               HIPAA standards.
//             </p>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function Icon() {
//   return (
//     <div className="mx-auto w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center">
//       <div className="w-7 h-7 rounded-md bg-orange-500" />
//     </div>
//   );
// }
// "use client";

// import { motion } from "framer-motion";

// export default function Industries() {
//   return (
//     <section className="relative w-full py-32 bg-white overflow-visible">
//       {/* LARGE LEFT RING */}
//       <div
//         className="absolute rounded-full border-[100px] border-blue-50 z-0"
//         style={{
//           width: "761px",
//           height: "761px",
//           left: "-62px",
//           top: "50%",
//           opacity: 1,
//           transform: "translateY(-50%) rotate(0deg)",
//         }}
//       />

//       {/* TOP DOTS */}
//       <div className="absolute right-48 top-40 grid grid-cols-4 gap-3 opacity-40 z-10 pointer-events-none">
//         {[...Array(16)].map((_, i) => (
//           <span key={i} className="w-2 h-2 bg-gray-300 rounded-full" />
//         ))}
//       </div>

//       {/* CONTENT */}
//       <div className="relative max-w-7xl mx-auto px-6 lg:px-16 z-20">
//         {/* HEADER */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="max-w-xl mb-24"
//         >
//           <p className="text-sm font-semibold mb-2 text-[#CD6028]">
//             AI-driven innovation for growth.
//           </p>

//           <h2 className="text-[44px] leading-[54px] font-bold text-black">
//             Industries We Empower
//           </h2>
//         </motion.div>

//         {/* CARDS */}
//         <div className="relative h-[520px]">
//           {/* Insurance */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="absolute left-[40px] bottom-[-40px] w-[320px] bg-white rounded-2xl px-8 py-10 text-center shadow-[0_24px_48px_rgba(0,0,0,0.08)] z-30"
//           >
//             <Icon />
//             <h3 className="text-lg font-semibold mt-4 mb-2">Insurance</h3>
//             <p className="text-sm text-gray-500 leading-6">
//               Automate claims processing with accurate document validation.
//             </p>
//           </motion.div>

//           {/* Lending */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.15 }}
//             viewport={{ once: true }}
//             className="absolute left-[420px] top-[120px] w-[320px] bg-white rounded-2xl px-8 py-10 text-center shadow-[0_24px_48px_rgba(0,0,0,0.08)] z-30"
//           >
//             <Icon />
//             <h3 className="text-lg font-semibold mt-4 mb-2">Lending</h3>
//             <p className="text-sm text-gray-500 leading-6">
//               Ensure faster loan approvals with fraud detection and instant
//               verification.
//             </p>
//           </motion.div>

//           {/* Healthcare — overlapping top-right dots */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             viewport={{ once: true }}
//             className="absolute right-[50px] top-[-50px] w-[320px] bg-white rounded-2xl px-8 py-10 text-center shadow-[0_28px_56px_rgba(0,0,0,0.15)] z-[999]"
//           >
//             <Icon />
//             <h3 className="text-lg font-semibold mt-4 mb-2">Healthcare</h3>
//             <p className="text-sm text-gray-500 leading-6">
//               Streamline patient record management and ensure compliance with HIPAA standards.
//             </p>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function Icon() {
//   return (
//     <div className="mx-auto w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center">
//       <div className="w-7 h-7 rounded-md bg-orange-500" />
//     </div>
//   );
// }
// "use client";

// import { motion } from "framer-motion";

// export default function Industries() {
//   return (
//     <section className="relative w-full py-32 bg-white overflow-visible">
//       {/* LARGE LEFT RING */}
//       <div
//         className="absolute rounded-full border-[100px] border-blue-50"
//         style={{
//           width: "761px",
//           height: "761px",
//           left: "-62px",
//           top: "50%",
//           opacity: 1,
//           transform: "translateY(-50%) rotate(0deg)",
//         }}
//       />

//       {/* TOP DOTS */}
//       <div className="absolute right-48 top-40 grid grid-cols-4 gap-3 opacity-40 z-10 pointer-events-none">
//         {[...Array(16)].map((_, i) => (
//           <span key={i} className="w-2 h-2 bg-gray-300 rounded-full" />
//         ))}
//       </div>

//       {/* CONTENT */}
//       <div className="relative max-w-7xl mx-auto px-6 lg:px-16 z-20">
//         {/* HEADER */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="max-w-xl mb-24"
//         >
//           <p className="text-sm font-semibold mb-2 text-[#CD6028]">
//             AI-driven innovation for growth.
//           </p>

//           <h2 className="text-[44px] leading-[54px] font-bold text-black">
//             Industries We Empower
//           </h2>
//         </motion.div>

//         {/* CARDS */}
//         <div className="relative h-[520px]">
//           {/* Insurance */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="absolute left-[40px] bottom-[-40px] w-[320px] bg-white rounded-2xl px-8 py-10 text-center shadow-[0_28px_56px_rgba(0,0,0,0.15)] z-30"
//           >
//             <Icon />
//             <h3 className="text-lg font-semibold mt-4 mb-2">Insurance</h3>
//             <p className="text-sm text-gray-500 leading-6">
//               Automate claims processing with accurate document validation.
//             </p>
//           </motion.div>

//           {/* Lending */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.15 }}
//             viewport={{ once: true }}
//             className="absolute left-[420px] top-[120px] w-[320px] bg-white rounded-2xl px-8 py-10 text-center shadow-[0_28px_56px_rgba(0,0,0,0.15)] z-30"
//           >
//             <Icon />
//             <h3 className="text-lg font-semibold mt-4 mb-2">Lending</h3>
//             <p className="text-sm text-gray-500 leading-6">
//               Ensure faster loan approvals with fraud detection and instant verification.
//             </p>
//           </motion.div>

//           {/* Healthcare — overlapping top-right dots */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             viewport={{ once: true }}
//             className="absolute right-[50px] top-[-50px] w-[320px] bg-white rounded-2xl px-8 py-10 text-center shadow-[0_28px_56px_rgba(0,0,0,0.15)] z-30"
//           >
//             <Icon />
//             <h3 className="text-lg font-semibold mt-4 mb-2">Healthcare</h3>
//             <p className="text-sm text-gray-500 leading-6">
//               Streamline patient record management and ensure compliance with HIPAA standards.
//             </p>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function Icon() {
//   return (
//     <div className="mx-auto w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center">
//       <div className="w-7 h-7 rounded-md bg-orange-500" />
//     </div>
//   );
// }
"use client";

import { motion } from "framer-motion";

export default function Industries() {
  return (
    <section className="relative w-full py-32 bg-white overflow-visible">
      {/* LARGE LEFT RING */}
      <div
        className="absolute rounded-full border-[100px] border-blue-50"
        style={{
          width: "761px",
          height: "761px",
          left: "-62px",
          top: "50%",
          opacity: 1,
          transform: "translateY(-50%) rotate(0deg)",
        }}
      />

      {/* TOP DOTS */}
      <div className="absolute right-48 top-40 grid grid-cols-4 gap-3 opacity-40 z-10 pointer-events-none">
        {[...Array(16)].map((_, i) => (
          <span key={i} className="w-2 h-2 bg-gray-300 rounded-full" />
        ))}
      </div>

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-16 z-20">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-xl mb-24"
        >
          <p className="text-sm font-semibold mb-2 text-[#CD6028]">
            AI-driven innovation for growth.
          </p>

          <h2 className="text-[44px] leading-[54px] font-bold text-black">
            Industries We Empower
          </h2>
        </motion.div>

        {/* CARDS */}
        <div className="relative h-[520px]">
          {/* Insurance */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="absolute left-[40px] bottom-[-40px] w-[320px] bg-white rounded-2xl px-8 py-10 text-center shadow-[0_28px_56px_rgba(0,0,0,0.15)] z-30"
          >
            <Icon />
            <h3 className="text-lg font-semibold mt-4 mb-2">Insurance</h3>
            <p className="text-sm text-gray-500 leading-6">
              Automate claims processing with accurate document validation.
            </p>
          </motion.div>

          {/* Lending */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="absolute left-[420px] top-[120px] w-[320px] bg-white rounded-2xl px-8 py-10 text-center shadow-[0_28px_56px_rgba(0,0,0,0.15)] z-30"
          >
            <Icon />
            <h3 className="text-lg font-semibold mt-4 mb-2">Lending</h3>
            <p className="text-sm text-gray-500 leading-6">
              Ensure faster loan approvals with fraud detection and instant verification.
            </p>
          </motion.div>

          {/* Healthcare — overlapping top-right dots */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="absolute right-[50px] top-[-50px] w-[320px] bg-white rounded-2xl px-8 py-10 text-center shadow-[0_28px_56px_rgba(0,0,0,0.15)] z-30"
          >
            <Icon />
            <h3 className="text-lg font-semibold mt-4 mb-2">Healthcare</h3>
            <p className="text-sm text-gray-500 leading-6">
              Streamline patient record management and ensure compliance with HIPAA standards.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Icon() {
  return (
    <div className="mx-auto w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center">
      <div className="w-7 h-7 rounded-md bg-orange-500" />
    </div>
  );
}
