// "use client";

// import { motion } from "framer-motion";

// export default function Hero() {
//   return (
//     <section
//       className="relative w-full min-h-screen flex items-center"
//       style={{
//         backgroundImage: "url('/assets/home_bg.svg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <div className="w-full px-6 lg:px-16 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

//         {/* LEFT CONTENT */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           {/* Main Heading */}
//           <h1 className="text-[48px] leading-[68.25px] font-bold mb-4">
//             {/* Top line: AI-Powered with gradient */}
//             <span
//               className="bg-clip-text text-transparent"
//               style={{
//                 backgroundImage: "linear-gradient(90deg, #CD6028 0%, #3E6EB4 100%)",
//                 fontFamily: "Raleway",
//                 fontWeight: 700,
//                 verticalAlign: "middle",
//               }}
//             >
//               AI-Powered
//             </span>
//             <br />
//             {/* Bottom line: Remaining text in black */}
//             <span
//               style={{
//                 color: "#000000",
//                 fontFamily: "Raleway",
//                 fontWeight: 700,
//                 verticalAlign: "middle",
//               }}
//             >
//               Document Automation & Fraud Detection
//             </span>
//           </h1>

//           {/* Subtext */}
//           <p
//             className="mt-6"
//             style={{
//               fontFamily: "Manrope",
//               fontWeight: 500,
//               fontSize: "20px",
//               lineHeight: "31.2px",
//               letterSpacing: "0px",
//               verticalAlign: "middle",
//               color: "#000000",
//             }}
//           >
//             Enhance security, accuracy, and efficiency with our cutting-edge AI
//             solutions for seamless document processing and fraud prevention.
//           </p>

//           {/* Buttons */}
//           <div className="mt-10 flex gap-5">
//             {/* Top Button */}
//             <button
//               className="px-8 py-3 rounded-full text-white"
//               style={{
//                 backgroundColor: "#3E6EB4",
//                 fontFamily: "Raleway",
//                 fontWeight: 600,
//                 fontSize: "16px",
//                 lineHeight: "20px",
//                 letterSpacing: "0px",
//                 textAlign: "center",
//                 verticalAlign: "middle",
//               }}
//             >
//               Get a Demo
//             </button>
//             {/* Bottom Button (Changed as requested) */}
//             <button
//               className="px-8 py-3 rounded-full text-white"
//               style={{
//                 backgroundColor: "#3E6EB4", // Updated background color
//                 color: "#FFFFFF",           // Updated text color
//                 fontFamily: "Raleway",
//                 fontWeight: 600,
//                 fontSize: "16px",
//                 lineHeight: "20px",
//                 letterSpacing: "0px",
//                 textAlign: "center",
//                 verticalAlign: "middle",
//               }}
//             >
//               Explore Solutions
//             </button>
//           </div>
//         </motion.div>

//         {/* RIGHT VISUALS */}
//         <motion.div
//           className="relative h-[420px] w-full"
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.9, ease: "easeOut" }}
//         >
//           {/* Floating Cards */}
//           <motion.div
//             className="absolute top-0 right-24 w-64 bg-white rounded-xl shadow-lg p-4"
//             animate={{ y: [0, -10, 0] }}
//             transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
//           >
//             <p className="text-xs text-gray-500 mb-2">DRIVING LICENSE</p>
//             <div className="h-28 bg-gray-100 rounded" />
//           </motion.div>

//           <motion.div
//             className="absolute top-24 right-0 w-56 bg-white rounded-xl shadow-lg p-4"
//             animate={{ y: [0, 12, 0] }}
//             transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
//           >
//             <div className="h-32 bg-gray-100 rounded" />
//           </motion.div>

//           <motion.div
//             className="absolute bottom-0 right-12 w-72 bg-white rounded-xl shadow-lg p-4"
//             animate={{ y: [0, -8, 0] }}
//             transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
//           >
//             <div className="h-36 bg-gray-100 rounded" />
//           </motion.div>
//         </motion.div>

//       </div>
//     </section>
//   );
// }


// "use client";

// import { motion } from "framer-motion";
// import { useState, useEffect } from "react";
// import Image from "next/image";

