


// "use client";

// import { motion } from "framer-motion";

// export default function Industries() {
//   return (
//     <section className="relative w-full py-32 bg-white overflow-visible">
//       {/* LEFT-TOP FADED RING */}
//       <div
//         className="absolute z-0"
//         style={{
//           width: "761px",
//           height: "761px",
//           left: "-62px",
//           top: "50%",
//           transform: "translateY(-50%)",
//           borderRadius: "50%",
//           border: "100px solid #EFF6FF",

//           /* Fade more on left-top side */
//           WebkitMaskImage:
//             "radial-gradient(circle at top left, transparent 0%, black 45%, black 100%)",
//           maskImage:
//             "radial-gradient(circle at top left, transparent 0%, black 45%, black 100%)",
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
//           {/* Gradient small text */}
//           <p
//             className="mb-2"
//             style={{
//               background: "linear-gradient(90deg, #CD6028, #3E6EB4)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               fontFamily: "Manrope",
//               fontWeight: 700,
//               fontStyle: "Bold",
//               fontSize: "24px",
//               lineHeight: "100%",
//               letterSpacing: "0px",
//               verticalAlign: "middle",
//             }}
//           >
//             AI-driven innovation for growth.
//           </p>

//           {/* Main heading */}
//           <h2
//             style={{
//               fontFamily: "Raleway",
//               fontWeight: 600,
//               fontStyle: "SemiBold",
//               fontSize: "48px",
//               lineHeight: "100%",
//               letterSpacing: "-1px",
//               color: "#141219",
//             }}
//           >
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
//             className="absolute right-[50px] top-[-50px] w-[320px] bg-white rounded-2xl px-8 py-10 text-center shadow-[0_28px_56px_rgba(0,0,0,0.15)] z-30"
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

// /* ICON */
// function Icon() {
//   return (
//     <div className="mx-auto w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center">
//       <div className="w-7 h-7 rounded-md bg-orange-500" />
//     </div>
//   );
// }


"use client";

import { motion } from "framer-motion";
import Image from "next/image"; 
// import insuranceImg from "/assets/Insurance_Icon.svg";
// import lendingImg from "/assets/Lending_Icon.svg";
// import healthcareImg from "/assets/Healthcare_Icon.svg";

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
    fontStyle: "SemiBold",
    fontSize: "24px",
    lineHeight: "100%",
    letterSpacing: "0px",
    textAlign: "center",
    color: "#141219",
  };

  const subTextStyle = {
    fontFamily: "Manrope",
    fontWeight: 500,
    fontStyle: "Medium",
    fontSize: "16px",
    lineHeight: "100%",
    letterSpacing: "-0.75px",
    textAlign: "center",
    color: "#696969",
  };

  return (
    <section className="relative w-full py-32 bg-white overflow-visible">
      {/* LEFT-TOP FADED RING */}
      <div
        className="absolute z-0"
        style={{
          width: "761px",
          height: "761px",
          left: "-62px",
          top: "50%",
          transform: "translateY(-50%)",
          borderRadius: "50%",
          border: "100px solid #EFF6FF",
          WebkitMaskImage:
            "radial-gradient(circle at top left, transparent 0%, black 45%, black 100%)",
          maskImage:
            "radial-gradient(circle at top left, transparent 0%, black 45%, black 100%)",
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
        <div className="relative h-[520px]">
          {cards.map((card, index) => {
            const positions = [
              { left: "40px", bottom: "-40px" },
              { left: "420px", top: "120px" },
              { right: "50px", top: "-50px" },
            ];
            const pos = positions[index];

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className={`absolute w-[320px] bg-white rounded-2xl px-8 py-10 text-center shadow-[0_28px_56px_rgba(0,0,0,0.15)] z-30`}
                style={pos}
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
