import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  iconSrc?: string;
  iconPosition?: "left" | "right";
  style?: React.CSSProperties;
}
const Button = ({
  label,
  onClick,
  style,
  iconSrc,
  iconPosition,
}: ButtonProps) => {
  return (
    <>
      <button
        onClick={onClick}
        style={{
          ...defaultStyle,
          ...style,
          flexDirection: iconPosition === "left" ? "row" : "row-reverse",
        }}
      >
        {iconSrc && <img src={iconSrc} alt="icon" />}
        {label}
      </button>
    </>
  );
};

// Default styles
const defaultStyle: React.CSSProperties = {
  display: "flex",
  gap: "8px",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px 20px",
  fontSize: "16px",
  fontWeight: "600",
  backgroundColor: "#b0e681",
  color: "white",
  borderRadius: "40px",
  border: "1px solid black",
  cursor: "pointer",
};

export default Button;
