import React, { ButtonHTMLAttributes, CSSProperties } from "react";
import { COLORS } from "@/config";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  iconPosition?: "left" | "right";
  iconSrc?: string;
  children: React.ReactNode;
  style?: CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  iconPosition = "left",
  iconSrc,
  children,
  style,
  ...props
}) => {
  const buttonStyles: CSSProperties = {
    ...baseStyles,
    ...variants[variant],
    flexDirection: iconPosition === "left" ? "row" : "row-reverse",
    ...style,
  };

  // Hover effect
  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget;
    target.style.backgroundColor =
      variant === "primary" ? COLORS.baseHover : COLORS.base;
    target.style.color = variant === "primary" ? COLORS.dark : COLORS.dark;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget;
    target.style.backgroundColor =
      variant === "primary" ? COLORS.base : COLORS.dark;
    target.style.color = variant === "primary" ? COLORS.dark : COLORS.base;
  };

  return (
    <button
      style={buttonStyles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {iconSrc && <img src={iconSrc} alt="icon" />}
      {children}
    </button>
  );
};

const baseStyles: CSSProperties = {
  fontFamily: "inherit",
  borderRadius: "9999px",
  display: "flex",
  gap: "8px",
  alignItems: "center",
  justifyContent: "center",
  transition: "background-color 0.2s ease, color 0.2s ease",
  cursor: "pointer",
  border: "none",
  fontWeight: 500,
  fontSize: "18px",
  padding: "8px 24px",
  minWidth: "160px",
};

const variants: Record<"primary" | "secondary", CSSProperties> = {
  primary: {
    backgroundColor: COLORS.base,
    color: COLORS.dark,
  },
  secondary: {
    backgroundColor: COLORS.dark,
    color: COLORS.base,
    border: `2px solid ${COLORS.base}`,
  },
};

export default Button;