// export default function Hero() {
//   const images = [
//     "/assets/driving.svg",
//       "/assets/groth_doc.svg",
//     "/assets/rent.svg",
   
//   ];

//   const [active, setActive] = useState(1);

//   // 🔁 Auto rotate
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActive((prev) => (prev + 1) % images.length);
//     }, 3500);

//     return () => clearInterval(interval);
//   }, [images.length]);

//   const getStyle = (index) => {
//     if (index === active) {
//       return {
//         x: 0,
//         scale: 1,
//         opacity: 1,
//         filter: "blur(0px)",
//         zIndex: 3,
//       };
//     }

//     if (
//       index === (active - 1 + images.length) % images.length
//     ) {
//       return {
//         x: -163,
//         scale: 0.9,
//         opacity: 0.3,
//         filter: "blur(3px)",
//         zIndex: 2,
//       };
//     }

//     return {
//       x: 163,
//       scale: 0.9,
//       opacity: 0.3,
//       filter: "blur(3px)",
//       zIndex: 2,
//     };
//   };

//   return (
//     <section
//       className="relative w-full min-h-screen flex items-center"
//       style={{
//         backgroundImage: "url('/assets/home_bg.svg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="w-full px-6 lg:px-16 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

//         {/* LEFT CONTENT */}
//         <div>
//           <h1 className="text-[48px] leading-[68px] font-bold">
//             <span className="text-[#CD6028]">AI-Powered</span>
//             <br />
//             Document Automation <br /> & Fraud Detection
//           </h1>

//           <p className="mt-6 text-lg max-w-xl">
//             Enhance security, accuracy, and efficiency with our cutting-edge AI
//             solutions for seamless document processing and fraud prevention.
//           </p>

//           <div className="mt-10 flex gap-5">
//             <button className="px-8 py-3 rounded-full bg-[#3E6EB4] text-white">
//               Get a Demo
//             </button>
//             <button className="px-8 py-3 rounded-full bg-[#3E6EB4] text-white">
//               Explore Solutions
//             </button>
//           </div>
//         </div>

//         {/* RIGHT SIDE – AUTO MOVING IMAGES */}
//         <div className="relative h-[420px] w-full flex items-center justify-center overflow-hidden">
//           {images.map((src, index) => (
//             <motion.div
//               key={index}
//               className="absolute"
//               animate={getStyle(index)}
//               transition={{ duration: 0.8, ease: "easeInOut" }}
//               style={{ width: 318 }}
//             >
//               <Image
//                 src={src}
//                 alt="document"
//                 width={318}
//                 height={200}
//                 className="object-contain"
//                 priority
//               />
//             </motion.div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }


// "use client";

// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useEffect } from "react";
// import Image from "next/image";

// export default function Hero() {
//   const images = [
//     "/assets/driving.svg",
//     "/assets/rent.svg",
//     "/assets/growth_doc.svg",
    
//   ];

//   const [activeIndex, setActiveIndex] = useState(0);

//   // Rotate EVERY image one by one
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % images.length);
//     }, 3500);

//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <section
//       className="relative w-full min-h-screen flex items-center"
//       style={{
//         backgroundImage: "url('/assets/home_bg.svg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="w-full px-6 lg:px-16 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

//         {/* LEFT CONTENT */}
//         <div>
//           <h1 className="text-[48px] leading-[68px] font-bold text-gray-900">
//             <span className="text-[#CD6028]">AI-Powered</span>
//             <br />
//             Document Automation <br /> & Fraud Detection
//           </h1>

//           <p className="mt-6 text-lg max-w-xl text-gray-700">
//             Enhance security, accuracy, and efficiency with our cutting-edge AI
//             solutions for seamless document processing and fraud prevention.
//           </p>

//           <div className="mt-10 flex gap-5">
//             <button className="px-8 py-3 rounded-full bg-[#3E6EB4] text-white font-medium">
//               Get a Demo
//             </button>
//             <button className="px-8 py-3 rounded-full bg-[#3E6EB4] text-white font-medium">
//               Explore Solutions
//             </button>
//           </div>
//         </div>

