import React, { CSSProperties } from "react";


interface AvatarProps {
  style?: CSSProperties;
  imgSrc:string
}

export default function Avatar({ style, imgSrc }: AvatarProps) {
  return (
    <div
      style={{
        border: `2px solid #B0E681`,
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
