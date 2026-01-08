"use client";

export default function FadedRing({
  size = 760,
  border = 100,
  color = "#EFF6FF",
  fade = "left", // left | right | top | bottom
  position = {},
  zIndex = 0,
}) {
  const getMaskGradient = () => {
    switch (fade) {
      case "right":
        return "linear-gradient(to left, transparent 0%, rgba(0,0,0,0.4) 20%, black 45%, black 100%)";
      case "top":
        return "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 20%, black 45%, black 100%)";
      case "bottom":
        return "linear-gradient(to top, transparent 0%, rgba(0,0,0,0.4) 20%, black 45%, black 100%)";
      case "left":
      default:
        return "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 20%, black 45%, black 100%)";
    }
  };

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        border: `${border}px solid ${color}`,
        zIndex,
        ...position,

        WebkitMaskImage: getMaskGradient(),
        maskImage: getMaskGradient(),
      }}
    />
  );
}