//         {/* RIGHT SIDE – SINGLE IMAGE ROTATION */}
//         <div className="relative h-[520px] w-full flex items-center justify-center overflow-hidden">
//           <div className="relative w-full max-w-[500px] h-full">

//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activeIndex}
//                 initial={{ opacity: 0, x: 80 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -80 }}
//                 transition={{ duration: 0.7, ease: "easeInOut" }}
//                 className="absolute inset-0 flex items-center justify-center"
//               >
//                 <Image
//                   src={images[activeIndex]}
//                   alt={`Slide ${activeIndex}`}
//                   width={480}
//                   height={320}
//                   className="object-contain"
//                 />
//               </motion.div>
//             </AnimatePresence>

//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }

// "use client";

// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useEffect } from "react";
// import Image from "next/image";

// export default function Hero() {
//   const images = [
//     "/assets/drive.svg",
//     "/assets/Invocie.svg",
//     "/assets/Doc.svg",
//   ];

//   const [active, setActive] = useState(0);
//   const [isScanning, setIsScanning] = useState(false);

//   // 🔁 Auto rotate every image
//   useEffect(() => {
//     let scanTimeout;
//     let nextTimeout;

//     // Start scanning after 3s
//     scanTimeout = setTimeout(() => {
//       setIsScanning(true);
//     }, 3000);

//     // Move to next image after 1.5s scanning
//     nextTimeout = setTimeout(() => {
//       setIsScanning(false);
//       setActive((prev) => (prev + 1) % images.length);
//     }, 4500); // 3s wait + 1.5s scan

//     return () => {
//       clearTimeout(scanTimeout);
//       clearTimeout(nextTimeout);
//     };
//   }, [active, images.length]);

//   const getStyle = (index) => {
//     if (index === active) {
//       return {
//         x: 0,
//         scale: 1,
//         opacity: 1,
//         filter: "blur(0px)",
//         zIndex: 3,
//       };
//     }
//     if (index === (active - 1 + images.length) % images.length) {
//       return {
//         x: -163,
//         scale: 0.9,
//         opacity: 0.3,
//         filter: "blur(3px)",
//         zIndex: 2,
//       };
//     }
//     return {
//       x: 163,
//       scale: 0.9,
//       opacity: 0.3,
//       filter: "blur(3px)",
//       zIndex: 2,
//     };
//   };

//   return (
//     <section
//       className="relative w-full min-h-screen flex items-center"
//       style={{
//         backgroundImage: "url('/assets/home_bg.svg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="w-full px-6 lg:px-16 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

//         {/* LEFT CONTENT */}
//         <div>
//           <h1 className="text-[48px] leading-[68px] font-bold">
//             <span className="text-[#CD6028]">AI-Powered</span>
//             <br />
//             Document Automation <br /> & Fraud Detection
//           </h1>

//           <p className="mt-6 text-lg max-w-xl">
//             Enhance security, accuracy, and efficiency with our cutting-edge AI
//             solutions for seamless document processing and fraud prevention.
//           </p>

//           <div className="mt-10 flex gap-5">
//             <button className="px-8 py-3 rounded-full bg-[#3E6EB4] text-white">
//               Get a Demo
//             </button>
//             <button className="px-8 py-3 rounded-full bg-[#3E6EB4] text-white">
//               Explore Solutions
//             </button>
//           </div>
//         </div>

//         {/* RIGHT SIDE – CAROUSEL WITH CENTER SCAN */}
//         <div className="relative h-[420px] w-full flex items-center justify-center overflow-hidden">
//           {images.map((src, index) => (
//             <motion.div
//               key={index}
//               className="absolute"
//               animate={getStyle(index)}
//               transition={{ duration: 0.8, ease: "easeInOut" }}
//               style={{ width: 318 }}
//             >
//               <div className="relative">
//                 <Image
//                   src={src}
//                   alt="document"
//                   width={318}
//                   height={200}
//                   className="object-contain"
//                   priority
//                 />

