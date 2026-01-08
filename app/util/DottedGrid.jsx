"use client";

export default function DottedGrid({
  rows = 4,
  cols = 4,
  dotSize = 8,
  gap = 12,
  color = "#D1D5DB",
  opacity = 0.4,
  position = {},
  zIndex = 10,
}) {
  const totalDots = rows * cols;

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, ${dotSize}px)`,
        gap: `${gap}px`,
        opacity,
        zIndex,
        ...position,
      }}
    >
      {[...Array(totalDots)].map((_, i) => (
        <span
          key={i}
          style={{
            width: dotSize,
            height: dotSize,
            backgroundColor: color,
            borderRadius: "50%",
          }}
        />
      ))}
    </div>
  );
}
