import React from "react";

export default function Divider({
  title,
  className = "",
  lineClassName = "",
}: {
  title: string;
  className?: string;
  lineClassName?: string;
}) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: "8px",
      }}
      className={className}
    >
      <span
        style={{ flexGrow: 1, height: "1.5px", backgroundColor: "#31373F" }}
        className={lineClassName}
      ></span>
      <span
        style={{
          fontSize: "16px",
          color: "#768293",
        }}
      >
        {title}
      </span>
      <span
        style={{ flexGrow: 1, height: "1.5px", backgroundColor: "#31373F" }}
        className={lineClassName}
      ></span>
    </div>
  );
}
