import React from "react";
interface TagProps {
  label: string;
  style?: React.CSSProperties;
}

export default function Tag({ label, style }: TagProps) {
  return <div style={{ ...defaultStyle, ...style }}>{label}</div>;
}

// Default styles
const defaultStyle: React.CSSProperties = {
  display: "flex",
  textWrap: "nowrap",
  justifyContent: "center",
  alignItems: "center",
  padding: "8px 16px",
  fontSize: "16px",
  fontWeight: "500",
  color: "white",
  borderRadius: "40px",
  border: "1px solid white",
};
