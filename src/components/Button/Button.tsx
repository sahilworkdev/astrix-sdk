import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

const Button = ({ label, onClick, style }: ButtonProps) => {
  return (
    <>
      <button onClick={onClick} style={{ ...defaultStyle, ...style }}>
        {label}
      </button>
    </>
  );
};

// Default styles
const defaultStyle: React.CSSProperties = {
  padding: "10px 20px",
  fontSize: "16px",
  fontWeight: "600",
  backgroundColor: "#007BFF",
  color: "white",
  borderRadius: "40px",
  border: "1px solid red",
  cursor: "pointer",
};

export default Button;