//                 {/* SCANNING ONLY ON CENTER IMAGE */}
//                 <AnimatePresence>
//                   {isScanning && index === active && (
//                     <motion.div
//                       initial={{ y: "-100%" }}
//                       animate={{ y: "100%" }}
//                       exit={{ opacity: 0 }}
//                       transition={{ duration: 1.5, ease: "linear" }}
//                       className="
//                         absolute
//                         left-1/2
//                         -translate-x-1/2
//                         top-0
//                         h-full
//                         w-[60px]
//                         bg-gradient-to-b
//                         from-transparent
//                         via-blue-400/50
//                         to-transparent
//                         blur-sm
//                         pointer-events-none
//                       "
//                     />
//                   )}
//                 </AnimatePresence>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

// "use client";

// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useEffect } from "react";
// import Image from "next/image";

// export default function Hero() {
//   const images = [
//     "/assets/drive.svg",
//     "/assets/Invocie.svg",
//     "/assets/Doc.svg",
//   ];

//   const [active, setActive] = useState(0);
//   const [isScanning, setIsScanning] = useState(false);

//   // 🔁 Auto rotate with scan
//   useEffect(() => {
//     const scanTimeout = setTimeout(() => {
//       setIsScanning(true);
//     }, 2500);

//     const nextTimeout = setTimeout(() => {
//       setIsScanning(false);
//       setActive((prev) => (prev + 1) % images.length);
//     }, 4200);

//     return () => {
//       clearTimeout(scanTimeout);
//       clearTimeout(nextTimeout);
//     };
//   }, [active, images.length]);

//   const getStyle = (index) => {
//     if (index === active) {
//       return {
//         x: 0,
//         scale: 1,
//         opacity: 1,
//         filter: "blur(0px)",
//         zIndex: 3,
//       };
//     }

//     if (index === (active - 1 + images.length) % images.length) {
//       return {
//         x: -170,
//         scale: 0.92,
//         opacity: 0.6,
//         filter: "blur(1px)",
//         zIndex: 2,
//       };
//     }

//     return {
//       x: 170,
//       scale: 0.92,
//       opacity: 0.6,
//       filter: "blur(1px)",
//       zIndex: 2,
//     };
//   };

//   return (
//     <section
//       className="relative w-full min-h-screen flex items-center"
//       style={{
//         backgroundImage: "url('/assets/home_bg.svg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="w-full px-6 lg:px-16 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

//         {/* LEFT CONTENT */}
//         <div>
//           <h1 className="text-[48px] leading-[68px] font-bold">
//             <span className="text-[#CD6028]">AI-Powered</span>
//             <br />
//             Document Automation <br /> & Fraud Detection
//           </h1>

//           <p className="mt-6 text-lg max-w-xl">
//             Enhance security, accuracy, and efficiency with our cutting-edge AI
//             solutions for seamless document processing and fraud prevention.
//           </p>

//           <div className="mt-10 flex gap-5">
//             <button className="px-8 py-3 rounded-full bg-[#3E6EB4] text-white">
//               Get a Demo
//             </button>
//             <button className="px-8 py-3 rounded-full bg-[#3E6EB4] text-white">
//               Explore Solutions
//             </button>
//           </div>
//         </div>

//         {/* RIGHT SIDE – CAROUSEL */}
//         <div className="relative h-[420px] w-full flex items-center justify-center overflow-hidden">
//           {images.map((src, index) => (
//             <motion.div
//               key={index}
//               className="absolute"
//               animate={getStyle(index)}
//               transition={{ duration: 0.8, ease: "easeInOut" }}
//               style={{ width: 340 }}
//             >
//               <div className="relative">
//                 <Image
//                   src={src}
//                   alt="document"
//                   width={340}
//                   height={220}
//                   className="object-contain"
//                   priority
//                 />

//                 {/* 🔥 HORIZONTAL SCAN LINE */}
//                 <AnimatePresence>
//                   {isScanning && index === active && (
//                     <motion.div
//                       initial={{ top: 0 }}
//                       animate={{ top: "100%" }}
//                       exit={{ opacity: 0 }}
//                       transition={{ duration: 1.5, ease: "linear" }}
//                       className="
//                         absolute
//                         left-0
//                         w-full
//                         h-[2px]
//                         bg-blue-400
//                         shadow-[0_0_12px_rgba(96,165,250,0.9)]
//                         pointer-events-none
//                       "
//                     />
//                   )}
//                 </AnimatePresence>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }
// "use client";

// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useEffect } from "react";
// import Image from "next/image";

// export default function Hero() {
//   const images = [
//     "/assets/drive.svg",
//     "/assets/Invocie.svg",
//     "/assets/Doc.svg",
//   ];

//   const [active, setActive] = useState(0);
//   const [isScanning, setIsScanning] = useState(false);

//   // 🔁 Auto rotate with scan
//   useEffect(() => {
//     const scanTimeout = setTimeout(() => {
//       setIsScanning(true);
//     }, 2500);

//     const nextTimeout = setTimeout(() => {
//       setIsScanning(false);
//       setActive((prev) => (prev + 1) % images.length);
//     }, 4200);

//     return () => {
//       clearTimeout(scanTimeout);
//       clearTimeout(nextTimeout);
//     };
//   }, [active, images.length]);

//   const getStyle = (index) => {
//     if (index === active) {
//       return {
//         x: 0,
//         scale: 1,
//         opacity: 1,
//         filter: "blur(0px)",
//         zIndex: 3,
//       };
//     }

//     if (index === (active - 1 + images.length) % images.length) {
//       return {
//         x: -170,
//         scale: 0.92,
//         opacity: 0.6,
//         filter: "blur(1px)",
//         zIndex: 2,
//       };
//     }

//     return {
//       x: 170,
//       scale: 0.92,
//       opacity: 0.6,
//       filter: "blur(1px)",
//       zIndex: 2,
//     };
//   };

//   return (
//     <section
//       className="relative w-full min-h-screen flex items-center"
//       style={{
//         backgroundImage: "url('/assets/home_bg.svg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="w-full px-6 lg:px-16 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

//         {/* LEFT CONTENT */}
//         <div>
//           <h1 className="text-[48px] leading-[68px] font-bold">
//             <span className="text-[#CD6028]">AI-Powered</span>
//             <br />
//             Document Automation <br /> & Fraud Detection
//           </h1>

//           <p className="mt-6 text-lg max-w-xl">
//             Enhance security, accuracy, and efficiency with our cutting-edge AI
//             solutions for seamless document processing and fraud prevention.
//           </p>

//           <div className="mt-10 flex gap-5">
//             <button className="px-8 py-3 rounded-full bg-[#3E6EB4] text-white">
//               Get a Demo
//             </button>
//             <button className="px-8 py-3 rounded-full bg-[#3E6EB4] text-white">
//               Explore Solutions
//             </button>
//           </div>
//         </div>

//         {/* RIGHT SIDE – CAROUSEL */}
//         <div className="relative h-[420px] w-full flex items-center justify-center overflow-hidden">
//           {images.map((src, index) => (
//             <motion.div
//               key={index}
//               className="absolute"
//               animate={getStyle(index)}
//               transition={{ duration: 0.8, ease: "easeInOut" }}
//               style={{ width: 340 }}
//             >
//               <div className="relative overflow-hidden">
//                 <Image
//                   src={src}
//                   alt="document"
//                   width={340}
//                   height={220}
//                   className="object-contain"
//                   priority
//                 />

//                 {/* 🕷️ SPIDER SCAN LINES */}
//                 <AnimatePresence>
//                   {isScanning && index === active && (
//                     <motion.div
//                       initial={{ top: "-20%" }}
//                       animate={{ top: "100%" }}
//                       exit={{ opacity: 0 }}
//                       transition={{ duration: 1.6, ease: "linear" }}
//                       className="absolute left-0 w-full pointer-events-none"
//                     >
//                       {[0, 1, 2, 3, 4].map((line) => (
//                         <div
//                           key={line}
//                           className="w-full h-[2px] mb-[10px]"
//                           style={{
//                             background:
//                               "linear-gradient(90deg, transparent, #60a5fa, transparent)",
//                             boxShadow: "0 0 10px rgba(96,165,250,0.8)",
//                           }}
//                         />
//                       ))}
//                     </motion.div>
//                   )}
//                 </AnimatePresence>

//               </div>
//             </motion.div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }


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
