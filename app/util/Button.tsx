"use client";

import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        height: "52px",               // fixed height
        padding: "0 40px",            // horizontal padding adjusts with text
        gap: "10px",
        borderRadius: "160px",
        backgroundColor: "#3E6EB4",
        color: "#FFFFFF",
        fontFamily: "Raleway, sans-serif",
        fontWeight: 600,
        fontSize: "16px",
        lineHeight: "20px",
        letterSpacing: "0px",
        textAlign: "center",
        verticalAlign: "middle",
        border: "none",
        cursor: "pointer",
        whiteSpace: "nowrap",          // prevents text from wrapping
      }}
    >
      {text}
    </button>
  );
};

export default Button;
