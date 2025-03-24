import React, { CSSProperties } from "react";
import { COLORS } from "@/config";

interface AvatarProps {
  style?: CSSProperties;
  imgSrc:string
}

export default function Avatar({ style, imgSrc }: AvatarProps) {
  return (
    <div
      style={{
        border: `2px solid ${COLORS.base}`,
        borderRadius: 100,
        width: "40px",
        height: "40px",
        overflow: "hidden",
        ...style,
      }}
    >
      <img src={imgSrc || `https://placehold.co/600x400.png`} alt="pfp" />
    </div>
  );
}
