"use client";

import React from "react";
import styles from "./capsule.module.scss";
import { FontStyles } from "../../globalTypes";

interface TagCapsuleProps {
  tag: string;
  icon: string;
  color?: string;
  borderColor?: string;
  background?: string;
  selectedIcon: string;
  fontFamily?: FontStyles;
  textSize?: number;
  gradientBackroundColor?: string[];
  onClick?: () => void;
}

export default function Capsule({
  tag,
  icon,
  color = "#fff",
  borderColor = "#3498db",
  fontFamily = "Mulish",
  textSize = 16,
  onClick,
  gradientBackroundColor = ["#b2b2b240", "#62804806"],
  background,
}: TagCapsuleProps) {
  //   const { accentColor } = useTheme();
  console.log("gradientBackroundColor:", gradientBackroundColor);
  return (
    <div
      className={styles.capsule}
      style={{
        border: `1px solid ${borderColor}`,
        ...(background
          ? { background }
          : {
              backgroundImage: `linear-gradient(${gradientBackroundColor[0]}, ${gradientBackroundColor[1]})`,
            }),
        color: color,
        fontFamily: fontFamily,
        fontSize: textSize,
      }}
      onClick={onClick}
    >
      <span className={styles.text}>{tag}</span>
      <img src={icon} width={23} height={23} alt="icon" />
    </div>
  );
}
